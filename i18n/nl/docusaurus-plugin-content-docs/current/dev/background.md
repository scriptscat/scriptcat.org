---
title: Achtergrondscript
---

Achtergrondscripts zijn geschikt voor scripts die continu moeten blijven draaien. Achtergrondscripts zijn een ScriptCat-specifiek scripttype; ze draaien in een sandbox en hebben geen toegang tot de DOM. Ze kunnen worden ontwikkeld met dezelfde GM-API's als Tampermonkey, en compatibiliteitsnotities worden in de documentatie vermeld.

## Achtergrondscript (`@background`) {#background-script-background}

Een achtergrondscript wordt gedeclareerd met het kenmerk `@background`. Het laat het script in de achtergrond blijven draaien nadat het script is ingeschakeld of de browser is gestart.

## Gepland script (`@crontab`) {#scheduled-script-crontab}

> Een gepland script is een soort achtergrondscript dat geschikt is voor taken die **herhaaldelijk op een tijdcyclus moeten worden uitgevoerd**.

Een gepland script wordt gedeclareerd met het kenmerk `@crontab`. Het ondersteunt planning op minuutniveau en secondeniveau en biedt de uitgebreide syntaxis `once` / `once(...)` van ScriptCat om te voorkomen dat het meer dan één keer binnen dezelfde tijdcyclus wordt uitgevoerd.

⚠️ Opmerkingen:

* In één script heeft **alleen de eerste `@crontab` effect**
* Het wordt aanbevolen dat de **uitvoeringstijd + retrytijd** van het script de cron-interval niet overschrijdt, anders kunnen uitvoeringen elkaar overlappen

## Cron-expressienotities

De cron-implementatie van ScriptCat is gebaseerd op [**node-cron**](https://github.com/kelektiv/node-cron/), met een kleine uitbreiding bovenop de standaard cron-syntaxis.

### Expressie-indeling

#### Standaard 5-veldenindeling (aanbevolen)

```text
minute hour day month weekday
```

#### Uitgebreide 6-veldenindeling (niet aanbevolen)

```text
second minute hour day month weekday
```

> ⚠️ De 6-veldenindeling wordt niet aanbevolen
> Browseromgevingen kunnen geen precisie op secondeniveau garanderen en het verhoogt de prestatieoverhead — de achtergrondpagina kan vertraging oplopen bij de planning.

### Beschikbare syntaxis per veld

| Syntaxis  | Betekenis              | Voorbeeld                  |
| ------- | -------------------- | ------------------------ |
| `*`     | Elke waarde            | `*` (elke minuut/uur)  |
| getal  | Specifieke waarde       | `5` (de 5e minuut)     |
| `a,b,c` | Meerdere discrete waarden | `1,15,30`             |
| `a-b`   | Aaneengesloten bereik      | `10-23`                  |
| `*/n`   | Elke n eenheden          | `*/5`                   |
| `a-b/n` | Bereik met stap        | `10-50/10`               |

#### Weekdagregels

* `1–6`: maandag tot en met zaterdag
* `0` of `7`: zondag

## De `once`-uitbreidingssyntaxis

### Wat `once` betekent

`once` in een cron-expressie gebruiken betekent:

> **Binnen de huidige tijdcyclus is slechts één succesvolle uitvoering toegestaan**

Zelfs als latere tijdstippen binnen dezelfde cyclus nog steeds aan de cron-regel voldoen, wordt het script niet opnieuw uitgevoerd.

### `once` vs. `once(...)`

| Syntaxis        | Onderliggende cron-waarde voor dit veld | Beschrijving                                                       |
| ------------- | ------------------------------------- | ------------------------------------------------------------------ |
| `once`        | `*` (elke waarde)                       | Draait bij de eerste overeenkomst binnen de cyclus, zonder specifieke tijd  |
| `once(expr)`  | `expr`                                 | Draait alleen op tijden die binnen de cyclus overeenkomen met `expr`, en slechts één keer |

Met `once(expr)` kunt u kandidaat-tijdstippen nauwkeurig specificeren terwijl u toch "slechts één keer per cyclus uitvoeren" afdwingt. Alle standaard cron-syntaxis (getallen, bereiken, stappen, lijsten) wordt binnen de haakjes ondersteund.

Voorbeeldvergelijking:

```text
* once * * *          // elke minuut van elk uur; draait bij de eerste overeenkomst, geen verdere uitvoeringen dat uur
* once(9-17) * * *    // tussen 9:00 en 17:59 elke dag, één keer per uur
0,30 once * * *       // welke van minuut 0 of 30 het eerst wordt gematcht elk uur draait; geen verdere uitvoeringen dat uur
```

### De positie van `once` = de tijdcyclus die het beperkt

Waar `once` / `once(...)` ook wordt geplaatst, het betekent "draai slechts één keer binnen die tijdsgranulariteit."

| `once`-positie | Gedrag                       |
| ---------------- | ------------------------------- |
| minuutveld      | Draait slechts één keer per minuut       |
| uurveld        | Draait slechts één keer per uur         |
| dagveld         | Draait slechts één keer per dag          |
| maandveld       | Draait slechts één keer per maand        |
| weekdagveld     | Draait slechts één keer per week         |

Voorbeelden:

```text
* once * * *       // draait slechts één keer per uur
* * once * *       // draait slechts één keer per dag
* 9-18 once * *    // draait slechts één keer tussen 9:00 en 18:59 elke dag
```

### `once` gecombineerd met bereiken / lijsten / stappen

`once` / `once(...)` kan worden gecombineerd met elke cron-syntaxis, maar er is slechts één regel:

> **Binnen dezelfde cyclus worden, zodra een uitvoering is geslaagd, alle verdere overeenkomende tijdstippen genegeerd**

#### Voorbeeld 1: Bereik

```text
* 10 once * *
```

Betekenis:

* Elke dag zijn 10:00–10:59 kandidaat-tijden
* Na de eerste overeenkomst van de dag
* Zullen 10:05–10:59 niet meer draaien

#### Voorbeeld 2: Lijst

```text
* 1,3,5 once * *
```

Betekenis:

* Elke dag zijn 1:00, 3:00 en 5:00 kandidaat-tijden
* Als 1:00 al is gedraaid
* Worden 3:00 en 5:00 overgeslagen

#### Voorbeeld 3: Stap

```text
* */4 once * *
```

Betekenis:

* Elke dag zijn 0:00, 4:00, 8:00, 12:00, 16:00 en 20:00 kandidaat-tijden
* Na de eerste uitvoering van de dag
* Draaien er geen verdere tijdstippen

#### Voorbeeld 4: `once(...)` die kandidaat-tijdstippen specificeert

```text
* once(9-17) * * *
```

Betekenis:

* Elke dag zijn 9:00 tot en met 17:00 kandidaat-uren
* De cyclus wordt elk uur gereset; binnen een uur stopt de eerste overeenkomst verdere uitvoeringen
* Effect: draait één keer per uur tussen 9:00 en 17:00 elke dag, in totaal 9 keer

```text
* 9-18 once * *
```

Betekenis:

* Elke dag zijn 9:00–18:59 kandidaat-tijden
* `once` in het dagveld vergrendelt de cyclus op één keer per dag
* Na de eerste overeenkomst van de dag draait er niets anders vóór 18:59

## `@crontab`-voorbeelden

### Algemeen

```js
//@crontab * * * * *        // draait één keer per minuut
//@crontab * * * * * *      // draait één keer per seconde (niet aanbevolen)
//@crontab 0 */6 * * *      // draait op het uur elke 6 uur
//@crontab 15 */6 * * *     // draait op minuut 15 elke 6 uur
//@crontab * once * * *     // draait maximaal één keer per uur
//@crontab * * once * *     // draait maximaal één keer per dag
//@crontab * 10 once * *    // draait slechts één keer binnen het uur 10:00 elke dag (bv. als het om 10:04 draaide, draait het niet opnieuw van 10:05-10:59)
//@crontab * */4 once * *   // controleert maximaal één keer per 4 uur elke dag (bv. als het om 4:00 draaide, draait het niet opnieuw om 8, 12, 16, 20, 24, enz.)
```

### Geavanceerd

```js
//@crontab * 1,3,5 once * *       // draait één keer om 1:00, 3:00 of 5:00 elke dag (bv. als het om 1:00 draaide, draait het niet opnieuw om 3:00 of 5:00)
//@crontab * 10-23 once * *       // draait één keer tussen 10:00 en 23:59 elke dag (bv. als het om 10:04 draaide, draait het niet opnieuw van 10:05-23:59)
//@crontab * once 13 * *          // draait één keer per uur op de 13e van elke maand
//@crontab * once(9-17) * * *     // draait één keer per uur tussen 9:00 en 17:00 elke dag
//@crontab 0,30 once * * *        // welke van minuut 0 of 30 het eerst wordt gematcht elk uur draait; geen herhaling dat uur
//@crontab * 9-18 once * *        // draait slechts één keer tussen 9:00 en 18:00 elke dag
```

## Gebruiksaanbevelingen

### Goed geschikt voor `once`

* Taken die **slechts één keer hoeven te draaien** per dag/uur
* Statuscontroles, synchronisatie- en rapportagescripts
* Het vermijden van de volgende problemen:

  * De browser is lange tijd niet geopend
  * Vertragingen in de planning van de achtergrondpagina
  * Dubbele uitvoering door een browserherstart

### Niet aanbevolen voor `once`

* Taken die op een exact moment moeten draaien
* Scripts waarvan de uitvoeringstijd de cron-interval aanzienlijk kan overschrijden
* Taken met strikte consistentievereisten voor het aantal uitvoeringen

## Cron-expressies testen

Vervang bij het testen van een cron-expressie **tijdelijk `once` / `once(...)` door hun onderliggende waarde**:

* `once` → `*`
* `once(expr)` → `expr`

Houd er rekening mee dat testtools de uitgebreide 6-veldenindeling mogelijk niet ondersteunen.

Aanbevolen tools:

* [crontab.guru](https://crontab.guru/)
* [tool.lu cron-calculator](https://tool.lu/crontab/)

Op de scriptlijstpagina kunt u met de muis over de **uitvoeringsstatuskolom** gaan om de **volgende geplande uitvoeringstijd** van het script te zien.

## Logs

Op de scriptlijstpagina toont het zweven over de `uitvoeringsstatuskolom` een tooltip met de uitvoeringsstatus van het script;
door erop te klikken verschijnt de loginhoud die via `GM_log` is afgedrukt.

![](@site/docs/dev/background.assets/image-20210621214143661.png)

![](@site/docs/dev/background.assets/image-20210621214124685.png)

## Script debuggen

Achtergrondscripts kunnen rechtstreeks vanaf de scripteditorpagina worden gedebugd, maar dit heeft de volgende beperkingen:

* `value` synchroniseert niet correct
* `registerMenu`-menu's triggeren niet correct

![](@site/docs/dev/background.assets/image-20210903141601057.png)

Om de echte runtime-omgeving te debuggen, schakelt u **Ontwikkelaarsmodus** in de extensie-instellingen in en opent u vervolgens de `background.html`-pagina van de extensie om te debuggen.

Fouten die tijdens runtime worden gegenereerd, kunnen ook worden bekeken in het uitvoeringslogboek.

![image-20210903144155450](@site/docs/dev/background.assets/image-20210903144155450.png)

## Promise

Het volgende patroon wordt sterk aanbevolen, omdat het de scriptmanager ook in staat stelt de scriptuitvoering te bewaken.
Als het script een asynchrone bewerking uitvoert, **moet het een `Promise` retourneren**.

```ts
// ==UserScript==
// @name         Achtergrondscript
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @background
// ==/UserScript==
return new Promise((resolve, reject) => {
  if (Math.round((Math.random() * 10) % 2)) {
    resolve("ok"); // geslaagd
  } else {
    reject("error"); // mislukt, met de foutreden
  }
});
```

```js
// ==UserScript==
// @name         Gepland script dat één keer per dag draait
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @crontab      * * once * *
// ==/UserScript==
return new Promise((resolve, reject) => {
  if (Math.round((Math.random() * 10) % 2)) {
    resolve("ok"); // geslaagd
  } else {
    reject("error"); // mislukt, met de foutreden
  }
});
```

```js
// ==UserScript==
// @name         Een API aanroepen
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @crontab      * * once * *
// ==/UserScript==
return new Promise((resolve, reject) => {
  GM_xmlhttpRequest({
    url: "https://bbs.tampermonkey.net.cn/",
    onload() {
      resolve("ok"); // geslaagd
    },
    onerror() {
      reject("error"); // mislukt, met de foutreden
    },
  });
});
```

Zorg ervoor dat u `resolve` / `reject` alleen aanroept nadat de logica van het script echt is voltooid.
Zodra dit is aangeroepen, beschouwt de manager de uitvoering van het script als voltooid en hebben eventuele daaropvolgende GM-bewerkingen geen effect meer.

## Foutretry

ScriptCat-achtergrondscripts ondersteunen foutretry.
Wanneer een script faalt, kan het `reject` met een `CATRetryError` om een retry te triggeren.

* Minimale retry-interval: 5 seconden
* Vermijd conflicten met de eigen uitvoeringstijd van het script, anders kan dubbele uitvoering optreden

```js
// ==UserScript==
// @name         Retry-voorbeeld
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  probeer de wereld over te nemen!
// @author       U
// @crontab      * * once * *
// @grant        GM_notification
// ==/UserScript==

return new Promise((resolve, reject) => {
  GM_notification({
    title: "retry",
    text: "Opnieuw proberen over 10 seconden",
  });
  reject(new CATRetryError("xxx error", 10));
});
```
