---
title: API розмови
---

`@grant CAT.agent.conversation`

API розмови є ядром системи Agent, що дозволяє скрипту створювати AI-розмови, надсилати повідомлення та отримувати відповіді.

## Створення розмови

```javascript
const conv = await CAT.agent.conversation.create(options?);
```

### ConversationCreateOptions

| Параметр | Тип | За замовчуванням | Опис |
|------|------|--------|------|
| `id` | `string` | автогенерований | ID розмови, використовується для відновлення існуючої розмови |
| `system` | `string` | — | Власна системна підказка, додається після вбудованої підказки |
| `model` | `string` | модель за замовчуванням | ID моделі (отримується після налаштування на сторінці керування) |
| `maxIterations` | `number` | `20` | Максимальна кількість циклів виклику інструментів у межах одного ходу розмови |
| `skills` | `"auto" \| string[]` | — | `"auto"` завантажує всі Skill автоматично, або масив конкретних назв Skill |
| `tools` | `ToolDefinition[]` | — | Власний список інструментів (див. нижче) |
| `commands` | `Record<string, CommandHandler>` | — | Власні команди розмови |
| `ephemeral` | `boolean` | `false` | Тимчасова розмова, яка не зберігається у сховищі |
| `cache` | `boolean` | `true` | Увімкнути кешування підказок (зменшує використання токенів) |

### Власні інструменти

Скрипт може реєструвати власні інструменти для виклику AI:

```javascript
const conv = await CAT.agent.conversation.create({
  tools: [{
    name: "get_weather",
    description: "Get weather information for the specified city",
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

`parameters` інструмента відповідає специфікації [JSON Schema](https://json-schema.org/). AI використовує `description`, щоб зрозуміти, коли і як викликати інструмент.

### Власні команди

Можна реєструвати власні команди, що починаються з `/`:

```javascript
const conv = await CAT.agent.conversation.create({
  commands: {
    "/export": async (args) => {
      // Спрацьовує, коли користувач вводить "/export pdf"
      await exportToPdf(args);
      return "Export complete";
    }
  }
});
```

Вбудовані команди: `/new` (очистити історію розмови) — можна перевизначити власним обробником.

## Отримання існуючої розмови

```javascript
const conv = await CAT.agent.conversation.get(conversationId);
// Повертає null, якщо розмови не існує
```

## Методи ConversationInstance

### chat — синхронна розмова

```javascript
const reply = await conv.chat(content, options?);
```

Надсилає повідомлення та чекає на повну відповідь. AI може викликати інструменти під час відповіді; `chat` чекає завершення всіх виконань інструментів, перш ніж повернути остаточний результат.

**Параметри:**

| Параметр | Тип | Опис |
|------|------|------|
| `content` | `string \| ContentBlock[]` | Вміст повідомлення, текст або мультимодальні блоки вмісту |
| `options.tools` | `ToolDefinition[]` | Додаткові інструменти, які додаються лише для цього виклику (об'єднуються з інструментами, переданими під час створення) |

**Повертає `ChatReply`:**

| Поле | Тип | Опис |
|------|------|------|
| `content` | `string \| ContentBlock[]` | Вміст відповіді AI |
| `thinking` | `string` | Процес мислення моделі (підтримується лише деякими моделями) |
| `toolCalls` | `ToolCall[]` | Запис викликів інструментів, зроблених під час цієї відповіді |
| `usage` | `{ inputTokens, outputTokens }` | Використання токенів |
| `command` | `boolean` | Чи була ця відповідь викликана командою |

### chatStream — потокова розмова

```javascript
const stream = await conv.chatStream(content, options?);
for await (const chunk of stream) {
  // Обробка потокових подій
}
```

Отримує відповідь AI у реальному часі — корисно, коли потрібно показувати вивід поступово.

**Типи подій `StreamChunk`:**

| type | Поля | Опис |
|------|------|------|
| `content_delta` | `content: string` | Інкрементний текстовий вміст |
| `thinking_delta` | `thinking: string` | Інкрементний вміст мислення |
| `tool_call` | `toolCall: ToolCall` | Інформація про виклик інструмента (спрацьовує при зміні стану) |
| `content_block` | `block: ContentBlock` | Блок вмісту (зображення, файл тощо) |
| `done` | `usage: { inputTokens, outputTokens }` | Хід розмови завершено |
| `error` | `error: string, errorCode?: string` | Помилка |

**Коди помилок (`errorCode`):**

| Код | Опис |
|--------|------|
| `rate_limit` | Досягнуто ліміту швидкості API; зазвичай повторюється автоматично |
| `auth` | Автентифікація не вдалася; перевірте ключ API |
| `tool_timeout` | Час виконання інструмента вичерпано |
| `max_iterations` | Досягнуто максимальної кількості циклів виклику інструментів |
| `api_error` | Інша помилка API |

### getMessages — отримати історію повідомлень

```javascript
const messages = await conv.getMessages();
```

Повертає `ChatMessage[]`, що містить кожне повідомлення в розмові.

**Форма `ChatMessage`:**

| Поле | Тип | Опис |
|------|------|------|
| `id` | `string` | ID повідомлення |
| `role` | `"user" \| "assistant" \| "system" \| "tool"` | Роль повідомлення |
| `content` | `string \| ContentBlock[]` | Вміст повідомлення |
| `thinking` | `{ content: string }` | Процес мислення (повідомлення асистента — зверніть увагу, що це об'єкт, а не звичайний рядок) |
| `error` | `string` | Повідомлення про помилку, якщо цей хід завершився помилкою |
| `modelId` | `string` | ID моделі, використаної для цього повідомлення |
| `durationMs` | `number` | Загальна тривалість відповіді в мс |
| `parentId` | `string` | ID батьківського повідомлення (для розгалуження) |
| `toolCalls` | `ToolCall[]` | Запис викликів інструментів (повідомлення асистента) |
| `toolCallId` | `string` | Відповідний ID виклику інструмента (повідомлення інструментів) |
| `usage` | `{ inputTokens, outputTokens }` | Використання токенів |
| `createtime` | `number` | Час створення |

### clear — очистити розмову

```javascript
await conv.clear();
```

Очищає всю історію повідомлень у розмові.

### save — зберегти розмову

```javascript
await conv.save();
```

Зберігає метадані розмови у сховище. Тимчасові розмови (`ephemeral: true`) за замовчуванням не зберігаються; виклик цього методу перетворює її на збережену розмову.


### Властивості екземпляра

| Властивість | Тип | Опис |
|------|------|------|
| `id` | `string` | ID розмови |
| `title` | `string` | Назва розмови |
| `modelId` | `string` | Використовуваний ID моделі |

## Мультимодальний вміст

Вміст повідомлення може бути звичайним текстовим рядком або масивом `ContentBlock[]` для підтримки мультимодального вводу:

```javascript
// Надіслати текст + зображення
await conv.chat([
  { type: "text", text: "Please analyze what's in this image" },
  { type: "image", attachmentId: "img-id", mimeType: "image/png" }
]);
```

### Типи ContentBlock

| type | Обов'язкові поля | Опис |
|------|---------|------|
| `text` | `text: string` | Текстовий вміст |
| `image` | `attachmentId: string, mimeType: string` | Зображення; вимагає модель з підтримкою зору |
| `file` | `attachmentId: string, mimeType: string, name: string` | Файл |
| `audio` | `attachmentId: string, mimeType: string` | Аудіо |

## Тимчасові та збережені розмови

| Функція | Збережена розмова (за замовчуванням) | Тимчасова розмова |
|------|-------------------|---------------------|
| Зберігання повідомлень | Зберігається в OPFS | Лише в пам'яті |
| Вбудовані інструменти | Усі доступні | Не включені; надайте власні через `tools` |
| Список розмов | Видимий | Не видимий |
| Кешування підказок | Підтримується | Можна вимкнути |
| Випадок використання | Розмови загального призначення | Легкі одноразові завдання та швидкі питання-відповіді |

## Керування контекстом

### Автоматичне ущільнення

Коли використання контексту розмови перевищує **80%** вікна контексту моделі, система автоматично викликає LLM для створення підсумку історії, замінюючи старіші повідомлення, щоб звільнити місце.

### Кешування підказок

Увімкнено за замовчуванням. Для моделей Anthropic системна підказка та історія повідомлень кешуються, що значно зменшує використання токенів і затримку для повторних ходів.

Можна вимкнути через `cache: false`:

```javascript
const conv = await CAT.agent.conversation.create({ cache: false });
```

## Повний приклад

```javascript
// ==UserScript==
// @name        Smart translation assistant
// @match       *://*/*
// @grant       CAT.agent.conversation
// @grant       CAT.agent.dom
// ==/UserScript==

// Створити розмову з власним інструментом
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

// Потокова передача результату перекладу
const stream = await conv.chatStream("Please get the selected text and translate it into Chinese");
let result = "";
for await (const chunk of stream) {
  if (chunk.type === "content_delta") {
    result += chunk.content;
    // Оновлення інтерфейсу в реальному часі
    updateTranslationUI(result);
  }
}
```
