const fs = require('fs');
const path = require('path');

const src = path.join('renderer', 'dist-electron');
const dst = path.join('dist-electron');

// Clean only the destination to avoid stale hashed chunks
if (fs.existsSync(dst)) {
  fs.readdirSync(dst).forEach(f => {
    const fp = path.join(dst, f);
    if (fs.statSync(fp).isFile()) fs.unlinkSync(fp);
  });
} else {
  fs.mkdirSync(dst, { recursive: true });
}

if (fs.existsSync(src)) {
  fs.readdirSync(src).forEach(f => {
    const s = path.join(src, f);
    const d = path.join(dst, f);
    if (fs.statSync(s).isFile()) fs.copyFileSync(s, d);
  });
}

const preloadSrc = path.join('renderer', 'dist-electron', 'preload.js');
const preloadDst = path.join('dist-electron', 'preload.js');
if (fs.existsSync(preloadSrc)) {
  fs.mkdirSync(path.dirname(preloadDst), { recursive: true });
  fs.copyFileSync(preloadSrc, preloadDst);
}

// Copy Codex base skin CSS if it exists
const codexCssSrc = path.join('electron', 'manager', 'codex-dream-skin.css');
const codexCssDst = path.join('dist-electron', 'manager', 'codex-dream-skin.css');
if (fs.existsSync(codexCssSrc)) {
  fs.mkdirSync(path.dirname(codexCssDst), { recursive: true });
  fs.copyFileSync(codexCssSrc, codexCssDst);
}
