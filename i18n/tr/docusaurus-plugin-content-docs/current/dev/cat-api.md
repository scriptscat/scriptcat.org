---
title: CatApi Belgeleri
---

## Genel Bakış

Bu eklentiye özgü API'lerin tümü `CAT_` ile başlayacak şekilde tanımlanır.

İlgili örnekleri [örnek dizininde](https://github.com/scriptscat/scriptcat/tree/main/example) de bulabilirsiniz.

## Tanımlar

### CAT_setProxy

> 0.9.1 kararlı sürümünden itibaren kullanımdan kaldırıldı; gelecekte bir beta sürümünde geri dönebilir.

Bir proxy ayarlar. Bu özelliğin Proxy SwitchyOmega gibi eklentilerle çakışacağını unutmayın. Birden çok betik, çakışmadan bir proxy kullanabilir (örneğin, bir betik Google erişimi, diğeri Twitter erişimi sağlar).

Lütfen önce [PAC](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) ve [Chromium'un PAC'deki tam URL kısıtlamaları](https://github.com/FelisCatus/SwitchyOmega/wiki/Chromium-Full-URL-Restriction) hakkında bilgi edinin.

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

> 0.9.1 kararlı sürümünden itibaren kullanımdan kaldırıldı; gelecekte bir beta sürümünde geri dönebilir.

Proxy'yi temizler.

```typescript
declare function CAT_clearProxy(): void;
```

### CAT_click

> 0.9.1 kararlı sürümünden itibaren kullanımdan kaldırıldı; gelecekte bir beta sürümünde geri dönebilir.

Gerçek bir tıklama. Bu API deneyseldir ve değişebilir veya kaldırılabilir.

[Input.dispatchMouseEvent](https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent) kullanılarak uygulanır. Öğenin görünür alan içinde olduğundan ve koordinatların pencerenin konumuna göre olduğundan emin olun.

```ts
declare function CAT_click(x: number, y: number): void;
```

### CAT_userConfig

Betiğin [UserConfig](./config.md) sayfasını açmak için bu API'yi çağırabilirsiniz.

```ts
declare function CAT_userConfig(): void;
```

### CAT_fileStorage

Yönetici tarafından yapılandırılan depolama sistemini kontrol eder. Bu API'nin kullanması için bir `app/uuid` dizini oluşturulur; `baseDir` parametresi belirtilirse, bunun yerine temel dizin olarak kullanılır.

```ts
/**
 * Yönetici tarafından yapılandırılan depolama sistemini kontrol eder. Bu API'nin kullanması için bir app/uuid dizini oluşturulur; baseDir parametresi belirtilirse, bunun yerine temel dizin olarak kullanılır.
 * Yüklemeler varsayılan olarak aynı ada sahip dosyaların üzerine yazar.
 * @param action İşlem türü: list verilen dizindeki tüm dosyaları listeler, upload bir dosya yükler, download bir dosya indirir, delete bir dosyayı siler, config yapılandırma sayfasını açar. move/mkdir ve benzeri işlemler henüz sağlanmamıştır.
 * @param details
 */
declare function CAT_fileStorage(
  action: "list",
  details: {
    // Dosya yolu
    path?: string;
    // Temel dizin; ayarlanmazsa betiğin uuid değeri dizin olarak kullanılır
    baseDir?: string;
    onload?: (files: CATType.FileStorageFileInfo[]) => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
declare function CAT_fileStorage(
  action: "download",
  details: {
    file: CATType.FileStorageFileInfo; // Bazı platformlar dosyanın karmasını gerektirir, bu nedenle dosya bilgisi iletilmelidir
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
    // Temel dizin; ayarlanmazsa betiğin uuid değeri dizin olarak kullanılır
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

`early-start` kullanırken, betiğin tam olarak yüklenip yüklenmediğini belirlemek için bu işlevi kullanabilirsiniz.

```js
function CAT_scriptLoaded(): Promise<void>;

CAT_scriptLoaded().then(() => {
  console.log("Script has fully loaded");
});
```

### CAT_createBlobUrl

Bir Blob nesnesinden bir blob URL oluşturun. ScriptCat URL yaşam döngüsünü yönetir.

```typescript
declare function CAT_createBlobUrl(blob: Blob): Promise<string>;
```

### CAT_fetchBlob

Bir blob URL getirin ve Blob verilerini döndürün. `GM_xmlhttpRequest` akış yanıtları için yardımcı işlev.

```typescript
declare function CAT_fetchBlob(url: string): Promise<Blob>;
```

### CAT_fetchDocument

Bir URL getirin ve onu bir Document olarak ayrıştırın (varsa içerik sayfası bağlamında).

```typescript
declare function CAT_fetchDocument(url: string): Promise<Document | undefined>;
```

### CAT_registerMenuInput

Bir giriş alanı olan bir menü öğesi kaydeder ve kullanıcının bir değer girmesine olanak tanır. Geri çağırma, kullanıcının girişini alır.

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
        /** Giriş pencere öğesi türü. */
        inputType?: "text" | "number" | "boolean";
        /** İletişim kutusu başlığı (giriş açılır penceresi için). */
        title?: string;
        /** Girişin yanında gösterilen etiket. */
        inputLabel?: string;
        /** Giriş için varsayılan değer. */
        inputDefaultValue?: string | number | boolean;
        /** Yer tutucu metni. */
        inputPlaceholder?: string;
      }
    | string
): number;

/** Bir menü girişini kaydını siler (`GM_unregisterMenuCommand` takma adı). */
declare const CAT_unregisterMenuInput: typeof GM_unregisterMenuCommand;
```
