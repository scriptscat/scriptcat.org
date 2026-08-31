---
title: 啟用瀏覽器使用者腳本支援
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Icon } from "@iconify/react";
import BrowserGuide from '@site/src/components/BrowserGuide';
import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="install" />

<BrowserGuide texts={{
  allowUserScripts: {
    title: "您的瀏覽器支援「允許使用者腳本」",
    description: "請按照以下步驟啟用「允許使用者腳本」選項以正常使用 ScriptCat。",
    button: "查看步驟",
    anchor: "#allow-user-scripts",
  },
  devMode: {
    title: "您的瀏覽器需要啟用「開發者模式」",
    description: "請按照以下步驟啟用「開發者模式」以正常使用 ScriptCat。",
    button: "查看步驟",
    anchor: "#enable-developer-mode",
  },
  legacy: {
    title: "您的瀏覽器版本太舊",
    description: "您的瀏覽器不支援 Manifest V3。您需要手動安裝舊版 ScriptCat（v0.16.x）。",
  },
  nonChromium: {
    title: "未偵測到 Chromium 系瀏覽器",
    description: "ScriptCat 目前僅支援 Chromium 系瀏覽器（如 Chrome、Edge 等）。",
  },
}} />

## 允許使用者腳本

[允許使用者腳本](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#chrome_versions_138_and_newer_allow_user_scripts_toggle) 是 Manifest V3 的新功能。

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge</div>} default>

① 開啟瀏覽器的擴充功能管理介面，或訪問 [edge://extensions/](edge://extensions/)

② 找到 ScriptCat 擴充功能並點擊 `詳細資料`

③ 找到 `允許使用者腳本` 選項並啟用它。

> ⚠️⚠️⚠️ 對於較舊版本的 Edge（≤143），請參閱[啟用開發者模式](#enable-developer-mode)

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" />Chrome</div>}>

① 開啟瀏覽器的擴充功能管理介面，或訪問 [chrome://extensions/](chrome://extensions/)

② 找到 ScriptCat 擴充功能並點擊 `詳細資料`

③ 找到 `允許使用者腳本` 選項並啟用它。

</TabItem>
  <TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge Mobile</div>}>

對於瀏覽器引擎版本 ≥ 138 的 Edge Mobile，不需要開發者模式。在擴充功能設定中啟用 `允許使用者腳本`。

> ⚠️⚠️⚠️ 對於瀏覽器引擎版本低於 138，請參閱[啟用開發者模式](#enable-developer-mode)

  </TabItem>
</Tabs>

## 啟用開發者模式 {#enable-developer-mode}

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge</span></div>} default>

① 開啟瀏覽器的擴充功能管理介面，或訪問 [edge://extensions/](edge://extensions/)

② 啟用 `開發者模式`

③ 停用並重新啟用擴充功能，或重新啟動瀏覽器。

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" /><span>Chrome</span></div>}>

① 開啟瀏覽器的擴充功能管理介面，或訪問 [chrome://extensions/](chrome://extensions/)

② 啟用 `開發者模式`

③ 停用並重新啟用擴充功能，或重新啟動瀏覽器。

  </TabItem>

<TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge Mobile</span></div>}>

對於瀏覽器引擎版本低於 138 的 Edge Mobile，點擊擴充功能頁面頂部的設定按鈕以啟用開發者模式。

</TabItem>

</Tabs>

:::warning 舊版注意事項

如果您使用 Windows 8/7/XP 系統，或瀏覽器引擎版本低於 120，您需要手動安裝[舊版 ScriptCat](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html)。v0.16.x 是最後支援 Manifest V2 的版本。

:::

<details>
<summary>技術背景：Manifest V3</summary>

由於瀏覽器限制，擴充功能被迫升級到 Manifest V3，Manifest V2 擴充功能將在 2025 年 6 月後完全停止。在 Manifest V3 的限制下，您必須啟用開發者模式或使用者腳本功能才能正常使用 ScriptCat 擴充功能。

參考：[擴充功能用戶的開發者模式](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#developer_mode_for_extension_users)、[Manifest V3](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3?hl=en)

對於瀏覽器引擎版本 ≥ 138，您需要啟用「允許使用者腳本」。對於較舊版本，使用「啟用開發者模式」。

</details>
