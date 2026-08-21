---
title: واجهة برمجة معالجة DOM
---

`@grant CAT.agent.dom`

توفر واجهة برمجة معالجة DOM أتمتة كاملة لصفحات المتصفح: التنقل، قراءة المحتوى، لقطات الشاشة، التفاعل مع النماذج، ومراقبة الـ DOM.

## إدارة التبويبات

### listTabs — سرد التبويبات

```javascript
const tabs = await CAT.agent.dom.listTabs();
```

يرجع معلومات عن كل تبويب مفتوح.

**يرجع `TabInfo[]`:**

| الحقل | النوع | الوصف |
|------|------|------|
| `tabId` | `number` | معرف التبويب |
| `url` | `string` | الرابط الحالي |
| `title` | `string` | عنوان الصفحة |
| `active` | `boolean` | يحدد ما إذا كان هذا هو التبويب النشط حالياً |
| `windowId` | `number` | معرف النافذة التي ينتمي إليها |
| `discarded` | `boolean` | يحدد ما إذا كان قد تم إهماله (معلق) |

## التنقل

### navigate — التنقل إلى صفحة

```javascript
const result = await CAT.agent.dom.navigate(url, options?);
```

**المعلمات:**

| المعامل | النوع | الافتراضي | الوصف |
|------|------|--------|------|
| `url` | `string` | — | الرابط الهدف (إلزامي) |
| `options.tabId` | `number` | التبويب النشط الحالي | التبويب المراد استخدامه |
| `options.waitUntil` | `boolean` | `true` | يحدد ما إذا كان سيتم الانتظار حتى اكتمال تحميل الصفحة |
| `options.timeout` | `number` | `30000` | المهلة بالمللي ثانية |

**يرجع `NavigateResult`:**

```typescript
{ tabId: number; url: string; title: string }
```

## قراءة المحتوى

### readPage — قراءة محتوى صفحة

```javascript
const page = await CAT.agent.dom.readPage(options?);
```

يحول DOM الصفحة إلى نص منظم، ويزيل تلقائياً العناصر غير ذات الصلة مثل `<script>` و `<style>` و `<noscript>` و `<svg>` و `<link[rel=stylesheet]>`.

**المعلمات:**

| المعامل | النوع | الافتراضي | الوصف |
|------|------|--------|------|
| `options.tabId` | `number` | التبويب النشط الحالي | التبويب المراد استخدامه |
| `options.selector` | `string` | — | محدد CSS؛ يُرجع محتوى العنصر المطابق فقط |
| `options.maxLength` | `number` | — | الحد الأقصى لعدد أحرف المحتوى؛ يُقتطع بعد ذلك |
| `options.removeTags` | `string[]` | — | أسماء وسوم إضافية لإزالتها |

**يرجع `PageContent`:**

| الحقل | النوع | الوصف |
|------|------|------|
| `title` | `string` | عنوان الصفحة |
| `url` | `string` | رابط الصفحة |
| `html` | `string` | محتوى الصفحة النصي المعالج |
| `truncated` | `boolean` | يحدد ما إذا كان المحتوى قد اقتطع |
| `totalLength` | `number` | الطول الإجمالي للمحتوى الأصلي |

### screenshot — التقاط لقطة شاشة

```javascript
const shot = await CAT.agent.dom.screenshot(options?);
```

**المعلمات:**

| المعامل | النوع | الافتراضي | الوصف |
|------|------|--------|------|
| `options.tabId` | `number` | التبويب النشط الحالي | التبويب المراد استخدامه |
| `options.quality` | `number` | `80` | جودة JPEG (0-100) |
| `options.fullPage` | `boolean` | `false` | التقاط الصفحة كاملة |
| `options.selector` | `string` | — | محدد CSS؛ التقاط منطقة العنصر المطابق فقط |
| `options.saveTo` | `string` | — | مسار الحفظ في مساحة عمل OPFS |

**يرجع `ScreenshotResult`:**

| الحقل | النوع | الوصف |
|------|------|------|
| `dataUrl` | `string` | عنوان بيانات base64 |
| `path` | `string` | مسار حفظ OPFS (عند استخدام `saveTo`) |
| `size` | `number` | حجم الملف (عند استخدام `saveTo`) |

**كيف يتم اختيار وضع الالتقاط:**

| السيناريو | السلوك |
|------|------|
| `selector` مُعطى | يحدد حدود العنصر عبر CDP ويقصوص اللقطة |
| تبويب في الخلفية | يحاول التقاط CDP؛ إذا فشل، ينشط التبويب ويستخدم `captureVisibleTab` |
| تبويب في المقدمة | يستخدم `captureVisibleTab` مباشرة |

```javascript
// Save a screenshot to OPFS
const shot = await CAT.agent.dom.screenshot({
  saveTo: "screenshots/page.png",
  quality: 90
});
console.log(`Saved to ${shot.path}, size ${shot.size} bytes`);
```

## التفاعل مع الصفحة

### click — النقر على عنصر

```javascript
const result = await CAT.agent.dom.click(selector, options?);
```

**المعلمات:**

| المعامل | النوع | الافتراضي | الوصف |
|------|------|--------|------|
| `selector` | `string` | — | محدد CSS (إلزامي) |
| `options.tabId` | `number` | التبويب النشط الحالي | التبويب المراد استخدامه |
| `options.trusted` | `boolean` | `false` | استخدام CDP لإرسال حدث ماوس حقيقي |

**يرجع `ActionResult`:**

| الحقل | النوع | الوصف |
|------|------|------|
| `success` | `boolean` | يحدد ما إذا نجحت العملية |
| `navigated` | `boolean` | يحدد ما إذا كان النقر قد تسبب في تنقل الصفحة |
| `url` | `string` | الرابط الجديد بعد التنقل |
| `newTab` | `boolean` | يحدد ما إذا تم فتح تبويب جديد |

**`trusted` مقابل نقرة عادية:**

- `trusted: false` (الافتراضي) — يحاكي `element.click()` عبر JS محقون؛ سريع، لكن بعض المواقع قد تكتشفه كحدث غير أصيل
- `trusted: true` — يرسل حدث ماوس حقيقياً عبر Chrome DevTools Protocol، لا يمكن تمييزه عن تفاعل مستخدم فعلي، لكنه يتطلب إذن المطور

### fill — تعبئة حقل نموذج

```javascript
const result = await CAT.agent.dom.fill(selector, value, options?);
```

**المعلمات:**

| المعامل | النوع | الوصف |
|------|------|------|
| `selector` | `string` | محدد CSS (إلزامي) |
| `value` | `string` | القيمة المراد تعبئتها (إلزامية) |
| `options.tabId` | `number` | التبويب المراد استخدامه |
| `options.trusted` | `boolean` | استخدام CDP لمحاكاة إدخال لوحة المفاتيح |

**السلوك:**
- الوضع العادي: يضبط `element.value` ويطلق حدث `input`
- الوضع الموثوق: يركز CDP على العنصر ← يكتب حرفاً بحرف

### scroll — تمرير الصفحة

```javascript
const result = await CAT.agent.dom.scroll(direction, options?);
```

**المعلمات:**

| المعامل | النوع | الوصف |
|------|------|------|
| `direction` | `"up" \| "down" \| "top" \| "bottom"` | اتجاه التمرير (إلزامي) |
| `options.tabId` | `number` | التبويب المراد استخدامه |
| `options.selector` | `string` | تمرير حاوية محددة بدلاً من الصفحة بأكملها |

**يرجع `ScrollResult`:**

| الحقل | النوع | الوصف |
|------|------|------|
| `scrollTop` | `number` | موضع التمرير بعد العملية |
| `scrollHeight` | `number` | إجمالي ارتفاع المحتوى |
| `clientHeight` | `number` | ارتفاع نافذة العرض |
| `atBottom` | `boolean` | يحدد ما إذا تم التمرير إلى الأسفل |

### waitFor — انتظار عنصر

```javascript
const result = await CAT.agent.dom.waitFor(selector, options?);
```

يستقصي ظهور العنصر المحدد على الصفحة (كل 500ms).

**المعلمات:**

| المعامل | النوع | الافتراضي | الوصف |
|------|------|--------|------|
| `selector` | `string` | — | محدد CSS (إلزامي) |
| `options.tabId` | `number` | التبويب النشط الحالي | التبويب المراد استخدامه |
| `options.timeout` | `number` | `10000` | المهلة بالمللي ثانية |

**يرجع `WaitForResult`:**

| الحقل | النوع | الوصف |
|------|------|------|
| `found` | `boolean` | يحدد ما إذا تم العثور على العنصر |
| `element` | `object` | معلومات العنصر (فقط عندما `found=true`) |
| `element.selector` | `string` | المحدد المطابق |
| `element.tag` | `string` | اسم الوسم |
| `element.text` | `string` | المحتوى النصي |
| `element.role` | `string` | دور ARIA |
| `element.type` | `string` | نوع الإدخال |
| `element.visible` | `boolean` | يحدد ما إذا كان مرئياً |

## تنفيذ السكرپتات

### executeScript — تشغيل JavaScript

```javascript
const result = await CAT.agent.dom.executeScript(code, options?);
```

**المعلمات:**

| المعامل | النوع | الافتراضي | الوصف |
|------|------|--------|------|
| `code` | `string` | — | كود JavaScript (إلزامي) |
| `options.tabId` | `number` | التبويب النشط الحالي | التبويب المراد استخدامه |

> يعمل الكود دائماً في **الوضع MAIN** للصفحة (بمشاركة نفس كائن `window` مع JS الصفحة نفسها)، لذا يمكنه استدعاء دوال الصفحة وقراءة متغيرات الصفحة مباشرة — لكن لنفس السبب **لا يمكنه الوصول إلى روابط blob الخاصة بالإضافة** (مثل رابط `blob:` تنشئه عبر `URL.createObjectURL()` من `Blob` الذي يرجع `CAT.agent.opfs.read` في وضع `"blob"`)، لأن روابط blob مقيدة بأصل الإضافة نفسه. إذا كنت بحاجة إلى العمل مع رابط blob في سياق معزول، استخدم SkillScript بدلاً من ذلك (انظر [تطوير Skills](../skill-dev)).

```javascript
// Call a page's own JS function / read a page variable
const data = await CAT.agent.dom.executeScript(
  "return window.__APP_STATE__"
);

// Read DOM content
const title = await CAT.agent.dom.executeScript(
  "return document.querySelector('h1')?.textContent"
);
```

> الكود ملفوف في `new Function()` للتنفيذ، ويدعم قيمة `return`. المهلة الزمنية 30 ثانية.

## مراقبة الـ DOM

يستخدم Chrome DevTools Protocol لمراقبة تغييرات الـ DOM وأحداث الحوارات على الصفحة.

### startMonitor — بدء المراقبة

```javascript
await CAT.agent.dom.startMonitor(tabId);
```

يبدأ مراقبة التبويب المحدد لتغييرات الـ DOM والحوارات (alert/confirm/prompt).

### stopMonitor — إيقاف المراقبة

```javascript
const result = await CAT.agent.dom.stopMonitor(tabId);
```

يوقف المراقبة ويرجع التغييرات المجمعة.

**يرجع `MonitorResult`:**

| الحقل | النوع | الوصف |
|------|------|------|
| `dialogs` | `Array<{ type, message }>` | قائمة الحوارات |
| `addedNodes` | `Array<{ tag, id?, class?, role?, text }>` | ملخص عقد DOM المضافة حديثاً |

> `addedNodes` يُزال تكراره حسب معرف العقدة ويُحد إلى 50 إدخالاً؛ العقد التي أزيلت منذ ذلك الحين من الصفحة أو غير مرئية تُتجاهل تلقائياً. `text` هو نص عادي مستخرج من `outerHTML` للعقدة، مقتطع إلى 300 حرف.

### peekMonitor — التحقق من حالة المراقبة

```javascript
const status = await CAT.agent.dom.peekMonitor(tabId);
```

يتحقق بشكل غير مدمر من حالة المراقبة الحالية.

**يرجع `MonitorStatus`:**

| الحقل | النوع | الوصف |
|------|------|------|
| `hasChanges` | `boolean` | يحدد ما إذا كانت هناك تغييرات |
| `dialogCount` | `number` | عدد الحوارات |
| `nodeCount` | `number` | عدد العقد المضافة حديثاً |

## مثال كامل

```javascript
// ==UserScript==
// @name        Auto form filler
// @match       https://example.com/form
// @grant       CAT.agent.dom
// ==/UserScript==

// Wait for the form to load
await CAT.agent.dom.waitFor("form#signup", { timeout: 5000 });

// Fill in the form
await CAT.agent.dom.fill("input[name=username]", "test_user");
await CAT.agent.dom.fill("input[name=email]", "test@example.com");

// Check the agreement box
await CAT.agent.dom.click("input[type=checkbox]#agree");

// Screenshot the filled-in form
await CAT.agent.dom.screenshot({
  selector: "form#signup",
  saveTo: "screenshots/form-filled.png"
});

// Click submit
const result = await CAT.agent.dom.click("button[type=submit]", { trusted: true });
if (result.navigated) {
  console.log("Form submitted successfully, navigated to:", result.url);
}
```
