---
title: سجل التغييرات
---

import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="changelog" />

لسجل تغييرات نسخة Beta، راجع [سجل تغييرات Beta](./beta-changelog.md)

⚠️ يرجى ملاحظة أنه إذا كنت تستخدم Windows 8/7/XP، أو إذا كان إصدار نواة المتصفح لديك أقل من \<120، فستحتاج إلى تثبيت [النسخة القديمة من ScriptCat](https://github.com/scriptscat/scriptcat/releases) يدويًا. v0.16.x هو آخر إصدار يدعم Manifest V2. يمكن العثور على خطوات التثبيت هنا: [تثبيت الإضافة عن طريق تحميل المجلد المفكوك](/use/use.md#load-unpacked-extension-installation).

<a name="1.4.0"></a>

## 1.4.0 (2026-06-26)

يجلب هذا الإصدار إعادة هيكلة منخفضة المستوى استعدادًا لـ Firefox MV3، إلى جانب تحسينات تجربة المحرر (قائمة التحرير، تنسيق Ctrl+Shift+F، الإصلاح السريع Monaco)، واختيار محركات بحث متعددة المنصات لاكتشاف السكرپتات، وقدرات جديدة مثل `@unwrap` / `window.onurlchange` / `@run-at context-menu`، وتقوية شاملة لموثوقية مزامنة التخزين السحابي، ومجموعة كبيرة من إصلاحات GM API والواجهة والاستقرار (بما في ذلك تسرب ذاكرة طويل الأمد وثغرات أمنية بتلوث النماذج الأولية). يتوفر وكيل الذكاء الاصطناعي ScriptCat كمعاينة في إصدارات dev / Beta ولم يتم تفعيله بعد في الإصدار المستقر.

### 🚀 الميزات الرئيسية الجديدة

- 🧪 وكيل الذكاء الاصطناعي ScriptCat (**معاينة — متاح فقط في إصدارات dev / Beta، غير مفعّل بعد في الإصدار المستقر**) — نظام وكيل ذكي مدعوم بالذكاء الاصطناعي مع تفاعل محادثة، واستدعاء الأدوات، ونظام Skill، وبروتوكول MCP، والمزيد ([#1324](https://github.com/scriptscat/scriptcat/pull/1324)) (by @CodFrm)
- ✨ دعم وسم البيانات الوصفية `@unwrap` ([#1213](https://github.com/scriptscat/scriptcat/pull/1213)) (by @cyfung1031)
- ✨ تنفيذ `window.onurlchange` الخاص بـ TM عبر Navigation API ([#1315](https://github.com/scriptscat/scriptcat/pull/1315)) (by @cyfung1031)
- ✨ استعادة دعم `@run-at context-menu` ([#1442](https://github.com/scriptscat/scriptcat/pull/1442)) (by @cyfung1031)
- ✨ يدعم اكتشاف السكرپتات اختيار محركات بحث متعددة المنصات ([#1295](https://github.com/scriptscat/scriptcat/pull/1295)) (by @CodFrm)
- ✨ إضافة المزيد من موفري خدمات الأيقونات ([#1333](https://github.com/scriptscat/scriptcat/pull/1333)) (by @cyfung1031)
- ✨ إضافة أيقونة التحقق من التحديث في عمود «آخر تحديث» في قائمة السكرپتات ([#1304](https://github.com/scriptscat/scriptcat/pull/1304)) (by @CodFrm)
- ✨ تحسين معالجة تعارضات التحرير وتعارضات أسماء السكرپتات ([#1223](https://github.com/scriptscat/scriptcat/pull/1223)) (by @cyfung1031)

### 🧑‍💻 المحرر

- ✨ إضافة قائمة تحرير إلى المحرر (بحث، استبدال، تراجع، إلخ) ([#1303](https://github.com/scriptscat/scriptcat/pull/1303)) (by @CodFrm)
- ✨ يدعم المحرر تنسيق Ctrl+Shift+F ([#1415](https://github.com/scriptscat/scriptcat/pull/1415)) (by @cyfung1031)
- ✨ تحسين الإصلاح السريع Monaco وتلميحات البيانات الوصفية لسكرپتات المستخدم ([#1461](https://github.com/scriptscat/scriptcat/pull/1461)) (by @cyfung1031)
- 🐛 إصلاح اختصارات Ctrl-F / Ctrl-H ([#1312](https://github.com/scriptscat/scriptcat/pull/1312)) (by @cyfung1031)
- 🐛 إصلاح ميزة الإصلاح التلقائي ESLint التي لا تعمل [#1079](https://github.com/scriptscat/scriptcat/issues/1079) ([#1184](https://github.com/scriptscat/scriptcat/pull/1184)) (by @cyfung1031)
- 🐛 إصلاح مشكلات تخطيط CSS للمحرر ([#1460](https://github.com/scriptscat/scriptcat/pull/1460)) (by @cyfung1031)
- 🐛 إصلاح عرض قائمة السكرپتات في ScriptEditor بالسمة الفاتحة ([#1288](https://github.com/scriptscat/scriptcat/pull/1288)) (by @CodFrm)
- 🐛 إصلاح وتحسين مشكلات ScriptEditor ([#1258](https://github.com/scriptscat/scriptcat/pull/1258)) (by @cyfung1031)

### ⚡️ تحسينات الأداء

- 🚑 إصلاح تسرب ذاكرة محتمل أثناء جلسات ScriptCat الطويلة ([#1401](https://github.com/scriptscat/scriptcat/pull/1401)) (by @cyfung1031)
- ⚡️ إزالة الاعتماد على نظام ملفات Baidu لقواعد DNR العامة، والتحول إلى تعطيل ملفات تعريف الارتباط لكل طلب ([#1377](https://github.com/scriptscat/scriptcat/pull/1377)) (by @cyfung1031)
- ⚡️ تحسين اختيار محركات البحث متعددة المنصات لاكتشاف السكرپتات ([#1379](https://github.com/scriptscat/scriptcat/pull/1379)) (by @cyfung1031)
- ⚡️ استخدام خط أحادي المسافة لـ loadingStatus في صفحة التثبيت لتجنب الاهتزاز ([#1381](https://github.com/scriptscat/scriptcat/pull/1381)) (by @cyfung1031)
- ⚡️ تحسين معالجة pushValue ([#1403](https://github.com/scriptscat/scriptcat/pull/1403)) (by @cyfung1031)
- ⚡️ فحوصات أذونات أكثر اكتمالًا وتلميحات أفضل لأذونات سكرپتات المستخدم ([#1251](https://github.com/scriptscat/scriptcat/pull/1251)) (by @cyfung1031)
- ⚡️ تحسين إدارة ذاكرة MessageConnect وآلية التنظيف ([#1248](https://github.com/scriptscat/scriptcat/pull/1248)) (by @cyfung1031)

### 🐛 إصلاحات الأخطاء

- 🐛 تقوية موثوقية مزامنة التخزين السحابي (المصادقة ومعالجة المسارات ومنطق إعادة المحاولة لـ Dropbox / WebDAV / Google Drive / OneDrive) ([#1374](https://github.com/scriptscat/scriptcat/pull/1374) ~ [#1395](https://github.com/scriptscat/scriptcat/pull/1395)) (by @cyfung1031)
- 🐛 إصلاح مشكلات مزامنة سحابية متعددة: رفع صفر بايت في OneDrive، وتطبيع أخطاء Google Drive / OneDrive، وmodifiedDate لبيانات S3 المخصصة ([#1405](https://github.com/scriptscat/scriptcat/pull/1405)) ([#1406](https://github.com/scriptscat/scriptcat/pull/1406)) ([#1408](https://github.com/scriptscat/scriptcat/pull/1408)) (by @cyfung1031)
- 🐛 إزالة اختبار الكتابة للتحقق من WebDAV لتجنب النتائج السلبية الخاطئة على الخدمات ذات الجذر غير القابل للكتابة (مثل Nutstore) ([#1445](https://github.com/scriptscat/scriptcat/pull/1445)) (by @CodFrm)
- 🐛 إصلاح فشل الطلبات عبر النطاقات عند فقدان إذن الوصول إلى الموقع ([#1477](https://github.com/scriptscat/scriptcat/pull/1477)) (by @cyfung1031)
- 🐛 إصلاح تكيف النافذة المنبثقة للجوال في Edge Android [#686](https://github.com/scriptscat/scriptcat/issues/686) ([#1507](https://github.com/scriptscat/scriptcat/pull/1507)) (by @CodFrm)
- 🐛 إصلاح وميض الخلفية البيضاء أثناء التحميل الأولي [#1497](https://github.com/scriptscat/scriptcat/issues/1497) ([#1498](https://github.com/scriptscat/scriptcat/pull/1498)) (by @cyfung1031)
- 🐛 إصلاح اتصالات الرسائل (GM API / المنافذ) التي لم يتم تنظيفها بشكل صحيح ([#1474](https://github.com/scriptscat/scriptcat/pull/1474)) (by @cyfung1031)
- 🐛 إصلاح عدم تطابق قالب `@match` عند غياب البحث ([#1466](https://github.com/scriptscat/scriptcat/pull/1466)) (by @cyfung1031)
- 🐛 إضافة `protoBaseDescs` لإصلاح وراثة فئات الأسلاف في شبه صندوق الرمل Tampermonkey ([#1463](https://github.com/scriptscat/scriptcat/pull/1463)) (by @cyfung1031)
- 🐛 إصلاح المعالجة المفقودة لـ null في msgConn الخاص بـ `GM_xmlhttpRequest` ([#1433](https://github.com/scriptscat/scriptcat/pull/1433)) (by @cyfung1031)
- 🐛 إصلاح عدم معالجة GM xhr بشكل صحيح لـ onloadend غير الطبيعي ([#1412](https://github.com/scriptscat/scriptcat/pull/1412)) (by @cyfung1031)
- 🐛 إصلاح مشكلات التحديث الديناميكي والعرض لقائمة ScriptEditor ([#1414](https://github.com/scriptscat/scriptcat/pull/1414)) (by @cyfung1031)
- 🐛 إصلاح مشكلة عدد قواعد الجلسة مع xhr المتزامن ([#1353](https://github.com/scriptscat/scriptcat/pull/1353)) (by @cyfung1031)
- 🐛 إصلاح تعطل الصفحة بالكامل بسبب تعبير cron غير صالح ([#1327](https://github.com/scriptscat/scriptcat/pull/1327)) (by @cyfung1031)
- 🐛 إصلاح فشل جميع السكرپتات عند انتهاء مهلة سكرپت واحد أثناء فحص التحديثات المجمّع ([#1265](https://github.com/scriptscat/scriptcat/pull/1265)) (by @cyfung1031)
- 🐛 إضافة معالجة extensionEnv لـ isIncognito وuserAgent وrun-in ([#1368](https://github.com/scriptscat/scriptcat/pull/1368)) (by @cyfung1031)
- 🐛 إصلاح زر دليل الإعداد المخفي جزئيًا [#1396](https://github.com/scriptscat/scriptcat/issues/1396) ([#1398](https://github.com/scriptscat/scriptcat/pull/1398)) (by @cyfung1031)
- 🐛 إصلاح تلميح الأداة المحجوب في صفحة إدارة السكرپتات [#1386](https://github.com/scriptscat/scriptcat/issues/1386) ([#1387](https://github.com/scriptscat/scriptcat/pull/1387)) (by @Xdy1579883916)
- 🐛 إصلاح تغيير حجم الشريط الجانبي غير الطبيعي في وضع البطاقات [#1179](https://github.com/scriptscat/scriptcat/issues/1179) ([#1373](https://github.com/scriptscat/scriptcat/pull/1373)) (by @cyfung1031)
- 🐛 إصلاح الأصل غير الصحيح عند تثبيت ملفات محلية بالسحب والإفلات ([#1371](https://github.com/scriptscat/scriptcat/pull/1371)) (by @cyfung1031)
- 🐛 إصلاح رسالة تبديل اللغة ([#1380](https://github.com/scriptscat/scriptcat/pull/1380)) (by @cyfung1031)
- 🐛 تحسين واجهة عرض السجلات ([#1372](https://github.com/scriptscat/scriptcat/pull/1372)) (by @cyfung1031)
- 🐛 إصلاح CSS الخاص بـ UserConfigPanel ([#1361](https://github.com/scriptscat/scriptcat/pull/1361)) (by @cyfung1031)
- 🐛 استخدام `Object.create(null)` للكائن الفارغ في create_context ([#1397](https://github.com/scriptscat/scriptcat/pull/1397)) (by @cyfung1031)
- 🐛 إصلاح منطق التحديث الصامت وأذونات الاتصال للسكرپتات المشتركة ([#1201](https://github.com/scriptscat/scriptcat/pull/1201)) (by @cyfung1031)
- 🐛 إصلاح زر الاستعلام في صفحة السجلات الذي لا يحدّث الوقت ([#1294](https://github.com/scriptscat/scriptcat/pull/1294)) (by @CodFrm)

### 🔒 تحسينات الأمان

- 🔒 إصلاح تلوث النماذج الأولية عبر مفاتيح تكوين المستخدم YAML غير الموثوقة ([#1494](https://github.com/scriptscat/scriptcat/pull/1494)) (by @qdzsh)
- 🔒 إصلاح جميع ثغرات الأمان في تبعيات npm ([#1350](https://github.com/scriptscat/scriptcat/pull/1350)) ([#1364](https://github.com/scriptscat/scriptcat/pull/1364)) ([#1365](https://github.com/scriptscat/scriptcat/pull/1365)) (by @cyfung1031)

### ♻️ إعادة الهيكلة والتوافق

- ♻️ إعادة هيكلة منخفضة المستوى استعدادًا لتكييف Firefox MV3 ([#1457](https://github.com/scriptscat/scriptcat/pull/1457)) ([#1480](https://github.com/scriptscat/scriptcat/pull/1480)) (by @cyfung1031)
- ♻️ إعادة هيكلة منطق تحديث موارد السكرپتات (updateResource) والتحكم في التزامن، واستعادة توافق ذاكرة التخزين المؤقت للموارد ([#1193](https://github.com/scriptscat/scriptcat/pull/1193)) (by @cyfung1031)
- ♻️ استبدال jszip بـ JSZipp لمعالجة ZIP (استيراد / تصدير النسخ الاحتياطية) وإزالة الاعتماد غير المستخدم على jszip ([#1479](https://github.com/scriptscat/scriptcat/pull/1479)) (by @cyfung1031)
- ♻️ توحيد اتصالات Offscreen ↔ ServiceWorker عبر قناة postMessage ([#1299](https://github.com/scriptscat/scriptcat/pull/1299)) (by @CodFrm)
- ♻️ إعادة هيكلة كود VSCodeConnect ([#1170](https://github.com/scriptscat/scriptcat/pull/1170)) (by @cyfung1031)
- ⚡️ ضغط ts.worker.js إلى 4 ميجابايت لاجتياز التحقق من AMO، وإصلاح خطأ إذن الخلفية MV3 ([#1221](https://github.com/scriptscat/scriptcat/pull/1221)) (by @cyfung1031)

### 🌐 التدويل

- 🌐 إصلاح ترجمات المصطلحات متعددة اللغات (بشكل أساسي تحسين الصينية التقليدية) وإضافة إرشادات مصطلحات الترجمة ([#1468](https://github.com/scriptscat/scriptcat/pull/1468)) (by @cyfung1031)

### أخرى

- ✨ تحويل خدمة الأيقونات fetchIconByDomain إلى scriptcat.org ([#1268](https://github.com/scriptscat/scriptcat/pull/1268)) (by @cyfung1031)
- 🔥 إزالة المحتوى المتعلق بـ Crowdin واللغة الزائفة ach-UG ([#1385](https://github.com/scriptscat/scriptcat/pull/1385)) (by @CodFrm)

<a name="0.16.15"></a>

## 0.16.15 (2026-05-19)

### 🐛 إصلاحات الأخطاء

- 🐛 إصلاح أمر البناء في سكرپت التغليف MV2 [#1423](https://github.com/scriptscat/scriptcat/issues/1423) (by @CodFrm)
- 🐛 التكيف مع تغييرات WebExtensions API (Firefox 149-152)، بما في ذلك تعديلات CSP ([#1448](https://github.com/scriptscat/scriptcat/pull/1448)) (by @cyfung1031)

<a name="0.16.14"></a>

## 0.16.14 (2026-04-26)

### 🚀 الميزات الرئيسية الجديدة

- ✨ مزامنة FirefoxMV2 مع العناصر الرئيسية لـ MV3: ترقية TypeScript إلى 4.9، وترقية tsconfig إلى es2022؛ محاذاة قوالب السكرپتات (normal/crontab/background) مع MV3؛ تحسين cron مع دعم تعبير `once(...)`؛ دعم متعدد اللغات لمحرر Monaco ([#1331](https://github.com/scriptscat/scriptcat/pull/1331)) (by @cyfung1031)

### ♻️ إعادة الهيكلة والتوافق

- 🔥 إزالة الاعتماد على axios للمحاذاة مع MV3 ([#1339](https://github.com/scriptscat/scriptcat/pull/1339)) (by @cyfung1031)

### 🐛 إصلاحات الأخطاء

- 🐛 إصلاح عدم استلام iframe المتداخل لـ window.parent لرسائل postMessage ([#1335](https://github.com/scriptscat/scriptcat/pull/1335)) (by @cyfung1031)

<a name="1.3.2"></a>

## 1.3.2 (2026-03-28)

### 🐛 إصلاحات الأخطاء

- 🐛 إزالة رأس Accept من fetchScriptBody لتجنب خطأ 406 ([#1306](https://github.com/scriptscat/scriptcat/pull/1306)) (by @cyfung1031)
- 🐛 إصلاح تعارض مصادقة ملفات تعريف الارتباط WebDAV ودعم authType ([#1308](https://github.com/scriptscat/scriptcat/pull/1308)) (by @CodFrm)
- 🐛 عرض أخطاء التنسيق بشكل صحيح ([#1310](https://github.com/scriptscat/scriptcat/pull/1310)) (by @cyfung1031)
- 🐛 استخدام chrome.storage.local للإعدادات الخاصة بالجهاز لتجنب المزامنة بين الأجهزة ([#1309](https://github.com/scriptscat/scriptcat/pull/1309)) (by @CodFrm)
- 🐛 إصلاح مشكلات تلميحات محرر التعليمات البرمجية ([#1301](https://github.com/scriptscat/scriptcat/pull/1301)) (by @cyfung1031)
- 🐛 إصلاح اقتطاع نافذة منتقي التاريخ المنبثقة في صفحة السجلات ([#1292](https://github.com/scriptscat/scriptcat/pull/1292)) (by @cyfung1031)
- 🐛 إصلاح ظهور زر إلغاء الربط عند عدم ربط أي محرك سحابي ([#1291](https://github.com/scriptscat/scriptcat/pull/1291)) (by @CodFrm)
- 🐛 إصلاح النافذة المنبثقة المحجوبة ([#1290](https://github.com/scriptscat/scriptcat/pull/1290)) (by @cyfung1031)

<a name="1.3.1"></a>

## 1.3.1 (2026-03-13)

### 🐛 إصلاحات الأخطاء

- 🚑 إصلاح خطأ اكتشاف البيئة الناتج عن حقن إضافات أخرى لـ chrome.runtime [#1280](https://github.com/scriptscat/scriptcat/issues/1280) ([#1281](https://github.com/scriptscat/scriptcat/pull/1281)) (by @CodFrm)

### أخرى

- ✅ إضافة اختبارات E2E Playwright واختبارات وظيفية لـ GM API ([#1283](https://github.com/scriptscat/scriptcat/pull/1283)) (by @CodFrm)

<a name="1.3.0"></a>

## 1.3.0 (2026-03-10)

يجلب هذا التحديث تخزين Amazon S3، وخيارات تشغيل السكرپتات، والتثبيت دون الوصول إلى موقع ويب خارجي، والمزيد. يحسّن بشكل كبير نظام الرسائل وأداء React، ويصلح العديد من مشكلات GM API والواجهة والاستقرار، ويتضمن تحسينات شاملة لجودة الكود.

### 🚀 الميزات الرئيسية الجديدة

- ✨ إضافة تخزين Amazon S3 [#1146](https://github.com/scriptscat/scriptcat/issues/1146) ([#1189](https://github.com/scriptscat/scriptcat/pull/1189)) (by @CodFrm)
- ✨ خيارات تشغيل السكرپتات ([#895](https://github.com/scriptscat/scriptcat/pull/895)) (by @CodFrm)
- ✨ التثبيت دون الوصول إلى موقع ويب خارجي + تعديلات تخطيط صفحة التثبيت ([#842](https://github.com/scriptscat/scriptcat/pull/842)) (by @cyfung1031)
- ✨ عرض أيقونة رمادية عند تعطيل وظيفة السكرپت [#897](https://github.com/scriptscat/scriptcat/issues/897) (by @CodFrm)
- ✨ تحسين التفاعل عندما يكون عدد العناصر المفتوحة في القائمة 0 [#868](https://github.com/scriptscat/scriptcat/issues/868) (by @CodFrm)
- ✨ جعل `@noframes` افتراضيًا في القالب لمنع الأخطاء الشائعة ([#900](https://github.com/scriptscat/scriptcat/pull/900)) (by @cyfung1031)
- ✨ منع اعتبار رابط التثبيت تثبيتًا جديدًا عندما يتغير اسم السكرپت ([#824](https://github.com/scriptscat/scriptcat/pull/824)) (by @cyfung1031)
- ✨ إصلاح التحقق من تعارض `@grant`، وإضافة تنبيه خطأ للتعريفات المكررة ([#902](https://github.com/scriptscat/scriptcat/pull/902)) (by @cyfung1031)
- ✨ قبول `@version` بدون قيمة أو بقيمة فارغة ([#1216](https://github.com/scriptscat/scriptcat/pull/1216)) (by @cyfung1031)
- ✨ تعديل موضع الشريط الجانبي المخفي للمحرر [#1185](https://github.com/scriptscat/scriptcat/issues/1185) ([#1254](https://github.com/scriptscat/scriptcat/pull/1254)) (by @CodFrm)

### 🧩 تغييرات GM API

- 🐛 إصلاح مشكلة GM_addElement، ونقل العملية إلى بيئة المحتوى ([#1233](https://github.com/scriptscat/scriptcat/pull/1233)) (by @cyfung1031)
- 🐛 إضافة معامل `conflictAction` إلى `GM_download` ([#1250](https://github.com/scriptscat/scriptcat/pull/1250)) (by @cyfung1031)
- 🐛 إصلاح التصريحات غير المتزامنة لـ GM API، وإرجاع Promise بشكل صحيح ([#1169](https://github.com/scriptscat/scriptcat/pull/1169)) (by @cyfung1031)
- ♻️ توافق Firefox: GM_setClipboard ([#928](https://github.com/scriptscat/scriptcat/pull/928)) (by @cyfung1031)
- 🐛 إصلاح مشكلة GM_value [#1192](https://github.com/scriptscat/scriptcat/issues/1192) (by @CodFrm)
- 🐛 إصلاح عدم دعم اسم ملف التنزيل للمجلدات ([#1203](https://github.com/scriptscat/scriptcat/pull/1203)) (by @cyfung1031)

### ⚡️ تحسينات الأداء

- ♻️ إعادة هيكلة نظام الرسائل: بث storage.local + الامتثال لـ scripting Firefox MV3 + MessageFlag مزامنة ديناميكية غير قابل للتتبع ([#1067](https://github.com/scriptscat/scriptcat/pull/1067)) (by @cyfung1031)
- ⚡️ إصلاح مشكلات إعادة العرض React (ScriptCard & ScriptTable) ([#1182](https://github.com/scriptscat/scriptcat/pull/1182)) (by @cyfung1031)
- ⚡️ إصلاح مشكلات إعادة العرض React (Popup) ([#1181](https://github.com/scriptscat/scriptcat/pull/1181)) (by @cyfung1031)
- ⚡️ تحسين أداء Repo ([#1232](https://github.com/scriptscat/scriptcat/pull/1232)) (by @CodFrm)
- ⚡️ نقل البيانات الوصفية خارج chrome.storage.session ([#1027](https://github.com/scriptscat/scriptcat/pull/1027)) (by @cyfung1031)
- ⚡️ تحسين اكتشاف ترميز الأحرف ([#1140](https://github.com/scriptscat/scriptcat/pull/1140)) (by @cyfung1031)
- ⚡️ تخزين الأيقونات حسب URL لتجنب التخزين المكرر بين السكرپتات ([#909](https://github.com/scriptscat/scriptcat/pull/909)) (by @cyfung1031)
- ⚡️ تحسين كود parseMetadata ([#903](https://github.com/scriptscat/scriptcat/pull/903)) (by @cyfung1031)
- 🐛 إصلاح تسرب الذاكرة وكشف خصائص الكائنات ([#1242](https://github.com/scriptscat/scriptcat/pull/1242)) (by @cyfung1031)
- ♻️ إزالة Redux، وتبسيط إدارة الحالة ([#1206](https://github.com/scriptscat/scriptcat/pull/1206)) (by @cyfung1031)

### 🧑‍💻 المحرر

- ✨ تحسين إعدادات محرر Monaco، وإضافة إصلاح `/* global xxx */` ([#1012](https://github.com/scriptscat/scriptcat/pull/1012)) (by @cyfung1031)
- ✨ تلميحات متعددة اللغات لمحرر Monaco وإضافة تلميح `@require-css` ([#960](https://github.com/scriptscat/scriptcat/pull/960)) (by @cyfung1031)

### 🐛 إصلاحات الأخطاء

- 🐛 إصلاح تعارض فحص إذن النافذة الخاصة الذي يسبب عمليات إعادة تشغيل متكررة (by @CodFrm)
- 🐛 إصلاح معالجة تعبير include `*?*` [#1271](https://github.com/scriptscat/scriptcat/issues/1271) ([#1272](https://github.com/scriptscat/scriptcat/pull/1272)) (by @CodFrm)
- 🔒 تطهير محتوى HTML لإشعارات الإعلانات باستخدام DOMPurify ([#1274](https://github.com/scriptscat/scriptcat/pull/1274)) (by @CodFrm)
- 🐛 إصلاح عدم عمل عنصر التحكم في إدارة الأذونات بإعدادات السكرپت ([#1267](https://github.com/scriptscat/scriptcat/pull/1267)) (by @CodFrm)
- 🐛 إصلاح محتوى النافذة المنبثقة الذي يتبع تمرير الشاشة [#1256](https://github.com/scriptscat/scriptcat/issues/1256) ([#1263](https://github.com/scriptscat/scriptcat/pull/1263)) (by @cyfung1031)
- 🐛 إصلاح فشل تحليل رابط التثبيت [#1235](https://github.com/scriptscat/scriptcat/issues/1235) ([#1260](https://github.com/scriptscat/scriptcat/pull/1260)) (by @cyfung1031)
- 🐛 إصلاح مكون السحب الذي يسبب تأخر focusin/focusout [#1224](https://github.com/scriptscat/scriptcat/issues/1224) ([#1243](https://github.com/scriptscat/scriptcat/pull/1243)) (by @CodFrm)
- 🐛 إصلاح عدم عمل واجهة برمجة الإضافة الخارجية ([#1217](https://github.com/scriptscat/scriptcat/pull/1217)) (by @cyfung1031)
- 🐛 إصلاح مشكلة grant ([#1199](https://github.com/scriptscat/scriptcat/pull/1199)) (by @CodFrm)
- 🐛 إصلاح عدم وجود UserAgentData في content.js ([#1183](https://github.com/scriptscat/scriptcat/pull/1183)) (by @cyfung1031)
- 🐛 معالجة مشكلة ترميز السكرپتات [#1115](https://github.com/scriptscat/scriptcat/issues/1115) ([#1138](https://github.com/scriptscat/scriptcat/pull/1138)) (by @CodFrm)
- 🐛 إصلاح عرض أيقونات السكرپتات [#1052](https://github.com/scriptscat/scriptcat/issues/1052) ([#1104](https://github.com/scriptscat/scriptcat/pull/1104)) (by @CodFrm)
- 🐛 إضافة بادئة UnoCSS لحل تعارضات CSS، وإصلاح تخطيط CSS ([#1013](https://github.com/scriptscat/scriptcat/pull/1013)) (by @cyfung1031)
- 🐛 مسح Alarm الموجود عند اختيار فحص تحديثات سكرپتات غير منتظم ([#996](https://github.com/scriptscat/scriptcat/pull/996)) (by @cyfung1031)
- 🐛 الاستيراد والتصدير - إصلاح تاريخ/وقت التعديل الأخير غير الصحيح للسكرپتات ([#951](https://github.com/scriptscat/scriptcat/pull/951)) (by @cyfung1031)
- 🐛 إصلاح عرض اسم ووصف السكرپتات ببادئة لغة i18n [#1123](https://github.com/scriptscat/scriptcat/issues/1123) (by @CodFrm)
- 🐛 إصلاح عدم تنفيذ unregister بشكل صحيح ([#1231](https://github.com/scriptscat/scriptcat/pull/1231)) (by @cyfung1031)

### ♻️ إعادة الهيكلة والتوافق

- ♻️ تعديلات API userScripts / scripting، وتحسين التوافق (إعادة #704) ([#925](https://github.com/scriptscat/scriptcat/pull/925)) (by @cyfung1031)
- ♻️ تغييرات متعلقة بـ Cron: إصلاحات أخطاء، i18n، تحسين تعبير once، ترقية مكتبة cron ([#1126](https://github.com/scriptscat/scriptcat/pull/1126)) (by @cyfung1031)
- ♻️ إعادة هيكلة وتحسين تحميل أيقونات السكرپتات ([#893](https://github.com/scriptscat/scriptcat/pull/893)) (by @CodFrm)
- ♻️ تحسين فك ترميز النصوص ([#1166](https://github.com/scriptscat/scriptcat/pull/1166)) (by @cyfung1031)
- ⬆️ ترقية إصدار النواة المتوافق مع swc ([#1186](https://github.com/scriptscat/scriptcat/pull/1186)) (by @cyfung1031)

### 🎨 تحسينات الواجهة

- 🎨 تغيير رقم شارة أيقونة الإضافة الافتراضية إلى عدد السكرپتات [#989](https://github.com/scriptscat/scriptcat/issues/989) (by @CodFrm)
- 🎨 جعل عنوان URL لصفحة التثبيت أجمل ([#993](https://github.com/scriptscat/scriptcat/pull/993)) (by @cyfung1031)
- 🐛 إعادة هيكلة DraggableEntry، وإصلاح محاذاة ارتفاع البطاقات ([#1245](https://github.com/scriptscat/scriptcat/pull/1245)) (by @cyfung1031)

### متنوع

- 🔒 تحسينات أمنية (DOMPurify، إصلاحات ثغرات تبعيات npm)
- 👷 تحسين تجميع Rspack، وإصلاحات سلسلة أدوات البناء
- ⬆️ تحديثات إصدارات التبعيات

**سجل التغييرات الكامل:** [مقارنة v1.2.6...v1.3.0](https://github.com/scriptscat/scriptcat/compare/v1.2.6...v1.3.0)

<a name="1.2.6"></a>

## 1.2.6 (2026-02-03)

### تم الإصلاح

- 🐛 إصلاح خطأ structuredClone ([#1192](https://github.com/scriptscat/scriptcat/issues/1192)) [[265e122](https://github.com/scriptscat/scriptcat/commit/265e122342366b166d3122cc8da485cb1295b924)] (by @cyfung1031)

<a name="1.2.5"></a>

## 1.2.5 (2026-02-02)

### تم الإصلاح

- 🐛 إصلاح مشكلة حذف مزامنة السكرپتات [#1158](https://github.com/scriptscat/scriptcat/issues/1158) [[5e91a31](https://github.com/scriptscat/scriptcat/commit/5e91a31e02761ba8061e3de1f4d15fc1d964346c)] (by @CodFrm)
- 🐛 متوافق مع TM &#x60;@match www.website.com/*&#x60; ([#1165](https://github.com/scriptscat/scriptcat/issues/1165)) [[da66ff7](https://github.com/scriptscat/scriptcat/commit/da66ff70d25c3087cb8405289dc8b14df9c15f05)] (by @cyfung1031)
- 🐛 أحدث إصدار من Edge 144 يضيف سكرپتات المستخدم [#1157](https://github.com/scriptscat/scriptcat/issues/1157) [[f7c1c73](https://github.com/scriptscat/scriptcat/commit/f7c1c730cf39cae02a9e6f815e3113ea9d2a8a05)] (by @CodFrm)
- 🐛 إصلاح مشكلة المراقبة المستمرة لـ FileSystemObserver ([#1160](https://github.com/scriptscat/scriptcat/issues/1160)) [[9556769](https://github.com/scriptscat/scriptcat/commit/95567690d1bf77bfe8bedfd6a94c88949a77e115)] (by @cyfung1031)
- 🐛 تصحيحات طفيفة في locales.ts ([#1154](https://github.com/scriptscat/scriptcat/issues/1154)) [[1c44b68](https://github.com/scriptscat/scriptcat/commit/1c44b680dab3a95a51eb73cf92531efd0a192dc9)] (by @cyfung1031)
- 🐛 إصلاح مشكلة وقت نافذة التحديث المنبثقة ([#1155](https://github.com/scriptscat/scriptcat/issues/1155)) [[c17f761](https://github.com/scriptscat/scriptcat/commit/c17f761807fb9b14aff09b9b08d19e4cbe72b8a5)] (by @cyfung1031)
- 🐛 إصلاح عرض اسم ووصف السكرپتات ببادئة لغة i18n [#1123](https://github.com/scriptscat/scriptcat/issues/1123) [[7ef7355](https://github.com/scriptscat/scriptcat/commit/7ef7355632fc989fa1cad44fd2069ff840bbd8df)] (by @CodFrm)
- 🐛 معالجة مشكلة مرجع القيمة [#1141](https://github.com/scriptscat/scriptcat/issues/1141) ([#1147](https://github.com/scriptscat/scriptcat/issues/1147)) [[0892fcd](https://github.com/scriptscat/scriptcat/commit/0892fcd452758030553c33ddf14f1ce4bc6d3efc)] (by @cyfung1031)

<a name="1.2.4"></a>

## 1.2.4 (2026-01-07)

إصلاح أخطاء المزامنة، ولن تفتح تحديثات الإصدارات صفحة سجل التغييرات تلقائيًا بعد الآن

### تمت الإضافة

- ✨ الحذف المتزامن معطل افتراضيًا الآن ([#958](https://github.com/scriptscat/scriptcat/issues/958)) [[9c4c7dc](https://github.com/scriptscat/scriptcat/commit/9c4c7dc411357746db43a306d97ac41a71f2b49c)] (by @cyfung1031)
- ✨ يدعم المحرر الآن GM.\* ([#1129](https://github.com/scriptscat/scriptcat/issues/1129)) [[bea0192](https://github.com/scriptscat/scriptcat/commit/bea0192c6cc50eff2ed4e1cc5dcc25f36bbe10e7)] (by @cyfung1031)

### تم التغيير

- ♻️ تحسين منطق فتح صفحة سجل التغييرات [#1110](https://github.com/scriptscat/scriptcat/issues/1110) [[d3ffedc](https://github.com/scriptscat/scriptcat/commit/d3ffedcffe752ca548f87f1640072fcd871b8604)] (by @CodFrm)

### تم الإصلاح

- 🐛 scriptcat.d.tpl &amp; تصحيحات الأنواع ([#1130](https://github.com/scriptscat/scriptcat/issues/1130)) [[dd22ef5](https://github.com/scriptscat/scriptcat/commit/dd22ef544684d69e24a7aae098cb05cbab03daa8)] (by @cyfung1031)
- 🐛 إصلاح مشكلات المزامنة السحابية ([#1133](https://github.com/scriptscat/scriptcat/issues/1133)) [[a9383d2](https://github.com/scriptscat/scriptcat/commit/a9383d2012eb3953dc33c8886ce3891f404fa100)] (by @CodFrm)
- 🐛 إصلاح خطأ &#x60;GM_addElement(&quot;tagName&quot;)&#x60; ([#1120](https://github.com/scriptscat/scriptcat/issues/1120)) [[ad19de5](https://github.com/scriptscat/scriptcat/commit/ad19de5c1793c8c079bedbf1b11c7c2ae27a469e)] (by @cyfung1031)
- 🐛 إزالة منطق التنظيف وتحسين منطق checkuserscript ([#1113](https://github.com/scriptscat/scriptcat/issues/1113)) [[e635911](https://github.com/scriptscat/scriptcat/commit/e635911a3c11c3cb8acd1cfd507cb777e5ee7236)] (by @CodFrm)

### متنوع

- 🏷️ مراجعات TypeScript ([#1127](https://github.com/scriptscat/scriptcat/issues/1127)) [[b455724](https://github.com/scriptscat/scriptcat/commit/b4557244191018c18d5ce8ea8e8627bcfb7f7cdd)] (by @cyfung1031)
- 📝 استكمال تعليقات الأمثلة ([#1131](https://github.com/scriptscat/scriptcat/issues/1131)) [[292549e](https://github.com/scriptscat/scriptcat/commit/292549ed0f65952fe9f269aace23eefc7d6a3a0f)] (by @cyfung1031)

<a name="1.2.3"></a>

## 1.2.3 (2025-12-20)

بعض إصلاحات الأخطاء

### تم التغيير

- ⚡ تحسين عرض وقت التشغيل التالي [#1093](https://github.com/scriptscat/scriptcat/issues/1093) [[324ce51](https://github.com/scriptscat/scriptcat/commit/324ce515c84699ca8d3bf1ee447fc6ef0656ae0d)] (by @CodFrm)

### تم الإصلاح

- 🐛 إصلاح مشكلة مطابقة URL للسكرپتات المبكرة ([#1096](https://github.com/scriptscat/scriptcat/issues/1096)) [[a77effb](https://github.com/scriptscat/scriptcat/commit/a77effbab5ab4d1752065ef943d9c050ff99c066)] (by @cyfung1031)
- 🐛 إصلاح مشكلة العرض القصير جدًا لنافذة التحديث ([#1088](https://github.com/scriptscat/scriptcat/issues/1088)) [[b2b2d5c](https://github.com/scriptscat/scriptcat/commit/b2b2d5c41ff70ee5430f7d8d156f480ac8fc3a1a)] (by @cyfung1031)
- 🐛 إصلاح العرض غير الطبيعي عند تمكين إشعار سكرپت المستخدم ([#1086](https://github.com/scriptscat/scriptcat/issues/1086)) ([959c4db](https://github.com/scriptscat/scriptcat/commit/959c4dbed92f7bfe22a2f8ebb775c4189b5ff076))
- 🐛 responseHeaders: &#x60;توافق TM: \\r\\n&#x60; ([#1085](https://github.com/scriptscat/scriptcat/issues/1085)) [[15232c8](https://github.com/scriptscat/scriptcat/commit/15232c8543d93abfdafa1353d39d8a15d1dc385f)] (by @cyfung1031)
- 🐛 إصلاح مشكلات GM XHR ([#1082](https://github.com/scriptscat/scriptcat/issues/1082)) [[3d987c3](https://github.com/scriptscat/scriptcat/commit/3d987c300242a3c765146359c35ecd6d998f792c)] (by @CodFrm)

### متنوع

- 🌐 معالجة مشكلات i18n في صفحات النوافذ المنبثقة [#1081](https://github.com/scriptscat/scriptcat/issues/1081) [[6b17d71](https://github.com/scriptscat/scriptcat/commit/6b17d7100e8572d72b3b7aaf8ea38be9cdf33f5f)] (by @CodFrm)

<a name="1.2.2"></a>

## 1.2.2 (2025-12-13)

بعض إصلاحات الأخطاء

### تم الإصلاح

- 🐛 إصلاح مشكلة المزامنة الخلفية المتكررة ([#1076](https://github.com/scriptscat/scriptcat/issues/1076)) [[45dc39b](https://github.com/scriptscat/scriptcat/commit/45dc39baa0f3326cf12e97312ab632dc46ba40f2)] (by @CodFrm)
- 🐛 إصلاح مشكلة معالجة التبويبات الخاصة [#1066](https://github.com/scriptscat/scriptcat/issues/1066) ([50904fb](https://github.com/scriptscat/scriptcat/commit/50904fb46efdea10fd57677bc2d28c770b47e861))
- 🐛 إصلاح معالجة السكرپتات بدون قواعد مطابقة [#1071](https://github.com/scriptscat/scriptcat/issues/1071) ([560cdc0](https://github.com/scriptscat/scriptcat/commit/560cdc01fc0fc27fb7d0e3b877c63ba431206668))
- 🐛 إصلاح مشكلة التغليف في CI التي أزالت الأذونات الاختيارية للخلفية [[1f002f0](https://github.com/scriptscat/scriptcat/commit/1f002f0edf9892f023ae93b8522ff7c5e4a96559)] (by @CodFrm)
- 🐛 إصلاح تجاهل التبويبات المهملة ([#1058](https://github.com/scriptscat/scriptcat/issues/1058)) [[6165bf4](https://github.com/scriptscat/scriptcat/commit/6165bf48eb1d53ede0561c85c30135446c2ff882)] (by @cyfung1031)

<a name="1.2.1"></a>

## 1.2.1 (2025-12-06)

بعض إصلاحات الأخطاء ومعالجة خيارات التشغيل في الخلفية.

### تمت الإضافة

- ✨ إضافة خيار التشغيل في الخلفية ([#1048](https://github.com/scriptscat/scriptcat/issues/1048)) [[626e84d](https://github.com/scriptscat/scriptcat/commit/626e84dbd4dda0731e0a5ffdbdf71ae10e884489)] (by @CodFrm)

### تم الإصلاح

- 🐛 إصلاح مشكلة إعادة تعيين مستمع الرسائل الناتجة عن document.write ([#1055](https://github.com/scriptscat/scriptcat/issues/1055)) [[1f3a3ec](https://github.com/scriptscat/scriptcat/commit/1f3a3ec335ed4b519599e9aa3036c66b6f0d10b2)] (by @cyfung1031)
- 🐛 إصلاح وظيفة التصفية في عرض القائمة [[e272dc6](https://github.com/scriptscat/scriptcat/commit/e272dc6ed151c15a1ef785b70ae100cb9e74a5dd)] (by @CodFrm)
- 🐛 معالجة UserAgentData في مرحلة مبكرة ([#1045](https://github.com/scriptscat/scriptcat/issues/1045)) [[b4e08a8](https://github.com/scriptscat/scriptcat/commit/b4e08a812a08f42037837bbee54610ebc565063f)] (by @cyfung1031)
- 🐛 استعادة خيار useOpen لـ GM_openInTab [#1043](https://github.com/scriptscat/scriptcat/issues/1043) ([#1044](https://github.com/scriptscat/scriptcat/issues/1044)) [[7f30198](https://github.com/scriptscat/scriptcat/commit/7f30198909824871e694d5ffbe7088e44a6d0b45)] (by @cyfung1031)
- 🐛 إصلاح مشكلة userScripts غير المعرفة ([#1041](https://github.com/scriptscat/scriptcat/issues/1041)) [[4f2deda](https://github.com/scriptscat/scriptcat/commit/4f2deda69aa6aae7f6e791be1cd965a440b80e33)] (by @cyfung1031)
- 🐛 إصلاح المرجع غير الصحيح إلى `"monaco-editor"` في `AppContext` ([#983](https://github.com/scriptscat/scriptcat/issues/983)) [[4b8dae1](https://github.com/scriptscat/scriptcat/commit/4b8dae1f49208d13c4d19c4c627762fc1b04ea5e)] (by @cyfung1031)

**سجل التغييرات الكامل:** [مقارنة v1.2.0...v1.2.1](https://github.com/scriptscat/scriptcat/compare/v1.2.0...v1.2.1)

<a name="1.2.0"></a>

## 1.2.0 (2025-11-29)

يجلب هذا التحديث الشريط الجانبي لقائمة السكرپتات، وعرض البطاقات، ومنطق فحص تحديثات أكثر ودية، وإعدادات المحرر، والمزيد. تم تحسين استقرار الحقن والتشغيل بشكل كبير، مع إصلاح مشكلات حرجة في CSP وsandbox وGM API، بالإضافة إلى تحسينات في الأداء والبنية.

لمزيد من التفاصيل، راجع سجل تغييرات v1.2.0-beta.x ووثائق [v1.2](https://docs.scriptcat.org/docs/change/v1.2/).

### 🚀 الميزات الرئيسية الجديدة

- ✨ الشريط الجانبي لقائمة السكرپتات [#794](https://github.com/scriptscat/scriptcat/issues/794) (by @CodFrm)
- ✨ عرض البطاقات [#860](https://github.com/scriptscat/scriptcat/issues/860) (by @CodFrm)
- ✨ منطق فحص تحديثات أكثر ودية [#755](https://github.com/scriptscat/scriptcat/issues/755) (by @cyfung1031)
- ✨ إضافة إعدادات المحرر وتعريفات أنواع المحرر [#708](https://github.com/scriptscat/scriptcat/pull/708) (by @CodFrm)
- ✨ عرض عدد السكرپتات في النافذة المنبثقة ([#973](https://github.com/scriptscat/scriptcat/issues/973)) [[1134586](https://github.com/scriptscat/scriptcat/commit/1134586ff040ffc0cdddd3538e9ec493950c948a)] (by @cyfung1031)
- ✨ إضافة قائمة تخطيط لإخفاء الشريط الجانبي للكود [#689](https://github.com/scriptscat/scriptcat/issues/689) [[dd64da7](https://github.com/scriptscat/scriptcat/commit/dd64da719c081acbf21645e2b1e1f38653ffae8c)]
- ✨ إضافة زر فحص إصدار SC ([#795](https://github.com/scriptscat/scriptcat/issues/795)) [[1680c66](https://github.com/scriptscat/scriptcat/commit/1680c66099120c0e497c1a1f5321f38fe0160ea0)] (by @cyfung1031)
- ✨ إضافة صفحة استطلاع بعد إلغاء تثبيت الإضافة [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]

### 🧩 تغييرات GM API

- ✨ دعم الحقن في بيئة المحتوى، ويمكن الآن حقن السكرپتات في بيئة المحتوى [#711](https://github.com/scriptscat/scriptcat/issues/711)
- ✨ يدعم GM_openInTab النافذة المثبتة والفتح في نافذة خاصة ومعلمات أخرى [#788](https://github.com/scriptscat/scriptcat/pull/788) (by @cyfung1031)
- ✨ يدعم GM_registerMenuCommand القائمة الفرعية والفاصل [#831](https://github.com/scriptscat/scriptcat/pull/831) (by @cyfung1031)
- 🗑 إزالة خيار useOpen من GM_openInTab [#867](https://github.com/scriptscat/scriptcat/pull/867)
- ♻️ تعديل منطق `@connect` ([#969](https://github.com/scriptscat/scriptcat/issues/969)) [[67914d2](https://github.com/scriptscat/scriptcat/commit/67914d2b7d57fa9c69706ae57ee5d3400c2643f9)] (by @cyfung1031)
- ♻️ إعادة هيكلة `GM_xmlhttpRequest` والكود المرتبط به ([#901](https://github.com/scriptscat/scriptcat/issues/901)) [[fabd2e9](https://github.com/scriptscat/scriptcat/commit/fabd2e944235b460bc73df346b79d23ee4540af7)] (by @cyfung1031)

### أخرى

- ⚡️ تحسينات الاستقرار والأداء
- 🐛 إصلاح مشكلات متنوعة
- ♻️ تحسين بنية الكود
- 🌐 تحسينات i18n

**سجل التغييرات الكامل:** [مقارنة v1.1.2...v1.2.0](https://github.com/scriptscat/scriptcat/compare/v1.1.2...v1.2.0)

<a name="1.1.2"></a>

## 1.1.2 (2025-09-18)

إصلاحات أخطاء

### تم الإصلاح

- 🐛 إصلاح مشكلة sandbox toString [#737](https://github.com/scriptscat/scriptcat/issues/737) [[6ca24c9](https://github.com/scriptscat/scriptcat/commit/6ca24c9b171792035803ac4e1c69e473629f9d18)]
- 🐛 إصلاح مشكلة عرض الشارة 0 [[026c1d2](https://github.com/scriptscat/scriptcat/commit/026c1d2071dd4cfb6291f005d36717bcdf0a51c3)]
- 🐛 إصلاح مشكلة CSP لحقن السكرپتات [#739](https://github.com/scriptscat/scriptcat/issues/739) [#728](https://github.com/scriptscat/scriptcat/issues/728) [[5da21b5](https://github.com/scriptscat/scriptcat/commit/5da21b5e3d0e7e86a1fd5dff57ba03ea641c19fa)]
- 🐛 إصلاح عدم توسع سكرپت الخلفية في صفحة النافذة المنبثقة [[66ab70f](https://github.com/scriptscat/scriptcat/commit/66ab70fb10c28aaf0c9260a9591aab7e1ae35615)]
- 🐛 تعزيز التحقق من أنواع الرسائل [#676](https://github.com/scriptscat/scriptcat/issues/676) [[5073795](https://github.com/scriptscat/scriptcat/commit/50737957507ff9af3aa9ba9a6b7d444b643d1ff2)]
- 🐛 إصلاح مشكلة document في GM xhr [#716](https://github.com/scriptscat/scriptcat/issues/716) [[1c46546](https://github.com/scriptscat/scriptcat/commit/1c465462f4e14ae461d54358710f5caf74208af3)]

<a name="1.1.1"></a>

## 1.1.1 (2025-09-07)

### تمت الإضافة

- ✨ إضافة إعدادات المحرر المخصصة وتعريفات أنواع المحرر ([#708](https://github.com/scriptscat/scriptcat/issues/708)) [[49eb379](https://github.com/scriptscat/scriptcat/commit/49eb3794774790d61c3ef787c865a9ba6fe82841)]

### تم الإصلاح

- 🐛 إصلاح مشكلات التوافق مع الإصدارات القديمة من المتصفحات [#715](https://github.com/scriptscat/scriptcat/issues/715) [[4da8068](https://github.com/scriptscat/scriptcat/commit/4da806879c2b170672814d02e6f8ed98c9fae35b)]
- 💄 تحسين عرض قائمة النافذة المنبثقة عندما تكون صغيرة جدًا ([288650e](https://github.com/scriptscat/scriptcat/commit/288650e5e4cbdc3fa8658f0754ce427a1b3dec5a))
- 🐛 إصلاح مشكلات متعددة ([#710](https://github.com/scriptscat/scriptcat/issues/710)) [[6a2027a](https://github.com/scriptscat/scriptcat/commit/6a2027ac0bb5e0ed625df570240d068a98a34b31)] (by @WhiteSevs)

### متنوع

- 🌐 معالجة مشكلات i18n [[2adf69d](https://github.com/scriptscat/scriptcat/commit/2adf69d6ec3c30186f2c2ef89f97e3cba9e15a66)]

<a name="1.1.0"></a>

## 1.1.0 (2025-09-07)

العديد من إصلاحات الأخطاء وتحسينات التوافق، وإضافة دعم Dropbox، وميزة جديدة @early-start للتحميل أسرع من تحميل الصفحة. لمزيد من التفاصيل، راجع سجل تغييرات v1.1.0-beta.x.

### تمت الإضافة

- ✨ إضافة إعدادات بيئة تشغيل السكرپتات [#628](https://github.com/scriptscat/scriptcat/issues/628) [[0d4a89e](https://github.com/scriptscat/scriptcat/commit/0d4a89efaecf0331dcc7fbb6df006b93a1525846)]
- ✨ الطي افتراضيًا عند عدم وجود سكرپتات في الخلفية [#626](https://github.com/scriptscat/scriptcat/issues/626) ([9d0aac6](https://github.com/scriptscat/scriptcat/commit/9d0aac6aae11b96707ca1f7c024a24e9d55f217b))
- ✨ دعم Dropbox [#575](https://github.com/scriptscat/scriptcat/issues/575) [[2c66f21](https://github.com/scriptscat/scriptcat/commit/2c66f21f5118bd83a0eaa0f1baa3a31f2233e5b2)]
- ✨ تحسين external.Tampermonkey للتحقق من حالة تثبيت SC عندما لا يكون TM مثبتًا ولكن كليهما مفعل ([#703](https://github.com/scriptscat/scriptcat/issues/703)) [[d0115c3](https://github.com/scriptscat/scriptcat/commit/d0115c33657260d803b6091139601b1b20407d4e)] (by @cyfung1031)
- ✨ إضافة @early-start للتحميل أسرع من الصفحة ([#649](https://github.com/scriptscat/scriptcat/issues/649)) [[eb097dd](https://github.com/scriptscat/scriptcat/commit/eb097dd146dcd6f8ca712ed883571dbfb3d09f20)]
- ✨ البحث العام في الكود ([#662](https://github.com/scriptscat/scriptcat/issues/662)) [[f8eafb7](https://github.com/scriptscat/scriptcat/commit/f8eafb7f955dad62c1b41ac477e929bf00c65982)] (by @RenjiYuusei)
- ✨ إضافة صفحة استطلاع بعد إلغاء تثبيت الإضافة [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]
- 📝 تعديل صفحة التثبيت وnamespace ([6f2f000](https://github.com/scriptscat/scriptcat/commit/6f2f000612908b7a88f6b70c2831092805c63bc7))
- ✨ إضافة رمز QR للتثبيت عبر الجوال ([348237c](https://github.com/scriptscat/scriptcat/commit/348237c7ce9771c69025386926b1f73710cf6f42))

### تم الإصلاح

- 🐛 إصلاح مشكلة عدم إمكانية تشغيل التثبيت عندما لا يمكن للشبكة الوصول إلى الصفحة الوسيطة للتثبيت [#705](https://github.com/scriptscat/scriptcat/issues/705) [[5f1e292](https://github.com/scriptscat/scriptcat/commit/5f1e2929d79c470ba4427c3cce01f5cd184a839b)]
- 🐛 معالجة تعبير `@match *://*domain/*` [[039b445](https://github.com/scriptscat/scriptcat/commit/039b4454148947cd3c74de82b87804ee9815e60c)]
- 🐛 إصلاح مشكلة اختراق sandbox في بيئة الإضافة [#700](https://github.com/scriptscat/scriptcat/issues/700) [[a1a868d](https://github.com/scriptscat/scriptcat/commit/a1a868dfe3199e666fe2bcb65cfb2ad0ad3d699b)]
- ✏️ backgroud -&gt; background ([#698](https://github.com/scriptscat/scriptcat/issues/698)) [[2594075](https://github.com/scriptscat/scriptcat/commit/2594075c4a50f4c79fa46bcda08d7b0cbcfe723c)] (by @cyfung1031)
- ✏️ CrhomeStorage -&gt; ChromeStorage ([#693](https://github.com/scriptscat/scriptcat/issues/693)) [[64c536d](https://github.com/scriptscat/scriptcat/commit/64c536dbd5fcb4c29eebc1109202bab69aaa3ee2)] (by @cyfung1031)
- 🐛 إصلاح GM.getTab وGM.getTabs ([#683](https://github.com/scriptscat/scriptcat/issues/683)) [[31de256](https://github.com/scriptscat/scriptcat/commit/31de256f02b5b61e27f0eec9ea673248ba8faa32)] (by @WhiteSevs)
- 🐛 إصلاح النطاق المفقود في finalUrl ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[545d7c8](https://github.com/scriptscat/scriptcat/commit/545d7c8c0dd69c83bd2f0353518aafe6af81c0f4)] (by @cyfung1031)
- 🐛 التوافق مع أنوية المتصفحات الأقدم [#647](https://github.com/scriptscat/scriptcat/issues/647) ([bba12d2](https://github.com/scriptscat/scriptcat/commit/bba12d23f04759cb9b7fdb63f0d95ae515ee94a9))
- 🐛 إصلاح النطاق المفقود في finalUrl ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[3ed018a](https://github.com/scriptscat/scriptcat/commit/3ed018a7a54803fcf2e1791316e0166ed0b52007)] (by @cyfung1031)
- 💚 إصلاح مشكلة lint react/jsx-no-literals [[017b608](https://github.com/scriptscat/scriptcat/commit/017b60886be601e3e0e1719cf249da32d5686c30)]
- 🐛 التوافق مع أنوية المتصفحات الأقدم [#647](https://github.com/scriptscat/scriptcat/issues/647) [[0e2f817](https://github.com/scriptscat/scriptcat/commit/0e2f8173c8b44bd6ad44bdffc73fa302a96a058e)]
- 🐛 تحسين حقن window.external ([#646](https://github.com/scriptscat/scriptcat/issues/646)) [[0b2668a](https://github.com/scriptscat/scriptcat/commit/0b2668aadcab35a33ff9abc4bd030dffb87ea168)] (by @cyfung1031)
- 🐛 إصلاح مشكلة عدم إمكانية إغلاق صفحة مصادقة التخزين السحابي تلقائيًا [[7748088](https://github.com/scriptscat/scriptcat/commit/7748088e63c1fc660b6a6ae5613cf04f9da99b8c)]
- 🐛 إصلاح مشكلة `@connect` \\* التي لا تعمل [#623](https://github.com/scriptscat/scriptcat/issues/623) [[76481c8](https://github.com/scriptscat/scriptcat/commit/76481c845b34414a7f15ed18ec61f7dff7eef091)]
- 🐛 إضافة اختبارات وحدة وإصلاح مشكلة `@exclude` ([#618](https://github.com/scriptscat/scriptcat/issues/618)) [[0046bb7](https://github.com/scriptscat/scriptcat/commit/0046bb78800a2c46edaac785b8e9592327772a3b)] (by @cyfung1031)
- 🐛 إصلاح مشكلة عدم قدرة بعض روابط .user.js على تثبيت السكرپتات [#599](https://github.com/scriptscat/scriptcat/issues/599) [[ccd2639](https://github.com/scriptscat/scriptcat/commit/ccd2639858f0f3cde28f284376fe8ed998d935ae)]
- 🐛 إصلاح فشل إنشاء سكرپتات جديدة [[d42d6e7](https://github.com/scriptscat/scriptcat/commit/d42d6e7d408a84674facf9ab0da6eac0e384502f)]
- 🐛 إصلاح البيانات الوصفية ([#610](https://github.com/scriptscat/scriptcat/issues/610)) [[4d98cce](https://github.com/scriptscat/scriptcat/commit/4d98cce0ca1281cc58f551ea4e6700e340780d3f)] (by @cyfung1031)
- 🐛 إصلاح شارة النافذة المنبثقة ([#605](https://github.com/scriptscat/scriptcat/issues/605)) [[eff9230](https://github.com/scriptscat/scriptcat/commit/eff92309de99abb0cf48ef4727afaa113bc2fbb6)] (by @cyfung1031)
- 🐛 إصلاح ScriptEditor.tsx ([#603](https://github.com/scriptscat/scriptcat/issues/603)) [[a9aadba](https://github.com/scriptscat/scriptcat/commit/a9aadba372b813c16bdc5f0aeb07c68981f48c63)] (by @cyfung1031)
- 🐛 إصلاح CSS لعارض الكود والمحرر ([#602](https://github.com/scriptscat/scriptcat/issues/602)) [[2e86785](https://github.com/scriptscat/scriptcat/commit/2e8678513efaccd42c8dc2aa89f8b76679aa8420)] (by @cyfung1031)
- 🐛 إصلاح مشكلة التزامن في getFaviconFromDomain ([#597](https://github.com/scriptscat/scriptcat/issues/597)) [[1872fe1](https://github.com/scriptscat/scriptcat/commit/1872fe165ab204b155a56f037c111d2d7776c2b9)] (by @cyfung1031)
- 🐛 إصلاح خطأ فتح التبويب في نوافذ متعددة [#586](https://github.com/scriptscat/scriptcat/issues/586) [[54c1da2](https://github.com/scriptscat/scriptcat/commit/54c1da29c2bd8bd8f5ef2d85b7aed8b334de296f)]
- 🐛 إصلاح مشكلة توافق openerTabId ([#586](https://github.com/scriptscat/scriptcat/issues/586)) [[b861fc8](https://github.com/scriptscat/scriptcat/commit/b861fc8620e53b885cad98db03f1dd10ec9d296c)] (by @cyfung1031)

### متنوع

- 📝 إنشاء README_RU.md وCONTRIBUTING_RU.md ([#678](https://github.com/scriptscat/scriptcat/issues/678)) [[597ab03](https://github.com/scriptscat/scriptcat/commit/597ab0378fe5ced01637cf411326ef7845b8ce2b)] (by @Ioann)
- 👷 تعديلات التوافق (توافق pack.js) ([#669](https://github.com/scriptscat/scriptcat/issues/669)) [[fec45e6](https://github.com/scriptscat/scriptcat/commit/fec45e6606a609b10b79c58d2fcba02c2ce71e16)] (by @cyfung1031)
- 🌐 تحسين وتوسيع اللغة الفيتنامية ([#661](https://github.com/scriptscat/scriptcat/issues/661)) [[6847a59](https://github.com/scriptscat/scriptcat/commit/6847a596c4b06c75e13594ef60e4b9dfa5718cf3)] (by @RenjiYuusei)
- 🌐 إصلاحات الترجمة ([#635](https://github.com/scriptscat/scriptcat/issues/635)) [[19296de](https://github.com/scriptscat/scriptcat/commit/19296de6a3815e5965eb33401a55da9b2bd22bb4)] (by @cyfung1031)
- 🌐 إصلاح مشكلة i18n في دليل الإعداد [#627](https://github.com/scriptscat/scriptcat/issues/627) [[9683f96](https://github.com/scriptscat/scriptcat/commit/9683f965400ab6a2bac15349aca4335911766eac)]
- 👷 تحسين كود pack.js ([#615](https://github.com/scriptscat/scriptcat/issues/615)) [[870dd9b](https://github.com/scriptscat/scriptcat/commit/870dd9bc6b7eff3eceefa915452e773ec0565180)] (by @cyfung1031)
