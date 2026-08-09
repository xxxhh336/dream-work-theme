import { execFile, spawn } from 'child_process';
import { promisify } from 'util';
import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs';
import * as http from 'http';
import * as net from 'net';
import { getAppDefinition } from './app-registry';

const execFileAsync = promisify(execFile);

export async function isAppRunning(appId: string): Promise<boolean> {
  const definition = getAppDefinition(appId);
  if (!definition) return false;
  const processNames = getPlatformProcessNames(definition);

  if (os.platform() === 'win32') {
    for (const processName of processNames) {
      try {
        const { stdout } = await execFileAsync('tasklist.exe', [
          '/FI', `IMAGENAME eq ${processName}`,
          '/FO', 'CSV',
          '/NH',
        ], { encoding: 'utf8', windowsHide: true });
        if (stdout.split(/\r?\n/).some(line => line.trim().toLowerCase().startsWith(`"${processName.toLowerCase()}"`))) {
          return true;
        }
      } catch {}
    }
    return false;
  }

  for (const processName of processNames) {
    try {
      await execFileAsync('pgrep', ['-f', processName], { encoding: 'utf8' });
      return true;
    } catch {}
  }
  return false;
}

export async function launchApp(appId: string, themeId?: string): Promise<{ success: boolean; port?: number; error?: string }> {
  const profile = getAppDefinition(appId);
  if (!profile) return { success: false, error: `Unknown app: ${appId}` };

  const port = profile.defaultPort;
  const args = [`--remote-debugging-port=${port}`];

  // Disable extensions for Codex to avoid plugin sync crashes that block CDP.
  if (appId === 'codex') {
    args.push('--disable-extensions');
  }

  if (themeId && appId !== 'kimi') {
    args.push(`--dream-theme=${themeId}`);
  }

  try {
    const appPath = getAppPath(appId);
    
    // Kill existing instances to ensure fresh launch with debug port
    console.log(`[launcher] Killing existing ${appId} instances...`);
    await killExistingInstances(appId, appPath);
    await waitForPortToClose(port, 15000);

    const devToolsActivePort = os.platform() === 'win32' ? profile.devToolsActivePort : undefined;
    if (devToolsActivePort) {
      try { fs.unlinkSync(devToolsActivePort); } catch {}
    }
    
    console.log(`[launcher] Launching ${appPath} with args: ${args.join(' ')}`);
    const pid = appId === 'kimi' && os.platform() === 'win32'
      ? await launchKimiDetached(appPath, args)
      : launchDetached(appPath, args);

    console.log(`[launcher] Spawned process${pid ? ` with PID: ${pid}` : ''}`);

    // Wait for CDP port to be ready
    console.log(`[launcher] Waiting for CDP port ${port} to be ready...`);
    let actualPort = port;
    if (devToolsActivePort) {
      actualPort = await waitForDevToolsActivePort(devToolsActivePort, profile.rendererHints, 30000);
    } else {
      await waitForPort(port, 30000);
    }
    console.log(`[launcher] CDP port ${actualPort} is ready`);

    if (appId === 'hana-agent' || appId === 'kimi') {
      await waitForStableRenderer(actualPort, profile.rendererHints, 30000, appId === 'kimi' ? 750 : 3000);
    }

    return { success: true, port: actualPort };
  } catch (error: any) {
    console.error(`[launcher] Launch failed:`, error);
    return { success: false, error: error.message };
  }
}

function launchDetached(appPath: string, args: string[]): number | undefined {
  const child = spawn(appPath, args, {
    detached: true,
    stdio: 'ignore',
    env: getCleanLaunchEnvironment(),
  });
  child.unref();
  return child.pid;
}

async function launchKimiDetached(appPath: string, args: string[]): Promise<undefined> {
  const shortcutPath = path.join(os.tmpdir(), `dream-work-kimi-${process.pid}-${Date.now()}.lnk`);
  const env = {
    ...getCleanLaunchEnvironment(),
    DREAM_WORK_LAUNCH_EXE: appPath,
    DREAM_WORK_LAUNCH_ARGS: JSON.stringify(args),
    DREAM_WORK_LAUNCH_CWD: path.dirname(appPath),
    DREAM_WORK_LAUNCH_SHORTCUT: shortcutPath,
  };
  const script = [
    '[string[]]$launchArgs = @($env:DREAM_WORK_LAUNCH_ARGS | ConvertFrom-Json)',
    '$shell = New-Object -ComObject WScript.Shell',
    '$shortcut = $shell.CreateShortcut($env:DREAM_WORK_LAUNCH_SHORTCUT)',
    '$shortcut.TargetPath = $env:DREAM_WORK_LAUNCH_EXE',
    "$shortcut.Arguments = [string]::Join(' ', $launchArgs)",
    '$shortcut.WorkingDirectory = $env:DREAM_WORK_LAUNCH_CWD',
    '$shortcut.Save()',
  ].join('; ');

  // Kimi disables app:// when launched under Node, Electron, or PowerShell because
  // it mistakes them for a development supervisor. Create the shortcut first, then
  // let the existing Windows shell become Kimi's actual parent process.
  await execFileAsync('powershell.exe', [
    '-NoLogo',
    '-NoProfile',
    '-NonInteractive',
    '-ExecutionPolicy',
    'Bypass',
    '-Command',
    script,
  ], { env, windowsHide: true });

  const explorer = spawn(path.join(process.env.WINDIR || 'C:\\Windows', 'explorer.exe'), [shortcutPath], {
    detached: true,
    stdio: 'ignore',
    env: getCleanLaunchEnvironment(),
  });
  explorer.unref();
  const cleanupTimer = setTimeout(() => {
    try { fs.unlinkSync(shortcutPath); } catch {}
  }, 15000);
  cleanupTimer.unref();
  return undefined;
}

function getCleanLaunchEnvironment(): NodeJS.ProcessEnv {
  const env = { ...process.env };
  for (const key of [
    'VITE_DEV_SERVER_URL',
    'ELECTRON_RENDERER_URL',
    'MAIN_VITE_DEV_SERVER_URL',
    'ELECTRON_RUN_AS_NODE',
  ]) {
    delete env[key];
  }
  return env;
}

function getPlatformProcessNames(definition: NonNullable<ReturnType<typeof getAppDefinition>>): string[] {
  if (os.platform() === 'darwin') return definition.darwin?.executableNames ?? [];
  if (os.platform() === 'linux') return definition.linux?.executableNames ?? [];
  return [...new Set([definition.processName, ...definition.exeNames].filter(Boolean))];
}

async function waitForDevToolsActivePort(filePath: string, rendererHints: string[], timeoutMs: number): Promise<number> {
  const start = Date.now();
  let lastPort = 0;
  while (Date.now() - start < timeoutMs) {
    try {
      const firstLine = fs.readFileSync(filePath, 'utf8').split(/\r?\n/, 1)[0];
      const port = Number(firstLine);
      if (Number.isInteger(port) && port > 0) {
        lastPort = port;
        await verifyRendererEndpoint(port, rendererHints, 3000);
        return port;
      }
    } catch {}
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  throw new Error(`DevToolsActivePort did not expose a live renderer${lastPort ? ` on port ${lastPort}` : ''}: ${filePath}`);
}

async function verifyRendererEndpoint(port: number, rendererHints: string[], timeoutMs: number): Promise<void> {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/list`, { signal: AbortSignal.timeout(1000) });
      if (response.ok) {
        const targets = await response.json() as any[];
        if (Array.isArray(targets) && targets.some(target => target?.type === 'page' && rendererHints.some(hint => String(target.url).includes(hint)))) return;
      }
    } catch {}
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  throw new Error(`CDP renderer endpoint is not ready on port ${port}`);
}

async function waitForStableRenderer(port: number, rendererHints: string[], timeoutMs: number, stableMs: number): Promise<void> {
  const startedAt = Date.now();
  let stableId = '';
  let stableSince = 0;

  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/list`, { signal: AbortSignal.timeout(1000) });
      const targets = await response.json() as any[];
      const target = targets.find(item => item?.type === 'page' && rendererHints.some(hint => String(item.url).includes(hint)));
      if (target?.id) {
        if (target.id !== stableId) {
          stableId = target.id;
          stableSince = Date.now();
        } else if (Date.now() - stableSince >= stableMs) {
          console.log(`[launcher] Stable renderer ${stableId} confirmed`);
          return;
        }
      }
    } catch {}
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  throw new Error(`Renderer did not stabilize on port ${port}`);
}

function findAvailablePort(startPort: number): number {
  for (let port = startPort; port <= startPort + 100; port++) {
    const server = net.createServer();
    let portTaken = false;
    server.once('error', () => {
      portTaken = true;
      server.close();
    });
    server.once('listening', () => {
      server.close();
    });
    server.listen(port, '127.0.0.1');
    if (!portTaken) {
      return port;
    }
  }
  return startPort;
}

async function waitForPort(port: number, timeoutMs: number): Promise<void> {
  const start = Date.now();
  let lastError: string = 'unknown';
  
  while (Date.now() - start < timeoutMs) {
    try {
      await new Promise<void>((resolve, reject) => {
        const socket = net.createConnection(port, '127.0.0.1', () => {
          socket.end();
          resolve();
        });
        socket.once('error', (e: Error) => {
          lastError = e.message;
          reject(e);
        });
        setTimeout(() => {
          socket.destroy();
          reject(new Error('timeout'));
        }, 1000);
      });
      // Port is open, now verify CDP is actually responding
      console.log(`[launcher] Port ${port} is open, verifying CDP endpoint...`);
      await verifyCdpEndpoint(port, 15000);
      console.log(`[launcher] CDP endpoint verified on port ${port}`);
      return;
    } catch (e: any) {
      lastError = e.message;
      console.log(`[launcher] Port check failed: ${e.message}, retrying...`);
      await new Promise(r => setTimeout(r, 1000));
    }
  }
  throw new Error(`CDP port ${port} did not become ready within ${timeoutMs}ms (last error: ${lastError})`);
}

async function verifyCdpEndpoint(port: number, timeoutMs: number): Promise<void> {
  const start = Date.now();
  
  while (Date.now() - start < timeoutMs) {
    try {
      await new Promise<void>((resolve, reject) => {
        const req = http.request({
          hostname: '127.0.0.1',
          port: port,
          path: '/json/version',
          method: 'GET',
          timeout: 2000,
        }, (res: http.IncomingMessage) => {
          let data = '';
          res.on('data', (chunk: string | Buffer) => { data += chunk; });
          res.on('end', () => {
            if (res.statusCode === 200) {
              console.log(`[launcher] CDP version response: ${data.substring(0, 200)}`);
              resolve();
            } else {
              reject(new Error(`HTTP ${res.statusCode}`));
            }
          });
        });
        req.on('error', reject);
        req.on('timeout', () => {
          req.destroy();
          reject(new Error('timeout'));
        });
        req.end();
      });
      return;
    } catch (e: any) {
      if (Date.now() - start >= timeoutMs) {
        throw e;
      }
      await new Promise(r => setTimeout(r, 1000));
    }
  }
}

async function killExistingInstances(appId: string, appPath: string): Promise<void> {
  const platform = os.platform();
  const definition = getAppDefinition(appId);
  if (!definition) return;
  const exeNames = getPlatformProcessNames(definition);
  
  try {
    if (platform === 'win32') {
      if (definition.windowsPathScopedKill) {
        const script = `$target = [IO.Path]::GetFullPath($env:DREAM_WORK_TARGET_EXE); ` +
          `Get-CimInstance Win32_Process -Filter "Name='${definition.processName.replace(/'/g, "''")}'" ` +
          '| Where-Object { $_.ExecutablePath -and [IO.Path]::GetFullPath($_.ExecutablePath) -ieq $target } ' +
          '| ForEach-Object { taskkill.exe /T /F /PID $_.ProcessId *> $null }';
        await execFileAsync('powershell.exe', [
          '-NoLogo',
          '-NoProfile',
          '-NonInteractive',
          '-ExecutionPolicy',
          'Bypass',
          '-Command',
          script,
        ], {
          env: { ...process.env, DREAM_WORK_TARGET_EXE: appPath },
          windowsHide: true,
        }).catch(() => {});
        console.log(`[launcher] Killed existing ${appId} instances at ${appPath}`);
        return;
      }
      const { execSync } = require('child_process');
      for (const exeName of exeNames) {
        try {
          execSync(`taskkill /T /F /IM "${exeName}" 2>nul`, { stdio: 'ignore' });
          console.log(`[launcher] Killed existing ${exeName} process tree`);
        } catch {
          // No existing process found, which is fine
        }
      }
    } else if (platform === 'darwin') {
      const { execSync } = require('child_process');
      for (const exeName of exeNames) {
        try {
          execSync(`pkill -f "${exeName}" 2>/dev/null || true`, { stdio: 'ignore' });
          console.log(`[launcher] Killed existing ${exeName} processes`);
        } catch {
          // No existing process found, which is fine
        }
      }
    } else if (platform === 'linux') {
      const { execSync } = require('child_process');
      for (const exeName of exeNames) {
        try {
          execSync(`pkill -f "${exeName}" 2>/dev/null || true`, { stdio: 'ignore' });
          console.log(`[launcher] Killed existing ${exeName} processes`);
        } catch {
          // No existing process found, which is fine
        }
      }
    }
  } catch (e) {
    console.warn(`[launcher] Failed to kill existing instances:`, e);
  }
}

async function waitForPortToClose(port: number, timeoutMs: number): Promise<void> {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const open = await new Promise<boolean>((resolve) => {
      const socket = net.createConnection(port, '127.0.0.1');
      socket.once('connect', () => {
        socket.destroy();
        resolve(true);
      });
      socket.once('error', () => resolve(false));
      socket.setTimeout(500, () => {
        socket.destroy();
        resolve(false);
      });
    });
    if (!open) {
      console.log(`[launcher] Previous CDP port ${port} is closed`);
      return;
    }
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  throw new Error(`Existing ${port} CDP service did not stop; refusing to inject into the old application instance`);
}

function getAppPath(appId: string): string {
  const definition = getAppDefinition(appId);
  if (!definition) throw new Error(`Unknown app: ${appId}`);
  const platform = os.platform();
  if (platform === 'win32') {
    for (const base of definition.installPaths) {
      if (!base || !fs.existsSync(base)) continue;
      if (fs.statSync(base).isFile()) return base;
      for (const exeName of definition.exeNames) {
        const direct = path.join(base, exeName);
        if (fs.existsSync(direct)) return direct;
      }
      const versions = fs.readdirSync(base, { withFileTypes: true }).filter(item => item.isDirectory()).sort((a, b) => b.name.localeCompare(a.name, undefined, { numeric: true }));
      for (const version of versions) {
        for (const exeName of definition.exeNames) {
          const candidate = path.join(base, version.name, exeName);
          if (fs.existsSync(candidate)) return candidate;
        }
      }
    }
    // Scan Program Files directories
    const exeNames = definition.exeNames;
    const scanDirs = [process.env.ProgramFiles, process.env['ProgramFiles(x86)']].filter(Boolean);
    for (const dir of scanDirs) {
      if (!dir || !fs.existsSync(dir)) continue;
      const items = fs.readdirSync(dir);
      const match = items.find((item: string) => item.toLowerCase().includes(appId.replace('-', '')) || item.toLowerCase().includes(definition.name.toLowerCase()));
      if (match) {
        const full = path.join(dir, match);
        for (const exeName of exeNames) {
          const exe = path.join(full, exeName);
          if (fs.existsSync(exe)) return exe;
        }
      }
    }
    // WindowsApps fallback for Codex (Microsoft Store install)
    if (appId === 'codex') {
      const windowsAppsPath = path.join(process.env.ProgramFiles || 'C:\\Program Files', 'WindowsApps');
      console.log('[launcher] Codex WindowsApps fallback, path:', windowsAppsPath);
      // Try direct scan first (may fail due to ACL)
      try {
        const items = fs.readdirSync(windowsAppsPath);
        const match = items.find((item: string) => /^OpenAI\.Codex_\d+/i.test(item));
        if (match) {
          const candidate = path.join(windowsAppsPath, match, 'app', 'ChatGPT.exe');
          if (fs.existsSync(candidate)) {
            console.log('[launcher] Found Codex via WindowsApps scan:', candidate);
            return candidate;
          }
        }
      } catch (e: any) {
        console.log('[launcher] WindowsApps scan error:', e.message);
      }
      // PowerShell fallback (bypasses ACL restrictions)
      try {
        const { execFileSync } = require('child_process');
        const script = `Get-AppxPackage -Name 'OpenAI.Codex' -ErrorAction SilentlyContinue | ForEach-Object { Join-Path $_.InstallLocation (Get-AppxPackageManifest -Package $_.PackageFullName).Package.Applications.Application.Executable }`;
        console.log('[launcher] Running PowerShell fallback...');
        const result = execFileSync('powershell.exe', ['-NoLogo', '-NoProfile', '-NonInteractive', '-ExecutionPolicy', 'Bypass', '-Command', script], { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] }).trim();
        console.log('[launcher] PowerShell result:', result);
        if (result && fs.existsSync(result)) return result;
      } catch (e: any) {
        console.log('[launcher] PowerShell fallback error:', e.message);
      }
    }
  } else if (platform === 'darwin') {
    for (const bundleName of definition.darwin?.appBundles ?? []) {
      const appBundle = path.join('/Applications', bundleName);
      if (!fs.existsSync(appBundle)) continue;
      for (const executableName of definition.darwin?.executableNames ?? []) {
        const executable = path.join(appBundle, 'Contents', 'MacOS', executableName);
        if (fs.existsSync(executable)) return executable;
      }
    }
  } else if (platform === 'linux') {
    const exeNames = definition.linux?.executableNames ?? [];
    for (const desktopFile of definition.linux?.desktopFiles ?? []) {
      const desktopExecutable = findLinuxDesktopExecutable(desktopFile);
      if (desktopExecutable) return desktopExecutable;
    }
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
    // Fallback to which
    for (const exe of exeNames) {
      try {
        const { execFileSync } = require('child_process');
        const resolved = execFileSync('which', [exe], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
        if (resolved && fs.existsSync(resolved)) return resolved;
      } catch {}
    }
  }
  throw new Error(`Could not find ${appId} executable`);
}

function findLinuxDesktopExecutable(desktopFile: string): string | undefined {
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
      const { execFileSync } = require('child_process');
      const resolved = execFileSync('which', [executable], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
      if (resolved && fs.existsSync(resolved)) return resolved;
    } catch {}
  }
  return undefined;
}
