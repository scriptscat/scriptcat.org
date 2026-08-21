---
title: Script di Background
---

Gli script di background sono adatti a script che devono continuare a eseguire in modo continuo. Gli script di background sono un tipo di script specifico di ScriptCat; vengono eseguiti in una sandbox e non possono accedere al DOM. Possono essere sviluppati utilizzando le stesse GM API di Tampermonkey, e le note di compatibilità sono indicate nella documentazione.

## Script di Background (`@background`) {#background-script-background}

Uno script di background viene dichiarato con l'attributo `@background`. Permette allo script di continuare a eseguire in background dopo che lo script è abilitato o il browser si avvia.

## Script Pianificato (`@crontab`) {#scheduled-script-crontab}

> Uno script pianificato è un tipo di script di background adatto a compiti che devono **eseguirsi ripetutamente su un ciclo temporale**.

Uno script pianificato viene dichiarato con l'attributo `@crontab`. Supporta la pianificazione a livello di minuti e secondi, e fornisce la sintassi estesa di ScriptCat `once` / `once(...)` per evitare l'esecuzione più di una volta all'interno dello stesso ciclo temporale.

⚠️ Note:

* In un singolo script, **solo il primo `@crontab` ha effetto**
* Si consiglia che il **tempo di esecuzione singolo + tempo di retry** non superi l'intervallo di cron, altrimenti le esecuzioni possono sovrapporsi

## Note sulle Espressioni Cron

L'implementazione di cron di ScriptCat si basa su [**node-cron**](https://github.com/kelektiv/node-cron/), con una piccola estensione rispetto alla sintassi cron standard.

### Formato dell'Espressione

#### Formato standard a 5 campi (Consigliato)

```text
minuto ora giorno mese giorno_settimana
```

#### Formato esteso a 6 campi (Non consigliato)

```text
secondo minuto ora giorno mese giorno_settimana
```

> ⚠️ Il formato a 6 campi non è consigliato
> Gli ambienti del browser non possono garantire precisione al secondo e aumentano l'overhead di prestazioni.

### Sintassi Disponibile per Campo

| Sintassi | Significato | Esempio |
|---|---|---|
| `*` | Qualsiasi valore | `*` (ogni minuto/ora) |
| number | Valore specifico | `5` (il quinto minuto) |
| `a,b,c` | Più valori discreti | `1,15,30` |
| `a-b` | Intervallo continuo | `10-23` |
| `*/n` | Ogni n unità | `*/5` |
| `a-b/n` | Intervallo con passo | `10-50/10` |

#### Regole del Giorno della Settimana

* `1–6`: Lunedì a Sabato
* `0` o `7`: Domenica

## La Sintassi Estesa `once`

### Cosa Significa `once`

Usare `once` in un'espressione cron significa:

> **All'interno del ciclo temporale attuale, consentire solo un'esecuzione riuscita**

Anche se punti temporali successivi all'interno dello stesso ciclo corrispondono ancora alla regola cron, lo script non verrà eseguito di nuovo.

### `once` vs. `once(...)`

| Sintassi | Valore cron sottostante | Descrizione |
|---|---|---|
| `once` | `*` (qualsiasi valore) | Viene eseguito alla prima corrispondenza all'interno del ciclo, senza un tempo specifico |
| `once(expr)` | `expr` | Viene eseguito solo nei tempi che corrispondono a `expr` all'interno del ciclo, e solo una volta |

### La Posizione di `once` = il Ciclo Temporale che Limita

Dove viene posizionato `once` / `once(...)`, significa "eseguire solo una volta all'interno di quella granularità temporale".

| Posizione di `once` | Comportamento |
|---|---|
| Campo minuto | Esegui solo una volta al minuto |
| Campo ora | Esegui solo una volta all'ora |
| Campo giorno | Esegui solo una volta al giorno |
| Campo mese | Esegui solo una volta al mese |
| Campo giorno settimana | Esegui solo una volta alla settimana |

## Esempi di `@crontab`

### Comuni

```js
//@crontab * * * * *        // una volta al minuto
//@crontab * * * * * *      // una volta al secondo (non consigliato)
//@crontab 0 */6 * * *      // ogni 6 ore al minuto 0
//@crontab 15 */6 * * *     // ogni 6 ore al minuto 15
//@crontab * once * * *     // al massimo una volta all'ora
//@crontab * * once * *     // al massimo una volta al giorno
//@crontab * 10 once * *    // solo una volta all'interno dell'ora 10:00 ogni giorno
//@crontab * */4 once * *   // al massimo una volta ogni 4 ore ogni giorno
```

### Avanzati

```js
//@crontab * 1,3,5 once * *       // una volta alle 1:00, 3:00 o 5:00 ogni giorno
//@crontab * 10-23 once * *       // una volta tra le 10:00 e le 23:59 ogni giorno
//@crontab * once 13 * *          // una volta all'ora il 13 di ogni mese
//@crontab * once(9-17) * * *     // una volta all'ora tra le 9:00 e le 17:00 ogni giorno
//@crontab 0,30 once * * *        // il minuto 0 o 30 viene corrisposto per primo ogni ora; nessuna ripetizione quell'ora
//@crontab * 9-18 once * *        // solo una volta tra le 9:00 e le 18:00 ogni giorno
```

## Raccomandazioni di Utilizzo

### Buoni Utilizzi per `once`

* Compiti che **devono essere eseguiti solo una volta** al giorno/ora
* Script di verifica stato, sincronizzazione e reportistica

### Non Consigliato per `once`

* Compiti che devono essere eseguiti in un momento preciso
* Script il cui tempo di esecuzione può superare significativamente l'intervallo di cron

## Testare le Espressioni Cron

Quando si testa un'espressione cron, **sostituire temporaneamente `once` / `once(...)` con il valore sottostante**:

* `once` → `*`
* `once(expr)` → `expr`

Strumenti consigliati:

* [crontab.guru](https://crontab.guru/)
* [tool.lu cron calculator](https://tool.lu/crontab/)

## Log

Nella pagina dell'elenco degli script, passando il mouse sulla `colonna dello stato di esecuzione` viene mostrato un tooltip con lo stato di esecuzione dello script;
cliccando viene mostrato il contenuto del log stampato tramite `GM_log`.

![](@site/docs/dev/background.assets/image-20210621214143661.png)

![](@site/docs/dev/background.assets/image-20210621214124685.png)

## Debug degli Script

Gli script di background possono essere debuggati direttamente dalla pagina dell'editor degli script, ma ha queste limitazioni:

* `value` non si sincronizza correttamente
* I menu `registerMenu` non si attivano correttamente

![](@site/docs/dev/background.assets/image-20210903141601057.png)

Per fare il debug dell'ambiente di esecuzione reale, abilita la **Modalità Sviluppatore** nelle impostazioni dell'estensione, poi apri la pagina `background.html` dell'estensione per fare il debug.

Gli errori durante l'esecuzione possono essere visualizzati anche nel log di esecuzione.

![image-20210903144155450](@site/docs/dev/background.assets/image-20210903144155450.png)

## Promise

Il seguente pattern è fortemente consigliato, poiché permette anche al gestore degli script di monitorare l'esecuzione.
Se lo script esegue qualsiasi operazione asincrona, **deve restituire un `Promise`**.

```ts
// ==UserScript==
// @name         Script di Background
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @background
// ==/UserScript==
return new Promise((resolve, reject) => {
  if (Math.round((Math.random() * 10) % 2)) {
    resolve("ok");
  } else {
    reject("error");
  }
});
```

```js
// ==UserScript==
// @name         Script pianificato che si esegue una volta al giorno
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @crontab      * * once * *
// ==/UserScript==
return new Promise((resolve, reject) => {
  if (Math.round((Math.random() * 10) % 2)) {
    resolve("ok");
  } else {
    reject("error");
  }
});
```

```js
// ==UserScript==
// @name         Chiamare un'API
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @crontab      * * once * *
// ==/UserScript==
return new Promise((resolve, reject) => {
  GM_xmlhttpRequest({
    url: "https://bbs.tampermonkey.net.cn/",
    onload() {
      resolve("ok");
    },
    onerror() {
      reject("error");
    },
  });
});
```

Assicurati di chiamare `resolve` / `reject` solo dopo che la logica dello script sia veramente terminata.
Una volta chiamato, il gestore considera l'esecuzione dello script completata, e qualsiasi operazione GM successiva non avrà più effetto.

## Retry di Errore

Gli script di background di ScriptCat supportano il retry di errore.
Quando uno script fallisce, può fare `reject` con un `CATRetryError` per attivare un retry.

* Intervallo minimo di retry: 5 secondi
* Evita conflitti con il proprio tempo di esecuzione dello script, altrimenti possono verificarsi esecuzioni duplicate

```js
// ==UserScript==
// @name         Esempio di retry
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  provare a conquistare il mondo!
// @author       You
// @crontab      * * once * *
// @grant        GM_notification
// ==/UserScript==

return new Promise((resolve, reject) => {
  GM_notification({
    title: "retry",
    text: "Riprova tra 10 secondi",
  });
  reject(new CATRetryError("xxx error", 10));
});
```
