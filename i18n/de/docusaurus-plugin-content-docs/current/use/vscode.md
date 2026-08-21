---
title: Skripte mit VSCode entwickeln
---

ScriptCat bietet eine VSCode-Erweiterung, mit der Sie Userskripte in VSCode schreiben können. Nach dem Speichern werden Änderungen automatisch mit ScriptCat im Browser synchronisiert — kein manuelles Kopieren erforderlich.

## Voraussetzungen

Sie müssen die folgenden zwei Tools installieren:

1. **ScriptCat-Erweiterung im Browser installieren** — Folgen Sie dem [Quick Start](/docs/use/use/)-Leitfaden
2. **ScriptCat-Erweiterung in VSCode installieren** — Suchen Sie nach „[scriptcat-vscode](https://marketplace.visualstudio.com/items?itemName=CodFrm.scriptcat-vscode)" im VSCode-Erweiterungsmarktplatz

## Verbindung herstellen

Nach der Installation müssen Sie die ScriptCat-Erweiterung mit VSCode verbinden:

1. Klicken Sie auf das ScriptCat-Symbol im Browser
2. Gehen Sie zu **Werkzeuge > Entwicklertools**
3. Finden Sie **Automatisch mit VSCode-Dienst verbinden**, aktivieren Sie es und klicken Sie auf **Verbinden**

## Skripte synchronisieren

### Option 1: Automatischer Erkennungsmodus (Empfohlen)

1. Drücken Sie `Ctrl + Shift + P` in VSCode
2. Geben Sie `scriptcat.autoTarget` ein und wählen Sie es aus
3. Ab dann werden `.user.js`-Dateien automatisch mit ScriptCat synchronisiert

### Option 2: Angegebenes Skript-Modus

1. Drücken Sie `Ctrl + Shift + P` in VSCode
2. Geben Sie `scriptcat.target` ein und wählen Sie es aus
3. Geben Sie den Pfad der zu synchronisierenden Skriptdatei an

## Entwicklung workflow

1. Schreiben oder bearbeiten Sie Ihr `.user.js`-Skript in VSCode
2. Drücken Sie `Ctrl + S` zum Speichern
3. Das Skript wird automatisch mit ScriptCat synchronisiert
4. Wechseln Sie zum Browser und aktualisieren Sie die Seite

## FAQ

### Was tun, wenn die Verbindung nicht funktioniert?

- Stellen Sie sicher, dass die ScriptCat-Erweiterung im Browser läuft
- Stellen Sie sicher, dass die VSCode-Erweiterung installiert und aktiviert ist

### Das Skript wird nach dem Speichern nicht aktualisiert?

- Stellen Sie sicher, dass der Dateiname auf `.user.js` endet
- Stellen Sie sicher, dass Sie den `scriptcat.autoTarget`- oder `scriptcat.target`-Befehl ausgeführt haben

### Muss ich nach dem Neustart von VSCode neu verbinden?

Wenn „Automatisch mit VSCode-Dienst verbinden" aktiviert ist, verbindet sich VSCode nach einem Neustart automatisch neu.
