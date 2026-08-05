import { AppProfile } from '../../../shared/types';

export const codexProfile: AppProfile = {
  id: 'codex',
  name: 'Codex',
  platforms: {
    win32: {
      exeNames: ['Codex.exe', 'ChatGPT.exe'],
      installPaths: [
        'C:\\Program Files\\Codex',
        'C:\\Program Files (x86)\\Codex',
        'C:\\Program Files\\OpenAI',
        'C:\\Program Files (x86)\\OpenAI',
      ],
    },
    darwin: {
      bundleId: 'com.openai.codex',
      appName: 'ChatGPT.app',
    },
    linux: {
      exeNames: ['codex'],
      desktopFiles: ['codex.desktop'],
    },
  },
  cdp: {
    defaultPort: 9339,
    rendererUrlHint: 'renderer/index.html',
  },
  theme: {
    cssVariables: [
      '--ds-bg',
      '--ds-panel',
      '--ds-panel-2',
      '--ds-green',
      '--ds-lime',
      '--ds-cyan',
      '--ds-purple',
      '--ds-text',
      '--ds-muted',
      '--ds-line',
      '--ds-hero-height',
      '--ds-radius',
    ],
    shellAttr: 'data-dream-shell',
  },
};
