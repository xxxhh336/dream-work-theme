const { spawnSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const args = process.argv.slice(2);
const archIndex = args.indexOf('--arch');
const arch = archIndex >= 0 ? args[archIndex + 1] : process.arch;
const appImageOnly = args.includes('--appimage-only');

if (!['x64', 'arm64'].includes(arch)) {
  throw new Error(`Unsupported Linux architecture: ${arch}`);
}

if (appImageOnly && process.platform !== 'linux') {
  throw new Error('AppImage packaging must run on a Linux host or Linux CI runner.');
}

const targets = appImageOnly
  ? ['AppImage']
  : process.platform === 'linux'
    ? ['AppImage', 'tar.gz']
    : ['tar.gz'];

if (process.platform !== 'linux' && !appImageOnly) {
  console.log(`[package-linux] ${process.platform} host detected; building tar.gz only.`);
  console.log('[package-linux] Run the same command on Linux to also produce AppImage.');
}

const projectRoot = path.resolve(__dirname, '..');
const { version } = require(path.join(projectRoot, 'package.json'));
const outputName = `Dream-Work-Theme-${version}-linux-${arch}.tar.gz`;
const outputPath = path.join(projectRoot, 'dist', outputName);
if (targets.includes('tar.gz')) fs.rmSync(outputPath, { force: true });

const legacyTemp = path.join(projectRoot, '.builder-tmp');
if (fs.existsSync(legacyTemp)) {
  for (const entry of fs.readdirSync(legacyTemp)) {
    fs.rmSync(path.join(legacyTemp, entry), { recursive: true, force: true });
  }
}

function getFreeBytes(root) {
  const stats = fs.statfsSync(root);
  return Number(stats.bavail) * Number(stats.bsize);
}

function selectTempRoot() {
  if (process.env.DREAM_WORK_BUILD_TEMP) return process.env.DREAM_WORK_BUILD_TEMP;
  if (process.platform !== 'win32') return path.join(os.tmpdir(), 'dream-work-theme-build');

  const candidates = [];
  for (let code = 'C'.charCodeAt(0); code <= 'Z'.charCodeAt(0); code++) {
    const root = `${String.fromCharCode(code)}:\\`;
    try {
      candidates.push({ root, free: getFreeBytes(root) });
    } catch {}
  }
  candidates.sort((left, right) => right.free - left.free);
  const selected = candidates[0];
  if (!selected || selected.free < 2 * 1024 ** 3) {
    throw new Error('Linux packaging requires at least 2 GB free on a temporary drive.');
  }
  console.log(`[package-linux] Using ${selected.root} for temporary files (${(selected.free / 1024 ** 3).toFixed(1)} GB free).`);
  return path.join(selected.root, 'dream-work-theme-build-tmp');
}

const tempRoot = selectTempRoot();
fs.rmSync(tempRoot, { recursive: true, force: true });
fs.mkdirSync(tempRoot, { recursive: true });

const builderArgs = ['--linux', ...targets, arch === 'arm64' ? '--arm64' : '--x64'];
let result;
try {
  result = spawnSync(process.execPath, [path.join(__dirname, 'build-electron.cjs'), ...builderArgs], {
    stdio: 'inherit',
    shell: false,
    env: { ...process.env, DREAM_WORK_BUILD_TEMP: tempRoot },
  });
} finally {
  fs.rmSync(tempRoot, { recursive: true, force: true });
}
if (result.error) throw result.error;
process.exit(result.status ?? 1);
