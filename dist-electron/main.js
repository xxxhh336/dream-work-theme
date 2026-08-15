"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const electron = require("electron");
const path = require("path");
const fs = require("fs");
const child_process = require("child_process");
const util = require("util");
const os = require("os");
const originalFs = require("original-fs");
const http = require("http");
const net = require("net");
const promises = require("fs/promises");
const crypto = require("crypto");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const path__namespace = /* @__PURE__ */ _interopNamespaceDefault(path);
const fs__namespace = /* @__PURE__ */ _interopNamespaceDefault(fs);
const os__namespace = /* @__PURE__ */ _interopNamespaceDefault(os);
const originalFs__namespace = /* @__PURE__ */ _interopNamespaceDefault(originalFs);
const http__namespace = /* @__PURE__ */ _interopNamespaceDefault(http);
const net__namespace = /* @__PURE__ */ _interopNamespaceDefault(net);
const crypto__namespace = /* @__PURE__ */ _interopNamespaceDefault(crypto);
const localAppData = process.env.LOCALAPPDATA || path__namespace.join(os__namespace.homedir(), "AppData", "Local");
const roamingAppData = process.env.APPDATA || path__namespace.join(os__namespace.homedir(), "AppData", "Roaming");
const programFiles = process.env.ProgramFiles || "C:\\Program Files";
const programFilesX86 = process.env["ProgramFiles(x86)"] || "C:\\Program Files (x86)";
const APP_DEFINITIONS = [
  {
    id: "workbuddy",
    name: "WorkBuddy",
    exeNames: ["WorkBuddy.exe"],
    processName: "WorkBuddy.exe",
    defaultPort: 9339,
    installPaths: [path__namespace.join(localAppData, "workbuddy"), path__namespace.join(localAppData, "Programs", "workbuddy"), path__namespace.join(programFiles, "WorkBuddy"), path__namespace.join(programFilesX86, "WorkBuddy"), "D:\\Program Files\\WorkBuddy"],
    rendererHints: ["app.asar/renderer/index.html", "renderer/index.html", "index.html"],
    kind: "workbuddy",
    acceptsGenericThemes: true,
    darwin: { appBundles: ["WorkBuddy.app"], executableNames: ["WorkBuddy"] },
    linux: { executableNames: ["workbuddy", "WorkBuddy"], desktopFiles: ["workbuddy.desktop"] }
  },
  {
    id: "codex",
    name: "Codex",
    exeNames: ["ChatGPT.exe", "Codex.exe"],
    processName: "ChatGPT.exe",
    defaultPort: 9340,
    installPaths: [path__namespace.join(localAppData, "Programs", "Codex"), path__namespace.join(localAppData, "Programs", "OpenAI", "Codex"), path__namespace.join(programFiles, "Codex"), path__namespace.join(programFilesX86, "Codex"), "D:\\Program Files\\Codex"],
    rendererHints: ["index.html", "renderer/index.html"],
    kind: "codex",
    acceptsGenericThemes: true,
    darwin: { appBundles: ["ChatGPT.app", "Codex.app"], executableNames: ["ChatGPT", "Codex"] },
    linux: { executableNames: ["codex", "Codex"], desktopFiles: ["codex.desktop"] }
  },
  {
    id: "trae-work",
    name: "TRAE Work",
    exeNames: ["TRAE SOLO CN.exe", "TRAE Work CN.exe"],
    processName: "TRAE SOLO CN.exe",
    defaultPort: 9341,
    installPaths: ["D:\\Program Files\\TRAE SOLO CN", path__namespace.join(localAppData, "Programs", "TRAE SOLO CN"), path__namespace.join(programFiles, "TRAE SOLO CN")],
    rendererHints: ["solo/solo-lite.html", "solo-lite.html"],
    kind: "vscode-work",
    acceptsGenericThemes: true,
    darwin: { appBundles: ["TRAE SOLO CN.app", "TRAE Work CN.app", "TRAE.app"], executableNames: ["TRAE SOLO CN", "TRAE Work CN", "TRAE"] },
    linux: { executableNames: ["trae", "trae-work", "TRAE"], desktopFiles: ["trae.desktop", "trae-work.desktop"] }
  },
  {
    id: "qoder-work",
    name: "QoderWork",
    exeNames: ["QoderWork CN.exe", "QoderWork.exe"],
    processName: "QoderWork CN.exe",
    defaultPort: 9342,
    installPaths: ["D:\\Program Files\\QoderWork CN", path__namespace.join(localAppData, "Programs", "QoderWork CN"), path__namespace.join(programFiles, "QoderWork CN")],
    rendererHints: ["out/renderer/index.html", "renderer/index.html"],
    kind: "generic-work",
    devToolsActivePort: path__namespace.join(roamingAppData, "QoderWork CN", "DevToolsActivePort"),
    acceptsGenericThemes: true,
    darwin: { appBundles: ["QoderWork CN.app", "QoderWork.app"], executableNames: ["QoderWork CN", "QoderWork"] },
    linux: { executableNames: ["qoder-work", "qoderwork", "QoderWork"], desktopFiles: ["qoder-work.desktop", "qoderwork.desktop"] }
  },
  {
    id: "catpaw",
    name: "CatPaw",
    exeNames: ["CatPaw.exe"],
    processName: "CatPaw.exe",
    defaultPort: 9343,
    installPaths: [path__namespace.join(localAppData, "CatPaw"), path__namespace.join(localAppData, "Programs", "CatPaw"), path__namespace.join(programFiles, "CatPaw")],
    rendererHints: ["app.asar/dist/index.html", "dist/index.html"],
    kind: "generic-work",
    acceptsGenericThemes: true,
    darwin: { appBundles: ["CatPaw.app"], executableNames: ["CatPaw"] },
    linux: { executableNames: ["catpaw", "CatPaw"], desktopFiles: ["catpaw.desktop"] }
  },
  {
    id: "zcode",
    name: "ZCode",
    exeNames: ["ZCode.exe"],
    processName: "ZCode.exe",
    defaultPort: 9344,
    installPaths: ["D:\\Program Files\\ZCode", path__namespace.join(localAppData, "Programs", "ZCode"), path__namespace.join(programFiles, "ZCode")],
    rendererHints: ["out/renderer/index.html", "renderer/index.html"],
    kind: "generic-work",
    acceptsGenericThemes: true,
    darwin: { appBundles: ["ZCode.app"], executableNames: ["ZCode"] },
    linux: { executableNames: ["zcode", "ZCode"], desktopFiles: ["zcode.desktop"] }
  },
  {
    id: "qwen-office",
    name: "千问办公",
    exeNames: ["QwenWorkCN.exe"],
    processName: "QwenWorkCN.exe",
    defaultPort: 9345,
    installPaths: ["D:\\Program Files\\QwenWorkCN", path__namespace.join(localAppData, "Programs", "QwenWorkCN"), path__namespace.join(programFiles, "QwenWorkCN")],
    rendererHints: ["out/renderer/index.html", "renderer/index.html"],
    kind: "generic-work",
    devToolsActivePort: path__namespace.join(roamingAppData, "QwenWorkCN", "DevToolsActivePort"),
    acceptsGenericThemes: true,
    darwin: { appBundles: ["QwenWorkCN.app", "Qwen Work.app"], executableNames: ["QwenWorkCN", "Qwen Work"] },
    linux: { executableNames: ["qwen-work", "qwenwork", "QwenWorkCN"], desktopFiles: ["qwen-work.desktop", "qwenwork.desktop"] }
  },
  {
    id: "hana-agent",
    name: "HanaAgent",
    exeNames: ["HanaAgent.exe"],
    processName: "HanaAgent.exe",
    defaultPort: 9346,
    installPaths: [path__namespace.join(localAppData, "Programs", "HanaAgent"), path__namespace.join(programFiles, "HanaAgent"), path__namespace.join(programFilesX86, "HanaAgent")],
    rendererHints: [".hanako/artifacts/renderer/", "artifacts/renderer/", "/index.html"],
    kind: "generic-work",
    acceptsGenericThemes: true,
    darwin: { appBundles: ["HanaAgent.app"], executableNames: ["HanaAgent"] },
    linux: { executableNames: ["hana-agent", "HanaAgent"], desktopFiles: ["hana-agent.desktop"] }
  },
  {
    id: "kimi",
    name: "Kimi Work",
    exeNames: ["Kimi.exe"],
    processName: "Kimi.exe",
    defaultPort: 9347,
    installPaths: ["D:\\Program Files\\Kimi", path__namespace.join(localAppData, "Programs", "Kimi"), path__namespace.join(programFiles, "Kimi"), path__namespace.join(programFilesX86, "Kimi")],
    rendererHints: ["kimi-agent.html", "kimichat.html", "https://www.kimi.com/"],
    kind: "generic-work",
    devToolsActivePort: path__namespace.join(roamingAppData, "kimi-desktop", "DevToolsActivePort"),
    acceptsGenericThemes: true,
    darwin: { appBundles: ["Kimi.app"], executableNames: ["Kimi"] },
    linux: { executableNames: ["kimi", "Kimi"], desktopFiles: ["kimi.desktop"] }
  },
  {
    id: "opencode",
    name: "OpenCode",
    exeNames: ["OpenCode.exe"],
    processName: "OpenCode.exe",
    defaultPort: 9348,
    installPaths: [path__namespace.join(localAppData, "Programs", "@opencode-aidesktop"), path__namespace.join(localAppData, "Programs", "OpenCode"), path__namespace.join(programFiles, "OpenCode"), path__namespace.join(programFilesX86, "OpenCode")],
    rendererHints: ["oc://renderer/index.html"],
    kind: "generic-work",
    devToolsActivePort: path__namespace.join(roamingAppData, "ai.opencode.desktop", "DevToolsActivePort"),
    windowsPathScopedKill: true,
    acceptsGenericThemes: true,
    darwin: { appBundles: ["OpenCode.app"], executableNames: ["OpenCode"] },
    linux: { executableNames: ["opencode-desktop", "OpenCode"], desktopFiles: ["opencode-desktop.desktop"] }
  },
  {
    id: "doubao",
    name: "豆包",
    exeNames: ["Doubao.exe"],
    processName: "Doubao.exe",
    defaultPort: 9349,
    installPaths: [path__namespace.join(localAppData, "Doubao", "Application", "app"), path__namespace.join(localAppData, "Doubao", "Application"), path__namespace.join(programFiles, "Doubao"), path__namespace.join(programFilesX86, "Doubao")],
    rendererHints: ["doubao://doubao-chat/chat"],
    kind: "generic-work",
    windowsPathScopedKill: true,
    acceptsGenericThemes: true,
    darwin: { appBundles: ["Doubao.app"], executableNames: ["Doubao"] },
    linux: { executableNames: ["doubao", "Doubao"], desktopFiles: ["doubao.desktop"] }
  },
  {
    id: "agnes-code",
    name: "AgnesCode",
    exeNames: ["AgnesCode.exe"],
    processName: "AgnesCode.exe",
    defaultPort: 9350,
    installPaths: ["D:\\Program Files\\AgnesCode", path__namespace.join(localAppData, "Programs", "AgnesCode"), path__namespace.join(programFiles, "AgnesCode"), path__namespace.join(programFilesX86, "AgnesCode")],
    rendererHints: ["app.asar/.vite/renderer/main_window/index.html"],
    kind: "generic-work",
    windowsPathScopedKill: true,
    acceptsGenericThemes: true,
    darwin: { appBundles: ["AgnesCode.app"], executableNames: ["AgnesCode"] },
    linux: { executableNames: ["agnes-code", "agnescode", "AgnesCode"], desktopFiles: ["agnes-code.desktop", "agnescode.desktop"] }
  },
  {
    id: "minimax-code",
    name: "MiniMax Code",
    exeNames: ["MiniMax Code.exe"],
    processName: "MiniMax Code.exe",
    defaultPort: 9351,
    installPaths: ["D:\\Program Files\\MiniMax Code", path__namespace.join(localAppData, "Programs", "MiniMax Code"), path__namespace.join(programFiles, "MiniMax Code"), path__namespace.join(programFilesX86, "MiniMax Code")],
    rendererHints: ["app://./archon"],
    kind: "generic-work",
    windowsPathScopedKill: true,
    acceptsGenericThemes: true,
    darwin: { appBundles: ["MiniMax Code.app"], executableNames: ["MiniMax Code"] },
    linux: { executableNames: ["minimax-code", "MiniMax Code"], desktopFiles: ["minimax-code.desktop"] }
  },
  {
    id: "astronclaw",
    name: "AstronClaw",
    exeNames: ["AstronClaw.exe"],
    processName: "AstronClaw.exe",
    defaultPort: 9352,
    installPaths: ["D:\\Program Files\\AstronClaw", path__namespace.join(localAppData, "Programs", "AstronClaw"), path__namespace.join(programFiles, "AstronClaw"), path__namespace.join(programFilesX86, "AstronClaw")],
    rendererHints: ["app.asar/out/renderer/index.html", "out/renderer/index.html"],
    kind: "generic-work",
    windowsPathScopedKill: true,
    acceptsGenericThemes: true,
    darwin: { appBundles: ["AstronClaw.app"], executableNames: ["AstronClaw"] },
    linux: { executableNames: ["astronclaw", "AstronClaw"], desktopFiles: ["astronclaw.desktop"] }
  },
  {
    id: "sparkdesk",
    name: "SparkDesk",
    exeNames: ["SparkDesk.exe"],
    processName: "SparkDesk.exe",
    defaultPort: 9354,
    installPaths: ["D:\\Program Files\\SparkDesk", path__namespace.join(localAppData, "Programs", "SparkDesk"), path__namespace.join(programFiles, "SparkDesk"), path__namespace.join(programFilesX86, "SparkDesk")],
    rendererHints: ["out/renderer/index.html#desk", "out/renderer/index.html"],
    kind: "generic-work",
    windowsPathScopedKill: true,
    acceptsGenericThemes: true,
    darwin: { appBundles: ["SparkDesk.app"], executableNames: ["SparkDesk"] },
    linux: { executableNames: ["sparkdesk", "SparkDesk"], desktopFiles: ["sparkdesk.desktop"] }
  },
  {
    id: "stepfun",
    name: "StepFun",
    exeNames: ["StepFun.exe"],
    processName: "StepFun.exe",
    defaultPort: 9353,
    installPaths: ["D:\\Program Files\\StepFun\\StepFun", path__namespace.join(localAppData, "Programs", "StepFun"), path__namespace.join(programFiles, "StepFun"), path__namespace.join(programFilesX86, "StepFun")],
    rendererHints: ["app://chat-web/"],
    kind: "generic-work",
    devToolsActivePort: path__namespace.join(roamingAppData, "stepfun-desktop", "DevToolsActivePort"),
    windowsPathScopedKill: true,
    acceptsGenericThemes: true,
    darwin: { appBundles: ["StepFun.app"], executableNames: ["StepFun"] },
    linux: { executableNames: ["stepfun", "StepFun"], desktopFiles: ["stepfun.desktop"] }
  },
  {
    id: "deepseek-harness",
    name: "DeepSeek Harness",
    exeNames: ["DeepSeek Harness.exe"],
    processName: "DeepSeek Harness.exe",
    defaultPort: 9355,
    installPaths: ["D:\\Program Files\\DeepSeek Harness", path__namespace.join(localAppData, "Programs", "DeepSeek Harness"), path__namespace.join(programFiles, "DeepSeek Harness"), path__namespace.join(programFilesX86, "DeepSeek Harness")],
    rendererHints: ["dsh-desktop-platform="],
    kind: "generic-work",
    windowsPathScopedKill: true,
    acceptsGenericThemes: true,
    darwin: { appBundles: ["DeepSeek Harness.app"], executableNames: ["DeepSeek Harness"] },
    linux: { executableNames: ["deepseek-harness", "DeepSeek Harness"], desktopFiles: ["deepseek-harness.desktop"] }
  }
];
function getAppDefinition(appId) {
  return APP_DEFINITIONS.find((app) => app.id === appId);
}
const execFileAsync$2 = util.promisify(child_process.execFile);
function findWindowsAppsOpenAIExes() {
  const results = [];
  const windowsApps = path__namespace.join(process.env.ProgramFiles || "C:\\Program Files", "WindowsApps");
  if (!fs__namespace.existsSync(windowsApps)) return results;
  try {
    const items = fs__namespace.readdirSync(windowsApps);
    for (const item of items) {
      if (/^OpenAI\.Codex_\d+/i.test(item)) {
        const candidate = path__namespace.join(windowsApps, item, "app", "ChatGPT.exe");
        if (fs__namespace.existsSync(candidate)) {
          results.push(candidate);
        }
      }
    }
  } catch {
  }
  return results;
}
async function findCodexAppx() {
  const script = `
$ErrorActionPreference = 'SilentlyContinue'
$package = Get-AppxPackage -Name 'OpenAI.Codex' -ErrorAction SilentlyContinue
if (-not $package) { exit 1 }
$manifest = Get-AppxPackageManifest -Package $package.PackageFullName
$rel = [string]$manifest.Package.Applications.Application.Executable
if (-not $rel) { exit 1 }
$full = Join-Path $package.InstallLocation $rel
if (Test-Path -LiteralPath $full -PathType Leaf) { Write-Output $full } else { exit 1 }
`;
  try {
    const { stdout } = await execFileAsync$2(
      "powershell.exe",
      ["-NoLogo", "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-Command", script],
      { encoding: "utf8", maxBuffer: 4 * 1024 * 1024 }
    );
    const found = stdout.trim();
    if (found && fs__namespace.existsSync(found)) return found;
  } catch {
  }
  return null;
}
async function discoverApps() {
  const results = [];
  const platform = os__namespace.platform();
  if (platform !== "win32") {
    for (const definition of APP_DEFINITIONS) {
      const found = await findDefinitionOnCurrentPlatform(definition);
      if (found) results.push({ appId: definition.id, name: definition.name, path: found });
    }
    return results;
  }
  for (const definition of APP_DEFINITIONS.filter((app) => app.id !== "codex")) {
    const found = findWindowsExecutable(definition.exeNames, definition.installPaths);
    if (found) results.push({ appId: definition.id, name: definition.name, path: found });
  }
  const codex = findWindowsExecutable(["Codex.exe", "ChatGPT.exe"], [
    path__namespace.join(process.env.LOCALAPPDATA || "", "Programs", "Codex"),
    path__namespace.join(process.env.LOCALAPPDATA || "", "Programs", "OpenAI", "Codex"),
    ...findWindowsAppsOpenAIExes()
  ]);
  const codexAppx = !codex ? await findCodexAppx() : null;
  if (codexAppx) results.push({ appId: "codex", name: "Codex", path: codexAppx });
  else if (codex) results.push({ appId: "codex", name: "Codex", path: codex });
  return results;
}
async function findDefinitionOnCurrentPlatform(definition) {
  var _a, _b, _c;
  const platform = os__namespace.platform();
  if (platform === "darwin") {
    for (const bundleName of ((_a = definition.darwin) == null ? void 0 : _a.appBundles) ?? []) {
      const bundlePath = path__namespace.join("/Applications", bundleName);
      if (fs__namespace.existsSync(bundlePath)) return bundlePath;
    }
    return null;
  }
  if (platform === "linux") {
    for (const desktopFile of ((_b = definition.linux) == null ? void 0 : _b.desktopFiles) ?? []) {
      const executablePath = await findLinuxDesktopExecutable$1(desktopFile);
      if (executablePath) return executablePath;
    }
    for (const executableName of ((_c = definition.linux) == null ? void 0 : _c.executableNames) ?? []) {
      try {
        const { stdout } = await execFileAsync$2("which", [executableName], { encoding: "utf8" });
        const executablePath = stdout.trim();
        if (executablePath && fs__namespace.existsSync(executablePath)) return executablePath;
      } catch {
      }
    }
  }
  return null;
}
async function findLinuxDesktopExecutable$1(desktopFile) {
  for (const desktopPath of [
    path__namespace.join(os__namespace.homedir(), ".local", "share", "applications", desktopFile),
    path__namespace.join("/usr/share/applications", desktopFile),
    path__namespace.join("/usr/local/share/applications", desktopFile)
  ]) {
    if (!fs__namespace.existsSync(desktopPath)) continue;
    const match = fs__namespace.readFileSync(desktopPath, "utf8").match(/^Exec=(?:env\s+\S+=\S+\s+)*(?:"([^"]+)"|(\S+))/m);
    const executable = (match == null ? void 0 : match[1]) || (match == null ? void 0 : match[2]);
    if (!executable) continue;
    if (path__namespace.isAbsolute(executable) && fs__namespace.existsSync(executable)) return executable;
    try {
      const { stdout } = await execFileAsync$2("which", [executable], { encoding: "utf8" });
      const resolved = stdout.trim();
      if (resolved && fs__namespace.existsSync(resolved)) return resolved;
    } catch {
    }
  }
  return null;
}
function findWindowsExecutable(exeNames, installPaths) {
  for (const base of installPaths) {
    if (!base || !fs__namespace.existsSync(base)) continue;
    const baseItem = fs__namespace.statSync(base);
    if (baseItem.isFile() && exeNames.some((exe) => path__namespace.basename(base).toLowerCase() === exe.toLowerCase())) return base;
    for (const exe of exeNames) {
      const direct = path__namespace.join(base, exe);
      if (fs__namespace.existsSync(direct)) return direct;
    }
    try {
      const versionDirs = fs__namespace.readdirSync(base, { withFileTypes: true }).filter((item) => item.isDirectory()).sort((left, right) => right.name.localeCompare(left.name, void 0, { numeric: true }));
      for (const item of versionDirs) {
        for (const exe of exeNames) {
          const candidate = path__namespace.join(base, item.name, exe);
          if (fs__namespace.existsSync(candidate)) return candidate;
        }
      }
    } catch {
    }
  }
  return null;
}
const execFileAsync$1 = util.promisify(child_process.execFile);
async function isAppRunning(appId) {
  const definition = getAppDefinition(appId);
  if (!definition) return false;
  const processNames = getPlatformProcessNames(definition);
  if (os__namespace.platform() === "win32") {
    for (const processName of processNames) {
      try {
        const { stdout } = await execFileAsync$1("tasklist.exe", [
          "/FI",
          `IMAGENAME eq ${processName}`,
          "/FO",
          "CSV",
          "/NH"
        ], { encoding: "utf8", windowsHide: true });
        if (stdout.split(/\r?\n/).some((line) => line.trim().toLowerCase().startsWith(`"${processName.toLowerCase()}"`))) {
          return true;
        }
      } catch {
      }
    }
    return false;
  }
  for (const processName of processNames) {
    try {
      await execFileAsync$1("pgrep", ["-f", processName], { encoding: "utf8" });
      return true;
    } catch {
    }
  }
  return false;
}
async function launchApp(appId, themeId) {
  const profile = getAppDefinition(appId);
  if (!profile) return { success: false, error: `Unknown app: ${appId}` };
  try {
    const appPath = getAppPath(appId);
    console.log(`[launcher] Killing existing ${appId} instances...`);
    await killExistingInstances(appId, appPath);
    await waitForPortToClose(profile.defaultPort, 15e3);
    const port = await findAvailablePort(profile.defaultPort);
    if (port !== profile.defaultPort) {
      console.warn(`[launcher] Default CDP port ${profile.defaultPort} is unavailable; using ${port}`);
    }
    const args = [`--remote-debugging-port=${port}`];
    if (appId === "codex") {
      args.push("--disable-extensions");
    }
    if (themeId && appId !== "kimi") {
      args.push(`--dream-theme=${themeId}`);
    }
    if (appId === "agnes-code" && os__namespace.platform() === "win32") {
      await enableAgnesCodeTransparentTitleBar(appPath);
    }
    const devToolsActivePort = os__namespace.platform() === "win32" ? profile.devToolsActivePort : void 0;
    if (devToolsActivePort) {
      try {
        fs__namespace.unlinkSync(devToolsActivePort);
      } catch {
      }
    }
    console.log(`[launcher] Launching ${appPath} with args: ${args.join(" ")}`);
    const launchEnvironment = getLaunchEnvironment(appId, appPath, port);
    const pid = appId === "kimi" && os__namespace.platform() === "win32" ? await launchKimiDetached(appPath, args) : launchDetached(appPath, args, launchEnvironment);
    console.log(`[launcher] Spawned process${pid ? ` with PID: ${pid}` : ""}`);
    console.log(`[launcher] Waiting for CDP port ${port} to be ready...`);
    let actualPort = port;
    if (devToolsActivePort) {
      if (appId === "stepfun") {
        actualPort = await waitForDevToolsActivePortFile(devToolsActivePort, 3e4);
        launchDetached(appPath, [], launchEnvironment);
        await verifyRendererEndpoint(actualPort, profile.rendererHints, 3e4);
      } else {
        actualPort = await waitForDevToolsActivePort(devToolsActivePort, profile.rendererHints, 3e4);
      }
    } else {
      await waitForPort(port, 3e4);
    }
    console.log(`[launcher] CDP port ${actualPort} is ready`);
    if (appId === "hana-agent" || appId === "kimi") {
      await waitForStableRenderer(actualPort, profile.rendererHints, 3e4, appId === "kimi" ? 750 : 3e3);
    }
    return { success: true, port: actualPort };
  } catch (error) {
    console.error(`[launcher] Launch failed:`, error);
    return { success: false, error: error.message };
  }
}
function launchDetached(appPath, args, env) {
  const child = child_process.spawn(appPath, args, {
    detached: true,
    stdio: "ignore",
    env
  });
  child.unref();
  return child.pid;
}
async function launchKimiDetached(appPath, args) {
  const shortcutPath = path__namespace.join(os__namespace.tmpdir(), `dream-work-kimi-${process.pid}-${Date.now()}.lnk`);
  const env = {
    ...getCleanLaunchEnvironment(),
    DREAM_WORK_LAUNCH_EXE: appPath,
    DREAM_WORK_LAUNCH_ARGS: JSON.stringify(args),
    DREAM_WORK_LAUNCH_CWD: path__namespace.dirname(appPath),
    DREAM_WORK_LAUNCH_SHORTCUT: shortcutPath
  };
  const script = [
    "[string[]]$launchArgs = @($env:DREAM_WORK_LAUNCH_ARGS | ConvertFrom-Json)",
    "$shell = New-Object -ComObject WScript.Shell",
    "$shortcut = $shell.CreateShortcut($env:DREAM_WORK_LAUNCH_SHORTCUT)",
    "$shortcut.TargetPath = $env:DREAM_WORK_LAUNCH_EXE",
    "$shortcut.Arguments = [string]::Join(' ', $launchArgs)",
    "$shortcut.WorkingDirectory = $env:DREAM_WORK_LAUNCH_CWD",
    "$shortcut.Save()"
  ].join("; ");
  await execFileAsync$1("powershell.exe", [
    "-NoLogo",
    "-NoProfile",
    "-NonInteractive",
    "-ExecutionPolicy",
    "Bypass",
    "-Command",
    script
  ], { env, windowsHide: true });
  const explorer = child_process.spawn(path__namespace.join(process.env.WINDIR || "C:\\Windows", "explorer.exe"), [shortcutPath], {
    detached: true,
    stdio: "ignore",
    env: getCleanLaunchEnvironment()
  });
  explorer.unref();
  const cleanupTimer = setTimeout(() => {
    try {
      fs__namespace.unlinkSync(shortcutPath);
    } catch {
    }
  }, 15e3);
  cleanupTimer.unref();
  return void 0;
}
function getCleanLaunchEnvironment() {
  const env = { ...process.env };
  for (const key of [
    "VITE_DEV_SERVER_URL",
    "ELECTRON_RENDERER_URL",
    "MAIN_VITE_DEV_SERVER_URL",
    "ELECTRON_RUN_AS_NODE"
  ]) {
    delete env[key];
  }
  return env;
}
function getLaunchEnvironment(appId, appPath, port) {
  const env = getCleanLaunchEnvironment();
  if (appId === "agnes-code") {
    env.AGNES_DEV = "1";
    env.ENABLE_PLAYWRIGHT = "1";
    env.PLAYWRIGHT_DEBUG_PORT = String(port);
    env.AGNESD_BINARY = path__namespace.join(path__namespace.dirname(appPath), "resources", "bin", os__namespace.platform() === "win32" ? "agnesd.exe" : "agnesd");
  }
  return env;
}
async function enableAgnesCodeTransparentTitleBar(appPath) {
  const appDirectory = path__namespace.dirname(appPath);
  const asarPath = path__namespace.join(appDirectory, "resources", "app.asar");
  const executableBackupPath = `${appPath}.dream-work-original`;
  const asarBackupPath = `${asarPath}.dream-work-titlebar.json`;
  const archive = originalFs__namespace.readFileSync(asarPath);
  const source = archive.toString("latin1");
  const patchedPattern = /function ([\w$]+)\(e,t="sidebar"\)\{return\{color:"#00000000",symbolColor:([\w$]+)\[e\],height:32\}\}/;
  if (patchedPattern.test(source)) {
    disableEmbeddedAsarIntegrityValidation(appPath);
    console.log("[launcher] AgnesCode native title bar overlay is already transparent");
    return;
  }
  const originalPattern = /function ([\w$]+)\(e,t="sidebar"\)\{return\{color:t==="content"\?([\w$]+)\(e\):([\w$]+)\(e\),symbolColor:([\w$]+)\[e\],height:32\}\}/;
  const match = originalPattern.exec(source);
  if (!match || match.index < 0) {
    throw new Error("AgnesCode title bar implementation was not recognized; the installed version may have changed");
  }
  originalFs__namespace.copyFileSync(appPath, executableBackupPath);
  disableEmbeddedAsarIntegrityValidation(appPath);
  const original = match[0];
  const replacement = `function ${match[1]}(e,t="sidebar"){return{color:"#00000000",symbolColor:${match[4]}[e],height:32}}`;
  if (replacement.length > original.length) {
    throw new Error("AgnesCode title bar patch does not fit the original ASAR entry");
  }
  originalFs__namespace.writeFileSync(asarBackupPath, JSON.stringify({
    archiveSize: archive.length,
    offset: match.index,
    original: Buffer.from(original, "latin1").toString("base64")
  }));
  const paddedReplacement = Buffer.from(replacement.padEnd(original.length, " "), "latin1");
  const file = originalFs__namespace.openSync(asarPath, "r+");
  try {
    originalFs__namespace.writeSync(file, paddedReplacement, 0, paddedReplacement.length, match.index);
    originalFs__namespace.fsyncSync(file);
  } finally {
    originalFs__namespace.closeSync(file);
  }
  console.log("[launcher] Patched AgnesCode native window controls overlay to transparent");
}
function disableEmbeddedAsarIntegrityValidation(appPath) {
  const sentinel = Buffer.from("dL7pKGdnNz796PbbjQWNKmHXBZaB9tsX", "ascii");
  const executable = originalFs__namespace.readFileSync(appPath);
  const firstSentinel = executable.indexOf(sentinel);
  const lastSentinel = executable.lastIndexOf(sentinel);
  if (firstSentinel < 0) {
    throw new Error("AgnesCode Electron fuse wire was not found");
  }
  const sentinels = firstSentinel === lastSentinel ? [firstSentinel] : [firstSentinel, lastSentinel];
  let changed = false;
  for (const sentinelOffset of sentinels) {
    const wireOffset = sentinelOffset + sentinel.length;
    const version = executable[wireOffset];
    const length = executable[wireOffset + 1];
    if (version !== 1 || length <= 4) {
      throw new Error(`Unsupported AgnesCode Electron fuse wire: version=${version}, length=${length}`);
    }
    const integrityFuseOffset = wireOffset + 2 + 4;
    if (executable[integrityFuseOffset] !== 48) {
      executable[integrityFuseOffset] = 48;
      changed = true;
    }
  }
  if (changed) {
    originalFs__namespace.writeFileSync(appPath, executable);
    console.log("[launcher] Disabled AgnesCode embedded ASAR integrity validation");
  }
}
function getPlatformProcessNames(definition) {
  var _a, _b;
  if (os__namespace.platform() === "darwin") return ((_a = definition.darwin) == null ? void 0 : _a.executableNames) ?? [];
  if (os__namespace.platform() === "linux") return ((_b = definition.linux) == null ? void 0 : _b.executableNames) ?? [];
  return [...new Set([definition.processName, ...definition.exeNames].filter(Boolean))];
}
async function waitForDevToolsActivePort(filePath, rendererHints, timeoutMs) {
  const start = Date.now();
  let lastPort = 0;
  while (Date.now() - start < timeoutMs) {
    try {
      const firstLine = fs__namespace.readFileSync(filePath, "utf8").split(/\r?\n/, 1)[0];
      const port = Number(firstLine);
      if (Number.isInteger(port) && port > 0) {
        lastPort = port;
        await verifyRendererEndpoint(port, rendererHints, 3e3);
        return port;
      }
    } catch {
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`DevToolsActivePort did not expose a live renderer${lastPort ? ` on port ${lastPort}` : ""}: ${filePath}`);
}
async function waitForDevToolsActivePortFile(filePath, timeoutMs) {
  const start = Date.now();
  let lastPort = 0;
  while (Date.now() - start < timeoutMs) {
    try {
      const firstLine = fs__namespace.readFileSync(filePath, "utf8").split(/\r?\n/, 1)[0];
      const port = Number(firstLine);
      if (Number.isInteger(port) && port > 0) {
        lastPort = port;
        const response = await fetch(`http://127.0.0.1:${port}/json/version`, { signal: AbortSignal.timeout(1e3) });
        if (response.ok) return port;
      }
    } catch {
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`DevToolsActivePort did not expose a live endpoint${lastPort ? ` on port ${lastPort}` : ""}: ${filePath}`);
}
async function verifyRendererEndpoint(port, rendererHints, timeoutMs) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/list`, { signal: AbortSignal.timeout(1e3) });
      if (response.ok) {
        const targets = await response.json();
        if (Array.isArray(targets) && targets.some((target) => (target == null ? void 0 : target.type) === "page" && rendererHints.some((hint) => String(target.url).includes(hint)))) return;
      }
    } catch {
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`CDP renderer endpoint is not ready on port ${port}`);
}
async function waitForStableRenderer(port, rendererHints, timeoutMs, stableMs) {
  const startedAt = Date.now();
  let stableId = "";
  let stableSince = 0;
  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/list`, { signal: AbortSignal.timeout(1e3) });
      const targets = await response.json();
      const target = targets.find((item) => (item == null ? void 0 : item.type) === "page" && rendererHints.some((hint) => String(item.url).includes(hint)));
      if (target == null ? void 0 : target.id) {
        if (target.id !== stableId) {
          stableId = target.id;
          stableSince = Date.now();
        } else if (Date.now() - stableSince >= stableMs) {
          console.log(`[launcher] Stable renderer ${stableId} confirmed`);
          return;
        }
      }
    } catch {
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Renderer did not stabilize on port ${port}`);
}
async function findAvailablePort(startPort) {
  for (let port = startPort; port <= startPort + 100; port++) {
    if (await canBindPort(port)) return port;
  }
  throw new Error(`No available CDP port found between ${startPort} and ${startPort + 100}`);
}
function canBindPort(port) {
  return new Promise((resolve) => {
    const server = net__namespace.createServer();
    server.unref();
    server.once("error", () => resolve(false));
    server.listen(port, "127.0.0.1", () => {
      server.close((error) => resolve(!error));
    });
  });
}
async function waitForPort(port, timeoutMs) {
  const start = Date.now();
  let lastError = "unknown";
  while (Date.now() - start < timeoutMs) {
    try {
      await new Promise((resolve, reject) => {
        const socket = net__namespace.createConnection(port, "127.0.0.1", () => {
          socket.end();
          resolve();
        });
        socket.once("error", (e) => {
          lastError = e.message;
          reject(e);
        });
        setTimeout(() => {
          socket.destroy();
          reject(new Error("timeout"));
        }, 1e3);
      });
      console.log(`[launcher] Port ${port} is open, verifying CDP endpoint...`);
      await verifyCdpEndpoint(port, 15e3);
      console.log(`[launcher] CDP endpoint verified on port ${port}`);
      return;
    } catch (e) {
      lastError = e.message;
      console.log(`[launcher] Port check failed: ${e.message}, retrying...`);
      await new Promise((r) => setTimeout(r, 1e3));
    }
  }
  throw new Error(`CDP port ${port} did not become ready within ${timeoutMs}ms (last error: ${lastError})`);
}
async function verifyCdpEndpoint(port, timeoutMs) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      await new Promise((resolve, reject) => {
        const req = http__namespace.request({
          hostname: "127.0.0.1",
          port,
          path: "/json/version",
          method: "GET",
          timeout: 2e3
        }, (res) => {
          let data = "";
          res.on("data", (chunk) => {
            data += chunk;
          });
          res.on("end", () => {
            if (res.statusCode === 200) {
              console.log(`[launcher] CDP version response: ${data.substring(0, 200)}`);
              resolve();
            } else {
              reject(new Error(`HTTP ${res.statusCode}`));
            }
          });
        });
        req.on("error", reject);
        req.on("timeout", () => {
          req.destroy();
          reject(new Error("timeout"));
        });
        req.end();
      });
      return;
    } catch (e) {
      if (Date.now() - start >= timeoutMs) {
        throw e;
      }
      await new Promise((r) => setTimeout(r, 1e3));
    }
  }
}
async function killExistingInstances(appId, appPath) {
  const platform = os__namespace.platform();
  const definition = getAppDefinition(appId);
  if (!definition) return;
  const exeNames = getPlatformProcessNames(definition);
  try {
    if (platform === "win32") {
      if (definition.windowsPathScopedKill) {
        const script = `$target = [IO.Path]::GetFullPath($env:DREAM_WORK_TARGET_EXE); Get-CimInstance Win32_Process -Filter "Name='${definition.processName.replace(/'/g, "''")}'" | Where-Object { $_.ExecutablePath -and [IO.Path]::GetFullPath($_.ExecutablePath) -ieq $target } | ForEach-Object { taskkill.exe /T /F /PID $_.ProcessId *> $null }`;
        await execFileAsync$1("powershell.exe", [
          "-NoLogo",
          "-NoProfile",
          "-NonInteractive",
          "-ExecutionPolicy",
          "Bypass",
          "-Command",
          script
        ], {
          env: { ...process.env, DREAM_WORK_TARGET_EXE: appPath },
          windowsHide: true
        }).catch(() => {
        });
        console.log(`[launcher] Killed existing ${appId} instances at ${appPath}`);
        return;
      }
      const { execSync } = require("child_process");
      for (const exeName of exeNames) {
        try {
          execSync(`taskkill /T /F /IM "${exeName}" 2>nul`, { stdio: "ignore" });
          console.log(`[launcher] Killed existing ${exeName} process tree`);
        } catch {
        }
      }
    } else if (platform === "darwin") {
      const { execSync } = require("child_process");
      for (const exeName of exeNames) {
        try {
          execSync(`pkill -f "${exeName}" 2>/dev/null || true`, { stdio: "ignore" });
          console.log(`[launcher] Killed existing ${exeName} processes`);
        } catch {
        }
      }
    } else if (platform === "linux") {
      const { execSync } = require("child_process");
      for (const exeName of exeNames) {
        try {
          execSync(`pkill -f "${exeName}" 2>/dev/null || true`, { stdio: "ignore" });
          console.log(`[launcher] Killed existing ${exeName} processes`);
        } catch {
        }
      }
    }
  } catch (e) {
    console.warn(`[launcher] Failed to kill existing instances:`, e);
  }
}
async function waitForPortToClose(port, timeoutMs) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const open = await new Promise((resolve) => {
      const socket = net__namespace.createConnection(port, "127.0.0.1");
      socket.once("connect", () => {
        socket.destroy();
        resolve(true);
      });
      socket.once("error", () => resolve(false));
      socket.setTimeout(500, () => {
        socket.destroy();
        resolve(false);
      });
    });
    if (!open) {
      console.log(`[launcher] Previous CDP port ${port} is closed`);
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Existing ${port} CDP service did not stop; refusing to inject into the old application instance`);
}
function getAppPath(appId) {
  var _a, _b, _c, _d;
  const definition = getAppDefinition(appId);
  if (!definition) throw new Error(`Unknown app: ${appId}`);
  const platform = os__namespace.platform();
  if (platform === "win32") {
    for (const base of definition.installPaths) {
      if (!base || !fs__namespace.existsSync(base)) continue;
      if (fs__namespace.statSync(base).isFile()) return base;
      for (const exeName of definition.exeNames) {
        const direct = path__namespace.join(base, exeName);
        if (fs__namespace.existsSync(direct)) return direct;
      }
      const versions = fs__namespace.readdirSync(base, { withFileTypes: true }).filter((item) => item.isDirectory()).sort((a, b) => b.name.localeCompare(a.name, void 0, { numeric: true }));
      for (const version of versions) {
        for (const exeName of definition.exeNames) {
          const candidate = path__namespace.join(base, version.name, exeName);
          if (fs__namespace.existsSync(candidate)) return candidate;
        }
      }
    }
    const exeNames = definition.exeNames;
    const scanDirs = [process.env.ProgramFiles, process.env["ProgramFiles(x86)"]].filter(Boolean);
    for (const dir of scanDirs) {
      if (!dir || !fs__namespace.existsSync(dir)) continue;
      const items = fs__namespace.readdirSync(dir);
      const match = items.find((item) => item.toLowerCase().includes(appId.replace("-", "")) || item.toLowerCase().includes(definition.name.toLowerCase()));
      if (match) {
        const full = path__namespace.join(dir, match);
        for (const exeName of exeNames) {
          const exe = path__namespace.join(full, exeName);
          if (fs__namespace.existsSync(exe)) return exe;
        }
      }
    }
    if (appId === "codex") {
      const windowsAppsPath = path__namespace.join(process.env.ProgramFiles || "C:\\Program Files", "WindowsApps");
      console.log("[launcher] Codex WindowsApps fallback, path:", windowsAppsPath);
      try {
        const items = fs__namespace.readdirSync(windowsAppsPath);
        const match = items.find((item) => /^OpenAI\.Codex_\d+/i.test(item));
        if (match) {
          const candidate = path__namespace.join(windowsAppsPath, match, "app", "ChatGPT.exe");
          if (fs__namespace.existsSync(candidate)) {
            console.log("[launcher] Found Codex via WindowsApps scan:", candidate);
            return candidate;
          }
        }
      } catch (e) {
        console.log("[launcher] WindowsApps scan error:", e.message);
      }
      try {
        const { execFileSync } = require("child_process");
        const script = `Get-AppxPackage -Name 'OpenAI.Codex' -ErrorAction SilentlyContinue | ForEach-Object { Join-Path $_.InstallLocation (Get-AppxPackageManifest -Package $_.PackageFullName).Package.Applications.Application.Executable }`;
        console.log("[launcher] Running PowerShell fallback...");
        const result = execFileSync("powershell.exe", ["-NoLogo", "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-Command", script], { encoding: "utf8", stdio: ["pipe", "pipe", "ignore"] }).trim();
        console.log("[launcher] PowerShell result:", result);
        if (result && fs__namespace.existsSync(result)) return result;
      } catch (e) {
        console.log("[launcher] PowerShell fallback error:", e.message);
      }
    }
  } else if (platform === "darwin") {
    for (const bundleName of ((_a = definition.darwin) == null ? void 0 : _a.appBundles) ?? []) {
      const appBundle = path__namespace.join("/Applications", bundleName);
      if (!fs__namespace.existsSync(appBundle)) continue;
      for (const executableName of ((_b = definition.darwin) == null ? void 0 : _b.executableNames) ?? []) {
        const executable = path__namespace.join(appBundle, "Contents", "MacOS", executableName);
        if (fs__namespace.existsSync(executable)) return executable;
      }
    }
  } else if (platform === "linux") {
    const exeNames = ((_c = definition.linux) == null ? void 0 : _c.executableNames) ?? [];
    for (const desktopFile of ((_d = definition.linux) == null ? void 0 : _d.desktopFiles) ?? []) {
      const desktopExecutable = findLinuxDesktopExecutable(desktopFile);
      if (desktopExecutable) return desktopExecutable;
    }
    const searchPaths = [
      "/usr/bin",
      "/usr/local/bin",
      "/opt",
      path__namespace.join(os__namespace.homedir(), ".local", "bin"),
      "/snap/bin"
    ];
    for (const base of searchPaths) {
      if (!fs__namespace.existsSync(base)) continue;
      for (const exe of exeNames) {
        const full = path__namespace.join(base, exe);
        if (fs__namespace.existsSync(full)) return full;
      }
    }
    for (const exe of exeNames) {
      try {
        const { execFileSync } = require("child_process");
        const resolved = execFileSync("which", [exe], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
        if (resolved && fs__namespace.existsSync(resolved)) return resolved;
      } catch {
      }
    }
  }
  throw new Error(`Could not find ${appId} executable`);
}
function findLinuxDesktopExecutable(desktopFile) {
  for (const desktopPath of [
    path__namespace.join(os__namespace.homedir(), ".local", "share", "applications", desktopFile),
    path__namespace.join("/usr/share/applications", desktopFile),
    path__namespace.join("/usr/local/share/applications", desktopFile)
  ]) {
    if (!fs__namespace.existsSync(desktopPath)) continue;
    const match = fs__namespace.readFileSync(desktopPath, "utf8").match(/^Exec=(?:env\s+\S+=\S+\s+)*(?:"([^"]+)"|(\S+))/m);
    const executable = (match == null ? void 0 : match[1]) || (match == null ? void 0 : match[2]);
    if (!executable) continue;
    if (path__namespace.isAbsolute(executable) && fs__namespace.existsSync(executable)) return executable;
    try {
      const { execFileSync } = require("child_process");
      const resolved = execFileSync("which", [executable], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
      if (resolved && fs__namespace.existsSync(resolved)) return resolved;
    } catch {
    }
  }
  return void 0;
}
const DEFAULT_WAIT_TIMEOUT_MS = 5e3;
const DEFAULT_POLL_MS = 100;
const DEFAULT_COMMAND_TIMEOUT_MS = 15e3;
const DEFAULT_CONNECT_TIMEOUT_MS = 1e4;
const DEFAULT_DISCOVERY_TIMEOUT_MS = 5e3;
function validatePort(port) {
  if (!Number.isInteger(port) || port < 1024 || port > 65535) {
    throw new TypeError(`port must be an integer from 1024 through 65535`);
  }
  return port;
}
function validateDuration(value, name, options = {}) {
  const minimum = options.allowZero ? 0 : Number.EPSILON;
  if (!Number.isFinite(value) || value < minimum) {
    const qualifier = options.allowZero ? "non-negative" : "positive";
    throw new TypeError(`${name} must be a finite ${qualifier} number`);
  }
  return value;
}
function parseLoopbackWebSocketUrl(value) {
  if (typeof value !== "string" || value.length === 0 || value !== value.trim()) {
    throw new TypeError("webSocketDebuggerUrl must be a non-empty URL string");
  }
  let parsed;
  try {
    parsed = new URL(value);
  } catch (error) {
    throw new TypeError(`webSocketDebuggerUrl is invalid: ${error.message}`);
  }
  if (parsed.protocol !== "ws:" || parsed.hostname !== "127.0.0.1" || parsed.username || parsed.password || parsed.hash || !parsed.port) {
    throw new TypeError("webSocketDebuggerUrl must use ws://127.0.0.1 with an explicit port");
  }
  validatePort(Number(parsed.port));
  return parsed;
}
function isRendererTarget(target, rendererUrlHint) {
  if (target === null || typeof target !== "object" || Array.isArray(target) || target.type !== "page" || typeof target.url !== "string" || typeof target.webSocketDebuggerUrl !== "string") {
    return false;
  }
  try {
    parseLoopbackWebSocketUrl(target.webSocketDebuggerUrl);
  } catch {
    return false;
  }
  return target.url.includes(rendererUrlHint);
}
function isAnyPageTarget(target) {
  if (target === null || typeof target !== "object" || Array.isArray(target) || target.type !== "page" || typeof target.url !== "string" || typeof target.webSocketDebuggerUrl !== "string") {
    return false;
  }
  try {
    parseLoopbackWebSocketUrl(target.webSocketDebuggerUrl);
    return true;
  } catch {
    return false;
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function awaitBeforeDeadline(promise, options) {
  const remainingMs = Math.max(0, options.deadline - Date.now());
  let timer = null;
  try {
    return await Promise.race([
      promise,
      new Promise((_, reject) => {
        timer = setTimeout(() => {
          var _a;
          (_a = options.onTimeout) == null ? void 0 : _a.call(options);
          reject(new Error(`${options.label} timed out after ${options.timeoutMs}ms`));
        }, remainingMs);
      })
    ]);
  } finally {
    if (timer) clearTimeout(timer);
  }
}
async function fetchRendererTargets(port, rendererUrlHint, options = {}) {
  const timeoutMs = validateDuration(options.timeoutMs ?? DEFAULT_DISCOVERY_TIMEOUT_MS, "timeoutMs", { allowZero: false });
  const fetchImpl = options.fetchImpl ?? globalThis.fetch;
  if (typeof fetchImpl !== "function") {
    throw new TypeError("fetchImpl must be a function");
  }
  const endpoint = `http://127.0.0.1:${port}/json/list`;
  const controller = new AbortController();
  const deadline = Date.now() + timeoutMs;
  const quiet = options.quiet === true;
  if (!quiet) console.log(`[cdp] fetchRendererTargets: port=${port}, timeoutMs=${timeoutMs}, endpoint=${endpoint}`);
  let response;
  try {
    response = await awaitBeforeDeadline(
      Promise.resolve(fetchImpl(endpoint, { redirect: "error", signal: controller.signal })),
      { deadline, timeoutMs, label: "renderer target discovery", onTimeout: () => controller.abort() }
    );
  } catch (error) {
    if (!quiet) console.log(`[cdp] fetchRendererTargets error:`, error);
    throw new Error(`failed to fetch renderer targets from ${endpoint}: ${error.message}`);
  }
  if (response === null || typeof response !== "object" || !response.ok) {
    throw new Error(`renderer target discovery failed with HTTP ${(response == null ? void 0 : response.status) ?? "unknown"}`);
  }
  let targets;
  try {
    targets = await awaitBeforeDeadline(Promise.resolve(response.json()), {
      deadline,
      timeoutMs,
      label: "renderer target discovery JSON",
      onTimeout: () => controller.abort()
    });
  } catch (error) {
    throw new Error(`malformed renderer target JSON from ${endpoint}: ${error.message}`);
  }
  if (!Array.isArray(targets)) {
    throw new Error("malformed renderer target JSON: expected an array");
  }
  return targets.filter((target) => isRendererTarget(target, rendererUrlHint)).sort(compareTargets);
}
async function waitForRendererTargets(port, rendererUrlHint, options = {}) {
  const timeoutMs = validateDuration(options.timeoutMs ?? DEFAULT_WAIT_TIMEOUT_MS, "timeoutMs", { allowZero: true });
  const pollMs = validateDuration(options.pollMs ?? DEFAULT_POLL_MS, "pollMs", { allowZero: false });
  const fetchImpl = options.fetchImpl ?? globalThis.fetch;
  let elapsedMs = 0;
  const deadline = Date.now() + timeoutMs;
  let lastError = new Error("no renderer discovery attempt completed");
  console.log(`[cdp] waitForRendererTargets: port=${port}, hint=${rendererUrlHint}, timeoutMs=${timeoutMs}`);
  while (true) {
    try {
      const remainingBudgetMs = Math.max(1, Math.min(timeoutMs - elapsedMs, deadline - Date.now()));
      console.log(`[cdp] Attempting fetch: elapsed=${elapsedMs}ms, remainingBudget=${remainingBudgetMs}ms, deadline=${deadline}`);
      const targets = await fetchRendererTargets(port, rendererUrlHint, {
        fetchImpl,
        timeoutMs: remainingBudgetMs
      });
      if (targets.length > 0) return targets;
      lastError = new Error("no matching renderer/index.html page targets");
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      console.log(`[cdp] Fetch error:`, lastError.message);
    }
    if (elapsedMs >= timeoutMs || Date.now() >= deadline) {
      throw new Error(`timed out after ${timeoutMs}ms waiting for renderer targets on 127.0.0.1:${port}: ${lastError.message}`);
    }
    const delayMs = Math.min(pollMs, timeoutMs - elapsedMs);
    await sleep(delayMs);
    elapsedMs += delayMs;
  }
}
class CdpSession {
  constructor(webSocketDebuggerUrl, options = {}) {
    __publicField(this, "webSocketDebuggerUrl");
    __publicField(this, "WebSocketImpl");
    __publicField(this, "commandTimeoutMs");
    __publicField(this, "connectTimeoutMs");
    __publicField(this, "socket", null);
    __publicField(this, "nextRequestId", 1);
    __publicField(this, "pending", /* @__PURE__ */ new Map());
    __publicField(this, "socketOpen", false);
    __publicField(this, "opened", false);
    __publicField(this, "closed", false);
    __publicField(this, "closeStarted", false);
    __publicField(this, "terminalError", null);
    __publicField(this, "openPromise", null);
    __publicField(this, "resolveOpen", null);
    __publicField(this, "rejectOpen", null);
    __publicField(this, "connectTimer", null);
    this.webSocketDebuggerUrl = webSocketDebuggerUrl;
    let WebSocketImpl = null;
    let loadError = null;
    try {
      const ws = require("ws");
      WebSocketImpl = ws ?? null;
      if (!WebSocketImpl) {
        loadError = "ws loaded but WebSocket is undefined";
      }
    } catch (e) {
      loadError = `ws require failed: ${(e == null ? void 0 : e.message) ?? e}`;
    }
    if (!WebSocketImpl) {
      try {
        const undici = require("undici");
        WebSocketImpl = (undici == null ? void 0 : undici.WebSocket) ?? null;
        if (!WebSocketImpl) {
          loadError = "undici loaded but WebSocket is undefined";
        }
      } catch (e) {
        loadError = `undici require failed: ${(e == null ? void 0 : e.message) ?? e}`;
      }
    }
    if (!WebSocketImpl && typeof globalThis.WebSocket === "function") {
      WebSocketImpl = globalThis.WebSocket;
      loadError = null;
    }
    if (!WebSocketImpl) {
      const hint = loadError ? ` (${loadError})` : "";
      throw new Error(`No WebSocket implementation available for CDP${hint}`);
    }
    this.WebSocketImpl = options.WebSocketImpl ?? WebSocketImpl;
    this.commandTimeoutMs = validateDuration(options.commandTimeoutMs ?? DEFAULT_COMMAND_TIMEOUT_MS, "commandTimeoutMs");
    this.connectTimeoutMs = validateDuration(options.connectTimeoutMs ?? DEFAULT_CONNECT_TIMEOUT_MS, "connectTimeoutMs");
  }
  open() {
    if (this.closed) {
      return Promise.reject(this.terminalError ?? new Error("CDP session is closed"));
    }
    if (this.opened) return Promise.resolve(this);
    if (this.openPromise) return this.openPromise;
    this.openPromise = new Promise((resolve, reject) => {
      this.resolveOpen = resolve;
      this.rejectOpen = reject;
    });
    this.connectTimer = setTimeout(() => {
      this.terminate(new Error(`CDP WebSocket connect timed out after ${this.connectTimeoutMs}ms`));
      this.closeSocket();
    }, this.connectTimeoutMs);
    try {
      this.socket = new this.WebSocketImpl(this.webSocketDebuggerUrl);
    } catch (error) {
      this.terminate(new Error(`failed to open CDP WebSocket: ${error.message}`));
      return this.openPromise;
    }
    const socket = this.socket;
    socket.onopen = () => {
      if (this.closed || this.socketOpen) return;
      this.clearConnectTimer();
      this.socketOpen = true;
      Promise.all([this.send("Runtime.enable"), this.send("Page.enable")]).then(() => {
        if (this.closed) return;
        this.opened = true;
        const resolve = this.resolveOpen;
        this.resolveOpen = null;
        this.rejectOpen = null;
        resolve == null ? void 0 : resolve(this);
      }).catch((error) => {
        this.terminate(error);
        this.closeSocket();
      });
    };
    socket.onmessage = (event) => this.handleMessage(event);
    socket.onerror = (event) => {
      const source = event.error;
      const detail = source instanceof Error ? source.message : typeof event.message === "string" && event.message.length > 0 ? event.message : "unknown socket error";
      this.terminate(new Error(`CDP WebSocket error: ${detail}`));
      this.closeSocket();
    };
    socket.onclose = () => {
      this.closeStarted = true;
      this.terminate(new Error("CDP WebSocket closed"));
    };
    return this.openPromise;
  }
  send(method, params = {}, options = {}) {
    if (this.closed) {
      return Promise.reject(this.terminalError ?? new Error("CDP session is closed"));
    }
    if (!this.socketOpen || !this.socket) {
      return Promise.reject(new Error("CDP session is not open"));
    }
    if (typeof method !== "string" || method.length === 0) {
      return Promise.reject(new TypeError("CDP method must be a non-empty string"));
    }
    const timeoutMs = validateDuration(options.timeoutMs ?? this.commandTimeoutMs, "timeoutMs");
    const id = this.nextRequestId++;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error(`CDP ${method} timed out after ${timeoutMs}ms`));
      }, timeoutMs);
      this.pending.set(id, { resolve, reject, timer });
      try {
        this.socket.send(JSON.stringify({ id, method, params }));
      } catch (error) {
        clearTimeout(timer);
        this.pending.delete(id);
        reject(new Error(`failed to send CDP ${method}: ${error.message}`));
      }
    });
  }
  async evaluate(expression, options = {}) {
    var _a, _b, _c;
    if (typeof expression !== "string") {
      throw new TypeError("Runtime.evaluate expression must be a string");
    }
    const response = await this.send("Runtime.evaluate", {
      expression,
      awaitPromise: true,
      returnByValue: true
    }, options);
    if (response == null ? void 0 : response.exceptionDetails) {
      throw new Error(`Runtime.evaluate failed: ${((_a = response.exceptionDetails.exception) == null ? void 0 : _a.description) ?? response.exceptionDetails.text ?? "unknown JavaScript exception"}`);
    }
    if (((_b = response == null ? void 0 : response.result) == null ? void 0 : _b.type) === "undefined") return void 0;
    return (_c = response == null ? void 0 : response.result) == null ? void 0 : _c.value;
  }
  async addScriptToEvaluateOnNewDocument(source) {
    const response = await this.send("Page.addScriptToEvaluateOnNewDocument", { source });
    return response == null ? void 0 : response.identifier;
  }
  async removeScriptToEvaluateOnNewDocument(identifier) {
    await this.send("Page.removeScriptToEvaluateOnNewDocument", { identifier });
  }
  close() {
    if (this.closeStarted) return;
    this.terminate(new Error("CDP session closed by client"));
    this.closeSocket();
  }
  handleMessage(event) {
    if (typeof event.data !== "string") {
      this.terminate(new Error("received a non-text CDP WebSocket message"));
      this.closeSocket();
      return;
    }
    let message;
    try {
      message = JSON.parse(event.data);
    } catch (error) {
      this.terminate(new Error(`received malformed CDP JSON: ${error.message}`));
      this.closeSocket();
      return;
    }
    if (!Number.isInteger(message == null ? void 0 : message.id)) return;
    const pending = this.pending.get(message.id);
    if (!pending) return;
    this.pending.delete(message.id);
    clearTimeout(pending.timer);
    if (message.error) {
      pending.reject(new Error(`CDP error: ${message.error.message}`));
      return;
    }
    pending.resolve(message.result);
  }
  terminate(error) {
    if (this.terminalError) return;
    this.clearConnectTimer();
    this.terminalError = error;
    this.closed = true;
    this.socketOpen = false;
    const rejectOpen = this.rejectOpen;
    this.resolveOpen = null;
    this.rejectOpen = null;
    rejectOpen == null ? void 0 : rejectOpen(error);
    for (const { reject, timer } of this.pending.values()) {
      clearTimeout(timer);
      reject(error);
    }
    this.pending.clear();
  }
  clearConnectTimer() {
    if (this.connectTimer !== null) {
      clearTimeout(this.connectTimer);
      this.connectTimer = null;
    }
  }
  closeSocket() {
    if (this.closeStarted) return;
    this.closeStarted = true;
    if (!this.socket || typeof this.socket.close !== "function") return;
    const closing = this.WebSocketImpl.CLOSING ?? 2;
    const closed = this.WebSocketImpl.CLOSED ?? 3;
    if (this.socket.readyState === closing || this.socket.readyState === closed) return;
    this.socket.close();
  }
}
function compareTargets(left, right) {
  const leftKeys = [String(left.id ?? ""), left.url, left.webSocketDebuggerUrl];
  const rightKeys = [String(right.id ?? ""), right.url, right.webSocketDebuggerUrl];
  for (let i = 0; i < leftKeys.length; i++) {
    if (leftKeys[i] < rightKeys[i]) return -1;
    if (leftKeys[i] > rightKeys[i]) return 1;
  }
  return 0;
}
function getBundledThemesDir() {
  return path__namespace.join(electron.app.getAppPath(), "themes");
}
function getUserThemesDir() {
  const themesDir = path__namespace.join(electron.app.getPath("userData"), "themes");
  fs__namespace.mkdirSync(themesDir, { recursive: true });
  return themesDir;
}
function getThemeSearchDirs() {
  return [getUserThemesDir(), getBundledThemesDir()];
}
const heroHashCache = /* @__PURE__ */ new Map();
function listThemes(appId) {
  const entries = [];
  const seenIds = /* @__PURE__ */ new Set();
  for (const themesDir of getThemeSearchDirs()) {
    if (!fs__namespace.existsSync(themesDir)) continue;
    const items = fs__namespace.readdirSync(themesDir, { withFileTypes: true });
    for (const item of items) {
      if (!item.isDirectory()) continue;
      const themeDir = path__namespace.join(themesDir, item.name);
      const manifestPath = path__namespace.join(themeDir, "theme.json");
      if (!fs__namespace.existsSync(manifestPath)) continue;
      try {
        const raw = JSON.parse(fs__namespace.readFileSync(manifestPath, "utf-8"));
        const manifest = validateThemeManifest(raw);
        if (seenIds.has(manifest.id)) continue;
        const heroPath = path__namespace.join(themeDir, manifest.hero);
        if (!fs__namespace.existsSync(heroPath) || !fs__namespace.statSync(heroPath).isFile()) throw new Error(`theme hero is missing: ${manifest.hero}`);
        if (appId && !isThemeCompatible(manifest, appId)) continue;
        seenIds.add(manifest.id);
        entries.push({
          id: manifest.id,
          name: manifest.name,
          author: manifest.author,
          path: themeDir,
          manifest
        });
      } catch (e) {
        console.error(`Failed to load theme ${item.name}:`, e);
      }
    }
  }
  const uniqueEntries = /* @__PURE__ */ new Map();
  for (const entry of entries) {
    const heroPath = path__namespace.join(entry.path, entry.manifest.hero);
    const heroHash = getHeroHash(heroPath);
    const contentKey = `${entry.name.trim().toLocaleLowerCase()}\0${entry.author.trim().toLocaleLowerCase()}\0${heroHash}`;
    const current = uniqueEntries.get(contentKey);
    if (!current || isPreferredThemeId(entry.id, current.id)) uniqueEntries.set(contentKey, entry);
  }
  return [...uniqueEntries.values()].sort((a, b) => a.name.localeCompare(b.name));
}
function isThemeCompatible(manifest, appId) {
  var _a, _b;
  const declaredCompatibility = (_a = manifest.apps[appId]) == null ? void 0 : _a.compat;
  if (declaredCompatibility !== void 0) return declaredCompatibility;
  return ((_b = getAppDefinition(appId)) == null ? void 0 : _b.acceptsGenericThemes) === true;
}
function getHeroHash(heroPath) {
  const stats = fs__namespace.statSync(heroPath);
  const cached = heroHashCache.get(heroPath);
  if (cached && cached.size === stats.size && cached.mtimeMs === stats.mtimeMs) return cached.hash;
  const hash = crypto__namespace.createHash("sha256").update(fs__namespace.readFileSync(heroPath)).digest("hex");
  heroHashCache.set(heroPath, { size: stats.size, mtimeMs: stats.mtimeMs, hash });
  return hash;
}
function isPreferredThemeId(candidate, current) {
  const candidateCustom = candidate.startsWith("custom-");
  const currentCustom = current.startsWith("custom-");
  if (candidateCustom !== currentCustom) return !candidateCustom;
  return candidate.length < current.length || candidate.length === current.length && candidate.localeCompare(current) < 0;
}
function getThemeById(id, appId) {
  return listThemes(appId).find((t) => t.id === id);
}
function getThemeAssetPath(id) {
  const theme = getThemeById(id);
  if (!theme) return void 0;
  const asset = path__namespace.resolve(theme.path, theme.manifest.hero);
  if (!asset.startsWith(`${path__namespace.resolve(theme.path)}${path__namespace.sep}`)) return void 0;
  return asset;
}
function getThemeAssetUrl(id) {
  return `theme-asset://local/${encodeURIComponent(id)}`;
}
function getThemeHeroDataUrl(theme) {
  const heroPath = path__namespace.join(theme.path, theme.manifest.hero);
  const heroBuffer = fs__namespace.readFileSync(heroPath);
  return `data:${getMimeType(theme.manifest.hero)};base64,${heroBuffer.toString("base64")}`;
}
function hasThemeContent(name, author, heroPath) {
  const expectedHash = getHeroHash(heroPath);
  return listThemes().some((theme) => {
    if (theme.name.trim().toLowerCase() !== name.trim().toLowerCase() || theme.author.trim().toLowerCase() !== author.trim().toLowerCase()) return false;
    return getHeroHash(path__namespace.join(theme.path, theme.manifest.hero)) === expectedHash;
  });
}
function validateThemeManifest(input) {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    throw new Error("theme manifest must be an object");
  }
  if (input.schemaVersion !== 1) {
    throw new Error(`unsupported theme schema ${input.schemaVersion}`);
  }
  if (typeof input.id !== "string" || !/^[a-z0-9-]+$/.test(input.id)) {
    throw new Error("theme id must use lowercase letters, numbers, and hyphens");
  }
  if (typeof input.name !== "string" || !input.name.trim()) {
    throw new Error("theme name must be a non-empty string");
  }
  if (typeof input.author !== "string") {
    throw new Error("theme author must be a string");
  }
  if (typeof input.hero !== "string") {
    throw new Error("theme hero must be a string");
  }
  if (typeof input.colors !== "object" || input.colors === null) {
    throw new Error("theme colors must be an object");
  }
  const requiredColors = ["accent", "secondary", "surface", "text"];
  for (const color of requiredColors) {
    if (typeof input.colors[color] !== "string" || !/^#[0-9a-fA-F]{6}$/.test(input.colors[color])) {
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
      text: input.colors.text
    },
    copy: input.copy ?? void 0,
    apps: input.apps ?? {}
  };
}
function getMimeType(filename) {
  const ext = path__namespace.extname(filename).toLowerCase();
  const map = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".gif": "image/gif"
  };
  return map[ext] || "image/png";
}
const MAX_CUSTOM_THEMES = 5;
const MAX_BODY_BYTES = 32 * 1024 * 1024;
let servicePromise = null;
const appStates = /* @__PURE__ */ new Map();
function listSharedCustomThemes() {
  try {
    const value = JSON.parse(fs__namespace.readFileSync(getStorePath(), "utf8"));
    return validateThemes(value);
  } catch {
    return [];
  }
}
function mergeSharedCustomThemes(input) {
  const incoming = validateThemes(input);
  const merged = [...listSharedCustomThemes()];
  for (const theme of incoming) {
    const index = merged.findIndex((item) => item.id === theme.id);
    if (index >= 0) merged[index] = theme;
    else merged.push(theme);
  }
  const limited = merged.slice(0, MAX_CUSTOM_THEMES);
  writeSharedCustomThemes(limited);
  return limited;
}
function deleteSharedCustomTheme(themeId) {
  if (!/^custom-[a-z0-9-]+$/i.test(themeId)) throw new Error("Invalid custom theme id");
  const themes = listSharedCustomThemes().filter((theme) => theme.id !== themeId);
  writeSharedCustomThemes(themes);
  console.log(`[custom-theme-store] Deleted ${themeId}; ${themes.length} custom themes remain`);
  return themes;
}
function selectQuickThemeIds(appId, availableThemeIds, currentThemeId, limit = 4) {
  const usage = readThemeUsage()[appId] ?? {};
  return [...availableThemeIds].sort((left, right) => {
    if (left === currentThemeId) return -1;
    if (right === currentThemeId) return 1;
    const leftUsage = usage[left] ?? { count: 0, lastUsedAt: 0 };
    const rightUsage = usage[right] ?? { count: 0, lastUsedAt: 0 };
    return rightUsage.count - leftUsage.count || rightUsage.lastUsedAt - leftUsage.lastUsedAt;
  }).slice(0, limit);
}
function recordThemeUsage(appId, themeId) {
  if (!/^[a-z0-9-]+$/i.test(appId) || !/^[a-z0-9-]+$/i.test(themeId)) return;
  const usage = readThemeUsage();
  const appUsage = usage[appId] ?? {};
  const current = appUsage[themeId] ?? { count: 0 };
  appUsage[themeId] = { count: current.count + 1, lastUsedAt: Date.now() };
  usage[appId] = appUsage;
  writeJsonFile(getUsagePath(), usage);
}
function ensureSharedCustomThemeService() {
  if (servicePromise) return servicePromise;
  servicePromise = new Promise((resolve, reject) => {
    const token = crypto__namespace.randomBytes(24).toString("hex");
    const server = http__namespace.createServer((request, response) => {
      var _a, _b;
      response.setHeader("Access-Control-Allow-Origin", "*");
      response.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");
      response.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
      response.setHeader("Access-Control-Allow-Private-Network", "true");
      if (request.method === "OPTIONS") {
        response.writeHead(204).end();
        return;
      }
      if (request.headers.authorization !== `Bearer ${token}`) {
        response.writeHead(401).end("Unauthorized");
        return;
      }
      if (request.url === "/theme-usage" && request.method === "POST") {
        readJsonBody(request, response, (value) => {
          if (typeof (value == null ? void 0 : value.appId) !== "string" || typeof (value == null ? void 0 : value.themeId) !== "string") throw new Error("Invalid theme usage payload");
          recordThemeUsage(value.appId, value.themeId);
          sendJson(response, 200, { success: true });
        });
        return;
      }
      const appStateMatch = (_a = request.url) == null ? void 0 : _a.match(/^\/app-state\/([a-z0-9-]+)$/i);
      if (appStateMatch) {
        const appId = appStateMatch[1].toLowerCase();
        if (request.method === "GET") {
          sendJson(response, 200, appStates.get(appId) ?? null);
          return;
        }
        if (request.method === "PUT") {
          readJsonBody(request, response, (value) => {
            if (typeof (value == null ? void 0 : value.themeId) !== "string" || !Number.isFinite(Number(value == null ? void 0 : value.actionAt))) throw new Error("Invalid app state payload");
            const next = { themeId: value.themeId, actionAt: Number(value.actionAt) };
            const current = appStates.get(appId);
            if (!current || next.actionAt >= current.actionAt) appStates.set(appId, next);
            sendJson(response, 200, appStates.get(appId));
          });
          return;
        }
        response.writeHead(405).end("Method not allowed");
        return;
      }
      if (request.url === "/custom-themes/delete" && request.method === "POST") {
        readJsonBody(request, response, (value) => {
          if (typeof (value == null ? void 0 : value.themeId) !== "string" || !/^custom-[a-z0-9-]+$/i.test(value.themeId)) throw new Error("Invalid custom theme id");
          const themes = deleteSharedCustomTheme(value.themeId);
          sendJson(response, 200, themes);
        });
        return;
      }
      const deleteMatch = (_b = request.url) == null ? void 0 : _b.match(/^\/custom-themes\/([a-z0-9-]+)$/i);
      if (deleteMatch && request.method === "DELETE") {
        const themeId = decodeURIComponent(deleteMatch[1]);
        const themes = deleteSharedCustomTheme(themeId);
        sendJson(response, 200, themes);
        return;
      }
      if (request.url !== "/custom-themes") {
        response.writeHead(404).end("Not found");
        return;
      }
      if (request.method === "GET") {
        sendJson(response, 200, listSharedCustomThemes());
        return;
      }
      if (request.method !== "PUT") {
        response.writeHead(405).end("Method not allowed");
        return;
      }
      readJsonBody(request, response, (value) => {
        const themes = validateThemes(value);
        writeSharedCustomThemes(themes);
        sendJson(response, 200, themes);
      });
    });
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        server.close();
        reject(new Error("Shared custom theme service did not expose a TCP port"));
        return;
      }
      const origin = `http://127.0.0.1:${address.port}`;
      resolve({ endpoint: `${origin}/custom-themes`, usageEndpoint: `${origin}/theme-usage`, appStateEndpoint: `${origin}/app-state`, token });
    });
  });
  return servicePromise;
}
function getStorePath() {
  return path__namespace.join(electron.app.getPath("userData"), "custom-themes.json");
}
function getUsagePath() {
  return path__namespace.join(electron.app.getPath("userData"), "theme-usage.json");
}
function writeSharedCustomThemes(themes) {
  writeJsonFile(getStorePath(), themes);
}
function readThemeUsage() {
  try {
    const value = JSON.parse(fs__namespace.readFileSync(getUsagePath(), "utf8"));
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  } catch {
    return {};
  }
}
function writeJsonFile(filePath, value) {
  fs__namespace.mkdirSync(path__namespace.dirname(filePath), { recursive: true });
  fs__namespace.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}
`);
}
function readJsonBody(request, response, onValue) {
  let size = 0;
  const chunks = [];
  request.on("data", (chunk) => {
    size += chunk.length;
    if (size > MAX_BODY_BYTES) {
      response.writeHead(413).end("Payload too large");
      request.destroy();
      return;
    }
    chunks.push(chunk);
  });
  request.on("end", () => {
    if (response.headersSent) return;
    try {
      onValue(JSON.parse(Buffer.concat(chunks).toString("utf8")));
    } catch (error) {
      response.writeHead(400).end(error.message);
    }
  });
}
function validateThemes(input) {
  if (!Array.isArray(input)) throw new Error("Custom themes must be an array");
  return input.slice(0, MAX_CUSTOM_THEMES).map((item, index) => {
    var _a;
    if (!item || typeof item !== "object") throw new Error(`Invalid custom theme at index ${index}`);
    const value = item;
    if (typeof value.id !== "string" || !/^custom-[a-z0-9-]+$/i.test(value.id)) throw new Error(`Invalid custom theme id at index ${index}`);
    if (typeof value.name !== "string" || !value.name.trim()) throw new Error(`Invalid custom theme name at index ${index}`);
    if (typeof value.dataUrl !== "string" || !/^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(value.dataUrl)) {
      throw new Error(`Invalid custom theme image at index ${index}`);
    }
    for (const color of ["accent", "secondary", "surface", "text"]) {
      if (typeof ((_a = value.colors) == null ? void 0 : _a[color]) !== "string" || !/^#[0-9a-f]{6}$/i.test(value.colors[color])) {
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
        text: value.colors.text
      }
    };
  });
}
function sendJson(response, status, value) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(value));
}
const STYLE_ID = "dream-work-style";
const MENU_ID = "dream-work-menu";
const hanaAgentPersistentScripts = /* @__PURE__ */ new Map();
const hanaAgentWatchers = /* @__PURE__ */ new Map();
const hanaAgentGenerations = /* @__PURE__ */ new Map();
const kimiPersistentScripts = /* @__PURE__ */ new Map();
const kimiWatchers = /* @__PURE__ */ new Map();
const kimiGenerations = /* @__PURE__ */ new Map();
const doubaoPersistentScripts = /* @__PURE__ */ new Map();
const doubaoWatchers = /* @__PURE__ */ new Map();
const doubaoGenerations = /* @__PURE__ */ new Map();
const stepFunPersistentScripts = /* @__PURE__ */ new Map();
const stepFunWatchers = /* @__PURE__ */ new Map();
const stepFunGenerations = /* @__PURE__ */ new Map();
const sparkDeskPersistentScripts = /* @__PURE__ */ new Map();
const sparkDeskWatchers = /* @__PURE__ */ new Map();
const sparkDeskGenerations = /* @__PURE__ */ new Map();
const KIMI_RESTORE_KEY = "dream-work-theme:kimi:restored";
const KIMI_ACTION_KEY = "dream-work-theme:kimi:action-at";
const kimiDeletedCustomThemeIds = /* @__PURE__ */ new Set();
const WORKBUDDY_CSS_PLACEHOLDERS = {
  id: "wb-dream-sentinel-id",
  hero: "data:image/png;base64,WBDREAMHEROSENTINEL",
  accent: "#010203",
  secondary: "#040506",
  surface: "#070809",
  text: "#0a0b0c"
};
let CODEX_BASE_CSS = null;
async function getCodexBaseCss() {
  if (!CODEX_BASE_CSS) {
    try {
      const cssPath = path__namespace.resolve(__dirname, "manager", "codex-dream-skin.css");
      CODEX_BASE_CSS = await promises.readFile(cssPath, "utf-8");
    } catch (e) {
      console.warn("[injector] Failed to load Codex base CSS:", e.message);
      CODEX_BASE_CSS = "";
    }
  }
  return CODEX_BASE_CSS;
}
async function applyTheme(appId, themeId, port, options = {}) {
  const definition = getAppDefinition(appId);
  const hints = options.rendererUrlHint ? [options.rendererUrlHint] : (definition == null ? void 0 : definition.rendererHints) ?? ["renderer/index.html", "index.html"];
  let targets = [];
  let lastError = "No renderer targets found";
  for (const hint of hints) {
    try {
      console.log(`[injector] Trying hint "${hint}" on port ${port}`);
      targets = await waitForRendererTargets(port, hint, { timeoutMs: 2e4, pollMs: 500 });
      if (targets.length > 0) {
        console.log(`[injector] Found ${targets.length} targets with hint "${hint}"`);
        break;
      }
    } catch (e) {
      lastError = e.message;
      console.log(`[injector] Hint "${hint}" failed: ${e.message}`);
    }
  }
  if (appId === "sparkdesk") {
    try {
      const allTargets = await fetchSparkDeskTargets(port);
      if (allTargets.length > 0) targets = allTargets;
    } catch (e) {
      console.log(`[injector] Failed to collect SparkDesk targets: ${e.message}`);
    }
  }
  if (appId === "stepfun") {
    try {
      const allTargets = await fetchStepFunTargets(port);
      if (allTargets.length > 0) targets = allTargets;
    } catch (e) {
      console.log(`[injector] Failed to collect all StepFun targets: ${e.message}`);
    }
  }
  if (appId === "kimi") {
    try {
      const allTargets = await fetchKimiTargets(port);
      if (allTargets.length > 0) targets = allTargets;
      await clearKimiRestoreState(targets);
    } catch (e) {
      console.log(`[injector] Failed to collect all Kimi targets: ${e.message}`);
    }
  }
  if (targets.length === 0) {
    try {
      console.log(`[injector] Strict hints failed, trying relaxed page-target fallback on port ${port}`);
      const resp = await fetch(`http://127.0.0.1:${port}/json/list`, { signal: AbortSignal.timeout(5e3) });
      const json = await resp.json();
      const relaxed = (Array.isArray(json) ? json : []).filter(isAnyPageTarget).sort((a, b) => {
        const la = [String(a.id ?? ""), a.url, a.webSocketDebuggerUrl];
        const lb = [String(b.id ?? ""), b.url, b.webSocketDebuggerUrl];
        for (let i = 0; i < la.length; i++) {
          if (la[i] < lb[i]) return -1;
          if (la[i] > lb[i]) return 1;
        }
        return 0;
      });
      if (relaxed.length > 0) {
        console.log(`[injector] Relaxed fallback found ${relaxed.length} page targets`);
        targets = relaxed;
      }
    } catch (e) {
      console.log(`[injector] Relaxed fallback failed: ${e.message}`);
    }
  }
  if (targets.length === 0) {
    return { success: false, applied: 0, error: lastError };
  }
  try {
    const allThemes = listThemes(appId);
    console.log(`[injector] Loaded ${allThemes.length} themes`);
    if (!allThemes.some((theme) => theme.id === themeId)) {
      return { success: false, applied: 0, error: `Theme ${themeId} is not compatible with ${appId}` };
    }
    const quickThemeIds = selectQuickThemeIds(appId, allThemes.map((theme) => theme.id), themeId);
    const themesById = new Map(allThemes.map((theme) => [theme.id, theme]));
    const menuThemeEntries = quickThemeIds.map((id) => themesById.get(id)).filter(Boolean);
    const themeEntries = /* @__PURE__ */ new Map();
    for (const theme of menuThemeEntries) {
      const allowsAppCss = shouldInjectThemeCss(appId, theme);
      themeEntries.set(theme.id, {
        name: theme.name,
        css: buildAppCss(appId, theme.manifest, getThemeHeroDataUrl(theme)) + (allowsAppCss ? readThemeCss(theme) : ""),
        surface: theme.manifest.colors.surface
      });
    }
    const menuThemes = Array.from(themeEntries.entries()).map(([id, entry]) => {
      var _a;
      return {
        id,
        name: entry.name,
        css: entry.css,
        surface: entry.surface,
        accent: ((_a = allThemes.find((theme) => theme.id === id)) == null ? void 0 : _a.manifest.colors.accent) ?? "#24c9d7"
      };
    });
    let sharedCustomThemes = listSharedCustomThemes();
    if (sharedCustomThemes.length === 0) {
      const storageKey = appId === "workbuddy" ? "dreamCustomThemes" : "dreamCodexCustomThemes";
      for (const target of targets) {
        const session = new CdpSession(target.webSocketDebuggerUrl);
        try {
          await session.open();
          const serialized = await session.evaluate(`(() => localStorage.getItem(${JSON.stringify(storageKey)}) || '[]')()`);
          const localThemes = JSON.parse(serialized).filter((theme) => !kimiDeletedCustomThemeIds.has(theme == null ? void 0 : theme.id));
          if (Array.isArray(localThemes) && localThemes.length > 0) {
            sharedCustomThemes = mergeSharedCustomThemes(localThemes);
            break;
          }
        } catch (error) {
          console.warn(`[injector] Failed to import existing custom themes from ${appId} target ${target.id}:`, error);
        } finally {
          session.close();
        }
      }
    }
    const sharedCustomThemeService = await ensureSharedCustomThemeService();
    if (appId === "stepfun") {
      const actionAt = Date.now();
      await fetch(`${sharedCustomThemeService.appStateEndpoint}/stepfun`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${sharedCustomThemeService.token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ themeId, actionAt })
      }).catch(() => {
      });
      for (const target of targets.filter((item) => String(item.url).startsWith("app://chat-web/"))) {
        const session = new CdpSession(target.webSocketDebuggerUrl);
        try {
          await session.open();
          await session.evaluate(`(() => {
            localStorage.setItem('dream-work-theme:stepfun:state', ${JSON.stringify(JSON.stringify({ themeId, actionAt }))});
          })()`);
        } catch {
        } finally {
          session.close();
        }
      }
    }
    if (appId === "sparkdesk") {
      await fetch(`${sharedCustomThemeService.appStateEndpoint}/sparkdesk`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${sharedCustomThemeService.token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ themeId, actionAt: Date.now() })
      }).catch(() => {
      });
    }
    const menuScript = appId === "workbuddy" ? buildWorkBuddyMenuScript({
      styleId: STYLE_ID,
      menuId: MENU_ID,
      currentThemeId: themeId,
      themes: menuThemes,
      sharedCustomThemes,
      sharedCustomThemeService,
      cssTemplate: buildWorkBuddyCss({
        id: WORKBUDDY_CSS_PLACEHOLDERS.id,
        colors: {
          accent: WORKBUDDY_CSS_PLACEHOLDERS.accent,
          secondary: WORKBUDDY_CSS_PLACEHOLDERS.secondary,
          surface: WORKBUDDY_CSS_PLACEHOLDERS.surface,
          text: WORKBUDDY_CSS_PLACEHOLDERS.text
        },
        copy: null
      }, WORKBUDDY_CSS_PLACEHOLDERS.hero, {
        accent: WORKBUDDY_CSS_PLACEHOLDERS.accent,
        secondary: WORKBUDDY_CSS_PLACEHOLDERS.secondary,
        surface: WORKBUDDY_CSS_PLACEHOLDERS.surface,
        text: WORKBUDDY_CSS_PLACEHOLDERS.text
      })
    }) : appId === "hana-agent" ? buildHanaAgentMenuScript({
      styleId: STYLE_ID,
      menuId: MENU_ID,
      currentThemeId: themeId,
      themes: menuThemes,
      sharedCustomThemes,
      sharedCustomThemeService,
      cssTemplate: buildHanaAgentCss({
        id: WORKBUDDY_CSS_PLACEHOLDERS.id,
        colors: {
          accent: WORKBUDDY_CSS_PLACEHOLDERS.accent,
          secondary: WORKBUDDY_CSS_PLACEHOLDERS.secondary,
          surface: WORKBUDDY_CSS_PLACEHOLDERS.surface,
          text: WORKBUDDY_CSS_PLACEHOLDERS.text
        }
      }, WORKBUDDY_CSS_PLACEHOLDERS.hero, {
        accent: WORKBUDDY_CSS_PLACEHOLDERS.accent,
        secondary: WORKBUDDY_CSS_PLACEHOLDERS.secondary,
        surface: WORKBUDDY_CSS_PLACEHOLDERS.surface,
        text: WORKBUDDY_CSS_PLACEHOLDERS.text
      })
    }) : buildMenuScript({
      styleId: STYLE_ID,
      menuId: MENU_ID,
      currentThemeId: themeId,
      appId,
      themes: menuThemes,
      sharedCustomThemes,
      sharedCustomThemeService,
      cssTemplate: buildAppCss(appId, {
        id: WORKBUDDY_CSS_PLACEHOLDERS.id,
        colors: {
          accent: WORKBUDDY_CSS_PLACEHOLDERS.accent,
          secondary: WORKBUDDY_CSS_PLACEHOLDERS.secondary,
          surface: WORKBUDDY_CSS_PLACEHOLDERS.surface,
          text: WORKBUDDY_CSS_PLACEHOLDERS.text
        }
      }, WORKBUDDY_CSS_PLACEHOLDERS.hero)
    });
    let applied = 0;
    for (const target of targets) {
      try {
        console.log(`[injector] Injecting to target ${target.id}: ${target.url}`);
        const session = new CdpSession(target.webSocketDebuggerUrl);
        await session.open();
        if (appId === "workbuddy") {
          let isWorkBuddy = false;
          const deadline = Date.now() + 15e3;
          while (Date.now() < deadline) {
            isWorkBuddy = await session.evaluate(`(() => {
              const body = document.body;
              return body?.dataset.applicationName === 'workbuddy' && Boolean(
                document.querySelector('[data-view-id], .teams-container, .conversation-list, .main-content')
              );
            })()`).catch(() => false);
            if (isWorkBuddy) break;
            await new Promise((resolve) => setTimeout(resolve, 100));
          }
          if (!isWorkBuddy) {
            console.warn(`[injector] Skipping non-WorkBuddy target ${target.id}: ${target.url}`);
            session.close();
            continue;
          }
        }
        if (appId === "codex") {
          const baseCss = await getCodexBaseCss();
          if (baseCss) {
            await session.evaluate(`(() => {
              const existing = document.getElementById('codex-dream-skin-base');
              if (!existing) {
                const style = document.createElement('style');
                style.id = 'codex-dream-skin-base';
                style.textContent = ${JSON.stringify(baseCss)};
                document.head.appendChild(style);
              }
            })()`);
          }
        }
        if (appId === "hana-agent" || appId === "kimi" || appId === "doubao" || appId === "stepfun" || appId === "sparkdesk") {
          const persistentScript = `(() => {
            const inject = () => ${menuScript};
            if (document.readyState === 'loading') {
              window.addEventListener('DOMContentLoaded', inject, { once: true });
            } else {
              inject();
            }
          })()`;
          const persistentScripts = appId === "hana-agent" ? hanaAgentPersistentScripts : appId === "kimi" ? kimiPersistentScripts : appId === "doubao" ? doubaoPersistentScripts : appId === "stepfun" ? stepFunPersistentScripts : sparkDeskPersistentScripts;
          const previousIdentifier = persistentScripts.get(target.id);
          if (previousIdentifier) {
            await session.removeScriptToEvaluateOnNewDocument(previousIdentifier).catch(() => {
            });
          }
          const identifier = await session.addScriptToEvaluateOnNewDocument(persistentScript);
          if (identifier) persistentScripts.set(target.id, identifier);
        }
        const evalResult = await session.evaluate(appId === "hana-agent" ? `(() => { window.__dreamWorkForceApply = true; return ${menuScript}; })()` : menuScript);
        console.log(`[injector] Injection result for target ${target.id}:`, evalResult);
        if (appId === "hana-agent") {
          let ready = false;
          for (let attempt = 0; attempt < 20; attempt++) {
            ready = await session.evaluate(`(() => {
              const host = document.getElementById('${MENU_ID}-host');
              return Boolean(
                document.getElementById('${STYLE_ID}') &&
                host?.shadowRoot?.getElementById('${MENU_ID}') &&
                document.documentElement.dataset.dreamTheme
              );
            })()`).catch(() => false);
            if (ready) break;
            await new Promise((resolve) => setTimeout(resolve, 100));
          }
          if (!ready) {
            console.warn(`[injector] HanaAgent injection did not become ready for target ${target.id}`);
            session.close();
            continue;
          }
        }
        if (appId === "codex") {
          for (let attempt = 1; attempt <= 4; attempt++) {
            const codexDebug = await session.evaluate(`(() => {
              const shellMain = document.querySelector('main.main-surface') || document.querySelector('main');
              let homeCandidate = shellMain ? (shellMain.matches('[role="main"]') ? shellMain : shellMain.querySelector('[role="main"]')) : null;
              
              // Fallback: if no [role="main"] found, try broader selectors.
              if (!homeCandidate) {
                homeCandidate = document.querySelector('[class*="home-main-content"]') ||
                                document.querySelector('[class*="home-content"]') ||
                                document.querySelector('main') ||
                                document.querySelector('.app-shell') ||
                                document.body;
              }
              
              if (!homeCandidate) return { error: 'no homeCandidate' };
              
              const hasGameSource = Boolean(homeCandidate.querySelector('[data-feature="game-source"]'));
              const hasSuggestions = Boolean(homeCandidate.querySelector('[class*="group/home-suggestions"]'));
              const hasTaskContent = Boolean(homeCandidate.querySelector('.thread-scroll-container, [data-message-author-role], article, .message'));
              
              // If we fell back to body/main and can't detect home signals, still tag it
              // so the CSS selectors have something to bind to.
              const isFallback = homeCandidate === document.body || homeCandidate.matches('main');
              const isHomeContainer = homeCandidate.matches('[class*="home-main-content"], [class*="container-name:home-main-content"]');
              if ((hasGameSource || hasSuggestions || isHomeContainer || isFallback) && !hasTaskContent) {
                homeCandidate.classList.add('dream-skin-home');
                if (shellMain) shellMain.classList.add('dream-skin-home-shell');
              } else if (shellMain) {
                shellMain.classList.remove('dream-skin-home-shell');
              }
              return {
                homeClasses: Array.from(homeCandidate.classList),
                shellClasses: shellMain ? Array.from(shellMain.classList) : [],
                hasGameSource,
                hasSuggestions,
                hasTaskContent,
                isHomeContainer,
                isFallback
              };
            })`);
            if (codexDebug.homeClasses && codexDebug.homeClasses.includes("dream-skin-home")) {
              console.log(`[injector] Codex home detection for ${target.id}: attempt=${attempt}`, JSON.stringify(codexDebug));
              break;
            }
            if (attempt < 4) {
              await new Promise((r) => setTimeout(r, 800));
            }
          }
        }
        if (appId === "codex") {
          try {
            const debugResult = await session.evaluate(`(() => {
              const html = document.documentElement;
              const body = document.body;
              const style = document.getElementById('dream-work-style');
              const baseStyle = document.getElementById('codex-dream-skin-base');
              const menu = document.getElementById('dream-work-menu');
              
              // Check computed styles of key elements
              const mainSurface = document.querySelector('main.main-surface') || document.querySelector('main');
              const sidebar = document.querySelector('aside.app-shell-left-panel');
              const homeEl = document.querySelector('.dream-skin-home');
              
              return {
                htmlClasses: Array.from(html.classList),
                bodyClasses: Array.from(body.classList),
                hasStyle: Boolean(style),
                styleLength: style ? style.textContent.length : 0,
                hasBaseStyle: Boolean(baseStyle),
                baseStyleLength: baseStyle ? baseStyle.textContent.length : 0,
                hasMenu: Boolean(menu),
                title: document.title,
                url: window.location.href,
                mainSurfaceClasses: mainSurface ? Array.from(mainSurface.classList) : null,
                sidebarClasses: sidebar ? Array.from(sidebar.classList) : null,
                homeClasses: homeEl ? Array.from(homeEl.classList) : null,
                codexDreamSkinOnHtml: html.classList.contains('codex-dream-skin'),
                dreamTheme: html.dataset.dreamTheme || null
              };
            })()`);
            console.log(`[injector] Codex debug info for ${target.id}:`, JSON.stringify(debugResult, null, 2));
          } catch (e) {
            console.error(`[injector] Failed to get debug info for ${target.id}:`, e);
          }
        }
        session.close();
        applied++;
      } catch (e) {
        console.error(`[injector] Failed to inject to target ${target.id}:`, e);
      }
    }
    if (appId === "hana-agent" && applied > 0) {
      const injectedTargetIds = new Set(targets.map((target) => target.id));
      const deadline = Date.now() + 2e4;
      let stableTargetId = "";
      let stableSince = 0;
      while (Date.now() < deadline) {
        let currentTargets = [];
        try {
          currentTargets = await fetchRendererTargets(port, ".hanako/artifacts/renderer/", { timeoutMs: 2e3, quiet: true });
        } catch {
        }
        const current = currentTargets[0];
        if (!current) {
          stableTargetId = "";
          stableSince = 0;
          await new Promise((resolve) => setTimeout(resolve, 250));
          continue;
        }
        if (!injectedTargetIds.has(current.id)) {
          console.log(`[injector] HanaAgent created renderer target ${current.id}; injecting theme`);
          const session2 = new CdpSession(current.webSocketDebuggerUrl);
          try {
            await session2.open();
            const persistentScript = `(() => {
              const inject = () => ${menuScript};
              if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
              else inject();
            })()`;
            const identifier = await session2.addScriptToEvaluateOnNewDocument(persistentScript);
            if (identifier) hanaAgentPersistentScripts.set(current.id, identifier);
            await session2.evaluate(`(() => { window.__dreamWorkForceApply = true; return ${menuScript}; })()`);
            injectedTargetIds.add(current.id);
          } finally {
            session2.close();
          }
        }
        const session = new CdpSession(current.webSocketDebuggerUrl);
        let ready = false;
        try {
          await session.open();
          ready = await session.evaluate(`(() => {
            const host = document.getElementById('${MENU_ID}-host');
            return Boolean(document.getElementById('${STYLE_ID}') && host?.shadowRoot?.getElementById('${MENU_ID}') && document.documentElement.dataset.dreamTheme);
          })()`);
        } catch {
        } finally {
          session.close();
        }
        if (ready) {
          if (stableTargetId !== current.id) {
            stableTargetId = current.id;
            stableSince = Date.now();
          } else if (Date.now() - stableSince >= 2e3) {
            startHanaAgentWatcher(port, menuScript, injectedTargetIds);
            recordThemeUsage(appId, themeId);
            return { success: true, applied: 1 };
          }
        } else {
          stableTargetId = "";
          stableSince = 0;
        }
        await new Promise((resolve) => setTimeout(resolve, 250));
      }
      return { success: false, applied: 0, error: "HanaAgent renderer did not stabilize with the injected theme" };
    }
    if (appId === "kimi" && applied > 0) {
      startKimiWatcher(port, menuScript, new Set(targets.map((target) => target.id)));
    }
    if (appId === "doubao" && applied > 0) {
      startDoubaoWatcher(port, menuScript);
    }
    if (appId === "sparkdesk" && applied > 0) {
      startSparkDeskWatcher(port, menuScript);
    }
    if (appId === "stepfun" && applied > 0) {
      startStepFunWatcher(port, menuScript);
    }
    if (applied > 0) recordThemeUsage(appId, themeId);
    return { success: applied > 0, applied };
  } catch (error) {
    console.error("[injector] Injection failed:", error);
    return { success: false, applied: 0, error: error.message };
  }
}
async function fetchStepFunTargets(port) {
  const response = await fetch(`http://127.0.0.1:${port}/json/list`, { signal: AbortSignal.timeout(2e3) });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const targets = await response.json();
  return (Array.isArray(targets) ? targets : []).filter((target) => {
    if ((target == null ? void 0 : target.type) !== "page" || !target.webSocketDebuggerUrl) return false;
    const url = String(target.url ?? "");
    return url.startsWith("app://chat-web/") || url.startsWith("app://ui/pages/browser/") || url.startsWith("https://chat.stepfun.com/subscription");
  });
}
async function fetchSparkDeskTargets(port) {
  const response = await fetch(`http://127.0.0.1:${port}/json/list`, { signal: AbortSignal.timeout(2e3) });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const targets = await response.json();
  return (Array.isArray(targets) ? targets : []).filter((target) => {
    if ((target == null ? void 0 : target.type) !== "page" || !target.webSocketDebuggerUrl) return false;
    const url = String(target.url ?? "");
    return /\/out\/renderer\/index\.html(?:#desk|#settings)?$/.test(url);
  });
}
function startSparkDeskWatcher(port, menuScript) {
  const existing = sparkDeskWatchers.get(port);
  if (existing) clearInterval(existing);
  const generation = (sparkDeskGenerations.get(port) ?? 0) + 1;
  sparkDeskGenerations.set(port, generation);
  let busy = false;
  const timer = setInterval(async () => {
    if (busy || sparkDeskGenerations.get(port) !== generation) return;
    busy = true;
    try {
      const targets = await fetchSparkDeskTargets(port);
      const service = await ensureSharedCustomThemeService();
      const latestState = await fetch(`${service.appStateEndpoint}/sparkdesk`, {
        headers: { Authorization: `Bearer ${service.token}` },
        signal: AbortSignal.timeout(1e3)
      }).then((response) => response.ok ? response.json() : null).catch(() => null);
      if (sparkDeskGenerations.get(port) !== generation) return;
      for (const target of targets) {
        if (sparkDeskGenerations.get(port) !== generation) return;
        const session = new CdpSession(target.webSocketDebuggerUrl);
        try {
          await session.open();
          const ready = await session.evaluate(`(() => Boolean(window.__dreamTheme?.activateTheme && document.getElementById('${STYLE_ID}')))()`).catch(() => false);
          if (!ready) {
            if (sparkDeskGenerations.get(port) !== generation) return;
            const confirmedState = await fetch(`${service.appStateEndpoint}/sparkdesk`, {
              headers: { Authorization: `Bearer ${service.token}` },
              signal: AbortSignal.timeout(1e3)
            }).then((response) => response.ok ? response.json() : null).catch(() => null);
            if (!confirmedState || confirmedState.actionAt !== (latestState == null ? void 0 : latestState.actionAt) || confirmedState.themeId !== (latestState == null ? void 0 : latestState.themeId)) continue;
            const persistentScript = `(() => {
              const inject = () => ${menuScript};
              if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
              else inject();
            })()`;
            const identifier = await session.addScriptToEvaluateOnNewDocument(persistentScript);
            if (identifier) sparkDeskPersistentScripts.set(target.id, identifier);
            await session.evaluate(menuScript);
          }
          if (latestState) {
            if (sparkDeskGenerations.get(port) !== generation) return;
            const currentThemeId = await session.evaluate(`(() => document.documentElement.dataset.dreamTheme || '')()`);
            if (sparkDeskGenerations.get(port) !== generation) return;
            const confirmedState = await fetch(`${service.appStateEndpoint}/sparkdesk`, {
              headers: { Authorization: `Bearer ${service.token}` },
              signal: AbortSignal.timeout(1e3)
            }).then((response) => response.ok ? response.json() : null).catch(() => null);
            if (!confirmedState || confirmedState.actionAt !== latestState.actionAt || confirmedState.themeId !== latestState.themeId) continue;
            if (latestState.themeId && currentThemeId !== latestState.themeId) {
              await session.evaluate(`(() => window.__dreamTheme?.activateTheme(${JSON.stringify(latestState.themeId)}, ${latestState.actionAt}))()`);
            } else if (!latestState.themeId && currentThemeId) {
              await session.evaluate(`(() => window.__dreamTheme?.restoreNative(${latestState.actionAt}))()`);
            }
          }
        } catch {
        } finally {
          session.close();
        }
      }
    } catch {
      if (!await isPortReachable(port)) {
        clearInterval(timer);
        sparkDeskWatchers.delete(port);
      }
    } finally {
      busy = false;
    }
  }, 500);
  timer.unref();
  sparkDeskWatchers.set(port, timer);
}
function startStepFunWatcher(port, menuScript) {
  const existing = stepFunWatchers.get(port);
  if (existing) clearInterval(existing);
  const generation = (stepFunGenerations.get(port) ?? 0) + 1;
  stepFunGenerations.set(port, generation);
  let busy = false;
  const timer = setInterval(async () => {
    if (busy || stepFunGenerations.get(port) !== generation) return;
    busy = true;
    try {
      const targets = await fetchStepFunTargets(port);
      const service = await ensureSharedCustomThemeService();
      let latestState = await fetch(`${service.appStateEndpoint}/stepfun`, {
        headers: { Authorization: `Bearer ${service.token}` },
        signal: AbortSignal.timeout(1e3)
      }).then((response) => response.ok ? response.json() : null).catch(() => null);
      let restoredChatDetected = false;
      let restoringChatDetected = false;
      for (const target of targets) {
        const session = new CdpSession(target.webSocketDebuggerUrl);
        try {
          await session.open();
          const state = await session.evaluate(`(() => ({
            ready: Boolean(window.__dreamTheme?.activateTheme && document.getElementById('${STYLE_ID}')),
            themeId: document.documentElement.dataset.dreamTheme || '',
            restoring: Boolean(window.__dreamTheme?.restoring)
          }))()`).catch(() => ({ ready: false, themeId: "", restoring: false }));
          if (String(target.url).startsWith("app://chat-web/") && state.restoring) restoringChatDetected = true;
          if (String(target.url).startsWith("app://chat-web/") && state.ready && !state.themeId) restoredChatDetected = true;
          if (!state.ready) {
            const persistentScript = `(() => {
              const inject = () => ${menuScript};
              if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
              else inject();
            })()`;
            const identifier = await session.addScriptToEvaluateOnNewDocument(persistentScript);
            if (identifier) stepFunPersistentScripts.set(target.id, identifier);
            await session.evaluate(menuScript);
          }
        } catch {
        } finally {
          session.close();
        }
      }
      if (restoringChatDetected || restoredChatDetected) {
        latestState = { themeId: "", actionAt: Date.now() };
        await fetch(`${service.appStateEndpoint}/stepfun`, {
          method: "PUT",
          headers: { Authorization: `Bearer ${service.token}`, "Content-Type": "application/json" },
          body: JSON.stringify(latestState),
          signal: AbortSignal.timeout(1e3)
        }).catch(() => {
        });
      }
      if (latestState) {
        for (const target of targets) {
          const session = new CdpSession(target.webSocketDebuggerUrl);
          try {
            await session.open();
            const themeId = await session.evaluate(`(() => document.documentElement.dataset.dreamTheme || '')()`);
            if (latestState.themeId) {
              if (themeId !== latestState.themeId) {
                await session.evaluate(`(() => window.__dreamTheme?.activateTheme(${JSON.stringify(latestState.themeId)}, ${latestState.actionAt}))()`);
              }
            } else if (themeId) {
              await session.evaluate(`(() => window.__dreamTheme?.restoreNative(${latestState.actionAt}))()`);
            }
          } catch {
          } finally {
            session.close();
          }
        }
      }
    } catch {
      if (!await isPortReachable(port)) {
        clearInterval(timer);
        stepFunWatchers.delete(port);
      }
    } finally {
      busy = false;
    }
  }, 750);
  timer.unref();
  stepFunWatchers.set(port, timer);
}
async function fetchKimiTargets(port) {
  const response = await fetch(`http://127.0.0.1:${port}/json/list`, { signal: AbortSignal.timeout(2e3) });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const targets = await response.json();
  return (Array.isArray(targets) ? targets : []).filter((target) => {
    if ((target == null ? void 0 : target.type) !== "page" || !target.webSocketDebuggerUrl) return false;
    const url = String(target.url ?? "");
    return url.includes("kimi-agent.html") || url.includes("kimichat.html") || /^https:\/\/(?:www\.)?kimi\.com\//.test(url);
  });
}
function startDoubaoWatcher(port, menuScript) {
  var _a;
  const existing = doubaoWatchers.get(port);
  if (existing) clearInterval(existing);
  const generation = (doubaoGenerations.get(port) ?? 0) + 1;
  doubaoGenerations.set(port, generation);
  let busy = false;
  const timer = setInterval(async () => {
    if (busy || doubaoGenerations.get(port) !== generation) return;
    busy = true;
    try {
      const targets = await fetchRendererTargets(port, "doubao://doubao-chat/chat", { timeoutMs: 2e3, quiet: true });
      for (const target of targets) {
        const session = new CdpSession(target.webSocketDebuggerUrl);
        try {
          await session.open();
          const state = await session.evaluate(`(() => ({
            restored: document.documentElement.dataset.dreamThemeRestored === 'true' || (() => {
              try { return localStorage.getItem('dream-work-theme:doubao:restored') === '1'; } catch { return false; }
            })(),
            ready: Boolean(document.getElementById('${STYLE_ID}')?.textContent && document.documentElement.dataset.dreamTheme)
          }))()`).catch(() => ({ restored: false, ready: false }));
          if (!state.restored && !state.ready) {
            console.log(`[injector] Doubao renderer ${target.id} lost theme after navigation; reinjecting`);
            await session.evaluate(menuScript);
          }
        } finally {
          session.close();
        }
      }
    } catch (error) {
      if (doubaoGenerations.get(port) === generation) {
        console.warn("[injector] Doubao watcher check failed:", error.message);
      }
    } finally {
      busy = false;
    }
  }, 500);
  (_a = timer.unref) == null ? void 0 : _a.call(timer);
  doubaoWatchers.set(port, timer);
}
async function clearKimiRestoreState(targets) {
  for (const target of targets) {
    const session = new CdpSession(target.webSocketDebuggerUrl);
    try {
      await session.open();
      await session.evaluate(`(() => {
        try { localStorage.removeItem('${KIMI_RESTORE_KEY}'); } catch {}
        delete document.documentElement.dataset.dreamThemeRestored;
        return true;
      })()`);
    } finally {
      session.close();
    }
  }
}
function startKimiWatcher(port, menuScript, injectedTargetIds) {
  const existing = kimiWatchers.get(port);
  if (existing) clearInterval(existing);
  const generation = (kimiGenerations.get(port) ?? 0) + 1;
  kimiGenerations.set(port, generation);
  let busy = false;
  const timer = setInterval(async () => {
    var _a;
    if (busy || kimiGenerations.get(port) !== generation) return;
    busy = true;
    try {
      const targets = await fetchKimiTargets(port);
      const states = [];
      for (const target of targets) {
        const session = new CdpSession(target.webSocketDebuggerUrl);
        try {
          await session.open();
          const state = await session.evaluate(`(() => {
            let storedRestored = false;
            let actionAt = 0;
            try {
              storedRestored = localStorage.getItem('${KIMI_RESTORE_KEY}') === '1';
              actionAt = Number(localStorage.getItem('${KIMI_ACTION_KEY}') || '0');
            } catch {}
            const themeId = document.documentElement.dataset.dreamTheme || '';
            return {
              restored: document.documentElement.dataset.dreamThemeRestored === 'true' || storedRestored,
              themeId,
              actionAt,
              ready: Boolean(document.getElementById('${STYLE_ID}')?.textContent && themeId)
              ,deleteCustomThemeId: window.__dreamWorkDeleteCustomThemeId || ''
            };
          })()`).catch(() => ({ restored: false, themeId: "", actionAt: 0, ready: false, deleteCustomThemeId: "" }));
          states.push({ target, ...state });
        } finally {
          session.close();
        }
      }
      const deleteRequest = (_a = states.find((state) => state.deleteCustomThemeId)) == null ? void 0 : _a.deleteCustomThemeId;
      if (deleteRequest) {
        const latestCustomThemes = deleteSharedCustomTheme(deleteRequest);
        kimiDeletedCustomThemeIds.add(deleteRequest);
        await syncKimiCustomThemes(targets, latestCustomThemes, deleteRequest);
      }
      const latest = [...states].sort((left, right) => right.actionAt - left.actionAt)[0];
      if (latest == null ? void 0 : latest.restored) {
        console.log(`[injector] Kimi watcher observed restore state; preserving menus without theme`);
        await syncKimiRestoreState(targets, menuScript, injectedTargetIds, latest.actionAt);
        return;
      }
      if ((latest == null ? void 0 : latest.ready) && latest.themeId && states.some((state) => state.restored || !state.ready || state.themeId !== latest.themeId)) {
        console.log(`[injector] Kimi watcher synchronizing selected theme ${latest.themeId} across targets`);
        await syncKimiActiveTheme(targets, menuScript, injectedTargetIds, latest.themeId, latest.actionAt);
        return;
      }
      for (const target of targets) {
        if (kimiGenerations.get(port) !== generation) return;
        const session = new CdpSession(target.webSocketDebuggerUrl);
        try {
          await session.open();
          const state = await session.evaluate(`(() => ({
            ready: Boolean(document.getElementById('${STYLE_ID}') && document.documentElement.dataset.dreamTheme),
            restored: document.documentElement.dataset.dreamThemeRestored === 'true'
          }))()`).catch(() => ({ ready: false, restored: false }));
          if (state.ready || state.restored) {
            injectedTargetIds.add(target.id);
            continue;
          }
          console.log(`[injector] Kimi watcher restoring theme on target ${target.id}: ${target.url}`);
          if (!injectedTargetIds.has(target.id)) {
            const persistentScript = `(() => {
              const inject = () => ${menuScript};
              if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
              else inject();
            })()`;
            const identifier = await session.addScriptToEvaluateOnNewDocument(persistentScript);
            if (identifier) kimiPersistentScripts.set(target.id, identifier);
          }
          await session.evaluate(menuScript);
          injectedTargetIds.add(target.id);
        } finally {
          session.close();
        }
      }
    } catch {
      if (!await isPortReachable(port)) {
        clearInterval(timer);
        kimiWatchers.delete(port);
      }
    } finally {
      busy = false;
    }
  }, 750);
  timer.unref();
  kimiWatchers.set(port, timer);
}
async function syncKimiCustomThemes(targets, themes, deletedThemeId) {
  const serializedThemes = JSON.stringify(themes);
  for (const target of targets) {
    const session = new CdpSession(target.webSocketDebuggerUrl);
    try {
      await session.open();
      await session.evaluate(`(() => {
        delete window.__dreamWorkDeleteCustomThemeId;
        try { localStorage.setItem('dreamCodexCustomThemes', ${JSON.stringify(serializedThemes)}); } catch {}
        const host = document.getElementById('${MENU_ID}-host');
        const menu = host?.shadowRoot?.getElementById('${MENU_ID}');
        for (const row of Array.from(menu?.querySelectorAll('div') || [])) {
          if (row.dataset?.customThemeId === ${JSON.stringify(deletedThemeId)}) row.remove();
        }
        window.__dreamTheme?.replaceCustomThemes?.(${serializedThemes});
        return true;
      })()`);
    } finally {
      session.close();
    }
  }
}
async function syncKimiRestoreState(targets, menuScript, injectedTargetIds, actionAt) {
  for (const target of targets) {
    const session = new CdpSession(target.webSocketDebuggerUrl);
    try {
      await session.open();
      if (!kimiPersistentScripts.has(target.id)) {
        const persistentScript = `(() => {
          const inject = () => ${menuScript};
          if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
          else inject();
        })()`;
        const identifier = await session.addScriptToEvaluateOnNewDocument(persistentScript);
        if (identifier) kimiPersistentScripts.set(target.id, identifier);
      }
      await session.evaluate(`(() => {
        try { localStorage.setItem('${KIMI_RESTORE_KEY}', '1'); } catch {}
        try { localStorage.setItem('${KIMI_ACTION_KEY}', '${actionAt}'); } catch {}
        document.documentElement.dataset.dreamThemeRestored = 'true';
        return true;
      })()`);
      const hasMenu = await session.evaluate(`(() => {
        const host = document.getElementById('${MENU_ID}-host');
        return Boolean(host?.shadowRoot?.getElementById('${MENU_ID}'));
      })()`).catch(() => false);
      if (!hasMenu) await session.evaluate(menuScript);
      await session.evaluate(`(() => {
        try { localStorage.setItem('${KIMI_RESTORE_KEY}', '1'); } catch {}
        try { localStorage.setItem('${KIMI_ACTION_KEY}', '${actionAt}'); } catch {}
        document.documentElement.dataset.dreamThemeRestored = 'true';
        const style = document.getElementById('${STYLE_ID}');
        if (style) style.textContent = '';
        delete document.documentElement.dataset.dreamTheme;
        delete document.documentElement.dataset.dreamShell;
        return true;
      })()`);
      injectedTargetIds.add(target.id);
    } finally {
      session.close();
    }
  }
}
async function syncKimiActiveTheme(targets, menuScript, injectedTargetIds, themeId, actionAt) {
  for (const target of targets) {
    const session = new CdpSession(target.webSocketDebuggerUrl);
    try {
      await session.open();
      await session.evaluate(`(() => {
        try {
          localStorage.removeItem('${KIMI_RESTORE_KEY}');
          localStorage.setItem('${KIMI_ACTION_KEY}', '${actionAt}');
        } catch {}
        delete document.documentElement.dataset.dreamThemeRestored;
        return true;
      })()`);
      const hasMenu = await session.evaluate(`(() => Boolean(window.__dreamTheme?.activateTheme))()`).catch(() => false);
      if (!hasMenu) await session.evaluate(menuScript);
      await session.evaluate(`(() => window.__dreamTheme?.activateTheme(${JSON.stringify(themeId)}, ${actionAt}))()`);
      injectedTargetIds.add(target.id);
    } finally {
      session.close();
    }
  }
}
async function getStatus(appId, port, options = {}) {
  return readStatusOnce(appId, port, options);
}
function startHanaAgentWatcher(port, menuScript, injectedTargetIds) {
  const existing = hanaAgentWatchers.get(port);
  if (existing) clearInterval(existing);
  const generation = (hanaAgentGenerations.get(port) ?? 0) + 1;
  hanaAgentGenerations.set(port, generation);
  let busy = false;
  const timer = setInterval(async () => {
    if (busy) return;
    if (hanaAgentGenerations.get(port) !== generation) return;
    busy = true;
    try {
      const targets = await fetchRendererTargets(port, ".hanako/artifacts/renderer/", { timeoutMs: 1e3, quiet: true });
      const target = targets[0];
      if (!target) return;
      if (hanaAgentGenerations.get(port) !== generation) return;
      const session = new CdpSession(target.webSocketDebuggerUrl);
      try {
        await session.open();
        const state = await session.evaluate(`(() => {
          const host = document.getElementById('${MENU_ID}-host');
          if (document.documentElement.dataset.dreamThemeRestored === 'true') return 'restored';
          return document.getElementById('${STYLE_ID}') && host?.shadowRoot?.getElementById('${MENU_ID}') && document.documentElement.dataset.dreamTheme
            ? 'ready'
            : 'missing';
        })()`).catch(() => "missing");
        if (state === "ready" || state === "restored") {
          injectedTargetIds.add(target.id);
          return;
        }
        console.log(`[injector] HanaAgent watcher restoring theme on renderer target ${target.id}`);
        if (hanaAgentGenerations.get(port) !== generation) return;
        const persistentScript = `(() => {
          const inject = () => ${menuScript};
          if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', inject, { once: true });
          else inject();
        })()`;
        if (!injectedTargetIds.has(target.id)) {
          const identifier = await session.addScriptToEvaluateOnNewDocument(persistentScript);
          if (identifier) hanaAgentPersistentScripts.set(target.id, identifier);
        }
        await session.evaluate(menuScript);
        if (hanaAgentGenerations.get(port) !== generation) {
          await session.evaluate(`(() => {
            document.getElementById('${STYLE_ID}')?.remove();
            document.getElementById('${MENU_ID}-host')?.remove();
            clearInterval(window.__dreamWorkMenuGuard);
            delete window.__dreamWorkMenuGuard;
            delete document.documentElement.dataset.dreamTheme;
          })()`).catch(() => {
          });
          return;
        }
        injectedTargetIds.add(target.id);
      } finally {
        session.close();
      }
    } catch {
      if (!await isPortReachable(port)) {
        clearInterval(timer);
        hanaAgentWatchers.delete(port);
      }
    } finally {
      busy = false;
    }
  }, 1e3);
  hanaAgentWatchers.set(port, timer);
}
async function isPortReachable(port) {
  try {
    const response = await fetch(`http://127.0.0.1:${port}/json/version`, { signal: AbortSignal.timeout(500) });
    return response.ok;
  } catch {
    return false;
  }
}
async function readStatusOnce(appId, port, options = {}) {
  var _a;
  const hints = options.rendererUrlHint ? [options.rendererUrlHint] : ((_a = getAppDefinition(appId)) == null ? void 0 : _a.rendererHints) ?? ["renderer/index.html", "index.html"];
  let targets = [];
  for (const hint of hints) {
    try {
      targets = await fetchRendererTargets(port, hint, { timeoutMs: 1e3, quiet: true });
      if (targets.length > 0) break;
    } catch {
    }
  }
  if (appId === "sparkdesk") {
    try {
      const allTargets = await fetchSparkDeskTargets(port);
      if (allTargets.length > 0) targets = allTargets;
    } catch {
    }
  }
  if (targets.length === 0) {
    try {
      const resp = await fetch(`http://127.0.0.1:${port}/json/list`, { signal: AbortSignal.timeout(5e3) });
      const json = await resp.json();
      targets = (Array.isArray(json) ? json : []).filter(isAnyPageTarget).sort((a, b) => {
        const la = [String(a.id ?? ""), a.url, a.webSocketDebuggerUrl];
        const lb = [String(b.id ?? ""), b.url, b.webSocketDebuggerUrl];
        for (let i = 0; i < la.length; i++) {
          if (la[i] < lb[i]) return -1;
          if (la[i] > lb[i]) return 1;
        }
        return 0;
      });
    } catch {
    }
  }
  if (targets.length === 0) {
    return { installed: false, menu: false, targets: 0 };
  }
  const states = [];
  for (const target of targets) {
    const session = new CdpSession(target.webSocketDebuggerUrl);
    try {
      await session.open();
      if (appId === "workbuddy") {
        const isWorkBuddy = await session.evaluate(`(() => document.body?.dataset.applicationName === 'workbuddy')()`);
        if (!isWorkBuddy) continue;
      }
      const serializedState = await session.evaluate(`(() => {
        const style = document.getElementById('${STYLE_ID}');
        const menuHost = document.getElementById('${MENU_ID}-host');
        const menu = document.getElementById('${MENU_ID}') || menuHost?.shadowRoot?.getElementById('${MENU_ID}');
        return JSON.stringify({
          installed: Boolean(style),
          menu: Boolean(menu),
          themeId: document.documentElement.dataset.dreamTheme ?? undefined
        });
      })()`);
      const state = JSON.parse(serializedState);
      states.push(state);
    } catch (error) {
      console.warn(`[injector] Status check failed for ${appId} target ${target.id}:`, error);
    } finally {
      session.close();
    }
  }
  const active = states.find((state) => state.installed && state.themeId) ?? states.find((state) => state.installed);
  return {
    installed: states.some((state) => state.installed),
    menu: states.some((state) => state.menu),
    themeId: active == null ? void 0 : active.themeId,
    targets: states.length
  };
}
async function removeSkin(appId, port, options = {}) {
  var _a;
  const restoreActionAt = Date.now();
  if (appId === "hana-agent") {
    hanaAgentGenerations.set(port, (hanaAgentGenerations.get(port) ?? 0) + 1);
    const watcher = hanaAgentWatchers.get(port);
    if (watcher) clearInterval(watcher);
    hanaAgentWatchers.delete(port);
  }
  if (appId === "doubao") {
    doubaoGenerations.set(port, (doubaoGenerations.get(port) ?? 0) + 1);
    const watcher = doubaoWatchers.get(port);
    if (watcher) clearInterval(watcher);
    doubaoWatchers.delete(port);
  }
  if (appId === "stepfun") {
    stepFunGenerations.set(port, (stepFunGenerations.get(port) ?? 0) + 1);
    const watcher = stepFunWatchers.get(port);
    if (watcher) clearInterval(watcher);
    stepFunWatchers.delete(port);
  }
  if (appId === "sparkdesk") {
    sparkDeskGenerations.set(port, (sparkDeskGenerations.get(port) ?? 0) + 1);
    const watcher = sparkDeskWatchers.get(port);
    if (watcher) clearInterval(watcher);
    sparkDeskWatchers.delete(port);
    const service = await ensureSharedCustomThemeService();
    await fetch(`${service.appStateEndpoint}/sparkdesk`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${service.token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ themeId: "", actionAt: restoreActionAt })
    }).catch(() => {
    });
  }
  const rendererUrlHint = options.rendererUrlHint ?? ((_a = getAppDefinition(appId)) == null ? void 0 : _a.rendererHints[0]) ?? "renderer/index.html";
  let targets = [];
  try {
    targets = appId === "kimi" ? await fetchKimiTargets(port) : appId === "stepfun" ? await fetchStepFunTargets(port) : appId === "sparkdesk" ? await fetchSparkDeskTargets(port) : await fetchRendererTargets(port, rendererUrlHint);
  } catch {
  }
  if (targets.length === 0) {
    try {
      const resp = await fetch(`http://127.0.0.1:${port}/json/list`, { signal: AbortSignal.timeout(5e3) });
      const json = await resp.json();
      targets = (Array.isArray(json) ? json : []).filter(isAnyPageTarget).sort((a, b) => {
        const la = [String(a.id ?? ""), a.url, a.webSocketDebuggerUrl];
        const lb = [String(b.id ?? ""), b.url, b.webSocketDebuggerUrl];
        for (let i = 0; i < la.length; i++) {
          if (la[i] < lb[i]) return -1;
          if (la[i] > lb[i]) return 1;
        }
        return 0;
      });
    } catch {
    }
  }
  if (targets.length === 0) {
    return { success: false };
  }
  for (const target of appId === "hana-agent" || appId === "kimi" || appId === "agnes-code" || appId === "stepfun" || appId === "sparkdesk" ? targets : targets.slice(0, 1)) {
    const session = new CdpSession(target.webSocketDebuggerUrl);
    await session.open();
    if (appId === "hana-agent") {
      const identifier = hanaAgentPersistentScripts.get(target.id);
      if (identifier) {
        await session.removeScriptToEvaluateOnNewDocument(identifier).catch(() => {
        });
        hanaAgentPersistentScripts.delete(target.id);
      }
    }
    if (appId === "doubao") {
      const identifier = doubaoPersistentScripts.get(target.id);
      if (identifier) {
        await session.removeScriptToEvaluateOnNewDocument(identifier).catch(() => {
        });
        doubaoPersistentScripts.delete(target.id);
      }
    }
    if (appId === "stepfun") {
      const identifier = stepFunPersistentScripts.get(target.id);
      if (identifier) {
        await session.removeScriptToEvaluateOnNewDocument(identifier).catch(() => {
        });
        stepFunPersistentScripts.delete(target.id);
      }
    }
    if (appId === "sparkdesk") {
      const identifier = sparkDeskPersistentScripts.get(target.id);
      if (identifier) {
        await session.removeScriptToEvaluateOnNewDocument(identifier).catch(() => {
        });
        sparkDeskPersistentScripts.delete(target.id);
      }
    }
    await session.evaluate(`(async () => {
      ${appId === "sparkdesk" ? `await window.__dreamTheme?.restoreNative(${restoreActionAt});` : ""}
      ${appId === "hana-agent" ? `try { localStorage.setItem('dream-work-theme:hana-agent:restored', '1'); } catch {}
      document.documentElement.dataset.dreamThemeRestored = 'true';` : ""}
      ${appId === "doubao" ? `document.documentElement.dataset.dreamThemeRestored = 'true';` : ""}
      ${appId === "doubao" ? `try { localStorage.setItem('dream-work-theme:doubao:restored', '1'); } catch {}` : ""}
      ${appId === "kimi" ? `try { localStorage.setItem('${KIMI_RESTORE_KEY}', '1'); } catch {}
      try { localStorage.setItem('${KIMI_ACTION_KEY}', '${restoreActionAt}'); } catch {}
      document.documentElement.dataset.dreamThemeRestored = 'true';` : ""}
      ${appId === "kimi" ? `const style = document.getElementById('${STYLE_ID}');
      if (style) style.textContent = '';` : `document.getElementById('${STYLE_ID}')?.remove();
      document.getElementById('${MENU_ID}')?.remove();
      document.getElementById('${MENU_ID}-host')?.remove();
      clearInterval(window.__dreamWorkMenuGuard);
      delete window.__dreamWorkMenuGuard;
      if (window.__dreamWorkOutsideClick) {
        document.removeEventListener('pointerdown', window.__dreamWorkOutsideClick, true);
        delete window.__dreamWorkOutsideClick;
      }`}
      ${appId === "minimax-code" || appId === "agnes-code" || appId === "astronclaw" || appId === "stepfun" || appId === "sparkdesk" ? `await window.__dreamWorkRestoreNativeMode?.();` : ""}
      delete document.documentElement.dataset.dreamTheme;
      delete document.documentElement.dataset.dreamShell;
      return true;
    })`);
    session.close();
  }
  if (appId === "sparkdesk") {
    await new Promise((resolve) => setTimeout(resolve, 750));
    const currentTargets = await fetchSparkDeskTargets(port).catch(() => []);
    for (const target of currentTargets) {
      const session = new CdpSession(target.webSocketDebuggerUrl);
      try {
        await session.open();
        await session.evaluate(`(async () => {
          await window.__dreamWorkRestoreNativeMode?.();
          document.getElementById('${STYLE_ID}')?.remove();
          document.getElementById('${MENU_ID}')?.remove();
          document.getElementById('${MENU_ID}-host')?.remove();
          clearInterval(window.__dreamWorkMenuGuard);
          delete window.__dreamWorkMenuGuard;
          delete document.documentElement.dataset.dreamTheme;
          delete document.documentElement.dataset.dreamShell;
          return true;
        })()`);
      } finally {
        session.close();
      }
    }
  }
  return { success: true };
}
function readThemeCss(theme) {
  try {
    const cssPath = path__namespace.join(theme.path, "theme.css");
    if (!fs__namespace.existsSync(cssPath)) return "";
    return "\n/* theme.css */\n" + fs__namespace.readFileSync(cssPath, "utf-8");
  } catch (error) {
    console.warn(`[injector] Failed to read theme.css for ${theme.id}:`, error);
    return "";
  }
}
function shouldInjectThemeCss(appId, theme) {
  var _a, _b, _c;
  const kind = (_a = getAppDefinition(appId)) == null ? void 0 : _a.kind;
  if (kind !== "generic-work") return false;
  const appCompat = (_c = (_b = theme.manifest.apps) == null ? void 0 : _b[appId]) == null ? void 0 : _c.compat;
  return appCompat !== false;
}
function buildAppCss(appId, manifest, heroDataUrl) {
  var _a, _b, _c, _d;
  const colors = {
    accent: ((_a = manifest.colors) == null ? void 0 : _a.accent) ?? "#24c9d7",
    secondary: ((_b = manifest.colors) == null ? void 0 : _b.secondary) ?? "#ef8fd3",
    surface: ((_c = manifest.colors) == null ? void 0 : _c.surface) ?? "#f7fbff",
    text: ((_d = manifest.colors) == null ? void 0 : _d.text) ?? "#17344f"
  };
  if (appId === "codex") {
    return buildCodexCss(manifest, heroDataUrl, colors);
  }
  const definition = getAppDefinition(appId);
  if ((definition == null ? void 0 : definition.kind) === "vscode-work") {
    return buildVsCodeWorkCss(manifest, heroDataUrl, colors);
  }
  if ((definition == null ? void 0 : definition.kind) === "generic-work") {
    if (appId === "hana-agent") {
      return buildHanaAgentCss(manifest, heroDataUrl, colors);
    }
    if (appId === "kimi") {
      return buildKimiCss(manifest, heroDataUrl, colors);
    }
    return buildGenericWorkCss(appId, manifest, heroDataUrl, colors);
  }
  return buildWorkBuddyCss({ ...manifest, copy: null }, heroDataUrl, colors);
}
function buildVsCodeWorkCss(manifest, heroDataUrl, colors) {
  return `/* DREAM_THEME:${manifest.id} */
:root {
  --vscode-editor-background: transparent !important;
  --vscode-foreground: ${colors.text} !important;
  --vscode-sideBar-background: color-mix(in srgb, ${colors.surface} 92%, transparent) !important;
  --vscode-panel-background: transparent !important;
  --vscode-input-background: color-mix(in srgb, ${colors.surface} 94%, transparent) !important;
  --vscode-button-background: ${colors.accent} !important;
  --vscode-button-foreground: #ffffff !important;
  --vscode-focusBorder: ${colors.accent} !important;
}
body.solo-lite {
  background-color: ${colors.surface} !important;
  color: ${colors.text} !important;
}
body.solo-lite #root {
  background-color: ${colors.surface} !important;
  background-image: url(${JSON.stringify(heroDataUrl)}) !important;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  color: ${colors.text} !important;
}
body.solo-lite #solo-lite-root {
  background-color: transparent !important;
  background-image: none !important;
}
.panel-content,
.initial-chat-panel,
.solo-lite-chat-panel-container {
  background-color: transparent !important;
  background-image: none !important;
  color: ${colors.text} !important;
}
.panel-content > *,
.initial-chat-panel > *,
.initial-chat-panel-content,
.solo-lite-chat-panel-container > *,
.solo-lite-chat-panel-main,
.solo-lite-chat-panel,
.solo-lite-chat-panel-content > *,
.solo-lite-chat-container,
.session-panel-cache-layout,
.virtualized-message-list-view__content,
.virtualized-message-list-view,
[class*="virtualized-message-list-view__scroller"],
[class*="virtualized-message-list-view__virtuoso"] {
  background-color: transparent !important;
  background-image: none !important;
}
.messageInputContainer {
  background-color: color-mix(in srgb, ${colors.surface} 76%, transparent) !important;
  color: ${colors.text} !important;
  backdrop-filter: blur(12px) saturate(105%);
}
.messageInputContainer {
  border-color: color-mix(in srgb, ${colors.accent} 34%, transparent) !important;
  box-shadow: 0 16px 44px color-mix(in srgb, ${colors.surface} 34%, transparent) !important;
}
.messageInputContainer :where(
  .chat-input-v2-editor-part,
  .chat-input-v2-slot-header,
  .chat-input-v2-editor-part-lower-content,
  .chat-input-v2-editor-part-lower__left,
  .chat-input-v2-editor-part-lower__right,
  .chat-input-v2-slot-toolbar-right,
  .chat-input-v2-slot-overlay,
  .messageInputToolbarIconBtn,
  .messageInputPluginToolbar,
  .messageInputPluginToolbarIconWrapper,
  .messageInputPluginToolbarMore,
  .chat-input-v2-send-button
) {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
}
html body.solo-lite #root .initial-chat-panel .messageInputContainer button.messageInputToolbarIconBtn,
html body.solo-lite #root .initial-chat-panel .messageInputContainer button.messageInputPluginToolbar,
html body.solo-lite #root .initial-chat-panel .messageInputContainer .messageInputPluginToolbarIconWrapper,
html body.solo-lite #root .initial-chat-panel .messageInputContainer .messageInputPluginToolbarMore,
html body.solo-lite #root .initial-chat-panel .messageInputContainer .chat-input-v2-editor-part-lower__right,
html body.solo-lite #root .initial-chat-panel .messageInputContainer .chat-input-v2-slot-toolbar-right,
html body.solo-lite #root .solo-lite-chat-panel-content .messageInputContainer button.messageInputToolbarIconBtn,
html body.solo-lite #root .solo-lite-chat-panel-content .messageInputContainer button.messageInputPluginToolbar,
html body.solo-lite #root .solo-lite-chat-panel-content .messageInputContainer .messageInputPluginToolbarIconWrapper,
html body.solo-lite #root .solo-lite-chat-panel-content .messageInputContainer .messageInputPluginToolbarMore,
html body.solo-lite #root .solo-lite-chat-panel-content .messageInputContainer .chat-input-v2-editor-part-lower__right,
html body.solo-lite #root .solo-lite-chat-panel-content .messageInputContainer .chat-input-v2-slot-toolbar-right {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
}
html body.solo-lite #root :where(.initial-chat-panel, .solo-lite-chat-panel-content) .messageInputContainer
  :where(button, button span, .messageInputPluginToolbarMore, .core-model-select-trigger, .rtcVoicePluginButton, .voiceCallButton, .inputBarButton-ncFFma) {
  color: ${colors.text} !important;
  -webkit-text-fill-color: ${colors.text} !important;
}
html body.solo-lite #root :where(.initial-chat-panel, .solo-lite-chat-panel-content) .messageInputContainer
  :where(button, [role="button"]) svg {
  color: ${colors.text} !important;
  fill: currentColor !important;
  stroke: currentColor !important;
}
.messageInputContainer .chat-input-v2-slot-overlay {
  pointer-events: none !important;
}
.messageInputContainer :where(
  button,
  .messageInputToolbarIconBtn,
  .messageInputPluginToolbar,
  .core-model-select-trigger,
  .rtcVoicePluginButton,
  .voiceCallButton,
  .inputBarButton-ncFFma
) {
  color: ${colors.text} !important;
  -webkit-text-fill-color: ${colors.text} !important;
}
.messageInputContainer :where(button, [role="button"]) svg {
  color: ${colors.text} !important;
  fill: currentColor !important;
  stroke: currentColor !important;
}
.messageInputContainer :where(button, [role="button"]):hover {
  background-color: color-mix(in srgb, ${colors.accent} 16%, transparent) !important;
}
.messageInputContainer .chat-input-v2-send-button:not(.disabled) {
  background-color: ${colors.accent} !important;
  color: #ffffff !important;
  -webkit-text-fill-color: #ffffff !important;
}
.messageInputContainer .chat-input-v2-send-button.disabled {
  opacity: .5 !important;
}
.messageInputContainer .projectButtonPlaceholderWork-JV100D,
.messageInputContainer [class*="Placeholder"] {
  color: color-mix(in srgb, ${colors.text} 66%, transparent) !important;
  -webkit-text-fill-color: color-mix(in srgb, ${colors.text} 66%, transparent) !important;
}
html[data-dream-shell="dark"] body.solo-lite #root .messageInputContainer
  :where(.inputBarButton-ncFFma, .inputBarButton-ncFFma *, .core-model-select-trigger, .core-model-select-trigger *) {
  color: ${colors.text} !important;
  -webkit-text-fill-color: ${colors.text} !important;
}
html[data-dream-shell="dark"] body.solo-lite #root
  :where(.task-list-base-content, .soloLiteMenubar, .task-list-base-footer)
  :where(
    .tab-pLFRtu,
    .tab-pLFRtu *,
    .task-list-new-task-item,
    .task-list-new-task-item *,
    .taskItem,
    .taskItem *,
    .task-list-heading,
    .task-list-heading *,
    .task-list-group-title,
    .task-list-group-title *,
    .accountTrigger-rIX2_l,
    .accountTrigger-rIX2_l *,
    .solo-mobile-expanded-btn,
    .solo-mobile-expanded-btn *,
    .menubar-menu-title,
    .menubar-menu-title *
  ) {
  color: ${colors.text} !important;
  -webkit-text-fill-color: ${colors.text} !important;
}
html[data-dream-shell="dark"] body.solo-lite #root
  :where(.task-list-heading, .task-list-group-title, .menubar-menu-title) {
  opacity: .78 !important;
}
html[data-dream-shell="dark"] body.solo-lite #root
  :where(.task-list-base-content, .soloLiteMenubar, .task-list-base-footer, .messageInputContainer) svg {
  color: ${colors.text} !important;
}
html[data-dream-shell="dark"] body.solo-lite #root
  :where(.task-list-base-content, .soloLiteMenubar, .task-list-base-footer, .messageInputContainer)
  :where(svg[fill]:not([fill="none"]), svg [fill]:not([fill="none"])) {
  fill: currentColor !important;
}
html[data-dream-shell="dark"] body.solo-lite #root
  :where(.task-list-base-content, .soloLiteMenubar, .task-list-base-footer, .messageInputContainer)
  :where(svg[stroke]:not([stroke="none"]), svg [stroke]:not([stroke="none"])) {
  stroke: currentColor !important;
}
`;
}
function buildGenericWorkCss(appId, manifest, heroDataUrl, colors) {
  const mainSelectors = {
    "qoder-work": '#root > div, [class*="layout"], [class*="content-area"], [class*="main-content"]',
    catpaw: ".main-area, .main-content-container, .main-content, .chat-content-area",
    zcode: 'main, main > div, [class*="min-h-0"][class*="flex-1"]',
    "qwen-office": ".agents-content-area, .agents-parchment-paper-surface",
    "agnes-code": ":not(*)",
    "minimax-code": ":not(*)",
    astronclaw: '.local-chat-shell, .local-chat-main, [class*="local-chat-content"]',
    stepfun: "#root",
    sparkdesk: ".app-container",
    "deepseek-harness": '[class*="_centerCol"]'
  };
  const sidebarSelectors = {
    "qoder-work": '[class*="sidebar"]',
    catpaw: ".sidebar-wrapper, .sidebar",
    zcode: "#sidebar, aside",
    "qwen-office": ".agents-sidebar, .group\\/sidebar",
    "agnes-code": ":not(*)",
    "minimax-code": ":not(*)",
    astronclaw: '.local-chat-rail, [class*="local-chat-sidebar"]',
    sparkdesk: '.browser-header, [class*="left_side"], [class*="sidebar"]'
  };
  const main = mainSelectors[appId] ?? 'main, [role="main"], [class*="main-content"]';
  const sidebar = sidebarSelectors[appId] ?? 'aside, nav, [class*="sidebar"]';
  const appSpecificCss = appId === "qoder-work" ? buildQoderWorkShellCss(colors) : appId === "catpaw" ? buildCatPawCss(heroDataUrl, colors) : appId === "opencode" ? buildOpenCodeCss(colors) : appId === "doubao" ? buildDoubaoCss(colors) : appId === "agnes-code" ? buildAgnesCodeCss(heroDataUrl, colors) : appId === "minimax-code" ? buildMiniMaxCodeCss(heroDataUrl, colors) : appId === "astronclaw" ? buildAstronClawCss(heroDataUrl, colors) : appId === "stepfun" ? buildStepFunCss(heroDataUrl, colors) : appId === "sparkdesk" ? buildSparkDeskCss(heroDataUrl, colors) : appId === "deepseek-harness" ? buildDeepSeekHarnessCss(heroDataUrl, colors) : appId === "zcode" ? buildZCodeCss(heroDataUrl, colors) : "";
  if (appId === "sparkdesk") {
    return `/* DREAM_THEME:${manifest.id} */
${appSpecificCss}`;
  }
  return `/* DREAM_THEME:${manifest.id} */
:root {
  --dream-work-accent: ${colors.accent};
  --dream-work-secondary: ${colors.secondary};
  --dream-work-surface: ${colors.surface};
  --dream-work-text: ${colors.text};
  --catpaw-bg-primary: ${colors.surface} !important;
  --catpaw-text-primary: ${colors.text} !important;
  --catpaw-text-secondary: color-mix(in srgb, ${colors.text} 72%, transparent) !important;
  --agents-sidebar-material-bg: color-mix(in srgb, ${colors.surface} 90%, transparent) !important;
  --text-base-primary: ${colors.text} !important;
  --text-base-secondary: color-mix(in srgb, ${colors.text} 72%, transparent) !important;
  --bg-base: color-mix(in srgb, ${colors.surface} 86%, transparent) !important;
}
html, body, #root { background: ${colors.surface} !important; color: ${colors.text} !important; }
${appId === "zcode" ? "" : `:is(${sidebar}) {
  background: color-mix(in srgb, ${colors.surface} 90%, transparent) !important;
  color: ${colors.text} !important;
  backdrop-filter: blur(20px) saturate(108%);
}`}
${appId === "zcode" ? `:is(${main}) {
  color: ${colors.text} !important;
}` : `:is(${main}) {
  background: linear-gradient(90deg, color-mix(in srgb, ${colors.surface} 82%, transparent) 0 12%, transparent 42%), url(${JSON.stringify(heroDataUrl)}) center / cover no-repeat fixed !important;
  color: ${colors.text} !important;
}`}
:is(${main}) :where([class*="message"], [class*="chat"], [class*="composer"], [class*="editor"], [contenteditable="true"], textarea) {
  color: ${colors.text} !important;
}
${appId === "doubao" || appId === "astronclaw" || appId === "stepfun" || appId === "zcode" ? "" : `:is(${main}) :where([class*="message"], [class*="bubble"], [class*="composer"], [class*="input-container"]) {
  background-color: color-mix(in srgb, ${colors.surface} 88%, transparent) !important;
  backdrop-filter: blur(16px) saturate(108%);
}`}
:is(${main}) :where(p, span, li, h1, h2, h3, h4, strong, em) { color: ${colors.text} !important; }
button[class*="bg-primary"], button[class*="bg-accent"] { background-color: ${colors.accent} !important; color: #fff !important; }
${appSpecificCss}`;
}
function buildDeepSeekHarnessCss(heroDataUrl, colors) {
  return `
html {
  background-color: ${colors.surface} !important;
  background-image: none !important;
}
html::before {
  content: "";
  position: fixed;
  z-index: 0;
  pointer-events: none;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.surface};
  background-image: url(${JSON.stringify(heroDataUrl)});
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
body,
#root,
#root > [data-slot="root"] > div,
[class*="_centerCol"],
[class*="_centerCol"] > [data-slot] > div,
[data-slot="main"] > div {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
}
body,
#root {
  position: relative;
  z-index: 1;
}
[class*="_centerCol"] :where(
  [class*="_composer"],
  [class*="_input"],
  [class*="_message"],
  [class*="_card"]
) {
  border-color: color-mix(in srgb, ${colors.accent} 24%, transparent) !important;
}
`;
}
function buildZCodeCss(heroDataUrl, colors) {
  return `
html,
body,
#root,
.bg-background-win-alt,
section.bg-background {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
}
html {
  background-color: ${colors.surface} !important;
}
html::before {
  content: "";
  position: fixed;
  z-index: 0;
  pointer-events: none;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.surface};
  background-image: url(${JSON.stringify(heroDataUrl)});
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
body,
#root {
  position: relative;
  z-index: 1;
}
`;
}
function buildSparkDeskCss(heroDataUrl, colors) {
  const surfaceValue = parseInt(String(colors.surface).replace("#", ""), 16);
  const surfaceIsLight = Number.isFinite(surfaceValue) ? 0.299 * (surfaceValue >> 16 & 255) + 0.587 * (surfaceValue >> 8 & 255) + 0.114 * (surfaceValue & 255) > 140 : true;
  return `
html,
body,
#root,
.app-container {
  min-height: 100% !important;
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  color: ${colors.text} !important;
}
html {
  background-color: ${colors.surface} !important;
  background-image: none !important;
}
html::before {
  content: "";
  position: fixed;
  z-index: 0;
  pointer-events: none;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.surface};
  background-image: url(${JSON.stringify(heroDataUrl)});
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
html[data-dream-sparkdesk-surface="content"]::before {
  top: -80px;
  bottom: auto;
  height: calc(100vh + 80px);
}
body,
#root,
.app-container {
  position: relative;
  z-index: 1;
}
.browser-container,
.browser-header,
.tabs-container,
.tabs-list,
.tabs-wrap,
.drag-area,
.control-area,
.address-bar,
.wrapper-container {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  color: ${colors.text} !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.browser-container {
  box-shadow: none !important;
}
.tab,
.tab > div,
.new-tab-btn,
.new-tab-btn-wrap,
.navigation-bar,
.address-bar :where(button, [role="button"], input) {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.tab.active,
.tab.active > div {
  background-color: color-mix(in srgb, ${colors.surface} 18%, transparent) !important;
  background-image: none !important;
}
.browser-container > :not(.browser-header):not(.address-bar),
[class*="right_side"],
[class*="chat_window_wrapper"],
[class*="chat_window"],
[class*="chat_content_wrapper"],
#chat-window,
#chat-content-wrapper,
#out-wrap {
  background-color: transparent !important;
  background-image: none !important;
}
#root > .app-container > div > div[class*="container_"]:first-child {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  filter: none !important;
}
[class^="_feature_card_"],
[class*=" _feature_card_"],
[class*="_function_item_"] {
  background: color-mix(in srgb, ${colors.surface} 58%, transparent) !important;
  background-image: none !important;
  border-color: color-mix(in srgb, ${colors.accent} 20%, transparent) !important;
  box-shadow: 0 8px 24px color-mix(in srgb, ${colors.surface} 20%, transparent) !important;
}
[class^="_feature_card_"] *,
[class*=" _feature_card_"] *,
[class*="_function_item_"] *,
[class*="welcome"] *,
[class*="new_chat"] *,
[class*="recommend"] * {
  color: ${colors.text} !important;
  -webkit-text-fill-color: ${colors.text} !important;
}
[class*="left_side"],
[class*="personal_page"],
[class*="tabArea"],
[class*="header_"],
[class*="footer_wrap"] {
  background-color: color-mix(in srgb, ${colors.surface} 18%, transparent) !important;
  color: ${colors.text} !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
[class*="ask_win"],
[class*="ask_wrapper"],
[class*="ask_textarea_wrapper"],
[class*="welcome_wrapper"],
[class*="example_item"],
.ant-input,
.ant-picker,
.ant-select-selector,
textarea,
[contenteditable="true"] {
  background-color: color-mix(in srgb, ${colors.surface} 86%, transparent) !important;
  border-color: color-mix(in srgb, ${colors.accent} 28%, transparent) !important;
  color: ${colors.text} !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
[class*="ask_window"] {
  --sparkdesk-composer-surface: color-mix(in srgb, ${colors.surface} 86%, transparent);
  background-color: var(--sparkdesk-composer-surface) !important;
}
[class*="activeTab"],
.ant-btn-primary {
  background-color: ${colors.accent} !important;
  color: #ffffff !important;
}
.app-container :where(p, span, li, h1, h2, h3, h4, label, strong, em, input, textarea) {
  color: ${colors.text} !important;
  -webkit-text-fill-color: ${colors.text} !important;
}
.app-container :where(button, [role="button"]):hover {
  background-color: color-mix(in srgb, ${colors.accent} 16%, transparent) !important;
}
.markdown-body,
.markdown-body :where(p, span, li, div, strong, em, code),
[class*="content_gpt"],
[class*="content_gpt"] :where(p, span, li, div, strong, em, code),
.result-inner,
.result-inner :where(p, span, li, div, strong, em, code) {
  color: ${colors.text} !important;
  -webkit-text-fill-color: ${colors.text} !important;
}
[class*="content_user"] {
  background-color: color-mix(in srgb, ${colors.accent} 24%, ${colors.surface}) !important;
  color: ${colors.text} !important;
}
[class*="content_user"] :where(p, span, div) {
  color: ${colors.text} !important;
  -webkit-text-fill-color: ${colors.text} !important;
}
[class*="right_operate_wrap"] > :where(
  [class*="open_upload_btn"],
  [class*="screen_shot_icon"],
  [class*="voice_input"],
  [class*="send"]
) {
  background-color: var(--sparkdesk-composer-surface) !important;
  background-image: none !important;
  color: ${colors.text} !important;
  border-color: color-mix(in srgb, ${colors.accent} 24%, transparent) !important;
  box-shadow: none !important;
}
[class*="ask_operate_wrap"],
[class*="ask_operate_wrap_v2"],
[class*="right_operate_wrap"] {
  background-color: var(--sparkdesk-composer-surface) !important;
  background-image: none !important;
  color: ${colors.text} !important;
}
[class*="chat_func_wrap"] :where(
  [class*="deep_think_switch"],
  [class*="model"],
  [class*="switch"],
  button,
  [role="button"]
) {
  background-color: var(--sparkdesk-composer-surface) !important;
  background-image: none !important;
  color: ${colors.text} !important;
  -webkit-text-fill-color: ${colors.text} !important;
  border-color: color-mix(in srgb, ${colors.accent} 24%, transparent) !important;
}
[class*="chat_func_wrap"] > * {
  background-color: var(--sparkdesk-composer-surface) !important;
  background-image: none !important;
  color: ${colors.text} !important;
  -webkit-text-fill-color: ${colors.text} !important;
  border-color: color-mix(in srgb, ${colors.accent} 24%, transparent) !important;
}
[class*="chat_func_wrap"] > * svg,
[class*="chat_func_wrap"] > * svg * {
  color: ${colors.text} !important;
  stroke: ${colors.text} !important;
}
[class*="chat_func_wrap"] :where(
  [class*="deep_think_switch"],
  [class*="model"],
  [class*="switch"]
) svg,
[class*="chat_func_wrap"] :where(
  [class*="deep_think_switch"],
  [class*="model"],
  [class*="switch"]
) svg * {
  color: ${colors.text} !important;
  stroke: ${colors.text} !important;
}
[class*="right_operate_wrap"] > :where(
  [class*="open_upload_btn"],
  [class*="screen_shot_icon"],
  [class*="voice_input"],
  [class*="send"]
) :where(span, div, svg) {
  color: ${colors.text} !important;
  -webkit-text-fill-color: ${colors.text} !important;
}
[class*="right_operate_wrap"] > :where(
  [class*="open_upload_btn"],
  [class*="screen_shot_icon"],
  [class*="voice_input"],
  [class*="send"]
) svg,
[class*="right_operate_wrap"] > :where(
  [class*="open_upload_btn"],
  [class*="screen_shot_icon"],
  [class*="voice_input"],
  [class*="send"]
) svg * {
  color: ${colors.text} !important;
  stroke: ${colors.text} !important;
}
[class*="right_operate_wrap"] > [class*="send"] img {
  filter: ${surfaceIsLight ? "brightness(0)" : "none"} !important;
}
[class*="mainContainer"],
[class*="mainContainer"] [class*="main_"],
[class*="menu_view"],
[class*="settings_content"],
[class*="settings_panel"] {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  color: ${colors.text} !important;
}
[class*="mainContainer"] :where(div, span, p, label, h1, h2, h3, button) {
  color: ${colors.text} !important;
  -webkit-text-fill-color: ${colors.text} !important;
}
[class*="mainContainer"] :where(
  [class*="user_profile"],
  [class*="user_profile_info"],
  [class*="edit_profile_button"],
  [class*="settings_menu"],
  [class*="menu_item"],
  [class*="menu_item_content"],
  [class*="menu_item_right"]
) {
  background-color: color-mix(in srgb, ${colors.surface} 76%, transparent) !important;
  background-image: none !important;
  color: ${colors.text} !important;
  border-color: color-mix(in srgb, ${colors.accent} 20%, transparent) !important;
  box-shadow: none !important;
}
[class*="mainContainer"] [class*="user_profile_"],
[class*="mainContainer"] [class*="user_profile_info_"],
[class*="mainContainer"] [class*="edit_profile_button_"],
[class*="mainContainer"] [class*="settings_menu_"],
[class*="mainContainer"] [class*="menu_item_"],
[class*="mainContainer"] [class*="menu_item_content_"],
[class*="mainContainer"] [class*="menu_item_right_"] {
  background-color: color-mix(in srgb, ${colors.surface} 76%, transparent) !important;
  background-image: none !important;
  color: ${colors.text} !important;
  -webkit-text-fill-color: ${colors.text} !important;
  border-color: color-mix(in srgb, ${colors.accent} 20%, transparent) !important;
  box-shadow: none !important;
}
[class*="mainContainer"] [class*="edit_profile_button_"] {
  background-color: color-mix(in srgb, ${colors.surface} 88%, transparent) !important;
}
[class*="mainContainer"] :where([class*="menu_item"], [class*="edit_profile_button"]):hover {
  background-color: color-mix(in srgb, ${colors.accent} 18%, ${colors.surface}) !important;
}
[class*="mainContainer"] :where([class*="menu_icon"] img, [class*="menu_item_right"] img) {
  filter: ${surfaceIsLight ? "none" : "brightness(0) invert(1)"} !important;
}
`;
}
function buildStepFunCss(heroDataUrl, colors) {
  return `
:root {
  --bg-gold: transparent !important;
  --background: transparent !important;
  --foreground: ${colors.text} !important;
  --card: color-mix(in srgb, ${colors.surface} 78%, transparent) !important;
  --card-foreground: ${colors.text} !important;
  --popover: color-mix(in srgb, ${colors.surface} 92%, transparent) !important;
  --popover-foreground: ${colors.text} !important;
  --primary: ${colors.accent} !important;
  --primary-foreground: #ffffff !important;
  --muted: color-mix(in srgb, ${colors.surface} 72%, transparent) !important;
  --muted-foreground: color-mix(in srgb, ${colors.text} 68%, transparent) !important;
  --border: color-mix(in srgb, ${colors.accent} 24%, transparent) !important;
}
html,
body,
#root {
  min-height: 100% !important;
  background: transparent !important;
  color: ${colors.text} !important;
}
html {
  background-color: ${colors.surface} !important;
  background-image: url(${JSON.stringify(heroDataUrl)}) !important;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
}
html[data-dream-stepfun-surface="content"] {
  background-image: none !important;
}
html[data-dream-stepfun-surface="content"] body,
html[data-dream-stepfun-surface="content"] #root,
html[data-dream-stepfun-surface="content"] #root.bg-bg-gold,
html[data-dream-stepfun-surface="content"] #root.bg-gold,
html[data-dream-stepfun-surface="content"] #app {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
}
html::before {
  content: "";
  position: fixed;
  z-index: 0;
  pointer-events: none;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.surface};
  background-image: url(${JSON.stringify(heroDataUrl)});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
html[data-dream-stepfun-surface="content"]::before {
  top: -90px;
  height: calc(100vh + 90px);
}
body,
#root,
#app {
  position: relative;
  z-index: 1;
}
#root > div:not([class*="fixed"]),
#root [class*="flex-1"],
#root [class*="flex-grow"],
#root [class*="h-full"]:not([class*="fixed"]),
#root [class*="min-h-full"] {
  background-color: transparent !important;
  background-image: none !important;
}
#root.h-full.w-full > div.fixed.w-72.bg-gold,
#root.h-full.w-full > div.fixed.w-72.bg-bg-gold,
#root div.fixed.w-72.bg-gold,
#root div.fixed.w-72.bg-bg-gold {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  color: ${colors.text} !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
#root header,
#root > div.fixed[class*="z-[60]"] {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
#root :where([class*="message"], [class*="conversation"], [class*="chat-list"], [class*="scroll-area"]) {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.tab-bar,
.tab-bar .tab > div,
.navigation-bar,
.content-area {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
[class*="subscription-modal_root"],
[class*="subscription-modal_footer"] {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
#root :where(textarea, input, [contenteditable="true"]) {
  color: ${colors.text} !important;
  caret-color: ${colors.accent} !important;
}
`;
}
function buildAstronClawCss(heroDataUrl, colors) {
  return `
:root {
  --background: ${colors.surface} !important;
  --foreground: ${colors.text} !important;
  --card: color-mix(in srgb, ${colors.surface} 82%, transparent) !important;
  --card-foreground: ${colors.text} !important;
  --popover: color-mix(in srgb, ${colors.surface} 92%, transparent) !important;
  --popover-foreground: ${colors.text} !important;
  --primary: ${colors.accent} !important;
  --primary-foreground: #ffffff !important;
  --secondary: color-mix(in srgb, ${colors.secondary} 22%, ${colors.surface}) !important;
  --secondary-foreground: ${colors.text} !important;
  --muted: color-mix(in srgb, ${colors.surface} 76%, transparent) !important;
  --muted-foreground: color-mix(in srgb, ${colors.text} 68%, transparent) !important;
  --accent: color-mix(in srgb, ${colors.accent} 24%, ${colors.surface}) !important;
  --accent-foreground: ${colors.text} !important;
  --border: color-mix(in srgb, ${colors.accent} 24%, transparent) !important;
  --input: color-mix(in srgb, ${colors.surface} 72%, transparent) !important;
  --ring: ${colors.accent} !important;
}
html,
body,
#root {
  min-height: 100% !important;
  background-color: ${colors.surface} !important;
  background-image: url(${JSON.stringify(heroDataUrl)}) !important;
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  color: ${colors.text} !important;
}
#root > div,
.workspace-frame,
.workspace-frame > div,
.local-chat-shell,
.local-chat-main,
.local-chat-content-col,
[class*="local-chat-content"],
[class*="skills"],
[class*="inspiration"],
[class*="marketplace"] {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.local-chat-rail,
.local-chat-sidebar-header-section,
.local-chat-account-panel {
  background-color: color-mix(in srgb, ${colors.surface} 12%, transparent) !important;
  background-image: none !important;
  color: ${colors.text} !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.local-chat-message-list,
.local-chat-message-list-content,
.local-chat-message,
.local-chat-message-body,
.local-chat-empty-state,
.local-chat-welcome,
.local-chat-new-task,
.local-chat-home {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.local-chat-content-col > section.bg-card,
.local-chat-content-col > section[class~="bg-card"] {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.local-chat-shell :where(textarea, input, [contenteditable="true"], [class*="composer"], [class*="message-input"]) {
  color: ${colors.text} !important;
  caret-color: ${colors.accent} !important;
}
.local-chat-composer-stack {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.local-chat-composer-card,
.local-chat-shell :where([class*="message-input"]):not(textarea):not(input):not([contenteditable="true"]) {
  background-color: color-mix(in srgb, ${colors.surface} 48%, transparent) !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.local-chat-shell :where([class*="message"], [class*="dialog"], [class*="popover"], [class*="panel"]) {
  border-color: color-mix(in srgb, ${colors.accent} 22%, transparent) !important;
}
`;
}
function buildAgnesCodeCss(heroDataUrl, colors) {
  return `
:root {
  --agnes-surface: transparent !important;
  --agnes-sidebar: transparent !important;
  --agnes-sidebar-panel: transparent !important;
  --agnes-current-sidebar-bg: transparent !important;
  --color-background-secondary: transparent !important;
  --color-background-primary: transparent !important;
  --background-primary: transparent !important;
  --agnes-card-bg: color-mix(in srgb, ${colors.surface} 18%, transparent) !important;
  --agnes-text: ${colors.text} !important;
  --agnes-composer-hub-shell: color-mix(in srgb, ${colors.surface} 78%, transparent) !important;
  --agnes-composer-input-bg: color-mix(in srgb, ${colors.surface} 68%, transparent) !important;
  --agnes-composer-border: color-mix(in srgb, ${colors.accent} 36%, transparent) !important;
  --agnes-brand: ${colors.accent} !important;
}
html,
body,
#root,
#__next {
  background-color: ${colors.surface} !important;
  background-image: url(${JSON.stringify(heroDataUrl)}) !important;
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
}
#root > div[class*="h-screen"][class*="w-screen"],
.agnes-shell,
.agnes-shell > div[class*="flex-1"],
.agnes-shell div[class*="bg-[var(--agnes-surface)]"] {
  background-color: transparent !important;
  background-image: none !important;
}
.agnes-shell > div[class*="flex-1"][class*="flex-row"] {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.windows-title-bar {
  background: transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.agnes-shell > div[class*="flex-row"] > div[class*="absolute"][class*="left-0"][class*="bg-[var(--agnes-current-sidebar-bg)]"] {
  background: transparent !important;
  color: ${colors.text} !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.agnes-shell div[class*="bg-[var(--agnes-sidebar-panel)]"],
.agnes-shell div[class*="bg-[var(--agnes-surface)]"],
.agnes-shell .bg-background-primary {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  filter: none !important;
}
.agnes-settings-route-overlay,
.agnes-settings-route-overlay > div,
.agnes-settings-route-overlay div[class*="bg-[var(--agnes-sidebar-panel)]"],
.agnes-settings-route-overlay div[class*="bg-[var(--agnes-surface)]"] {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  filter: none !important;
}
.agnes-settings-route-overlay div[class*="shadow-elevated"] {
  box-shadow: none !important;
}
.agnes-shell div[class*="bg-[var(--agnes-surface)]"][class*="shadow-elevated"] {
  box-shadow: none !important;
}
.agnes-shell div[class*="bg-[var(--agnes-card-bg)]"] {
  background: color-mix(in srgb, ${colors.surface} 18%, transparent) !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.agnes-shell div[class*="rounded-input-modal"] {
  background: color-mix(in srgb, ${colors.surface} 72%, transparent) !important;
  border-color: color-mix(in srgb, ${colors.accent} 34%, transparent) !important;
  backdrop-filter: blur(18px) saturate(112%) !important;
  -webkit-backdrop-filter: blur(18px) saturate(112%) !important;
}
.agnes-shell :where(input, textarea, [contenteditable="true"]) {
  color: ${colors.text} !important;
  caret-color: ${colors.accent} !important;
}
.agnes-shell :where(p, span, li, h1, h2, h3, h4, strong, em, label) {
  color: inherit;
}
`;
}
function buildMiniMaxCodeCss(heroDataUrl, colors) {
  return `
:root {
  --color-bg-grouped-secondary: transparent !important;
  --color-bg-primary: transparent !important;
  --color-bg-secondary: transparent !important;
  --color-bg-tertiary: color-mix(in srgb, ${colors.surface} 72%, transparent) !important;
}
html,
body,
#root {
  min-height: 100% !important;
  background-color: ${colors.surface} !important;
  background-image: url(${JSON.stringify(heroDataUrl)}) !important;
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
}
body div.relative.flex.h-screen.overflow-hidden,
body div[class~="h-screen"][class~="bg-bg_grouped_secondary"],
#root > div.relative.flex.h-screen.overflow-hidden,
#root > div[class~="h-screen"][class~="bg-bg_grouped_secondary"],
#__next > div.relative.flex.h-screen.overflow-hidden,
#__next > div[class~="h-screen"][class~="bg-bg_grouped_secondary"] {
  background-color: transparent !important;
  background-image: none !important;
}
body :where(
  main,
  [role="main"],
  [class~="bg-bg_grouped_secondary"],
  [class~="bg-bg_primary"],
  [class~="bg-bg_secondary"]
) {
  background-color: transparent !important;
}
body div[class~="bg-bg_default_scrim"][class~="z-50"][class~="select-none"],
body div[class~="bg-bg_default_scrim"]:has(.message-input-container) {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
body div.flex.h-full.w-full.overflow-hidden[class~="bg-bg_default_primary"],
body div.absolute.inset-x-0.bottom-0.w-full[class~="bg-bg_grouped_secondary"],
body div.absolute.inset-0.z-10.flex.flex-col[class~="bg-bg_grouped_secondary"] {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
body div[class~="bg-bg_grouped_secondary_elevated"]:has(.message-input-container),
body div.w-full.border[class~="rounded-[20px]"][class~="bg-bg_grouped_secondary_elevated"],
body .message-input-container div[class~="bg-bg_grouped_secondary_elevated"] {
  background-color: color-mix(in srgb, ${colors.surface} 62%, transparent) !important;
  background-image: none !important;
  border-color: color-mix(in srgb, ${colors.accent} 30%, transparent) !important;
  backdrop-filter: blur(16px) saturate(108%) !important;
  -webkit-backdrop-filter: blur(16px) saturate(108%) !important;
}
body .message-input-home-container {
  width: 100% !important;
}
body div[class~="max-w-[743px]"]:has(.message-input-home-container) {
  max-width: 800px !important;
}
body div[class~="bg-bg_default_scrim"]:has(.message-input-home-container) {
  width: 100% !important;
  max-width: 768px !important;
  padding-bottom: 0 !important;
  gap: 0 !important;
  border-radius: 20px !important;
}
body div[class~="bg-bg_default_scrim"]:has(.message-input-home-container)
  > div[class~="bg-bg_grouped_secondary_elevated"] {
  width: 100% !important;
  border-radius: 20px !important;
  box-shadow: 0 0 20px rgba(10, 10, 10, 0.08) !important;
}
#root :where(
  textarea,
  input,
  [contenteditable="true"],
  [class*="composer"],
  [class*="rounded"]
) {
  caret-color: ${colors.accent} !important;
}
#root :where(textarea, input, [contenteditable="true"]) {
  color: ${colors.text} !important;
}
`;
}
function buildOpenCodeCss(colors) {
  return `
:root {
  --v2-background-bg-deep: transparent !important;
  --v2-background-bg-base: transparent !important;
  --v2-background-bg-raised: color-mix(in srgb, ${colors.surface} 42%, transparent) !important;
  --v2-text-text-base: ${colors.text} !important;
  --v2-text-text-strong: ${colors.text} !important;
}
main > div[class*="bg-v2-background-bg-deep"],
main div[class*="bg-v2-background-bg-deep"][class*="flex-1"][class*="overflow-hidden"] {
  background-color: transparent !important;
  background-image: none !important;
}
main div[class*="flex-1"][class*="flex-col"][class*="bg-v2-background-bg-base"][class*="rounded-"][class*="overflow-hidden"],
main div[class*="shrink-0"][class*="bg-v2-background-bg-base"][class*="pointer-events-none"] {
  background-color: transparent !important;
  background-image: none !important;
  box-shadow: none !important;
}
main form[class*="group/prompt-input"] {
  background: color-mix(in srgb, ${colors.surface} 68%, transparent) !important;
  border: 1px solid color-mix(in srgb, ${colors.accent} 28%, transparent) !important;
  box-shadow: 0 18px 52px color-mix(in srgb, #000000 28%, transparent) !important;
  backdrop-filter: blur(18px) saturate(112%) !important;
  -webkit-backdrop-filter: blur(18px) saturate(112%) !important;
}
main form[class*="group/prompt-input"] :where([contenteditable="true"], textarea, input) {
  background: transparent !important;
  color: ${colors.text} !important;
  caret-color: ${colors.accent} !important;
}
main form[class*="group/prompt-input"] :where([class*="toolbar"], [class*="footer"], [class*="controls"]) {
  background-color: transparent !important;
  background-image: none !important;
}
main form[class*="group/prompt-input"] :where(button, [role="button"]):hover {
  background-color: color-mix(in srgb, ${colors.accent} 16%, transparent) !important;
}`;
}
function buildDoubaoCss(colors) {
  return `
:root {
  --s-color-bg-body: transparent !important;
  --s-color-text-primary: ${colors.text} !important;
  --s-color-text-secondary: color-mix(in srgb, ${colors.text} 76%, transparent) !important;
  --s-color-text-tertiary: color-mix(in srgb, ${colors.text} 58%, transparent) !important;
  --dbx-text-primary: ${colors.text} !important;
  --dbx-text-secondary: color-mix(in srgb, ${colors.text} 76%, transparent) !important;
  --dbx-text-tertiary: color-mix(in srgb, ${colors.text} 58%, transparent) !important;
  --color-dbx-text-disable: color-mix(in srgb, ${colors.text} 38%, transparent) !important;
  --input-guidance-input-container-background: color-mix(in srgb, ${colors.surface} 68%, transparent) !important;
  --input-guidance-input-container-border: 1px solid color-mix(in srgb, ${colors.accent} 28%, transparent) !important;
}
#chat-route-layout [class*="bg-dbx-bg-float"],
#chat-route-layout [class*="bg-dbx-bg-base-web"] {
  background-color: color-mix(in srgb, ${colors.surface} 82%, transparent) !important;
  color: ${colors.text} !important;
  border-color: color-mix(in srgb, ${colors.accent} 18%, transparent) !important;
}
#chat-route-layout [class*="bg-dbx-fill-trans-20"],
#chat-route-layout [class*="bg-dbx-fill-trans-10"] {
  background-color: color-mix(in srgb, ${colors.surface} 28%, transparent) !important;
}
html, body, #root,
#chat-route-layout,
#chat-route-main,
#flow-chat-guidance-page {
  background-color: transparent !important;
  background-image: none !important;
}
#chat-route-main > main,
main[class*="center-bg-"] {
  color: ${colors.text} !important;
}
#chat-route-layout nav,
#chat-route-main nav,
nav[class*="panel-"] {
  background: color-mix(in srgb, ${colors.surface} 46%, transparent) !important;
  border-color: color-mix(in srgb, ${colors.accent} 18%, transparent) !important;
  color: ${colors.text} !important;
  backdrop-filter: blur(18px) saturate(108%) !important;
  -webkit-backdrop-filter: blur(18px) saturate(108%) !important;
}
#chat-route-main :where([class*="conversation"], [class*="message-list"], [class*="scroll-view"], [class*="chat-content"]) {
  background-color: transparent !important;
  background-image: none !important;
}
#chat-route-main div[class*="bg-(--input-guidance-input-container-background)"],
#chat-route-main div[class*="input-container"] {
  background: color-mix(in srgb, ${colors.surface} 68%, transparent) !important;
  border-color: color-mix(in srgb, ${colors.accent} 28%, transparent) !important;
  color: ${colors.text} !important;
  box-shadow: 0 18px 52px color-mix(in srgb, #000000 24%, transparent) !important;
  backdrop-filter: blur(18px) saturate(110%) !important;
  -webkit-backdrop-filter: blur(18px) saturate(110%) !important;
}
#chat-route-main :where(textarea, input, [contenteditable="true"]) {
  background: transparent !important;
  color: ${colors.text} !important;
  caret-color: ${colors.accent} !important;
}
#chat-route-main :where(textarea, input)::placeholder {
  color: color-mix(in srgb, ${colors.text} 58%, transparent) !important;
  opacity: 1 !important;
}
#chat-route-main :where(.tiptap, .ProseMirror)[data-placeholder]::before,
#chat-route-main :where(.tiptap, .ProseMirror) p.is-editor-empty:first-child::before,
#chat-route-main :where(.tiptap, .ProseMirror) p.is-empty:first-child::before,
#chat-route-main :where(.tiptap, .ProseMirror):empty::before {
  color: color-mix(in srgb, ${colors.text} 58%, transparent) !important;
  opacity: 1 !important;
}
#flow-chat-guidance-page img[class*="dark:hidden"],
#chat-route-main div[class*="input-guidance"] img[class*="dark:hidden"] {
  display: none !important;
}
#flow-chat-guidance-page img[class*="hidden"][class*="dark:block"],
#chat-route-main div[class*="input-guidance"] img[class*="hidden"][class*="dark:block"] {
  display: block !important;
}
#flow-chat-guidance-page img[class*="object-contain"]:not([class*="image-item-img"]),
#chat-route-main div[class*="input-guidance"] img[class*="object-contain"]:not([class*="image-item-img"]) {
  filter: brightness(0) saturate(100%) invert(94%) sepia(5%) saturate(140%) hue-rotate(185deg) brightness(103%) contrast(95%) !important;
}
#flow-chat-guidance-page :where(svg, svg *),
#chat-route-main div[class*="input-guidance"] :where(svg, svg *) {
  color: ${colors.text} !important;
  fill: currentColor !important;
  stroke: currentColor;
}
#chat-route-layout :is([class*="text-dbx-text-primary"], [class*="text-s-color-text-primary"]),
#chat-route-layout :is(button, [role="button"])[class*="text-dbx-text-primary"],
#chat-route-layout :is(button, [role="button"])[class*="text-s-color-text-primary"] {
  color: ${colors.text} !important;
}
#chat-route-layout :is([class*="text-dbx-text-secondary"], [class*="text-s-color-text-secondary"]) {
  color: color-mix(in srgb, ${colors.text} 76%, transparent) !important;
}
#chat-route-layout :is([class*="text-dbx-text-tertiary"], [class*="text-s-color-text-tertiary"]) {
  color: color-mix(in srgb, ${colors.text} 58%, transparent) !important;
}
#flow_chat_sidebar,
#flow_chat_sidebar :where(button, [role="button"], a, div, span),
#chat-route-main > main > :where(header, [class*="header"]),
#chat-route-main > main > :where(header, [class*="header"]) :where(button, [role="button"], div, span),
#flow-chat-guidance-page,
#flow-chat-guidance-page :where(button, [role="button"], div, span),
#chat-route-main :where([class*="message"], [class*="conversation"], [class*="markdown"], article),
#chat-route-main :where([class*="message"], [class*="conversation"], [class*="markdown"], article) :where(p, div, span, li, h1, h2, h3, h4, strong, em, a),
#chat-route-main div[class*="bg-(--input-guidance-input-container-background)"],
#chat-route-main div[class*="bg-(--input-guidance-input-container-background)"] :where(button, [role="button"], div, span) {
  color: ${colors.text} !important;
}
#flow-chat-guidance-page [class*="greeting-text-"]::after {
  background-color: transparent !important;
  background-image: none !important;
}
#flow_chat_sidebar [class*="text-dbx-text-tertiary"],
#flow_chat_sidebar [class*="text-s-color-text-tertiary"] {
  color: color-mix(in srgb, ${colors.text} 58%, transparent) !important;
}
#chat-route-main :where(p, span, li, h1, h2, h3, h4, strong, em) {
  color: ${colors.text} !important;
}
#chat-route-main :where(button, [role="button"]):hover {
  background-color: color-mix(in srgb, ${colors.accent} 15%, transparent) !important;
}
#chat-route-main [class*="page-"] {
  background-color: transparent !important;
  color: ${colors.text} !important;
}
#chat-route-main [class*="container-SrVXPg"],
#chat-route-main [class*="chrome70-container"] {
  background-color: transparent !important;
  background-image: none !important;
  color: ${colors.text} !important;
}
#chat-route-main [class*="layout-padding-x-"][class*="sticky"][class*="bg-s-color-bg-body"] {
  background-color: transparent !important;
  background-image: none !important;
  box-shadow: none !important;
}
#chat-route-main div[class*="max-w-(--content-max-width)"][class*="my-0"][class*="mx-auto"] {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  box-shadow: none !important;
}
#chat-route-main [class*="message-list-"] {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  filter: none !important;
  box-shadow: none !important;
}
#chat-route-main [class*="page-"] :where(h1, h2, h3, h4, p, span, div, button, a, [role="button"]) {
  color: ${colors.text} !important;
}
#chat-route-main [class*="searchBox-"] > div,
#chat-route-main [class*="searchBox-"] [class*="border-dbx-line"] {
  background: color-mix(in srgb, ${colors.surface} 62%, transparent) !important;
  border-color: color-mix(in srgb, ${colors.accent} 28%, transparent) !important;
  color: ${colors.text} !important;
  backdrop-filter: blur(14px) saturate(108%) !important;
  -webkit-backdrop-filter: blur(14px) saturate(108%) !important;
}
#chat-route-main [class*="searchBox-"] input {
  background: transparent !important;
  color: ${colors.text} !important;
  caret-color: ${colors.accent} !important;
}
#chat-route-main [class*="searchBox-"] input::placeholder {
  color: color-mix(in srgb, ${colors.text} 58%, transparent) !important;
}
#chat-route-main [class*="page-"] :is([class*="category"], [class*="tab"], [class*="filter"]),
#chat-route-main [class*="page-"] :is([class*="category"], [class*="tab"], [class*="filter"]) * {
  color: ${colors.text} !important;
}
#chat-route-main [class*="group/carousel"] [role="tab"],
#chat-route-main [class*="group/carousel"] button {
  background: transparent !important;
  color: color-mix(in srgb, ${colors.text} 76%, transparent) !important;
}
#chat-route-main [class*="group/carousel"] [role="tab"][data-state="active"],
#chat-route-main [class*="group/carousel"] button[data-state="active"] {
  background: color-mix(in srgb, ${colors.accent} 24%, ${colors.surface}) !important;
  color: ${colors.text} !important;
}
#flow_chat_sidebar .group/sidebar_nav_item[class*="bg-dbx-bg-float"],
#flow_chat_sidebar .group/sidebar_nav_item[class*="shadow-"] {
  background: color-mix(in srgb, ${colors.accent} 22%, ${colors.surface}) !important;
  color: ${colors.text} !important;
  border-color: color-mix(in srgb, ${colors.accent} 32%, transparent) !important;
  box-shadow: none !important;
}
#flow_chat_sidebar .group/sidebar_nav_item[class*="bg-dbx-bg-float"] *,
#flow_chat_sidebar .group/sidebar_nav_item[class*="shadow-"] * {
  color: ${colors.text} !important;
}
#flow_chat_sidebar [class*="chat-item-"] {
  color: ${colors.text} !important;
  border-color: transparent !important;
}
#flow_chat_sidebar [class*="chat-item-"] * {
  color: ${colors.text} !important;
}
#flow_chat_sidebar a[id^="conversation_"],
#flow_chat_sidebar a[id^="conversation_"] * {
  color: ${colors.text} !important;
}
#flow_chat_sidebar a[id^="conversation_"] :where(svg, svg *) {
  color: ${colors.text} !important;
  fill: currentColor !important;
  stroke: currentColor !important;
}
#flow_chat_sidebar [class*="chat-item-"][class*="bg-dbx"],
#flow_chat_sidebar [class*="chat-item-"][aria-current="page"],
#flow_chat_sidebar [class*="chat-item-"][data-active="true"] {
  background: color-mix(in srgb, ${colors.accent} 22%, ${colors.surface}) !important;
  color: ${colors.text} !important;
}`;
}
function buildHanaAgentCss(manifest, heroDataUrl, colors) {
  return `/* DREAM_THEME:${manifest.id} */
:root {
  --dream-work-accent: ${colors.accent};
  --dream-work-secondary: ${colors.secondary};
  --dream-work-surface: ${colors.surface};
  --dream-work-text: ${colors.text};
}
html, body, #react-root, .app-shell {
  background-color: ${colors.surface} !important;
  background-image: url(${JSON.stringify(heroDataUrl)}) !important;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  color: ${colors.text} !important;
}
.titlebar, .app, .main-content, .chat-area, .input-area {
  background-color: transparent !important;
  background-image: none !important;
}
#sidebar, #jianSidebar .universal-card, #previewBody {
  background: color-mix(in srgb, ${colors.surface} 66%, transparent) !important;
  border-color: color-mix(in srgb, ${colors.accent} 24%, transparent) !important;
  color: ${colors.text} !important;
  backdrop-filter: blur(20px) saturate(110%) !important;
}
.titlebar {
  background: color-mix(in srgb, ${colors.surface} 62%, transparent) !important;
  color: ${colors.text} !important;
  backdrop-filter: blur(18px) saturate(108%) !important;
}
[class*="input-wrapper"] {
  background: color-mix(in srgb, ${colors.surface} 78%, transparent) !important;
  border-color: color-mix(in srgb, ${colors.accent} 30%, transparent) !important;
  color: ${colors.text} !important;
  box-shadow: 0 16px 42px color-mix(in srgb, ${colors.surface} 28%, transparent) !important;
  backdrop-filter: blur(18px) saturate(108%) !important;
}
[class*="input-wrapper"] :where(textarea, input, [contenteditable="true"]) {
  background: transparent !important;
  color: ${colors.text} !important;
  caret-color: ${colors.accent} !important;
}
#sidebar :where(button, [role="button"]):hover,
#jianSidebar :where(button, [role="button"]):hover {
  background-color: color-mix(in srgb, ${colors.accent} 16%, transparent) !important;
}
:where(button[class*="primary"], button[type="submit"]) {
  background-color: ${colors.accent} !important;
  color: #ffffff !important;
}`;
}
function buildKimiCss(manifest, heroDataUrl, colors) {
  const accent = colors.accent;
  colors.secondary;
  const surface = colors.surface;
  const text = colors.text;
  return `/* DREAM_THEME:${manifest.id} */
html.dark, html {
  --Bg-Primary: color-mix(in srgb, ${surface} 54%, transparent) !important;
  --Bg-Primary90: color-mix(in srgb, ${surface} 48%, transparent) !important;
  --Bg-Secondary: color-mix(in srgb, ${surface} 46%, transparent) !important;
  --Bg-Tertiary: color-mix(in srgb, ${surface} 36%, transparent) !important;
  --Bg-Quaternary: color-mix(in srgb, ${surface} 28%, transparent) !important;
  --BgGp-Primary: color-mix(in srgb, ${surface} 54%, transparent) !important;
  --BgGp-Primary90: color-mix(in srgb, ${surface} 48%, transparent) !important;
  --BgGp-Secondary: color-mix(in srgb, ${surface} 46%, transparent) !important;
  --BgGp-Tertiary: color-mix(in srgb, ${surface} 36%, transparent) !important;
  --Bg-GroundPC: color-mix(in srgb, ${surface} 20%, transparent) !important;
  --Labels-Primary: color-mix(in srgb, ${text} 88%, #000000) !important;
  --Labels-Secondary: color-mix(in srgb, ${text} 62%, transparent) !important;
  --Labels-Tertiary: color-mix(in srgb, ${text} 44%, transparent) !important;
  --Labels-Quaternary: color-mix(in srgb, ${text} 28%, transparent) !important;
  --Colors-KMBlue: ${accent} !important;
  --Others-KMBlue10: color-mix(in srgb, ${accent} 12%, transparent) !important;
  --Others-BubbleBlue: color-mix(in srgb, ${accent} 26%, ${surface}) !important;
  --Others-TextSelected: color-mix(in srgb, ${accent} 22%, transparent) !important;
  --Syntax-Mark: ${accent} !important;
}
html, body, .page {
  background-color: ${surface} !important;
  color: ${text} !important;
}
body {
  background-image: url(${JSON.stringify(heroDataUrl)}) !important;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
}
.page, #app, .n-config-provider,
.home-view, .home-scroll, .home-scroll-content,
.conversation-tab, .conversation-view {
  background: transparent !important;
}
.sidebar, main.main-pane {
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.sidebar {
  background: color-mix(in srgb, ${surface} 30%, transparent) !important;
  border-right: 1px solid color-mix(in srgb, ${accent} 18%, transparent) !important;
  color: ${text} !important;
}
main.main-pane {
  background: color-mix(in srgb, ${surface} 16%, transparent) !important;
  border-radius: 12px !important;
  color: ${text} !important;
}
.app > .main {
  background: color-mix(in srgb, ${surface} 16%, transparent) !important;
}
.app > .main :where(.publisher-stage, .layout-sticky-space, .layout-sticky-group, .layout-header) {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.app > .main :where(#chat-box, .home-input-options) {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.app > .main .chat-editor-content {
  background: color-mix(in srgb, ${surface} 42%, transparent) !important;
  border-color: color-mix(in srgb, ${accent} 24%, transparent) !important;
}
main.main-pane .conversation-tab,
main.main-pane .conversation-view,
main.main-pane [class*="conversation"] {
  background: transparent !important;
  color: ${text} !important;
}
main.main-pane :where([class*="message"], [class*="chat"], [class*="composer"], [class*="input"], [contenteditable="true"], textarea) {
  background-color: color-mix(in srgb, ${surface} 66%, transparent) !important;
  border-color: color-mix(in srgb, ${accent} 30%, transparent) !important;
  color: ${text} !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
main.main-pane :where(.message-list, .message-scroller, .message-list-inner, .messages, .msg-assistant, .chat-markdown) {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
main.main-pane :where(.composer-dock, .composer-inner, .composer-wrap, .composer-editor, .composer-toolbar) {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
main.main-pane .composer.docked {
  background: color-mix(in srgb, ${surface} 42%, transparent) !important;
}
main.main-pane :where([class*="message"], [class*="chat"], [class*="composer"], [class*="input"]) :where(p, span, li, h1, h2, h3, h4, strong, em, a) {
  color: ${text} !important;
}
[contenteditable="true"], textarea, input {
  color: ${text} !important;
  caret-color: ${accent} !important;
}
:where(button[class*="primary"], button[mode="primary"]) {
  background-color: ${accent} !important;
  color: #ffffff !important;
}
.nav-item, .mode-tab, .sidebar-scroll a, .sidebar-scroll span, .sidebar-footer, .account {
  color: ${text} !important;
}
.nav-item:hover, .mode-tab:hover, [class*="nav-item"]:hover {
  background-color: color-mix(in srgb, ${accent} 18%, transparent) !important;
}
.win-titlebar-drag {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}
.message-list-container:where(.top) {
  display: none !important;
}`;
}
function buildHanaAgentMenuScript(options) {
  return `(() => {
    const themes = ${JSON.stringify(options.themes)};
    const cssTemplate = ${JSON.stringify(options.cssTemplate)};
    const sentinels = ${JSON.stringify(WORKBUDDY_CSS_PLACEHOLDERS)};
    const restoreKey = 'dream-work-theme:hana-agent:restored';
    const customStorageKey = 'dreamCodexCustomThemes';
    const selectedKey = 'dream-work-theme:hana-agent:selected-theme';
    const sharedCustomThemes = ${JSON.stringify(options.sharedCustomThemes)};
    const sharedCustomThemeService = ${JSON.stringify(options.sharedCustomThemeService)};
    const recordPresetUsage = (themeId) => fetch(sharedCustomThemeService.usageEndpoint, {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + sharedCustomThemeService.token, 'Content-Type': 'application/json' },
      body: JSON.stringify({ appId: 'hana-agent', themeId }),
    }).catch(() => {});
    const forceApply = Boolean(window.__dreamWorkForceApply);
    delete window.__dreamWorkForceApply;
    let restored = false;
    try { restored = localStorage.getItem(restoreKey) === '1'; } catch {}
    if (forceApply) {
      restored = false;
      try { localStorage.removeItem(restoreKey); } catch {}
    }
    if (restored) document.documentElement.dataset.dreamThemeRestored = 'true';
    else delete document.documentElement.dataset.dreamThemeRestored;
    let active = !restored;
    let style = document.getElementById('${options.styleId}');
    if (!style) {
      style = document.createElement('style');
      style.id = '${options.styleId}';
    }
    const attachStyle = () => {
      if (active && !style.isConnected) document.head.appendChild(style);
    };
    let rows = [];
    const applyTheme = (themeId) => {
      const theme = themes.find(item => item.id === themeId);
      if (!theme) return;
      active = true;
      try { localStorage.removeItem(restoreKey); } catch {}
      delete document.documentElement.dataset.dreamThemeRestored;
      style.textContent = theme.css;
      attachStyle();
      document.documentElement.dataset.dreamTheme = themeId;
      try { localStorage.setItem(selectedKey, themeId); } catch {}
      rows.forEach((row) => {
        const selected = row.dataset.themeId === themeId;
        row.style.background = selected ? 'rgba(36,201,215,.16)' : 'transparent';
        row.style.fontWeight = selected ? '700' : '500';
      });
    };
    const restoreNative = () => {
      active = false;
      try { localStorage.setItem(restoreKey, '1'); } catch {}
      document.documentElement.dataset.dreamThemeRestored = 'true';
      clearInterval(window.__dreamWorkMenuGuard);
      style.remove();
      delete document.documentElement.dataset.dreamTheme;
      try { localStorage.removeItem(selectedKey); } catch {}
      panel.style.display = 'none';
    };
    if (window.__dreamWorkOutsideClick) {
      document.removeEventListener('pointerdown', window.__dreamWorkOutsideClick, true);
      delete window.__dreamWorkOutsideClick;
    }
    document.getElementById('${options.menuId}-host')?.remove();
    clearInterval(window.__dreamWorkMenuGuard);
    const host = document.createElement('div');
    host.id = '${options.menuId}-host';
    host.style.cssText = 'all:initial!important;position:fixed!important;right:16px!important;bottom:16px!important;z-index:2147483647!important;display:block!important;pointer-events:auto!important;';
    const shadow = host.attachShadow({ mode: 'open' });
    const root = document.createElement('div');
    root.id = '${options.menuId}';
    root.style.cssText = 'display:flex;flex-direction:column;align-items:flex-end;font:500 13px/1.4 system-ui;color:#17344f;';
    const panel = document.createElement('div');
    panel.style.cssText = 'display:none;margin-bottom:8px;min-width:190px;padding:6px;border-radius:12px;border:1px solid rgba(0,0,0,.1);background:rgba(255,255,255,.96);box-shadow:0 10px 30px rgba(0,0,0,.18);';
    const button = document.createElement('button');
    button.type = 'button';
    button.title = 'Dream Work Theme';
    button.textContent = '◉';
    button.style.cssText = 'width:36px;height:36px;border-radius:10px;border:1px solid rgba(0,0,0,.12);background:rgba(255,255,255,.92);box-shadow:0 3px 12px rgba(0,0,0,.2);cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;color:#17344f;font-size:18px;line-height:1;';
    const addRow = (label, themeId, accent, onClick, before) => {
      const row = document.createElement('div');
      row.dataset.themeId = themeId || '';
      row.style.cssText = 'display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;cursor:pointer;color:#17344f;';
      const dot = document.createElement('span');
      dot.style.cssText = 'width:10px;height:10px;border-radius:50%;flex:none;background:' + accent + ';';
      const text = document.createElement('span');
      text.textContent = label;
      row.append(dot, text);
      row.addEventListener('click', onClick);
      if (before) panel.insertBefore(row, before); else panel.appendChild(row);
      rows.push(row);
      return row;
    };
    themes.forEach((theme) => addRow(theme.name, theme.id, theme.accent || '#24c9d7', () => {
      applyTheme(theme.id);
      void recordPresetUsage(theme.id);
      panel.style.display = 'none';
    }));
    const materializeCustomCss = (dataUrl, colors, customId) => cssTemplate
      .split(sentinels.hero).join(dataUrl)
      .split(sentinels.accent).join(colors.accent)
      .split(sentinels.secondary).join(colors.secondary)
      .split(sentinels.surface).join(colors.surface)
      .split(sentinels.text).join(colors.text)
      .split(sentinels.id).join(customId);
    const hex = (r, g, b) => '#' + [r, g, b].map((value) => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, '0')).join('');
    const mix = (a, b, amount) => a.map((value, index) => value + (b[index] - value) * amount);
    const extractPalette = (canvas) => {
      const context = canvas.getContext('2d');
      const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
      const buckets = new Map();
      let luminanceSum = 0;
      let count = 0;
      for (let index = 0; index < pixels.length; index += 4) {
        const r = pixels[index], g = pixels[index + 1], b = pixels[index + 2];
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        luminanceSum += luminance;
        count += 1;
        const saturation = max === 0 ? 0 : (max - min) / max;
        if (saturation < 0.18 || luminance < 24 || luminance > 245) continue;
        const delta = max - min || 1;
        const hue = max === r ? (g - b) / delta + (g < b ? 6 : 0) : max === g ? (b - r) / delta + 2 : (r - g) / delta + 4;
        const bucket = (Math.round(hue) % 6) * 2 + (saturation > 0.55 ? 1 : 0);
        const entry = buckets.get(bucket) || { weight: 0, r: 0, g: 0, b: 0, hue: hue * 60 };
        const weight = saturation * saturation;
        entry.weight += weight;
        entry.r += r * weight;
        entry.g += g * weight;
        entry.b += b * weight;
        buckets.set(bucket, entry);
      }
      const ranked = [...buckets.values()].sort((left, right) => right.weight - left.weight)
        .map((entry) => ({ rgb: [entry.r / entry.weight, entry.g / entry.weight, entry.b / entry.weight], hue: entry.hue }));
      const accent = ranked[0]?.rgb || [36, 201, 215];
      const secondary = ranked.find((entry) => Math.abs(entry.hue - (ranked[0]?.hue || 0)) > 50)?.rgb || mix(accent, [255, 255, 255], 0.35);
      const light = (count ? luminanceSum / count : 128) > 128;
      return {
        accent: hex(...accent),
        secondary: hex(...secondary),
        surface: hex(...(light ? mix(accent, [252, 252, 255], 0.92) : mix(accent, [12, 12, 18], 0.86))),
        text: hex(...(light ? mix(accent, [16, 24, 40], 0.82) : mix(accent, [244, 246, 252], 0.85))),
      };
    };
    const MAX_CUSTOM = 5;
    const customRows = new Map();
    const removeCustomRow = (slotId) => {
      const row = customRows.get(slotId);
      if (!row) return;
      const rowIndex = rows.indexOf(row);
      if (rowIndex >= 0) rows.splice(rowIndex, 1);
      row.remove();
      customRows.delete(slotId);
    };
    const loadCustoms = () => {
      try {
        const saved = JSON.parse(localStorage.getItem(customStorageKey) || '[]');
        return Array.isArray(saved) ? saved.filter((item) => item?.id && item?.dataUrl && item?.colors).slice(0, MAX_CUSTOM) : [];
      } catch { return []; }
    };
    const writeLocalCustoms = (saved) => {
      try { localStorage.setItem(customStorageKey, JSON.stringify(saved.slice(0, MAX_CUSTOM))); }
      catch (error) { console.warn('Dream Theme: HanaAgent 自定义图片本地缓存失败', error); }
    };
    const syncSharedCustoms = (saved) => fetch(sharedCustomThemeService.endpoint, {
      method: 'PUT',
      headers: { Authorization: 'Bearer ' + sharedCustomThemeService.token, 'Content-Type': 'application/json' },
      body: JSON.stringify(saved.slice(0, MAX_CUSTOM)),
    }).then((response) => {
      if (!response.ok) throw new Error('共享图片同步失败: HTTP ' + response.status);
      return response.json();
    });
    const saveCustoms = (saved) => {
      const limited = saved.slice(0, MAX_CUSTOM);
      writeLocalCustoms(limited);
      return syncSharedCustoms(limited).catch((error) => {
        console.warn('Dream Theme: HanaAgent 共享图片同步失败', error);
        return limited;
      });
    };
    const localCustomThemes = loadCustoms();
    const initialCustomThemes = sharedCustomThemes.length > 0 ? sharedCustomThemes : localCustomThemes;
    writeLocalCustoms(initialCustomThemes);
    if (sharedCustomThemes.length === 0 && localCustomThemes.length > 0) void saveCustoms(localCustomThemes);
    const paintRows = (themeId) => rows.forEach((row) => {
      const selected = row.dataset.themeId === themeId;
      row.style.background = selected ? 'rgba(36,201,215,.16)' : 'transparent';
      row.style.fontWeight = selected ? '700' : '500';
    });
    const applyCustomTheme = (slot) => {
      active = true;
      try {
        localStorage.removeItem(restoreKey);
        localStorage.setItem(selectedKey, slot.id);
      } catch {}
      delete document.documentElement.dataset.dreamThemeRestored;
      style.textContent = materializeCustomCss(slot.dataUrl, slot.colors, slot.id);
      attachStyle();
      document.documentElement.dataset.dreamTheme = slot.id;
      paintRows(slot.id);
    };
    let uploadRow;
    const deleteCustom = async (slotId) => {
      const saved = loadCustoms();
      const index = saved.findIndex((item) => item.id === slotId);
      if (index < 0) return;
      if (document.documentElement.dataset.dreamTheme === slotId) restoreNative();
      saved.splice(index, 1);
      await saveCustoms(saved);
      removeCustomRow(slotId);
    };
    const ensureCustomRow = (slot) => {
      const existing = customRows.get(slot.id);
      if (existing) return;
      const item = addRow(slot.name, slot.id, slot.colors.accent, () => {
        const current = loadCustoms().find((saved) => saved.id === slot.id) || slot;
        applyCustomTheme(current);
        panel.style.display = 'none';
      }, uploadRow);
      const text = item.querySelector('span + span');
      text.style.cssText = 'flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;';
      const remove = document.createElement('span');
      remove.textContent = '×';
      remove.title = '删除这张自定义图片';
      remove.style.cssText = 'flex:none;width:18px;height:18px;line-height:18px;text-align:center;border-radius:50%;color:rgba(0,0,0,.45);font-size:14px;';
      remove.addEventListener('click', (event) => { event.stopPropagation(); deleteCustom(slot.id); });
      item.appendChild(remove);
      customRows.set(slot.id, item);
    };
    const importFromDataUrl = (dataUrl, name) => new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = async () => {
        const scale = Math.min(1, 1280 / image.width);
        const full = document.createElement('canvas');
        full.width = Math.max(1, Math.round(image.width * scale));
        full.height = Math.max(1, Math.round(image.height * scale));
        full.getContext('2d').drawImage(image, 0, 0, full.width, full.height);
        const sample = document.createElement('canvas');
        sample.width = 48;
        sample.height = Math.max(1, Math.round(48 * image.height / image.width));
        sample.getContext('2d').drawImage(image, 0, 0, sample.width, sample.height);
        const colors = extractPalette(sample);
        const compressed = full.toDataURL('image/webp', 0.78);
        const saved = loadCustoms();
        let slot;
        if (saved.length < MAX_CUSTOM) {
          slot = { id: 'custom-hana-' + Date.now().toString(36), name: name || '我的图片', dataUrl: compressed, colors };
          saved.push(slot);
        } else {
          const activeId = document.documentElement.dataset.dreamTheme;
          let index = saved.findIndex((item) => item.id === activeId);
          if (index < 0) index = 0;
          slot = { id: saved[index].id, name: name || '我的图片', dataUrl: compressed, colors };
          saved[index] = slot;
          removeCustomRow(slot.id);
        }
        await saveCustoms(saved);
        ensureCustomRow(slot);
        applyCustomTheme(slot);
        resolve(colors);
      };
      image.onerror = () => reject(new Error('图片读取失败'));
      image.src = dataUrl;
    });
    const picker = document.createElement('input');
    picker.type = 'file';
    picker.accept = 'image/png,image/jpeg,image/webp';
    picker.style.display = 'none';
    picker.addEventListener('change', () => {
      const file = picker.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => importFromDataUrl(reader.result, file.name.replace(/\\.[a-z0-9]+$/i, '')).catch((error) => console.warn('Dream Theme: HanaAgent 图片导入失败', error));
      reader.readAsDataURL(file);
      picker.value = '';
      panel.style.display = 'none';
    });
    uploadRow = addRow('＋ 自定义图片', '', 'rgba(36,201,215,.9)', () => picker.click());
    uploadRow.style.borderTop = '1px solid rgba(0,0,0,.08)';
    addRow('还原主题', '', 'rgba(0,0,0,.24)', restoreNative);
    initialCustomThemes.forEach(ensureCustomRow);
    fetch(sharedCustomThemeService.endpoint, {
      headers: { Authorization: 'Bearer ' + sharedCustomThemeService.token },
    }).then((response) => response.ok ? response.json() : Promise.reject(new Error('HTTP ' + response.status)))
      .then((latest) => {
        if (!Array.isArray(latest)) return;
        for (const slotId of [...customRows.keys()]) {
          if (!latest.some((item) => item.id === slotId)) removeCustomRow(slotId);
        }
        writeLocalCustoms(latest);
        latest.forEach(ensureCustomRow);
        let selectedId = '';
        try { selectedId = localStorage.getItem(selectedKey) || ''; } catch {}
        const selected = latest.find((item) => item.id === selectedId);
        if (selected) applyCustomTheme(selected);
      }).catch((error) => console.warn('Dream Theme: HanaAgent 共享图片读取失败', error));
    button.addEventListener('click', () => {
      panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    });
    const closeOnOutsideClick = (event) => {
      if (panel.style.display === 'none') return;
      const path = event.composedPath?.() || [];
      if (!path.includes(host)) panel.style.display = 'none';
    };
    window.__dreamWorkOutsideClick = closeOnOutsideClick;
    document.addEventListener('pointerdown', closeOnOutsideClick, true);
    root.append(panel, button, picker);
    shadow.appendChild(root);
    document.documentElement.appendChild(host);
    window.__dreamWorkMenuGuard = setInterval(() => {
      attachStyle();
      if (!host.isConnected) document.documentElement.appendChild(host);
    }, 250);
    if (!restored || forceApply) {
      let selectedId = '${options.currentThemeId}';
      if (!forceApply) {
        try { selectedId = localStorage.getItem(selectedKey) || selectedId; } catch {}
      }
      const selectedCustom = loadCustoms().find((item) => item.id === selectedId);
      if (selectedCustom) applyCustomTheme(selectedCustom);
      else applyTheme('${options.currentThemeId}');
    }
    return true;
  })()`;
}
function buildQoderWorkShellCss(colors) {
  return `
/* QoderWork shell controls */
body > #root > div:first-child > div:first-child button[aria-label] {
  background-color: transparent !important;
  color: ${colors.text} !important;
  border-color: transparent !important;
  box-shadow: none !important;
}

body > #root > div:first-child > div:first-child button[aria-label]:hover,
body > #root > div:first-child > div:first-child button[aria-label]:focus-visible {
  background-color: color-mix(in srgb, ${colors.accent} 16%, transparent) !important;
  color: ${colors.text} !important;
}
body > #root > div:first-child > div:first-child button[aria-label="Close"]:hover {
  background-color: color-mix(in srgb, #ef4444 20%, transparent) !important;
  color: #ef4444 !important;
}
.agents-sidebar :where(button, [role="button"], [class*="cursor-pointer"]) {
  color: color-mix(in srgb, ${colors.text} 76%, transparent) !important;
}
.agents-sidebar :where(button, [role="button"], [class*="cursor-pointer"]):hover {
  background-color: color-mix(in srgb, ${colors.accent} 14%, transparent) !important;
  color: ${colors.text} !important;
}
.agents-sidebar :where(button[aria-label="任务"], button[aria-label="频道"]) {
  background-color: transparent !important;
  color: color-mix(in srgb, ${colors.text} 78%, transparent) !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
.agents-sidebar :where(button[aria-label="任务"], button[aria-label="频道"])[data-state="active"],
.agents-sidebar :where(button[aria-label="任务"], button[aria-label="频道"])[aria-selected="true"],
.agents-sidebar :where(button[aria-label="任务"], button[aria-label="频道"]):focus-visible {
  background-color: color-mix(in srgb, ${colors.accent} 20%, transparent) !important;
  color: ${colors.text} !important;
}
.agents-sidebar > :last-child button {
  background-color: transparent !important;
  color: ${colors.text} !important;
  border-color: transparent !important;
  box-shadow: none !important;
}
.agents-sidebar > :last-child button:hover {
  background-color: color-mix(in srgb, ${colors.accent} 14%, transparent) !important;
}
.agents-content-area button.rounded-full:not(.SendButton-send),
.agents-parchment-paper-surface button.rounded-full:not(.SendButton-send) {
  background-color: color-mix(in srgb, ${colors.surface} 70%, transparent) !important;
  color: ${colors.text} !important;
  border-color: color-mix(in srgb, ${colors.text} 14%, transparent) !important;
  box-shadow: none !important;
}
.agents-content-area button.rounded-full:not(.SendButton-send):hover,
.agents-parchment-paper-surface button.rounded-full:not(.SendButton-send):hover {
  background-color: color-mix(in srgb, ${colors.accent} 18%, transparent) !important;
  border-color: color-mix(in srgb, ${colors.accent} 34%, transparent) !important;
}
.agents-content-area button svg,
.agents-sidebar button svg,
body > #root > div:first-child > div:first-child button[aria-label] svg {
  color: currentColor !important;
}`;
}
function buildCatPawCss(heroDataUrl, colors) {
  return `
/* CatPaw new-task and conversation surfaces */
html body #root .main-area {
  position: relative !important;
  isolation: isolate !important;
  background-color: ${colors.surface} !important;
  background-image: url(${JSON.stringify(heroDataUrl)}) !important;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
html body #root .main-content-container,
html body #root .main-content,
html body #root .chat-content-area {
  background-color: transparent !important;
  background-image: none !important;
}
html body #root .chat-content-area > .relative.flex.flex-col.items-center.h-full,
html body #root .chat-content-area [class~="bg-catpaw-bg-primary"] {
  background-color: transparent !important;
  background-image: none !important;
}
html body #root .catpaw-desk-inputBox > .bg-catpaw-bg-card,
html body #root .catpaw-desk-inputBox [class~="bg-catpaw-bg-card"] {
  background-color: color-mix(in srgb, ${colors.surface} 78%, transparent) !important;
  border: 1px solid color-mix(in srgb, ${colors.accent} 30%, transparent) !important;
  box-shadow: 0 16px 42px color-mix(in srgb, ${colors.surface} 30%, transparent) !important;
  backdrop-filter: blur(16px) saturate(108%) !important;
}
html body #root .catpaw-desk-inputBox :where(
  .catpaw-chat-input,
  .catpaw-editor,
  .catpaw-editor__body,
  .catpaw-editor__content,
  .mc-input-container
) {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
  color: ${colors.text} !important;
}
html body #root .catpaw-desk-inputBox :where(button, [role="button"]) {
  color: ${colors.text} !important;
}
html body #root .catpaw-desk-inputBox :where(button, [role="button"]):hover {
  background-color: color-mix(in srgb, ${colors.accent} 15%, transparent) !important;
}
html body #root .catpaw-desk-inputBox :where(svg, svg *) {
  color: currentColor !important;
}
`;
}
function copy(value, fallback = "") {
  return JSON.stringify(typeof value === "string" ? value : fallback);
}
function buildWorkBuddyCss(manifest, heroDataUrl, colors) {
  var _a, _b;
  const id = String(manifest.id ?? "custom").replace(/[^a-z0-9_-]/gi, "");
  return `/* DREAM_THEME:${id} */
body[data-application-name="workbuddy"] {
  --wb-accent: ${colors.accent};
  --wb-secondary: ${colors.secondary};
  --wb-surface: ${colors.surface};
  --wb-text: ${colors.text};

  /* 背景 */
  --cb-bg-primary: var(--wb-surface) !important;
  --cb-bg-secondary: color-mix(in srgb, var(--wb-surface) 94%, transparent) !important;
  --cb-panel-bg-primary: color-mix(in srgb, var(--wb-surface) 92%, transparent) !important;
  --cb-team-member-card-background: color-mix(in srgb, var(--wb-surface) 92%, transparent) !important;

  /* 文字 */
  --cb-text-primary: var(--wb-text) !important;
  --cb-text-secondary: color-mix(in srgb, var(--wb-text) 82%, transparent) !important;
  --cb-text-disabled: color-mix(in srgb, var(--wb-text) 62%, transparent) !important;
  --cb-text-link: var(--wb-accent) !important;
  --cb-text-error-active: var(--wb-accent) !important;

  /* VS Code 主题色包装 */
  --cb-vscode-editor-background: var(--wb-surface) !important;
  --cb-vscode-sideBar-background: color-mix(in srgb, var(--wb-surface) 94%, transparent) !important;
  --cb-vscode-foreground: var(--wb-text) !important;
  --cb-vscode-editor-foreground: var(--wb-text) !important;
  --cb-vscode-descriptionForeground: color-mix(in srgb, var(--wb-text) 70%, transparent) !important;
  --cb-vscode-titleBar-activeBackground: var(--wb-accent) !important;
  --cb-vscode-titleBar-activeForeground: #ffffff !important;
  --cb-vscode-titleBar-inactiveBackground: color-mix(in srgb, var(--wb-accent) 80%, var(--wb-surface)) !important;
  --cb-vscode-titleBar-inactiveForeground: color-mix(in srgb, #ffffff 70%, transparent) !important;
  --cb-titlebar-control-hover-background: color-mix(in srgb, var(--wb-accent) 16%, transparent) !important;
  --cb-vscode-input-background: color-mix(in srgb, var(--wb-surface) 94%, transparent) !important;
  --cb-vscode-dropdown-background: color-mix(in srgb, var(--wb-surface) 96%, transparent) !important;
  --cb-vscode-list-hoverBackground: color-mix(in srgb, var(--wb-accent) 16%, transparent) !important;
  --cb-vscode-toolbar-hoverBackground: color-mix(in srgb, var(--wb-accent) 16%, transparent) !important;
  --cb-vscode-scrollbarSlider-background: color-mix(in srgb, var(--wb-accent) 30%, transparent) !important;
  --cb-vscode-scrollbarSlider-hoverBackground: color-mix(in srgb, var(--wb-accent) 50%, transparent) !important;
  --cb-vscode-textLink-foreground: var(--wb-accent) !important;
  --cb-vscode-widget-border: color-mix(in srgb, var(--wb-accent) 45%, transparent) !important;
  --cb-vscode-panel-border: color-mix(in srgb, var(--wb-accent) 30%, transparent) !important;

  /* 按钮 */
  --cb-button-dark-background: var(--wb-accent) !important;
  --cb-button-dark-foreground: #ffffff !important;
  --cb-button-dark-hover-background: color-mix(in srgb, var(--wb-accent) 85%, #000000) !important;
  --cb-vscode-button-background: var(--wb-accent) !important;
  --cb-vscode-button-foreground: #ffffff !important;
  --cb-vscode-button-hoverBackground: color-mix(in srgb, var(--wb-accent) 85%, #000000) !important;

  /* 描边 */
  --cb-stroke-secondary: color-mix(in srgb, var(--wb-accent) 45%, transparent) !important;
  --cb-markdown-hr-border-color: color-mix(in srgb, var(--wb-accent) 30%, transparent) !important;
}

#root {
  color: var(--wb-text) !important;
  background-color: var(--wb-surface) !important;
  background-image: url(${JSON.stringify(heroDataUrl)}) !important;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
}

/* 关键：teams-container 是 #root 直接子层，默认有不透明灰底，会完全盖住背景图 */
.teams-container,
.teams-container.is-mac {
  background: transparent !important;
}

/* 所有 grid 项容器透明，让 #root 背景图大面积透出 */
[data-view-id] {
  background: transparent !important;
}

/* 内容区内的子层也透明（否则会盖住背景图和磨砂层） */
.conversation-list,
.main-content,
.main-content--welcome,
.sidebar-next {
  background: transparent !important;
}

/* 侧边栏磨砂玻璃（覆盖上面的 transparent） */
[data-view-id=sidebar] {
  background: color-mix(in srgb, var(--wb-surface) 62%, transparent) !important;
  border-right: 1px solid color-mix(in srgb, var(--wb-accent) 45%, transparent) !important;
  backdrop-filter: blur(20px) saturate(1.12);
}

/* 主内容区：顶部透出底图，底部更强遮罩保证内容可读 */
[data-view-id=main-content] {
  background: linear-gradient(180deg, transparent 0 58%, color-mix(in srgb, var(--wb-surface) 58%, transparent) 100%) !important;
}

/* 详情面板半透明磨砂 */
[data-view-id=detail-panel] {
  background: color-mix(in srgb, var(--wb-surface) 64%, transparent) !important;
  backdrop-filter: blur(18px) saturate(1.08);
}

/* brand 文案（copy 为空时不显示） */
#root::before {
  position: fixed;
  z-index: 20;
  top: 60px;
  left: max(300px, 22vw);
  content: ${copy((_a = manifest.copy) == null ? void 0 : _a.brand)};
  color: var(--wb-accent);
  font: 800 clamp(16px, 2vw, 30px)/1.2 ui-rounded, system-ui;
  text-shadow: 0 2px 10px white;
  pointer-events: none;
}

/* headline 文案 */
#root::after {
  position: fixed;
  z-index: 20;
  top: 104px;
  left: max(300px, 22vw);
  max-width: 42vw;
  content: ${copy((_b = manifest.copy) == null ? void 0 : _b.headline)};
  color: var(--wb-text);
  font: 750 clamp(18px, 2.7vw, 42px)/1.15 ui-rounded, system-ui;
  text-shadow: 0 2px 12px white;
  pointer-events: none;
}`;
}
function buildCodexCss(manifest, heroDataUrl, colors) {
  const isLight = isLightHex(colors.surface);
  const conversationSurface = isLight ? `color-mix(in srgb, ${colors.surface} 90%, transparent)` : `color-mix(in srgb, ${colors.surface} 86%, transparent)`;
  const userSurface = isLight ? `color-mix(in srgb, ${colors.accent} 16%, ${colors.surface})` : `color-mix(in srgb, ${colors.accent} 42%, ${colors.surface})`;
  const codeSurface = isLight ? "#172033" : `color-mix(in srgb, ${colors.surface} 72%, #000000)`;
  const codeText = "#f2f6ff";
  const themeVars = `/* DREAM_THEME:${manifest.id} */
:root.codex-dream-skin {
  --ds-bg: ${colors.surface};
  --ds-panel: ${colors.surface};
  --ds-panel-2: ${colors.surface};
  --ds-surface: ${colors.surface};
  --ds-green: ${colors.accent};
  --ds-lime: ${colors.secondary};
  --ds-cyan: ${colors.secondary};
  --ds-purple: ${colors.accent};
  --ds-text: ${colors.text};
  --ds-muted: color-mix(in srgb, ${colors.text} 82%, transparent);
  --ds-line: color-mix(in srgb, ${colors.accent} 22%, transparent);
  --ds-hero-height: 252px;
  --ds-radius: 24px;
  --dream-skin-art: url(${JSON.stringify(heroDataUrl)});
}`;
  const bodyArt = `/* DREAM_THEME_BODY:${manifest.id} */
html.codex-dream-skin[data-dream-theme],
html.codex-dream-skin[data-dream-theme] body {
  background-color: ${colors.surface} !important;
  background-image: var(--dream-skin-art) !important;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
}

html.codex-dream-skin[data-dream-theme] main.main-surface,
html.codex-dream-skin[data-dream-theme] main.main-surface:not(.dream-skin-home-shell) {
  position: relative !important;
  isolation: isolate !important;
  background-color: color-mix(in srgb, ${colors.surface} 12%, transparent) !important;
  background-image: none !important;
}

html.codex-dream-skin[data-dream-theme] main.main-surface::before {
  content: none !important;
  background: none !important;
}

html.codex-dream-skin[data-dream-theme] aside.app-shell-left-panel {
  background: color-mix(in srgb, ${colors.surface} 30%, transparent) !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

html.codex-dream-skin[data-dream-theme] main.main-surface > header.app-header-tint {
  background: color-mix(in srgb, ${colors.surface} 16%, transparent) !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

html.codex-dream-skin main.main-surface [role="main"],
html.codex-dream-skin main.main-surface .thread-scroll-container {
  --color-token-conversation-body: ${colors.text} !important;
  --color-token-text-secondary: color-mix(in srgb, ${colors.text} 76%, transparent) !important;
  --color-token-text-tertiary: color-mix(in srgb, ${colors.text} 58%, transparent) !important;
  --color-token-conversation-summary-leading: color-mix(in srgb, ${colors.text} 88%, transparent) !important;
  --color-token-conversation-summary-trailing: color-mix(in srgb, ${colors.text} 68%, transparent) !important;
  --color-token-conversation-header: color-mix(in srgb, ${colors.text} 78%, transparent) !important;
  --color-token-description-foreground: color-mix(in srgb, ${colors.text} 72%, transparent) !important;
  --shimmer-text-secondary: color-mix(in srgb, ${colors.text} 68%, transparent) !important;
  --shimmer-contrast: ${colors.text} !important;
  background-color: transparent !important;
  color: ${colors.text} !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) {
  background-color: transparent !important;
  background-image: none !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) article,
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) .message,
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) [data-message-author-role],
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) [class*="surface"]:not(.composer-surface-chrome):not([class*="home-main-content"]) {
  border-color: color-mix(in srgb, ${colors.accent} 24%, transparent) !important;
  background: ${conversationSurface} !important;
  color: ${colors.text} !important;
  text-shadow: none !important;
  backdrop-filter: blur(18px) saturate(108%) !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) [data-message-author-role="user"],
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell) [class*="bg-token-foreground"] {
  background: ${userSurface} !important;
  color: ${colors.text} !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container [class*="_markdownContent_"],
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container [class*="_markdownContent_"] :where(p, li, h1, h2, h3, h4, h5, h6, strong, em, blockquote, span),
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container :where(.text-token-conversation-body, .text-token-text-secondary, .group/activity-header),
html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container .group/activity-header :where(span, svg) {
  color: ${colors.text} !important;
  text-shadow: none !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container :where(
    article,
    article *,
    .message,
    .message *,
    [data-message-author-role],
    [data-message-author-role] *
  ) {
  color: ${colors.text} !important;
  text-shadow: none !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container * {
  color: ${colors.text} !important;
}

html.codex-dream-skin main.main-surface:not(.dream-skin-home-shell)
  .thread-scroll-container [class*="_markdownContent_"] a {
  color: ${colors.accent} !important;
}

html.codex-dream-skin .composer-surface-chrome {
  background: color-mix(in srgb, ${colors.surface} 92%, transparent) !important;
  color: ${colors.text} !important;
}

html.codex-dream-skin .composer-surface-chrome *,
html.codex-dream-skin .composer-surface-chrome .ProseMirror {
  color: ${colors.text} !important;
  caret-color: ${colors.accent} !important;
}

html.codex-dream-skin main.main-surface pre,
html.codex-dream-skin main.main-surface code,
html.codex-dream-skin main.main-surface table,
html.codex-dream-skin main.main-surface [data-testid*="code"] {
  background: ${codeSurface} !important;
  color: ${codeText} !important;
  text-shadow: none !important;
}

html.codex-dream-skin main.main-surface :where(pre, code, table) * {
  color: ${codeText} !important;
}

/* The main surface already owns the full artwork; avoid a second hero image. */
html.codex-dream-skin .dream-skin-home > div:first-child > div:first-child > div:first-child {
  background-image: none !important;
  background-color: transparent !important;
}

/* Codex new-task home: remove the full-page wash while keeping cards readable. */
html.codex-dream-skin main.main-surface.dream-skin-home-shell,
html.codex-dream-skin main.main-surface.dream-skin-home-shell > div,
html.codex-dream-skin .dream-skin-home,
html.codex-dream-skin .dream-skin-home > div {
  background-color: transparent !important;
  background-image: none !important;
}
html.codex-dream-skin .dream-skin-home :where([class*="bg-token-main-surface"], [class*="from-token-main-surface"], [class*="via-token-main-surface"]) {
  background-color: transparent !important;
  background-image: none !important;
}
html.codex-dream-skin main.main-surface [class*="container-name:home-main-content"] {
  background-color: transparent !important;
  background-image: none !important;
  backdrop-filter: none !important;
}
html.codex-dream-skin .dream-skin-home .composer-surface-chrome {
  background-color: color-mix(in srgb, ${colors.surface} 82%, transparent) !important;
  backdrop-filter: blur(14px) saturate(106%) !important;
}`;
  return themeVars + "\n" + bodyArt;
}
function isLightHex(hex) {
  const match = /^#([0-9a-f]{6})$/i.exec(hex);
  if (!match) return true;
  const value = parseInt(match[1], 16);
  return 0.299 * (value >> 16 & 255) + 0.587 * (value >> 8 & 255) + 0.114 * (value & 255) > 140;
}
function buildWorkBuddyMenuScript(options) {
  const payload = JSON.stringify({
    styleId: options.styleId,
    menuId: options.menuId,
    activeId: options.currentThemeId,
    themes: options.themes,
    cssTemplate: options.cssTemplate,
    sentinels: WORKBUDDY_CSS_PLACEHOLDERS,
    storageKey: "dreamCustomThemes",
    selectedKey: "wb-dream-selected",
    sharedCustomThemes: options.sharedCustomThemes,
    sharedCustomThemeService: options.sharedCustomThemeService
  });
  return `(() => {
  const data = ${payload};
  const recordPresetUsage = (themeId) => fetch(data.sharedCustomThemeService.usageEndpoint, {
    method: "POST",
    headers: { Authorization: "Bearer " + data.sharedCustomThemeService.token, "Content-Type": "application/json" },
    body: JSON.stringify({ appId: "workbuddy", themeId }),
  }).catch(() => {});
  const themeBlobUrls = new Map();
  const materializeCss = (css, cacheKey) => {
    const dataUrl = css.match(new RegExp('data:image/(?:png|jpeg|webp|gif);base64,[A-Za-z0-9+/=]+'))?.[0];
    if (!dataUrl) return css;
    let blobUrl = themeBlobUrls.get(cacheKey);
    if (!blobUrl) {
      const [header, encoded] = dataUrl.split(',', 2);
      const mime = header.slice(5, header.indexOf(';'));
      const binary = atob(encoded);
      const bytes = new Uint8Array(binary.length);
      for (let index = 0; index < binary.length; index++) bytes[index] = binary.charCodeAt(index);
      blobUrl = URL.createObjectURL(new Blob([bytes], { type: mime }));
      themeBlobUrls.set(cacheKey, blobUrl);
    }
    return css.split(dataUrl).join(blobUrl);
  };
  let style = document.getElementById(data.styleId);
  if (!style) {
    style = document.createElement("style");
    style.id = data.styleId;
    document.head.appendChild(style);
  }

  document.getElementById(data.menuId)?.remove();
  const root = document.createElement("div");
  root.id = data.menuId;
  root.style.cssText = "position:fixed;bottom:16px;right:16px;z-index:2147483000;font:500 13px/1.4 system-ui;user-select:none;";

  const button = document.createElement("button");
  button.type = "button";
  button.title = "WorkBuddy 主题切换";
  button.textContent = "◉";
  button.style.cssText = "margin-left:auto;width:36px;height:36px;border-radius:10px;border:1px solid rgba(0,0,0,.12);background:rgba(255,255,255,.92);backdrop-filter:blur(10px);box-shadow:0 3px 12px rgba(0,0,0,.2);cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;color:#17344f;font-size:18px;line-height:1;";

  const panel = document.createElement("div");
  panel.style.cssText = "display:none;margin-bottom:8px;min-width:200px;padding:6px;border-radius:12px;border:1px solid rgba(0,0,0,.1);background:rgba(255,255,255,.94);backdrop-filter:blur(16px);box-shadow:0 10px 30px rgba(0,0,0,.18);color:#17344f;";

  const rows = new Map();
  const paint = (id) => {
    for (const [rowId, item] of rows) {
      item.style.background = rowId === id ? "rgba(36,201,215,.16)" : "transparent";
      item.style.fontWeight = rowId === id ? "700" : "500";
    }
  };
  const row = (label, dotColor, onPick, before) => {
    const item = document.createElement("div");
    item.style.cssText = "display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;cursor:pointer;";
    const dot = document.createElement("span");
    dot.style.cssText = "width:10px;height:10px;border-radius:50%;flex:none;background:" + dotColor + ";";
    const text = document.createElement("span");
    text.textContent = label;
    item.append(dot, text);
    item.addEventListener("mouseenter", () => { if (item.style.fontWeight !== "700") item.style.background = "rgba(0,0,0,.05)"; });
    item.addEventListener("mouseleave", () => paint(document.documentElement.dataset.dreamTheme ?? null));
    item.addEventListener("click", () => onPick(item));
    if (before) panel.insertBefore(item, before); else panel.appendChild(item);
    return item;
  };

  const isLightSurface = (hex) => {
    const match = /^#([0-9a-f]{6})$/i.exec(hex || "");
    if (!match) return true;
    const value = parseInt(match[1], 16);
    return (0.299 * ((value >> 16) & 255) + 0.587 * ((value >> 8) & 255) + 0.114 * (value & 255)) > 140;
  };
  const applyMode = (surface) => {
    const dark = !isLightSurface(surface);
    const body = document.body;
    const html = document.documentElement;
    html.dataset.dreamShell = dark ? "dark" : "light";
    body.dataset.vscodeThemeKind = dark ? "vscode-dark" : "vscode-light";
    body.dataset.vscodeThemeName = dark ? "IDE Dark" : "IDE Light";
    html.style.colorScheme = dark ? "dark" : "light";
    ["light", "vscode-light", "cb-light", "dark", "vscode-dark", "cb-dark"].forEach((className) => {
      const darkClass = className === "dark" || className === "vscode-dark" || className === "cb-dark";
      body.classList.toggle(className, dark ? darkClass : !darkClass);
      html.classList.toggle(className, dark ? darkClass : !darkClass);
    });
  };
  const setTheme = (id) => {
    const theme = data.themes.find((candidate) => candidate.id === id);
    if (!theme) return;
    style.textContent = materializeCss(theme.css, theme.id);
    document.documentElement.dataset.dreamTheme = theme.id;
    try { localStorage.setItem(data.selectedKey, theme.id); } catch {}
    applyMode(theme.surface);
    paint(theme.id);
  };
  const clearTheme = () => {
    style.textContent = "";
    delete document.documentElement.dataset.dreamTheme;
    try { localStorage.removeItem(data.selectedKey); } catch {}
    applyMode("#ffffff");
    paint(null);
  };

  for (const theme of data.themes) {
    const item = row(theme.name, theme.accent, () => { setTheme(theme.id); void recordPresetUsage(theme.id); panel.style.display = "none"; });
    item.dataset.dreamThemeId = theme.id;
    rows.set(theme.id, item);
  }

  const buildCustomCss = (dataUrl, colors, customId) => data.cssTemplate
    .split(data.sentinels.hero).join(dataUrl)
    .split(data.sentinels.accent).join(colors.accent)
    .split(data.sentinels.secondary).join(colors.secondary)
    .split(data.sentinels.surface).join(colors.surface)
    .split(data.sentinels.text).join(colors.text)
    .split(data.sentinels.id).join(customId);
  const hex = (r, g, b) => "#" + [r, g, b].map((value) => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, "0")).join("");
  const mix = (a, b, amount) => a.map((value, index) => value + (b[index] - value) * amount);
  const extractPalette = (canvas) => {
    const context = canvas.getContext("2d");
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
    const buckets = new Map();
    let luminanceSum = 0;
    let count = 0;
    for (let index = 0; index < pixels.length; index += 4) {
      const r = pixels[index], g = pixels[index + 1], b = pixels[index + 2];
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      luminanceSum += luminance;
      count += 1;
      const saturation = max === 0 ? 0 : (max - min) / max;
      if (saturation < 0.18 || luminance < 24 || luminance > 245) continue;
      const delta = max - min || 1;
      let hue = max === r ? (g - b) / delta + (g < b ? 6 : 0) : max === g ? (b - r) / delta + 2 : (r - g) / delta + 4;
      const bucket = (Math.round(hue) % 6) * 2 + (saturation > 0.55 ? 1 : 0);
      const entry = buckets.get(bucket) ?? { weight: 0, r: 0, g: 0, b: 0, hue: hue * 60 };
      const weight = saturation * saturation;
      entry.weight += weight;
      entry.r += r * weight;
      entry.g += g * weight;
      entry.b += b * weight;
      buckets.set(bucket, entry);
    }
    const averageLuminance = count ? luminanceSum / count : 128;
    const ranked = [...buckets.values()].sort((left, right) => right.weight - left.weight)
      .map((entry) => ({ rgb: [entry.r / entry.weight, entry.g / entry.weight, entry.b / entry.weight], hue: entry.hue }));
    const accent = ranked[0]?.rgb ?? [36, 201, 215];
    const secondary = ranked.find((entry) => Math.abs(entry.hue - (ranked[0]?.hue ?? 0)) > 50)?.rgb ?? mix(accent, [255, 255, 255], 0.35);
    const light = averageLuminance > 128;
    return {
      accent: hex(...accent),
      secondary: hex(...secondary),
      surface: hex(...(light ? mix(accent, [252, 252, 255], 0.92) : mix(accent, [12, 12, 18], 0.86))),
      text: hex(...(light ? mix(accent, [16, 24, 40], 0.82) : mix(accent, [244, 246, 252], 0.85))),
    };
  };

  const MAX_CUSTOM = 5;
  const customRows = new Map();
  const loadCustoms = () => {
    try {
      const themes = JSON.parse(localStorage.getItem(data.storageKey) ?? "[]");
      return Array.isArray(themes) ? themes.filter((theme) => theme && theme.dataUrl && theme.colors).slice(0, MAX_CUSTOM) : [];
    } catch { return []; }
  };
  const writeLocalCustoms = (themes) => {
    try { localStorage.setItem(data.storageKey, JSON.stringify(themes.slice(0, MAX_CUSTOM))); }
    catch (error) { console.warn("Dream Theme: 自定义图片本地缓存失败", error); }
  };
  const syncSharedCustoms = (themes) => fetch(data.sharedCustomThemeService.endpoint, {
    method: "PUT",
    headers: { Authorization: "Bearer " + data.sharedCustomThemeService.token, "Content-Type": "application/json" },
    body: JSON.stringify(themes.slice(0, MAX_CUSTOM)),
  }).then((response) => {
    if (!response.ok) throw new Error("共享图片同步失败: HTTP " + response.status);
    return response.json();
  });
  const saveCustoms = (themes) => {
    const limited = themes.slice(0, MAX_CUSTOM);
    writeLocalCustoms(limited);
    return syncSharedCustoms(limited).catch((error) => {
      console.warn("Dream Theme: 共享图片同步失败", error);
      return limited;
    });
  };
  const localCustomThemes = loadCustoms();
  const initialCustomThemes = data.sharedCustomThemes.length > 0 ? data.sharedCustomThemes : localCustomThemes;
  writeLocalCustoms(initialCustomThemes);
  if (data.sharedCustomThemes.length === 0 && localCustomThemes.length > 0) void saveCustoms(localCustomThemes);
  const applyCustomTheme = (slot) => {
    style.textContent = materializeCss(buildCustomCss(slot.dataUrl, slot.colors, slot.id), slot.id);
    document.documentElement.dataset.dreamTheme = slot.id;
    try { localStorage.removeItem(data.selectedKey); } catch {}
    applyMode(slot.colors.surface);
    ensureCustomRow(slot);
    paint(slot.id);
  };
  const deleteCustom = async (slotId) => {
    const themes = loadCustoms();
    const index = themes.findIndex((theme) => theme.id === slotId);
    if (index < 0) return;
    if (document.documentElement.dataset.dreamTheme === slotId) clearTheme();
    themes.splice(index, 1);
    await saveCustoms(themes);
    customRows.get(slotId)?.remove();
    customRows.delete(slotId);
    rows.delete(slotId);
  };
  const ensureCustomRow = (slot) => {
    const existing = customRows.get(slot.id);
    if (existing) {
      existing.querySelector("span + span").textContent = slot.name;
      existing.firstChild.style.background = slot.colors.accent;
      return;
    }
    const item = row(slot.name, slot.colors.accent, () => {
      const current = loadCustoms().find((theme) => theme.id === slot.id) ?? slot;
      applyCustomTheme(current);
      panel.style.display = "none";
    }, uploadRow);
    item.dataset.dreamThemeId = slot.id;
    const text = item.querySelector("span + span");
    text.style.cssText = "flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";
    const remove = document.createElement("span");
    remove.textContent = "×";
    remove.title = "删除这张自定义图片";
    remove.style.cssText = "flex:none;width:18px;height:18px;line-height:18px;text-align:center;border-radius:50%;color:rgba(0,0,0,.45);font-size:14px;";
    remove.addEventListener("mouseenter", () => { remove.style.background = "rgba(220,60,60,.15)"; remove.style.color = "#c03030"; });
    remove.addEventListener("mouseleave", () => { remove.style.background = "transparent"; remove.style.color = "rgba(0,0,0,.45)"; });
    remove.addEventListener("click", (event) => { event.stopPropagation(); deleteCustom(slot.id); });
    item.appendChild(remove);
    customRows.set(slot.id, item);
    rows.set(slot.id, item);
  };

  const importFromDataUrl = (dataUrl, name) => new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = async () => {
      const scale = Math.min(1, 1600 / image.width);
      const full = document.createElement("canvas");
      full.width = Math.round(image.width * scale);
      full.height = Math.round(image.height * scale);
      full.getContext("2d").drawImage(image, 0, 0, full.width, full.height);
      const sample = document.createElement("canvas");
      sample.width = 48;
      sample.height = Math.max(1, Math.round(48 * image.height / image.width));
      sample.getContext("2d").drawImage(image, 0, 0, sample.width, sample.height);
      const colors = extractPalette(sample);
      const compressed = full.toDataURL("image/webp", 0.8);
      const themes = loadCustoms();
      let slot;
      if (themes.length < MAX_CUSTOM) {
        slot = { id: "custom-upload-" + Date.now().toString(36), name: name || "我的图片", dataUrl: compressed, colors };
        themes.push(slot);
      } else {
        const activeId = document.documentElement.dataset.dreamTheme;
        let index = themes.findIndex((theme) => theme.id === activeId);
        if (index < 0) index = 0;
        slot = { id: themes[index].id, name: name || "我的图片", dataUrl: compressed, colors };
        themes[index] = slot;
      }
      await saveCustoms(themes);
      applyCustomTheme(slot);
      resolve(colors);
    };
    image.onerror = () => reject(new Error("图片读取失败"));
    image.src = dataUrl;
  });

  const picker = document.createElement("input");
  picker.type = "file";
  picker.accept = "image/png,image/jpeg,image/webp";
  picker.style.display = "none";
  picker.addEventListener("change", () => {
    const file = picker.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => importFromDataUrl(reader.result, file.name.replace(/\\.[a-z0-9]+$/i, ""));
    reader.readAsDataURL(file);
    picker.value = "";
    panel.style.display = "none";
  });

  const uploadRow = row("＋ 自定义图片", "rgba(36,201,215,.9)", () => picker.click());
  uploadRow.style.borderTop = "1px solid rgba(0,0,0,.08)";
  const native = row("还原主题", "rgba(0,0,0,.24)", () => { clearTheme(); panel.style.display = "none"; });
  rows.set(null, native);
  initialCustomThemes.forEach(ensureCustomRow);
  fetch(data.sharedCustomThemeService.endpoint, {
    headers: { Authorization: "Bearer " + data.sharedCustomThemeService.token },
  }).then((response) => response.ok ? response.json() : Promise.reject(new Error("HTTP " + response.status)))
    .then((latest) => {
      if (!Array.isArray(latest)) return;
      for (const slotId of [...customRows.keys()]) {
        if (!latest.some((item) => item.id === slotId)) {
          customRows.get(slotId)?.remove();
          customRows.delete(slotId);
          rows.delete(slotId);
        }
      }
      writeLocalCustoms(latest);
      latest.forEach(ensureCustomRow);
    }).catch((error) => console.warn("Dream Theme: 共享图片读取失败", error));

  button.addEventListener("click", () => { panel.style.display = panel.style.display === "none" ? "block" : "none"; });
  const closeOnOutsideClick = (event) => {
    if (panel.style.display === "none" || root.contains(event.target)) return;
    panel.style.display = "none";
  };
  if (window.__dreamWorkOutsideClick) {
    document.removeEventListener("pointerdown", window.__dreamWorkOutsideClick, true);
  }
  window.__dreamWorkOutsideClick = closeOnOutsideClick;
  document.addEventListener("pointerdown", closeOnOutsideClick, true);
  root.append(panel, button, picker);
  document.body.appendChild(root);

  setTheme(data.activeId);

  window.__dreamTheme = { importFromDataUrl, setTheme, clearTheme, deleteCustom };
  return true;
})()`;
}
function buildMenuScript(options) {
  const themesJson = JSON.stringify(options.themes);
  const cssTemplate = JSON.stringify(options.cssTemplate ?? "");
  const appId = options.appId;
  return `(() => {
  const themes = ${themesJson};
  const cssTemplate = ${cssTemplate};
  const sentinels = ${JSON.stringify(WORKBUDDY_CSS_PLACEHOLDERS)};
  const currentThemeId = '${options.currentThemeId}';
  const appId = '${appId}';
  if (appId === 'sparkdesk') {
    document.documentElement.dataset.dreamSparkdeskSurface = location.hash === '#desk' || location.hash === '#settings' ? 'content' : 'shell';
  }
  if (appId === 'stepfun') {
    document.documentElement.dataset.dreamStepfunSurface = location.href.startsWith('app://ui/pages/browser/') ? 'shell' : 'content';
  }
  const nativeModeKey = '__dreamWorkNativeMode';
  const customStorageKey = 'dreamCodexCustomThemes';
  const stepFunStateKey = 'dream-work-theme:stepfun:state';
  const stepFunChannelName = 'dream-work-theme:stepfun';
  const sparkDeskChannelName = 'dream-work-theme:sparkdesk';
  const sharedCustomThemes = ${JSON.stringify(options.sharedCustomThemes)};
  const sharedCustomThemeService = ${JSON.stringify(options.sharedCustomThemeService)};
  const recordPresetUsage = (themeId) => fetch(sharedCustomThemeService.usageEndpoint, {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + sharedCustomThemeService.token, 'Content-Type': 'application/json' },
    body: JSON.stringify({ appId, themeId }),
  }).catch(() => {});
  const themeBlobUrls = new Map();
  // file:// 协议页面导航后 URL.createObjectURL 创建的 blob URL 会失效,
  // 导致 hero 背景图丢失;直接在页面内按协议判断,内嵌 data URL。
  const useBlobUrl = location.protocol !== 'file:';
  const materializeCss = (css, cacheKey) => {
    if (!useBlobUrl) return css;
    const dataUrl = css.match(new RegExp('data:image/(?:png|jpeg|webp|gif);base64,[A-Za-z0-9+/=]+'))?.[0];
    if (!dataUrl) return css;
    let blobUrl = themeBlobUrls.get(cacheKey);
    if (!blobUrl) {
      const [header, encoded] = dataUrl.split(',', 2);
      const mime = header.slice(5, header.indexOf(';'));
      const binary = atob(encoded);
      const bytes = new Uint8Array(binary.length);
      for (let index = 0; index < binary.length; index++) bytes[index] = binary.charCodeAt(index);
      blobUrl = URL.createObjectURL(new Blob([bytes], { type: mime }));
      themeBlobUrls.set(cacheKey, blobUrl);
    }
    return css.split(dataUrl).join(blobUrl);
  };

  const isLightSurface = (hex) => {
    const m = /^#([0-9a-f]{6})$/i.exec(hex || "");
    if (!m) return true;
    const v = parseInt(m[1], 16);
    return (0.299 * ((v >> 16) & 255) + 0.587 * ((v >> 8) & 255) + 0.114 * (v & 255)) > 140;
  };
  const applyMode = (surface) => {
    const dark = !isLightSurface(surface);
    const body = document.body;
    const html = document.documentElement;
    html.dataset.dreamShell = dark ? "dark" : "light";
    body.dataset.vscodeThemeKind = dark ? "vscode-dark" : "vscode-light";
    body.dataset.vscodeThemeName = dark ? "IDE Dark" : "IDE Light";
    html.style.colorScheme = dark ? "dark" : "light";
    ["light", "vscode-light", "cb-light", "dark", "vscode-dark", "cb-dark"].forEach((cls) => {
      const isDarkCls = cls === "dark" || cls === "vscode-dark" || cls === "cb-dark";
      body.classList.toggle(cls, dark ? isDarkCls : !isDarkCls);
      html.classList.toggle(cls, dark ? isDarkCls : !isDarkCls);
    });
  };
  if (!window[nativeModeKey]) {
    const html = document.documentElement;
    const body = document.body;
    window[nativeModeKey] = {
      htmlClasses: Array.from(html.classList),
      bodyClasses: Array.from(body.classList),
      colorScheme: html.style.colorScheme,
      bodyThemeKind: body.dataset.vscodeThemeKind,
      bodyThemeName: body.dataset.vscodeThemeName,
      stepFunTheme: appId === 'stepfun' ? localStorage.getItem('theme') : null,
    };
  }
  const restoreNativeMode = async () => {
    const nativeMode = window[nativeModeKey];
    if (!nativeMode) return;
    const html = document.documentElement;
    const body = document.body;
    let nativeDark = nativeMode.htmlClasses.includes('dark') || nativeMode.bodyClasses.includes('dark');
    if (appId === 'minimax-code' || appId === 'agnes-code' || appId === 'astronclaw' || appId === 'stepfun') {
      try {
        if (appId === 'astronclaw') {
          const storedTheme = (await window.astronDesktop?.settings?.get?.())?.general?.theme;
          if (storedTheme === 'system') nativeDark = matchMedia('(prefers-color-scheme: dark)').matches;
          else if (storedTheme === 'dark') nativeDark = true;
          else if (storedTheme === 'light') nativeDark = false;
        } else if (appId === 'stepfun') {
          const storedTheme = nativeMode.stepFunTheme || localStorage.getItem('theme');
          if (storedTheme === 'system') nativeDark = matchMedia('(prefers-color-scheme: dark)').matches;
          else if (storedTheme === 'dark') nativeDark = true;
          else if (storedTheme === 'light') nativeDark = false;
          else nativeDark = nativeMode.htmlClasses.includes('dark') || nativeMode.bodyClasses.includes('dark');
        } else {
          const storedTheme = localStorage.getItem('theme');
          const followsSystem = localStorage.getItem('use_system_theme') === 'true' || storedTheme === 'system';
          if (followsSystem) nativeDark = matchMedia('(prefers-color-scheme: dark)').matches;
          else if (storedTheme === 'dark') nativeDark = true;
          else if (storedTheme === 'light') nativeDark = false;
        }
      } catch {}
      ["light", "vscode-light", "cb-light", "dark", "vscode-dark", "cb-dark"].forEach((className) => {
        html.classList.remove(className);
        body.classList.remove(className);
      });
      html.classList.add(nativeDark ? 'dark' : 'light');
      html.style.colorScheme = nativeDark ? 'dark' : 'light';
      delete body.dataset.vscodeThemeKind;
      delete body.dataset.vscodeThemeName;
    } else {
      ["light", "vscode-light", "cb-light", "dark", "vscode-dark", "cb-dark"].forEach((className) => {
        html.classList.toggle(className, nativeMode.htmlClasses.includes(className));
        body.classList.toggle(className, nativeMode.bodyClasses.includes(className));
      });
      html.style.colorScheme = nativeMode.colorScheme;
      if (nativeMode.bodyThemeKind === undefined) delete body.dataset.vscodeThemeKind;
      else body.dataset.vscodeThemeKind = nativeMode.bodyThemeKind;
      if (nativeMode.bodyThemeName === undefined) delete body.dataset.vscodeThemeName;
      else body.dataset.vscodeThemeName = nativeMode.bodyThemeName;
    }
    delete html.dataset.dreamShell;
  };
  window.__dreamWorkRestoreNativeMode = restoreNativeMode;

  const style = document.getElementById('${options.styleId}');
  if (!style) {
    const s = document.createElement('style');
    s.id = '${options.styleId}';
    document.head.appendChild(s);
    window.__dreamWorkThemeStyle = s;
  } else {
    window.__dreamWorkThemeStyle = style;
  }

  const markKimiAction = (restored, actionAt = Date.now()) => {
    if (appId !== 'kimi') return actionAt;
    try {
      localStorage.setItem('${KIMI_ACTION_KEY}', String(actionAt));
      if (restored) localStorage.setItem('${KIMI_RESTORE_KEY}', '1');
      else localStorage.removeItem('${KIMI_RESTORE_KEY}');
    } catch {}
    document.documentElement.dataset.dreamThemeRestored = restored ? 'true' : undefined;
    if (!restored) delete document.documentElement.dataset.dreamThemeRestored;
    return actionAt;
  };
  let stepFunSyncing = false;
  let sparkDeskSyncing = false;
  const writeStepFunState = (themeId, actionAt) => {
    if (appId !== 'stepfun' || stepFunSyncing || !location.href.startsWith('app://chat-web/')) return Promise.resolve();
    try {
      const current = JSON.parse(localStorage.getItem(stepFunStateKey) || 'null');
      if (current && Number(current.actionAt) > Number(actionAt)) return Promise.resolve();
      localStorage.setItem(stepFunStateKey, JSON.stringify({ themeId, actionAt }));
      window.__dreamWorkStepFunChannel?.postMessage({ themeId, actionAt });
      return fetch(sharedCustomThemeService.appStateEndpoint + '/stepfun', {
        method: 'PUT',
        headers: { Authorization: 'Bearer ' + sharedCustomThemeService.token, 'Content-Type': 'application/json' },
        body: JSON.stringify({ themeId, actionAt }),
      }).then(() => undefined).catch(() => undefined);
    } catch { return Promise.resolve(); }
  };
  const writeSparkDeskState = (themeId, actionAt) => {
    if (appId !== 'sparkdesk' || sparkDeskSyncing || location.hash !== '#desk') return Promise.resolve();
    try {
      const state = { themeId, actionAt };
      window.__dreamWorkSparkDeskChannel?.postMessage(state);
      return fetch(sharedCustomThemeService.appStateEndpoint + '/sparkdesk', {
        method: 'PUT',
        headers: { Authorization: 'Bearer ' + sharedCustomThemeService.token, 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
      }).then(() => undefined).catch(() => undefined);
    } catch { return Promise.resolve(); }
  };
  const applyTheme = (themeId, actionAt = Date.now()) => {
    if (Number(actionAt) < Number(window.__dreamTheme?.lastActionAt || 0)) return;
    const theme = themes.find(t => t.id === themeId);
    if (!theme) return;
    markKimiAction(false, actionAt);
    if (appId === 'doubao') {
      try { localStorage.removeItem('dream-work-theme:doubao:restored'); } catch {}
      delete document.documentElement.dataset.dreamThemeRestored;
    }
    window.__dreamWorkThemeStyle.textContent = materializeCss(theme.css, theme.id);
    document.documentElement.dataset.dreamTheme = themeId;
    if (window.__dreamTheme) {
      window.__dreamTheme.lastActionAt = actionAt;
      window.__dreamTheme.restoring = false;
    }
    void writeStepFunState(themeId, actionAt);
    void writeSparkDeskState(themeId, actionAt);
    if (appId !== 'hana-agent' && appId !== 'kimi' && appId !== 'stepfun') applyMode(theme.surface);
    
    // Codex themes require the codex-dream-skin class on <html> for CSS selectors to match
    if (appId === 'codex') {
      document.documentElement.classList.add('codex-dream-skin');
      const shellMain = document.querySelector('main.main-surface') || document.querySelector('main');
      if (shellMain) {
        const homeCandidate = (shellMain.matches('[role="main"]') ? shellMain : shellMain.querySelector('[role="main"]')) ||
          shellMain.querySelector('[class*="home-main-content"], [class*="container-name:home-main-content"]');
        if (homeCandidate) {
          const hasGameSource = homeCandidate.querySelector('[data-feature="game-source"]');
          const hasSuggestions = homeCandidate.querySelector('[class*="group/home-suggestions"]');
          const hasTaskContent = homeCandidate.querySelector('.thread-scroll-container, [data-message-author-role], article, .message');
          const isHomeContainer = homeCandidate.matches('[class*="home-main-content"], [class*="container-name:home-main-content"]');
          if ((hasGameSource || hasSuggestions || isHomeContainer) && !hasTaskContent) {
            homeCandidate.classList.add('dream-skin-home');
            shellMain.classList.add('dream-skin-home-shell');
          } else {
            shellMain.classList.remove('dream-skin-home-shell');
          }
        }
      }
    }
    
    const rows = root.querySelectorAll('.dream-theme-row');
    rows.forEach(row => {
      const id = row.dataset.themeId;
      row.style.background = id === themeId ? 'rgba(36,201,215,.16)' : 'transparent';
      row.style.fontWeight = id === themeId ? '700' : '500';
    });
  };

  const restoreNative = async (actionAt = Date.now()) => {
    if (Number(actionAt) < Number(window.__dreamTheme?.lastActionAt || 0)) return;
    markKimiAction(true);
    if (appId === 'doubao') {
      try { localStorage.setItem('dream-work-theme:doubao:restored', '1'); } catch {}
      document.documentElement.dataset.dreamThemeRestored = 'true';
    }
    if (window.__dreamTheme) window.__dreamTheme.restoring = true;
    window.__dreamWorkThemeStyle.textContent = '';
    delete document.documentElement.dataset.dreamTheme;
    if (window.__dreamTheme) window.__dreamTheme.lastActionAt = actionAt;
    await writeStepFunState('', actionAt);
    await writeSparkDeskState('', actionAt);
    if (appId === 'stepfun' && !stepFunSyncing) await new Promise(resolve => setTimeout(resolve, 1000));
    if (appId === 'minimax-code' || appId === 'agnes-code' || appId === 'astronclaw' || appId === 'stepfun' || appId === 'sparkdesk') await restoreNativeMode();
    else if (appId !== 'hana-agent' && appId !== 'kimi') applyMode('#ffffff');
    if (appId === 'codex') {
      document.documentElement.classList.remove('codex-dream-skin');
      delete document.documentElement.dataset.dreamShell;
    }
    panel.style.display = 'none';
  };

  document.getElementById('${options.menuId}-host')?.remove();
  document.getElementById('${options.menuId}')?.remove();
  if (window.__dreamWorkOutsideClick) {
    document.removeEventListener('pointerdown', window.__dreamWorkOutsideClick, true);
    delete window.__dreamWorkOutsideClick;
  }

  const host = document.createElement('div');
  host.id = '${options.menuId}-host';
  host.style.cssText = "all:initial!important;position:fixed!important;right:16px!important;bottom:16px!important;z-index:2147483647!important;display:block!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;width:fit-content!important;height:fit-content!important;transform:none!important;filter:none!important;contain:none!important;isolation:isolate!important;";
  const mount = host.attachShadow({ mode: 'open' });

  const root = document.createElement('div');
  root.id = '${options.menuId}';
  root.style.cssText = "position:relative;display:flex;flex-direction:column;align-items:flex-end;font:500 13px/1.4 system-ui;user-select:none;color-scheme:light;pointer-events:auto;color:#17344f!important;";

  const button = document.createElement('button');
  button.type = 'button';
  button.title = 'Dream Work Theme';
  button.textContent = '◉';
  button.style.cssText = "margin-left:auto;width:36px;height:36px;border-radius:10px;border:1px solid rgba(0,0,0,.12);background:rgba(255,255,255,.92);backdrop-filter:blur(10px);box-shadow:0 3px 12px rgba(0,0,0,.2);cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;color:#17344f;font-size:18px;line-height:1;";

  const panel = document.createElement('div');
  panel.style.cssText = "display:none;margin-bottom:8px;min-width:200px;padding:6px;border-radius:12px;border:1px solid rgba(0,0,0,.1);background:rgba(255,255,255,.96);backdrop-filter:blur(16px);box-shadow:0 10px 30px rgba(0,0,0,.18);color:#17344f!important;-webkit-text-fill-color:#17344f!important;";

  const row = (label, dotColor, onPick, before) => {
    const item = document.createElement('div');
    item.style.cssText = "display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;cursor:pointer;color:#17344f!important;-webkit-text-fill-color:#17344f!important;";
    const dot = document.createElement('span');
    dot.style.cssText = "width:10px;height:10px;border-radius:50%;flex:none;background:" + dotColor + ";";
    const text = document.createElement('span');
    text.textContent = label;
    text.style.cssText = 'color:#17344f!important;-webkit-text-fill-color:#17344f!important;';
    item.append(dot, text);
    item.addEventListener('mouseenter', () => { if (item.style.fontWeight !== '700') item.style.background = 'rgba(0,0,0,.05)'; });
    item.addEventListener('mouseleave', () => { item.style.background = 'transparent'; });
    item.addEventListener('click', () => onPick(item));
    if (before) panel.insertBefore(item, before); else panel.appendChild(item);
    return item;
  };

  for (const theme of themes) {
    const item = row(theme.name, theme.accent || '#24c9d7', () => {
      applyTheme(theme.id);
      void recordPresetUsage(theme.id);
      panel.style.display = 'none';
    });
    item.className = 'dream-theme-row';
    item.dataset.themeId = theme.id;
  }

  const buildCustomCss = (dataUrl, colors, customId) => cssTemplate
    .split(sentinels.hero).join(dataUrl)
    .split(sentinels.accent).join(colors.accent)
    .split(sentinels.secondary).join(colors.secondary)
    .split(sentinels.surface).join(colors.surface)
    .split(sentinels.text).join(colors.text)
    .split(sentinels.id).join(customId);
  const hex = (r, g, b) => '#' + [r, g, b].map((value) => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, '0')).join('');
  const mix = (a, b, amount) => a.map((value, index) => value + (b[index] - value) * amount);
  const extractPalette = (canvas) => {
    const context = canvas.getContext('2d');
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
    const buckets = new Map();
    let luminanceSum = 0;
    let count = 0;
    for (let index = 0; index < pixels.length; index += 4) {
      const r = pixels[index], g = pixels[index + 1], b = pixels[index + 2];
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      luminanceSum += luminance;
      count += 1;
      const saturation = max === 0 ? 0 : (max - min) / max;
      if (saturation < 0.18 || luminance < 24 || luminance > 245) continue;
      const delta = max - min || 1;
      const hue = max === r ? (g - b) / delta + (g < b ? 6 : 0) : max === g ? (b - r) / delta + 2 : (r - g) / delta + 4;
      const bucket = (Math.round(hue) % 6) * 2 + (saturation > 0.55 ? 1 : 0);
      const entry = buckets.get(bucket) || { weight: 0, r: 0, g: 0, b: 0, hue: hue * 60 };
      const weight = saturation * saturation;
      entry.weight += weight;
      entry.r += r * weight;
      entry.g += g * weight;
      entry.b += b * weight;
      buckets.set(bucket, entry);
    }
    const averageLuminance = count ? luminanceSum / count : 128;
    const ranked = [...buckets.values()].sort((left, right) => right.weight - left.weight)
      .map((entry) => ({ rgb: [entry.r / entry.weight, entry.g / entry.weight, entry.b / entry.weight], hue: entry.hue }));
    const accent = ranked[0]?.rgb || [36, 201, 215];
    const secondary = ranked.find((entry) => Math.abs(entry.hue - (ranked[0]?.hue || 0)) > 50)?.rgb || mix(accent, [255, 255, 255], 0.35);
    const light = averageLuminance > 128;
    return {
      accent: hex(...accent),
      secondary: hex(...secondary),
      surface: hex(...(light ? mix(accent, [252, 252, 255], 0.92) : mix(accent, [12, 12, 18], 0.86))),
      text: hex(...(light ? mix(accent, [16, 24, 40], 0.82) : mix(accent, [244, 246, 252], 0.85))),
    };
  };
  const MAX_CUSTOM = 5;
  const customRows = new Map();
  const loadCustoms = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(customStorageKey) || '[]');
      return Array.isArray(saved) ? saved.filter((theme) => theme && theme.dataUrl && theme.colors).slice(0, MAX_CUSTOM) : [];
    } catch { return []; }
  };
  const writeLocalCustoms = (saved) => {
    try { localStorage.setItem(customStorageKey, JSON.stringify(saved.slice(0, MAX_CUSTOM))); }
    catch (error) { console.warn('Dream Theme: 自定义图片本地缓存失败', error); }
  };
  const syncSharedCustoms = (saved) => fetch(sharedCustomThemeService.endpoint, {
    method: 'PUT',
    headers: { Authorization: 'Bearer ' + sharedCustomThemeService.token, 'Content-Type': 'application/json' },
    body: JSON.stringify(saved.slice(0, MAX_CUSTOM)),
  }).then((response) => {
    if (!response.ok) throw new Error('共享图片同步失败: HTTP ' + response.status);
    return response.json();
  });
  const saveCustoms = (saved) => {
    const limited = saved.slice(0, MAX_CUSTOM);
    writeLocalCustoms(limited);
    return syncSharedCustoms(limited).catch((error) => {
      console.warn('Dream Theme: 共享图片同步失败', error);
      return limited;
    });
  };
  const localCustomThemes = loadCustoms();
  const initialCustomThemes = sharedCustomThemes.length > 0 ? sharedCustomThemes : localCustomThemes;
  let customRefreshGeneration = 0;
  const applyCustomTheme = (slot, actionAt = Date.now()) => {
    markKimiAction(false, actionAt);
    window.__dreamWorkThemeStyle.textContent = materializeCss(buildCustomCss(slot.dataUrl, slot.colors, slot.id), slot.id);
    document.documentElement.dataset.dreamTheme = slot.id;
    if (window.__dreamTheme) {
      window.__dreamTheme.lastActionAt = actionAt;
      window.__dreamTheme.restoring = false;
    }
    void writeSparkDeskState(slot.id, actionAt);
    if (appId !== 'hana-agent') applyMode(slot.colors.surface);
    if (appId === 'codex') document.documentElement.classList.add('codex-dream-skin');
    ensureCustomRow(slot);
  };
  const deleteCustom = async (slotId) => {
    customRefreshGeneration += 1;
    if (appId === 'kimi') {
      window.__dreamWorkDeleteCustomThemeId = slotId;
      const saved = loadCustoms().filter((theme) => theme.id !== slotId);
      if (document.documentElement.dataset.dreamTheme === slotId) restoreNative();
      writeLocalCustoms(saved);
      customRows.get(slotId)?.remove();
      customRows.delete(slotId);
      return;
    }
    let saved = [];
    try {
      const response = await fetch(sharedCustomThemeService.endpoint + '/delete', {
        method: 'POST',
        headers: { Authorization: 'Bearer ' + sharedCustomThemeService.token, 'Content-Type': 'application/json' },
        body: JSON.stringify({ themeId: slotId }),
      });
      if (!response.ok) throw new Error('HTTP ' + response.status);
      const latest = await response.json();
      saved = Array.isArray(latest) ? latest : [];
      if (window.__dreamTheme) window.__dreamTheme.lastCustomDeleteError = null;
    } catch (error) {
      if (window.__dreamTheme) window.__dreamTheme.lastCustomDeleteError = String(error?.message || error);
      console.warn('Dream Theme: 共享图片删除失败', error);
      saved = loadCustoms().filter((theme) => theme.id !== slotId);
      await saveCustoms(saved);
    }
    if (document.documentElement.dataset.dreamTheme === slotId) restoreNative();
    writeLocalCustoms(saved);
    customRows.get(slotId)?.remove();
    customRows.delete(slotId);
    void refreshCustomThemes();
  };
  const ensureCustomRow = (slot) => {
    const existing = customRows.get(slot.id);
    if (existing) {
      existing.querySelector('span + span').textContent = slot.name;
      existing.firstChild.style.background = slot.colors.accent;
      return;
    }
    const item = row(slot.name, slot.colors.accent, () => {
      const current = loadCustoms().find((theme) => theme.id === slot.id) || slot;
      applyCustomTheme(current);
      panel.style.display = 'none';
    }, uploadRow);
    item.dataset.customThemeId = slot.id;
    const text = item.querySelector('span + span');
    text.style.cssText = 'flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;';
    const remove = document.createElement('span');
    remove.textContent = '×';
    remove.title = '删除这张自定义图片';
    remove.style.cssText = 'flex:none;width:18px;height:18px;line-height:18px;text-align:center;border-radius:50%;color:rgba(0,0,0,.45);font-size:14px;';
    remove.addEventListener('click', (event) => { event.stopPropagation(); deleteCustom(slot.id); });
    item.appendChild(remove);
    customRows.set(slot.id, item);
  };
  const importFromDataUrl = (dataUrl, name) => new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = async () => {
      const scale = Math.min(1, 1600 / image.width);
      const full = document.createElement('canvas');
      full.width = Math.round(image.width * scale);
      full.height = Math.round(image.height * scale);
      full.getContext('2d').drawImage(image, 0, 0, full.width, full.height);
      const sample = document.createElement('canvas');
      sample.width = 48;
      sample.height = Math.max(1, Math.round(48 * image.height / image.width));
      sample.getContext('2d').drawImage(image, 0, 0, sample.width, sample.height);
      const colors = extractPalette(sample);
      const compressed = full.toDataURL('image/webp', 0.8);
      const saved = loadCustoms();
      let slot;
      if (saved.length < MAX_CUSTOM) {
        slot = { id: 'custom-codex-' + Date.now().toString(36), name: name || '我的图片', dataUrl: compressed, colors };
        saved.push(slot);
      } else {
        slot = { id: saved[0].id, name: name || '我的图片', dataUrl: compressed, colors };
        saved[0] = slot;
      }
      await saveCustoms(saved);
      applyCustomTheme(slot);
      resolve(colors);
    };
    image.onerror = () => reject(new Error('图片读取失败'));
    image.src = dataUrl;
  });
  const picker = document.createElement('input');
  picker.type = 'file';
  picker.accept = 'image/png,image/jpeg,image/webp';
  picker.style.display = 'none';
  picker.addEventListener('change', () => {
    const file = picker.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => importFromDataUrl(reader.result, file.name.replace(/\\.[a-z0-9]+$/i, ''));
    reader.readAsDataURL(file);
    picker.value = '';
    panel.style.display = 'none';
  });
  const uploadRow = row('＋ 自定义图片', 'rgba(36,201,215,.9)', () => picker.click());
  uploadRow.style.borderTop = '1px solid rgba(0,0,0,.08)';
  const native = row('还原主题', 'rgba(0,0,0,.24)', () => { void restoreNative(); });
  initialCustomThemes.forEach(ensureCustomRow);
  const refreshCustomThemes = () => {
    const generation = ++customRefreshGeneration;
    return fetch(sharedCustomThemeService.endpoint, {
      headers: { Authorization: 'Bearer ' + sharedCustomThemeService.token },
      cache: 'no-store',
    }).then((response) => response.ok ? response.json() : Promise.reject(new Error('HTTP ' + response.status)))
      .then((latest) => {
      if (generation !== customRefreshGeneration) return;
      if (!Array.isArray(latest)) return;
      for (const slotId of [...customRows.keys()]) {
        if (!latest.some((item) => item.id === slotId)) {
          customRows.get(slotId)?.remove();
          customRows.delete(slotId);
        }
      }
      writeLocalCustoms(latest);
      latest.forEach(ensureCustomRow);
    }).catch((error) => console.warn('Dream Theme: 共享图片读取失败', error));
  };
  void refreshCustomThemes();

  button.addEventListener('click', () => {
    void refreshCustomThemes();
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
  });

  const closeOnOutsideClick = (event) => {
    if (panel.style.display === 'none') return;
    const path = event.composedPath?.() || [];
    if (!path.includes(host)) panel.style.display = 'none';
  };
  if (window.__dreamWorkOutsideClick) {
    document.removeEventListener('pointerdown', window.__dreamWorkOutsideClick, true);
  }
  window.__dreamWorkOutsideClick = closeOnOutsideClick;
  document.addEventListener('pointerdown', closeOnOutsideClick, true);

  if (appId === 'stepfun' && location.href.startsWith('app://chat-web/')) {
    if (window.__dreamWorkStepFunStorage) window.removeEventListener('storage', window.__dreamWorkStepFunStorage);
    window.__dreamWorkStepFunStorage = (event) => {
      if (event.key !== stepFunStateKey || !event.newValue) return;
      try {
        const state = JSON.parse(event.newValue);
        stepFunSyncing = true;
        if (state.themeId) applyTheme(state.themeId, state.actionAt);
        else void restoreNative(state.actionAt);
      } finally {
        stepFunSyncing = false;
      }
    };
    window.addEventListener('storage', window.__dreamWorkStepFunStorage);
    window.__dreamWorkStepFunChannel?.close?.();
    window.__dreamWorkStepFunChannel = new BroadcastChannel(stepFunChannelName);
    window.__dreamWorkStepFunChannel.onmessage = (event) => {
      const state = event.data;
      if (!state || Number(state.actionAt) <= Number(window.__dreamTheme?.lastActionAt || 0)) return;
      stepFunSyncing = true;
      try {
        if (state.themeId) applyTheme(state.themeId, state.actionAt);
        else void restoreNative(state.actionAt);
      } finally {
        stepFunSyncing = false;
      }
    };
  }
  if (appId === 'sparkdesk') {
    window.__dreamWorkSparkDeskChannel?.close?.();
    window.__dreamWorkSparkDeskChannel = new BroadcastChannel(sparkDeskChannelName);
    window.__dreamWorkSparkDeskChannel.onmessage = (event) => {
      const state = event.data;
      if (!state || Number(state.actionAt) <= Number(window.__dreamTheme?.lastActionAt || 0)) return;
      sparkDeskSyncing = true;
      try {
        if (state.themeId) applyTheme(state.themeId, state.actionAt);
        else void restoreNative(state.actionAt);
      } finally {
        sparkDeskSyncing = false;
      }
    };
  }

  root.append(panel, button, picker);
  mount.appendChild(root);
  const showMenu = appId === 'stepfun'
    ? location.href.startsWith('app://chat-web/')
    : appId !== 'sparkdesk' || location.hash === '#desk';
  if (showMenu) document.documentElement.appendChild(host);

  clearInterval(window.__dreamWorkMenuGuard);
  const ensureInjectedNodes = () => {
    if (!window.__dreamWorkThemeStyle.isConnected) document.head.appendChild(window.__dreamWorkThemeStyle);
    if (showMenu && !host.isConnected) document.documentElement.appendChild(host);
  };
  window.__dreamWorkMenuGuard = setInterval(() => {
    ensureInjectedNodes();
  }, 250);
  let restoredAtStart = false;
  if (appId === 'kimi') {
    try { restoredAtStart = localStorage.getItem('${KIMI_RESTORE_KEY}') === '1'; } catch {}
  }
  let stepFunState = null;
  if (appId === 'stepfun' && location.href.startsWith('app://chat-web/')) {
    try { stepFunState = JSON.parse(localStorage.getItem(stepFunStateKey) || 'null'); } catch {}
  }
  if (stepFunState && !stepFunState.themeId) restoreNative(stepFunState.actionAt);
  else if (stepFunState?.themeId) applyTheme(stepFunState.themeId, stepFunState.actionAt);
  else if (restoredAtStart) restoreNative();
  else applyTheme(currentThemeId);
  window.__dreamTheme = {
    ...(window.__dreamTheme || {}),
    lastActionAt: window.__dreamTheme?.lastActionAt || Date.now(),
    restoring: window.__dreamTheme?.restoring || false,
    activateTheme: (themeId, actionAt) => applyTheme(themeId, actionAt),
    restoreNative,
    deleteCustom,
    refreshCustomThemes,
    replaceCustomThemes: (latest) => {
      if (!Array.isArray(latest)) return;
      for (const slotId of [...customRows.keys()]) {
        if (!latest.some((item) => item.id === slotId)) {
          customRows.get(slotId)?.remove();
          customRows.delete(slotId);
        }
      }
      writeLocalCustoms(latest);
      latest.forEach(ensureCustomRow);
    },
    customThemeEndpoint: sharedCustomThemeService.endpoint,
    appStateEndpoint: sharedCustomThemeService.appStateEndpoint,
  };
  ensureInjectedNodes();
})()`;
}
async function createShortcut(profile) {
  try {
    if (os__namespace.platform() === "win32") {
      return createWindowsShortcut(profile);
    }
    if (os__namespace.platform() === "darwin") {
      return createMacShortcut(profile);
    }
    if (os__namespace.platform() === "linux") {
      return createLinuxShortcut(profile);
    }
    return { success: false, error: `Unsupported platform: ${os__namespace.platform()}` };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
function createWindowsShortcut(profile) {
  const desktopDir = path__namespace.join(os__namespace.homedir(), "Desktop");
  const shortcutPath = path__namespace.join(desktopDir, `${profile.label}.lnk`);
  const exePath = process.execPath;
  const workingDir = path__namespace.dirname(exePath);
  const script = `
    $WshShell = New-Object -comObject WScript.Shell
    $Shortcut = $WshShell.CreateShortcut("${shortcutPath.replace(/\\/g, "\\\\")}")
    $Shortcut.TargetPath = "${exePath.replace(/\\/g, "\\\\")}"
    $Shortcut.Arguments = "--launch=${profile.appId}:${profile.themeId}"
    $Shortcut.WorkingDirectory = "${workingDir.replace(/\\/g, "\\\\")}"
    $Shortcut.Save()
  `;
  return new Promise((resolve) => {
    require("child_process").exec(`powershell -Command "${script.replace(/"/g, '\\"')}"`, (error) => {
      if (error) {
        resolve({ success: false, error: error.message });
      } else {
        resolve({ success: true, path: shortcutPath });
      }
    });
  });
}
function createMacShortcut(profile) {
  const desktopDir = path__namespace.join(os__namespace.homedir(), "Desktop");
  const shortcutPath = path__namespace.join(desktopDir, `${profile.label}.app`);
  const exePath = process.execPath;
  const scriptContent = `
    tell application "Terminal"
      do script "'${exePath}' --launch=${profile.appId}:${profile.themeId}"
    end tell
  `;
  const scriptPath = path__namespace.join(desktopDir, `${profile.id}.scpt`);
  fs__namespace.writeFileSync(scriptPath, scriptContent);
  return new Promise((resolve) => {
    require("child_process").exec(`osacompile -o "${shortcutPath}" "${scriptPath}"`, (error) => {
      fs__namespace.unlinkSync(scriptPath);
      if (error) {
        resolve({ success: false, error: error.message });
      } else {
        resolve({ success: true, path: shortcutPath });
      }
    });
  });
}
async function createLinuxShortcut(profile) {
  const appsDir = path__namespace.join(os__namespace.homedir(), ".local", "share", "applications");
  if (!fs__namespace.existsSync(appsDir)) {
    fs__namespace.mkdirSync(appsDir, { recursive: true });
  }
  const shortcutPath = path__namespace.join(appsDir, `${profile.id}.desktop`);
  const exePath = process.execPath;
  const content = `[Desktop Entry]
Type=Application
Name=${profile.label}
Exec="${exePath}" --launch=${profile.appId}:${profile.themeId}
Icon=${profile.icon || "utilities-terminal"}
Terminal=false
Categories=Utility;
`;
  fs__namespace.writeFileSync(shortcutPath, content);
  fs__namespace.chmodSync(shortcutPath, 493);
  return { success: true, path: shortcutPath };
}
const execFileAsync = util.promisify(child_process.execFile);
const API_ORIGIN = "https://api.dreamskin.cc";
const THEMES_ENDPOINT = `${API_ORIGIN}/v1/themes`;
const MAX_PACKAGE_BYTES = 32 * 1024 * 1024;
const PAGE_SIZE = 6;
let nextOffset = 0;
async function updateCommunityThemes() {
  const offset = nextOffset;
  const pageResult = await fetchRecentThemes(offset);
  const themes = pageResult.items;
  nextOffset = offset + themes.length >= pageResult.total ? 0 : offset + PAGE_SIZE;
  const themesDir = getUserThemesDir();
  const result = {
    checked: themes.length,
    imported: 0,
    skipped: 0,
    offset,
    page: Math.floor(offset / PAGE_SIZE) + 1,
    total: pageResult.total,
    nextOffset,
    failed: []
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
      result.failed.push({ id: metadata.id, name: metadata.name, error: error.message });
    }
  }
  return result;
}
async function fetchRecentThemes(offset) {
  const url = `${THEMES_ENDPOINT}?limit=${PAGE_SIZE}&offset=${offset}&sort=recent`;
  const response = await fetch(url, { signal: AbortSignal.timeout(3e4), redirect: "error" });
  if (!response.ok) throw new Error(`Theme list request failed: HTTP ${response.status}`);
  const body = await response.json();
  if (!Array.isArray(body.items) || body.items.length > PAGE_SIZE || !Number.isInteger(body.total) || body.total < 0) {
    throw new Error("Theme list response is invalid");
  }
  return { items: body.items, total: body.total };
}
async function downloadAndConvertTheme(metadata, themesDir, id) {
  validateMetadata(metadata);
  const tempRoot = fs__namespace.mkdtempSync(path__namespace.join(os__namespace.tmpdir(), "dream-work-theme-"));
  const archivePath = path__namespace.join(tempRoot, "theme.zip");
  const extractDir = path__namespace.join(tempRoot, "extract");
  const stageDir = path__namespace.join(themesDir, `.updating-${id}-${process.pid}`);
  try {
    fs__namespace.mkdirSync(extractDir);
    const downloadUrl = `${THEMES_ENDPOINT}/${metadata.id}/download`;
    const response = await fetch(downloadUrl, { signal: AbortSignal.timeout(12e4), redirect: "error" });
    if (!response.ok) throw new Error(`Theme download failed: HTTP ${response.status}`);
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length !== metadata.packageBytes) throw new Error(`Downloaded size mismatch: expected ${metadata.packageBytes}, got ${bytes.length}`);
    if (bytes.length > MAX_PACKAGE_BYTES) throw new Error("Theme package exceeds 32 MiB");
    const hash = crypto__namespace.createHash("sha256").update(bytes).digest("hex");
    if (hash !== metadata.packageSha256) throw new Error("Downloaded SHA-256 does not match metadata");
    fs__namespace.writeFileSync(archivePath, bytes, { flag: "wx" });
    await extractArchive(archivePath, extractDir);
    const sourceDir = findThemeRoot(extractDir);
    const sourceTheme = JSON.parse(fs__namespace.readFileSync(path__namespace.join(sourceDir, "theme.json"), "utf8"));
    const imageName = sourceTheme.image;
    if (typeof imageName !== "string" || path__namespace.basename(imageName) !== imageName || !/\.(png|jpe?g|webp)$/i.test(imageName)) {
      throw new Error("Theme image name is invalid");
    }
    const imagePath = path__namespace.join(sourceDir, imageName);
    const cssPath = path__namespace.join(sourceDir, "theme.css");
    if (!fs__namespace.existsSync(imagePath) || !fs__namespace.statSync(imagePath).isFile()) throw new Error("Theme image is missing");
    if (!fs__namespace.existsSync(cssPath) || !fs__namespace.statSync(cssPath).isFile()) throw new Error("theme.css is missing");
    const manifest = convertTheme(sourceTheme, metadata, id, `hero${path__namespace.extname(imageName).toLowerCase()}`);
    if (hasThemeContent(manifest.name, manifest.author, imagePath)) return false;
    fs__namespace.mkdirSync(stageDir);
    fs__namespace.copyFileSync(imagePath, path__namespace.join(stageDir, manifest.hero));
    fs__namespace.copyFileSync(cssPath, path__namespace.join(stageDir, "theme.css"));
    fs__namespace.writeFileSync(path__namespace.join(stageDir, "theme.json"), `${JSON.stringify(manifest, null, 2)}
`);
    fs__namespace.renameSync(stageDir, path__namespace.join(themesDir, id));
    return true;
  } finally {
    fs__namespace.rmSync(stageDir, { recursive: true, force: true });
    fs__namespace.rmSync(tempRoot, { recursive: true, force: true });
  }
}
async function extractArchive(archivePath, destination) {
  const { path7za } = require("7zip-bin");
  await execFileAsync(path7za, ["x", archivePath, `-o${destination}`, "-y"], { windowsHide: true, timeout: 12e4 });
}
function findThemeRoot(extractDir) {
  const candidates = [extractDir, ...fs__namespace.readdirSync(extractDir, { withFileTypes: true }).filter((item) => item.isDirectory()).map((item) => path__namespace.join(extractDir, item.name))];
  const matches = candidates.filter((candidate) => fs__namespace.existsSync(path__namespace.join(candidate, "theme.json")) && fs__namespace.existsSync(path__namespace.join(candidate, "theme.css")));
  if (matches.length !== 1) throw new Error("Theme ZIP must contain one theme root");
  return matches[0];
}
function validateMetadata(metadata) {
  if (!/^ver_[a-z0-9]{8,64}$/.test(metadata.id)) throw new Error("Theme version ID is invalid");
  if (!Number.isInteger(metadata.packageBytes) || metadata.packageBytes < 1 || metadata.packageBytes > MAX_PACKAGE_BYTES) throw new Error("Theme package size is invalid");
  if (!/^[a-f0-9]{64}$/.test(metadata.packageSha256)) throw new Error("Theme package SHA-256 is invalid");
}
function normalizeId(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").replace(/-+/g, "-") || "community-theme";
}
function convertTheme(source, metadata, id, hero) {
  const appearance = source.appearance === "dark" ? "dark" : "light";
  const base = appearance === "dark" ? "#10141c" : "#f4f7fa";
  const colors = source.colors || {};
  return {
    schemaVersion: 1,
    id,
    name: String(source.name || metadata.name || id).trim(),
    author: metadata.authorDisplayName || "DreamSkin Community",
    hero,
    colors: {
      accent: parseColor(colors.accent, "#4f8cff", base),
      secondary: parseColor(colors.secondary || colors.accentAlt, "#7ba7d8", base),
      surface: parseColor(colors.panelAlt || colors.panel || colors.background, base, base),
      text: parseColor(colors.text, appearance === "dark" ? "#eef2f7" : "#1f2937", base)
    },
    copy: null,
    apps: Object.fromEntries(APP_DEFINITIONS.filter((app) => !app.acceptsGenericThemes).map((app) => [app.id, { compat: true }]))
  };
}
function parseColor(value, fallback, base) {
  if (typeof value !== "string") return fallback;
  const hex = value.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i);
  if (hex) {
    let raw = hex[1];
    if (raw.length === 3) raw = raw.split("").map((char) => char + char).join("");
    return `#${raw.slice(0, 6).toLowerCase()}`;
  }
  const rgba = value.trim().match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/i);
  if (!rgba) return fallback;
  const alpha = rgba[4] === void 0 ? 1 : Number(rgba[4]);
  const background = parseColor(base, fallback, fallback).slice(1).match(/../g).map((part) => parseInt(part, 16));
  const rgb = [1, 2, 3].map((index) => Math.round(Number(rgba[index]) * alpha + background[index - 1] * (1 - alpha)));
  return `#${rgb.map((channel) => channel.toString(16).padStart(2, "0")).join("")}`;
}
let mainWindow = null;
electron.protocol.registerSchemesAsPrivileged([
  { scheme: "theme-asset", privileges: { standard: true, secure: true, supportFetchAPI: true, stream: true } }
]);
function createWindow() {
  mainWindow = new electron.BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path__namespace.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  if (process.env.VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path__namespace.join(__dirname, "../renderer/dist/index.html"));
  }
}
electron.app.whenReady().then(() => {
  electron.protocol.handle("theme-asset", (request) => {
    const id = decodeURIComponent(new URL(request.url).pathname.replace(/^\//, ""));
    const assetPath = getThemeAssetPath(id);
    if (!assetPath) return new Response("Theme asset not found", { status: 404 });
    return new Response(fs__namespace.readFileSync(assetPath), {
      headers: { "Content-Type": getThemeAssetMime(assetPath), "Cache-Control": "public, max-age=3600" }
    });
  });
  createWindow();
});
function getThemeAssetMime(assetPath) {
  const extension = path__namespace.extname(assetPath).toLowerCase();
  if (extension === ".jpg" || extension === ".jpeg") return "image/jpeg";
  if (extension === ".webp") return "image/webp";
  return "image/png";
}
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") electron.app.quit();
});
electron.app.on("activate", () => {
  if (electron.BrowserWindow.getAllWindows().length === 0) createWindow();
});
const launchArgs = process.argv.find((arg) => arg.startsWith("--launch="));
if (launchArgs) {
  const [, appAndTheme] = launchArgs.split("=");
  const [appId, themeId] = appAndTheme.split(":");
  if (appId && themeId) {
    console.log(`[main] Received launch args: ${appId}:${themeId}`);
    setTimeout(async () => {
      try {
        const result = await launchApp(appId, themeId);
        if (result.success) {
          console.log(`[main] Launched ${appId} with theme ${themeId} on port ${result.port}`);
          console.log(`[main] Starting theme injection for ${appId}:${themeId} on port ${result.port}`);
          const injectResult = await applyTheme(appId, themeId, result.port);
          console.log(`[main] Injection result:`, injectResult);
        } else {
          console.error(`[main] Failed to launch ${appId}: ${result.error}`);
        }
      } catch (e) {
        console.error("[main] Launch error:", e);
      }
    }, 1e3);
  }
}
electron.ipcMain.handle("discover-apps", async () => {
  return discoverApps();
});
electron.ipcMain.handle("launch-app", async (_event, appId, themeId) => {
  return launchApp(appId, themeId);
});
electron.ipcMain.handle("apply-theme", async (_event, appId, themeId, port) => {
  return applyTheme(appId, themeId, port);
});
electron.ipcMain.handle("create-shortcut", async (_event, profile) => {
  const fullProfile = {
    ...profile,
    id: `${profile.appId}-${profile.themeId}-${Date.now()}`
  };
  return createShortcut(fullProfile);
});
electron.ipcMain.handle("list-themes", async (_event, appId) => {
  return listThemes(appId).map((t) => ({
    id: t.id,
    name: t.name,
    author: t.author,
    hero: getThemeAssetUrl(t.id)
  }));
});
electron.ipcMain.handle("update-themes", async () => updateCommunityThemes());
electron.ipcMain.handle("get-status", async (_event, appId, port) => {
  var _a;
  const running = await isAppRunning(appId);
  if (!running) return { installed: false, menu: false, targets: 0, running: false };
  return {
    ...await getStatus(appId, port || ((_a = getAppDefinition(appId)) == null ? void 0 : _a.defaultPort) || 9339),
    running: true
  };
});
electron.ipcMain.handle("remove-skin", async (_event, appId, port) => {
  return removeSkin(appId, port);
});
electron.ipcMain.handle("debug-targets", async (_event, port) => {
  try {
    const response = await fetch(`http://127.0.0.1:${port}/json/list`, {
      signal: AbortSignal.timeout(5e3)
    });
    const all = await response.json();
    return {
      success: true,
      count: all.length,
      raw: all,
      targets: all.map((t) => ({
        id: t.id,
        type: t.type,
        url: t.url,
        title: t.title,
        webSocketDebuggerUrl: t.webSocketDebuggerUrl
      }))
    };
  } catch (e) {
    return { success: false, error: e.message };
  }
});
