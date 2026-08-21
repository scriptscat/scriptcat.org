---
title: Riwayat Perubahan
---

import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="changelog" />

Untuk riwayat perubahan versi Beta, silakan lihat [Riwayat Perubahan Beta](./beta-changelog.md)

⚠️ Harap diperhatikan bahwa jika Anda menggunakan Windows 8/7/XP, atau versi kernel browser Anda lebih rendah dari \<120, Anda perlu menginstal [versi lama ScriptCat](https://github.com/scriptscat/scriptcat/releases) secara manual. v0.16.x adalah versi terakhir yang mendukung Manifest V2. Langkah-langkah pemasangan dapat ditemukan di: [Memasang Ekstensi dengan Memuat Folder yang Diekstrak](/use/use.md#load-unpacked-extension-installation).

<a name="1.4.0"></a>

## 1.4.0 (2026-06-26)

Rilis ini menghadirkan refaktorisasi tingkat rendah sebagai persiapan Firefox MV3, beserta peningkatan pengalaman editor (menu edit, pemformatan Ctrl+Shift+F, perbaikan cepat Monaco), pemilihan mesin pencari multi-platform untuk penemuan skrip, kemampuan baru seperti `@unwrap` / `window.onurlchange` / `@run-at context-menu`, penguatan menyeluruh keandalan sinkronisasi penyimpanan cloud, dan sejumlah besar perbaikan GM API, UI, dan stabilitas (termasuk kebocoran memori jangka panjang dan kerentanan keamanan polusi prototipe). Agent AI ScriptCat tersedia sebagai pratinjau di build dev / Beta dan belum diaktifkan di rilis stabil.

### 🚀 Fitur Utama Baru

- 🧪 Agent AI ScriptCat (**Pratinjau — hanya tersedia di build dev / Beta, belum diaktifkan di stabil**) — sistem agen cerdas berbasis AI dengan interaksi percakapan, pemanggilan alat, sistem Skill, protokol MCP, dan lainnya ([#1324](https://github.com/scriptscat/scriptcat/pull/1324)) (by @CodFrm)
- ✨ Dukungan tag metadata `@unwrap` ([#1213](https://github.com/scriptscat/scriptcat/pull/1213)) (by @cyfung1031)
- ✨ Implementasi `window.onurlchange` milik TM melalui Navigation API ([#1315](https://github.com/scriptscat/scriptcat/pull/1315)) (by @cyfung1031)
- ✨ Pemulihan dukungan `@run-at context-menu` ([#1442](https://github.com/scriptscat/scriptcat/pull/1442)) (by @cyfung1031)
- ✨ Penemuan skrip mendukung pemilihan mesin pencari multi-platform ([#1295](https://github.com/scriptscat/scriptcat/pull/1295)) (by @CodFrm)
- ✨ Menambahkan lebih banyak penyedia layanan ikon ([#1333](https://github.com/scriptscat/scriptcat/pull/1333)) (by @cyfung1031)
- ✨ Menambahkan ikon pemeriksaan pembaruan ke kolom "terakhir diperbarui" di daftar skrip ([#1304](https://github.com/scriptscat/scriptcat/pull/1304)) (by @CodFrm)
- ✨ Meningkatkan penanganan konflik edit dan konflik nama skrip ([#1223](https://github.com/scriptscat/scriptcat/pull/1223)) (by @cyfung1031)

### 🧑‍💻 Editor

- ✨ Menambahkan menu edit ke editor (cari, ganti, urungkan, dll.) ([#1303](https://github.com/scriptscat/scriptcat/pull/1303)) (by @CodFrm)
- ✨ Editor mendukung pemformatan Ctrl+Shift+F ([#1415](https://github.com/scriptscat/scriptcat/pull/1415)) (by @cyfung1031)
- ✨ Meningkatkan perbaikan cepat Monaco dan petunjuk metadata skrip pengguna ([#1461](https://github.com/scriptscat/scriptcat/pull/1461)) (by @cyfung1031)
- 🐛 Memperbaiki pintasan Ctrl-F / Ctrl-H ([#1312](https://github.com/scriptscat/scriptcat/pull/1312)) (by @cyfung1031)
- 🐛 Memperbaiki fitur perbaikan ESLint yang tidak berfungsi [#1079](https://github.com/scriptscat/scriptcat/issues/1079) ([#1184](https://github.com/scriptscat/scriptcat/pull/1184)) (by @cyfung1031)
- 🐛 Memperbaiki masalah tata letak CSS editor ([#1460](https://github.com/scriptscat/scriptcat/pull/1460)) (by @cyfung1031)
- 🐛 Memperbaiki tampilan daftar skrip ScriptEditor dalam tema terang ([#1288](https://github.com/scriptscat/scriptcat/pull/1288)) (by @CodFrm)
- 🐛 Memperbaiki dan meningkatkan masalah ScriptEditor ([#1258](https://github.com/scriptscat/scriptcat/pull/1258)) (by @cyfung1031)

### ⚡️ Peningkatan Performa

- 🚑 Memperbaiki kebocoran memori potensial selama sesi ScriptCat jangka panjang ([#1401](https://github.com/scriptscat/scriptcat/pull/1401)) (by @cyfung1031)
- ⚡️ Menghapus ketergantungan sistem file Baidu pada aturan DNR global, beralih ke penonaktifan cookie per permintaan ([#1377](https://github.com/scriptscat/scriptcat/pull/1377)) (by @cyfung1031)
- ⚡️ Mengoptimalkan pemilihan mesin pencari multi-platform untuk penemuan skrip ([#1379](https://github.com/scriptscat/scriptcat/pull/1379)) (by @cyfung1031)
- ⚡️ Menggunakan font monospace untuk loadingStatus halaman pemasangan agar tidak bergetar ([#1381](https://github.com/scriptscat/scriptcat/pull/1381)) (by @cyfung1031)
- ⚡️ Mengoptimalkan penanganan pushValue ([#1403](https://github.com/scriptscat/scriptcat/pull/1403)) (by @cyfung1031)
- ⚡️ Pemeriksaan izin yang lebih lengkap dan petunjuk izin skrip pengguna yang lebih baik ([#1251](https://github.com/scriptscat/scriptcat/pull/1251)) (by @cyfung1031)
- ⚡️ Meningkatkan manajemen memori dan mekanisme pembersihan MessageConnect ([#1248](https://github.com/scriptscat/scriptcat/pull/1248)) (by @cyfung1031)

### 🐛 Perbaikan Bug

- 🐛 Memperkuat keandalan sinkronisasi penyimpanan cloud (autentikasi, penanganan jalur, dan logika percobaan ulang Dropbox / WebDAV / Google Drive / OneDrive) ([#1374](https://github.com/scriptscat/scriptcat/pull/1374) ~ [#1395](https://github.com/scriptscat/scriptcat/pull/1395)) (by @cyfung1031)
- 🐛 Memperbaiki beberapa masalah sinkronisasi cloud: unggahan nol byte OneDrive, normalisasi kesalahan Google Drive / OneDrive, modifiedDate metadata kustom S3 ([#1405](https://github.com/scriptscat/scriptcat/pull/1405)) ([#1406](https://github.com/scriptscat/scriptcat/pull/1406)) ([#1408](https://github.com/scriptscat/scriptcat/pull/1408)) (by @cyfung1031)
- 🐛 Menghapus probe tulis verifikasi WebDAV untuk menghindari negatif palsu pada layanan dengan root yang tidak dapat ditulis (mis. Nutstore) ([#1445](https://github.com/scriptscat/scriptcat/pull/1445)) (by @CodFrm)
- 🐛 Memperbaiki kegagalan permintaan lintas-origin saat izin akses situs hilang ([#1477](https://github.com/scriptscat/scriptcat/pull/1477)) (by @cyfung1031)
- 🐛 Memperbaiki adaptasi popup seluler Edge Android [#686](https://github.com/scriptscat/scriptcat/issues/686) ([#1507](https://github.com/scriptscat/scriptcat/pull/1507)) (by @CodFrm)
- 🐛 Memperbaiki kilatan latar putih saat pemuatan awal [#1497](https://github.com/scriptscat/scriptcat/issues/1497) ([#1498](https://github.com/scriptscat/scriptcat/pull/1498)) (by @cyfung1031)
- 🐛 Memperbaiki koneksi pesan (GM API / port) yang tidak dibersihkan dengan benar ([#1474](https://github.com/scriptscat/scriptcat/pull/1474)) (by @cyfung1031)
- 🐛 Memperbaiki ketidakcocokan templat `@match` saat pencarian hilang ([#1466](https://github.com/scriptscat/scriptcat/pull/1466)) (by @cyfung1031)
- 🐛 Menambahkan `protoBaseDescs` untuk memperbaiki pewarisan kelas leluhur di semi-sandbox Tampermonkey ([#1463](https://github.com/scriptscat/scriptcat/pull/1463)) (by @cyfung1031)
- 🐛 Memperbaiki penanganan null yang hilang untuk msgConn `GM_xmlhttpRequest` ([#1433](https://github.com/scriptscat/scriptcat/pull/1433)) (by @cyfung1031)
- 🐛 Memperbaiki GM xhr yang tidak menangani onloadend abnormal dengan benar ([#1412](https://github.com/scriptscat/scriptcat/pull/1412)) (by @cyfung1031)
- 🐛 Memperbaiki masalah pembaruan dinamis dan tampilan daftar ScriptEditor ([#1414](https://github.com/scriptscat/scriptcat/pull/1414)) (by @cyfung1031)
- 🐛 Memperbaiki masalah jumlah aturan sesi dengan xhr bersamaan ([#1353](https://github.com/scriptscat/scriptcat/pull/1353)) (by @cyfung1031)
- 🐛 Memperbaiki kerusakan seluruh halaman yang disebabkan oleh ekspresi cron tidak valid ([#1327](https://github.com/scriptscat/scriptcat/pull/1327)) (by @cyfung1031)
- 🐛 Memperbaiki kegagalan semua skrip saat satu skrip habis waktu selama pemeriksaan pembaruan massal ([#1265](https://github.com/scriptscat/scriptcat/pull/1265)) (by @cyfung1031)
- 🐛 Menambahkan penanganan extensionEnv untuk isIncognito, userAgent, dan run-in ([#1368](https://github.com/scriptscat/scriptcat/pull/1368)) (by @cyfung1031)
- 🐛 Memperbaiki tombol panduan orientasi yang tersembunyi sebagian [#1396](https://github.com/scriptscat/scriptcat/issues/1396) ([#1398](https://github.com/scriptscat/scriptcat/pull/1398)) (by @cyfung1031)
- 🐛 Memperbaiki tooltip yang terhalang di halaman manajemen skrip [#1386](https://github.com/scriptscat/scriptcat/issues/1386) ([#1387](https://github.com/scriptscat/scriptcat/pull/1387)) (by @Xdy1579883916)
- 🐛 Memperbaiki Sidebar yang menyebabkan perubahan ukuran abnormal dalam mode kartu [#1179](https://github.com/scriptscat/scriptcat/issues/1179) ([#1373](https://github.com/scriptscat/scriptcat/pull/1373)) (by @cyfung1031)
- 🐛 Memperbaiki origin yang salah saat memasang file lokal melalui seret-dan-letakkan ([#1371](https://github.com/scriptscat/scriptcat/pull/1371)) (by @cyfung1031)
- 🐛 Memperbaiki pesan peralihan bahasa ([#1380](https://github.com/scriptscat/scriptcat/pull/1380)) (by @cyfung1031)
- 🐛 Meningkatkan UI tampilan log ([#1372](https://github.com/scriptscat/scriptcat/pull/1372)) (by @cyfung1031)
- 🐛 Memperbaiki CSS UserConfigPanel ([#1361](https://github.com/scriptscat/scriptcat/pull/1361)) (by @cyfung1031)
- 🐛 Menggunakan `Object.create(null)` untuk objek kosong di create_context ([#1397](https://github.com/scriptscat/scriptcat/pull/1397)) (by @cyfung1031)
- 🐛 Memperbaiki logika pembaruan senyap dan izin koneksi untuk skrip berlangganan ([#1201](https://github.com/scriptscat/scriptcat/pull/1201)) (by @cyfung1031)
- 🐛 Memperbaiki tombol kueri halaman log yang tidak menyegarkan waktu ([#1294](https://github.com/scriptscat/scriptcat/pull/1294)) (by @CodFrm)

### 🔒 Peningkatan Keamanan

- 🔒 Memperbaiki polusi prototipe melalui kunci konfigurasi pengguna YAML yang tidak tepercaya ([#1494](https://github.com/scriptscat/scriptcat/pull/1494)) (by @qdzsh)
- 🔒 Memperbaiki semua kerentanan keamanan dependensi npm ([#1350](https://github.com/scriptscat/scriptcat/pull/1350)) ([#1364](https://github.com/scriptscat/scriptcat/pull/1364)) ([#1365](https://github.com/scriptscat/scriptcat/pull/1365)) (by @cyfung1031)

### ♻️ Refaktorisasi & Kompatibilitas

- ♻️ Refaktorisasi tingkat rendah sebagai persiapan adaptasi Firefox MV3 ([#1457](https://github.com/scriptscat/scriptcat/pull/1457)) ([#1480](https://github.com/scriptscat/scriptcat/pull/1480)) (by @cyfung1031)
- ♻️ Refaktorisasi logika pembaruan sumber daya skrip (updateResource) dan kontrol konkurensi, memulihkan kompatibilitas cache sumber daya ([#1193](https://github.com/scriptscat/scriptcat/pull/1193)) (by @cyfung1031)
- ♻️ Mengganti jszip dengan JSZipp untuk penanganan ZIP (impor / ekspor cadangan), dan menghapus dependensi jszip yang tidak digunakan ([#1479](https://github.com/scriptscat/scriptcat/pull/1479)) (by @cyfung1031)
- ♻️ Menyatukan komunikasi Offscreen ↔ ServiceWorker melalui saluran postMessage ([#1299](https://github.com/scriptscat/scriptcat/pull/1299)) (by @CodFrm)
- ♻️ Refaktorisasi kode VSCodeConnect ([#1170](https://github.com/scriptscat/scriptcat/pull/1170)) (by @cyfung1031)
- ⚡️ Mengompres ts.worker.js menjadi 4MB untuk lolos validasi AMO, memperbaiki kesalahan izin latar belakang MV3 ([#1221](https://github.com/scriptscat/scriptcat/pull/1221)) (by @cyfung1031)

### 🌐 Internasionalisasi

- 🌐 Memperbaiki terjemahan terminologi multi-bahasa (terutama meningkatkan Tionghoa Tradisional) dan menambahkan pedoman terminologi terjemahan ([#1468](https://github.com/scriptscat/scriptcat/pull/1468)) (by @cyfung1031)

### Lainnya

- ✨ Mengalihkan layanan ikon fetchIconByDomain ke scriptcat.org ([#1268](https://github.com/scriptscat/scriptcat/pull/1268)) (by @cyfung1031)
- 🔥 Menghapus konten terkait Crowdin dan pseudo-bahasa ach-UG ([#1385](https://github.com/scriptscat/scriptcat/pull/1385)) (by @CodFrm)

<a name="0.16.15"></a>

## 0.16.15 (2026-05-19)

### 🐛 Perbaikan Bug

- 🐛 Memperbaiki perintah build skrip pengemasan MV2 [#1423](https://github.com/scriptscat/scriptcat/issues/1423) (by @CodFrm)
- 🐛 Beradaptasi dengan Perubahan WebExtensions API (Firefox 149-152), termasuk penyesuaian CSP ([#1448](https://github.com/scriptscat/scriptcat/pull/1448)) (by @cyfung1031)

<a name="0.16.14"></a>

## 0.16.14 (2026-04-26)

### 🚀 Fitur Utama Baru

- ✨ Sinkronisasi FirefoxMV2 dengan item utama MV3: TypeScript ditingkatkan ke 4.9, tsconfig ditingkatkan ke es2022; templat skrip (normal/crontab/background) diselaraskan dengan MV3; cron ditingkatkan dengan dukungan ekspresi `once(...)`; dukungan multi-bahasa editor Monaco ([#1331](https://github.com/scriptscat/scriptcat/pull/1331)) (by @cyfung1031)

### ♻️ Refaktorisasi & Kompatibilitas

- 🔥 Menghapus dependensi axios untuk menyelaraskan dengan MV3 ([#1339](https://github.com/scriptscat/scriptcat/pull/1339)) (by @cyfung1031)

### 🐛 Perbaikan Bug

- 🐛 Memperbaiki iframe bertingkat window.parent yang tidak menerima pesan postMessage ([#1335](https://github.com/scriptscat/scriptcat/pull/1335)) (by @cyfung1031)

<a name="1.3.2"></a>

## 1.3.2 (2026-03-28)

### 🐛 Perbaikan Bug

- 🐛 Menghapus header Accept dari fetchScriptBody untuk menghindari Error 406 ([#1306](https://github.com/scriptscat/scriptcat/pull/1306)) (by @cyfung1031)
- 🐛 Memperbaiki konflik autentikasi cookie WebDAV dan dukungan authType ([#1308](https://github.com/scriptscat/scriptcat/pull/1308)) (by @CodFrm)
- 🐛 Menampilkan kesalahan pemformatan dengan benar ([#1310](https://github.com/scriptscat/scriptcat/pull/1310)) (by @cyfung1031)
- 🐛 Menggunakan chrome.storage.local untuk konfigurasi khusus perangkat agar terhindar dari sinkronisasi lintas perangkat ([#1309](https://github.com/scriptscat/scriptcat/pull/1309)) (by @CodFrm)
- 🐛 Memperbaiki masalah petunjuk editor kode ([#1301](https://github.com/scriptscat/scriptcat/pull/1301)) (by @cyfung1031)
- 🐛 Memperbaiki popup pemilih tanggal yang terpotong di halaman log ([#1292](https://github.com/scriptscat/scriptcat/pull/1292)) (by @cyfung1031)
- 🐛 Memperbaiki tombol lepas ikatan yang muncul saat tidak ada drive cloud yang terikat ([#1291](https://github.com/scriptscat/scriptcat/pull/1291)) (by @CodFrm)
- 🐛 Memperbaiki popup yang terhalang ([#1290](https://github.com/scriptscat/scriptcat/pull/1290)) (by @cyfung1031)

<a name="1.3.1"></a>

## 1.3.1 (2026-03-13)

### 🐛 Perbaikan Bug

- 🚑 Memperbaiki kesalahan deteksi lingkungan yang disebabkan oleh ekstensi lain yang menyuntikkan chrome.runtime [#1280](https://github.com/scriptscat/scriptcat/issues/1280) ([#1281](https://github.com/scriptscat/scriptcat/pull/1281)) (by @CodFrm)

### Lainnya

- ✅ Menambahkan tes E2E Playwright dan tes fungsional GM API ([#1283](https://github.com/scriptscat/scriptcat/pull/1283)) (by @CodFrm)

<a name="1.3.0"></a>

## 1.3.0 (2026-03-10)

Pembaruan ini menghadirkan penyimpanan Amazon S3, opsi runtime skrip, pemasangan tanpa akses situs web eksternal, dan lainnya. Ini secara signifikan mengoptimalkan sistem perpesanan dan performa React, memperbaiki banyak masalah GM API, UI, dan stabilitas, serta mencakup peningkatan kualitas kode yang ekstensif.

### 🚀 Fitur Utama Baru

- ✨ Menambahkan penyimpanan Amazon S3 [#1146](https://github.com/scriptscat/scriptcat/issues/1146) ([#1189](https://github.com/scriptscat/scriptcat/pull/1189)) (by @CodFrm)
- ✨ Opsi runtime skrip ([#895](https://github.com/scriptscat/scriptcat/pull/895)) (by @CodFrm)
- ✨ Pemasangan tanpa akses situs web eksternal + penyesuaian tata letak halaman pemasangan ([#842](https://github.com/scriptscat/scriptcat/pull/842)) (by @cyfung1031)
- ✨ Menampilkan ikon abu-abu saat fungsionalitas skrip dinonaktifkan [#897](https://github.com/scriptscat/scriptcat/issues/897) (by @CodFrm)
- ✨ Mengoptimalkan interaksi saat jumlah item menu yang diperluas adalah 0 [#868](https://github.com/scriptscat/scriptcat/issues/868) (by @CodFrm)
- ✨ `@noframes` default dalam templat untuk mencegah kesalahan umum ([#900](https://github.com/scriptscat/scriptcat/pull/900)) (by @cyfung1031)
- ✨ Mencegah tautan pemasangan salah dianggap sebagai pemasangan baru saat nama skrip berubah ([#824](https://github.com/scriptscat/scriptcat/pull/824)) (by @cyfung1031)
- ✨ Memperbaiki validasi konflik `@grant`, menambahkan peringatan kesalahan deklarasi meta duplikat ([#902](https://github.com/scriptscat/scriptcat/pull/902)) (by @cyfung1031)
- ✨ Menerima `@version` tanpa nilai atau dengan nilai kosong ([#1216](https://github.com/scriptscat/scriptcat/pull/1216)) (by @cyfung1031)
- ✨ Menyesuaikan posisi sidebar editor yang tersembunyi [#1185](https://github.com/scriptscat/scriptcat/issues/1185) ([#1254](https://github.com/scriptscat/scriptcat/pull/1254)) (by @CodFrm)

### 🧩 Perubahan GM API

- 🐛 Memperbaiki masalah GM_addElement, memindahkan operasi ke lingkungan konten ([#1233](https://github.com/scriptscat/scriptcat/pull/1233)) (by @cyfung1031)
- 🐛 Menambahkan parameter `conflictAction` ke `GM_download` ([#1250](https://github.com/scriptscat/scriptcat/pull/1250)) (by @cyfung1031)
- 🐛 Memperbaiki deklarasi async GM API, mengembalikan Promise dengan benar ([#1169](https://github.com/scriptscat/scriptcat/pull/1169)) (by @cyfung1031)
- ♻️ Kompatibilitas Firefox: GM_setClipboard ([#928](https://github.com/scriptscat/scriptcat/pull/928)) (by @cyfung1031)
- 🐛 Memperbaiki masalah GM_value [#1192](https://github.com/scriptscat/scriptcat/issues/1192) (by @CodFrm)
- 🐛 Memperbaiki nama file unduhan yang tidak mendukung folder ([#1203](https://github.com/scriptscat/scriptcat/pull/1203)) (by @cyfung1031)

### ⚡️ Peningkatan Performa

- ♻️ Refaktorisasi sistem perpesanan: gunakan broadcast storage.local + kepatuhan scripting Firefox MV3 + MessageFlag sinkronisasi dinamis yang tidak dapat dilacak ([#1067](https://github.com/scriptscat/scriptcat/pull/1067)) (by @cyfung1031)
- ⚡️ Memperbaiki masalah render ulang React (ScriptCard & ScriptTable) ([#1182](https://github.com/scriptscat/scriptcat/pull/1182)) (by @cyfung1031)
- ⚡️ Memperbaiki masalah render ulang React (Popup) ([#1181](https://github.com/scriptscat/scriptcat/pull/1181)) (by @cyfung1031)
- ⚡️ Mengoptimalkan performa Repo ([#1232](https://github.com/scriptscat/scriptcat/pull/1232)) (by @CodFrm)
- ⚡️ Memindahkan metadata keluar dari chrome.storage.session ([#1027](https://github.com/scriptscat/scriptcat/pull/1027)) (by @cyfung1031)
- ⚡️ Meningkatkan deteksi charset ([#1140](https://github.com/scriptscat/scriptcat/pull/1140)) (by @cyfung1031)
- ⚡️ Menyimpan ikon berdasarkan URL untuk menghindari penyimpanan duplikat antar skrip ([#909](https://github.com/scriptscat/scriptcat/pull/909)) (by @cyfung1031)
- ⚡️ Mengoptimalkan kode parseMetadata ([#903](https://github.com/scriptscat/scriptcat/pull/903)) (by @cyfung1031)
- 🐛 Memperbaiki kebocoran memori dan paparan properti objek ([#1242](https://github.com/scriptscat/scriptcat/pull/1242)) (by @cyfung1031)
- ♻️ Menghapus Redux, menyederhanakan manajemen status ([#1206](https://github.com/scriptscat/scriptcat/pull/1206)) (by @cyfung1031)

### 🧑‍💻 Editor

- ✨ Mengoptimalkan pengaturan Monaco Editor, menambahkan perbaikan `/* global xxx */` ([#1012](https://github.com/scriptscat/scriptcat/pull/1012)) (by @cyfung1031)
- ✨ Petunjuk multi-bahasa Monaco Editor dan menambahkan petunjuk `@require-css` ([#960](https://github.com/scriptscat/scriptcat/pull/960)) (by @cyfung1031)

### 🐛 Perbaikan Bug

- 🐛 Memperbaiki konflik pemeriksaan izin jendela penyamaran yang menyebabkan restart berulang (by @CodFrm)
- 🐛 Memperbaiki penanganan ekspresi include `*?*` [#1271](https://github.com/scriptscat/scriptcat/issues/1271) ([#1272](https://github.com/scriptscat/scriptcat/pull/1272)) (by @CodFrm)
- 🔒 Membersihkan konten HTML notifikasi pengumuman dengan DOMPurify ([#1274](https://github.com/scriptscat/scriptcat/pull/1274)) (by @CodFrm)
- 🐛 Memperbaiki kontrol manajemen izin pengaturan skrip yang tidak berfungsi ([#1267](https://github.com/scriptscat/scriptcat/pull/1267)) (by @CodFrm)
- 🐛 Memperbaiki konten popup yang mengikuti gulir layar [#1256](https://github.com/scriptscat/scriptcat/issues/1256) ([#1263](https://github.com/scriptscat/scriptcat/pull/1263)) (by @cyfung1031)
- 🐛 Memperbaiki kegagalan penguraian tautan pemasangan [#1235](https://github.com/scriptscat/scriptcat/issues/1235) ([#1260](https://github.com/scriptscat/scriptcat/pull/1260)) (by @cyfung1031)
- 🐛 Memperbaiki komponen seret yang menyebabkan lag focusin/focusout [#1224](https://github.com/scriptscat/scriptcat/issues/1224) ([#1243](https://github.com/scriptscat/scriptcat/pull/1243)) (by @CodFrm)
- 🐛 Memperbaiki API ekstensi eksternal yang tidak berfungsi ([#1217](https://github.com/scriptscat/scriptcat/pull/1217)) (by @cyfung1031)
- 🐛 Memperbaiki masalah grant ([#1199](https://github.com/scriptscat/scriptcat/pull/1199)) (by @CodFrm)
- 🐛 Memperbaiki UserAgentData yang hilang di content.js ([#1183](https://github.com/scriptscat/scriptcat/pull/1183)) (by @cyfung1031)
- 🐛 Menangani masalah pengodean skrip [#1115](https://github.com/scriptscat/scriptcat/issues/1115) ([#1138](https://github.com/scriptscat/scriptcat/pull/1138)) (by @CodFrm)
- 🐛 Memperbaiki tampilan ikon skrip [#1052](https://github.com/scriptscat/scriptcat/issues/1052) ([#1104](https://github.com/scriptscat/scriptcat/pull/1104)) (by @CodFrm)
- 🐛 Menambahkan prefiks UnoCSS untuk menyelesaikan konflik CSS, memperbaiki tata letak CSS ([#1013](https://github.com/scriptscat/scriptcat/pull/1013)) (by @cyfung1031)
- 🐛 Membersihkan Alarm yang ada saat memilih pemeriksaan pembaruan skrip yang tidak teratur ([#996](https://github.com/scriptscat/scriptcat/pull/996)) (by @cyfung1031)
- 🐛 Impor & ekspor - memperbaiki tanggal/waktu modifikasi terakhir skrip yang salah ([#951](https://github.com/scriptscat/scriptcat/pull/951)) (by @cyfung1031)
- 🐛 Memperbaiki tampilan nama dan deskripsi skrip dengan prefiks bahasa i18n [#1123](https://github.com/scriptscat/scriptcat/issues/1123) (by @CodFrm)
- 🐛 Memperbaiki unregister yang tidak dieksekusi dengan benar ([#1231](https://github.com/scriptscat/scriptcat/pull/1231)) (by @cyfung1031)

### ♻️ Refaktorisasi & Kompatibilitas

- ♻️ Penyesuaian API userScripts / scripting, meningkatkan kompatibilitas (ulangi #704) ([#925](https://github.com/scriptscat/scriptcat/pull/925)) (by @cyfung1031)
- ♻️ Perubahan terkait Cron: perbaikan bug, i18n, peningkatan ekspresi once, peningkatan pustaka cron ([#1126](https://github.com/scriptscat/scriptcat/pull/1126)) (by @cyfung1031)
- ♻️ Refaktorisasi dan optimalkan pemuatan ikon skrip ([#893](https://github.com/scriptscat/scriptcat/pull/893)) (by @CodFrm)
- ♻️ Meningkatkan dekode teks ([#1166](https://github.com/scriptscat/scriptcat/pull/1166)) (by @cyfung1031)
- ⬆️ Meningkatkan versi kernel kompatibel swc ([#1186](https://github.com/scriptscat/scriptcat/pull/1186)) (by @cyfung1031)

### 🎨 Peningkatan UI

- 🎨 Mengubah nomor badge ikon ekstensi default menjadi jumlah skrip [#989](https://github.com/scriptscat/scriptcat/issues/989) (by @CodFrm)
- 🎨 Membuat URL halaman pemasangan lebih cantik ([#993](https://github.com/scriptscat/scriptcat/pull/993)) (by @cyfung1031)
- 🐛 Refaktorisasi DraggableEntry, memperbaiki perataan tinggi kartu ([#1245](https://github.com/scriptscat/scriptcat/pull/1245)) (by @cyfung1031)

### Lain-lain

- 🔒 Peningkatan keamanan (DOMPurify, perbaikan kerentanan dependensi npm)
- 👷 Optimasi bundling Rspack, perbaikan rantai alat build
- ⬆️ Pembaruan versi dependensi

**Riwayat perubahan lengkap:** [Bandingkan v1.2.6...v1.3.0](https://github.com/scriptscat/scriptcat/compare/v1.2.6...v1.3.0)

<a name="1.2.6"></a>

## 1.2.6 (2026-02-03)

### Diperbaiki

- 🐛 Memperbaiki kesalahan structuredClone ([#1192](https://github.com/scriptscat/scriptcat/issues/1192)) [[265e122](https://github.com/scriptscat/scriptcat/commit/265e122342366b166d3122cc8da485cb1295b924)] (by @cyfung1031)

<a name="1.2.5"></a>

## 1.2.5 (2026-02-02)

### Diperbaiki

- 🐛 Memperbaiki masalah penghapusan sinkronisasi skrip [#1158](https://github.com/scriptscat/scriptcat/issues/1158) [[5e91a31](https://github.com/scriptscat/scriptcat/commit/5e91a31e02761ba8061e3de1f4d15fc1d964346c)] (by @CodFrm)
- 🐛 Kompatibel dengan TM &#x60;@match www.website.com/*&#x60; ([#1165](https://github.com/scriptscat/scriptcat/issues/1165)) [[da66ff7](https://github.com/scriptscat/scriptcat/commit/da66ff70d25c3087cb8405289dc8b14df9c15f05)] (by @cyfung1031)
- 🐛 Edge versi terbaru 144 menambahkan skrip pengguna [#1157](https://github.com/scriptscat/scriptcat/issues/1157) [[f7c1c73](https://github.com/scriptscat/scriptcat/commit/f7c1c730cf39cae02a9e6f815e3113ea9d2a8a05)] (by @CodFrm)
- 🐛 Memperbaiki masalah pemantauan berkelanjutan FileSystemObserver ([#1160](https://github.com/scriptscat/scriptcat/issues/1160)) [[9556769](https://github.com/scriptscat/scriptcat/commit/95567690d1bf77bfe8bedfd6a94c88949a77e115)] (by @cyfung1031)
- 🐛 Perbaikan kecil locales.ts ([#1154](https://github.com/scriptscat/scriptcat/issues/1154)) [[1c44b68](https://github.com/scriptscat/scriptcat/commit/1c44b680dab3a95a51eb73cf92531efd0a192dc9)] (by @cyfung1031)
- 🐛 Memperbaiki masalah waktu jendela pembaruan popup ([#1155](https://github.com/scriptscat/scriptcat/issues/1155)) [[c17f761](https://github.com/scriptscat/scriptcat/commit/c17f761807fb9b14aff09b9b08d19e4cbe72b8a5)] (by @cyfung1031)
- 🐛 Memperbaiki tampilan nama dan deskripsi skrip dengan prefiks bahasa i18n [#1123](https://github.com/scriptscat/scriptcat/issues/1123) [[7ef7355](https://github.com/scriptscat/scriptcat/commit/7ef7355632fc989fa1cad44fd2069ff840bbd8df)] (by @CodFrm)
- 🐛 Menangani masalah referensi nilai [#1141](https://github.com/scriptscat/scriptcat/issues/1141) ([#1147](https://github.com/scriptscat/scriptcat/issues/1147)) [[0892fcd](https://github.com/scriptscat/scriptcat/commit/0892fcd452758030553c33ddf14f1ce4bc6d3efc)] (by @cyfung1031)

<a name="1.2.4"></a>

## 1.2.4 (2026-01-07)

Memperbaiki bug sinkronisasi, dan pembaruan versi tidak akan lagi membuka halaman riwayat perubahan secara otomatis

### Ditambahkan

- ✨ Penghapusan sinkron kini dinonaktifkan secara default ([#958](https://github.com/scriptscat/scriptcat/issues/958)) [[9c4c7dc](https://github.com/scriptscat/scriptcat/commit/9c4c7dc411357746db43a306d97ac41a71f2b49c)] (by @cyfung1031)
- ✨ Editor kini mendukung GM.\* ([#1129](https://github.com/scriptscat/scriptcat/issues/1129)) [[bea0192](https://github.com/scriptscat/scriptcat/commit/bea0192c6cc50eff2ed4e1cc5dcc25f36bbe10e7)] (by @cyfung1031)

### Diubah

- ♻️ Mengoptimalkan logika pembukaan halaman riwayat perubahan [#1110](https://github.com/scriptscat/scriptcat/issues/1110) [[d3ffedc](https://github.com/scriptscat/scriptcat/commit/d3ffedcffe752ca548f87f1640072fcd871b8604)] (by @CodFrm)

### Diperbaiki

- 🐛 scriptcat.d.tpl &amp; perbaikan tipe ([#1130](https://github.com/scriptscat/scriptcat/issues/1130)) [[dd22ef5](https://github.com/scriptscat/scriptcat/commit/dd22ef544684d69e24a7aae098cb05cbab03daa8)] (by @cyfung1031)
- 🐛 Memperbaiki masalah sinkronisasi cloud ([#1133](https://github.com/scriptscat/scriptcat/issues/1133)) [[a9383d2](https://github.com/scriptscat/scriptcat/commit/a9383d2012eb3953dc33c8886ce3891f404fa100)] (by @CodFrm)
- 🐛 Memperbaiki kesalahan &#x60;GM_addElement(&quot;tagName&quot;)&#x60; ([#1120](https://github.com/scriptscat/scriptcat/issues/1120)) [[ad19de5](https://github.com/scriptscat/scriptcat/commit/ad19de5c1793c8c079bedbf1b11c7c2ae27a469e)] (by @cyfung1031)
- 🐛 Menghapus logika pembersihan dan mengoptimalkan logika checkuserscript ([#1113](https://github.com/scriptscat/scriptcat/issues/1113)) [[e635911](https://github.com/scriptscat/scriptcat/commit/e635911a3c11c3cb8acd1cfd507cb777e5ee7236)] (by @CodFrm)

### Lain-lain

- 🏷️ Revisi TypeScript ([#1127](https://github.com/scriptscat/scriptcat/issues/1127)) [[b455724](https://github.com/scriptscat/scriptcat/commit/b4557244191018c18d5ce8ea8e8627bcfb7f7cdd)] (by @cyfung1031)
- 📝 Pelengkap komentar contoh ([#1131](https://github.com/scriptscat/scriptcat/issues/1131)) [[292549e](https://github.com/scriptscat/scriptcat/commit/292549ed0f65952fe9f269aace23eefc7d6a3a0f)] (by @cyfung1031)

<a name="1.2.3"></a>

## 1.2.3 (2025-12-20)

Beberapa perbaikan bug

### Diubah

- ⚡ Mengoptimalkan tampilan waktu berjalan berikutnya [#1093](https://github.com/scriptscat/scriptcat/issues/1093) [[324ce51](https://github.com/scriptscat/scriptcat/commit/324ce515c84699ca8d3bf1ee447fc6ef0656ae0d)] (by @CodFrm)

### Diperbaiki

- 🐛 Memperbaiki masalah pencocokan URL untuk skrip awal ([#1096](https://github.com/scriptscat/scriptcat/issues/1096)) [[a77effb](https://github.com/scriptscat/scriptcat/commit/a77effbab5ab4d1752065ef943d9c050ff99c066)] (by @cyfung1031)
- 🐛 Memperbaiki masalah jendela pembaruan yang ditampilkan terlalu singkat ([#1088](https://github.com/scriptscat/scriptcat/issues/1088)) [[b2b2d5c](https://github.com/scriptscat/scriptcat/commit/b2b2d5c41ff70ee5430f7d8d156f480ac8fc3a1a)] (by @cyfung1031)
- 🐛 Memperbaiki tampilan abnormal saat notifikasi skrip pengguna diaktifkan ([#1086](https://github.com/scriptscat/scriptcat/issues/1086)) ([959c4db](https://github.com/scriptscat/scriptcat/commit/959c4dbed92f7bfe22a2f8ebb775c4189b5ff076))
- 🐛 responseHeaders: &#x60;Kompatibilitas TM: \\r\\n&#x60; ([#1085](https://github.com/scriptscat/scriptcat/issues/1085)) [[15232c8](https://github.com/scriptscat/scriptcat/commit/15232c8543d93abfdafa1353d39d8a15d1dc385f)] (by @cyfung1031)
- 🐛 Memperbaiki masalah GM XHR ([#1082](https://github.com/scriptscat/scriptcat/issues/1082)) [[3d987c3](https://github.com/scriptscat/scriptcat/commit/3d987c300242a3c765146359c35ecd6d998f792c)] (by @CodFrm)

### Lain-lain

- 🌐 Menangani masalah i18n pada halaman popup [#1081](https://github.com/scriptscat/scriptcat/issues/1081) [[6b17d71](https://github.com/scriptscat/scriptcat/commit/6b17d7100e8572d72b3b7aaf8ea38be9cdf33f5f)] (by @CodFrm)

<a name="1.2.2"></a>

## 1.2.2 (2025-12-13)

Beberapa perbaikan bug

### Diperbaiki

- 🐛 Memperbaiki masalah sinkronisasi latar belakang yang sering terjadi ([#1076](https://github.com/scriptscat/scriptcat/issues/1076)) [[45dc39b](https://github.com/scriptscat/scriptcat/commit/45dc39baa0f3326cf12e97312ab632dc46ba40f2)] (by @CodFrm)
- 🐛 Memperbaiki masalah penanganan tab khusus [#1066](https://github.com/scriptscat/scriptcat/issues/1066) ([50904fb](https://github.com/scriptscat/scriptcat/commit/50904fb46efdea10fd57677bc2d28c770b47e861))
- 🐛 Memperbaiki penanganan skrip tanpa aturan match [#1071](https://github.com/scriptscat/scriptcat/issues/1071) ([560cdc0](https://github.com/scriptscat/scriptcat/commit/560cdc01fc0fc27fb7d0e3b877c63ba431206668))
- 🐛 Memperbaiki masalah pengemasan CI yang menghapus izin opsional latar belakang [[1f002f0](https://github.com/scriptscat/scriptcat/commit/1f002f0edf9892f023ae93b8522ff7c5e4a96559)] (by @CodFrm)
- 🐛 Memperbaiki abaikan tab yang dibuang ([#1058](https://github.com/scriptscat/scriptcat/issues/1058)) [[6165bf4](https://github.com/scriptscat/scriptcat/commit/6165bf48eb1d53ede0561c85c30135446c2ff882)] (by @cyfung1031)

<a name="1.2.1"></a>

## 1.2.1 (2025-12-06)

Beberapa perbaikan bug dan penanganan opsi berjalan di latar belakang.

### Ditambahkan

- ✨ Menambahkan opsi berjalan di latar belakang ([#1048](https://github.com/scriptscat/scriptcat/issues/1048)) [[626e84d](https://github.com/scriptscat/scriptcat/commit/626e84dbd4dda0731e0a5ffdbdf71ae10e884489)] (by @CodFrm)

### Diperbaiki

- 🐛 Memperbaiki masalah pengaturan ulang pendengar pesan yang disebabkan oleh document.write ([#1055](https://github.com/scriptscat/scriptcat/issues/1055)) [[1f3a3ec](https://github.com/scriptscat/scriptcat/commit/1f3a3ec335ed4b519599e9aa3036c66b6f0d10b2)] (by @cyfung1031)
- 🐛 Memperbaiki fungsionalitas pemfilteran tampilan daftar [[e272dc6](https://github.com/scriptscat/scriptcat/commit/e272dc6ed151c15a1ef785b70ae100cb9e74a5dd)] (by @CodFrm)
- 🐛 Menangani UserAgentData di fase awal ([#1045](https://github.com/scriptscat/scriptcat/issues/1045)) [[b4e08a8](https://github.com/scriptscat/scriptcat/commit/b4e08a812a08f42037837bbee54610ebc565063f)] (by @cyfung1031)
- 🐛 Memulihkan opsi useOpen untuk GM_openInTab [#1043](https://github.com/scriptscat/scriptcat/issues/1043) ([#1044](https://github.com/scriptscat/scriptcat/issues/1044)) [[7f30198](https://github.com/scriptscat/scriptcat/commit/7f30198909824871e694d5ffbe7088e44a6d0b45)] (by @cyfung1031)
- 🐛 Memperbaiki masalah userScripts undefined ([#1041](https://github.com/scriptscat/scriptcat/issues/1041)) [[4f2deda](https://github.com/scriptscat/scriptcat/commit/4f2deda69aa6aae7f6e791be1cd965a440b80e33)] (by @cyfung1031)
- 🐛 Memperbaiki referensi yang salah ke `"monaco-editor"` di `AppContext` ([#983](https://github.com/scriptscat/scriptcat/issues/983)) [[4b8dae1](https://github.com/scriptscat/scriptcat/commit/4b8dae1f49208d13c4d19c4c627762fc1b04ea5e)] (by @cyfung1031)

**Riwayat perubahan lengkap:** [Bandingkan v1.2.0...v1.2.1](https://github.com/scriptscat/scriptcat/compare/v1.2.0...v1.2.1)

<a name="1.2.0"></a>

## 1.2.0 (2025-11-29)

Pembaruan ini menghadirkan sidebar daftar skrip, tampilan kartu, logika pemeriksaan pembaruan yang lebih ramah, konfigurasi editor, dan lainnya. Stabilitas injeksi dan runtime telah ditingkatkan secara signifikan, memperbaiki masalah kritis dengan CSP, sandbox, GM API, sekaligus membawa optimasi performa dan struktural.

Untuk detail lebih lanjut, lihat riwayat perubahan v1.2.0-beta.x dan dokumentasi [v1.2](https://docs.scriptcat.org/docs/change/v1.2/).

### 🚀 Fitur Utama Baru

- ✨ Sidebar daftar skrip [#794](https://github.com/scriptscat/scriptcat/issues/794) (by @CodFrm)
- ✨ Tampilan kartu [#860](https://github.com/scriptscat/scriptcat/issues/860) (by @CodFrm)
- ✨ Logika pemeriksaan pembaruan yang lebih ramah [#755](https://github.com/scriptscat/scriptcat/issues/755) (by @cyfung1031)
- ✨ Menambahkan konfigurasi editor dan definisi tipe editor [#708](https://github.com/scriptscat/scriptcat/pull/708) (by @CodFrm)
- ✨ Menampilkan jumlah skrip di popup ([#973](https://github.com/scriptscat/scriptcat/issues/973)) [[1134586](https://github.com/scriptscat/scriptcat/commit/1134586ff040ffc0cdddd3538e9ec493950c948a)] (by @cyfung1031)
- ✨ Menambahkan menu tata letak untuk menyembunyikan sidebar kode [#689](https://github.com/scriptscat/scriptcat/issues/689) [[dd64da7](https://github.com/scriptscat/scriptcat/commit/dd64da719c081acbf21645e2b1e1f38653ffae8c)]
- ✨ Menambahkan tombol pemeriksaan versi SC ([#795](https://github.com/scriptscat/scriptcat/issues/795)) [[1680c66](https://github.com/scriptscat/scriptcat/commit/1680c66099120c0e497c1a1f5321f38fe0160ea0)] (by @cyfung1031)
- ✨ Menambahkan halaman survei setelah pencopotan ekstensi [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]

### 🧩 Perubahan GM API

- ✨ Dukungan injeksi ke dalam, skrip kini dapat diinjeksi ke lingkungan konten [#711](https://github.com/scriptscat/scriptcat/issues/711)
- ✨ GM_openInTab mendukung jendela tersemat, pembukaan di jendela penyamaran, dan parameter lainnya [#788](https://github.com/scriptscat/scriptcat/pull/788) (by @cyfung1031)
- ✨ GM_registerMenuCommand mendukung submenu dan pemisah [#831](https://github.com/scriptscat/scriptcat/pull/831) (by @cyfung1031)
- 🗑 Menghapus opsi useOpen dari GM_openInTab [#867](https://github.com/scriptscat/scriptcat/pull/867)
- ♻️ Menyesuaikan logika `@connect` ([#969](https://github.com/scriptscat/scriptcat/issues/969)) [[67914d2](https://github.com/scriptscat/scriptcat/commit/67914d2b7d57fa9c69706ae57ee5d3400c2643f9)] (by @cyfung1031)
- ♻️ Refaktorisasi `GM_xmlhttpRequest` dan kode terkait ([#901](https://github.com/scriptscat/scriptcat/issues/901)) [[fabd2e9](https://github.com/scriptscat/scriptcat/commit/fabd2e944235b460bc73df346b79d23ee4540af7)] (by @cyfung1031)

### Lainnya

- ⚡️ Optimasi stabilitas dan performa
- 🐛 Memperbaiki berbagai masalah
- ♻️ Optimasi struktur kode
- 🌐 Peningkatan i18n

**Riwayat perubahan lengkap:** [Bandingkan v1.1.2...v1.2.0](https://github.com/scriptscat/scriptcat/compare/v1.1.2...v1.2.0)

<a name="1.1.2"></a>

## 1.1.2 (2025-09-18)

Perbaikan bug

### Diperbaiki

- 🐛 Memperbaiki masalah sandbox toString [#737](https://github.com/scriptscat/scriptcat/issues/737) [[6ca24c9](https://github.com/scriptscat/scriptcat/commit/6ca24c9b171792035803ac4e1c69e473629f9d18)]
- 🐛 Memperbaiki masalah badge menampilkan 0 [[026c1d2](https://github.com/scriptscat/scriptcat/commit/026c1d2071dd4cfb6291f005d36717bcdf0a51c3)]
- 🐛 Memperbaiki masalah CSP injeksi skrip [#739](https://github.com/scriptscat/scriptcat/issues/739) [#728](https://github.com/scriptscat/scriptcat/issues/728) [[5da21b5](https://github.com/scriptscat/scriptcat/commit/5da21b5e3d0e7e86a1fd5dff57ba03ea641c19fa)]
- 🐛 Memperbaiki skrip latar belakang yang tidak meluas di halaman popup [[66ab70f](https://github.com/scriptscat/scriptcat/commit/66ab70fb10c28aaf0c9260a9591aab7e1ae35615)]
- 🐛 Meningkatkan validasi tipe pesan [#676](https://github.com/scriptscat/scriptcat/issues/676) [[5073795](https://github.com/scriptscat/scriptcat/commit/50737957507ff9af3aa9ba9a6b7d444b643d1ff2)]
- 🐛 Memperbaiki masalah dokumen GM xhr [#716](https://github.com/scriptscat/scriptcat/issues/716) [[1c46546](https://github.com/scriptscat/scriptcat/commit/1c465462f4e14ae461d54358710f5caf74208af3)]

<a name="1.1.1"></a>

## 1.1.1 (2025-09-07)

### Ditambahkan

- ✨ Menambahkan konfigurasi editor kustom dan definisi tipe editor ([#708](https://github.com/scriptscat/scriptcat/issues/708)) [[49eb379](https://github.com/scriptscat/scriptcat/commit/49eb3794774790d61c3ef787c865a9ba6fe82841)]

### Diperbaiki

- 🐛 Memperbaiki masalah kompatibilitas dengan versi browser yang lebih lama [#715](https://github.com/scriptscat/scriptcat/issues/715) [[4da8068](https://github.com/scriptscat/scriptcat/commit/4da806879c2b170672814d02e6f8ed98c9fae35b)]
- 💄 Mengoptimalkan tampilan menu popup saat jendela popup terlalu kecil ([288650e](https://github.com/scriptscat/scriptcat/commit/288650e5e4cbdc3fa8658f0754ce427a1b3dec5a))
- 🐛 Memperbaiki beberapa masalah ([#710](https://github.com/scriptscat/scriptcat/issues/710)) [[6a2027a](https://github.com/scriptscat/scriptcat/commit/6a2027ac0bb5e0ed625df570240d068a98a34b31)] (by @WhiteSevs)

### Lain-lain

- 🌐 Menangani masalah i18n [[2adf69d](https://github.com/scriptscat/scriptcat/commit/2adf69d6ec3c30186f2c2ef89f97e3cba9e15a66)]

<a name="1.1.0"></a>

## 1.1.0 (2025-09-07)

Banyak perbaikan bug dan peningkatan kompatibilitas, dukungan Dropbox ditambahkan, fitur baru @early-start untuk pemuatan lebih cepat dari pemuatan halaman. Untuk detail lebih lanjut, lihat riwayat perubahan v1.1.0-beta.x.

### Ditambahkan

- ✨ Menambahkan pengaturan lingkungan runtime skrip [#628](https://github.com/scriptscat/scriptcat/issues/628) [[0d4a89e](https://github.com/scriptscat/scriptcat/commit/0d4a89efaecf0331dcc7fbb6df006b93a1525846)]
- ✨ Runtuh secara default saat tidak ada skrip latar belakang [#626](https://github.com/scriptscat/scriptcat/issues/626) ([9d0aac6](https://github.com/scriptscat/scriptcat/commit/9d0aac6aae11b96707ca1f7c024a24e9d55f217b))
- ✨ Dukungan Dropbox [#575](https://github.com/scriptscat/scriptcat/issues/575) [[2c66f21](https://github.com/scriptscat/scriptcat/commit/2c66f21f5118bd83a0eaa0f1baa3a31f2233e5b2)]
- ✨ Mengoptimalkan external.Tampermonkey untuk memeriksa status instalasi SC saat TM tidak terinstal tetapi TM dan SC sama-sama diaktifkan ([#703](https://github.com/scriptscat/scriptcat/issues/703)) [[d0115c3](https://github.com/scriptscat/scriptcat/commit/d0115c33657260d803b6091139601b1b20407d4e)] (by @cyfung1031)
- ✨ Menambahkan @early-start untuk memuat lebih cepat dari halaman ([#649](https://github.com/scriptscat/scriptcat/issues/649)) [[eb097dd](https://github.com/scriptscat/scriptcat/commit/eb097dd146dcd6f8ca712ed883571dbfb3d09f20)]
- ✨ Pencarian kode global ([#662](https://github.com/scriptscat/scriptcat/issues/662)) [[f8eafb7](https://github.com/scriptscat/scriptcat/commit/f8eafb7f955dad62c1b41ac477e929bf00c65982)] (by @RenjiYuusei)
- ✨ Menambahkan halaman survei setelah pencopotan ekstensi [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]
- 📝 Memodifikasi halaman pemasangan dan namespace ([6f2f000](https://github.com/scriptscat/scriptcat/commit/6f2f000612908b7a88f6b70c2831092805c63bc7))
- ✨ Menambahkan kode QR untuk pemasangan seluler ([348237c](https://github.com/scriptscat/scriptcat/commit/348237c7ce9771c69025386926b1f73710cf6f42))

### Diperbaiki

- 🐛 Memperbaiki masalah di mana pemasangan tidak dapat dipicu saat jaringan tidak dapat mengakses halaman perantara pemasangan [#705](https://github.com/scriptscat/scriptcat/issues/705) [[5f1e292](https://github.com/scriptscat/scriptcat/commit/5f1e2929d79c470ba4427c3cce01f5cd184a839b)]
- 🐛 Menangani ekspresi `@match *://*domain/*` [[039b445](https://github.com/scriptscat/scriptcat/commit/039b4454148947cd3c74de82b87804ee9815e60c)]
- 🐛 Memperbaiki masalah penetrasi sandbox lingkungan ekstensi [#700](https://github.com/scriptscat/scriptcat/issues/700) [[a1a868d](https://github.com/scriptscat/scriptcat/commit/a1a868dfe3199e666fe2bcb65cfb2ad0ad3d699b)]
- ✏️ backgroud -&gt; background ([#698](https://github.com/scriptscat/scriptcat/issues/698)) [[2594075](https://github.com/scriptscat/scriptcat/commit/2594075c4a50f4c79fa46bcda08d7b0cbcfe723c)] (by @cyfung1031)
- ✏️ CrhomeStorage -&gt; ChromeStorage ([#693](https://github.com/scriptscat/scriptcat/issues/693)) [[64c536d](https://github.com/scriptscat/scriptcat/commit/64c536dbd5fcb4c29eebc1109202bab69aaa3ee2)] (by @cyfung1031)
- 🐛 Memperbaiki GM.getTab dan GM.getTabs ([#683](https://github.com/scriptscat/scriptcat/issues/683)) [[31de256](https://github.com/scriptscat/scriptcat/commit/31de256f02b5b61e27f0eec9ea673248ba8faa32)] (by @WhiteSevs)
- 🐛 Memperbaiki domain yang hilang di finalUrl ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[545d7c8](https://github.com/scriptscat/scriptcat/commit/545d7c8c0dd69c83bd2f0353518aafe6af81c0f4)] (by @cyfung1031)
- 🐛 Kompatibilitas dengan kernel browser yang lebih rendah [#647](https://github.com/scriptscat/scriptcat/issues/647) ([bba12d2](https://github.com/scriptscat/scriptcat/commit/bba12d23f04759cb9b7fdb63f0d95ae515ee94a9))
- 🐛 Memperbaiki domain yang hilang di finalUrl ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[3ed018a](https://github.com/scriptscat/scriptcat/commit/3ed018a7a54803fcf2e1791316e0166ed0b52007)] (by @cyfung1031)
- 💚 Memperbaiki masalah lint react/jsx-no-literals [[017b608](https://github.com/scriptscat/scriptcat/commit/017b60886be601e3e0e1719cf249da32d5686c30)]
- 🐛 Kompatibilitas dengan kernel browser yang lebih rendah [#647](https://github.com/scriptscat/scriptcat/issues/647) [[0e2f817](https://github.com/scriptscat/scriptcat/commit/0e2f8173c8b44bd6ad44bdffc73fa302a96a058e)]
- 🐛 Mengoptimalkan injeksi window.external ([#646](https://github.com/scriptscat/scriptcat/issues/646)) [[0b2668a](https://github.com/scriptscat/scriptcat/commit/0b2668aadcab35a33ff9abc4bd030dffb87ea168)] (by @cyfung1031)
- 🐛 Memperbaiki masalah di mana halaman autentikasi penyimpanan cloud tidak dapat menutup otomatis [[7748088](https://github.com/scriptscat/scriptcat/commit/7748088e63c1fc660b6a6ae5613cf04f9da99b8c)]
- 🐛 Memperbaiki masalah `@connect` \\* yang tidak berfungsi [#623](https://github.com/scriptscat/scriptcat/issues/623) [[76481c8](https://github.com/scriptscat/scriptcat/commit/76481c845b34414a7f15ed18ec61f7dff7eef091)]
- 🐛 Menambahkan tes unit dan memperbaiki masalah `@exclude` ([#618](https://github.com/scriptscat/scriptcat/issues/618)) [[0046bb7](https://github.com/scriptscat/scriptcat/commit/0046bb78800a2c46edaac785b8e9592327772a3b)] (by @cyfung1031)
- 🐛 Memperbaiki masalah di mana beberapa tautan .user.js tidak dapat memasang skrip [#599](https://github.com/scriptscat/scriptcat/issues/599) [[ccd2639](https://github.com/scriptscat/scriptcat/commit/ccd2639858f0f3cde28f284376fe8ed998d935ae)]
- 🐛 Memperbaiki kegagalan pembuatan skrip baru [[d42d6e7](https://github.com/scriptscat/scriptcat/commit/d42d6e7d408a84674facf9ab0da6eac0e384502f)]
- 🐛 Memperbaiki metadata ([#610](https://github.com/scriptscat/scriptcat/issues/610)) [[4d98cce](https://github.com/scriptscat/scriptcat/commit/4d98cce0ca1281cc58f551ea4e6700e340780d3f)] (by @cyfung1031)
- 🐛 Memperbaiki Badge Popup ([#605](https://github.com/scriptscat/scriptcat/issues/605)) [[eff9230](https://github.com/scriptscat/scriptcat/commit/eff92309de99abb0cf48ef4727afaa113bc2fbb6)] (by @cyfung1031)
- 🐛 Memperbaiki ScriptEditor.tsx ([#603](https://github.com/scriptscat/scriptcat/issues/603)) [[a9aadba](https://github.com/scriptscat/scriptcat/commit/a9aadba372b813c16bdc5f0aeb07c68981f48c63)] (by @cyfung1031)
- 🐛 Memperbaiki CSS penampil kode &amp; editor ([#602](https://github.com/scriptscat/scriptcat/issues/602)) [[2e86785](https://github.com/scriptscat/scriptcat/commit/2e8678513efaccd42c8dc2aa89f8b76679aa8420)] (by @cyfung1031)
- 🐛 Memperbaiki masalah konkurensi getFaviconFromDomain ([#597](https://github.com/scriptscat/scriptcat/issues/597)) [[1872fe1](https://github.com/scriptscat/scriptcat/commit/1872fe165ab204b155a56f037c111d2d7776c2b9)] (by @cyfung1031)
- 🐛 Memperbaiki kesalahan pembukaan tab di beberapa jendela [#586](https://github.com/scriptscat/scriptcat/issues/586) [[54c1da2](https://github.com/scriptscat/scriptcat/commit/54c1da29c2bd8bd8f5ef2d85b7aed8b334de296f)]
- 🐛 Memperbaiki masalah kompatibilitas openerTabId ([#586](https://github.com/scriptscat/scriptcat/issues/586)) [[b861fc8](https://github.com/scriptscat/scriptcat/commit/b861fc8620e53b885cad98db03f1dd10ec9d296c)] (by @cyfung1031)

### Lain-lain

- 📝 Membuat README_RU.md dan CONTRIBUTING_RU.md ([#678](https://github.com/scriptscat/scriptcat/issues/678)) [[597ab03](https://github.com/scriptscat/scriptcat/commit/597ab0378fe5ced01637cf411326ef7845b8ce2b)] (by @Ioann)
- 👷 Penyesuaian kompatibilitas (kompatibilitas pack.js) ([#669](https://github.com/scriptscat/scriptcat/issues/669)) [[fec45e6](https://github.com/scriptscat/scriptcat/commit/fec45e6606a609b10b79c58d2fcba02c2ce71e16)] (by @cyfung1031)
- 🌐 Menyempurnakan dan memperluas lokal Vietnam ([#661](https://github.com/scriptscat/scriptcat/issues/661)) [[6847a59](https://github.com/scriptscat/scriptcat/commit/6847a596c4b06c75e13594ef60e4b9dfa5718cf3)] (by @RenjiYuusei)
- 🌐 Perbaikan terjemahan ([#635](https://github.com/scriptscat/scriptcat/issues/635)) [[19296de](https://github.com/scriptscat/scriptcat/commit/19296de6a3815e5965eb33401a55da9b2bd22bb4)] (by @cyfung1031)
- 🌐 Memperbaiki masalah i18n panduan orientasi [#627](https://github.com/scriptscat/scriptcat/issues/627) [[9683f96](https://github.com/scriptscat/scriptcat/commit/9683f965400ab6a2bac15349aca4335911766eac)]
- 👷 Mengoptimalkan kode pack.js ([#615](https://github.com/scriptscat/scriptcat/issues/615)) [[870dd9b](https://github.com/scriptscat/scriptcat/commit/870dd9bc6b7eff3eceefa915452e773ec0565180)] (by @cyfung1031)
