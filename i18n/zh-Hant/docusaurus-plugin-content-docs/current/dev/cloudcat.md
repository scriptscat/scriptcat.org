---
title: 雲端執行
---

> 提供了多種在雲端運行的方式；詳情請參閱 [運行環境](#running-environments)。此外，[CloudCat](https://github.com/scriptscat/cloudcat) 是一個在雲端運行背景腳本的服務 — 一個仍在開發中的 FAAS 平台。

⚠ 請注意 ⚠，上傳到雲端後，排程腳本表達式中 `once` 的含義會改變：`once` 之前的時間在運行時會被替換為其最小值。

例如：

* `* * once * *` => `0 0 * * *`：每天運行一次，變為每天 00:00 運行
* `* 1-23 once * *` => `0 1 * * *`：每天在 1:00 到 23:00 之間運行一次，變為每天 01:00 運行
* `* 1,3,5 once * *` => `0 1 * * *`：每天在 1:00、3:00 或 5:00 運行一次，變為每天 01:00 運行
* `* */4 once * *` => `0 0 * * *`：每 4 小時運行一次，變為每天 00:00 運行
* `* 1-23/4 once * *` => `0 1 * * *`：每天在 1:00 到 23:00 之間每 4 小時運行一次，變為每天 01:00 運行
* `* 10 once * *` => `0 10 * * *`：每天 10:00 運行一次，變為每天 10 點 00 分運行
* `* * * once *` => `0 0 1 * *`：每月運行一次，變為每月 1 日 00:00 運行

## 其他 CloudCat 描述值

參考腳本：[Bilibili Auto Check-in](https://scriptcat.org/script-show-page/48)

### cloudCat

宣告此屬性允許腳本透過 `CloudCat` 運行。一旦腳本有此選項，腳本清單中會出現雲端執行按鈕；點擊後可以選擇執行方式 — 請參閱 [運行環境](#running-environments)。

![image-20220203225847694](@site/docs/dev/cloudcat.assets/image-20220203225847694.png)

### cloudServer

> 與 cloudCat 相關，尚未實現

預設的 cloudCat 伺服器位址

### exportValue

描述要匯出到雲端的 Values；允許多次宣告。

```ts
// @exportValue key1,key2,key3
// @exportValue key4,key5,key6
```

### exportCookie

描述要匯出到雲端的 cookies；允許多次宣告。參數使用 `GM_cookie` 的 `CookieDetails` 描述，例如：

```ts
// 以下匯出來自 https://docs.scriptcat.org/docs/use/ 名為 cookie1 的 cookie
// @exportCookie url=https://docs.scriptcat.org/docs/use;name=cookie1

// 以下匯出 scriptcat.org 網域的所有 cookies
// @exportCookie domain=scriptcat.org

// 所有可用參數：
// @exportCookie domain=scriptcat.org;url=https://docs.scriptcat.org/docs/use;name=cookie1;path=/docs/use;secure=true;session=true
```

## API 支援變更
> 目前僅支援以下 API；除非另有說明，其行為與原始 API 相同。

### GM_xmlhttpRequest


### GM_notification


### GM_log

### GM_getValue

目前僅支援取得透過 `@exportValue` 匯出的 Values；set/delete/list 和其他方法不受支援。

## 運行環境 {#running-environments}

### 本機

匯出一個 zip 套件；將其解壓縮到資料夾後，執行以下命令在本機運行（需要本機 Node.js 環境）：

```bash
npm i
node index.js
```


### 騰訊雲

首先在 [**存取金鑰**](https://console.cloud.tencent.com/cam/capi) 建立騰訊雲金鑰 — 如果使用子帳號，請確保授予其雲端函數權限。然後在 [**函數服務**](https://console.cloud.tencent.com/scf/list) 啟用服務，該服務每月包含一定量的免費使用量。區域預設為上海；如需要請調整。點擊上傳後，會根據 `@crontab` 自動建立排程觸發器，按排程運行函數。

![image-20220203224956248](@site/docs/dev/cloudcat.assets/image-20220203224956248.png)
