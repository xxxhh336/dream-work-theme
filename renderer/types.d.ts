export interface DreamWorkAPI {
  discoverApps: () => Promise<{ appId: string; name: string; path: string }[]>;
  launchApp: (appId: string, themeId?: string) => Promise<{ success: boolean; port?: number; error?: string }>;
  applyTheme: (appId: string, themeId: string, port: number) => Promise<{ success: boolean; applied: number; error?: string }>;
  removeSkin: (appId: string, port: number) => Promise<{ success: boolean }>;
  createShortcut: (profile: { appId: string; themeId: string; label: string }) => Promise<{ success: boolean; path?: string; error?: string }>;
  listThemes: (appId?: string) => Promise<{ id: string; name: string; author: string; hero?: string }[]>;
  updateThemes: () => Promise<{ checked: number; imported: number; skipped: number; offset: number; page: number; total: number; nextOffset: number; failed: Array<{ id: string; name: string; error: string }> }>;
  getStatus: (appId: string, port: number) => Promise<{ installed: boolean; menu: boolean; themeId?: string; targets?: number; running?: boolean }>;
  debugTargets: (port: number) => Promise<{ success: boolean; count?: number; targets?: any[]; error?: string }>;
}

declare global {
  interface Window {
    dreamWork: DreamWorkAPI;
  }
}

export {};
