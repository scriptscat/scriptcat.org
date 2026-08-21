---
slug: /use/use
title: البداية السريعة
---

ScriptCat هو إضافة متصفح يمكنها تنفيذ سكرپتات المستخدم، متوافقة مع سكرپتات Tampermonkey، وتوفر ميزات إضافية. إذا وجدت أي أخطاء أو كانت لديك اقتراحات، يمكنك زيارة [مستودع GitHub](https://github.com/scriptscat/scriptcat) لتقديم ملاحظاتك.

## تثبيت الإضافة

يمكنك تثبيت الإضافة من متاجر الإضافات التالية:

| المتصفح | رابط المتجر | الحالة |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Chrome | [الإصدار المستقر](https://chrome.google.com/webstore/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf) [إصدار بيتا](https://chromewebstore.google.com/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/jaehimmlecjmebpekkipmpmbpfhdacom?authuser=0&hl=zh-CN) | ✅ متاح |
| Edge | [الإصدار المستقر](https://microsoftedge.microsoft.com/addons/detail/scriptcat/liilgpjgabokdklappibcjfablkpcekh) [إصدار بيتا](https://microsoftedge.microsoft.com/addons/detail/scriptcat-beta/nimmbghgpcjmeniofmpdfkofcedcjpfi) | ✅ متاح |
| Firefox | [الإصدار المستقر](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat/) [إصدار بيتا](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat-pre/) | ✅ MV2 |

### متصفحات أخرى

إذا لم يكن متصفحك ضمن القائمة أعلاه، يمكنك تنزيل ملف `zip`/`crx` من صفحة [Github Release](https://github.com/scriptscat/scriptcat/releases) وتثبيته يدوياً.

### تثبيت الإضافة غير المعبأة (Load Unpacked) {#load-unpacked-extension-installation}

① أولاً قم بتنزيل ملف `zip` من صفحة [Github Release](https://github.com/scriptscat/scriptcat/releases) أو صفحة [التنزيل المجتمعي](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html). إذا كان ملف `crx`، فغيّر امتداده إلى `zip`.

② جهز مجلداً لتخزين الإضافة، واستخرج ملف zip أعلاه إلى هذا المجلد. بعد الاستخراج، يجب أن يبدو هكذا (**ملاحظة: لا يمكن حذف هذا المجلد أو نقله، وإلا لن تعمل الإضافة بشكل صحيح**) ![download-zip](./use.assets/download-zip.webp)

③ افتح واجهة إدارة الإضافات في المتصفح لتحميل الإضافة غير المعبأة (ارجع إلى [تفعيل وضع المطور لدعم manifest v3 ScriptCat](/docs/use/open-dev/) لتفعيل وضع المطور أولاً)

- 1. **Edge** ![edge-load-unpacked](./use.assets/edge-load-unpacked.webp)
- 2. **Chrome** ![chrome-load-unpacked](./use.assets/chrome-load-unpacked.webp)

④ حدد المجلد الذي أنشأته في الخطوة ② (بعد اكتمال التحميل، ستظهر أيقونة ScriptCat في قائمة الإضافات في واجهة إدارة الإضافات، ويمكنك أيضاً رؤيتها بالنقر على زر الإضافات في الزاوية العلوية اليمنى من شريط عنوان المتصفح)

- 1. **Edge** ![edge-load-unpacked-img](./use.assets/edge-load-unpacked-img.webp)
- 2. **Chrome** ![chrome-load-unpacked-img](./use.assets/chrome-load-unpacked-img.webp)

⑤ انقر على أيقونة ScriptCat في الزاوية العلوية اليمنى، ثم انقر على `┆` > الحصول على السكرپتات في الزاوية العلوية اليمنى من الواجهة التي تظهر، ويمكنك الانتقال إلى موقع السكرپتات للبحث عن السكرپتات وتثبيتها.

ملاحظة: الإضافات المثبتة بهذه الطريقة لا يمكن تحديثها تلقائياً. إذا كنت بحاجة إلى التحديث، فيرجى تكرار الخطوات أعلاه لتحديث الإضافة (استبدل الملفات وأعد التحميل مرة واحدة).


## الحصول على السكرپتات

> بالإضافة إلى السكرپتات، يمكنك أيضاً الحصول على بعض معلومات السكرپتات والدروس من [منتدى Tampermonkey الصيني](https://bbs.tampermonkey.net.cn/) و[دليل تطوير السكرپتات](https://learn.scriptcat.org/).

### موقع ScriptCat للسكرپتات

[موقع ScriptCat للسكرپتات](https://scriptcat.org/) هو موقع السكرپتات الخاص بهذه الإضافة، حيث يمكنك نشر السكرپتات التي تكتبها.

- موقع سكرپتات جديد
- سكرپتات الخلفية/السكرپتات المجدولة
- واجهة سهلة الاستخدام

### بحث Userscript.Zone

[بحث Userscript.Zone](https://www.userscript.zone/?utm_source=tm.net&utm_medium=scripts) موقع جديد يتيح البحث عن سكرپتات المستخدم عن طريق إدخال عناوين URL أو نطاقات مناسبة.

- كمية كبيرة من موارد السكرپتات
- سهولة العثور على سكرپتات المستخدم المناسبة
- يعرض فقط سكرپتات المستخدم من صفحات سكرپتات مراجعة أو على الأقل صفحات تحتوي على خاصية التعليقات

### GreasyFork

[GreasyFork](https://greasyfork.org/) منصة مستخدمة على نطاق واسع لاستضافة ومشاركة سكرپتات المستخدم، حيث تتيح للمطورين النشر وللمستخدمين تثبيت سكرپتات المتصفح التي تعزز أو تعدل وظائف المواقع. أنشأ الموقع Jason Barnabe ويشتهر بتركيزه على الأمان وشفافية المصدر المفتوح، ويقدم مجموعة كبيرة من السكرپتات لتحسين تجربة التصفح.

Jason Barnabe هو أيضاً المنشئ الأصلي لإضافة المتصفح Stylish. ومع ذلك، تم بيع [Stylish](https://userstyles.org/) في عام 2016 ويُدار الآن من قبل شركة مختلفة، دون أي مشاركة مباشرة من Jason Barnabe في تطويره اللاحق.

- كمية كبيرة من موارد السكرپتات
- القدرة على مزامنة السكرپتات من Github
- [نموذج تطوير مفتوح المصدر](https://github.com/JasonBarnabe/greasyfork) نشط للغاية

### GitHub/Gist

يمكنك [البحث عن موارد السكرپتات في Github و Gist.](https://gist.github.com/search?l=JavaScript&o=desc&q="%3D%3DUserScript%3D%3D"&s=updated)

## جولة التعريف

بعد تثبيت ScriptCat، ستبدأ جولة التعريف تلقائياً عند فتح لوحة الإدارة (يمكنك أيضاً إعادة فتحها في أي وقت من "مركز المساعدة" في الشريط الجانبي الأيسر). تغطي الجولة:

- [تثبيت السكرپتات](/docs/use/script_installation/): التثبيت من متاجر السكرپتات، بما في ذلك دعم [سكرپتات الخلفية](/docs/dev/background/).
- الإدارة والتشغيل: التحرير، التشغيل/الإيقاف، [UserConfig](/docs/dev/config/).
- [النسخ الاحتياطي](/docs/use/sync/) و[الانتقال من مديري السكرپتات الآخرين](/docs/use/from-other/migrate-from-tampermonkey/).
- [مزامنة السكرپتات](/docs/use/sync/).
- [الاشتراكات](/docs/dev/subscribe/).
