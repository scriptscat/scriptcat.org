---
title: Documentación CatApi
---

## Resumen

Las API específicas de esta extensión se definen todas con el prefijo `CAT_`.

También puede encontrar ejemplos relacionados en el [directorio de ejemplos](https://github.com/scriptscat/scriptcat/tree/main/example).

## Definiciones

### CAT_setProxy

> Obsoleto desde la versión estable 0.9.1; podría volver en una versión beta.

Establece un proxy. Tenga en cuenta que esta función entra en conflicto con extensiones como Proxy SwitchyOmega. Múltiples scripts pueden usar un proxy sin conflicto.

Lea primero sobre [PAC](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) y [las restricciones de URL completas de Chromium en PAC](https://github.com/FelisCatus/SwitchyOmega/wiki/Chromium-Full-URL-Restriction).

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

> Obsoleto desde la versión estable 0.9.1; podría volver en una versión beta.

Borra el proxy.

```typescript
declare function CAT_clearProxy(): void;
```

### CAT_click

> Obsoleto desde la versión estable 0.9.1; podría volver en una versión beta.

Un clic real. Esta API es experimental y puede cambiar o eliminarse.

Implementada usando [Input.dispatchMouseEvent](https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent). Asegúrese de que el elemento esté dentro del área visible y que las coordenadas sean relativas a la posición de la ventana.

```ts
declare function CAT_click(x: number, y: number): void;
```

### CAT_userConfig

Puede llamar a esta API para abrir la página de [UserConfig](./config.md) del script.

```ts
declare function CAT_userConfig(): void;
```

### CAT_fileStorage

Controla el sistema de almacenamiento configurado por el manager. Se creará un directorio `app/uuid` para esta API; si se especifica el parámetro `baseDir`, se usará como directorio base.

```ts
/**
 * Controla el sistema de almacenamiento configurado por el manager.
 * @param action Tipo de operación: list, upload, download, delete, config
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

Al usar `early-start`, puede usar esta función para determinar si el script se ha cargado completamente.

```js
function CAT_ScriptLoaded(): Promise<void>;

CAT_scriptLoaded().then(() => {
  console.log("Script cargado completamente");
});
```
