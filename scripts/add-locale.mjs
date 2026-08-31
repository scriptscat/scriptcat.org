#!/usr/bin/env node
/**
 * add-locale.mjs — Scaffold a new locale for the ScriptCat docs site.
 *
 * Usage:
 *   node scripts/add-locale.mjs <locale-code> "<Language Label>" <direction> <htmlLang>
 *
 * Examples:
 *   node scripts/add-locale.mjs pl "Polski" ltr pl
 *   node scripts/add-locale.mjs th "ไทย" ltr th
 *   node scripts/add-locale.mjs he "עברית" rtl he
 *
 * What it does:
 *   1. Creates i18n/<locale>/ directory structure mirroring docs/
 *   2. Copies translatable English .md files as untranslated placeholders
 *   3. Rewrites shared image references to the canonical English assets
 *   4. Configures change/ to fall back to the English source
 *   5. Creates code.json from en/ (EN translations as placeholder)
 *   6. Creates current.json with sidebar labels
 *   7. Creates docusaurus-theme-classic/ from en/
 *   8. Registers the locale in docusaurus.config.js
 *
 * After running this script, you MUST:
 *   - Translate all .md files (use agents/i18n-terminology.md for glossary)
 *   - Translate code.json (325 keys, keep key order identical to en/)
 *   - Translate navbar.json and footer.json
 *   - Translate current.json sidebar labels
 *   - Run: pnpm run build && pnpm run check
 */

import { readFileSync, writeFileSync, mkdirSync, cpSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep, dirname, posix } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const I18N_DIR = join(ROOT, "i18n");
const EN_DIR = join(I18N_DIR, "en");
const DOCS_PLUGIN = "docusaurus-plugin-content-docs";
const THEME_PLUGIN = "docusaurus-theme-classic";
const EN_DOCS_DIR = join(EN_DIR, DOCS_PLUGIN, "current");
const EN_ASSET_PREFIX = `@site/i18n/en/${DOCS_PLUGIN}/current`;

// ── Helpers ──────────────────────────────────────────────────────────────────

function walkDocs(dir, base = dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      results.push(...walkDocs(full, base));
    } else if (/\.mdx?$/.test(entry)) {
      results.push(relative(base, full).split(sep).join("/"));
    }
  }
  return results.sort();
}

function ensureDir(dir) {
  mkdirSync(dir, { recursive: true });
}

function rewriteSharedAssetReferences(content, docPath) {
  const docDir = posix.dirname(docPath);
  const canonical = (assetPath) => {
    const decoded = decodeURIComponent(assetPath.replace(/^\.\//, ""));
    return `${EN_ASSET_PREFIX}/${posix.normalize(posix.join(docDir, decoded))}`;
  };
  return content
    .replace(/\]\(\/en\/docs\//g, "](/docs/")
    .replace(/(["'])\/en\/docs\//g, "$1/docs/")
    .replace(/(!\[[^\]]*\]\()((?!@site\/)(?:\.\/)?[^)\s]+\.assets\/[^)]+)(\))/g, (_, open, asset, close) =>
      `${open}${canonical(asset)}${close}`
    )
    .replace(/(src=["'])((?!@site\/)(?:\.\/)?[^"']+\.assets\/[^"']+)(["'])/g, (_, open, asset, close) =>
      `${open}${canonical(asset)}${close}`
    );
}

function findMatchingBrace(source, openIndex) {
  let depth = 0;
  for (let index = openIndex; index < source.length; index++) {
    if (source[index] === "{") depth++;
    if (source[index] === "}" && --depth === 0) return index;
  }
  throw new Error("Could not find matching closing brace in docusaurus.config.js");
}

// ── Main ─────────────────────────────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);
  if (args.length < 4) {
    console.error("Usage: node scripts/add-locale.mjs <locale> \"<Label>\" <ltr|rtl> <htmlLang>");
    console.error("Example: node scripts/add-locale.mjs pl \"Polski\" ltr pl");
    process.exit(1);
  }

  const [locale, label, direction, htmlLang] = args;

  if (!/^[a-z]{2}(-[A-Za-z]{2,4})?$/.test(locale)) {
    console.error(`Invalid locale code: "${locale}". Expected format: "xx" or "xx-XX".`);
    process.exit(1);
  }

  if (direction !== "ltr" && direction !== "rtl") {
    console.error(`Invalid direction: "${direction}". Must be "ltr" or "rtl".`);
    process.exit(1);
  }

  const localeDir = join(I18N_DIR, locale);
  if (existsSync(localeDir)) {
    console.error(`Locale "${locale}" already exists at ${localeDir}.`);
    process.exit(1);
  }

  console.log(`\n🌍 Scaffolding locale: ${locale} (${label}, ${direction})\n`);

  // ── Step 1: Create directory structure ────────────────────────────────────

  const docsPluginDir = join(localeDir, DOCS_PLUGIN, "current");
  const themeDir = join(localeDir, THEME_PLUGIN);
  ensureDir(docsPluginDir);
  ensureDir(themeDir);

  // ── Step 2: Copy translatable docs as placeholders ────────────────────────

  const sourceDocs = walkDocs(EN_DOCS_DIR).filter((docPath) => !docPath.startsWith("change/"));
  let mdCount = 0;

  for (const docPath of sourceDocs) {
    const src = join(EN_DOCS_DIR, docPath);
    const dst = join(docsPluginDir, docPath);
    ensureDir(dirname(dst));
    const placeholder = rewriteSharedAssetReferences(readFileSync(src, "utf8"), docPath);
    writeFileSync(dst, placeholder);
    mdCount++;
  }

  console.log(`  ✅ Copied ${mdCount} translatable .md files from the English source`);

  // ── Step 3: Configure the changelog fallback ──────────────────────────────

  const checkConfigPath = join(ROOT, "scripts", "check-config.json");
  const checkConfig = JSON.parse(readFileSync(checkConfigPath, "utf8"));
  checkConfig.i18nDocFallbacks ??= {};
  checkConfig.i18nDocFallbacks[locale] = { sourceLocale: "en", paths: ["change/"] };
  writeFileSync(checkConfigPath, JSON.stringify(checkConfig, null, 2) + "\n");
  console.log("  ✅ Configured change/ to fall back to en (shared assets are not copied)");

  // ── Step 4: Create code.json from en/ ─────────────────────────────────────

  const enCodeJson = JSON.parse(readFileSync(join(EN_DIR, "code.json"), "utf8"));
  const codeJsonPath = join(localeDir, "code.json");
  writeFileSync(codeJsonPath, JSON.stringify(enCodeJson, null, 2) + "\n");

  console.log(`  ✅ Created code.json (${Object.keys(enCodeJson).length} keys — translate all values)`);

  // ── Step 5: Create current.json with sidebar labels ───────────────────────

  const currentJson = {
    "version.label": {
      message: "Next",
      description: "The label for version current",
    },
    "sidebar.use.category.服务协议": {
      message: "Service Agreement",
      description: "The label for category Service Agreement in sidebar use",
    },
    "sidebar.use.category.从其它管理器迁移": {
      message: "Migrate from other managers",
      description: "The label for category Migrate from other managers in sidebar use",
    },
    "sidebar.dev.category.Agent 智能助手": {
      message: "Agent",
      description: "The label for category Agent in sidebar dev",
    },
  };

  const currentJsonPath = join(docsPluginDir, "..", "current.json");
  writeFileSync(currentJsonPath, JSON.stringify(currentJson, null, 2) + "\n");

  console.log(`  ✅ Created current.json (4 sidebar label keys — translate all values)`);

  // ── Step 6: Create theme files from en/ ───────────────────────────────────

  const themeFiles = ["navbar.json", "footer.json"];
  for (const file of themeFiles) {
    const src = join(EN_DIR, THEME_PLUGIN, file);
    const dst = join(themeDir, file);
    if (existsSync(src)) {
      cpSync(src, dst);
    }
  }

  console.log(`  ✅ Created ${themeFiles.length} theme files (translate all values)`);

  // ── Step 7: Register locale in docusaurus.config.js ───────────────────────

  const configPath = join(ROOT, "docusaurus.config.js");
  let config = readFileSync(configPath, "utf8");

  // Add to the shared locales array used by i18n and SEO metadata.
  const localesMatch = config.match(/const locales = \[([^\]]+)\];/);
  if (localesMatch) {
    const localesStr = localesMatch[1];
    if (!localesStr.includes(`"${locale}"`)) {
      const newLocales = localesStr.trim().replace(/,\s*$/, "") + `, "${locale}"`;
      config = config.replace(
        /const locales = \[[^\]]+\];/,
        `const locales = [${newLocales}];`
      );
    }
  } else {
    throw new Error("Could not find the shared locales array in docusaurus.config.js");
  }

  // Add to localeConfigs
  const localeConfigBlock = `      "${locale}": {\n        label: "${label}",\n        direction: "${direction}",\n        htmlLang: "${htmlLang}",\n      },`;

  const localeConfigsStart = config.indexOf("localeConfigs:");
  const localeConfigsOpen = config.indexOf("{", localeConfigsStart);
  if (localeConfigsStart < 0 || localeConfigsOpen < 0) {
    throw new Error("Could not find localeConfigs in docusaurus.config.js");
  }
  const localeConfigsClose = findMatchingBrace(config, localeConfigsOpen);
  config =
    config.slice(0, localeConfigsClose) + localeConfigBlock + "\n    " + config.slice(localeConfigsClose);
  writeFileSync(configPath, config);

  console.log(`  ✅ Registered "${locale}" in docusaurus.config.js`);

  // ── Summary ───────────────────────────────────────────────────────────────

  console.log(`\n🎉 Locale "${locale}" scaffolded successfully!\n`);
  console.log(`Next steps:`);
  console.log(`  1. Translate all ${mdCount} .md files in i18n/${locale}/${DOCS_PLUGIN}/current/`);
  console.log(`  2. Translate i18n/${locale}/code.json (${Object.keys(enCodeJson).length} keys — keep the English key set)`);
  console.log(`  3. Translate i18n/${locale}/${THEME_PLUGIN}/navbar.json and footer.json`);
  console.log(`  4. Translate i18n/${locale}/${DOCS_PLUGIN}/current.json (4 sidebar label keys)`);
  console.log(`  5. Translate homepage.meta.keywords and homepage.meta.description in code.json`);
  console.log(`  6. Add ${locale} to deploy/docker/nginx.conf and the Algolia crawler`);
  console.log(`  7. Run: pnpm run typecheck && pnpm run build && pnpm run check`);
  console.log(`\nGlossary: agents/i18n-terminology.md`);
  console.log(`Conventions: agents/i18n.md\n`);
}

main();
