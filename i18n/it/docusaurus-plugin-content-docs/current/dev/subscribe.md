---
title: Modalità di iscrizione
---

Il file deve iniziare con `UserSubscribe` invece di `UserScript`. Il link di installazione deve usare l'estensione `user.sub.js` e deve essere un link `https`.

Uno script di iscrizione mostra solo la finestra di installazione per consentire all'utente di confermare l'iscrizione al momento dell'installazione; gli aggiornamenti successivi sono silenziosi, e la finestra di aggiornamento viene mostrata di nuovo solo se il permesso `connect` cambia.

Un singolo script di iscrizione può descrivere i link di installazione per più script. Gli script installati tramite la modalità di iscrizione vengono installati silenziosamente, senza finestra di conferma, e gli script installati rimangono nell'elenco degli script — ma il loro permesso `connect` usa il `connect` dichiarato nell'iscrizione invece del permesso `connect` dello script stesso.

```js
// ==UserSubscribe==
// @name         xxx
// @description  Iscriviti alla serie di script xxx
// @version      0.1.0
// @author       You
// @connect      www.baidu.com
// @scriptUrl    https://script.tampermonkey.net.cn/48.user.js
// @scriptUrl    https://script.tampermonkey.net.cn/49.user.js
// ==/UserSubscribe==
```

## Aggiornamenti dell'iscrizione e aggiornamenti degli script

Secondo l'`intervallo di aggiornamento` configurato dall'utente, ScriptCat controlla periodicamente il link dell'iscrizione per gli aggiornamenti; `version` deve essere configurato affinché questo funzioni.

Ogni aggiornamento o modifica dell'iscrizione confronta i link degli script con gli attualmente installati: gli script non più presenti nella nuova iscrizione vengono rimossi, e gli script appena aggiunti vengono installati silenziosamente. Gli aggiornamenti degli script seguono la `version` dello script stesso, usando la stessa logica di aggiornamento di uno script normalmente installato.

## Installazione e aggiornamento silenziosi

Gli script iscritti vengono installati e aggiornati silenziosamente — aggiungere, rimuovere o aggiornare uno script da un'iscrizione mostra solo una notifica, senza richiedere la conferma dell'utente di nuovo. A causa di questo meccanismo di aggiornamento silenzioso, si prega di iscriversi solo a fonti di cui si ha fiducia.

## metadata

Il significato di certi campi metadata cambia all'interno di uno script di iscrizione.

### name

Il nome dell'iscrizione (può essere modificato direttamente nell'elenco delle iscrizioni)

### description

La descrizione dell'iscrizione, che descrive a cosa serve l'iscrizione

### version

La versione dell'iscrizione. Se omessa, gli aggiornamenti vengono invece attivati in base al fatto che il contenuto dello script di iscrizione sia cambiato o meno.

### connect

Richiede il permesso di accesso a un sito; consultare `GM_cookie` e `GM_xmlhttpRequest`. Per gli script installati tramite la modalità di iscrizione, `connect` viene sovrascritto dal `connect` dell'iscrizione.

### scriptUrl

I link di installazione degli script richiesti dall'iscrizione
