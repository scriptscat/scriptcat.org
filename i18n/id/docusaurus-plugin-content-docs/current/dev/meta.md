---
title: Blok Metadata
---

Konten di dalam `==UserScript==` menjelaskan izin yang dibutuhkan skrip, informasi tentang skrip, dan sebagainya. Blok ini terletak di awal skrip.

```js
// ==UserScript==
// @name         New Userscript
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @crontab      * * once * *
// ==/UserScript==
```

## Nilai Utama

### name

Nama skrip

### namespace

Namespace skrip. `name + namespace` menentukan keunikan skrip.

### version

Versi skrip. Disarankan mengikuti [semantic versioning](https://semver.org/), sehingga saat perubahan versi terdeteksi, pengguna akan diminta memperbarui, dan sebagainya.

### description

Deskripsi terperinci skrip

### author

Penulis skrip

### run-at

Kapan skrip berjalan

| Nilai          | Berjalan                                                              | Didukung sejak        |
| -------------- | ------------------------------------------------------------------ | ---------------------- |
| document-start | Menyuntikkan skrip ke halaman segera setelah URL cocok di frontend | v0.3.0          |
| document-end   | Menyuntikkan skrip setelah DOM selesai dimuat; skrip halaman dan gambar mungkin masih dimuat pada titik ini | v0.3.0 |
| document-idle  | Menyuntikkan skrip setelah semua konten selesai dimuat         | v0.3.0                  |
| document-body  | Skrip hanya disuntikkan setelah halaman memiliki elemen `body`     | v0.6.2                  |
| document-menu  | Menampilkan menu saat klik kanan; menjalankan skrip menggunakan nama skrip sebagai nama menu | v0.3.4-v0.9.4 (🔥 dihapus) |

Untuk ikon menu, Anda dapat merujuk ke [Unicode Symbols](https://unicode-table.com/en/) dan [emoji](https://www.emojiall.com/en-US/).

### run-in

Menentukan lingkungan tempat skrip disuntikkan: `@run-in normal-tabs` untuk tab normal, `@run-in incognito-tabs` untuk tab penyamaran.

### early-start (v1.1.0+)

Saat `run-at` adalah `document-start`, skrip berjalan sedini mungkin, tetapi tetap tidak dapat menjamin pemuatan lebih cepat dari halaman.

Setelah Anda mendefinisikan `@run-at document-start`, Anda dapat menambahkan `@early-start` untuk membuat skrip dimuat lebih cepat dari halaman: [contoh](https://github.com/scriptscat/scriptcat/blob/main/example/early-start.js)

### inject-into

:::tip

Di lingkungan content-script (`content`), `unsafeWindow` hanya menunjuk ke `window` lingkungan itu sendiri, dan tidak dapat mengakses `window` halaman.

ScriptCat tidak mendukung pemeriksaan otomatis pembatasan CSP untuk memutuskan apakah akan menyuntikkan sebagai `content` atau `page` (yaitu `@inject-into auto` milik Tampermonkey).

:::

Menentukan tempat skrip disuntikkan, mendukung `page` dan `content`, bawaan `page`.

- `page`: skrip disuntikkan ke lingkungan halaman, dan dapat menggunakan `unsafeWindow` untuk mengakses `window` dan `DOM` halaman
- `content`: skrip disuntikkan ke lingkungan content-script, tidak dapat mengakses objek `window` halaman secara langsung, tetapi dapat mengakses `DOM` halaman, dan tidak tunduk pada `CSP`

### storageName 🧪

Ruang penyimpanan untuk `Value`; data di bawah `storageName` yang sama dapat dibagikan dan dikomunikasikan antar skrip. Ini khusus ScriptCat.

### background

Menandai skrip ini sebagai skrip latar belakang, yang perlu berjalan di lingkungan latar belakang. Lihat [Skrip Latar Belakang](./background.md#background-script-background) untuk detailnya.

### crontab

Menandai skrip sebagai skrip terjadwal, yang memerlukan nilai ekspresi cron. Hanya satu ekspresi cron yang dapat ada, dan berjalan sesuai jadwal itu di lingkungan latar belakang. Lihat [Skrip Terjadwal](./background.md#scheduled-script-crontab) untuk detailnya.

### match

Hanya URL yang cocok dengan `match` yang akan menjalankan skrip, mengikuti [Match patterns](https://developer.chrome.com/docs/extensions/mv3/match_patterns/). Dalam `match`, `*` adalah wildcard, `tld` cocok dengan domain tingkat atas, dan domain yang diawali `*.` juga akan cocok dengan `xxx.com`:

| Nilai                             | Contoh yang benar                                                                                                                          | Contoh yang salah                          |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `http://scriptcat.org/doc/match`  | `http://scriptcat.org/doc/match`                                                                                                            | `http://scriptcat.org/doc/runAt`         |
| `*://*/param?*`                   | `https://scriptcat.org/param` \| `http://scriptcat.org/param?search=tampermonkey`                                                            | `https://scriptcat.org/test/param`       |
| `*://*/prefix*suffix`             | `http://scriptcat.org/prefix/suffix` \| `http://scriptcat.org/prefix/mid/suffix` \| `http://scriptcat.org/prefixsuffix`                      | `http://scriptcat.org/prefix/suffix/end` |
| `http*://scriptcat.org/*`         | `https://scriptcat.org/` \| `https://scriptcat.org/doc` \| `http://scriptcat.org/doc/match` \| `http://scriptcat.org/param?search=tampermonkey` | `https://doc.scriptcat.org/`            |
| `http*://scriptcat.org/doc/*`     | `https://scriptcat.org/doc` \| `http://scriptcat.org/doc/match`                                                                              | `http://scriptcat.org/param?search=tampermonkey` |
| `http*://scriptcat.tld/doc/*`     | `https://scriptcat.cn/doc` \| `http://scriptcat.net.cn/doc/match`                                                                            | `http://google.com/param?search=tampermonkey` |
| `http*://*.scriptcat.org/doc/*`   | `https://scriptcat.cn/doc` \| `http://www.scriptcat.net.cn/doc/match`                                                                        | `http://google.com/param?search=tampermonkey` |

### include

Mendukung `\*` untuk pencocokan fuzzy, memungkinkan URL non-standar

### exclude

URL yang tidak boleh cocok; menggunakan sintaks ekspresi yang sama dengan `include`

### grant

Meminta izin API — API hanya dapat dipanggil setelah diminta. Lihat daftar izin di: [Dokumentasi API](./api.md) dan [Dokumentasi API CAT](./cat-api.md).

Dua nilai khusus:

- **none**: skrip tidak berjalan di lingkungan sandbox, tetapi langsung di lingkungan halaman. Di lingkungan ini, tidak ada API GM yang tersedia, tetapi objek `window` halaman dapat diakses langsung.
- **unsafeWindow**: di lingkungan sandbox, jika Anda perlu mengakses objek `window` halaman, gunakan `unsafeWindow`. (Tampermonkey tidak mengharuskan mendeklarasikan ini — dipertahankan hanya untuk kompatibilitas, yang memang tidak terlalu bersih.)

### connect

Meminta izin akses untuk situs; lihat `GM_cookie` dan `GM_xmlhttpRequest`. `GM_download` dalam mode `native` juga menghormati `@connect` (host yang tidak dideklarasikan memicu prompt konfirmasi, tidak seperti Tampermonkey)

### resource

Menyertakan file sumber daya. Setelah mendeklarasikan `@resource`, Anda dapat menggunakan `GM_getResourceText`/`GM_getResourceURL` untuk mengambil informasinya.

```js
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico
// @resource html https://bbs.tampermonkey.net.cn/
// @resource xml https://bbs.tampermonkey.net.cn/sitemap.xml
// Menambahkan verifikasi integritas sumber daya
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico#md5-xxx,sha256-xxx
```

### require

Menyertakan file JS eksternal; mendukung [verifikasi integritas sumber daya](#resource-integrity-verification)

### require-css

Menyertakan file CSS eksternal; mendukung [verifikasi integritas sumber daya](#resource-integrity-verification)

### noframes

Menandai skrip sebagai tidak berjalan di dalam `<frame>`

### definition

Alamat referensi file `.d.ts`, memungkinkan petunjuk autocomplete di editor

### antifeature

Ini terkait dengan pasar skrip; fitur yang tidak diinginkan perlu ditandai dengan nilai deskripsi ini, misalnya:

```js
// @antifeature ads This script has ads
// @antifeature referral-link This script modifies or redirects to the author's referral link
```

## Nilai Deskripsi Tambahan

### license

Lisensi sumber terbuka skrip saat ini

### updateURL

Pemeriksaan pembaruan memerlukan skrip jarak jauh memiliki tag `@version` agar berfungsi.

Tautan yang digunakan skrip untuk memeriksa pembaruan; jika tidak diatur, defaultnya adalah `user.js => meta.js` dari tautan, atau tautan saat ini jika tidak ada `user.js`.

Jika `@updateURL` dikonfigurasi, `@downloadURL` juga harus dikonfigurasi agar `@updateURL` berfungsi.

### downloadURL

Alamat unduhan untuk pembaruan skrip

### supportURL

Situs dukungan, halaman laporan bug

### homepage, homepageURL, website

Beranda skrip

### source

Halaman kode sumber skrip

### icon, iconURL, defaulticon

Ikon skrip

### icon64, icon64URL

Ikon skrip berukuran 64x64

### copyright

Informasi hak cipta skrip

### tag

Tag skrip, dipisahkan dengan koma atau spasi

### compatible

Informasi kompatibilitas yang ditampilkan di GreasyFork

### scriptUrl

URL skrip pengguna yang dirujuk oleh skrip langganan

### unwrap

Membuat skrip pengguna melewati pembungkusan sandbox dan disuntikkan serta dieksekusi langsung di lingkup global asli halaman. Skrip dapat langsung mengakses dan memodifikasi variabel global asli halaman, tetapi tidak akan dapat menggunakan API khusus skrip pengguna seperti `GM.*`. Umumnya digunakan dalam skenario yang memerlukan interaksi mendalam dengan skrip halaman asli, atau saat memigrasikan skrip halaman biasa yang sudah ada.

### cloudCat

Menandai skrip sebagai dapat diekspor ke paket skrip cloud CloudCat (khusus SC)

### cloudServer

Layanan cloud CloudCat yang digunakan skrip

### exportValue

Nilai penyimpanan skrip yang diekspor saat mengekspor sebagai skrip cloud

### exportCookie

Cookie yang diekspor saat mengekspor sebagai skrip cloud

### Catatan

### Verifikasi Integritas Sumber Daya {#resource-integrity-verification}

- Gunakan md5, sha1, sha256, sha384, atau sha512 untuk memverifikasi sumber daya terhadap perusakan. Beberapa metode verifikasi dapat dipisahkan dengan `;` atau `,`.
- Sesuai [rekomendasi W3C](https://w3c.github.io/webappsec-subresource-integrity/#hash-collision-attacks), md5 dan sha1 tidak disarankan; gunakan sha384 atau algoritma hash yang lebih kuat.

Misalnya:

```js
// @require https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js#md5-d55836f30c097da753179f82fa6f108f,sha256-a476ab8560837a51938aa6e1720c8be87c2862b6221690e9de7ffac113811a90
```
