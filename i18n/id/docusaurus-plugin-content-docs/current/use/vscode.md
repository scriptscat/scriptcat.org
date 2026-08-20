---
title: Kembangkan Skrip dengan VSCode
---

ScriptCat menyediakan ekstensi VSCode yang memungkinkan Anda menulis skrip pengguna di VSCode. Setelah disimpan, perubahan otomatis disinkronkan ke ScriptCat di browser — tanpa perlu menyalin-menempel manual, sehingga sangat meningkatkan efisiensi pengembangan.

## Prasyarat

Anda perlu memasang dua alat berikut:

1. **Pasang ekstensi ScriptCat di browser Anda** — Jika belum memasangnya, ikuti panduan [Mulai Cepat](/docs/use/use/) untuk memasangnya
2. **Pasang ekstensi ScriptCat di VSCode** — Cari "[scriptcat-vscode](https://marketplace.visualstudio.com/items?itemName=CodFrm.scriptcat-vscode)" di pasar Ekstensi VSCode, atau unduh dari [repositori GitHub](https://github.com/scriptscat/scriptcat-vscode)

## Membangun Koneksi

Setelah terpasang, Anda perlu menghubungkan ekstensi ScriptCat di browser dengan VSCode:

1. Klik ikon ScriptCat di browser Anda untuk membuka panel pengelolaan
2. Buka **Alat > Alat Pengembang**
3. Temukan **Hubungkan otomatis ke layanan VSCode**, aktifkan, dan klik **Hubungkan**

Setelah terhubung, saluran waktu nyata dibuat antara VSCode dan ScriptCat.

## Sinkronisasi Skrip

Setelah koneksi terbentuk, Anda dapat memilih salah satu dari dua cara untuk menyinkronkan skrip:

### Opsi 1: Mode Deteksi Otomatis (Disarankan)

1. Di VSCode, tekan `Ctrl + Shift + P` (`Cmd + Shift + P` di Mac) untuk membuka palet perintah
2. Ketik dan pilih `scriptcat.autoTarget`
3. Mulai saat itu, setiap kali Anda membuka atau menyimpan file `.user.js`, file tersebut akan otomatis disinkronkan ke ScriptCat

### Opsi 2: Mode Skrip Tertentu

1. Di VSCode, tekan `Ctrl + Shift + P` (`Cmd + Shift + P` di Mac) untuk membuka palet perintah
2. Ketik dan pilih `scriptcat.target`
3. Tentukan jalur file skrip yang akan disinkronkan

## Alur Kerja Pengembangan

Setelah diatur, alur kerja pengembangan sangat sederhana:

1. Tulis atau edit skrip `.user.js` Anda di VSCode
2. Tekan `Ctrl + S` untuk menyimpan file
3. Skrip otomatis disinkronkan ke ScriptCat di browser
4. Beralih ke browser dan segarkan halaman untuk melihat hasilnya

Seluruh proses tidak memerlukan langkah manual — menyimpan langsung berlaku.

## Pertanyaan yang Sering Diajukan

### Bagaimana jika tidak bisa terhubung?

- Pastikan ekstensi ScriptCat di browser Anda berjalan
- Pastikan ekstensi ScriptCat di VSCode terpasang dan diaktifkan
- Periksa status koneksi di halaman "Alat Pengembang" di panel pengelolaan ScriptCat

### Skrip tidak diperbarui setelah disimpan?

- Pastikan nama file diakhiri dengan `.user.js`
- Pastikan Anda telah menjalankan perintah `scriptcat.autoTarget` atau `scriptcat.target`
- Periksa panel output VSCode untuk pesan kesalahan apa pun

### Apakah saya perlu menghubungkan ulang setelah memulai ulang VSCode?

Jika "Hubungkan otomatis ke layanan VSCode" diaktifkan, VSCode akan otomatis terhubung kembali setelah dimulai ulang — tanpa langkah manual.
