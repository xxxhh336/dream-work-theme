import { execFile } from 'child_process';
import { promisify } from 'util';
import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs';
import { APP_DEFINITIONS, AppDefinition } from './app-registry';

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
  const platform = os.platform();

  if (platform !== 'win32') {
    for (const definition of APP_DEFINITIONS) {
      const found = await findDefinitionOnCurrentPlatform(definition);
      if (found) results.push({ appId: definition.id, name: definition.name, path: found });
    }
    return results;
  }

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

async function findDefinitionOnCurrentPlatform(definition: AppDefinition): Promise<string | null> {
  const platform = os.platform();
  if (platform === 'darwin') {
    for (const bundleName of definition.darwin?.appBundles ?? []) {
      const bundlePath = path.join('/Applications', bundleName);
      if (fs.existsSync(bundlePath)) return bundlePath;
    }
    return null;
  }

  if (platform === 'linux') {
    for (const desktopFile of definition.linux?.desktopFiles ?? []) {
      const executablePath = await findLinuxDesktopExecutable(desktopFile);
      if (executablePath) return executablePath;
    }
    for (const executableName of definition.linux?.executableNames ?? []) {
      try {
        const { stdout } = await execFileAsync('which', [executableName], { encoding: 'utf8' });
        const executablePath = stdout.trim();
        if (executablePath && fs.existsSync(executablePath)) return executablePath;
      } catch {}
    }
  }
  return null;
}

async function findLinuxDesktopExecutable(desktopFile: string): Promise<string | null> {
  for (const desktopPath of [
    path.join(os.homedir(), '.local', 'share', 'applications', desktopFile),
    path.join('/usr/share/applications', desktopFile),
    path.join('/usr/local/share/applications', desktopFile),
  ]) {
    if (!fs.existsSync(desktopPath)) continue;
    const match = fs.readFileSync(desktopPath, 'utf8').match(/^Exec=(?:env\s+\S+=\S+\s+)*(?:"([^"]+)"|(\S+))/m);
    const executable = match?.[1] || match?.[2];
    if (!executable) continue;
    if (path.isAbsolute(executable) && fs.existsSync(executable)) return executable;
    try {
      const { stdout } = await execFileAsync('which', [executable], { encoding: 'utf8' });
      const resolved = stdout.trim();
      if (resolved && fs.existsSync(resolved)) return resolved;
    } catch {}
  }
  return null;
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
