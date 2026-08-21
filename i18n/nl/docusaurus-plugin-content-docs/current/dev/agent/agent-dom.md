---
title: DOM-manipulatie-API
---

`@grant CAT.agent.dom`

De DOM-manipulatie-API biedt volledige browserpagina-automatisering: navigatie, inhoud lezen, schermafbeeldingen, formulierinteractie en DOM-bewaking.

## Tabbladbeheer

### listTabs — tabbladen weergeven

```javascript
const tabs = await CAT.agent.dom.listTabs();
```

Retourneert informatie over elk geopend tabblad.

**Retourneert `TabInfo[]`:**

| Veld | Type | Beschrijving |
|------|------|------|
| `tabId` | `number` | Tabblad-ID |
| `url` | `string` | Huidige URL |
| `title` | `string` | Paginatitel |
| `active` | `boolean` | Of dit het momenteel actieve tabblad is |
| `windowId` | `number` | ID van het venster waartoe het behoort |
| `discarded` | `boolean` | Of het is weggegooid (onderbroken) |

## Navigatie

### navigate — een pagina navigeren

```javascript
const result = await CAT.agent.dom.navigate(url, options?);
```

**Parameters:**

| Parameter | Type | Standaard | Beschrijving |
|------|------|--------|------|
| `url` | `string` | — | Doel-URL (vereist) |
| `options.tabId` | `number` | huidig actief tabblad | Welk tabblad u wilt gebruiken |
| `options.waitUntil` | `boolean` | `true` | Of u wilt wachten tot de pagina is geladen |
| `options.timeout` | `number` | `30000` | Time-out in milliseconden |

**Retourneert `NavigateResult`:**

```typescript
{ tabId: number; url: string; title: string }
```

## Inhoud lezen

### readPage — pagina-inhoud lezen

```javascript
const page = await CAT.agent.dom.readPage(options?);
```

Converteert de pagina-DOM naar gestructureerde tekst en verwijdert automatisch irrelevante elementen zoals `<script>`, `<style>`, `<noscript>`, `<svg>` en `<link[rel=stylesheet]>`.

**Parameters:**

| Parameter | Type | Standaard | Beschrijving |
|------|------|--------|------|
| `options.tabId` | `number` | huidig actief tabblad | Welk tabblad u wilt gebruiken |
| `options.selector` | `string` | — | CSS-selector; alleen de inhoud van het overeenkomende element wordt geretourneerd |
| `options.maxLength` | `number` | — | Maximaal aantal inhoudstekens; wordt hierboven afgekapt |
| `options.removeTags` | `string[]` | — | Extra tagnamen om te verwijderen |

**Retourneert `PageContent`:**

| Veld | Type | Beschrijving |
|------|------|------|
| `title` | `string` | Paginatitel |
| `url` | `string` | Pagina-URL |
| `html` | `string` | Verwerkte paginatekstinhoud |
| `truncated` | `boolean` | Of de inhoud is afgekapt |
| `totalLength` | `number` | Totale lengte van de oorspronkelijke inhoud |

### screenshot — een schermafbeelding maken

```javascript
const shot = await CAT.agent.dom.screenshot(options?);
```

**Parameters:**

| Parameter | Type | Standaard | Beschrijving |
|------|------|--------|------|
| `options.tabId` | `number` | huidig actief tabblad | Welk tabblad u wilt gebruiken |
| `options.quality` | `number` | `80` | JPEG-kwaliteit (0-100) |
| `options.fullPage` | `boolean` | `false` | De volledige pagina vastleggen |
| `options.selector` | `string` | — | CSS-selector; alleen het gebied van het overeenkomende element vastleggen |
| `options.saveTo` | `string` | — | Pad om op te slaan in de OPFS-werkruimte |

**Retourneert `ScreenshotResult`:**

| Veld | Type | Beschrijving |
|------|------|------|
| `dataUrl` | `string` | base64-data-URL |
| `path` | `string` | OPFS-opslagpad (wanneer `saveTo` wordt gebruikt) |
| `size` | `number` | Bestandsgrootte (wanneer `saveTo` wordt gebruikt) |

**Hoe de opnamemodus wordt gekozen:**

| Scenario | Gedrag |
|------|------|
| `selector` gegeven | Lokaliseert de grenzen van het element via CDP en cropt de schermafbeelding |
| Achtergrondtabblad | Probeert een CDP-schermafbeelding; als dat mislukt, activeert het het tabblad en gebruikt `captureVisibleTab` |
| Voorgrondtabblad | Gebruikt rechtstreeks `captureVisibleTab` |

```javascript
// Bewaar een schermafbeelding in OPFS
const shot = await CAT.agent.dom.screenshot({
  saveTo: "screenshots/page.png",
  quality: 90
});
console.log(`Opgeslagen als ${shot.path}, grootte ${shot.size} bytes`);
```

## Pagina-interactie

### click — op een element klikken

```javascript
const result = await CAT.agent.dom.click(selector, options?);
```

**Parameters:**

| Parameter | Type | Standaard | Beschrijving |
|------|------|--------|------|
| `selector` | `string` | — | CSS-selector (vereist) |
| `options.tabId` | `number` | huidig actief tabblad | Welk tabblad u wilt gebruiken |
| `options.trusted` | `boolean` | `false` | CDP gebruiken om een echt muisgebeurtenis te verzenden |

**Retourneert `ActionResult`:**

| Veld | Type | Beschrijving |
|------|------|------|
| `success` | `boolean` | Of het is gelukt |
| `navigated` | `boolean` | Of de klik een paginanavigatie heeft geactiveerd |
| `url` | `string` | De nieuwe URL na navigatie |
| `newTab` | `boolean` | Of er een nieuw tabblad is geopend |

**`trusted` vs. een gewone klik:**

- `trusted: false` (standaard) — simuleert `element.click()` via geïnjecteerde JS; snel, maar sommige sites kunnen het detecteren als een niet-echte gebeurtenis
- `trusted: true` — verzendt een echt muisgebeurtenis via het Chrome DevTools Protocol, niet te onderscheiden van echte gebruikersinteractie, maar vereist debugger-machtiging

### fill — een formulierveld invullen

```javascript
const result = await CAT.agent.dom.fill(selector, value, options?);
```

**Parameters:**

| Parameter | Type | Beschrijving |
|------|------|------|
| `selector` | `string` | CSS-selector (vereist) |
| `value` | `string` | Waarde om in te vullen (vereist) |
| `options.tabId` | `number` | Welk tabblad u wilt gebruiken |
| `options.trusted` | `boolean` | CDP gebruiken om toetsenbordinvoer te simuleren |

**Gedrag:**
- Normale modus: stelt `element.value` in en verzendt een `input`-gebeurtenis
- Vertrouwde modus: CDP focust het element → typt teken voor teken

### scroll — de pagina scrollen

```javascript
const result = await CAT.agent.dom.scroll(direction, options?);
```

**Parameters:**

| Parameter | Type | Beschrijving |
|------|------|------|
| `direction` | `"up" \| "down" \| "top" \| "bottom"` | Scrollrichting (vereist) |
| `options.tabId` | `number` | Welk tabblad u wilt gebruiken |
| `options.selector` | `string` | Een specifieke container scrollen in plaats van de hele pagina |

**Retourneert `ScrollResult`:**

| Veld | Type | Beschrijving |
|------|------|------|
| `scrollTop` | `number` | Scrollpositie na het scrollen |
| `scrollHeight` | `number` | Totale inhoudshoogte |
| `clientHeight` | `number` | Viewporthoogte |
| `atBottom` | `boolean` | Of er nu naar beneden is gescrold |

### waitFor — wachten op een element

```javascript
const result = await CAT.agent.dom.waitFor(selector, options?);
```

Pollt totdat het opgegeven element op de pagina verschijnt (elke 500 ms controleren).

**Parameters:**

| Parameter | Type | Standaard | Beschrijving |
|------|------|--------|------|
| `selector` | `string` | — | CSS-selector (vereist) |
| `options.tabId` | `number` | huidig actief tabblad | Welk tabblad u wilt gebruiken |
| `options.timeout` | `number` | `10000` | Time-out in milliseconden |

**Retourneert `WaitForResult`:**

| Veld | Type | Beschrijving |
|------|------|------|
| `found` | `boolean` | Of het element is gevonden |
| `element` | `object` | Elementinformatie (alleen wanneer `found=true`) |
| `element.selector` | `string` | De overeenkomende selector |
| `element.tag` | `string` | Tagnaam |
| `element.text` | `string` | Tekstinhoud |
| `element.role` | `string` | ARIA-rol |
| `element.type` | `string` | invoertype |
| `element.visible` | `boolean` | Of het zichtbaar is |

## Scriptuitvoering

### executeScript — JavaScript uitvoeren

```javascript
const result = await CAT.agent.dom.executeScript(code, options?);
```

**Parameters:**

| Parameter | Type | Standaard | Beschrijving |
|------|------|--------|------|
| `code` | `string` | — | JavaScript-code (vereist) |
| `options.tabId` | `number` | huidig actief tabblad | Welk tabblad u wilt gebruiken |

> De code wordt altijd uitgevoerd in de **MAIN-wereld** van de pagina (deelt hetzelfde `window`-object als de eigen JS van de pagina), dus het kan de eigen functies van de pagina aanroepen en paginavariabelen rechtstreeks lezen — maar om dezelfde reden **kan het geen toegang krijgen tot de blob-URL's van de extensie** (bv. een `blob:`-URL die u maakt via `URL.createObjectURL()` van de `Blob` die door `CAT.agent.opfs.read` in de `"blob"`-modus wordt geretourneerd), omdat blob-URL's zijn gebonden aan de eigen oorsprong van de extensie. Als u met een blob-URL in een geïsoleerde context moet werken, gebruik dan in plaats daarvan een SkillScript (zie [Skill-ontwikkeling](../skill-dev)).

```javascript
// Roep een eigen JS-functie van de pagina aan / lees een paginavariabele
const data = await CAT.agent.dom.executeScript(
  "return window.__APP_STATE__"
);

// Lees DOM-inhoud
const title = await CAT.agent.dom.executeScript(
  "return document.querySelector('h1')?.textContent"
);
```

> De code wordt voor uitvoering verpakt in `new Function()` en ondersteunt een `return`-waarde. De time-out is 30 seconden.

## DOM-bewaking

Gebruikt het Chrome DevTools Protocol om DOM-wijzigingen en dialooggebeurtenissen op een pagina te bewaken.

### startMonitor — bewaking starten

```javascript
await CAT.agent.dom.startMonitor(tabId);
```

Start de bewaking van het opgegeven tabblad op DOM-wijzigingen en dialoogvensters (alert/confirm/prompt).

### stopMonitor — bewaking stoppen

```javascript
const result = await CAT.agent.dom.stopMonitor(tabId);
```

Stopt de bewaking en retourneert de verzamelde wijzigingen.

**Retourneert `MonitorResult`:**

| Veld | Type | Beschrijving |
|------|------|------|
| `dialogs` | `Array<{ type, message }>` | Lijst van dialoogvensters |
| `addedNodes` | `Array<{ tag, id?, class?, role?, text }>` | Samenvatting van nieuw toegevoegde DOM-knooppunten |

> `addedNodes` wordt op node-ID gededupliceerd en beperkt tot 50 vermeldingen; knooppunten die inmiddels uit de pagina zijn verwijderd of niet zichtbaar zijn, worden automatisch overgeslagen. `text` is gewone tekst uit de `outerHTML` van het knooppunt, afgekapt tot 300 tekens.

### peekMonitor — bewakingsstatus controleren

```javascript
const status = await CAT.agent.dom.peekMonitor(tabId);
```

Controleert niet-destructief de huidige bewakingsstatus.

**Retourneert `MonitorStatus`:**

| Veld | Type | Beschrijving |
|------|------|------|
| `hasChanges` | `boolean` | Of er wijzigingen zijn |
| `dialogCount` | `number` | Aantal dialoogvensters |
| `nodeCount` | `number` | Aantal nieuw toegevoegde knooppunten |

## Volledig voorbeeld

```javascript
// ==UserScript==
// @name        Automatische formulierenvuller
// @match       https://example.com/form
// @grant       CAT.agent.dom
// ==/UserScript==

// Wacht tot het formulier is geladen
await CAT.agent.dom.waitFor("form#signup", { timeout: 5000 });

// Vul het formulier in
await CAT.agent.dom.fill("input[name=username]", "test_user");
await CAT.agent.dom.fill("input[name=email]", "test@example.com");

// Vink het akkoordvakje aan
await CAT.agent.dom.click("input[type=checkbox]#agree");

// Maak een schermafbeelding van het ingevulde formulier
await CAT.agent.dom.screenshot({
  selector: "form#signup",
  saveTo: "screenshots/form-filled.png"
});

// Klik op verzenden
const result = await CAT.agent.dom.click("button[type=submit]", { trusted: true });
if (result.navigated) {
  console.log("Formulier succesvol verzonden, genavigeerd naar:", result.url);
}
```
