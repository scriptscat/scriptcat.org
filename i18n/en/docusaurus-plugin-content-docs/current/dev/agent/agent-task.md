---
title: Scheduled Task API
---

`@grant CAT.agent.task`

The Scheduled Task API lets a script create Cron-expression-based scheduled tasks, supporting two execution modes.

## Execution Modes

### Internal Mode

Automatically executed by the Agent system:
- Automatically creates or resumes a conversation when the cron fires
- Sends the configured `prompt` to the LLM
- Lets you specify a model and Skills
- Execution history and token usage are recorded automatically

### Event Mode

Handled by the script itself:
- Sends an event notification to the script when the cron fires
- The script listens for the event via `addListener`
- Fully custom handling logic

## create — Create a Task

```javascript
const task = await CAT.agent.task.create(options);
```

**Parameters, AgentTaskCreateOptions:**

| Parameter | Type | Required | Description |
|------|------|------|------|
| `name` | `string` | Yes | Task name |
| `crontab` | `string` | Yes | A standard cron expression (5 fields: minute hour day month weekday) |
| `mode` | `"internal" \| "event"` | Yes | Execution mode |
| `enabled` | `boolean` | No | Whether it's enabled; defaults to `true` |
| `notify` | `boolean` | No | Whether to send a browser notification when triggered |
| `prompt` | `string` | No | The prompt for internal mode |
| `modelId` | `string` | No | The model ID used for internal mode |
| `skills` | `string[]` | No | The list of Skills loaded for internal mode |
| `maxIterations` | `number` | No | The maximum tool-call rounds for internal mode; defaults to `10` |

**Return value, AgentTask:**

| Field | Type | Description |
|------|------|------|
| `id` | `string` | Task ID |
| `name` | `string` | Task name |
| `crontab` | `string` | Cron expression |
| `mode` | `string` | Execution mode |
| `enabled` | `boolean` | Whether it's enabled |
| `notify` | `boolean` | Whether notifications are sent |
| `nextruntime` | `number` | Next execution timestamp |
| `lastruntime` | `number` | Last execution timestamp |
| `lastRunStatus` | `"success" \| "error"` | Status of the last execution |
| `lastRunError` | `string` | Error message from the last execution |
| `createtime` | `number` | Creation timestamp |

**Cron expression examples:**

| Expression | Description |
|--------|------|
| `* * * * *` | Every minute |
| `0 9 * * *` | Every day at 09:00 |
| `0 */2 * * *` | Every 2 hours |
| `30 8 * * 1-5` | Weekdays at 08:30 |
| `0 0 1 * *` | The 1st of every month at 00:00 |

## list — List All Tasks

```javascript
const tasks = await CAT.agent.task.list();
```

Returns every task created by the current script.

## get — Get Task Details

```javascript
const task = await CAT.agent.task.get(taskId);
```

Returns `undefined` if the task doesn't exist.

## update — Update a Task

```javascript
const task = await CAT.agent.task.update(taskId, partial);
```

**Updatable fields:**

```javascript
await CAT.agent.task.update(task.id, {
  name: "New name",
  crontab: "0 10 * * *",
  enabled: false,
  prompt: "New prompt",
  notify: true
});
```

`nextruntime` is automatically recalculated after an update.

## remove — Delete a Task

```javascript
const success = await CAT.agent.task.remove(taskId);
```

## runNow — Run Immediately

```javascript
await CAT.agent.task.runNow(taskId);
```

Triggers one execution of the task right away, without waiting for the cron schedule (non-blocking, runs in the background).

## addListener — Listen for Task Triggers

```javascript
const listenerId = await CAT.agent.task.addListener(taskId, callback);
```

Only used for tasks in **event mode**. Runs the callback when the cron fires.

**Callback parameter, AgentTaskTrigger:**

| Field | Type | Description |
|------|------|------|
| `taskId` | `string` | Task ID |
| `name` | `string` | Task name |
| `crontab` | `string` | Cron expression |
| `triggeredAt` | `number` | Trigger timestamp |

## removeListener — Remove a Listener

```javascript
await CAT.agent.task.removeListener(listenerId);
```

## Full Examples

### Internal Mode — Automatic AI Execution

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

### Event Mode — Script Handles It Itself

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
