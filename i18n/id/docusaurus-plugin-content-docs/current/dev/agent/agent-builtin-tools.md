---
title: Referensi Alat Bawaan
---

Agent dilengkapi dengan serangkaian alat bawaan yang dipanggil AI secara otomatis selama percakapan. Alat-alat ini tersedia secara bawaan dalam percakapan yang dipertahankan; pengembang skrip biasanya tidak perlu memanggilnya secara langsung — AI memilih alat yang tepat berdasarkan maksud pengguna.

Memahami apa yang dapat dilakukan alat-alat ini membantu Anda menulis prompt sistem dan alat kustom yang lebih baik.

## Pengambilan Data Web

### web_fetch

Mengambil konten URL, dengan dukungan ekstraksi HTML-ke-teks dan peringkasan LLM.

| Parameter | Jenis | Wajib | Deskripsi |
|------|------|------|------|
| `url` | `string` | Ya | URL target (hanya http/https) |
| `prompt` | `string` | Tidak | Prompt ringkasan (saat diberikan, LLM digunakan untuk menyaring konten) |
| `max_length` | `number` | Tidak | karakter konten maksimum |

**Detail perilaku:**
- Batas waktu permintaan 30 detik
- Konten HTML secara otomatis mengekstrak teks isi utama (menghapus navigasi, bilah samping, dll.)
- Respons JSON diurai secara otomatis
- Teks biasa dikembalikan apa adanya
- Saat `prompt` diberikan, konten yang diambil dikirim ke LLM untuk diringkas

**Nilai kembali:**
```json
{
  "url": "https://example.com",
  "content_type": "text/html",
  "content": "Extracted body content...",
  "truncated": false,
  "final_url": "https://example.com/redirected"
}
```

### web_search

Mengkueri mesin pencari dan mengembalikan hasil pencarian terstruktur.

| Parameter | Jenis | Wajib | Deskripsi |
|------|------|------|------|
| `query` | `string` | Ya | Kata kunci pencarian |
| `max_results` | `number` | Tidak | Jumlah hasil maksimum (bawaan 5, batas 10) |

**Mesin pencari yang didukung:**

| Mesin | Deskripsi | Konfigurasi diperlukan |
|------|------|---------|
| DuckDuckGo | Mesin bawaan | Tidak ada |
| Bing | Microsoft Bing Search | Kunci API diperlukan |
| Baidu | Baidu Search | Tidak perlu kunci API |
| Google Custom Search | Google Custom Search | Kunci API + ID CSE diperlukan |

Mesin pencari dikonfigurasi di halaman manajemen → Agent → Pengaturan.

**Nilai kembali:**
```json
[
  {
    "title": "Search result title",
    "url": "https://example.com/result",
    "snippet": "Result summary text..."
  }
]
```

### get_tab_content

Membaca konten halaman yang dirender dari tab yang ditentukan, diubah menjadi Markdown terstruktur yang dianotasi dengan selektor CSS.

| Parameter | Jenis | Wajib | Deskripsi |
|------|------|------|------|
| `tab_id` | `number` | Ya | ID tab |
| `selector` | `string` | Tidak | Selektor CSS; hanya ekstrak bagian yang cocok |
| `prompt` | `string` | Tidak | prompt ringkasan |
| `max_length` | `number` | Tidak | karakter konten maksimum |

Perbedaan dari `web_fetch`: `get_tab_content` membaca halaman **sebagaimana sudah dirender oleh browser** (termasuk konten JS dinamis), sedangkan `web_fetch` membuat permintaan HTTP baru.

**Nilai kembali:**
```json
{
  "tab_id": 123,
  "url": "https://example.com",
  "title": "Page title",
  "content": "Structured content...",
  "truncated": false,
  "used_selector": "main"
}
```

## Manajemen Tab

### list_tabs

Mengkueri tab yang terbuka, dengan dukungan beberapa kondisi filter.

| Parameter | Jenis | Wajib | Deskripsi |
|------|------|------|------|
| `url_pattern` | `string` | Tidak | Pencocokan regex URL |
| `title_pattern` | `string` | Tidak | Pencocokan regex judul |
| `active` | `boolean` | Tidak | Hanya kembalikan tab aktif |
| `window_id` | `number` | Tidak | jendela yang ditentukan |
| `audible` | `boolean` | Tidak | Hanya kembalikan tab yang sedang memutar audio |

### open_tab

Membuka tab baru, atau menavigasikan tab yang ada.

| Parameter | Jenis | Wajib | Deskripsi |
|------|------|------|------|
| `url` | `string` | Ya | URL target |
| `tab_id` | `number` | Tidak | ID tab yang ada (jika diberikan, tab itu dinavigasi; jika tidak, tab baru dibuka) |
| `active` | `boolean` | Tidak | Apakah mengaktifkannya (bawaan `true`) |
| `window_id` | `number` | Tidak | jendela yang ditentukan |
| `wait_until_loaded` | `boolean` | Tidak | Apakah menunggu halaman selesai dimuat (bawaan `true`) |

### close_tab

Menutup tab.

| Parameter | Jenis | Wajib | Deskripsi |
|------|------|------|------|
| `tab_id` | `number` | Ya | ID tab |

### activate_tab

Mengaktifkan tab dan memfokuskan jendela tempatnya berada.

| Parameter | Jenis | Wajib | Deskripsi |
|------|------|------|------|
| `tab_id` | `number` | Ya | ID tab |

## Sistem File (OPFS)

### opfs_write

Menulis file ke ruang kerja.

| Parameter | Jenis | Wajib | Deskripsi |
|------|------|------|------|
| `path` | `string` | Ya | jalur file |
| `content` | `string` | Ya | Konten file (biner data URL didukung) |

### opfs_read

Membaca file dari ruang kerja. Secara bawaan jenis file terdeteksi otomatis: file teks mengembalikan kontennya, file biner mengembalikan URL blob.

| Parameter | Jenis | Wajib | Deskripsi |
|------|------|------|------|
| `path` | `string` | Ya | jalur file |
| `mode` | `string` | Tidak | `"text"` / `"blob"` / `"auto"` (bawaan) — memaksa mode pengembalian tertentu |
| `offset` | `number` | Tidak | Nomor baris awal (1-indeks), hanya mode teks |
| `limit` | `number` | Tidak | Jumlah baris yang dibaca, hanya mode teks (paginasi diperlukan setelah teks melebihi 200 baris) |

### opfs_list

Mendaftar isi direktori.

| Parameter | Jenis | Wajib | Deskripsi |
|------|------|------|------|
| `path` | `string` | Tidak | Jalur direktori (bawaan direktori akar) |

### opfs_delete

Menghapus file atau direktori.

| Parameter | Jenis | Wajib | Deskripsi |
|------|------|------|------|
| `path` | `string` | Ya | Jalur file/direktori |

## Interaksi Pengguna

### ask_user

Mengajukan pertanyaan kepada pengguna, mendukung input bebas atau pilihan terstruktur.

| Parameter | Jenis | Wajib | Deskripsi |
|------|------|------|------|
| `question` | `string` | Ya | Pertanyaannya |
| `options` | `string[]` | Tidak | Daftar pilihan (saat diberikan, ini menjadi pertanyaan pilihan ganda) |
| `multiple` | `boolean` | Tidak | Apakah beberapa pilihan diizinkan (bawaan `false`) |

**Batas waktu:** mengembalikan `{ answer: null, reason: "timeout" }` setelah 5 menit tanpa respons.

**Nilai kembali:**
```json
{ "answer": "The user's answer text" }
```

### execute_script

Menjalankan kode JavaScript di halaman atau sandbox.

| Parameter | Jenis | Wajib | Deskripsi |
|------|------|------|------|
| `code` | `string` | Ya | Kode JavaScript |
| `target` | `string` | Ya | `"page"` atau `"sandbox"` |
| `tab_id` | `number` | Tidak | Tab mana yang menjadi target saat `target` adalah `page` (bawaan tab aktif saat ini); diabaikan untuk sandbox |

**Perbandingan lingkungan eksekusi:**

| Lingkungan | DOM | JS halaman | URL blob ekstensi | Terbaik untuk |
|------|-----|---------|---------------|---------|
| `target: "page"` (selalu MAIN world) | ya | ya | tidak | Membaca/memanipulasi DOM, memanggil fungsi halaman, membaca variabel halaman |
| `target: "sandbox"` | tidak | tidak | tidak | Komputasi murni |

> Mode `page` selalu berjalan di MAIN world halaman, berbagi `window` dengan halaman — sehingga tidak dapat mengakses URL blob ekstensi itu sendiri (mis. alamat yang dikembalikan `opfs_read` dalam mode blob). Gunakan SkillScript sebagai gantinya saat Anda perlu bekerja dengan URL blob.

## Sub-agent

### agent

Melahirkan sub-agent independen untuk menangani sub-tugas yang kompleks.

| Parameter | Jenis | Wajib | Deskripsi |
|------|------|------|------|
| `prompt` | `string` | Ya | Deskripsi sub-tugas |
| `description` | `string` | Tidak | Label pendek (beberapa kata, untuk tampilan UI) |
| `type` | `string` | Tidak | Jenis sub-agent (lihat di bawah), bawaan `"general"` |
| `tab_id` | `number` | Tidak | ID tab yang diteruskan ke sub-agent; sub-agent akan beroperasi di tab itu |

**Jenis sub-agent:**

| type | Deskripsi | Alat yang tersedia |
|------|------|---------|
| `researcher` | Pengambilan informasi (hanya baca) | web_search, web_fetch, pembacaan konten halaman |
| `page_operator` | Otomatisasi browser | Manajemen tab, manipulasi DOM, interaksi halaman |
| `general` | Tujuan umum (bawaan) | Semua alat |

**Karakteristik:**
- Sub-agent memiliki konteks percakapan independen sendiri
- Ia **tidak dapat** menggunakan `ask_user` atau `agent` (untuk mencegah rekursi)
- Peristiwa sub-agent diteruskan ke percakapan induk melalui `sub_agent_event`

## Manajemen Tugas

Grup alat ini mengelola daftar tugas sementara dalam percakapan (di memori, tidak dipertahankan).

### create_task

| Parameter | Jenis | Wajib | Deskripsi |
|------|------|------|------|
| `subject` | `string` | Ya | Judul tugas |
| `description` | `string` | Tidak | Deskripsi terperinci |

### update_task

| Parameter | Jenis | Wajib | Deskripsi |
|------|------|------|------|
| `task_id` | `string` | Ya | ID tugas |
| `status` | `string` | Tidak | `"pending"` / `"in_progress"` / `"completed"` |
| `subject` | `string` | Tidak | Judul baru |
| `description` | `string` | Tidak | Deskripsi baru |

### list_tasks

Tanpa parameter; mengembalikan daftar singkat semua tugas.

> Alat manajemen tugas terutama untuk AI melacak kemajuannya sendiri saat menangani tugas kompleks bertingkat; data tugas tidak dipertahankan.
