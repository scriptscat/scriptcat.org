---
title: 對話 API
---

`@grant CAT.agent.conversation`

對話 API 是 Agent 系統的核心，讓腳本可以建立 AI 對話、傳送訊息和接收回覆。

## 建立對話

```javascript
const conv = await CAT.agent.conversation.create(options?);
```

### ConversationCreateOptions

| 參數 | 型別 | 預設值 | 說明 |
|------|------|--------|------|
| `id` | `string` | 自動產生 | 對話 ID，用於恢復現有對話 |
| `system` | `string` | — | 自訂系統提示詞，附加在內建提示詞之後 |
| `model` | `string` | 預設模型 | 模型 ID（在管理頁面設定後取得） |
| `maxIterations` | `number` | `20` | 單一对話輪次內的最大工具呼叫迴圈數 |
| `skills` | `"auto" \| string[]` | — | `"auto"` 自動載入所有 Skills，或指定 Skill 名稱的陣列 |
| `tools` | `ToolDefinition[]` | — | 自訂工具清單（見下文） |
| `commands` | `Record<string, CommandHandler>` | — | 自訂對話指令 |
| `ephemeral` | `boolean` | `false` | 不會持久化儲存的暫時對話 |
| `cache` | `boolean` | `true` | 啟用提示詞快取（減少 Token 使用量） |

### 自訂工具

腳本可以註冊自己的工具供 AI 呼叫：

```javascript
const conv = await CAT.agent.conversation.create({
  tools: [{
    name: "get_weather",
    description: "取得指定城市的天氣資訊",
    parameters: {
      type: "object",
      properties: {
        city: {
          type: "string",
          description: "城市名稱"
        },
        unit: {
          type: "string",
          enum: ["celsius", "fahrenheit"],
          description: "溫度單位"
        }
      },
      required: ["city"]
    },
    handler: async (args) => {
      // args = { city: "台北", unit: "celsius" }
      const data = await fetchWeather(args.city, args.unit);
      return { temperature: data.temp, condition: data.condition };
    }
  }]
});
```

工具的 `parameters` 遵循 [JSON Schema](https://json-schema.org/) 規範。AI 使用 `description` 來理解何時以及如何呼叫工具。

### 自訂指令

可以註冊以 `/` 開頭的自訂指令：

```javascript
const conv = await CAT.agent.conversation.create({
  commands: {
    "/export": async (args) => {
      // 當使用者輸入 "/export pdf" 時觸發
      await exportToPdf(args);
      return "匯出完成";
    }
  }
});
```

內建指令：`/new`（清除對話歷史）— 可被自訂處理器覆寫。

## 取得現有對話

```javascript
const conv = await CAT.agent.conversation.get(conversationId);
// 如果對話不存在則回傳 null
```

## ConversationInstance 方法

### chat — 同步聊天

```javascript
const reply = await conv.chat(content, options?);
```

傳送訊息並等待完整回覆。AI 可能在回覆時呼叫工具；`chat` 會等到所有工具執行完成後才回傳最終結果。

**參數：**

| 參數 | 型別 | 說明 |
|------|------|------|
| `content` | `string \| ContentBlock[]` | 訊息內容，文字或多媒體內容區塊 |
| `options.tools` | `ToolDefinition[]` | 僅此次呼叫附加的額外工具（與建立時傳入的工具合併） |

**回傳 `ChatReply`：**

| 欄位 | 型別 | 說明 |
|------|------|------|
| `content` | `string \| ContentBlock[]` | AI 的回覆內容 |
| `thinking` | `string` | 模型的思考過程（僅部分模型支援） |
| `toolCalls` | `ToolCall[]` | 此次回覆中進行的工具呼叫記錄 |
| `usage` | `{ inputTokens, outputTokens }` | Token 使用量 |
| `command` | `boolean` | 此回覆是否由指令觸發 |

### chatStream — 串流聊天

```javascript
const stream = await conv.chatStream(content, options?);
for await (const chunk of stream) {
  // 處理串流事件
}
```

即時接收 AI 的回覆 — 當您需要逐漸顯示輸出時很有用。

**`StreamChunk` 事件類型：**

| 類型 | 欄位 | 說明 |
|------|------|------|
| `content_delta` | `content: string` | 增量文字內容 |
| `thinking_delta` | `thinking: string` | 增量思考內容 |
| `tool_call` | `toolCall: ToolCall` | 工具呼叫資訊（狀態變更時觸發） |
| `content_block` | `block: ContentBlock` | 內容區塊（圖片、檔案等） |
| `done` | `usage: { inputTokens, outputTokens }` | 對話輪次完成 |
| `error` | `error: string, errorCode?: string` | 錯誤 |

**錯誤代碼（`errorCode`）：**

| 代碼 | 說明 |
|--------|------|
| `rate_limit` | 觸及 API 速率限制；通常會自動重試 |
| `auth` | 驗證失敗；請檢查 API 金鑰 |
| `tool_timeout` | 工具執行逾時 |
| `max_iterations` | 觸及最大工具呼叫迴圈數 |
| `api_error` | 其他 API 錯誤 |

### getMessages — 取得訊息歷史

```javascript
const messages = await conv.getMessages();
```

回傳包含對話中所有訊息的 `ChatMessage[]`。

**`ChatMessage` 結構：**

| 欄位 | 型別 | 說明 |
|------|------|------|
| `id` | `string` | 訊息 ID |
| `role` | `"user" \| "assistant" \| "system" \| "tool"` | 訊息角色 |
| `content` | `string \| ContentBlock[]` | 訊息內容 |
| `thinking` | `{ content: string }` | 思考過程（助理訊息 — 注意這是物件，不是純字串） |
| `error` | `string` | 此輪次出錯時的錯誤訊息 |
| `modelId` | `string` | 此訊息使用的模型 ID |
| `durationMs` | `number` | 總回應時間（毫秒） |
| `parentId` | `string` | 親訊息 ID（用於分支） |
| `toolCalls` | `ToolCall[]` | 工具呼叫記錄（助理訊息） |
| `toolCallId` | `string` | 對應的工具呼叫 ID（工具訊息） |
| `usage` | `{ inputTokens, outputTokens }` | Token 使用量 |
| `createtime` | `number` | 建立時間戳 |

### clear — 清除對話

```javascript
await conv.clear();
```

清除對話中的所有訊息歷史。

### save — 持久化對話

```javascript
await conv.save();
```

將對話的中繼資料儲存到儲存空間。暫時對話（`ephemeral: true`）預設不會儲存；呼叫此方法將其轉換為持久化對話。

### Instance 屬性

| 屬性 | 型別 | 說明 |
|------|------|------|
| `id` | `string` | 對話 ID |
| `title` | `string` | 對話標題 |
| `modelId` | `string` | 使用中的模型 ID |

## 多媒體內容

訊息內容可以是純文字字串，或 `ContentBlock[]` 陣列以支援多媒體輸入：

```javascript
// 傳送文字 + 圖片
await conv.chat([
  { type: "text", text: "請分析這張圖片中的內容" },
  { type: "image", attachmentId: "img-id", mimeType: "image/png" }
]);
```

### ContentBlock 類型 | 類型 | 必填欄位 | 說明 |
|------|---------|------|
| `text` | `text: string` | 文字內容 |
| `image` | `attachmentId: string, mimeType: string` | 圖片；需要支援視覺的模型 |
| `file` | `attachmentId: string, mimeType: string, name: string` | 檔案 |
| `audio` | `attachmentId: string, mimeType: string` | 音訊 |

## 暫時對話 vs. 持久化對話

| 功能 | 持久化對話（預設） | 暫時對話 |
|------|-------------------|---------------------|
| 訊息儲存 | 持久化到 OPFS | 僅在記憶體中 |
| 內建工具 | 全部可用 | 不包含；透過 `tools` 提供您自己的 |
| 對話清單 | 可見 | 不可見 |
| 提示詞快取 | 支援 | 可停用 |
| 使用情境 | 通用對話 | 輕量級、一次性任務和快速問答 |

## 語境管理

### 自動壓縮

當對話的語境使用量超過模型語境視窗的 **80%** 時，系統會自動呼叫 LLM 產生歷史摘要，替換較舊的訊息以釋放空間。

### 提示詞快取

預設啟用。對於 Anthropic 模型，系統提示詞和訊息歷史會被快取，顯著減少重複輪次的 Token 使用量和延遲。

可透過 `cache: false` 停用：

```javascript
const conv = await CAT.agent.conversation.create({ cache: false });
```

## 完整範例

```javascript
// ==UserScript==
// @name        智慧翻譯助手
// @match       *://*/*
// @grant       CAT.agent.conversation
// @grant       CAT.agent.dom
// ==/UserScript==

// 使用自訂工具建立對話
const conv = await CAT.agent.conversation.create({
  system: "您是翻譯助手。使用者會提供網頁內容 — 請將其翻譯成繁體中文。",
  tools: [{
    name: "get_selection",
    description: "取得使用者在頁面上選取的文字",
    parameters: { type: "object", properties: {} },
    handler: async () => {
      return { text: window.getSelection()?.toString() || "未選取文字" };
    }
  }]
});

// 串流翻譯結果
const stream = await conv.chatStream("請取得選取的文字並翻譯成繁體中文");
let result = "";
for await (const chunk of stream) {
  if (chunk.type === "content_delta") {
    result += chunk.content;
    // 即時更新介面
    updateTranslationUI(result);
  }
}
```
