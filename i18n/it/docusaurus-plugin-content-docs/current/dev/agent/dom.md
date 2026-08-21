---
title: API Manipolazione DOM
---

`@grant CAT.agent.dom`

L'API di manipolazione del DOM fornisce un'automazione completa delle pagine del browser: navigazione, lettura dei contenuti, screenshot, interazione con moduli e monitoraggio del DOM.

## Gestione delle schede

### listTabs — elencare le schede

```javascript
const tabs = await CAT.agent.dom.listTabs();
```

Restituisce informazioni su ogni scheda aperta.

**Restituisce `TabInfo[]`:**

| Campo | Tipo | Descrizione |
|------|------|------|
| `tabId` | `number` | ID della scheda |
| `url` | `string` | URL corrente |
| `title` | `string` | Titolo della pagina |
| `active` | `boolean` | Se è la scheda attiva corrente |
| `windowId` | `number` | ID della finestra a cui appartiene |
| `discarded` | `boolean` | Se è stata scartata (sospesa) |

## Navigazione

### navigate — navigare una pagina

```javascript
const result = await CAT.agent.dom.navigate(url, options?);
```

**Parametri:**

| Parametro | Tipo | Predefinito | Descrizione |
|------|------|--------|------|
| `url` | `string` | — | URL obiettivo (obbligatorio) |
| `options.tabId` | `number` | scheda attiva corrente | Quale scheda usare |
| `options.waitUntil` | `boolean` | `true` | Se attendere che la pagina finisca di caricare |
| `options.timeout` | `number` | `30000` | Timeout in millisecondi |

**Restituisce `NavigateResult`:**

```typescript
{ tabId: number; url: string; title: string }
```

## Lettura dei contenuti

### readPage — leggere il contenuto della pagina

```javascript
const page = await CAT.agent.dom.readPage(options?);
```

Converte il DOM della pagina in testo strutturato, rimuovendo automaticamente elementi irrilevanti come `<script>`, `<style>`, `<noscript>`, `<svg>` e `<link[rel=stylesheet]>`.

**Parametri:**

| Parametro | Tipo | Predefinito | Descrizione |
|------|------|--------|------|
| `options.tabId` | `number` | scheda attiva corrente | Quale scheda usare |
| `options.selector` | `string` | — | Selettore CSS; viene restituito solo il contenuto dell'elemento corrispondente |
| `options.maxLength` | `number` | — | Massimo caratteri; troncato oltre questo |
| `options.removeTags` | `string[]` | — | Nomi di tag aggiuntivi da rimuovere |

**Restituisce `PageContent`:**

| Campo | Tipo | Descrizione |
|------|------|------|
| `title` | `string` | Titolo della pagina |
| `url` | `string` | URL della pagina |
| `html` | `string` | Contenuto testuale della pagina elaborato |
| `truncated` | `boolean` | Se il contenuto è stato troncato |
| `totalLength` | `number` | Lunghezza totale del contenuto originale |

### screenshot — fare uno screenshot

```javascript
const shot = await CAT.agent.dom.screenshot(options?);
```

**Parametri:**

| Parametro | Tipo | Predefinito | Descrizione |
|------|------|--------|------|
| `options.tabId` | `number` | scheda attiva corrente | Quale scheda usare |
| `options.quality` | `number` | `80` | Qualità JPEG (0-100) |
| `options.fullPage` | `boolean` | `false` | Catturare l'intera pagina |
| `options.selector` | `string` | — | Selettore CSS; catturare solo l'area dell'elemento corrispondente |
| `options.saveTo` | `string` | — | Percorso per salvare nello spazio di lavoro OPFS |

**Restituisce `ScreenshotResult`:**

| Campo | Tipo | Descrizione |
|------|------|------|
| `dataUrl` | `string` | URL dati base64 |
| `path` | `string` | Percorso di salvataggio OPFS (quando si usa `saveTo`) |
| `size` | `number` | Dimensione del file (quando si usa `saveTo`) |

```javascript
// Salvare uno screenshot in OPFS
const shot = await CAT.agent.dom.screenshot({
  saveTo: "screenshots/page.png",
  quality: 90
});
console.log(`Salvato in ${shot.path}, dimensione ${shot.size} byte`);
```

## Interazione con la pagina

### click — fare clic su un elemento

```javascript
const result = await CAT.agent.dom.click(selector, options?);
```

**Parametri:**

| Parametro | Tipo | Predefinito | Descrizione |
|------|------|--------|------|
| `selector` | `string` | — | Selettore CSS (obbligatorio) |
| `options.tabId` | `number` | scheda attiva corrente | Quale scheda usare |
| `options.trusted` | `boolean` | `false` | Usare CDP per inviare un evento mouse reale |

**Restituisce `ActionResult`:**

| Campo | Tipo | Descrizione |
|------|------|------|
| `success` | `boolean` | Se ha avuto successo |
| `navigated` | `boolean` | Se il clic ha attivato una navigazione |
| `url` | `string` | Il nuovo URL dopo la navigazione |
| `newTab` | `boolean` | Se è stata aperta una nuova scheda |

**`trusted` vs. un clic normale:**

- `trusted: false` (predefinito) — simula `element.click()` tramite JS iniettato; veloce, ma alcuni siti possono rilevarlo come un evento non genuino
- `trusted: true` — invia un evento mouse reale tramite Chrome DevTools Protocol, indistinguibile dall'interazione reale dell'utente, ma richiede i permessi di debug

### fill — compilare un campo del modulo

```javascript
const result = await CAT.agent.dom.fill(selector, value, options?);
```

**Parametri:**

| Parametro | Tipo | Descrizione |
|------|------|------|
| `selector` | `string` | Selettore CSS (obbligatorio) |
| `value` | `string` | Valore da inserire (obbligatorio) |
| `options.tabId` | `number` | Quale scheda usare |
| `options.trusted` | `boolean` | Usare CDP per simulare l'input da tastiera |

**Comportamento:**
- Modo normale: imposta `element.value` e invia un evento `input`
- Modo trusted: CDP mette a fuoco l'elemento → digita carattere per carattere

### scroll — scorrere la pagina

```javascript
const result = await CAT.agent.dom.scroll(direction, options?);
```

**Parametri:**

| Parametro | Tipo | Descrizione |
|------|------|------|
| `direction` | `"up" \| "down" \| "top" \| "bottom"` | Direzione di scorrimento (obbligatoria) |
| `options.tabId` | `number` | Quale scheda usare |
| `options.selector` | `string` | Scorrere un contenitore specifico invece dell'intera pagina |

**Restituisce `ScrollResult`:**

| Campo | Tipo | Descrizione |
|------|------|------|
| `scrollTop` | `number` | Posizione di scorrimento dopo lo scorrimento |
| `scrollHeight` | `number` | Altezza totale del contenuto |
| `clientHeight` | `number` | Altezza del viewport |
| `atBottom` | `boolean` | Se è ora scorruto fino in fondo |

### waitFor — attendere un elemento

```javascript
const result = await CAT.agent.dom.waitFor(selector, options?);
```

Fa polling per l'elemento specificato che appaia nella pagina (controllando ogni 500ms).

**Parametri:**

| Parametro | Tipo | Predefinito | Descrizione |
|------|------|--------|------|
| `selector` | `string` | — | Selettore CSS (obbligatorio) |
| `options.tabId` | `number` | scheda attiva corrente | Quale scheda usare |
| `options.timeout` | `number` | `10000` | Timeout in millisecondi |

**Restituisce `WaitForResult`:**

| Campo | Tipo | Descrizione |
|------|------|------|
| `found` | `boolean` | Se l'elemento è stato trovato |
| `element` | `object` | Informazioni sull'elemento (solo quando `found=true`) |
| `element.selector` | `string` | Il selettore corrispondente |
| `element.tag` | `string` | Nome del tag |
| `element.text` | `string` | Contenuto testuale |
| `element.role` | `string` | Ruolo ARIA |
| `element.type` | `string` | Tipo di input |
| `element.visible` | `boolean` | Se è visibile |

## Esecuzione degli script

### executeScript — eseguire JavaScript

```javascript
const result = await CAT.agent.dom.executeScript(code, options?);
```

**Parametri:**

| Parametro | Tipo | Predefinito | Descrizione |
|------|------|--------|------|
| `code` | `string` | — | Codice JavaScript (obbligatorio) |
| `options.tabId` | `number` | scheda attiva corrente | Quale scheda usare |

> Il codice viene sempre eseguito nel **mondo MAIN** della pagina (condividendo lo stesso oggetto `window` con il JS della pagina), quindi può chiamare le funzioni della pagina e leggere le variabili direttamente — ma per lo stesso motivo **non può accedere alle URL blob dell'estensione** (ad esempio un URL `blob:` creato con `URL.createObjectURL()` dal `Blob` restituito da `CAT.agent.opfs.read` in modalità `"blob"`), poiché le URL blob sono limitate all'origine dell'estensione. Se devi lavorare con un URL blob in un contesto isolato, usa uno SkillScript (vedi [Sviluppo Skill](../skill-dev)).

```javascript
// Chiamare una funzione JS propria della pagina / leggere una variabile
const data = await CAT.agent.dom.executeScript(
  "return window.__APP_STATE__"
);

// Leggere contenuto del DOM
const title = await CAT.agent.dom.executeScript(
  "return document.querySelector('h1')?.textContent"
);
```

> Il codice viene avvolto in `new Function()` per l'esecuzione e supporta un valore di `return`. Il timeout è di 30 secondi.

## Monitoraggio del DOM

Utilizza Chrome DevTools Protocol per monitorare i cambiamenti del DOM e gli eventi di dialogo in una pagina.

### startMonitor — avviare il monitoraggio

```javascript
await CAT.agent.dom.startMonitor(tabId);
```

Avvia il monitoraggio dei cambiamenti del DOM e dei dialoghi (alert/confirm/prompt) nella scheda specificata.

### stopMonitor — fermare il monitoraggio

```javascript
const result = await CAT.agent.dom.stopMonitor(tabId);
```

Ferma il monitoraggio e restituisce le modifiche raccolte.

**Restituisce `MonitorResult`:**

| Campo | Tipo | Descrizione |
|------|------|------|
| `dialogs` | `Array<{ type, message }>` | Elenco dei dialoghi |
| `addedNodes` | `Array<{ tag, id?, class?, role?, text }>` | Riepilogo dei nodi DOM appena aggiunti |

### peekMonitor — verificare lo stato del monitoraggio

```javascript
const status = await CAT.agent.dom.peekMonitor(tabId);
```

Verifica lo stato corrente del monitoraggio in modo non distruttivo.

**Restituisce `MonitorStatus`:**

| Campo | Tipo | Descrizione |
|------|------|------|
| `hasChanges` | `boolean` | Se ci sono modifiche |
| `dialogCount` | `number` | Numero di dialoghi |
| `nodeCount` | `number` | Numero di nodi appena aggiunti |

## Esempio completo

```javascript
// ==UserScript==
// @name        Riempi-modulo automatico
// @match       https://example.com/form
// @grant       CAT.agent.dom
// ==/UserScript==

// Attendere che il modulo si carichi
await CAT.agent.dom.waitFor("form#signup", { timeout: 5000 });

// Compilare il modulo
await CAT.agent.dom.fill("input[name=username]", "test_user");
await CAT.agent.dom.fill("input[name=email]", "test@example.com");

// Spuntare la casella di accettazione
await CAT.agent.dom.click("input[type=checkbox]#agree");

// Screenshot del modulo compilato
await CAT.agent.dom.screenshot({
  selector: "form#signup",
  saveTo: "screenshots/form-filled.png"
});

// Cliccare invio
const result = await CAT.agent.dom.click("button[type=submit]", { trusted: true });
if (result.navigated) {
  console.log("Modulo inviato con successo, navigato a:", result.url);
}
```
