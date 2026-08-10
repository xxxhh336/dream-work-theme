const WebSocket = require('ws');

const port = Number(process.argv[2] || 9351);
const requireVisible = process.argv.includes('--assert-visible');
const requirePanels = process.argv.includes('--assert-panels');
const requireRoutes = process.argv.includes('--assert-routes');
const clickText = process.argv.find(arg => arg.startsWith('--click-text='))?.slice('--click-text='.length);
const restoreTheme = process.argv.includes('--restore-theme');
const targetUrl = process.argv.find(arg => arg.startsWith('--target-url='))?.slice('--target-url='.length);
const targetIndex = Number(process.argv.find(arg => arg.startsWith('--target-index='))?.slice('--target-index='.length) || 0);
const assertNativeMode = process.argv.find(arg => arg.startsWith('--assert-native-mode='))?.slice('--assert-native-mode='.length);
const setNativeMode = process.argv.find(arg => arg.startsWith('--set-native-mode='))?.slice('--set-native-mode='.length);
const activateTheme = process.argv.find(arg => arg.startsWith('--activate-theme='))?.slice('--activate-theme='.length);

async function evaluate(webSocketDebuggerUrl, expression) {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(webSocketDebuggerUrl);
    const timer = setTimeout(() => {
      socket.close();
      reject(new Error('CDP evaluation timed out'));
    }, 10000);

    socket.on('open', () => {
      socket.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: { expression, returnByValue: true },
      }));
    });
    socket.on('message', data => {
      const message = JSON.parse(data.toString());
      if (message.id !== 1) return;
      clearTimeout(timer);
      socket.close();
      if (message.error || message.result?.exceptionDetails) {
        reject(new Error(JSON.stringify(message.error || message.result.exceptionDetails)));
        return;
      }
      resolve(message.result.result.value);
    });
    socket.on('error', reject);
  });
}

async function main() {
  const response = await fetch(`http://127.0.0.1:${port}/json/list`);
  const targets = await response.json();
  const matchingTargets = targets.filter(item => item.type === 'page' && (targetUrl ? item.url.includes(targetUrl) : item.url === 'app://./archon'));
  const target = matchingTargets[targetIndex];
  if (!target) throw new Error('Requested renderer was not found');

  if (clickText) {
    const clicked = await evaluate(target.webSocketDebuggerUrl, `(() => {
      const text = ${JSON.stringify(clickText)};
      const candidates = [...document.querySelectorAll('button, a, [role="button"], div, span')]
        .filter(element => element.textContent?.trim() === text && element.getBoundingClientRect().width > 0)
        .sort((left, right) => left.childElementCount - right.childElementCount);
      const element = candidates[0];
      if (!element) return false;
      element.click();
      return true;
    })()`);
    if (!clicked) throw new Error(`Could not find clickable text: ${clickText}`);
    await new Promise(resolve => setTimeout(resolve, 1500));
  }
  if (setNativeMode) {
    await evaluate(target.webSocketDebuggerUrl, `(() => {
      localStorage.setItem('theme', ${JSON.stringify(setNativeMode)});
      localStorage.setItem('use_system_theme', 'false');
      return true;
    })()`);
  }
  if (activateTheme) {
    const activated = await evaluate(target.webSocketDebuggerUrl, `(() => {
      if (!window.__dreamTheme?.activateTheme) return false;
      window.__dreamTheme.activateTheme(${JSON.stringify(activateTheme)});
      return true;
    })()`);
    if (!activated) throw new Error('Theme activation API was not found');
  }
  if (restoreTheme) {
    const restored = await evaluate(target.webSocketDebuggerUrl, `(() => {
      if (window.__dreamTheme?.restoreNative) {
        window.__dreamTheme.restoreNative();
        return true;
      }
      const host = document.getElementById('dream-work-menu-host') || document.getElementById('dream-work-menu');
      const candidates = [...(host?.shadowRoot?.querySelectorAll('div') || [])];
      const item = candidates.find(element => element.textContent?.trim() === '还原主题');
      if (!item) return false;
      item.click();
      return true;
    })()`);
    if (!restored) throw new Error('Could not find restore-theme menu item');
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  const result = await evaluate(target.webSocketDebuggerUrl, `(() => {
    const viewportArea = innerWidth * innerHeight;
    const elements = [...document.querySelectorAll('body *')].map(element => {
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      return {
        tag: element.tagName,
        id: element.id,
        className: String(element.className).slice(0, 200),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        area: Math.round(Math.max(0, rect.width) * Math.max(0, rect.height)),
        backgroundColor: style.backgroundColor,
        backgroundImage: style.backgroundImage,
      };
    });
    const blockers = elements.filter(item =>
      item.area >= viewportArea * 0.45 &&
      item.backgroundColor !== 'rgba(0, 0, 0, 0)' &&
      item.backgroundColor !== 'transparent'
    );
    const darkPanels = elements.filter(item => {
      if (item.backgroundColor === 'rgba(0, 0, 0, 0)' || item.backgroundColor === 'transparent') return false;
      const channels = item.backgroundColor.replace(/[^0-9,]/g, '').split(',').slice(0, 3).map(Number);
      if (!channels || channels.length < 3) return false;
      const luminance = channels[0] + channels[1] + channels[2];
      const sidebarSized = item.width >= 180 && item.width <= innerWidth * 0.4 && item.height >= innerHeight * 0.55;
      const composerSized = item.width >= innerWidth * 0.42 && item.height >= 70 && item.height <= innerHeight * 0.42;
      return luminance < 180 && (sidebarSized || composerSized);
    });
    const style = document.getElementById('dream-work-style');
    const htmlImage = getComputedStyle(document.documentElement).backgroundImage;
    const bodyImage = getComputedStyle(document.body).backgroundImage;
    const root = document.getElementById('root') || document.getElementById('__next');
    const rootImage = root ? getComputedStyle(root).backgroundImage : 'none';
    const shell = document.querySelector('div.relative.flex.h-screen.overflow-hidden.bg-bg_grouped_secondary');
    const inspectPoint = (x, y) => [...new Set(document.elementsFromPoint(x, y).flatMap(element => {
      const chain = [];
      for (let current = element; current && current !== document.documentElement; current = current.parentElement) chain.push(current);
      return chain;
    }))].slice(0, 30).map(element => {
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      const before = getComputedStyle(element, '::before');
      const after = getComputedStyle(element, '::after');
      return {
        tag: element.tagName,
        id: element.id,
        className: String(element.className).slice(0, 240),
        x: Math.round(rect.x),
        y: Math.round(rect.y),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        backgroundColor: style.backgroundColor,
        backgroundImage: style.backgroundImage,
        backdropFilter: style.backdropFilter,
        boxShadow: style.boxShadow,
        beforeBackground: before.background,
        afterBackground: after.background,
      };
    });
    const inspectElementChain = element => {
      if (!element) return [];
      const rect = element.getBoundingClientRect();
      return inspectPoint(rect.left + Math.max(1, rect.width / 2), rect.top + Math.max(1, rect.height / 2));
    };
    const editor = document.querySelector('textarea, [contenteditable="true"], input[type="text"]');
    const sidebar = document.querySelector('div[class~="bg-bg_default_scrim"][class~="z-50"][class~="select-none"]');
    const composerScrim = document.querySelector('div[class~="bg-bg_default_scrim"]:has(.message-input-container)');
    const composerSurface = document.querySelector('div[class~="bg-bg_grouped_secondary_elevated"]:has(.message-input-container)');
    const routeMain = document.querySelector('div.flex.h-full.w-full.overflow-hidden[class~="bg-bg_default_primary"]');
    const chatFooter = document.querySelector('div.absolute.inset-x-0.bottom-0.w-full[class~="bg-bg_grouped_secondary"]');
    const routeOverlay = document.querySelector('div.absolute.inset-0.z-10.flex.flex-col[class~="bg-bg_grouped_secondary"]');
    const panelState = element => element ? {
      backgroundColor: getComputedStyle(element).backgroundColor,
      backdropFilter: getComputedStyle(element).backdropFilter,
    } : null;
    const composer = document.querySelector('.message-input-container');
    const composerLayers = composer ? [...composer.parentElement.parentElement.children].map(element => ({
      className: String(element.className),
      backgroundColor: getComputedStyle(element).backgroundColor,
      borderColor: getComputedStyle(element).borderColor,
      borderRadius: getComputedStyle(element).borderRadius,
      boxShadow: getComputedStyle(element).boxShadow,
      backdropFilter: getComputedStyle(element).backdropFilter,
    })) : [];
    return {
      themeId: document.documentElement.dataset.dreamTheme || null,
      mode: {
        htmlClasses: Array.from(document.documentElement.classList),
        bodyClasses: Array.from(document.body.classList),
        colorScheme: document.documentElement.style.colorScheme,
        bodyThemeKind: document.body.dataset.vscodeThemeKind || null,
        bodyThemeName: document.body.dataset.vscodeThemeName || null,
      },
      dreamNodes: [...document.querySelectorAll('[id*="dream-work"]')].map(element => ({
        id: element.id,
        hasShadowRoot: Boolean(element.shadowRoot),
        text: (element.shadowRoot?.textContent || element.textContent || '').slice(0, 300),
      })),
      nativeThemeSignals: {
        storage: (() => {
          const values = {};
          for (let index = 0; index < localStorage.length; index++) {
            const key = localStorage.key(index);
            if (key && /(theme|dark|light|mode|appearance|color)/i.test(key)) values[key] = localStorage.getItem(key);
          }
          return values;
        })(),
        rootVariables: (() => {
          const style = getComputedStyle(document.documentElement);
          const names = ['--agnes-sidebar', '--agnes-sidebar-panel', '--agnes-surface', '--color-background-secondary', '--color-bg-grouped-secondary', '--color-bg-primary', '--color-bg-secondary'];
          return Object.fromEntries(names.map(name => [name, style.getPropertyValue(name).trim()]));
        })(),
        mediaDark: matchMedia('(prefers-color-scheme: dark)').matches,
      },
      styleInstalled: Boolean(style?.textContent),
      miniMaxCssInstalled: Boolean(style?.textContent.includes('bg-bg_grouped_secondary')),
      htmlImage,
      bodyImage,
      rootImage,
      shell: shell ? {
        parentTag: shell.parentElement?.tagName || null,
        parentId: shell.parentElement?.id || null,
        parentClassName: String(shell.parentElement?.className || ''),
        matchesDirectBody: shell.matches('body > div.relative.flex.h-screen.overflow-hidden'),
        matchesBodyDescendant: shell.matches('body div.relative.flex.h-screen.overflow-hidden'),
      } : null,
      blockers: blockers.slice(0, 30),
      darkPanels: darkPanels.slice(0, 50),
      sidebarStack: inspectPoint(Math.min(120, innerWidth * 0.12), innerHeight * 0.5),
      composerStack: inspectPoint(innerWidth * 0.62, innerHeight - 90),
      rightMainStack: inspectPoint(innerWidth * 0.72, innerHeight * 0.45),
      bottomMainStack: inspectPoint(innerWidth * 0.62, innerHeight - 35),
      editorStack: inspectElementChain(editor),
      composerDetails: composer ? {
        className: composer.className,
        parentClassName: composer.parentElement?.className || '',
        grandparentClassName: composer.parentElement?.parentElement?.className || '',
        layers: composerLayers,
      } : null,
      composerMatchesChat: composer ? (() => {
        const surface = composer.closest('div[class~="bg-bg_grouped_secondary_elevated"]');
        const scrim = surface?.parentElement;
        const surfaceStyle = surface ? getComputedStyle(surface) : null;
        return Boolean(surface && scrim && surfaceStyle) &&
          Math.round(surface.getBoundingClientRect().width) === 768 &&
          Math.round(scrim.getBoundingClientRect().width) === 768 &&
          surfaceStyle.borderRadius === '20px' &&
          surfaceStyle.backdropFilter === 'blur(16px) saturate(1.08)';
      })() : false,
      route: {
        href: location.href,
        pathname: location.pathname,
        bodyText: document.body.innerText.slice(0, 500),
      },
      panels: {
        sidebar: panelState(sidebar),
        composerScrim: panelState(composerScrim),
        composerSurface: panelState(composerSurface),
        routeMain: panelState(routeMain),
        chatFooter: panelState(chatFooter),
        routeOverlay: panelState(routeOverlay),
      },
      panelsReady: [sidebar, composerScrim].every(element =>
        element && ['rgba(0, 0, 0, 0)', 'transparent'].includes(getComputedStyle(element).backgroundColor)
      ) && Boolean(composerSurface) && getComputedStyle(composerSurface).backgroundColor !== 'rgb(38, 38, 38)',
      routesReady: [routeMain, chatFooter, routeOverlay].filter(Boolean).length > 0 &&
        [routeMain, chatFooter, routeOverlay].filter(Boolean).every(element =>
        ['rgba(0, 0, 0, 0)', 'transparent'].includes(getComputedStyle(element).backgroundColor)
      ),
      visible: Boolean(style?.textContent) &&
        (htmlImage !== 'none' || bodyImage !== 'none' || rootImage !== 'none') &&
        blockers.length === 0,
    };
  })()`);

  console.log(JSON.stringify(result, null, 2));
  if (requireVisible && !result.visible) process.exitCode = 1;
  if (requirePanels && !result.panelsReady) process.exitCode = 1;
  if (requireRoutes && !result.routesReady) process.exitCode = 1;
  if (assertNativeMode) {
    const expectedDark = assertNativeMode === 'dark';
    const htmlClasses = result.mode.htmlClasses;
    const correctClass = expectedDark ? htmlClasses.includes('dark') && !htmlClasses.includes('light') : htmlClasses.includes('light') && !htmlClasses.includes('dark');
    const correctScheme = result.mode.colorScheme === assertNativeMode;
    const noInjectedMode = !result.mode.bodyClasses.some(className => ['light', 'vscode-light', 'cb-light', 'dark', 'vscode-dark', 'cb-dark'].includes(className));
    if (!correctClass || !correctScheme || !noInjectedMode) process.exitCode = 1;
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
