---
title: CatApi-documentatie
---

## Overzicht

API's die specifiek zijn voor deze extensie zijn allemaal gedefinieerd met `CAT_` als voorvoegsel.

U kunt ook gerelateerde voorbeelden vinden in de [voorbeeldmap](https://github.com/scriptscat/scriptcat/tree/main/example).

## Definities

### CAT_setProxy

> Verouderd vanaf de stabiele release 0.9.1; kan in de toekomst terugkeren in een bètaversie.

Stelt een proxy in. Houd er rekening mee dat deze functie conflicteert met extensies zoals Proxy SwitchyOmega. Meerdere scripts kunnen een proxy gebruiken zonder conflicten (bijvoorbeeld één script dat Google-toegang biedt en een ander dat Twitter-toegang biedt).

Lees eerst over [PAC](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) en [Chromium's volledige URL-beperkingen in PAC](https://github.com/FelisCatus/SwitchyOmega/wiki/Chromium-Full-URL-Restriction).

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

> Verouderd vanaf de stabiele release 0.9.1; kan in de toekomst terugkeren in een bètaversie.

Wist de proxy.

```typescript
declare function CAT_clearProxy(): void;
```

### CAT_click

> Verouderd vanaf de stabiele release 0.9.1; kan in de toekomst terugkeren in een bètaversie.

Een echte klik. Deze API is experimenteel en kan worden gewijzigd of verwijderd.

Geïmplementeerd met [Input.dispatchMouseEvent](https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent). Zorg ervoor dat het element zich in het zichtbare gebied bevindt en dat de coördinaten relatief zijn ten opzichte van de vensterpositie.

```ts
declare function CAT_click(x: number, y: number): void;
```

### CAT_userConfig

U kunt deze API aanroepen om de pagina [UserConfig](./config.md) van het script te openen.

```ts
declare function CAT_userConfig(): void;
```

### CAT_fileStorage

Bestuurt het opslagsysteem dat door de manager is geconfigureerd. Voor deze API wordt een `app/uuid`-map aangemaakt; als de parameter `baseDir` is opgegeven, wordt deze in plaats daarvan als basismap gebruikt.

```ts
/**
 * Bestuurt het opslagsysteem dat door de manager is geconfigureerd. Voor deze API wordt een app/uuid-map aangemaakt; als de parameter baseDir is opgegeven, wordt deze in plaats daarvan als basismap gebruikt.
 * Uploads overschrijven standaard bestanden met dezelfde naam.
 * @param action Bewerkingstype: list geeft alle bestanden in de opgegeven map weer, upload uploadt een bestand, download downloadt een bestand, delete verwijdert een bestand, config opent de configuratiepagina. move/mkdir en vergelijkbare bewerkingen worden nog niet aangeboden.
 * @param details
 */
declare function CAT_fileStorage(
  action: "list",
  details: {
    // Bestandspad
    path?: string;
    // Basismap; indien niet ingesteld, wordt de uuid van het script als map gebruikt
    baseDir?: string;
    onload?: (files: CATType.FileStorageFileInfo[]) => void;
    onerror?: (error: CATType.FileStorageError) => void;
  }
): void;
declare function CAT_fileStorage(
  action: "download",
  details: {
    file: CATType.FileStorageFileInfo; // Sommige platforms vereisen de hash van het bestand, dus de bestandsinformatie moet worden doorgegeven
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
    // Basismap; indien niet ingesteld, wordt de uuid van het script als map gebruikt
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

Wanneer u `early-start` gebruikt, kunt u met deze functie bepalen of het script volledig is geladen.

```js
function CAT_scriptLoaded(): Promise<void>;

CAT_scriptLoaded().then(() => {
  console.log("Het script is volledig geladen");
});
```

### CAT_createBlobUrl

Maak een blob-URL van een Blob-object. ScriptCat beheert de levenscyclus van de URL.

```typescript
declare function CAT_createBlobUrl(blob: Blob): Promise<string>;
```

### CAT_fetchBlob

Haal een blob-URL op en retourneer de Blob-gegevens. Helper voor `GM_xmlhttpRequest`-streamantwoorden.

```typescript
declare function CAT_fetchBlob(url: string): Promise<Blob>;
```

### CAT_fetchDocument

Haal een URL op en parseer deze als een Document (in de context van de contentpagina indien beschikbaar).

```typescript
declare function CAT_fetchDocument(url: string): Promise<Document | undefined>;
```

### CAT_registerMenuInput

Registreer een menu-item met een invoerveld, zodat de gebruiker een waarde kan invoeren. De callback ontvangt de invoer van de gebruiker.

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
        /** Type van het invoerwidget. */
        inputType?: "text" | "number" | "boolean";
        /** Dialoogtitel (voor de invoerpop-up). */
        title?: string;
        /** Label dat naast de invoer wordt weergegeven. */
        inputLabel?: string;
        /** Standaardwaarde voor de invoer. */
        inputDefaultValue?: string | number | boolean;
        /** Plaatshoudertekst. */
        inputPlaceholder?: string;
      }
    | string
): number;

/** Een menu-invoer uitschrijven (alias van `GM_unregisterMenuCommand`). */
declare const CAT_unregisterMenuInput: typeof GM_unregisterMenuCommand;
```
