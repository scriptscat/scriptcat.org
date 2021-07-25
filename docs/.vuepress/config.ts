import { navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  base: '/',
  lang: "zh-CN",
  title: "脚本猫",
  description: "一个可以执行用户脚本的浏览器扩展,万物皆可脚本化,让你的浏览器可以做更多的事情!",
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],

  themePlugins: {
    // only enable git plugin in production mode
    git: isProd,
  },

  themeConfig: {
    logo: "/images/logo.png",
    repo: "scriptscat/scriptcat.org",
    repoLabel: 'GitHub',
    editLinks: true,
    docsDir: 'docs',
    lastUpdated: 'Last Updated',
    locales: {

      '/': {
        // navbar
        navbar: navbar.zh,

        // sidebar
        sidebar: sidebar.zh,

        // page meta
        editLinkText: '在 GitHub 上编辑此页',
      },

    },

  },



  markdown: {
    // importCode: {
    //   handleImportPath: (str) =>
    //     str.replace(
    //       /^@vuepress/,
    //       path.resolve(__dirname, '../../packages/@vuepress')
    //     ),
    // },
  },


  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-138255059-4'
      }
    ]
  ],

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },

};
