"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("dreamWork", {
  discoverApps: () => electron.ipcRenderer.invoke("discover-apps"),
  launchApp: (appId, themeId) => electron.ipcRenderer.invoke("launch-app", appId, themeId),
  applyTheme: (appId, themeId, port) => electron.ipcRenderer.invoke("apply-theme", appId, themeId, port),
  removeSkin: (appId, port) => electron.ipcRenderer.invoke("remove-skin", appId, port),
  createShortcut: (profile) => electron.ipcRenderer.invoke("create-shortcut", profile),
  listThemes: (appId) => electron.ipcRenderer.invoke("list-themes", appId),
  updateThemes: () => electron.ipcRenderer.invoke("update-themes"),
  getStatus: (appId, port) => electron.ipcRenderer.invoke("get-status", appId, port),
  debugTargets: (port) => electron.ipcRenderer.invoke("debug-targets", port)
});
