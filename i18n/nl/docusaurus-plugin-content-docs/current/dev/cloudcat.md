---
title: Clouduitvoering
---

> Er worden verschillende manieren geboden om in de cloud te draaien; zie [Uitvoeringsomgevingen](#running-environments) voor details. Daarnaast is [CloudCat](https://github.com/scriptscat/cloudcat) een dienst voor het in de cloud uitvoeren van achtergrondscripts — een FAAS-platform dat nog in ontwikkeling is.

⚠ Let op ⚠, zodra het naar de cloud is geüpload, verandert de betekenis van `once` in een geplande-scriptexpressie: de tijd vóór `once` wordt bij uitvoering vervangen door de minimale waarde ervan.

Bijvoorbeeld:

* `* * once * *` => `0 0 * * *`: draait één keer per dag, wordt elke dag om 00:00 uitgevoerd
* `* 1-23 once * *` => `0 1 * * *`: draait één keer tussen 1:00 en 23:00 elke dag, wordt elke dag om 01:00 uitgevoerd
* `* 1,3,5 once * *` => `0 1 * * *`: draait één keer om 1:00, 3:00 of 5:00 elke dag, wordt elke dag om 01:00 uitgevoerd
* `* */4 once * *` => `0 0 * * *`: draait één keer per 4 uur elke dag, wordt elke dag om 00:00 uitgevoerd
* `* 1-23/4 once * *` => `0 1 * * *`: draait één keer per 4 uur tussen 1:00 en 23:00 elke dag, wordt elke dag om 01:00 uitgevoerd
* `* 10 once * *` => `0 10 * * *`: draait één keer om 10:00 elke dag, wordt elke dag op minuut 00 van uur 10 uitgevoerd
* `* * * once *` => `0 0 1 * *`: draait één keer per maand, wordt op de 1e van elke maand om 00:00 uitgevoerd

## Aanvullende CloudCat-beschrijvingswaarden

Een referentiescript: [Bilibili Auto Check-in](https://scriptcat.org/script-show-page/48)

### cloudCat

Het declareren van dit kenmerk laat het script via `CloudCat` draaien. Zodra een script deze optie heeft, verschijnt er een clouduitvoeringsknop in de scriptlijst; door erop te klikken kunt u een uitvoeringsmethode kiezen — zie [Uitvoeringsomgevingen](#running-environments).

![image-20220203225847694](@site/docs/dev/cloudcat.assets/image-20220203225847694.png)

### cloudServer

> Gerelateerd aan cloudCat, nog niet geïmplementeerd

Het standaardadres van de cloudCat-server


### exportValue

Beschrijft de Values die naar de cloud moeten worden geëxporteerd; meerdere declaraties zijn toegestaan.

```ts
// @exportValue key1,key2,key3
// @exportValue key4,key5,key6
```

### exportCookie

Beschrijft de cookies die naar de cloud moeten worden geëxporteerd; meerdere declaraties zijn toegestaan. Parameters worden beschreven met behulp van `GM_cookie`'s `CookieDetails`, bijvoorbeeld:

```ts
// Het volgende exporteert de cookie met de naam cookie1 van https://docs.scriptcat.org/docs/use/
// @exportCookie url=https://docs.scriptcat.org/docs/use;name=cookie1

// Dit exporteert alle cookies voor het domein scriptcat.org
// @exportCookie domain=scriptcat.org

// Alle beschikbare parameters:
// @exportCookie domain=scriptcat.org;url=https://docs.scriptcat.org/docs/use;name=cookie1;path=/docs/use;secure=true;session=true
```

## Wijzigingen in API-ondersteuning
> Momenteel worden alleen de volgende API's ondersteund; tenzij anders vermeld, gedragen ze zich hetzelfde als de oorspronkelijke API.

### GM_xmlhttpRequest


### GM_notification


### GM_log

### GM_getValue

Ondersteunt momenteel alleen het ophalen van Values die via `@exportValue` zijn geëxporteerd; set/delete/list en andere methoden worden niet ondersteund.

## Uitvoeringsomgevingen {#running-environments}

### Lokaal

Exporteert een zip-pakket; pak het uit in een map en voer de volgende opdrachten uit om het lokaal uit te voeren (vereist een lokale Node.js-omgeving):

```bash
npm i
node index.js
```


### Tencent Cloud

Maak eerst een Tencent Cloud-sleutel aan op [**Toegangssleutels**](https://console.cloud.tencent.com/cam/capi) — als u een subaccount gebruikt, zorg er dan voor dat u er Cloud Function-machtigingen aan toekent. Schakel vervolgens de dienst in op [**Functiedienst**](https://console.cloud.tencent.com/scf/list), die een bepaalde hoeveelheid gratis gebruik per maand bevat. De regio is standaard Shanghai; pas dit aan indien nodig. Na het klikken op uploaden wordt automatisch een geplande trigger gemaakt op basis van `@crontab` om de functie op schema uit te voeren.

![image-20220203224956248](@site/docs/dev/cloudcat.assets/image-20220203224956248.png)
