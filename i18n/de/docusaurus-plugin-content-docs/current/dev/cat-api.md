---
title: CatApi Dokumentation
---

## Überblick

APIs, die speziell für diese Erweiterung sind, werden alle mit `CAT_` definiert.

Verwandte Beispiele finden Sie im [Beispielverzeichnis](https://github.com/scriptscat/scriptcat/tree/main/example).

## Definitionen

### CAT_setProxy

> Ab dem stabilen Release 0.9.1 veraltet; könnte in einer Beta-Version zurückkehren.

Setzt einen Proxy. Beachten Sie, dass diese Funktion mit Erweiterungen wie Proxy SwitchyOmega konflikt. Mehrere Skripte können ohne Konflikt einen Proxy verwenden.

Bitte lesen Sie zuerst über [PAC](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) und [Chromiums vollständige URL-Einschränkungen in PAC](https://github.com/FelisCatus/SwitchyOmega/wiki/Chromium-Full-URL-Restriction).

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

> Ab dem stabilen Release 0.9.1 veraltet; könnte in einer Beta-Version zurückkehren.

Löscht den Proxy.

```typescript
declare function CAT_clearProxy(): void;
```

### CAT_click

> Ab dem stabilen Release 0.9.1 veraltet; könnte in einer Beta-Version zurückkehren.

Ein echter Klick. Diese API ist experimentell und kann sich ändern oder entfernt werden.

Implementiert mit [Input.dispatchMouseEvent](https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent). Stellen Sie sicher, dass sich das Element im sichtbaren Bereich befindet.

```ts
declare function CAT_click(x: number, y: number): void;
```

### CAT_userConfig

Sie können diese API aufrufen, um die [UserConfig](./config.md)-Seite des Skripts zu öffnen.

```ts
declare function CAT_userConfig(): void;
```

### CAT_fileStorage

Steuert das Speichersystem, das vom Manager konfiguriert wurde. Für diese API wird ein `app/uuid`-Verzeichnis erstellt.

```ts
/**
 * Steuert das Speichersystem, das vom Manager konfiguriert wurde.
 * @param action Operationstyp: list, upload, download, delete, config
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

Bei Verwendung von `early-start` können Sie diese Funktion verwenden, um zu bestimmen, ob das Skript vollständig geladen wurde.

```js
function CAT_ScriptLoaded(): Promise<void>;

CAT_scriptLoaded().then(() => {
  console.log("Skript vollständig geladen");
});
```
