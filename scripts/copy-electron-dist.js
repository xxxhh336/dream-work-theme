const fs = require('fs');
const path = require('path');

const dst = path.join('dist-electron');
const requiredOutputs = ['main.js', 'preload.js'];
for (const file of requiredOutputs) {
  const output = path.join(dst, file);
  if (!fs.existsSync(output)) {
    throw new Error(`Missing Electron build output: ${output}`);
  }
}

// Copy Codex base skin CSS if it exists
const codexCssSrc = path.join('electron', 'manager', 'codex-dream-skin.css');
const codexCssDst = path.join('dist-electron', 'manager', 'codex-dream-skin.css');
if (fs.existsSync(codexCssSrc)) {
  fs.mkdirSync(path.dirname(codexCssDst), { recursive: true });
  fs.copyFileSync(codexCssSrc, codexCssDst);
}
