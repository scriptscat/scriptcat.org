---
title: API запланованих завдань
---

`@grant CAT.agent.task`

API запланованих завдань дозволяє скрипту створювати заплановані завдання на основі cron-виразів, з двома режимами виконання.

## Режими виконання

### Внутрішній режим

Обробляється автоматично системою Agent:
- Автоматично створює або відновлює розмову, коли спрацьовує cron-розклад
- Надсилає налаштований `prompt` до LLM
- Можна вказати модель і Skill
- Історія виконання та використання токенів записуються автоматично

### Режим подій

Обробляється самим скриптом:
- Сповіщення про подію надсилається скрипту, коли спрацьовує cron-розклад
- Скрипт прослуховує подію через `addListener`
- Логіка обробки повністю власна

## create — створення завдання

```javascript
const task = await CAT.agent.task.create(options);
```

**Параметри (`AgentTaskCreateOptions`):**

| Параметр | Тип | Обов'язковий | Опис |
|------|------|------|------|
| `name` | `string` | Так | Назва завдання |
| `crontab` | `string` | Так | Стандартний cron-вираз (5 полів: хвилина година день місяць день тижня) |
| `mode` | `"internal" \| "event"` | Так | Режим виконання |
| `enabled` | `boolean` | Ні | Чи ввімкнене, за замовчуванням `true` |
| `notify` | `boolean` | Ні | Чи надсилати браузерне сповіщення під час спрацювання |
| `prompt` | `string` | Ні | Підказка для внутрішнього режиму |
| `modelId` | `string` | Ні | ID моделі для використання у внутрішньому режимі |
| `skills` | `string[]` | Ні | Skill для завантаження у внутрішньому режимі |
| `maxIterations` | `number` | Ні | Максимальна кількість раундів викликів інструментів для внутрішнього режиму, за замовчуванням `10` |

**Повертає `AgentTask`:**

| Поле | Тип | Опис |
|------|------|------|
| `id` | `string` | ID завдання |
| `name` | `string` | Назва завдання |
| `crontab` | `string` | Cron-вираз |
| `mode` | `string` | Режим виконання |
| `enabled` | `boolean` | Чи ввімкнене |
| `notify` | `boolean` | Чи надсилаються сповіщення |
| `nextruntime` | `number` | Час наступного запуску |
| `lastruntime` | `number` | Час останнього запуску |
| `conversationId` | `string` | ID пов'язаної розмови у внутрішньому режимі (за бажанням) |
| `lastRunStatus` | `"success" \| "error"` | Статус останнього запуску |
| `lastRunError` | `string` | Повідомлення про помилку останнього запуску |
| `createtime` | `number` | Час створення |

**Приклади cron-виразів:**

| Вираз | Опис |
|--------|------|
| `* * * * *` | Щохвилини |
| `0 9 * * *` | Щодня о 09:00 |
| `0 */2 * * *` | Кожні 2 години |
| `30 8 * * 1-5` | У робочі дні о 08:30 |
| `0 0 1 * *` | 00:00 1-го числа кожного місяця |

## list — список усіх завдань

```javascript
const tasks = await CAT.agent.task.list();
```

Повертає всі завдання, створені поточним скриптом.

## get — отримати деталі завдання

```javascript
const task = await CAT.agent.task.get(taskId);
```

Повертає `undefined`, якщо завдання не існує.

## update — оновити завдання

```javascript
const task = await CAT.agent.task.update(taskId, partial);
```

**Поля, які можна оновити:**

```javascript
await CAT.agent.task.update(task.id, {
  name: "New name",
  crontab: "0 10 * * *",
  enabled: false,
  prompt: "New prompt",
  notify: true
});
```

Після оновлення `nextruntime` автоматично перераховується.

## remove — видалити завдання

```javascript
const success = await CAT.agent.task.remove(taskId);
```

## runNow — запустити негайно

```javascript
await CAT.agent.task.runNow(taskId);
```

Запускає завдання один раз негайно, без очікування cron-розкладу (неблокуючий, працює у фоновому режимі).

## addListener — прослуховування спрацювання завдання

```javascript
const listenerId = await CAT.agent.task.addListener(taskId, callback);
```

Використовується лише для завдань у **режимі подій**. Зворотний виклик запускається, коли спрацьовує cron-розклад.

**Параметр зворотного виклику (`AgentTaskTrigger`):**

| Поле | Тип | Опис |
|------|------|------|
| `taskId` | `string` | ID завдання |
| `name` | `string` | Назва завдання |
| `crontab` | `string` | Cron-вираз |
| `triggeredAt` | `number` | Час спрацювання |

## removeListener — видалити прослуховувач

```javascript
await CAT.agent.task.removeListener(listenerId);
```

## Повні приклади

### Внутрішній режим — AI запускає автоматично

```javascript
// ==UserScript==
// @name        Scheduled news digest
// @match       *://*/*
// @grant       CAT.agent.task
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Daily news digest",
  crontab: "0 9 * * *",       // Щодня о 9
  mode: "internal",
  prompt: "Please search today's tech news and save a short summary to OPFS",
  skills: ["web-search"],
  maxIterations: 10,
  notify: true
});

console.log("Task created, next run:", new Date(task.nextruntime));
```

### Режим подій — скрипт обробляє сам

```javascript
// ==UserScript==
// @name        Scheduled data collection
// @match       *://*/*
// @grant       CAT.agent.task
// @grant       CAT.agent.dom
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Stock data collection",
  crontab: "*/30 9-15 * * 1-5", // Кожні 30 хвилин, 9-15 у робочі дні
  mode: "event",
  enabled: true,
  notify: false
});

await CAT.agent.task.addListener(task.id, async (trigger) => {
  console.log(`Task triggered: ${trigger.name} at ${new Date(trigger.triggeredAt)}`);

  // Власна логіка збору
  await CAT.agent.dom.navigate("https://finance.example.com/stock");
  const content = await CAT.agent.dom.readPage({ selector: ".stock-table" });

  // Обробка даних...
  console.log("Collection complete");
});
```
