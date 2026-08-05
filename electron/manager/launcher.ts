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
  const processNames = [...new Set([definition.processName, ...definition.exeNames].filter(Boolean))];

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

  if (themeId) {
    args.push(`--dream-theme=${themeId}`);
  }

  try {
    const appPath = getAppPath(appId);
    
    // Kill existing instances to ensure fresh launch with debug port
    console.log(`[launcher] Killing existing ${appId} instances...`);
    await killExistingInstances(appId);
    await waitForPortToClose(port, 15000);

    if (profile.devToolsActivePort) {
      try { fs.unlinkSync(profile.devToolsActivePort); } catch {}
    }
    
    console.log(`[launcher] Launching ${appPath} with args: ${args.join(' ')}`);
    const child = spawn(appPath, args, {
      detached: true,
      stdio: 'ignore',
      env: getCleanLaunchEnvironment(),
    });
    child.unref();
    
    console.log(`[launcher] Spawned process with PID: ${child.pid}`);

    // Wait for CDP port to be ready
    console.log(`[launcher] Waiting for CDP port ${port} to be ready...`);
    let actualPort = port;
    if (profile.devToolsActivePort) {
      actualPort = await waitForDevToolsActivePort(profile.devToolsActivePort, profile.rendererHints, 30000);
    } else {
      await waitForPort(port, 30000);
    }
    console.log(`[launcher] CDP port ${actualPort} is ready`);

    return { success: true, port: actualPort };
  } catch (error: any) {
    console.error(`[launcher] Launch failed:`, error);
    return { success: false, error: error.message };
  }
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

async function killExistingInstances(appId: string): Promise<void> {
  const platform = os.platform();
  const definition = getAppDefinition(appId);
  if (!definition) return;
  const exeNames = [...new Set([definition.processName, ...definition.exeNames].filter(Boolean))];
  
  try {
    if (platform === 'win32') {
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
    const apps = ['/Applications/WorkBuddy.app', '/Applications/ChatGPT.app'];
    for (const app of apps) {
      if (fs.existsSync(app)) return app;
    }
  } else if (platform === 'linux') {
    const exeNames = appId === 'workbuddy' ? ['workbuddy', 'WorkBuddy'] : ['codex', 'Codex'];
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
        const { execSync } = require('child_process');
        const resolved = execSync(`which ${exe} 2>/dev/null || echo ''`).toString().trim();
        if (resolved && fs.existsSync(resolved)) return resolved;
      } catch {}
    }
  }
  throw new Error(`Could not find ${appId} executable`);
}
