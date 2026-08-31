---
title: Skrip Latar Belakang
---

Skrip latar belakang cocok untuk skrip yang perlu terus berjalan. Skrip latar belakang adalah jenis skrip khusus ScriptCat; mereka berjalan di sandbox dan tidak dapat mengakses DOM. Mereka dapat dikembangkan menggunakan API GM yang sama seperti Tampermonkey, dan catatan kompatibilitas disebutkan dalam dokumentasi.

## Skrip Latar Belakang (`@background`) {#background-script-background}

Skrip latar belakang dideklarasikan dengan atribut `@background`. Ini memungkinkan skrip terus berjalan di latar belakang setelah skrip diaktifkan atau browser dimulai.

## Skrip Terjadwal (`@crontab`) {#scheduled-script-crontab}

> Skrip terjadwal adalah jenis skrip latar belakang yang cocok untuk tugas yang perlu **berjalan berulang kali pada siklus waktu**.

Skrip terjadwal dideklarasikan dengan atribut `@crontab`. Ini mendukung penjadwalan tingkat menit dan tingkat detik, dan menyediakan sintaks tambahan ScriptCat `once` / `once(...)` untuk menghindari berjalan lebih dari sekali dalam siklus waktu yang sama.

⚠️ Catatan:

* Dalam satu skrip, **hanya `@crontab` pertama yang berlaku**
* Disarankan agar **waktu eksekusi tunggal + waktu percobaan ulang** skrip tidak melebihi interval cron, jika tidak eksekusi dapat tumpang tindih

## Catatan Ekspresi Cron

Implementasi cron ScriptCat didasarkan pada [**node-cron**](https://github.com/kelektiv/node-cron/), dengan ekstensi kecil di atas sintaks cron standar.

### Format Ekspresi

#### Format Standar 5 Bidang (Disarankan)

```text
minute hour day month weekday
```

#### Format Diperluas 6 Bidang (Tidak Disarankan)

```text
second minute hour day month weekday
```

> ⚠️ Format 6 bidang tidak disarankan
> Lingkungan browser tidak dapat menjamin presisi tingkat detik, dan meningkatkan overhead kinerja — halaman latar belakang mungkin mengalami penundaan penjadwalan.

### Sintaks yang Tersedia per Bidang

| Sintaks  | Arti              | Contoh                  |
| ------- | -------------------- | ------------------------ |
| `*`     | Nilai apa pun            | `*` (setiap menit/jam)  |
| angka  | Nilai tertentu       | `5` (menit ke-5)     |
| `a,b,c` | Beberapa nilai diskret | `1,15,30`             |
| `a-b`   | Rentang bersambung      | `10-23`                  |
| `*/n`   | Setiap n satuan          | `*/5`                   |
| `a-b/n` | Rentang dengan langkah        | `10-50/10`               |

#### Aturan Hari Minggu

* `1–6`: Senin hingga Sabtu
* `0` atau `7`: Minggu

## Sintaks Ekstensi `once`

### Apa Arti `once`

Menggunakan `once` dalam ekspresi cron berarti:

> **Dalam siklus waktu saat ini, hanya izinkan satu eksekusi yang berhasil**

Bahkan jika titik waktu berikutnya dalam siklus yang sama masih cocok dengan aturan cron, skrip tidak akan berjalan lagi.

### `once` vs. `once(...)`

| Sintaks        | Nilai cron dasar untuk bidang ini | Deskripsi                                                       |
| ------------- | ------------------------------------- | ------------------------------------------------------------------ |
| `once`        | `*` (nilai apa pun)                       | Berjalan pada kecocokan pertama dalam siklus, tanpa waktu tertentu  |
| `once(expr)`  | `expr`                                 | Hanya berjalan pada waktu yang cocok dengan `expr` dalam siklus, dan hanya sekali |

`once(expr)` memungkinkan Anda menentukan titik waktu kandidat secara presisi sambil tetap menegakkan "hanya berjalan sekali per siklus." Semua sintaks cron standar (angka, rentang, langkah, daftar) didukung di dalam tanda kurung.

Contoh perbandingan:

```text
* once * * *          // menit mana pun setiap jam; berjalan pada kecocokan pertama, tidak ada berjalan lebih lanjut pada jam itu
* once(9-17) * * *    // antara 9:00 dan 17:59 setiap hari, berjalan sekali per jam
0,30 once * * *       // mana pun dari menit 0 atau 30 yang cocok pertama setiap jam akan berjalan; tidak ada lagi pada jam itu
```

### Posisi `once` = Siklus Waktu yang Dibatasi

Di mana pun `once` / `once(...)` ditempatkan, artinya "hanya berjalan sekali dalam granularitas waktu itu."

| Posisi `once` | Perilaku                       |
| ---------------- | ------------------------------- |
| bidang menit      | Hanya berjalan sekali per menit       |
| bidang jam        | Hanya berjalan sekali per jam         |
| bidang hari         | Hanya berjalan sekali per hari          |
| bidang bulan       | Hanya berjalan sekali per bulan        |
| bidang hari-minggu     | Hanya berjalan sekali per minggu         |

Contoh:

```text
* once * * *       // hanya berjalan sekali per jam
* * once * *       // hanya berjalan sekali per hari
* 9-18 once * *    // hanya berjalan sekali antara 9:00 dan 18:59 setiap hari
```

### `once` Digabungkan dengan Rentang / Daftar / Langkah

`once` / `once(...)` dapat digabungkan dengan sintaks cron apa pun, tetapi hanya ada satu aturan:

> **Dalam siklus yang sama, setelah satu berjalan berhasil, semua titik waktu yang cocok lainnya diabaikan**

#### Contoh 1: Rentang

```text
* 10 once * *
```

Artinya:

* Setiap hari, 10:00–10:59 adalah waktu kandidat
* Setelah kecocokan pertama hari itu
* 10:05–10:59 tidak akan berjalan lagi

#### Contoh 2: Daftar

```text
* 1,3,5 once * *
```

Artinya:

* Setiap hari, 1:00, 3:00, dan 5:00 adalah waktu kandidat
* Jika 1:00 sudah berjalan
* 3:00 dan 5:00 akan dilewati

#### Contoh 3: Langkah

```text
* */4 once * *
```

Artinya:

* Setiap hari, 0:00, 4:00, 8:00, 12:00, 16:00, dan 20:00 adalah waktu kandidat
* Setelah berjalan pertama hari itu
* Tidak ada titik waktu lebih lanjut yang berjalan

#### Contoh 4: `once(...)` Menentukan Titik Waktu Kandidat

```text
* once(9-17) * * *
```

Artinya:

* Setiap hari, 9:00 hingga 17:00 adalah jam kandidat
* Siklus direset setiap jam; dalam satu jam, kecocokan pertama menghentikan berjalan lebih lanjut
* Efek: berjalan sekali per jam antara 9:00 dan 17:00 setiap hari, total 9 kali

```text
* 9-18 once * *
```

Artinya:

* Setiap hari, 9:00–18:59 adalah waktu kandidat
* `once` di bidang hari mengunci siklus menjadi sekali per hari
* Setelah kecocokan pertama hari itu, tidak ada lagi yang berjalan sebelum 18:59

## Contoh `@crontab`

### Umum

```js
//@crontab * * * * *        // berjalan sekali per menit
//@crontab * * * * * *      // berjalan sekali per detik (tidak disarankan)
//@crontab 0 */6 * * *      // berjalan tepat jam setiap 6 jam
//@crontab 15 */6 * * *     // berjalan pada menit 15 setiap 6 jam
//@crontab * once * * *     // berjalan paling banyak sekali per jam
//@crontab * * once * *     // berjalan paling banyak sekali per hari
//@crontab * 10 once * *    // hanya berjalan sekali dalam jam 10:00 setiap hari (mis. jika berjalan pada 10:04, tidak akan berjalan lagi dari 10:05-10:59)
//@crontab * */4 once * *   // memeriksa paling banyak sekali setiap 4 jam setiap hari (mis. jika berjalan pada 4:00, tidak akan berjalan lagi pada 8, 12, 16, 20, 24, dst.)
```

### Lanjutan

```js
//@crontab * 1,3,5 once * *       // berjalan sekali pada 1:00, 3:00, atau 5:00 setiap hari (mis. jika berjalan pada 1:00, tidak akan berjalan lagi pada 3:00 atau 5:00)
//@crontab * 10-23 once * *       // berjalan sekali antara 10:00 dan 23:59 setiap hari (mis. jika berjalan pada 10:04, tidak akan berjalan lagi dari 10:05-23:59)
//@crontab * once 13 * *          // berjalan sekali per jam pada tanggal 13 setiap bulan
//@crontab * once(9-17) * * *     // berjalan sekali per jam antara 9:00 dan 17:00 setiap hari
//@crontab 0,30 once * * *        // mana pun dari menit 0 atau 30 yang cocok pertama setiap jam berjalan; tidak berulang pada jam itu
//@crontab * 9-18 once * *        // hanya berjalan sekali antara 9:00 dan 18:00 setiap hari
```

## Rekomendasi Penggunaan

### Cocok untuk `once`

* Tugas yang **hanya perlu berjalan sekali** per hari/jam
* Skrip pemeriksaan status, sinkronisasi, dan pelaporan
* Menghindari masalah berikut:

  * Browser tidak dibuka dalam waktu lama
  * Penundaan penjadwalan halaman latar belakang
  * Eksekusi duplikat yang disebabkan oleh mulai ulang browser

### Tidak Disarankan untuk `once`

* Tugas yang harus berjalan pada waktu yang presisi
* Skrip yang waktu eksekusinya mungkin jauh melebihi interval cron
* Tugas dengan persyaratan konsistensi ketat pada jumlah eksekusi

## Menguji Ekspresi Cron

Saat menguji ekspresi cron, mohon **ganti sementara `once` / `once(...)` dengan nilai dasarnya**:

* `once` → `*`
* `once(expr)` → `expr`

Perhatikan bahwa alat pengujian mungkin tidak mendukung format 6 bidang yang diperluas.

Alat yang direkomendasikan:

* [crontab.guru](https://crontab.guru/)
* [kalkulator cron tool.lu](https://tool.lu/crontab/)

Di halaman daftar skrip, arahkan kursor ke **kolom status berjalan** untuk melihat **waktu eksekusi terjadwal berikutnya** skrip.

## Log

Di halaman daftar skrip, mengarahkan kursor ke `kolom status berjalan` menampilkan tooltip dengan status berjalan skrip;
mengkliknya memunculkan konten log yang dicetak melalui `GM_log`.

![](@site/docs/dev/background.assets/image-20210621214143661.png)

![](@site/docs/dev/background.assets/image-20210621214124685.png)

## Debugging Skrip

Skrip latar belakang dapat di-debug langsung dari halaman editor skrip, tetapi ini memiliki keterbatasan berikut:

* `value` tidak sinkron dengan benar
* Menu `registerMenu` tidak terpicu dengan benar

![](@site/docs/dev/background.assets/image-20210903141601057.png)

Untuk men-debug lingkungan runtime yang sebenarnya, aktifkan **Mode Pengembang** di pengaturan ekstensi, lalu buka halaman `background.html` ekstensi untuk men-debug.

Kesalahan yang muncul saat runtime juga dapat dilihat di log berjalan.

![image-20210903144155450](@site/docs/dev/background.assets/image-20210903144155450.png)

## Promise

Pola berikut sangat disarankan, karena juga memungkinkan pengelola skrip memantau eksekusi skrip.
Jika skrip melakukan operasi asinkron apa pun, skrip **harus mengembalikan `Promise`**.

```ts
// ==UserScript==
// @name         Background Script
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @background
// ==/UserScript==
return new Promise((resolve, reject) => {
  if (Math.round((Math.random() * 10) % 2)) {
    resolve("ok"); // berhasil
  } else {
    reject("error"); // gagal, dengan alasan kesalahan
  }
});
```

```js
// ==UserScript==
// @name         Scheduled script that runs once a day
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @crontab      * * once * *
// ==/UserScript==
return new Promise((resolve, reject) => {
  if (Math.round((Math.random() * 10) % 2)) {
    resolve("ok"); // berhasil
  } else {
    reject("error"); // gagal, dengan alasan kesalahan
  }
});
```

```js
// ==UserScript==
// @name         Call an API
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @crontab      * * once * *
// ==/UserScript==
return new Promise((resolve, reject) => {
  GM_xmlhttpRequest({
    url: "https://bbs.tampermonkey.net.cn/",
    onload() {
      resolve("ok"); // berhasil
    },
    onerror() {
      reject("error"); // gagal, dengan alasan kesalahan
    },
  });
});
```

Pastikan untuk memanggil `resolve` / `reject` hanya setelah logika skrip benar-benar selesai.
Setelah dipanggil, pengelola menganggap eksekusi skrip selesai, dan operasi GM berikutnya tidak akan berlaku lagi.

## Percobaan Ulang Kesalahan

Skrip latar belakang ScriptCat mendukung percobaan ulang kesalahan.
Saat skrip gagal, skrip dapat `reject` dengan `CATRetryError` untuk memicu percobaan ulang.

* Interval percobaan ulang minimum: 5 detik
* Hindari bertabrakan dengan waktu eksekusi skrip itu sendiri, jika tidak eksekusi duplikat dapat terjadi

```js
// ==UserScript==
// @name         Retry example
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @crontab      * * once * *
// @grant        GM_notification
// ==/UserScript==

return new Promise((resolve, reject) => {
  GM_notification({
    title: "retry",
    text: "Retrying in 10 seconds",
  });
  reject(new CATRetryError("xxx error", 10));
});
```
