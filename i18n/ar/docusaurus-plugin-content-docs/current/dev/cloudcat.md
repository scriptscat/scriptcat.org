---
title: التنفيذ السحابي
---

> يتم توفير عدة طرق للتشغيل في السحابة؛ راجع [بيئات التشغيل](#running-environments) للتفاصيل. بالإضافة إلى ذلك، [CloudCat](https://github.com/scriptscat/cloudcat) هي خدمة لتشغيل سكرپتات الخلفية في السحابة — منصة FAAS لا تزال قيد التطوير.

⚠ يرجى ملاحظة ⚠، بمجرد الرفع إلى السحابة، يتغير معنى `once` في تعبير السكرپت المجدول: يتم استبدال الوقت قبل `once` بقيمته الدنيا عند التشغيل.

على سبيل المثال:

* `* * once * *` => `0 0 * * *`: يعمل مرة واحدة يومياً، يصبح التشغيل عند 00:00 كل يوم
* `* 1-23 once * *` => `0 1 * * *`: يعمل مرة واحدة بين 1:00 و23:00 يومياً، يصبح التشغيل عند 01:00 كل يوم
* `* 1,3,5 once * *` => `0 1 * * *`: يعمل مرة واحدة عند 1:00 أو 3:00 أو 5:00 يومياً، يصبح التشغيل عند 01:00 كل يوم
* `* */4 once * *` => `0 0 * * *`: يعمل مرة واحدة كل 4 ساعات يومياً، يصبح التشغيل عند 00:00 كل يوم
* `* 1-23/4 once * *` => `0 1 * * *`: يعمل مرة واحدة كل 4 ساعات بين 1:00 و23:00 يومياً، يصبح التشغيل عند 01:00 كل يوم
* `* 10 once * *` => `0 10 * * *`: يعمل مرة واحدة عند 10:00 يومياً، يصبح التشغيل عند الدقيقة 00 من الساعة 10 كل يوم
* `* * * once *` => `0 0 1 * *`: يعمل مرة واحدة شهرياً، يصبح التشغيل عند 00:00 في اليوم الأول من كل شهر

## قيم وصف CloudCat الإضافية

سكرپت مرجعي: [Bilibili Auto Check-in](https://scriptcat.org/script-show-page/48)

### cloudCat

يسمح التصريح عن هذه السمة للسكرپت بالتشغيل عبر `CloudCat`. بمجرد أن يحتوي السكرپت على هذا الخيار، يظهر زر تنفيذ سحابي في قائمة السكرپتات؛ والنقر عليه يتيح لك اختيار طريقة التنفيذ — راجع [بيئات التشغيل](#running-environments).

![image-20220203225847694](@site/docs/dev/cloudcat.assets/image-20220203225847694.png)

### cloudServer

> متعلق بـ cloudCat، لم يتم تنفيذه بعد

عنوان خادم cloudCat الافتراضي


### exportValue

يصف القيم (Values) التي سيتم تصديرها إلى السحابة؛ يُسمح بتصريحات متعددة.

```ts
// @exportValue key1,key2,key3
// @exportValue key4,key5,key6
```

### exportCookie

يصف الكوكيز التي سيتم تصديرها إلى السحابة؛ يُسمح بتصريحات متعددة. يتم وصف المعلمات باستخدام `CookieDetails` الخاصة بـ `GM_cookie`، على سبيل المثال:

```ts
// The following exports the cookie named cookie1 from https://docs.scriptcat.org/docs/use/
// @exportCookie url=https://docs.scriptcat.org/docs/use;name=cookie1

// This exports all cookies for the scriptcat.org domain
// @exportCookie domain=scriptcat.org

// All available parameters:
// @exportCookie domain=scriptcat.org;url=https://docs.scriptcat.org/docs/use;name=cookie1;path=/docs/use;secure=true;session=true
```

## تغييرات دعم واجهات البرمجة
> حالياً يتم دعم واجهات البرمجة التالية فقط؛ ما لم يُذكر خلاف ذلك، فإنها تتصرف بنفس طريقة الواجهات الأصلية.

### GM_xmlhttpRequest


### GM_notification


### GM_log

### GM_getValue

يدعم حالياً فقط الحصول على القيم المصدرة عبر `@exportValue`؛ ولا تدعم طرق set/delete/list وغيرها.

## بيئات التشغيل {#running-environments}

### محلياً

يصدّر حزمة zip؛ بعد فك ضغطها في مجلد، شغّل الأوامر التالية لتنفيذها محلياً (يتطلب بيئة Node.js محلية):

```bash
npm i
node index.js
```


### Tencent Cloud

أولاً قم بإنشاء مفتاح Tencent Cloud في [**Access Keys**](https://console.cloud.tencent.com/cam/capi) — إذا كنت تستخدم حساباً فرعياً، تأكد من منحه أذونات Cloud Function. ثم فعّل الخدمة في [**Function Service**](https://console.cloud.tencent.com/scf/list)، والتي تأتي مع قدر معين من الاستخدام المجاني كل شهر. المنطقة الافتراضية هي Shanghai؛ عدّلها إذا لزم الأمر. بعد النقر على الرفع، يتم إنشاء مشغل مجدول تلقائياً بناءً على `@crontab` لتشغيل الوظيفة وفقاً للجدول.

![image-20220203224956248](@site/docs/dev/cloudcat.assets/image-20220203224956248.png)
