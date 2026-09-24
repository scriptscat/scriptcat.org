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

## CSP- en Trusted Types-beperkingen {#csp-trusted-types}

#### Q: Wat kan ik doen als de CSP van een website een script blokkeert?

Open in ScriptCat **Network Rules** en kies **Tools → Network rules → New rule → Remove CSP**. Vul bij **Websites** alleen de website in waar het probleem optreedt, bijvoorbeeld `example.com`. Sla de regel op en vernieuw reeds geopende pagina's.

De sjabloon **Remove CSP** verwijdert CSP-responsheaders van documenten in het hoofdframe en subframes. U kunt ook kiezen om `X-Frame-Options` te verwijderen.

#### Q: Wat betekent `This document requires 'TrustedHTML' assignment.`?

Meestal heeft de browser een DOM-bewerking geweigerd omdat de website Trusted Types afdwingt. Een website kan dit inschakelen met de CSP-richtlijn `require-trusted-types-for 'script'`; een userscript kan deze fout veroorzaken als het een niet-toegestane bewerking uitvoert. De browser handhaaft het beveiligingsbeleid van de website; deze melding alleen bewijst niet dat ScriptCat het probleem veroorzaakt.

Als een afdwingende CSP-responsheader van het document de beperking veroorzaakt, kan een **Remove CSP**-regel voor alleen die website helpen. De regel lost de fout niet gegarandeerd op als de oorzaak geen verwijderbare CSP-responsheader is.

#### Q: Waarom verwijdert ScriptCat CSP niet standaard voor alle websites?

CSP en Trusted Types helpen risico's zoals cross-site scripting (XSS) te beperken. Het verwijderen van CSP verzwakt de bestaande beveiliging van de overeenkomende website. Maak alleen regels voor websites waar dit echt nodig is. De scope **All websites** is beschikbaar, maar ScriptCat vraagt om bevestiging voordat deze wordt opgeslagen.

:::warning Beveiligingswaarschuwing

Gebruik **All websites** niet tenzij u de gevolgen voor de beveiliging begrijpt en accepteert.

:::

:::info Over een Trusted Types-compatibiliteitsprobleem in ScriptCat

[ScriptCat #1239](https://github.com/scriptscat/scriptcat/issues/1239) bevatte ook een afzonderlijk compatibiliteitsprobleem met `GM_xmlhttpRequest`; dat is opgelost in [ScriptCat #1242](https://github.com/scriptscat/scriptcat/pull/1242). Die oplossing schakelt Trusted Types niet uit of omzeilt ze niet, en wijzigt de CSP van een website niet. Werk ScriptCat bij als u een oudere versie gebruikt.

:::

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
