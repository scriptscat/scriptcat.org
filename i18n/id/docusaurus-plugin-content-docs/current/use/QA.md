---
title: Pertanyaan yang Sering Diajukan
---

## Mode Pengembang / Izin Skrip Pengguna

#### T: ScriptCat menampilkan "Mode pengembang tidak diaktifkan" dan skrip tidak berjalan?

Mulai dari Chrome 120+ dan versi Edge yang lebih baru, browser mengharuskan pengguna mengaktifkan izin secara manual agar skrip dapat berjalan. Silakan lihat [Aktifkan Dukungan Skrip Pengguna Browser](/docs/use/open-dev/) untuk petunjuk pengaturan.

Jika sudah diaktifkan tetapi peringatan tetap muncul, coba mulai ulang browser atau muat ulang ekstensinya.

## Skrip Tidak Berfungsi

#### T: Skrip sudah dipasang tetapi tidak berpengaruh?

1. **"Izinkan Skrip Pengguna" tidak diaktifkan** — Lihat [Aktifkan Dukungan Skrip Pengguna Browser](/docs/use/open-dev/)
2. **Mulai dingin** — Skrip mungkin tidak langsung dimuat saat browser pertama kali dibuka. Coba segarkan halaman
3. **Konflik ekstensi** — Pemblokir iklan (mis., uBlock Origin) dapat menyebabkan kesalahan skrip

#### T: Skrip berfungsi di Tampermonkey tetapi tidak di ScriptCat?

ScriptCat dan Tampermonkey memiliki beberapa perbedaan dalam implementasi API. Harap perbarui ke versi terbaru. Jika masalah tetap berlanjut, ajukan Issue di [GitHub](https://github.com/scriptscat/scriptcat/issues).

## Masalah Sinkronisasi Cloud

> Untuk penggunaan sinkronisasi dasar, lihat [Sinkronisasi & Cadangan](/docs/use/sync/).

#### T: Mengalami masalah dengan sinkronisasi OneDrive / Google Drive / WebDAV?

1. **Skrip yang dihapus muncul kembali** — Pastikan "sinkronisasi penghapusan" diaktifkan di semua perangkat

## Masalah Pemasangan Skrip

> Untuk cara memasang skrip, lihat [Pasang Skrip](/docs/use/script_installation/).

## Masalah Otorisasi Cookie

#### T: GM_cookie tidak bisa mendapatkan cookie?

1. **Popup otorisasi tidak muncul** — Pastikan `GM_cookie` dideklarasikan dengan benar di `@grant` skrip, dan gunakan `@connect` untuk mendeklarasikan domain yang perlu diakses

## Kehilangan Data Skrip

#### T: Semua skrip hilang setelah membuka browser?

1. **Keterlambatan inisialisasi** — ScriptCat mungkin masih memuat data saat browser dimulai. Tunggu beberapa detik atau mulai ulang browser
2. **Perangkat lunak pembersih** — Alat seperti 360 Security Guard atau CCleaner dapat menghapus data ekstensi. Kecualikan data ekstensi browser di pengaturan pembersihan
3. **Cadangan rutin disarankan** — Gunakan fitur ekspor atau [sinkronisasi cloud](/docs/use/sync/) untuk mencadangkan skrip dan pengaturan secara rutin
