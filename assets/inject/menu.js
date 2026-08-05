((cssText, themeId, themeName, version) => {
  const STYLE_ID = "dream-work-style";
  const MENU_ID = "dream-work-menu";

  let style = document.getElementById(STYLE_ID);
  if (!style) {
    style = document.createElement("style");
    style.id = STYLE_ID;
    document.head.appendChild(style);
  }
  style.textContent = cssText;

  document.getElementById(MENU_ID)?.remove();
  const root = document.createElement("div");
  root.id = MENU_ID;
  root.style.cssText = "position:fixed;bottom:16px;right:16px;z-index:2147483000;font:500 13px/1.4 system-ui;user-select:none;";

  const button = document.createElement("button");
  button.type = "button";
  button.title = "Dream Work Theme";
  button.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#17344f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 1 1 0-18c4.97 0 9 3.58 9 8 0 2.5-2 4-4 4h-2a2 2 0 0 1 0-4h.5a3.5 3.5 0 1 0-3.5 3.5c.5 0 .9.5.9 1.5V21z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="12" cy="7.5" r="1"/><circle cx="16.5" cy="10.5" r="1"/></svg>';
  button.style.cssText = "display:block;margin-left:auto;width:36px;height:36px;border-radius:10px;border:1px solid rgba(0,0,0,.12);background:rgba(255,255,255,.92);backdrop-filter:blur(10px);box-shadow:0 3px 12px rgba(0,0,0,.2);cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;";

  const panel = document.createElement("div");
  panel.style.cssText = "display:none;margin-bottom:8px;min-width:200px;padding:6px;border-radius:12px;border:1px solid rgba(0,0,0,.1);background:rgba(255,255,255,.94);backdrop-filter:blur(16px);box-shadow:0 10px 30px rgba(0,0,0,.18);color:#17344f;";

  const themes = [{ id: themeId, name: themeName }];
  const rows = new Map();
  const paint = (id) => {
    for (const [rowId, row] of rows) {
      row.style.background = rowId === id ? "rgba(36,201,215,.16)" : "transparent";
      row.style.fontWeight = rowId === id ? "700" : "500";
    }
  };

  for (const theme of themes) {
    const item = document.createElement("div");
    item.style.cssText = "display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;cursor:pointer;";
    const dot = document.createElement("span");
    dot.style.cssText = "width:10px;height:10px;border-radius:50%;flex:none;background:#24c9d7;";
    const text = document.createElement("span");
    text.textContent = theme.name;
    item.append(dot, text);
    item.addEventListener("mouseenter", () => { if (item.style.fontWeight !== "700") item.style.background = "rgba(0,0,0,.05)"; });
    item.addEventListener("mouseleave", () => paint(document.documentElement.dataset.dreamTheme ?? null));
    item.addEventListener("click", () => {
      document.documentElement.dataset.dreamTheme = theme.id;
      paint(theme.id);
      panel.style.display = "none";
    });
    panel.appendChild(item);
    rows.set(theme.id, item);
  }

  const native = document.createElement("div");
  native.style.cssText = "display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;cursor:pointer;";
  native.innerHTML = '<span style="width:10px;height:10px;border-radius:50%;flex:none;background:rgba(0,0,0,.24);"></span><span>Native</span>';
  native.addEventListener("click", () => {
    document.getElementById(STYLE_ID)?.remove();
    delete document.documentElement.dataset.dreamTheme;
    panel.style.display = "none";
  });
  native.addEventListener("mouseenter", () => { native.style.background = "rgba(0,0,0,.05)"; });
  native.addEventListener("mouseleave", () => { native.style.background = "transparent"; });
  panel.appendChild(native);
  rows.set(null, native);

  button.addEventListener("click", () => {
    panel.style.display = panel.style.display === "none" ? "block" : "none";
  });

  root.append(panel, button);
  document.body.appendChild(root);
  document.documentElement.dataset.dreamTheme = themeId;

  // Expose API
  window.__dreamWork = {
    setTheme: (id: string, name: string) => {
      // Future: dynamically switch theme
    }
  };
})();
