---
title: 模型查詢 API
---

`@grant CAT.agent.model`

模型查詢 API 提供對使用者在管理頁面上配置的模型的唯讀存取。為了安全性，API 金鑰永遠不會暴露給腳本。

## list — 列出所有模型

```javascript
const models = await CAT.agent.model.list();
```

**回傳 `ModelSummary[]`：**

| 欄位 | 型別 | 描述 |
|------|------|------|
| `id` | `string` | 模型配置 ID |
| `name` | `string` | 使用者定義的顯示名稱（例如 "GPT-4o"、"Claude Sonnet"） |
| `provider` | `"openai" \| "anthropic"` | 供應商類型 |
| `apiBaseUrl` | `string` | API 基礎 URL |
| `model` | `string` | 傳送到供應商 API 的模型識別碼（例如 `gpt-4o`、`claude-sonnet-4-20250514`） |
| `maxTokens` | `number` | 最大輸出 token（未設定時省略） |

> 注意：回傳的物件**不包含** `apiKey` 欄位。

## get — 取得特定模型

```javascript
const model = await CAT.agent.model.get(modelId);
```

如果模型不存在，回傳 `null`。

## getDefault — 取得預設模型 ID

```javascript
const defaultId = await CAT.agent.model.getDefault();
```

回傳使用者配置的預設模型 ID；如果未設定，回傳空字串。

## getSummary — 取得摘要模型 ID

```javascript
const summaryModelId = await CAT.agent.model.getSummary();
```

回傳使用者專門為摘要任務（如自動壓縮對話歷史記錄）配置的輕量模型 ID。如果未單獨配置，系統會回退到預設模型，此方法回傳空字串。

## 使用場景

### 讓使用者選擇模型

```javascript
// ==UserScript==
// @name        模型選擇器範例
// @grant       CAT.agent.model
// @grant       CAT.agent.conversation
// ==/UserScript==

const models = await CAT.agent.model.list();
const defaultId = await CAT.agent.model.getDefault();

// 將清單顯示給使用者並讓他們選擇
const selectedModel = models.find(m => m.id === defaultId) || models[0];

const conv = await CAT.agent.conversation.create({
  model: selectedModel.id
});
```

### 取得特定模型的詳細資訊

```javascript
const model = await CAT.agent.model.get("my-model-id");
if (model) {
  console.log(`${model.name} (${model.provider}), 最大輸出 ${model.maxTokens ?? "未設定"} tokens`);
}
```
