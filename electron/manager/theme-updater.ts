import * as crypto from 'crypto';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { execFile } from 'child_process';
import { promisify } from 'util';
import { getThemeById, hasThemeContent } from './theme-store';
import { getUserThemesDir } from './theme-paths';

const execFileAsync = promisify(execFile);
const API_ORIGIN = 'https://api.dreamskin.cc';
const THEMES_ENDPOINT = `${API_ORIGIN}/v1/themes`;
const MAX_PACKAGE_BYTES = 32 * 1024 * 1024;
const PAGE_SIZE = 6;
let nextOffset = 0;
const SUPPORTED_APPS = ['workbuddy', 'codex', 'trae-work', 'qoder-work', 'catpaw', 'zcode', 'qwen-office'];

interface CommunityTheme {
  applyCompatible: boolean;
  authorDisplayName: string;
  id: string;
  name: string;
  packageBytes: number;
  packageSha256: string;
  themeId: string;
  version: string;
}

export interface ThemeUpdateResult {
  checked: number;
  imported: number;
  skipped: number;
  offset: number;
  page: number;
  total: number;
  nextOffset: number;
  failed: Array<{ id: string; name: string; error: string }>;
}

export async function updateCommunityThemes(): Promise<ThemeUpdateResult> {
  const offset = nextOffset;
  const pageResult = await fetchRecentThemes(offset);
  const themes = pageResult.items;
  nextOffset = offset + themes.length >= pageResult.total ? 0 : offset + PAGE_SIZE;
  const themesDir = getUserThemesDir();
  const result: ThemeUpdateResult = {
    checked: themes.length,
    imported: 0,
    skipped: 0,
    offset,
    page: Math.floor(offset / PAGE_SIZE) + 1,
    total: pageResult.total,
    nextOffset,
    failed: [],
  };

  for (const metadata of themes) {
    const id = normalizeId(metadata.themeId);
    if (!metadata.applyCompatible || getThemeById(id)) {
      result.skipped++;
      continue;
    }
    try {
      const imported = await downloadAndConvertTheme(metadata, themesDir, id);
      if (imported) result.imported++;
      else result.skipped++;
    } catch (error) {
      result.failed.push({ id: metadata.id, name: metadata.name, error: (error as Error).message });
    }
  }
  return result;
}

async function fetchRecentThemes(offset: number): Promise<{ items: CommunityTheme[]; total: number }> {
  const url = `${THEMES_ENDPOINT}?limit=${PAGE_SIZE}&offset=${offset}&sort=recent`;
  const response = await fetch(url, { signal: AbortSignal.timeout(30000), redirect: 'error' });
  if (!response.ok) throw new Error(`Theme list request failed: HTTP ${response.status}`);
  const body = await response.json() as { items?: CommunityTheme[]; total?: number };
  if (!Array.isArray(body.items) || body.items.length > PAGE_SIZE || !Number.isInteger(body.total) || body.total! < 0) {
    throw new Error('Theme list response is invalid');
  }
  return { items: body.items, total: body.total! };
}

async function downloadAndConvertTheme(metadata: CommunityTheme, themesDir: string, id: string): Promise<boolean> {
  validateMetadata(metadata);
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'dream-work-theme-'));
  const archivePath = path.join(tempRoot, 'theme.zip');
  const extractDir = path.join(tempRoot, 'extract');
  const stageDir = path.join(themesDir, `.updating-${id}-${process.pid}`);
  try {
    fs.mkdirSync(extractDir);
    const downloadUrl = `${THEMES_ENDPOINT}/${metadata.id}/download`;
    const response = await fetch(downloadUrl, { signal: AbortSignal.timeout(120000), redirect: 'error' });
    if (!response.ok) throw new Error(`Theme download failed: HTTP ${response.status}`);
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length !== metadata.packageBytes) throw new Error(`Downloaded size mismatch: expected ${metadata.packageBytes}, got ${bytes.length}`);
    if (bytes.length > MAX_PACKAGE_BYTES) throw new Error('Theme package exceeds 32 MiB');
    const hash = crypto.createHash('sha256').update(bytes).digest('hex');
    if (hash !== metadata.packageSha256) throw new Error('Downloaded SHA-256 does not match metadata');
    fs.writeFileSync(archivePath, bytes, { flag: 'wx' });
    await extractArchive(archivePath, extractDir);

    const sourceDir = findThemeRoot(extractDir);
    const sourceTheme = JSON.parse(fs.readFileSync(path.join(sourceDir, 'theme.json'), 'utf8'));
    const imageName = sourceTheme.image;
    if (typeof imageName !== 'string' || path.basename(imageName) !== imageName || !/\.(png|jpe?g|webp)$/i.test(imageName)) {
      throw new Error('Theme image name is invalid');
    }
    const imagePath = path.join(sourceDir, imageName);
    const cssPath = path.join(sourceDir, 'theme.css');
    if (!fs.existsSync(imagePath) || !fs.statSync(imagePath).isFile()) throw new Error('Theme image is missing');
    if (!fs.existsSync(cssPath) || !fs.statSync(cssPath).isFile()) throw new Error('theme.css is missing');

    const manifest = convertTheme(sourceTheme, metadata, id, `hero${path.extname(imageName).toLowerCase()}`);
    if (hasThemeContent(manifest.name, manifest.author, imagePath)) return false;
    fs.mkdirSync(stageDir);
    fs.copyFileSync(imagePath, path.join(stageDir, manifest.hero));
    fs.copyFileSync(cssPath, path.join(stageDir, 'theme.css'));
    fs.writeFileSync(path.join(stageDir, 'theme.json'), `${JSON.stringify(manifest, null, 2)}\n`);
    fs.renameSync(stageDir, path.join(themesDir, id));
    return true;
  } finally {
    fs.rmSync(stageDir, { recursive: true, force: true });
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
}

async function extractArchive(archivePath: string, destination: string): Promise<void> {
  const { path7za } = require('7zip-bin') as { path7za: string };
  await execFileAsync(path7za, ['x', archivePath, `-o${destination}`, '-y'], { windowsHide: true, timeout: 120000 });
}

function findThemeRoot(extractDir: string): string {
  const candidates = [extractDir, ...fs.readdirSync(extractDir, { withFileTypes: true }).filter(item => item.isDirectory()).map(item => path.join(extractDir, item.name))];
  const matches = candidates.filter(candidate => fs.existsSync(path.join(candidate, 'theme.json')) && fs.existsSync(path.join(candidate, 'theme.css')));
  if (matches.length !== 1) throw new Error('Theme ZIP must contain one theme root');
  return matches[0];
}

function validateMetadata(metadata: CommunityTheme): void {
  if (!/^ver_[a-z0-9]{8,64}$/.test(metadata.id)) throw new Error('Theme version ID is invalid');
  if (!Number.isInteger(metadata.packageBytes) || metadata.packageBytes < 1 || metadata.packageBytes > MAX_PACKAGE_BYTES) throw new Error('Theme package size is invalid');
  if (!/^[a-f0-9]{64}$/.test(metadata.packageSha256)) throw new Error('Theme package SHA-256 is invalid');
}

function normalizeId(value: string): string {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').replace(/-+/g, '-') || 'community-theme';
}

function convertTheme(source: any, metadata: CommunityTheme, id: string, hero: string) {
  const appearance = source.appearance === 'dark' ? 'dark' : 'light';
  const base = appearance === 'dark' ? '#10141c' : '#f4f7fa';
  const colors = source.colors || {};
  return {
    schemaVersion: 1,
    id,
    name: String(source.name || metadata.name || id).trim(),
    author: metadata.authorDisplayName || 'DreamSkin Community',
    hero,
    colors: {
      accent: parseColor(colors.accent, '#4f8cff', base),
      secondary: parseColor(colors.secondary || colors.accentAlt, '#7ba7d8', base),
      surface: parseColor(colors.panelAlt || colors.panel || colors.background, base, base),
      text: parseColor(colors.text, appearance === 'dark' ? '#eef2f7' : '#1f2937', base),
    },
    copy: null,
    apps: Object.fromEntries(SUPPORTED_APPS.map(appId => [appId, { compat: true }])),
  };
}

function parseColor(value: unknown, fallback: string, base: string): string {
  if (typeof value !== 'string') return fallback;
  const hex = value.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i);
  if (hex) {
    let raw = hex[1];
    if (raw.length === 3) raw = raw.split('').map(char => char + char).join('');
    return `#${raw.slice(0, 6).toLowerCase()}`;
  }
  const rgba = value.trim().match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/i);
  if (!rgba) return fallback;
  const alpha = rgba[4] === undefined ? 1 : Number(rgba[4]);
  const background = parseColor(base, fallback, fallback).slice(1).match(/../g)!.map(part => parseInt(part, 16));
  const rgb = [1, 2, 3].map(index => Math.round(Number(rgba[index]) * alpha + background[index - 1] * (1 - alpha)));
  return `#${rgb.map(channel => channel.toString(16).padStart(2, '0')).join('')}`;
}
