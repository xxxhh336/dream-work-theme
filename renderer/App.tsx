import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Sidebar } from './components/Sidebar';
import { Gallery } from './pages/Gallery';
import { Settings } from './pages/Settings';
import './styles.css';

interface AppInfo {
  appId: string;
  name: string;
  path: string;
}

const APP_PORTS: Record<string, number> = {
  workbuddy: 9339,
  codex: 9340,
  'trae-work': 9341,
  'qoder-work': 9342,
  catpaw: 9343,
  zcode: 9344,
  'qwen-office': 9345,
  'hana-agent': 9346,
};

interface ThemeInfo {
  id: string;
  name: string;
  author: string;
  hero?: string;
}

interface StatusInfo {
  installed: boolean;
  menu: boolean;
  themeId?: string;
  targets?: number;
  port?: number;
  running?: boolean;
}

type Page = 'gallery' | 'settings';

function App() {
  const [page, setPage] = useState<Page>('gallery');
  const [apps, setApps] = useState<AppInfo[]>([]);
  const [themes, setThemes] = useState<ThemeInfo[]>([]);
  const [selectedApp, setSelectedApp] = useState<string | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [statuses, setStatuses] = useState<Record<string, StatusInfo>>({});
  const [applying, setApplying] = useState(false);
  const [updatingThemes, setUpdatingThemes] = useState(false);
  const [updateMessage, setUpdateMessage] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [ready, setReady] = useState(false);
  const appPorts = useRef<Record<string, number>>({ ...APP_PORTS });

  useEffect(() => {
    loadApps().then(() => {
      setReady(true);
      refreshStatuses();
    });
  }, []);

  useEffect(() => {
    loadThemes(selectedApp ?? undefined);
  }, [selectedApp]);

  const loadApps = async () => {
    try {
      const result = await window.dreamWork.discoverApps();
      setApps(result || []);
      if (result.length > 0 && !selectedApp) {
        setSelectedApp(result[0].appId);
      }
    } catch (e) {
      console.error('Failed to discover apps:', e);
    }
  };

  const loadThemes = async (appId?: string) => {
    try {
      const result = await window.dreamWork.listThemes(appId);
      setThemes(result || []);
    } catch (e) {
      console.error('Failed to load themes:', e);
    }
  };

  const refreshStatuses = useCallback(async () => {
    if (!apps.length) return;
    const results = await Promise.allSettled(apps.map(async (app) => {
      const status = await window.dreamWork.getStatus(app.appId, appPorts.current[app.appId] ?? 9339);
      return [app.appId, status] as const;
    }));
    setStatuses(current => {
      const next = { ...current };
      for (const result of results) {
        if (result.status === 'fulfilled') {
          const [appId, status] = result.value;
          if (current[appId]?.installed && status.running !== false && !status.installed) continue;
          next[appId] = status;
        }
      }
      return next;
    });
  }, [apps]);

  const handleApply = async (appId: string, themeId: string) => {
    setApplying(true);
    try {
      // First try to launch the app with the theme
      const launchResult = await window.dreamWork.launchApp(appId, themeId);
      if (launchResult.success && launchResult.port) {
        appPorts.current[appId] = launchResult.port;
        const applyResult = await window.dreamWork.applyTheme(appId, themeId, launchResult.port);
        if (applyResult.success) {
          setStatuses(current => ({ ...current, [appId]: { installed: true, menu: true, themeId, port: launchResult.port } }));
        }
      } else if (!launchResult.success && launchResult.error?.includes('already running')) {
        // App is already running, try to apply directly on default port
        const applyResult = await window.dreamWork.applyTheme(appId, themeId, APP_PORTS[appId] ?? 9339);
        if (applyResult.success) {
          setStatuses(current => ({ ...current, [appId]: { installed: true, menu: true, themeId, port: APP_PORTS[appId] ?? 9339 } }));
        }
      }
    } catch (e: any) {
      console.error('Apply failed:', e);
    } finally {
      setApplying(false);
    }
  };

  const handleRestore = async (appId: string) => {
    try {
      const result = await window.dreamWork.removeSkin(appId, appPorts.current[appId] ?? 9339);
      if (result.success) {
        setStatuses(current => ({
          ...current,
          [appId]: { installed: false, menu: false, port: appPorts.current[appId] ?? 9339 },
        }));
      }
    } catch (e) {
      console.error('Restore failed:', e);
    }
  };

  const handleUpdateThemes = async () => {
    setUpdatingThemes(true);
    try {
      const result = await window.dreamWork.updateThemes();
      await loadThemes(selectedApp ?? undefined);
      const failed = result.failed.length;
      const totalPages = Math.max(1, Math.ceil(result.total / 6));
      setUpdateMessage(`第 ${result.page}/${totalPages} 页：本页 ${result.checked} 主题，新增 ${result.imported} 主题，存在 ${result.skipped} 主题${failed ? `，失败 ${failed} 主题` : ''}`);
    } catch (error: any) {
      setUpdateMessage(`更新失败：${error?.message || String(error)}`);
    } finally {
      setUpdatingThemes(false);
    }
  };

  if (!ready) {
    return (
      <div className="app-loading">
        <div className="spinner" />
      </div>
    );
  }

  return (
    <div className={`app-shell ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <div className="titlebar">
        <span className="titlebar-title">Dream Work Theme</span>
      </div>

      <Sidebar
        activePage={page}
        onNavigate={(p) => setPage(p as Page)}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <main className="main">
        {page === 'gallery' && (
          <Gallery
            apps={apps}
            themes={themes}
            selectedApp={selectedApp}
            selectedTheme={selectedTheme}
            onSelectApp={setSelectedApp}
            onSelectTheme={setSelectedTheme}
            onApply={handleApply}
            onUpdateThemes={handleUpdateThemes}
            applying={applying}
            updatingThemes={updatingThemes}
            updateMessage={updateMessage}
          />
        )}
        {page === 'settings' && (
          <Settings
            apps={apps}
            statuses={statuses}
            onRefresh={refreshStatuses}
          />
        )}
      </main>
    </div>
  );
}

export default App;
