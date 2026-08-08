# Dream Work Theme — 多应用主题切换工具项目计划

> 历史文档：本文前半部分是项目早期设计与实施计划，包含未采用、已改名或尚未实现的结构与功能。当前使用方法、支持应用、构建命令和目录结构以 `README.md`、`README_EN.md` 及实际代码为准；第 9 节记录当前实现状态。请勿将早期待办清单视为当前项目状态。

## 1. 目标

构建一个 **跨平台桌面应用**，支持给市面上主流 Electron Work 工具（WorkBuddy、TRAE Work、QoderWork、CatPaw、ZCode、千问办公、Codex / ChatGPT Desktop、HanaAgent、Kimi Work 等）一键切换主题。核心机制：**不改安装包、只注入运行中渲染进程的 CDP 层**。

交付物：
- 完整 Electron 项目
- 默认 4 套主题
- 自定义主题制作 SKILL
- 当前注册 9 款主流 Work 工具
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

所有目标应用均为 Electron 构建，支持 `--remote-debugging-port`。CDP 注入是通用方案，无需修改任何 `app.asar`。

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

> 本节记录 2026-08-02 至 2026-08-08 在 Windows 实机上的适配结果。前文是项目早期计划，其中应用数量、主题数量、目录结构、主题兼容模型和 CDP 端口策略已有变化；后续维护应以本节和当前代码为准。

### 9.1 当前支持范围

项目目前注册以下 9 款 Work 类桌面应用：

| 应用 ID | 显示名称 | 应用类型 | 默认 CDP 端口 | 当前状态 |
|---------|----------|----------|---------------|----------|
| `workbuddy` | WorkBuddy | WorkBuddy 专用结构 | `9339` | 已适配 |
| `codex` | Codex | Codex 专用结构 | `9340` | 已适配 |
| `trae-work` | TRAE Work | VS Code Work 派生结构 | `9341` | 已完成实机 CDP 验证 |
| `qoder-work` | QoderWork | 通用 Electron 工作台 | `9342`，运行时可能改为随机端口 | 已完成实机 CDP 验证 |
| `catpaw` | CatPaw | 通用 Electron 工作台 | `9343` | 已完成实机 CDP 验证 |
| `zcode` | ZCode | 通用 Electron 工作台 | `9344` | 已完成实机 CDP 验证 |
| `qwen-office` | 千问办公 | 通用 Electron 工作台 | `9345`，运行时可能改为随机端口 | 已完成实机 CDP 验证 |
| `hana-agent` | HanaAgent | 通用 Electron 工作台，专属注入策略 | `9346` | 已适配稳定 renderer 等待、持续守护和还原状态 |
| `kimi` | Kimi Work | Work/Chat 双 renderer，专属 CSS 与守护策略 | `9347` | 已适配 Windows Explorer 启动、双 target 注入、自动重注入和透明层 |

源码 `themes/` 当前包含 235 份 `theme.json`。运行时会按主题名称、作者和 hero 内容去重，因此实际菜单/画廊数量可能略少于 manifest 数量。

主题兼容不再依赖为每个应用批量写入 `theme.json.apps`。`listThemes(appId)` 先读取 manifest 的显式 `compat`，未声明时再使用应用注册表的 `acceptsGenericThemes` 默认值。当前 9 款应用均接受通用主题；主题仍可用 `compat:false` 拒绝某款应用，或通过 `layout` 提供应用特例。

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

### 9.4 CDP 启动与端口差异

所有应用仍采用 CDP 注入，不修改目标应用安装包。标准启动参数为：

```text
--remote-debugging-port=<port>
```

#### 固定端口应用

以下应用会将传入端口继续传递给 renderer，可以直接通过预定端口访问 `/json/list`：

- WorkBuddy
- Codex
- TRAE Work
- CatPaw
- ZCode
- HanaAgent
- Kimi Work

#### 随机端口应用

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

1. 首选固定端口变为可用。
2. `DevToolsActivePort` 出现有效随机端口。
3. 通过随机端口的 `/json/version` 验证 CDP 服务。
4. 将真实端口返回前端，后续状态检查和还原使用该端口。

这修正了早期“所有应用都能稳定使用固定 CDP 端口”的错误假设。

HanaAgent 虽然使用固定端口 `9346`，但其特殊点不是端口，而是 renderer 生命周期。`launcher.ts` 在端口可用后还会执行稳定 target 等待；`injector.ts` 注入后也会确认最终 renderer 连续稳定，再启动运行期守护。

Kimi Work 使用固定端口 `9347`。启动器在 CDP 可用后执行约 `750ms` 的短稳定确认，用于捕获 Windows 父进程异常退出，但不再叠加前端 4 秒或主进程 3 秒固定等待。renderer 就绪后立即调用 `applyTheme()`。

### 9.5 渲染页面识别

注入器不会向所有 page target 盲目注入，而是根据 `rendererHints` 匹配主页面 URL。

| 应用 | 实机主渲染页面特征 |
|------|--------------------|
| WorkBuddy | `app.asar/renderer/index.html`、`renderer/index.html` |
| Codex | `index.html`、`renderer/index.html` |
| TRAE Work | `solo/solo-lite.html` |
| QoderWork | `out/renderer/index.html#windowId=main` |
| CatPaw | `app.asar/dist/index.html` |
| ZCode | `app.asar/out/renderer/index.html` |
| 千问办公 | `app.asar/out/renderer/index.html#windowId=main` |
| HanaAgent | `.hanako/artifacts/renderer/`、`artifacts/renderer/` |
| Kimi Work | Work：`kimi-agent.html`；Chat：`kimichat.html` 或 `https://www.kimi.com/` |

QoderWork 和千问办公还存在 `voice-overlay.html` 页面，ZCode 存在 Stripe iframe 和 worker target，CatPaw 存在 `about:blank` page。HanaAgent 会替换 renderer target；Kimi Work 的 Work 与 Chat 本来就是两个独立 target。URL hint 可以避免菜单和主题被错误注入辅助页面，HanaAgent/Kimi 还需要在正确 URL hint 的基础上持续处理 target 创建、导航和更替。

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

### 9.7 CSS 生成器分层

当前 `electron/manager/injector.ts` 中存在 6 个 CSS 生成器，对应 4 类注册类型以及 HanaAgent、Kimi 的专属分支：

| 生成器 | 应用 |
|--------|------|
| `buildWorkBuddyCss()` | WorkBuddy |
| `buildCodexCss()` | Codex |
| `buildVsCodeWorkCss()` | TRAE Work |
| `buildGenericWorkCss()` | QoderWork、CatPaw、ZCode、千问办公 |
| `buildHanaAgentCss()` | HanaAgent |
| `buildKimiCss()` | Kimi Work |

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

HanaAgent 使用专属轻量菜单，支持预置主题切换、自定义图片、「还原主题」和点击空白处关闭。其自定义图片代码与通用菜单相互独立，但通过 Dream Work Theme 主进程的本机共享图片服务读写同一图片库，以实现跨应用上传、切换和删除同一批图片，同时降低完整菜单结构引发崩溃的风险。服务只监听 `127.0.0.1` 并使用进程内随机令牌鉴权。菜单入口统一使用 `◉` 按钮标识和相同的 `36px` 基础按钮样式。HanaAgent 菜单和样式采用更高频的页面内连接守护，并配合主进程 renderer watcher 处理 target 更替。Kimi 使用通用 Shadow DOM 菜单脚本，但由 Kimi watcher 同时维护 Work/Chat target。

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

菜单 host 使用最高层级，并通过 `__dreamWorkMenuGuard` 定时检查连接状态。重复注入和还原时会清理旧菜单、定时器和外部点击监听器。HanaAgent 使用主进程 watcher 监控最终 renderer；Kimi watcher 监控 Work/Chat 双 target。还原状态存在时守护逻辑不得覆盖用户主动停用。

### 9.9 实机验证结果

适配阶段对新增应用执行了真实 CDP 页面连接和 JavaScript/CSS 注入能力验证；HanaAgent 还验证了稳定 renderer、持续守护与还原后不自动恢复，Kimi 还验证了 Explorer 启动、Work/Chat 双 target 和导航后自动恢复：

| 应用 | CDP 页面发现 | Runtime.evaluate | 样式节点注入 | 浮动菜单节点注入 |
|------|---------------|------------------|--------------|------------------|
| WorkBuddy | 通过 | 通过 | 通过 | 通过 |
| TRAE Work | 通过 | 通过 | 通过 | 通过 |
| QoderWork | 通过，使用随机端口 | 通过 | 通过 | 通过 |
| CatPaw | 通过 | 通过 | 通过 | 通过 |
| ZCode | 通过 | 通过 | 通过 | 通过 |
| 千问办公 | 通过，使用随机端口 | 通过 | 通过 | 通过 |
| HanaAgent | 通过，固定端口并等待稳定 target | 通过 | 通过 | 通过 |
| Kimi Work | 通过，固定端口并确认 Work/Chat target | 通过 | 通过，双 target | 通过，双 target |
| Codex / ChatGPT Desktop | 通过 | 通过 | 通过 | 通过 |

构建验证：

- `pnpm typecheck` 通过。
- `pnpm build:app` 通过。
- 根目录 `dist-electron/main.js` 与 Vite 最新 Electron 输出保持同步。
- 9 款应用通过 `acceptsGenericThemes` 默认兼容和 manifest 显式覆盖模型读取主题，无 HanaAgent/Kimi 硬编码放行。
- Kimi Work 首次注入实测同时覆盖 Work 与 Chat，返回 `applied: 2`；两个 target 重载后均能恢复主题。
- 高频快捷主题已通过实测：不再依赖固定主题 ID，可按应用统计菜单和管理器中的主动切换，并在主题缺失时只显示实际可用项。
- 跨应用自定义图片共享已通过实测：集中图片库可被后续启动的其他受支持应用读取。

这里的“通过”表示注入通道、target 选择和 DOM 挂载能力已经验证。各应用在不同页面状态下的最终视觉细节仍需要逐页验收，例如空白首页、已有对话、设置页、文件预览、弹窗和升级后的新 DOM。

### 9.10 已知风险与维护重点

#### 通用选择器范围

QoderWork 当前使用较宽的 `[class*="layout"]`、`[class*="content-area"]` 和 `[class*="main-content"]`。这保证首次适配可覆盖异步加载后的工作台，但可能影响弹窗或内部工具页面。后续应在 QoderWork 完整加载后重新采集 DOM，改为稳定、应用特有的选择器。

#### 应用升级导致类名变化

TRAE Work、CatPaw、ZCode、千问办公、HanaAgent 和 Kimi 均大量使用构建生成类名或 Tailwind/业务类。优先依赖以下相对稳定信号：

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
5. 如果固定端口不可用，检查用户数据目录的 `DevToolsActivePort`。
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
| `electron/manager/app-registry.ts` | 9 款应用的三平台发现候选、启动、端口、类型和默认主题兼容注册 |
| `electron/manager/discovery.ts` | 扫描 Windows 安装目录/版本目录/Codex Appx、macOS bundle 和 Linux desktop/executable |
| `electron/manager/launcher.ts` | 结束旧进程、跨平台启动、等待固定或随机 CDP 端口，并处理 HanaAgent/Kimi renderer 稳定与 Kimi Windows 父进程限制 |
| `electron/manager/cdp.ts` | target 发现、WebSocket 会话和 Runtime.evaluate |
| `electron/manager/injector.ts` | 主题 CSS 生成、target 筛选、菜单、自定义图片、HanaAgent/Kimi 持久守护和还原 |
| `electron/manager/custom-theme-store.ts` | 自定义图片集中存储、校验和本机共享同步服务 |
| `app.getPath('userData')/theme-usage.json` | 各应用预置主题的切换次数和最近使用时间，用于生成四个快捷主题 |
| `electron/manager/theme-store.ts` | 主题扫描、校验和按应用兼容性过滤 |
| `renderer/App.tsx` | 应用选择、真实端口记录、应用和还原流程 |
| `renderer/pages/Gallery.tsx` | 多应用主题画廊 |
| `themes/*/theme.json` | 主题颜色、图片和可选的应用兼容/布局显式覆盖 |

---

## 10. 早期计划与当前实现差异

| 早期计划 | 当前实现 |
|----------|----------|
| 默认 5 套主题 | 当前源码包含 235 份主题 manifest，运行时按内容去重 |
| 支持至少 5 款应用 | 当前注册 9 款应用 |
| 所有应用使用固定端口 | QoderWork 和千问办公使用 `DevToolsActivePort` 随机端口 |
| 每款应用单独 profile 文件 | 使用集中式 `app-registry.ts` + 4 类注册类型，并为 HanaAgent、Kimi 增加专属 CSS/生命周期分支 |
| 主题背景可统一铺 body | WorkBuddy/Codex/其他应用均根据主体 DOM 放置图片，避免侧栏和外壳错误铺图 |
| 通用菜单挂到 body | 非 WorkBuddy 菜单使用 Shadow DOM host 和重挂载守护 |
| 需调研 ZCode、千问办公、CatPaw | 已完成 Windows 实机 Electron、CDP、URL 和 DOM 探测 |
| renderer target 启动后保持不变 | HanaAgent 需要稳定 target；Kimi 同时维护 Work/Chat 双 target；两者均使用持久脚本和主进程 watcher |
| 每个主题列出全部兼容应用 | 应用注册表提供 `acceptsGenericThemes` 默认值，manifest 只记录显式例外和布局 |

后续开发不应继续按前文旧文件清单机械创建未使用的 profile、base.css 或 menu.js；应优先深化现有注册表和注入器模块，保持实现与运行路径一致。
