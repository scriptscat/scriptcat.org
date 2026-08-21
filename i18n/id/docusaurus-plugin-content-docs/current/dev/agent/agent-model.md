---
title: API Kueri Model
---

`@grant CAT.agent.model`

API kueri model menyediakan akses hanya-baca ke model yang telah dikonfigurasi pengguna di halaman manajemen. Demi keamanan, kunci API tidak pernah diekspos ke skrip.

## list — daftar semua model

```javascript
const models = await CAT.agent.model.list();
```

**Mengembalikan `ModelSummary[]`:**

| Bidang | Jenis | Deskripsi |
|------|------|------|
| `id` | `string` | ID konfigurasi model |
| `name` | `string` | Nama tampilan yang ditentukan pengguna (mis. "GPT-4o", "Claude Sonnet") |
| `provider` | `"openai" \| "anthropic"` | Jenis penyedia |
| `apiBaseUrl` | `string` | URL dasar API |
| `model` | `string` | Pengidentifikasi model yang dikirim ke API penyedia (mis. `gpt-4o`, `claude-sonnet-4-20250514`) |
| `maxTokens` | `number` | Token output maksimum (dihilangkan jika tidak diatur) |

> Catatan: objek yang dikembalikan **tidak menyertakan** bidang `apiKey`.

## get — dapatkan model tertentu

```javascript
const model = await CAT.agent.model.get(modelId);
```

Mengembalikan `null` jika model tidak ada.

## getDefault — dapatkan ID model bawaan

```javascript
const defaultId = await CAT.agent.model.getDefault();
```

Mengembalikan ID model bawaan yang dikonfigurasi pengguna; mengembalikan string kosong jika tidak ada yang diatur.

## getSummary — dapatkan ID model ringkasan

```javascript
const summaryModelId = await CAT.agent.model.getSummary();
```

Mengembalikan ID model ringan yang dikonfigurasi pengguna khusus untuk tugas peringkasan (seperti pemadatan otomatis riwayat percakapan). Jika tidak ada yang dikonfigurasi secara terpisah, sistem kembali ke model bawaan, dan metode ini mengembalikan string kosong.

## Skenario penggunaan

### Membiarkan pengguna memilih model

```javascript
// ==UserScript==
// @name        Model picker example
// @grant       CAT.agent.model
// @grant       CAT.agent.conversation
// ==/UserScript==

const models = await CAT.agent.model.list();
const defaultId = await CAT.agent.model.getDefault();

// Tampilkan daftar ke pengguna dan biarkan mereka memilih
const selectedModel = models.find(m => m.id === defaultId) || models[0];

const conv = await CAT.agent.conversation.create({
  model: selectedModel.id
});
```

### Mendapatkan detail untuk model tertentu

```javascript
const model = await CAT.agent.model.get("my-model-id");
if (model) {
  console.log(`${model.name} (${model.provider}), max output ${model.maxTokens ?? "unset"} tokens`);
}
```
