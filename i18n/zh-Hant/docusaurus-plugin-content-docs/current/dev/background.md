---
title: 背景腳本
---

背景腳本適用於需要持續執行的腳本。背景腳本是 ScriptCat 特有的腳本類型；它們在沙箱中執行，無法存取 DOM。可以使用與 Tampermonkey 相同的 GM API 開發，相容性說明會在文件中特別標註。

## 背景腳本（`@background`）

背景腳本使用 `@background` 屬性宣告。它讓腳本在啟用後或瀏覽器啟動後，能在背景中持續執行。

## 排程腳本（`@crontab`）

> 排程腳本是一種背景腳本，適用於需要**按照時間週期重複執行**的任務。

排程腳本使用 `@crontab` 屬性宣告。支援分鐘級和秒級排程，並提供 ScriptCat 的擴展語法 `once` / `once(...)` 來避免在同一時間週期內執行多次。

⚠️ 注意事項：

* 在單一脚本中，**只有第一個 `@crontab` 生效**
* 建議腳本的**單次執行時間 + 重試時間**不要超過 cron 間隔，否則執行可能會重疊

## Cron 表達式說明

ScriptCat 的 cron 實作基於 [**node-cron**](https://github.com/kelektiv/node-cron/)，在標準 cron 語法上做了一些小擴展。

### 表達式格式

#### 標準 5 欄位格式（建議）

```text
分鐘 小時 日期 月份 星期
```

#### 擴展 6 欄位格式（不建議）

```text
秒 分鐘 小時 日期 月份 星期
```

> ⚠️ 6 欄位格式不建議使用
> 瀏覽器環境無法保證秒級精度，且會增加效能開銷——背景頁面的排程可能會延遲。

### 各欄位可用的語法

| 語法 | 意義 | 範例 |
|---|---|---|
| `*` | 任意值 | `*`（每分鐘/每小時） |
| number | 特定值 | `5`（第 5 分鐘） |
| `a,b,c` | 多個離散值 | `1,15,30` |
| `a-b` | 連續範圍 | `10-23` |
| `*/n` | 每 n 個單位 | `*/5` |
| `a-b/n` | 帶步驟的範圍 | `10-50/10` |

#### 星期規則

* `1–6`：週一到週六
* `0` 或 `7`：週日

## `once` 擴展語法

### `once` 的意義

在 cron 表達式中使用 `once` 意味著：

> **在當前時間週期內，只允許一次成功執行**

即使同一週期內的後續時間點仍然符合 cron 規則，腳本也不會再執行。

### `once` 與 `once(...)` 的比較

| 語法 | 底層 cron 值 | 描述 |
|---|---|---|
| `once` | `*`（任意值） | 在週期內首次匹配時執行，無特定時間 |
| `once(expr)` | `expr` | 僅在週期內匹配 `expr` 的時間執行，且僅執行一次 |

### `once` 的位置 = 限制的時間週期

不論 `once` / `once(...)` 放在哪裡，都表示「在該時間粒度內只執行一次」。

| `once` 位置 | 行為 |
|---|---|
| 分鐘欄 | 每分鐘只執行一次 |
| 小時欄 | 每小時只執行一次 |
| 日期欄 | 每天只執行一次 |
| 月份欄 | 每月只執行一次 |
| 星期欄 | 每週只執行一次 |

## `@crontab` 範例

### 常用

```js
//@crontab * * * * *        // 每分鐘執行一次
//@crontab * * * * * *      // 每秒執行一次（不建議）
//@crontab 0 */6 * * *      // 每 6 小時的 0 分執行
//@crontab 15 */6 * * *     // 每 6 小時的 15 分執行
//@crontab * once * * *     // 每小時最多執行一次
//@crontab * * once * *     // 每天最多執行一次
//@crontab * 10 once * *    // 每天 10 點時段只執行一次（例如 10:04 已執行，則 10:05-10:59 不再執行）
//@crontab * */4 once * *   // 每天每 4 小時最多執行一次（例如 4:00 已執行，則 8、12、16、20、24 等不再執行）
```

### 進階

```js
//@crontab * 1,3,5 once * *       // 每天 1:00、3:00 或 5:00 各執行一次
//@crontab * 10-23 once * *       // 每天 10:00 至 23:59 之間執行一次
//@crontab * once 13 * *          // 每月 13 日每小時執行一次
//@crontab * once(9-17) * * *     // 每天 9:00 至 17:00 之間每小時執行一次
//@crontab 0,30 once * * *        // 每小時的 0 分或 30 分中，先匹配到的執行；該小時內不再重複
//@crontab * 9-18 once * *        // 每天 9:00 至 18:00 之間只執行一次
```

## 使用建議

### 適合使用 `once` 的任務

* 每天/每小時**只需執行一次**的任務
* 狀態檢查、同步和報告腳本
* 避免以下問題：
  * 瀏覽器長時間未開啟
  * 背景頁面排程延遲
  * 瀏覽器重啟導致重複執行

### 不建議使用 `once` 的任務

* 必須在精確時刻執行的任務
* 執行時間可能大幅超過 cron 間隔的腳本
* 對執行次數有嚴格一致性要求的任務

## 測試 Cron 表達式

測試 cron 表達式時，請**暫時將 `once` / `once(...)` 替換為其底層值**：

* `once` → `*`
* `once(expr)` → `expr`

注意測試工具可能不支援 6 欄位擴展格式。

建議工具：

* [crontab.guru](https://crontab.guru/)
* [tool.lu cron calculator](https://tool.lu/crontab/)

在腳本列表頁面，將游標懸停在**執行狀態欄**可查看腳本的**下次排程執行時間**。

## 日誌

在腳本列表頁面，將游標懸停在 `執行狀態欄` 會顯示腳本執行狀態的工具提示；
點擊會彈出透過 `GM_log` 印出的日誌內容。

![](@site/docs/dev/background.assets/image-20210621214143661.png)

![](@site/docs/dev/background.assets/image-20210621214124685.png)

## 腳本除錯

背景腳本可以直接從腳本編輯器頁面除錯，但有以下限制：

* `value` 無法正確同步
* `registerMenu` 選單無法正確觸發

![](@site/docs/dev/background.assets/image-20210903141601057.png)

要除錯實際的執行環境，請在擴充功能設定中啟用**開發者模式**，然後開啟擴充功能的 `background.html` 頁面進行除錯。

執行時產生的錯誤也可以在執行日誌中查看。

![image-20210903144155450](@site/docs/dev/background.assets/image-20210903144155450.png)

## Promise

強烈建議使用以下模式，因為它也允許腳本管理器監控腳本執行。
如果腳本執行任何非同步操作，**必須回傳 `Promise`**。

```ts
// ==UserScript==
// @name         背景腳本
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @background
// ==/UserScript==
return new Promise((resolve, reject) => {
  if (Math.round((Math.random() * 10) % 2)) {
    resolve("ok");
  } else {
    reject("error");
  }
});
```

```js
// ==UserScript==
// @name         每天執行一次的排程腳本
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @crontab      * * once * *
// ==/UserScript==
return new Promise((resolve, reject) => {
  if (Math.round((Math.random() * 10) % 2)) {
    resolve("ok");
  } else {
    reject("error");
  }
});
```

```js
// ==UserScript==
// @name         呼叫 API
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @crontab      * * once * *
// ==/UserScript==
return new Promise((resolve, reject) => {
  GM_xmlhttpRequest({
    url: "https://bbs.tampermonkey.net.cn/",
    onload() {
      resolve("ok");
    },
    onerror() {
      reject("error");
    },
  });
});
```

請確保僅在腳本邏輯真正完成後才呼叫 `resolve` / `reject`。
一旦呼叫，管理器即視為腳本執行完成，後續的 GM 操作將不再生效。

## 錯誤重試

ScriptCat 背景腳本支援錯誤重試。
當腳本失敗時，可以使用 `CATRetryError` 進行 `reject` 來觸發重試。

* 最小重試間隔：5 秒
* 避免與腳本自身的執行時間衝突，否則可能發生重複執行

```js
// ==UserScript==
// @name         重試範例
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  嘗試征服世界！
// @author       You
// @crontab      * * once * *
// @grant        GM_notification
// ==/UserScript==

return new Promise((resolve, reject) => {
  GM_notification({
    title: "重試",
    text: "10 秒後重試",
  });
  reject(new CATRetryError("xxx error", 10));
});
```
