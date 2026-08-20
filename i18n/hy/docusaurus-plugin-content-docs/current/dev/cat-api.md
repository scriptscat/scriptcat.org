---
title: CatApi փաստաթղթեր
---

## Ուսումնասիրություն

Այս ընդլայնմանը հատուկ API-ները բոլորը սահմանված են `CAT_`-ով սկսվող:

Դուք կարող եք նաև գտնել առնչվող օրինակներ [օրինակների դիրեկտորիայում](https://github.com/scriptscat/scriptcat/tree/main/example):

## Սահմանումներ

### CAT_setProxy

> Անվավեր է 0.9.1 կայուն թողարկումից սկսած. կարող է վերադառնալ ապագայում բետա տարբերակում:

Սահմանում է պրոքսի: Նկատի ունեցեք, որ այս հնարավորությունը կհակասի Proxy SwitchyOmega-ի նման ընդլայնումներին: Բազմաթիվ սկրիպտներ կարող են օգտագործել պրոքսի առանց հակասության (օրինակ՝ մեկ սկրիպտը տրամադրում է Google մուտք, իսկ մյուսը՝ Twitter մուտք):

Խնդրում ենք նախ կարդացեք [PAC](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)-ի և [Chromium-ի ամբողջական URL սահմանափակումների մասին PAC-ում](https://github.com/FelisCatus/SwitchyOmega/wiki/Chromium-Full-URL-Restriction):

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

> Անվավեր է 0.9.1 կայուն թողարկումից սկսած. կարող է վերադառնալ ապագայում բետա տարբերակում:

Մաքրում է պրոքսին:

```typescript
declare function CAT_clearProxy(): void;
```

### CAT_click

> Անվավեր է 0.9.1 կայուն թողարկումից սկսած. կարող է վերադառնալ ապագայում բետա տարբերակում:

Իրական սեղմում: Այս API-ն փորձարարական է և կարող է փոփոխվել կամ հեռացվել:

Իրականացված է [Input.dispatchMouseEvent](https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent)-ի միջոցով: Համոզվեք, որ տարրը տեսանելի տարածքում է, և որ կոորդինատները հարաբերական են պատուհանի դիրքին:

```ts
declare function CAT_click(x: number, y: number): void;
```

### CAT_userConfig

Դուք կարող եք կանչել այս API-ն՝ սկրիպտի [UserConfig](./config.md) էջը բացելու համար:

```ts
declare function CAT_userConfig(): void;
```

### CAT_fileStorage

Վերահսկում է կառավարչի կողմից կոնֆիգուրված պահեստավորման համակարգը: Այս API-ի օգտագործման համար կստեղծվի `app/uuid` դիրեկտորիա. եթե նշված է `baseDir` պարամետրը, այն կօգտագործվի որպես բազային դիրեկտորիա փոխարենը:

```ts
/**
 * Controls the storage system configured by the manager. An app/uuid directory will be created for this API to use; if the baseDir parameter is specified, it will be used as the base directory instead.
 * Uploads overwrite files with the same name by default.
 * @param action Operation type: list lists all files in the given directory, upload uploads a file, download downloads a file, delete deletes a file, config opens the config page. move/mkdir and similar operations are not yet provided.
 * @param details
 */
declare function CAT_fileStorage(
  action: "list",
  details: {
    // File path
    path?: string;
    // Base directory; if not set, the script's uuid is used as the directory
    baseDir?: string;
    onload?: (files: CATType.FileStorageFileInfo[]) => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
declare function CAT_fileStorage(
  action: "download",
  details: {
    file: CATType.FileStorageFileInfo; // Some platforms require the file's hash, so the file info must be passed in
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
    // Base directory; if not set, the script's uuid is used as the directory
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

`early-start` օգտագործելիս կարող եք օգտագործել այս ֆունկցիան՝ որոշելու համար, թե արդյոք սկրիպտն ամբողջությամբ բեռնվել է:

```js
function CAT_scriptLoaded(): Promise<void>;

CAT_scriptLoaded().then(() => {
  console.log("Script has fully loaded");
});
```

### CAT_createBlobUrl

Ստեղծում է blob URL Blob օբյեկտից: ScriptCat-ը կառավարում է URL-ի կյանքի ցիկլը:

```typescript
declare function CAT_createBlobUrl(blob: Blob): Promise<string>;
```

### CAT_fetchBlob

Ֆեչում է blob URL և վերադարձնում Blob տվյալները: Օգնական `GM_xmlhttpRequest` սթրիմ պատասխանների համար:

```typescript
declare function CAT_fetchBlob(url: string): Promise<Blob>;
```

### CAT_fetchDocument

Ֆեչում է URL և վերլուծում այն որպես Document (կոնտենտ էջի կոնտեքստում, եթե հասանելի է):

```typescript
declare function CAT_fetchDocument(url: string): Promise<Document | undefined>;
```

### CAT_registerMenuInput

Գրանցում է մենյուի տարր մուտքագրման դաշտով՝ թույլ տալով օգտագործողին արժեք մուտքագրել: Կոլբեքը ստանում է օգտագործողի մուտքագրումը:

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
        /** Input widget type. */
        inputType?: "text" | "number" | "boolean";
        /** Dialog title (for the input popup). */
        title?: string;
        /** Label shown next to the input. */
        inputLabel?: string;
        /** Default value for the input. */
        inputDefaultValue?: string | number | boolean;
        /** Placeholder text. */
        inputPlaceholder?: string;
      }
    | string
): number;

/** Unregister a menu input (alias of `GM_unregisterMenuCommand`). */
declare const CAT_unregisterMenuInput: typeof GM_unregisterMenuCommand;
```
