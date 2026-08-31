---
title: Esecuzione cloud
---

> Sono forniti diversi modi per eseguire nel cloud; consultare [Ambienti di esecuzione](#running-environments) per i dettagli. Inoltre, [CloudCat](https://github.com/scriptscat/cloudcat) è un servizio per eseguire script di background nel cloud — una piattaforma FAAS ancora in fase di sviluppo.

⚠ Si prega di notare ⚠, una volta caricato nel cloud, il significato di `once` in un'espressione di script pianificato cambia: il tempo prima di `once` viene sostituito con il suo valore minimo durante l'esecuzione.

Ad esempio:

* `* * once * *` => `0 0 * * *`: si esegue una volta al giorno, diventa esecuzione alle 00:00 ogni giorno
* `* 1-23 once * *` => `0 1 * * *`: si esegue una volta tra le 1:00 e le 23:00 ogni giorno, diventa esecuzione alle 01:00 ogni giorno
* `* 1,3,5 once * *` => `0 1 * * *`: si esegue una volta alle 1:00, 3:00 o 5:00 ogni giorno, diventa esecuzione alle 01:00 ogni giorno
* `* */4 once * *` => `0 0 * * *`: si esegue una volta ogni 4 ore ogni giorno, diventa esecuzione alle 00:00 ogni giorno
* `* 1-23/4 once * *` => `0 1 * * *`: si esegue una volta ogni 4 ore tra le 1:00 e le 23:00 ogni giorno, diventa esecuzione alle 01:00 ogni giorno
* `* 10 once * *` => `0 10 * * *`: si esegue una volta alle 10:00 ogni giorno, diventa esecuzione al minuto 00 dell'ora 10 ogni giorno
* `* * * once *` => `0 0 1 * *`: si esegue una volta al mese, diventa esecuzione alle 00:00 il giorno 1 di ogni mese

## Valori aggiuntivi della descrizione CloudCat

Uno script di riferimento: [Bilibili Auto Check-in](https://scriptcat.org/script-show-page/48)

### cloudCat

Dichiarare questo attributo consente allo script di essere eseguito tramite `CloudCat`. Una volta che uno script ha questa opzione, appare un pulsante di esecuzione cloud nell'elenco degli script; facendo clic si può scegliere un metodo di esecuzione — consultare [Ambienti di esecuzione](#running-environments).

![image-20220203225847694](@site/docs/dev/cloudcat.assets/image-20220203225847694.png)

### cloudServer

> Relativo a cloudCat, non ancora implementato

L'indirizzo del server cloudCat predefinito

### exportValue

Descrive i Values da esportare nel cloud; sono consentite dichiarazioni multiple.

```ts
// @exportValue key1,key2,key3
// @exportValue key4,key5,key6
```

### exportCookie

Descrive i cookie da esportare nel cloud; sono consentite dichiarazioni multiple. I parametri vengono descritti usando `CookieDetails` di `GM_cookie`, ad esempio:

```ts
// Il seguente esporta il cookie denominato cookie1 da https://docs.scriptcat.org/docs/use/
// @exportCookie url=https://docs.scriptcat.org/docs/use;name=cookie1

// Questo esporta tutti i cookie del dominio scriptcat.org
// @exportCookie domain=scriptcat.org

// Tutti i parametri disponibili:
// @exportCookie domain=scriptcat.org;url=https://docs.scriptcat.org/docs/use;name=cookie1;path=/docs/use;secure=true;session=true
```

## Modifiche al supporto API
> Attualmente sono supportate solo le seguenti API; a meno che non sia indicato diversamente, si comportano come l'API originale.

### GM_xmlhttpRequest


### GM_notification


### GM_log

### GM_getValue

Attualmente supporta solo l'ottenimento di Values esportati tramite `@exportValue`; i metodi set/delete/list e altri non sono supportati.

## Ambienti di esecuzione {#running-environments}

### Locale

Esporta un pacchetto zip; dopo averlo estratto in una cartella, eseguire i seguenti comandi per eseguirlo localmente (richiede un ambiente Node.js locale):

```bash
npm i
node index.js
```


### Tencent Cloud

Prima crea una chiave Tencent Cloud in [**Access Keys**](https://console.cloud.tencent.com/cam/capi) — se usi un sotto-account, assicurati di concedergli i permessi Cloud Function. Poi abilita il servizio in [**Function Service**](https://console.cloud.tencent.com/scf/list), che include una certa quantità di utilizzo gratuito ogni mese. La regione predefinita è Shanghai; aggiustala se necessario. Dopo aver cliccato upload, viene creato automaticamente un trigger pianificato basato su `@crontab` per eseguire la funzione according allo schedule.

![image-20220203224956248](@site/docs/dev/cloudcat.assets/image-20220203224956248.png)
