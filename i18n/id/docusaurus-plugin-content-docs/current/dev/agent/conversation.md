---
title: API Percakapan
---

`@grant CAT.agent.conversation`

API Percakapan adalah inti dari sistem Agent, memungkinkan skrip membuat percakapan AI, mengirim pesan, dan menerima balasan.

## Membuat percakapan

```javascript
const conv = await CAT.agent.conversation.create(options?);
```

### ConversationCreateOptions

| Parameter | Jenis | Bawaan | Deskripsi |
|------|------|--------|------|
| `id` | `string` | dibuat otomatis | ID percakapan, digunakan untuk melanjutkan percakapan yang ada |
| `system` | `string` | — | Prompt sistem kustom, ditambahkan setelah prompt bawaan |
| `model` | `string` | model bawaan | ID model (diperoleh setelah mengonfigurasinya di halaman manajemen) |
| `maxIterations` | `number` | `20` | Jumlah loop pemanggilan alat maksimum dalam satu giliran percakapan |
| `skills` | `"auto" \| string[]` | — | `"auto"` memuat semua Skill secara otomatis, atau array nama Skill tertentu |
| `tools` | `ToolDefinition[]` | — | Daftar alat kustom (lihat di bawah) |
| `commands` | `Record<string, CommandHandler>` | — | Perintah percakapan kustom |
| `ephemeral` | `boolean` | `false` | Percakapan sementara yang tidak disimpan ke penyimpanan |
| `cache` | `boolean` | `true` | Aktifkan caching prompt (mengurangi penggunaan token) |

### Alat kustom

Skrip dapat mendaftarkan alatnya sendiri untuk dipanggil AI:

```javascript
const conv = await CAT.agent.conversation.create({
  tools: [{
    name: "get_weather",
    description: "Get weather information for the specified city",
    parameters: {
      type: "object",
      properties: {
        city: {
          type: "string",
          description: "City name"
        },
        unit: {
          type: "string",
          enum: ["celsius", "fahrenheit"],
          description: "Temperature unit"
        }
      },
      required: ["city"]
    },
    handler: async (args) => {
      // args = { city: "Beijing", unit: "celsius" }
      const data = await fetchWeather(args.city, args.unit);
      return { temperature: data.temp, condition: data.condition };
    }
  }]
});
```

`parameters` alat mengikuti spesifikasi [JSON Schema](https://json-schema.org/). AI menggunakan `description` untuk memahami kapan dan bagaimana memanggil alat.

### Perintah kustom

Perintah kustom yang diawali dengan `/` dapat didaftarkan:

```javascript
const conv = await CAT.agent.conversation.create({
  commands: {
    "/export": async (args) => {
      // Dipicu saat pengguna mengetik "/export pdf"
      await exportToPdf(args);
      return "Export complete";
    }
  }
});
```

Perintah bawaan: `/new` (menghapus riwayat percakapan) — ini dapat ditimpa oleh handler kustom.

## Mendapatkan percakapan yang ada

```javascript
const conv = await CAT.agent.conversation.get(conversationId);
// Mengembalikan null jika percakapan tidak ada
```

## Metode ConversationInstance

### chat — chat sinkron

```javascript
const reply = await conv.chat(content, options?);
```

Mengirim pesan dan menunggu balasan lengkap. AI dapat memanggil alat saat membalas; `chat` menunggu semua eksekusi alat selesai sebelum mengembalikan hasil akhir.

**Parameter:**

| Parameter | Jenis | Deskripsi |
|------|------|------|
| `content` | `string \| ContentBlock[]` | Konten pesan, baik teks maupun blok konten multimodal |
| `options.tools` | `ToolDefinition[]` | Alat tambahan yang dilampirkan hanya untuk panggilan ini (digabung dengan alat yang diberikan saat pembuatan) |

**Mengembalikan `ChatReply`:**

| Bidang | Jenis | Deskripsi |
|------|------|------|
| `content` | `string \| ContentBlock[]` | Konten balasan AI |
| `thinking` | `string` | Proses berpikir model (hanya beberapa model yang mendukung ini) |
| `toolCalls` | `ToolCall[]` | Catatan pemanggilan alat yang dilakukan selama balasan ini |
| `usage` | `{ inputTokens, outputTokens }` | Penggunaan token |
| `command` | `boolean` | Apakah balasan ini dipicu oleh perintah |

### chatStream — chat streaming

```javascript
const stream = await conv.chatStream(content, options?);
for await (const chunk of stream) {
  // Tangani peristiwa streaming
}
```

Menerima balasan AI secara waktu nyata — berguna saat Anda perlu menampilkan keluaran secara bertahap.

**Jenis peristiwa `StreamChunk`:**

| type | Bidang | Deskripsi |
|------|------|------|
| `content_delta` | `content: string` | Konten teks bertahap |
| `thinking_delta` | `thinking: string` | Konten berpikir bertahap |
| `tool_call` | `toolCall: ToolCall` | Info pemanggilan alat (dipicu saat perubahan status) |
| `content_block` | `block: ContentBlock` | Blok konten (gambar, file, dll.) |
| `done` | `usage: { inputTokens, outputTokens }` | Giliran percakapan selesai |
| `error` | `error: string, errorCode?: string` | Kesalahan |

**Kode kesalahan (`errorCode`):**

| Kode | Deskripsi |
|--------|------|
| `rate_limit` | Batas kecepatan API tercapai; biasanya dicoba ulang secara otomatis |
| `auth` | Autentikasi gagal; periksa kunci API |
| `tool_timeout` | Eksekusi alat kehabisan waktu |
| `max_iterations` | Mencapai jumlah loop pemanggilan alat maksimum |
| `api_error` | Kesalahan API lainnya |

### getMessages — dapatkan riwayat pesan

```javascript
const messages = await conv.getMessages();
```

Mengembalikan `ChatMessage[]` yang berisi setiap pesan dalam percakapan.

**Bentuk `ChatMessage`:**

| Bidang | Jenis | Deskripsi |
|------|------|------|
| `id` | `string` | ID pesan |
| `role` | `"user" \| "assistant" \| "system" \| "tool"` | Peran pesan |
| `content` | `string \| ContentBlock[]` | Konten pesan |
| `thinking` | `{ content: string }` | Proses berpikir (pesan asisten — perhatikan ini objek, bukan string biasa) |
| `error` | `string` | Pesan kesalahan jika giliran ini error |
| `modelId` | `string` | ID model yang digunakan untuk pesan ini |
| `durationMs` | `number` | Total durasi respons dalam ms |
| `parentId` | `string` | ID pesan induk (untuk percabangan) |
| `toolCalls` | `ToolCall[]` | Catatan pemanggilan alat (pesan asisten) |
| `toolCallId` | `string` | ID pemanggilan alat yang sesuai (pesan alat) |
| `usage` | `{ inputTokens, outputTokens }` | Penggunaan token |
| `createtime` | `number` | Stempel waktu pembuatan |

### clear — hapus percakapan

```javascript
await conv.clear();
```

Menghapus semua riwayat pesan dalam percakapan.

### save — pertahankan percakapan

```javascript
await conv.save();
```

Menyimpan metadata percakapan ke penyimpanan. Percakapan sementara (`ephemeral: true`) tidak disimpan secara bawaan; memanggil metode ini mengubahnya menjadi percakapan yang dipertahankan.


### Properti instance

| Properti | Jenis | Deskripsi |
|------|------|------|
| `id` | `string` | ID percakapan |
| `title` | `string` | Judul percakapan |
| `modelId` | `string` | ID model yang digunakan |

## Konten multimodal

Konten pesan dapat berupa string teks biasa, atau array `ContentBlock[]` untuk mendukung input multimodal:

```javascript
// Kirim teks + gambar
await conv.chat([
  { type: "text", text: "Please analyze what's in this image" },
  { type: "image", attachmentId: "img-id", mimeType: "image/png" }
]);
```

### Jenis ContentBlock

| type | Bidang wajib | Deskripsi |
|------|---------|------|
| `text` | `text: string` | Konten teks |
| `image` | `attachmentId: string, mimeType: string` | Gambar; memerlukan model yang mendukung visi |
| `file` | `attachmentId: string, mimeType: string, name: string` | File |
| `audio` | `attachmentId: string, mimeType: string` | Audio |

## Percakapan sementara vs. dipertahankan

| Fitur | Percakapan dipertahankan (bawaan) | Percakapan sementara |
|------|-------------------|---------------------|
| Penyimpanan pesan | Disimpan ke OPFS | Hanya di memori |
| Alat bawaan | Semua tersedia | Tidak disertakan; berikan sendiri melalui `tools` |
| Daftar percakapan | Terlihat | Tidak terlihat |
| Caching prompt | didukung | Dapat dinonaktifkan |
| Kasus penggunaan | Percakapan tujuan umum | Tugas ringan sekali jalan dan Q&A cepat |

## Manajemen konteks

### Kompresi otomatis

Saat penggunaan konteks percakapan melebihi **80%** dari jendela konteks model, sistem secara otomatis memanggil LLM untuk membuat ringkasan riwayat, mengganti pesan yang lebih lama untuk mengosongkan ruang.

### Caching prompt

Diaktifkan secara bawaan. Untuk model Anthropic, prompt sistem dan riwayat pesan di-cache, secara signifikan mengurangi penggunaan token dan latensi untuk giliran berulang.

Dapat dinonaktifkan melalui `cache: false`:

```javascript
const conv = await CAT.agent.conversation.create({ cache: false });
```

## Contoh lengkap

```javascript
// ==UserScript==
// @name        Smart translation assistant
// @match       *://*/*
// @grant       CAT.agent.conversation
// @grant       CAT.agent.dom
// ==/UserScript==

// Buat percakapan dengan alat kustom
const conv = await CAT.agent.conversation.create({
  system: "You are a translation assistant. The user will give you web page content — please translate it into Chinese.",
  tools: [{
    name: "get_selection",
    description: "Get the text the user has selected on the page",
    parameters: { type: "object", properties: {} },
    handler: async () => {
      return { text: window.getSelection()?.toString() || "No text selected" };
    }
  }]
});

// Streaming hasil terjemahan
const stream = await conv.chatStream("Please get the selected text and translate it into Chinese");
let result = "";
for await (const chunk of stream) {
  if (chunk.type === "content_delta") {
    result += chunk.content;
    // Perbarui UI secara waktu nyata
    updateTranslationUI(result);
  }
}
```
