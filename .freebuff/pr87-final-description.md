## feat(i18n): complete translations for all 20 locales with full 44/44 doc parity

### What this PR does

Adds full internationalization support for **20 locales** — every page, every JSON translation file, and the landing page UI all translated.

### Scope

#### 📄 Markdown Documentation (44+ files × 20 locales)
- All docs translated: dev docs, API reference, agent docs, user guides, policy pages
- Explicit heading IDs added to prevent broken cross-language anchor links
- Image assets copied to all locale directories

#### 🌐 JSON Translation Files
| File | Locales | Keys |
|------|---------|------|
| `code.json` | 19 | 320+ keys each (UI text, hero, scenarios, footer) |
| `navbar.json` | 17 | Navigation labels |
| `footer.json` | 17 | Footer links and copyright |
| `docusaurus-theme-classic/` | per-locale | Theme strings |

#### 🎨 Landing Page Enhancements
- **Language dropdown now follows dark/light theme** (Ant Design portal CSS fix)
- **Language dropdown is scrollable** when content overflows the viewport
- **Language selector accessible on mobile** via hamburger menu
- **RTL step arrows flip correctly** for Arabic/Persian
- **Search keywords localized** — landing page search links use translated terms instead of hardcoded Chinese

#### 📚 Terminology Glossary
- Added `agents/i18n-terminology.md` — consistent translations for core product terms, technical API terms, UI terms, and code-specific terms across all 20 locales

### Locales
`ar`, `bn`, `de`, `en`, `es`, `fa`, `fr`, `hy`, `id`, `it`, `ja`, `ko`, `nl`, `pt`, `ru`, `tr`, `uk`, `vi`, `zh-Hans`, `zh-Hant`

### Status
- ✅ All 20 locales build cleanly
- ✅ All code.json keys match EN source (320 keys each)
- ✅ All markdown docs at 44/44+ parity with EN source
- ✅ Landing page renders correctly in all locales including RTL
- ✅ Theme-aware language dropdown with scroll support

### Note
PRs #88–#97 are superseded by this PR — their content has been merged into this branch. Please close those when reviewing.
