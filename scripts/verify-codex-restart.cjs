const { execFileSync, spawn } = require('child_process');
const net = require('net');

const exe = process.argv[2];
if (!exe) throw new Error('Codex executable path is required');

async function targets() {
  try {
    return await fetch('http://127.0.0.1:9340/json/list', { signal: AbortSignal.timeout(2000) }).then((response) => response.json());
  } catch { return []; }
}

async function portOpen() {
  return new Promise((resolve) => {
    const socket = net.createConnection(9340, '127.0.0.1');
    socket.once('connect', () => { socket.destroy(); resolve(true); });
    socket.once('error', () => resolve(false));
    socket.setTimeout(500, () => { socket.destroy(); resolve(false); });
  });
}

(async () => {
  const before = (await targets()).find((target) => target.type === 'page' && target.url.includes('index.html'))?.id || null;
  for (const name of ['ChatGPT.exe', 'Codex.exe']) {
    try { execFileSync('taskkill.exe', ['/T', '/F', '/IM', name], { stdio: 'ignore' }); } catch {}
  }
  const closeStart = Date.now();
  while (await portOpen()) {
    if (Date.now() - closeStart > 15000) throw new Error('9340 did not close');
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  const child = spawn(exe, ['--remote-debugging-port=9340', '--disable-extensions', '--dream-theme=lisa'], { detached: true, stdio: 'ignore' });
  child.unref();
  const openStart = Date.now();
  let after = null;
  while (!after) {
    if (Date.now() - openStart > 30000) throw new Error('new Codex target did not appear');
    after = (await targets()).find((target) => target.type === 'page' && target.url.includes('index.html'))?.id || null;
    if (!after) await new Promise((resolve) => setTimeout(resolve, 500));
  }
  console.log(JSON.stringify({ before, after, changed: before !== after, pid: child.pid }));
  if (before && before === after) process.exitCode = 1;
})().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
