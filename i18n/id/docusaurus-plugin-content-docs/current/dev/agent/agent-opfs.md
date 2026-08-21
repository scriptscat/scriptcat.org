---
title: API File OPFS
---

`@grant CAT.agent.opfs`

API file OPFS (Origin Private File System) memungkinkan skrip membaca dan menulis file di ruang kerja Agent. Semua jalur relatif terhadap direktori `agents/workspace/`.

## write — tulis file

```javascript
const result = await CAT.agent.opfs.write(path, content);
```

**Parameter:**

| Parameter | Jenis | Deskripsi |
|------|------|------|
| `path` | `string` | Jalur file (wajib); mendukung direktori bersarang |
| `content` | `string \| Blob` | Isi file |

**Format `content` yang didukung:**

| Format | Deskripsi |
|------|------|
| String biasa | Disimpan sebagai file teks UTF-8 |
| String Data URL | Otomatis didekode dan disimpan sebagai biner (mis. `data:image/png;base64,...`) |
| Objek `Blob` | Data biner disimpan langsung |

**Mengembalikan `WriteResult`:**

| Bidang | Jenis | Deskripsi |
|------|------|------|
| `path` | `string` | Jalur tempat file disimpan |
| `size` | `number` | Ukuran file (byte) |

```javascript
// Tulis file teks
await CAT.agent.opfs.write("data/config.json", JSON.stringify({ key: "value" }));

// Tulis file biner (data URL)
const canvas = document.createElement("canvas");
const dataUrl = canvas.toDataURL("image/png");
await CAT.agent.opfs.write("images/chart.png", dataUrl);
```

> Direktori induk dibuat otomatis jika tidak ada. Jika file sudah ada, isinya ditimpa.

## read — baca file

```javascript
const result = await CAT.agent.opfs.read(path, format?);
```

**Parameter:**

| Parameter | Jenis | Bawaan | Deskripsi |
|------|------|--------|------|
| `path` | `string` | — | Jalur file (wajib) |
| `format` | `"text" \| "blob"` | `"text"` | Format pembacaan |

**Mengembalikan `ReadResult`:**

| Bidang | Jenis | Saat hadir | Deskripsi |
|------|------|------|------|
| `path` | `string` | selalu | jalur file |
| `size` | `number` | selalu | Ukuran file |
| `content` | `string` | format="text" | Isi teks file |
| `data` | `Blob` | format="blob" | Objek Blob file (ditransfer melalui structured clone) |
| `mimeType` | `string` | format="blob" | Tipe MIME terdeteksi otomatis |

**Dua mode pembacaan:**

```javascript
// Mode teks — cocok untuk file JSON dan teks
const config = await CAT.agent.opfs.read("data/config.json");
const data = JSON.parse(config.content);

// Mode Blob — cocok untuk gambar dan file biner
const image = await CAT.agent.opfs.read("images/chart.png", "blob");
// image.data adalah objek Blob asli (bukan URL blob: yang dibatasi cakupan)
// Buat URL lokal dengan URL.createObjectURL(image.data) di konteks mana pun
// yang membutuhkannya, atau berikan Blob langsung ke API apa pun yang menerimanya
```

**Deteksi tipe MIME otomatis:**

| Ekstensi | Tipe MIME |
|--------|----------|
| `.jpg` / `.jpeg` | `image/jpeg` |
| `.png` | `image/png` |
| `.gif` | `image/gif` |
| `.webp` | `image/webp` |
| `.svg` | `image/svg+xml` |
| `.mp3` | `audio/mpeg` |
| `.wav` | `audio/wav` |
| `.mp4` | `video/mp4` |
| `.pdf` | `application/pdf` |
| `.json` | `application/json` |
| `.txt` | `text/plain` |
| `.html` | `text/html` |
| `.css` | `text/css` |
| `.js` | `application/javascript` |
| lainnya | `application/octet-stream` |

## list — daftar direktori

```javascript
const entries = await CAT.agent.opfs.list(path?);
```

**Parameter:**

| Parameter | Jenis | Bawaan | Deskripsi |
|------|------|--------|------|
| `path` | `string` | `""` | Jalur direktori; string kosong berarti direktori akar |

**Mengembalikan `FileEntry[]`:**

| Bidang | Jenis | Deskripsi |
|------|------|------|
| `name` | `string` | Nama file/direktori |
| `type` | `"file" \| "directory"` | Jenis |
| `size` | `number` | Ukuran file (hanya tipe `file`) |

```javascript
const entries = await CAT.agent.opfs.list("data/");
for (const entry of entries) {
  if (entry.type === "file") {
    console.log(`${entry.name} (${entry.size} bytes)`);
  } else {
    console.log(`${entry.name}/`);
  }
}
```

## delete — hapus file atau direktori

```javascript
const result = await CAT.agent.opfs.delete(path);
```

Mendukung penghapusan rekursif direktori beserta semua isinya.

**Mengembalikan:**

```typescript
{ success: true }
```

## readAttachment — baca lampiran

```javascript
const result = await CAT.agent.opfs.readAttachment(attachmentId);
```

Membaca data lampiran (gambar, file, dll.) dari percakapan. ID lampiran berasal dari `ContentBlock.attachmentId` dalam pesan.

**Parameter:**

| Parameter | Jenis | Deskripsi |
|------|------|------|
| `attachmentId` | `string` | ID lampiran (wajib) |

**Mengembalikan:**

| Bidang | Jenis | Deskripsi |
|------|------|------|
| `id` | `string` | ID lampiran |
| `data` | `Blob` | Data biner lampiran |
| `size` | `number` | Ukuran file (byte) |
| `mimeType` | `string` | Tipe MIME |

```javascript
// Baca lampiran gambar yang dibuat AI dalam percakapan
const messages = await conv.getMessages();
const lastMsg = messages[messages.length - 1];
const imageBlock = lastMsg.content.find(b => b.type === "image");
if (imageBlock) {
  const attachment = await CAT.agent.opfs.readAttachment(imageBlock.attachmentId);
  console.log(`Attachment size: ${attachment.size}, type: ${attachment.mimeType}`);
}
```

## Bekerja dengan data Blob

- `read(path, "blob")` mengembalikan objek `Blob` asli yang ditransfer melalui [structured clone](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) — bukan URL `blob:` yang dibatasi asal ekstensi, jadi tidak ada batasan akses lintas konteks yang perlu dikhawatirkan
- Untuk mendapatkan URL sementara yang dapat digunakan di halaman, panggil `URL.createObjectURL(result.data)`; panggil `URL.revokeObjectURL()` setelah selesai menggunakannya
- Anda juga dapat memberikan `Blob` langsung ke API web apa pun yang menerima `Blob`/`File` (mis. `body` dari `fetch`, `FormData.append`, `DataTransfer` untuk `<input type="file">`)
