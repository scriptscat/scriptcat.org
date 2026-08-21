---
title: Domande Frequenti
---

## Modalità Sviluppatore / Permessi degli Script Utente

#### Q: ScriptCat mostra "Modalità sviluppatore non abilitata" e gli script non si eseguono?

A partire da Chrome 120+ e versioni più recenti di Edge, i browser richiedono agli utenti di abilitare manualmente i permessi. Consulta [Abilita Supporto Script Utente](/docs/use/open-dev/).

Se già abilitato ma l'avviso persiste, prova a riavviare il browser o ricaricare l'estensione.

## Script Non Funzionano

#### Q: Ho installato uno script ma non ha effetto?

1. **"Consenti Script Utente" non abilitato** — Vedi [Abilita Supporto Script Utente](/docs/use/open-dev/)
2. **Avvio a freddo** — Gli script potrebbero non caricarsi immediatamente quando il browser si apre per la prima volta. Prova ad aggiornare la pagina
3. **Conflitti di estensioni** — I blocchi pubblicitari (es. uBlock Origin) possono causare errori di script

#### Q: Lo script funziona in Tampermonkey ma non in ScriptCat?

ScriptCat e Tampermonkey hanno alcune differenze nell'implementazione delle API. Aggiorna all'ultima versione. Se il problema persiste, invia un Issue su [GitHub](https://github.com/scriptscat/scriptcat/issues).

## Problemi di Sincronizzazione Cloud

> Per l'uso base della sincronizzazione, vedi [Sincronizzazione e Backup](/docs/use/sync/).

#### Q: Problemi con OneDrive / Google Drive / WebDAV?

1. **Script eliminati riappaiono** — Assicurati che "sincronizzazione eliminazioni" sia abilitata su tutti i dispositivi

## Problemi di Installazione Script

> Per installare gli script, vedi [Installa Script](/docs/use/script_installation/).

## Problemi di Autorizzazione Cookie

#### Q: GM_cookie non riesce a ottenere i cookie?

1. **Popup di autorizzazione non appare** — Assicurati che `GM_cookie` sia dichiarato correttamente in `@grant` dello script, e usa `@connect` per dichiarare i domini da accedere

## Perdita Dati Script

#### Q: Tutti gli script sono spariti aprendo il browser?

1. **Ritardo di inizializzazione** — ScriptCat potrebbe ancora caricare dati all'avvio del browser. Attendi qualche secondo o riavvia il browser
2. **Software di pulizia** — Strumenti come 360 Security Guard o CCleaner possono cancellare i dati delle estensioni. Escludi i dati delle estensioni del browser nelle impostazioni di pulizia
3. **Backup regolari consigliati** — Usa la funzione di esportazione o [sincronizzazione cloud](/docs/use/sync/) per eseguire backup regolari
