---
title: واجهة برمجة المهام المجدولة
---

`@grant CAT.agent.task`

تتيح واجهة برمجة المهام المجدولة للسكرپت إنشاء مهام مجدولة تعتمد على تعبيرات Cron، مع وضعي تنفيذ.

## أوضاع التنفيذ

### الوضع الداخلي

يُدار تلقائياً بواسطة نظام Agent:
- ينشئ أو يستأنف حواراً تلقائياً عندما يحدث مشغل Cron
- يرسل `prompt` المكوّن إلى LLM
- يمكن تحديد نموذج وSkills
- يتم تسجيل سجل التنفيذ واستهلاك الرموز تلقائياً

### وضع الحدث

يُدار بواسطة السكرپت نفسه:
- يتم إرسال إشعار حدث إلى السكرپت عندما يحدث مشغل Cron
- يستمع السكرپت للحدث عبر `addListener`
- منطق المعالجة مخصص بالكامل

## create — إنشاء مهمة

```javascript
const task = await CAT.agent.task.create(options);
```

**المعلمات (`AgentTaskCreateOptions`):**

| المعامل | النوع | إلزامي | الوصف |
|------|------|------|------|
| `name` | `string` | نعم | اسم المهمة |
| `crontab` | `string` | نعم | تعبير Cron قياسي (5 حقول: دقيقة ساعة يوم شهر يوم الأسبوع) |
| `mode` | `"internal" \| "event"` | نعم | وضع التنفيذ |
| `enabled` | `boolean` | لا | يحدد ما إذا كانت مفعلة، الافتراضي: `true` |
| `notify` | `boolean` | لا | يحدد ما إذا كان سيتم إرسال إشعار متصفح عند التفعيل |
| `prompt` | `string` | لا | المطالبة للوضع الداخلي |
| `modelId` | `string` | لا | معرف النموذج المستخدم في الوضع الداخلي |
| `skills` | `string[]` | لا | Skills المراد تحميلها في الوضع الداخلي |
| `maxIterations` | `number` | لا | الحد الأقصى لجولات استدعاء الأدوات للوضع الداخلي، الافتراضي: `10` |

**يرجع `AgentTask`:**

| الحقل | النوع | الوصف |
|------|------|------|
| `id` | `string` | معرف المهمة |
| `name` | `string` | اسم المهمة |
| `crontab` | `string` | تعبير Cron |
| `mode` | `string` | وضع التنفيذ |
| `enabled` | `boolean` | يحدد ما إذا كانت مفعلة |
| `notify` | `boolean` | يحدد ما إذا كانت الإشعارات مرسلة |
| `nextruntime` | `number` | طابع وقت التشغيل التالي |
| `lastruntime` | `number` | طابع وقت آخر تشغيل |
| `conversationId` | `string` | معرف الحوار المرتبط في الوضع الداخلي (اختياري) |
| `lastRunStatus` | `"success" \| "error"` | حالة آخر تشغيل |
| `lastRunError` | `string` | رسالة الخطأ من آخر تشغيل |
| `createtime` | `number` | طابع وقت الإنشاء |

**أمثلة على تعبيرات Cron:**

| التعبير | الوصف |
|--------|------|
| `* * * * *` | كل دقيقة |
| `0 9 * * *` | كل يوم في الساعة 09:00 |
| `0 */2 * * *` | كل ساعتين |
| `30 8 * * 1-5` | أيام العمل في الساعة 08:30 |
| `0 0 1 * *` | اليوم الأول من كل شهر في الساعة 00:00 |

## list — سرد جميع المهام

```javascript
const tasks = await CAT.agent.task.list();
```

يرجع جميع المهام التي أنشأها السكرپت الحالي.

## get — الحصول على تفاصيل مهمة

```javascript
const task = await CAT.agent.task.get(taskId);
```

يرجع `undefined` إذا كانت المهمة غير موجودة.

## update — تحديث مهمة

```javascript
const task = await CAT.agent.task.update(taskId, partial);
```

**الحقول القابلة للتحديث:**

```javascript
await CAT.agent.task.update(task.id, {
  name: "New name",
  crontab: "0 10 * * *",
  enabled: false,
  prompt: "New prompt",
  notify: true
});
```

يُعاد حساب `nextruntime` تلقائياً بعد التحديث.

## remove — حذف مهمة

```javascript
const success = await CAT.agent.task.remove(taskId);
```

## runNow — تشغيل فوري

```javascript
await CAT.agent.task.runNow(taskId);
```

يؤدي إلى تشغيل المهمة مرة واحدة فوراً، دون انتظار جدول Cron الخاص بها (غير معيق، يعمل في الخلفية).

## addListener — الاستماع لمشغلات المهمة

```javascript
const listenerId = await CAT.agent.task.addListener(taskId, callback);
```

يُستخدم فقط لمهام **وضع الحدث**. يعمل الاستدعاء عند حدوث مشغل Cron.

**معامل الاستدعاء (`AgentTaskTrigger`):**

| الحقل | النوع | الوصف |
|------|------|------|
| `taskId` | `string` | معرف المهمة |
| `name` | `string` | اسم المهمة |
| `crontab` | `string` | تعبير Cron |
| `triggeredAt` | `number` | طابع وقت التفعيل |

## removeListener — إزالة مستمع

```javascript
await CAT.agent.task.removeListener(listenerId);
```

## أمثلة كاملة

### الوضع الداخلي — الذكاء الاصطناعي يديره تلقائياً

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

### وضع الحدث — السكرپت يديره بنفسه

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
