---
title: سجل تغييرات النسخ التجريبية
---

import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="changelog" />

تصدر إصدارات ScriptCat عبر فرعين رئيسيين: الإصدارات المستقرة والإصدارات الأولية (pre-release). لتاريخ الإصدارات المستقرة، يُرجى الاطلاع على: [سجل التغييرات](./index.md)

تُطرح الإصدارات الأولية قبل الإصدار الرسمي المستقر. تُستخدم عادةً لاختبار الميزات الجديدة. تحتوي أرقام الإصدارات الأولية على معرّف إصدار أولي، على سبيل المثال:
`1.0.0-beta.1`.

يمكنك الحصول على الإصدارات الأولية من صفحة [الإصدارات](https://github.com/scriptscat/scriptcat/releases) أو من صفحات متاجر الإضافات أدناه:

- [Chrome](https://chromewebstore.google.com/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/jaehimmlecjmebpekkipmpmbpfhdacom?authuser=0&hl=zh-CN)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/nimmbghgpcjmeniofmpdfkofcedcjpfi)
- [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat-pre/)

بالإضافة إلى ذلك، وبخلاف الإصدارات الأولية، يبني ScriptCat الإضافة على [Github Action](https://github.com/scriptscat/scriptcat/actions/workflows/build.yaml) بعد دمج كل commit في الفرع الرئيسي. إذا كنت تريد تجربة أحدث الميزات أو الإصلاحات، يمكنك تنزيلها من صفحة [Github Action](https://github.com/scriptscat/scriptcat/actions/workflows/build.yaml).

<a name="1.5.0-beta.1"></a>

## 1.5.0-beta.1 (2026-08-06)

تسلط هذه النسخة التجريبية الضوء على ميزتين رئيسيتين — **الوصول الخارجي (جسر MCP)** و**سلة محذوفات السكرپتات** — وتدعم رسميًا Firefox MV3، وتضيف الكورية والتركية والبرتغالية البرازيلية، وتصلح عددًا من مشاكل GM API والمزامنة السحابية والمحرر.

### 🚀 ميزات رئيسية جديدة

- 💥 جديد "الوصول الخارجي (جسر MCP)": برنامج خلفي محلي `sctl` يوحّد الوصول عبر CLI وعملاء MCP؛ كل عملية قراءة/كتابة للسكرپت تخضع لتفويض متدرج وصفحة تأكيد بشري بثلاثة مستويات — رفض / السماح / السماح لهذه الجلسة — ويتم تدقيق كل عملية ([#1573](https://github.com/scriptscat/scriptcat/pull/1573)) (بواسطة @cyfung1031)
- 💥 سلة محذوفات السكرپتات: تذهب السكرپتات المحذوفة إلى السلة أولاً، مع إمكانية الاستعادة (مع الحفاظ على البيانات والأذونات الأصلية)، والحذف الدائم، والتنظيف التلقائي حسب انتهاء المدة؛ فترة الاحتفاظ قابلة للتكوين (افتراضيًا 30 يومًا، أو بدون حذف) ([#1585](https://github.com/scriptscat/scriptcat/pull/1585)) (بواسطة @CodFrm)
- 💥 دعم رسمي لـ Firefox MV3، مع تحسين الاتصال عبر sandbox/offscreen ([#1561](https://github.com/scriptscat/scriptcat/pull/1561)) (بواسطة @cyfung1031)
- ✨ إضافة إجراءات سريعة لنطاق الموقع إلى النافذة المنبثقة ([#1646](https://github.com/scriptscat/scriptcat/pull/1646)) (بواسطة @CodFrm)
- ✨ عدد عناصر قائمة السكرپتات الموسّعة في النافذة المنبثقة أصبح قابلًا للتكوين الآن، بشكل منفصل عن عدد عناصر القائمة الموسّعة ([#1645](https://github.com/scriptscat/scriptcat/pull/1645)) (بواسطة @CodFrm)
- ✨ خدمة الأيقونات تكتسب مستوى "معطّل" لإيقاف جلب favicon تمامًا ([#1637](https://github.com/scriptscat/scriptcat/pull/1637)) (بواسطة @CodFrm)
- ✨ وسوم البيانات الوصفية غير المعرّفة تُظهر الآن تحذيرًا في المحرر ([#1608](https://github.com/scriptscat/scriptcat/pull/1608)) (بواسطة @cyfung1031)
- ✨ اكتمال النسخ الاحتياطي/الاستعادة/الاستيراد: التكوين المخصص والإعدادات الاحتياطية لـ ScriptCat/Tampermonkey/Violentmonkey + إصلاح الموارد ([#1554](https://github.com/scriptscat/scriptcat/pull/1554)) (بواسطة @CodFrm)

### ♻️ إعادة هيكلة وتوافق

- ♻️ إعادة هيكلة العميل على SDK الرسمي لـ MCP ([#1643](https://github.com/scriptscat/scriptcat/pull/1643)) (بواسطة @CodFrm)

### 🐛 إصلاحات الأخطاء

- 🐛 إصلاح إلحاق GM_xmlhttpRequest لملفات تعريف الارتباط المخصصة بدلاً من استبدال ملفات التعريف ذات الاسم نفسه ([#1604](https://github.com/scriptscat/scriptcat/pull/1604)) (بواسطة @cyfung1031)
- 🐛 إصلاح اتساق حالة مزامنة السكرپت ومعالجة التعارضات الآمنة للمزوّد ([#1504](https://github.com/scriptscat/scriptcat/pull/1504)) (بواسطة @cyfung1031)
- 🐛 إصلاح توقف تنظيف سجلات المهام المجدولة عن العمل ([#1599](https://github.com/scriptscat/scriptcat/pull/1599)) (بواسطة @CodFrm)
- 🐛 إصلاح توقيت تشغيل قائمة السياق المفقود في إعدادات السكرپت ([#1652](https://github.com/scriptscat/scriptcat/pull/1652)) (بواسطة @CodFrm)
- 🐛 إصلاح منطق زر الرجوع/إغلاق التبويب في صفحة التثبيت ([#1594](https://github.com/scriptscat/scriptcat/pull/1594)) (بواسطة @cyfung1031)
- 🐛 إصلاح عدم تحديث عنوان تبويب المتصفح بعد إعادة تسمية سكرپت محفوظ ([#1607](https://github.com/scriptscat/scriptcat/pull/1607)) (بواسطة @cyfung1031)
- 🐛 إصلاح سلوك window.focus وتقوية التحقق من windowId ([#1577](https://github.com/scriptscat/scriptcat/pull/1577)) (بواسطة @cyfung1031)
- 🐛 إصلاح إخفاء زر إغلاق التبويب النشط في المحرر [#1556](https://github.com/scriptscat/scriptcat/issues/1556) (بواسطة @CodFrm)
- 🐛 إصلاح حارس التنقل لمحتوى المحرر غير المحفوظ ([#1656](https://github.com/scriptscat/scriptcat/pull/1656)) (بواسطة @CodFrm)
- 🐛 إصلاح صياغة تأكيد حفظ سكرپت بنفس الاسم في سلة المحذوفات ([#1622](https://github.com/scriptscat/scriptcat/pull/1622)) (بواسطة @CodFrm)
- 🐛 selfMetadata يدعم التجاوزات الفارغة: إصلاح match/exclude/tag/run-at "حذف ثم إحياء" ([#1579](https://github.com/scriptscat/scriptcat/pull/1579)) (بواسطة @CodFrm)

### 🎨 تحسينات الواجهة

- 💄 إصلاح تكيّف واجهة Android: ارتفاع إطار العرض الديناميكي + إعادة تدفق الجداول/صفوف الإعدادات/شريط إحصائيات السجل على الشاشات الضيقة ([#1636](https://github.com/scriptscat/scriptcat/pull/1636)) (بواسطة @RenjiYuusei)
- 💄 إضافة خيار تخطيط مضغوط إلى النافذة المنبثقة ([#1551](https://github.com/scriptscat/scriptcat/pull/1551)) (بواسطة @cyfung1031)

### 🌐 التدويل

- 🌐 إضافة ترجمة كورية (ko-KR) ([#1568](https://github.com/scriptscat/scriptcat/pull/1568)) (بواسطة @moduvoice)
- 🌐 إضافة ترجمة تركية (tr-TR) ([#1557](https://github.com/scriptscat/scriptcat/pull/1557)) (بواسطة @azizaktas)
- 🌐 إضافة ترجمة برتغالية برازيلية (pt-BR) ([#1587](https://github.com/scriptscat/scriptcat/pull/1587)) (بواسطة @Lucas559-noob)
- 🌐 إكمال chrome.i18n messages.json ولغات محرر Monaco لـ pt-BR / tr-TR ([#1605](https://github.com/scriptscat/scriptcat/pull/1605)) (بواسطة @CodFrm)

### أخرى

- ⬆️ ترقية التبعيات (بما فيها TypeScript 6.0) وإصلاح تحذيرات pnpm audit ([#1576](https://github.com/scriptscat/scriptcat/pull/1576), [#1567](https://github.com/scriptscat/scriptcat/pull/1567)) (بواسطة @cyfung1031)
- إعدادات مزامنة السكرپت تُحفظ الآن فورًا ([#1615](https://github.com/scriptscat/scriptcat/pull/1615)) (بواسطة @CodFrm)
- 📝 تحسين وصف المتجر وسطر الشعار في README لتحسين قابلية اكتشاف "سكرپت المستخدم" ([#1553](https://github.com/scriptscat/scriptcat/pull/1553)) (بواسطة @CodFrm)

<a name="1.5.0-beta"></a>

## 1.5.0-beta (2026-07-08)

تقدم هذه النسخة التجريبية **واجهة جديدة كليًا** بتصميم أنظف وأكثر اتساقًا وتجربة عامة أكثر سلاسة، بالإضافة إلى تحسينات تصميم مخصصة للجوال حتى يحصل مستخدمو الجوال على تجربة رائعة أيضًا. كما تضيف اختيار نوع السكرپت الجديد في المحرر، ورابط تنزيل يدوي للنسخ الاحتياطية المحلية، والمزيد، مع إصلاح مشاكل المنطقة الزمنية غير الصالحة في المهام المجدولة ومشاكل GM_download الأصلية عبر النطاقات. إذا كانت لديك أي اقتراحات حول الواجهة/التجربة الجديدة، لا تتردد في الانضمام إلى النقاش على [GitHub](https://github.com/scriptscat/scriptcat/discussions).

### 🎨 تحسينات الواجهة

- ♻️ واجهة جديدة كليًا: إعادة كتابة كاملة للواجهة، مع تحسين التكيف مع الجوال لتجربة أفضل على سطح المكتب والجوال معًا ([#1514](https://github.com/scriptscat/scriptcat/pull/1514)) (بواسطة @CodFrm)

### 🚀 ميزات رئيسية جديدة

- ✨ زر "＋" في شريط تبويبات المحرر يدعم الآن اختيار نوع السكرپت الجديد ([#1544](https://github.com/scriptscat/scriptcat/pull/1544)) (بواسطة @cyfung1031)
- ✨ إضافة رابط تنزيل يدوي للنسخ الاحتياطية المحلية ([#1543](https://github.com/scriptscat/scriptcat/pull/1543)) (بواسطة @cyfung1031)
- ✨ تفعيل تسلسل structured_clone لرسائل الإضافة على Chromium 148+ ([#1534](https://github.com/scriptscat/scriptcat/pull/1534)) (بواسطة @cyfung1031)
- ✨ النسخ التجريبية (beta) تفتح صفحة سجل التغييرات تلقائيًا بعد التحديث (بواسطة @CodFrm)

### 🧩 تغييرات GM API

- 🐛 جعل GM_download الأصلي يحترم @connect، مثل GM_xmlhttpRequest ([#1506](https://github.com/scriptscat/scriptcat/pull/1506)) (بواسطة @DudeAint)

### ⚡️ تحسينات الأداء

- ⚡️ تحسين ذاكرة التخزين المؤقت لتحميل السكرپت وإصلاح بقايا عناصر قائمة النافذة المنبثقة ([#1511](https://github.com/scriptscat/scriptcat/pull/1511)) (بواسطة @cyfung1031)

### 🧑‍💻 المحرر

- ♻️ تعديل قواعد `eslint-plugin-userscripts` ([#1510](https://github.com/scriptscat/scriptcat/pull/1510)) (بواسطة @cyfung1031)

### 🐛 إصلاحات الأخطاء

- 🐛 تجنب أخطاء المهام المجدولة الناتجة عن اكتشاف cron التلقائي لمنطقة زمنية غير صالحة ([#1531](https://github.com/scriptscat/scriptcat/pull/1531)) (بواسطة @cyfung1031)
- 🐛 إصلاح واجهة برمجة العرض غير المتاحة في مثال crontab ([#1542](https://github.com/scriptscat/scriptcat/pull/1542)) (بواسطة @cyfung1031)

### 🌐 الترجمة

- 🌐 إضافة اللغة التركية (بواسطة @azizaktas)

<a name="1.4.0-beta.4"></a>

## 1.4.0-beta.4 (2026-06-13)

يصلح هذا الإصدار تخطيط النافذة المنبثقة على Edge Android للجوال، ووميض الخلفية البيضاء أثناء التحميل الأولي، وفشل الطلبات عبر النطاقات عند غياب إذن الوصول إلى الموقع؛ ويرقّع ثغرة تلويث النموذج الأولي (prototype pollution) التي يتم استغلالها عبر مفاتيح YAML غير موثوقة في تكوين المستخدم؛ ويعيد هيكلة تحديث موارد السكرپت ومعالجة ZIP (استبدال jszip بـ JSZipp)؛ ويواصل تحسين توافق Firefox MV3 والترجمة.

### 🧑‍💻 المحرر

- ✨ تحسين الإصلاح السريع في Monaco وتلميحات بيانات السكرپت الوصفية ([#1461](https://github.com/scriptscat/scriptcat/pull/1461)) (بواسطة @cyfung1031)
- 🐛 إصلاح مشاكل تخطيط CSS في المحرر ([#1460](https://github.com/scriptscat/scriptcat/pull/1460)) (بواسطة @cyfung1031)

### 🐛 إصلاحات الأخطاء

- 🐛 إصلاح تخطيط النافذة المنبثقة على Edge Android للجوال ([#686](https://github.com/scriptscat/scriptcat/issues/686)) ([#1507](https://github.com/scriptscat/scriptcat/pull/1507)) (بواسطة @CodFrm)
- 🐛 إصلاح وميض الخلفية البيضاء أثناء التحميل الأولي ([#1497](https://github.com/scriptscat/scriptcat/issues/1497)) ([#1498](https://github.com/scriptscat/scriptcat/pull/1498)) (بواسطة @cyfung1031)
- 🐛 إصلاح فشل الطلبات عبر النطاقات عند غياب إذن الوصول إلى الموقع ([#1477](https://github.com/scriptscat/scriptcat/pull/1477)) (بواسطة @cyfung1031)
- 🐛 إصلاح عدم تنظيف اتصال الرسائل (GM API / port) بشكل صحيح ([#1474](https://github.com/scriptscat/scriptcat/pull/1474)) (بواسطة @cyfung1031)
- 🐛 إصلاح عدم تطابق قالب @match عند غياب البحث ([#1466](https://github.com/scriptscat/scriptcat/pull/1466)) (بواسطة @cyfung1031)
- 🐛 إضافة `protoBaseDescs` لإصلاح وراثة فئة السلف في شبه بيئة Tampermonkey المعزولة ([#1463](https://github.com/scriptscat/scriptcat/pull/1463)) (بواسطة @cyfung1031)

### 🔒 تحسينات الأمان

- 🔒 إصلاح تلوث النموذج الأولي عبر مفاتيح YAML غير موثوقة في تكوين المستخدم ([#1494](https://github.com/scriptscat/scriptcat/pull/1494)) (بواسطة @qdzsh)

### ♻️ إعادة هيكلة وتوافق

- ♻️ إعادة هيكلة تحديث موارد السكرپت (updateResource) والتحكم في التزامن، واستعادة توافق ذاكرة التخزين المؤقت للموارد ([#1193](https://github.com/scriptscat/scriptcat/pull/1193)) (بواسطة @cyfung1031)
- ♻️ استبدال jszip بـ JSZipp لمعالجة ZIP (استيراد/تصدير النسخ الاحتياطية)، وإزالة الاعتماد غير المستخدم على jszip ([#1479](https://github.com/scriptscat/scriptcat/pull/1479)) (بواسطة @cyfung1031)
- ♻️ تحسين توافق Firefox MV3 ([#1457](https://github.com/scriptscat/scriptcat/pull/1457), [#1480](https://github.com/scriptscat/scriptcat/pull/1480)) (بواسطة @cyfung1031)

### 🌐 الترجمة

- 🌐 إصلاح ترجمات المصطلحات متعددة اللغات (خاصة تحسين الصينية التقليدية) وإضافة إرشادات مصطلحات الترجمة ([#1468](https://github.com/scriptscat/scriptcat/pull/1468)) (بواسطة @cyfung1031)

<a name="1.4.0-beta.3"></a>

## 1.4.0-beta.3 (2026-05-19)

استمرارًا للاتجاه الذي بدأ في beta.2، يزيد هذا الإصدار من موثوقية المزامنة السحابية (معالجة أخطاء وتدفقات رفع OneDrive/Google Drive/WebDAV)، ويصلح عددًا من مشاكل معالجة الاستثناءات في ScriptEditor وGM xhr، ويضيف تنسيق Ctrl+Shift+F وعودة دعم `@run-at context-menu`.

### 🚀 ميزات رئيسية جديدة

- ✨ المحرر: Ctrl+Shift+F لتنسيق الكود ([#1415](https://github.com/scriptscat/scriptcat/pull/1415)) (بواسطة @cyfung1031)
- ✨ إعادة دعم `@run-at context-menu` ([#1442](https://github.com/scriptscat/scriptcat/pull/1442)) (بواسطة @cyfung1031)

### ⚡️ تحسينات الأداء

- ⚡️ تحسين معالجة pushValue ([#1403](https://github.com/scriptscat/scriptcat/pull/1403)) (بواسطة @cyfung1031)

### 🐛 إصلاحات الأخطاء

- 🐛 إصلاحات المزامنة السحابية: رفع ملف صفري في OneDrive، وتوحيد أخطاء Google Drive/OneDrive، وmodifiedDate للبيانات الوصفية المخصصة في S3 ([#1405](https://github.com/scriptscat/scriptcat/pull/1405)) ([#1406](https://github.com/scriptscat/scriptcat/pull/1406)) ([#1408](https://github.com/scriptscat/scriptcat/pull/1408)) (بواسطة @cyfung1031)
- 🐛 التحقق من WebDAV: إزالة اختبار الكتابة حتى لا تفشل خدمات مثل Jianguoyun ذات الجذر غير القابل للكتابة في التحقق ([#1445](https://github.com/scriptscat/scriptcat/pull/1445)) (بواسطة @CodFrm)
- 🐛 إصلاح غياب معالجة null لـ `GM_xmlhttpRequest` msgConn ([#1433](https://github.com/scriptscat/scriptcat/pull/1433)) (بواسطة @cyfung1031)
- 🐛 إصلاح معالجة GM xhr غير الصحيحة لـ onloadend غير الطبيعي ([#1412](https://github.com/scriptscat/scriptcat/pull/1412)) (بواسطة @cyfung1031)
- 🐛 إصلاح مشاكل التحديث الديناميكي والعرض لقائمة ScriptEditor ([#1414](https://github.com/scriptscat/scriptcat/pull/1414)) (بواسطة @cyfung1031)
- 🐛 إصلاح مشاكل التفاعل مع إجراءات التحرير في شريط أدوات ScriptEditor ([#1417](https://github.com/scriptscat/scriptcat/pull/1417)) (بواسطة @cyfung1031)
- 🐛 إصلاح كود `chrome.downloads.download` وMock ([#1410](https://github.com/scriptscat/scriptcat/pull/1410)) (بواسطة @cyfung1031)
- 🐛 إصلاح closeWindow في src/pages/install/App.tsx ([#1435](https://github.com/scriptscat/scriptcat/pull/1435)) (بواسطة @cyfung1031)
- 🐛 إضافة حد لحدث العجلة في التخطيط الجذري لمنع التمرير الداخلي من إطلاق تنقل السحب في المتصفح ([#1431](https://github.com/scriptscat/scriptcat/pull/1431)) (بواسطة @cyfung1031)
- 🐛 إزالة تكرار طلبات المصادقة الأولية المتزامنة ([#1437](https://github.com/scriptscat/scriptcat/pull/1437)) (بواسطة @cyfung1031)
- 🐛 إعادة هيكلة encoding.ts لتوحيد وتحسين الكشف ([#1426](https://github.com/scriptscat/scriptcat/pull/1426)) (بواسطة @cyfung1031)
- 🐛 إضافة Tooltip حتى تكون القائمة مرئية ([#1429](https://github.com/scriptscat/scriptcat/pull/1429)) (بواسطة @cyfung1031)
- 🐛 إصلاح overscroll-behavior ([#1413](https://github.com/scriptscat/scriptcat/pull/1413)) (بواسطة @cyfung1031)
- 🐛 إيقاف عرض زر التحديث للسكرپتات التي لا تدعم التحديث ([#1418](https://github.com/scriptscat/scriptcat/pull/1418)) (بواسطة @cyfung1031)
- 🐛 إصلاح مراجع مفاتيح i18n المفقودة ([#1422](https://github.com/scriptscat/scriptcat/pull/1422)) (بواسطة @cyfung1031)
- 🐛 إضافة `frames` إلى createContext في بيئة العزل، لإصلاح [#1427](https://github.com/scriptscat/scriptcat/issues/1427) ([#1428](https://github.com/scriptscat/scriptcat/pull/1428)) (بواسطة @cyfung1031)
- 🐛 إصلاح خطأ ترجمة SkillScript الناتج عن غياب حقل isContextMenu (5fdc8e39) (بواسطة @CodFrm)

### ♻️ إعادة هيكلة وتوافق

- ♻️ نقل موارد التثبيت إلى tempStorage في `chrome.storage.local`؛ الجزء البرمجي موجود في `OPFS/temp_install_codes` ([#1318](https://github.com/scriptscat/scriptcat/pull/1318)) (بواسطة @cyfung1031)
- ♻️ إصلاح الشرطة المزدوجة الناتجة عن منطق دمج المسارات ([#1432](https://github.com/scriptscat/scriptcat/pull/1432)) (بواسطة @tomaioo)

### 🌐 التدويل

- 🌐 تحسين ترجمات الواجهة اليابانية مع إصلاحات مصاحبة للغات أخرى ([#1419](https://github.com/scriptscat/scriptcat/pull/1419)) ([#1421](https://github.com/scriptscat/scriptcat/pull/1421)) (بواسطة @GoodLight999, @cyfung1031)

<a name="1.4.0-beta.2"></a>

## 1.4.0-beta.2 (2026-05-06)

يركز هذا التحديث على **تقوية موثوقية مزامنة التخزين السحابي الشاملة** (إصلاحات المصادقة ومعالجة المسارات وإعادة المحاولة لواجهات Dropbox/WebDAV/Google Drive/OneDrive)، و**تحسينات استقرار استدعاءات أدوات Agent**، وعدد كبير من إصلاحات الأخطاء في الواجهة وبيئة تشغيل السكرپت بما فيها تسرب ذاكرة طويل الأمد.

### ⚡️ تحسينات الأداء

- ⚡️ إزالة اعتماد نظام ملفات Baidu على قواعد DNR العامة؛ تعطيل ملفات تعريف الارتباط لكل طلب بدلاً من ذلك ([#1377](https://github.com/scriptscat/scriptcat/pull/1377)) (بواسطة @cyfung1031)
- ⚡️ تحسين اختيار محرك بحث متعدد المنصات لجلب السكرپتات ([#1379](https://github.com/scriptscat/scriptcat/pull/1379)) (بواسطة @cyfung1031)
- ⚡️ استخدام خط أحادي المسافة لحالة التحميل في صفحة التثبيت لتجنب الاهتزاز ([#1381](https://github.com/scriptscat/scriptcat/pull/1381)) (بواسطة @cyfung1031)
- ⚡️ تقوية موثوقية مطالبات Agent — التحقق من النتائج، دلالات الميزانية، حدود الأمان ([#1354](https://github.com/scriptscat/scriptcat/pull/1354)) (بواسطة @cyfung1031)

### 🐛 إصلاحات الأخطاء

- 🚑 إصلاح تسرب ذاكرة محتمل عند تشغيل ScriptCat لفترة طويلة ([#1401](https://github.com/scriptscat/scriptcat/pull/1401)) (بواسطة @cyfung1031)
- 🐛 تقوية موثوقية المزامنة السحابية عبر الواجهات (مصادقة ومعالجة مسارات ومنطق إعادة محاولة Dropbox/WebDAV/Google Drive/OneDrive) ([#1374](https://github.com/scriptscat/scriptcat/pull/1374)) ([#1375](https://github.com/scriptscat/scriptcat/pull/1375)) ([#1376](https://github.com/scriptscat/scriptcat/pull/1376)) ([#1390](https://github.com/scriptscat/scriptcat/pull/1390)) ([#1391](https://github.com/scriptscat/scriptcat/pull/1391)) ([#1392](https://github.com/scriptscat/scriptcat/pull/1392)) ([#1393](https://github.com/scriptscat/scriptcat/pull/1393)) ([#1394](https://github.com/scriptscat/scriptcat/pull/1394)) ([#1395](https://github.com/scriptscat/scriptcat/pull/1395)) (بواسطة @cyfung1031)
- 🐛 ملء extensionEnv بشكل صحيح بـ isIncognito (بداية مبكرة و bgScript) وuserAgent وrun-in لـ bgScript ([#1368](https://github.com/scriptscat/scriptcat/pull/1368)) (بواسطة @cyfung1031)
- 🐛 إصلاح اقتطاع زر دليل الإعداد [#1396](https://github.com/scriptscat/scriptcat/issues/1396) ([#1398](https://github.com/scriptscat/scriptcat/pull/1398)) (بواسطة @cyfung1031)
- 🐛 إصلاح حجب التلميحات في صفحة إدارة السكرپت [#1386](https://github.com/scriptscat/scriptcat/issues/1386) ([#1387](https://github.com/scriptscat/scriptcat/pull/1387)) (بواسطة @Xdy1579883916)
- 🐛 إصلاح مشاكل حجم التخطيط الناتجة عن الشريط الجانبي في وضع البطاقات [#1179](https://github.com/scriptscat/scriptcat/issues/1179) ([#1373](https://github.com/scriptscat/scriptcat/pull/1373)) (بواسطة @cyfung1031)
- 🐛 إصلاح الأصل غير الصحيح لتثبيتات السحب والإفلات للملفات المحلية ([#1371](https://github.com/scriptscat/scriptcat/pull/1371)) (بواسطة @cyfung1031)
- 🐛 إصلاح رسائل تبديل اللغة ([#1380](https://github.com/scriptscat/scriptcat/pull/1380)) (بواسطة @cyfung1031)
- 🐛 تحسين واجهة عرض السجلات ([#1372](https://github.com/scriptscat/scriptcat/pull/1372)) (بواسطة @cyfung1031)
- 🐛 حل مشاكل عدد قواعد الجلسة مع xhr المتزامن ([#1353](https://github.com/scriptscat/scriptcat/pull/1353)) (بواسطة @cyfung1031)
- 🐛 إصلاح CSS الخاص بـ UserConfigPanel ([#1361](https://github.com/scriptscat/scriptcat/pull/1361)) (بواسطة @cyfung1031)
- 🐛 استخدام Object.create(null) للأشياء الفارغة في create_context ([#1397](https://github.com/scriptscat/scriptcat/pull/1397)) (بواسطة @cyfung1031)
- 🐛 إصلاح أخطاء دمج وسائط tool_call أثناء البث في Agent والتداخل المتوازي بين استدعاءات الأدوات ([#1355](https://github.com/scriptscat/scriptcat/pull/1355)) (بواسطة @cyfung1031)
- 🐛 إصلاح توافق Agent مع نماذج التفكير ([#1357](https://github.com/scriptscat/scriptcat/pull/1357)) (بواسطة @cyfung1031)
- 🐛 إصلاح عدم اتساق عقد web_fetch/web_search في Agent (7bbd6d18) (بواسطة @CodFrm)
- 🐛 إصلاح غياب بيئة الإضافة في بيئة تشغيل سكرپتات Skill في Agent (e143c4a7) (بواسطة @CodFrm)

### 🔒 تحسينات الأمان

- 🔒 إصلاح جميع ثغرات npm ([#1350](https://github.com/scriptscat/scriptcat/pull/1350)) ([#1364](https://github.com/scriptscat/scriptcat/pull/1364)) ([#1365](https://github.com/scriptscat/scriptcat/pull/1365)) (بواسطة @cyfung1031)

### أخرى

- 🔥 إزالة Crowdin ومحتوى اللغة الزائفة ach-UG ([#1385](https://github.com/scriptscat/scriptcat/pull/1385)) (بواسطة @CodFrm)

<a name="1.4.0-beta.1"></a>

## 1.4.0-beta.1 (2026-04-07)

تسليط الضوء في هذا الإصدار هو **ScriptCat AI Agent**، نظام وكيل ذكي مدمج مدعوم بالذكاء الاصطناعي يمكنه استدعاء أدوات من نظام السكرپتات عبر التفاعل المحادثي. يضيف هذا التحديث أيضًا دعم وسم `@unwrap`، وحدث `window.onurlchange`، وتحسينات قائمة المحرر، والعديد من إصلاحات الأخطاء.

### 🚀 ميزات رئيسية جديدة

- 💥 ScriptCat AI Agent — نظام وكيل ذكي مدعوم بالذكاء الاصطناعي مع تفاعل محادثي، واستدعاء أدوات، ونظام Skill، ودعم بروتوكول MCP، والمزيد ([#1324](https://github.com/scriptscat/scriptcat/pull/1324)) (بواسطة @CodFrm)
- ✨ دعم وسم البيانات الوصفية `@unwrap` ([#1213](https://github.com/scriptscat/scriptcat/pull/1213)) (بواسطة @cyfung1031)
- ✨ تنفيذ `window.onurlchange` الخاص بـ TM باستخدام Navigation API ([#1315](https://github.com/scriptscat/scriptcat/pull/1315)) (بواسطة @cyfung1031)

### 🧑‍💻 المحرر

- ✨ إضافة قائمة المحرر (بحث، استبدال، تراجع، إلخ) ([#1303](https://github.com/scriptscat/scriptcat/pull/1303)) (بواسطة @CodFrm)
- 🐛 إصلاح اختصارات Ctrl-F / Ctrl-H ([#1312](https://github.com/scriptscat/scriptcat/pull/1312)) (بواسطة @cyfung1031)
- 🐛 إصلاح عدم عمل الإصلاح التلقائي في ESLint [#1079](https://github.com/scriptscat/scriptcat/issues/1079) ([#1184](https://github.com/scriptscat/scriptcat/pull/1184)) (بواسطة @cyfung1031)
- 🐛 عرض أخطاء التنسيق بشكل صحيح ([#1310](https://github.com/scriptscat/scriptcat/pull/1310)) (بواسطة @cyfung1031)
- 🐛 إصلاح مشاكل تلميحات محرر الكود ([#1301](https://github.com/scriptscat/scriptcat/pull/1301)) (بواسطة @cyfung1031)

### ✨ تحسينات الميزات

- ✨ دعم اختيار محرك بحث متعدد المنصات لبحث السكرپت ([#1295](https://github.com/scriptscat/scriptcat/pull/1295)) (بواسطة @CodFrm)
- ✨ إضافة المزيد من مزودي خدمة الأيقونات ([#1333](https://github.com/scriptscat/scriptcat/pull/1333)) (بواسطة @cyfung1031)
- ✨ إضافة أيقونة فحص التحديث في عمود آخر تحديث في قائمة السكرپتات ([#1304](https://github.com/scriptscat/scriptcat/pull/1304)) (بواسطة @CodFrm)
- ✨ تحسين معالجة تعارضات التحرير وتعارضات أسماء السكرپتات ([#1223](https://github.com/scriptscat/scriptcat/pull/1223)) (بواسطة @cyfung1031)

### 🐛 إصلاحات الأخطاء

- 🐛 إصلاح انهيار الصفحة بالكامل بسبب أخطاء تعبير cron ([#1327](https://github.com/scriptscat/scriptcat/pull/1327)) (بواسطة @cyfung1031)
- 🐛 إصلاح خطأ 406 عند تثبيت السكرپت ([#1306](https://github.com/scriptscat/scriptcat/pull/1306)) (بواسطة @cyfung1031)
- 🐛 إصلاح تعارض مصادقة ملفات تعريف الارتباط في WebDAV ودعم authType ([#1308](https://github.com/scriptscat/scriptcat/pull/1308)) (بواسطة @CodFrm)
- 🐛 استخدام chrome.storage.local للإعدادات الخاصة بالجهاز لتجنب المزامنة بين الأجهزة ([#1309](https://github.com/scriptscat/scriptcat/pull/1309)) (بواسطة @CodFrm)
- 🐛 إصلاح التحديث الصامت لسكرپتات الاشتراك ومنطق إذن الاتصال ([#1201](https://github.com/scriptscat/scriptcat/pull/1201)) (بواسطة @cyfung1031)
- 🐛 إصلاح فشل فحص التحديث الدفعي للسكرپتات بالكامل عند انتهاء مهلة أحد السكرپتات ([#1265](https://github.com/scriptscat/scriptcat/pull/1265)) (بواسطة @cyfung1031)
- 🐛 إصلاح عدم تحديث زر الاستعلام في صفحة السجلات للوقت ([#1294](https://github.com/scriptscat/scriptcat/pull/1294)) (بواسطة @CodFrm)
- 🐛 إصلاح اقتطاع نافذة اختيار التاريخ في صفحة السجلات ([#1292](https://github.com/scriptscat/scriptcat/pull/1292)) (بواسطة @cyfung1031)
- 🐛 إصلاح ظهور زر إلغاء الربط عند عدم ربط أي قرص سحابي ([#1291](https://github.com/scriptscat/scriptcat/pull/1291)) (بواسطة @CodFrm)
- 🐛 إصلاح مشكلة عرض قائمة سكرپتات ScriptEditor في السمة الفاتحة ([#1288](https://github.com/scriptscat/scriptcat/pull/1288)) (بواسطة @CodFrm)
- 🐛 إصلاح حجب النافذة المنبثقة ([#1290](https://github.com/scriptscat/scriptcat/pull/1290)) (بواسطة @cyfung1031)

## 1.4.0-beta (2026-03-13)

### 🐛 إصلاحات الأخطاء

- 🚑 إصلاح خطأ اكتشاف البيئة الناتج عن حقن إضافات أخرى لـ chrome.runtime [#1280](https://github.com/scriptscat/scriptcat/issues/1280) ([#1281](https://github.com/scriptscat/scriptcat/pull/1281)) (بواسطة @CodFrm)
- 🐛 إصلاح وتحسين مشاكل ScriptEditor ([#1258](https://github.com/scriptscat/scriptcat/pull/1258)) (بواسطة @cyfung1031)
- 🐛 إصلاح إعادة التشغيل المتكررة الناتجة عن تعارض فحص إذن النافذة الخاصة (6c308f60) (بواسطة @CodFrm)
- 🐛 إصلاح مشاكل صفحة التأكيد ([#1275](https://github.com/scriptscat/scriptcat/pull/1275)) (بواسطة @cyfung1031)
- 🐛 إصلاح مشكلة معالجة تعبير include *?* [#1271](https://github.com/scriptscat/scriptcat/issues/1271) ([#1272](https://github.com/scriptscat/scriptcat/pull/1272)) (بواسطة @CodFrm)
- 🐛 إصلاح عدم عمل عنصر إدارة الأذونات في إعدادات السكرپت ([#1267](https://github.com/scriptscat/scriptcat/pull/1267)) (بواسطة @CodFrm)

### 🔒 تحسينات الأمان

- 🔒 استخدام DOMPurify لتنقية محتوى HTML لإشعارات الإعلانات ([#1274](https://github.com/scriptscat/scriptcat/pull/1274)) (بواسطة @CodFrm)

### أخرى

- ✅ إضافة اختبارات E2E بـ Playwright واختبارات وظيفية لـ GM API ([#1283](https://github.com/scriptscat/scriptcat/pull/1283)) (بواسطة @CodFrm)
- 📄 docs: تحديث روابط Chrome Web Store إلى النطاق الجديد ([#1279](https://github.com/scriptscat/scriptcat/pull/1279)) (بواسطة @theluckystrike)

## 1.3.0-beta.4 (2026-02-19)

### تمت الإضافة

- ✨ إضافة تخزين Amazon S3 [#1146](https://github.com/scriptscat/scriptcat/issues/1146) ([#1189](https://github.com/scriptscat/scriptcat/pull/1189)) (بواسطة @CodFrm)
- ✨ تعديل موضع الشريط الجانبي المخفي للمحرر [#1185](https://github.com/scriptscat/scriptcat/issues/1185) ([#1254](https://github.com/scriptscat/scriptcat/pull/1254)) (بواسطة @CodFrm)
- ✨ قبول `@version` بقيمة مفقودة أو فارغة ([#1216](https://github.com/scriptscat/scriptcat/pull/1216)) (بواسطة @cyfung1031)

### تم الإصلاح

- 🐛 إصلاح مشكلة فتح صفحة إشعار سجل التغييرات ([#1266](https://github.com/scriptscat/scriptcat/pull/1266)) (بواسطة @CodFrm)
- 🐛 إصلاح عدم تنفيذ إلغاء التسجيل بشكل صحيح ([#1231](https://github.com/scriptscat/scriptcat/pull/1231)) (بواسطة @cyfung1031)
- 🐛 إصلاح مشكلة GM_addElement، ونقل العملية إلى بيئة المحتوى ([#1233](https://github.com/scriptscat/scriptcat/pull/1233)) (بواسطة @cyfung1031)
- 🐛 إعادة هيكلة DraggableEntry، وإصلاح محاذاة ارتفاع البطاقات ([#1245](https://github.com/scriptscat/scriptcat/pull/1245)) (بواسطة @cyfung1031)
- 🐛 إصلاح مشكلة تبعية محتوى النافذة المنبثقة لتمرير الشاشة ([#1263](https://github.com/scriptscat/scriptcat/pull/1263)) (بواسطة @cyfung1031) ([#1259](https://github.com/scriptscat/scriptcat/pull/1259)) (بواسطة @cyfung1031)
- 🐛 إصلاح تسرب الذاكرة وكشف خصائص الكائن، وعودة تحليل XML لـ TTP إلى null ([#1242](https://github.com/scriptscat/scriptcat/pull/1242)) (بواسطة @cyfung1031) ([#1260](https://github.com/scriptscat/scriptcat/pull/1260)) (بواسطة @cyfung1031)
- 🐛 إضافة معامل `conflictAction` إلى `GM_download` ([#1250](https://github.com/scriptscat/scriptcat/pull/1250)) (بواسطة @cyfung1031)
- 🐛 إصلاح فشل تحليل رابط التثبيت [#1235](https://github.com/scriptscat/scriptcat/issues/1235) ([#1238](https://github.com/scriptscat/scriptcat/pull/1238)) (بواسطة @cyfung1031)
- 🐛 إصلاح تأخر مكوّن السحب في focusin/focusout [#1224](https://github.com/scriptscat/scriptcat/issues/1224) ([#1243](https://github.com/scriptscat/scriptcat/pull/1243)) (بواسطة @CodFrm)
- 🐛 إصلاح الأجزاء المتعلقة بأصل subscribeUrl في installScript ([#1218](https://github.com/scriptscat/scriptcat/pull/1218)) (بواسطة @cyfung1031)
- 🐛 إصلاح مشكلة حركة ScriptCard ([#1234](https://github.com/scriptscat/scriptcat/pull/1234)) (بواسطة @cyfung1031)
- 🐛 إصلاح hide_sidebar إلى show_main_sidebar و hide_main_sidebar ([#1225](https://github.com/scriptscat/scriptcat/pull/1225)) (بواسطة @cyfung1031)
- 🐛 إصلاح عدم عمل API الإضافات الخارجية ([#1217](https://github.com/scriptscat/scriptcat/pull/1217)) (بواسطة @cyfung1031)
- 🐛 إصلاح عدم دعم اسم ملف التنزيل للمجلدات ([#1203](https://github.com/scriptscat/scriptcat/pull/1203)) (بواسطة @cyfung1031)

<a name="1.3.0-beta.3"></a>

## 1.3.0-beta.3 (2026-02-07)

### تمت الإضافة

- ✨ تعديلات متعلقة بـ Cron: إصلاحات أخطاء، وi18n، وتحسينات تعبير once، وترقية مكتبة cron ([#1126](https://github.com/scriptscat/scriptcat/issues/1126)) (بواسطة @cyfung1031)

### تم التغيير

- ♻️ إعادة هيكلة آلية الاتصال: اعتماد بث storage.local + متوافق مع برمجة Firefox MV3 + MessageFlag ديناميكي غير قابل للتتبع ([#1067](https://github.com/scriptscat/scriptcat/issues/1067)) (بواسطة @cyfung1031)
- ⚡ تحسين فك تشفير النص ([#1166](https://github.com/scriptscat/scriptcat/issues/1166)) (بواسطة @cyfung1031)
- 🎨 تعديلات برمجية (بسيطة) - موقع متغير `isContent` ([#1171](https://github.com/scriptscat/scriptcat/issues/1171)) (بواسطة @cyfung1031)
- 🎨 تعديلات برمجية - أسماء الفئات والمتغيرات المتعلقة بالقيم ([#1175](https://github.com/scriptscat/scriptcat/issues/1175)) (بواسطة @cyfung1031)
- 🎨 تعديلات برمجية (بسيطة) - ScriptClient ([#1172](https://github.com/scriptscat/scriptcat/issues/1172)) (بواسطة @cyfung1031)
- 🎨 (TypeScript) مراجعة اسم فئة مخصصة: File -> FileInfo ([#1174](https://github.com/scriptscat/scriptcat/issues/1174)) (بواسطة @cyfung1031)
- ⬆️ إصلاح `jsc.target` لـ rspack إلى es2020 / ترقية نسخة النواة ([#1186](https://github.com/scriptscat/scriptcat/issues/1186)) (بواسطة @cyfung1031)
- 🎨 تحسين اكتشاف مجموعة الأحرف ([#1140](https://github.com/scriptscat/scriptcat/issues/1140)) (بواسطة @cyfung1031)
- 🎨 تحديث وقت عرض النافذة المنبثقة ([#1155](https://github.com/scriptscat/scriptcat/issues/1155)) (بواسطة @cyfung1031)
- 🎨 تصحيحات بسيطة في locales.ts ([#1154](https://github.com/scriptscat/scriptcat/issues/1154)) (بواسطة @cyfung1031)
- 🎨 شعار 128x128 ([#1176](https://github.com/scriptscat/scriptcat/issues/1176)) (بواسطة @cyfung1031)
- 🎨 معالجة الصور ([#1177](https://github.com/scriptscat/scriptcat/issues/1177)) (بواسطة @cyfung1031)

### تمت الإزالة

- 🔥 package.json: إزالة pako ([#1188](https://github.com/scriptscat/scriptcat/issues/1188)) (بواسطة @cyfung1031)

### تم الإصلاح

- 🐛 معالجة مشاكل ترميز السكرپت [#1115](https://github.com/scriptscat/scriptcat/issues/1115) ([#1138](https://github.com/scriptscat/scriptcat/issues/1138)) (بواسطة @CodFrm)
- 🐛 معالجة مشاكل مراجع القيم [#1141](https://github.com/scriptscat/scriptcat/issues/1141) ([#1147](https://github.com/scriptscat/scriptcat/issues/1147)) (بواسطة @CodFrm)
- 🐛 إصلاح منطق عرض الأزرار، وتجنب الآثار الجانبية في مرحلة العرض، واستخدام عرض JSX الشرطي والفتحات المسماة ([#1153](https://github.com/scriptscat/scriptcat/issues/1153)) (بواسطة @cyfung1031)
- 🐛 إصلاح مشكلة عدم قدرة FileSystemObserver على المراقبة المستمرة ([#1160](https://github.com/scriptscat/scriptcat/issues/1160)) (بواسطة @cyfung1031)
- 🐛 إصلاح: توافق TM مع `@match www.website.com/*` ([#1165](https://github.com/scriptscat/scriptcat/issues/1165)) (بواسطة @cyfung1031)
- 🐛 إصلاح التعريفات غير المتزامنة لـ GM API، وإرجاع Promise بشكل صحيح ([#1169](https://github.com/scriptscat/scriptcat/issues/1169)) (بواسطة @cyfung1031)
- 🐛 إصلاح مشكلة غياب UserAgentData في content.js ([#1183](https://github.com/scriptscat/scriptcat/issues/1183)) (بواسطة @cyfung1031)
- 🐛 إصلاح خطأ structuredClone في 1.2.5 ([#1192](https://github.com/scriptscat/scriptcat/issues/1192)) (بواسطة @cyfung1031)
- 🐛 إصلاح التعديل 9343f2d6e49aec78d208d0e3ba3d96ec2a4d5a1c ([#1195](https://github.com/scriptscat/scriptcat/issues/1195)) (بواسطة @cyfung1031)
- 🐛 إصلاح مشاكل grant ([#1199](https://github.com/scriptscat/scriptcat/issues/1199)) (بواسطة @CodFrm)

<a name="1.3.0-beta.2"></a>

## 1.3.0-beta.2 (2026-01-07)

### تمت الإضافة

- ✨ الحذف المتزامن أصبح معطلاً افتراضيًا ([#958](https://github.com/scriptscat/scriptcat/issues/958)) [[9c4c7dc](https://github.com/scriptscat/scriptcat/commit/9c4c7dc411357746db43a306d97ac41a71f2b49c)] (بواسطة @cyfung1031)
- ✨ المحرر يدعم الآن GM.\* ([#1129](https://github.com/scriptscat/scriptcat/issues/1129)) [[bea0192](https://github.com/scriptscat/scriptcat/commit/bea0192c6cc50eff2ed4e1cc5dcc25f36bbe10e7)] (بواسطة @cyfung1031)

### تم التغيير

- ♻️ تحسين منطق فتح صفحة سجل التغييرات [#1110](https://github.com/scriptscat/scriptcat/issues/1110) [[d3ffedc](https://github.com/scriptscat/scriptcat/commit/d3ffedcffe752ca548f87f1640072fcd871b8604)] (بواسطة @CodFrm)

### تم الإصلاح

- 🐛 إصلاح عرض أيقونة السكرپت [#1052](https://github.com/scriptscat/scriptcat/issues/1052) ([#1104](https://github.com/scriptscat/scriptcat/issues/1104)) [[2e5c601](https://github.com/scriptscat/scriptcat/commit/2e5c601274fa27aa67b49ef9d352e3a1c3975979)] (بواسطة @CodFrm)
- 🐛 إصلاح scriptcat.d.tpl وتصحيحات الأنواع ([#1130](https://github.com/scriptscat/scriptcat/issues/1130)) [[dd22ef5](https://github.com/scriptscat/scriptcat/commit/dd22ef544684d69e24a7aae098cb05cbab03daa8)] (بواسطة @cyfung1031)
- 🐛 إصلاح مشاكل المزامنة السحابية ([#1133](https://github.com/scriptscat/scriptcat/issues/1133)) [[a9383d2](https://github.com/scriptscat/scriptcat/commit/a9383d2012eb3953dc33c8886ce3891f404fa100)] (بواسطة @CodFrm)
- 🐛 إصلاح خطأ `GM_addElement("tagName")` ([#1120](https://github.com/scriptscat/scriptcat/issues/1120)) [[ad19de5](https://github.com/scriptscat/scriptcat/commit/ad19de5c1793c8c079bedbf1b11c7c2ae27a469e)] (بواسطة @cyfung1031)
- 🐛 إزالة منطق التنظيف وتحسين منطق checkuserscript ([#1113](https://github.com/scriptscat/scriptcat/issues/1113)) [[e635911](https://github.com/scriptscat/scriptcat/commit/e635911a3c11c3cb8acd1cfd507cb777e5ee7236)] (بواسطة @CodFrm)

### متفرقات

- 🏷️ مراجعات TypeScript ([#1127](https://github.com/scriptscat/scriptcat/issues/1127)) [[b455724](https://github.com/scriptscat/scriptcat/commit/b4557244191018c18d5ce8ea8e8627bcfb7f7cdd)] (بواسطة @cyfung1031)
- 📝 تعليقات أمثلة إضافية ([#1131](https://github.com/scriptscat/scriptcat/issues/1131)) [[292549e](https://github.com/scriptscat/scriptcat/commit/292549ed0f65952fe9f269aace23eefc7d6a3a0f)] (بواسطة @cyfung1031)

<a name="1.3.0-beta.1"></a>

## 1.3.0-beta.1 (2025-12-21)

### تمت الإضافة

- ✨ تحسين إعدادات محرر Monaco، وإضافة إصلاح `/* global xxx */` ([#1012](https://github.com/scriptscat/scriptcat/issues/1012)) [[b1a738d](https://github.com/scriptscat/scriptcat/commit/b1a738d98b5e852993da322d56dbfa20f68d20e3)] (بواسطة @cyfung1031)

### تم التغيير

- ⚡ نقل البيانات الوصفية خارج chrome.storage.session ([#1027](https://github.com/scriptscat/scriptcat/issues/1027)) [[9c81f6c](https://github.com/scriptscat/scriptcat/commit/9c81f6c42b087411669adef35df30714e184ee93)] (بواسطة @cyfung1031)
- ⚡ تحسين عرض وقت التشغيل التالي [#1093](https://github.com/scriptscat/scriptcat/issues/1093) [[324ce51](https://github.com/scriptscat/scriptcat/commit/324ce515c84699ca8d3bf1ee447fc6ef0656ae0d)] (بواسطة @CodFrm)

### تم الإصلاح

- 🐛 إصلاح مشاكل النافذة المنبثقة ([#1100](https://github.com/scriptscat/scriptcat/issues/1100)) [[9c67e4a](https://github.com/scriptscat/scriptcat/commit/9c67e4a2c609f8c1ef82c493bb1ed68da6396d2e)] (بواسطة @CodFrm)
- 🐛 إصلاح خطأ النوع [[f5a73c7](https://github.com/scriptscat/scriptcat/commit/f5a73c71649621e519b32630ae7717411732aa50)] (بواسطة @CodFrm)
- 🐛 إصلاح مشكلة احتواء السجل الإنجليزي على حرف بعرض كامل ([#1095](https://github.com/scriptscat/scriptcat/issues/1095)) [[a68b100](https://github.com/scriptscat/scriptcat/commit/a68b10048cb01a8e26fe8d524102bfb23ed4e179)] (بواسطة @cyfung1031)
- 🐛 إضافة بادئة UnoCSS لحل تعارضات CSS، وإصلاح تخطيط CSS ([#1013](https://github.com/scriptscat/scriptcat/issues/1013)) [[723e64c](https://github.com/scriptscat/scriptcat/commit/723e64cc0c23763dfed322e907c0a960c4f9060e)] (بواسطة @cyfung1031)
- 🐛 إصلاح مشكلة المطابقة المبكرة لرابط السكرپت ([#1096](https://github.com/scriptscat/scriptcat/issues/1096)) [[a77effb](https://github.com/scriptscat/scriptcat/commit/a77effbab5ab4d1752065ef943d9c050ff99c066)] (بواسطة @CodFrm)
- 🐛 إصلاح مشكلة عرض نافذة التحديث المنبثقة لفترة قصيرة جدًا ([#1088](https://github.com/scriptscat/scriptcat/issues/1088)) [[b2b2d5c](https://github.com/scriptscat/scriptcat/commit/b2b2d5c41ff70ee5430f7d8d156f480ac8fc3a1a)] (بواسطة @cyfung1031)
- 🐛 إصلاح مشكلة العرض غير الطبيعي عند تفعيل إشعارات سكرپت المستخدم ([#1086](https://github.com/scriptscat/scriptcat/issues/1086)) ([959c4db](https://github.com/scriptscat/scriptcat/commit/959c4dbed92f7bfe22a2f8ebb775c4189b5ff076))
- 🐛 responseHeaders: `توافق TM: \r\n` ([#1085](https://github.com/scriptscat/scriptcat/issues/1085)) [[15232c8](https://github.com/scriptscat/scriptcat/commit/15232c8543d93abfdafa1353d39d8a15d1dc385f)] (بواسطة @cyfung1031)
- 🐛 إصلاح مشاكل GM xhr ([#1082](https://github.com/scriptscat/scriptcat/issues/1082)) [[3d987c3](https://github.com/scriptscat/scriptcat/commit/3d987c300242a3c765146359c35ecd6d998f792c)] (بواسطة @CodFrm)
- 🐛 إصلاح مشكلة المزامنة الخلفية المتكررة ([#1076](https://github.com/scriptscat/scriptcat/issues/1076)) [[45dc39b](https://github.com/scriptscat/scriptcat/commit/45dc39baa0f3326cf12e97312ab632dc46ba40f2)] (بواسطة @CodFrm)
- 🐛 إصلاح مشكلة معالجة التبويبات الخاصة [#1066](https://github.com/scriptscat/scriptcat/issues/1066) ([50904fb](https://github.com/scriptscat/scriptcat/commit/50904fb46efdea10fd57677bc2d28c770b47e861))
- 🐛 إصلاح معالجة السكرپتات بدون قواعد match [#1071](https://github.com/scriptscat/scriptcat/issues/1071) ([560cdc0](https://github.com/scriptscat/scriptcat/commit/560cdc01fc0fc27fb7d0e3b877c63ba431206668))
- 🐛 إصلاح مشكلة التغليف في CI التي أزالت الأذونات الاختيارية للخلفية [[1f002f0](https://github.com/scriptscat/scriptcat/commit/1f002f0edf9892f023ae93b8522ff7c5e4a96559)] (بواسطة @CodFrm)
- 🐛 إصلاح تجاهل التبويب المهمل ([#1058](https://github.com/scriptscat/scriptcat/issues/1058)) [[6165bf4](https://github.com/scriptscat/scriptcat/commit/6165bf48eb1d53ede0561c85c30135446c2ff882)] (بواسطة @cyfung1031)

<a name="1.3.0-beta"></a>

## 1.3.0-beta (2025-12-13)

### تمت الإضافة

- ✨ منطق تثبيت سكرپت جديد ([#842](https://github.com/scriptscat/scriptcat/issues/842)) ([80d342e](https://github.com/scriptscat/scriptcat/commit/80d342e80c9c1b36f88b7dcd4c65c663bb1d9185))
- ✨ تدويل تلميحات محرر monaco وإضافة تلميح `@require-css` ([#960](https://github.com/scriptscat/scriptcat/issues/960)) [[51a6f94](https://github.com/scriptscat/scriptcat/commit/51a6f94be3a430691f73057eae61a3814560a5b3)] (بواسطة @cyfung1031)
- ✨ إصلاح التحقق من تعارض `@grant`، وإضافة تحذير لإعلان البيانات الوصفية المكرر ([#902](https://github.com/scriptscat/scriptcat/issues/902)) [[8fbd0f1](https://github.com/scriptscat/scriptcat/commit/8fbd0f1041f5c5dcdb5a515348a5f54934acfdc7)] (بواسطة @cyfung1031)
- ✨ قالب مسبق `@noframes` لمنع المبتدئين من الوقوع في الأخطاء ([#900](https://github.com/scriptscat/scriptcat/issues/900)) [[c9d5840](https://github.com/scriptscat/scriptcat/commit/c9d584066ff2395112b9a930aaa409cda764a5e6)] (بواسطة @cyfung1031)
- ✨ منع سوء تقدير رابط تثبيت السكرپت كتثبيت بدلاً من تحديث عند تغيير اسم السكرپت ([#824](https://github.com/scriptscat/scriptcat/issues/824)) [[5c7a5dd](https://github.com/scriptscat/scriptcat/commit/5c7a5ddc81e3bd1dd0a71cc80460a5239178c1de)] (بواسطة @cyfung1031)
- ✨ خيارات run-at للسكرپت ([#895](https://github.com/scriptscat/scriptcat/issues/895)) [[b0ea187](https://github.com/scriptscat/scriptcat/commit/b0ea187c2e6d69b60c981aa9b4d068fed7c2c2a2)] (بواسطة @CodFrm)
- ✨ عرض أيقونة رمادية عند تعطيل وظيفة السكرپت [#897](https://github.com/scriptscat/scriptcat/issues/897) ([3e406dc](https://github.com/scriptscat/scriptcat/commit/3e406dc4562adf7d7f3b79b52623b87e87ef1ad3))
- ✨ تحسين منطق تفاعل القائمة عندما يكون عدد العناصر القابلة للتوسيع 0 [#868](https://github.com/scriptscat/scriptcat/issues/868) ([da24ac2](https://github.com/scriptscat/scriptcat/commit/da24ac234f0eeae0159dce6c2b346d06fb72eaa5))

### تم التغيير

- 🎨 إصلاح مرجع Typography ([#984](https://github.com/scriptscat/scriptcat/issues/984)) [[a70400c](https://github.com/scriptscat/scriptcat/commit/a70400cdca8a5b64cffaca85017513d4e5e7171c)] (بواسطة @cyfung1031)
- ♻️ توافق Firefox: GM_setClipboard ([#928](https://github.com/scriptscat/scriptcat/issues/928)) [[d1a5cb1](https://github.com/scriptscat/scriptcat/commit/d1a5cb19dc4e05fac838258d15c48cc6f876d416)] (بواسطة @cyfung1031)
- ♻️ تعديل واجهات userScripts / scripting، وتعزيز التوافق (إعادة [#704](https://github.com/scriptscat/scriptcat/issues/704)) ([#925](https://github.com/scriptscat/scriptcat/issues/925)) [[43bc40f](https://github.com/scriptscat/scriptcat/commit/43bc40ff5da5ef36a13564504293f1928138cf12)] (بواسطة @cyfung1031)
- ♻️ إعادة هيكلة وتحسين تحميل أيقونة السكرپت ([#893](https://github.com/scriptscat/scriptcat/issues/893)) ([ab36c86](https://github.com/scriptscat/scriptcat/commit/ab36c86b5d031b88e71fbf9151696a42acba86fa))
- ⚡ تحسين كود parseMetadata ([#903](https://github.com/scriptscat/scriptcat/issues/903)) [[0efc648](https://github.com/scriptscat/scriptcat/commit/0efc648257f74591765869dedee5d98f8a1dc610)] (بواسطة @cyfung1031)
- 🎨 تغيير عرض رقم أيقونة الإضافة الافتراضي إلى عدد السكرپتات [#989](https://github.com/scriptscat/scriptcat/issues/989) [[70f67b6](https://github.com/scriptscat/scriptcat/commit/70f67b6bd8cf803d7a18bf26fdccdfa6f8a92893)] (بواسطة @CodFrm)
- 🐛 الاستيراد والتصدير - إصلاح مشكلة عدم اتباع تاريخ التعديل الأخير للسكرپت ([#951](https://github.com/scriptscat/scriptcat/issues/951)) ([6e7272f](https://github.com/scriptscat/scriptcat/commit/6e7272f52ef2d49d9fceb3e30babfee1cbd72e75))
- 🎨 تعديل sourceURL لتسهيل التصحيح ([#987](https://github.com/scriptscat/scriptcat/issues/987)) [[ed741e7](https://github.com/scriptscat/scriptcat/commit/ed741e7d0188fa5e95eae87bcd3a28e82ee008e1)] (بواسطة @cyfung1031)
- ⬆️ تحديثات إصدارات الحزم ([#922](https://github.com/scriptscat/scriptcat/issues/922)) [[9b1df8d](https://github.com/scriptscat/scriptcat/commit/9b1df8dda794e5e95ecc12cef37ed66712ae561e)] (بواسطة @cyfung1031)
- ⚡ تعديلات عامة متعلقة بالقيم ([#949](https://github.com/scriptscat/scriptcat/issues/949)) [[b258fb2](https://github.com/scriptscat/scriptcat/commit/b258fb2c73d790f7f277a9a31d07e2931a7d680d)] (بواسطة @cyfung1031)
- ⚡ توحيد URL.createObjectURL، وتوافق Firefox ([#929](https://github.com/scriptscat/scriptcat/issues/929)) [[54ad4de](https://github.com/scriptscat/scriptcat/commit/54ad4de48b81170b90283fb6ce3b4d6e7c908cdf)] (بواسطة @cyfung1031)
- ⚡ تخزين الأيقونات بناءً على الرابط لتجنب تخزين عدة سكرپتات لنفس الأيقونة ([#909](https://github.com/scriptscat/scriptcat/issues/909)) [[c6e8efb](https://github.com/scriptscat/scriptcat/commit/c6e8efbe8d11719034a9aaa3fd871519025671ff)] (بواسطة @cyfung1031)
- ♻️ تعديل كود updateIcon ([#908](https://github.com/scriptscat/scriptcat/issues/908)) [[642e3b9](https://github.com/scriptscat/scriptcat/commit/642e3b9e57f01f2b008990cc7cb1461f5dccd256)] (بواسطة @cyfung1031)

### تم الإصلاح

- 🐛 مسح Alarm الحالي عند اختيار فحوصات تحديث غير منتظمة للسكرپت ([#996](https://github.com/scriptscat/scriptcat/issues/996)) [[8bb9a2d](https://github.com/scriptscat/scriptcat/commit/8bb9a2d5741acb7d547e743c7bef8a2139f1401a)] (بواسطة @cyfung1031)
- 🐛 إزالة المسافة البيضاء الإضافية أعلى صفحة النسخ الاحتياطي ([#995](https://github.com/scriptscat/scriptcat/issues/995)) ([9c149ce](https://github.com/scriptscat/scriptcat/commit/9c149ce5999b7a70375a41c6604c8e8dbd19e9df))
- ✨ التثبيت دون الاعتماد على الوصول إلى مواقع خارجية + تعديل تخطيط صفحة التثبيت ([#842](https://github.com/scriptscat/scriptcat/issues/842)) ([80d342e](https://github.com/scriptscat/scriptcat/commit/80d342e80c9c1b36f88b7dcd4c65c663bb1d9185))
- 🐛 إضافة بادئة UnoCSS لحل تعارضات CSS، وإصلاح تخطيط CSS ([#1013](https://github.com/scriptscat/scriptcat/issues/1013)) [[723e64c](https://github.com/scriptscat/scriptcat/commit/723e64cc0c23763dfed322e907c0a960c4f9060e)] (بواسطة @cyfung1031)
- 🐛 تحسين systemconfig وإصلاح مشاكل i18n في SW ([#976](https://github.com/scriptscat/scriptcat/issues/976)) [[c50fcf7](https://github.com/scriptscat/scriptcat/commit/c50fcf7770df633462c2f25f8cf22d302002ec57)] (بواسطة @CodFrm)
- 🐛 إصلاح أخطاء الأنواع ([#975](https://github.com/scriptscat/scriptcat/issues/975)) [[7d85856](https://github.com/scriptscat/scriptcat/commit/7d8585687c71cde1c2793d742abb7c22d9d358f0)] (بواسطة @cyfung1031)

<a name="1.2.0-beta.5"></a>

## 1.2.0-beta.5 (2025-11-17)

### تمت الإضافة

- ✨ عرض عدد السكرپتات في النافذة المنبثقة ([#973](https://github.com/scriptscat/scriptcat/issues/973)) [[1134586](https://github.com/scriptscat/scriptcat/commit/1134586ff040ffc0cdddd3538e9ec493950c948a)] (بواسطة @cyfung1031)

### تم التغيير

- ⚡ معالجة `check_script_update_cycle` ([#906](https://github.com/scriptscat/scriptcat/issues/906)) [[760562f](https://github.com/scriptscat/scriptcat/commit/760562f92ad64bc538873b2ca61dfafe067c3f6e)] (بواسطة @cyfung1031)
- ♻️ تنظيم inject و content، وتعديل نقل معلومات pageLoad ([#952](https://github.com/scriptscat/scriptcat/issues/952)) [[0554159](https://github.com/scriptscat/scriptcat/commit/0554159c105606192d48e1153194e09314d43bc9)] (بواسطة @cyfung1031)
- 🎨 تبسيط messageFlag، والمراجعة وفقًا لمعايير تسمية الأحداث ([#926](https://github.com/scriptscat/scriptcat/issues/926)) [[d725d85](https://github.com/scriptscat/scriptcat/commit/d725d85a2f4917c08f6d3daa035a45fd15d12451)] (بواسطة @cyfung1031)
- ♻️ إعادة هيكلة `GM_xmlhttpRequest` والكود المرتبط بها ([#901](https://github.com/scriptscat/scriptcat/issues/901)) [[fabd2e9](https://github.com/scriptscat/scriptcat/commit/fabd2e944235b460bc73df346b79d23ee4540af7)] (بواسطة @cyfung1031)
- ⚡ تحسين بسيط لـ toCamelCase ([#930](https://github.com/scriptscat/scriptcat/issues/930)) [[88d8bdf](https://github.com/scriptscat/scriptcat/commit/88d8bdfc726f1a4ed63bd3cf81ebad88426273e8)] (بواسطة @cyfung1031)

### تم الإصلاح

- 🐛 إصلاح بيئة العزل التالفة ([#966](https://github.com/scriptscat/scriptcat/issues/966)) [[dd80386](https://github.com/scriptscat/scriptcat/commit/dd8038666481d1319dd0f8ab80f79f1b13c1730d)] (بواسطة @cyfung1031)
- 🐛 إصلاح `valueChangeListener.clear` غير المعرّف في setInvalidContext ([#970](https://github.com/scriptscat/scriptcat/issues/970)) [[2a399e9](https://github.com/scriptscat/scriptcat/commit/2a399e96a1e848f2f569566479b48dcee280f543)] (بواسطة @cyfung1031)
- 🐛 تعديل منطق `@connect` ([#969](https://github.com/scriptscat/scriptcat/issues/969)) [[67914d2](https://github.com/scriptscat/scriptcat/commit/67914d2b7d57fa9c69706ae57ee5d3400c2643f9)] (بواسطة @cyfung1031)
- 🐛 إصلاح معالجة i18n في خدمة العامل [#956](https://github.com/scriptscat/scriptcat/issues/956) [[843e618](https://github.com/scriptscat/scriptcat/commit/843e618daf13ec659cc16759c5de13dacf23c534)] (بواسطة @CodFrm)
- 🐛 إصلاح مشكلة تنفيذ deleteValue/deleteValues ([#943](https://github.com/scriptscat/scriptcat/issues/943)) [[3d92bfb](https://github.com/scriptscat/scriptcat/commit/3d92bfb4a0334ffd2c279a1e6d33e98eed0a1a81)] (بواسطة @cyfung1031)
- 🐛 إصلاح عدم القدرة على تثبيت السكرپتات عبر رابط GitHub ([#877](https://github.com/scriptscat/scriptcat/issues/877)) [[b9268e7](https://github.com/scriptscat/scriptcat/commit/b9268e7207081fcaa4591c9e1385f98446ade04a)] (بواسطة @cyfung1031)
- 🐛 إصلاح عدم تأثير `@connect *` ([#967](https://github.com/scriptscat/scriptcat/issues/967)) [[6bcb93c](https://github.com/scriptscat/scriptcat/commit/6bcb93c20c9690a2ce4f50d0978948e20ba407b8)] (بواسطة @cyfung1031)

### متفرقات

- 🌐 تحديثات الترجمة ([#920](https://github.com/scriptscat/scriptcat/issues/920)) [[ede013b](https://github.com/scriptscat/scriptcat/commit/ede013b8e725ddefa626e3e432cbaee756535259)] (بواسطة @cyfung1031)

<a name="1.2.0-beta.4"></a>

## 1.2.0-beta.4 (2025-11-07)

### تمت الإضافة

- ✨ دليل وضع البطاقات ([#894](https://github.com/scriptscat/scriptcat/issues/894)) [[0627a0f](https://github.com/scriptscat/scriptcat/commit/0627a0faacf3a41645e985ec6f6960568427d5a4)] (بواسطة @CodFrm)

### تم التغيير

- ♻️ إعادة هيكلة تنفيذ EarlyStart ([#882](https://github.com/scriptscat/scriptcat/issues/882)) [[cca11e0](https://github.com/scriptscat/scriptcat/commit/cca11e02b98de285423b04ec0d95eab995cee378)] (بواسطة @CodFrm)
- 💄 ضبط تخطيط عرض البطاقات بدقة ([#872](https://github.com/scriptscat/scriptcat/issues/872)) [[5aa21b8](https://github.com/scriptscat/scriptcat/commit/5aa21b88bf423d5d03f7df70b654249bac4b7a88)] (بواسطة @Coxxs)

### تم الإصلاح

- 🐛 إصلاح الخطأ الناتج عن غياب فاصلة منقوطة بين `@require` [#917](https://github.com/scriptscat/scriptcat/issues/917) ([#921](https://github.com/scriptscat/scriptcat/issues/921)) [[2769a24](https://github.com/scriptscat/scriptcat/commit/2769a24e129da79926816886fe42bbc4d9a97875)] (بواسطة @cyfung1031)
- 🐛 إصلاح مشكلة استثناء صفحة فحص التحديث ([#912](https://github.com/scriptscat/scriptcat/issues/912)) [[12272e1](https://github.com/scriptscat/scriptcat/commit/12272e1ad4787cc6768f2f157d272faff5782f37)] (بواسطة @cyfung1031)
- 🐛 إصلاح عدم عمل GM_openInTab في سكرپتات الخلفية [#873](https://github.com/scriptscat/scriptcat/issues/873) [[a526664](https://github.com/scriptscat/scriptcat/commit/a52666429710e150d81cac33af5511401b697355)] (بواسطة @CodFrm)
- 🐛 إصلاح مشكلة حالة تحميل قائمة الجداول [#874](https://github.com/scriptscat/scriptcat/issues/874) [[0b53cb0](https://github.com/scriptscat/scriptcat/commit/0b53cb07cf1ca1d3e42b15fd9c104c83031502d5)] (بواسطة @CodFrm)
- 🐛 إصلاح فشل حقن السكرپت بعد إزالة `@early-start` ([#871](https://github.com/scriptscat/scriptcat/issues/871)) [[426e878](https://github.com/scriptscat/scriptcat/commit/426e8788d9b934ee96cf5ec22b432a08681a9e8c)] (بواسطة @cyfung1031)

<a name="1.2.0-beta.3"></a>

## 1.2.0-beta.3 (2025-10-23)

### تمت الإضافة

- ✨ عرض البطاقات ([#860](https://github.com/scriptscat/scriptcat/issues/860)) [[c9f2350](https://github.com/scriptscat/scriptcat/commit/c9f23509648a41b06f82e79da2bc1fc05a783e06)] (بواسطة @CodFrm)

### تم التغيير

- ♻️ تعديل كود Null ([#852](https://github.com/scriptscat/scriptcat/issues/852)) [[fa1031d](https://github.com/scriptscat/scriptcat/commit/fa1031df9c3e8bc2550f429e7cf8d1c3869a1ea3)] (بواسطة @cyfung1031)
- ♻️ تعديل كود GMApiRequest، وإصلاح كود GM_log، وإصلاح حكم @connect ([#849](https://github.com/scriptscat/scriptcat/issues/849)) [[ee4a8b2](https://github.com/scriptscat/scriptcat/commit/ee4a8b28715fb48fa627f5231c8dc30e55c006ed)] (بواسطة @cyfung1031)

### تمت الإزالة

- 🔥 إزالة `GM_openInTab({ useOpen: true })` ([#867](https://github.com/scriptscat/scriptcat/issues/867)) [[aa61335](https://github.com/scriptscat/scriptcat/commit/aa613354c7b7c84d461000ed0362cf9916c8aa39)] (بواسطة @cyfung1031)

### تم الإصلاح

- 🐛 توافق checkUserScriptsAvailable مع Vivaldi ([#859](https://github.com/scriptscat/scriptcat/issues/859)) [[014d62d](https://github.com/scriptscat/scriptcat/commit/014d62de6b731bfda82babf5db5aa5ae909908f1)] (بواسطة @cyfung1031)
- 🚑 إصلاح حرج: عدم استيفاء Promise في GM.delete/setValue ([#865](https://github.com/scriptscat/scriptcat/issues/865)) [[43572a3](https://github.com/scriptscat/scriptcat/commit/43572a3110b8b083f840b472a231400223da7751)] (بواسطة @cyfung1031)
- 🐛 إصلاح مشكلة fetch في GM xhr [#847](https://github.com/scriptscat/scriptcat/issues/847) [[c6e95c2](https://github.com/scriptscat/scriptcat/commit/c6e95c210748d091ff9f610f3801eaa055d9d6de)]

### متفرقات

- 📝 إضافة تعليق `@compatible` إلى monaco-editor ([#853](https://github.com/scriptscat/scriptcat/issues/853)) [[752b951](https://github.com/scriptscat/scriptcat/commit/752b95122ab324df358e45ec468194cc8466f8bb)] (بواسطة @cyfung1031)
- 🌐 إضافة ترجمة subscribe_source_tooltip [#850](https://github.com/scriptscat/scriptcat/issues/850) [[8d675bd](https://github.com/scriptscat/scriptcat/commit/8d675bd5398d403dfc8e7ee2016fbaffd821da64)]

<a name="1.2.0-beta.2"></a>

## 1.2.0-beta.2 (2025-10-15)

تحسين منطق تحديث السكرپت، وإضافة شريط جانبي لقائمة السكرپتات، وتعزيز وظائف GM_registerMenuCommand و GM_openInTab، وإصلاح العديد من الأخطاء

### تمت الإضافة

- ✨ آلية إشعار تحديث موحدة ([#755](https://github.com/scriptscat/scriptcat/issues/755)) ([741b0bd](https://github.com/scriptscat/scriptcat/commit/741b0bd2ec2f75a7e84c62fbe02654ce6bc41543))
- ✨ قائمة من المستوى الثاني وفاصل في GM_registerMenuCommand ([#831](https://github.com/scriptscat/scriptcat/issues/831)) [[bd08959](https://github.com/scriptscat/scriptcat/commit/bd089595c922aa63af0fb6d41fa9f6dc2587e096)] (بواسطة @cyfung1031)
- ✨ إضافة معاملات إلى GM_openInTab ([#788](https://github.com/scriptscat/scriptcat/issues/788)) [[eb33d61](https://github.com/scriptscat/scriptcat/commit/eb33d613473815b12017e34f46ed9eb292a9dcba)] (بواسطة @cyfung1031)
- ✨ إضافة زر فحص إصدار SC ([#795](https://github.com/scriptscat/scriptcat/issues/795)) [[1680c66](https://github.com/scriptscat/scriptcat/commit/1680c66099120c0e497c1a1f5321f38fe0160ea0)] (بواسطة @cyfung1031)
- ✨ إضافة وظيفة التصفية والوسم في الشريط الجانبي لقائمة السكرپتات ([#794](https://github.com/scriptscat/scriptcat/issues/794)) [[6aabf59](https://github.com/scriptscat/scriptcat/commit/6aabf594cd62fa7358ba34c1c69060dc9e24919c)]
- ✨ استخدام window.showOpenFilePicker لفتح الملفات مما يتيح مراقبة الملفات المحلية [#749](https://github.com/scriptscat/scriptcat/issues/749) [[7dcfbf1](https://github.com/scriptscat/scriptcat/commit/7dcfbf1309fff28c3d806d4ccb36bd0ef51050f5)]

### تم التغيير

- ♻️ فصل منطق الترحيل بين indexeddb و chrome.storage ([#844](https://github.com/scriptscat/scriptcat/issues/844)) [[b8389fb](https://github.com/scriptscat/scriptcat/commit/b8389fbc21932dbbe9394b576fbd8605a3b820c8)]
- ♻️ إصلاح registerMenuCommand و unregisterMenuCommand ([#826](https://github.com/scriptscat/scriptcat/issues/826)) [[3ecde9e](https://github.com/scriptscat/scriptcat/commit/3ecde9e0125089744c2d81f759b043deb5440be6)] (بواسطة @cyfung1031)
- ⚡ تحسين تحميل بدء التشغيل في Runtime ([#775](https://github.com/scriptscat/scriptcat/issues/775)) [[3e69401](https://github.com/scriptscat/scriptcat/commit/3e69401feb98bd789a85dbda7d9e690f71bae696)] (بواسطة @cyfung1031)

### تم الإصلاح

- 🐛 مراجعة تصميم الكود المتعلق بـ `GM_registerMenuCommand` ([#790](https://github.com/scriptscat/scriptcat/issues/790)) ([a71cfe4](https://github.com/scriptscat/scriptcat/commit/a71cfe496fcb2457109dd97742a795585860a6d7))
- 🐛 معالجة تنظيف بيانات النافذة المنبثقة [#784](https://github.com/scriptscat/scriptcat/issues/784) [[7bd9b16](https://github.com/scriptscat/scriptcat/commit/7bd9b162b178a534a8be31aca210af2106f110b7)]
- 🐛 إصلاح مشكلة تنزيل CAT_fileStorage [#829](https://github.com/scriptscat/scriptcat/issues/829) [[81d4e49](https://github.com/scriptscat/scriptcat/commit/81d4e496df8abd3715348fe979758a63311b54c3)]
- 🐛 إصلاح مشكلة ترتيب مجموعات userconfig [#818](https://github.com/scriptscat/scriptcat/issues/818) [[74881c0](https://github.com/scriptscat/scriptcat/commit/74881c0a05d599ad13300c3c69b33b01a5a7b552)]
- 🐛 إصلاح مشاكل توافق ومعالجة بيانات مصدر التثبيت [[574b3c6](https://github.com/scriptscat/scriptcat/commit/574b3c6506a21e1b8ebd891fd91fcd8b19774b96)]
- 🐛 إصلاح مشكلة مزامنة حالة سكرپت الخلفية في النافذة المنبثقة [#838](https://github.com/scriptscat/scriptcat/issues/838) ([edd13c6](https://github.com/scriptscat/scriptcat/commit/edd13c65c9643dece7c38665f58146c9e59c802c))
- 🐛 إصلاح عدم الاتساق بين قائمة السياق وقائمة السكرپت [#768](https://github.com/scriptscat/scriptcat/issues/768) ([191ffcd](https://github.com/scriptscat/scriptcat/commit/191ffcd1e55d842acabbc44fdf1f1098f0b0093d))
- 🐛 إصلاح خطأ الاستيراد اليدوي للملفات المحلية [#745](https://github.com/scriptscat/scriptcat/issues/745) ([fe14991](https://github.com/scriptscat/scriptcat/commit/fe149914e6eef99761ca44681abd95919613adb3))
- 🐛 إصلاح خطأ الاستيراد اليدوي للملفات المحلية [#745](https://github.com/scriptscat/scriptcat/issues/745) ([52950a2](https://github.com/scriptscat/scriptcat/commit/52950a2ad04c79aecaa530a6eb615e9c54bba884))
- 🐛 دعم التعرف على ملفات \*.user.js المحلية [#812](https://github.com/scriptscat/scriptcat/issues/812) [[cec8ffc](https://github.com/scriptscat/scriptcat/commit/cec8ffc5f6947a54b7a59365928a1ccf47b336a2)]
- 🐛 إصلاح عدم قدرة سكرپت البدء المبكر على استخدام GM_addElement [#801](https://github.com/scriptscat/scriptcat/issues/801) [[4d17645](https://github.com/scriptscat/scriptcat/commit/4d17645c0659d8ecd283473cbdd88b6eda065758)]
- 🐛 إصلاح مشكلة GM_info.scriptMetaStr في السكرپت المبكر [#801](https://github.com/scriptscat/scriptcat/issues/801) [[a9a4333](https://github.com/scriptscat/scriptcat/commit/a9a433393ceb259aecc4fe9c1d32a0c9a8333160)]
- 🐛 توثيق كتلة البيانات الوصفية وإصلاحات بسيطة للكود ([#832](https://github.com/scriptscat/scriptcat/issues/832)) [[c40822b](https://github.com/scriptscat/scriptcat/commit/c40822b293f1283d420797a0cbe549153541f3c8)] (بواسطة @cyfung1031)
- 🐛 تجنب تفعيل تحديث menuCommand بعد إزالة التبويب ([#828](https://github.com/scriptscat/scriptcat/issues/828)) [[c64f6d9](https://github.com/scriptscat/scriptcat/commit/c64f6d9a4e087f7788f5b160b91c2b808161e58e)] (بواسطة @cyfung1031)
- 🐛 إصلاح مشكلة Modali18n ([#825](https://github.com/scriptscat/scriptcat/issues/825)) [[03da1ba](https://github.com/scriptscat/scriptcat/commit/03da1ba07c0fd212627bf3c18dbb3afa6affed78)] (بواسطة @cyfung1031)
- 🐛 إصلاح مشكلة i18n في Modal.confirm [#821](https://github.com/scriptscat/scriptcat/issues/821) [[b3c30f5](https://github.com/scriptscat/scriptcat/commit/b3c30f55db8b37ccbfa7278b83af21159c72f2cb)]
- ✏️ &quot;minetype&quot; يجب أن تكون &quot;mimetype&quot; في نوع المعامل ([#823](https://github.com/scriptscat/scriptcat/issues/823)) [[fb3d132](https://github.com/scriptscat/scriptcat/commit/fb3d132ece659cb18082e383dfb925a5cc242c4c)] (بواسطة @cyfung1031)
- 🐛 إحباط العمليات وتحرير الموارد عند حدوث خطأ سياق الإضافة غير الصالح ([#800](https://github.com/scriptscat/scriptcat/issues/800)) [[c110e74](https://github.com/scriptscat/scriptcat/commit/c110e746336e63fc1266bb4cacc056e126d919e0)] (بواسطة @cyfung1031)
- 🐛 إصلاح مشكلة إعادة جلب التحديثات في صفحة batchUpdate + عدم التحديث بعد التثبيت ([#803](https://github.com/scriptscat/scriptcat/issues/803)) [[73f1f32](https://github.com/scriptscat/scriptcat/commit/73f1f329388c07588f2a532b71e5318bf3a92392)] (بواسطة @cyfung1031)
- 🐛 تعديل jsconfig الافتراضي [#813](https://github.com/scriptscat/scriptcat/issues/813) [[06f0e1c](https://github.com/scriptscat/scriptcat/commit/06f0e1c7f0974b954d7ab546ce86f22f830dc28f)]
- 🐛 مشكلة عرض الواجهة ([#806](https://github.com/scriptscat/scriptcat/issues/806)) [[5c75c8b](https://github.com/scriptscat/scriptcat/commit/5c75c8b8e8fc92fcd830db094b34a7ad16fb4c9f)] (بواسطة @cyfung1031)
- 🐛 كتم تحذيرات unicode الغامضة [#747](https://github.com/scriptscat/scriptcat/issues/747) [[5e7c077](https://github.com/scriptscat/scriptcat/commit/5e7c077ef250e1b8eef5662bc416b82d62927b52)]
- 🐛 عدم تحديث أسماء وأعمدة قائمة السكرپتات ومحتواها بعد تبديل اللغة ([#792](https://github.com/scriptscat/scriptcat/issues/792)) [[3ad58b8](https://github.com/scriptscat/scriptcat/commit/3ad58b82bf1d4955cddd3e50b570c601f7e90143)] (بواسطة @cyfung1031)
- 🐛 إصلاح chrome.tabs.query ([#786](https://github.com/scriptscat/scriptcat/issues/786)) [[de607fd](https://github.com/scriptscat/scriptcat/commit/de607fd8eca841748a3e422fe5e84f84f84619d5)] (بواسطة @cyfung1031)
- 🐛 [إصلاح واجهة] حل مشكلة useCallback ([#769](https://github.com/scriptscat/scriptcat/issues/769)) [[511de96](https://github.com/scriptscat/scriptcat/commit/511de96d2b271142244f9874f87bb23ec75f626a)] (بواسطة @cyfung1031)
- 🐛 إضافة إذن الخلفية لإصلاح مشكلة عدم القدرة على التشغيل في الخلفية [#762](https://github.com/scriptscat/scriptcat/issues/762) [[4205837](https://github.com/scriptscat/scriptcat/commit/42058379ab6d0e29003cc1f63d5df48dbe601f4e)]
- 🐛 إصلاح عدم قدرة GM_download على تنزيل الملفات ذات الأحرف غير القانونية في اسم الملف ([#758](https://github.com/scriptscat/scriptcat/issues/758)) [[2518722](https://github.com/scriptscat/scriptcat/commit/2518722c8bc14b9f52e8720624dd835b1fbdfb1b)] (بواسطة @WhiteSevs)
- 🐛 إصلاح مشكلة toString في بيئة العزل [#737](https://github.com/scriptscat/scriptcat/issues/737) [[6ca24c9](https://github.com/scriptscat/scriptcat/commit/6ca24c9b171792035803ac4e1c69e473629f9d18)]
- 🐛 إصلاح مشكلة عرض الشارة 0 [[026c1d2](https://github.com/scriptscat/scriptcat/commit/026c1d2071dd4cfb6291f005d36717bcdf0a51c3)]
- 🐛 إصلاح مشكلة CSP في حقن السكرپت [#739](https://github.com/scriptscat/scriptcat/issues/739) [#728](https://github.com/scriptscat/scriptcat/issues/728) [[5da21b5](https://github.com/scriptscat/scriptcat/commit/5da21b5e3d0e7e86a1fd5dff57ba03ea641c19fa)]

### متفرقات

- 📝 إصلاحات تعليقات TypeScript ([#839](https://github.com/scriptscat/scriptcat/issues/839)) [[6b575ca](https://github.com/scriptscat/scriptcat/commit/6b575cac4841bdf86de70e4b0e702e342a00ca76)] (بواسطة @cyfung1031)
- 🌐 معالجة مشاكل الترجمة للإشعارات والأخطاء، وإضافة التحقق من تعارض `@grant` ([#819](https://github.com/scriptscat/scriptcat/issues/819)) [[ef3482d](https://github.com/scriptscat/scriptcat/commit/ef3482d2c6406927a72835067f66a28cdb0f3b79)] (بواسطة @cyfung1031)
- 🌐 معالجة i18n لـ &quot;لا يوجد محتوى رسالة&quot; ([#811](https://github.com/scriptscat/scriptcat/issues/811)) [[f9486d6](https://github.com/scriptscat/scriptcat/commit/f9486d6e53d68c085625ac370dc717daf8af232e)] (بواسطة @cyfung1031)
- 🌐 تعديل واجهة عرض تنسيق المصدر ([#783](https://github.com/scriptscat/scriptcat/issues/783)) [[9242b95](https://github.com/scriptscat/scriptcat/commit/9242b957cf5f90f6d186a0b1f07bfce8d6ed1cd7)] (بواسطة @cyfung1031)
- 🌐 ترجمة updatepage ([#777](https://github.com/scriptscat/scriptcat/issues/777)) [[757c954](https://github.com/scriptscat/scriptcat/commit/757c954768be8fc94e05200822a23efef5e6bc01)] (بواسطة @cyfung1031)
- 🌐 تحديث translation.json ([#746](https://github.com/scriptscat/scriptcat/issues/746)) [[85b48e2](https://github.com/scriptscat/scriptcat/commit/85b48e2982e0c81f82622528a3aa600c3c88ce8d)] (بواسطة @cyfung1031)

<a name="1.2.0-beta.1"></a>

## 1.2.0-beta.1 (2025-09-18)

### تمت الإضافة

- ✨ إضافة قائمة تخطيط لإخفاء الشريط الجانبي [#689](https://github.com/scriptscat/scriptcat/issues/689) [[dd64da7](https://github.com/scriptscat/scriptcat/commit/dd64da719c081acbf21645e2b1e1f38653ffae8c)]
- ✨ تنفيذ الحقن داخل ([#711](https://github.com/scriptscat/scriptcat/issues/711)) [[4c708c2](https://github.com/scriptscat/scriptcat/commit/4c708c2c5a0f7cea6daa2f32f51e182a4f83c50c)]
- ✨ : إضافة اختصار لتفعيل زر شريط الأدوات لـ Firefox mv3 ([#718](https://github.com/scriptscat/scriptcat/issues/718)) [[06a9040](https://github.com/scriptscat/scriptcat/commit/06a904046034aad59564ea07d8ec441f4def5278)] (بواسطة @xymoryn)

### تم التغيير

- ⚡ تحسين إعادة عرض النافذة المنبثقة المسببة لمشكلة الانهيار بعد النقر على زر تشغيل سكرپت الخلفية [[d83ad0d](https://github.com/scriptscat/scriptcat/commit/d83ad0dda600db59adf70f9db2304381db7ab80f)]
- ⚡ تحسين قائمة السكرپتات، وتقليل إعادة العرض [[610fba0](https://github.com/scriptscat/scriptcat/commit/610fba08bbac5c01791aac756eed60a75bc1d483)]
- ♻️ تعزيز فحص مهام سكرپت الخلفية، وتقليل الأخطاء [#714](https://github.com/scriptscat/scriptcat/issues/714) [[3850af2](https://github.com/scriptscat/scriptcat/commit/3850af22abefced1f2ec6c773c92599a18bb0f8a)]
- 🐛 إصلاح عدم توسع سكرپتات الخلفية في النافذة المنبثقة ([66ab70f](https://github.com/scriptscat/scriptcat/commit/66ab70fb10c28aaf0c9260a9591aab7e1ae35615))
- ✨ النافذة المنبثقة لا تُغلق تلقائيًا بعد استبعاد المواقع [#725](https://github.com/scriptscat/scriptcat/issues/725) ([e432210](https://github.com/scriptscat/scriptcat/commit/e43221051d52d7394a579442519e99d258df872a))
- ♻️ تحسين ReduxStore وآلية البث ([#729](https://github.com/scriptscat/scriptcat/issues/729)) [[b62781e](https://github.com/scriptscat/scriptcat/commit/b62781e11f0f4771094e42cb3479a70b8134cdf6)] (بواسطة @cyfung1031)
- ⚡ تحسين كود React.forwardRef ([#734](https://github.com/scriptscat/scriptcat/issues/734)) [[a7faa48](https://github.com/scriptscat/scriptcat/commit/a7faa48f9a4615318104fa5d501184a4faec73cd)] (بواسطة @cyfung1031)
- ♻️ إعادة هيكلة وتحسين systemConfig [[3acd3f3](https://github.com/scriptscat/scriptcat/commit/3acd3f3890031a7e90bd57eb63320007164ed4ff)]

### تم الإصلاح

- 🐛 إصلاح خطأ تحديث الحالة [[94fd65b](https://github.com/scriptscat/scriptcat/commit/94fd65bfb765a9511e0efb2dc6fb2bfd216e570f)]
- ✏️ إصلاح خطأ إملائي ([#738](https://github.com/scriptscat/scriptcat/issues/738)) ([4e55c06](https://github.com/scriptscat/scriptcat/commit/4e55c06212336bd3356e6d1ead3b75cf97f3b9d8))
- 🐛 إصلاح مشكلة عرض الشارة 0 ([6edad14](https://github.com/scriptscat/scriptcat/commit/6edad1491820665fad8cd6ee5c85e93c57aa0d42))
- 🐛 تعزيز فحص أنواع الرسائل [#676](https://github.com/scriptscat/scriptcat/issues/676) ([5073795](https://github.com/scriptscat/scriptcat/commit/50737957507ff9af3aa9ba9a6b7d444b643d1ff2))
- 🐛 إصلاح مشكلة toString في بيئة العزل [#737](https://github.com/scriptscat/scriptcat/issues/737) [[a4cefbc](https://github.com/scriptscat/scriptcat/commit/a4cefbc791fc2c2e53f3e934e0e4725023f49f72)]
- ✏️ إصلاح خطأ إملائي [[35b6f58](https://github.com/scriptscat/scriptcat/commit/35b6f581c6421a6db001eebadaa8ae216f5b8575)]
- 🐛 إصلاح مشكلة مستند GM xhr [#716](https://github.com/scriptscat/scriptcat/issues/716) [[1c46546](https://github.com/scriptscat/scriptcat/commit/1c465462f4e14ae461d54358710f5caf74208af3)]

<a name="1.2.0-beta"></a>

## 1.2.0-beta (2025-09-07)

### تمت الإضافة

- ✨ إضافة تكوين محرر مخصص وتعريفات أنواع المحرر ([#708](https://github.com/scriptscat/scriptcat/issues/708)) [[49eb379](https://github.com/scriptscat/scriptcat/commit/49eb3794774790d61c3ef787c865a9ba6fe82841)]
- ✨ إضافة صفحة استبيان إلغاء التثبيت [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]
- 📝 تعديل صفحة فتح التثبيت وnamespace ([6f2f000](https://github.com/scriptscat/scriptcat/commit/6f2f000612908b7a88f6b70c2831092805c63bc7))
- ✨ إضافة رمز QR لتثبيت الجوال ([348237c](https://github.com/scriptscat/scriptcat/commit/348237c7ce9771c69025386926b1f73710cf6f42))

### تم الإصلاح

- 🐛 إصلاح مشاكل توافق إصدارات المتصفح الأقدم [#715](https://github.com/scriptscat/scriptcat/issues/715) [[4da8068](https://github.com/scriptscat/scriptcat/commit/4da806879c2b170672814d02e6f8ed98c9fae35b)]
- 💄 تحسين عرض قائمة النافذة المنبثقة عندما تكون النافذة صغيرة جدًا ([288650e](https://github.com/scriptscat/scriptcat/commit/288650e5e4cbdc3fa8658f0754ce427a1b3dec5a))
- 🐛 إصلاح مشاكل N ([#710](https://github.com/scriptscat/scriptcat/issues/710)) [[6a2027a](https://github.com/scriptscat/scriptcat/commit/6a2027ac0bb5e0ed625df570240d068a98a34b31)] (بواسطة @WhiteSevs)
- 🐛 إصلاح مشكلة فقدان الترويسات في إعادة توجيه GM XHR [#664](https://github.com/scriptscat/scriptcat/issues/664) close [#664](https://github.com/scriptscat/scriptcat/issues/664) [[1f29e69](https://github.com/scriptscat/scriptcat/commit/1f29e699ded25ec5270844c1fb54001b5bbf5038)]

### متفرقات

- 🌐 معالجة مشاكل i18n [[2adf69d](https://github.com/scriptscat/scriptcat/commit/2adf69d6ec3c30186f2c2ef89f97e3cba9e15a66)]
- 🌐 معالجة مشاكل الترجمة [[55223dd](https://github.com/scriptscat/scriptcat/commit/55223dde8c545e974d19dd8126756aaae407e1fd)]

<a name="1.1.0-beta.2"></a>

## 1.1.0-beta.2 (2025-09-03)

إضافة دعم Dropbox، وتحسينات في التوافق، وإضافة @early-start للتحميل أسرع من الصفحة

### تمت الإضافة

- ✨ إضافة إعدادات بيئة تشغيل السكرپت [#628](https://github.com/scriptscat/scriptcat/issues/628) [[0d4a89e](https://github.com/scriptscat/scriptcat/commit/0d4a89efaecf0331dcc7fbb6df006b93a1525846)]
- ✨ الطي افتراضيًا عند عدم وجود سكرپتات خلفية [#626](https://github.com/scriptscat/scriptcat/issues/626) ([9d0aac6](https://github.com/scriptscat/scriptcat/commit/9d0aac6aae11b96707ca1f7c024a24e9d55f217b))
- ✨ دعم Dropbox [#575](https://github.com/scriptscat/scriptcat/issues/575) [[2c66f21](https://github.com/scriptscat/scriptcat/commit/2c66f21f5118bd83a0eaa0f1baa3a31f2233e5b2)]
- ✨ تحسين external.Tampermonkey عند إطلاق TM وSC معًا، والتحقق من حالة تثبيت SC إذا لم يكن TM مثبتًا ([#703](https://github.com/scriptscat/scriptcat/issues/703)) [[d0115c3](https://github.com/scriptscat/scriptcat/commit/d0115c33657260d803b6091139601b1b20407d4e)] (بواسطة @cyfung1031)
- ✨ إضافة @early-start للتحميل أسرع من الصفحة ([#649](https://github.com/scriptscat/scriptcat/issues/649)) [[eb097dd](https://github.com/scriptscat/scriptcat/commit/eb097dd146dcd6f8ca712ed883571dbfb3d09f20)]

### تم التغيير

- ♻️ التوافق مع FF: `chrome.scripting.registerContentScripts` ([#704](https://github.com/scriptscat/scriptcat/issues/704)) [[a9ad0ea](https://github.com/scriptscat/scriptcat/commit/a9ad0ea2b34744dbd4488bda0a16d73bd6a1cc2b)] (بواسطة @cyfung1031)
- ♻️ تحسين كود url_matcher ([#702](https://github.com/scriptscat/scriptcat/issues/702)) [[27b8baa](https://github.com/scriptscat/scriptcat/commit/27b8baa90372f75cbf428dd32ef02d842688cf33)] (بواسطة @cyfung1031)
- ⚡ const now = Date.now(); ([#695](https://github.com/scriptscat/scriptcat/issues/695)) [[400b45c](https://github.com/scriptscat/scriptcat/commit/400b45cc487da4cc8a7b866916855acdc18a8023)] (بواسطة @cyfung1031)
- ⚡ forEach -&gt; for of ([#694](https://github.com/scriptscat/scriptcat/issues/694)) [[70927b6](https://github.com/scriptscat/scriptcat/commit/70927b6f0ddcf4a60d5838597d1df5acaaa7ca94)] (بواسطة @cyfung1031)
- ⚡ تحسين الكود العام ([#692](https://github.com/scriptscat/scriptcat/issues/692)) [[cf05973](https://github.com/scriptscat/scriptcat/commit/cf0597305a158fd8ba8489f30906d7bbbd7a4b0b)] (بواسطة @cyfung1031)
- ⚡ تحسين الكود: البحث العام ([#697](https://github.com/scriptscat/scriptcat/issues/697)) [[a5c12bd](https://github.com/scriptscat/scriptcat/commit/a5c12bd94f249ea194bececf2ecb39a0dea3c7dc)] (بواسطة @cyfung1031)
- ♻️ استخدام middleware لمعالجة initReady [[758e926](https://github.com/scriptscat/scriptcat/commit/758e92690194462982282dca25041c825d0b05e2)]
- ♻️ تحسين مكوّني Server و MessageQueue [[0932edc](https://github.com/scriptscat/scriptcat/commit/0932edc49722226cac97403dcd14dbaef01b5528)]
- ♻️ تعديل التوافق: معالجة optional_permission ([#679](https://github.com/scriptscat/scriptcat/issues/679)) [[bfc558a](https://github.com/scriptscat/scriptcat/commit/bfc558a0dfd167234100d95b9180ee6db4ab4c04)] (بواسطة @cyfung1031)
- ♻️ تعديل التوافق: يجب أن يخطئ `content.js` في حال عدم وجود `chrome.runtime.onMessage` ([#675](https://github.com/scriptscat/scriptcat/issues/675)) [[4e9adc0](https://github.com/scriptscat/scriptcat/commit/4e9adc00562981aa9d930d8a3f199e9418bdff30)] (بواسطة @cyfung1031)
- ♻️ تعديل التوافق (offscreen) وتحسين الكود ([#674](https://github.com/scriptscat/scriptcat/issues/674)) [[a3e56dd](https://github.com/scriptscat/scriptcat/commit/a3e56dd9d76cad73c8c8ec75c71fdbcfb9ca40e0)] (بواسطة @cyfung1031)
- 🎨 تعديل التوافق: notificationsUpdate ([#673](https://github.com/scriptscat/scriptcat/issues/673)) [[a345d93](https://github.com/scriptscat/scriptcat/commit/a345d93187e26efe99cc331072ffc854b3fe7b4d)] (بواسطة @cyfung1031)
- 🎨 تعزيز توافق chrome.tabs.create ([#639](https://github.com/scriptscat/scriptcat/issues/639)) [[ac0d7de](https://github.com/scriptscat/scriptcat/commit/ac0d7deb5957ea71579ef7a44594a75300e1cca6)] (بواسطة @cyfung1031)

### تم الإصلاح

- 🐛 إصلاح مشكلة عدم القدرة على بدء التثبيت عندما تكون الصفحة الوسيطة للتثبيت غير قابلة للوصول [#705](https://github.com/scriptscat/scriptcat/issues/705) [[5f1e292](https://github.com/scriptscat/scriptcat/commit/5f1e2929d79c470ba4427c3cce01f5cd184a839b)]
- 🐛 معالجة تعبير `@match *://*domain/*` [[039b445](https://github.com/scriptscat/scriptcat/commit/039b4454148947cd3c74de82b87804ee9815e60c)]
- 🐛 إصلاح مشكلة الهروب من بيئة العزل في بيئة الإضافة [#700](https://github.com/scriptscat/scriptcat/issues/700) [[a1a868d](https://github.com/scriptscat/scriptcat/commit/a1a868dfe3199e666fe2bcb65cfb2ad0ad3d699b)]
- ✏️ backgroud -&gt; background ([#698](https://github.com/scriptscat/scriptcat/issues/698)) [[2594075](https://github.com/scriptscat/scriptcat/commit/2594075c4a50f4c79fa46bcda08d7b0cbcfe723c)] (بواسطة @cyfung1031)
- ✏️ CrhomeStorage -&gt; ChromeStorage ([#693](https://github.com/scriptscat/scriptcat/issues/693)) [[64c536d](https://github.com/scriptscat/scriptcat/commit/64c536dbd5fcb4c29eebc1109202bab69aaa3ee2)] (بواسطة @cyfung1031)
- 🐛 إصلاح GM.getTab و GM.getTabs ([#683](https://github.com/scriptscat/scriptcat/issues/683)) [[31de256](https://github.com/scriptscat/scriptcat/commit/31de256f02b5b61e27f0eec9ea673248ba8faa32)] (بواسطة @WhiteSevs)
- 🐛 إصلاح نقص النطاق في finalUrl ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[545d7c8](https://github.com/scriptscat/scriptcat/commit/545d7c8c0dd69c83bd2f0353518aafe6af81c0f4)] (بواسطة @cyfung1031)
- 🐛 التوافق مع نوى المتصفح الأقدم [#647](https://github.com/scriptscat/scriptcat/issues/647) ([bba12d2](https://github.com/scriptscat/scriptcat/commit/bba12d23f04759cb9b7fdb63f0d95ae515ee94a9))

### متفرقات

- 📝 إنشاء README_RU.md و CONTRIBUTING_RU.md ([#678](https://github.com/scriptscat/scriptcat/issues/678)) [[597ab03](https://github.com/scriptscat/scriptcat/commit/597ab0378fe5ced01637cf411326ef7845b8ce2b)] (بواسطة @Ioann)
- 👷 تعديل التوافق (توافق pack.js) ([#669](https://github.com/scriptscat/scriptcat/issues/669)) [[fec45e6](https://github.com/scriptscat/scriptcat/commit/fec45e6606a609b10b79c58d2fcba02c2ce71e16)] (بواسطة @cyfung1031)

**Full Changelog**: https://github.com/scriptscat/scriptcat/compare/v1.1.0-beta.1...v1.1.0-beta.2

<a name="1.1.0-beta.1"></a>

## 1.1.0-beta.1 (2025-08-29)

### تمت الإضافة

- ✅ تعديل اختبارات الوحدة ([#690](https://github.com/scriptscat/scriptcat/issues/690)) [[71f9d70](https://github.com/scriptscat/scriptcat/commit/71f9d709868b96352494889ea864c22c0b2ce197)] (بواسطة @cyfung1031)
- 🎨 تحسين الكود غير المتزامن ([#651](https://github.com/scriptscat/scriptcat/issues/651)) ([55440e7](https://github.com/scriptscat/scriptcat/commit/55440e725a706e4358f08bc430ebea77bcb25335))
- ✨ البحث العام في الكود ([#662](https://github.com/scriptscat/scriptcat/issues/662)) [[f8eafb7](https://github.com/scriptscat/scriptcat/commit/f8eafb7f955dad62c1b41ac477e929bf00c65982)] (بواسطة @RenjiYuusei)
- ✅ تعديل اختبار وحدة nextTime [[0a6ed8c](https://github.com/scriptscat/scriptcat/commit/0a6ed8c72b8ee6dc15b66f8053ae3bf3ee95584d)]

### تم التغيير

- ♻️ تحسين الكود المتعلق بـ ScriptMatchInfo ([#653](https://github.com/scriptscat/scriptcat/issues/653)) [[556c493](https://github.com/scriptscat/scriptcat/commit/556c493f027fbfa7299ee68c3a9d927de6f41f08)] (بواسطة @cyfung1031)
- 🎨 تحسين منطق فتح النوافذ [[0de44bf](https://github.com/scriptscat/scriptcat/commit/0de44bfc90eeee003d9708ba0678e6c23f859579)]
- 🌐 معالجة مشاكل الترجمة ([cbe880e](https://github.com/scriptscat/scriptcat/commit/cbe880efcf3a148301dce4ffa90aa29a14407a26))
- 🎨 `@scriptURL` ([#654](https://github.com/scriptscat/scriptcat/issues/654)) [[4b1a5de](https://github.com/scriptscat/scriptcat/commit/4b1a5de9ed3b328091f582925b8a442535953a9e)] (بواسطة @cyfung1031)
- ♻️ إعادة كتابة UrlMatch ([#637](https://github.com/scriptscat/scriptcat/issues/637)) [[5b01c10](https://github.com/scriptscat/scriptcat/commit/5b01c10859b80890456a44a66d78204b42040870)] (بواسطة @cyfung1031)
- 🎨 تحسين getEnableScript ([#645](https://github.com/scriptscat/scriptcat/issues/645)) [[04910cf](https://github.com/scriptscat/scriptcat/commit/04910cf6213fe90fc8cbca28f2826414855dd7b1)] (بواسطة @cyfung1031)
- ⚡ تحسين كود runtime.ts ([#642](https://github.com/scriptscat/scriptcat/issues/642)) [[641cc1d](https://github.com/scriptscat/scriptcat/commit/641cc1d1ec0ec2dff5d32689ba46d27d30f7b45f)] (بواسطة @cyfung1031)
- 🎨 تعزيز توافق chrome.tabs.create ([#639](https://github.com/scriptscat/scriptcat/issues/639)) [[601b933](https://github.com/scriptscat/scriptcat/commit/601b933bd5cec1405ac6169a6160a57dfe0dbcfc)] (بواسطة @cyfung1031)
- 🎨 إصلاح `@match` `@icon` للسكرپت الجديد ([#636](https://github.com/scriptscat/scriptcat/issues/636)) [[aec08a3](https://github.com/scriptscat/scriptcat/commit/aec08a331f868defee6279eb420f6b90aba39cfe)] (بواسطة @cyfung1031)

### تمت الإزالة

- 🔥 إزالة توثيق crowdin لموقع السكرپت [[695f4d1](https://github.com/scriptscat/scriptcat/commit/695f4d1ba2d039508415235dd8e606d238be8035)]

### تم الإصلاح

- 🐛 إصلاح نقص النطاق في finalUrl ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[3ed018a](https://github.com/scriptscat/scriptcat/commit/3ed018a7a54803fcf2e1791316e0166ed0b52007)] (بواسطة @cyfung1031)
- 💚 إصلاح مشكلة lint في react/jsx-no-literals [[017b608](https://github.com/scriptscat/scriptcat/commit/017b60886be601e3e0e1719cf249da32d5686c30)]
- 🐛 التوافق مع نوى المتصفح الأقدم [#647](https://github.com/scriptscat/scriptcat/issues/647) [[0e2f817](https://github.com/scriptscat/scriptcat/commit/0e2f8173c8b44bd6ad44bdffc73fa302a96a058e)]
- 🐛 تحسين حقن window.external ([#646](https://github.com/scriptscat/scriptcat/issues/646)) [[0b2668a](https://github.com/scriptscat/scriptcat/commit/0b2668aadcab35a33ff9abc4bd030dffb87ea168)] (بواسطة @cyfung1031)
- 🐛 إصلاح عدم قدرة صفحة مصادقة التخزين السحابي على الإغلاق التلقائي [[7748088](https://github.com/scriptscat/scriptcat/commit/7748088e63c1fc660b6a6ae5613cf04f9da99b8c)]

### متفرقات

- 🌐 تحسين وتوسيع اللغة الفيتنامية ([#661](https://github.com/scriptscat/scriptcat/issues/661)) [[6847a59](https://github.com/scriptscat/scriptcat/commit/6847a596c4b06c75e13594ef60e4b9dfa5718cf3)] (بواسطة @RenjiYuusei)
- 🌐 إصلاحات الترجمة ([#635](https://github.com/scriptscat/scriptcat/issues/635)) [[19296de](https://github.com/scriptscat/scriptcat/commit/19296de6a3815e5965eb33401a55da9b2bd22bb4)] (بواسطة @cyfung1031)
- 🌐 إصلاح مشكلة i18n في دليل الإعداد [#627](https://github.com/scriptscat/scriptcat/issues/627) [[9683f96](https://github.com/scriptscat/scriptcat/commit/9683f965400ab6a2bac15349aca4335911766eac)]

<a name="1.1.0-beta"></a>

## 1.1.0-beta (2025-08-18)

### تم التغيير

- ⚡ عدم استخدام صيغة .reduce ([#619](https://github.com/scriptscat/scriptcat/issues/619)) [[71e97d5](https://github.com/scriptscat/scriptcat/commit/71e97d53fe152d5a8e479378366d077589df3d27)] (بواسطة @cyfung1031)
- ⚡ تحسين مشاكل تحميل موارد السكرپت [#612](https://github.com/scriptscat/scriptcat/issues/612) [[e206562](https://github.com/scriptscat/scriptcat/commit/e2065622c2a544579bc84f25f178d118d902ccba)]
- 🎨 تحسين صفحة تثبيت السكرپت ([#611](https://github.com/scriptscat/scriptcat/issues/611)) ([bbc76b1](https://github.com/scriptscat/scriptcat/commit/bbc76b1110d417a445b3cc065488fe11b7f2ddc2))
- 🐛 إصلاح طريقة الفتح في النافذة الحالية ([70be8a3](https://github.com/scriptscat/scriptcat/commit/70be8a303b98b73885dac950dc1b24aa8cbbe773))
- 🎨 تحسين utils.ts ([#608](https://github.com/scriptscat/scriptcat/issues/608)) [[37bb763](https://github.com/scriptscat/scriptcat/commit/37bb763306c7e06df085022c2cb2fa9cc2788204)] (بواسطة @cyfung1031)
- 🎨 تنظيم doThrow و TypeScript ([#606](https://github.com/scriptscat/scriptcat/issues/606)) [[4362802](https://github.com/scriptscat/scriptcat/commit/4362802fe3ba4482a283996cae9a424b23c69407)] (بواسطة @cyfung1031)
- ⚡ تحسين popup.ts و runtime.ts (تحسين الكود) ([#607](https://github.com/scriptscat/scriptcat/issues/607)) [[e48ca66](https://github.com/scriptscat/scriptcat/commit/e48ca66cc4f56ef981543c1f56b5e7eb0c2fa14a)] (بواسطة @cyfung1031)
- 🎨 تحديثات متعلقة بـ getCurrentTab ([#604](https://github.com/scriptscat/scriptcat/issues/604)) [[b4a9f2e](https://github.com/scriptscat/scriptcat/commit/b4a9f2efd48ee8cbacac6872ddb25c7d630bfd8a)] (بواسطة @cyfung1031)
- 🎨 تعريف TS لـ TMessage ([#596](https://github.com/scriptscat/scriptcat/issues/596)) [[6aeb61d](https://github.com/scriptscat/scriptcat/commit/6aeb61da8ae7efdd718facacf90e4ed40ddb4caf)] (بواسطة @cyfung1031)
- 🎨 استخدام Service Worker للحصول على favicon ([#594](https://github.com/scriptscat/scriptcat/issues/594)) [[727872d](https://github.com/scriptscat/scriptcat/commit/727872d47552e4c53b09be33b526f7f69baad4ec)] (بواسطة @cyfung1031)
- 🎨 توحيد الرسائل ([#595](https://github.com/scriptscat/scriptcat/issues/595)) [[791608b](https://github.com/scriptscat/scriptcat/commit/791608b31855b1415f9ad496ef6c52fe1809984d)] (بواسطة @cyfung1031)
- 🎨 تحسين كود SystemConfigChange ([#593](https://github.com/scriptscat/scriptcat/issues/593)) [[041d985](https://github.com/scriptscat/scriptcat/commit/041d98523902319c88efdee3fa2ae40eab80aba8)] (بواسطة @cyfung1031)
- 🎨 تحسين كود EventEmitter ([#592](https://github.com/scriptscat/scriptcat/issues/592)) [[67543c4](https://github.com/scriptscat/scriptcat/commit/67543c473b303a1708ea83ca00e49d5d687d6a34)] (بواسطة @cyfung1031)
- 🎨 تحسين كود Cache ([#591](https://github.com/scriptscat/scriptcat/issues/591)) [[34e42ac](https://github.com/scriptscat/scriptcat/commit/34e42ac5f9ee504a90636d32c53def356c7d4495)] (بواسطة @cyfung1031)
- 🎨 قالب السكرپت الجديد يبدأ افتراضيًا بـ `@grant none` مثل TM ([#589](https://github.com/scriptscat/scriptcat/issues/589)) [[e5a2d5d](https://github.com/scriptscat/scriptcat/commit/e5a2d5d3adafdcac2cf95b865550e395ba8443c7)] (بواسطة @cyfung1031)
- ⚡ new Date().getTime() ← Date.now() ([#587](https://github.com/scriptscat/scriptcat/issues/587)) [[245ecbf](https://github.com/scriptscat/scriptcat/commit/245ecbfc23f1811aeee5671e48151e94b0ebc128)] (بواسطة @cyfung1031)

### تم الإصلاح

- 🐛 إصلاح مشكلة عدم تأثير `@connect` \* [#623](https://github.com/scriptscat/scriptcat/issues/623) [[76481c8](https://github.com/scriptscat/scriptcat/commit/76481c845b34414a7f15ed18ec61f7dff7eef091)]
- 🐛 إضافة اختبارات وحدة وإصلاح مشكلة `@exclude` ([#618](https://github.com/scriptscat/scriptcat/issues/618)) [[0046bb7](https://github.com/scriptscat/scriptcat/commit/0046bb78800a2c46edaac785b8e9592327772a3b)] (بواسطة @cyfung1031)
- 🐛 إصلاح بعض روابط .user.js غير القادرة على تثبيت السكرپتات [#599](https://github.com/scriptscat/scriptcat/issues/599) [[ccd2639](https://github.com/scriptscat/scriptcat/commit/ccd2639858f0f3cde28f284376fe8ed998d935ae)]
- 🐛 إصلاح فشل إنشاء سكرپت جديد [[d42d6e7](https://github.com/scriptscat/scriptcat/commit/d42d6e7d408a84674facf9ab0da6eac0e384502f)]
- 🐛 إصلاحات البيانات الوصفية ([#610](https://github.com/scriptscat/scriptcat/issues/610)) [[4d98cce](https://github.com/scriptscat/scriptcat/commit/4d98cce0ca1281cc58f551ea4e6700e340780d3f)] (بواسطة @cyfung1031)
- 🐛 إصلاحات شارة النافذة المنبثقة ([#605](https://github.com/scriptscat/scriptcat/issues/605)) [[eff9230](https://github.com/scriptscat/scriptcat/commit/eff92309de99abb0cf48ef4727afaa113bc2fbb6)] (بواسطة @cyfung1031)
- 🐛 إصلاحات ScriptEditor.tsx ([#603](https://github.com/scriptscat/scriptcat/issues/603)) [[a9aadba](https://github.com/scriptscat/scriptcat/commit/a9aadba372b813c16bdc5f0aeb07c68981f48c63)] (بواسطة @cyfung1031)
- 🐛 إصلاحات CSS لعارض الكود والمحرر ([#602](https://github.com/scriptscat/scriptcat/issues/602)) [[2e86785](https://github.com/scriptscat/scriptcat/commit/2e8678513efaccd42c8dc2aa89f8b76679aa8420)] (بواسطة @cyfung1031)
- 🐛 إصلاح مشكلة التزامن في getFaviconFromDomain ([#597](https://github.com/scriptscat/scriptcat/issues/597)) [[1872fe1](https://github.com/scriptscat/scriptcat/commit/1872fe165ab204b155a56f037c111d2d7776c2b9)] (بواسطة @cyfung1031)
- 🐛 إصلاح خطأ فتح التبويب في سيناريوهات النوافذ المتعددة [#586](https://github.com/scriptscat/scriptcat/issues/586) [[54c1da2](https://github.com/scriptscat/scriptcat/commit/54c1da29c2bd8bd8f5ef2d85b7aed8b334de296f)]
- 🐛 إصلاح مشكلة توافق openerTabId ([#586](https://github.com/scriptscat/scriptcat/issues/586)) [[b861fc8](https://github.com/scriptscat/scriptcat/commit/b861fc8620e53b885cad98db03f1dd10ec9d296c)] (بواسطة @cyfung1031)

### متفرقات

- 👷 تحسين كود pack.js ([#615](https://github.com/scriptscat/scriptcat/issues/615)) [[870dd9b](https://github.com/scriptscat/scriptcat/commit/870dd9bc6b7eff3eceefa915452e773ec0565180)] (بواسطة @cyfung1031)
