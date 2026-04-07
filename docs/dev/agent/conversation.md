---
id: agent-conversation
sidebar_position: 2
---

# 对话 API

`@grant CAT.agent.conversation`

对话 API 是 Agent 系统的核心，允许脚本创建 AI 对话、发送消息并接收回复。

## 创建对话

```javascript
const conv = await CAT.agent.conversation.create(options?);
```

### ConversationCreateOptions

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `id` | `string` | 自动生成 | 对话 ID，用于恢复已有对话 |
| `system` | `string` | — | 自定义系统提示词，追加到内置提示词之后 |
| `model` | `string` | 默认模型 | 模型 ID（在管理页面配置后获取） |
| `maxIterations` | `number` | `20` | 单次对话中工具调用的最大循环次数 |
| `skills` | `"auto" \| string[]` | — | `"auto"` 自动加载所有 Skill，或指定 Skill 名称数组 |
| `tools` | `ToolDefinition[]` | — | 自定义工具列表（见下方） |
| `commands` | `Record<string, CommandHandler>` | — | 自定义对话命令 |
| `ephemeral` | `boolean` | `false` | 临时对话，不持久化到存储 |
| `cache` | `boolean` | `true` | 启用 Prompt Caching（减少 Token 消耗） |
| `background` | `boolean` | `false` | 后台对话，UI 断开后继续执行，可通过 `attach()` 重新连接 |

### 自定义工具

脚本可以注册自己的工具供 AI 调用：

```javascript
const conv = await CAT.agent.conversation.create({
  tools: [{
    name: "get_weather",
    description: "获取指定城市的天气信息",
    parameters: {
      type: "object",
      properties: {
        city: {
          type: "string",
          description: "城市名称"
        },
        unit: {
          type: "string",
          enum: ["celsius", "fahrenheit"],
          description: "温度单位"
        }
      },
      required: ["city"]
    },
    handler: async (args) => {
      // args = { city: "北京", unit: "celsius" }
      const data = await fetchWeather(args.city, args.unit);
      return { temperature: data.temp, condition: data.condition };
    }
  }]
});
```

工具的 `parameters` 遵循 [JSON Schema](https://json-schema.org/) 规范，AI 会根据 `description` 理解何时及如何调用工具。

### 自定义命令

可以注册以 `/` 开头的自定义命令：

```javascript
const conv = await CAT.agent.conversation.create({
  commands: {
    "/export": async (args) => {
      // 用户输入 "/export pdf" 时触发
      await exportToPdf(args);
      return "导出完成";
    }
  }
});
```

内置命令：`/new`（新建对话）、`/reset`（重置上下文）、`/compact`（压缩历史消息）。

## 获取已有对话

```javascript
const conv = await CAT.agent.conversation.get(conversationId);
// 如果对话不存在则返回 null
```

## ConversationInstance 方法

### chat — 同步聊天

```javascript
const reply = await conv.chat(content, options?);
```

发送消息并等待完整回复返回。AI 可能在回复过程中调用工具，`chat` 会等待所有工具执行完成后返回最终结果。

**参数：**

| 参数 | 类型 | 说明 |
|------|------|------|
| `content` | `string \| ContentBlock[]` | 消息内容，文本或多模态内容块 |
| `options.tools` | `ToolDefinition[]` | 本次调用额外追加的工具（与创建时的工具合并） |

**返回值 ChatReply：**

| 字段 | 类型 | 说明 |
|------|------|------|
| `content` | `string \| ContentBlock[]` | AI 回复内容 |
| `thinking` | `string` | 模型思考过程（仅部分模型支持） |
| `toolCalls` | `ToolCall[]` | 本次回复中的工具调用记录 |
| `usage` | `{ inputTokens, outputTokens }` | Token 用量 |
| `command` | `boolean` | 是否为命令触发的回复 |

### chatStream — 流式聊天

```javascript
const stream = await conv.chatStream(content, options?);
for await (const chunk of stream) {
  // 处理流式事件
}
```

实时接收 AI 回复，适用于需要逐步展示输出的场景。

**StreamChunk 事件类型：**

| type | 字段 | 说明 |
|------|------|------|
| `content_delta` | `content: string` | 增量文本内容 |
| `thinking_delta` | `thinking: string` | 增量思考内容 |
| `tool_call` | `toolCall: ToolCall` | 工具调用信息（状态变化时触发） |
| `content_block` | `block: ContentBlock` | 内容块（图片、文件等） |
| `done` | `usage: { inputTokens, outputTokens }` | 对话完成 |
| `error` | `error: string, errorCode?: string` | 错误 |

**错误码（errorCode）：**

| 错误码 | 说明 |
|--------|------|
| `rate_limit` | API 频率限制，通常会自动重试 |
| `auth` | 认证失败，检查 API Key |
| `tool_timeout` | 工具执行超时 |
| `max_iterations` | 达到最大工具调用循环次数 |
| `api_error` | 其他 API 错误 |

### getMessages — 获取消息历史

```javascript
const messages = await conv.getMessages();
```

返回 `ChatMessage[]`，包含对话中所有消息。

**ChatMessage 结构：**

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | `string` | 消息 ID |
| `role` | `"user" \| "assistant" \| "system" \| "tool"` | 消息角色 |
| `content` | `string \| ContentBlock[]` | 消息内容 |
| `thinking` | `string` | 思考过程（assistant 消息） |
| `toolCalls` | `ToolCall[]` | 工具调用记录（assistant 消息） |
| `toolCallId` | `string` | 对应的工具调用 ID（tool 消息） |
| `usage` | `{ inputTokens, outputTokens }` | Token 用量 |
| `createtime` | `number` | 创建时间戳 |

### clear — 清空对话

```javascript
await conv.clear();
```

清空对话的所有消息历史。

### save — 持久化保存

```javascript
await conv.save();
```

将对话元数据保存到存储。临时对话（`ephemeral: true`）默认不保存，调用此方法可以将其转为持久化。

### attach — 重新连接后台对话

```javascript
const stream = await conv.attach();
for await (const chunk of stream) {
  // 接收后台对话的实时事件
}
```

当对话以 `background: true` 创建并且仍在后台运行时，可以通过 `attach()` 重新连接，接收后续的流式事件。

### 实例属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `id` | `string` | 对话 ID |
| `title` | `string` | 对话标题 |
| `modelId` | `string` | 使用的模型 ID |

## 多模态内容

消息内容可以是纯文本字符串，也可以是 `ContentBlock[]` 数组以支持多模态：

```javascript
// 发送文本 + 图片
await conv.chat([
  { type: "text", text: "请分析这张图片的内容" },
  { type: "image", attachmentId: "img-id", mimeType: "image/png" }
]);
```

### ContentBlock 类型

| type | 必填字段 | 说明 |
|------|---------|------|
| `text` | `text: string` | 文本内容 |
| `image` | `attachmentId: string, mimeType: string` | 图片，需要模型支持视觉 |
| `file` | `attachmentId: string, mimeType: string, name: string` | 文件 |
| `audio` | `attachmentId: string, mimeType: string` | 音频 |

## 临时对话 vs 持久化对话

| 特性 | 持久化对话（默认） | 临时对话（ephemeral） |
|------|-------------------|---------------------|
| 消息存储 | OPFS 持久化 | 仅内存 |
| 内置工具 | 全部可用 | 不包含，需自行通过 `tools` 提供 |
| 对话列表 | 可见 | 不可见 |
| Prompt Caching | 支持 | 可选关闭 |
| 用途 | 通用对话 | 轻量临时任务、快速问答 |

## 上下文管理

### 自动压缩（Auto-compact）

当对话上下文使用量超过模型 context window 的 **80%** 时，系统会自动调用 LLM 生成历史摘要，替换旧消息以释放空间。

### Prompt Caching

默认启用。对于 Anthropic 模型，系统提示词和历史消息会被缓存，重复对话时可显著减少 Token 消耗和延迟。

可通过 `cache: false` 关闭：

```javascript
const conv = await CAT.agent.conversation.create({ cache: false });
```

## 完整示例

```javascript
// ==UserScript==
// @name        智能翻译助手
// @match       *://*/*
// @grant       CAT.agent.conversation
// @grant       CAT.agent.dom
// ==/UserScript==

// 创建带有自定义工具的对话
const conv = await CAT.agent.conversation.create({
  system: "你是一个翻译助手。用户会给你网页内容，请翻译成中文。",
  tools: [{
    name: "get_selection",
    description: "获取用户在页面上选中的文本",
    parameters: { type: "object", properties: {} },
    handler: async () => {
      return { text: window.getSelection()?.toString() || "没有选中文本" };
    }
  }]
});

// 流式输出翻译结果
const stream = await conv.chatStream("请获取选中的文本并翻译成中文");
let result = "";
for await (const chunk of stream) {
  if (chunk.type === "content_delta") {
    result += chunk.content;
    // 实时更新 UI
    updateTranslationUI(result);
  }
}
```
