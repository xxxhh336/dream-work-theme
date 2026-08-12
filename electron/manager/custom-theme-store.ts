import { app } from 'electron';
import * as crypto from 'crypto';
import * as fs from 'fs';
import * as http from 'http';
import * as path from 'path';

export interface SharedCustomTheme {
  id: string;
  name: string;
  dataUrl: string;
  colors: {
    accent: string;
    secondary: string;
    surface: string;
    text: string;
  };
}

interface SharedCustomThemeService {
  endpoint: string;
  usageEndpoint: string;
  appStateEndpoint: string;
  token: string;
}

interface ThemeUsageEntry {
  count: number;
  lastUsedAt: number;
}

type ThemeUsageStore = Record<string, Record<string, ThemeUsageEntry>>;

const MAX_CUSTOM_THEMES = 5;
const MAX_BODY_BYTES = 32 * 1024 * 1024;
let servicePromise: Promise<SharedCustomThemeService> | null = null;
const appStates = new Map<string, { themeId: string; actionAt: number }>();

export function listSharedCustomThemes(): SharedCustomTheme[] {
  try {
    const value = JSON.parse(fs.readFileSync(getStorePath(), 'utf8'));
    return validateThemes(value);
  } catch {
    return [];
  }
}

export function mergeSharedCustomThemes(input: unknown): SharedCustomTheme[] {
  const incoming = validateThemes(input);
  const merged = [...listSharedCustomThemes()];
  for (const theme of incoming) {
    const index = merged.findIndex(item => item.id === theme.id);
    if (index >= 0) merged[index] = theme;
    else merged.push(theme);
  }
  const limited = merged.slice(0, MAX_CUSTOM_THEMES);
  writeSharedCustomThemes(limited);
  return limited;
}

export function deleteSharedCustomTheme(themeId: string): SharedCustomTheme[] {
  if (!/^custom-[a-z0-9-]+$/i.test(themeId)) throw new Error('Invalid custom theme id');
  const themes = listSharedCustomThemes().filter(theme => theme.id !== themeId);
  writeSharedCustomThemes(themes);
  console.log(`[custom-theme-store] Deleted ${themeId}; ${themes.length} custom themes remain`);
  return themes;
}

export function selectQuickThemeIds(appId: string, availableThemeIds: string[], currentThemeId: string, limit = 4): string[] {
  const usage = readThemeUsage()[appId] ?? {};
  return [...availableThemeIds]
    .sort((left, right) => {
      if (left === currentThemeId) return -1;
      if (right === currentThemeId) return 1;
      const leftUsage = usage[left] ?? { count: 0, lastUsedAt: 0 };
      const rightUsage = usage[right] ?? { count: 0, lastUsedAt: 0 };
      return rightUsage.count - leftUsage.count || rightUsage.lastUsedAt - leftUsage.lastUsedAt;
    })
    .slice(0, limit);
}

export function recordThemeUsage(appId: string, themeId: string): void {
  if (!/^[a-z0-9-]+$/i.test(appId) || !/^[a-z0-9-]+$/i.test(themeId)) return;
  const usage = readThemeUsage();
  const appUsage = usage[appId] ?? {};
  const current = appUsage[themeId] ?? { count: 0, lastUsedAt: 0 };
  appUsage[themeId] = { count: current.count + 1, lastUsedAt: Date.now() };
  usage[appId] = appUsage;
  writeJsonFile(getUsagePath(), usage);
}

export function ensureSharedCustomThemeService(): Promise<SharedCustomThemeService> {
  if (servicePromise) return servicePromise;
  servicePromise = new Promise((resolve, reject) => {
    const token = crypto.randomBytes(24).toString('hex');
    const server = http.createServer((request, response) => {
      response.setHeader('Access-Control-Allow-Origin', '*');
      response.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
      response.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
      response.setHeader('Access-Control-Allow-Private-Network', 'true');
      if (request.method === 'OPTIONS') {
        response.writeHead(204).end();
        return;
      }
      if (request.headers.authorization !== `Bearer ${token}`) {
        response.writeHead(401).end('Unauthorized');
        return;
      }
      if (request.url === '/theme-usage' && request.method === 'POST') {
        readJsonBody(request, response, (value) => {
          if (typeof value?.appId !== 'string' || typeof value?.themeId !== 'string') throw new Error('Invalid theme usage payload');
          recordThemeUsage(value.appId, value.themeId);
          sendJson(response, 200, { success: true });
        });
        return;
      }
      const appStateMatch = request.url?.match(/^\/app-state\/([a-z0-9-]+)$/i);
      if (appStateMatch) {
        const appId = appStateMatch[1].toLowerCase();
        if (request.method === 'GET') {
          sendJson(response, 200, appStates.get(appId) ?? null);
          return;
        }
        if (request.method === 'PUT') {
          readJsonBody(request, response, (value) => {
            if (typeof value?.themeId !== 'string' || !Number.isFinite(Number(value?.actionAt))) throw new Error('Invalid app state payload');
            const next = { themeId: value.themeId, actionAt: Number(value.actionAt) };
            const current = appStates.get(appId);
            if (!current || next.actionAt >= current.actionAt) appStates.set(appId, next);
            sendJson(response, 200, appStates.get(appId));
          });
          return;
        }
        response.writeHead(405).end('Method not allowed');
        return;
      }
      if (request.url === '/custom-themes/delete' && request.method === 'POST') {
        readJsonBody(request, response, (value) => {
          if (typeof value?.themeId !== 'string' || !/^custom-[a-z0-9-]+$/i.test(value.themeId)) throw new Error('Invalid custom theme id');
          const themes = deleteSharedCustomTheme(value.themeId);
          sendJson(response, 200, themes);
        });
        return;
      }
      const deleteMatch = request.url?.match(/^\/custom-themes\/([a-z0-9-]+)$/i);
      if (deleteMatch && request.method === 'DELETE') {
        const themeId = decodeURIComponent(deleteMatch[1]);
        const themes = deleteSharedCustomTheme(themeId);
        sendJson(response, 200, themes);
        return;
      }
      if (request.url !== '/custom-themes') {
        response.writeHead(404).end('Not found');
        return;
      }
      if (request.method === 'GET') {
        sendJson(response, 200, listSharedCustomThemes());
        return;
      }
      if (request.method !== 'PUT') {
        response.writeHead(405).end('Method not allowed');
        return;
      }
      readJsonBody(request, response, (value) => {
        const themes = validateThemes(value);
        writeSharedCustomThemes(themes);
        sendJson(response, 200, themes);
      });
    });
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      if (!address || typeof address === 'string') {
        server.close();
        reject(new Error('Shared custom theme service did not expose a TCP port'));
        return;
      }
      const origin = `http://127.0.0.1:${address.port}`;
      resolve({ endpoint: `${origin}/custom-themes`, usageEndpoint: `${origin}/theme-usage`, appStateEndpoint: `${origin}/app-state`, token });
    });
  });
  return servicePromise;
}

function getStorePath(): string {
  return path.join(app.getPath('userData'), 'custom-themes.json');
}

function getUsagePath(): string {
  return path.join(app.getPath('userData'), 'theme-usage.json');
}

function writeSharedCustomThemes(themes: SharedCustomTheme[]): void {
  writeJsonFile(getStorePath(), themes);
}

function readThemeUsage(): ThemeUsageStore {
  try {
    const value = JSON.parse(fs.readFileSync(getUsagePath(), 'utf8'));
    return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
  } catch {
    return {};
  }
}

function writeJsonFile(filePath: string, value: unknown): void {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function readJsonBody(request: http.IncomingMessage, response: http.ServerResponse, onValue: (value: any) => void): void {
  let size = 0;
  const chunks: Buffer[] = [];
  request.on('data', (chunk: Buffer) => {
    size += chunk.length;
    if (size > MAX_BODY_BYTES) {
      response.writeHead(413).end('Payload too large');
      request.destroy();
      return;
    }
    chunks.push(chunk);
  });
  request.on('end', () => {
    if (response.headersSent) return;
    try {
      onValue(JSON.parse(Buffer.concat(chunks).toString('utf8')));
    } catch (error) {
      response.writeHead(400).end((error as Error).message);
    }
  });
}

function validateThemes(input: unknown): SharedCustomTheme[] {
  if (!Array.isArray(input)) throw new Error('Custom themes must be an array');
  return input.slice(0, MAX_CUSTOM_THEMES).map((item, index) => {
    if (!item || typeof item !== 'object') throw new Error(`Invalid custom theme at index ${index}`);
    const value = item as any;
    if (typeof value.id !== 'string' || !/^custom-[a-z0-9-]+$/i.test(value.id)) throw new Error(`Invalid custom theme id at index ${index}`);
    if (typeof value.name !== 'string' || !value.name.trim()) throw new Error(`Invalid custom theme name at index ${index}`);
    if (typeof value.dataUrl !== 'string' || !/^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(value.dataUrl)) {
      throw new Error(`Invalid custom theme image at index ${index}`);
    }
    for (const color of ['accent', 'secondary', 'surface', 'text']) {
      if (typeof value.colors?.[color] !== 'string' || !/^#[0-9a-f]{6}$/i.test(value.colors[color])) {
        throw new Error(`Invalid custom theme color ${color} at index ${index}`);
      }
    }
    return {
      id: value.id,
      name: value.name.trim(),
      dataUrl: value.dataUrl,
      colors: {
        accent: value.colors.accent,
        secondary: value.colors.secondary,
        surface: value.colors.surface,
        text: value.colors.text,
      },
    };
  });
}

function sendJson(response: http.ServerResponse, status: number, value: unknown): void {
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify(value));
}
