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

## Limitazioni CSP / Trusted Types {#csp-trusted-types}

#### Q: Cosa posso fare se la CSP di un sito impedisce a uno script di funzionare?

In ScriptCat, apra **Network Rules** e selezioni **Tools → Network rules → New rule → Remove CSP**. Nel campo **Websites** indichi solo il sito interessato, ad esempio `example.com`. Salvi la regola e aggiorni le pagine già aperte.

Il modello **Remove CSP** rimuove gli header di risposta CSP dai documenti nel frame principale e nei frame secondari. È possibile scegliere anche di rimuovere `X-Frame-Options`.

#### Q: Che cosa significa `This document requires 'TrustedHTML' assignment.`?

Di solito significa che il browser ha rifiutato un'operazione DOM perché il sito applica Trusted Types. Un sito può attivarli con la direttiva CSP `require-trusted-types-for 'script'`; un userscript può causare l'errore se esegue un'operazione non consentita dalla policy. Il browser applica la policy di sicurezza del sito: il messaggio, da solo, non dimostra che il problema sia causato da ScriptCat.

Se la restrizione è imposta da un header CSP nella risposta del documento, una regola **Remove CSP** limitata a quel sito può essere utile. Non garantisce di risolvere l'errore se la causa non è uno degli header di risposta CSP rimossi dalla regola.

#### Q: Perché ScriptCat non rimuove la CSP da tutti i siti per impostazione predefinita?

CSP e Trusted Types aiutano a ridurre rischi come il cross-site scripting (XSS). Rimuovere la CSP indebolisce le protezioni di sicurezza originali dei siti interessati. Crea una regola solo per i siti che ne hanno davvero bisogno. L'ambito **All websites** è disponibile, ma ScriptCat chiede conferma prima di salvarlo.

:::warning Avviso di sicurezza

Eviti l'ambito **All websites** a meno che non comprenda e accetti l'impatto sulla sicurezza.

:::

:::info Informazioni su un problema di compatibilità Trusted Types di ScriptCat

[ScriptCat #1239](https://github.com/scriptscat/scriptcat/issues/1239) includeva anche un problema distinto di compatibilità di `GM_xmlhttpRequest`, corretto in [ScriptCat #1242](https://github.com/scriptscat/scriptcat/pull/1242). La correzione non disattiva né aggira Trusted Types e non modifica la CSP del sito. Aggiorni ScriptCat se usa una versione precedente.

:::

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
CSP e Trusted Types aiutano a ridurre rischi come il cross-site scripting (XSS). Rimuovere la CSP indebolisce le protezioni di sicurezza originali dei siti interessati. Crei una regola solo per i siti che ne hanno davvero bisogno. L'ambito **All websites** è disponibile, ma ScriptCat chiede conferma prima di salvarlo.
