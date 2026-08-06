const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const cli = require.resolve('electron-builder/cli');
const buildTemp = process.env.DREAM_WORK_BUILD_TEMP || path.join(__dirname, '..', '.builder-tmp');
fs.mkdirSync(buildTemp, { recursive: true });
const env = {
  ...process.env,
  TEMP: buildTemp,
  TMP: buildTemp,
  TMPDIR: buildTemp,
};

if (!process.env.CI) {
  env.ELECTRON_MIRROR ||= 'https://npmmirror.com/mirrors/electron/';
  env.ELECTRON_BUILDER_BINARIES_MIRROR ||= 'https://npmmirror.com/mirrors/electron-builder-binaries/';
}

const args = process.argv.slice(2);
if (!args.includes('--publish') && !args.some(arg => arg.startsWith('--publish='))) {
  args.push('--publish', 'never');
}

const result = spawnSync(process.execPath, [cli, ...args], {
  stdio: 'inherit',
  shell: false,
  env,
});

if (result.error) throw result.error;
process.exit(result.status ?? 1);
