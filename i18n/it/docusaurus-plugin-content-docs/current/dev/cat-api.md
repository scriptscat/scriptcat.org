---
title: Documentazione CatApi
---

## Panoramica

Le API specifiche di questa estensione sono tutte definite con il prefisso `CAT_`.

Puoi trovare esempi correlati nella [directory degli esempi](https://github.com/scriptscat/scriptcat/tree/main/example).

## Definizioni

### CAT_setProxy

> Deprecato dalla versione stabile 0.9.1; potrebbe tornare in una versione beta.

Imposta un proxy. Nota che questa funzione entra in conflitto con estensioni come Proxy SwitchyOmega. Più script possono utilizzare un proxy senza conflitto.

Leggi prima su [PAC](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) e [le restrizioni URL complete di Chromium in PAC](https://github.com/FelisCatus/SwitchyOmega/wiki/Chromium-Full-URL-Restriction).

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

> Deprecato dalla versione stabile 0.9.1; potrebbe tornare in una versione beta.

Cancella il proxy.

```typescript
declare function CAT_clearProxy(): void;
```

### CAT_click

> Deprecato dalla versione stabile 0.9.1; potrebbe tornare in una versione beta.

Un clic reale. Questa API è sperimentale e potrebbe cambiare o essere rimossa.

Implementata usando [Input.dispatchMouseEvent](https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent). Assicurati che l'elemento sia nell'area visibile e che le coordinate siano relative alla posizione della finestra.

```ts
declare function CAT_click(x: number, y: number): void;
```

### CAT_userConfig

Puoi chiamare questa API per aprire la pagina [UserConfig](./config.md) dello script.

```ts
declare function CAT_userConfig(): void;
```

### CAT_fileStorage

Controlla il sistema di archiviazione configurato dal manager. Verrà creata una directory `app/uuid` per questa API.

```ts
/**
 * Controlla il sistema di archiviazione configurato dal manager.
 * @param action Tipo di operazione: list, upload, download, delete, config
 * @param details
 */
declare function CAT_fileStorage(
  action: "list",
  details: {
    path?: string;
    baseDir?: string;
    onload?: (files: CATType.FileStorageFileInfo[]) => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
declare function CAT_fileStorage(
  action: "download",
  details: {
    file: CATType.FileStorageFileInfo;
    onload: (data: Blob) => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
declare function CAT_fileStorage(
  action: "delete",
  details: {
    path: string;
    onload?: () => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
declare function CAT_fileStorage(
  action: "upload",
  details: {
    path: string;
    baseDir?: string;
    data: Blob;
    onload?: () => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
declare function CAT_fileStorage(action: "config"): void;
```

### CAT_scriptLoaded

Quando si usa `early-start`, puoi usare questa funzione per determinare se lo script è stato caricato completamente.

```js
function CAT_ScriptLoaded(): Promise<void>;

CAT_scriptLoaded().then(() => {
  console.log("Script caricato completamente");
});
```
