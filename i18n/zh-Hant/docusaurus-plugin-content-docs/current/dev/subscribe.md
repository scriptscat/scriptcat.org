---
title: 訂閱模式
---

檔案必須以 `UserSubscribe` 開頭，而非 `UserScript`。安裝連結應使用 `user.sub.js` 擴展名，且必須是 `https` 連結。

訂閱腳本僅在安裝時顯示安裝對話框供用戶確認訂閱；後續更新為靜默執行，僅在 `connect` 權限變更時才會再次顯示更新對話框。

單個訂閱腳本可以描述多個腳本的安裝連結。透過訂閱模式安裝的腳本會靜默安裝，無需確認對話框，已安裝的腳本仍會出現在腳本清單中 — 但它們的 `connect` 權限使用訂閱中宣告的 `connect`，而非腳本自身的 `connect` 權限。

```js
// ==UserSubscribe==
// @name         xxx
// @description  訂閱 xxx 腳本系列
// @version      0.1.0
// @author       You
// @connect      www.baidu.com
// @scriptUrl    https://script.tampermonkey.net.cn/48.user.js
// @scriptUrl    https://script.tampermonkey.net.cn/49.user.js
// ==/UserSubscribe==
```

## 訂閱更新與腳本更新

根據用戶設定的 `更新間隔`，ScriptCat 會定期檢查訂閱連結以獲取更新；必須設定 `version` 才能生效。

每次訂閱更新或變更都會將腳本連結與目前安裝的腳本進行比較：不再存在於新訂閱中的腳本會被移除，新添加的腳本會靜默安裝。腳本更新遵循腳本自身的 `version`，使用與正常安裝的腳本相同的更新邏輯。

## 靜默安裝與更新

已訂閱的腳本會靜默安裝和更新 — 從訂閱中新增、移除或更新腳本僅顯示通知，無需用戶再次確認。由於這種靜默更新機制，請僅訂閱您信任的來源。

## 元資料

某些元資料欄位在訂閱腳本中的含義會發生變化。

### name

訂閱名稱（也可以在訂閱清單中直接編輯）

### description

訂閱描述，描述訂閱的用途

### version

訂閱版本。如果省略，則改為根據訂閱腳本的內容是否已變更來觸發更新。

### connect

請求對網站的存取權限；請參閱 `GM_cookie` 和 `GM_xmlhttpRequest`。對於透過訂閱模式安裝的腳本，`connect` 會被訂閱的 `connect` 覆蓋。

### scriptUrl

訂閱所需的腳本安裝連結
