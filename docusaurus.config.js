// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from "prism-react-renderer";

// The locale list lives in check-config.json so that this file and the check
// scripts all read the same source. Adding a locale still means adding a localeConfigs
// entry below, an i18n/<locale>/code.json, and a deploy/docker/nginx.conf
// branch -- see agents/i18n.md.
const { defaultLocale, locales, i18nDocFallbacks = {} } = require("./scripts/check-config.json");
const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? defaultLocale;
const docsFallbackLocale = i18nDocFallbacks[currentLocale]?.sourceLocale;
const docsPath = docsFallbackLocale
  ? docsFallbackLocale === defaultLocale
    ? "docs"
    : `i18n/${docsFallbackLocale}/docusaurus-plugin-content-docs/current`
  : "docs";

const metadataByLocale = Object.fromEntries(
  locales.map((locale) => {
    const translations = require(`./i18n/${locale}/code.json`);
    const keywords = translations["homepage.meta.keywords"]?.message;
    const description = translations["homepage.meta.description"]?.message;
    if (!keywords || !description) {
      throw new Error(`Missing homepage SEO metadata translations for locale ${locale}`);
    }
    return [locale, { keywords, description }];
  })
);
const metadata = metadataByLocale[currentLocale] ?? metadataByLocale[defaultLocale];

// Docusaurus only *infers* `/<locale>/` as a locale's baseUrl when the build
// covers more than one locale. `docusaurus build --locale <one>` flips
// `automaticBaseUrlLocalizationDisabled` (see core's buildUtils.ts) and
// silently rebuilds the site at `/` — the multi-domain deployment shape — which
// turns every `/en/...` link into a broken link and writes the output to
// `build/` instead of `build/<locale>/`. CI always builds every locale at once,
// so it never trips this, but anyone narrowing a local build to one locale
// would -- pin the baseUrl instead of relying on that inference.
/** @type {(localeConfigs: {[locale: string]: Partial<import('@docusaurus/types').I18nLocaleConfig>}) => {[locale: string]: Partial<import('@docusaurus/types').I18nLocaleConfig>}} */
const withLocaleBaseUrls = (localeConfigs) =>
  Object.fromEntries(
    Object.entries(localeConfigs).map(([locale, localeConfig]) => [
      locale,
      { ...localeConfig, baseUrl: locale === defaultLocale ? "/" : `/${locale}/` },
    ])
  );

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ScriptCat",
  tagline: "强大的用户脚本管理器，激活浏览器的无限可能",
  url: "https://docs.scriptcat.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenAnchors: "throw",
  future: {
    // ssgWorkerThreads (part of `faster`) requires this v4 flag. Only this one
    // flag is enabled -- `v4: true` would also switch on CSS cascade layers and
    // storage namespacing, which change runtime behaviour.
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
    // `faster: true` (every flag) except that CI skips the persistent cache.
    // Full 20 locales, cold, alternating runs on one machine:
    //
    //   cache on    57s  50s  59s
    //   cache off   42s  41s  53s
    //
    // Every pair favours off, by 6-15s: CI starts cold and throws the container
    // away, so the ~1.6 GB that rspack writes there is never read back. Locally
    // it stays on, where a second build does read it (~39s).
    //
    // Absolute times on this machine drift by tens of seconds under sustained
    // load -- five builds back to back turned a 39s warm build into 83s. Only
    // the paired differences above mean anything; re-measure in pairs before
    // changing this.
    faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      mdxCrossCompilerCache: true,
      rspackBundler: true,
      rspackPersistentCache: !process.env.CI,
      ssgWorkerThreads: true,
      gitEagerVcs: true,
    },
  },
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
  },
  favicon: "img/logo.png",

  trailingSlash: true,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "scriptscat", // Usually your GitHub org/user name.
  projectName: "scriptcat.org", // Usually your repo name.

  plugins: [
    ["@gracefullight/docusaurus-plugin-tailwind", {}],
    [
      "@docusaurus/plugin-client-redirects",
      /** @type {import('@docusaurus/plugin-client-redirects').Options} */
      ({
        // /docs/use/use/ is the quick-start doc; /docs/use/ itself has never
        // resolved (broken footer link + broken in-content links) — redirect
        // it instead of renaming the existing doc, so no published URL moves.
        redirects: [
          {
            to: "/docs/use/use/",
            from: "/docs/use/",
          },
        ],
      }),
    ],
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale,
    locales,
    localeConfigs: withLocaleBaseUrls({
      "zh-Hans": {
        label: "简体中文",
        direction: "ltr",
        htmlLang: "zh-Hans",
      },
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en",
      },
      ru: {
        label: "Русский",
        direction: "ltr",
        htmlLang: "ru",
      },
      ar: {
        label: "العربية",
        direction: "rtl",
        htmlLang: "ar",
      },
      bn: {
        label: "বাংলা",
        direction: "ltr",
        htmlLang: "bn",
      },
      de: {
        label: "Deutsch",
        direction: "ltr",
        htmlLang: "de",
      },
      es: {
        label: "Español",
        direction: "ltr",
        htmlLang: "es",
      },
      fa: {
        label: "فارسی",
        direction: "rtl",
        htmlLang: "fa",
      },
      fr: {
        label: "Français",
        direction: "ltr",
        htmlLang: "fr",
      },
      hy: {
        label: "Հայերեն",
        direction: "ltr",
        htmlLang: "hy",
      },
      id: {
        label: "Bahasa Indonesia",
        direction: "ltr",
        htmlLang: "id",
      },
      it: {
        label: "Italiano",
        direction: "ltr",
        htmlLang: "it",
      },
      ja: {
        label: "日本語",
        direction: "ltr",
        htmlLang: "ja",
      },
      ko: {
        label: "한국어",
        direction: "ltr",
        htmlLang: "ko",
      },
      nl: {
        label: "Nederlands",
        direction: "ltr",
        htmlLang: "nl",
      },
      pt: {
        label: "Português",
        direction: "ltr",
        htmlLang: "pt",
      },
      tr: {
        label: "Türkçe",
        direction: "ltr",
        htmlLang: "tr",
      },
      uk: {
        label: "Українська",
        direction: "ltr",
        htmlLang: "uk",
      },
      vi: {
        label: "Tiếng Việt",
        direction: "ltr",
        htmlLang: "vi",
      },
      "zh-Hant": {
        label: "繁體中文",
        direction: "ltr",
        htmlLang: "zh-Hant",
      },
    }),
  },

  // AdSense 加载器。只需在 <head> 里出现一次，广告单元本身在
  // src/components/AdSlot 里渲染，不要在每个位置重复引入这个脚本。
  scripts: [
    {
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8009073269666226",
      async: true,
      crossorigin: "anonymous",
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Docusaurus normally falls back to the default (Chinese) docs tree.
          // For configured locales, use another locale as the base tree while
          // still letting localized files override it. check:i18n restricts
          // which paths may rely on this fallback.
          path: docsPath,
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/scriptscat/scriptcat.org/edit/main",
          // So "Edit this page" on /en/ docs opens the en source file, not zh.
          editLocalizedFiles: true,
        },
        // No blog/ directory exists; without this, newer Docusaurus versions
        // emit an empty /blog/ index route that was never part of the site.
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-7MBECV28JV",
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "weekly",
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content: metadata.keywords,
        },
        {
          name: "description",
          content: metadata.description,
        },
      ],
      navbar: {
        title: "ScriptCat",
        logo: {
          alt: "ScriptCat",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "use/use",
            position: "left",
            label: "使用文档",
          },
          {
            type: "doc",
            docId: "dev/index",
            position: "left",
            label: "开发文档",
          },
          {
            type: "doc",
            docId: "change/index",
            position: "right",
            label: "更新日志",
          },
          {
            href: "https://learn.scriptcat.org/",
            label: "脚本开发指南",
            position: "right",
          },
          {
            href: "https://github.com/scriptscat/scriptcat",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "使用指南",
                to: "/docs/use/use",
              },
              {
                label: "开发指南",
                to: "/docs/dev",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "油猴中文网",
                href: "https://bbs.tampermonkey.net.cn/",
              },
              {
                label: "脚本猫脚本站",
                href: "https://scriptcat.org/",
              },
              {
                label: "Discord",
                href: "https://discord.gg/JF76nHCCM7",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/scriptscat/scriptcat",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ScriptCat, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: "CWJJXTJUJS",
        apiKey: "283cbc6053e086e74123140ab8677465",
        indexName: "scriptcat",
        contextualSearch: true,
        searchPagePath: "search",
      },
    }),
};

module.exports = config;
