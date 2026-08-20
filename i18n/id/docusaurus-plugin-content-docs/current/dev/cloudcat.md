---
title: Eksekusi Cloud
---

> Beberapa cara untuk berjalan di cloud disediakan; lihat [Lingkungan Berjalan](#running-environments) untuk detailnya. Selain itu, [CloudCat](https://github.com/scriptscat/cloudcat) adalah layanan untuk menjalankan skrip latar belakang di cloud — platform FAAS yang masih dalam pengembangan.

⚠ Mohon diperhatikan ⚠, setelah diunggah ke cloud, arti `once` dalam ekspresi skrip terjadwal berubah: waktu sebelum `once` diganti dengan nilai minimumnya saat berjalan.

Misalnya:

* `* * once * *` => `0 0 * * *`: berjalan sekali per hari, menjadi berjalan pada 00:00 setiap hari
* `* 1-23 once * *` => `0 1 * * *`: berjalan sekali antara 1:00 dan 23:00 setiap hari, menjadi berjalan pada 01:00 setiap hari
* `* 1,3,5 once * *` => `0 1 * * *`: berjalan sekali pada 1:00, 3:00, atau 5:00 setiap hari, menjadi berjalan pada 01:00 setiap hari
* `* */4 once * *` => `0 0 * * *`: berjalan sekali setiap 4 jam setiap hari, menjadi berjalan pada 00:00 setiap hari
* `* 1-23/4 once * *` => `0 1 * * *`: berjalan sekali setiap 4 jam antara 1:00 dan 23:00 setiap hari, menjadi berjalan pada 01:00 setiap hari
* `* 10 once * *` => `0 10 * * *`: berjalan sekali pada 10:00 setiap hari, menjadi berjalan pada menit 00 jam 10 setiap hari
* `* * * once *` => `0 0 1 * *`: berjalan sekali per bulan, menjadi berjalan pada 00:00 tanggal 1 setiap bulan

## Nilai Deskripsi CloudCat Tambahan

Skrip referensi: [Bilibili Auto Check-in](https://scriptcat.org/script-show-page/48)

### cloudCat

Mendeklarasikan atribut ini memungkinkan skrip berjalan melalui `CloudCat`. Setelah skrip memiliki opsi ini, tombol eksekusi cloud muncul di daftar skrip; mengkliknya memungkinkan Anda memilih metode eksekusi — lihat [Lingkungan Berjalan](#running-environments).

![image-20220203225847694](@site/docs/dev/cloudcat.assets/image-20220203225847694.png)

### cloudServer

> Terkait dengan cloudCat, belum diimplementasikan

Alamat server cloudCat bawaan


### exportValue

Menjelaskan Values yang diekspor ke cloud; beberapa deklarasi diperbolehkan.

```ts
// @exportValue key1,key2,key3
// @exportValue key4,key5,key6
```

### exportCookie

Menjelaskan cookie yang diekspor ke cloud; beberapa deklarasi diperbolehkan. Parameter dijelaskan menggunakan `CookieDetails` dari `GM_cookie`, misalnya:

```ts
// Berikut mengekspor cookie bernama cookie1 dari https://docs.scriptcat.org/docs/use/
// @exportCookie url=https://docs.scriptcat.org/docs/use;name=cookie1

// Ini mengekspor semua cookie untuk domain scriptcat.org
// @exportCookie domain=scriptcat.org

// Semua parameter yang tersedia:
// @exportCookie domain=scriptcat.org;url=https://docs.scriptcat.org/docs/use;name=cookie1;path=/docs/use;secure=true;session=true
```

## Perubahan Dukungan API
> Saat ini hanya API berikut yang didukung; kecuali disebutkan lain, perilakunya sama dengan API aslinya.

### GM_xmlhttpRequest


### GM_notification


### GM_log

### GM_getValue

Saat ini hanya mendukung mendapatkan Values yang diekspor melalui `@exportValue`; set/delete/list dan metode lain tidak didukung.

## Lingkungan Berjalan {#running-environments}

### Lokal

Mengekspor paket zip; setelah diekstrak ke folder, jalankan perintah berikut untuk mengeksekusinya secara lokal (memerlukan lingkungan Node.js lokal):

```bash
npm i
node index.js
```


### Tencent Cloud

Pertama buat kunci Tencent Cloud di [**Access Keys**](https://console.cloud.tencent.com/cam/capi) — jika menggunakan sub-akun, pastikan memberinya izin Cloud Function. Kemudian aktifkan layanan di [**Function Service**](https://console.cloud.tencent.com/scf/list), yang menyertakan sejumlah penggunaan gratis setiap bulan. Wilayah defaultnya adalah Shanghai; sesuaikan jika perlu. Setelah mengklik unggah, pemicu terjadwal otomatis dibuat berdasarkan `@crontab` untuk menjalankan fungsi sesuai jadwal.

![image-20220203224956248](@site/docs/dev/cloudcat.assets/image-20220203224956248.png)
