import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig([
  {
    text: "开发指南",
    icon: "stack",
    prefix: "/dev/",
    children: [
      "",
      "background",
      "cloudcat",
      "subscribe",
      "config",
      "api",
      "cat-api",
      "meta",
    ],
  },
]);
