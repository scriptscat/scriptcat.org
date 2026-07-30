---
title: Документация CatApi
---

## Обзор

API, специфичные для этого расширения, определяются с префиксом `CAT_`.

Связанные примеры также можно найти в [каталоге example](https://github.com/scriptscat/scriptcat/tree/main/example).

## Определения

### CAT_setProxy

> Устарело начиная со стабильного релиза 0.9.1; в будущем может вернуться в beta-версии.

Задаёт прокси. Учтите, что эта функция будет конфликтовать с расширениями вроде Proxy SwitchyOmega. Несколько скриптов могут использовать прокси без конфликта (например, один скрипт для доступа к Google, другой — к Twitter).

Сначала ознакомьтесь с [PAC](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) и [ограничениями Chromium на полный URL в PAC](https://github.com/FelisCatus/SwitchyOmega/wiki/Chromium-Full-URL-Restriction).

```typescript
declare function CAT_setProxy(rule: CAT_Types.ProxyRule[] | string): void;

declare namespace CAT_Types {
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

> Устарело начиная со стабильного релиза 0.9.1; в будущем может вернуться в beta-версии.

Очищает прокси.

```typescript
declare function CAT_clearProxy(): void;
```

### CAT_click

> Устарело начиная со стабильного релиза 0.9.1; в будущем может вернуться в beta-версии.

Настоящий клик. API экспериментальное и может измениться или быть удалено.

Реализовано через [Input.dispatchMouseEvent](https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent). Убедитесь, что элемент находится в видимой области, а координаты отсчитываются относительно окна.

```ts
declare function CAT_click(x: number, y: number): void;
```

### CAT_userConfig

Вызов этого API открывает страницу [UserConfig](./config.md) скрипта.

```ts
declare function CAT_userConfig(): void;
```

### CAT_fileStorage

Управляет системой хранения, настроенной в менеджере. Для этого API создаётся каталог `app/uuid`; если указан параметр `baseDir`, он используется как базовый каталог.

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

При использовании `early-start` этой функцией можно определить, полностью ли загрузился скрипт.

```js
function CAT_ScriptLoaded(): Promise<void>;

CAT_scriptLoaded().then(() => {
  console.log("Script has fully loaded");
});
```
