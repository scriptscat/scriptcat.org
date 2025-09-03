// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ScriptCat",
  tagline: "可以执行自定义脚本的浏览器扩展",
  url: "https://docs.scriptcat.org",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",

  trailingSlash: true,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "scriptscat", // Usually your GitHub org/user name.
  projectName: "scriptcat.org", // Usually your repo name.

  plugins: [["@gracefullight/docusaurus-plugin-tailwind", {}]],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans", "en", "ja", "ru", "vi", "de", "zh-Hant", "es", "fr", "ar", "it", "pt"],
    localeConfigs: {
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
      ja: {
        label: "日本語",
        direction: "ltr",
        htmlLang: "ja",
      },
      ru: {
        label: "Русский",
        direction: "ltr",
        htmlLang: "ru",
      },
      vi: {
        label: "Tiếng Việt",
        direction: "ltr",
        htmlLang: "vi",
      },
      de: {
        label: "Deutsch",
        direction: "ltr",
        htmlLang: "de",
      },
      "zh-Hant": {
        label: "繁體中文",
        direction: "ltr",
        htmlLang: "zh-Hant",
      },
      es: {
        label: "Español",
        direction: "ltr",
        htmlLang: "es",
      },
      fr: {
        label: "Français",
        direction: "ltr",
        htmlLang: "fr",
      },
      ar: {
        label: "العربية",
        direction: "rtl",
        htmlLang: "ar",
      },
      it: {
        label: "Italiano",
        direction: "ltr",
        htmlLang: "it",
      },
      pt: {
        label: "Português",
        direction: "ltr",
        htmlLang: "pt",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/scriptscat/scriptcat.org/edit/main",
        },
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
          content:
            "scriptcat,userscript,browser extension,浏览器扩展,用户脚本,后台脚本,脚本猫,tampermonkey,violentmonkey,greasemonkey,javascript,自动化脚本,网页增强",
        },
        {
          name: "description",
          content: "ScriptCat 是一个可以执行自定义脚本的浏览器扩展，支持用户脚本、后台脚本等多种脚本类型。提供强大的脚本管理、同步、订阅等功能。",
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
            docId: "dev/dev",
            position: "left",
            label: "开发文档",
          },
          {
            type: "doc",
            docId: "change/change",
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
                to: "/docs/use",
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
