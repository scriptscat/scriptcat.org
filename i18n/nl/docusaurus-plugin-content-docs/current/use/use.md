---
slug: /use/use
title: Snel starten
---

ScriptCat is een browserextensie die gebruikersscripts kan uitvoeren, compatibel is met Tampermonkey-scripts en meer functies biedt. Als je bugs vindt of suggesties hebt, kun je de [GitHub-repo](https://github.com/scriptscat/scriptcat) bezoeken om feedback te geven.

## Extensie installeren

Je kunt de extensie installeren vanuit de volgende extensiewinkels:

| Browser         | Winkellink                                                                                                                                                                                                                                     | Status         |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Chrome          | [Stabiele versie](https://chrome.google.com/webstore/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf) [Bètaversie](https://chromewebstore.google.com/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/jaehimmlecjmebpekkipmpmbpfhdacom?authuser=0&hl=zh-CN) | ✅ Beschikbaar    |
| Edge            | [Stabiele versie](https://microsoftedge.microsoft.com/addons/detail/scriptcat/liilgpjgabokdklappibcjfablkpcekh) [Bètaversie](https://microsoftedge.microsoft.com/addons/detail/scriptcat-beta/nimmbghgpcjmeniofmpdfkofcedcjpfi)                      | ✅ Beschikbaar    |
| Firefox         | [Stabiele versie](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat/) [Bètaversie](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat-pre/)                                                                                             | ✅ MV2         |

### Andere browsers

Als je browser niet in bovenstaande lijst staat, kun je het `zip`/`crx`-bestand downloaden van de [Github Release](https://github.com/scriptscat/scriptcat/releases)-pagina en het handmatig installeren.

### Uitgepakte extensie installeren {#load-unpacked-extension-installation}

① Download eerst het `zip`-bestand van de [Github Release](https://github.com/scriptscat/scriptcat/releases)-pagina of de [Community download](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html)-pagina. Als het een `crx`-bestand is, verander dan de extensie naar `zip`.

② Bereid een map voor om de plugin op te slaan en pak het bovenstaande zip-bestand uit naar die map. Na het uitpakken zou het er zo uit moeten zien (**Opmerking: deze map kan niet worden verwijderd of verplaatst, anders werkt de extensie niet goed**) ![download-zip](@site/i18n/en/docusaurus-plugin-content-docs/current/use/use.assets/download-zip.webp)

③ Open de extensiebeheerinterface van de browser om de uitgepakte extensie te laden (raadpleeg [Ontwikkelaarsmodus inschakelen om manifest v3 ScriptCat te ondersteunen](/docs/use/open-dev/) om eerst de ontwikkelaarsmodus in te schakelen)

- 1. **Edge** ![edge-load-unpacked](@site/i18n/en/docusaurus-plugin-content-docs/current/use/use.assets/edge-load-unpacked.webp)
- 2. **Chrome** ![chrome-load-unpacked](@site/i18n/en/docusaurus-plugin-content-docs/current/use/use.assets/chrome-load-unpacked.webp)

④ Selecteer de map die je in stap ② hebt gemaakt (na het laden verschijnt het ScriptCat-pictogram in de extensielijst in de extensiebeheerinterface, en je kunt het ook zien door op de extensieknop in de rechterbovenhoek van de adresbalk van de browser te klikken)

- 1. **Edge** ![edge-load-unpacked-img](@site/i18n/en/docusaurus-plugin-content-docs/current/use/use.assets/edge-load-unpacked-img.webp)
- 2. **Chrome** ![chrome-load-unpacked-img](@site/i18n/en/docusaurus-plugin-content-docs/current/use/use.assets/chrome-load-unpacked-img.webp)

⑤ Klik op het ScriptCat-pictogram in de rechterbovenhoek, klik op `┆` > Scripts ophalen in de rechterbovenhoek van de interface die verschijnt, en je kunt naar de scriptsite gaan om scripts te zoeken en installeren.

Opmerking: Extensies die op deze manier zijn geïnstalleerd, kunnen niet automatisch worden bijgewerkt. Als je moet updaten, herhaal dan de bovenstaande stappen om de extensie bij te werken (bestanden vervangen en één keer opnieuw laden).


## Scripts ophalen

> Naast scripts kun je ook scriptinformatie en tutorials krijgen van [Tampermonkey Chinees Forum](https://bbs.tampermonkey.net.cn/) en [Scriptontwikkelingsgids](https://learn.scriptcat.org/).

### ScriptCat-scriptsite

[ScriptCat-scriptsite](https://scriptcat.org/) is de scriptsite voor deze extensie, waar je zelfgeschreven scripts kunt publiceren.

- Nieuwe scriptsite
- Achtergrondscripts/geplande scripts
- Gebruiksvriendelijke interface

### Userscript.Zone-zoekopdracht

[Userscript.Zone-zoekopdracht](https://www.userscript.zone/?utm_source=tm.net&utm_medium=scripts) is een nieuwe website waarmee je gebruikersscripts kunt zoeken door geschikte URL's of domeinen in te voeren.

- Grote hoeveelheid scriptbronnen
- Geschikte gebruikersscripts gemakkelijk te vinden
- Toont alleen gebruikersscripts van beoordeelde gebruikersscriptpagina's of op zijn minst pagina's met commentaarfunctie

### GreasyFork

[GreasyFork](https://greasyfork.org/) is een veelgebruikt platform voor het hosten en delen van gebruikersscripts, waarmee ontwikkelaars browsergebaseerde scripts kunnen publiceren en gebruikers deze kunnen installeren om websitefunctionaliteit te verbeteren of te wijzigen. De site is gemaakt door Jason Barnabe en staat bekend om zijn nadruk op beveiliging en open-source transparantie, met een grote collectie scripts om de browse-ervaring te verbeteren.

Jason Barnabe is ook de oorspronkelijke maker van de Stylish-browserextensie. [Stylish](https://userstyles.org/) werd echter in 2016 verkocht en wordt nu geëxploiteerd door een ander bedrijf, zonder directe betrokkenheid van Jason Barnabe bij de latere ontwikkeling.

- Grote hoeveelheid scriptbronnen
- Mogelijkheid om scripts van Github te synchroniseren
- Zeer actief [open-source ontwikkelingsmodel](https://github.com/JasonBarnabe/greasyfork)

### GitHub/Gist

Je kunt [scriptbronnen zoeken in Github en Gist](https://gist.github.com/search?l=JavaScript&o=desc&q="%3D%3DUserScript%3D%3D"&s=updated).

## Introductierondleiding

Na het installeren van ScriptCat start het openen van het dashboard automatisch de introductierondleiding (je kunt deze ook op elk moment opnieuw openen via "Helpcentrum" in de linkerzijbalk). De rondleiding behandelt:

- [Scripts installeren](/docs/use/script_installation/): installeren vanuit scriptmarkten, inclusief ondersteuning voor [achtergrondscripts](/docs/dev/background/).
- Beheren & bedienen: bewerken, uitvoeren/stoppen, [UserConfig](/docs/dev/config/).
- [Back-up](/docs/use/sync/) en [migreren van andere beheerders](/docs/use/from-other/migrate-from-tampermonkey/).
- [Scriptsynchronisatie](/docs/use/sync/).
- [Abonnementen](/docs/dev/subscribe/).
