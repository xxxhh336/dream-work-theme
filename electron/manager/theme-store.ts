import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';
import { ThemeManifest } from '../../shared/types';
import { getThemeSearchDirs } from './theme-paths';

export interface ThemeEntry {
  id: string;
  name: string;
  author: string;
  path: string;
  manifest: ThemeManifest;
}

const heroHashCache = new Map<string, { size: number; mtimeMs: number; hash: string }>();

export function listThemes(appId?: string): ThemeEntry[] {
  const entries: ThemeEntry[] = [];
  const seenIds = new Set<string>();

  for (const themesDir of getThemeSearchDirs()) {
    if (!fs.existsSync(themesDir)) continue;
    const items = fs.readdirSync(themesDir, { withFileTypes: true });

    for (const item of items) {
      if (!item.isDirectory()) continue;
      const themeDir = path.join(themesDir, item.name);
      const manifestPath = path.join(themeDir, 'theme.json');
      if (!fs.existsSync(manifestPath)) continue;

      try {
        const raw = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
        const manifest = validateThemeManifest(raw);
        if (seenIds.has(manifest.id)) continue;
        const heroPath = path.join(themeDir, manifest.hero);
        if (!fs.existsSync(heroPath) || !fs.statSync(heroPath).isFile()) throw new Error(`theme hero is missing: ${manifest.hero}`);
        if (appId && manifest.apps[appId]?.compat !== true) continue;

        seenIds.add(manifest.id);
        entries.push({
          id: manifest.id,
          name: manifest.name,
          author: manifest.author,
          path: themeDir,
          manifest,
        });
      } catch (e) {
        console.error(`Failed to load theme ${item.name}:`, e);
      }
    }
  }

  const uniqueEntries = new Map<string, ThemeEntry>();
  for (const entry of entries) {
    const heroPath = path.join(entry.path, entry.manifest.hero);
    const heroHash = getHeroHash(heroPath);
    const contentKey = `${entry.name.trim().toLocaleLowerCase()}\0${entry.author.trim().toLocaleLowerCase()}\0${heroHash}`;
    const current = uniqueEntries.get(contentKey);
    if (!current || isPreferredThemeId(entry.id, current.id)) uniqueEntries.set(contentKey, entry);
  }

  return [...uniqueEntries.values()].sort((a, b) => a.name.localeCompare(b.name));
}

function getHeroHash(heroPath: string): string {
  const stats = fs.statSync(heroPath);
  const cached = heroHashCache.get(heroPath);
  if (cached && cached.size === stats.size && cached.mtimeMs === stats.mtimeMs) return cached.hash;
  const hash = crypto.createHash('sha256').update(fs.readFileSync(heroPath)).digest('hex');
  heroHashCache.set(heroPath, { size: stats.size, mtimeMs: stats.mtimeMs, hash });
  return hash;
}

function isPreferredThemeId(candidate: string, current: string): boolean {
  const candidateCustom = candidate.startsWith('custom-');
  const currentCustom = current.startsWith('custom-');
  if (candidateCustom !== currentCustom) return !candidateCustom;
  return candidate.length < current.length || (candidate.length === current.length && candidate.localeCompare(current) < 0);
}

export function getThemeById(id: string, appId?: string): ThemeEntry | undefined {
  return listThemes(appId).find(t => t.id === id);
}

export function getThemeAssetPath(id: string): string | undefined {
  const theme = getThemeById(id);
  if (!theme) return undefined;
  const asset = path.resolve(theme.path, theme.manifest.hero);
  if (!asset.startsWith(`${path.resolve(theme.path)}${path.sep}`)) return undefined;
  return asset;
}

export function getThemeAssetUrl(id: string): string {
  return `theme-asset://local/${encodeURIComponent(id)}`;
}

export function getThemeHeroDataUrl(theme: ThemeEntry): string {
  const heroPath = path.join(theme.path, theme.manifest.hero);
  const heroBuffer = fs.readFileSync(heroPath);
  return `data:${getMimeType(theme.manifest.hero)};base64,${heroBuffer.toString('base64')}`;
}

export function hasThemeContent(name: string, author: string, heroPath: string): boolean {
  const expectedHash = getHeroHash(heroPath);
  return listThemes().some(theme => {
    if (theme.name.trim().toLowerCase() !== name.trim().toLowerCase() ||
        theme.author.trim().toLowerCase() !== author.trim().toLowerCase()) return false;
    return getHeroHash(path.join(theme.path, theme.manifest.hero)) === expectedHash;
  });
}

function validateThemeManifest(input: any): ThemeManifest {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) {
    throw new Error('theme manifest must be an object');
  }
  if (input.schemaVersion !== 1) {
    throw new Error(`unsupported theme schema ${input.schemaVersion}`);
  }
  if (typeof input.id !== 'string' || !/^[a-z0-9-]+$/.test(input.id)) {
    throw new Error('theme id must use lowercase letters, numbers, and hyphens');
  }
  if (typeof input.name !== 'string' || !input.name.trim()) {
    throw new Error('theme name must be a non-empty string');
  }
  if (typeof input.author !== 'string') {
    throw new Error('theme author must be a string');
  }
  if (typeof input.hero !== 'string') {
    throw new Error('theme hero must be a string');
  }
  if (typeof input.colors !== 'object' || input.colors === null) {
    throw new Error('theme colors must be an object');
  }

  const requiredColors = ['accent', 'secondary', 'surface', 'text'];
  for (const color of requiredColors) {
    if (typeof input.colors[color] !== 'string' || !/^#[0-9a-fA-F]{6}$/.test(input.colors[color])) {
      throw new Error(`theme color ${color} must be a hex color`);
    }
  }

  return {
    schemaVersion: 1,
    id: input.id,
    name: input.name.trim(),
    author: input.author,
    hero: input.hero,
    colors: {
      accent: input.colors.accent,
      secondary: input.colors.secondary,
      surface: input.colors.surface,
      text: input.colors.text,
    },
    copy: input.copy ?? undefined,
    apps: input.apps ?? {},
  };
}

function getMimeType(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  const map: Record<string, string> = {
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
  };
  return map[ext] || 'image/png';
}
