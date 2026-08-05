import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('dreamWork', {
  discoverApps: () => ipcRenderer.invoke('discover-apps'),
  launchApp: (appId: string, themeId?: string) => ipcRenderer.invoke('launch-app', appId, themeId),
  applyTheme: (appId: string, themeId: string, port: number) => ipcRenderer.invoke('apply-theme', appId, themeId, port),
  removeSkin: (appId: string, port: number) => ipcRenderer.invoke('remove-skin', appId, port),
  createShortcut: (profile: { appId: string; themeId: string; label: string }) => ipcRenderer.invoke('create-shortcut', profile),
  listThemes: (appId?: string) => ipcRenderer.invoke('list-themes', appId),
  updateThemes: () => ipcRenderer.invoke('update-themes'),
  getStatus: (appId: string, port: number) => ipcRenderer.invoke('get-status', appId, port),
  debugTargets: (port: number) => ipcRenderer.invoke('debug-targets', port),
});
