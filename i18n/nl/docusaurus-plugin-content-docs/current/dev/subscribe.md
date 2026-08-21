---
title: Abonnementsmodus
---

Het bestand moet beginnen met `UserSubscribe` in plaats van `UserScript`. De installatielink moet de extensie `user.sub.js` gebruiken en moet een `https`-link zijn.

Een abonnementsscript toont alleen het installatiedialoogvenster zodat de gebruiker het abonnement bij installatie kan bevestigen; daaropvolgende updates zijn stil en het updatedialoogvenster wordt alleen opnieuw getoond als de `connect`-machtiging verandert.

Een enkel abonnementsscript kan de installatielinks voor meerdere scripts beschrijven. Scripts die via de abonnementsmodus worden geïnstalleerd, worden stil geïnstalleerd, zonder bevestigingsdialoogvenster, en de geïnstalleerde scripts verschijnen nog steeds in de scriptlijst — maar hun `connect`-machtiging gebruikt de `connect` die in het abonnement is gedeclareerd in plaats van de eigen `connect`-machtiging van het script.

```js
// ==UserSubscribe==
// @name         xxx
// @description  Abonneer u op de xxx-scriptserie
// @version      0.1.0
// @author       U
// @connect      www.baidu.com
// @scriptUrl    https://script.tampermonkey.net.cn/48.user.js
// @scriptUrl    https://script.tampermonkey.net.cn/49.user.js
// ==/UserSubscribe==
```

## Abonnementsupdates en scriptupdates

Volgens het door de gebruiker geconfigureerde `update-interval` controleert ScriptCat periodiek de abonnementslink op updates; `version` moet worden geconfigureerd om dit te laten werken.

Elke abonnementsupdate of -wijziging vergelijkt de scriptlinks met de momenteel geïnstalleerde scripts: scripts die niet langer in het nieuwe abonnement voorkomen, worden verwijderd en nieuw toegevoegde scripts worden stil geïnstalleerd. Scriptupdates volgen de eigen `version` van het script, met dezelfde updatelogica als een normaal geïnstalleerd script.

## Stille installatie en update

Geabonneerde scripts worden stil geïnstalleerd en bijgewerkt — het toevoegen, verwijderen of bijwerken van een script uit een abonnement toont alleen een melding, zonder dat opnieuw gebruikersbevestiging nodig is. Vanwege dit stille-updatemechanisme dient u zich alleen te abonneren op bronnen die u vertrouwt.


## metadata

De betekenis van bepaalde metadatavelden verandert binnen een abonnementsscript.

### name

De abonnementsnaam (kan ook direct in de abonnementslijst worden bewerkt)

### description

De abonnementsbeschrijving, die beschrijft waarvoor het abonnement dient

### version

De abonnementsversie. Indien weggelaten, worden updates in plaats daarvan geactiveerd door of de inhoud van het abonnementsscript is veranderd.

### connect

Vraagt toegangsmachtiging aan voor een site; zie `GM_cookie` en `GM_xmlhttpRequest`. Voor scripts die via de abonnementsmodus zijn geïnstalleerd, wordt `connect` overschreven door de `connect` van het abonnement.

### scriptUrl

De scriptinstallatielinks die vereist zijn voor het abonnement
