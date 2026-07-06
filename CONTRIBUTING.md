# 贡献指南 / Contributing Guide

> EN summary: file path = doc ID = published URL, no `id:`/`sidebar_position:` frontmatter, no number-prefixed filenames, `title:` is the only page-title source (no body `# H1`), images live in a sibling `<doc-name>.assets/` folder, and every `docs/**/*.md` needs an `i18n/en/docusaurus-plugin-content-docs/current/**/*.md` mirror. Run `pnpm run check` before opening a PR — it enforces all of this. See [REFACTOR_PROPOSAL.md](./REFACTOR_PROPOSAL.md) for the full rationale.

本文档记录本仓库的文档结构约定，帮助人类贡献者和 AI Agent 在不读遍全部历史讨论的情况下，正确地新增/修改文档。

## 核心约定

| 关注点 | 唯一来源 |
|---|---|
| URL / doc ID | 文件路径本身（不使用 `id:`、不使用数字前缀） |
| 页面标题 / 侧边栏文字 / `<title>` | frontmatter `title:`（可选 `sidebar_label:` 用于侧边栏简称） |
| 侧边栏排序 | `sidebars.js`，三个 sidebar（`use`/`dev`/`change`）均为显式列表 |
| 图片 | `<文档名>.assets/` 同级目录 |
| 内部链接 | 指向 `.md` 文件的相对路径（构建时会校验） |
| URL 不变契约 | 提交的 `scripts/url-inventory.txt`，每次 PR 由 CI 校验 |

**为什么这样做**：过去 `id:`/`sidebar_position:`/数字前缀/`README.md` 四种机制同时存在，导致侧边栏文字和页面标题可能不一致（例如"VSCode 扩展开发脚本" vs 页面实际标题"使用 VSCode 开发脚本"），且文件名与 URL 无法直接对应。现在文件路径就是 URL，看文件名就知道页面在哪。

## 新增一篇文档

1. 在 `docs/<section>/` 下创建 `xxx.md`（不要加数字前缀，不要用 `README.md`——除非确实是该目录的落地页，此时用 `index.md`）。
2. frontmatter 只写 `title:`（必需）和可选的 `sidebar_label:`；不要写 `id:` 或 `sidebar_position:`。
3. 正文**不要**再写一个 `# 标题` 作为 H1——`title:` 会自动渲染为页面标题。
4. 在 `sidebars.js` 对应的数组里加一行 `"section/xxx"`（除非这是一个故意不出现在侧边栏的隐藏页面，如 `use/install_comple`）。
5. 在 `i18n/en/docusaurus-plugin-content-docs/current/<section>/xxx.md` 创建英文镜像，路径和文件名必须完全一致。
6. 图片放在 `docs/<section>/xxx.assets/` 下，用 `./xxx.assets/foo.png` 引用；纯 UI 截图等语言无关的图片，英文版可以用 `@site/docs/<section>/xxx.assets/foo.png` 直接复用中文版的图片，不必重复存一份二进制文件。
7. 跑一次 `pnpm run build && pnpm run check`，确认三项检查全部通过。

## 新增一条更新日志

`change/` 下的版本文件（`v1.x.md`）不使用数字前缀排序；在 `sidebars.js` 的 `change` 数组里手动插入新版本号（数组顺序即侧边栏顺序，新版本插在最前面）。`change/beta-changelog.md` 是 Beta 版本的单独更新日志。

## 加载不变的 URL（改动前必须确认不受影响）

以下 URL 被扩展程序硬编码调用，**任何重构都不能改变它们**：

- `/docs/script_installation/`
- `/docs/use/install_comple/`（`install_comple` 是历史拼写，故意保留，不是笔误）
- `/uninstall/`

`scripts/check-url-inventory.mjs` 会在每次 `pnpm run build` 后对比 `scripts/url-inventory.txt`；如果你的改动导致路由变化，CI 会失败并列出具体差异。**新增**路由是允许的（比如加一个 redirect），但需要在同一个 PR 里用 `node scripts/check-url-inventory.mjs --write` 更新这个文件，让 review 能看到你有意添加了什么。

## 翻译对照表

| 中文 | English |
|---|---|
| 脚本猫 | ScriptCat |
| 用户脚本 | user script |
| 后台脚本 | background script |
| 定时脚本 | scheduled script |
| 油猴 | Tampermonkey |

英文标题结构应尽量与中文一一对应（标题层级、顺序一致），这样跨语言的锚点链接更容易对齐；注意 Docusaurus 生成的锚点是基于**渲染后的英文标题文本**，不是中文锚点的直接翻译（例如 `## Scheduled Script (\`@crontab\`)` 生成的锚点是 `#scheduled-script-crontab`，需要用构建产物核实，不要凭感觉猜。

## 本地检查命令

```bash
pnpm run build          # 构建两个语言版本，onBrokenLinks/onBrokenAnchors 设置为 throw
pnpm run check           # 依次跑 url 一致性 / i18n 覆盖率 / frontmatter 规范三项检查
pnpm run check:urls       # 单独跑 URL 不变契约检查
pnpm run check:i18n       # 单独跑中英文档配对检查
pnpm run check:frontmatter # 单独跑 title/id/sidebar_position/H1 规范检查
```
