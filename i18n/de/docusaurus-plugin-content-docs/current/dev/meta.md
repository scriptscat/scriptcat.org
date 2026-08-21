---
title: Metadaten-Block
---

Der Inhalt innerhalb von `==UserScript==` beschreibt die Berechtigungen, die ein Skript benötigt, Informationen über das Skript usw. Er befindet sich ganz am Anfang des Skripts.

```js
// ==UserScript==
// @name         Neues Userskript
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @crontab      * * once * *
// ==/UserScript==
```

## Hauptwerte

### name

Skriptname

### namespace

Skript-Namensraum. `name + namespace` bestimmt die Einzigartigkeit des Skripts.

### version

Die Version des Skripts. Es wird empfohlen, der [semantischen Versionierung](https://semver.org/) zu folgen, damit bei einer Versionsänderung der Benutzer zum Aktualisieren aufgefordert wird.

### description

Eine ausführliche Beschreibung des Skripts

### author

Skript-Autor

### run-at

Wann das Skript ausgeführt wird

| Wert | Ausführung | Unterstützt seit |
|---|---|---|
| document-start | Injiziert das Skript in die Seite, sobald das URL im Frontend übereinstimmt | v0.3.0 |
| document-end | Injiziert das Skript, nachdem das DOM geladen wurde; Seiten-Skripte und Bilder werden möglicherweise noch geladen | v0.3.0 |
| document-idle | Injiziert das Skript, nachdem alle Inhalte geladen wurden | v0.3.0 |
| document-body | Das Skript wird nur injiziert, wenn die Seite ein `body`-Element hat | v0.6.2 |
| document-menu | Zeigt ein Menü bei Rechtsklick; der Skriptname wird als Menüname verwendet | v0.3.4-v0.9.4 (🔥 entfernt) |

Für Menü-Symbole können Sie [Unicode-Symbole](https://unicode-table.com/en/) und [Emoji](https://www.emojiall.com/en-US/) verwenden.

### run-in

Gibt die Umgebung an, in die das Skript injiziert wird: `@run-in normal-tabs` für normale Tabs, `@run-in incognito-tabs` für Inkognito-Tabs.

### early-start (v1.1.0+)

Wenn `run-at` `document-start` ist, wird das Skript so früh wie möglich ausgeführt, aber es kann nicht garantiert werden, dass es schneller als die Seite geladen wird.

Nach der Definition von `@run-at document-start` können Sie `@early-start` hinzufügen, um das Skript schneller als die Seite zu laden: [Beispiel](https://github.com/scriptscat/scriptcat/blob/main/example/early-start.js)

### inject-into

:::tip

In der Content-Script-Umgebung (`content`) zeigt `unsafeWindow` nur auf das eigene aktuelle `window` der Umgebung und kann nicht auf das `window` der Seite zugreifen.

ScriptCat unterstützt nicht das automatische Prüfen von CSP-Einschränkungen, um zu entscheiden, ob als `content` oder `page` injiziert wird (d.h. Tampermonkeys `@inject-into auto`).

:::

Gibt an, wohin das Skript injiziert wird; unterstützt `page` und `content`, Standard ist `page`.

- `page`: Das Skript wird in die Seiten-Umgebung injiziert und kann über `unsafeWindow` auf das `window` und `DOM` der Seite zugreifen
- `content`: Das Skript wird in die Content-Script-Umgebung injiziert, kann nicht direkt auf das `window`-Objekt der Seite zugreifen, hat aber Zugriff auf das Seiten-`DOM` und unterliegt keinem `CSP`

### storageName 🧪

Der Speicherplatz für `Value`; Daten unter demselben `storageName` können zwischen Skripten geteilt und kommuniziert werden. ScriptCat-spezifisch.

### background

Markiert dieses Skript als Hintergrundskript, das in der Hintergrundumgebung laufen muss. Siehe [Hintergrundskript](./background.md#background-script-background) für Details.

### crontab

Markiert das Skript als geplantes Skript, das einen Cron-Ausdruckswert erfordert. Es kann nur einen Cron-Ausdruck geben, und er läuft nach diesem Zeitplan in der Hintergrundumgebung. Siehe [Geplantes Skript](./background.md#scheduled-script-crontab) für Details.

### match

Nur URLs, die mit `match` übereinstimmen, führen das Skript aus, gemäß [Match-Patterns](https://developer.chrome.com/docs/extensions/v3/match_patterns/). In `match` ist `*` ein Platzhalter, `tld` passt auf die Top-Level-Domain, und eine Domain die mit `*.` beginnt, passt auch auf `xxx.com`:

| Wert | Richtige Beispiele | Falsche Beispiele |
|---|---|---|
| `http://scriptcat.org/doc/match` | `http://scriptcat.org/doc/match` | `http://scriptcat.org/doc/runAt` |
| `*://*/param?*` | `https://scriptcat.org/param` \| `http://scriptcat.org/param?search=tampermonkey` | `https://scriptcat.org/test/param` |
| `http*://scriptcat.org/*` | `https://scriptcat.org/` \| `https://scriptcat.org/doc` | `https://doc.scriptcat.org/` |

### include

Unterstützt `*` für unscharfe Übereinstimmung, erlaubt nicht-standardmäßige URLs

### exclude

URLs, die nicht übereinstimmen sollten; verwendet dieselbe Ausdruckssyntax wie `include`

### grant

API-Berechtigung anfordern — eine API kann nur aufgerufen werden, wenn sie angefordert wurde. Siehe Berechtigungsliste unter: [API-Dokumentation](./api.md) und [CAT API-Dokumentation](./cat-api.md).

Zwei spezielle Werte:

- **none**: Das Skript läuft nicht in der Sandbox-Umgebung, sondern direkt in der Seiten-Umgebung. In dieser Umgebung sind keine GM APIs verfügbar, aber das `window`-Objekt der Seite kann direkt accessed werden.
- **unsafeWindow**: In der Sandbox-Umgebung, wenn Sie auf das `window`-Objekt der Seite zugreifen müssen, verwenden Sie `unsafeWindow`. (Tampermonkey erfordert dies nicht — es bleibt nur zur Kompatibilität.)

### connect

Zugriffsberechtigung für eine Website anfordren; siehe `GM_cookie` und `GM_xmlhttpRequest`. `GM_download` im `native`-Modus erkennt auch `@connect` (nicht deklarierte Hosts lösen eine Bestätigungsabfrage aus).

### resource

Enthält eine Ressourcendatei. Nach der Deklaration von `@resource` können Sie `GM_getResourceText`/`GM_getResourceURL` verwenden, um die Informationen abzurufen.

```js
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico
// @resource html https://bbs.tampermonkey.net.cn/
// @resource xml https://bbs.tampermonkey.net.cn/sitemap.xml
// Ressourcen-Integritätsprüfung hinzufügen
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico#md5-xxx,sha256-xxx
```

### require

Enthält eine externe JS-Datei; unterstützt [Ressourcen-Integritätsprüfung](#ressourcen-integritätsprüfung)

### require-css

Enthält eine externe CSS-Datei; unterstützt [Ressourcen-Integritätsprüfung](#ressourcen-integritätsprüfung)

### noframes

Markiert das Skript so, dass es nicht innerhalb eines `<frame>` läuft

### definition

Die Referenzadresse einer `.d.ts`-Datei, die Editor-Autovervollständigungshinweise aktiviert

### antifeature

Dies bezieht sich auf den Skript-Marktplatz; unerwünschte Funktionen müssen mit diesem Beschreibungswert markiert werden:

```js
// @antifeature ads Dieses Skript enthält Werbung
// @antifeature referral-link Dieses Skript ändert oder leitet auf den Empfehlungslink des Autors um
```

## Zusätzliche Beschreibungswerte

### license

Die Open-Source-Lizenz des aktuellen Skripts

### updateURL

Für die Aktualisierungsprüfung muss das remote Skript ein `@version`-Tag haben.

Der Link, den das Skript zur Aktualisierungsprüfung verwendet; wenn nicht gesetzt, standardmäßig der `user.js => meta.js` des Links, oder der aktuelle Link ohne `user.js`.

Wenn `@updateURL` konfiguriert ist, muss auch `@downloadURL` konfiguriert werden.

### downloadURL

Die Download-Adresse für die Skriptaktualisierung

### supportURL

Support-Website, Fehlerberichtsseite

### homepage, homepageURL, website

Skript-Homepage

### source

Skript-Quellcode-Seite

### icon, iconURL, defaulticon

Skript-Symbol

### icon64, icon64URL

64x64-Skript-Symbol

### Hinweise

### Ressourcen-Integritätsprüfung

- Verwenden Sie md5, sha1, sha256, sha384 oder sha512, um Ressourcen gegen Manipulation zu prüfen. Mehrere Prüfverfahren können mit `;` oder `,` getrennt werden.
- Gemäß [W3C-Empfehlungen](https://w3c.github.io/webappsec-subresource-integrity/#hash-collision-attacks) werden md5 und sha1 nicht empfohlen; verwenden Sie sha384 oder einen stärkeren Hash-Algorithmus.

Beispiel:

```js
// @require https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js#md5-d55836f30c097da753179f82fa6f108f,sha256-a476ab8560837a51938aa6e1720c8be87c2862b6221690e9de7ffac113811a90
```
