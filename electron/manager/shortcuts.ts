import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs';

export interface ShortcutProfile {
  id: string;
  appId: string;
  themeId: string;
  label: string;
  icon?: string;
}

export async function createShortcut(profile: ShortcutProfile): Promise<{ success: boolean; path?: string; error?: string }> {
  try {
    if (os.platform() === 'win32') {
      return createWindowsShortcut(profile);
    }
    if (os.platform() === 'darwin') {
      return createMacShortcut(profile);
    }
    if (os.platform() === 'linux') {
      return createLinuxShortcut(profile);
    }
    return { success: false, error: `Unsupported platform: ${os.platform()}` };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

function createWindowsShortcut(profile: ShortcutProfile): Promise<{ success: boolean; path?: string; error?: string }> {
  const desktopDir = path.join(os.homedir(), 'Desktop');
  const shortcutPath = path.join(desktopDir, `${profile.label}.lnk`);
  const exePath = process.execPath;
  const workingDir = path.dirname(exePath);

  const script = `
    $WshShell = New-Object -comObject WScript.Shell
    $Shortcut = $WshShell.CreateShortcut("${shortcutPath.replace(/\\/g, '\\\\')}")
    $Shortcut.TargetPath = "${exePath.replace(/\\/g, '\\\\')}"
    $Shortcut.Arguments = "--launch=${profile.appId}:${profile.themeId}"
    $Shortcut.WorkingDirectory = "${workingDir.replace(/\\/g, '\\\\')}"
    $Shortcut.Save()
  `;

  return new Promise((resolve) => {
    require('child_process').exec(`powershell -Command "${script.replace(/"/g, '\\"')}"`, (error: any) => {
      if (error) {
        resolve({ success: false, error: error.message });
      } else {
        resolve({ success: true, path: shortcutPath });
      }
    });
  });
}

function createMacShortcut(profile: ShortcutProfile): Promise<{ success: boolean; path?: string; error?: string }> {
  const desktopDir = path.join(os.homedir(), 'Desktop');
  const shortcutPath = path.join(desktopDir, `${profile.label}.app`);
  const exePath = process.execPath;
  const scriptContent = `
    tell application "Terminal"
      do script "'${exePath}' --launch=${profile.appId}:${profile.themeId}"
    end tell
  `;
  const scriptPath = path.join(desktopDir, `${profile.id}.scpt`);
  fs.writeFileSync(scriptPath, scriptContent);

  return new Promise((resolve) => {
    require('child_process').exec(`osacompile -o "${shortcutPath}" "${scriptPath}"`, (error: any) => {
      fs.unlinkSync(scriptPath);
      if (error) {
        resolve({ success: false, error: error.message });
      } else {
        resolve({ success: true, path: shortcutPath });
      }
    });
  });
}

async function createLinuxShortcut(profile: ShortcutProfile): Promise<{ success: boolean; path?: string; error?: string }> {
  const appsDir = path.join(os.homedir(), '.local', 'share', 'applications');
  if (!fs.existsSync(appsDir)) {
    fs.mkdirSync(appsDir, { recursive: true });
  }
  const shortcutPath = path.join(appsDir, `${profile.id}.desktop`);
  const exePath = process.execPath;

  const content = `[Desktop Entry]
Type=Application
Name=${profile.label}
Exec="${exePath}" --launch=${profile.appId}:${profile.themeId}
Icon=${profile.icon || 'utilities-terminal'}
Terminal=false
Categories=Utility;
`;

  fs.writeFileSync(shortcutPath, content);
  fs.chmodSync(shortcutPath, 0o755);

  return { success: true, path: shortcutPath };
}
