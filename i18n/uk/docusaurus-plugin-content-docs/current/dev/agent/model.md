---
title: API запиту моделі
---

`@grant CAT.agent.model`

API запиту моделі надає доступ лише для читання до моделей, які користувач налаштував на сторінці керування. З міркувань безпеки ключ API ніколи не передається скрипту.

## list — список усіх моделей

```javascript
const models = await CAT.agent.model.list();
```

**Повертає `ModelSummary[]`:**

| Поле | Тип | Опис |
|------|------|------|
| `id` | `string` | ID конфігурації моделі |
| `name` | `string` | Відображувана назва, визначена користувачем (напр. "GPT-4o", "Claude Sonnet") |
| `provider` | `"openai" \| "anthropic"` | Тип провайдера |
| `apiBaseUrl` | `string` | Базовий URL API |
| `model` | `string` | Ідентифікатор моделі, що надсилається в API провайдера (напр. `gpt-4o`, `claude-sonnet-4-20250514`) |
| `maxTokens` | `number` | Максимальна кількість вихідних токенів (пропускається, якщо не встановлено) |

> Примітка: повернені об'єкти **не містять** поля `apiKey`.

## get — отримати конкретну модель

```javascript
const model = await CAT.agent.model.get(modelId);
```

Повертає `null`, якщо модель не існує.

## getDefault — отримати ID моделі за замовчуванням

```javascript
const defaultId = await CAT.agent.model.getDefault();
```

Повертає ID моделі за замовчуванням, налаштований користувачем; повертає порожній рядок, якщо його не встановлено.

## getSummary — отримати ID моделі підсумовування

```javascript
const summaryModelId = await CAT.agent.model.getSummary();
```

Повертає ID легкої моделі, яку користувач налаштував спеціально для завдань підсумовування (наприклад, автоматичного ущільнення історії розмови). Якщо окремо не налаштовано, система повертається до моделі за замовчуванням, і цей метод повертає порожній рядок.

## Сценарії використання

### Дозволити користувачу вибрати модель

```javascript
// ==UserScript==
// @name        Model picker example
// @grant       CAT.agent.model
// @grant       CAT.agent.conversation
// ==/UserScript==

const models = await CAT.agent.model.list();
const defaultId = await CAT.agent.model.getDefault();

// Показати список користувачу та дозволити вибір
const selectedModel = models.find(m => m.id === defaultId) || models[0];

const conv = await CAT.agent.conversation.create({
  model: selectedModel.id
});
```

### Отримання деталей конкретної моделі

```javascript
const model = await CAT.agent.model.get("my-model-id");
if (model) {
  console.log(`${model.name} (${model.provider}), max output ${model.maxTokens ?? "unset"} tokens`);
}
```
