// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ScriptCat',
  tagline: '可以执行自定义脚本的浏览器扩展',
  url: 'https://scriptcat.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  trailingSlash: true,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  plugins: ['docusaurus-tailwindcss'],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/scriptscat/scriptcat.org/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-7MBECV28JV',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'keywords', content: 'scriptcat,userscript,backscript,browser extension,浏览器扩展,用户脚本,后台脚本,脚本猫' },
      ],
      navbar: {
        title: 'ScriptCat',
        logo: {
          alt: 'ScriptCat',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'use/use',
            position: 'left',
            label: '使用指南',
          }, {
            type: 'doc',
            docId: 'dev/dev',
            position: 'left',
            label: '开发指南',
          }, {
            type: 'doc',
            docId: 'change/change',
            position: 'right',
            label: '更新日志',
          },
          {
            href: 'https://github.com/scriptscat/scriptcat',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '使用指南',
                to: '/docs/use',
              },
              {
                label: '开发指南',
                to: '/docs/dev'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: '油猴中文网',
                href: 'https://bbs.tampermonkey.net.cn/',
              },
              {
                label: '脚本猫脚本站',
                href: 'https://scriptcat.org/',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/scriptscat',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/scriptscat/scriptcat',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ScriptCat, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'CWJJXTJUJS',
        apiKey: '283cbc6053e086e74123140ab8677465',
        indexName: 'scriptcat',
        contextualSearch: true,
        searchPagePath: 'search',
      },
    }),
};

module.exports = config;
