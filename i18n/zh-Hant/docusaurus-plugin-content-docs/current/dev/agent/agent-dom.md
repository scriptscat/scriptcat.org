---
title: DOM 操作 API
---

`@grant CAT.agent.dom`

DOM 操作 API 提供完整的瀏覽器頁面自動化：導覽、內容讀取、截圖、表單互動和 DOM 監控。

## 分頁管理

### listTabs — 列出分頁

```javascript
const tabs = await CAT.agent.dom.listTabs();
```

回傳每個已開啟分頁的資訊。

**回傳 `TabInfo[]`：**

| 欄位 | 型別 | 說明 |
|------|------|------|
| `tabId` | `number` | 分頁 ID |
| `url` | `string` | 目前 URL |
| `title` | `string` | 頁面標題 |
| `active` | `boolean` | 是否為目前活動分頁 |
| `windowId` | `number` | 所屬視窗 ID |
| `discarded` | `boolean` | 是否已被捨棄（暫停） |

## 導覽

### navigate — 導覽頁面

```javascript
const result = await CAT.agent.dom.navigate(url, options?);
```

**參數：**

| 參數 | 型別 | 預設值 | 說明 |
|------|------|--------|------|
| `url` | `string` | — | 目標 URL（必填） |
| `options.tabId` | `number` | 目前活動分頁 | 使用哪個分頁 |
| `options.waitUntil` | `boolean` | `true` | 是否等待頁面載入完成 |
| `options.timeout` | `number` | `30000` | 逾時毫秒數 |

**回傳 `NavigateResult`：**

```typescript
{ tabId: number; url: string; title: string }
```

## 讀取內容

### readPage — 讀取頁面內容

```javascript
const page = await CAT.agent.dom.readPage(options?);
```

將頁面 DOM 轉換為結構化文字，自動移除不相關的元素如 `<script>`、`<style>`、`<noscript>`、`<svg>` 和 `<link[rel=stylesheet]>`。

**參數：**

| 參數 | 型別 | 預設值 | 說明 |
|------|------|--------|------|
| `options.tabId` | `number` | 目前活動分頁 | 使用哪個分頁 |
| `options.selector` | `string` | — | CSS 選擇器；僅回傳符合元素的內容 |
| `options.maxLength` | `number` | — | 內容最大字元數；超過則截斷 |
| `options.removeTags` | `string[]` | — | 要移除的其他標籤名稱 |

**回傳 `PageContent`：**

| 欄位 | 型別 | 說明 |
|------|------|------|
| `title` | `string` | 頁面標題 |
| `url` | `string` | 頁面 URL |
| `html` | `string` | 處理後的頁面文字內容 |
| `truncated` | `boolean` | 內容是否被截斷 |
| `totalLength` | `number` | 原始內容的總長度 |

### screenshot — 截圖

```javascript
const shot = await CAT.agent.dom.screenshot(options?);
```

**參數：**

| 參數 | 型別 | 預設值 | 說明 |
|------|------|--------|------|
| `options.tabId` | `number` | 目前活動分頁 | 使用哪個分頁 |
| `options.quality` | `number` | `80` | JPEG 品質（0-100） |
| `options.fullPage` | `boolean` | `false` | 擷取完整頁面 |
| `options.selector` | `string` | — | CSS 選擇器；僅擷取符合元素的區域 |
| `options.saveTo` | `string` | — | 儲存到 OPFS 工作區的路徑 |

**回傳 `ScreenshotResult`：**

| 欄位 | 型別 | 說明 |
|------|------|------|
| `dataUrl` | `string` | base64 資料 URL |
| `path` | `string` | OPFS 儲存路徑（使用 `saveTo` 時） |
| `size` | `number` | 檔案大小（使用 `saveTo` 時） |

```javascript
// 將截圖儲存到 OPFS
const shot = await CAT.agent.dom.screenshot({
  saveTo: "screenshots/page.png",
  quality: 90
});
console.log(`已儲存至 ${shot.path}，大小 ${shot.size} 位元組`);
```

## 頁面互動

### click — 點選元素

```javascript
const result = await CAT.agent.dom.click(selector, options?);
```

**參數：**

| 參數 | 型別 | 預設值 | 說明 |
|------|------|--------|------|
| `selector` | `string` | — | CSS 選擇器（必填） |
| `options.tabId` | `number` | 目前活動分頁 | 使用哪個分頁 |
| `options.trusted` | `boolean` | `false` | 使用 CDP 發送真實滑鼠事件 |

**回傳 `ActionResult`：**

| 欄位 | 型別 | 說明 |
|------|------|------|
| `success` | `boolean` | 是否成功 |
| `navigated` | `boolean` | 點選是否觸發頁面導覽 |
| `url` | `string` | 導覽後的新 URL |
| `newTab` | `boolean` | 是否開啟了新分頁 |

**`trusted` 與一般點選：**

- `trusted: false`（預設）— 透過注入的 JS 模擬 `element.click()`；快速，但某些網站可能會偵測為非真實事件
- `trusted: true` — 透過 Chrome DevTools Protocol 發送真實滑鼠事件，與實際使用者互動無法區分，但需要偵錯器權限

### fill — 填入表單欄位

```javascript
const result = await CAT.agent.dom.fill(selector, value, options?);
```

**參數：**

| 參數 | 型別 | 說明 |
|------|------|------|
| `selector` | `string` | CSS 選擇器（必填） |
| `value` | `string` | 要填入的值（必填） |
| `options.tabId` | `number` | 使用哪個分頁 |
| `options.trusted` | `boolean` | 使用 CDP 模擬鍵盤輸入 |

**行為：**
- 一般模式：設定 `element.value` 並觸發 `input` 事件
- 信任模式：CDP 聚焦元素 → 逐字輸入

### scroll — 捲動頁面

```javascript
const result = await CAT.agent.dom.scroll(direction, options?);
```

**參數：**

| 參數 | 型別 | 說明 |
|------|------|------|
| `direction` | `"up" \| "down" \| "top" \| "bottom"` | 捲動方向（必填） |
| `options.tabId` | `number` | 使用哪個分頁 |
| `options.selector` | `string` | 捲動特定容器而非整頁 |

**回傳 `ScrollResult`：**

| 欄位 | 型別 | 說明 |
|------|------|------|
| `scrollTop` | `number` | 捲動後的位置 |
| `scrollHeight` | `number` | 內容總高度 |
| `clientHeight` | `number` | 視窗高度 |
| `atBottom` | `boolean` | 是否已捲動到底部 |

### waitFor — 等待元素

```javascript
const result = await CAT.agent.dom.waitFor(selector, options?);
```

輪詢指定元素是否出現在頁面上（每 500ms 檢查一次）。

**參數：**

| 參數 | 型別 | 預設值 | 說明 |
|------|------|--------|------|
| `selector` | `string` | — | CSS 選擇器（必填） |
| `options.tabId` | `number` | 目前活動分頁 | 使用哪個分頁 |
| `options.timeout` | `number` | `10000` | 逾時毫秒數 |

**回傳 `WaitForResult`：**

| 欄位 | 型別 | 說明 |
|------|------|------|
| `found` | `boolean` | 是否找到元素 |
| `element` | `object` | 元素資訊（僅 `found=true` 時） |
| `element.selector` | `string` | 符合的選擇器 |
| `element.tag` | `string` | 標籤名稱 |
| `element.text` | `string` | 文字內容 |
| `element.role` | `string` | ARIA 角色 |
| `element.type` | `string` | input 類型 |
| `element.visible` | `boolean` | 是否可見 |

## 腳本執行

### executeScript — 執行 JavaScript

```javascript
const result = await CAT.agent.dom.executeScript(code, options?);
```

**參數：**

| 參數 | 型別 | 預設值 | 說明 |
|------|------|--------|------|
| `code` | `string` | — | JavaScript 程式碼（必填） |
| `options.tabId` | `number` | 目前活動分頁 | 使用哪個分頁 |

> 程式碼始終在頁面的 **MAIN 世界**中執行（與頁面的 JS 共享相同的 `window` 物件），因此可以直接呼叫頁面的函數和讀取頁面變數 — 但同樣的原因**無法存取擴充套件的 blob URL**（例如透過 `CAT.agent.opfs.read` 在 `"blob"` 模式下回傳的 `Blob` 使用 `URL.createObjectURL()` 建立的 `blob:` URL），因為 blob URL 被限制在擴充套件自己的來源中。需要在隔離的上下文中使用 blob URL 時，請改用 SkillScript（參見 [Skill 開發](../skill-dev)）。

```javascript
// 呼叫頁面自己的 JS 函數 / 讀取頁面變數
const data = await CAT.agent.dom.executeScript(
  "return window.__APP_STATE__"
);

// 讀取 DOM 內容
const title = await CAT.agent.dom.executeScript(
  "return document.querySelector('h1')?.textContent"
);
```

> 程式碼被包裝在 `new Function()` 中執行，支援 `return` 值。逾時為 30 秒。

## DOM 監控

使用 Chrome DevTools Protocol 監控頁面上的 DOM 變更和對話框事件。

### startMonitor — 開始監控

```javascript
await CAT.agent.dom.startMonitor(tabId);
```

開始監控指定分頁的 DOM 變更和對話框（alert/confirm/prompt）。

### stopMonitor — 停止監控

```javascript
const result = await CAT.agent.dom.stopMonitor(tabId);
```

停止監控並回傳收集到的變更。

**回傳 `MonitorResult`：**

| 欄位 | 型別 | 說明 |
|------|------|------|
| `dialogs` | `Array<{ type, message }>` | 對話框清單 |
| `addedNodes` | `Array<{ tag, id?, class?, role?, text }>` | 新增 DOM 節點的摘要 |

### peekMonitor — 檢查監控狀態

```javascript
const status = await CAT.agent.dom.peekMonitor(tabId);
```

非破壊性地檢查目前監控狀態。

**回傳 `MonitorStatus`：**

| 欄位 | 型別 | 說明 |
|------|------|------|
| `hasChanges` | `boolean` | 是否有變更 |
| `dialogCount` | `number` | 對話框數量 |
| `nodeCount` | `number` | 新增節點數量 |

## 完整範例

```javascript
// ==UserScript==
// @name        自動填表助手
// @match       https://example.com/form
// @grant       CAT.agent.dom
// ==/UserScript==

// 等待表單載入
await CAT.agent.dom.waitFor("form#signup", { timeout: 5000 });

// 填入表單
await CAT.agent.dom.fill("input[name=username]", "test_user");
await CAT.agent.dom.fill("input[name=email]", "test@example.com");

// 勾選同意方塊
await CAT.agent.dom.click("input[type=checkbox]#agree");

// 截取已填入的表單
await CAT.agent.dom.screenshot({
  selector: "form#signup",
  saveTo: "screenshots/form-filled.png"
});

// 點選送出
const result = await CAT.agent.dom.click("button[type=submit]", { trusted: true });
if (result.navigated) {
  console.log("表單送出成功，導覽至：", result.url);
}
```
