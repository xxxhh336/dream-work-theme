# 自定义主题制作

本流程用于创建 Dream Work Theme 可从 `themes/<theme-id>/` 加载的源码主题。

## 输入

- 主题概念或视觉方向
- 可选参考图
- 主题名称和作者
- 兼容的应用 ID

当前应用 ID：

```text
workbuddy
codex
trae-work
qoder-work
catpaw
zcode
qwen-office
hana-agent
kimi
opencode
doubao
agnes-code
minimax-code
astronclaw
```

## 输出

```text
themes/<theme-id>/
├── theme.json
├── theme.css
└── hero.png
```

hero 也可以使用 JPEG、WebP 或 GIF，只需让 `hero` 字段与实际文件名一致。

## 制作流程

1. 选择只包含小写字母、数字和连字符的主题 ID。
2. 生成或选择不带 UI、水印和文字的背景图。
3. 提取可读性良好的四色调色板。
4. 使用 schema version `1` 创建 `theme.json`。
5. 通常保持 `apps` 为空，使用应用注册表的通用兼容默认值；只有拒绝某个应用或需要特殊布局时才显式声明。
6. 使用 `pnpm run electron:dev` 启动 Dream Work Theme。
7. 对每个兼容应用检查背景裁切、文字对比度、原生组件样式、浮动菜单位置、高频快捷主题和还原行为。

## Manifest

```json
{
  "schemaVersion": 1,
  "id": "my-theme",
  "name": "我的主题",
  "author": "用户",
  "hero": "hero.png",
  "colors": {
    "accent": "#24c9d7",
    "secondary": "#ef8fd3",
    "surface": "#f7fbff",
    "text": "#17344f"
  },
  "copy": {
    "brand": "我的主题",
    "headline": "自定义主题"
  },
  "apps": {
    "workbuddy": { "compat": true },
    "codex": { "compat": true },
    "hana-agent": { "compat": true }
  }
}
```

`copy` 可省略。兼容性采用“应用注册表默认 + manifest 显式覆盖”：未声明应用时读取该应用的 `acceptsGenericThemes`；只有需要拒绝某个应用或覆盖特殊布局时才写 `compat` / `layout`。

右下角菜单不再固定展示指定主题 ID，而是为每个应用显示最多四个高频预置主题。新主题通过注册表默认兼容或 manifest 显式兼容后会出现在主题画廊；从 Dream Work Theme 应用或从浮动菜单切换后会累积该应用下的使用次数，并可能进入快捷菜单。没有使用历史时，快捷菜单会从当前应用实际兼容的主题中补足。

HanaAgent 适配时还应验证启动后的 renderer 重建场景：主题应在 renderer 稳定后显示；点击「还原主题」后，等待数秒并刷新或切换界面，主题都不应自动恢复。

AstronClaw 适配时应检查新建任务、历史对话、我的技能和灵感广场，避免通用 `[class*="message"]`、`bg-card` 或 `backdrop-filter` 形成大面积遮挡；还原测试必须分别覆盖其设置 API 中的浅色、深色和跟随系统模式。

## 应用当前执行的校验

- `schemaVersion` 必须为 `1`。
- `id` 必须匹配 `^[a-z0-9-]+$`。
- `name` 不能为空。
- `author` 和 `hero` 必须为字符串。
- `accent`、`secondary`、`surface`、`text` 必须是 `#RRGGBB`。
- hero 指向的文件必须存在且是普通文件。

应用当前不强制图片精确尺寸。建议使用适合桌面窗口的宽图，因为注入背景通常使用 `background-size: cover`。

## 调色板建议

- `accent`：按钮、链接、选中态和高强调控件
- `secondary`：辅助点缀和次级高亮
- `surface`：应用后备底色和半透明材质基色
- `text`：与 `surface` 保持足够对比度的前景色

不能只检查图片。应用适配器会保留许多原生消息、代码块、工具卡片和控件，因此调色板也要适配目标应用本身的视觉层级。

## 存储行为

放入源码 `themes/` 的主题会在打包时写入 `app.asar`。修改源码目录不会更新已经构建的安装包，必须重新打包。

更新主题写入 `app.getPath('userData')/themes`，不会写入只读 ASAR。用户主题的搜索优先级高于内置主题。

## 测试命令

```bash
pnpm run typecheck
pnpm run electron:dev
```

当前项目没有源码主题 CLI，请通过桌面 UI 浏览和应用主题。
