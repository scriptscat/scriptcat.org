import type { SidebarConfig } from "@vuepress/theme-default";

export const zh: SidebarConfig = {
  "/dev/": [
    {
      isGroup: true,
      text: "开发指南",
      children: [
        "/dev/README.md",
        "/dev/background.md",
        "/dev/api.md",
        "/dev/cat-api.md",
        "/dev/config.md",
        "/dev/cron.md",
        "/dev/meta.md",
      ],
    },
  ],
};
