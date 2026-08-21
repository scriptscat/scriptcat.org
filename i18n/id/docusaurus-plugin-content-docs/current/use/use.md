---
slug: /use/use
title: Mulai Cepat
---

ScriptCat adalah ekstensi browser yang dapat menjalankan skrip pengguna, kompatibel dengan skrip Tampermonkey, dan menyediakan lebih banyak fitur. Jika Anda menemukan bug atau memiliki saran, Anda dapat mengunjungi [Repositori GitHub](https://github.com/scriptscat/scriptcat) untuk memberikan umpan balik.

## Pasang Ekstensi

Anda dapat memasang ekstensi dari toko ekstensi berikut:

| Browser         | Tautan Toko                                                                                                                                                                                                                                     | Status         |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Chrome          | [Versi Stabil](https://chrome.google.com/webstore/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf) [Versi Beta](https://chromewebstore.google.com/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/jaehimmlecjmebpekkipmpmbpfhdacom?authuser=0&hl=zh-CN) | ✅ Tersedia    |
| Edge            | [Versi Stabil](https://microsoftedge.microsoft.com/addons/detail/scriptcat/liilgpjgabokdklappibcjfablkpcekh) [Versi Beta](https://microsoftedge.microsoft.com/addons/detail/scriptcat-beta/nimmbghgpcjmeniofmpdfkofcedcjpfi)                      | ✅ Tersedia    |
| Firefox         | [Versi Stabil](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat/) [Versi Beta](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat-pre/)                                                                                             | ✅ MV2         |

### Browser Lain

Jika browser Anda tidak ada dalam daftar di atas, Anda dapat mengunduh file `zip`/`crx` dari halaman [Rilis Github](https://github.com/scriptscat/scriptcat/releases) dan memasangnya secara manual.

### Pemasangan Ekstensi dengan Muat Unpacked {#load-unpacked-extension-installation}

① Pertama unduh file `zip` dari halaman [Rilis Github](https://github.com/scriptscat/scriptcat/releases) atau [Unduhan Komunitas](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html). Jika berupa file `crx`, ubah ekstensinya menjadi `zip`.

② Siapkan folder untuk menyimpan plugin, dan ekstrak file zip di atas ke folder tersebut. Setelah diekstrak, tampilannya akan seperti ini (**Catatan: Folder ini tidak boleh dihapus atau dipindahkan, jika tidak ekstensi tidak akan berfungsi dengan baik**) ![download-zip](./use.assets/download-zip.webp)

③ Buka antarmuka pengelolaan ekstensi browser untuk memuat ekstensi unpacked (lihat [Aktifkan mode pengembang untuk mendukung manifest v3 ScriptCat](/docs/use/open-dev/) untuk mengaktifkan mode pengembang terlebih dahulu)

- 1. **Edge** ![edge-load-unpacked](./use.assets/edge-load-unpacked.webp)
- 2. **Chrome** ![chrome-load-unpacked](./use.assets/chrome-load-unpacked.webp)

④ Pilih folder yang dibuat di langkah ② (setelah pemuatan selesai, ikon ScriptCat akan muncul di daftar ekstensi di antarmuka pengelolaan ekstensi, dan Anda juga dapat melihatnya dengan mengklik tombol ekstensi di pojok kanan atas bilah alamat browser)

- 1. **Edge** ![edge-load-unpacked-img](./use.assets/edge-load-unpacked-img.webp)
- 2. **Chrome** ![chrome-load-unpacked-img](./use.assets/chrome-load-unpacked-img.webp)

⑤ Klik ikon ScriptCat di pojok kanan atas, klik `┆` > Dapatkan Skrip di pojok kanan atas antarmuka yang muncul, dan Anda dapat pergi ke situs skrip untuk mencari dan memasang skrip.

Catatan: Ekstensi yang dipasang dengan cara ini tidak dapat diperbarui secara otomatis. Jika perlu memperbarui, silakan ulangi langkah-langkah di atas untuk memperbarui ekstensi (ganti file dan muat ulang sekali).


## Dapatkan Skrip

> Selain skrip, Anda juga bisa mendapatkan beberapa informasi dan tutorial skrip dari [Forum Tionghoa Tampermonkey](https://bbs.tampermonkey.net.cn/) dan [Panduan Pengembangan Skrip](https://learn.scriptcat.org/).

### Situs Skrip ScriptCat

[Situs Skrip ScriptCat](https://scriptcat.org/) adalah situs skrip untuk ekstensi ini, tempat Anda dapat memublikasikan skrip yang Anda tulis.

- Situs skrip baru
- Skrip latar belakang/skrip terjadwal
- Antarmuka yang ramah pengguna

### Pencarian Userscript.Zone

[Pencarian Userscript.Zone](https://www.userscript.zone/?utm_source=tm.net&utm_medium=scripts) adalah situs baru yang memungkinkan pencarian skrip pengguna dengan memasukkan URL atau domain yang sesuai.

- Banyak sumber daya skrip
- Mudah menemukan skrip pengguna yang cocok
- Hanya menampilkan skrip pengguna dari halaman skrip pengguna yang ditinjau atau setidaknya halaman dengan fungsionalitas komentar

### GreasyFork

[GreasyFork](https://greasyfork.org/) adalah platform yang banyak digunakan untuk meng-hosting dan berbagi userscript, memungkinkan pengembang memublikasikan dan pengguna memasang skrip berbasis browser yang meningkatkan atau memodifikasi fungsionalitas situs web. Situs ini dibuat oleh Jason Barnabe dan dikenal karena penekanannya pada keamanan dan transparansi sumber terbuka, menawarkan banyak koleksi skrip untuk meningkatkan pengalaman menjelajah.

Jason Barnabe juga pencipta asli ekstensi browser Stylish. Namun, [Stylish](https://userstyles.org/) dijual pada tahun 2016 dan sekarang dioperasikan oleh perusahaan lain, tanpa keterlibatan langsung Jason Barnabe dalam pengembangan selanjutnya.

- Banyak sumber daya skrip
- Memiliki kemampuan untuk menyinkronkan skrip dari Github
- Model [pengembangan sumber terbuka](https://github.com/JasonBarnabe/greasyfork) yang sangat aktif

### GitHub/Gist

Anda dapat [mencari sumber daya skrip di Github dan Gist.](https://gist.github.com/search?l=JavaScript&o=desc&q="%3D%3DUserScript%3D%3D"&s=updated)

## Tur Orientasi

Setelah memasang ScriptCat, membuka dasbor akan otomatis memulai tur orientasi (Anda juga dapat membukanya kembali kapan saja dari "Pusat Bantuan" di bilah sisi kiri). Tur ini mencakup:

- [Pasang skrip](/docs/use/script_installation/): pasang dari pasar skrip, termasuk dukungan untuk [skrip latar belakang](/docs/dev/background/).
- Kelola & operasikan: edit, jalankan/hentikan, [UserConfig](/docs/dev/config/).
- [Cadangan](/docs/use/sync/) dan [migrasi dari pengelola lain](/docs/use/from-other/migrate-from-tampermonkey/).
- [Sinkronisasi skrip](/docs/use/sync/).
- [Langganan](/docs/dev/subscribe/).
