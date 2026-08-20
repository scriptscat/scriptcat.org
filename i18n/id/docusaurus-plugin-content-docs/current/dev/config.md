---
title: UserConfig
---

Konten di dalam `==UserConfig==` diletakkan setelah `==UserScript==`, dan menjelaskan beberapa opsi yang dapat dikonfigurasi pengguna untuk skrip. Konfigurasi ditulis dalam format [YAML](https://yaml.org/):

```js
/* ==UserConfig==
group1:
  configA:                                # kuncinya adalah group.config, mis. kunci ini adalah group1.configA
    title: Konfigurasi A                  # judul konfigurasi
    description: Ini konfigurasi tipe teks # deskripsi konfigurasi
    type: text                            # jenis opsi; terdeteksi otomatis dari data jika dihilangkan
    default: nilai bawaan                 # nilai bawaan konfigurasi
    min: 2                                # minimum 2 karakter
    max: 18                               # maksimum 18 karakter
    password: true                        # tandai sebagai bidang kata sandi
  configB:
    title: Konfigurasi B
    description: Ini konfigurasi kotak centang
    type: checkbox
    default: true
  configC:
    title: Konfigurasi C
    description: Ini konfigurasi daftar pilihan
    type: select
    default: 1
    values: [1,2,3,4,5]
  configD:
    title: Konfigurasi D
    description: Ini konfigurasi daftar pilihan dinamis
    type: select
    bind: $cookies                       # nilai terikat dinamis; kunci diawali dengan $, dan nilainya harus berupa array
  configE:
    title: Konfigurasi E
    description: Ini konfigurasi daftar pilihan ganda
    type: mult-select
    default: [1]
    values: [1,2,3,4,5]
  configF:
    title: Konfigurasi F
    description: Ini konfigurasi daftar pilihan ganda dinamis
    type: mult-select
    bind: $cookies
  configG:
    title: Konfigurasi G
    description: Ini konfigurasi numerik
    type: number
    default: 1
    min: 10  # nilai minimum
    max: 16  # nilai maksimum
    unit: min # label satuan
  configH:
    title: Konfigurasi H
    description: Ini konfigurasi teks panjang
    type: textarea
    default: nilai bawaan
  configI:
    title: Konfigurasi I
    description: Ini konfigurasi tipe waktu
    type: time
    default: "12:00"
---
group2: # grup konfigurasi kedua
  configX:
    title: Konfigurasi X
    description: Ini konfigurasi tipe teks
    default: nilai bawaan
 ==/UserConfig== */
```

Setelah didefinisikan di sini, tombol konfigurasi muncul di dasbor agar pengguna dapat mengonfigurasinya. Pengembang menggunakan `GM_getValue` untuk membaca nilai konfigurasi, dengan kunci dinyatakan sebagai `group.config`.

![](@site/docs/dev/config.assets/image-20210621213013631.png)
