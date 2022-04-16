import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  lang: "zh-CN", // 站点的语言

  title: "ScriptCat", // 站点的标题

  base: "/", // 部署站点的基础路径 默认："/"

  head: [
    // 在最终渲染出的 HTML 的 <head> 标签内加入的额外标签
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "logo.png",
      },
    ],
  ],

  plugins: [
    [
      "@vuepress/google-analytics",
      {
        id: "G-7MBECV28JV",
      },
    ],
  ],

  dest: "./dist",

  themeConfig,
});
