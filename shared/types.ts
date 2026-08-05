export interface AppProfile {
  id: string;
  name: string;
  platforms: {
    darwin?: {
      bundleId: string;
      appName: string;
    };
    win32?: {
      exeNames: string[];
      installPaths: string[];
    };
    linux?: {
      exeNames: string[];
      desktopFiles: string[];
    };
  };
  cdp: {
    defaultPort: number;
    rendererUrlHint: string;
  };
  theme: {
    cssVariables: string[];
    shellAttr: string;
  };
}

export interface ThemeManifest {
  schemaVersion: 1;
  id: string;
  name: string;
  author: string;
  hero: string;
  colors: {
    accent: string;
    secondary: string;
    surface: string;
    text: string;
  };
  copy?: {
    brand?: string;
    headline?: string;
  };
  apps: Record<string, { compat: boolean; layout?: string }>;
}

export interface ShortcutProfile {
  id: string;
  appId: string;
  themeId: string;
  label: string;
  icon?: string;
}

export interface AppInstance {
  appId: string;
  pid: number;
  port: number;
  themeId?: string;
}
