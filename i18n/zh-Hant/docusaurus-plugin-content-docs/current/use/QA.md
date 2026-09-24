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

## CSP / Trusted Types 限制 {#csp-trusted-types}

#### Q: 網站的 CSP 限制導致腳本無法正常執行，該怎麼辦？

在 ScriptCat 的 **Network Rules（網路規則）** 頁面依序選擇「工具 → 網路規則 → 新增規則 → 移除 CSP」，並在「套用範圍」中只填入實際發生問題的網站，例如 `example.com`。儲存規則後，重新整理已開啟的頁面即可套用。

「移除 CSP」範本會針對主框架與子框架的文件請求移除 CSP 回應標頭，也可以選擇同時移除 `X-Frame-Options`。

#### Q: 遇到 `This document requires 'TrustedHTML' assignment.` 該怎麼辦？

這通常表示瀏覽器因 Trusted Types 限制而拒絕某項 DOM 操作。網站可以透過 CSP 指令 `require-trusted-types-for 'script'` 啟用 Trusted Types；userscript 執行不符合要求的操作時可能出現此錯誤。這是瀏覽器執行網站安全政策，單憑錯誤訊息不能斷定是 ScriptCat 的問題。

如果限制是由文件回應中的 CSP 回應標頭啟用，可以嘗試只為該網站建立上述「移除 CSP」規則。若錯誤不是由規則能移除的 CSP 回應標頭引起，就不一定能解決。

#### Q: 為什麼 ScriptCat 不預設對所有網站移除 CSP？

CSP 和 Trusted Types 有助於降低跨網站指令碼（XSS）等攻擊風險。移除 CSP 會削弱符合規則網站原有的安全保護。建議只為確實需要的網站建立規則。ScriptCat 支援「所有網站」範圍，但儲存前會要求確認。

:::warning 安全提示

除非了解並接受相關安全影響，否則不要使用「所有網站」範圍。

:::

:::info 關於 ScriptCat 自身的 Trusted Types 相容性問題

[ScriptCat #1239](https://github.com/scriptscat/scriptcat/issues/1239) 也包含一項 `GM_xmlhttpRequest` 相容性問題，後來已由 [ScriptCat #1242](https://github.com/scriptscat/scriptcat/pull/1242) 修正。該修正不會停用或繞過 Trusted Types，也不會修改網站的 CSP。若仍使用舊版 ScriptCat，請更新至目前版本。

:::

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
