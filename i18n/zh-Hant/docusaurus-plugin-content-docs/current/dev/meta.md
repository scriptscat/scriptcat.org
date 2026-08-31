---
title: 元資料區塊
---

`==UserScript==` 內的內容描述腳本所需的權限、腳本相關資訊等。它位於腳本的最開始。

```js
// ==UserScript==
// @name         新的使用者腳本
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  嘗試征服世界！
// @author       You
// @crontab      * * once * *
// ==/UserScript==
```

## 主要值

### name

腳本名稱

### namespace

腳本命名空間。`name + namespace` 決定腳本的唯一性。

### version

腳本版本。建議遵循[語意化版本控制](https://semver.org/)，以便偵測到版本變更時提示使用者更新。

### description

腳本的詳細描述

### author

腳本作者

### run-at

腳本何時執行

| 值 | 執行時機 | 支援版本 |
|---|---|---|
| document-start | 在前端 URL 匹配時立即將腳本注入頁面 | v0.3.0 |
| document-end | 在 DOM 載入完成後注入腳本；頁面腳本和圖片可能仍在載入中 | v0.3.0 |
| document-idle | 在所有內容載入完成後注入腳本 | v0.3.0 |
| document-body | 只有在頁面有 `body` 元素時才注入腳本 | v0.6.2 |
| document-menu | 右鍵時顯示選單；以腳本名稱作為選單名稱執行腳本 | v0.3.4-v0.9.4 (🔥 已移除) |

選單圖示可參考 [Unicode 符號](https://unicode-table.com/en/) 和 [表情符號](https://www.emojiall.com/en-US/)。

### run-in

指定腳本注入的環境：`@run-in normal-tabs` 用於一般分頁，`@run-in incognito-tabs` 用於無痕分頁。

### early-start (v1.1.0+)

當 `run-at` 為 `document-start` 時，腳本會盡早執行，但無法保證比頁面更快載入。

定義 `@run-at document-start` 後，可以添加 `@early-start` 讓腳本比頁面更快載入：[範例](https://github.com/scriptscat/scriptcat/blob/main/example/early-start.js)

### inject-into

:::tip

在 content-script 環境（`content`）中，`unsafeWindow` 只指向該環境本身的目前 `window`，無法存取頁面的 `window`。

ScriptCat 不支援自動檢查 CSP 限制來決定以 `content` 或 `page` 方式注入（即 Tampermonkey 的 `@inject-into auto`）。

:::

指定腳本注入的位置，支援 `page` 和 `content`，預設為 `page`。

- `page`：腳本注入到頁面環境，可使用 `unsafeWindow` 存取頁面的 `window` 和 `DOM`
- `content`：腳本注入到 content-script 環境，無法直接存取頁面的 `window` 物件，但可存取頁面 `DOM`，不受 `CSP` 限制

### storageName 🧪

`Value` 的儲存空間；相同 `storageName` 下的資料可在腳本間共享和通訊。ScriptCat 特有功能。

### background

將此腳本標記為背景腳本，需要在背景環境中執行。詳見[背景腳本](./background.md#background-script-background)。

### crontab

將腳本標記為排程腳本，需要 cron 表達式值。只能有一個 cron 表達式，並在背景環境中按該排程執行。詳見[排程腳本](./background.md#scheduled-script-crontab)。

### match

只有與 `match` 匹配的 URL 才會執行腳本，遵循[匹配模式](https://developer.chrome.com/docs/extensions/v3/match_patterns/)。在 `match` 中，`*` 是萬用字元，`tld` 匹配頂級網域，以 `*.` 開頭的網域也會匹配 `xxx.com`：

| 值 | 正確範例 | 錯誤範例 |
|---|---|---|
| `http://scriptcat.org/doc/match` | `http://scriptcat.org/doc/match` | `http://scriptcat.org/doc/runAt` |
| `*://*/param?*` | `https://scriptcat.org/param` \| `http://scriptcat.org/param?search=tampermonkey` | `https://scriptcat.org/test/param` |
| `http*://scriptcat.org/*` | `https://scriptcat.org/` \| `https://scriptcat.org/doc` | `https://doc.scriptcat.org/` |

### include

支援 `*` 進行模糊匹配，允許非標準 URL

### exclude

不應匹配的 URL；使用與 `include` 相同的表達式語法

### grant

請求 API 權限——API 只有在被請求後才能呼叫。權限列表見：[API 文件](./api.md) 和 [CAT API 文件](./cat-api.md)。

兩個特殊值：

- **none**：腳本不在沙箱環境中執行，而是在頁面環境中直接執行。在此環境中，沒有可用的 GM API，但可以直接存取頁面的 `window` 物件。
- **unsafeWindow**：在沙箱環境中，如果需要存取頁面的 `window` 物件，請使用 `unsafeWindow`。（Tampermonkey 不需要宣告此項——僅為了相容性保留。）

### connect

請求網站的存取權限；見 `GM_cookie` 和 `GM_xmlhttpRequest`。`native` 模式的 `GM_download` 也識別 `@connect`（未宣告的主機會觸發確認提示）。

### resource

包含資源檔案。宣告 `@resource` 後，可使用 `GM_getResourceText`/`GM_getResourceURL` 取得資訊。

```js
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico
// @resource html https://bbs.tampermonkey.net.cn/
// @resource xml https://bbs.tampermonkey.net.cn/sitemap.xml
// 新增資源完整性驗證
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico#md5-xxx,sha256-xxx
```

### require

包含外部 JS 檔案；支援[資源完整性驗證](#資源完整性驗證)

### require-css

包含外部 CSS 檔案；支援[資源完整性驗證](#資源完整性驗證)

### noframes

標記腳本不在 `<frame>` 內執行

### definition

`.d.ts` 檔案的參考地址，啟用編輯器自動完成提示

### antifeature

這與腳本市集相關；不受歡迎的功能需要用此描述值標記：

```js
// @antifeature ads 此腳本含有廣告
// @antifeature referral-link 此腳本修改或重新導向至作者的推薦連結
```

## 附加描述值

### license

目前腳本的開源授權

### updateURL

更新檢查需要遠端腳本具有 `@version` 標籤才能生效。

腳本用於檢查更新的連結；若未設定，預設為連結的 `user.js => meta.js`，若無 `user.js` 則為目前連結。

若設定 `@updateURL`，也必須設定 `@downloadURL` 才能使 `@updateURL` 生效。

### downloadURL

腳本更新的下載地址

### supportURL

支援網站、錯誤回報頁面

### homepage, homepageURL, website

腳本首頁

### source

腳本原始碼頁面

### icon, iconURL, defaulticon

腳本圖示

### icon64, icon64URL

64x64 尺寸的腳本圖示

### 注意事項

### 資源完整性驗證

- 使用 md5、sha1、sha256、sha384 或 sha512 驗證資源未被竄改。多種驗證方法可用 `;` 或 `,` 分隔。
- 根據 [W3C 建議](https://w3c.github.io/webappsec-subresource-integrity/#hash-collision-attacks)，不建議使用 md5 和 sha1；請使用 sha384 或更強的雜湊演算法。

範例：

```js
// @require https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js#md5-d55836f30c097da753179f82fa6f108f,sha256-a476ab8560837a51938aa6e1720c8be87c2862b6221690e9de7ffac113811a90
```
