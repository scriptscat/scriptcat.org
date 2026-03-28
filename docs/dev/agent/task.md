---
id: agent-task
sidebar_position: 5
---

# 定时任务 API

`@grant CAT.agent.task`

定时任务 API 允许脚本创建基于 Cron 表达式的定时任务，支持两种执行模式。

## 执行模式

### Internal 模式

由 Agent 系统自动执行：
- 在 Cron 触发时自动创建或恢复对话
- 使用配置的 `prompt` 发送给 LLM
- 可指定模型和 Skill
- 执行历史和 Token 用量自动记录

### Event 模式

由脚本自行处理：
- Cron 触发时发送事件通知到脚本
- 脚本通过 `addListener` 监听事件
- 完全自定义处理逻辑

## create — 创建任务

```javascript
const task = await CAT.agent.task.create(options);
```

**参数 AgentTaskCreateOptions：**

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `name` | `string` | 是 | 任务名称 |
| `crontab` | `string` | 是 | 标准 Cron 表达式（5 字段：分 时 日 月 周） |
| `mode` | `"internal" \| "event"` | 是 | 执行模式 |
| `enabled` | `boolean` | 否 | 是否启用，默认 `true` |
| `notify` | `boolean` | 否 | 触发时是否发送浏览器通知 |
| `prompt` | `string` | 否 | internal 模式的提示词 |
| `modelId` | `string` | 否 | internal 模式使用的模型 ID |
| `skills` | `string[]` | 否 | internal 模式加载的 Skill 列表 |
| `maxIterations` | `number` | 否 | internal 模式最大工具调用轮次，默认 `10` |

**返回值 AgentTask：**

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | `string` | 任务 ID |
| `name` | `string` | 任务名称 |
| `crontab` | `string` | Cron 表达式 |
| `mode` | `string` | 执行模式 |
| `enabled` | `boolean` | 是否启用 |
| `notify` | `boolean` | 是否通知 |
| `nextruntime` | `number` | 下次执行时间戳 |
| `lastruntime` | `number` | 上次执行时间戳 |
| `lastRunStatus` | `"success" \| "error"` | 上次执行状态 |
| `lastRunError` | `string` | 上次执行错误信息 |
| `createtime` | `number` | 创建时间戳 |

**Cron 表达式示例：**

| 表达式 | 说明 |
|--------|------|
| `* * * * *` | 每分钟 |
| `0 9 * * *` | 每天 09:00 |
| `0 */2 * * *` | 每 2 小时 |
| `30 8 * * 1-5` | 工作日 08:30 |
| `0 0 1 * *` | 每月 1 号 00:00 |

## list — 列出所有任务

```javascript
const tasks = await CAT.agent.task.list();
```

返回当前脚本创建的所有任务。

## get — 获取任务详情

```javascript
const task = await CAT.agent.task.get(taskId);
```

如果任务不存在返回 `undefined`。

## update — 更新任务

```javascript
const task = await CAT.agent.task.update(taskId, partial);
```

**可更新字段：**

```javascript
await CAT.agent.task.update(task.id, {
  name: "新名称",
  crontab: "0 10 * * *",
  enabled: false,
  prompt: "新的提示词",
  notify: true
});
```

更新后会自动重新计算 `nextruntime`。

## remove — 删除任务

```javascript
const success = await CAT.agent.task.remove(taskId);
```

## runNow — 立即执行

```javascript
await CAT.agent.task.runNow(taskId);
```

不等待 Cron 时间，立即触发一次任务执行（非阻塞，后台执行）。

## addListener — 监听任务触发

```javascript
const listenerId = await CAT.agent.task.addListener(taskId, callback);
```

仅用于 **event 模式** 任务。Cron 触发时执行回调。

**回调参数 AgentTaskTrigger：**

| 字段 | 类型 | 说明 |
|------|------|------|
| `taskId` | `string` | 任务 ID |
| `name` | `string` | 任务名称 |
| `crontab` | `string` | Cron 表达式 |
| `triggeredAt` | `number` | 触发时间戳 |

## removeListener — 移除监听

```javascript
await CAT.agent.task.removeListener(listenerId);
```

## 完整示例

### Internal 模式 — AI 自动执行

```javascript
// ==UserScript==
// @name        定时新闻摘要
// @match       *://*/*
// @grant       CAT.agent.task
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "每日新闻摘要",
  crontab: "0 9 * * *",       // 每天 9 点
  mode: "internal",
  prompt: "请搜索今天的科技新闻，生成一份简短摘要保存到 OPFS",
  skills: ["web-search"],
  maxIterations: 10,
  notify: true
});

console.log("任务已创建，下次执行:", new Date(task.nextruntime));
```

### Event 模式 — 脚本自行处理

```javascript
// ==UserScript==
// @name        定时数据采集
// @match       *://*/*
// @grant       CAT.agent.task
// @grant       CAT.agent.dom
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "股票数据采集",
  crontab: "*/30 9-15 * * 1-5", // 工作日 9-15 点每 30 分钟
  mode: "event",
  enabled: true,
  notify: false
});

await CAT.agent.task.addListener(task.id, async (trigger) => {
  console.log(`任务触发: ${trigger.name} at ${new Date(trigger.triggeredAt)}`);

  // 自定义采集逻辑
  await CAT.agent.dom.navigate("https://finance.example.com/stock");
  const content = await CAT.agent.dom.readPage({ selector: ".stock-table" });

  // 处理数据...
  console.log("采集完成");
});
```
