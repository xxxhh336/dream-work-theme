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
  windowsPathScopedKill?: boolean;
  acceptsGenericThemes: boolean;
  darwin?: { appBundles: string[]; executableNames: string[] };
  linux?: { executableNames: string[]; desktopFiles: string[] };
}

const localAppData = process.env.LOCALAPPDATA || path.join(os.homedir(), 'AppData', 'Local');
const roamingAppData = process.env.APPDATA || path.join(os.homedir(), 'AppData', 'Roaming');
const programFiles = process.env.ProgramFiles || 'C:\\Program Files';
const programFilesX86 = process.env['ProgramFiles(x86)'] || 'C:\\Program Files (x86)';

export const APP_DEFINITIONS: AppDefinition[] = [
  {
    id: 'workbuddy', name: 'WorkBuddy', exeNames: ['WorkBuddy.exe'], processName: 'WorkBuddy.exe', defaultPort: 9339,
    installPaths: [path.join(localAppData, 'workbuddy'), path.join(localAppData, 'Programs', 'workbuddy'), path.join(programFiles, 'WorkBuddy'), path.join(programFilesX86, 'WorkBuddy'), 'D:\\Program Files\\WorkBuddy'],
    rendererHints: ['app.asar/renderer/index.html', 'renderer/index.html', 'index.html'], kind: 'workbuddy', acceptsGenericThemes: true,
    darwin: { appBundles: ['WorkBuddy.app'], executableNames: ['WorkBuddy'] },
    linux: { executableNames: ['workbuddy', 'WorkBuddy'], desktopFiles: ['workbuddy.desktop'] },
  },
  {
    id: 'codex', name: 'Codex', exeNames: ['ChatGPT.exe', 'Codex.exe'], processName: 'ChatGPT.exe', defaultPort: 9340,
    installPaths: [path.join(localAppData, 'Programs', 'Codex'), path.join(localAppData, 'Programs', 'OpenAI', 'Codex'), path.join(programFiles, 'Codex'), path.join(programFilesX86, 'Codex'), 'D:\\Program Files\\Codex'],
    rendererHints: ['index.html', 'renderer/index.html'], kind: 'codex', acceptsGenericThemes: true,
    darwin: { appBundles: ['ChatGPT.app', 'Codex.app'], executableNames: ['ChatGPT', 'Codex'] },
    linux: { executableNames: ['codex', 'Codex'], desktopFiles: ['codex.desktop'] },
  },
  {
    id: 'trae-work', name: 'TRAE Work', exeNames: ['TRAE SOLO CN.exe', 'TRAE Work CN.exe'], processName: 'TRAE SOLO CN.exe', defaultPort: 9341,
    installPaths: ['D:\\Program Files\\TRAE SOLO CN', path.join(localAppData, 'Programs', 'TRAE SOLO CN'), path.join(programFiles, 'TRAE SOLO CN')],
    rendererHints: ['solo/solo-lite.html', 'solo-lite.html'], kind: 'vscode-work', acceptsGenericThemes: true,
    darwin: { appBundles: ['TRAE SOLO CN.app', 'TRAE Work CN.app', 'TRAE.app'], executableNames: ['TRAE SOLO CN', 'TRAE Work CN', 'TRAE'] },
    linux: { executableNames: ['trae', 'trae-work', 'TRAE'], desktopFiles: ['trae.desktop', 'trae-work.desktop'] },
  },
  {
    id: 'qoder-work', name: 'QoderWork', exeNames: ['QoderWork CN.exe', 'QoderWork.exe'], processName: 'QoderWork CN.exe', defaultPort: 9342,
    installPaths: ['D:\\Program Files\\QoderWork CN', path.join(localAppData, 'Programs', 'QoderWork CN'), path.join(programFiles, 'QoderWork CN')],
    rendererHints: ['out/renderer/index.html', 'renderer/index.html'], kind: 'generic-work',
    devToolsActivePort: path.join(roamingAppData, 'QoderWork CN', 'DevToolsActivePort'),
    acceptsGenericThemes: true,
    darwin: { appBundles: ['QoderWork CN.app', 'QoderWork.app'], executableNames: ['QoderWork CN', 'QoderWork'] },
    linux: { executableNames: ['qoder-work', 'qoderwork', 'QoderWork'], desktopFiles: ['qoder-work.desktop', 'qoderwork.desktop'] },
  },
  {
    id: 'catpaw', name: 'CatPaw', exeNames: ['CatPaw.exe'], processName: 'CatPaw.exe', defaultPort: 9343,
    installPaths: [path.join(localAppData, 'CatPaw'), path.join(localAppData, 'Programs', 'CatPaw'), path.join(programFiles, 'CatPaw')],
    rendererHints: ['app.asar/dist/index.html', 'dist/index.html'], kind: 'generic-work', acceptsGenericThemes: true,
    darwin: { appBundles: ['CatPaw.app'], executableNames: ['CatPaw'] },
    linux: { executableNames: ['catpaw', 'CatPaw'], desktopFiles: ['catpaw.desktop'] },
  },
  {
    id: 'zcode', name: 'ZCode', exeNames: ['ZCode.exe'], processName: 'ZCode.exe', defaultPort: 9344,
    installPaths: ['D:\\Program Files\\ZCode', path.join(localAppData, 'Programs', 'ZCode'), path.join(programFiles, 'ZCode')],
    rendererHints: ['out/renderer/index.html', 'renderer/index.html'], kind: 'generic-work', acceptsGenericThemes: true,
    darwin: { appBundles: ['ZCode.app'], executableNames: ['ZCode'] },
    linux: { executableNames: ['zcode', 'ZCode'], desktopFiles: ['zcode.desktop'] },
  },
  {
    id: 'qwen-office', name: '千问办公', exeNames: ['QwenWorkCN.exe'], processName: 'QwenWorkCN.exe', defaultPort: 9345,
    installPaths: ['D:\\Program Files\\QwenWorkCN', path.join(localAppData, 'Programs', 'QwenWorkCN'), path.join(programFiles, 'QwenWorkCN')],
    rendererHints: ['out/renderer/index.html', 'renderer/index.html'], kind: 'generic-work',
    devToolsActivePort: path.join(roamingAppData, 'QwenWorkCN', 'DevToolsActivePort'),
    acceptsGenericThemes: true,
    darwin: { appBundles: ['QwenWorkCN.app', 'Qwen Work.app'], executableNames: ['QwenWorkCN', 'Qwen Work'] },
    linux: { executableNames: ['qwen-work', 'qwenwork', 'QwenWorkCN'], desktopFiles: ['qwen-work.desktop', 'qwenwork.desktop'] },
  },
  {
    id: 'hana-agent', name: 'HanaAgent', exeNames: ['HanaAgent.exe'], processName: 'HanaAgent.exe', defaultPort: 9346,
    installPaths: [path.join(localAppData, 'Programs', 'HanaAgent'), path.join(programFiles, 'HanaAgent'), path.join(programFilesX86, 'HanaAgent')],
    rendererHints: ['.hanako/artifacts/renderer/', 'artifacts/renderer/', '/index.html'], kind: 'generic-work', acceptsGenericThemes: true,
    darwin: { appBundles: ['HanaAgent.app'], executableNames: ['HanaAgent'] },
    linux: { executableNames: ['hana-agent', 'HanaAgent'], desktopFiles: ['hana-agent.desktop'] },
  },
  {
    id: 'kimi', name: 'Kimi Work', exeNames: ['Kimi.exe'], processName: 'Kimi.exe', defaultPort: 9347,
    installPaths: ['D:\\Program Files\\Kimi', path.join(localAppData, 'Programs', 'Kimi'), path.join(programFiles, 'Kimi'), path.join(programFilesX86, 'Kimi')],
    rendererHints: ['kimi-agent.html', 'kimichat.html', 'https://www.kimi.com/'], kind: 'generic-work',
    devToolsActivePort: path.join(roamingAppData, 'kimi-desktop', 'DevToolsActivePort'),
    acceptsGenericThemes: true,
    darwin: { appBundles: ['Kimi.app'], executableNames: ['Kimi'] },
    linux: { executableNames: ['kimi', 'Kimi'], desktopFiles: ['kimi.desktop'] },
  },
  {
    id: 'opencode', name: 'OpenCode', exeNames: ['OpenCode.exe'], processName: 'OpenCode.exe', defaultPort: 9348,
    installPaths: [path.join(localAppData, 'Programs', '@opencode-aidesktop'), path.join(localAppData, 'Programs', 'OpenCode'), path.join(programFiles, 'OpenCode'), path.join(programFilesX86, 'OpenCode')],
    rendererHints: ['oc://renderer/index.html'], kind: 'generic-work',
    devToolsActivePort: path.join(roamingAppData, 'ai.opencode.desktop', 'DevToolsActivePort'),
    windowsPathScopedKill: true,
    acceptsGenericThemes: true,
    darwin: { appBundles: ['OpenCode.app'], executableNames: ['OpenCode'] },
    linux: { executableNames: ['opencode-desktop', 'OpenCode'], desktopFiles: ['opencode-desktop.desktop'] },
  },
  {
    id: 'doubao', name: '豆包', exeNames: ['Doubao.exe'], processName: 'Doubao.exe', defaultPort: 9349,
    installPaths: [path.join(localAppData, 'Doubao', 'Application', 'app'), path.join(localAppData, 'Doubao', 'Application'), path.join(programFiles, 'Doubao'), path.join(programFilesX86, 'Doubao')],
    rendererHints: ['doubao://doubao-chat/chat'], kind: 'generic-work',
    windowsPathScopedKill: true,
    acceptsGenericThemes: true,
    darwin: { appBundles: ['Doubao.app'], executableNames: ['Doubao'] },
    linux: { executableNames: ['doubao', 'Doubao'], desktopFiles: ['doubao.desktop'] },
  },
  {
    id: 'agnes-code', name: 'AgnesCode', exeNames: ['AgnesCode.exe'], processName: 'AgnesCode.exe', defaultPort: 9350,
    installPaths: ['D:\\Program Files\\AgnesCode', path.join(localAppData, 'Programs', 'AgnesCode'), path.join(programFiles, 'AgnesCode'), path.join(programFilesX86, 'AgnesCode')],
    rendererHints: ['app.asar/.vite/renderer/main_window/index.html'], kind: 'generic-work',
    windowsPathScopedKill: true,
    acceptsGenericThemes: true,
    darwin: { appBundles: ['AgnesCode.app'], executableNames: ['AgnesCode'] },
    linux: { executableNames: ['agnes-code', 'agnescode', 'AgnesCode'], desktopFiles: ['agnes-code.desktop', 'agnescode.desktop'] },
  },
  {
    id: 'minimax-code', name: 'MiniMax Code', exeNames: ['MiniMax Code.exe'], processName: 'MiniMax Code.exe', defaultPort: 9351,
    installPaths: ['D:\\Program Files\\MiniMax Code', path.join(localAppData, 'Programs', 'MiniMax Code'), path.join(programFiles, 'MiniMax Code'), path.join(programFilesX86, 'MiniMax Code')],
    rendererHints: ['app://./archon'], kind: 'generic-work',
    windowsPathScopedKill: true,
    acceptsGenericThemes: true,
    darwin: { appBundles: ['MiniMax Code.app'], executableNames: ['MiniMax Code'] },
    linux: { executableNames: ['minimax-code', 'MiniMax Code'], desktopFiles: ['minimax-code.desktop'] },
  },
  {
    id: 'astronclaw', name: 'AstronClaw', exeNames: ['AstronClaw.exe'], processName: 'AstronClaw.exe', defaultPort: 9352,
    installPaths: ['D:\\Program Files\\AstronClaw', path.join(localAppData, 'Programs', 'AstronClaw'), path.join(programFiles, 'AstronClaw'), path.join(programFilesX86, 'AstronClaw')],
    rendererHints: ['app.asar/out/renderer/index.html', 'out/renderer/index.html'], kind: 'generic-work',
    windowsPathScopedKill: true,
    acceptsGenericThemes: true,
    darwin: { appBundles: ['AstronClaw.app'], executableNames: ['AstronClaw'] },
    linux: { executableNames: ['astronclaw', 'AstronClaw'], desktopFiles: ['astronclaw.desktop'] },
  },
];

export function getAppDefinition(appId: string): AppDefinition | undefined {
  return APP_DEFINITIONS.find(app => app.id === appId);
}
