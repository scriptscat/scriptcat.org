---
title: Sviluppare Script con VSCode
---

ScriptCat fornisce un'estensione VSCode che ti permette di scrivere userscript in VSCode. Dopo il salvataggio, le modifiche vengono sincronizzate automaticamente con ScriptCat nel browser.

## Prerequisiti

Devi installare i seguenti due strumenti:

1. **Installa l'estensione ScriptCat nel browser** — Segui la guida [Guida Rapida](/docs/use/use/)
2. **Installa l'estensione ScriptCat in VSCode** — Cerca "[scriptcat-vscode](https://marketplace.visualstudio.com/items?itemName=CodFrm.scriptcat-vscode)" nel marketplace delle estensioni VSCode

## Stabilire la Connessione

Una volta installato, devi connettere l'estensione ScriptCat con VSCode:

1. Clicca sull'icona di ScriptCat nel browser
2. Vai a **Strumenti > Strumenti Sviluppatore**
3. Trova **Connessione automatica al servizio VSCode**, attivala e clicca **Connetti**

## Sincronizzare gli Script

### Opzione 1: Modalità Rilevamento Automatico (Consigliata)

1. In VSCode, premi `Ctrl + Shift + P`
2. Digita e seleziona `scriptcat.autoTarget`
3. Da quel momento, ogni volta che apri o salvi un file `.user.js`, verrà sincronizzato automaticamente

### Opzione 2: Modalità Script Specificato

1. In VSCode, premi `Ctrl + Shift + P`
2. Digita e seleziona `scriptcat.target`
3. Specifica il percorso del file script da sincronizzare

## Flusso di Lavoro

1. Scrivi o modifica il tuo script `.user.js` in VSCode
2. Premi `Ctrl + S` per salvare
3. Lo script viene sincronizzato automaticamente con ScriptCat
4. Passa al browser e aggiorna la pagina

## FAQ

### Cosa fare se non si connette?

- Assicurati che l'estensione ScriptCat sia in esecuzione
- Assicurati che l'estensione VSCode sia installata e abilitata

### Lo script non si aggiorna dopo il salvataggio?

- Assicurati che il nome del file termini con `.user.js`
- Assicurati di aver eseguito il comando `scriptcat.autoTarget` o `scriptcat.target`

### Devo riconnettermi dopo il riavvio di VSCode?

Se "Connessione automatica al servizio VSCode" è abilitato, VSCode si riconnetterà automaticamente dopo un riavvio.
