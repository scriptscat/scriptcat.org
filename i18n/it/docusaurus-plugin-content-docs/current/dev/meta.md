---
title: Blocco Metadati
---

Il contenuto all'interno di `==UserScript==` descrive i permessi di cui uno script ha bisogno, informazioni sullo script, ecc. Si trova all'inizio dello script.

```js
// ==UserScript==
// @name         Nuovo Userscript
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  provare a conquistare il mondo!
// @author       You
// @crontab      * * once * *
// ==/UserScript==
```

## Valori Principali

### name

Nome dello script

### namespace

Namespace dello script. `name + namespace` determina l'unicità dello script.

### version

La versione dello script. Si consiglia di seguire il [versionamento semantico](https://semver.org/), in modo che quando viene rilevato un cambio di versione, venga richiesto all'utente di aggiornare.

### description

Una descrizione dettagliata dello script

### author

Autore dello script

### run-at

Quando lo script viene eseguito

| Valore | Esecuzione | Supportato da |
|---|---|---|
| document-start | Inietta lo script nella pagina non appena l'URL corrisponde nel frontend | v0.3.0 |
| document-end | Inietta lo script dopo che il DOM è stato caricato; script e immagini della pagina potrebbero ancora essere in fase di caricamento | v0.3.0 |
| document-idle | Inietta lo script dopo che tutti i contenuti sono stati caricati | v0.3.0 |
| document-body | Lo script viene iniettato solo quando la pagina ha un elemento `body` | v0.6.2 |
| document-menu | Mostra un menu al clic destro; esegue lo script usando il nome dello script come nome del menu | v0.3.4-v0.9.4 (🔥 rimosso) |

Per le icone del menu, puoi consultare [Simboli Unicode](https://unicode-table.com/en/) ed [emoji](https://www.emojiall.com/en-US/).

### run-in

Specifica l'ambiente in cui viene iniettato lo script: `@run-in normal-tabs` per le schede normali, `@run-in incognito-tabs` per le schede in incognito.

### early-start (v1.1.0+)

Quando `run-at` è `document-start`, lo script viene eseguito il prima possibile, ma non si può garantire che si carichi più velocemente della pagina.

Una volta definito `@run-in document-start`, puoi aggiungere `@early-start` per far caricare lo script più velocemente della pagina: [esempio](https://github.com/scriptscat/scriptcat/blob/main/example/early-start.js)

### inject-into

:::tip

Nell'ambiente content-script (`content`), `unsafeWindow` punta solo al proprio `window` attuale dell'ambiente e non può accedere al `window` della pagina.

ScriptCat non supporta il controllo automatico delle restrizioni CSP per decidere se iniettare come `content` o `page` (cioè `@inject-into auto` di Tampermonkey).

:::

Specifica dove viene iniettato lo script, supportando `page` e `content`, con `page` come predefinito.

- `page`: lo script viene iniettato nell'ambiente della pagina e può usare `unsafeWindow` per accedere al `window` e `DOM` della pagina
- `content`: lo script viene iniettato nell'ambiente content-script, non può accedere direttamente all'oggetto `window` della pagina, ma può accedere al `DOM` della pagina e non è soggetto a `CSP`

### storageName 🧪

Lo spazio di archiviazione per `Value`; i dati sotto lo stesso `storageName` possono essere condivisi e comunicati tra script. Specifico di ScriptCat.

### background

Contrassegna questo script come script di background, che deve essere eseguito nell'ambiente di background. Vedi [Script di Background](./background.md#background-script-background) per i dettagli.

### crontab

Contrassegna lo script come script pianificato, che richiede un valore di espressione cron. Può esistere solo un'espressione cron e viene eseguita secondo quella pianificazione nell'ambiente di background. Vedi [Script Pianificato](./background.md#scheduled-script-crontab) per i dettagli.

### match

Solo le URL che corrispondono a `match` eseguiranno lo script, seguendo i [Pattern di Corrispondenza](https://developer.chrome.com/docs/extensions/v3/match_patterns/). In `match`, `*` è un carattere jolly, `tld` corrisponde al dominio di livello superiore, e un dominio che inizia con `*.` corrisponderà anche a `xxx.com`:

| Valore | Esempi corretti | Esempi errati |
|---|---|---|
| `http://scriptcat.org/doc/match` | `http://scriptcat.org/doc/match` | `http://scriptcat.org/doc/runAt` |
| `*://*/param?*` | `https://scriptcat.org/param` \| `http://scriptcat.org/param?search=tampermonkey` | `https://scriptcat.org/test/param` |
| `http*://scriptcat.org/*` | `https://scriptcat.org/` \| `https://scriptcat.org/doc` | `https://doc.scriptcat.org/` |

### include

Supporta `*` per la corrispondenza fuzzy, permettendo URL non standard

### exclude

URL che non dovrebbero corrispondere; usa la stessa sintassi di `include`

### grant

Richiede il permesso API — un'API può essere chiamata solo una volta che è stata richiesta. Vedi la lista dei permessi in: [Documentazione API](./api.md) e [Documentazione CAT API](./cat-api.md).

Due valori speciali:

- **none**: lo script non viene eseguito nell'ambiente sandbox, ma direttamente nell'ambiente della pagina. In questo ambiente, non sono disponibili le API GM, ma l'oggetto `window` della pagina può essere accessed direttamente.
- **unsafeWindow**: nell'ambiente sandbox, se hai bisogno di accedere all'oggetto `window` della pagina, usa `unsafeWindow`. (Tampermonkey non richiede di dichiararlo — è mantenuto solo per compatibilità.)

### connect

Richiede il permesso di accesso per un sito; vedi `GM_cookie` e `GM_xmlhttpRequest`. `GM_download` in modalità `native` riconosce anche `@connect` (gli host non dichiarati attivano una conferma).

### resource

Include un file risorsa. Dopo aver dichiarato `@resource`, puoi usare `GM_getResourceText`/`GM_getResourceURL` per recuperare le informazioni.

```js
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico
// @resource html https://bbs.tampermonkey.net.cn/
// @resource xml https://bbs.tampermonkey.net.cn/sitemap.xml
// Aggiungere verifica integrità risorsa
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico#md5-xxx,sha256-xxx
```

### require

Include un file JS esterno; supporta la [verifica integrità risorsa](#verifica-integrità-risorsa)

### require-css

Include un file CSS esterno; supporta la [verifica integrità risorsa](#verifica-integrità-risorsa)

### noframes

Contrassegna lo script per non essere eseguito all'interno di un `<frame>`

### definition

L'indirizzo di riferimento di un file `.d.ts`, abilitando i suggerimenti di autocompletamento dell'editor

### antifeature

Questo è collegato al marketplace degli script; le funzionalità indesiderate devono essere contrassegnate con questo valore di descrizione:

```js
// @antifeature ads Questo script ha pubblicità
// @antifeature referral-link Questo script modifica o reindirizza al link di riferimento dell'autore
```

## Valori di Descrizione Aggiuntivi

### license

La licenza open-source dello script attuale

### updateURL

La verifica degli aggiornamenti richiede che lo script remoto abbia un tag `@version`.

Il link che lo script usa per verificare gli aggiornamenti; se non impostato, per impostazione predefinita è `user.js => meta.js` del link, o il link attuale se non c'è `user.js`.

Se `@updateURL` è configurato, anche `@downloadURL` deve essere configurato affinché `@updateURL` funzioni.

### downloadURL

L'indirizzo di download per l'aggiornamento dello script

### supportURL

Sito di supporto, pagina di segnalazione bug

### homepage, homepageURL, website

Homepage dello script

### source

Pagina del codice sorgente dello script

### icon, iconURL, defaulticon

Icona dello script

### icon64, icon64URL

Icona dello script 64x64

### Note

### Verifica Integrità Risorsa

- Usa md5, sha1, sha256, sha384 o sha512 per verificare che le risorse non siano state manomesse. Più metodi di verifica possono essere separati con `;` o `,`.
- Secondo i [recomandazioni W3C](https://w3c.github.io/webappsec-subresource-integrity/#hash-collision-attacks), md5 e sha1 non sono raccomandati; usa sha384 o un algoritmo hash più forte.

Esempio:

```js
// @require https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js#md5-d55836f30c097da753179f82fa6f108f,sha256-a476ab8560837a51938aa6e1720c8be87c2862b6221690e9de7ffac113811a90
```
