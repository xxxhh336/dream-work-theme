# Custom Theme Maker

Use this workflow to create a source theme that Dream Work Theme can load from `themes/<theme-id>/`.

## Inputs

- Theme concept or visual direction
- Optional reference image
- Theme name and author
- Compatible application IDs

Current application IDs:

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
```

## Output

```text
themes/<theme-id>/
├── theme.json
├── theme.css
└── hero.png
```

The hero may also be JPEG, WebP, or GIF if the `hero` field uses the matching filename.

## Workflow

1. Choose a lowercase theme ID containing only letters, numbers, and hyphens.
2. Generate or select a background image without embedded UI or watermarks.
3. Extract a readable four-color palette.
4. Create `theme.json` using schema version `1`.
5. Mark application compatibility explicitly in `apps`.
6. Start Dream Work Theme with `pnpm run electron:dev`.
7. Select each compatible application and verify background cropping, text contrast, native component styling, floating menu placement, frequent quick themes, and restore behavior.

## Manifest

```json
{
  "schemaVersion": 1,
  "id": "my-theme",
  "name": "My Theme",
  "author": "User",
  "hero": "hero.png",
  "colors": {
    "accent": "#24c9d7",
    "secondary": "#ef8fd3",
    "surface": "#f7fbff",
    "text": "#17344f"
  },
  "copy": {
    "brand": "My Theme",
    "headline": "Custom theme"
  },
  "apps": {
    "workbuddy": { "compat": true },
    "codex": { "compat": true },
    "hana-agent": { "compat": true }
  }
}
```

`copy` is optional. An application appears in the filtered gallery only when its entry has `compat: true`.

The floating menu no longer contains fixed theme IDs. It shows up to four frequently used preset themes for each application. After compatibility is declared, a new theme first appears in the gallery; applying it from Dream Work Theme or selecting it from the floating menu increments usage for that application and can promote it into the quick menu. With no usage history, compatible themes fill the available quick-menu slots.

For HanaAgent compatibility, also test renderer recreation after startup: the theme should appear after the renderer stabilizes, and it must remain disabled for several seconds and across reloads or view changes after **Restore Theme** is selected.

## Validation Implemented by the App

- `schemaVersion` must equal `1`.
- `id` must match `^[a-z0-9-]+$`.
- `name` must be non-empty.
- `author` and `hero` must be strings.
- `accent`, `secondary`, `surface`, and `text` must be `#RRGGBB` colors.
- The referenced hero file must exist and be a regular file.

The application does not currently enforce exact image dimensions. A wide desktop-oriented image is recommended because injected themes generally use `background-size: cover`.

## Palette Guidance

- `accent`: buttons, links, selections, and high-emphasis controls
- `secondary`: complementary accents and secondary highlights
- `surface`: fallback application surface and translucent material base
- `text`: foreground color with sufficient contrast against `surface`

Test both the image and colors. Application-specific injectors intentionally preserve many native cards, code blocks, messages, and controls, so a palette must work with the target application's own component hierarchy.

## Storage Behavior

Source themes placed in `themes/` are bundled into `app.asar` during packaging. Existing packages do not update when the source directory changes; rebuild them.

Update themes are stored under `app.getPath('userData')/themes`, not inside the read-only ASAR. User themes are searched before bundled themes.

## Test Commands

```bash
pnpm run typecheck
pnpm run electron:dev
```

There is no source-tree theme CLI in the current project. Use the desktop UI to browse and apply themes.
