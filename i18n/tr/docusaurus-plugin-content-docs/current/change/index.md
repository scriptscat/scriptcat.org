---
title: Değişiklik Günlüğü
---

import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="changelog" />

Beta sürümünün değişiklik günlüğü için lütfen [Beta Değişiklik Günlüğü](./beta-changelog.md) bölümüne bakın

⚠️ Lütfen unutmayın: Windows 8/7/XP kullanıyorsanız veya tarayıcı çekirdek sürümünüz \<120'den düşükse, [ScriptCat'in eski sürümünü](https://github.com/scriptscat/scriptcat/releases) elle kurmanız gerekir. v0.16.x, Manifest V2'yi destekleyen son sürümdür. Kurulum adımları şurada bulunabilir: [Paketten Çıkarılmış Klasörü Yükleyerek Eklenti Kurma](/use/use.md#load-unpacked-extension-installation).

<a name="1.4.0"></a>

## 1.4.0 (2026-06-26)

Bu sürüm, Firefox MV3'e hazırlık amacıyla düşük seviyeli yeniden yapılandırmanın yanı sıra düzenleyici deneyimi iyileştirmeleri (düzenleme menüsü, Ctrl+Shift+F biçimlendirme, Monaco hızlı düzeltmesi), betik keşfi için çok platformlu arama motoru seçimi, `@unwrap` / `window.onurlchange` / `@run-at context-menu` gibi yeni yetenekler, bulut depolama eşitleme güvenilirliğinin kapsamlı şekilde güçlendirilmesi ve çok sayıda GM API, arayüz ve kararlılık düzeltmesi (uzun süreli bellek sızıntısı ve prototip kirliliği güvenlik açıkları dahil) getirir. ScriptCat AI Agent, dev / Beta derlemelerinde önizleme olarak sunulur ve kararlı sürümde henüz etkinleştirilmemiştir.

### 🚀 Başlıca Yeni Özellikler

- 🧪 ScriptCat AI Agent (**Önizleme — yalnızca dev / Beta derlemelerinde mevcuttur, kararlı sürümde henüz etkin değildir**) — konuşmaya dayalı etkileşim, araç çağırma, Skill sistemi, MCP protokolü ve daha fazlasını içeren yapay zeka destekli ajan sistemi ([#1324](https://github.com/scriptscat/scriptcat/pull/1324)) (by @CodFrm)
- ✨ `@unwrap` meta veri etiketinin desteği ([#1213](https://github.com/scriptscat/scriptcat/pull/1213)) (by @cyfung1031)
- ✨ TM'nin `window.onurlchange` özelliğinin Navigation API ile uygulanması ([#1315](https://github.com/scriptscat/scriptcat/pull/1315)) (by @cyfung1031)
- ✨ `@run-at context-menu` desteğinin geri getirilmesi ([#1442](https://github.com/scriptscat/scriptcat/pull/1442)) (by @cyfung1031)
- ✨ Betik keşfi, çok platformlu arama motoru seçimini destekler ([#1295](https://github.com/scriptscat/scriptcat/pull/1295)) (by @CodFrm)
- ✨ Daha fazla simge hizmet sağlayıcısı eklendi ([#1333](https://github.com/scriptscat/scriptcat/pull/1333)) (by @cyfung1031)
- ✨ Betik listesindeki "son güncelleme" sütununa güncelleme kontrol simgesi eklendi ([#1304](https://github.com/scriptscat/scriptcat/pull/1304)) (by @CodFrm)
- ✨ Düzenleme çakışması ve betik adı çakışması işlemleri iyileştirildi ([#1223](https://github.com/scriptscat/scriptcat/pull/1223)) (by @cyfung1031)

### 🧑‍💻 Düzenleyici

- ✨ Düzenleyiciye düzenleme menüsü eklendi (bul, değiştir, geri al vb.) ([#1303](https://github.com/scriptscat/scriptcat/pull/1303)) (by @CodFrm)
- ✨ Düzenleyici Ctrl+Shift+F biçimlendirmeyi destekler ([#1415](https://github.com/scriptscat/scriptcat/pull/1415)) (by @cyfung1031)
- ✨ Monaco hızlı düzeltmesi ve kullanıcı betiği meta veri ipuçları iyileştirildi ([#1461](https://github.com/scriptscat/scriptcat/pull/1461)) (by @cyfung1031)
- 🐛 Ctrl-F / Ctrl-H kısayolları düzeltildi ([#1312](https://github.com/scriptscat/scriptcat/pull/1312)) (by @cyfung1031)
- 🐛 ESLint düzeltme özelliğinin çalışmaması düzeltildi [#1079](https://github.com/scriptscat/scriptcat/issues/1079) ([#1184](https://github.com/scriptscat/scriptcat/pull/1184)) (by @cyfung1031)
- 🐛 Düzenleyici CSS düzen sorunları düzeltildi ([#1460](https://github.com/scriptscat/scriptcat/pull/1460)) (by @cyfung1031)
- 🐛 ScriptEditor betik listesinin açık temada görüntülenmesi düzeltildi ([#1288](https://github.com/scriptscat/scriptcat/pull/1288)) (by @CodFrm)
- 🐛 ScriptEditor sorunları düzeltildi ve iyileştirildi ([#1258](https://github.com/scriptscat/scriptcat/pull/1258)) (by @cyfung1031)

### ⚡️ Performans İyileştirmeleri

- 🚑 Uzun süreli ScriptCat oturumları sırasında olası bellek sızıntısı düzeltildi ([#1401](https://github.com/scriptscat/scriptcat/pull/1401)) (by @cyfung1031)
- ⚡️ Küresel DNR kurallarındaki Baidu dosya sistemi bağımlılığı kaldırıldı, istek başına çerez devre dışı bırakmaya geçildi ([#1377](https://github.com/scriptscat/scriptcat/pull/1377)) (by @cyfung1031)
- ⚡️ Betik keşfi için çok platformlu arama motoru seçimi optimize edildi ([#1379](https://github.com/scriptscat/scriptcat/pull/1379)) (by @cyfung1031)
- ⚡️ Titremeyi önlemek için kurulum sayfası loadingStatus için tek aralıklı yazı tipi kullanıldı ([#1381](https://github.com/scriptscat/scriptcat/pull/1381)) (by @cyfung1031)
- ⚡️ pushValue işleme optimize edildi ([#1403](https://github.com/scriptscat/scriptcat/pull/1403)) (by @cyfung1031)
- ⚡️ Daha eksiksiz izin denetimleri ve daha iyi kullanıcı betiği izin ipuçları ([#1251](https://github.com/scriptscat/scriptcat/pull/1251)) (by @cyfung1031)
- ⚡️ MessageConnect bellek yönetimi ve temizleme mekanizması iyileştirildi ([#1248](https://github.com/scriptscat/scriptcat/pull/1248)) (by @cyfung1031)

### 🐛 Hata Düzeltmeleri

- 🐛 Bulut depolama eşitleme güvenilirliği güçlendirildi (Dropbox / WebDAV / Google Drive / OneDrive kimlik doğrulama, yol işleme ve yeniden deneme mantığı) ([#1374](https://github.com/scriptscat/scriptcat/pull/1374) ~ [#1395](https://github.com/scriptscat/scriptcat/pull/1395)) (by @cyfung1031)
- 🐛 Birden çok bulut eşitleme sorunu düzeltildi: OneDrive sıfır bayt yükleme, Google Drive / OneDrive hata normalizasyonu, S3 özel meta veri modifiedDate ([#1405](https://github.com/scriptscat/scriptcat/pull/1405)) ([#1406](https://github.com/scriptscat/scriptcat/pull/1406)) ([#1408](https://github.com/scriptscat/scriptcat/pull/1408)) (by @cyfung1031)
- 🐛 WebDAV yazma denetimi kaldırıldı; kökü yazılamaz olan hizmetlerde (örn. Nutstore) yanlış negatifler önlendi ([#1445](https://github.com/scriptscat/scriptcat/pull/1445)) (by @CodFrm)
- 🐛 Site erişim izni eksikken çapraz kaynak isteği hatası düzeltildi ([#1477](https://github.com/scriptscat/scriptcat/pull/1477)) (by @cyfung1031)
- 🐛 Edge Android mobil açılır pencere uyarlaması düzeltildi [#686](https://github.com/scriptscat/scriptcat/issues/686) ([#1507](https://github.com/scriptscat/scriptcat/pull/1507)) (by @CodFrm)
- 🐛 İlk yükleme sırasında beyaz arka plan yanıp sönmesi düzeltildi [#1497](https://github.com/scriptscat/scriptcat/issues/1497) ([#1498](https://github.com/scriptscat/scriptcat/pull/1498)) (by @cyfung1031)
- 🐛 Mesaj bağlantılarının (GM API / port) doğru şekilde temizlenmemesi düzeltildi ([#1474](https://github.com/scriptscat/scriptcat/pull/1474)) (by @cyfung1031)
- 🐛 Arama eksikken `@match` şablon uyumsuzluğu düzeltildi ([#1466](https://github.com/scriptscat/scriptcat/pull/1466)) (by @cyfung1031)
- 🐛 Tampermonkey yarı kum havuzunda üst sınıf kalıtımını düzeltmek için `protoBaseDescs` eklendi ([#1463](https://github.com/scriptscat/scriptcat/pull/1463)) (by @cyfung1031)
- 🐛 `GM_xmlhttpRequest` msgConn için eksik null işleme düzeltildi ([#1433](https://github.com/scriptscat/scriptcat/pull/1433)) (by @cyfung1031)
- 🐛 GM xhr'ın anormal onloadend'i doğru işlememesi düzeltildi ([#1412](https://github.com/scriptscat/scriptcat/pull/1412)) (by @cyfung1031)
- 🐛 ScriptEditor listesinin dinamik güncelleme ve görüntüleme sorunları düzeltildi ([#1414](https://github.com/scriptscat/scriptcat/pull/1414)) (by @cyfung1031)
- 🐛 Eşzamanlı xhr ile oturum kuralı sayısı sorunu düzeltildi ([#1353](https://github.com/scriptscat/scriptcat/pull/1353)) (by @cyfung1031)
- 🐛 Geçersiz bir cron ifadesinin tüm sayfayı çökertmesi düzeltildi ([#1327](https://github.com/scriptscat/scriptcat/pull/1327)) (by @cyfung1031)
- 🐛 Toplu güncelleme kontrolü sırasında tek bir betiğin zaman aşımına uğramasıyla tüm betiklerin başarısız olması düzeltildi ([#1265](https://github.com/scriptscat/scriptcat/pull/1265)) (by @cyfung1031)
- 🐛 isIncognito, userAgent ve run-in için extensionEnv işleme eklendi ([#1368](https://github.com/scriptscat/scriptcat/pull/1368)) (by @cyfung1031)
- 🐛 Kısmen gizlenen başlangıç rehberi düğmesi düzeltildi [#1396](https://github.com/scriptscat/scriptcat/issues/1396) ([#1398](https://github.com/scriptscat/scriptcat/pull/1398)) (by @cyfung1031)
- 🐛 Betik yönetim sayfasında engellenen araç ipucu düzeltildi [#1386](https://github.com/scriptscat/scriptcat/issues/1386) ([#1387](https://github.com/scriptscat/scriptcat/pull/1387)) (by @Xdy1579883916)
- 🐛 Kart modunda Sidebar'ın anormal yeniden boyutlanmaya neden olması düzeltildi [#1179](https://github.com/scriptscat/scriptcat/issues/1179) ([#1373](https://github.com/scriptscat/scriptcat/pull/1373)) (by @cyfung1031)
- 🐛 Sürükle-bırak ile yerel dosya kurulumlarında yanlış origin düzeltildi ([#1371](https://github.com/scriptscat/scriptcat/pull/1371)) (by @cyfung1031)
- 🐛 Dil değiştirme mesajı düzeltildi ([#1380](https://github.com/scriptscat/scriptcat/pull/1380)) (by @cyfung1031)
- 🐛 Günlük görüntüleme arayüzü iyileştirildi ([#1372](https://github.com/scriptscat/scriptcat/pull/1372)) (by @cyfung1031)
- 🐛 UserConfigPanel CSS düzeltildi ([#1361](https://github.com/scriptscat/scriptcat/pull/1361)) (by @cyfung1031)
- 🐛 create_context içindeki boş nesne için `Object.create(null)` kullanıldı ([#1397](https://github.com/scriptscat/scriptcat/pull/1397)) (by @cyfung1031)
- 🐛 Abone olunan betikler için sessiz güncelleme ve bağlantı izni mantığı düzeltildi ([#1201](https://github.com/scriptscat/scriptcat/pull/1201)) (by @cyfung1031)
- 🐛 Günlük sayfası sorgu düğmesinin saati yenilememesi düzeltildi ([#1294](https://github.com/scriptscat/scriptcat/pull/1294)) (by @CodFrm)

### 🔒 Güvenlik İyileştirmeleri

- 🔒 Güvenilmeyen YAML kullanıcı yapılandırma anahtarlarıyla prototip kirliliği düzeltildi ([#1494](https://github.com/scriptscat/scriptcat/pull/1494)) (by @qdzsh)
- 🔒 Tüm npm bağımlılık güvenlik açıkları düzeltildi ([#1350](https://github.com/scriptscat/scriptcat/pull/1350)) ([#1364](https://github.com/scriptscat/scriptcat/pull/1364)) ([#1365](https://github.com/scriptscat/scriptcat/pull/1365)) (by @cyfung1031)

### ♻️ Yeniden Yapılandırma ve Uyumluluk

- ♻️ Firefox MV3 uyarlamasına hazırlık amacıyla düşük seviyeli yeniden yapılandırma ([#1457](https://github.com/scriptscat/scriptcat/pull/1457)) ([#1480](https://github.com/scriptscat/scriptcat/pull/1480)) (by @cyfung1031)
- ♻️ Betik kaynak güncelleme mantığı (updateResource) ve eşzamanlılık kontrolü yeniden yapılandırıldı, kaynak önbellek uyumluluğu geri getirildi ([#1193](https://github.com/scriptscat/scriptcat/pull/1193)) (by @cyfung1031)
- ♻️ ZIP işleme için jszip yerine JSZipp kullanıldı (yedek içe / dışa aktarma) ve kullanılmayan jszip bağımlılığı kaldırıldı ([#1479](https://github.com/scriptscat/scriptcat/pull/1479)) (by @cyfung1031)
- ♻️ Offscreen ↔ ServiceWorker iletişimi postMessage kanalı üzerinden birleştirildi ([#1299](https://github.com/scriptscat/scriptcat/pull/1299)) (by @CodFrm)
- ♻️ VSCodeConnect kodu yeniden yapılandırıldı ([#1170](https://github.com/scriptscat/scriptcat/pull/1170)) (by @cyfung1031)
- ⚡️ ts.worker.js AMO doğrulamasını geçmek için 4MB'ye sıkıştırıldı, MV3 arka plan izin hatası düzeltildi ([#1221](https://github.com/scriptscat/scriptcat/pull/1221)) (by @cyfung1031)

### 🌐 Uluslararasılaştırma

- 🌐 Çok dilli terminoloji çevirileri düzeltildi (özellikle Geleneksel Çince iyileştirildi) ve çeviri terminoloji yönergeleri eklendi ([#1468](https://github.com/scriptscat/scriptcat/pull/1468)) (by @cyfung1031)

### Diğer

- ✨ fetchIconByDomain simge hizmeti scriptcat.org'a geçirildi ([#1268](https://github.com/scriptscat/scriptcat/pull/1268)) (by @cyfung1031)
- 🔥 Crowdin ve ach-UG sahte diliyle ilgili içerik kaldırıldı ([#1385](https://github.com/scriptscat/scriptcat/pull/1385)) (by @CodFrm)

<a name="0.16.15"></a>

## 0.16.15 (2026-05-19)

### 🐛 Hata Düzeltmeleri

- 🐛 MV2 paketleme betiği derleme komutu düzeltildi [#1423](https://github.com/scriptscat/scriptcat/issues/1423) (by @CodFrm)
- 🐛 WebExtensions API Değişikliklerine uyum sağlandı (Firefox 149-152), CSP ayarlamaları dahil ([#1448](https://github.com/scriptscat/scriptcat/pull/1448)) (by @cyfung1031)

<a name="0.16.14"></a>

## 0.16.14 (2026-04-26)

### 🚀 Başlıca Yeni Özellikler

- ✨ FirefoxMV2, MV3 ana öğeleriyle eşitlendi: TypeScript 4.9'a, tsconfig es2022'ye yükseltildi; betik şablonları (normal/crontab/background) MV3 ile hizalandı; cron `once(...)` ifade desteğiyle geliştirildi; Monaco Editor çok dilli desteği ([#1331](https://github.com/scriptscat/scriptcat/pull/1331)) (by @cyfung1031)

### ♻️ Yeniden Yapılandırma ve Uyumluluk

- 🔥 MV3 ile hizalamak için axios bağımlılığı kaldırıldı ([#1339](https://github.com/scriptscat/scriptcat/pull/1339)) (by @cyfung1031)

### 🐛 Hata Düzeltmeleri

- 🐛 window.parent iç içe iframe'inin postMessage mesajları alamaması düzeltildi ([#1335](https://github.com/scriptscat/scriptcat/pull/1335)) (by @cyfung1031)

<a name="1.3.2"></a>

## 1.3.2 (2026-03-28)

### 🐛 Hata Düzeltmeleri

- 🐛 Hata 406'dan kaçınmak için fetchScriptBody'den Accept başlığı kaldırıldı ([#1306](https://github.com/scriptscat/scriptcat/pull/1306)) (by @cyfung1031)
- 🐛 WebDAV çerez kimlik doğrulama çakışması ve authType desteği düzeltildi ([#1308](https://github.com/scriptscat/scriptcat/pull/1308)) (by @CodFrm)
- 🐛 Biçimlendirme hataları doğru şekilde görüntülendi ([#1310](https://github.com/scriptscat/scriptcat/pull/1310)) (by @cyfung1031)
- 🐛 Cihazlar arası eşitlemeyi önlemek için cihaza özel yapılandırmalar için chrome.storage.local kullanıldı ([#1309](https://github.com/scriptscat/scriptcat/pull/1309)) (by @CodFrm)
- 🐛 Kod düzenleyici ipucu sorunları düzeltildi ([#1301](https://github.com/scriptscat/scriptcat/pull/1301)) (by @cyfung1031)
- 🐛 Günlük sayfasında tarih seçici açılır penceresinin kırpılması düzeltildi ([#1292](https://github.com/scriptscat/scriptcat/pull/1292)) (by @cyfung1031)
- 🐛 Bulut sürücü bağlı değilken bağlantıyı kaldır düğmesinin görünmesi düzeltildi ([#1291](https://github.com/scriptscat/scriptcat/pull/1291)) (by @CodFrm)
- 🐛 Engellenen açılır pencere düzeltildi ([#1290](https://github.com/scriptscat/scriptcat/pull/1290)) (by @cyfung1031)

<a name="1.3.1"></a>

## 1.3.1 (2026-03-13)

### 🐛 Hata Düzeltmeleri

- 🚑 Diğer eklentilerin chrome.runtime enjekte etmesinden kaynaklanan ortam algılama hatası düzeltildi [#1280](https://github.com/scriptscat/scriptcat/issues/1280) ([#1281](https://github.com/scriptscat/scriptcat/pull/1281)) (by @CodFrm)

### Diğer

- ✅ Playwright E2E testleri ve GM API işlevsel testleri eklendi ([#1283](https://github.com/scriptscat/scriptcat/pull/1283)) (by @CodFrm)

<a name="1.3.0"></a>

## 1.3.0 (2026-03-10)

Bu güncelleme Amazon S3 depolama, betik çalışma zamanı seçenekleri, harici web sitesi erişimi olmadan kurulum ve daha fazlasını getirir. Mesajlaşma sistemini ve React performansını önemli ölçüde optimize eder, çok sayıda GM API, arayüz ve kararlılık sorununu düzeltir ve kapsamlı kod kalitesi iyileştirmeleri içerir.

### 🚀 Başlıca Yeni Özellikler

- ✨ Amazon S3 depolama eklendi [#1146](https://github.com/scriptscat/scriptcat/issues/1146) ([#1189](https://github.com/scriptscat/scriptcat/pull/1189)) (by @CodFrm)
- ✨ Betik çalışma zamanı seçenekleri ([#895](https://github.com/scriptscat/scriptcat/pull/895)) (by @CodFrm)
- ✨ Harici web sitesi erişimi olmadan kurulum + kurulum sayfası düzen ayarlamaları ([#842](https://github.com/scriptscat/scriptcat/pull/842)) (by @cyfung1031)
- ✨ Betik işlevselliği devre dışıyken gri simge gösterimi [#897](https://github.com/scriptscat/scriptcat/issues/897) (by @CodFrm)
- ✨ Menü genişletilmiş öğe sayısı 0 olduğunda etkileşim optimize edildi [#868](https://github.com/scriptscat/scriptcat/issues/868) (by @CodFrm)
- ✨ Yaygın hataları önlemek için şablonda varsayılan `@noframes` ([#900](https://github.com/scriptscat/scriptcat/pull/900)) (by @cyfung1031)
- ✨ Betik adı değiştiğinde kurulum bağlantısının yeni kurulum olarak yanlış değerlendirilmesi önlendi ([#824](https://github.com/scriptscat/scriptcat/pull/824)) (by @cyfung1031)
- ✨ `@grant` çakışma doğrulaması düzeltildi, yinelenen meta bildirim hata uyarısı eklendi ([#902](https://github.com/scriptscat/scriptcat/pull/902)) (by @cyfung1031)
- ✨ Değeri olmayan veya boş değerli `@version` kabul edildi ([#1216](https://github.com/scriptscat/scriptcat/pull/1216)) (by @cyfung1031)
- ✨ Gizli düzenleyici kenar çubuğu konumu ayarlandı [#1185](https://github.com/scriptscat/scriptcat/issues/1185) ([#1254](https://github.com/scriptscat/scriptcat/pull/1254)) (by @CodFrm)

### 🧩 GM API Değişiklikleri

- 🐛 GM_addElement sorunu düzeltildi, işlem içerik ortamına taşındı ([#1233](https://github.com/scriptscat/scriptcat/pull/1233)) (by @cyfung1031)
- 🐛 `GM_download` öğesine `conflictAction` parametresi eklendi ([#1250](https://github.com/scriptscat/scriptcat/pull/1250)) (by @cyfung1031)
- 🐛 GM API async bildirimleri düzeltildi, Promise doğru şekilde döndürülüyor ([#1169](https://github.com/scriptscat/scriptcat/pull/1169)) (by @cyfung1031)
- ♻️ Firefox uyumluluğu: GM_setClipboard ([#928](https://github.com/scriptscat/scriptcat/pull/928)) (by @cyfung1031)
- 🐛 GM_value sorunu düzeltildi [#1192](https://github.com/scriptscat/scriptcat/issues/1192) (by @CodFrm)
- 🐛 İndirme dosya adının klasörleri desteklememesi düzeltildi ([#1203](https://github.com/scriptscat/scriptcat/pull/1203)) (by @cyfung1031)

### ⚡️ Performans İyileştirmeleri

- ♻️ Mesajlaşma sistemi yeniden yapılandırıldı: storage.local yayını + Firefox MV3 scripting uyumluluğu + izlenemez dinamik eşitleme MessageFlag ([#1067](https://github.com/scriptscat/scriptcat/pull/1067)) (by @cyfung1031)
- ⚡️ React yeniden oluşturma sorunları düzeltildi (ScriptCard & ScriptTable) ([#1182](https://github.com/scriptscat/scriptcat/pull/1182)) (by @cyfung1031)
- ⚡️ React yeniden oluşturma sorunları düzeltildi (Popup) ([#1181](https://github.com/scriptscat/scriptcat/pull/1181)) (by @cyfung1031)
- ⚡️ Repo performansı optimize edildi ([#1232](https://github.com/scriptscat/scriptcat/pull/1232)) (by @CodFrm)
- ⚡️ Meta veriler chrome.storage.session dışına taşındı ([#1027](https://github.com/scriptscat/scriptcat/pull/1027)) (by @cyfung1031)
- ⚡️ Karakter kümesi algılama iyileştirildi ([#1140](https://github.com/scriptscat/scriptcat/pull/1140)) (by @cyfung1031)
- ⚡️ Betikler arasında yinelenen depolamayı önlemek için simgeler URL'ye göre saklandı ([#909](https://github.com/scriptscat/scriptcat/pull/909)) (by @cyfung1031)
- ⚡️ parseMetadata kodu optimize edildi ([#903](https://github.com/scriptscat/scriptcat/pull/903)) (by @cyfung1031)
- 🐛 Bellek sızıntıları ve nesne özelliği ifşası düzeltildi ([#1242](https://github.com/scriptscat/scriptcat/pull/1242)) (by @cyfung1031)
- ♻️ Redux kaldırıldı, durum yönetimi basitleştirildi ([#1206](https://github.com/scriptscat/scriptcat/pull/1206)) (by @cyfung1031)

### 🧑‍💻 Düzenleyici

- ✨ Monaco Editor ayarları optimize edildi, `/* global xxx */` düzeltmesi eklendi ([#1012](https://github.com/scriptscat/scriptcat/pull/1012)) (by @cyfung1031)
- ✨ Monaco Editor ipuçları çok dilli destek ve `@require-css` ipucu eklendi ([#960](https://github.com/scriptscat/scriptcat/pull/960)) (by @cyfung1031)

### 🐛 Hata Düzeltmeleri

- 🐛 Gizli pencere izin denetimi çakışması nedeniyle tekrarlanan yeniden başlatmalar düzeltildi (by @CodFrm)
- 🐛 include `*?*` ifade işleme düzeltildi [#1271](https://github.com/scriptscat/scriptcat/issues/1271) ([#1272](https://github.com/scriptscat/scriptcat/pull/1272)) (by @CodFrm)
- 🔒 Duyuru bildirimi HTML içeriği DOMPurify ile temizlendi ([#1274](https://github.com/scriptscat/scriptcat/pull/1274)) (by @CodFrm)
- 🐛 Betik ayarları - izin yönetimi kontrolünün çalışmaması düzeltildi ([#1267](https://github.com/scriptscat/scriptcat/pull/1267)) (by @CodFrm)
- 🐛 Açılır pencere içeriğinin ekran kaydırmasını takip etmesi düzeltildi [#1256](https://github.com/scriptscat/scriptcat/issues/1256) ([#1263](https://github.com/scriptscat/scriptcat/pull/1263)) (by @cyfung1031)
- 🐛 Kurulum bağlantısı ayrıştırma hatası düzeltildi [#1235](https://github.com/scriptscat/scriptcat/issues/1235) ([#1260](https://github.com/scriptscat/scriptcat/pull/1260)) (by @cyfung1031)
- 🐛 focusin/focusout gecikmesine neden olan sürükleme bileşeni düzeltildi [#1224](https://github.com/scriptscat/scriptcat/issues/1224) ([#1243](https://github.com/scriptscat/scriptcat/pull/1243)) (by @CodFrm)
- 🐛 Harici eklenti API'sinin çalışmaması düzeltildi ([#1217](https://github.com/scriptscat/scriptcat/pull/1217)) (by @cyfung1031)
- 🐛 grant sorunu düzeltildi ([#1199](https://github.com/scriptscat/scriptcat/pull/1199)) (by @CodFrm)
- 🐛 content.js'te eksik UserAgentData düzeltildi ([#1183](https://github.com/scriptscat/scriptcat/pull/1183)) (by @cyfung1031)
- 🐛 Betik kodlama sorunu ele alındı [#1115](https://github.com/scriptscat/scriptcat/issues/1115) ([#1138](https://github.com/scriptscat/scriptcat/pull/1138)) (by @CodFrm)
- 🐛 Betik simgesi görüntüleme düzeltildi [#1052](https://github.com/scriptscat/scriptcat/issues/1052) ([#1104](https://github.com/scriptscat/scriptcat/pull/1104)) (by @CodFrm)
- 🐛 CSS çakışmalarını çözmek için UnoCSS öneki eklendi, CSS düzeni düzeltildi ([#1013](https://github.com/scriptscat/scriptcat/pull/1013)) (by @cyfung1031)
- 🐛 Düzensiz betik güncelleme kontrolü seçilirken mevcut Alarm temizlendi ([#996](https://github.com/scriptscat/scriptcat/pull/996)) (by @cyfung1031)
- 🐛 İçe &amp; dışa aktarma - betiklerin yanlış son değiştirilme tarihi/saati düzeltildi ([#951](https://github.com/scriptscat/scriptcat/pull/951)) (by @cyfung1031)
- 🐛 i18n önekli dil betik adı ve açıklama görüntüleme düzeltildi [#1123](https://github.com/scriptscat/scriptcat/issues/1123) (by @CodFrm)
- 🐛 unregister'ın doğru çalışmaması düzeltildi ([#1231](https://github.com/scriptscat/scriptcat/pull/1231)) (by @cyfung1031)

### ♻️ Yeniden Yapılandırma ve Uyumluluk

- ♻️ userScripts / scripting API ayarlamaları, uyumluluk geliştirildi (yeniden #704) ([#925](https://github.com/scriptscat/scriptcat/pull/925)) (by @cyfung1031)
- ♻️ Cron ile ilgili değişiklikler: hata düzeltmeleri, i18n, once ifadesi geliştirmesi, cron kitaplığı yükseltmesi ([#1126](https://github.com/scriptscat/scriptcat/pull/1126)) (by @cyfung1031)
- ♻️ Betik simgesi yükleme yeniden yapılandırıldı ve optimize edildi ([#893](https://github.com/scriptscat/scriptcat/pull/893)) (by @CodFrm)
- ♻️ Metin kod çözme geliştirildi ([#1166](https://github.com/scriptscat/scriptcat/pull/1166)) (by @cyfung1031)
- ⬆️ swc uyumlu çekirdek sürümü yükseltildi ([#1186](https://github.com/scriptscat/scriptcat/pull/1186)) (by @cyfung1031)

### 🎨 Arayüz İyileştirmeleri

- 🎨 Varsayılan eklenti simgesi rozet numarası betik sayısına değiştirildi [#989](https://github.com/scriptscat/scriptcat/issues/989) (by @CodFrm)
- 🎨 Kurulum sayfası URL'si güzelleştirildi ([#993](https://github.com/scriptscat/scriptcat/pull/993)) (by @cyfung1031)
- 🐛 DraggableEntry yeniden yapılandırıldı, kart yüksekliği hizalaması düzeltildi ([#1245](https://github.com/scriptscat/scriptcat/pull/1245)) (by @cyfung1031)

### Çeşitli

- 🔒 Güvenlik iyileştirmeleri (DOMPurify, npm bağımlılık güvenlik açığı düzeltmeleri)
- 👷 Rspack paketleme optimizasyonu, derleme araç zinciri düzeltmeleri
- ⬆️ Bağımlılık sürüm güncellemeleri

**Tam değişiklik günlüğü:** [v1.2.6...v1.3.0'u karşılaştır](https://github.com/scriptscat/scriptcat/compare/v1.2.6...v1.3.0)

<a name="1.2.6"></a>

## 1.2.6 (2026-02-03)

### Düzeltildi

- 🐛 structuredClone hatası düzeltildi ([#1192](https://github.com/scriptscat/scriptcat/issues/1192)) [[265e122](https://github.com/scriptscat/scriptcat/commit/265e122342366b166d3122cc8da485cb1295b924)] (by @cyfung1031)

<a name="1.2.5"></a>

## 1.2.5 (2026-02-02)

### Düzeltildi

- 🐛 Betik eşitleme silme sorunu düzeltildi [#1158](https://github.com/scriptscat/scriptcat/issues/1158) [[5e91a31](https://github.com/scriptscat/scriptcat/commit/5e91a31e02761ba8061e3de1f4d15fc1d964346c)] (by @CodFrm)
- 🐛 TM &#x60;@match www.website.com/*&#x60; ile uyumlu ([#1165](https://github.com/scriptscat/scriptcat/issues/1165)) [[da66ff7](https://github.com/scriptscat/scriptcat/commit/da66ff70d25c3087cb8405289dc8b14df9c15f05)] (by @cyfung1031)
- 🐛 Edge'in en son sürümü 144 kullanıcı betiklerini ekliyor [#1157](https://github.com/scriptscat/scriptcat/issues/1157) [[f7c1c73](https://github.com/scriptscat/scriptcat/commit/f7c1c730cf39cae02a9e6f815e3113ea9d2a8a05)] (by @CodFrm)
- 🐛 FileSystemObserver sürekli izleme sorunu düzeltildi ([#1160](https://github.com/scriptscat/scriptcat/issues/1160)) [[9556769](https://github.com/scriptscat/scriptcat/commit/95567690d1bf77bfe8bedfd6a94c88949a77e115)] (by @cyfung1031)
- 🐛 locales.ts küçük düzeltmeler ([#1154](https://github.com/scriptscat/scriptcat/issues/1154)) [[1c44b68](https://github.com/scriptscat/scriptcat/commit/1c44b680dab3a95a51eb73cf92531efd0a192dc9)] (by @cyfung1031)
- 🐛 Açılır pencere güncelleme penceresi zaman sorunu düzeltildi ([#1155](https://github.com/scriptscat/scriptcat/issues/1155)) [[c17f761](https://github.com/scriptscat/scriptcat/commit/c17f761807fb9b14aff09b9b08d19e4cbe72b8a5)] (by @cyfung1031)
- 🐛 i18n önekli dil betik adı ve açıklama görüntüleme düzeltildi [#1123](https://github.com/scriptscat/scriptcat/issues/1123) [[7ef7355](https://github.com/scriptscat/scriptcat/commit/7ef7355632fc989fa1cad44fd2069ff840bbd8df)] (by @CodFrm)
- 🐛 Değer referansı sorunu ele alındı [#1141](https://github.com/scriptscat/scriptcat/issues/1141) ([#1147](https://github.com/scriptscat/scriptcat/issues/1147)) [[0892fcd](https://github.com/scriptscat/scriptcat/commit/0892fcd452758030553c33ddf14f1ce4bc6d3efc)] (by @cyfung1031)

<a name="1.2.4"></a>

## 1.2.4 (2026-01-07)

Eşitleme hataları düzeltildi ve sürüm güncellemeleri artık değişiklik günlüğü sayfasını otomatik olarak açmayacak

### Eklendi

- ✨ Eşitleme silme artık varsayılan olarak devre dışı ([#958](https://github.com/scriptscat/scriptcat/issues/958)) [[9c4c7dc](https://github.com/scriptscat/scriptcat/commit/9c4c7dc411357746db43a306d97ac41a71f2b49c)] (by @cyfung1031)
- ✨ Düzenleyici artık GM.\* destekliyor ([#1129](https://github.com/scriptscat/scriptcat/issues/1129)) [[bea0192](https://github.com/scriptscat/scriptcat/commit/bea0192c6cc50eff2ed4e1cc5dcc25f36bbe10e7)] (by @cyfung1031)

### Değiştirildi

- ♻️ Değişiklik günlüğü sayfası açma mantığı optimize edildi [#1110](https://github.com/scriptscat/scriptcat/issues/1110) [[d3ffedc](https://github.com/scriptscat/scriptcat/commit/d3ffedcffe752ca548f87f1640072fcd871b8604)] (by @CodFrm)

### Düzeltildi

- 🐛 scriptcat.d.tpl &amp; tür düzeltmeleri ([#1130](https://github.com/scriptscat/scriptcat/issues/1130)) [[dd22ef5](https://github.com/scriptscat/scriptcat/commit/dd22ef544684d69e24a7aae098cb05cbab03daa8)] (by @cyfung1031)
- 🐛 Bulut eşitleme sorunları düzeltildi ([#1133](https://github.com/scriptscat/scriptcat/issues/1133)) [[a9383d2](https://github.com/scriptscat/scriptcat/commit/a9383d2012eb3953dc33c8886ce3891f404fa100)] (by @CodFrm)
- 🐛 &#x60;GM_addElement(&quot;tagName&quot;)&#x60; hatası düzeltildi ([#1120](https://github.com/scriptscat/scriptcat/issues/1120)) [[ad19de5](https://github.com/scriptscat/scriptcat/commit/ad19de5c1793c8c079bedbf1b11c7c2ae27a469e)] (by @cyfung1031)
- 🐛 Temizleme mantığı kaldırıldı ve checkuserscript mantığı optimize edildi ([#1113](https://github.com/scriptscat/scriptcat/issues/1113)) [[e635911](https://github.com/scriptscat/scriptcat/commit/e635911a3c11c3cb8acd1cfd507cb777e5ee7236)] (by @CodFrm)

### Çeşitli

- 🏷️ TypeScript revizyonları ([#1127](https://github.com/scriptscat/scriptcat/issues/1127)) [[b455724](https://github.com/scriptscat/scriptcat/commit/b4557244191018c18d5ce8ea8e8627bcfb7f7cdd)] (by @cyfung1031)
- 📝 Örnek yorum eklemeleri ([#1131](https://github.com/scriptscat/scriptcat/issues/1131)) [[292549e](https://github.com/scriptscat/scriptcat/commit/292549ed0f65952fe9f269aace23eefc7d6a3a0f)] (by @cyfung1031)

<a name="1.2.3"></a>

## 1.2.3 (2025-12-20)

Bazı hata düzeltmeleri

### Değiştirildi

- ⚡ Sonraki çalışma zamanı görüntüleme optimize edildi [#1093](https://github.com/scriptscat/scriptcat/issues/1093) [[324ce51](https://github.com/scriptscat/scriptcat/commit/324ce515c84699ca8d3bf1ee447fc6ef0656ae0d)] (by @CodFrm)

### Düzeltildi

- 🐛 Erken betikler için URL eşleştirme sorunu düzeltildi ([#1096](https://github.com/scriptscat/scriptcat/issues/1096)) [[a77effb](https://github.com/scriptscat/scriptcat/commit/a77effbab5ab4d1752065ef943d9c050ff99c066)] (by @cyfung1031)
- 🐛 Güncelleme açılır penceresinin çok kısa görüntülenme sorunu düzeltildi ([#1088](https://github.com/scriptscat/scriptcat/issues/1088)) [[b2b2d5c](https://github.com/scriptscat/scriptcat/commit/b2b2d5c41ff70ee5430f7d8d156f480ac8fc3a1a)] (by @cyfung1031)
- 🐛 Kullanıcı betiği bildirimi etkinken anormal görüntüleme düzeltildi ([#1086](https://github.com/scriptscat/scriptcat/issues/1086)) ([959c4db](https://github.com/scriptscat/scriptcat/commit/959c4dbed92f7bfe22a2f8ebb775c4189b5ff076))
- 🐛 responseHeaders: &#x60;TM uyumluluğu: \\r\\n&#x60; ([#1085](https://github.com/scriptscat/scriptcat/issues/1085)) [[15232c8](https://github.com/scriptscat/scriptcat/commit/15232c8543d93abfdafa1353d39d8a15d1dc385f)] (by @cyfung1031)
- 🐛 GM XHR sorunları düzeltildi ([#1082](https://github.com/scriptscat/scriptcat/issues/1082)) [[3d987c3](https://github.com/scriptscat/scriptcat/commit/3d987c300242a3c765146359c35ecd6d998f792c)] (by @CodFrm)

### Çeşitli

- 🌐 Açılır sayfalarda i18n sorunlarının ele alınması [#1081](https://github.com/scriptscat/scriptcat/issues/1081) [[6b17d71](https://github.com/scriptscat/scriptcat/commit/6b17d7100e8572d72b3b7aaf8ea38be9cdf33f5f)] (by @CodFrm)

<a name="1.2.2"></a>

## 1.2.2 (2025-12-13)

Bazı hata düzeltmeleri

### Düzeltildi

- 🐛 Sık arka plan eşitleme sorunu düzeltildi ([#1076](https://github.com/scriptscat/scriptcat/issues/1076)) [[45dc39b](https://github.com/scriptscat/scriptcat/commit/45dc39baa0f3326cf12e97312ab632dc46ba40f2)] (by @CodFrm)
- 🐛 Özel sekme işleme sorunu düzeltildi [#1066](https://github.com/scriptscat/scriptcat/issues/1066) ([50904fb](https://github.com/scriptscat/scriptcat/commit/50904fb46efdea10fd57677bc2d28c770b47e861))
- 🐛 Eşleştirme kuralı olmayan betik işleme düzeltildi [#1071](https://github.com/scriptscat/scriptcat/issues/1071) ([560cdc0](https://github.com/scriptscat/scriptcat/commit/560cdc01fc0fc27fb7d0e3b877c63ba431206668))
- 🐛 Arka plan isteğe bağlı izinleri kaldıran CI paketleme sorunu düzeltildi [[1f002f0](https://github.com/scriptscat/scriptcat/commit/1f002f0edf9892f023ae93b8522ff7c5e4a96559)] (by @CodFrm)
- 🐛 Atılan sekmeyi yoksayma düzeltildi ([#1058](https://github.com/scriptscat/scriptcat/issues/1058)) [[6165bf4](https://github.com/scriptscat/scriptcat/commit/6165bf48eb1d53ede0561c85c30135446c2ff882)] (by @cyfung1031)

<a name="1.2.1"></a>

## 1.2.1 (2025-12-06)

Bazı hata düzeltmeleri ve arka plan çalıştırma seçeneklerinin ele alınması.

### Eklendi

- ✨ Arka plan çalıştırma seçeneği eklendi ([#1048](https://github.com/scriptscat/scriptcat/issues/1048)) [[626e84d](https://github.com/scriptscat/scriptcat/commit/626e84dbd4dda0731e0a5ffdbdf71ae10e884489)] (by @CodFrm)

### Düzeltildi

- 🐛 document.write nedeniyle mesaj dinleyici sıfırlama sorunu düzeltildi ([#1055](https://github.com/scriptscat/scriptcat/issues/1055)) [[1f3a3ec](https://github.com/scriptscat/scriptcat/commit/1f3a3ec335ed4b519599e9aa3036c66b6f0d10b2)] (by @cyfung1031)
- 🐛 Liste görünümü filtreleme işlevi düzeltildi [[e272dc6](https://github.com/scriptscat/scriptcat/commit/e272dc6ed151c15a1ef785b70ae100cb9e74a5dd)] (by @CodFrm)
- 🐛 Erken aşamada UserAgentData ele alındı ([#1045](https://github.com/scriptscat/scriptcat/issues/1045)) [[b4e08a8](https://github.com/scriptscat/scriptcat/commit/b4e08a812a08f42037837bbee54610ebc565063f)] (by @cyfung1031)
- 🐛 GM_openInTab için useOpen seçeneği geri getirildi [#1043](https://github.com/scriptscat/scriptcat/issues/1043) ([#1044](https://github.com/scriptscat/scriptcat/issues/1044)) [[7f30198](https://github.com/scriptscat/scriptcat/commit/7f30198909824871e694d5ffbe7088e44a6d0b45)] (by @cyfung1031)
- 🐛 userScripts undefined sorunu düzeltildi ([#1041](https://github.com/scriptscat/scriptcat/issues/1041)) [[4f2deda](https://github.com/scriptscat/scriptcat/commit/4f2deda69aa6aae7f6e791be1cd965a440b80e33)] (by @cyfung1031)
- 🐛 `AppContext` içinde `"monaco-editor"` için yanlış referans düzeltildi ([#983](https://github.com/scriptscat/scriptcat/issues/983)) [[4b8dae1](https://github.com/scriptscat/scriptcat/commit/4b8dae1f49208d13c4d19c4c627762fc1b04ea5e)] (by @cyfung1031)

**Tam değişiklik günlüğü:** [v1.2.0...v1.2.1'i karşılaştır](https://github.com/scriptscat/scriptcat/compare/v1.2.0...v1.2.1)

<a name="1.2.0"></a>

## 1.2.0 (2025-11-29)

Bu güncelleme betik listesi kenar çubuğu, kart görünümü, daha dostane güncelleme kontrol mantığı, düzenleyici yapılandırması ve daha fazlasını getirir. Enjeksiyon ve çalışma zamanı kararlılığı önemli ölçüde iyileştirildi; CSP, sandbox, GM API ile ilgili kritik sorunlar düzeltildi, ayrıca performans ve yapısal optimizasyonlar sağlandı.

Daha fazla ayrıntı için v1.2.0-beta.x değişiklik günlüğüne ve [v1.2](https://docs.scriptcat.org/docs/change/v1.2/) belgelerine bakın.

### 🚀 Başlıca Yeni Özellikler

- ✨ Betik listesi kenar çubuğu [#794](https://github.com/scriptscat/scriptcat/issues/794) (by @CodFrm)
- ✨ Kart görünümü [#860](https://github.com/scriptscat/scriptcat/issues/860) (by @CodFrm)
- ✨ Daha dostane güncelleme kontrol mantığı [#755](https://github.com/scriptscat/scriptcat/issues/755) (by @cyfung1031)
- ✨ Düzenleyici yapılandırması ve düzenleyici tür tanımları eklendi [#708](https://github.com/scriptscat/scriptcat/pull/708) (by @CodFrm)
- ✨ Açılır pencerede betik sayısı gösterimi ([#973](https://github.com/scriptscat/scriptcat/issues/973)) [[1134586](https://github.com/scriptscat/scriptcat/commit/1134586ff040ffc0cdddd3538e9ec493950c948a)] (by @cyfung1031)
- ✨ Kod kenar çubuğunu gizlemek için düzen menüsü eklendi [#689](https://github.com/scriptscat/scriptcat/issues/689) [[dd64da7](https://github.com/scriptscat/scriptcat/commit/dd64da719c081acbf21645e2b1e1f38653ffae8c)]
- ✨ SC sürüm kontrol düğmesi eklendi ([#795](https://github.com/scriptscat/scriptcat/issues/795)) [[1680c66](https://github.com/scriptscat/scriptcat/commit/1680c66099120c0e497c1a1f5321f38fe0160ea0)] (by @cyfung1031)
- ✨ Eklenti kaldırma sonrası anket sayfası eklendi [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]

### 🧩 GM API Değişiklikleri

- ✨ İçine enjeksiyon desteği, betikler artık içerik ortamına enjekte edilebilir [#711](https://github.com/scriptscat/scriptcat/issues/711)
- ✨ GM_openInTab sabitlenmiş pencere, gizli pencerede açma ve diğer parametreleri destekler [#788](https://github.com/scriptscat/scriptcat/pull/788) (by @cyfung1031)
- ✨ GM_registerMenuCommand alt menü ve ayırıcıyı destekler [#831](https://github.com/scriptscat/scriptcat/pull/831) (by @cyfung1031)
- 🗑 GM_openInTab'den useOpen seçeneği kaldırıldı [#867](https://github.com/scriptscat/scriptcat/pull/867)
- ♻️ `@connect` mantığı ayarlandı ([#969](https://github.com/scriptscat/scriptcat/issues/969)) [[67914d2](https://github.com/scriptscat/scriptcat/commit/67914d2b7d57fa9c69706ae57ee5d3400c2643f9)] (by @cyfung1031)
- ♻️ `GM_xmlhttpRequest` ve ilgili kod yeniden yapılandırıldı ([#901](https://github.com/scriptscat/scriptcat/issues/901)) [[fabd2e9](https://github.com/scriptscat/scriptcat/commit/fabd2e944235b460bc73df346b79d23ee4540af7)] (by @cyfung1031)

### Diğer

- ⚡️ Kararlılık ve performans optimizasyonları
- 🐛 Çeşitli sorunlar düzeltildi
- ♻️ Kod yapısı optimizasyonu
- 🌐 i18n iyileştirmeleri

**Tam değişiklik günlüğü:** [v1.1.2...v1.2.0'ı karşılaştır](https://github.com/scriptscat/scriptcat/compare/v1.1.2...v1.2.0)

<a name="1.1.2"></a>

## 1.1.2 (2025-09-18)

Hata düzeltmeleri

### Düzeltildi

- 🐛 sandbox toString sorunu düzeltildi [#737](https://github.com/scriptscat/scriptcat/issues/737) [[6ca24c9](https://github.com/scriptscat/scriptcat/commit/6ca24c9b171792035803ac4e1c69e473629f9d18)]
- 🐛 Rozetin 0 gösterme sorunu düzeltildi [[026c1d2](https://github.com/scriptscat/scriptcat/commit/026c1d2071dd4cfb6291f005d36717bcdf0a51c3)]
- 🐛 Betik enjeksiyonu CSP sorunu düzeltildi [#739](https://github.com/scriptscat/scriptcat/issues/739) [#728](https://github.com/scriptscat/scriptcat/issues/728) [[5da21b5](https://github.com/scriptscat/scriptcat/commit/5da21b5e3d0e7e86a1fd5dff57ba03ea641c19fa)]
- 🐛 Açılır sayfada arka plan betiğinin genişlememesi düzeltildi [[66ab70f](https://github.com/scriptscat/scriptcat/commit/66ab70fb10c28aaf0c9260a9591aab7e1ae35615)]
- 🐛 Mesaj türü doğrulaması güçlendirildi [#676](https://github.com/scriptscat/scriptcat/issues/676) [[5073795](https://github.com/scriptscat/scriptcat/commit/50737957507ff9af3aa9ba9a6b7d444b643d1ff2)]
- 🐛 GM xhr document sorunu düzeltildi [#716](https://github.com/scriptscat/scriptcat/issues/716) [[1c46546](https://github.com/scriptscat/scriptcat/commit/1c465462f4e14ae461d54358710f5caf74208af3)]

<a name="1.1.1"></a>

## 1.1.1 (2025-09-07)

### Eklendi

- ✨ Özel düzenleyici yapılandırması ve düzenleyici tür tanımları eklendi ([#708](https://github.com/scriptscat/scriptcat/issues/708)) [[49eb379](https://github.com/scriptscat/scriptcat/commit/49eb3794774790d61c3ef787c865a9ba6fe82841)]

### Düzeltildi

- 🐛 Eski tarayıcı sürümleriyle uyumluluk sorunları düzeltildi [#715](https://github.com/scriptscat/scriptcat/issues/715) [[4da8068](https://github.com/scriptscat/scriptcat/commit/4da806879c2b170672814d02e6f8ed98c9fae35b)]
- 💄 Açılır pencere çok küçükken açılır menü görüntüleme optimize edildi ([288650e](https://github.com/scriptscat/scriptcat/commit/288650e5e4cbdc3fa8658f0754ce427a1b3dec5a))
- 🐛 Birden çok sorun düzeltildi ([#710](https://github.com/scriptscat/scriptcat/issues/710)) [[6a2027a](https://github.com/scriptscat/scriptcat/commit/6a2027ac0bb5e0ed625df570240d068a98a34b31)] (by @WhiteSevs)

### Çeşitli

- 🌐 i18n sorunları ele alındı [[2adf69d](https://github.com/scriptscat/scriptcat/commit/2adf69d6ec3c30186f2c2ef89f97e3cba9e15a66)]

<a name="1.1.0"></a>

## 1.1.0 (2025-09-07)

Çok sayıda hata düzeltmesi ve uyumluluk iyileştirmesi, Dropbox desteği eklendi, sayfa yüklemesinden daha hızlı yükleme için yeni @early-start özelliği. Daha fazla ayrıntı için v1.1.0-beta.x değişiklik günlüğüne bakın.

### Eklendi

- ✨ Betik çalışma zamanı ortam ayarları eklendi [#628](https://github.com/scriptscat/scriptcat/issues/628) [[0d4a89e](https://github.com/scriptscat/scriptcat/commit/0d4a89efaecf0331dcc7fbb6df006b93a1525846)]
- ✨ Arka plan betiği yokken varsayılan olarak daraltma [#626](https://github.com/scriptscat/scriptcat/issues/626) ([9d0aac6](https://github.com/scriptscat/scriptcat/commit/9d0aac6aae11b96707ca1f7c024a24e9d55f217b))
- ✨ Dropbox desteği [#575](https://github.com/scriptscat/scriptcat/issues/575) [[2c66f21](https://github.com/scriptscat/scriptcat/commit/2c66f21f5118bd83a0eaa0f1baa3a31f2233e5b2)]
- ✨ TM kurulu değilken ancak TM ve SC etkinken SC kurulum durumunu kontrol etmek için external.Tampermonkey optimize edildi ([#703](https://github.com/scriptscat/scriptcat/issues/703)) [[d0115c3](https://github.com/scriptscat/scriptcat/commit/d0115c33657260d803b6091139601b1b20407d4e)] (by @cyfung1031)
- ✨ Sayfadan daha hızlı yüklemek için @early-start eklendi ([#649](https://github.com/scriptscat/scriptcat/issues/649)) [[eb097dd](https://github.com/scriptscat/scriptcat/commit/eb097dd146dcd6f8ca712ed883571dbfb3d09f20)]
- ✨ Küresel kod arama ([#662](https://github.com/scriptscat/scriptcat/issues/662)) [[f8eafb7](https://github.com/scriptscat/scriptcat/commit/f8eafb7f955dad62c1b41ac477e929bf00c65982)] (by @RenjiYuusei)
- ✨ Eklenti kaldırma sonrası anket sayfası eklendi [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]
- 📝 Kurulum sayfası ve ad alanı değiştirildi ([6f2f000](https://github.com/scriptscat/scriptcat/commit/6f2f000612908b7a88f6b70c2831092805c63bc7))
- ✨ Mobil kurulum için QR kodu eklendi ([348237c](https://github.com/scriptscat/scriptcat/commit/348237c7ce9771c69025386926b1f73710cf6f42))

### Düzeltildi

- 🐛 Ağ kurulum ara sayfasına erişemediğinde kurulumun tetiklenememesi düzeltildi [#705](https://github.com/scriptscat/scriptcat/issues/705) [[5f1e292](https://github.com/scriptscat/scriptcat/commit/5f1e2929d79c470ba4427c3cce01f5cd184a839b)]
- 🐛 `@match *://*domain/*` ifadesi ele alındı [[039b445](https://github.com/scriptscat/scriptcat/commit/039b4454148947cd3c74de82b87804ee9815e60c)]
- 🐛 Eklenti ortamı sandbox sızma sorunu düzeltildi [#700](https://github.com/scriptscat/scriptcat/issues/700) [[a1a868d](https://github.com/scriptscat/scriptcat/commit/a1a868dfe3199e666fe2bcb65cfb2ad0ad3d699b)]
- ✏️ backgroud -&gt; background ([#698](https://github.com/scriptscat/scriptcat/issues/698)) [[2594075](https://github.com/scriptscat/scriptcat/commit/2594075c4a50f4c79fa46bcda08d7b0cbcfe723c)] (by @cyfung1031)
- ✏️ CrhomeStorage -&gt; ChromeStorage ([#693](https://github.com/scriptscat/scriptcat/issues/693)) [[64c536d](https://github.com/scriptscat/scriptcat/commit/64c536dbd5fcb4c29eebc1109202bab69aaa3ee2)] (by @cyfung1031)
- 🐛 GM.getTab ve GM.getTabs düzeltildi ([#683](https://github.com/scriptscat/scriptcat/issues/683)) [[31de256](https://github.com/scriptscat/scriptcat/commit/31de256f02b5b61e27f0eec9ea673248ba8faa32)] (by @WhiteSevs)
- 🐛 finalUrl'de eksik alan adı düzeltildi ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[545d7c8](https://github.com/scriptscat/scriptcat/commit/545d7c8c0dd69c83bd2f0353518aafe6af81c0f4)] (by @cyfung1031)
- 🐛 Daha düşük tarayıcı çekirdekleriyle uyumluluk [#647](https://github.com/scriptscat/scriptcat/issues/647) ([bba12d2](https://github.com/scriptscat/scriptcat/commit/bba12d23f04759cb9b7fdb63f0d95ae515ee94a9))
- 🐛 finalUrl'de eksik alan adı düzeltildi ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[3ed018a](https://github.com/scriptscat/scriptcat/commit/3ed018a7a54803fcf2e1791316e0166ed0b52007)] (by @cyfung1031)
- 💚 react/jsx-no-literals lint sorunu düzeltildi [[017b608](https://github.com/scriptscat/scriptcat/commit/017b60886be601e3e0e1719cf249da32d5686c30)]
- 🐛 Daha düşük tarayıcı çekirdekleriyle uyumluluk [#647](https://github.com/scriptscat/scriptcat/issues/647) [[0e2f817](https://github.com/scriptscat/scriptcat/commit/0e2f8173c8b44bd6ad44bdffc73fa302a96a058e)]
- 🐛 window.external enjeksiyonu optimize edildi ([#646](https://github.com/scriptscat/scriptcat/issues/646)) [[0b2668a](https://github.com/scriptscat/scriptcat/commit/0b2668aadcab35a33ff9abc4bd030dffb87ea168)] (by @cyfung1031)
- 🐛 Bulut depolama kimlik doğrulama sayfasının otomatik kapanamaması düzeltildi [[7748088](https://github.com/scriptscat/scriptcat/commit/7748088e63c1fc660b6a6ae5613cf04f9da99b8c)]
- 🐛 `@connect` \\* çalışmama sorunu düzeltildi [#623](https://github.com/scriptscat/scriptcat/issues/623) [[76481c8](https://github.com/scriptscat/scriptcat/commit/76481c845b34414a7f15ed18ec61f7dff7eef091)]
- 🐛 Birim testleri eklendi ve `@exclude` sorunu düzeltildi ([#618](https://github.com/scriptscat/scriptcat/issues/618)) [[0046bb7](https://github.com/scriptscat/scriptcat/commit/0046bb78800a2c46edaac785b8e9592327772a3b)] (by @cyfung1031)
- 🐛 Bazı .user.js bağlantılarının betik kuramaması düzeltildi [#599](https://github.com/scriptscat/scriptcat/issues/599) [[ccd2639](https://github.com/scriptscat/scriptcat/commit/ccd2639858f0f3cde28f284376fe8ed998d935ae)]
- 🐛 Yeni betik oluşturma hatası düzeltildi [[d42d6e7](https://github.com/scriptscat/scriptcat/commit/d42d6e7d408a84674facf9ab0da6eac0e384502f)]
- 🐛 Meta veriler düzeltildi ([#610](https://github.com/scriptscat/scriptcat/issues/610)) [[4d98cce](https://github.com/scriptscat/scriptcat/commit/4d98cce0ca1281cc58f551ea4e6700e340780d3f)] (by @cyfung1031)
- 🐛 Açılır pencere rozeti düzeltildi ([#605](https://github.com/scriptscat/scriptcat/issues/605)) [[eff9230](https://github.com/scriptscat/scriptcat/commit/eff92309de99abb0cf48ef4727afaa113bc2fbb6)] (by @cyfung1031)
- 🐛 ScriptEditor.tsx düzeltildi ([#603](https://github.com/scriptscat/scriptcat/issues/603)) [[a9aadba](https://github.com/scriptscat/scriptcat/commit/a9aadba372b813c16bdc5f0aeb07c68981f48c63)] (by @cyfung1031)
- 🐛 Kod görüntüleyici &amp; düzenleyici CSS düzeltildi ([#602](https://github.com/scriptscat/scriptcat/issues/602)) [[2e86785](https://github.com/scriptscat/scriptcat/commit/2e8678513efaccd42c8dc2aa89f8b76679aa8420)] (by @cyfung1031)
- 🐛 getFaviconFromDomain eşzamanlılık sorunu düzeltildi ([#597](https://github.com/scriptscat/scriptcat/issues/597)) [[1872fe1](https://github.com/scriptscat/scriptcat/commit/1872fe165ab204b155a56f037c111d2d7776c2b9)] (by @cyfung1031)
- 🐛 Birden çok pencerede sekme açma hatası düzeltildi [#586](https://github.com/scriptscat/scriptcat/issues/586) [[54c1da2](https://github.com/scriptscat/scriptcat/commit/54c1da29c2bd8bd8f5ef2d85b7aed8b334de296f)]
- 🐛 openerTabId uyumluluk sorunu düzeltildi ([#586](https://github.com/scriptscat/scriptcat/issues/586)) [[b861fc8](https://github.com/scriptscat/scriptcat/commit/b861fc8620e53b885cad98db03f1dd10ec9d296c)] (by @cyfung1031)

### Çeşitli

- 📝 README_RU.md ve CONTRIBUTING_RU.md oluşturuldu ([#678](https://github.com/scriptscat/scriptcat/issues/678)) [[597ab03](https://github.com/scriptscat/scriptcat/commit/597ab0378fe5ced01637cf411326ef7845b8ce2b)] (by @Ioann)
- 👷 Uyumluluk ayarlamaları (pack.js uyumluluğu) ([#669](https://github.com/scriptscat/scriptcat/issues/669)) [[fec45e6](https://github.com/scriptscat/scriptcat/commit/fec45e6606a609b10b79c58d2fcba02c2ce71e16)] (by @cyfung1031)
- 🌐 Vietnamca yerel ayarı iyileştirildi ve genişletildi ([#661](https://github.com/scriptscat/scriptcat/issues/661)) [[6847a59](https://github.com/scriptscat/scriptcat/commit/6847a596c4b06c75e13594ef60e4b9dfa5718cf3)] (by @RenjiYuusei)
- 🌐 Çeviri düzeltmeleri ([#635](https://github.com/scriptscat/scriptcat/issues/635)) [[19296de](https://github.com/scriptscat/scriptcat/commit/19296de6a3815e5965eb33401a55da9b2bd22bb4)] (by @cyfung1031)
- 🌐 Başlangıç rehberi i18n sorunu düzeltildi [#627](https://github.com/scriptscat/scriptcat/issues/627) [[9683f96](https://github.com/scriptscat/scriptcat/commit/9683f965400ab6a2bac15349aca4335911766eac)]
- 👷 pack.js kodu optimize edildi ([#615](https://github.com/scriptscat/scriptcat/issues/615)) [[870dd9b](https://github.com/scriptscat/scriptcat/commit/870dd9bc6b7eff3eceefa915452e773ec0565180)] (by @cyfung1031)
