---
title: 常見問題
---

## 開發者模式 / 使用者腳本權限

#### Q: ScriptCat 顯示「開發者模式未啟用」且腳本無法執行？

從 Chrome 120+ 和較新的 Edge 版本開始，瀏覽器要求使用者手動啟用權限。請參閱[啟用瀏覽器使用者腳本支援](/docs/use/open-dev/)。

如果已啟用但警告仍然出現，請嘗試重新啟動瀏覽器或重新載入擴充功能。

## 腳本無法運作

#### Q: 已安裝腳本但沒有效果？

1. **「允許使用者腳本」未啟用** — 參閱[啟用瀏覽器使用者腳本支援](/docs/use/open-dev/)
2. **冷啟動** — 瀏覽器首次開啟時，腳本可能不會立即載入。嘗試重新整理頁面
3. **擴充功能衝突** — 廣告攔截器（如 uBlock Origin）可能導致腳本錯誤

#### Q: 腳本在 Tampermonkey 上運作但在 ScriptCat 上不運作？

ScriptCat 和 Tampermonkey 在 API 實作上有部分差異。請更新至最新版本。如果問題持續，請在 [GitHub](https://github.com/scriptscat/scriptcat/issues) 提交 Issue。

## 雲端同步問題

> 基本同步使用方式，參閱[同步與備份](/docs/use/sync/)。

#### Q: OneDrive / Google Drive / WebDAV 同步有問題？

1. **已刪除的腳本重新出現** — 確保所有裝置上已啟用「同步刪除」

## 腳本安裝問題

> 腳本安裝方式，參閱[安裝腳本](/docs/use/script_installation/)。

## Cookie 授權問題

#### Q: GM_cookie 無法取得 cookie？

1. **授權彈出視窗未出現** — 確保腳本的 `@grant` 中已正確宣告 `GM_cookie`，並使用 `@connect` 宣告需要存取的網域

## 腳本資料遺失

#### Q: 開啟瀏覽器後所有腳本都消失了？

1. **初始化延遲** — 瀏覽器啟動時 ScriptCat 可能仍在載入資料。等待幾秒或重新啟動瀏覽器
2. **清理軟體** — 360 安全衛士或 CCleaner 等工具可能清除擴充功能資料。在清理設定中排除瀏覽器擴充功能資料
3. **建議定期備份** — 使用匯出功能或[雲端同步](/docs/use/sync/)定期備份腳本和設定
