const fs = require('fs');
const path = require('path');

const sourceRoot = process.argv[2] || 'C:/Users/xxgg121/AppData/Local/CodexDreamSkin/themes';
const targetRoot = process.argv[3] || path.resolve('themes');
const supportedApps = ['workbuddy', 'codex', 'trae-work', 'qoder-work', 'catpaw', 'zcode', 'qwen-office'];

function normalizeId(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-') || 'imported-theme';
}

function parseVersion(directory, manifest) {
  const value = manifest?.version || directory.match(/-(\d+\.\d+\.\d+)(?:\s*\(\d+\))?$/)?.[1] || '0.0.0';
  return value.split('.').map((part) => Number(part) || 0);
}

function compareVersion(left, right) {
  for (let index = 0; index < 3; index++) {
    if (left[index] !== right[index]) return left[index] - right[index];
  }
  return 0;
}

function parseColor(value, fallback, base) {
  if (typeof value !== 'string') return fallback;
  const hex = value.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i);
  if (hex) {
    let raw = hex[1];
    if (raw.length === 3) raw = raw.split('').map((char) => char + char).join('');
    return `#${raw.slice(0, 6).toLowerCase()}`;
  }
  const rgba = value.trim().match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/i);
  if (!rgba) return fallback;
  const alpha = rgba[4] === undefined ? 1 : Number(rgba[4]);
  const background = parseColor(base, fallback, fallback).slice(1).match(/../g).map((part) => parseInt(part, 16));
  const rgb = [1, 2, 3].map((index) => Math.round(Number(rgba[index]) * alpha + background[index - 1] * (1 - alpha)));
  return `#${rgb.map((channel) => channel.toString(16).padStart(2, '0')).join('')}`;
}

function loadCandidate(directory) {
  const root = path.join(sourceRoot, directory);
  const themePath = path.join(root, 'theme.json');
  if (!fs.existsSync(themePath)) return null;
  const sourceTheme = JSON.parse(fs.readFileSync(themePath, 'utf8'));
  const image = sourceTheme.image;
  if (!image || !fs.existsSync(path.join(root, image))) return null;
  let manifest = null;
  const manifestPath = path.join(root, 'manifest.json');
  if (fs.existsSync(manifestPath)) {
    try { manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8')); } catch {}
  }
  return { directory, root, sourceTheme, image, manifest, version: parseVersion(directory, manifest) };
}

if (!fs.existsSync(sourceRoot)) throw new Error(`Source theme directory not found: ${sourceRoot}`);
if (!fs.existsSync(targetRoot)) throw new Error(`Target theme directory not found: ${targetRoot}`);

const selected = new Map();
for (const entry of fs.readdirSync(sourceRoot, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const candidate = loadCandidate(entry.name);
  if (!candidate) continue;
  const id = normalizeId(candidate.sourceTheme.id || entry.name);
  const current = selected.get(id);
  if (!current || compareVersion(candidate.version, current.version) > 0 || (compareVersion(candidate.version, current.version) === 0 && candidate.directory.length < current.directory.length)) {
    selected.set(id, candidate);
  }
}

const existingContent = new Set();
for (const entry of fs.readdirSync(targetRoot, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const dir = path.join(targetRoot, entry.name);
  const manifestPath = path.join(dir, 'theme.json');
  if (!fs.existsSync(manifestPath)) continue;
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    const heroPath = path.join(dir, manifest.hero);
    if (!fs.existsSync(heroPath)) continue;
    const hash = require('crypto').createHash('sha256').update(fs.readFileSync(heroPath)).digest('hex');
    existingContent.add(`${String(manifest.name).trim().toLowerCase()}\0${String(manifest.author).trim().toLowerCase()}\0${hash}`);
  } catch {}
}

let imported = 0;
let skipped = 0;
const records = [];
for (const [id, candidate] of [...selected].sort(([left], [right]) => left.localeCompare(right))) {
  const target = path.join(targetRoot, id);
  if (fs.existsSync(target)) {
    skipped++;
    records.push({ id, status: 'skipped-existing', source: candidate.directory });
    continue;
  }

  const appearance = candidate.sourceTheme.appearance === 'dark' ? 'dark' : 'light';
  const base = appearance === 'dark' ? '#10141c' : '#f4f7fa';
  const colors = candidate.sourceTheme.colors || {};
  const publisher = candidate.manifest?.publisher?.displayName || candidate.manifest?.publisher?.id || 'Codex Dream Skin';
  const extension = path.extname(candidate.image).toLowerCase();
  const hero = `hero${extension}`;
  const imageHash = require('crypto').createHash('sha256').update(fs.readFileSync(path.join(candidate.root, candidate.image))).digest('hex');
  const contentKey = `${String(candidate.sourceTheme.name || id).trim().toLowerCase()}\0${String(publisher).trim().toLowerCase()}\0${imageHash}`;
  if (existingContent.has(contentKey)) {
    skipped++;
    records.push({ id, status: 'skipped-duplicate-content', source: candidate.directory });
    continue;
  }
  const manifest = {
    schemaVersion: 1,
    id,
    name: String(candidate.sourceTheme.name || id).trim(),
    author: publisher,
    hero,
    colors: {
      accent: parseColor(colors.accent, '#4f8cff', base),
      secondary: parseColor(colors.secondary || colors.accentAlt, '#7ba7d8', base),
      surface: parseColor(colors.panelAlt || colors.panel || colors.background, base, base),
      text: parseColor(colors.text, appearance === 'dark' ? '#eef2f7' : '#1f2937', base),
    },
    copy: null,
    apps: Object.fromEntries(supportedApps.map((appId) => [appId, { compat: true }])),
  };

  fs.mkdirSync(target);
  fs.copyFileSync(path.join(candidate.root, candidate.image), path.join(target, hero));
  fs.writeFileSync(path.join(target, 'theme.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  const sourceCss = path.join(candidate.root, 'theme.css');
  const css = fs.existsSync(sourceCss)
    ? fs.readFileSync(sourceCss, 'utf8')
    : '/* Imported theme has no Codex Dream Skin Safe CSS. */\n';
  fs.writeFileSync(path.join(target, 'theme.css'), css.endsWith('\n') ? css : `${css}\n`);
  imported++;
  existingContent.add(contentKey);
  records.push({ id, status: 'imported', source: candidate.directory, hero });
}

console.log(JSON.stringify({ sourceDirectories: fs.readdirSync(sourceRoot).length, uniqueThemes: selected.size, imported, skipped, records }, null, 2));
