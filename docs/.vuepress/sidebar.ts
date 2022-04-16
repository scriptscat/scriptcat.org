import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig([
  {
    text: "目录",
    icon: "stack",
    children: [
      "/use/",
      {
        text: "开发指南",
        icon: "flower",
        collapsable: true,
        prefix: "/dev/",
        children: ["", "background", "cloudcat", "subscribe", "config", "api", "cat-api", "meta"],
      },
    ]
  }
]);