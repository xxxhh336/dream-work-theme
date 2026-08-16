const fs = require('fs');
const path = require('path');

const mainBundle = path.join(__dirname, '..', 'dist-electron', 'main.js');
const source = fs.readFileSync(mainBundle, 'utf8');
const requiredMarkers = [
  'deepseek-harness',
  'DSH Desktop.exe',
  '[class*="_composerSeat"]',
  '[class*="_composerStack"]',
  'data-ds-dark-theme',
];

const missing = requiredMarkers.filter(marker => !source.includes(marker));
if (missing.length > 0) {
  throw new Error(`Electron package bundle is stale; missing: ${missing.join(', ')}`);
}

console.log(`Verified Electron package bundle: ${mainBundle}`);
