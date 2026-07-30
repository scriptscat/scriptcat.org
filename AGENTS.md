# AGENTS.md

Agent guide for the ScriptCat documentation site (docs.scriptcat.org). Human contributors should start with [CONTRIBUTING.md](./CONTRIBUTING.md).

> Note on language: this file is in English. [CONTRIBUTING.md](./CONTRIBUTING.md) and [agents/i18n.md](./agents/i18n.md) are written in Chinese with an English summary at the top — read that summary line first if you only need the gist.

## Project overview

The official documentation and marketing site for ScriptCat, a browser extension that runs user scripts. Stack: Docusaurus 3, React 18, TypeScript, Tailwind CSS, Ant Design.

Package manager is **pnpm** (v10.9.0). Node.js >= 18.

## Commands

```bash
pnpm i                       # Install dependencies
pnpm run start               # Dev server (Chinese, default locale)
pnpm run start:en            # Dev server (English, port 3001)
pnpm run start:ru            # Dev server (Russian, port 3002)
pnpm run build               # Production build (builds every locale in one pass)
pnpm run serve               # Serve the production build locally
pnpm run typecheck           # TypeScript type checking
pnpm run check               # URL contract / fallback output / i18n parity / frontmatter
pnpm run write-translations  # Scaffold i18n translation files
```

## Before you commit

`.gitea/workflows/ci.yaml` runs `pnpm run typecheck && pnpm run build && pnpm run check` on every PR, and `deploy.yaml` runs `build && check` again before shipping. CI lives on Gitea, so GitHub shows no status checks — that does **not** mean there is no CI. Run this locally at minimum:

```bash
pnpm run typecheck && pnpm run build && pnpm run check
```

Three things to know:

- **`pnpm run check` needs the `build/` output** (`check:fallbacks` reads the generated HTML), so build first.
- **Do not build a single locale only.** `onBrokenLinks` and `onBrokenAnchors` are both `throw`, but a broken link or anchor only surfaces in the locale that contains it — `--locale zh-Hans` alone misses English and Russian breakage.
- After touching anything in `src/`, spot-check a page in `build/`, `build/en/` **and** `build/ru/`. Verifying only the Chinese output is how most of this repo's localization bugs got through.

## Hard constraints

1. **These URLs are hardcoded by the browser extension and must never change**: `/docs/script_installation/`, `/docs/use/install_comple/` (`install_comple` is a legacy spelling, deliberately kept — not a typo), `/uninstall/`. `scripts/url-inventory.txt` is the committed route baseline and `check:urls` diffs against it.
2. **Intentional new routes** must update that baseline in the same PR via `node scripts/check-url-inventory.mjs --write`, so reviewers can see what you added on purpose.
3. **Never put non-documentation markdown under `docs/`.** `docs/` is the published tree: a new `.md` there creates a public route, requires a mirror in every locale, and requires `title:` frontmatter — it trips `check:urls`, `check:i18n` and `check:frontmatter` at once. Repo-internal docs belong in `agents/` or the repo root.
4. **Never assume the site has only Chinese and English.** There are three locales; see below.

## Layout

| Path | What it is |
|---|---|
| `docusaurus.config.js` | Site config (i18n, navbar, footer, Algolia, GA, per-locale SEO metadata) |
| `sidebars.js` | Three sidebars (`use`/`dev`/`change`), all explicit lists |
| `docs/` | Chinese docs (default locale). Three sections: `use/` guides, `dev/` API docs, `change/` changelogs |
| `i18n/<locale>/` | Per-locale doc mirrors and UI strings |
| `src/pages/` | Custom pages (`index.tsx` landing page, `uninstall.tsx` feedback survey) |
| `src/components/landing/` | Landing page sections (`sections.tsx`, `LandingNav.tsx`, `shared.tsx`) |
| `src/theme/` | Docusaurus theme overrides (custom `Footer`, `Root` language-detection redirect) |
| `src/service/` | API layer (calls `https://scriptcat.org/api/v2`) |
| `scripts/` | Check scripts, `check-config.json`, `url-inventory.txt` route baseline |
| `deploy/` | Dockerfile, nginx config, Helm chart |
| `agents/` | Detailed conventions written for agents |

## Localization (read before touching i18n code)

Three locales: `zh-Hans` (default, no URL prefix), `en` (`/en/`), `ru` (`/ru/`).

The four mistakes that keep recurring — **full rules and incident notes in [agents/i18n.md](./agents/i18n.md)**:

1. **Hardcoding a locale name.** `currentLocale !== "en"` or `pathname.startsWith("/en/")` classifies Russian as Chinese; building a prefix without stripping the existing one produces `/en/ru/x` (a 404). Read the locale from `useDocusaurusContext().i18n.currentLocale`; iterate with `i18n.locales` and `i18n.localeConfigs`.
2. **Forgetting baseUrl on a plain `<a href="/...">`.** For non-default locales `baseUrl` is `/en/` or `/ru/`. `<Link to>` and markdown links apply it automatically; plain `<a>` and antd `<Button href>` do not — wrap those in `withBaseUrl()`.
3. **Hardcoded UI copy.** Everything user-facing goes through `<Translate>` / `translate()`, with keys added to both `i18n/en/code.json` and `i18n/ru/code.json` (identical key count **and** order).
4. **Locale assumptions outside `src/`.** `docusaurus.config.js`'s `metadataByLocale` and `deploy/docker/nginx.conf`'s 404 routing both enumerate locales by hand and must be updated when adding a language. The nginx one is invisible to the build and to `pnpm run check` — it only shows up in production.

Changelogs under `change/` are not translated into Russian: the Russian routes compile the English doc tree directly (`docusaurus.config.js` swaps `docs.path` based on `DOCUSAURUS_CURRENT_LOCALE`). **That fallback covers the whole tree**, so any file missing under `i18n/ru/` silently renders in English instead of failing the build — only `check:i18n` catches it. Do not skip `pnpm run check`.

## Styling

- Tailwind CSS via `@gracefullight/docusaurus-plugin-tailwind`
- Component-scoped styles via CSS Modules (`.module.css`)
- Theme colors through Infima CSS variables (primary: `#4594d5`)
- Dark mode via the `[data-theme="dark"]` selector; for components that must react to theme changes use `useTheme()` from `src/components/useTheme.ts`
- The landing page's mock code cards are width-sensitive (`.codeCard` is a fixed 360px, and the editor mock's line numbers are a hardcoded 11 `<span>`s). Translated copy that is too long wraps and desyncs the gutter — see [agents/i18n.md](./agents/i18n.md).

## Key dependencies

**antd** (forms, buttons, cards, modals), **@iconify/react** (icons), **swiper** (carousel), **react-device-detect** (browser detection for the install guide).

## Conventions index

- [CONTRIBUTING.md](./CONTRIBUTING.md) — markdown/doc structure: file path is the URL, `title:` is the only page-title source, images in a sibling `.assets/` folder, the URL contract, translation glossary
- [agents/i18n.md](./agents/i18n.md) — localization in code: locale detection, baseUrl, translated copy, cross-locale anchors, the single-source fallback mechanism, and a step-by-step checklist for adding a locale
