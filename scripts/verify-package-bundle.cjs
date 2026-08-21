const fs = require('fs');
const path = require('path');

const mainBundle = path.join(__dirname, '..', 'dist-electron', 'main.js');
const source = fs.readFileSync(mainBundle, 'utf8');
const requiredMarkers = [
  'deepseek-harness',
  'DSH Desktop.exe',
  'monkeycode-desktop.exe',
  'WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS',
  'dream-work-theme:monkeycode:restored',
  'dream-work-theme:monkeycode:native',
  'mc-workbench-surface-300',
  '26082107',
  '[class*="_composerSeat"]',
  '[class*="_composerStack"]',
  'data-ds-dark-theme',
];

const missing = requiredMarkers.filter(marker => !source.includes(marker));
if (missing.length > 0) {
  throw new Error(`Electron package bundle is stale; missing: ${missing.join(', ')}`);
}

console.log(`Verified Electron package bundle: ${mainBundle}`);
