---
title: API Manipulasi DOM
---

`@grant CAT.agent.dom`

API manipulasi DOM menyediakan otomatisasi halaman browser yang lengkap: navigasi, pembacaan konten, tangkapan layar, interaksi formulir, dan pemantauan DOM.

## Manajemen tab

### listTabs — daftar tab

```javascript
const tabs = await CAT.agent.dom.listTabs();
```

Mengembalikan informasi tentang setiap tab yang terbuka.

**Mengembalikan `TabInfo[]`:**

| Bidang | Jenis | Deskripsi |
|------|------|------|
| `tabId` | `number` | ID tab |
| `url` | `string` | URL saat ini |
| `title` | `string` | Judul halaman |
| `active` | `boolean` | Apakah ini tab yang sedang aktif |
| `windowId` | `number` | ID jendela tempatnya berada |
| `discarded` | `boolean` | Apakah telah dibuang (ditangguhkan) |

## Navigasi

### navigate — navigasikan halaman

```javascript
const result = await CAT.agent.dom.navigate(url, options?);
```

**Parameter:**

| Parameter | Jenis | Bawaan | Deskripsi |
|------|------|--------|------|
| `url` | `string` | — | URL target (wajib) |
| `options.tabId` | `number` | tab aktif saat ini | Tab mana yang digunakan |
| `options.waitUntil` | `boolean` | `true` | Apakah menunggu halaman selesai dimuat |
| `options.timeout` | `number` | `30000` | Batas waktu dalam milidetik |

**Mengembalikan `NavigateResult`:**

```typescript
{ tabId: number; url: string; title: string }
```

## Membaca konten

### readPage — baca konten halaman

```javascript
const page = await CAT.agent.dom.readPage(options?);
```

Mengubah DOM halaman menjadi teks terstruktur, secara otomatis menghapus elemen yang tidak relevan seperti `<script>`, `<style>`, `<noscript>`, `<svg>`, dan `<link[rel=stylesheet]>`.

**Parameter:**

| Parameter | Jenis | Bawaan | Deskripsi |
|------|------|--------|------|
| `options.tabId` | `number` | tab aktif saat ini | Tab mana yang digunakan |
| `options.selector` | `string` | — | Selektor CSS; hanya konten elemen yang cocok yang dikembalikan |
| `options.maxLength` | `number` | — | Karakter konten maksimum; dipotong melebihi ini |
| `options.removeTags` | `string[]` | — | Nama tag tambahan yang akan dihapus |

**Mengembalikan `PageContent`:**

| Bidang | Jenis | Deskripsi |
|------|------|------|
| `title` | `string` | Judul halaman |
| `url` | `string` | URL halaman |
| `html` | `string` | Konten teks halaman yang diproses |
| `truncated` | `boolean` | Apakah konten dipotong |
| `totalLength` | `number` | Panjang total konten asli |

### screenshot — ambil tangkapan layar

```javascript
const shot = await CAT.agent.dom.screenshot(options?);
```

**Parameter:**

| Parameter | Jenis | Bawaan | Deskripsi |
|------|------|--------|------|
| `options.tabId` | `number` | tab aktif saat ini | Tab mana yang digunakan |
| `options.quality` | `number` | `80` | Kualitas JPEG (0-100) |
| `options.fullPage` | `boolean` | `false` | Ambil seluruh halaman |
| `options.selector` | `string` | — | Selektor CSS; hanya area elemen yang cocok yang diambil |
| `options.saveTo` | `string` | — | Jalur penyimpanan di ruang kerja OPFS |

**Mengembalikan `ScreenshotResult`:**

| Bidang | Jenis | Deskripsi |
|------|------|------|
| `dataUrl` | `string` | data URL base64 |
| `path` | `string` | Jalur penyimpanan OPFS (saat `saveTo` digunakan) |
| `size` | `number` | Ukuran file (saat `saveTo` digunakan) |

**Cara mode penangkapan dipilih:**

| Skenario | Perilaku |
|------|------|
| `selector` diberikan | Menemukan batas elemen melalui CDP dan memotong tangkapan layar |
| Tab latar belakang | Mencoba tangkapan layar CDP; jika gagal, mengaktifkan tab dan menggunakan `captureVisibleTab` |
| Tab latar depan | Menggunakan `captureVisibleTab` langsung |

```javascript
// Simpan tangkapan layar ke OPFS
const shot = await CAT.agent.dom.screenshot({
  saveTo: "screenshots/page.png",
  quality: 90
});
console.log(`Saved to ${shot.path}, size ${shot.size} bytes`);
```

## Interaksi halaman

### click — klik elemen

```javascript
const result = await CAT.agent.dom.click(selector, options?);
```

**Parameter:**

| Parameter | Jenis | Bawaan | Deskripsi |
|------|------|--------|------|
| `selector` | `string` | — | Selektor CSS (wajib) |
| `options.tabId` | `number` | tab aktif saat ini | Tab mana yang digunakan |
| `options.trusted` | `boolean` | `false` | Gunakan CDP untuk mengirim peristiwa mouse asli |

**Mengembalikan `ActionResult`:**

| Bidang | Jenis | Deskripsi |
|------|------|------|
| `success` | `boolean` | Apakah berhasil |
| `navigated` | `boolean` | Apakah klik memicu navigasi halaman |
| `url` | `string` | URL baru setelah navigasi |
| `newTab` | `boolean` | Apakah tab baru dibuka |

**`trusted` vs. klik biasa:**

- `trusted: false` (bawaan) — mensimulasikan `element.click()` melalui JS yang disuntikkan; cepat, tetapi beberapa situs dapat mendeteksinya sebagai peristiwa yang tidak asli
- `trusted: true` — mengirim peristiwa mouse asli melalui Chrome DevTools Protocol, tidak dapat dibedakan dari interaksi pengguna nyata, tetapi memerlukan izin debugger

### fill — isi bidang formulir

```javascript
const result = await CAT.agent.dom.fill(selector, value, options?);
```

**Parameter:**

| Parameter | Jenis | Deskripsi |
|------|------|------|
| `selector` | `string` | Selektor CSS (wajib) |
| `value` | `string` | Nilai yang diisi (wajib) |
| `options.tabId` | `number` | Tab mana yang digunakan |
| `options.trusted` | `boolean` | Gunakan CDP untuk mensimulasikan input keyboard |

**Perilaku:**
- Mode normal: mengatur `element.value` dan mengirim peristiwa `input`
- Mode tepercaya: CDP memfokuskan elemen → mengetik karakter demi karakter

### scroll — gulir halaman

```javascript
const result = await CAT.agent.dom.scroll(direction, options?);
```

**Parameter:**

| Parameter | Jenis | Deskripsi |
|------|------|------|
| `direction` | `"up" \| "down" \| "top" \| "bottom"` | Arah gulir (wajib) |
| `options.tabId` | `number` | Tab mana yang digunakan |
| `options.selector` | `string` | Gulir wadah tertentu, bukan seluruh halaman |

**Mengembalikan `ScrollResult`:**

| Bidang | Jenis | Deskripsi |
|------|------|------|
| `scrollTop` | `number` | Posisi gulir setelah menggulir |
| `scrollHeight` | `number` | Tinggi total konten |
| `clientHeight` | `number` | Tinggi viewport |
| `atBottom` | `boolean` | Apakah sekarang tergulir ke bawah |

### waitFor — tunggu elemen

```javascript
const result = await CAT.agent.dom.waitFor(selector, options?);
```

Menunggu elemen yang ditentukan muncul di halaman (memeriksa setiap 500ms).

**Parameter:**

| Parameter | Jenis | Bawaan | Deskripsi |
|------|------|--------|------|
| `selector` | `string` | — | Selektor CSS (wajib) |
| `options.tabId` | `number` | tab aktif saat ini | Tab mana yang digunakan |
| `options.timeout` | `number` | `10000` | Batas waktu dalam milidetik |

**Mengembalikan `WaitForResult`:**

| Bidang | Jenis | Deskripsi |
|------|------|------|
| `found` | `boolean` | Apakah elemen ditemukan |
| `element` | `object` | Info elemen (hanya saat `found=true`) |
| `element.selector` | `string` | Selektor yang cocok |
| `element.tag` | `string` | Nama tag |
| `element.text` | `string` | Konten teks |
| `element.role` | `string` | Peran ARIA |
| `element.type` | `string` | tipe input |
| `element.visible` | `boolean` | Apakah terlihat |

## Eksekusi skrip

### executeScript — jalankan JavaScript

```javascript
const result = await CAT.agent.dom.executeScript(code, options?);
```

**Parameter:**

| Parameter | Jenis | Bawaan | Deskripsi |
|------|------|--------|------|
| `code` | `string` | — | Kode JavaScript (wajib) |
| `options.tabId` | `number` | tab aktif saat ini | Tab mana yang digunakan |

> Kode selalu berjalan di **MAIN world** halaman (berbagi objek `window` yang sama dengan JS halaman itu sendiri), sehingga dapat memanggil fungsi halaman itu sendiri dan membaca variabel halaman secara langsung — tetapi untuk alasan yang sama **tidak dapat mengakses URL blob ekstensi** (mis. URL `blob:` yang Anda buat melalui `URL.createObjectURL()` dari `Blob` yang dikembalikan oleh `CAT.agent.opfs.read` dalam mode `"blob"`), karena URL blob dibatasi pada origin ekstensi itu sendiri. Jika Anda perlu bekerja dengan URL blob dalam konteks terisolasi, gunakan SkillScript sebagai gantinya (lihat [Pengembangan Skill](../agent-skill-dev)).

```javascript
// Panggil fungsi JS halaman itu sendiri / baca variabel halaman
const data = await CAT.agent.dom.executeScript(
  "return window.__APP_STATE__"
);

// Baca konten DOM
const title = await CAT.agent.dom.executeScript(
  "return document.querySelector('h1')?.textContent"
);
```

> Kode dibungkus dalam `new Function()` untuk dieksekusi, dan mendukung nilai `return`. Batas waktunya 30 detik.

## Pemantauan DOM

Menggunakan Chrome DevTools Protocol untuk memantau perubahan DOM dan peristiwa dialog di halaman.

### startMonitor — mulai pemantauan

```javascript
await CAT.agent.dom.startMonitor(tabId);
```

Mulai memantau tab yang ditentukan untuk perubahan DOM dan dialog (alert/confirm/prompt).

### stopMonitor — hentikan pemantauan

```javascript
const result = await CAT.agent.dom.stopMonitor(tabId);
```

Menghentikan pemantauan dan mengembalikan perubahan yang dikumpulkan.

**Mengembalikan `MonitorResult`:**

| Bidang | Jenis | Deskripsi |
|------|------|------|
| `dialogs` | `Array<{ type, message }>` | Daftar dialog |
| `addedNodes` | `Array<{ tag, id?, class?, role?, text }>` | Ringkasan node DOM yang baru ditambahkan |

> `addedNodes` dideduplikasi berdasarkan ID node dan dibatasi 50 entri; node yang telah dihapus dari halaman atau tidak terlihat dilewati secara otomatis. `text` adalah teks biasa yang diekstrak dari `outerHTML` node, dipotong hingga 300 karakter.

### peekMonitor — periksa status pemantauan

```javascript
const status = await CAT.agent.dom.peekMonitor(tabId);
```

Memeriksa status pemantauan saat ini secara non-destruktif.

**Mengembalikan `MonitorStatus`:**

| Bidang | Jenis | Deskripsi |
|------|------|------|
| `hasChanges` | `boolean` | Apakah ada perubahan |
| `dialogCount` | `number` | Jumlah dialog |
| `nodeCount` | `number` | Jumlah node yang baru ditambahkan |

## Contoh lengkap

```javascript
// ==UserScript==
// @name        Auto form filler
// @match       https://example.com/form
// @grant       CAT.agent.dom
// ==/UserScript==

// Tunggu formulir dimuat
await CAT.agent.dom.waitFor("form#signup", { timeout: 5000 });

// Isi formulir
await CAT.agent.dom.fill("input[name=username]", "test_user");
await CAT.agent.dom.fill("input[name=email]", "test@example.com");

// Centang kotak persetujuan
await CAT.agent.dom.click("input[type=checkbox]#agree");

// Tangkapan layar formulir yang telah diisi
await CAT.agent.dom.screenshot({
  selector: "form#signup",
  saveTo: "screenshots/form-filled.png"
});

// Klik kirim
const result = await CAT.agent.dom.click("button[type=submit]", { trusted: true });
if (result.navigated) {
  console.log("Form submitted successfully, navigated to:", result.url);
}
```
