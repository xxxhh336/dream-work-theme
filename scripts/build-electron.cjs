const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const cli = require.resolve('electron-builder/cli');
const buildTemp = process.env.DREAM_WORK_BUILD_TEMP || path.join(__dirname, '..', '.builder-tmp');
fs.mkdirSync(buildTemp, { recursive: true });

const result = spawnSync(process.execPath, [cli, ...process.argv.slice(2)], {
  stdio: 'inherit',
  shell: false,
  env: {
    ...process.env,
    TEMP: buildTemp,
    TMP: buildTemp,
    TMPDIR: buildTemp,
    ELECTRON_MIRROR: process.env.ELECTRON_MIRROR || 'https://npmmirror.com/mirrors/electron/',
    ELECTRON_BUILDER_BINARIES_MIRROR: process.env.ELECTRON_BUILDER_BINARIES_MIRROR || 'https://npmmirror.com/mirrors/electron-builder-binaries/',
  },
});

if (result.error) throw result.error;
process.exit(result.status ?? 1);
