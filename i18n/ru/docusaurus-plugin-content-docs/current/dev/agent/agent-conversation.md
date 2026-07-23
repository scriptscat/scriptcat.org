---
title: API диалогов
---

`@grant CAT.agent.conversation`

API диалогов — ядро системы Agent: скрипт может создавать AI-диалоги, отправлять сообщения и получать ответы.

## Создание диалога

```javascript
const conv = await CAT.agent.conversation.create(options?);
```

### ConversationCreateOptions

| Параметр | Тип | По умолчанию | Описание |
|------|------|--------|------|
| `id` | `string` | автогенерация | ID диалога, используется для возобновления существующего |
| `system` | `string` | — | Пользовательский системный промпт, добавляется после встроенного |
| `model` | `string` | модель по умолчанию | ID модели (получается после настройки в панели управления) |
| `maxIterations` | `number` | `20` | Максимальное число итераций цикла вызовов инструментов за один ход диалога |
| `skills` | `"auto" \| string[]` | — | `"auto"` загружает все Skills автоматически, либо укажите массив имён Skill |
| `tools` | `ToolDefinition[]` | — | Список пользовательских инструментов (см. ниже) |
| `commands` | `Record<string, CommandHandler>` | — | Пользовательские команды диалога |
| `ephemeral` | `boolean` | `false` | Временный диалог, не сохраняется в хранилище |
| `cache` | `boolean` | `true` | Включить Prompt Caching (снижает расход токенов) |
| `background` | `boolean` | `false` | Фоновый диалог, продолжающий работу после отключения UI; можно переподключиться через `attach()` |

### Пользовательские инструменты

Скрипт может регистрировать собственные инструменты для вызова AI:

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

`parameters` инструмента следует спецификации [JSON Schema](https://json-schema.org/); AI использует `description`, чтобы понять, когда и как вызывать инструмент.

### Пользовательские команды

Можно регистрировать пользовательские команды, начинающиеся с `/`:

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

Встроенные команды: `/new` (новый диалог), `/reset` (сброс контекста), `/compact` (сжатие истории сообщений).

## Получение существующего диалога

```javascript
const conv = await CAT.agent.conversation.get(conversationId);
// returns null if the conversation doesn't exist
```

## Методы ConversationInstance

### chat — синхронный чат

```javascript
const reply = await conv.chat(content, options?);
```

Отправляет сообщение и ждёт полного ответа. Пока AI отвечает, он может вызывать инструменты; `chat` ждёт завершения всех вызовов, прежде чем вернуть итоговый результат.

**Параметры:**

| Параметр | Тип | Описание |
|------|------|------|
| `content` | `string \| ContentBlock[]` | Содержимое сообщения: текст или мультимодальные блоки |
| `options.tools` | `ToolDefinition[]` | Дополнительные инструменты только для этого вызова (объединяются с заданными при создании) |

**Возвращаемое значение, ChatReply:**

| Поле | Тип | Описание |
|------|------|------|
| `content` | `string \| ContentBlock[]` | Содержимое ответа AI |
| `thinking` | `string` | Процесс рассуждения модели (поддерживают только некоторые модели) |
| `toolCalls` | `ToolCall[]` | Зафиксированные вызовы инструментов в этом ответе |
| `usage` | `{ inputTokens, outputTokens }` | Использование токенов |
| `command` | `boolean` | Был ли этот ответ вызван командой |

### chatStream — потоковый чат

```javascript
const stream = await conv.chatStream(content, options?);
for await (const chunk of stream) {
  // handle streaming events
}
```

Получает ответ AI в реальном времени — удобно, когда нужно постепенно отображать вывод.

**Типы событий StreamChunk:**

| type | Поле | Описание |
|------|------|------|
| `content_delta` | `content: string` | Инкрементальный текстовый контент |
| `thinking_delta` | `thinking: string` | Инкрементальный контент рассуждений |
| `tool_call` | `toolCall: ToolCall` | Информация о вызове инструмента (при смене состояния) |
| `content_block` | `block: ContentBlock` | Блок контента (изображение, файл и т.д.) |
| `done` | `usage: { inputTokens, outputTokens }` | Ход диалога завершён |
| `error` | `error: string, errorCode?: string` | Произошла ошибка |

**Коды ошибок (errorCode):**

| Код ошибки | Описание |
|--------|------|
| `rate_limit` | Лимит частоты API; обычно повторяется автоматически |
| `auth` | Ошибка аутентификации; проверьте API Key |
| `tool_timeout` | Таймаут выполнения инструмента |
| `max_iterations` | Достигнут максимум итераций цикла вызовов инструментов |
| `api_error` | Другая ошибка API |

### getMessages — получить историю сообщений

```javascript
const messages = await conv.getMessages();
```

Возвращает `ChatMessage[]` со всеми сообщениями диалога.

**Структура ChatMessage:**

| Поле | Тип | Описание |
|------|------|------|
| `id` | `string` | ID сообщения |
| `role` | `"user" \| "assistant" \| "system" \| "tool"` | Роль сообщения |
| `content` | `string \| ContentBlock[]` | Содержимое сообщения |
| `thinking` | `string` | Процесс рассуждения (сообщения assistant) |
| `toolCalls` | `ToolCall[]` | Записи вызовов инструментов (сообщения assistant) |
| `toolCallId` | `string` | Соответствующий ID вызова инструмента (сообщения tool) |
| `usage` | `{ inputTokens, outputTokens }` | Использование токенов |
| `createtime` | `number` | Временная метка создания |

### clear — очистить диалог

```javascript
await conv.clear();
```

Очищает всю историю сообщений диалога.

### save — сохранить диалог

```javascript
await conv.save();
```

Сохраняет метаданные диалога в хранилище. Временные диалоги (`ephemeral: true`) по умолчанию не сохраняются; вызов этого метода превращает их в постоянные.

### attach — переподключиться к фоновому диалогу

```javascript
const stream = await conv.attach();
for await (const chunk of stream) {
  // receive real-time events from the background conversation
}
```

Если диалог создан с `background: true` и всё ещё работает в фоне, можно переподключиться через `attach()` и получать последующие потоковые события.

### Свойства экземпляра

| Свойство | Тип | Описание |
|------|------|------|
| `id` | `string` | ID диалога |
| `title` | `string` | Заголовок диалога |
| `modelId` | `string` | ID используемой модели |

## Мультимодальный контент

Содержимое сообщения может быть обычной строкой или массивом `ContentBlock[]` для поддержки нескольких модальностей:

```javascript
// Send text + an image
await conv.chat([
  { type: "text", text: "Please analyze the content of this image" },
  { type: "image", attachmentId: "img-id", mimeType: "image/png" }
]);
```

### Типы ContentBlock

| type | Обязательные поля | Описание |
|------|---------|------|
| `text` | `text: string` | Текстовое содержимое |
| `image` | `attachmentId: string, mimeType: string` | Изображение; модель должна поддерживать vision |
| `file` | `attachmentId: string, mimeType: string, name: string` | Файл |
| `audio` | `attachmentId: string, mimeType: string` | Аудио |

## Временные и постоянные диалоги

| Свойство | Постоянный диалог (по умолчанию) | Временный диалог |
|------|-------------------|---------------------|
| Хранение сообщений | Сохраняется в OPFS | Только в памяти |
| Встроенные инструменты | Все доступны | Не включены; нужно передавать через `tools` |
| Список диалогов | Виден | Не виден |
| Prompt Caching | Поддерживается | Можно отключить |
| Сценарий | Обычный диалог | Лёгкие разовые задачи, быстрые вопросы |

## Управление контекстом

### Автосжатие

Когда использование контекста диалога превышает **80%** окна контекста модели, система автоматически вызывает LLM для генерации сводки истории, заменяя старые сообщения и освобождая место.

### Prompt Caching

Включён по умолчанию. Для моделей Anthropic системный промпт и история сообщений кэшируются, что может существенно снизить расход токенов и задержку на повторных ходах диалога.

Можно отключить через `cache: false`:

```javascript
const conv = await CAT.agent.conversation.create({ cache: false });
```

## Полный пример

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
