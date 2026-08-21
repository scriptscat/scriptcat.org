---
title: Documentação CatApi
---

## Visão Geral

As APIs específicas desta extensão são todas definidas com o prefixo `CAT_`.

Você também pode encontrar exemplos relacionados no [diretório de exemplos](https://github.com/scriptscat/scriptcat/tree/main/example).

## Definições

### CAT_setProxy

> Obsoleto desde a versão estável 0.9.1; pode retornar em uma versão beta.

Define um proxy. Observe que esta funcionalidade entra em conflito com extensões como Proxy SwitchyOmega. Vários scripts podem usar um proxy sem conflito.

Por favor, leia primeiro sobre [PAC](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) e [as restrições de URL completas do Chromium no PAC](https://github.com/FelisCatus/SwitchyOmega/wiki/Chromium-Full-URL-Restriction).

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

> Obsoleto desde a versão estável 0.9.1; pode retornar em uma versão beta.

Limpa o proxy.

```typescript
declare function CAT_clearProxy(): void;
```

### CAT_click

> Obsoleto desde a versão estável 0.9.1; pode retornar em uma versão beta.

Um clique real. Esta API é experimental e pode mudar ou ser removida.

Implementada usando [Input.dispatchMouseEvent](https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent). Certifique-se de que o elemento está dentro da área visível e que as coordenadas são relativas à posição da janela.

```ts
declare function CAT_click(x: number, y: number): void;
```

### CAT_userConfig

Você pode chamar esta API para abrir a página de [UserConfig](./config.md) do script.

```ts
declare function CAT_userConfig(): void;
```

### CAT_fileStorage

Controla o sistema de armazenamento configurado pelo manager. Um diretório `app/uuid` será criado para esta API.

```ts
/**
 * Controla o sistema de armazenamento configurado pelo manager.
 * @param action Tipo de operação: list, upload, download, delete, config
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

Ao usar `early-start`, você pode usar esta função para determinar se o script foi completamente carregado.

```js
function CAT_ScriptLoaded(): Promise<void>;

CAT_scriptLoaded().then(() => {
  console.log("Script completamente carregado");
});
```
