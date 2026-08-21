---
title: Hintergrundskript
---

Hintergrundskripte sind für Skripte geeignet, die kontinuierlich weiterlaufen müssen. Hintergrundskripte sind ein ScriptCat-spezifischer Skripttyp; sie laufen in einer Sandbox und können nicht auf das DOM zugreifen. Sie können mit denselben GM-APIs wie Tampermonkey entwickelt werden, und Kompatibilitätshinweise werden in der Dokumentation hervorgehoben.

## Hintergrundskript (`@background`)

Ein Hintergrundskript wird mit dem `@background`-Attribut deklariert. Es lässt das Skript nach dem Aktivieren oder dem Starten des Browsers im Hintergrund weiterlaufen.

## Geplantes Skript (`@crontab`)

> Ein geplantes Skript ist eine Art Hintergrundskript, das für Aufgaben geeignet ist, die **zyklisch wiederholt ausgeführt werden müssen**.

Ein geplantes Skript wird mit dem `@crontab`-Attribut deklariert. Es unterstützt Minuten- und Sekundenplanung und bietet ScriptCat's erweiterte Syntax `once` / `once(...)`, um mehrfache Ausführungen innerhalb desselben Zeitzyklus zu verhindern.

⚠️ Hinweise:

* In einem einzelnen Skript ist **nur das erste `@crontab` wirksam**
* Es wird empfohlen, dass die **einzelne Ausführungszeit + Wiederholungszeit** den Cron-Intervall nicht überschreitet, da es sonst zu Überlappungen kommen kann

## Cron-Ausdrucks-Hinweise

ScriptCats Cron-Implementierung basiert auf [**node-cron**](https://github.com/kelektiv/node-cron/) mit einer kleinen Erweiterung über die Standard-Cron-Syntax hinaus.

### Ausdrucksformat

#### Standard 5-Felder-Format (Empfohlen)

```text
Minute Stunde Tag Monat Wochentag
```

#### Erweitertes 6-Felder-Format (Nicht empfohlen)

```text
Sekunde Minute Stunde Tag Monat Wochentag
```

> ⚠️ Das 6-Felder-Format wird nicht empfohlen
> Browser-Umungen können keine Sekundengenauheit garantieren und es erhöht den Performance-Overhead — die Hintergrundseite kann Verzögerungen bei der Planung haben.

### Syntax pro Feld

| Syntax | Bedeutung | Beispiel |
|---|---|---|
| `*` | Beliebiger Wert | `*` (jede Minute/Stunde) |
| number | Spezifischer Wert | `5` (die 5. Minute) |
| `a,b,c` | Mehrere diskrete Werte | `1,15,30` |
| `a-b` | Zusammenhängender Bereich | `10-23` |
| `*/n` | Alle n Einheiten | `*/5` |
| `a-b/n` | Bereich mit Schritt | `10-50/10` |

#### Wochentag-Regeln

* `1–6`: Montag bis Samstag
* `0` oder `7`: Sonntag

## Die `once`-Erweiterte Syntax

### Was `once` bedeutet

Die Verwendung von `once` in einem Cron-Ausdruck bedeutet:

> **Innerhalb des aktuellen Zeitzyklus nur eine erfolgreiche Zulassung**

Selbst wenn spätere Zeitpunkte innerhalb desselben Zyklus weiterhin der Cron-Regel entsprechen, wird das Skript nicht erneut ausgeführt.

### `once` vs. `once(...)`

| Syntax | zugrunde liegender Cron-Wert | Beschreibung |
|---|---|---|
| `once` | `*` (beliebiger Wert) | Wird beim ersten Treffer im Zyklus ausgeführt, ohne spezifische Zeit |
| `once(expr)` | `expr` | Wird nur zu Zeiten ausgeführt, die `expr` entsprechen, und nur einmal |

### Die Position von `once` = der Zeitzyklus, den es einschränkt

Wo auch immer `once` / `once(...)` platziert wird, es bedeutet „nur einmal innerhalb dieser Zeitauflösung ausführen".

| `once`-Position | Verhalten |
|---|---|
| Minuten-Feld | Nur einmal pro Minute |
| Stunden-Feld | Nur einmal pro Stunde |
| Tages-Feld | Nur einmal pro Tag |
| Monats-Feld | Nur einmal pro Monat |
| Wochentags-Feld | Nur einmal pro Woche |

## `@crontab`-Beispiele

### Häufig

```js
//@crontab * * * * *        // einmal pro Minute
//@crontab * * * * * *      // einmal pro Sekunde (nicht empfohlen)
//@crontab 0 */6 * * *      // alle 6 Stunden um 0
//@crontab 15 */6 * * *     // alle 6 Stunden um 15
//@crontab * once * * *     // höchstens einmal pro Stunde
//@crontab * * once * *     // höchstens einmal pro Tag
//@crontab * 10 once * *    // nur einmal innerhalb der 10:00-Stunde jeden Tag
//@crontab * */4 once * *   // höchstens einmal alle 4 Stunden jeden Tag
```

### Erweitert

```js
//@crontab * 1,3,5 once * *       // einmal bei 1:00, 3:00 oder 5:00 jeden Tag
//@crontab * 10-23 once * *       // einmal zwischen 10:00 und 23:59 jeden Tag
//@crontab * once 13 * *          // einmal pro Stunde am 13. jedes Monats
//@crontab * once(9-17) * * *     // einmal pro Stunde zwischen 9:00 und 17:00 jeden Tag
//@crontab 0,30 once * * *        // der Minute 0 oder 30 wird zuerst getroffen, dann keine Wiederholung
//@crontab * 9-18 once * *        // nur einmal zwischen 9:00 und 18:00 jeden Tag
```

## Empfehlungen

### Gute Verwendungen für `once`

* Aufgaben, die **nur einmal pro Tag/Stunde** ausgeführt werden müssen
* Statusprüfungs-, Synchronisations- und Berichtsskripte

### Nicht empfohlen für `once`

* Aufgaben, die zu einem genauen Zeitpunkt ausgeführt werden müssen
* Skripte, deren Ausführungszeit den Cron-Intervall erheblich überschreiten kann

## Cron-Ausdrücke testen

Beim Testen eines Cron-Ausdrucks ersetzen Sie bitte **temporär `once` / `once(...)` durch den zugrunde liegenden Wert**:

* `once` → `*`
* `once(expr)` → `expr`

Empfohlene Tools:

* [crontab.guru](https://crontab.guru/)
* [tool.lu cron calculator](https://tool.lu/crontab/)

## Logs

Auf der Skript-Listenseite zeigt Hovering über die `run status column` einen Tooltip mit dem Ausführungsstatus des Skripts an;
Klicken zeigt den über `GM_log` ausgegebenen Inhalt.

![](@site/docs/dev/background.assets/image-20210621214143661.png)

![](@site/docs/dev/background.assets/image-20210621214124685.png)

## Skript-Debugging

Hintergrundskripte können direkt von der Skript-Editor-Seite debuggt werden, aber dies hat Einschränkungen:

* `value` synchronisiert nicht korrekt
* `registerMenu`-Menüs werden nicht korrekt ausgelöst

![](@site/docs/dev/background.assets/image-20210903141601057.png)

Zum Debuggen der echten Laufzeitumgebung aktivieren Sie den **Entwicklermodus** in den Erweiterungseinstellungen und öffnen Sie die `background.html`-Seite der Erweiterung.

Laufzeitfehler können auch im Ausführungsprotokoll eingesehen werden.

![image-20210903144155450](@site/docs/dev/background.assets/image-20210903144155450.png)

## Promise

Das folgende Muster wird dringend empfohlen, da es dem Skriptmanager auch die Überwachung der Skriptausführung ermöglicht.
Wenn das Skript eine asynchrone Operation durchführt, **muss es ein `Promise` zurückgeben**.

```ts
// ==UserScript==
// @name         Hintergrundskript
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @background
// ==/UserScript==
return new Promise((resolve, reject) => {
  if (Math.round((Math.random() * 10) % 2)) {
    resolve("ok");
  } else {
    reject("error");
  }
});
```

```js
// ==UserScript==
// @name         Geplantes Skript, das einmal täglich läuft
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @crontab      * * once * *
// ==/UserScript==
return new Promise((resolve, reject) => {
  if (Math.round((Math.random() * 10) % 2)) {
    resolve("ok");
  } else {
    reject("error");
  }
});
```

```js
// ==UserScript==
// @name         API aufrufen
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @crontab      * * once * *
// ==/UserScript==
return new Promise((resolve, reject) => {
  GM_xmlhttpRequest({
    url: "https://bbs.tampermonkey.net.cn/",
    onload() {
      resolve("ok");
    },
    onerror() {
      reject("error");
    },
  });
});
```

Stellen Sie sicher, dass Sie `resolve` / `reject` erst aufrufen, nachdem die Skriptlogik wirklich abgeschlossen ist.
Nach dem Aufruf betrachtet der Manager die Ausführung als abgeschlossen, und nachfolgende GM-Operationen werden nicht mehr wirksam.

## Fehlereinholung

ScriptCat-Hintergrundskripte unterstützen Fehlereinholung.
Wenn ein Skript fehlschlägt, kann es mit `CATRetryError` `reject` aufrufen, um einen Wiederholungsversuch auszulösen.

* Mindest-Wiederholungsintervall: 5 Sekunden
* Vermeiden Sie Konflikte mit der eigenen Ausführungszeit des Skripts, da es sonst zu Doppelausführungen kommen kann

```js
// ==UserScript==
// @name         Wiederholungsbeispiel
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @crontab      * * once * *
// @grant        GM_notification
// ==/UserScript==

return new Promise((resolve, reject) => {
  GM_notification({
    title: "retry",
    text: "Wiederholung in 10 Sekunden",
  });
  reject(new CATRetryError("xxx error", 10));
});
```
