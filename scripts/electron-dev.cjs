const { spawn, spawnSync } = require('child_process');
const fs = require('fs');
const http = require('http');
const path = require('path');

const root = path.resolve(__dirname, '..');
const viteCli = path.join(path.dirname(require.resolve('vite/package.json')), 'bin', 'vite.js');
const electronPath = require('electron');
let stopping = false;

const vite = spawn(process.execPath, [viteCli, '--port', '5173'], {
  cwd: root,
  env: { ...process.env, DREAM_WORK_MANUAL_ELECTRON: '1' },
  stdio: 'inherit',
  shell: false,
});

function stopChildTree(child) {
  if (!child?.pid) return;
  if (process.platform === 'win32') {
    spawnSync('taskkill.exe', ['/PID', String(child.pid), '/T', '/F'], { stdio: 'ignore', windowsHide: true });
  } else {
    try { child.kill('SIGTERM'); } catch {}
  }
}

function waitForDevelopmentBuild(timeoutMs = 60000) {
  const deadline = Date.now() + timeoutMs;
  return new Promise((resolve, reject) => {
    const check = () => {
      const mainReady = fs.existsSync(path.join(root, 'dist-electron', 'main.js'));
      const preloadReady = fs.existsSync(path.join(root, 'dist-electron', 'preload.js'));
      const request = http.get('http://localhost:5173/', response => {
        response.resume();
        if (response.statusCode && response.statusCode < 500 && mainReady && preloadReady) return resolve();
        retry();
      });
      request.setTimeout(1000, () => request.destroy());
      request.on('error', retry);
    };
    const retry = () => {
      if (Date.now() >= deadline) return reject(new Error('Timed out waiting for Vite and Electron build output'));
      setTimeout(check, 250);
    };
    check();
  });
}

async function main() {
  await waitForDevelopmentBuild();
  const electron = spawn(electronPath, ['.', '--no-sandbox'], {
    cwd: root,
    env: { ...process.env, VITE_DEV_SERVER_URL: 'http://localhost:5173' },
    stdio: 'inherit',
    shell: false,
  });

  electron.once('exit', code => {
    stopping = true;
    stopChildTree(vite);
    process.exit(code ?? 0);
  });
  electron.once('error', error => {
    console.error(error);
    stopping = true;
    stopChildTree(vite);
    process.exit(1);
  });
}

vite.once('exit', code => {
  if (!stopping) process.exit(code ?? 1);
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    stopping = true;
    stopChildTree(vite);
    process.exit(0);
  });
}

main().catch(error => {
  console.error(error);
  stopping = true;
  stopChildTree(vite);
  process.exit(1);
});
