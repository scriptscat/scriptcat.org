---
title: Model Query API
---

`@grant CAT.agent.model`

The Model Query API provides read-only access to query the model information the user has configured in the dashboard. For security reasons, the API Key is never exposed to scripts.

## list — List All Models

```javascript
const models = await CAT.agent.model.list();
```

**Return value, ModelSummary[]:**

| Field | Type | Description |
|------|------|------|
| `id` | `string` | Model ID |
| `name` | `string` | Display name |
| `provider` | `"openai" \| "anthropic" \| "zhipu"` | Provider type |
| `apiBaseUrl` | `string` | The API base address |
| `model` | `string` | The model identifier (e.g. `gpt-4o`, `claude-sonnet-4-20250514`) |
| `maxTokens` | `number` | Maximum output token count |
| `contextWindow` | `number` | Context window size |
| `supportsVision` | `boolean` | Whether it supports visual input (images) |
| `supportsImageOutput` | `boolean` | Whether it supports image generation |

> Note: the return value **does not include** the `apiKey` field.

## get — Get a Specific Model

```javascript
const model = await CAT.agent.model.get(modelId);
```

Returns `null` if the model doesn't exist.

## getDefault — Get the Default Model ID

```javascript
const defaultId = await CAT.agent.model.getDefault();
```

Returns the default model ID string set by the user.

## getSummary — Get a Model List Summary

```javascript
const summary = await CAT.agent.model.getSummary();
```

Returns a text summary string of all configured models, suitable for injecting directly into a prompt for the AI to reference.

## Use Cases

### Letting the User Choose a Model

```javascript
// ==UserScript==
// @name        Model Selection Example
// @grant       CAT.agent.model
// @grant       CAT.agent.conversation
// ==/UserScript==

const models = await CAT.agent.model.list();
const defaultId = await CAT.agent.model.getDefault();

// Present these to the user to choose from
const selectedModel = models.find(m => m.supportsVision) || models[0];

const conv = await CAT.agent.conversation.create({
  model: selectedModel.id
});
```

### Checking Model Capabilities

```javascript
const model = await CAT.agent.model.get("my-model-id");
if (model?.supportsVision) {
  // can send images
  await conv.chat([
    { type: "text", text: "Please describe this image" },
    { type: "image", attachmentId: imgId, mimeType: "image/png" }
  ]);
} else {
  // text only
  await conv.chat("Please describe the content of the current page");
}
```
