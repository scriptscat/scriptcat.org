---
slug: /use/use
title: 快速入門
---

ScriptCat 是一個可以執行使用者腳本的瀏覽器擴充功能，與 Tampermonkey 腳本相容，並提供更多功能。如有 Bug 或建議，可前往 [GitHub 儲存庫](https://github.com/scriptscat/scriptcat) 提供回饋。

## 安裝擴充功能

| 瀏覽器 | 商店連結 | 狀態 |
| --- | --- | --- |
| Chrome | [穩定版](https://chrome.google.com/webstore/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf) [測試版](https://chromewebstore.google.com/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/jaehimmlecjmebpekkipmpmbpfhdacom?authuser=0&hl=zh-CN) | ✅ 可用 |
| Edge | [穩定版](https://microsoftedge.microsoft.com/addons/detail/scriptcat/liilgpjgabokdklappibcjfablkpcekh) [測試版](https://microsoftedge.microsoft.com/addons/detail/scriptcat-beta/nimmbghgpcjmeniofmpdfkofcedcjpfi) | ✅ 可用 |
| Firefox | [穩定版](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat/) [測試版](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat-pre/) | ✅ MV2 |

### 其他瀏覽器

如果您的瀏覽器不在上方清單中，可從 [Github Release](https://github.com/scriptscat/scriptcat/releases) 頁面下載 `zip`/`crx` 檔案並手動安裝。

### 未打包擴充功能安裝

① 從 [Github Release](https://github.com/scriptscat/scriptcat/releases) 或[社群下載](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html)頁面下載 `zip` 檔案

② 準備一個資料夾，將上方的 zip 檔案解壓縮到該資料夾。解壓縮後應如下所示（**注意：此資料夾不能刪除或移動，否則擴充功能將無法正常運作**）![download-zip](./use.assets/download-zip.webp)

③ 開啟瀏覽器的擴充功能管理介面，載入未打包的擴充功能（請先參閱[啟用開發者模式](/docs/use/open-dev/)）

- 1. **Edge** ![edge-load-unpacked](./use.assets/edge-load-unpacked.webp)
- 2. **Chrome** ![chrome-load-unpacked](./use.assets/chrome-load-unpacked.webp)

④ 選擇步驟 ② 建立的資料夾（載入完成後，ScriptCat 圖示會出現在擴充功能管理介面的擴充功能清單中）

- 1. **Edge** ![edge-load-unpacked-img](./use.assets/edge-load-unpacked-img.webp)
- 2. **Chrome** ![chrome-load-unpacked-img](./use.assets/chrome-load-unpacked-img.webp)

⑤ 點擊右上角的 ScriptCat 圖示，點擊出現的介面右上角的 `┆` > 取得腳本，即可前往腳本網站搜尋和安裝腳本。

注意：以此方式安裝的擴充功能無法自動更新。如需更新，請重複上述步驟更新擴充功能（替換檔案並重新載入一次）。


## 取得腳本

> 除了腳本外，您也可以從 [Tampermonkey 中文論壇](https://bbs.tampermonkey.net.cn/) 和[腳本開發指南](https://learn.scriptcat.org/) 獲取腳本資訊和教學。

### ScriptCat 腳本網站

[ScriptCat 腳本網站](https://scriptcat.org/) 是此擴充功能的腳本網站，您可以在這裡發布自己編寫的腳本。

- 新的腳本網站
- 背景腳本/排程腳本
- 友善的使用者介面

### Userscript.Zone 搜尋

[Userscript.Zone 搜尋](https://www.userscript.zone/?utm_source=tm.net&utm_medium=scripts) 可透過輸入適當的 URL 或網域搜尋使用者腳本。

- 大量腳本資源
- 輕鬆找到合適的使用者腳本

### GreasyFork

[GreasyFork](https://greasyfork.org/) 是一個廣泛用於託管和共享使用者腳本的平台。

- 大量腳本資源
- 具有從 Github 同步腳本的功能
- [非常活躍的開源開發模式](https://github.com/JasonBarnabe/greasyfork)

### GitHub/Gist

可在 [Github 和 Gist 搜尋腳本資源。](https://gist.github.com/search?l=JavaScript&o=desc&q="%3D%3DUserScript%3D%3D"&s=updated)

## 新手導覽

安裝 ScriptCat 後，開啟控制面板會自動開始新手導覽（也可隨時從左側邊欄的「幫助中心」重新開啟）。

- [安裝腳本](/en/docs/use/script_installation/)：從腳本服務市場安裝，包含[背景腳本](/en/docs/dev/background/) 支援
- 管理與操作：編輯、執行/停止、[UserConfig](/en/docs/dev/config/)
- [備份](/en/docs/use/sync/) 和[從其他管理器遷移](/en/docs/use/from-other/migrate-from-tampermonkey/)
- [腳本同步](/en/docs/use/sync/)
- [訂閱](/en/docs/dev/subscribe/)
