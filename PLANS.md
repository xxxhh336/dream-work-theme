# Dream Work Theme — 多应用主题切换工具项目计划

> 历史文档：本文前半部分是项目早期设计与实施计划，包含未采用、已改名或尚未实现的结构与功能。当前使用方法、支持应用、构建命令和目录结构以 `README.md`、`README_EN.md` 及实际代码为准；第 9 节记录当前实现状态。请勿将早期待办清单视为当前项目状态。

## 1. 目标

构建一个 **跨平台桌面应用**，支持给市面上主流 Electron 或定制 Chromium Work 工具（WorkBuddy、TRAE Work、QoderWork、CatPaw、ZCode、千问办公、Codex / ChatGPT Desktop、HanaAgent、Kimi Work、OpenCode Desktop、豆包 Desktop、AgnesCode、MiniMax Code、AstronClaw、StepFun、讯飞星火、DeepSeek Harness 等）一键切换主题。DeepSeek Harness 特指由 [anywhere-labs/deepseek-harness-desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) 仓库构建的桌面端。核心机制是通过 CDP 修改运行中的渲染进程；Windows 版 AgnesCode 的原生 Window Controls Overlay 是当前唯一需要备份并补丁目标安装文件的例外。

交付物：
- 完整 Electron 项目
- 默认 12 套主题
- 自定义主题制作 SKILL
- 当前注册 17 款主流 Work 工具
- 每款工具支持创建"主题+应用"桌面快捷启动图标
- 注入后右下角显示统一主题菜单按钮（切换/上传/还原）
- 支持 macOS / Windows / Linux 三端

---

## 2. 调研结论

### 现有项目能力对比

| 能力 | workbuddy-dream-theme | codex-themes-main | dream-work-theme（目标） |
|------|----------------------|-------------------|--------------------------|
| 注入方式 | CDP（Node 全局 WebSocket） | CDP（Electron 内置） | CDP（统一引擎） |
| 主题变量 | `--cb-*` 硬编码覆盖 | `--ds-*` 变量系统 | 每应用独立的变量映射层 |
| 布局系统 | 固定 CSS | 多布局类（dream-banner 等） | 每应用布局适配器 |
| 持久化 | macOS launchd + localStorage | 本地主题库 + 云端社区 | 每应用独立状态文件 |
| 跨平台 | macOS 脚本，Windows 复刻中 | 仅 macOS | **macOS + Windows + Linux** |
| 多应用 | 仅 WorkBuddy | 仅 Codex | **多应用统一管理** |

### 技术可行性

当前目标应用主要为 Electron 构建，豆包 Desktop 是定制 Chromium 应用。大部分应用支持 `--remote-debugging-port` 或 `DevToolsActivePort`，可以统一使用 CDP 注入且不修改目标安装目录。AgnesCode 正式版会主动删除普通远程调试参数，需要通过其 Playwright 调试入口开启 CDP；Windows 原生窗口按钮背景由主进程 `setTitleBarOverlay()` 绘制，因此还需要一个受控、可备份的 fuse wire 与 ASAR 等长补丁。

---

## 3. 架构设计

### 3.1 项目结构

```
dream-work-theme/
├── package.json
├── electron/                  # Electron 主进程
│   ├── main.ts               # 入口
│   ├── preload.ts            # 预加载脚本
│   └── manager/              # 应用管理器
│       ├── discovery.ts      # 发现已安装的目标应用
│       ├── launcher.ts       # 以调试端口启动应用
│       ├── injector.ts       # CDP 注入引擎
│       ├── watcher.ts        # 守护进程（保活 + 自动重注入）
│       └── shortcuts.ts      # 桌面快捷方式生成器（三端）
├── renderer/                 # 渲染进程（UI）
│   ├── App.tsx
│   ├── Gallery.tsx           # 主题画廊
│   ├── CustomEditor.tsx      # 自定义主题编辑器
│   ├── SkillLoader.tsx       # SKILL 加载器
│   └── ShortcutPanel.tsx     # 快捷方式管理面板
├── shared/
│   ├── types.ts              # 通用类型定义
│   ├── theme-schema.ts       # 主题 JSON Schema
│   └── app-profiles/         # 应用配置
│       ├── workbuddy.ts
│       ├── codex.ts
│       ├── zcode.ts
│       └── ...
├── themes/                   # 内置主题
│   ├── lisa/
│   ├── moonlit-immortal/
│   ├── starcap-teemo/
│   ├── blue-window/
│   └── minimal-focus/
├── skills/                   # 主题制作 SKILL
│   └── custom-theme-maker/
│       ├── SKILL.md
│       ├── prompt-templates/
│       └── validators/
├── assets/
│   └── inject/               # 注入模板
│       ├── base.css          # 通用 CSS 变量层
│       └── menu.js           # 通用主题菜单（右下角悬浮按钮）
└── dist/                     # 构建产物
```

### 3.2 核心抽象

#### AppProfile（应用配置）

每个目标应用定义一个 `AppProfile`：

```typescript
interface AppProfile {
  id: string;                    // "workbuddy" | "codex" | "zcode" ...
  name: string;                  // 显示名称
  platforms: {
    darwin?: {
      bundleId: string;          // "com.workbuddy.workbuddy"
      appName: string;           // "WorkBuddy.app"
    };
    win32?: {
      exeNames: string[];        // ["WorkBuddy.exe"]
      installPaths: string[];    // 常见安装路径
    };
    linux?: {
      exeNames: string[];        // ["workbuddy"]
      desktopFiles: string[];    // ["workbuddy.desktop"]
    };
  };
  cdp: {
    defaultPort: number;         // 9339
    rendererUrlHint: string;     // "renderer/index.html"
  };
  theme: {
    cssVariables: string[];      // ["--cb-bg-primary", ...]
    shellAttr: string;           // "data-application-name" 或 "data-dream-shell"
    surfaces: SurfaceAdapter[];  // 需要透明的容器
  };
}
```

#### SurfaceAdapter（布局适配器）

不同应用的 DOM 结构不同，需要适配器：

```typescript
interface SurfaceAdapter {
  id: string;
  description: string;
  detect: () => boolean;         // 当前 DOM 是否匹配此布局
  inject: (css: string) => void; // 注入额外布局 CSS
}
```

#### ThemeManifest（主题清单）

```json
{
  "schemaVersion": 1,
  "id": "lisa",
  "name": "Lisa",
  "author": "Built-in",
  "hero": "hero.png",
  "colors": {
    "accent": "#24c9d7",
    "secondary": "#ef8fd3",
    "surface": "#f7fbff",
    "text": "#17344f"
  },
  "copy": {
    "brand": "Dream Theme",
    "headline": "Make it yours"
  },
  "apps": {
    "workbuddy": { "compat": true },
    "codex": { "compat": true, "layout": "dream-banner" },
    "zcode": { "compat": false }
  }
}
```

#### ShortcutProfile（快捷启动配置）

每个快捷方式绑定 **一个应用 + 一个主题**：

```typescript
interface ShortcutProfile {
  id: string;                    // "workbuddy-lisa"
  appId: string;                 // "workbuddy"
  themeId: string;               // "lisa"
  label: string;                 // "WorkBuddy - Lisa"
  icon?: string;                 // 自定义图标路径
}
```

---

## 4. 实现步骤

### Phase 1：项目脚手架与核心引擎（第 1-2 天）

1. 初始化 Electron + Vite + TypeScript 项目
2. 实现 `cdp.ts`：复用现有 workbuddy 的 CDP 连接逻辑，但抽象为通用引擎
3. 实现 `discovery.ts`：跨平台发现目标应用（进程检测 + 路径扫描）
4. 实现 `launcher.ts`：以调试端口启动/重启目标应用
5. 实现 `theme-store.ts`：主题扫描、校验、加载（复用 schema.mjs 逻辑）

### Phase 2：应用适配层（第 3-4 天）

1. 实现 `workbuddy` profile（复用现有注入逻辑）
2. 实现 `codex` profile（读取 codex-themes-main 的 inject 逻辑，适配通用引擎）
3. 实现 `zcode` profile（调研其 DOM 结构后编写）
4. 实现 `千问办公` profile
5. 实现 `CatPaw` profile
6. 编写 `base.css`：通用变量映射（每应用变量 → 统一变量）
7. 实现 `menu.js`：通用主题菜单（右下角悬浮按钮，所有应用共用同一套菜单 UI）

### Phase 3：桌面快捷启动系统（第 5-6 天）

1. 实现 `shortcuts.ts`：桌面快捷方式生成器
   - **macOS**：生成 `.app` 包装脚本或 Automator 应用，带主题参数启动
   - **Windows**：生成 `.lnk` 快捷方式，指向 `dream-work-theme.exe --launch <appId> --theme <themeId>`
   - **Linux**：生成 `.desktop` 文件，放入 `~/.local/share/applications/`
2. 实现 `--launch` CLI 参数：接收 appId + themeId，自动启动应用并注入主题
3. 实现快捷方式管理面板（创建/删除/刷新快捷方式）
4. 快捷方式图标自动从目标应用提取

### Phase 4：主题系统（第 7-8 天）

1. 制作 5 套默认主题（从 workbuddy 和 codex-themes 精选/改编）：
   - **Lisa**（亮色人像，workbuddy 已有）
   - **Moonlit Immortal**（深色东方幻想，codex 已有）
   - **Blue Window**（复古 Messenger，codex 已有）
   - **Starcap Teemo**（明亮幻想，codex 已有）
   - **Minimal Focus**（极简灰白，新建）
2. 实现主题画廊 UI（网格预览 + 一键应用）
3. 实现自定义主题编辑器（取色 + 实时预览）
4. 实现主题导入/导出（`.dream-theme` 包）

### Phase 5：SKILL 系统（第 9 天）

1. 编写 `SKILL.md`：定义自定义主题制作流程
   - 输入：用户描述 / 参考图
   - 输出：`theme.json` + `hero.png`
   - 验证：像素级验收（复用 CONTRIBUTING.md 标准）
2. 编写 `prompt-templates/`：不同应用的主题生成提示词
3. 编写 `validators/`：自动校验主题合规性

### Phase 6：持久化与守护（第 10 天）

1. 实现状态持久化（每应用记住上次选中主题）
2. 实现跨平台守护进程：
   - **macOS**：launchd agent
   - **Windows**：计划任务
   - **Linux**：systemd --user service
3. 实现自动重注入（应用重启后恢复主题）

### Phase 7：测试与打包（第 11 天）

1. 在真实环境测试所有 5 款应用（macOS / Windows / Linux）
2. 修复 CDP 兼容性问题
3. 打包为 `.dmg`（macOS）、`.exe`（Windows）、`.AppImage`（Linux）
4. 编写 README 和用户文档

---

## 5. 关键技术决策

### 5.1 为什么不用单一 CSS？

每个 Electron 应用的 DOM 结构、CSS 变量命名、表面元素都不同。直接注入一套 CSS 到所有应用会导致样式错乱。因此采用 **变量映射层**：主题提供统一的语义变量，每个应用有独立的映射表将其转换为原生变量。

### 5.2 为什么保留独立引擎而非调用 CLI？

虽然可以复用现有的 `cli.mjs`，但多应用场景需要更复杂的生命周期管理（发现、启动、监控、重注入）。Electron 主进程可以直接管理这些，比 CLI + 外部守护进程更可靠。

### 5.3 主题兼容性策略

- 当前采用“应用注册表默认 + 主题 manifest 显式覆盖”策略。
- `theme.json` 中存在 `apps[appId].compat` 时，以显式值为准。
- 未声明应用时，读取 `app-registry.ts` 中对应应用的 `acceptsGenericThemes`。
- 接受通用主题的新应用无需批量改写历史 `theme.json`；只有不兼容或需要特殊 `layout` 时才写显式覆盖。
- 不兼容的主题会自动跳过，画廊只显示当前应用可用主题。

---

## 6. 风险与缓解

| 风险 | 影响 | 缓解 |
|------|------|------|
| 目标应用更新导致 DOM 变化 | 注入失效 | 每应用独立的 `SurfaceAdapter`，应用更新后只需更新适配器 |
| CDP 端口冲突 | 无法注入 | 自动端口扫描（9339-9399），类似现有脚本 |
| 不同平台路径差异 | 启动失败 | `AppProfile` 定义平台特定路径，运行时 fallback |
| 应用不支持 `--remote-debugging-port` | 无法注入 | 检测启动参数，若不支持则提示用户 |

---

## 7. 文件清单（需创建/修改）

### 新建文件

```
dream-work-theme/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── electron-builder.yml
├── electron/main.ts
├── electron/preload.ts
├── electron/manager/discovery.ts
├── electron/manager/launcher.ts
├── electron/manager/injector.ts
├── electron/manager/watcher.ts
├── electron/manager/app-profiles/
│   ├── index.ts
│   ├── workbuddy.ts
│   ├── codex.ts
│   ├── zcode.ts
│   ├── qwen-office.ts
│   └── catpaw.ts
├── renderer/App.tsx
├── renderer/Gallery.tsx
├── renderer/CustomEditor.tsx
├── renderer/SkillLoader.tsx
├── shared/types.ts
├── shared/theme-schema.ts
├── themes/
│   ├── lisa/theme.json + hero.png
│   ├── moonlit-immortal/theme.json + hero.png
│   ├── blue-window/theme.json + hero.png
│   ├── starcap-teemo/theme.json + hero.png
│   └── minimal-focus/theme.json + hero.png
├── skills/custom-theme-maker/
│   ├── SKILL.md
│   ├── prompt-templates/
│   │   ├── workbuddy.md
│   │   ├── codex.md
│   │   └── generic.md
│   └── validators/
│       ├── schema-check.ts
│       └── pixel-check.ts
└── assets/inject/
    ├── base.css
    └── menu.js
```

### 需调研的应用

1. **ZCode**（字节跳动）：确认是否为 Electron，查找 bundle ID / exe 名称 / DOM 特征
2. **千问办公**（阿里）：同上
3. **CatPaw**：同上

---

## 8. 下一步

请确认：
1. 是否接受此架构？
2. 是否有偏好的技术栈（如 Tauri 替代 Electron）？
3. 是否需要我立即开始 Phase 1 实现？

---

## 9. 当前实现状态与实机适配分析

> 本节记录 2026-08-02 至 2026-08-15 在 Windows 实机上的适配结果。前文是项目早期计划，其中应用数量、主题数量、目录结构、主题兼容模型和 CDP 端口策略已有变化；后续维护应以本节和当前代码为准。

### 9.1 当前支持范围

项目目前注册以下 17 款 Work 类桌面应用：

| 应用 ID | 显示名称 | 应用类型 | 默认 CDP 端口 | 当前状态 |
|---------|----------|----------|---------------|----------|
| `workbuddy` | WorkBuddy | WorkBuddy 专用结构 | `9339` | 已适配 |
| `trae-work` | TRAE Work | VS Code Work 派生结构 | `9341` | 已完成实机 CDP 验证 |
| `qoder-work` | QoderWork | 通用 Electron 工作台 | `9342`，运行时可能改为随机端口 | 已完成实机 CDP 验证 |
| `catpaw` | CatPaw | 通用 Electron 工作台 | `9343` | 已完成实机 CDP 验证 |
| `zcode` | ZCode | 通用 Electron 工作台 | `9344` | 已完成实机 CDP 验证 |
| `qwen-office` | 千问办公 | 通用 Electron 工作台 | `9345`，运行时可能改为随机端口 | 已完成实机 CDP 验证 |
| `hana-agent` | HanaAgent | 通用 Electron 工作台，专属注入策略 | `9346` | 已适配稳定 renderer 等待、持续守护和还原状态 |
| `kimi` | Kimi Work | Work/Chat 双 renderer，专属 CSS 与守护策略 | `9347` | 已适配 Windows Explorer 启动、双 target 注入、自动重注入和透明层 |
| `opencode` | OpenCode | Electron 桌面应用，专属透明层 | `9348`，运行时读取 `DevToolsActivePort` | 已验证应用、浮动菜单切换、还原和 CLI 进程隔离 |
| `doubao` | 豆包 | 定制 Chromium 桌面应用，专属 CSS 与导航守护 | `9349` | 已验证应用、切换、还原、暗色文字、技能页、AI 创作页和对话透明层 |
| `agnes-code` | AgnesCode | Electron 桌面应用，Playwright CDP、专属 CSS 与原生标题栏补丁 | `9350` | 已验证应用、切换、主页/功能页/设置页透明层以及原生窗口按钮透明背景 |
| `minimax-code` | MiniMax Code | Electron 桌面应用，专属页面透明层与原生深浅模式还原 | `9351` | 已验证背景图、侧栏、对话/新建任务输入框、技能/功能页主体以及深浅模式还原 |
| `astronclaw` | AstronClaw（讯飞星辰） | Electron 桌面应用，专属透明层、动态端口回退与设置 API 原生模式还原 | 首选 `9352`，不可绑定时自动顺延 | 已验证背景图、侧栏、新建任务/对话、我的技能/灵感广场以及深浅模式还原 |
| `stepfun` | StepFun（阶跃 AI） | Electron 桌面应用，多 WebContents、动态端口、专属连续背景与多 Tab 守护 | 注册首选 `9353`，实际读取 `%APPDATA%\stepfun-desktop\DevToolsActivePort` | 已验证聊天页、Tab/导航栏、新建 Tab、会员页、连续背景和原生深色还原 |
| `sparkdesk` | SparkDesk（讯飞星火） | Electron 桌面应用，多 WebContents、固定端口、专属连续背景与深浅色控件映射 | `9354` | 已验证主壳、聊天/新建任务、多 Tab、星火设置页、深浅主题控件和多页面还原 |
| `deepseek-harness` | DeepSeek Harness | `anywhere-labs/deepseek-harness-desktop` 构建，Electron 桌面壳、本地 HTTP renderer、专属透明层与原生 palette 同步 | `9355` | 已验证发现、启动、整窗背景、侧栏/主体透明层、输入区、居中设置浮层及深浅主题 token 同步 |
| `codex` | Codex | Codex 专用结构 | `9340` | 已适配 |

源码 `themes/` 当前包含 345 份 `theme.json`。运行时会按主题名称、作者和 hero 内容去重，因此实际菜单/画廊数量可能略少于 manifest 数量。

主题兼容不再依赖为每个应用批量写入 `theme.json.apps`。`listThemes(appId)` 先读取 manifest 的显式 `compat`，未声明时再使用应用注册表的 `acceptsGenericThemes` 默认值。当前 17 款应用均接受通用主题；主题仍可用 `compat:false` 拒绝某款应用，或通过 `layout` 提供应用特例。

### 9.2 当前应用注册架构

应用发现、启动和注入元数据集中在：

`electron/manager/app-registry.ts`

当前使用的注册结构为：

```typescript
interface AppDefinition {
  id: string;
  name: string;
  exeNames: string[];
  installPaths: string[];
  processName: string;
  defaultPort: number;
  rendererHints: string[];
  kind: 'workbuddy' | 'codex' | 'vscode-work' | 'generic-work';
  devToolsActivePort?: string;
  windowsPathScopedKill?: boolean;
  acceptsGenericThemes: boolean;
  darwin?: { appBundles: string[]; executableNames: string[] };
  linux?: { executableNames: string[]; desktopFiles: string[] };
}
```

字段职责：

| 字段 | 用途 |
|------|------|
| `id` | 主题兼容声明、IPC、状态管理和快捷方式使用的稳定应用标识 |
| `name` | 管理器 UI 中显示的名称 |
| `exeNames` | Windows 安装发现和启动时尝试的可执行文件名称 |
| `installPaths` | 常见安装目录；允许用户目录、Program Files 和本机实际目录并存 |
| `processName` | 重启应用前需要终止的主进程名称 |
| `defaultPort` | 首选 CDP 端口，避免多个 Work 应用相互占用同一端口 |
| `rendererHints` | 从 `/json/list` 中筛选主渲染页面的 URL 特征 |
| `kind` | 决定使用哪一类 CSS 生成器 |
| `devToolsActivePort` | 应用强制使用随机 CDP 端口时，用于读取实际端口 |
| `windowsPathScopedKill` | Windows 重启应用时按完整 executable 路径结束进程，避免误杀同名 CLI 或其他安装 |
| `acceptsGenericThemes` | manifest 未显式声明应用时，是否默认接受通用主题 |
| `darwin` | macOS app bundle 和内部 executable 候选 |
| `linux` | Linux executable 与 `.desktop` 文件候选 |

相较早期每款应用一个静态 `AppProfile` 文件的设计，当前注册表同时作为发现、启动、进程管理、平台候选和主题默认兼容的单一信息源，减少跨模块重复维护。

### 9.3 安装发现分析

#### WorkBuddy

常见可执行文件：

`WorkBuddy.exe`

扫描位置包括：

- `%LOCALAPPDATA%\workbuddy`
- `%LOCALAPPDATA%\Programs\workbuddy`
- `%ProgramFiles%\WorkBuddy`
- `%ProgramFiles(x86)%\WorkBuddy`
- `D:\Program Files\WorkBuddy`

#### Codex

可能的可执行文件：

- `Codex.exe`
- `ChatGPT.exe`

除传统安装目录外，还保留 Microsoft Store `OpenAI.Codex` Appx 探测逻辑。WindowsApps 目录可能受 ACL 限制，因此使用 PowerShell `Get-AppxPackage` 作为后备方案。

#### TRAE Work

本机注册表显示名称为 `TRAE Work CN`，实际安装目录和主程序为：

```text
D:\Program Files\TRAE SOLO CN\TRAE SOLO CN.exe
```

程序元数据：

- Product name：`TRAE SOLO CN`
- App version：`0.1.43`
- Electron/内核版本线：基于 VS Code `1.107.1`
- App User Model ID：`ByteDance.TraeSoloCN`
- 应用协议：`solo-cn`

安装包包含解包后的 `resources/app`，不是普通单文件 `app.asar`。`product.json` 明确显示其为 VS Code/ICube 派生应用。

#### QoderWork

本机安装位置：

```text
D:\Program Files\QoderWork CN\QoderWork CN.exe
```

程序元数据：

- Product name：`QoderWork CN`
- Version：`0.9.12`
- App User Model ID：`com.qoder.work.cn`
- Electron 应用入口：`resources/app.asar`

#### CatPaw

本机安装位置：

```text
%APPDATA%\Local\CatPaw\CatPaw.exe
```

程序元数据：

- Product name：`CatPaw`
- Version：`2026.0726.2206`
- App User Model ID：`com.catx.catpaw`
- Electron 应用入口：`resources/app.asar`
- 用户数据目录：`%APPDATA%\catpaw-moon`

#### ZCode

本机安装位置：

```text
D:\Program Files\ZCode\ZCode.exe
```

程序元数据：

- Product name：`ZCode`
- 安装版本：`3.4.2`
- Electron 应用入口：`resources/app.asar`
- 用户数据目录：`%APPDATA%\ZCode`

#### 千问办公

开始菜单快捷方式指向更新器入口：

```text
D:\Program Files\QwenWorkCN\Launcher.exe
```

实际 Electron 主程序位于版本目录，例如：

```text
D:\Program Files\QwenWorkCN\0.1.1-26072818\QwenWorkCN.exe
```

因此发现和启动逻辑不能写死版本目录。当前实现会扫描 `QwenWorkCN` 下的子目录，按带数字的目录名倒序选择最新版本，再寻找 `QwenWorkCN.exe`。

程序元数据：

- Product name：`QwenWorkCN`
- Version：`0.1.1`
- App User Model ID：`com.qwen.work.cn`
- Electron 应用入口：版本目录下的 `resources/app.asar`
- 用户数据目录：`%APPDATA%\QwenWorkCN`

#### HanaAgent

常见可执行文件：

```text
HanaAgent.exe
```

扫描位置包括：

- `%LOCALAPPDATA%\Programs\HanaAgent`
- `%ProgramFiles%\HanaAgent`
- `%ProgramFiles(x86)%\HanaAgent`

HanaAgent 启动时会创建并替换 renderer，不能在 CDP 端口刚开放时立即把第一个 target 视为最终主页面。当前启动器会继续等待匹配 `.hanako/artifacts/renderer/` 的 renderer target，并要求同一个 target 保持稳定后再进入注入流程。

#### Kimi Work

Windows 实机安装位置：

```text
D:\Program Files\Kimi\Kimi.exe
```

Kimi Windows 版会检查父进程。若由 Dream Work Theme 的 Node/Electron 进程或短生命周期 PowerShell 直接 `spawn`，Kimi 会进入 `dev parent watcher` 模式，不注册内部 `app://` 协议，并在父进程退出后以 `dev-parent-process-gone` 关闭。当前 Windows 启动流程为：

1. PowerShell 只创建带 `--remote-debugging-port=9347` 参数的临时 `.lnk`。
2. PowerShell 完全退出。
3. 由现有 `explorer.exe` 打开快捷方式，使 Explorer 成为 Kimi 的真实父进程。
4. 临时快捷方式延迟删除。

macOS 和 Linux 不执行 PowerShell、`.lnk` 或 Explorer 逻辑，使用与 HanaAgent 等应用相同的 detached spawn。注册表候选包括 `/Applications/Kimi.app/Contents/MacOS/Kimi`、Linux `kimi`/`Kimi` 和 `kimi.desktop`；这些非 Windows 路径需要对应平台安装包继续实机验证。

#### OpenCode Desktop

Windows 实机安装位置：

```text
%LOCALAPPDATA%\Programs\@opencode-aidesktop\OpenCode.exe
```

程序元数据与运行特征：

- Electron `42.0.0`
- 主 renderer：`oc://renderer/index.html`
- 用户数据目录：`%APPDATA%\ai.opencode.desktop`
- 运行时端口文件：`%APPDATA%\ai.opencode.desktop\DevToolsActivePort`
- 桌面程序和 Node 全局安装的 `opencode` CLI 都可能使用 `OpenCode.exe` 进程名

因此 OpenCode 使用 `windowsPathScopedKill`。启动器只结束完整路径匹配桌面安装目录的进程，不会终止 `node_modules\opencode-ai\bin\opencode.exe` 等同名 CLI。

#### 豆包 Desktop

Windows 外层入口：

```text
%LOCALAPPDATA%\Doubao\Application\Doubao.exe
```

实际运行程序：

```text
%LOCALAPPDATA%\Doubao\Application\app\Doubao.exe
```

豆包不是标准 Electron `app.asar` 应用，而是定制 Chromium `147.0.7727.149`。用户数据目录为 `%LOCALAPPDATA%\Doubao\User Data`。启动和路径限定进程管理直接使用 `Application\app\Doubao.exe`，避免外层更新器入口丢失调试参数。

#### MiniMax Code

Windows 实机安装位置：

```text
D:\Program Files\MiniMax Code\MiniMax Code.exe
```

程序元数据与运行特征：

- 版本：`3.0.60`
- Electron/Chromium：Chrome `140.0.7339.240`
- 应用入口：`resources/app.asar`
- 主 renderer：`app://./archon`
- 固定 CDP 端口：`9351`
- 辅助页面包括 `react-screenshots/dist/electron.html`，不能作为主题注入目标

MiniMax Code 使用 `windowsPathScopedKill`，Windows 重启时按安装路径结束进程。macOS 注册候选为 `MiniMax Code.app`，Linux 注册候选为 `minimax-code` / `MiniMax Code` 和 `minimax-code.desktop`；非 Windows 候选尚待对应平台安装样本验证。

#### AstronClaw（讯飞星辰）

Windows 实机安装位置：

```text
D:\Program Files\AstronClaw\AstronClaw.exe
```

程序元数据与运行特征：

- 版本：`2.0.6`
- 包名：`astrondesktop`
- App User Model ID：`cn.xfyun.astrondesktop`
- Electron 应用入口：`resources/app.asar`
- 主 renderer：`file:///.../resources/app.asar/out/renderer/index.html`
- 页面标题：`AstronDesktop`
- 用户数据目录：`%APPDATA%\astrondesktop`
- 首选 CDP 端口：`9352`

AstronClaw 使用 `windowsPathScopedKill`，Windows 重启时只结束安装路径匹配的 `AstronClaw.exe`。macOS 注册候选为 `AstronClaw.app`，Linux 注册候选为 `astronclaw` / `AstronClaw` 和 `astronclaw.desktop`；非 Windows 候选尚待对应平台安装样本验证。

#### StepFun（阶跃 AI）

Windows 实机安装位置：

```text
D:\Program Files\StepFun\StepFun\StepFun.exe
```

程序元数据与运行特征：

- 版本：`0.3.22`
- Electron：`37.3.0`
- 应用入口：`resources/app.asar`
- 用户数据目录：`%APPDATA%\stepfun-desktop`
- 运行时端口文件：`%APPDATA%\stepfun-desktop\DevToolsActivePort`
- 顶部宿主页：`app://ui/pages/browser/index.html`
- 聊天页：`app://chat-web/chats/...`
- 会员页：`https://chat.stepfun.com/subscription?from=browser-top-right-button`

StepFun 使用 `windowsPathScopedKill`，Windows 重启时只结束安装路径匹配的 `StepFun.exe`。客户端可能忽略传入的 `--remote-debugging-port=9353` 并自行写入动态端口；读取端口文件后必须验证 CDP 服务和目标 URL。首次启动通常只进入托盘，动态端口就绪后需要再次激活主程序才会创建聊天窗口。macOS 注册候选为 `StepFun.app`，Linux 注册候选为 `stepfun` / `StepFun` 和 `stepfun.desktop`；非 Windows 候选尚待安装样本验证。

#### SparkDesk（讯飞星火）

Windows 实机安装位置：

```text
D:\Program Files\SparkDesk\SparkDesk.exe
```

程序元数据与运行特征：

- 版本：`2.3.3.1`
- Electron：`34.5.8`
- 应用入口：`resources/app.asar`
- 固定 CDP 端口：`9354`
- 浏览器宿主页：`file:///.../out/renderer/index.html`
- 聊天/新建任务页：`file:///.../out/renderer/index.html#desk`
- 真正的“星火设置”页：`file:///.../out/renderer/index.html#settings`
- 账号菜单弹窗：`file:///.../out/renderer/index.html#settings-panel?contentType=settings`，不作为主题目标

SparkDesk 接受 `--remote-debugging-port=9354`，Windows 使用 `windowsPathScopedKill`，重启时只结束安装路径匹配的 `SparkDesk.exe`。主窗口由浏览器宿主、多个聊天 Tab 和设置页 WebContents 组成；悬浮球、快捷助手、历史、上传和账号弹窗等辅助目标不注入主题。macOS 注册候选为 `SparkDesk.app`，Linux 注册候选为 `sparkdesk` / `SparkDesk` 和 `sparkdesk.desktop`；非 Windows 候选尚待安装样本验证。

#### DeepSeek Harness

适配目标来源：

```text
https://github.com/anywhere-labs/deepseek-harness-desktop
```

Windows 实机安装位置：

```text
D:\Program Files\DeepSeek Harness\DeepSeek Harness.exe
```

程序元数据与运行特征：

- 验证版本：`0.1.0-rc.5`
- 产品名：`DeepSeek Harness`
- 应用入口：`resources/app.asar`
- 用户数据目录：`%APPDATA%\@deepseek-ai\dsh-desktop`
- 首选 CDP 端口：`9355`
- 主 renderer：`http://127.0.0.1:<动态 Web 端口>/?dsh-desktop-platform=win32`
- renderer hint：`dsh-desktop-platform=`

DeepSeek Harness 接受 `--remote-debugging-port=9355`。Windows 使用 `windowsPathScopedKill`，重启时只结束安装路径匹配的 `DeepSeek Harness.exe`。注册表同时包含 `D:\Program Files\DeepSeek Harness`、LocalAppData Programs 和 Program Files 候选；macOS/Linux 候选尚未通过安装样本验证。该适配仅针对上述仓库构建的桌面端，不泛化到其他 DeepSeek 客户端。

### 9.4 CDP 启动与端口差异

所有应用仍采用 CDP 注入。除 Windows 版 AgnesCode 的受控原生标题栏补丁外，不修改目标应用安装包。普通应用的标准启动参数为：

```text
--remote-debugging-port=<port>
```

#### 首选端口应用

以下应用配置了可预期的首选 CDP 端口。AgnesCode 通过 Playwright 环境变量绑定 `9350`；普通应用使用启动参数，并在启动前对首选端口执行真实 TCP bind 探测。若端口不可绑定，会自动顺延到后续可用端口：

- WorkBuddy
- TRAE Work
- CatPaw
- ZCode
- HanaAgent
- Kimi Work
- 豆包 Desktop
- AgnesCode
- MiniMax Code
- AstronClaw
- StepFun
- SparkDesk
- DeepSeek Harness
- Codex

OpenCode 默认分配 `9348`，但实际运行端口通过 `%APPDATA%\ai.opencode.desktop\DevToolsActivePort` 读取和验证。豆包首选 `9349`，AgnesCode 使用 Playwright 调试入口绑定 `9350`，MiniMax Code 首选 `9351`，AstronClaw 首选 `9352`，StepFun 注册首选 `9353` 但实际运行端口通过 `%APPDATA%\stepfun-desktop\DevToolsActivePort` 读取，讯飞星火使用固定端口 `9354`，DeepSeek Harness 首选 `9355`。

Windows 可能出现 `netstat` 仍报告某端口由已不存在 PID 监听，但 TCP/HTTP 无法连接的幽灵监听状态。仅用 `connect()` 判断端口关闭会误认为该端口可复用。当前 `launcher.ts` 使用异步 `net.createServer().listen()` 真实尝试绑定端口；绑定失败时顺延扫描最多 100 个端口，并将实际端口返回前端。AstronClaw 实机回归中 `9352` 处于幽灵监听，启动器自动选择 `9353`，随后 `/json/version`、主 renderer 和主题注入均成功。

#### 随机或动态端口应用

QoderWork 和千问办公有特殊行为：主进程虽然接受 `--remote-debugging-port=<port>`，但创建 renderer 时会改为：

```text
--remote-debugging-port=0
```

Chromium 随后分配随机端口，并写入用户数据目录中的 `DevToolsActivePort`：

```text
%APPDATA%\QoderWork CN\DevToolsActivePort
%APPDATA%\QwenWorkCN\DevToolsActivePort
```

文件格式：

```text
<实际端口>
/devtools/browser/<browser-id>
```

当前启动器对这两款应用同时等待：

1. 首选端口变为可用。
2. `DevToolsActivePort` 出现有效随机端口。
3. 通过随机端口的 `/json/version` 验证 CDP 服务。
4. 将真实端口返回前端，后续状态检查和还原使用该端口。

这修正了早期“所有应用都能稳定使用固定 CDP 端口”的错误假设。

OpenCode 会在用户数据目录写入 `DevToolsActivePort`。当前注册表同时保留默认端口 `9348` 和该文件路径；读取文件后仍必须访问 `/json/version` 和 `/json/list` 验证，不能信任陈旧端口。

StepFun 同样会写入 `DevToolsActivePort`，但启动生命周期更特殊：第一次启动可能只有托盘和 CDP 服务，尚未出现 `app://chat-web/`。启动器先等待端口文件暴露可用 `/json/version`，然后再次激活 `StepFun.exe`，再等待聊天 renderer。不能把“动态端口已开放”直接等同于“主窗口已就绪”。

HanaAgent 首选端口为 `9346`，但其特殊点不是端口，而是 renderer 生命周期。`launcher.ts` 在端口可用后还会执行稳定 target 等待；`injector.ts` 注入后也会确认最终 renderer 连续稳定，再启动运行期守护。

Kimi Work 首选端口为 `9347`。启动器在 CDP 可用后执行约 `750ms` 的短稳定确认，用于捕获 Windows 父进程异常退出，但不再叠加前端 4 秒或主进程 3 秒固定等待。renderer 就绪后立即调用 `applyTheme()`。

### 9.5 渲染页面识别

注入器不会向所有 page target 盲目注入，而是根据 `rendererHints` 匹配主页面 URL。

| 应用 | 实机主渲染页面特征 |
|------|--------------------|
| WorkBuddy | `app.asar/renderer/index.html`、`renderer/index.html` |
| TRAE Work | `solo/solo-lite.html` |
| QoderWork | `out/renderer/index.html#windowId=main` |
| CatPaw | `app.asar/dist/index.html` |
| ZCode | `app.asar/out/renderer/index.html` |
| 千问办公 | `app.asar/out/renderer/index.html#windowId=main` |
| HanaAgent | `.hanako/artifacts/renderer/`、`artifacts/renderer/` |
| Kimi Work | Work：`kimi-agent.html`；Chat：`kimichat.html` 或 `https://www.kimi.com/` |
| OpenCode Desktop | `oc://renderer/index.html` |
| 豆包 Desktop | `doubao://doubao-chat/chat`，同时匹配其导航后的 `/chat/...` 页面 |
| AgnesCode | `app.asar/.vite/renderer/main_window/index.html` |
| MiniMax Code | `app://./archon` |
| AstronClaw | `app.asar/out/renderer/index.html`、`out/renderer/index.html` |
| StepFun | 宿主：`app://ui/pages/browser/`；聊天：`app://chat-web/`；会员：`https://chat.stepfun.com/subscription` |
| SparkDesk | 宿主：`out/renderer/index.html`；聊天/新建任务：`#desk`；星火设置：`#settings` |
| DeepSeek Harness | `http://127.0.0.1:<动态 Web 端口>/?dsh-desktop-platform=win32` |
| Codex | `index.html`、`renderer/index.html` |

QoderWork 和千问办公还存在 `voice-overlay.html` 页面，ZCode 存在 Stripe iframe 和 worker target，CatPaw 存在 `about:blank` page。HanaAgent 会替换 renderer target；Kimi Work 的 Work 与 Chat 本来就是两个独立 target；豆包还存在 `doubao-launcher` 和 `doubao-background` 辅助页面；StepFun 还存在 `flow-widget`、`popup-menu` 等辅助目标；`SparkDesk` 还存在 `#floating-ball`、`#ai-chat-manager`、`#quickclient`、`#history-panel`、`#upload-panel` 和账号弹窗 `#settings-panel`。DeepSeek Harness 当前只暴露一个带 `dsh-desktop-platform=` 参数的主 page target。URL hint 可以避免菜单和主题被错误注入辅助页面，HanaAgent、Kimi、豆包、StepFun 和 SparkDesk 还需要在正确 URL hint 的基础上持续处理 target 创建、导航和更替。

### 9.6 DOM 与主题表面分析

#### WorkBuddy

识别信号：

```text
body[data-application-name="workbuddy"]
```

主要结构：

- 左侧团队/会话列表
- 右侧聊天主体
- WorkBuddy 自有 `--cb-*` 和 `--cb-vscode-*` 变量

适配方式：

- `buildWorkBuddyCss()` 映射 WorkBuddy 原生变量。
- 背景图片直接显示在右侧主体。
- 左侧栏和消息卡片使用主题 surface 的半透明混色。
- 根据 surface 亮度切换 `light`、`dark`、`vscode-light`、`vscode-dark`、`cb-light`、`cb-dark` 类。
- WorkBuddy 使用完整专用菜单和自定义图片逻辑。

#### Codex

主要结构：

- `aside.app-shell-left-panel`
- `main.main-surface`
- `.thread-scroll-container`
- `.composer-surface-chrome`
- `[data-message-author-role]`

适配方式：

- `buildCodexCss()` 映射 `--ds-*` 变量。
- `body` 保持纯色，背景图片只放在右侧 `main.main-surface`。
- 对话 token、Markdown、输入框、代码块分别设置亮暗主题文字颜色。
- 菜单使用 Shadow DOM，避免 Codex 全局 CSS、React 重挂载和层叠上下文影响。
- 菜单节点被移除后由守护定时器重新挂载。

#### TRAE Work

实机页面：

```text
vscode-file://vscode-app/.../solo/solo-lite.html
```

实机 body 类：

```text
solo-lite vs windows icube-simple-style light theme-icube
```

关键 DOM：

- `#root`
- `.solo-lite-layout`
- `.solo-lite-chat-panel-content`
- `.session-panel-cache-layout`
- `.virtualized-message-list-view__content`
- `.user-message__content-area`
- `.chat-input-v2-editor-part-lower-content`

适配方式：

- 归类为 `vscode-work`。
- `buildVsCodeWorkCss()` 覆盖 `--vscode-editor-background`、`--vscode-foreground`、`--vscode-sideBar-background`、`--vscode-panel-background`、输入框、按钮和焦点色。
- 图片显示在 `.solo-lite-chat-panel-content`、session layout 和消息列表区域。
- 消息、助手内容和输入区使用半透明 surface。
- 当前实现对消息内部文字采取较宽的主题文字覆盖，后续应用更新时应优先检查消息类名变化。

#### QoderWork

实机页面：

```text
file:///.../resources/app.asar/out/renderer/index.html#windowId=main
```

启动初期 DOM 只有：

- `#root`
- `.loading-container`

完整工作台内容由应用异步挂载，因此当前适配使用通用特征选择器：

- `#root > div`
- `[class*="layout"]`
- `[class*="content-area"]`
- `[class*="main-content"]`
- `[class*="sidebar"]`

适配注意事项：

- 不应依赖启动瞬间的静态 DOM。
- 应保持菜单与样式节点独立于 React 根节点。
- 若后续发现背景覆盖过广，应在应用加载完成后重新采集完整 DOM，并将通用选择器收窄。

#### CatPaw

实机页面标题为 `CatDesk`，页面 URL 为：

```text
file:///.../CatPaw/resources/app.asar/dist/index.html
```

关键 DOM：

- `.sidebar-wrapper.expanded`
- `.sidebar`
- `.main-area.sidebar-expanded`
- `.main-content-container`
- `.main-content-wrapper`
- `.main-content`
- `.chat-content-area`
- `.catpaw-editor__content`

可用原生变量：

- `--catpaw-bg-primary`
- `--catpaw-text-primary`
- `--catpaw-text-secondary`

适配方式：

- 侧栏使用 surface 半透明背景。
- 图片放在 `.main-area` 和主内容/聊天区域。
- CatPaw 编辑器和消息内容继承主题文字颜色。
- 保留 Tailwind 类结构，不尝试替换应用布局。

#### ZCode

实机页面：

```text
file:///.../ZCode/resources/app.asar/out/renderer/index.html
```

页面状态：

```text
html.dark.theme-zai-dark
body.zcode-startup-ready
```

关键 DOM：

- `#root`
- `#sidebar`
- 多个 `<aside>`
- 原生 `<main>`
- 主消息滚动区带有 `min-h-0 flex-1 overflow-y-auto` 等 Tailwind 类

适配方式：

- `#sidebar` 和 `aside` 作为侧栏 surface。
- `<main>` 及其主 flex 容器显示主题背景图。
- 对消息、聊天、编辑器、输入区和正文文字应用通用主题规则。
- ZCode 页面包含 Stripe iframe 和多个 worker，注入时必须只选择主 `renderer/index.html` page。

#### 千问办公

实机页面：

```text
file:///.../QwenWorkCN/<version>/resources/app.asar/out/renderer/index.html#windowId=main
```

body 数据：

```text
data-spm="new_chat_page"
```

关键 DOM：

- `.agents-layout-root`
- `.agents-layout-body`
- `.agents-sidebar`
- `.group/sidebar`
- `.agents-content-area`
- `.agents-parchment-paper-surface`

可用原生变量：

- `--agents-sidebar-material-bg`
- `--text-base-primary`
- `--text-base-secondary`
- `--bg-base`

适配方式：

- 侧栏变量映射到主题 surface 和 text。
- `.agents-content-area` 和 parchment surface 显示主题图片。
- 使用半透明基础背景，避免 parchment surface 完全遮挡图片。
- 主页面和 Voice Input 辅助页面通过 URL hint 区分。

#### HanaAgent

实机主页面 URL 包含：

```text
.hanako/artifacts/renderer/
```

关键 DOM 和表面：

- `#react-root`
- `.app-shell`
- `.titlebar`
- `#sidebar`
- `#jianSidebar`
- `#previewBody`
- `[class*="input-wrapper"]`

适配方式：

- 注册类型仍为 `generic-work`，但 CSS 由专属 `buildHanaAgentCss()` 生成，避免通用工作台选择器覆盖过宽。
- 背景图应用到 `html`、`body`、`#react-root` 和 `.app-shell`，标题栏、主内容、聊天区和输入区保持透明。
- 侧栏、预览和输入组件使用基于主题 surface/accent 的半透明材质。
- 使用专属轻量浮动菜单，提供最多四个高频预置主题切换、自定义图片和「还原主题」；按钮 `◉`、尺寸和基础样式与其他应用一致，并支持点击应用内空白位置关闭菜单。
- 自定义图片采用 HanaAgent 专属实现，不直接移植完整通用菜单脚本。支持 PNG、JPEG、WebP，最大边缩放到 `1280px` 后压缩为 WebP，自动提取四色调色板，最多保存 5 张，并支持切换和删除。
- 自定义图片列表由 Dream Work Theme 主进程集中保存到 `app.getPath('userData')/custom-themes.json`。目标应用中的 localStorage 只作为当前 renderer 缓存和既有数据导入来源，不再承担跨应用共享。当前选中的 HanaAgent 自定义图片 ID 仍使用应用内独立键保存，使 renderer 重建后可以恢复且不会改变其他应用当前选择。管理器主动应用预置主题时会覆盖 HanaAgent 当前选择。
- 首次注入会通过 `Page.addScriptToEvaluateOnNewDocument` 注册持久脚本，并由主进程 watcher 检测 renderer 更替或注入节点丢失。
- 用户点击「还原主题」时写入本地停用标记；watcher、页面刷新和 renderer 重建都不会重新显示主题。再次从浮动菜单选择主题或从管理器主动应用时会清除该标记。

#### Kimi Work

Kimi Work 有两个主要 renderer：

```text
Work: app://localhost/kimi-agent.html
Chat: https://www.kimi.com/
```

适配方式：

- `buildKimiCss()` 映射 Kimi 的 Figma token，包括 `--Bg-*`、`--BgGp-*`、`--Labels-*`、`--Colors-KMBlue` 和 `--Bg-GroundPC`。
- Kimi 保留自身 `html.dark` 和 token 模式，不调用通用 `applyMode()`，避免破坏应用原生变量体系。
- 首次应用会同时收集 Work 与 Chat target，并对两个页面注入主题和 `Page.addScriptToEvaluateOnNewDocument` 持久脚本。
- 主进程 Kimi watcher 每 `750ms` 检查 Kimi 相关 target；发现新 target、导航后样式丢失或 renderer 重建时自动补注入。
- 首页、对话页、消息列表、顶部 publisher/sticky 区域、底部输入框外层大容器保持透明；只给实际输入卡片、消息和必要控件保留轻透明 surface。
- Kimi CSS 明确设置 `backdrop-filter: none` 和 `-webkit-backdrop-filter: none`，避免背景图被模糊。
- Chat 的 `#chat-box`、`.home-input-options`、`.publisher-stage` 等大面积容器已透明化；`.chat-editor-content` 保留单层约 42% 输入卡片底色。
- Work 的 `.composer-dock`、`.composer-inner`、`.composer-wrap` 等外层透明，仅 `.composer.docked` 保留单层轻底色。

#### OpenCode Desktop

实机主页面：

```text
oc://renderer/index.html
```

适配方式：

- 注册类型为 `generic-work`，在通用主题 CSS 后追加 `buildOpenCodeCss()` 专属规则。
- 映射 `--v2-background-*` 和 `--v2-text-*` token。
- 首页和对话主面板使用同一透明背景；输入框 `group/prompt-input` 保留约 68% 的 surface 玻璃底色。
- 对话页的 `bg-v2-background-bg-base`、`bg-v2-background-bg-deep` 和底部停靠外层保持透明，避免遮挡主题图片。
- 已验证从管理器应用主题、通过右下角菜单切换主题和还原原生主题。
- Windows 进程结束使用完整 executable 路径匹配，避免误杀同名 OpenCode CLI。

#### 豆包 Desktop

实机主页面与辅助页面：

```text
主聊天：doubao://doubao-chat/chat
launcher：doubao://doubao-launcher/chat?viewId=101
后台页：doubao://doubao-background/...
```

适配方式：

- 注册类型为 `generic-work`，但专属样式由 `buildDoubaoCss()` 生成；通用 `[class*="message"]` 气泡背景和模糊规则对豆包完全禁用。
- 映射 `dbx` / `s-color` 主、次、三级文字 token，覆盖侧栏账号、搜索、历史对话、首页建议、对话正文、输入区操作文字和禁用图标。
- 新对话 textarea placeholder 和 AI 创作 Tiptap/ProseMirror placeholder 使用主题次级文字色。
- 豆包同时渲染亮色和暗色图片图标。主题会隐藏 `dark:hidden` 亮色资源、显示 `hidden dark:block` 暗色资源；没有暗色资源的操作图标使用浅色滤镜，SVG 使用主题 `currentColor`。
- 首页问候语 `greeting-text-*::after` 原生固定为 `rgb(252,252,252)`，暗色主题下强制透明。
- 技能页搜索框、分类文字、卡片和激活 tab 使用主题 surface/text；AI 创作页的 `container-SrVXPg.chrome70-container` 和 sticky `bg-s-color-bg-body` 标题栏保持透明。
- 图片/视频切换控件的激活项使用 accent 与 surface 混合背景，未激活项保持透明。
- 对话页 `message-list-*`、长消息组和其伪元素强制透明、无 `backdrop-filter`、无 `filter` 和阴影，仅侧栏与底部实际输入框保留局部玻璃效果。
- 技能、新工作任务、AI 创作和历史对话导航可能重载主 renderer。豆包 watcher 每 `500ms` 检查主题节点；导航后丢失时自动重注入。
- 浮动菜单或管理器执行还原时记录 `dream-work-theme:doubao:restored`，停止守护或阻止自动恢复；再次主动应用主题会清除还原状态。

#### AgnesCode

实机验证环境：

```text
主 renderer：app.asar/.vite/renderer/main_window/index.html
```

CDP 启动差异：

- 正式版主进程会主动执行 `removeSwitch()`，删除 `remote-debugging-port`、`remote-debugging-address` 和 `remote-debugging-pipe`，不能像普通 Electron 应用一样只追加 CLI 参数。
- 通过 AgnesCode 内置 Playwright 调试入口设置 `AGNES_DEV=1`、`ENABLE_PLAYWRIGHT=1`、`PLAYWRIGHT_DEBUG_PORT=9350`。
- `AGNES_DEV=1` 会让正式包按源码开发环境寻找 `agnesd`，因此必须同时设置 `AGNESD_BINARY=<安装目录>/resources/bin/agnesd.exe`，否则聊天后端无法启动。
- Playwright 入口会让 AgnesCode 认为当前是开发会话，可能打印缺少 `app-update.yml` 的更新检查错误；已验证不影响 `agnesd`、ACP、聊天和主题注入。

原生标题栏差异：

- 右上角最小化、最大化和关闭按钮由 Electron Window Controls Overlay 原生绘制，不存在于 renderer DOM，CSS 和 CDP `Runtime.evaluate` 无法改变按钮背后的区域。
- AgnesCode 在 BrowserWindow 创建时提供 `titleBarOverlay`，并在窗口 `ready-to-show`、`did-finish-load` 和主题变化时再次调用 `setTitleBarOverlay()`。深色模式固定使用 `#2d323a`（sidebar）或 `#22252a`（content），所以只透明化网页 `.windows-title-bar` 仍会留下约 `136px × 32px` 的原生深色块。
- 其他已适配应用没有同时满足“原生 overlay + 主进程重复强制颜色 + renderer 无透明控制接口”这三个条件，因此通常只需 CSS 或原生颜色本身无需处理。

标题栏补丁流程：

1. 按完整路径结束 AgnesCode 进程，等待 `9350` 关闭。
2. 通过 Electron fuse sentinel `dL7pKGdnNz796PbbjQWNKmHXBZaB9tsX` 定位 V1 fuse wire，只将索引 `4` 的 `EnableEmbeddedAsarIntegrityValidation` 从 enabled 改为 disabled；`OnlyLoadAppFromAsar` 和其他 fuse 保持不变。
3. 首次处理或应用升级后，将原始 `AgnesCode.exe` 备份为 `AgnesCode.exe.dream-work-original`。
4. 使用 `original-fs` 读取外部 `resources/app.asar`，匹配生成 `titleBarOverlay.color` 的完整压缩函数。
5. 将函数中的动态深色表达式做等长替换，固定为 `#00000000`；剩余字节用空格填充，不改变 archive 大小和 ASAR entry 布局。
6. 将原始代码片段、字节偏移和 archive 大小写入 `resources/app.asar.dream-work-titlebar.json`。
7. 再启动 AgnesCode，等待 `9350/json/version` 和主 renderer，随后执行主题注入。

文件访问约束：

- Electron 普通 `fs.readFileSync(<external app.asar>)` 会启用 ASAR 虚拟文件语义，并将读取 archive 本身解释为空内部路径，产生 `ENOENT, not found in ...app.asar`。
- 启动器必须使用 Electron 内置的 `original-fs` 读写 AgnesCode EXE/ASAR；`vite.config.ts` 将 `original-fs` 标记为 Electron 主进程 external。
- 不应重新引入运行时 `@electron/fuses`。该包被 Vite 打进单文件后，其依赖的包内路径和 `fs-extra` 资源定位会失效，曾导致相同 `ENOENT`。

专属 CSS：

- 使用 `buildAgnesCodeCss()`，并让 AgnesCode 的通用 main/sidebar selector 设为 `:not(*)`，避免命中通用大面积渐变和 `backdrop-filter`。
- 背景图挂载到 `html`、`body`、`#root`；`.agnes-shell`、`--agnes-surface`、`--agnes-sidebar-panel`、`--agnes-current-sidebar-bg` 和 `bg-background-primary` 外壳透明。
- 搜索、定时任务、插件和设置路由使用独立容器。设置页的 `.agnes-settings-route-overlay`、232px 设置菜单网格和右侧内容层均透明无滤镜。
- 输入框 `rounded-input-modal` 和插件卡片只保留局部半透明 surface，以保证文字和控件可读。
- 原生主题恢复不再使用注入开始时的一次性快照。执行还原时实时读取 `localStorage.theme`；`use_system_theme=true` 或 `theme=system` 时读取 `prefers-color-scheme`。还原过程移除 `vscode-*` / `cb-*` 兼容类，只恢复 `html.light` 或 `html.dark`，避免浅色变量与深色类混用。

#### MiniMax Code

实机验证环境：

```text
主 renderer：app://./archon
```

专属 CSS：

- 使用 `buildMiniMaxCodeCss()`，并让通用 main/sidebar selector 设为 `:not(*)`，避免通用大面积渐变和模糊规则干扰 MiniMax Code 的 Tailwind 页面结构。
- 背景图挂载到 `html`、`body`、`#root` 和 `#__next`。根应用壳 `bg-bg_grouped_secondary`、左侧 `bg-bg_default_scrim`、功能页 `bg-bg_default_primary` / `bg-bg_grouped_secondary` 主体以及对话页底部固定外壳保持透明。
- 技能、定时任务、连接等功能页可能使用 `absolute inset-0 z-10 flex flex-col bg-bg_grouped_secondary` 覆盖右侧画布，该层单独透明化，功能卡片本身仍保留局部对比度。
- 对话页底部固定输入区和新建任务页首页输入区使用不同外层布局，但实际输入卡片统一为 theme surface `62%` 半透明、accent `30%` 边框、`20px` 圆角、`16px` 模糊和轻阴影。
- CSS 使用稳定类组合和属性选择器匹配 Tailwind 的 `rounded-[20px]`，避免无效转义导致浏览器丢弃整组规则。

原生主题还原：

- MiniMax Code 原生选择保存在 `localStorage.theme`。还原时实时读取 `light` / `dark`，不再恢复可能过期的首次注入快照。
- 当应用跟随系统时，结合 `use_system_theme` 和 `matchMedia('(prefers-color-scheme: dark)')` 计算当前模式。
- 还原会清空主题 CSS、背景图和主题标识，移除注入产生的 `vscode-*` / `cb-*` 与 body 深浅类，只在 `html` 恢复原生 `light` 或 `dark` 以及对应 `color-scheme`。
- 已验证浅色还原为原生 `rgb(255, 255, 255)`，深色还原为原生 `rgb(28, 28, 28)`。

#### AstronClaw（讯飞星辰）

实机验证环境：

```text
主 renderer：file:///D:/Program Files/AstronClaw/resources/app.asar/out/renderer/index.html
```

专属 CSS：

- 使用 `buildAstronClawCss()`，背景图挂载到 `html`、`body` 和 `#root`。
- `.workspace-frame` 原生深蓝径向/线性渐变被清空；应用壳、`.local-chat-shell`、`.local-chat-main`、`.local-chat-content-col` 和内容层保持透明、无滤镜。
- 通用 `[class*="message"]` / `[class*="bubble"]` 半透明模糊规则对 AstronClaw 禁用，避免 `.local-chat-message-list`、`.local-chat-message-list-content`、`.local-chat-message` 和 `.local-chat-message-body` 重复叠加 `88%` 深色背景与 `blur(16px)`。
- 左侧 `.local-chat-rail` 只保留约 `12%` surface 轻底色，不使用 `backdrop-filter`；消息列表和消息正文完全透明。
- `.local-chat-composer-stack` 透明，仅 `.local-chat-composer-card` 保留单层约 `48%` surface 对比度，避免输入区父子容器双层叠色。
- “我的技能”和“灵感广场”共用 `.local-chat-content-col > section.bg-card` 主体；该全高画布强制透明、无背景图和滤镜，卡片内部仍保留必要对比度。

原生主题还原：

- AstronClaw 的偏好由 Electron preload API `window.astronDesktop.settings.get().general.theme` 提供，不使用 `localStorage.theme`。
- 应用启动时先渲染默认/系统状态，再异步 hydrate 设置。若只保存注入开始时的 DOM 类名快照，用户明明选择浅色也可能记录成临时深色。
- 还原动作现在异步读取当前持久化的 `light` / `dark` / `system`；`system` 使用 `matchMedia('(prefers-color-scheme: dark)')` 计算实时模式。
- 管理器级还原脚本会 `await window.__dreamWorkRestoreNativeMode()` 后再关闭 CDP 会话，确保设置读取和 DOM 恢复完成。
- 已验证浅色恢复为 `html.light` / `color-scheme: light`，深色恢复为 `html.dark` / `color-scheme: dark`，测试结束后恢复用户原有浅色设置。

#### StepFun（阶跃 AI）

实机验证环境：

```text
宿主页：app://ui/pages/browser/index.html
聊天页：app://chat-web/chats/...
会员页：https://chat.stepfun.com/subscription?from=browser-top-right-button
```

专属 CSS 与多 WebContents 背景：

- 使用 `buildStepFunCss()`，并让阶跃跳过通用 `[class*="message"]` / `[class*="composer"]` 的 `88%` 深色模糊规则，避免聊天内容和输入区外层被重复遮挡。
- 侧栏实际为普通 `div.fixed.w-72.bg-gold`，不是 `aside` 或带 `sidebar` 类的元素；必须通过结构组合透明化 `background` 简写、背景色、背景图和滤镜。
- 顶部 Tab 和导航栏位于宿主页，聊天内容位于独立 WebContents。宿主页 `.tab-bar`、激活 `.tab > div`、`.navigation-bar` 和 `.content-area` 均透明；聊天页 `body`、`#root.bg-bg-gold` 以及主内容大容器必须使用高优先级规则透明，否则会盖住背景层。
- 顶部 Tab 高 `46px`、导航栏高 `44px`，合计 `90px`。宿主页使用完整窗口尺寸的 `cover` 背景；聊天页和会员页创建高度为 `100vh + 90px`、顶部为 `-90px` 的虚拟背景层，使内容页显示整窗背景从第 90 行继续的部分，避免两个 WebContents 各自居中导致图片重叠。
- 宿主页的 `html` 同时保留实际背景图作为 BrowserView 两侧 fallback，解决 Electron 子 WebContents 没有覆盖到的左右区域露出纯色根背景；聊天/会员内容页禁用 `html` 本体图片，只使用带 `-90px` 偏移的背景层。
- 会员页全屏 `.subscription-modal_root*` 和底部 `.subscription-modal_footer*` 透明，会员套餐卡片、邀请码输入和购买控件保留原生局部背景。
- 菜单只显示在 `app://chat-web/`，不会重复挂载到宿主页或会员页。

多 Tab 守护与状态同步：

- `fetchStepFunTargets()` 同时匹配宿主页、所有聊天页和会员页，排除 `flow-widget`、`popup-menu` 等辅助目标。
- StepFun watcher 每 `750ms` 检查相关 target，为新建 Tab、会员 Tab 和重建页面注册持久脚本并补注入。
- 主进程本机共享服务新增 `/app-state/stepfun` 状态端点，以主题 ID 和 `actionAt` 保存全局最新操作，避免各聊天 WebContents 的 `localStorage` 分区隔离造成切换/还原不同步。
- 主题应用和还原均使用单调 `actionAt` 防倒退；较旧 watcher 回放不能覆盖较新的用户操作。单个 WebContents 在 CDP 遍历期间销毁时只跳过该目标，不中断整轮同步。

原生主题还原：

- 阶跃原生模式读取 `localStorage.theme`，支持 `light`、`dark` 和 `system`；`system` 使用 `prefers-color-scheme` 计算实时模式。
- 应用主题时不调用通用 `applyMode()`，避免把阶跃强制切成 `light vscode-light cb-light` 或污染其原生类。
- 还原会清空所有匹配 target 的主题 CSS/ID，恢复聊天页和宿主页原生 `html.dark` 或 `html.light`、`color-scheme`、背景和文字。已验证原生深色聊天背景为 `rgb(30, 32, 36)`，文字为 `rgb(249, 248, 246)`，激活 Tab 和导航栏恢复客户端原生深色。

#### SparkDesk（讯飞星火）

实机验证环境：

```text
宿主页：file:///D:/Program Files/SparkDesk/resources/app.asar/out/renderer/index.html
聊天/新建任务：同页面 #desk
星火设置：同页面 #settings
```

专属 CSS 与连续背景：

- 使用 `buildSparkDeskCss()`，跳过通用 Work 的大面积 surface 和模糊规则，避免星火原生容器与通用 CSS 重复铺底。
- 宿主页的 Tab、导航栏和内容壳与 `#desk` / `#settings` 是独立 WebContents。各页面通过固定 `html::before` 使用同一主题 hero；内容页背景高度为 `100vh + 80px`、顶部 `-80px`，与 Tab 和导航栏共享虚拟整窗坐标。
- `.browser-container`、`.browser-header`、Tab 容器、地址栏、聊天主体和设置主体保持透明。激活 Tab 只保留轻量主题 surface，用于识别当前页面。
- 星火聊天根容器原生带有全屏渐变和 `backdrop-filter: blur(25px)`。专属规则同时清除 `background`、`background-image`、`backdrop-filter` 和 `filter`，避免背景图被透明模糊层遮挡。
- 欢迎页只为单张功能卡片保留局部半透明 surface，大卡片容器保持透明；Markdown、AI 回复、用户消息和新对话文字使用主题 text。

输入区与深浅主题对比：

- 输入区实际由 `_ask_operate_wrap_*`、`_chat_func_wrap_*`、`_right_operate_wrap_*` 和四个右侧按钮组成。模型/深度思考切换、文档、截图、语音和发送按钮统一使用输入框 surface。
- 深色主题下，输入框、左右操作区和按钮使用深色 surface，文字及 SVG path 使用亮色；亮色主题下自动反转为亮底深色前景。
- 文档、截图和语音 SVG 即使原始资源写死 `stroke="#171717"`，运行时 CSS 也会覆盖为当前主题 text。发送图片根据 surface 亮度选择滤镜。

星火设置与目标白名单：

- 真正的“星火设置” Tab 是 `#settings`，包含 `_mainContainer_*`、用户资料卡、编辑资料按钮和设置菜单。`#settings-panel?contentType=settings` 只是点击账号后出现的弹窗，必须保持原生，不加入 target 白名单。
- `#settings` 的用户资料卡、编辑资料按钮、菜单项、菜单右侧状态、文字和图标使用主题 surface/text。深色主题为深色卡片配亮色文字，亮色主题为亮色卡片配深色文字。
- `fetchSparkDeskTargets()` 只匹配宿主页、`#desk` 和 `#settings`，排除悬浮球、快捷助手、历史、上传和账号弹窗。

多 Tab 守护与还原：

- SparkDesk watcher 每 `500ms` 检查相关 target，为新建聊天 Tab、重载页面和后创建设置页注册持久脚本并同步当前主题。
- 主题和还原状态通过本机 `/app-state/sparkdesk` 与单调 `actionAt` 收敛。写入前二次确认共享状态，并用 generation 取消旧 watcher 轮次，防止还原后旧主题竞态回写。
- 还原会停止 watcher、移除持久脚本，并对宿主页、聊天 Tab 和设置页执行幂等二次清理，确保标题栏、导航栏、内容页、主题类和菜单无残留。

#### DeepSeek Harness

实机验证环境：

```text
仓库来源：https://github.com/anywhere-labs/deepseek-harness-desktop
版本：0.1.0-rc.5
主 renderer：http://127.0.0.1:<动态 Web 端口>/?dsh-desktop-platform=win32
```

专属 CSS 与页面结构：

- 使用 `buildDeepSeekHarnessCss()`。hero 挂载到固定 `html::before`，`body`、`#root`、`*_centerCol` 和主内容根节点透明化，使同一背景覆盖侧栏与右侧主体。
- 通用侧栏毛玻璃和 `[class*="message"]` / `[class*="composer"]` 模糊规则对 DeepSeek 禁用。`*_sidebarCol`、`*_composerSeat` 和 `*_composerStack` 强制透明无滤镜，只让实际 composer card 保留原生局部深浅背景。
- 侧栏祖先若存在 `backdrop-filter`，会为后代 `position: fixed` 创建 containing block，导致 `qB4czW_overlay` 从整窗 `1440×920` 缩成侧栏约 `280×920`。移除该滤镜后，设置 overlay 恢复全窗口，`800×800` panel 正常居中。
- CSS Modules 类名带构建前缀，因此选择器使用稳定后缀 `_centerCol`、`_sidebarCol`、`_composerSeat`、`_composerStack`。上游重命名这些模块时必须重新实机检查。

原生明暗 palette 同步：

- DeepSeek token 样式表通过 `body[data-ds-dark-theme]` 选择深色 palette，主要变量包括 `--dsw-alias-label-primary`、`--dsw-alias-label-secondary`、`--dsw-specific-input-major` 和 `--dsw-specific-sidebar-fill`。
- 通用 `applyMode()` 对 `deepseek-harness` 额外同步该 body 属性。深色主题添加属性，浅色主题移除属性，确保侧栏文字、输入框、按钮、设置页和弹窗使用完整的原生深浅 token，而不是只覆盖单个文字颜色。
- 实机回归中，深色主题 `1212123123` 的侧栏主文字为 `rgb(249, 250, 251)`；浅色主题 `20170714154137-jvs42` 为 `rgb(15, 17, 21)`。
- 首次注入会记录原生 `data-ds-dark-theme` 状态；还原主题时恢复该快照，不修改用户持久化的 DeepSeek 外观偏好。

开发构建修正：

- vite-plugin-electron 的输出目录必须配置在各入口的 `vite.build.outDir`，而不是无效的入口顶层 `outDir`。
- 主进程和 preload 现在直接构建到根 `dist-electron/`，与 `package.json.main` 一致。修正前 `pnpm run dev` 会把新代码写入 `renderer/dist-electron/`，运行中的 Electron 却继续读取根目录旧 bundle，造成主进程适配修改看似热构建但实际不生效。

### 9.7 CSS 生成器分层

当前 `electron/manager/injector.ts` 中存在 16 个具体 CSS 生成器；`buildAppCss()` 负责分派，通用注册类型和应用专属分支共同覆盖当前应用：

| 生成器 | 应用 |
|--------|------|
| `buildWorkBuddyCss()` | WorkBuddy |
| `buildVsCodeWorkCss()` | TRAE Work |
| `buildGenericWorkCss()` | QoderWork、CatPaw、ZCode、千问办公、AgnesCode/MiniMax Code/AstronClaw/StepFun/SparkDesk/DeepSeek Harness 外壳入口 |
| `buildQoderWorkShellCss()` | QoderWork 额外壳层映射 |
| `buildCatPawCss()` | CatPaw 额外页面映射 |
| `buildHanaAgentCss()` | HanaAgent |
| `buildKimiCss()` | Kimi Work |
| `buildOpenCodeCss()` | OpenCode Desktop |
| `buildDoubaoCss()` | 豆包 Desktop |
| `buildAgnesCodeCss()` | AgnesCode |
| `buildMiniMaxCodeCss()` | MiniMax Code |
| `buildAstronClawCss()` | AstronClaw（讯飞星辰） |
| `buildStepFunCss()` | StepFun（阶跃 AI） |
| `buildSparkDeskCss()` | SparkDesk（讯飞星火） |
| `buildDeepSeekHarnessCss()` | DeepSeek Harness |
| `buildCodexCss()` | Codex |

通用主题语义仍由以下字段提供：

```text
accent
secondary
surface
text
hero
```

生成器负责把语义值映射到目标应用原生变量和实际 DOM surface。新应用不应直接复制整套 CSS；应先判断是否能归入现有 `kind`，只有结构明显不同才新增生成器。

### 9.8 统一菜单与自定义图片

WorkBuddy 和通用右下角菜单当前支持：

- 最多四个高频预置主题切换，按当前应用的切换次数和最近使用时间动态排序
- 还原主题恢复
- 自定义图片上传
- PNG、JPEG、WebP
- 图片压缩为 WebP
- 自动提取 accent、secondary、surface、text
- 最多保存 5 张自定义图片
- 删除自定义图片
- 点击菜单外空白区域自动关闭

高频预置主题规则：

- 每个应用独立记录预置主题使用次数和最近切换时间。
- 管理器主动应用和浮动菜单主动切换都会计数。
- 初始化、自动补注入、自定义图片和还原主题不计数。
- 当前主动应用的主题优先进入本次菜单；其余位置按次数降序、最近使用时间降序补足。
- 无历史记录时按当前应用实际兼容主题顺序补足，最多四个；主题不足、已删除或不兼容时不生成空白菜单项。
- 数据保存到 `app.getPath('userData')/theme-usage.json`，由本机共享服务的 `/theme-usage` 接口接收目标应用菜单的切换记录。

HanaAgent 使用专属轻量菜单，支持预置主题切换、自定义图片、「还原主题」和点击空白处关闭。其自定义图片代码与通用菜单相互独立，但通过 Dream Work Theme 主进程的本机共享图片服务读写同一图片库，以实现跨应用上传、切换和删除同一批图片，同时降低完整菜单结构引发崩溃的风险。服务只监听 `127.0.0.1` 并使用进程内随机令牌鉴权。菜单入口统一使用 `◉` 按钮标识和相同的 `36px` 基础按钮样式。HanaAgent 菜单和样式采用更高频的页面内连接守护，并配合主进程 renderer watcher 处理 target 更替。Kimi 使用通用 Shadow DOM 菜单脚本，但由 Kimi watcher 同时维护 Work/Chat target。OpenCode、DeepSeek Harness 和豆包使用通用 Shadow DOM 菜单；豆包 watcher 额外处理页面导航后的重注入和还原状态。StepFun 使用通用菜单，但只在聊天 target 挂载；宿主 Tab/导航栏和会员页只注入样式。SparkDesk 同样只在 `#desk` 挂载菜单；主壳和 `#settings` 只同步样式和状态。

Codex、HanaAgent、Kimi 和其他非 WorkBuddy 应用使用 Shadow DOM host：

```text
#dream-work-menu-host
  #shadow-root
    #dream-work-menu
```

这样可以避免：

- 应用全局按钮样式覆盖菜单
- React 根节点更新删除菜单
- 主内容 `overflow: hidden` 裁剪菜单
- 应用层叠上下文遮挡菜单

菜单 host 使用最高层级，并通过 `__dreamWorkMenuGuard` 定时检查连接状态。重复注入和还原时会清理旧菜单、定时器和外部点击监听器。HanaAgent 使用主进程 watcher 监控最终 renderer；Kimi watcher 监控 Work/Chat 双 target；豆包 watcher 监控主聊天 renderer 的导航与样式丢失；StepFun watcher 监控宿主页、全部聊天 Tab 和会员页；SparkDesk watcher 监控主壳、全部聊天 Tab 和真正的星火设置页。还原状态存在时守护逻辑不得覆盖用户主动停用。

### 9.9 实机验证结果

适配阶段对新增应用执行了真实 CDP 页面连接和 JavaScript/CSS 注入能力验证；HanaAgent 还验证了稳定 renderer、持续守护与还原后不自动恢复，Kimi 验证了 Explorer 启动、Work/Chat 双 target 和导航后自动恢复，OpenCode 与豆包还完成了主题应用、菜单切换和原生还原的逐页视觉验收：

| 应用 | CDP 页面发现 | Runtime.evaluate | 样式节点注入 | 浮动菜单节点注入 |
|------|---------------|------------------|--------------|------------------|
| WorkBuddy | 通过 | 通过 | 通过 | 通过 |
| TRAE Work | 通过 | 通过 | 通过 | 通过 |
| QoderWork | 通过，使用随机端口 | 通过 | 通过 | 通过 |
| CatPaw | 通过 | 通过 | 通过 | 通过 |
| ZCode | 通过 | 通过 | 通过 | 通过 |
| 千问办公 | 通过，使用随机端口 | 通过 | 通过 | 通过 |
| HanaAgent | 通过，首选端口并等待稳定 target | 通过 | 通过 | 通过 |
| Kimi Work | 通过，首选端口并确认 Work/Chat target | 通过 | 通过，双 target | 通过，双 target |
| OpenCode Desktop | 通过，读取动态端口并匹配 `oc://renderer/index.html` | 通过 | 通过 | 通过 |
| 豆包 Desktop | 通过，首选端口并排除 launcher/background 页面 | 通过 | 通过，导航后自动恢复 | 通过，导航后自动恢复 |
| AgnesCode | 通过，Playwright 调试入口和首选端口 `9350` | 通过 | 通过，主页/搜索/定时任务/插件/设置页 | 通过 |
| MiniMax Code | 通过，首选端口并匹配 `app://./archon` | 通过 | 通过，新建任务/对话/技能/功能页 | 通过 |
| AstronClaw | 通过，首选端口 `9352`  匹配 `index.html` | 通过 | 通过，新建任务/对话/我的技能/灵感广场 | 通过 |
| StepFun | 通过，读取动态端口并匹配宿主/聊天/会员 target | 通过 | 通过，多 Tab 与会员页自动补注入 | 通过，仅聊天页显示 |
| SparkDesk | 通过，固定端口 `9354` 并匹配宿主/`#desk`/`#settings` | 通过 | 通过，多聊天 Tab 与设置页自动补注入 | 通过，仅 `#desk` 显示 |
| DeepSeek Harness | 通过，首选端口 `9355` 并匹配 `dsh-desktop-platform=` | 通过 | 通过，整窗背景、透明层、设置浮层和深浅 palette | 通过 |
| Codex / ChatGPT Desktop | 通过 | 通过 | 通过 | 通过 |

构建验证：

- `pnpm typecheck` 通过。
- `pnpm build:app` 通过。
- 根目录 `dist-electron/main.js` 与 Vite 最新 Electron 输出保持同步。
- 17 款应用通过 `acceptsGenericThemes` 默认兼容和 manifest 显式覆盖模型读取主题，无 HanaAgent/Kimi/OpenCode/豆包/AgnesCode/MiniMax Code/AstronClaw/StepFun/SparkDesk/DeepSeek Harness 硬编码放行。
- Kimi Work 首次注入实测同时覆盖 Work 与 Chat，返回 `applied: 2`；两个 target 重载后均能恢复主题。
- OpenCode Desktop 实测主题应用返回 `applied: 1`，浮动菜单切换和还原正常；主题重启不会终止同名 OpenCode CLI。
- 豆包 Desktop 实测主题应用返回 `applied: 1`，菜单切换和还原正常；技能、新工作任务、AI 创作和历史对话导航后主题会自动恢复。
- 豆包暗色适配已逐项验证：账号与导航文字、历史对话激活项、新对话 placeholder、底部图标、技能搜索/分类、AI 创作 placeholder 与图片/视频 tab 均可读。
- 豆包首页问候语白色伪元素、AI 创作白色主容器和 sticky 标题栏已透明化；对话内容区除侧栏和输入框外，大面积模糊/着色层检测结果为 `0`。
- AgnesCode 已完成端到端验证：启动器可重复识别透明标题栏补丁，`9350` CDP、`agnesd`、ACP 和主题注入均正常；主页、搜索、定时任务、插件和设置页的大面积背景/滤镜已透明化。
- AgnesCode 浅色/深色还原矩阵已验证：浅色侧栏变量恢复为 `#fbfbfb`、主体为 `#fdfeff`；深色恢复 `html.dark`，不会残留 `vscode-*` / `cb-*` 兼容类。
- MiniMax Code `3.0.60` 已完成端到端验证：`9351` CDP、背景图、左侧栏、新建任务/历史对话输入框、技能/功能页右侧主体均正常；浅色还原为 `rgb(255, 255, 255)`，深色还原为 `rgb(28, 28, 28)`。
- AstronClaw `2.0.6` 已完成端到端验证：首选 `9352` 因 Windows 幽灵监听不可绑定时自动使用 `9353`，主题应用返回 `applied: 1`；侧栏、任务主体、消息列表/正文、我的技能和灵感广场右侧画布均无大面积深色模糊遮挡。
- AstronClaw 的我的技能/灵感广场全高 `section.bg-card` 实测计算样式为 `rgba(0, 0, 0, 0)`、`background-image: none`、`backdrop-filter: none`；原生偏好为浅色时还原 `html.light`，偏好为深色时还原 `html.dark`。
- StepFun `0.3.22` 已完成端到端验证：发现 `D:\Program Files\StepFun\StepFun\StepFun.exe`，读取动态端口，首次托盘启动后再次激活主窗口，主题首次注入覆盖宿主页和聊天页，新建 Tab 与会员页由 watcher 自动补注入。
- StepFun 已验证侧栏、激活 Tab、导航栏、聊天内容层和会员页外壳透明；聊天/会员内容页背景层相对宿主页向上偏移 `90px`，高亮覆盖探测确认背景从最左到最右、从顶部到最底部均可见。
- StepFun 还原已验证：所有聊天 target 和宿主页清空主题 CSS/ID，恢复原生 `dark`，Tab、导航栏、聊天背景和文字不残留主题样式。
- SparkDesk `2.3.3.1` 已完成端到端验证：发现 `D:\Program Files\SparkDesk\SparkDesk.exe`，固定端口 `9354`，主题覆盖宿主页、已有/新建聊天 Tab 和真正的 `#settings` 星火设置页；账号弹窗 `#settings-panel` 保持原生。
- SparkDesk 连续背景已验证：宿主页使用完整背景，`#desk` 与 `#settings` 背景向上偏移 `80px`；Tab、导航栏、聊天主体和设置主体透明，无全屏 `blur(25px)` 遮挡。
- SparkDesk 深浅主题控件已验证：深色主题下输入框、模型切换、文档/截图/语音/发送按钮和设置卡片使用深色 surface 配亮色前景；亮色主题下自动反转。还原同步清理所有目标，无标题栏或新 Tab 残留。
- DeepSeek Harness `0.1.0-rc.5` 已完成端到端验证：发现 `D:\Program Files\DeepSeek Harness\DeepSeek Harness.exe`，首选端口 `9355`，主 renderer 匹配 `dsh-desktop-platform=`，主题应用返回 `applied: 1`。
- DeepSeek 整窗背景和浮层已验证：侧栏、`*_centerCol`、`*_composerSeat` 和 `*_composerStack` 透明无滤镜；设置 overlay 为全窗 `1440×920`，`800×800` panel 居中，不再受 `280px` 侧栏 containing block 限制。
- DeepSeek 深浅 palette 已验证：深色主题添加 `body[data-ds-dark-theme]`，侧栏文字为 `rgb(249, 250, 251)`；浅色主题移除属性，侧栏文字为 `rgb(15, 17, 21)`；还原恢复注入前的原生属性状态。
- 高频快捷主题已通过实测：不再依赖固定主题 ID，可按应用统计菜单和管理器中的主动切换，并在主题缺失时只显示实际可用项。
- 跨应用自定义图片共享已通过实测：集中图片库可被后续启动的其他受支持应用读取。

这里的“通过”表示注入通道、target 选择和 DOM 挂载能力已经验证。OpenCode、豆包、AgnesCode、MiniMax Code、AstronClaw、StepFun、SparkDesk 与 DeepSeek Harness 已额外完成本报告所列页面和原生恢复的视觉验收；其他应用以及应用升级后的新 DOM 仍需继续检查空白首页、已有对话、设置页、文件预览和弹窗。

### 9.10 已知风险与维护重点

#### 通用选择器范围

QoderWork 当前使用较宽的 `[class*="layout"]`、`[class*="content-area"]` 和 `[class*="main-content"]`。这保证首次适配可覆盖异步加载后的工作台，但可能影响弹窗或内部工具页面。后续应在 QoderWork 完整加载后重新采集 DOM，改为稳定、应用特有的选择器。

#### 应用升级导致类名变化

TRAE Work、CatPaw、ZCode、千问办公、HanaAgent、Kimi、OpenCode、豆包、AstronClaw、StepFun 和 SparkDesk 均大量使用构建生成类名或 Tailwind/业务类。优先依赖以下相对稳定信号：

- 应用前缀类名，例如 `solo-lite-*`、`catpaw-*`、`agents-*`
- 语义 ID，例如 `#sidebar`
- HTML 语义元素，例如 `main`、`aside`
- 应用原生 CSS 变量

避免依赖 Radix 自动 ID 或带 hash 的模块类名。

#### 随机端口旧文件

`DevToolsActivePort` 可能保留上一次进程的端口。读取后必须访问 `/json/version` 验证，不能只判断文件存在。

#### 多窗口和辅助 target

应用可能产生 Voice Input、Stripe iframe、worker、about:blank、插件 WebView 等 target。注入器必须继续使用 `rendererHints`，不能退回“注入所有 page target”的策略。

#### HanaAgent renderer 生命周期

HanaAgent 的 renderer 会在启动和部分界面切换期间被替换。维护时必须同时保留以下约束：

- 端口开放不代表最终 renderer 已稳定。
- 新 target 需要重新注册持久脚本并执行注入。
- 页面内「还原主题」必须优先于自动补注入，不能仅以样式节点缺失判断需要恢复。
- 管理器主动「应用主题」必须能够清除用户还原状态。

#### Kimi Work 双 renderer 与父进程限制

- Windows 不能改回 Node/Electron 通用 spawn，否则可能重新触发 `dev parent watcher`、`app://` 注册失败和主动退出。
- Work 与 Chat 必须作为两个独立 target 同时注入，不能在命中第一个 `kimi-agent.html` 后停止。
- Kimi watcher 只能匹配 `kimi-agent.html`、`kimichat.html` 和 `kimi.com`，避免注入 `volcano-tracker.html` 等辅助页面。
- Kimi 网站 DOM 更新时优先检查 `.publisher-stage`、`#chat-box`、`.chat-editor-content`、对话列表和输入区外层是否重新引入大面积不透明背景。
- 首次注入速度依赖短稳定确认，不应重新增加固定 3-4 秒 sleep。

#### OpenCode Desktop 动态端口与同名进程

- `DevToolsActivePort` 可能陈旧，读取后必须验证 `/json/version` 并确认存在 `oc://renderer/index.html` target。
- Windows 不能退回只按 `OpenCode.exe` 名称执行 `taskkill`，否则会误杀同名 CLI。
- OpenCode UI 更新时优先检查 `--v2-background-*` token、`bg-v2-background-bg-deep/base` 和 `group/prompt-input`。

#### 豆包导航、亮色 token 与通用选择器冲突

- 豆包是定制 Chromium，不应假设存在 `app.asar` 或 Electron API。
- 技能、新工作任务、AI 创作和历史对话可能导航或重载主 renderer；必须保留豆包 watcher 和还原状态判断。
- 豆包原生仅提供亮色 UI，大量 `dbx` / `s-color` token、亮色图片资源、placeholder 伪元素和 sticky 白底需要专属映射。
- 禁止让豆包重新命中通用 `[class*="message"]` 模糊规则。`message-list-*` 是全对话内容层，不是消息气泡。
- 允许保留局部玻璃效果的区域只有侧栏和实际底部输入卡片；对话内容层应保持透明且无 `backdrop-filter`。
- 带 hash 的类名可能在升级后变化，维护时优先结合语义 ID、token 类、页面 URL 和结构组合，不单独依赖完整 hash 类名。

#### AgnesCode Playwright CDP、fuse 与 ASAR 标题栏补丁

- 禁止退回普通 `--remote-debugging-port` 方案；AgnesCode 会在正式版主进程中主动删除该 switch。
- `AGNES_DEV`、`ENABLE_PLAYWRIGHT`、`PLAYWRIGHT_DEBUG_PORT` 和 `AGNESD_BINARY` 必须作为一组维护，缺少后端路径会导致 `agnesd binary not found`。
- 标题栏补丁写入前必须完整匹配压缩函数结构和 ASAR 大小，禁止按单个颜色字符串盲目替换。
- fuse wire 只能修改 `EnableEmbeddedAsarIntegrityValidation`。不得关闭 `OnlyLoadAppFromAsar`，不得启用 RunAsNode、Node options 或 Node inspector。
- `AgnesCode.exe.dream-work-original` 是当前版本 EXE 的恢复备份；`app.asar.dream-work-titlebar.json` 保存当前版本 ASAR 原始片段。应用升级后应覆盖 EXE 备份并按新 archive 生成新的片段备份。
- 必须通过 `original-fs` 访问外部 EXE/ASAR。普通 `fs` 和被 Vite bundle 的 `@electron/fuses` 都会重新触发 `ENOENT, not found in ...app.asar`。
- 补丁改变 AgnesCode 安装文件，可能使厂商签名/自更新校验失效。维护和发布说明中必须把它标记为 Windows AgnesCode 专属例外，并保留清晰的备份与失败停止策略。
- AgnesCode 版本升级后需要重新实测：应用启动、`9350/json/version`、主 renderer URL、`agnesd`、ACP、标题栏按钮透明度、主页/功能页/设置页背景和浮动菜单。

#### AgnesCode 与 MiniMax Code 原生模式恢复

- 两款应用都使用 `localStorage.theme` 保存原生浅色/深色选择，不能只保存主题注入开始时的 DOM 类名快照。
- `use_system_theme=true` 或 `theme=system` 时必须在还原动作发生时读取系统颜色偏好，不能缓存启动时结果。
- 主题模式兼容类只为自定义主题服务。还原时必须移除 `vscode-light`、`vscode-dark`、`cb-light`、`cb-dark` 以及 body 上的注入深浅类，避免应用原生 CSS 变量和兼容类产生混合状态。
- AgnesCode 的启动器、主工作区和会话窗口可能是多个 renderer；管理器级还原需要处理所有匹配 AgnesCode 主窗口 URL 的 page target。

#### MiniMax Code Tailwind 页面结构

- MiniMax Code 大量依赖 Tailwind token 类和结构组合。维护时优先使用 `bg-bg_*` 语义类与 `h-screen`、`inset-0`、`bottom-0`、`.message-input-container` 等结构组合，不依赖 React 自动 ID。
- 新建任务页通过 `.message-input-home-container` 区分首页输入框；历史对话页使用相同稳定输入卡片类但不同停靠外壳。两者视觉规则必须保持一致。
- 功能页右侧主体可能有 `bg-bg_default_primary` 和 `bg-bg_grouped_secondary` 两层覆盖。只透明化页面画布，保留技能卡片、输入卡片和弹窗的局部 surface。
- MiniMax Code 更新后优先回归：背景图、侧栏、新建任务、历史对话、技能、定时任务、连接、输入框导航稳定性以及浅色/深色还原矩阵。

#### AstronClaw 端口、内容画布与设置 hydrate

- 不能只用 TCP connect 失败判断 `9352` 已释放；Windows 幽灵监听可能无法连接但仍阻止新进程 bind。必须保留异步 bind 探测和实际端口回传。
- AstronClaw 的 `.local-chat-message-list`、`.local-chat-message-list-content`、`.local-chat-message` 和 `.local-chat-message-body` 名称都会命中通用 message 规则。不得重新启用通用深色背景或模糊。
- “我的技能”和“灵感广场”右侧主体使用通用 Tailwind `section.bg-card`，必须通过 `.local-chat-content-col` 结构限定透明规则，避免全局清除所有真正的卡片。
- 原生偏好来自 `window.astronDesktop.settings.get()`。不能把 AgnesCode/MiniMax Code 的 `localStorage.theme` 逻辑直接套用到 AstronClaw。
- 设置 hydrate 发生在首屏之后。还原必须在动作发生时异步读取持久化设置，不能信任首次注入快照；管理器级还原必须 await 完成后再关闭 CDP 会话。
- AstronClaw 更新后优先回归：首选端口冲突回退、主 renderer URL、背景图、侧栏、新建任务、历史对话、我的技能、灵感广场、输入卡片单层透明度以及浅色/深色/跟随系统还原。

#### StepFun 多 WebContents、动态端口与连续背景

- `DevToolsActivePort` 可能保留旧端口，读取后必须验证 `/json/version`，并确认至少存在宿主页或聊天页。首次只出现 CDP 服务时需要再次激活应用，不能简单延长单次 renderer 等待。
- 主题 target 白名单只包括 `app://ui/pages/browser/`、`app://chat-web/` 和 `https://chat.stepfun.com/subscription`。禁止注入 `flow-widget`、`popup-menu` 和其他辅助页面。
- 顶部宿主页与聊天/会员内容页是独立 WebContents。连续背景依赖当前 Tab `46px` + 导航栏 `44px` 的 `90px` 偏移；阶跃更新若改变高度，必须重新测量 `innerHeight`、`.tab-bar`、`.navigation-bar` 和 `.content-area`，不能保留错误常量。
- 聊天页 `body` 和 `#root.bg-bg-gold` 可能被运行时 Tailwind 样式重新设为深色。内容页透明规则必须带 `html[data-dream-stepfun-surface="content"]` 高优先级并同时清除 `background` 简写、`background-color` 和 `background-image`。
- 宿主页两侧 fallback 背景需要保留在 `html` 本体，聊天/会员页只使用带 `-90px` 偏移的虚拟背景层。若两边纯色、上下重复或底部断层，应分别检查宿主页根背景、内容页伪元素尺寸和根容器透明度。
- 新 Tab 和会员页创建新 target，必须由 watcher 补注入。单个 target 在遍历时销毁不能中断整轮同步。
- 各聊天 WebContents 的 `localStorage` 可能隔离。全局主题与还原以本机 `/app-state/stepfun` 和 `actionAt` 为准；旧状态不能覆盖较新的用户操作。
- 会员页 CSS module hash 可能更新。维护时优先匹配 `subscription-modal_root` / `subscription-modal_footer` 的稳定模块前缀，不写死完整 hash。
- 阶跃更新后优先回归：首次托盘启动、动态端口、普通新 Tab、会员 Tab、激活 Tab/导航栏、侧栏、聊天根层、连续背景、浮动菜单唯一性以及多 Tab 原生深色还原。

#### SparkDesk 多 WebContents、设置目标与深浅控件

- 主题 target 白名单只包括宿主 `index.html`、聊天/新建任务 `#desk` 和真正设置页 `#settings`。账号弹窗 `#settings-panel?contentType=settings`、悬浮球、快捷助手、历史和上传目标必须排除。
- 宿主页与内容页是独立 WebContents。连续背景依赖当前 Tab/导航合计 `80px`；星火更新若改变标题栏高度，必须重新测量主壳与内容 viewport，不能保留错误偏移。
- 星火根聊天容器可能重新引入原生渐变、`backdrop-filter: blur(25px)` 或白色大面积 surface。维护时必须同时检查 `background` 简写、`background-image`、`filter` 和 `backdrop-filter`。
- 输入框左右操作区和功能按钮使用 CSS Modules 前缀。优先匹配 `ask_operate_wrap`、`chat_func_wrap`、`right_operate_wrap`、`deep_think_switch`、`open_upload_btn`、`screen_shot_icon`、`voice_input` 和 `send`，避免依赖完整 hash。
- 控件前景必须由主题 `surface` 亮度决定：深色 surface 配亮色 text/SVG stroke，亮色 surface 配深色前景。只改子按钮、不改 `right_operate_wrap` 父背景会留下白色底层。
- 星火设置页的用户资料卡和编辑资料按钮原生使用纯白背景。深色主题必须同时映射卡片 surface 和文字，而不是只改文字；菜单图标图片在深色主题下需要亮色滤镜。
- SparkDesk watcher 使用 `/app-state/sparkdesk`、generation 和写入前状态确认处理新 Tab 与还原竞态。还原时保留延迟后的幂等二次清理，防止在途 watcher 重新创建样式。
- 星火更新后优先回归：宿主背景、Tab/导航、已有/新建聊天、真正的星火设置、账号弹窗排除、模型切换、四个右侧按钮、深浅主题矩阵、菜单唯一性和多目标还原。

#### 视觉验收

通用 Work 类适配目前重点保证：

- 背景图片出现在右侧主体。
- 侧栏和消息区域可读。
- 亮暗主题文字有基础对比度。
- 菜单可以显示和操作。

下一轮视觉优化应逐款应用分别调整：

1. 背景图位置和缩放。
2. 消息卡片遮罩透明度。
3. 亮色主题正文和次级文字。
4. 输入框、代码块和工具调用区域。
5. 弹窗、菜单、tooltip 和设置页。
6. 自定义图片在不同长宽比下的表现。

### 9.11 后续适配流程

新增 Work 类 Electron 应用时按以下顺序执行：

1. 从卸载注册表和开始菜单快捷方式确认真实安装目录与 exe。
2. 检查 `resources/app` 或 `resources/app.asar`，确认是否为 Electron。
3. 使用独立端口启动应用。
4. 检查 `/json/list`，记录主页面、辅助页面和 worker。
5. 如果应用会重写调试端口，检查用户数据目录的 `DevToolsActivePort`；否则验证首选端口 bind 失败时的自动顺延。
6. 通过 CDP 读取 `document.title`、URL、body 类、顶层节点、main、aside、sidebar 和原生 CSS 变量。
7. 判断应用应归入 `workbuddy`、`codex`、`vscode-work` 或 `generic-work`。
8. 在 `app-registry.ts` 添加 Windows、macOS、Linux 候选、端口策略和 `acceptsGenericThemes`。
9. 通用兼容不修改历史主题；只有不兼容或特殊布局才在 theme `apps` 中显式覆盖。
10. 为该应用收窄主内容和侧栏选择器。
11. 验证样式节点、菜单节点、高频快捷主题、自定义图片、renderer 导航/重建和原生恢复。
12. 在目标操作系统验证发现与启动，再执行 `pnpm typecheck` 和 `pnpm build:app`。

### 9.12 当前关键文件

| 文件 | 职责 |
|------|------|
| `electron/manager/app-registry.ts` | 17 款应用的三平台发现候选、启动、端口、类型、路径限定进程管理和默认主题兼容注册 |
| `electron/manager/discovery.ts` | 扫描 Windows 安装目录/版本目录/Codex Appx、macOS bundle 和 Linux desktop/executable |
| `electron/manager/launcher.ts` | 结束旧进程、跨平台启动、真实 bind 探测与动态端口回退、等待首选端口或 `DevToolsActivePort` CDP，并处理 HanaAgent/Kimi renderer 稳定、Kimi Windows 父进程限制、StepFun 托盘后二次激活、OpenCode/豆包/AstronClaw/StepFun/DeepSeek Harness 路径限定进程管理以及 AgnesCode Playwright CDP、fuse wire 和原生标题栏补丁 |
| `electron/manager/cdp.ts` | target 发现、WebSocket 会话和 Runtime.evaluate |
| `electron/manager/injector.ts` | 主题 CSS 生成、target 筛选、菜单、自定义图片、HanaAgent/Kimi/豆包/StepFun/SparkDesk 守护、OpenCode/豆包/AgnesCode/MiniMax Code/AstronClaw/StepFun/SparkDesk/DeepSeek Harness 专属 CSS 和原生深浅模式还原 |
| `vite.config.ts` | Renderer、Electron main 和 preload 构建配置；main/preload 的 `vite.build.outDir` 固定为根 `dist-electron/`，与 `package.json.main` 保持一致 |
| `electron/manager/custom-theme-store.ts` | 自定义图片集中存储、校验、本机共享同步服务和 StepFun/SparkDesk 跨 WebContents `/app-state` 状态端点 |
| `app.getPath('userData')/theme-usage.json` | 各应用预置主题的切换次数和最近使用时间，用于生成四个快捷主题 |
| `electron/manager/theme-store.ts` | 主题扫描、校验和按应用兼容性过滤 |
| `renderer/App.tsx` | 应用选择、真实端口记录、应用和还原流程 |
| `renderer/pages/Gallery.tsx` | 多应用主题画廊 |
| `themes/*/theme.json` | 主题颜色、图片和可选的应用兼容/布局显式覆盖 |

---

## 10. 早期计划与当前实现差异

| 早期计划 | 当前实现 |
|----------|----------|
| 默认 12 套主题 | 当前源码包含 345 份主题 manifest，运行时按内容去重 |
| 支持至少 5 款主流应用 | 当前注册 17 款应用 |
| 所有应用使用固定端口 | QoderWork、千问办公、OpenCode 和 StepFun 使用 `DevToolsActivePort`；SparkDesk 使用固定 `9354`；DeepSeek Harness 首选 `9355`；普通首选端口启动前真实 bind，不可绑定时自动顺延并回传实际端口 |
| 每款应用单独 profile 文件 | 使用集中式 `app-registry.ts` + 4 类注册类型，并为 HanaAgent、Kimi、OpenCode、豆包、AgnesCode、MiniMax Code、AstronClaw、StepFun、SparkDesk、DeepSeek Harness 增加专属 CSS/生命周期分支 |
| 主题背景可统一铺 body | WorkBuddy/Codex/其他应用均根据主体 DOM 放置图片，避免侧栏和外壳错误铺图 |
| 通用菜单挂到 body | 非 WorkBuddy 菜单使用 Shadow DOM host 和重挂载守护 |
| 需调研 ZCode、千问办公、CatPaw | 已完成 Windows 实机 Electron、CDP、URL 和 DOM 探测 |
| renderer target 启动后保持不变 | HanaAgent 需要稳定 target；Kimi 同时维护 Work/Chat 双 target；豆包导航会重载主 renderer；StepFun 维护宿主、聊天 Tab 和会员页；SparkDesk 维护宿主、聊天 Tab 和设置页；均由持久脚本或主进程 watcher 维护 |
| 所有目标应用都是标准 Electron | 豆包是定制 Chromium 应用，但仍可通过 CDP 使用统一主题注入链路 |
| 不修改任何目标应用安装文件 | 仍是默认原则；Windows AgnesCode 的原生 Window Controls Overlay 是唯一例外，需要备份 EXE/ASAR 片段、关闭单个完整性 fuse 并等长替换标题栏颜色代码 |
| 每个主题列出全部兼容应用 | 应用注册表提供 `acceptsGenericThemes` 默认值，manifest 只记录显式例外和布局 |

后续开发不应继续按前文旧文件清单机械创建未使用的 profile、base.css 或 menu.js；应优先深化现有注册表和注入器模块，保持实现与运行路径一致。
