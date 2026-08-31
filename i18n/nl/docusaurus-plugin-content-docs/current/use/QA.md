---
title: Veelgestelde vragen
---

## Ontwikkelaarsmodus / gebruikersscriptmachtigingen

#### V: ScriptCat toont "Ontwikkelaarsmodus niet ingeschakeld" en scripts draaien niet?

Vanaf Chrome 120+ en nieuwere Edge-versies vereisen browsers dat gebruikers handmatig machtigingen inschakelen om scripts uit te voeren. Raadpleeg [Ondersteuning voor gebruikersscripts in de browser inschakelen](/docs/use/open-dev/) voor installatie-instructies.

Als het al is ingeschakeld maar de waarschuwing blijft verschijnen, probeer dan je browser opnieuw te starten of de extensie opnieuw te laden.

## Scripts werken niet

#### V: Een script geïnstalleerd maar het heeft geen effect?

1. **"Gebruikersscripts toestaan" niet ingeschakeld** — Zie [Ondersteuning voor gebruikersscripts in de browser inschakelen](/docs/use/open-dev/)
2. **Koude start** — Scripts laden mogelijk niet onmiddellijk wanneer de browser voor het eerst wordt geopend. Probeer de pagina te verversen
3. **Extensieconflicten** — Adblockers (bijv. uBlock Origin) kunnen scriptfouten veroorzaken

#### V: Script werkt in Tampermonkey maar niet in ScriptCat?

ScriptCat en Tampermonkey hebben enkele verschillen in API-implementatie. Update naar de nieuwste versie. Als het probleem aanhoudt, dien dan een Issue in op [GitHub](https://github.com/scriptscat/scriptcat/issues).

## Cloudsync-problemen

> Voor basisgebruik van synchronisatie, zie [Synchronisatie en back-up](/docs/use/sync/).

#### V: Problemen met OneDrive / Google Drive / WebDAV-synchronisatie?

1. **Verwijderde scripts verschijnen opnieuw** — Zorg dat "verwijderingssynchronisatie" op alle apparaten is ingeschakeld

## Problemen met scriptinstallatie

> Voor het installeren van scripts, zie [Scripts installeren](/docs/use/script_installation/).

## Problemen met cookie-autorisatie

#### V: GM_cookie kan geen cookies ophalen?

1. **Autorisatiepop-up verschijnt niet** — Zorg dat `GM_cookie` correct is gedeclareerd in de `@grant` van het script, en gebruik `@connect` om de domeinen te declareren waartoe toegang nodig is

## Verlies van scriptgegevens

#### V: Alle scripts verdwenen na het openen van de browser?

1. **Initialisatievertraging** — ScriptCat is mogelijk nog bezig met het laden van gegevens wanneer de browser start. Wacht enkele seconden of herstart de browser
2. **Opschoningssoftware** — Tools zoals 360 Security Guard of CCleaner kunnen extensiegegevens wissen. Sluit browserextensiegegevens uit in de opschooninstellingen
3. **Regelmatige back-ups aanbevolen** — Gebruik de exportfunctie of [cloudsync](/docs/use/sync/) om scripts en instellingen regelmatig te back-uppen
