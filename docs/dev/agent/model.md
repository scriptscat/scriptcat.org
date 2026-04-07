---
id: agent-model
sidebar_position: 6
---

# 模型查询 API

`@grant CAT.agent.model`

模型查询 API 提供只读访问，查询用户在管理页面中已配置的模型信息。出于安全考虑，API Key 不会暴露给脚本。

## list — 列出所有模型

```javascript
const models = await CAT.agent.model.list();
```

**返回值 ModelSummary[]：**

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | `string` | 模型 ID |
| `name` | `string` | 显示名称 |
| `provider` | `"openai" \| "anthropic" \| "zhipu"` | Provider 类型 |
| `apiBaseUrl` | `string` | API 基础地址 |
| `model` | `string` | 模型标识符（如 `gpt-4o`、`claude-sonnet-4-20250514`） |
| `maxTokens` | `number` | 最大输出 Token 数 |
| `contextWindow` | `number` | 上下文窗口大小 |
| `supportsVision` | `boolean` | 是否支持视觉输入（图片） |
| `supportsImageOutput` | `boolean` | 是否支持图片生成 |

> 注意：返回值**不包含** `apiKey` 字段。

## get — 获取指定模型

```javascript
const model = await CAT.agent.model.get(modelId);
```

如果模型不存在返回 `null`。

## getDefault — 获取默认模型 ID

```javascript
const defaultId = await CAT.agent.model.getDefault();
```

返回用户设置的默认模型 ID 字符串。

## getSummary — 获取模型列表摘要

```javascript
const summary = await CAT.agent.model.getSummary();
```

返回所有已配置模型的文本摘要字符串，适合直接注入到提示词中供 AI 参考。

## 使用场景

### 让用户选择模型

```javascript
// ==UserScript==
// @name        模型选择示例
// @grant       CAT.agent.model
// @grant       CAT.agent.conversation
// ==/UserScript==

const models = await CAT.agent.model.list();
const defaultId = await CAT.agent.model.getDefault();

// 展示给用户选择
const selectedModel = models.find(m => m.supportsVision) || models[0];

const conv = await CAT.agent.conversation.create({
  model: selectedModel.id
});
```

### 检查模型能力

```javascript
const model = await CAT.agent.model.get("my-model-id");
if (model?.supportsVision) {
  // 可以发送图片
  await conv.chat([
    { type: "text", text: "请描述这张图片" },
    { type: "image", attachmentId: imgId, mimeType: "image/png" }
  ]);
} else {
  // 仅文本
  await conv.chat("请描述当前页面的内容");
}
```
