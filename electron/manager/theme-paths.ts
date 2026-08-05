import { app } from 'electron';
import * as fs from 'fs';
import * as path from 'path';

export function getBundledThemesDir(): string {
  return path.join(app.getAppPath(), 'themes');
}

export function getUserThemesDir(): string {
  const themesDir = path.join(app.getPath('userData'), 'themes');
  fs.mkdirSync(themesDir, { recursive: true });
  return themesDir;
}

export function getThemeSearchDirs(): string[] {
  return [getUserThemesDir(), getBundledThemesDir()];
}
