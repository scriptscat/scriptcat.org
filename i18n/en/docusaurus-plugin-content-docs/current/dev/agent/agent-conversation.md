---
title: Conversation API
---

`@grant CAT.agent.conversation`

The Conversation API is the core of the Agent system, letting a script create AI conversations, send messages, and receive replies.

## Creating a Conversation

```javascript
const conv = await CAT.agent.conversation.create(options?);
```

### ConversationCreateOptions

| Parameter | Type | Default | Description |
|------|------|--------|------|
| `id` | `string` | auto-generated | Conversation ID, used to resume an existing conversation |
| `system` | `string` | — | Custom system prompt, appended after the built-in prompt |
| `model` | `string` | default model | Model ID (obtained after configuring it in the dashboard) |
| `maxIterations` | `number` | `20` | Maximum number of tool-call loop iterations within a single conversation turn |
| `skills` | `"auto" \| string[]` | — | `"auto"` loads all Skills automatically, or specify an array of Skill names |
| `tools` | `ToolDefinition[]` | — | Custom tool list (see below) |
| `commands` | `Record<string, CommandHandler>` | — | Custom conversation commands |
| `ephemeral` | `boolean` | `false` | Ephemeral conversation, not persisted to storage |
| `cache` | `boolean` | `true` | Enable Prompt Caching (reduces token usage) |
| `background` | `boolean` | `false` | Background conversation that keeps running after the UI disconnects; can be reconnected via `attach()` |

### Custom Tools

A script can register its own tools for the AI to call:

```javascript
const conv = await CAT.agent.conversation.create({
  tools: [{
    name: "get_weather",
    description: "Get weather information for a given city",
    parameters: {
      type: "object",
      properties: {
        city: {
          type: "string",
          description: "City name"
        },
        unit: {
          type: "string",
          enum: ["celsius", "fahrenheit"],
          description: "Temperature unit"
        }
      },
      required: ["city"]
    },
    handler: async (args) => {
      // args = { city: "Beijing", unit: "celsius" }
      const data = await fetchWeather(args.city, args.unit);
      return { temperature: data.temp, condition: data.condition };
    }
  }]
});
```

A tool's `parameters` follows the [JSON Schema](https://json-schema.org/) spec; the AI uses `description` to understand when and how to call the tool.

### Custom Commands

You can register custom commands starting with `/`:

```javascript
const conv = await CAT.agent.conversation.create({
  commands: {
    "/export": async (args) => {
      // triggered when the user types "/export pdf"
      await exportToPdf(args);
      return "Export complete";
    }
  }
});
```

Built-in commands: `/new` (start a new conversation), `/reset` (reset context), `/compact` (compact message history).

## Getting an Existing Conversation

```javascript
const conv = await CAT.agent.conversation.get(conversationId);
// returns null if the conversation doesn't exist
```

## ConversationInstance Methods

### chat — Synchronous Chat

```javascript
const reply = await conv.chat(content, options?);
```

Sends a message and waits for the full reply to come back. The AI may call tools while replying; `chat` waits for all tool calls to finish before returning the final result.

**Parameters:**

| Parameter | Type | Description |
|------|------|------|
| `content` | `string \| ContentBlock[]` | Message content: text or multi-modal content blocks |
| `options.tools` | `ToolDefinition[]` | Extra tools appended just for this call (merged with the tools set at creation time) |

**Return value, ChatReply:**

| Field | Type | Description |
|------|------|------|
| `content` | `string \| ContentBlock[]` | The AI's reply content |
| `thinking` | `string` | The model's thinking process (only some models support this) |
| `toolCalls` | `ToolCall[]` | The tool calls recorded during this reply |
| `usage` | `{ inputTokens, outputTokens }` | Token usage |
| `command` | `boolean` | Whether this reply was triggered by a command |

### chatStream — Streaming Chat

```javascript
const stream = await conv.chatStream(content, options?);
for await (const chunk of stream) {
  // handle streaming events
}
```

Receives the AI's reply in real time — useful when you need to progressively display the output.

**StreamChunk event types:**

| type | Field | Description |
|------|------|------|
| `content_delta` | `content: string` | Incremental text content |
| `thinking_delta` | `thinking: string` | Incremental thinking content |
| `tool_call` | `toolCall: ToolCall` | Tool call info (fires on state changes) |
| `content_block` | `block: ContentBlock` | A content block (image, file, etc.) |
| `done` | `usage: { inputTokens, outputTokens }` | The conversation turn is complete |
| `error` | `error: string, errorCode?: string` | An error occurred |

**Error codes (errorCode):**

| Error code | Description |
|--------|------|
| `rate_limit` | API rate limit; usually retried automatically |
| `auth` | Authentication failed; check the API Key |
| `tool_timeout` | Tool execution timed out |
| `max_iterations` | Reached the maximum tool-call loop count |
| `api_error` | Other API error |

### getMessages — Get Message History

```javascript
const messages = await conv.getMessages();
```

Returns `ChatMessage[]`, containing every message in the conversation.

**ChatMessage structure:**

| Field | Type | Description |
|------|------|------|
| `id` | `string` | Message ID |
| `role` | `"user" \| "assistant" \| "system" \| "tool"` | Message role |
| `content` | `string \| ContentBlock[]` | Message content |
| `thinking` | `string` | Thinking process (assistant messages) |
| `toolCalls` | `ToolCall[]` | Tool call records (assistant messages) |
| `toolCallId` | `string` | The corresponding tool call ID (tool messages) |
| `usage` | `{ inputTokens, outputTokens }` | Token usage |
| `createtime` | `number` | Creation timestamp |

### clear — Clear the Conversation

```javascript
await conv.clear();
```

Clears all message history in the conversation.

### save — Persist the Conversation

```javascript
await conv.save();
```

Saves the conversation's metadata to storage. Ephemeral conversations (`ephemeral: true`) are not saved by default; calling this method converts them to persistent.

### attach — Reconnect to a Background Conversation

```javascript
const stream = await conv.attach();
for await (const chunk of stream) {
  // receive real-time events from the background conversation
}
```

When a conversation was created with `background: true` and is still running in the background, you can reconnect to it with `attach()` to receive its subsequent streaming events.

### Instance Properties

| Property | Type | Description |
|------|------|------|
| `id` | `string` | Conversation ID |
| `title` | `string` | Conversation title |
| `modelId` | `string` | The model ID in use |

## Multi-modal Content

Message content can be a plain text string, or a `ContentBlock[]` array to support multiple modalities:

```javascript
// Send text + an image
await conv.chat([
  { type: "text", text: "Please analyze the content of this image" },
  { type: "image", attachmentId: "img-id", mimeType: "image/png" }
]);
```

### ContentBlock Types

| type | Required fields | Description |
|------|---------|------|
| `text` | `text: string` | Text content |
| `image` | `attachmentId: string, mimeType: string` | An image; the model must support vision |
| `file` | `attachmentId: string, mimeType: string, name: string` | A file |
| `audio` | `attachmentId: string, mimeType: string` | Audio |

## Ephemeral vs. Persistent Conversations

| Feature | Persistent conversation (default) | Ephemeral conversation |
|------|-------------------|---------------------|
| Message storage | Persisted to OPFS | Memory only |
| Built-in tools | All available | Not included; must be supplied via `tools` |
| Conversation list | Visible | Not visible |
| Prompt Caching | Supported | Can be disabled |
| Use case | General conversation | Lightweight one-off tasks, quick Q&A |

## Context Management

### Auto-compact

When the conversation's context usage exceeds **80%** of the model's context window, the system automatically calls the LLM to generate a summary of the history, replacing older messages to free up space.

### Prompt Caching

Enabled by default. For Anthropic models, the system prompt and message history are cached, which can significantly reduce token usage and latency on repeated conversation turns.

Can be disabled with `cache: false`:

```javascript
const conv = await CAT.agent.conversation.create({ cache: false });
```

## Full Example

```javascript
// ==UserScript==
// @name        Smart Translation Assistant
// @match       *://*/*
// @grant       CAT.agent.conversation
// @grant       CAT.agent.dom
// ==/UserScript==

// Create a conversation with a custom tool
const conv = await CAT.agent.conversation.create({
  system: "You are a translation assistant. The user will give you web page content — please translate it into Chinese.",
  tools: [{
    name: "get_selection",
    description: "Get the text the user has selected on the page",
    parameters: { type: "object", properties: {} },
    handler: async () => {
      return { text: window.getSelection()?.toString() || "No text selected" };
    }
  }]
});

// Stream the translation result
const stream = await conv.chatStream("Please get the selected text and translate it into Chinese");
let result = "";
for await (const chunk of stream) {
  if (chunk.type === "content_delta") {
    result += chunk.content;
    // update the UI in real time
    updateTranslationUI(result);
  }
}
```
