---
title: API کارهای زمان‌بندی‌شده
---

`@grant CAT.agent.task`

API کارهای زمان‌بندی‌شده به یک اسکریپت اجازه می‌دهد کارهای زمان‌بندی‌شده مبتنی بر عبارت Cron ایجاد کند، با دو حالت اجرا.

## حالت‌های اجرا

### حالت داخلی

به طور خودکار توسط سیستم Agent مدیریت می‌شود:
- به طور خودکار یک گفتگو ایجاد یا از سر گرفته می‌شود وقتی برنامه Cron فعال می‌شود
- `prompt` پیکربندی‌شده به LLM ارسال می‌شود
- می‌توان یک مدل و Skillها مشخص کرد
- تاریخچه اجرا و مصرف توکن به طور خودکار ثبت می‌شود

### حالت رویداد

توسط خود اسکریپت مدیریت می‌شود:
- یک اعلان رویداد هنگام فعال شدن برنامه Cron به اسکریپت ارسال می‌شود
- اسکریپت از طریق `addListener` به رویداد گوش می‌دهد
- منطق مدیریت کاملاً سفارشی است

## create — ایجاد یک کار

```javascript
const task = await CAT.agent.task.create(options);
```

**پارامترها (`AgentTaskCreateOptions`):**

| پارامتر | نوع | الزامی | توضیحات |
|------|------|------|------|
| `name` | `string` | بله | نام کار |
| `crontab` | `string` | بله | عبارت Cron استاندارد (۵ فیلد: دقیقه ساعت روز ماه روز هفته) |
| `mode` | `"internal" \| "event"` | بله | حالت اجرا |
| `enabled` | `boolean` | خیر | آیا فعال است، پیش‌فرض `true` |
| `notify` | `boolean` | خیر | آیا هنگام فعال شدن اعلان مرورگر ارسال شود |
| `prompt` | `string` | خیر | Prompt برای حالت داخلی |
| `modelId` | `string` | خیر | شناسه مدل برای استفاده در حالت داخلی |
| `skills` | `string[]` | خیر | Skillها برای بارگذاری در حالت داخلی |
| `maxIterations` | `number` | خیر | حداکثر دور فراخوانی ابزار برای حالت داخلی، پیش‌فرض `10` |

**بازگشت `AgentTask`:**

| فیلد | نوع | توضیحات |
|------|------|------|
| `id` | `string` | شناسه کار |
| `name` | `string` | نام کار |
| `crontab` | `string` | عبارت Cron |
| `mode` | `string` | حالت اجرا |
| `enabled` | `boolean` | آیا فعال است |
| `notify` | `boolean` | آیا اعلان‌ها ارسال می‌شوند |
| `nextruntime` | `number` | زمان‌سنج اجرای بعدی |
| `lastruntime` | `number` | زمان‌سنج آخرین اجرا |
| `conversationId` | `string` | شناسه گفتگوی مرتبط در حالت داخلی (اختیاری) |
| `lastRunStatus` | `"success" \| "error"` | وضعیت آخرین اجرا |
| `lastRunError` | `string` | پیام خطای آخرین اجرا |
| `createtime` | `number` | زمان‌سنج ایجاد |

**مثال‌های عبارت Cron:**

| عبارت | توضیحات |
|--------|------|
| `* * * * *` | هر دقیقه |
| `0 9 * * *` | هر روز ساعت 09:00 |
| `0 */2 * * *` | هر ۲ ساعت |
| `30 8 * * 1-5` | روزهای هفته ساعت 08:30 |
| `0 0 1 * *` | 00:00 روز اول هر ماه |

## list — فهرست همه کارها

```javascript
const tasks = await CAT.agent.task.list();
```

همه کارهای ایجادشده توسط اسکریپت فعلی را برمی‌گرداند.

## get — دریافت جزئیات کار

```javascript
const task = await CAT.agent.task.get(taskId);
```

اگر کار وجود نداشته باشد `undefined` برمی‌گرداند.

## update — به‌روزرسانی یک کار

```javascript
const task = await CAT.agent.task.update(taskId, partial);
```

**فیلدهای قابل به‌روزرسانی:**

```javascript
await CAT.agent.task.update(task.id, {
  name: "نام جدید",
  crontab: "0 10 * * *",
  enabled: false,
  prompt: "Prompt جدید",
  notify: true
});
```

`nextruntime` پس از به‌روزرسانی به طور خودکار دوباره محاسبه می‌شود.

## remove — حذف یک کار

```javascript
const success = await CAT.agent.task.remove(taskId);
```

## runNow — اجرای فوری

```javascript
await CAT.agent.task.runNow(taskId);
```

کار را بلافاصله یک بار اجرا می‌کند، بدون انتظار برای برنامه Cron آن (غیرمسدودکننده، در پس‌زمینه اجرا می‌شود).

## addListener — گوش دادن به فعال‌سازی‌های کار

```javascript
const listenerId = await CAT.agent.task.addListener(taskId, callback);
```

فقط برای کارهای **حالت رویداد** استفاده می‌شود. هنگام فعال شدن برنامه Cron، بازخوانی اجرا می‌شود.

**پارامتر بازخوانی (`AgentTaskTrigger`):**

| فیلد | نوع | توضیحات |
|------|------|------|
| `taskId` | `string` | شناسه کار |
| `name` | `string` | نام کار |
| `crontab` | `string` | عبارت Cron |
| `triggeredAt` | `number` | زمان‌سنج فعال‌سازی |

## removeListener — حذف یک شنونده

```javascript
await CAT.agent.task.removeListener(listenerId);
```

## مثال‌های کامل

### حالت داخلی — هوش مصنوعی آن را به طور خودکار اجرا می‌کند

```javascript
// ==UserScript==
// @name        خلاصه اخبار زمان‌بندی‌شده
// @match       *://*/*
// @grant       CAT.agent.task
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "خلاصه اخبار روزانه",
  crontab: "0 9 * * *",       // هر روز ساعت 9
  mode: "internal",
  prompt: "لطفاً اخبار فناوری امروز را جستجو کنید و یک خلاصه کوتاه در OPFS ذخیره کنید",
  skills: ["web-search"],
  maxIterations: 10,
  notify: true
});

console.log("کار ایجاد شد، اجرای بعدی:", new Date(task.nextruntime));
```

### حالت رویداد — اسکریپت خودش آن را مدیریت می‌کند

```javascript
// ==UserScript==
// @name        جمع‌آوری داده زمان‌بندی‌شده
// @match       *://*/*
// @grant       CAT.agent.task
// @grant       CAT.agent.dom
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "جمع‌آوری داده سهام",
  crontab: "*/30 9-15 * * 1-5", // هر ۳۰ دقیقه، 9-15 در روزهای هفته
  mode: "event",
  enabled: true,
  notify: false
});

await CAT.agent.task.addListener(task.id, async (trigger) => {
  console.log(`کار فعال شد: ${trigger.name} در ${new Date(trigger.triggeredAt)}`);

  // منطق جمع‌آوری سفارشی
  await CAT.agent.dom.navigate("https://finance.example.com/stock");
  const content = await CAT.agent.dom.readPage({ selector: ".stock-table" });

  // پردازش داده‌ها...
  console.log("جمع‌آوری کامل شد");
});
```
