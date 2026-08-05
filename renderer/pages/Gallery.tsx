import React, { useState, useEffect } from 'react';
import { getAppInitials } from '../app-initials';

const THEMES_PER_PAGE = 12;

export interface ThemeInfo {
  id: string;
  name: string;
  author: string;
  hero?: string;
}

export interface AppInfo {
  appId: string;
  name: string;
  path: string;
}

interface GalleryProps {
  apps: AppInfo[];
  themes: ThemeInfo[];
  selectedApp: string | null;
  selectedTheme: string | null;
  onSelectApp: (appId: string) => void;
  onSelectTheme: (themeId: string) => void;
  onApply: (appId: string, themeId: string) => void;
  onUpdateThemes: () => void;
  applying: boolean;
  updatingThemes: boolean;
  updateMessage?: string;
}

export function Gallery({
  apps,
  themes,
  selectedApp,
  selectedTheme,
  onSelectApp,
  onSelectTheme,
  onApply,
  onUpdateThemes,
  applying,
  updatingThemes,
  updateMessage,
}: GalleryProps) {
  const [themePage, setThemePage] = useState(1);
  const canApply = selectedApp && selectedTheme && themes.some((theme) => theme.id === selectedTheme) && !applying;
  const totalPages = Math.max(1, Math.ceil(themes.length / THEMES_PER_PAGE));
  const pageStart = (themePage - 1) * THEMES_PER_PAGE;
  const visibleThemes = themes.slice(pageStart, pageStart + THEMES_PER_PAGE);

  useEffect(() => {
    if (!selectedTheme) return;
    const selectedIndex = themes.findIndex((theme) => theme.id === selectedTheme);
    if (selectedIndex >= 0) setThemePage(Math.floor(selectedIndex / THEMES_PER_PAGE) + 1);
  }, [selectedTheme, themes]);

  useEffect(() => {
    if (themePage > totalPages) setThemePage(totalPages);
  }, [themePage, totalPages]);

  return (
    <div className="fade-in">
      <div className="page-header">
        <h1 className="page-title">主题画廊</h1>
        <p className="page-subtitle">选择一个应用和主题，点击应用即可换肤</p>
      </div>

      {/* App Selection */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          选择应用
        </h2>
        {apps.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">💻</div>
            <div className="empty-state-title">未检测到支持的应用</div>
            <div className="empty-state-desc">
              请确保受支持的 Work 类桌面应用已安装
            </div>
          </div>
        ) : (
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
            {apps.map((app) => (
              <div
                key={app.appId}
                className={`app-card ${selectedApp === app.appId ? 'selected' : ''}`}
                onClick={() => onSelectApp(app.appId)}
              >
                <div className="app-card-icon">
                  {getAppInitials(app.appId, app.name)}
                </div>
                <div className="app-card-info">
                  <div className="app-card-name">{app.name}</div>
                  <div className="app-card-status">
                    <span className="status-dot installed" />
                    已安装{app.appId}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Theme Selection */}
      <section>
        <div className="section-heading-row">
          <h2 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            选择主题
          </h2>
          {themes.length > 0 && <span className="theme-count">共 {themes.length} 套</span>}
        </div>
        {themes.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">🎨</div>
            <div className="empty-state-title">暂无主题</div>
            <div className="empty-state-desc">
               themes 目录下没有可用的主题包
            </div>
          </div>
        ) : (
          <div className="card-grid theme-grid">
            {visibleThemes.map((theme) => (
              <div
                key={theme.id}
                className={`theme-card ${selectedTheme === theme.id ? 'selected' : ''}`}
                onClick={() => onSelectTheme(theme.id)}
              >
                {theme.hero && (
                  <img
                    src={theme.hero}
                    alt={theme.name}
                    className="theme-card-preview"
                  />
                )}
                {!theme.hero && (
                  <div className="theme-card-preview" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    background: 'linear-gradient(135deg, var(--bg-surface), var(--bg-hover))'
                  }}>
                    🎨
                  </div>
                )}
                <div className="theme-card-body">
                  <div className="theme-card-name">{theme.name}</div>
                  <div className="theme-card-author">by {theme.author}</div>
                </div>
                {selectedTheme === theme.id && (
                  <div className="theme-card-badge">已选择</div>
                )}
              </div>
            ))}
          </div>
        )}
        {themes.length > THEMES_PER_PAGE && (
          <nav className="pagination" aria-label="主题分页">
            <button className="pagination-button" disabled={themePage === 1} onClick={() => setThemePage(1)}>首页</button>
            <button className="pagination-button" disabled={themePage === 1} onClick={() => setThemePage((page) => Math.max(1, page - 1))}>上一页</button>
            <div className="pagination-pages">
              {getVisiblePages(themePage, totalPages).map((page, index) => page === 'ellipsis' ? (
                <span className="pagination-ellipsis" key={`ellipsis-${index}`}>...</span>
              ) : (
                <button
                  className={`pagination-page ${themePage === page ? 'active' : ''}`}
                  key={page}
                  onClick={() => setThemePage(page)}
                  aria-current={themePage === page ? 'page' : undefined}
                >
                  {page}
                </button>
              ))}
            </div>
            <span className="pagination-status">第 {themePage} / {totalPages} 页</span>
            <button className="pagination-button" disabled={themePage === totalPages} onClick={() => setThemePage((page) => Math.min(totalPages, page + 1))}>下一页</button>
            <button className="pagination-button" disabled={themePage === totalPages} onClick={() => setThemePage(totalPages)}>末页</button>
          </nav>
        )}
      </section>

      {/* Actions */}
      <div className="actions-bar">
        <button
          className="btn btn-primary"
          disabled={!canApply}
          onClick={() => {
            if (selectedApp && selectedTheme) {
              onApply(selectedApp, selectedTheme);
            }
          }}
        >
          {applying ? (
            <>
              <span className="spinner" style={{ width: 16, height: 16, borderWidth: 2 }} />
              应用主题...
            </>
          ) : (
            <>应用主题</>
          )}
        </button>

        <button
          className="btn btn-ghost"
          disabled={updatingThemes}
          onClick={onUpdateThemes}
        >
          {updatingThemes ? (
            <>
              <span className="spinner" style={{ width: 16, height: 16, borderWidth: 2 }} />
              更新主题...
            </>
          ) : (
            <>更新主题</>
          )}
        </button>
        {updateMessage && <span className="theme-update-message">{updateMessage}</span>}
      </div>
    </div>
  );
}

function getVisiblePages(currentPage: number, totalPages: number): Array<number | 'ellipsis'> {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, index) => index + 1);
  const pages = new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1]);
  const sorted = [...pages].filter((page) => page >= 1 && page <= totalPages).sort((left, right) => left - right);
  const result: Array<number | 'ellipsis'> = [];
  for (const page of sorted) {
    const previous = result[result.length - 1];
    if (typeof previous === 'number' && page - previous > 1) result.push('ellipsis');
    result.push(page);
  }
  return result;
}
