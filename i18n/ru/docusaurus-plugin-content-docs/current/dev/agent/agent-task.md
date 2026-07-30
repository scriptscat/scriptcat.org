---
title: API задач по расписанию
---

`@grant CAT.agent.task`

API задач по расписанию позволяет скрипту создавать задачи на основе Cron-выражений с поддержкой двух режимов выполнения.

## Режимы выполнения

### Внутренний режим (Internal)

Автоматически выполняется системой Agent:
- При срабатывании cron автоматически создаёт или возобновляет диалог
- Отправляет настроенный `prompt` в LLM
- Позволяет указать модель и Skills
- История выполнения и использование токенов записываются автоматически

### Режим событий (Event)

Обрабатывается самим скриптом:
- При срабатывании cron скрипту отправляется уведомление о событии
- Скрипт слушает событие через `addListener`
- Полностью пользовательская логика обработки

## create — создать задачу

```javascript
const task = await CAT.agent.task.create(options);
```

**Параметры, AgentTaskCreateOptions:**

| Параметр | Тип | Обязательно | Описание |
|------|------|------|------|
| `name` | `string` | Да | Имя задачи |
| `crontab` | `string` | Да | Стандартное cron-выражение (5 полей: minute hour day month weekday) |
| `mode` | `"internal" \| "event"` | Да | Режим выполнения |
| `enabled` | `boolean` | Нет | Включена ли; по умолчанию `true` |
| `notify` | `boolean` | Нет | Отправлять ли уведомление браузера при срабатывании |
| `prompt` | `string` | Нет | Промпт для внутреннего режима |
| `modelId` | `string` | Нет | ID модели для внутреннего режима |
| `skills` | `string[]` | Нет | Список Skills для загрузки во внутреннем режиме |
| `maxIterations` | `number` | Нет | Максимум раундов вызовов инструментов во внутреннем режиме; по умолчанию `10` |

**Возвращаемое значение, AgentTask:**

| Поле | Тип | Описание |
|------|------|------|
| `id` | `string` | ID задачи |
| `name` | `string` | Имя задачи |
| `crontab` | `string` | Cron-выражение |
| `mode` | `string` | Режим выполнения |
| `enabled` | `boolean` | Включена ли |
| `notify` | `boolean` | Отправляются ли уведомления |
| `nextruntime` | `number` | Временная метка следующего выполнения |
| `lastruntime` | `number` | Временная метка последнего выполнения |
| `lastRunStatus` | `"success" \| "error"` | Статус последнего выполнения |
| `lastRunError` | `string` | Сообщение об ошибке последнего выполнения |
| `createtime` | `number` | Временная метка создания |

**Примеры cron-выражений:**

| Выражение | Описание |
|--------|------|
| `* * * * *` | Каждую минуту |
| `0 9 * * *` | Каждый день в 09:00 |
| `0 */2 * * *` | Каждые 2 часа |
| `30 8 * * 1-5` | По будням в 08:30 |
| `0 0 1 * *` | 1-го числа каждого месяца в 00:00 |

## list — список всех задач

```javascript
const tasks = await CAT.agent.task.list();
```

Возвращает все задачи, созданные текущим скриптом.

## get — детали задачи

```javascript
const task = await CAT.agent.task.get(taskId);
```

Возвращает `undefined`, если задача не существует.

## update — обновить задачу

```javascript
const task = await CAT.agent.task.update(taskId, partial);
```

**Обновляемые поля:**

```javascript
await CAT.agent.task.update(task.id, {
  name: "New name",
  crontab: "0 10 * * *",
  enabled: false,
  prompt: "New prompt",
  notify: true
});
```

После обновления `nextruntime` пересчитывается автоматически.

## remove — удалить задачу

```javascript
const success = await CAT.agent.task.remove(taskId);
```

## runNow — запустить немедленно

```javascript
await CAT.agent.task.runNow(taskId);
```

Сразу запускает одно выполнение задачи, не дожидаясь cron-расписания (неблокирующе, в фоне).

## addListener — слушать срабатывания задачи

```javascript
const listenerId = await CAT.agent.task.addListener(taskId, callback);
```

Используется только для задач в **режиме событий**. Запускает callback при срабатывании cron.

**Параметр callback, AgentTaskTrigger:**

| Поле | Тип | Описание |
|------|------|------|
| `taskId` | `string` | ID задачи |
| `name` | `string` | Имя задачи |
| `crontab` | `string` | Cron-выражение |
| `triggeredAt` | `number` | Временная метка срабатывания |

## removeListener — удалить слушатель

```javascript
await CAT.agent.task.removeListener(listenerId);
```

## Полные примеры

### Внутренний режим — автоматическое выполнение AI

```javascript
// ==UserScript==
// @name        Daily News Summary
// @match       *://*/*
// @grant       CAT.agent.task
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Daily news summary",
  crontab: "0 9 * * *",       // every day at 9:00
  mode: "internal",
  prompt: "Please search today's tech news and generate a short summary saved to OPFS",
  skills: ["web-search"],
  maxIterations: 10,
  notify: true
});

console.log("Task created, next run:", new Date(task.nextruntime));
```

### Режим событий — обработку делает скрипт

```javascript
// ==UserScript==
// @name        Scheduled Data Collection
// @match       *://*/*
// @grant       CAT.agent.task
// @grant       CAT.agent.dom
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Stock data collection",
  crontab: "*/30 9-15 * * 1-5", // every 30 minutes, 9:00-15:00 on weekdays
  mode: "event",
  enabled: true,
  notify: false
});

await CAT.agent.task.addListener(task.id, async (trigger) => {
  console.log(`Task triggered: ${trigger.name} at ${new Date(trigger.triggeredAt)}`);

  // custom collection logic
  await CAT.agent.dom.navigate("https://finance.example.com/stock");
  const content = await CAT.agent.dom.readPage({ selector: ".stock-table" });

  // process the data...
  console.log("Collection complete");
});
```
