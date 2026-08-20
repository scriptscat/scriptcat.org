---
title: Scripts ontwikkelen met VSCode
---

ScriptCat biedt een VSCode-extensie waarmee je gebruikersscripts in VSCode kunt schrijven. Na het opslaan worden wijzigingen automatisch gesynchroniseerd naar ScriptCat in de browser — geen handmatig kopiëren en plakken meer, wat de ontwikkelingsproductiviteit enorm verhoogt.

## Vereisten

Je moet de volgende twee tools installeren:

1. **Installeer de ScriptCat-extensie in je browser** — Als je deze nog niet hebt geïnstalleerd, volg dan de [Snel starten](/docs/use/use/)-gids
2. **Installeer de ScriptCat-extensie in VSCode** — Zoek naar "[scriptcat-vscode](https://marketplace.visualstudio.com/items?itemName=CodFrm.scriptcat-vscode)" in de VSCode-extensiemarktplaats, of download het vanuit de [GitHub-repository](https://github.com/scriptscat/scriptcat-vscode)

## Een verbinding tot stand brengen

Na installatie moet je de ScriptCat-extensie in je browser verbinden met VSCode:

1. Klik op het ScriptCat-pictogram in je browser om het beheerpaneel te openen
2. Ga naar **Extra > Ontwikkelaarstools**
3. Zoek **Automatisch verbinden met VSCode-service**, schakel dit in en klik op **Verbinding maken**

Eenmaal verbonden, wordt een realtime kanaal tot stand gebracht tussen VSCode en ScriptCat.

## Scripts synchroniseren

Na het tot stand brengen van de verbinding kun je een van de twee manieren kiezen om scripts te synchroniseren:

### Optie 1: Automatische detectiemodus (aanbevolen)

1. Druk in VSCode op `Ctrl + Shift + P` (`Cmd + Shift + P` op Mac) om het opdrachtpalet te openen
2. Typ en selecteer `scriptcat.autoTarget`
3. Vanaf dat moment wordt elk `.user.js`-bestand dat je opent of opslaat automatisch gesynchroniseerd naar ScriptCat

### Optie 2: Gespecificeerde scriptmodus

1. Druk in VSCode op `Ctrl + Shift + P` (`Cmd + Shift + P` op Mac) om het opdrachtpalet te openen
2. Typ en selecteer `scriptcat.target`
3. Geef het pad van het scriptbestand op om te synchroniseren

## Ontwikkelingsworkflow

Zodra ingesteld, is de ontwikkelingsworkflow heel eenvoudig:

1. Schrijf of bewerk je `.user.js`-script in VSCode
2. Druk op `Ctrl + S` om het bestand op te slaan
3. Het script wordt automatisch gesynchroniseerd naar ScriptCat in de browser
4. Schakel over naar de browser en ververs de pagina om het resultaat te zien

Het hele proces vereist geen handmatige stappen — opslaan wordt onmiddellijk van kracht.

## FAQ

### Wat als het geen verbinding kan maken?

- Zorg dat de ScriptCat-extensie in je browser actief is
- Zorg dat de ScriptCat-extensie in VSCode is geïnstalleerd en ingeschakeld
- Controleer de verbindingsstatus op de pagina "Ontwikkelaarstools" in het ScriptCat-beheerpaneel

### Het script wordt niet bijgewerkt na opslaan?

- Zorg dat de bestandsnaam eindigt op `.user.js`
- Zorg dat je de opdracht `scriptcat.autoTarget` of `scriptcat.target` hebt uitgevoerd
- Controleer het VSCode-uitvoerpaneel op foutmeldingen

### Moet ik opnieuw verbinden na het herstarten van VSCode?

Als "Automatisch verbinden met VSCode-service" is ingeschakeld, zal VSCode automatisch opnieuw verbinden na een herstart — geen handmatige stappen nodig.
