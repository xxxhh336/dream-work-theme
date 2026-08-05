import React from 'react';
import { getAppInitials } from '../app-initials';

export interface AppInfo {
  appId: string;
  name: string;
  path: string;
}

interface StatusInfo {
  installed: boolean;
  menu: boolean;
  themeId?: string;
  targets?: number;
  running?: boolean;
}

interface SettingsProps {
  apps: AppInfo[];
  statuses: Record<string, StatusInfo>;
  onRefresh: () => void;
}

export function Settings({ apps, statuses, onRefresh }: SettingsProps) {
  return (
    <div className="fade-in">
      <div className="page-header">
        <h1 className="page-title">应用设置</h1>
        <p className="page-subtitle">查看已安装应用的状态和主题注入情况</p>
      </div>

      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '15px', fontWeight: 600 }}>已安装应用</h2>
          <button className="btn btn-ghost" onClick={onRefresh} style={{ padding: '6px 12px', fontSize: '12px' }}>
            🔄 刷新状态
          </button>
        </div>

        {apps.length === 0 ? (
          <div className="empty-state" style={{ padding: '24px' }}>
            <div className="empty-state-icon">🔍</div>
            <div className="empty-state-title">未检测到应用</div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {apps.map((app) => {
              const status = statuses[app.appId];
              return (
                <div
                  key={app.appId}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '14px',
                    background: 'var(--bg-surface)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div className="app-card-icon" style={{ flexShrink: 0 }}>
                    {getAppInitials(app.appId, app.name)}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '2px' }}>
                      {app.name}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>
                      {app.path}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '2px' }}>主题</div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: status?.installed ? 'var(--ok)' : 'var(--text-tertiary)' }}>
                        {status?.installed ? '已注入' : '未注入'}
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '2px' }}>菜单</div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: status?.menu ? 'var(--ok)' : 'var(--text-tertiary)' }}>
                        {status?.menu ? '显示中' : '隐藏'}
                      </div>
                    </div>
                    {status?.themeId && (
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '2px' }}>当前主题</div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent)' }}>
                          {status.themeId}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="card">
        <h2 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '12px' }}>关于</h2>
        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          <p style={{ marginBottom: '8px' }}>
            <strong style={{ color: 'var(--text)' }}>Dream Work Theme</strong> — 跨平台 Electron  Work 类应用主题切换工具，主题为纯视觉CSS+图片装饰不影响 Work 类应用功能使用。
          </p>
          <p style={{ marginBottom: '8px' }}>
            支持 WorkBuddy、TRAE Work 等桌面端 Work 类应用的主题切换，通过 CDP (Chrome DevTools Protocol) 实现运行时切换主题。
          </p>
          <p>
            更新主题文件位于 <code style={{ background: 'var(--bg-surface)', padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>%APPDATA%\dream-work-theme\themes</code> 目录，
            主题文件包含 <code style={{ background: 'var(--bg-surface)', padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>theme.json、theme.css</code> 和 hero 背景图。
          </p>
        </div>
      </div>
    </div>
  );
}
