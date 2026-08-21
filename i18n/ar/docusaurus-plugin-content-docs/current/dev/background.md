---
title: سكرپت الخلفية
---

سكرپتات الخلفية مناسبة للسكرپتات التي تحتاج إلى الاستمرار في التشغيل بشكل دائم. سكرپتات الخلفية هي نوع سكرپت خاص بـ ScriptCat؛ تعمل في بيئة معزولة (sandbox) ولا يمكنها الوصول إلى الـ DOM. يمكن تطويرها باستخدام نفس واجهات GM APIs الخاصة بـ Tampermonkey، ويتم توضيح ملاحظات التوافق في الوثائق.

## سكرپت الخلفية (`@background`) {#background-script-background}

يتم التصريح عن سكرپت الخلفية بسمة `@background`. يتيح للسكرپت الاستمرار في العمل في الخلفية بعد تفعيل السكرپت أو بدء تشغيل المتصفح.

## السكرپت المجدول (`@crontab`) {#scheduled-script-crontab}

> السكرپت المجدول هو نوع من سكرپتات الخلفية مناسب للمهام التي تحتاج إلى **التشغيل المتكرر على دورة زمنية**.

يتم التصريح عن السكرپت المجدول بسمة `@crontab`. يدعم الجدولة على مستوى الدقائق والثواني، ويوفر الصيغة الموسعة الخاصة بـ ScriptCat `once` / `once(...)` لتجنب التشغيل أكثر من مرة ضمن نفس الدورة الزمنية.

⚠️ ملاحظات:

* في السكرپت الواحد، **يؤثر `@crontab` الأول فقط**
* يُنصح ألا يتجاوز **وقت التنفيذ الفردي + وقت إعادة المحاولة** للسكرپت فترة cron، وإلا فقد تتداخل عمليات التنفيذ

## ملاحظات حول تعبيرات Cron

يعتمد تنفيذ cron في ScriptCat على [**node-cron**](https://github.com/kelektiv/node-cron/)، مع امتداد صغير فوق بناء cron القياسي.

### صيغة التعبير

#### الصيغة القياسية المكونة من 5 حقول (موصى بها)

```text
minute hour day month weekday
```

#### الصيغة الموسعة المكونة من 6 حقول (غير موصى بها)

```text
second minute hour day month weekday
```

> ⚠️ الصيغة المكونة من 6 حقول غير موصى بها
> لا يمكن لبيئات المتصفح ضمان دقة مستوى الثواني، وتزيد من الحمل على الأداء — فقد يتأخر جدولة صفحة الخلفية.

### الصيغ المتاحة لكل حقل

| الصيغة | المعنى | مثال |
| ------- | -------------------- | ------------------------ |
| `*` | أي قيمة | `*` (كل دقيقة/ساعة) |
| رقم | قيمة محددة | `5` (الدقيقة الخامسة) |
| `a,b,c` | قيم منفصلة متعددة | `1,15,30` |
| `a-b` | نطاق متصل | `10-23` |
| `*/n` | كل n وحدة | `*/5` |
| `a-b/n` | نطاق بخطوة | `10-50/10` |

#### قواعد أيام الأسبوع

* `1–6`: من الاثنين إلى السبت
* `0` أو `7`: الأحد

## صيغة الامتداد `once`

### ماذا يعني `once`

استخدام `once` في تعبير cron يعني:

> **ضمن الدورة الزمنية الحالية، يُسمح بتنفيذ ناجح واحد فقط**

حتى لو كانت نقاط زمنية لاحقة ضمن نفس الدورة لا تزال تطابق قاعدة cron، فلن يتم تشغيل السكرپت مرة أخرى.

### `once` مقابل `once(...)`

| الصيغة | قيمة cron الأساسية لهذا الحقل | الوصف |
| ------------- | ------------------------------------- | ------------------------------------------------------------------ |
| `once` | `*` (أي قيمة) | يعمل عند أول تطابق ضمن الدورة، دون وقت محدد |
| `once(expr)` | `expr` | يعمل فقط في الأوقات المطابقة لـ `expr` ضمن الدورة، ومرة واحدة فقط |

تتيح لك `once(expr)` تحديد نقاط زمنية مرشحة بدقة مع فرض "التشغيل مرة واحدة فقط لكل دورة". جميع صيغ cron القياسية (الأرقام والنطاقات والخطوات والقوائم) مدعومة داخل الأقواس.

مثال للمقارنة:

```text
* once * * *          // any minute of every hour; runs on the first match, no further runs that hour
* once(9-17) * * *    // between 9:00 and 17:59 every day, runs once per hour
0,30 once * * *       // whichever of minute 0 or 30 is matched first each hour runs; no further runs that hour
```

### موضع `once` = الدورة الزمنية التي يحدها

أينما وُضع `once` / `once(...)`، فهذا يعني "التشغيل مرة واحدة فقط ضمن تلك الدقة الزمنية".

| موضع `once` | السلوك |
| ---------------- | ------------------------------- |
| حقل الدقيقة | يعمل مرة واحدة فقط كل دقيقة |
| حقل الساعة | يعمل مرة واحدة فقط كل ساعة |
| حقل اليوم | يعمل مرة واحدة فقط كل يوم |
| حقل الشهر | يعمل مرة واحدة فقط كل شهر |
| حقل يوم الأسبوع | يعمل مرة واحدة فقط كل أسبوع |

أمثلة:

```text
* once * * *       // runs only once per hour
* * once * *       // runs only once per day
* 9-18 once * *    // runs only once between 9:00 and 18:59 each day
```

### دمج `once` مع النطاقات / القوائم / الخطوات

يمكن دمج `once` / `once(...)` مع أي صيغة cron، لكن هناك قاعدة واحدة فقط:

> **ضمن نفس الدورة، بمجرد نجاح تشغيل، يتم تجاهل جميع النقاط الزمنية المطابقة اللاحقة**

#### مثال 1: نطاق

```text
* 10 once * *
```

المعنى:

* كل يوم، الأوقات من 10:00 إلى 10:59 هي أوقات مرشحة
* بعد أول تطابق في اليوم
* لن تعمل الأوقات من 10:05 إلى 10:59 بعد ذلك

#### مثال 2: قائمة

```text
* 1,3,5 once * *
```

المعنى:

* كل يوم، الساعات 1:00 و3:00 و5:00 هي أوقات مرشحة
* إذا كانت 1:00 قد عملت بالفعل
* فسيتم تخطي 3:00 و5:00

#### مثال 3: خطوة

```text
* */4 once * *
```

المعنى:

* كل يوم، الأوقات 0:00 و4:00 و8:00 و12:00 و16:00 و20:00 هي أوقات مرشحة
* بعد أول تشغيل في اليوم
* لن تعمل أي نقاط زمنية أخرى

#### مثال 4: `once(...)` لتحديد نقاط زمنية مرشحة

```text
* once(9-17) * * *
```

المعنى:

* كل يوم، الساعات من 9:00 إلى 17:00 هي ساعات مرشحة
* تبدأ الدورة من جديد كل ساعة؛ ضمن الساعة، يوقف أول تطابق عمليات التشغيل اللاحقة
* النتيجة: يعمل مرة واحدة كل ساعة بين 9:00 و17:00 كل يوم، أي 9 مرات إجمالاً

```text
* 9-18 once * *
```

المعنى:

* كل يوم، الأوقات من 9:00 إلى 18:59 هي أوقات مرشحة
* `once` في حقل اليوم يقفل الدورة على مرة واحدة يومياً
* بعد أول تطابق في اليوم، لا يعمل شيء آخر قبل 18:59

## أمثلة `@crontab`

### شائعة

```js
//@crontab * * * * *        // runs once per minute
//@crontab * * * * * *      // runs once per second (not recommended)
//@crontab 0 */6 * * *      // runs on the hour every 6 hours
//@crontab 15 */6 * * *     // runs at minute 15 every 6 hours
//@crontab * once * * *     // runs at most once per hour
//@crontab * * once * *     // runs at most once per day
//@crontab * 10 once * *    // runs only once within the 10:00 hour each day (e.g. if it ran at 10:04, it won't run again from 10:05-10:59)
//@crontab * */4 once * *   // checks at most once every 4 hours each day (e.g. if it ran at 4:00, it won't run again at 8, 12, 16, 20, 24, etc.)
```

### متقدم

```js
//@crontab * 1,3,5 once * *       // runs once at 1:00, 3:00, or 5:00 each day (e.g. if it ran at 1:00, it won't run again at 3:00 or 5:00)
//@crontab * 10-23 once * *       // runs once between 10:00 and 23:59 each day (e.g. if it ran at 10:04, it won't run again from 10:05-23:59)
//@crontab * once 13 * *          // runs once per hour on the 13th of every month
//@crontab * once(9-17) * * *     // runs once per hour between 9:00 and 17:00 each day
//@crontab 0,30 once * * *        // whichever of minute 0 or 30 is matched first each hour runs; no repeat that hour
//@crontab * 9-18 once * *        // runs only once between 9:00 and 18:00 each day
```

## توصيات الاستخدام

### الاستخدامات المناسبة لـ `once`

* المهام التي **تحتاج فقط إلى التشغيل مرة واحدة** في اليوم/الساعة
* سكرپتات فحص الحالة والمزامنة والتقارير
* تجنب المشاكل التالية:

  * عدم فتح المتصفح لفترة طويلة
  * تأخيرات جدولة صفحة الخلفية
  * التنفيذ المكرر الناتج عن إعادة تشغيل المتصفح

### غير مناسب لـ `once`

* المهام التي يجب أن تعمل في لحظة محددة بدقة
* السكرپتات التي قد يتجاوز وقت تنفيذها فترة cron بشكل كبير
* المهام ذات متطلبات الاتساق الصارمة على عدد مرات التنفيذ

## اختبار تعبيرات Cron

عند اختبار تعبير cron، يرجى **استبدال `once` / `once(...)` مؤقتاً بقيمتهما الأساسية**:

* `once` ← `*`
* `once(expr)` ← `expr`

لاحظ أن أدوات الاختبار قد لا تدعم الصيغة الموسعة المكونة من 6 حقول.

الأدوات الموصى بها:

* [crontab.guru](https://crontab.guru/)
* [tool.lu cron calculator](https://tool.lu/crontab/)

في صفحة قائمة السكرپتات، مرر مؤشر الماوس فوق **عمود حالة التشغيل** لرؤية **وقت التنفيذ المجدول التالي** للسكرپت.

## السجلات

في صفحة قائمة السكرپتات، يؤدي تمرير مؤشر الماوس فوق `عمود حالة التشغيل` إلى إظهار تلميح بحالة تشغيل السكرپت؛
والنقر عليه يفتح محتوى السجل المطبوع عبر `GM_log`.

![](@site/docs/dev/background.assets/image-20210621214143661.png)

![](@site/docs/dev/background.assets/image-20210621214124685.png)

## تصحيح أخطاء السكرپت

يمكن تصحيح أخطاء سكرپتات الخلفية مباشرة من صفحة محرر السكرپت، لكن هذا له القيود التالية:

* لا تتم مزامنة `value` بشكل صحيح
* لا تعمل قوائم `registerMenu` بشكل صحيح

![](@site/docs/dev/background.assets/image-20210903141601057.png)

لتصحيح بيئة التشغيل الفعلية، فعّل **وضع المطور** في إعدادات الإضافة، ثم افتح صفحة `background.html` الخاصة بالإضافة للتصحيح.

يمكن أيضاً عرض الأخطاء التي تحدث أثناء التشغيل في سجل التشغيل.

![image-20210903144155450](@site/docs/dev/background.assets/image-20210903144155450.png)

## Promise

النمط التالي موصى به بشدة، لأنه يسمح أيضاً لمدير السكرپتات بمراقبة تنفيذ السكرپت.
إذا قام السكرپت بأي عملية غير متزامنة، فيجب عليه **إرجاع `Promise`**.

```ts
// ==UserScript==
// @name         Background Script
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @background
// ==/UserScript==
return new Promise((resolve, reject) => {
  if (Math.round((Math.random() * 10) % 2)) {
    resolve("ok"); // succeeded
  } else {
    reject("error"); // failed, with the error reason
  }
});
```

```js
// ==UserScript==
// @name         Scheduled script that runs once a day
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @crontab      * * once * *
// ==/UserScript==
return new Promise((resolve, reject) => {
  if (Math.round((Math.random() * 10) % 2)) {
    resolve("ok"); // succeeded
  } else {
    reject("error"); // failed, with the error reason
  }
});
```

```js
// ==UserScript==
// @name         Call an API
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @crontab      * * once * *
// ==/UserScript==
return new Promise((resolve, reject) => {
  GM_xmlhttpRequest({
    url: "https://bbs.tampermonkey.net.cn/",
    onload() {
      resolve("ok"); // succeeded
    },
    onerror() {
      reject("error"); // failed, with the error reason
    },
  });
});
```

يرجى التأكد من استدعاء `resolve` / `reject` فقط بعد انتهاء منطق السكرپت فعلياً.
بمجرد استدعائه، يعتبر المدير أن تنفيذ السكرپت قد اكتمل، ولن تسري أي عمليات GM لاحقة.

## إعادة المحاولة عند الخطأ

تدعم سكرپتات الخلفية في ScriptCat إعادة المحاولة عند الخطأ.
عند فشل السكرپت، يمكنه استدعاء `reject` مع `CATRetryError` لتفعيل إعادة المحاولة.

* الحد الأدنى لفاصل إعادة المحاولة: 5 ثوانٍ
* تجنب التعارض مع وقت تنفيذ السكرپت نفسه، وإلا فقد يحدث تنفيذ مكرر

```js
// ==UserScript==
// @name         Retry example
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @crontab      * * once * *
// @grant        GM_notification
// ==/UserScript==

return new Promise((resolve, reject) => {
  GM_notification({
    title: "retry",
    text: "Retrying in 10 seconds",
  });
  reject(new CATRetryError("xxx error", 10));
});
```
