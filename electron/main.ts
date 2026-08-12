import { app, BrowserWindow, ipcMain, protocol, shell } from 'electron';
import * as path from 'path';
import * as fs from 'fs';
import { discoverApps } from './manager/discovery';
import { isAppRunning, launchApp } from './manager/launcher';
import { applyTheme, getStatus, removeSkin } from './manager/injector';
import { createShortcut } from './manager/shortcuts';
import { getThemeAssetPath, getThemeAssetUrl, listThemes } from './manager/theme-store';
import { getAppDefinition } from './manager/app-registry';
import { updateCommunityThemes } from './manager/theme-updater';

let mainWindow: BrowserWindow | null = null;

protocol.registerSchemesAsPrivileged([
  { scheme: 'theme-asset', privileges: { standard: true, secure: true, supportFetchAPI: true, stream: true } },
]);

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (process.env.VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, '../renderer/dist/index.html'));
  }
}

app.whenReady().then(() => {
  protocol.handle('theme-asset', (request) => {
    const id = decodeURIComponent(new URL(request.url).pathname.replace(/^\//, ''));
    const assetPath = getThemeAssetPath(id);
    if (!assetPath) return new Response('Theme asset not found', { status: 404 });
    return new Response(fs.readFileSync(assetPath), {
      headers: { 'Content-Type': getThemeAssetMime(assetPath), 'Cache-Control': 'public, max-age=3600' },
    });
  });
  createWindow();
});

function getThemeAssetMime(assetPath: string): string {
  const extension = path.extname(assetPath).toLowerCase();
  if (extension === '.jpg' || extension === '.jpeg') return 'image/jpeg';
  if (extension === '.webp') return 'image/webp';
  return 'image/png';
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// Handle --launch command line argument for shortcuts
const launchArgs = process.argv.find(arg => arg.startsWith('--launch='));
if (launchArgs) {
  const [, appAndTheme] = launchArgs.split('=');
  const [appId, themeId] = appAndTheme.split(':');
  if (appId && themeId) {
    console.log(`[main] Received launch args: ${appId}:${themeId}`);
    // Launch app with theme after a short delay to let Electron initialize
    setTimeout(async () => {
      try {
        const result = await launchApp(appId, themeId);
        if (result.success) {
          console.log(`[main] Launched ${appId} with theme ${themeId} on port ${result.port}`);
          console.log(`[main] Starting theme injection for ${appId}:${themeId} on port ${result.port}`);
          const injectResult = await applyTheme(appId, themeId, result.port!);
          console.log(`[main] Injection result:`, injectResult);
          // 注入已完成,皮肤已写入目标应用页面;CLI 启动场景下自动退出,不留 GUI 窗口
          setTimeout(() => app.quit(), 1500);
        } else {
          console.error(`[main] Failed to launch ${appId}: ${result.error}`);
          setTimeout(() => app.quit(), 1500);
        }
      } catch (e) {
        console.error('[main] Launch error:', e);
        setTimeout(() => app.quit(), 1500);
      }
    }, 1000);
  }
}

// IPC handlers
ipcMain.handle('discover-apps', async () => {
  return discoverApps();
});

ipcMain.handle('launch-app', async (_event, appId: string, themeId?: string) => {
  return launchApp(appId, themeId);
});

ipcMain.handle('apply-theme', async (_event, appId: string, themeId: string, port: number) => {
  return applyTheme(appId, themeId, port);
});

ipcMain.handle('create-shortcut', async (_event, profile: { appId: string; themeId: string; label: string }) => {
  const fullProfile = {
    ...profile,
    id: `${profile.appId}-${profile.themeId}-${Date.now()}`,
  };
  return createShortcut(fullProfile);
});

ipcMain.handle('list-themes', async (_event, appId?: string) => {
  return listThemes(appId).map(t => ({
    id: t.id,
    name: t.name,
    author: t.author,
    hero: getThemeAssetUrl(t.id),
  }));
});

ipcMain.handle('update-themes', async () => updateCommunityThemes());

ipcMain.handle('get-status', async (_event, appId: string, port: number) => {
  const running = await isAppRunning(appId);
  if (!running) return { installed: false, menu: false, targets: 0, running: false };
  return {
    ...await getStatus(appId, port || getAppDefinition(appId)?.defaultPort || 9339),
    running: true,
  };
});

ipcMain.handle('remove-skin', async (_event, appId: string, port: number) => {
  return removeSkin(appId, port);
});

ipcMain.handle('debug-targets', async (_event, port: number) => {
  try {
    const response = await fetch(`http://127.0.0.1:${port}/json/list`, {
      signal: AbortSignal.timeout(5000),
    });
    const all = await response.json();
    return {
      success: true,
      count: all.length,
      raw: all,
      targets: all.map((t: any) => ({
        id: t.id,
        type: t.type,
        url: t.url,
        title: t.title,
        webSocketDebuggerUrl: t.webSocketDebuggerUrl,
      })),
    };
  } catch (e: any) {
    return { success: false, error: e.message };
  }
});
