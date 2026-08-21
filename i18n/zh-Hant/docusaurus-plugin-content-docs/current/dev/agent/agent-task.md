---
title: 排程任務 API
---

`@grant CAT.agent.task`

排程任務 API 讓腳本可以建立基於 Cron 運算式的排程任務，支援兩種執行模式。

## 執行模式

### 內部模式

由 Agent 系統自動處理：
- Cron 排程觸發時自動建立或恢復對話
- 將設定的 `prompt` 發送給 LLM
- 可指定模型和 Skills
- 執行歷史和 Token 使用量會自動記錄

### 事件模式

由腳本本身處理：
- Cron 排程觸發時向腳本發送事件通知
- 腳本透過 `addListener` 監聽事件
- 處理邏輯完全可自訂

## create — 建立任務

```javascript
const task = await CAT.agent.task.create(options);
```

**參數 (`AgentTaskCreateOptions`)：**

| 參數 | 型別 | 必填 | 說明 |
|------|------|------|------|
| `name` | `string` | 是 | 任務名稱 |
| `crontab` | `string` | 是 | 標準 Cron 運算式（5 個欄位：分 時 日 月 星期） |
| `mode` | `"internal" \| "event"` | 是 | 執行模式 |
| `enabled` | `boolean` | 否 | 是否啟用，預設為 `true` |
| `notify` | `boolean` | 否 | 觸發時是否發送瀏覽器通知 |
| `prompt` | `string` | 否 | 內部模式的提示詞 |
| `modelId` | `string` | 否 | 內部模式使用的模型 ID |
| `skills` | `string[]` | 否 | 內部模式載入的 Skills |
| `maxIterations` | `number` | 否 | 內部模式的最大工具呼叫輪次，預設為 `10` |

**回傳 `AgentTask`：**

| 欄位 | 型別 | 說明 |
|------|------|------|
| `id` | `string` | 任務 ID |
| `name` | `string` | 任務名稱 |
| `crontab` | `string` | Cron 運算式 |
| `mode` | `string` | 執行模式 |
| `enabled` | `boolean` | 是否啟用 |
| `notify` | `boolean` | 是否發送通知 |
| `nextruntime` | `number` | 下次執行時間戳 |
| `lastruntime` | `number` | 上次執行時間戳 |
| `conversationId` | `string` | 內部模式的關聯對話 ID（選填） |
| `lastRunStatus` | `"success" \| "error"` | 上次執行狀態 |
| `lastRunError` | `string` | 上次執行錯誤訊息 |
| `createtime` | `number` | 建立時間戳 |

**Cron 運算式範例：**

| 運算式 | 說明 |
|--------|------|
| `* * * * *` | 每分鐘 |
| `0 9 * * *` | 每天 09:00 |
| `0 */2 * * *` | 每 2 小時 |
| `30 8 * * 1-5` | 工作日 08:30 |
| `0 0 1 * *` | 每月 1 日 00:00 |

## list — 列出所有任務

```javascript
const tasks = await CAT.agent.task.list();
```

回傳目前腳本建立的所有任務。

## get — 取得任務詳情

```javascript
const task = await CAT.agent.task.get(taskId);
```

如果任務不存在則回傳 `undefined`。

## update — 更新任務

```javascript
const task = await CAT.agent.task.update(taskId, partial);
```

**可更新的欄位：**

```javascript
await CAT.agent.task.update(task.id, {
  name: "新名稱",
  crontab: "0 10 * * *",
  enabled: false,
  prompt: "新提示詞",
  notify: true
});
```

更新後 `nextruntime` 會自動重新計算。

## remove — 刪除任務

```javascript
const success = await CAT.agent.task.remove(taskId);
```

## runNow — 立即執行

```javascript
await CAT.agent.task.runNow(taskId);
```

觸發任務立即執行一次，無需等待 Cron 排程（非阻塞，在背景執行）。

## addListener — 監聽任務觸發

```javascript
const listenerId = await CAT.agent.task.addListener(taskId, callback);
```

僅用於**事件模式**任務。Cron 排程觸發時執行回呼函數。

**回呼函數參數 (`AgentTaskTrigger`)：**

| 欄位 | 型別 | 說明 |
|------|------|------|
| `taskId` | `string` | 任務 ID |
| `name` | `string` | 任務名稱 |
| `crontab` | `string` | Cron 運算式 |
| `triggeredAt` | `number` | 觸發時間戳 |

## removeListener — 移除監聽器

```javascript
await CAT.agent.task.removeListener(listenerId);
```

## 完整範例

### 內部模式 — AI 自動執行

```javascript
// ==UserScript==
// @name        排程新聞摘要
// @match       *://*/*
// @grant       CAT.agent.task
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "每日新聞摘要",
  crontab: "0 9 * * *",       // 每天早上 9 點
  mode: "internal",
  prompt: "請搜尋今日科技新聞並將簡短摘要儲存到 OPFS",
  skills: ["web-search"],
  maxIterations: 10,
  notify: true
});

console.log("任務已建立，下次執行：", new Date(task.nextruntime));
```

### 事件模式 — 腳本自行處理

```javascript
// ==UserScript==
// @name        排程資料收集
// @match       *://*/*
// @grant       CAT.agent.task
// @grant       CAT.agent.dom
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "股票資料收集",
  crontab: "*/30 9-15 * * 1-5", // 工作日 9-15 點，每 30 分鐘
  mode: "event",
  enabled: true,
  notify: false
});

await CAT.agent.task.addListener(task.id, async (trigger) => {
  console.log(`任務觸發：${trigger.name} 於 ${new Date(trigger.triggeredAt)}`);

  // 自訂收集邏輯
  await CAT.agent.dom.navigate("https://finance.example.com/stock");
  const content = await CAT.agent.dom.readPage({ selector: ".stock-table" });

  // 處理資料...
  console.log("收集完成");
});
```
