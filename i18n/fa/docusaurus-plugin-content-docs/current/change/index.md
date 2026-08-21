---
title: تاریخچه تغییرات
---

import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="changelog" />

برای تاریخچه تغییرات نسخه بتا، به [تاریخچه تغییرات بتا](./beta-changelog.md) مراجعه کنید

⚠️ لطفاً توجه داشته باشید که اگر از Windows 8/7/XP استفاده میکنید یا نسخه هسته مرورگر شما کمتر از \<120 است، باید [نسخه قدیمی ScriptCat](https://github.com/scriptscat/scriptcat/releases) را بهصورت دستی نصب کنید. v0.16.x آخرین نسخهای است که از Manifest V2 پشتیبانی میکند. مراحل نصب را میتوانید در اینجا بیابید: [نصب افزونه با بارگذاری پوشه از حالت فشرده خارجشده](/use/use.md#load-unpacked-extension-installation).

<a name="1.4.0"></a>

## 1.4.0 (2026-06-26)

این انتشار بازسازی سطح پایین را در آمادهسازی برای Firefox MV3 به همراه دارد، همچنین بهبودهای تجربه ویرایشگر (منوی ویرایش، قالببندی Ctrl+Shift+F، رفع سریع Monaco)، انتخاب موتور جستجوی چندسکویی برای کشف سکریپتها، قابلیتهای جدید مانند `@unwrap` / `window.onurlchange` / `@run-at context-menu`، تقویت جامع قابلیت اطمینان همگامسازی ذخیرهسازی ابری، و دسته بزرگی از رفعهای GM API، رابط کاربری و پایداری (شامل نشت حافظه طولانیمدت و آسیبپذیریهای امنیتی آلودگی نمونه اولیه). Agent هوش مصنوعی ScriptCat بهصورت پیشنمایش در نسخههای dev / Beta در دسترس است و هنوز در نسخه پایدار فعال نشده است.

### 🚀 ویژگیهای اصلی جدید

- 🧪 Agent هوش مصنوعی ScriptCat (**پیشنمایش — فقط در نسخههای dev / Beta موجود است، هنوز در نسخه پایدار فعال نشده**) — سیستم عامل هوشمند مبتنی بر هوش مصنوعی با تعامل گفتوگومحور، فراخوانی ابزار، سیستم Skill، پروتکل MCP و موارد دیگر ([#1324](https://github.com/scriptscat/scriptcat/pull/1324)) (by @CodFrm)
- ✨ پشتیبانی از برچسب فراداده `@unwrap` ([#1213](https://github.com/scriptscat/scriptcat/pull/1213)) (by @cyfung1031)
- ✨ پیادهسازی `window.onurlchange` متعلق به TM از طریق Navigation API ([#1315](https://github.com/scriptscat/scriptcat/pull/1315)) (by @cyfung1031)
- ✨ بازگرداندن پشتیبانی از `@run-at context-menu` ([#1442](https://github.com/scriptscat/scriptcat/pull/1442)) (by @cyfung1031)
- ✨ کشف سکریپتها از انتخاب موتور جستجوی چندسکویی پشتیبانی میکند ([#1295](https://github.com/scriptscat/scriptcat/pull/1295)) (by @CodFrm)
- ✨ افزودن ارائهدهندگان خدمات آیکون بیشتر ([#1333](https://github.com/scriptscat/scriptcat/pull/1333)) (by @cyfung1031)
- ✨ افزودن آیکون بررسی بهروزرسانی به ستون «آخرین بهروزرسانی» در فهرست سکریپتها ([#1304](https://github.com/scriptscat/scriptcat/pull/1304)) (by @CodFrm)
- ✨ بهبود مدیریت تعارضهای ویرایش و تعارضهای نام سکریپت ([#1223](https://github.com/scriptscat/scriptcat/pull/1223)) (by @cyfung1031)

### 🧑‍💻 ویرایشگر

- ✨ افزودن منوی ویرایش به ویرایشگر (جستجو، جایگزینی، واگرد و غیره) ([#1303](https://github.com/scriptscat/scriptcat/pull/1303)) (by @CodFrm)
- ✨ ویرایشگر از قالببندی Ctrl+Shift+F پشتیبانی میکند ([#1415](https://github.com/scriptscat/scriptcat/pull/1415)) (by @cyfung1031)
- ✨ بهبود رفع سریع Monaco و نکات فراداده سکریپتهای کاربر ([#1461](https://github.com/scriptscat/scriptcat/pull/1461)) (by @cyfung1031)
- 🐛 رفع میانبرهای Ctrl-F / Ctrl-H ([#1312](https://github.com/scriptscat/scriptcat/pull/1312)) (by @cyfung1031)
- 🐛 رفع عملکرد اصلاح ESLint که کار نمیکرد [#1079](https://github.com/scriptscat/scriptcat/issues/1079) ([#1184](https://github.com/scriptscat/scriptcat/pull/1184)) (by @cyfung1031)
- 🐛 رفع مشکلات چیدمان CSS ویرایشگر ([#1460](https://github.com/scriptscat/scriptcat/pull/1460)) (by @cyfung1031)
- 🐛 رفع نمایش فهرست سکریپتهای ScriptEditor در تم روشن ([#1288](https://github.com/scriptscat/scriptcat/pull/1288)) (by @CodFrm)
- 🐛 رفع و بهبود مشکلات ScriptEditor ([#1258](https://github.com/scriptscat/scriptcat/pull/1258)) (by @cyfung1031)

### ⚡️ بهبودهای عملکرد

- 🚑 رفع نشت حافظه احتمالی در طول جلسات طولانیمدت ScriptCat ([#1401](https://github.com/scriptscat/scriptcat/pull/1401)) (by @cyfung1031)
- ⚡️ حذف وابستگی به سیستم فایل Baidu برای قوانین سراسری DNR، تغییر به غیرفعالسازی کوکیها بهازای هر درخواست ([#1377](https://github.com/scriptscat/scriptcat/pull/1377)) (by @cyfung1031)
- ⚡️ بهینهسازی انتخاب موتور جستجوی چندسکویی برای کشف سکریپتها ([#1379](https://github.com/scriptscat/scriptcat/pull/1379)) (by @cyfung1031)
- ⚡️ استفاده از فونت تکفاصله برای loadingStatus صفحه نصب برای جلوگیری از لرزش ([#1381](https://github.com/scriptscat/scriptcat/pull/1381)) (by @cyfung1031)
- ⚡️ بهینهسازی مدیریت pushValue ([#1403](https://github.com/scriptscat/scriptcat/pull/1403)) (by @cyfung1031)
- ⚡️ بررسیهای مجوز کاملتر و نکات بهتر مجوز سکریپتهای کاربر ([#1251](https://github.com/scriptscat/scriptcat/pull/1251)) (by @cyfung1031)
- ⚡️ بهبود مدیریت حافظه و مکانیزم پاکسازی MessageConnect ([#1248](https://github.com/scriptscat/scriptcat/pull/1248)) (by @cyfung1031)

### 🐛 رفع اشکال

- 🐛 تقویت قابلیت اطمینان همگامسازی ذخیرهسازی ابری (احراز هویت، مدیریت مسیر و منطق تلاش مجدد برای Dropbox / WebDAV / Google Drive / OneDrive) ([#1374](https://github.com/scriptscat/scriptcat/pull/1374) ~ [#1395](https://github.com/scriptscat/scriptcat/pull/1395)) (by @cyfung1031)
- 🐛 رفع چند مشکل همگامسازی ابری: آپلود صفر بایت OneDrive، نرمالسازی خطای Google Drive / OneDrive، modifiedDate فراداده سفارشی S3 ([#1405](https://github.com/scriptscat/scriptcat/pull/1405)) ([#1406](https://github.com/scriptscat/scriptcat/pull/1406)) ([#1408](https://github.com/scriptscat/scriptcat/pull/1408)) (by @cyfung1031)
- 🐛 حذف آزمایش نوشتن برای تأیید WebDAV برای جلوگیری از نتایج منفی کاذب در سرویسهایی با ریشه غیرقابل نوشتن (مانند Nutstore) ([#1445](https://github.com/scriptscat/scriptcat/pull/1445)) (by @CodFrm)
- 🐛 رفع شکست درخواستهای بینمبدأ زمانی که مجوز دسترسی به سایت وجود ندارد ([#1477](https://github.com/scriptscat/scriptcat/pull/1477)) (by @cyfung1031)
- 🐛 رفع سازگاری پنجره بازشوی موبایل Edge Android [#686](https://github.com/scriptscat/scriptcat/issues/686) ([#1507](https://github.com/scriptscat/scriptcat/pull/1507)) (by @CodFrm)
- 🐛 رفع چشمکزدن پسزمینه سفید هنگام بارگذاری اولیه [#1497](https://github.com/scriptscat/scriptcat/issues/1497) ([#1498](https://github.com/scriptscat/scriptcat/pull/1498)) (by @cyfung1031)
- 🐛 رفع اتصالات پیام (GM API / پورتها) که بهدرستی پاکسازی نمیشدند ([#1474](https://github.com/scriptscat/scriptcat/pull/1474)) (by @cyfung1031)
- 🐛 رفع عدم تطابق الگوی `@match` زمانی که جستجو وجود ندارد ([#1466](https://github.com/scriptscat/scriptcat/pull/1466)) (by @cyfung1031)
- 🐛 افزودن `protoBaseDescs` برای رفع وراثت کلاسهای اجداد در نیمهنقرهبند Tampermonkey ([#1463](https://github.com/scriptscat/scriptcat/pull/1463)) (by @cyfung1031)
- 🐛 رفع مدیریت null ازدسترفته برای msgConn مربوط به `GM_xmlhttpRequest` ([#1433](https://github.com/scriptscat/scriptcat/pull/1433)) (by @cyfung1031)
- 🐛 رفع مدیریت نادرست onloadend غیرعادی توسط GM xhr ([#1412](https://github.com/scriptscat/scriptcat/pull/1412)) (by @cyfung1031)
- 🐛 رفع مشکلات بهروزرسانی پویا و نمایش فهرست ScriptEditor ([#1414](https://github.com/scriptscat/scriptcat/pull/1414)) (by @cyfung1031)
- 🐛 رفع مشکل تعداد قوانین جلسه با xhr همزمان ([#1353](https://github.com/scriptscat/scriptcat/pull/1353)) (by @cyfung1031)
- 🐛 رفع از کار افتادن کل صفحه بهدلیل عبارت cron نامعتبر ([#1327](https://github.com/scriptscat/scriptcat/pull/1327)) (by @cyfung1031)
- 🐛 رفع شکست همه سکریپتها زمانی که یک سکریپت در طول بررسی بهروزرسانی دستهای مهلت را رد میکند ([#1265](https://github.com/scriptscat/scriptcat/pull/1265)) (by @cyfung1031)
- 🐛 افزودن مدیریت extensionEnv برای isIncognito، userAgent و run-in ([#1368](https://github.com/scriptscat/scriptcat/pull/1368)) (by @cyfung1031)
- 🐛 رفع دکمه راهنمای شروع که بهصورت جزئی پنهان بود [#1396](https://github.com/scriptscat/scriptcat/issues/1396) ([#1398](https://github.com/scriptscat/scriptcat/pull/1398)) (by @cyfung1031)
- 🐛 رفع راهنمای ابزار پنهانشده در صفحه مدیریت سکریپتها [#1386](https://github.com/scriptscat/scriptcat/issues/1386) ([#1387](https://github.com/scriptscat/scriptcat/pull/1387)) (by @Xdy1579883916)
- 🐛 رفع تغییر اندازه غیرعادی نوار کناری در حالت کارت [#1179](https://github.com/scriptscat/scriptcat/issues/1179) ([#1373](https://github.com/scriptscat/scriptcat/pull/1373)) (by @cyfung1031)
- 🐛 رفع مبدأ نادرست هنگام نصب فایلهای محلی از طریق کشیدن و رها کردن ([#1371](https://github.com/scriptscat/scriptcat/pull/1371)) (by @cyfung1031)
- 🐛 رفع پیام تغییر زبان ([#1380](https://github.com/scriptscat/scriptcat/pull/1380)) (by @cyfung1031)
- 🐛 بهبود رابط نمایش گزارشها ([#1372](https://github.com/scriptscat/scriptcat/pull/1372)) (by @cyfung1031)
- 🐛 رفع CSS مربوط به UserConfigPanel ([#1361](https://github.com/scriptscat/scriptcat/pull/1361)) (by @cyfung1031)
- 🐛 استفاده از `Object.create(null)` برای شیء خالی در create_context ([#1397](https://github.com/scriptscat/scriptcat/pull/1397)) (by @cyfung1031)
- 🐛 رفع منطق بهروزرسانی بیصدا و مجوز اتصال برای سکریپتهای اشتراکی ([#1201](https://github.com/scriptscat/scriptcat/pull/1201)) (by @cyfung1031)
- 🐛 رفع دکمه جستجوی صفحه گزارشها که زمان را تازه نمیکرد ([#1294](https://github.com/scriptscat/scriptcat/pull/1294)) (by @CodFrm)

### 🔒 بهبودهای امنیتی

- 🔒 رفع آلودگی نمونه اولیه از طریق کلیدهای پیکربندی کاربر YAML غیرقابل اعتماد ([#1494](https://github.com/scriptscat/scriptcat/pull/1494)) (by @qdzsh)
- 🔒 رفع تمام آسیبپذیریهای امنیتی وابستگیهای npm ([#1350](https://github.com/scriptscat/scriptcat/pull/1350)) ([#1364](https://github.com/scriptscat/scriptcat/pull/1364)) ([#1365](https://github.com/scriptscat/scriptcat/pull/1365)) (by @cyfung1031)

### ♻️ بازسازی و سازگاری

- ♻️ بازسازی سطح پایین در آمادهسازی برای سازگاری Firefox MV3 ([#1457](https://github.com/scriptscat/scriptcat/pull/1457)) ([#1480](https://github.com/scriptscat/scriptcat/pull/1480)) (by @cyfung1031)
- ♻️ بازسازی منطق بهروزرسانی منابع سکریپت (updateResource) و کنترل همزمانی، بازگرداندن سازگاری کش منابع ([#1193](https://github.com/scriptscat/scriptcat/pull/1193)) (by @cyfung1031)
- ♻️ جایگزینی jszip با JSZipp برای پردازش ZIP (واردات / صادرات پشتیبان) و حذف وابستگی استفادهنشده jszip ([#1479](https://github.com/scriptscat/scriptcat/pull/1479)) (by @cyfung1031)
- ♻️ یکپارچهسازی ارتباط Offscreen ↔ ServiceWorker از طریق کانال postMessage ([#1299](https://github.com/scriptscat/scriptcat/pull/1299)) (by @CodFrm)
- ♻️ بازسازی کد VSCodeConnect ([#1170](https://github.com/scriptscat/scriptcat/pull/1170)) (by @cyfung1031)
- ⚡️ فشردهسازی ts.worker.js به 4 مگابایت برای عبور از اعتبارسنجی AMO، رفع خطای مجوز پسزمینه MV3 ([#1221](https://github.com/scriptscat/scriptcat/pull/1221)) (by @cyfung1031)

### 🌐 بینالمللیسازی

- 🌐 رفع ترجمههای اصطلاحی چندزبانه (عمدتاً بهبود چینی سنتی) و افزودن دستورالعملهای اصطلاحشناسی ترجمه ([#1468](https://github.com/scriptscat/scriptcat/pull/1468)) (by @cyfung1031)

### سایر

- ✨ تغییر سرویس آیکون fetchIconByDomain به scriptcat.org ([#1268](https://github.com/scriptscat/scriptcat/pull/1268)) (by @cyfung1031)
- 🔥 حذف محتوای مرتبط با Crowdin و زبان شبه ach-UG ([#1385](https://github.com/scriptscat/scriptcat/pull/1385)) (by @CodFrm)

<a name="0.16.15"></a>

## 0.16.15 (2026-05-19)

### 🐛 رفع اشکال

- 🐛 رفع دستور ساخت اسکریپت بستهبندی MV2 [#1423](https://github.com/scriptscat/scriptcat/issues/1423) (by @CodFrm)
- 🐛 سازگاری با تغییرات WebExtensions API (Firefox 149-152)، از جمله تنظیمات CSP ([#1448](https://github.com/scriptscat/scriptcat/pull/1448)) (by @cyfung1031)

<a name="0.16.14"></a>

## 0.16.14 (2026-04-26)

### 🚀 ویژگیهای اصلی جدید

- ✨ همگامسازی FirefoxMV2 با موارد اصلی MV3: ارتقای TypeScript به 4.9، ارتقای tsconfig به es2022؛ همترازی قالبهای سکریپت (normal/crontab/background) با MV3؛ ارتقای cron با پشتیبانی از عبارت `once(...)`؛ پشتیبانی چندزبانه از Monaco Editor ([#1331](https://github.com/scriptscat/scriptcat/pull/1331)) (by @cyfung1031)

### ♻️ بازسازی و سازگاری

- 🔥 حذف وابستگی axios برای همترازی با MV3 ([#1339](https://github.com/scriptscat/scriptcat/pull/1339)) (by @cyfung1031)

### 🐛 رفع اشکال

- 🐛 رفع مشکل دریافتنکردن پیامهای postMessage توسط iframe تودرتوی window.parent ([#1335](https://github.com/scriptscat/scriptcat/pull/1335)) (by @cyfung1031)

<a name="1.3.2"></a>

## 1.3.2 (2026-03-28)

### 🐛 رفع اشکال

- 🐛 حذف هدر Accept از fetchScriptBody برای جلوگیری از خطای 406 ([#1306](https://github.com/scriptscat/scriptcat/pull/1306)) (by @cyfung1031)
- 🐛 رفع تعارض احراز هویت کوکیهای WebDAV و پشتیبانی از authType ([#1308](https://github.com/scriptscat/scriptcat/pull/1308)) (by @CodFrm)
- 🐛 نمایش صحیح خطاهای قالببندی ([#1310](https://github.com/scriptscat/scriptcat/pull/1310)) (by @cyfung1031)
- 🐛 استفاده از chrome.storage.local برای پیکربندیهای خاص دستگاه برای جلوگیری از همگامسازی بین دستگاهها ([#1309](https://github.com/scriptscat/scriptcat/pull/1309)) (by @CodFrm)
- 🐛 رفع مشکلات نکات ویرایشگر کد ([#1301](https://github.com/scriptscat/scriptcat/pull/1301)) (by @cyfung1031)
- 🐛 رفع بریدهشدن پنجره بازشوی انتخابگر تاریخ در صفحه گزارشها ([#1292](https://github.com/scriptscat/scriptcat/pull/1292)) (by @cyfung1031)
- 🐛 رفع نمایش دکمه لغو اتصال زمانی که هیچ درایو ابری متصل نیست ([#1291](https://github.com/scriptscat/scriptcat/pull/1291)) (by @CodFrm)
- 🐛 رفع پنجره بازشوی پنهانشده ([#1290](https://github.com/scriptscat/scriptcat/pull/1290)) (by @cyfung1031)

<a name="1.3.1"></a>

## 1.3.1 (2026-03-13)

### 🐛 رفع اشکال

- 🚑 رفع خطای تشخیص محیط ناشی از تزریق chrome.runtime توسط افزونههای دیگر [#1280](https://github.com/scriptscat/scriptcat/issues/1280) ([#1281](https://github.com/scriptscat/scriptcat/pull/1281)) (by @CodFrm)

### سایر

- ✅ افزودن تستهای E2E Playwright و تستهای عملکردی GM API ([#1283](https://github.com/scriptscat/scriptcat/pull/1283)) (by @CodFrm)

<a name="1.3.0"></a>

## 1.3.0 (2026-03-10)

این بهروزرسانی ذخیرهسازی Amazon S3، گزینههای زمان اجرای سکریپت، نصب بدون دسترسی به وبسایت خارجی و موارد دیگر را به ارمغان میآورد. سیستم پیامرسانی و عملکرد React را بهطور قابل توجهی بهینه میکند، مشکلات متعدد GM API، رابط کاربری و پایداری را رفع میکند و شامل بهبودهای گسترده کیفیت کد است.

### 🚀 ویژگیهای اصلی جدید

- ✨ افزودن ذخیرهسازی Amazon S3 [#1146](https://github.com/scriptscat/scriptcat/issues/1146) ([#1189](https://github.com/scriptscat/scriptcat/pull/1189)) (by @CodFrm)
- ✨ گزینههای زمان اجرای سکریپت ([#895](https://github.com/scriptscat/scriptcat/pull/895)) (by @CodFrm)
- ✨ نصب بدون دسترسی به وبسایت خارجی + تنظیمات چیدمان صفحه نصب ([#842](https://github.com/scriptscat/scriptcat/pull/842)) (by @cyfung1031)
- ✨ نمایش آیکون خاکستری زمانی که عملکرد سکریپت غیرفعال است [#897](https://github.com/scriptscat/scriptcat/issues/897) (by @CodFrm)
- ✨ بهینهسازی تعامل زمانی که تعداد موارد بازشده منو 0 است [#868](https://github.com/scriptscat/scriptcat/issues/868) (by @CodFrm)
- ✨ `@noframes` پیشفرض در قالب برای جلوگیری از اشتباهات رایج ([#900](https://github.com/scriptscat/scriptcat/pull/900)) (by @cyfung1031)
- ✨ جلوگیری از اشتباه قضاوت لینک نصب بهعنوان نصب جدید زمانی که نام سکریپت تغییر میکند ([#824](https://github.com/scriptscat/scriptcat/pull/824)) (by @cyfung1031)
- ✨ رفع اعتبارسنجی تعارض `@grant`، افزودن اعلان خطای اعلام فراداده تکراری ([#902](https://github.com/scriptscat/scriptcat/pull/902)) (by @cyfung1031)
- ✨ پذیرش `@version` بدون مقدار یا با مقدار خالی ([#1216](https://github.com/scriptscat/scriptcat/pull/1216)) (by @cyfung1031)
- ✨ تنظیم موقعیت نوار کناری پنهان ویرایشگر [#1185](https://github.com/scriptscat/scriptcat/issues/1185) ([#1254](https://github.com/scriptscat/scriptcat/pull/1254)) (by @CodFrm)

### 🧩 تغییرات GM API

- 🐛 رفع مشکل GM_addElement، انتقال عملیات به محیط محتوا ([#1233](https://github.com/scriptscat/scriptcat/pull/1233)) (by @cyfung1031)
- 🐛 افزودن پارامتر `conflictAction` به `GM_download` ([#1250](https://github.com/scriptscat/scriptcat/pull/1250)) (by @cyfung1031)
- 🐛 رفع اعلامهای ناهمزمان GM API، بازگرداندن صحیح Promise ([#1169](https://github.com/scriptscat/scriptcat/pull/1169)) (by @cyfung1031)
- ♻️ سازگاری Firefox: GM_setClipboard ([#928](https://github.com/scriptscat/scriptcat/pull/928)) (by @cyfung1031)
- 🐛 رفع مشکل GM_value [#1192](https://github.com/scriptscat/scriptcat/issues/1192) (by @CodFrm)
- 🐛 رفع عدم پشتیبانی نام فایل دانلود از پوشهها ([#1203](https://github.com/scriptscat/scriptcat/pull/1203)) (by @cyfung1031)

### ⚡️ بهبودهای عملکرد

- ♻️ بازسازی سیستم پیامرسانی: پخش storage.local + انطباق scripting Firefox MV3 + MessageFlag همگامسازی پویای غیرقابل ردیابی ([#1067](https://github.com/scriptscat/scriptcat/pull/1067)) (by @cyfung1031)
- ⚡️ رفع مشکلات رندر مجدد React (ScriptCard & ScriptTable) ([#1182](https://github.com/scriptscat/scriptcat/pull/1182)) (by @cyfung1031)
- ⚡️ رفع مشکلات رندر مجدد React (Popup) ([#1181](https://github.com/scriptscat/scriptcat/pull/1181)) (by @cyfung1031)
- ⚡️ بهینهسازی عملکرد Repo ([#1232](https://github.com/scriptscat/scriptcat/pull/1232)) (by @CodFrm)
- ⚡️ انتقال فراداده به خارج از chrome.storage.session ([#1027](https://github.com/scriptscat/scriptcat/pull/1027)) (by @cyfung1031)
- ⚡️ بهبود تشخیص مجموعه کاراکتر ([#1140](https://github.com/scriptscat/scriptcat/pull/1140)) (by @cyfung1031)
- ⚡️ ذخیره آیکونها بر اساس URL برای جلوگیری از ذخیرهسازی تکراری بین سکریپتها ([#909](https://github.com/scriptscat/scriptcat/pull/909)) (by @cyfung1031)
- ⚡️ بهینهسازی کد parseMetadata ([#903](https://github.com/scriptscat/scriptcat/pull/903)) (by @cyfung1031)
- 🐛 رفع نشت حافظه و افشای ویژگیهای شیء ([#1242](https://github.com/scriptscat/scriptcat/pull/1242)) (by @cyfung1031)
- ♻️ حذف Redux، سادهسازی مدیریت وضعیت ([#1206](https://github.com/scriptscat/scriptcat/pull/1206)) (by @cyfung1031)

### 🧑‍💻 ویرایشگر

- ✨ بهینهسازی تنظیمات Monaco Editor، افزودن رفع `/* global xxx */` ([#1012](https://github.com/scriptscat/scriptcat/pull/1012)) (by @cyfung1031)
- ✨ نکات چندزبانه Monaco Editor و افزودن نکته `@require-css` ([#960](https://github.com/scriptscat/scriptcat/pull/960)) (by @cyfung1031)

### 🐛 رفع اشکال

- 🐛 رفع تعارض بررسی مجوز پنجره ناشناس که باعث راهاندازی مجدد مکرر میشد (by @CodFrm)
- 🐛 رفع مدیریت عبارت include `*?*` [#1271](https://github.com/scriptscat/scriptcat/issues/1271) ([#1272](https://github.com/scriptscat/scriptcat/pull/1272)) (by @CodFrm)
- 🔒 پاکسازی محتوای HTML اعلانهای اطلاعیه با DOMPurify ([#1274](https://github.com/scriptscat/scriptcat/pull/1274)) (by @CodFrm)
- 🐛 رفع کنترل مدیریت مجوز تنظیمات سکریپت که کار نمیکرد ([#1267](https://github.com/scriptscat/scriptcat/pull/1267)) (by @CodFrm)
- 🐛 رفع دنبالکردن محتوای پنجره بازشو از اسکرول صفحه [#1256](https://github.com/scriptscat/scriptcat/issues/1256) ([#1263](https://github.com/scriptscat/scriptcat/pull/1263)) (by @cyfung1031)
- 🐛 رفع شکست تجزیه لینک نصب [#1235](https://github.com/scriptscat/scriptcat/issues/1235) ([#1260](https://github.com/scriptscat/scriptcat/pull/1260)) (by @cyfung1031)
- 🐛 رفع کامپوننت کشیدن که باعث تأخیر focusin/focusout میشد [#1224](https://github.com/scriptscat/scriptcat/issues/1224) ([#1243](https://github.com/scriptscat/scriptcat/pull/1243)) (by @CodFrm)
- 🐛 رفع کارنکردن API افزونه خارجی ([#1217](https://github.com/scriptscat/scriptcat/pull/1217)) (by @cyfung1031)
- 🐛 رفع مشکل grant ([#1199](https://github.com/scriptscat/scriptcat/pull/1199)) (by @CodFrm)
- 🐛 رفع نبود UserAgentData در content.js ([#1183](https://github.com/scriptscat/scriptcat/pull/1183)) (by @cyfung1031)
- 🐛 مدیریت مشکل رمزگذاری سکریپت [#1115](https://github.com/scriptscat/scriptcat/issues/1115) ([#1138](https://github.com/scriptscat/scriptcat/pull/1138)) (by @CodFrm)
- 🐛 رفع نمایش آیکون سکریپت [#1052](https://github.com/scriptscat/scriptcat/issues/1052) ([#1104](https://github.com/scriptscat/scriptcat/pull/1104)) (by @CodFrm)
- 🐛 افزودن پیشوند UnoCSS برای حل تعارضهای CSS، رفع چیدمان CSS ([#1013](https://github.com/scriptscat/scriptcat/pull/1013)) (by @cyfung1031)
- 🐛 پاکسازی Alarm موجود هنگام انتخاب بررسی بهروزرسانی نامنظم سکریپت ([#996](https://github.com/scriptscat/scriptcat/pull/996)) (by @cyfung1031)
- 🐛 واردات و صادرات - رفع تاریخ/زمان آخرین تغییر نادرست سکریپتها ([#951](https://github.com/scriptscat/scriptcat/pull/951)) (by @cyfung1031)
- 🐛 رفع نمایش نام و توضیحات سکریپت با پیشوند زبان i18n [#1123](https://github.com/scriptscat/scriptcat/issues/1123) (by @CodFrm)
- 🐛 رفع اجرای نادرست unregister ([#1231](https://github.com/scriptscat/scriptcat/pull/1231)) (by @cyfung1031)

### ♻️ بازسازی و سازگاری

- ♻️ تنظیمات API userScripts / scripting، بهبود سازگاری (تکرار #704) ([#925](https://github.com/scriptscat/scriptcat/pull/925)) (by @cyfung1031)
- ♻️ تغییرات مرتبط با Cron: رفع اشکال، i18n، بهبود عبارت once، ارتقای کتابخانه cron ([#1126](https://github.com/scriptscat/scriptcat/pull/1126)) (by @cyfung1031)
- ♻️ بازسازی و بهینهسازی بارگذاری آیکون سکریپت ([#893](https://github.com/scriptscat/scriptcat/pull/893)) (by @CodFrm)
- ♻️ بهبود رمزگشایی متن ([#1166](https://github.com/scriptscat/scriptcat/pull/1166)) (by @cyfung1031)
- ⬆️ ارتقای نسخه هسته سازگار با swc ([#1186](https://github.com/scriptscat/scriptcat/pull/1186)) (by @cyfung1031)

### 🎨 بهبودهای رابط کاربری

- 🎨 تغییر شماره نشان آیکون افزونه پیشفرض به تعداد سکریپتها [#989](https://github.com/scriptscat/scriptcat/issues/989) (by @CodFrm)
- 🎨 زیباترکردن URL صفحه نصب ([#993](https://github.com/scriptscat/scriptcat/pull/993)) (by @cyfung1031)
- 🐛 بازسازی DraggableEntry، رفع تراز ارتفاع کارتها ([#1245](https://github.com/scriptscat/scriptcat/pull/1245)) (by @cyfung1031)

### متفرقه

- 🔒 بهبودهای امنیتی (DOMPurify، رفع آسیبپذیریهای وابستگی npm)
- 👷 بهینهسازی باندل Rspack، رفع زنجیره ابزار ساخت
- ⬆️ بهروزرسانی نسخههای وابستگی

**تاریخچه کامل تغییرات:** [مقایسه v1.2.6...v1.3.0](https://github.com/scriptscat/scriptcat/compare/v1.2.6...v1.3.0)

<a name="1.2.6"></a>

## 1.2.6 (2026-02-03)

### رفعشده

- 🐛 رفع خطای structuredClone ([#1192](https://github.com/scriptscat/scriptcat/issues/1192)) [[265e122](https://github.com/scriptscat/scriptcat/commit/265e122342366b166d3122cc8da485cb1295b924)] (by @cyfung1031)

<a name="1.2.5"></a>

## 1.2.5 (2026-02-02)

### رفعشده

- 🐛 رفع مشکل حذف همگامسازی سکریپت [#1158](https://github.com/scriptscat/scriptcat/issues/1158) [[5e91a31](https://github.com/scriptscat/scriptcat/commit/5e91a31e02761ba8061e3de1f4d15fc1d964346c)] (by @CodFrm)
- 🐛 سازگار با TM &#x60;@match www.website.com/*&#x60; ([#1165](https://github.com/scriptscat/scriptcat/issues/1165)) [[da66ff7](https://github.com/scriptscat/scriptcat/commit/da66ff70d25c3087cb8405289dc8b14df9c15f05)] (by @cyfung1031)
- 🐛 آخرین نسخه Edge 144 سکریپتهای کاربر را اضافه میکند [#1157](https://github.com/scriptscat/scriptcat/issues/1157) [[f7c1c73](https://github.com/scriptscat/scriptcat/commit/f7c1c730cf39cae02a9e6f815e3113ea9d2a8a05)] (by @CodFrm)
- 🐛 رفع مشکل نظارت پیوسته FileSystemObserver ([#1160](https://github.com/scriptscat/scriptcat/issues/1160)) [[9556769](https://github.com/scriptscat/scriptcat/commit/95567690d1bf77bfe8bedfd6a94c88949a77e115)] (by @cyfung1031)
- 🐛 اصلاحات جزئی locales.ts ([#1154](https://github.com/scriptscat/scriptcat/issues/1154)) [[1c44b68](https://github.com/scriptscat/scriptcat/commit/1c44b680dab3a95a51eb73cf92531efd0a192dc9)] (by @cyfung1031)
- 🐛 رفع مشکل زمان پنجره بهروزرسانی بازشو ([#1155](https://github.com/scriptscat/scriptcat/issues/1155)) [[c17f761](https://github.com/scriptscat/scriptcat/commit/c17f761807fb9b14aff09b9b08d19e4cbe72b8a5)] (by @cyfung1031)
- 🐛 رفع نمایش نام و توضیحات سکریپت با پیشوند زبان i18n [#1123](https://github.com/scriptscat/scriptcat/issues/1123) [[7ef7355](https://github.com/scriptscat/scriptcat/commit/7ef7355632fc989fa1cad44fd2069ff840bbd8df)] (by @CodFrm)
- 🐛 مدیریت مشکل مرجع مقدار [#1141](https://github.com/scriptscat/scriptcat/issues/1141) ([#1147](https://github.com/scriptscat/scriptcat/issues/1147)) [[0892fcd](https://github.com/scriptscat/scriptcat/commit/0892fcd452758030553c33ddf14f1ce4bc6d3efc)] (by @cyfung1031)

<a name="1.2.4"></a>

## 1.2.4 (2026-01-07)

رفع اشکالات همگامسازی، و بهروزرسانیهای نسخه دیگر صفحه تاریخچه تغییرات را بهطور خودکار باز نمیکنند

### اضافهشده

- ✨ حذف همگامسازی اکنون بهطور پیشفرض غیرفعال است ([#958](https://github.com/scriptscat/scriptcat/issues/958)) [[9c4c7dc](https://github.com/scriptscat/scriptcat/commit/9c4c7dc411357746db43a306d97ac41a71f2b49c)] (by @cyfung1031)
- ✨ ویرایشگر اکنون از GM.\* پشتیبانی میکند ([#1129](https://github.com/scriptscat/scriptcat/issues/1129)) [[bea0192](https://github.com/scriptscat/scriptcat/commit/bea0192c6cc50eff2ed4e1cc5dcc25f36bbe10e7)] (by @cyfung1031)

### تغییرشده

- ♻️ بهینهسازی منطق بازکردن صفحه تاریخچه تغییرات [#1110](https://github.com/scriptscat/scriptcat/issues/1110) [[d3ffedc](https://github.com/scriptscat/scriptcat/commit/d3ffedcffe752ca548f87f1640072fcd871b8604)] (by @CodFrm)

### رفعشده

- 🐛 scriptcat.d.tpl &amp; اصلاحات نوع ([#1130](https://github.com/scriptscat/scriptcat/issues/1130)) [[dd22ef5](https://github.com/scriptscat/scriptcat/commit/dd22ef544684d69e24a7aae098cb05cbab03daa8)] (by @cyfung1031)
- 🐛 رفع مشکلات همگامسازی ابری ([#1133](https://github.com/scriptscat/scriptcat/issues/1133)) [[a9383d2](https://github.com/scriptscat/scriptcat/commit/a9383d2012eb3953dc33c8886ce3891f404fa100)] (by @CodFrm)
- 🐛 رفع خطای &#x60;GM_addElement(&quot;tagName&quot;)&#x60; ([#1120](https://github.com/scriptscat/scriptcat/issues/1120)) [[ad19de5](https://github.com/scriptscat/scriptcat/commit/ad19de5c1793c8c079bedbf1b11c7c2ae27a469e)] (by @cyfung1031)
- 🐛 حذف منطق پاکسازی و بهینهسازی منطق checkuserscript ([#1113](https://github.com/scriptscat/scriptcat/issues/1113)) [[e635911](https://github.com/scriptscat/scriptcat/commit/e635911a3c11c3cb8acd1cfd507cb777e5ee7236)] (by @CodFrm)

### متفرقه

- 🏷️ اصلاحات TypeScript ([#1127](https://github.com/scriptscat/scriptcat/issues/1127)) [[b455724](https://github.com/scriptscat/scriptcat/commit/b4557244191018c18d5ce8ea8e8627bcfb7f7cdd)] (by @cyfung1031)
- 📝 تکمیل نظرات مثالها ([#1131](https://github.com/scriptscat/scriptcat/issues/1131)) [[292549e](https://github.com/scriptscat/scriptcat/commit/292549ed0f65952fe9f269aace23eefc7d6a3a0f)] (by @cyfung1031)

<a name="1.2.3"></a>

## 1.2.3 (2025-12-20)

برخی رفع اشکال

### تغییرشده

- ⚡ بهینهسازی نمایش زمان اجرای بعدی [#1093](https://github.com/scriptscat/scriptcat/issues/1093) [[324ce51](https://github.com/scriptscat/scriptcat/commit/324ce515c84699ca8d3bf1ee447fc6ef0656ae0d)] (by @CodFrm)

### رفعشده

- 🐛 رفع مشکل تطبیق URL برای سکریپتهای اولیه ([#1096](https://github.com/scriptscat/scriptcat/issues/1096)) [[a77effb](https://github.com/scriptscat/scriptcat/commit/a77effbab5ab4d1752065ef943d9c050ff99c066)] (by @cyfung1031)
- 🐛 رفع مشکل نمایش خیلی کوتاه پنجره بهروزرسانی ([#1088](https://github.com/scriptscat/scriptcat/issues/1088)) [[b2b2d5c](https://github.com/scriptscat/scriptcat/commit/b2b2d5c41ff70ee5430f7d8d156f480ac8fc3a1a)] (by @cyfung1031)
- 🐛 رفع نمایش غیرعادی زمانی که اعلان سکریپت کاربر فعال است ([#1086](https://github.com/scriptscat/scriptcat/issues/1086)) ([959c4db](https://github.com/scriptscat/scriptcat/commit/959c4dbed92f7bfe22a2f8ebb775c4189b5ff076))
- 🐛 responseHeaders: &#x60;سازگاری TM: \\r\\n&#x60; ([#1085](https://github.com/scriptscat/scriptcat/issues/1085)) [[15232c8](https://github.com/scriptscat/scriptcat/commit/15232c8543d93abfdafa1353d39d8a15d1dc385f)] (by @cyfung1031)
- 🐛 رفع مشکلات GM XHR ([#1082](https://github.com/scriptscat/scriptcat/issues/1082)) [[3d987c3](https://github.com/scriptscat/scriptcat/commit/3d987c300242a3c765146359c35ecd6d998f792c)] (by @CodFrm)

### متفرقه

- 🌐 مدیریت مشکلات i18n در صفحات بازشو [#1081](https://github.com/scriptscat/scriptcat/issues/1081) [[6b17d71](https://github.com/scriptscat/scriptcat/commit/6b17d7100e8572d72b3b7aaf8ea38be9cdf33f5f)] (by @CodFrm)

<a name="1.2.2"></a>

## 1.2.2 (2025-12-13)

برخی رفع اشکال

### رفعشده

- 🐛 رفع مشکل همگامسازی مکرر پسزمینه ([#1076](https://github.com/scriptscat/scriptcat/issues/1076)) [[45dc39b](https://github.com/scriptscat/scriptcat/commit/45dc39baa0f3326cf12e97312ab632dc46ba40f2)] (by @CodFrm)
- 🐛 رفع مشکل مدیریت تبهای خاص [#1066](https://github.com/scriptscat/scriptcat/issues/1066) ([50904fb](https://github.com/scriptscat/scriptcat/commit/50904fb46efdea10fd57677bc2d28c770b47e861))
- 🐛 رفع مدیریت سکریپت بدون قوانین تطبیق [#1071](https://github.com/scriptscat/scriptcat/issues/1071) ([560cdc0](https://github.com/scriptscat/scriptcat/commit/560cdc01fc0fc27fb7d0e3b877c63ba431206668))
- 🐛 رفع مشکل بستهبندی CI که مجوزهای اختیاری پسزمینه را حذف میکرد [[1f002f0](https://github.com/scriptscat/scriptcat/commit/1f002f0edf9892f023ae93b8522ff7c5e4a96559)] (by @CodFrm)
- 🐛 رفع نادیدهگرفتن تب دور انداختهشده ([#1058](https://github.com/scriptscat/scriptcat/issues/1058)) [[6165bf4](https://github.com/scriptscat/scriptcat/commit/6165bf48eb1d53ede0561c85c30135446c2ff882)] (by @cyfung1031)

<a name="1.2.1"></a>

## 1.2.1 (2025-12-06)

برخی رفع اشکال و مدیریت گزینههای اجرای پسزمینه.

### اضافهشده

- ✨ افزودن گزینه اجرای پسزمینه ([#1048](https://github.com/scriptscat/scriptcat/issues/1048)) [[626e84d](https://github.com/scriptscat/scriptcat/commit/626e84dbd4dda0731e0a5ffdbdf71ae10e884489)] (by @CodFrm)

### رفعشده

- 🐛 رفع مشکل بازنشانی شنونده پیام ناشی از document.write ([#1055](https://github.com/scriptscat/scriptcat/issues/1055)) [[1f3a3ec](https://github.com/scriptscat/scriptcat/commit/1f3a3ec335ed4b519599e9aa3036c66b6f0d10b2)] (by @cyfung1031)
- 🐛 رفع عملکرد فیلتر نمای فهرست [[e272dc6](https://github.com/scriptscat/scriptcat/commit/e272dc6ed151c15a1ef785b70ae100cb9e74a5dd)] (by @CodFrm)
- 🐛 مدیریت UserAgentData در مرحله اولیه ([#1045](https://github.com/scriptscat/scriptcat/issues/1045)) [[b4e08a8](https://github.com/scriptscat/scriptcat/commit/b4e08a812a08f42037837bbee54610ebc565063f)] (by @cyfung1031)
- 🐛 بازگرداندن گزینه useOpen برای GM_openInTab [#1043](https://github.com/scriptscat/scriptcat/issues/1043) ([#1044](https://github.com/scriptscat/scriptcat/issues/1044)) [[7f30198](https://github.com/scriptscat/scriptcat/commit/7f30198909824871e694d5ffbe7088e44a6d0b45)] (by @cyfung1031)
- 🐛 رفع مشکل userScripts تعریفنشده ([#1041](https://github.com/scriptscat/scriptcat/issues/1041)) [[4f2deda](https://github.com/scriptscat/scriptcat/commit/4f2deda69aa6aae7f6e791be1cd965a440b80e33)] (by @cyfung1031)
- 🐛 رفع ارجاع نادرست به `"monaco-editor"` در `AppContext` ([#983](https://github.com/scriptscat/scriptcat/issues/983)) [[4b8dae1](https://github.com/scriptscat/scriptcat/commit/4b8dae1f49208d13c4d19c4c627762fc1b04ea5e)] (by @cyfung1031)

**تاریخچه کامل تغییرات:** [مقایسه v1.2.0...v1.2.1](https://github.com/scriptscat/scriptcat/compare/v1.2.0...v1.2.1)

<a name="1.2.0"></a>

## 1.2.0 (2025-11-29)

این بهروزرسانی نوار کناری فهرست سکریپتها، نمای کارت، منطق دوستانهتر بررسی بهروزرسانی، پیکربندی ویرایشگر و موارد دیگر را به ارمغان میآورد. پایداری تزریق و زمان اجرا بهطور قابل توجهی بهبود یافته و مشکلات حیاتی CSP، صندوق ایمنی و GM API رفع شده است، همچنین بهینهسازیهای عملکردی و ساختاری نیز ارائه شده است.

برای جزئیات بیشتر، به تاریخچه تغییرات v1.2.0-beta.x و مستندات [v1.2](https://docs.scriptcat.org/docs/change/v1.2/) مراجعه کنید.

### 🚀 ویژگیهای اصلی جدید

- ✨ نوار کناری فهرست سکریپتها [#794](https://github.com/scriptscat/scriptcat/issues/794) (by @CodFrm)
- ✨ نمای کارت [#860](https://github.com/scriptscat/scriptcat/issues/860) (by @CodFrm)
- ✨ منطق دوستانهتر بررسی بهروزرسانی [#755](https://github.com/scriptscat/scriptcat/issues/755) (by @cyfung1031)
- ✨ افزودن پیکربندی ویرایشگر و تعاریف نوع ویرایشگر [#708](https://github.com/scriptscat/scriptcat/pull/708) (by @CodFrm)
- ✨ نمایش تعداد سکریپتها در پنجره بازشو ([#973](https://github.com/scriptscat/scriptcat/issues/973)) [[1134586](https://github.com/scriptscat/scriptcat/commit/1134586ff040ffc0cdddd3538e9ec493950c948a)] (by @cyfung1031)
- ✨ افزودن منوی چیدمان برای پنهانکردن نوار کناری کد [#689](https://github.com/scriptscat/scriptcat/issues/689) [[dd64da7](https://github.com/scriptscat/scriptcat/commit/dd64da719c081acbf21645e2b1e1f38653ffae8c)]
- ✨ افزودن دکمه بررسی نسخه SC ([#795](https://github.com/scriptscat/scriptcat/issues/795)) [[1680c66](https://github.com/scriptscat/scriptcat/commit/1680c66099120c0e497c1a1f5321f38fe0160ea0)] (by @cyfung1031)
- ✨ افزودن صفحه نظرسنجی پس از حذف افزونه [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]

### 🧩 تغییرات GM API

- ✨ پشتیبانی تزریق به داخل، سکریپتها اکنون میتوانند در محیط محتوا تزریق شوند [#711](https://github.com/scriptscat/scriptcat/issues/711)
- ✨ GM_openInTab از پنجره سنجاقشده، باز شدن در پنجره ناشناس و سایر پارامترها پشتیبانی میکند [#788](https://github.com/scriptscat/scriptcat/pull/788) (by @cyfung1031)
- ✨ GM_registerMenuCommand از زیرمنو و جداکننده پشتیبانی میکند [#831](https://github.com/scriptscat/scriptcat/pull/831) (by @cyfung1031)
- 🗑 حذف گزینه useOpen از GM_openInTab [#867](https://github.com/scriptscat/scriptcat/pull/867)
- ♻️ تنظیم منطق `@connect` ([#969](https://github.com/scriptscat/scriptcat/issues/969)) [[67914d2](https://github.com/scriptscat/scriptcat/commit/67914d2b7d57fa9c69706ae57ee5d3400c2643f9)] (by @cyfung1031)
- ♻️ بازسازی `GM_xmlhttpRequest` و کدهای مرتبط ([#901](https://github.com/scriptscat/scriptcat/issues/901)) [[fabd2e9](https://github.com/scriptscat/scriptcat/commit/fabd2e944235b460bc73df346b79d23ee4540af7)] (by @cyfung1031)

### سایر

- ⚡️ بهینهسازی پایداری و عملکرد
- 🐛 رفع مشکلات مختلف
- ♻️ بهینهسازی ساختار کد
- 🌐 بهبودهای i18n

**تاریخچه کامل تغییرات:** [مقایسه v1.1.2...v1.2.0](https://github.com/scriptscat/scriptcat/compare/v1.1.2...v1.2.0)

<a name="1.1.2"></a>

## 1.1.2 (2025-09-18)

رفع اشکال

### رفعشده

- 🐛 رفع مشکل sandbox toString [#737](https://github.com/scriptscat/scriptcat/issues/737) [[6ca24c9](https://github.com/scriptscat/scriptcat/commit/6ca24c9b171792035803ac4e1c69e473629f9d18)]
- 🐛 رفع مشکل نمایش 0 در نشان [#026c1d2](https://github.com/scriptscat/scriptcat/commit/026c1d2071dd4cfb6291f005d36717bcdf0a51c3)
- 🐛 رفع مشکل CSP تزریق سکریپت [#739](https://github.com/scriptscat/scriptcat/issues/739) [#728](https://github.com/scriptscat/scriptcat/issues/728) [[5da21b5](https://github.com/scriptscat/scriptcat/commit/5da21b5e3d0e7e86a1fd5dff57ba03ea641c19fa)]
- 🐛 رفع بازنشدن سکریپت پسزمینه در صفحه بازشو [[66ab70f](https://github.com/scriptscat/scriptcat/commit/66ab70fb10c28aaf0c9260a9591aab7e1ae35615)]
- 🐛 تقویت اعتبارسنجی نوع پیام [#676](https://github.com/scriptscat/scriptcat/issues/676) [[5073795](https://github.com/scriptscat/scriptcat/commit/50737957507ff9af3aa9ba9a6b7d444b643d1ff2)]
- 🐛 رفع مشکل document در GM xhr [#716](https://github.com/scriptscat/scriptcat/issues/716) [[1c46546](https://github.com/scriptscat/scriptcat/commit/1c465462f4e14ae461d54358710f5caf74208af3)]

<a name="1.1.1"></a>

## 1.1.1 (2025-09-07)

### اضافهشده

- ✨ افزودن پیکربندی ویرایشگر سفارشی و تعاریف نوع ویرایشگر ([#708](https://github.com/scriptscat/scriptcat/issues/708)) [[49eb379](https://github.com/scriptscat/scriptcat/commit/49eb3794774790d61c3ef787c865a9ba6fe82841)]

### رفعشده

- 🐛 رفع مشکلات سازگاری با نسخههای قدیمیتر مرورگر [#715](https://github.com/scriptscat/scriptcat/issues/715) [[4da8068](https://github.com/scriptscat/scriptcat/commit/4da806879c2b170672814d02e6f8ed98c9fae35b)]
- 💄 بهینهسازی نمایش منوی بازشو زمانی که پنجره بازشو خیلی کوچک است ([288650e](https://github.com/scriptscat/scriptcat/commit/288650e5e4cbdc3fa8658f0754ce427a1b3dec5a))
- 🐛 رفع مشکلات متعدد ([#710](https://github.com/scriptscat/scriptcat/issues/710)) [[6a2027a](https://github.com/scriptscat/scriptcat/commit/6a2027ac0bb5e0ed625df570240d068a98a34b31)] (by @WhiteSevs)

### متفرقه

- 🌐 مدیریت مشکلات i18n [[2adf69d](https://github.com/scriptscat/scriptcat/commit/2adf69d6ec3c30186f2c2ef89f97e3cba9e15a66)]

<a name="1.1.0"></a>

## 1.1.0 (2025-09-07)

رفع اشکال متعدد و بهبود سازگاری، افزودن پشتیبانی Dropbox، ویژگی جدید @early-start برای بارگذاری سریعتر از بارگذاری صفحه. برای جزئیات بیشتر، به تاریخچه تغییرات v1.1.0-beta.x مراجعه کنید.

### اضافهشده

- ✨ افزودن تنظیمات محیط زمان اجرای سکریپت [#628](https://github.com/scriptscat/scriptcat/issues/628) [[0d4a89e](https://github.com/scriptscat/scriptcat/commit/0d4a89efaecf0331dcc7fbb6df006b93a1525846)]
- ✨ جمعشدن پیشفرض زمانی که سکریپتهای پسزمینه وجود ندارند [#626](https://github.com/scriptscat/scriptcat/issues/626) ([9d0aac6](https://github.com/scriptscat/scriptcat/commit/9d0aac6aae11b96707ca1f7c024a24e9d55f217b))
- ✨ پشتیبانی Dropbox [#575](https://github.com/scriptscat/scriptcat/issues/575) [[2c66f21](https://github.com/scriptscat/scriptcat/commit/2c66f21f5118bd83a0eaa0f1baa3a31f2233e5b2)]
- ✨ بهینهسازی external.Tampermonkey برای بررسی وضعیت نصب SC زمانی که TM نصب نیست اما هر دو TM و SC فعال هستند ([#703](https://github.com/scriptscat/scriptcat/issues/703)) [[d0115c3](https://github.com/scriptscat/scriptcat/commit/d0115c33657260d803b6091139601b1b20407d4e)] (by @cyfung1031)
- ✨ افزودن @early-start برای بارگذاری سریعتر از صفحه ([#649](https://github.com/scriptscat/scriptcat/issues/649)) [[eb097dd](https://github.com/scriptscat/scriptcat/commit/eb097dd146dcd6f8ca712ed883571dbfb3d09f20])
- ✨ جستجوی سراسری کد ([#662](https://github.com/scriptscat/scriptcat/issues/662)) [[f8eafb7](https://github.com/scriptscat/scriptcat/commit/f8eafb7f955dad62c1b41ac477e929bf00c65982)] (by @RenjiYuusei)
- ✨ افزودن صفحه نظرسنجی پس از حذف افزونه [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]
- 📝 اصلاح صفحه نصب و فضای نام ([6f2f000](https://github.com/scriptscat/scriptcat/commit/6f2f000612908b7a88f6b70c2831092805c63bc7))
- ✨ افزودن کد QR برای نصب موبایل ([348237c](https://github.com/scriptscat/scriptcat/commit/348237c7ce9771c69025386926b1f73710cf6f42))

### رفعشده

- 🐛 رفع مشکل عدم امکان شروع نصب زمانی که شبکه نمیتواند به صفحه میانی نصب دسترسی پیدا کند [#705](https://github.com/scriptscat/scriptcat/issues/705) [[5f1e292](https://github.com/scriptscat/scriptcat/commit/5f1e2929d79c470ba4427c3cce01f5cd184a839b)]
- 🐛 مدیریت عبارت `@match *://*domain/*` [[039b445](https://github.com/scriptscat/scriptcat/commit/039b4454148947cd3c74de82b87804ee9815e60c)]
- 🐛 رفع مشکل نفوذ به صندوق ایمنی محیط افزونه [#700](https://github.com/scriptscat/scriptcat/issues/700) [[a1a868d](https://github.com/scriptscat/scriptcat/commit/a1a868dfe3199e666fe2bcb65cfb2ad0ad3d699b)]
- ✏️ backgroud -&gt; background ([#698](https://github.com/scriptscat/scriptcat/issues/698)) [[2594075](https://github.com/scriptscat/scriptcat/commit/2594075c4a50f4c79fa46bcda08d7b0cbcfe723c)] (by @cyfung1031)
- ✏️ CrhomeStorage -&gt; ChromeStorage ([#693](https://github.com/scriptscat/scriptcat/issues/693)) [[64c536d](https://github.com/scriptscat/scriptcat/commit/64c536dbd5fcb4c29eebc1109202bab69aaa3ee2)] (by @cyfung1031)
- 🐛 رفع GM.getTab و GM.getTabs ([#683](https://github.com/scriptscat/scriptcat/issues/683)) [[31de256](https://github.com/scriptscat/scriptcat/commit/31de256f02b5b61e27f0eec9ea673248ba8faa32)] (by @WhiteSevs)
- 🐛 رفع دامنه ازدسترفته در finalUrl ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[545d7c8](https://github.com/scriptscat/scriptcat/commit/545d7c8c0dd69c83bd2f0353518aafe6af81c0f4)] (by @cyfung1031)
- 🐛 سازگاری با هستههای قدیمیتر مرورگر [#647](https://github.com/scriptscat/scriptcat/issues/647) ([bba12d2](https://github.com/scriptscat/scriptcat/commit/bba12d23f04759cb9b7fdb63f0d95ae515ee94a9))
- 🐛 رفع دامنه ازدسترفته در finalUrl ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[3ed018a](https://github.com/scriptscat/scriptcat/commit/3ed018a7a54803fcf2e1791316e0166ed0b52007)] (by @cyfung1031)
- 💚 رفع مشکل lint react/jsx-no-literals [[017b608](https://github.com/scriptscat/scriptcat/commit/017b60886be601e3e0e1719cf249da32d5686c30)]
- 🐛 سازگاری با هستههای قدیمیتر مرورگر [#647](https://github.com/scriptscat/scriptcat/issues/647) [[0e2f817](https://github.com/scriptscat/scriptcat/commit/0e2f8173c8b44bd6ad44bdffc73fa302a96a058e)]
- 🐛 بهینهسازی تزریق window.external ([#646](https://github.com/scriptscat/scriptcat/issues/646)) [[0b2668a](https://github.com/scriptscat/scriptcat/commit/0b2668aadcab35a33ff9abc4bd030dffb87ea168)] (by @cyfung1031)
- 🐛 رفع مشکل عدم امکان بستهشدن خودکار صفحه احراز هویت ذخیرهسازی ابری [[7748088](https://github.com/scriptscat/scriptcat/commit/7748088e63c1fc660b6a6ae5613cf04f9da99b8c)]
- 🐛 رفع مشکل `@connect` \\* که کار نمیکرد [#623](https://github.com/scriptscat/scriptcat/issues/623) [[76481c8](https://github.com/scriptscat/scriptcat/commit/76481c845b34414a7f15ed18ec61f7dff7eef091)]
- 🐛 افزودن تستهای واحد و رفع مشکل `@exclude` ([#618](https://github.com/scriptscat/scriptcat/issues/618)) [[0046bb7](https://github.com/scriptscat/scriptcat/commit/0046bb78800a2c46edaac785b8e9592327772a3b)] (by @cyfung1031)
- 🐛 رفع مشکل ناتوانی برخی لینکهای .user.js در نصب سکریپتها [#599](https://github.com/scriptscat/scriptcat/issues/599) [[ccd2639](https://github.com/scriptscat/scriptcat/commit/ccd2639858f0f3cde28f284376fe8ed998d935ae)]
- 🐛 رفع شکست ایجاد سکریپت جدید [[d42d6e7](https://github.com/scriptscat/scriptcat/commit/d42d6e7d408a84674facf9ab0da6eac0e384502f)]
- 🐛 رفع فراداده ([#610](https://github.com/scriptscat/scriptcat/issues/610)) [[4d98cce](https://github.com/scriptscat/scriptcat/commit/4d98cce0ca1281cc58f551ea4e6700e340780d3f)] (by @cyfung1031)
- 🐛 رفع نشان پنجره بازشو ([#605](https://github.com/scriptscat/scriptcat/issues/605)) [[eff9230](https://github.com/scriptscat/scriptcat/commit/eff92309de99abb0cf48ef4727afaa113bc2fbb6)] (by @cyfung1031)
- 🐛 رفع ScriptEditor.tsx ([#603](https://github.com/scriptscat/scriptcat/issues/603)) [[a9aadba](https://github.com/scriptscat/scriptcat/commit/a9aadba372b813c16bdc5f0aeb07c68981f48c63)] (by @cyfung1031)
- 🐛 رفع CSS نمایشگر کد و ویرایشگر ([#602](https://github.com/scriptscat/scriptcat/issues/602)) [[2e86785](https://github.com/scriptscat/scriptcat/commit/2e8678513efaccd42c8dc2aa89f8b76679aa8420)] (by @cyfung1031)
- 🐛 رفع مشکل همزمانی getFaviconFromDomain ([#597](https://github.com/scriptscat/scriptcat/issues/597)) [[1872fe1](https://github.com/scriptscat/scriptcat/commit/1872fe165ab204b155a56f037c111d2d7776c2b9)] (by @cyfung1031)
- 🐛 رفع خطای بازکردن تب در چند پنجره [#586](https://github.com/scriptscat/scriptcat/issues/586) [[54c1da2](https://github.com/scriptscat/scriptcat/commit/54c1da29c2bd8bd8f5ef2d85b7aed8b334de296f)]
- 🐛 رفع مشکل سازگاری openerTabId ([#586](https://github.com/scriptscat/scriptcat/issues/586)) [[b861fc8](https://github.com/scriptscat/scriptcat/commit/b861fc8620e53b885cad98db03f1dd10ec9d296c)] (by @cyfung1031)

### متفرقه

- 📝 ایجاد README_RU.md و CONTRIBUTING_RU.md ([#678](https://github.com/scriptscat/scriptcat/issues/678)) [[597ab03](https://github.com/scriptscat/scriptcat/commit/597ab0378fe5ced01637cf411326ef7845b8ce2b)] (by @Ioann)
- 👷 تنظیمات سازگاری (سازگاری pack.js) ([#669](https://github.com/scriptscat/scriptcat/issues/669)) [[fec45e6](https://github.com/scriptscat/scriptcat/commit/fec45e6606a609b10b79c58d2fcba02c2ce71e16)] (by @cyfung1031)
- 🌐 اصلاح و گسترش زبان ویتنامی ([#661](https://github.com/scriptscat/scriptcat/issues/661)) [[6847a59](https://github.com/scriptscat/scriptcat/commit/6847a596c4b06c75e13594ef60e4b9dfa5718cf3)] (by @RenjiYuusei)
- 🌐 اصلاحات ترجمه ([#635](https://github.com/scriptscat/scriptcat/issues/635)) [[19296de](https://github.com/scriptscat/scriptcat/commit/19296de6a3815e5965eb33401a55da9b2bd22bb4)] (by @cyfung1031)
- 🌐 رفع مشکل i18n راهنمای شروع [#627](https://github.com/scriptscat/scriptcat/issues/627) [[9683f96](https://github.com/scriptscat/scriptcat/commit/9683f965400ab6a2bac15349aca4335911766eac)]
- 👷 بهینهسازی کد pack.js ([#615](https://github.com/scriptscat/scriptcat/issues/615)) [[870dd9b](https://github.com/scriptscat/scriptcat/commit/870dd9bc6b7eff3eceefa915452e773ec0565180)] (by @cyfung1031)
