import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://docs.scriptcat.org", // 当前网站部署到的域名

  iconPrefix: "iconfont icon-", // 图标的 FontClass 前缀

  logo: "/logo.png", // 导航栏图标

  repo: "scriptscat/scriptcat", // github 仓库，用于在导航栏中显示仓库链接

  docsRepo: "scriptscat/scriptcat.org",

  docsDir: "/docs",

  // docsDir: "demo/src", // 文档在仓库中的目录

  // 导航栏
  navbar: navbar,

  // 侧边栏
  sidebar: sidebar,

  footer:
    "Released under the MIT License Copyright © 2021-2022 ScriptCat 脚本猫", // 页脚

  editLink: true, // 是否展示编辑此页链接

  displayFooter: true, // 是否默认显示页脚

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"], // 文章信息

  themeColor: {
    // 主题色
    blue: "#2196f3",
    skyblue: "#87ceeb",
    red: "#f26d6d",
    orange: "#fb9b5f",
    aqua: "#00ffff",
  },

  /* encrypt: { // 加密配置
    config: {
      "/guide/": ["1234"], // "/路径/"：["密码1","密码2"]
    },
  }, */

  plugins: {
    copyright: {
      // 版权信息
      global: true,
      author: "ScriptCat",
    },

    search: {
      // 搜索插件
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    },

    mdEnhance: {
      // Markdown 增强功能
      enableAll: true, // 启用全部功能
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
