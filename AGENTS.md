# AGENTS.md

ScriptCat 文档站（docs.scriptcat.org）的 agent 指引。人类贡献者请看 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## 项目概览

ScriptCat 官方文档 + 落地页站点。ScriptCat 是一个执行用户脚本的浏览器扩展。技术栈：Docusaurus 3、React 18、TypeScript、Tailwind CSS、Ant Design。

包管理器是 **pnpm**（v10.9.0），Node.js >= 18。

## 常用命令

```bash
pnpm i                       # 安装依赖
pnpm run start               # 开发服务器（中文，默认 locale）
pnpm run start:en            # 开发服务器（英文，端口 3001）
pnpm run start:ru            # 开发服务器（俄语，端口 3002）
pnpm run build               # 生产构建（一次构建全部 locale）
pnpm run serve               # 本地预览生产构建产物
pnpm run typecheck           # TypeScript 类型检查
pnpm run check               # URL 契约 / fallback 产物 / i18n 覆盖率 / frontmatter 四项检查
pnpm run write-translations  # 生成 i18n 翻译文件骨架
```

## 提交前必做

`.gitea/workflows/ci.yaml` 会在每个 PR 上跑 `pnpm run typecheck && pnpm run build && pnpm run check`，`deploy.yaml` 发布前也会再跑一次 `build && check`。所以本地至少要过一遍：

```bash
pnpm run typecheck && pnpm run build && pnpm run check
```

注意几点：

- **`pnpm run check` 依赖 `build/` 产物**（`check:fallbacks` 要读构建出的 HTML），必须先 build。
- **不要只构建单个 locale**。`onBrokenLinks` 和 `onBrokenAnchors` 都是 `throw`，但断链/断锚点只有在对应 locale 构建时才会暴露；只跑 `--locale zh-Hans` 会漏掉俄语和英文的问题。
- 改了 `src/` 下的组件后，去 `build/`、`build/en/`、`build/ru/` 各抽查一页产物，别只看中文版。

## 硬性约束

1. **以下 URL 被浏览器扩展硬编码调用，任何改动都不能让它们变化**：`/docs/script_installation/`、`/docs/use/install_comple/`（`install_comple` 是历史拼写，故意保留，不是笔误）、`/uninstall/`。`scripts/url-inventory.txt` 是提交在仓库里的路由基线，`check:urls` 逐条比对。
2. **有意新增路由**要在同一个 PR 里用 `node scripts/check-url-inventory.mjs --write` 更新基线，让 review 看得见。
3. **不要往 `docs/` 下放非文档的 markdown**。`docs/` 是发布目录，新增 `.md` 会产生公开路由、要求各 locale 镜像、要求 `title:` frontmatter，会同时踩 `check:urls`、`check:i18n`、`check:frontmatter`。仓库内部文档放本目录（`agents/`）或根目录。
4. **不要假设站点只有中文和英文**。现在有三个 locale，相关约定见下。

## 目录结构

| 路径 | 说明 |
|---|---|
| `docusaurus.config.js` | 站点配置（i18n、导航栏、页脚、Algolia、GA、按 locale 的 SEO metadata） |
| `sidebars.js` | 三个 sidebar（`use`/`dev`/`change`）均为显式列表 |
| `docs/` | 中文文档（默认 locale）。三个板块：`use/` 使用指南、`dev/` 开发文档、`change/` 更新日志 |
| `i18n/<locale>/` | 各语言的文档镜像与 UI 文案 |
| `src/pages/` | 自定义页面（`index.tsx` 落地页、`uninstall.tsx` 卸载反馈问卷） |
| `src/components/landing/` | 落地页各区块（`sections.tsx`、`LandingNav.tsx`、`shared.tsx`） |
| `src/theme/` | Docusaurus 主题覆盖（自定义 `Footer`、`Root` 语言检测重定向） |
| `src/service/` | API 层（调用 `https://scriptcat.org/api/v2`） |
| `scripts/` | 检查脚本 + `check-config.json` 配置 + `url-inventory.txt` 路由基线 |
| `deploy/` | Dockerfile、nginx 配置、Helm chart |
| `agents/` | 本目录，给 agent 看的详细约定文档 |

## 多语言（改 i18n 相关代码前必读）

三个 locale：`zh-Hans`（默认，无 URL 前缀）、`en`（`/en/`）、`ru`（`/ru/`）。

最容易犯的四个错，**详细规则和踩坑记录见 [agents/i18n.md](./agents/i18n.md)**：

1. **写死语言名**——`currentLocale !== "en"`、`pathname.startsWith("/en/")` 之类会把俄语判成中文；拼前缀不先剥掉已有前缀会拼出 `/en/ru/x`（404）。判断语言用 `useDocusaurusContext().i18n.currentLocale`，遍历用 `i18n.locales` + `i18n.localeConfigs`。
2. **原生 `<a href="/...">` 忘了补 baseUrl**——非默认 locale 的 `baseUrl` 是 `/en/`、`/ru/`。`<Link to>` 和 markdown 链接会自动带，原生 `<a>` 和 antd `<Button href>` 不会，要套 `withBaseUrl()`。
3. **UI 文案硬编码**——一律走 `<Translate>` / `translate()`，key 加到 `i18n/en/code.json` 和 `i18n/ru/code.json`（两者键数和顺序必须一致）。
4. **语言假设不只在 `src/` 里**——`deploy/docker/nginx.conf` 的 404 分流、`docusaurus.config.js` 的 `metadataByLocale` 也按 locale 枚举，新增语言时要一起改。

`change/` 下的更新日志不做俄语翻译，俄语路由直接编译英文文档树（`docusaurus.config.js` 里按 `DOCUSAURUS_CURRENT_LOCALE` 切 `docs.path`）。**这个机制的作用范围是整棵树**：`i18n/ru/` 下缺任何文件都会静默显示英文而不报错，只有 `check:i18n` 能发现，所以别跳过 `pnpm run check`。

## 样式

- Tailwind CSS 通过 `@gracefullight/docusaurus-plugin-tailwind` 接入
- 组件级样式用 CSS Modules（`.module.css`）
- 主题色走 Infima CSS 变量（primary: `#4594d5`）
- 暗色模式用 `[data-theme="dark"]` 选择器；组件里要响应主题变化用 `src/components/useTheme.ts` 的 `useTheme()`
- 落地页的示例代码卡片对行宽敏感（`.codeCard` 固定 360px、编辑器 mock 行号是写死的 11 个 `<span>`），改文案要注意别撑开，详见 [agents/i18n.md](./agents/i18n.md)

## 主要依赖

**antd**（表单/按钮/卡片/弹窗）、**@iconify/react**（图标）、**swiper**（轮播）、**react-device-detect**（浏览器识别，用于安装引导）。

## 约定文档索引

- [CONTRIBUTING.md](./CONTRIBUTING.md) —— markdown 文档结构约定：文件路径即 URL、frontmatter 只写 `title:`、图片放同级 `.assets/`、URL 不变契约、翻译对照表
- [agents/i18n.md](./agents/i18n.md) —— 多语言代码约定：locale 判断、baseUrl、文案翻译、锚点、单一来源回退机制、新增 locale 的完整清单
