---
title: API Tugas Terjadwal
---

`@grant CAT.agent.task`

API tugas terjadwal memungkinkan skrip membuat tugas terjadwal berbasis ekspresi Cron, dengan dua mode eksekusi.

## Mode eksekusi

### Mode internal

Ditangani otomatis oleh sistem Agent:
- Secara otomatis membuat atau melanjutkan percakapan saat jadwal Cron terpicu
- Mengirim `prompt` yang dikonfigurasi ke LLM
- Model dan Skill dapat ditentukan
- Riwayat eksekusi dan penggunaan token dicatat secara otomatis

### Mode peristiwa

Ditangani oleh skrip itu sendiri:
- Notifikasi peristiwa dikirim ke skrip saat jadwal Cron terpicu
- Skrip mendengarkan peristiwa melalui `addListener`
- Logika penanganan sepenuhnya kustom

## create — buat tugas

```javascript
const task = await CAT.agent.task.create(options);
```

**Parameter (`AgentTaskCreateOptions`):**

| Parameter | Jenis | Wajib | Deskripsi |
|------|------|------|------|
| `name` | `string` | Ya | Nama tugas |
| `crontab` | `string` | Ya | Ekspresi Cron standar (5 bidang: menit jam hari bulan hari-minggu) |
| `mode` | `"internal" \| "event"` | Ya | Mode eksekusi |
| `enabled` | `boolean` | Tidak | Apakah aktif, bawaan `true` |
| `notify` | `boolean` | Tidak | Apakah mengirim notifikasi browser saat terpicu |
| `prompt` | `string` | Tidak | Prompt untuk mode internal |
| `modelId` | `string` | Tidak | ID model yang digunakan dalam mode internal |
| `skills` | `string[]` | Tidak | Skill yang dimuat dalam mode internal |
| `maxIterations` | `number` | Tidak | Maksimal putaran pemanggilan alat untuk mode internal, bawaan `10` |

**Mengembalikan `AgentTask`:**

| Bidang | Jenis | Deskripsi |
|------|------|------|
| `id` | `string` | ID tugas |
| `name` | `string` | Nama tugas |
| `crontab` | `string` | Ekspresi Cron |
| `mode` | `string` | Mode eksekusi |
| `enabled` | `boolean` | Apakah aktif |
| `notify` | `boolean` | Apakah notifikasi dikirim |
| `nextruntime` | `number` | Stempel waktu berjalan berikutnya |
| `lastruntime` | `number` | Stempel waktu berjalan terakhir |
| `conversationId` | `string` | ID percakapan terkait dalam mode internal (opsional) |
| `lastRunStatus` | `"success" \| "error"` | Status berjalan terakhir |
| `lastRunError` | `string` | Pesan kesalahan dari berjalan terakhir |
| `createtime` | `number` | Stempel waktu pembuatan |

**Contoh ekspresi Cron:**

| Ekspresi | Deskripsi |
|--------|------|
| `* * * * *` | Setiap menit |
| `0 9 * * *` | Setiap hari pukul 09:00 |
| `0 */2 * * *` | Setiap 2 jam |
| `30 8 * * 1-5` | Hari kerja pukul 08:30 |
| `0 0 1 * *` | 00:00 tanggal 1 setiap bulan |

## list — daftar semua tugas

```javascript
const tasks = await CAT.agent.task.list();
```

Mengembalikan semua tugas yang dibuat oleh skrip saat ini.

## get — dapatkan detail tugas

```javascript
const task = await CAT.agent.task.get(taskId);
```

Mengembalikan `undefined` jika tugas tidak ada.

## update — perbarui tugas

```javascript
const task = await CAT.agent.task.update(taskId, partial);
```

**Bidang yang dapat diperbarui:**

```javascript
await CAT.agent.task.update(task.id, {
  name: "New name",
  crontab: "0 10 * * *",
  enabled: false,
  prompt: "New prompt",
  notify: true
});
```

`nextruntime` dihitung ulang secara otomatis setelah pembaruan.

## remove — hapus tugas

```javascript
const success = await CAT.agent.task.remove(taskId);
```

## runNow — jalankan segera

```javascript
await CAT.agent.task.runNow(taskId);
```

Memicu tugas untuk berjalan sekali segera, tanpa menunggu jadwal Cron-nya (tidak memblokir, berjalan di latar belakang).

## addListener — dengarkan pemicu tugas

```javascript
const listenerId = await CAT.agent.task.addListener(taskId, callback);
```

Hanya digunakan untuk tugas **mode peristiwa**. Callback berjalan saat jadwal Cron terpicu.

**Parameter callback (`AgentTaskTrigger`):**

| Bidang | Jenis | Deskripsi |
|------|------|------|
| `taskId` | `string` | ID tugas |
| `name` | `string` | Nama tugas |
| `crontab` | `string` | Ekspresi Cron |
| `triggeredAt` | `number` | Stempel waktu pemicuan |

## removeListener — hapus pendengar

```javascript
await CAT.agent.task.removeListener(listenerId);
```

## Contoh lengkap

### Mode internal — AI menjalankannya secara otomatis

```javascript
// ==UserScript==
// @name        Scheduled news digest
// @match       *://*/*
// @grant       CAT.agent.task
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Daily news digest",
  crontab: "0 9 * * *",       // Setiap hari pukul 9
  mode: "internal",
  prompt: "Please search today's tech news and save a short summary to OPFS",
  skills: ["web-search"],
  maxIterations: 10,
  notify: true
});

console.log("Task created, next run:", new Date(task.nextruntime));
```

### Mode peristiwa — skrip menanganinya sendiri

```javascript
// ==UserScript==
// @name        Scheduled data collection
// @match       *://*/*
// @grant       CAT.agent.task
// @grant       CAT.agent.dom
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Stock data collection",
  crontab: "*/30 9-15 * * 1-5", // Setiap 30 menit, 9-15 pada hari kerja
  mode: "event",
  enabled: true,
  notify: false
});

await CAT.agent.task.addListener(task.id, async (trigger) => {
  console.log(`Task triggered: ${trigger.name} at ${new Date(trigger.triggeredAt)}`);

  // Logika pengumpulan kustom
  await CAT.agent.dom.navigate("https://finance.example.com/stock");
  const content = await CAT.agent.dom.readPage({ selector: ".stock-table" });

  // Proses datanya...
  console.log("Collection complete");
});
```
