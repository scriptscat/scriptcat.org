// 新版本已废弃, 请使用docs/.vuepress/sidebar.ts, 保留是为了未来可能的国际化

import type { SidebarConfig } from "@vuepress/theme-default";

export const zh: SidebarConfig = {
  "/use": [
    {
      isGroup: true,
      text: "使用指南",
      children: [
        "/use/README.md"
      ]
    }
  ],
  "/dev/": [
    {
      isGroup: true,
      text: "开发指南",
      children: [
        "/dev/README.md",
        "/dev/background.md",
        "/dev/cloudcat.md",
        "/dev/subscribe.md",
        "/dev/config.md",
        "/dev/api.md",
        "/dev/cat-api.md",
        "/dev/meta.md",
      ],
    },
  ],
};
