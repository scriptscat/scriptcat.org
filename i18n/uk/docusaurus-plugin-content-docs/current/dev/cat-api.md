---
title: Документація CatApi
---

## Огляд

API, специфічні для цього розширення, визначаються з префіксом `CAT_`.

Ви також можете знайти відповідні приклади в [каталозі прикладів](https://github.com/scriptscat/scriptcat/tree/main/example).

## Визначення

### CAT_setProxy

> Застаріло зі стабільного випуску 0.9.1; може повернутися в бета-версії в майбутньому.

Встановлює проксі. Зверніть увагу, що ця функція конфліктуватиме з такими розширеннями, як Proxy SwitchyOmega. Кілька скриптів можуть використовувати проксі без конфліктів (наприклад, один скрипт надає доступ до Google, а інший — до Twitter).

Спочатку ознайомтеся з [PAC](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) та [обмеженнями повних URL Chromium у PAC](https://github.com/FelisCatus/SwitchyOmega/wiki/Chromium-Full-URL-Restriction).

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

> Застаріло зі стабільного випуску 0.9.1; може повернутися в бета-версії в майбутньому.

Очищає проксі.

```typescript
declare function CAT_clearProxy(): void;
```

### CAT_click

> Застаріло зі стабільного випуску 0.9.1; може повернутися в бета-версії в майбутньому.

Реальний клік. Цей API є експериментальним і може змінитися або бути видаленим.

Реалізовано за допомогою [Input.dispatchMouseEvent](https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent). Переконайтеся, що елемент знаходиться у видимій області, а координати відносяться до позиції вікна.

```ts
declare function CAT_click(x: number, y: number): void;
```

### CAT_userConfig

Ви можете викликати цей API, щоб відкрити сторінку [UserConfig](./config.md) скрипта.

```ts
declare function CAT_userConfig(): void;
```

### CAT_fileStorage

Керує системою зберігання, налаштованою менеджером. Для використання цього API буде створено каталог `app/uuid`; якщо вказано параметр `baseDir`, він використовуватиметься як базовий каталог замість нього.

```ts
/**
 * Керує системою зберігання, налаштованою менеджером. Для використання цього API буде створено каталог app/uuid; якщо вказано параметр baseDir, він використовуватиметься як базовий каталог замість нього.
 * Завантаження за замовчуванням перезаписують файли з однаковою назвою.
 * @param action Тип операції: list перелічує всі файли у вказаному каталозі, upload завантажує файл, download завантажує файл, delete видаляє файл, config відкриває сторінку конфігурації. Операції move/mkdir та подібні ще не надаються.
 * @param details
 */
declare function CAT_fileStorage(
  action: "list",
  details: {
    // Шлях до файлу
    path?: string;
    // Базовий каталог; якщо не встановлено, uuid скрипта використовується як каталог
    baseDir?: string;
    onload?: (files: CATType.FileStorageFileInfo[]) => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
declare function CAT_fileStorage(
  action: "download",
  details: {
    file: CATType.FileStorageFileInfo; // Деякі платформи вимагають хеш файлу, тому інформація про файл має бути передана
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
    // Базовий каталог; якщо не встановлено, uuid скрипта використовується як каталог
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

Використовуючи `early-start`, ви можете використовувати цю функцію, щоб визначити, чи скрипт повністю завантажився.

```js
function CAT_scriptLoaded(): Promise<void>;

CAT_scriptLoaded().then(() => {
  console.log("Script has fully loaded");
});
```

### CAT_createBlobUrl

Створює blob URL з об'єкта Blob. ScriptCat керує життєвим циклом URL.

```typescript
declare function CAT_createBlobUrl(blob: Blob): Promise<string>;
```

### CAT_fetchBlob

Отримує blob URL і повертає дані Blob. Допоміжна функція для потокових відповідей `GM_xmlhttpRequest`.

```typescript
declare function CAT_fetchBlob(url: string): Promise<Blob>;
```

### CAT_fetchDocument

Отримує URL і аналізує його як Document (у контексті сторінки вмісту, якщо доступно).

```typescript
declare function CAT_fetchDocument(url: string): Promise<Document | undefined>;
```

### CAT_registerMenuInput

Реєструє пункт меню з полем введення, що дозволяє користувачу ввести значення. Зворотний виклик отримує введення користувача.

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
        /** Тип віджета введення. */
        inputType?: "text" | "number" | "boolean";
        /** Назва діалогового вікна (для спливаючого вікна введення). */
        title?: string;
        /** Мітка, що показується поруч із полем введення. */
        inputLabel?: string;
        /** Значення за замовчуванням для введення. */
        inputDefaultValue?: string | number | boolean;
        /** Текст-підказка. */
        inputPlaceholder?: string;
      }
    | string
): number;

/** Скасувати реєстрацію меню введення (псевдонім `GM_unregisterMenuCommand`). */
declare const CAT_unregisterMenuInput: typeof GM_unregisterMenuCommand;
```
