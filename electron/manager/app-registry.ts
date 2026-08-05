import * as os from 'os';
import * as path from 'path';

export interface AppDefinition {
  id: string;
  name: string;
  exeNames: string[];
  installPaths: string[];
  processName: string;
  defaultPort: number;
  rendererHints: string[];
  kind: 'workbuddy' | 'codex' | 'vscode-work' | 'generic-work';
  devToolsActivePort?: string;
}

const localAppData = process.env.LOCALAPPDATA || path.join(os.homedir(), 'AppData', 'Local');
const roamingAppData = process.env.APPDATA || path.join(os.homedir(), 'AppData', 'Roaming');
const programFiles = process.env.ProgramFiles || 'C:\\Program Files';
const programFilesX86 = process.env['ProgramFiles(x86)'] || 'C:\\Program Files (x86)';

export const APP_DEFINITIONS: AppDefinition[] = [
  {
    id: 'workbuddy', name: 'WorkBuddy', exeNames: ['WorkBuddy.exe'], processName: 'WorkBuddy.exe', defaultPort: 9339,
    installPaths: [path.join(localAppData, 'workbuddy'), path.join(localAppData, 'Programs', 'workbuddy'), path.join(programFiles, 'WorkBuddy'), path.join(programFilesX86, 'WorkBuddy'), 'D:\\Program Files\\WorkBuddy'],
    rendererHints: ['app.asar/renderer/index.html', 'renderer/index.html', 'index.html'], kind: 'workbuddy',
  },
  {
    id: 'codex', name: 'Codex', exeNames: ['ChatGPT.exe', 'Codex.exe'], processName: 'ChatGPT.exe', defaultPort: 9340,
    installPaths: [path.join(localAppData, 'Programs', 'Codex'), path.join(localAppData, 'Programs', 'OpenAI', 'Codex'), path.join(programFiles, 'Codex'), path.join(programFilesX86, 'Codex'), 'D:\\Program Files\\Codex'],
    rendererHints: ['index.html', 'renderer/index.html'], kind: 'codex',
  },
  {
    id: 'trae-work', name: 'TRAE Work', exeNames: ['TRAE SOLO CN.exe', 'TRAE Work CN.exe'], processName: 'TRAE SOLO CN.exe', defaultPort: 9341,
    installPaths: ['D:\\Program Files\\TRAE SOLO CN', path.join(localAppData, 'Programs', 'TRAE SOLO CN'), path.join(programFiles, 'TRAE SOLO CN')],
    rendererHints: ['solo/solo-lite.html', 'solo-lite.html'], kind: 'vscode-work',
  },
  {
    id: 'qoder-work', name: 'QoderWork', exeNames: ['QoderWork CN.exe', 'QoderWork.exe'], processName: 'QoderWork CN.exe', defaultPort: 9342,
    installPaths: ['D:\\Program Files\\QoderWork CN', path.join(localAppData, 'Programs', 'QoderWork CN'), path.join(programFiles, 'QoderWork CN')],
    rendererHints: ['out/renderer/index.html', 'renderer/index.html'], kind: 'generic-work',
    devToolsActivePort: path.join(roamingAppData, 'QoderWork CN', 'DevToolsActivePort'),
  },
  {
    id: 'catpaw', name: 'CatPaw', exeNames: ['CatPaw.exe'], processName: 'CatPaw.exe', defaultPort: 9343,
    installPaths: [path.join(localAppData, 'CatPaw'), path.join(localAppData, 'Programs', 'CatPaw'), path.join(programFiles, 'CatPaw')],
    rendererHints: ['app.asar/dist/index.html', 'dist/index.html'], kind: 'generic-work',
  },
  {
    id: 'zcode', name: 'ZCode', exeNames: ['ZCode.exe'], processName: 'ZCode.exe', defaultPort: 9344,
    installPaths: ['D:\\Program Files\\ZCode', path.join(localAppData, 'Programs', 'ZCode'), path.join(programFiles, 'ZCode')],
    rendererHints: ['out/renderer/index.html', 'renderer/index.html'], kind: 'generic-work',
  },
  {
    id: 'qwen-office', name: '千问办公', exeNames: ['QwenWorkCN.exe'], processName: 'QwenWorkCN.exe', defaultPort: 9345,
    installPaths: ['D:\\Program Files\\QwenWorkCN', path.join(localAppData, 'Programs', 'QwenWorkCN'), path.join(programFiles, 'QwenWorkCN')],
    rendererHints: ['out/renderer/index.html', 'renderer/index.html'], kind: 'generic-work',
    devToolsActivePort: path.join(roamingAppData, 'QwenWorkCN', 'DevToolsActivePort'),
  },
];

export function getAppDefinition(appId: string): AppDefinition | undefined {
  return APP_DEFINITIONS.find(app => app.id === appId);
}
