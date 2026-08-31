---
title: Mode Langganan
---

File harus dimulai dengan `UserSubscribe`, bukan `UserScript`. Tautan pemasangan harus menggunakan ekstensi `user.sub.js`, dan harus berupa tautan `https`.

Skrip langganan hanya menampilkan dialog pemasangan agar pengguna mengonfirmasi langganan saat pemasangan; pembaruan berikutnya berjalan senyap, dan dialog pembaruan hanya ditampilkan lagi jika izin `connect` berubah.

Satu skrip langganan dapat menjelaskan tautan pemasangan untuk beberapa skrip. Skrip yang dipasang melalui mode langganan dipasang secara senyap, tanpa dialog konfirmasi, dan skrip yang terpasang tetap muncul di daftar skrip — tetapi izin `connect`-nya menggunakan `connect` yang dideklarasikan dalam langganan, bukan izin `connect` skrip itu sendiri.

```js
// ==UserSubscribe==
// @name         xxx
// @description  Subscribe to the xxx script series
// @version      0.1.0
// @author       You
// @connect      www.baidu.com
// @scriptUrl    https://script.tampermonkey.net.cn/48.user.js
// @scriptUrl    https://script.tampermonkey.net.cn/49.user.js
// ==/UserSubscribe==
```

## Pembaruan Langganan dan Pembaruan Skrip

Sesuai dengan `interval pembaruan` yang dikonfigurasi pengguna, ScriptCat secara berkala memeriksa tautan langganan untuk pembaruan; `version` harus dikonfigurasi agar ini berfungsi.

Setiap pembaruan atau perubahan langganan membandingkan tautan skrip dengan skrip yang saat ini terpasang: skrip yang tidak lagi ada dalam langganan baru dihapus, dan skrip yang baru ditambahkan dipasang secara senyap. Pembaruan skrip mengikuti `version` skrip itu sendiri, menggunakan logika pembaruan yang sama dengan skrip yang dipasang normal.

## Pemasangan dan Pembaruan Senyap

Skrip yang dilanggan dipasang dan diperbarui secara senyap — menambah, menghapus, atau memperbarui skrip dari langganan hanya menampilkan notifikasi, tanpa memerlukan konfirmasi pengguna lagi. Karena mekanisme pembaruan senyap ini, mohon hanya berlangganan sumber yang Anda percayai.


## metadata

Arti beberapa bidang metadata berubah dalam skrip langganan.

### name

Nama langganan (juga dapat diedit langsung di daftar langganan)

### description

Deskripsi langganan, menjelaskan untuk apa langganan itu

### version

Versi langganan. Jika dihilangkan, pembaruan dipicu oleh apakah konten skrip langganan telah berubah.

### connect

Meminta izin akses untuk situs; lihat `GM_cookie` dan `GM_xmlhttpRequest`. Untuk skrip yang dipasang melalui mode langganan, `connect` diganti oleh `connect` langganan.

### scriptUrl

Tautan pemasangan skrip yang diperlukan oleh langganan
