---
title: API запроса моделей
---

`@grant CAT.agent.model`

API запроса моделей предоставляет доступ только для чтения к информации о моделях, которые пользователь настроил в панели управления. Из соображений безопасности API Key никогда не передаётся скриптам.

## list — список всех моделей

```javascript
const models = await CAT.agent.model.list();
```

**Возвращаемое значение, ModelSummary[]:**

| Поле | Тип | Описание |
|------|------|------|
| `id` | `string` | ID модели |
| `name` | `string` | Отображаемое имя |
| `provider` | `"openai" \| "anthropic" \| "zhipu"` | Тип провайдера |
| `apiBaseUrl` | `string` | Базовый адрес API |
| `model` | `string` | Идентификатор модели (например, `gpt-4o`, `claude-sonnet-4-20250514`) |
| `maxTokens` | `number` | Максимальное число выходных токенов |
| `contextWindow` | `number` | Размер окна контекста |
| `supportsVision` | `boolean` | Поддержка визуального ввода (изображения) |
| `supportsImageOutput` | `boolean` | Поддержка генерации изображений |

> Примечание: возвращаемое значение **не включает** поле `apiKey`.

## get — получить конкретную модель

```javascript
const model = await CAT.agent.model.get(modelId);
```

Возвращает `null`, если модель не существует.

## getDefault — получить ID модели по умолчанию

```javascript
const defaultId = await CAT.agent.model.getDefault();
```

Возвращает строку ID модели по умолчанию, заданной пользователем.

## getSummary — получить сводку списка моделей

```javascript
const summary = await CAT.agent.model.getSummary();
```

Возвращает текстовую сводку всех настроенных моделей, подходящую для прямой вставки в промпт как справочник для AI.

## Сценарии использования

### Выбор модели пользователем

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

### Проверка возможностей модели

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
