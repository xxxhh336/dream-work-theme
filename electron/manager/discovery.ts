import { exec, execFile } from 'child_process';
import { promisify } from 'util';
import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs';
import { APP_DEFINITIONS } from './app-registry';

const execAsync = promisify(exec);
const execFileAsync = promisify(execFile);

function findWindowsAppsOpenAIExes(): string[] {
  const results: string[] = [];
  const windowsApps = path.join(process.env.ProgramFiles || 'C:\\Program Files', 'WindowsApps');
  if (!fs.existsSync(windowsApps)) return results;
  try {
    const items = fs.readdirSync(windowsApps);
    for (const item of items) {
      if (/^OpenAI\.Codex_\d+/i.test(item)) {
        const candidate = path.join(windowsApps, item, 'app', 'ChatGPT.exe');
        if (fs.existsSync(candidate)) {
          results.push(candidate);
        }
      }
    }
  } catch {
    // ignore scan errors (WindowsApps ACL may block direct read)
  }
  return results;
}

async function findCodexAppx(): Promise<string | null> {
  const script = `
$ErrorActionPreference = 'SilentlyContinue'
$package = Get-AppxPackage -Name 'OpenAI.Codex' -ErrorAction SilentlyContinue
if (-not $package) { exit 1 }
$manifest = Get-AppxPackageManifest -Package $package.PackageFullName
$rel = [string]$manifest.Package.Applications.Application.Executable
if (-not $rel) { exit 1 }
$full = Join-Path $package.InstallLocation $rel
if (Test-Path -LiteralPath $full -PathType Leaf) { Write-Output $full } else { exit 1 }
`;
  try {
    const { stdout } = await execFileAsync(
      'powershell.exe',
      ['-NoLogo', '-NoProfile', '-NonInteractive', '-ExecutionPolicy', 'Bypass', '-Command', script],
      { encoding: 'utf8', maxBuffer: 4 * 1024 * 1024 },
    );
    const found = stdout.trim();
    if (found && fs.existsSync(found)) return found;
  } catch {
    // Appx not found or not accessible
  }
  return null;
}

export interface DiscoveredApp {
  appId: string;
  name: string;
  path: string;
  pid?: number;
}

export async function discoverApps(): Promise<DiscoveredApp[]> {
  const results: DiscoveredApp[] = [];

  for (const definition of APP_DEFINITIONS.filter(app => app.id !== 'codex')) {
    const found = findWindowsExecutable(definition.exeNames, definition.installPaths);
    if (found) results.push({ appId: definition.id, name: definition.name, path: found });
  }

  const codex = findWindowsExecutable(['Codex.exe', 'ChatGPT.exe'], [
    path.join(process.env.LOCALAPPDATA || '', 'Programs', 'Codex'),
    path.join(process.env.LOCALAPPDATA || '', 'Programs', 'OpenAI', 'Codex'),
    ...findWindowsAppsOpenAIExes(),
  ]);
  // Appx 安装的 Codex 可能没有传统 exe 路径，额外用 PowerShell 探测
  const codexAppx = !codex ? await findCodexAppx() : null;
  if (codexAppx) results.push({ appId: 'codex', name: 'Codex', path: codexAppx });
  else if (codex) results.push({ appId: 'codex', name: 'Codex', path: codex });

  return results;
}

function findWindowsExecutable(exeNames: string[], installPaths: string[]): string | null {
  for (const base of installPaths) {
    if (!base || !fs.existsSync(base)) continue;
    const baseItem = fs.statSync(base);
    if (baseItem.isFile() && exeNames.some(exe => path.basename(base).toLowerCase() === exe.toLowerCase())) return base;
    for (const exe of exeNames) {
      const direct = path.join(base, exe);
      if (fs.existsSync(direct)) return direct;
    }
    try {
      const versionDirs = fs.readdirSync(base, { withFileTypes: true })
        .filter(item => item.isDirectory())
        .sort((left, right) => right.name.localeCompare(left.name, undefined, { numeric: true }));
      for (const item of versionDirs) {
        for (const exe of exeNames) {
          const candidate = path.join(base, item.name, exe);
          if (fs.existsSync(candidate)) return candidate;
        }
      }
    } catch {}
  }
  return null;
}

async function findApp(appId: string, platforms: any): Promise<string | null> {
  const platform = os.platform();
  const platformConfig = platforms[platform];
  if (!platformConfig) return null;

  if (platform === 'win32') {
    for (const exe of platformConfig.exeNames) {
      for (const base of platformConfig.installPaths) {
        const full = path.join(base, exe);
        if (fs.existsSync(full)) return full;
      }
    }
    // Fallback: scan Program Files
    const scanDirs = [
      path.join(process.env.ProgramFiles || 'C:\\Program Files', ''),
      path.join(process.env['ProgramFiles(x86)'] || 'C:\\Program Files (x86)', ''),
    ];
    for (const dir of scanDirs) {
      if (!dir || !fs.existsSync(dir)) continue;
      try {
        const items = fs.readdirSync(dir);
        const match = items.find((item: string) => item.toLowerCase().includes(appId) || item.toLowerCase().includes('workbuddy') || item.toLowerCase().includes('openai'));
        if (match) {
          const full = path.join(dir, match);
          const exe = path.join(full, platformConfig.exeNames[0]);
          if (fs.existsSync(exe)) return exe;
        }
      } catch {}
    }
  } else if (platform === 'darwin') {
    // Try mdfind first
    try {
      const { stdout } = await execAsync(`mdfind 'kMDItemCFBundleIdentifier == "${platformConfig.bundleId}"' 2>/dev/null | head -1`);
      const found = stdout.trim();
      if (found && fs.existsSync(found)) return found;
    } catch {}
    // Fallback
    const fallback = `/Applications/${platformConfig.appName}`;
    if (fs.existsSync(fallback)) return fallback;
  } else if (platform === 'linux') {
    // Try desktop files first
    for (const desktop of platformConfig.desktopFiles) {
      const locations = [
        path.join(os.homedir(), '.local', 'share', 'applications', desktop),
        `/usr/share/applications/${desktop}`,
        `/usr/local/share/applications/${desktop}`,
      ];
      for (const loc of locations) {
        if (fs.existsSync(loc)) {
          const content = fs.readFileSync(loc, 'utf-8');
          const match = content.match(/^Exec=(.+)$/m);
          if (match) {
            const exe = match[1].split(' ')[0];
            if (exe.startsWith('/') && fs.existsSync(exe)) return exe;
            const which = await execAsync(`which ${exe} 2>/dev/null`).catch(() => ({ stdout: '' }));
            if (which.stdout && fs.existsSync(which.stdout.trim())) return which.stdout.trim();
          }
        }
      }
    }
    // Fallback: search common paths
    const exeNames = platformConfig.exeNames || [];
    const searchPaths = [
      '/usr/bin',
      '/usr/local/bin',
      '/opt',
      path.join(os.homedir(), '.local', 'bin'),
      '/snap/bin',
    ];
    for (const base of searchPaths) {
      if (!fs.existsSync(base)) continue;
      for (const exe of exeNames) {
        const full = path.join(base, exe);
        if (fs.existsSync(full)) return full;
      }
    }
  }
  return null;
}
