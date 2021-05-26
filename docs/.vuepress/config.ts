import { navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  base:'/',
  lang: "zh-CN",
  title: "脚本猫",
  description: "脚本猫",
  head: [["link", { rel: "icon", href: "/images/logo.webp" }]],

  themePlugins: {
    // only enable git plugin in production mode
    git: isProd,
  },

  themeConfig: {
    logo: "/images/logo.webp",
    repo: "scriptscat/scriptcat.org",
   
    locales: {

      '/': {
        // navbar
        navbar: navbar.zh,

        // sidebar
        sidebar: sidebar.zh,

        // page meta
        editLinkText: 'Edit this page on GitHub',
      },

    } ,
  
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
    // [
    //   '@vuepress/plugin-shiki',
    //   isProd
    //     ? {
    //         theme: 'dark-plus',
    //       }
    //     : false,
    // ],
  ],
};


