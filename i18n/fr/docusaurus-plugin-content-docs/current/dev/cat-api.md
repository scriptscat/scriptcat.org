---
title: Documentation CatApi
---

## Introduction

Les API spécifiques à cette extension sont définies avec le préfixe `CAT_`.

Vous pouvez également consulter des exemples dans le [répertoire d'exemples](https://github.com/scriptscat/scriptcat/tree/main/example).

## Définitions

### CAT_setProxy

> Obsolète depuis la version 0.9.1. Pourrait être réintroduit dans les versions bêta.

Définit un proxy. Notez que cette fonctionnalité peut entrer en conflit avec des extensions comme Proxy SwitchyOmega. Plusieurs scripts peuvent utiliser des proxys sans conflit (par exemple, un script fournit l'accès à Google et un autre l'accès à Twitter).

Veuillez d'abord consulter [PAC](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) et [les restrictions d'URL complètes de Chromium dans le PAC](https://github.com/FelisCatus/SwitchyOmega/wiki/Chromium-Full-URL-Restriction).

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

> Obsolète depuis la version 0.9.1. Pourrait être réintroduit dans les versions bêta.

Efface le proxy.

```typescript
declare function CAT_clearProxy(): void;
```

### CAT_click

> Obsolète depuis la version 0.9.1. Pourrait être réintroduit dans les versions bêta.

Un vrai clic. Cette API est expérimentale et peut changer ou être supprimée.

Implémentée via [Input.dispatchMouseEvent](https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent). Assurez-vous que l'élément se trouve dans la zone visible et que les coordonnées sont relatives à la position de la fenêtre.

```ts
declare function CAT_click(x: number, y: number): void;
```

### CAT_userConfig

Vous pouvez appeler cette API pour ouvrir la page [UserConfig](./config.md) du script.

```ts
declare function CAT_userConfig(): void;
```

### CAT_fileStorage

Contrôle le système de stockage configuré dans le gestionnaire. Un répertoire `app/uuid` sera créé pour cette API ; si le paramètre `baseDir` est spécifié, il sera utilisé comme répertoire de base à la place.

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

Lorsque vous utilisez `early-start`, vous pouvez utiliser cette fonction pour déterminer si le script est complètement chargé.

```js
function CAT_scriptLoaded(): Promise<void>;

CAT_scriptLoaded().then(() => {
  console.log("Script has fully loaded");
});
```

### CAT_createBlobUrl

Crée une URL de blob à partir d'un objet Blob. ScriptCat gère le cycle de vie de l'URL.

```typescript
declare function CAT_createBlobUrl(blob: Blob): Promise<string>;
```

### CAT_fetchBlob

Récupère une URL de blob et renvoie les données Blob. Fonction d'aide pour les réponses en flux de `GM_xmlhttpRequest`.

```typescript
declare function CAT_fetchBlob(url: string): Promise<Blob>;
```

### CAT_fetchDocument

Récupère une URL et l'analyse comme un Document (dans le contexte de la page de contenu si disponible).

```typescript
declare function CAT_fetchDocument(url: string): Promise<Document | undefined>;
```

### CAT_registerMenuInput

Enregistre une zone de saisie dans le menu, permettant aux utilisateurs de saisir des valeurs et d'exécuter une fonction de rappel.

```typescript
declare function CAT_registerMenuInput(
  name: string,
  listener?: (inputValue?: any) => void,
  options_or_accessKey?: {
        id?: number | string;
        title?: string;
        accessKey?: string;
        autoClose?: boolean;
        type?: "text" | "password" | "number";
        defaultValue?: string;
      }
    | string
): number;
```
