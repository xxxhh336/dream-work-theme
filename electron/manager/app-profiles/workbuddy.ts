import { AppProfile } from '../../../shared/types';

export const workbuddyProfile: AppProfile = {
  id: 'workbuddy',
  name: 'WorkBuddy',
  platforms: {
    win32: {
      exeNames: ['WorkBuddy.exe'],
      installPaths: [
        'C:\\Program Files\\WorkBuddy',
        'C:\\Program Files (x86)\\WorkBuddy',
        // Will be expanded by discovery.ts
      ],
    },
    darwin: {
      bundleId: 'com.workbuddy.workbuddy',
      appName: 'WorkBuddy.app',
    },
    linux: {
      exeNames: ['workbuddy'],
      desktopFiles: ['workbuddy.desktop'],
    },
  },
  cdp: {
    defaultPort: 9339,
    rendererUrlHint: 'renderer/index.html',
  },
  theme: {
    cssVariables: [
      '--cb-bg-primary',
      '--cb-bg-secondary',
      '--cb-panel-bg-primary',
      '--cb-text-primary',
      '--cb-text-secondary',
      '--cb-text-link',
      '--cb-vscode-editor-background',
      '--cb-vscode-sideBar-background',
      '--cb-vscode-foreground',
      '--cb-vscode-titleBar-activeBackground',
      '--cb-vscode-button-background',
      '--cb-vscode-button-foreground',
    ],
    shellAttr: 'data-application-name',
  },
};
