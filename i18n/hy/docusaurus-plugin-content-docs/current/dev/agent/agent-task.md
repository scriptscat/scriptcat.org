---
title: Պլանավորված առաջադրանքների API
---

`@grant CAT.agent.task`

Պլանավորված առաջադրանքների API-ն թույլ է տալիս սկրիպտին ստեղծել Cron արտահայտության վրա հիմնված պլանավորված առաջադրանքներ՝ երկու գործարկման ռեժիմով:

## Գործարկման ռեժիմներ

### Ներքին ռեժիմ

Կառավարվում է ավտոմատ կերպով Agent համակարգի կողմից՝
- Ավտոմատ կերպով ստեղծում կամ վերսկսում է զրույց, երբ Cron ժամանակացույցը գործարկվում է
- Ուղարկում է կարգավորված `prompt`-ը LLM-ին
- Կարող է նշվել մոդել և Skills
- Գործարկման պատմությունը և token օգտագործումը գրանցվում են ավտոմատ կերպով

### Իրադարձությունների ռեժիմ

Կառավարվում է հենց սկրիպտի կողմից՝
- Իրադարձության ծանուցում է ուղարկվում սկրիպտին, երբ Cron ժամանակացույցը գործարկվում է
- Սկրիպտը լսում է իրադարձությունը `addListener`-ի միջոցով
- Մշակման տրամաբանությունը լիովին կաստոմ է

## create — առաջադրանքի ստեղծում

```javascript
const task = await CAT.agent.task.create(options);
```

**Պարամետրեր (`AgentTaskCreateOptions`):**

| Պարամետր | Տիպ | Պարտադիր | Նկարագրություն |
|------|------|------|------|
| `name` | `string` | Այո | Առաջադրանքի անուն |
| `crontab` | `string` | Այո | Ստանդարտ Cron արտահայտություն (5 դաշտ. րոպե ժամ օր ամիս շաբաթվա օր) |
| `mode` | `"internal" \| "event"` | Այո | Գործարկման ռեժիմ |
| `enabled` | `boolean` | Ոչ | Արդյոք միացված է, լռելյայն՝ `true` |
| `notify` | `boolean` | Ոչ | Արդյոք զննարկչի ծանուցում ուղարկել գործարկման ժամանակ |
| `prompt` | `string` | Ոչ | Պրոմպտ ներքին ռեժիմի համար |
| `modelId` | `string` | Ոչ | Ներքին ռեժիմում օգտագործվող մոդելի ID |
| `skills` | `string[]` | Ոչ | Ներքին ռեժիմում բեռնվող Skills |
| `maxIterations` | `number` | Ոչ | Ներքին ռեժիմի գործիք-կանչերի առավելագույն փուլեր, լռելյայն՝ `10` |

**Վերադարձնում է `AgentTask`՝**

| Դաշտ | Տիպ | Նկարագրություն |
|------|------|------|
| `id` | `string` | Առաջադրանքի ID |
| `name` | `string` | Առաջադրանքի անուն |
| `crontab` | `string` | Cron արտահայտություն |
| `mode` | `string` | Գործարկման ռեժիմ |
| `enabled` | `boolean` | Արդյոք միացված է |
| `notify` | `boolean` | Արդյոք ծանուցումներ են ուղարկվում |
| `nextruntime` | `number` | Հաջորդ գործարկման ժամանակի դրոշմ |
| `lastruntime` | `number` | Վերջին գործարկման ժամանակի դրոշմ |
| `conversationId` | `string` | Կապակցված զրույցի ID ներքին ռեժիմում (կամընտիր) |
| `lastRunStatus` | `"success" \| "error"` | Վերջին գործարկման կարգավիճակ |
| `lastRunError` | `string` | Վերջին գործարկման սխալի հաղորդագրություն |
| `createtime` | `number` | Ստեղծման ժամանակի դրոշմ |

**Cron արտահայտության օրինակներ՝**

| Արտահայտություն | Նկարագրություն |
|--------|------|
| `* * * * *` | Ամեն րոպե |
| `0 9 * * *` | Ամեն օր 09:00-ին |
| `0 */2 * * *` | Ամեն 2 ժամը մեկ |
| `30 8 * * 1-5` | Աշխատանքային օրերին 08:30-ին |
| `0 0 1 * *` | Ամեն ամսվա 1-ին 00:00-ին |

## list — ցուցակագրել բոլոր առաջադրանքները

```javascript
const tasks = await CAT.agent.task.list();
```

Վերադարձնում է ընթացիկ սկրիպտի կողմից ստեղծված բոլոր առաջադրանքները:

## get — ստանալ առաջադրանքի մանրամասներ

```javascript
const task = await CAT.agent.task.get(taskId);
```

Վերադարձնում է `undefined`, եթե առաջադրանքը գոյություն չունի:

## update — թարմացնել առաջադրանքը

```javascript
const task = await CAT.agent.task.update(taskId, partial);
```

**Թարմացվող դաշտեր՝**

```javascript
await CAT.agent.task.update(task.id, {
  name: "New name",
  crontab: "0 10 * * *",
  enabled: false,
  prompt: "New prompt",
  notify: true
});
```

`nextruntime`-ը ավտոմատ կերպով վերահաշվարկվում է թարմացումից հետո:

## remove — առաջադրանքի ջնջում

```javascript
const success = await CAT.agent.task.remove(taskId);
```

## runNow — անմիջապես գործարկել

```javascript
await CAT.agent.task.runNow(taskId);
```

Հրահրում է առաջադրանքի գործարկումը մեկ անգամ անմիջապես՝ առանց դրա Cron ժամանակացույցին սպասելու (ոչ արգելափակող, գործարկվում է ֆոնում):

## addListener — լսել առաջադրանքի գործարկումները

```javascript
const listenerId = await CAT.agent.task.addListener(taskId, callback);
```

Օգտագործվում է միայն **իրադարձությունների ռեժիմի** առաջադրանքների համար: Կոլբեքը գործարկվում է, երբ Cron ժամանակացույցը գործարկվում է:

**Կոլբեքի պարամետր (`AgentTaskTrigger`):**

| Դաշտ | Տիպ | Նկարագրություն |
|------|------|------|
| `taskId` | `string` | Առաջադրանքի ID |
| `name` | `string` | Առաջադրանքի անուն |
| `crontab` | `string` | Cron արտահայտություն |
| `triggeredAt` | `number` | Գործարկման ժամանակի դրոշմ |

## removeListener — լսողի հեռացում

```javascript
await CAT.agent.task.removeListener(listenerId);
```

## Ամբողջական օրինակներ

### Ներքին ռեժիմ — AI-ն գործարկում է այն ավտոմատ կերպով

```javascript
// ==UserScript==
// @name        Scheduled news digest
// @match       *://*/*
// @grant       CAT.agent.task
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Daily news digest",
  crontab: "0 9 * * *",       // Every day at 9
  mode: "internal",
  prompt: "Please search today's tech news and save a short summary to OPFS",
  skills: ["web-search"],
  maxIterations: 10,
  notify: true
});

console.log("Task created, next run:", new Date(task.nextruntime));
```

### Իրադարձությունների ռեժիմ — սկրիպտը մշակում է այն ինքը

```javascript
// ==UserScript==
// @name        Scheduled data collection
// @match       *://*/*
// @grant       CAT.agent.task
// @grant       CAT.agent.dom
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Stock data collection",
  crontab: "*/30 9-15 * * 1-5", // Every 30 minutes, 9-15 on weekdays
  mode: "event",
  enabled: true,
  notify: false
});

await CAT.agent.task.addListener(task.id, async (trigger) => {
  console.log(`Task triggered: ${trigger.name} at ${new Date(trigger.triggeredAt)}`);

  // Custom collection logic
  await CAT.agent.dom.navigate("https://finance.example.com/stock");
  const content = await CAT.agent.dom.readPage({ selector: ".stock-table" });

  // Process the data...
  console.log("Collection complete");
});
```
