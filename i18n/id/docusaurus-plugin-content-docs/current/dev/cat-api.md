---
title: Dokumentasi CatApi
---

## Ringkasan

API khusus ekstensi ini semuanya didefinisikan dengan awalan `CAT_`.

Anda juga dapat menemukan contoh terkait di [direktori contoh](https://github.com/scriptscat/scriptcat/tree/main/example).

## Definisi

### CAT_setProxy

> Tidak digunakan lagi sejak rilis stabil 0.9.1; mungkin kembali di versi beta di masa depan.

Mengatur proksi. Perhatikan bahwa fitur ini akan bertentangan dengan ekstensi seperti Proxy SwitchyOmega. Beberapa skrip dapat menggunakan proksi tanpa konflik (misalnya, satu skrip menyediakan akses Google dan yang lain menyediakan akses Twitter).

Silakan baca dulu tentang [PAC](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) dan [pembatasan URL lengkap Chromium dalam PAC](https://github.com/FelisCatus/SwitchyOmega/wiki/Chromium-Full-URL-Restriction).

```typescript
declare function CAT_setProxy(rule: CATType.ProxyRule[] | string): void;

declare namespace CATType {
  interface ProxyRule {
    proxyServer: ProxyServer;
    matchUrl: string[];
  }
  type ProxyScheme = "http" | "https" | "quic" | "socks4" | "socks5";
  interface ProxyServer {
    scheme?: ProxyScheme;
    host: string;
    port?: number;
  }
}
```

### CAT_clearProxy

> Tidak digunakan lagi sejak rilis stabil 0.9.1; mungkin kembali di versi beta di masa depan.

Menghapus proksi.

```typescript
declare function CAT_clearProxy(): void;
```

### CAT_click

> Tidak digunakan lagi sejak rilis stabil 0.9.1; mungkin kembali di versi beta di masa depan.

Klik asli. API ini eksperimental dan dapat berubah atau dihapus.

Diimplementasikan menggunakan [Input.dispatchMouseEvent](https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent). Pastikan elemen berada dalam area yang terlihat, dan koordinatnya relatif terhadap posisi jendela.

```ts
declare function CAT_click(x: number, y: number): void;
```

### CAT_userConfig

Anda dapat memanggil API ini untuk membuka halaman [UserConfig](./config.md) skrip.

```ts
declare function CAT_userConfig(): void;
```

### CAT_fileStorage

Mengontrol sistem penyimpanan yang dikonfigurasi oleh pengelola. Direktori `app/uuid` akan dibuat untuk digunakan API ini; jika parameter `baseDir` ditentukan, direktori itu akan digunakan sebagai direktori dasar sebagai gantinya.

```ts
/**
 * Mengontrol sistem penyimpanan yang dikonfigurasi oleh pengelola. Direktori app/uuid akan dibuat untuk digunakan API ini; jika parameter baseDir ditentukan, direktori itu akan digunakan sebagai direktori dasar sebagai gantinya.
 * Unggahan menimpa file dengan nama yang sama secara bawaan.
 * @param action Jenis operasi: list mendaftar semua file di direktori yang diberikan, upload mengunggah file, download mengunduh file, delete menghapus file, config membuka halaman konfigurasi. Operasi move/mkdir dan sejenisnya belum disediakan.
 * @param details
 */
declare function CAT_fileStorage(
  action: "list",
  details: {
    // Jalur file
    path?: string;
    // Direktori dasar; jika tidak diatur, uuid skrip digunakan sebagai direktori
    baseDir?: string;
    onload?: (files: CATType.FileStorageFileInfo[]) => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
declare function CAT_fileStorage(
  action: "download",
  details: {
    file: CATType.FileStorageFileInfo; // Beberapa platform memerlukan hash file, jadi info file harus diteruskan
    onload: (data: Blob) => void;
    // onprogress?: (progress: number) => void;
    onerror?: (error: CATType.FileStorageError) => void;
    // public?: boolean;
  }
): void;
declare function CAT_fileStorage(
  action: "delete",
  details: {
    path: string;
    onload?: () => void;
    onerror?: (error: CATType.FileStorageError) => void;
    // public?: boolean;
  }
): void;
declare function CAT_fileStorage(
  action: "upload",
  details: {
    path: string;
    // Direktori dasar; jika tidak diatur, uuid skrip digunakan sebagai direktori
    baseDir?: string;
    data: Blob;
    onload?: () => void;
    // onprogress?: (progress: number) => void;
    onerror?: (error: CATType.FileStorageError) => void;
    // public?: boolean;
  }
): void;
declare function CAT_fileStorage(action: "config"): void;
```

### CAT_scriptLoaded

Saat menggunakan `early-start`, Anda dapat menggunakan fungsi ini untuk menentukan apakah skrip telah dimuat sepenuhnya.

```js
function CAT_scriptLoaded(): Promise<void>;

CAT_scriptLoaded().then(() => {
  console.log("Script has fully loaded");
});
```

### CAT_createBlobUrl

Membuat URL blob dari objek Blob. ScriptCat mengelola siklus hidup URL.

```typescript
declare function CAT_createBlobUrl(blob: Blob): Promise<string>;
```

### CAT_fetchBlob

Mengambil URL blob dan mengembalikan data Blob. Pembantu untuk respons stream `GM_xmlhttpRequest`.

```typescript
declare function CAT_fetchBlob(url: string): Promise<Blob>;
```

### CAT_fetchDocument

Mengambil URL dan mengurainya sebagai Document (dalam konteks halaman konten jika tersedia).

```typescript
declare function CAT_fetchDocument(url: string): Promise<Document | undefined>;
```

### CAT_registerMenuInput

Mendaftarkan item menu dengan bidang input, memungkinkan pengguna memasukkan nilai. Callback menerima input pengguna.

```typescript
declare function CAT_registerMenuInput(
  name: string,
  listener?: (inputValue?: any) => void,
  options_or_accessKey?:
    | {
        id?: number | string;
        accessKey?: string;
        autoClose?: boolean;
        nested?: boolean;
        individual?: boolean;
        /** Jenis widget input. */
        inputType?: "text" | "number" | "boolean";
        /** Judul dialog (untuk popup input). */
        title?: string;
        /** Label yang ditampilkan di sebelah input. */
        inputLabel?: string;
        /** Nilai bawaan untuk input. */
        inputDefaultValue?: string | number | boolean;
        /** Teks placeholder. */
        inputPlaceholder?: string;
      }
    | string
): number;

/** Batalkan pendaftaran input menu (alias dari `GM_unregisterMenuCommand`). */
declare const CAT_unregisterMenuInput: typeof GM_unregisterMenuCommand;
```
