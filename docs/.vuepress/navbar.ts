import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/",
  {
    text: "使用指南",
    icon: "creative",
    link: "/use/",
  },
  {
    text: "开发指南",
    icon: "flower",
    link: "/dev/",
  },
  {
    text: "更新日志",
    icon: "editor",
    link: "/change/",
  },
  {
    text: "关于我们",
    icon: "info",
    link: "/about/",
  },
]);