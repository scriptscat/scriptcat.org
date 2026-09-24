---
title: Häufig gestellte Fragen
---

## Entwicklermodus / Userskript-Berechtigungen

#### Q: ScriptCat zeigt „Entwicklermodus nicht aktiviert" an und Skripte werden nicht ausgeführt?

Ab Chrome 120+ und neueren Edge-Versionen müssen Benutzer die Berechtigungen manuell aktivieren. Bitte folgen Sie [Browser-Userskript-Unterstützung aktivieren](/docs/use/open-dev/).

Wenn bereits aktiviert, aber die Warnung besteht, versuchen Sie, den Browser neu zu starten oder die Erweiterung neu zu laden.

## Skripte funktionieren nicht

#### Q: Skript installiert, aber es hat keine Wirkung?

1. **„Userskripte erlauben" nicht aktiviert** — Siehe [Browser-Userskript-Unterstützung aktivieren](/docs/use/open-dev/)
2. **Kaltstart** — Skripte werden möglicherweise nicht sofort geladen, wenn der Browser zum ersten Mal geöffnet wird. Versuchen Sie, die Seite zu aktualisieren
3. **Erweiterungskonflikte** — Werbeblocker (z.B. uBlock Origin) können Skriptfehler verursachen

#### Q: Skript funktioniert in Tampermonkey, aber nicht in ScriptCat?

ScriptCat und Tampermonkey haben Unterschiede in der API-Implementierung. Bitte aktualisieren Sie auf die neueste Version. Wenn das Problem weiterhin besteht, reichen Sie ein Issue auf [GitHub](https://github.com/scriptscat/scriptcat/issues) ein.

## CSP- / Trusted-Types-Einschränkungen {#csp-trusted-types}

#### Q: Was kann ich tun, wenn die CSP einer Website ein Skript blockiert?

Öffnen Sie in ScriptCat **Network Rules** (Netzwerkregeln) und wählen Sie **Werkzeuge → Netzwerkregeln → Neue Regel → CSP entfernen**. Tragen Sie unter **Websites** nur die betroffene Website ein, zum Beispiel `example.com`. Speichern Sie die Regel und laden Sie bereits geöffnete Seiten neu.

Die Vorlage **Remove CSP** entfernt CSP-Antwort-Header für Dokumente im Haupt- und in Unterframes. `X-Frame-Options` kann zusätzlich entfernt werden.

#### Q: Was bedeutet `This document requires 'TrustedHTML' assignment.`?

Diese Meldung bedeutet meist, dass der Browser einen DOM-Vorgang ablehnt, weil die Website Trusted Types erzwingt. Eine Website kann Trusted Types mit der CSP-Direktive `require-trusted-types-for 'script'` aktivieren. Ein Userscript kann den Fehler auslösen, wenn es einen nicht erlaubten Vorgang ausführt. Der Browser setzt dabei die Sicherheitsrichtlinie der Website durch; die Meldung allein belegt keinen Fehler in ScriptCat.

Wird die Einschränkung durch einen durchsetzenden CSP-Antwort-Header des Dokuments aktiviert, kann eine **Remove CSP**-Regel für diese Website helfen. Sie löst den Fehler nicht zwangsläufig, wenn dessen Ursache kein entfernbarer CSP-Antwort-Header ist.

#### Q: Warum entfernt ScriptCat CSP nicht standardmäßig auf allen Websites?

CSP und Trusted Types helfen, Risiken wie Cross-Site-Scripting (XSS) zu verringern. Das Entfernen von CSP schwächt den eingebauten Schutz der betroffenen Website. Erstellen Sie Regeln nur für Websites, auf denen sie tatsächlich benötigt werden. Der Bereich **Alle Websites** ist verfügbar, vor dem Speichern fragt ScriptCat jedoch nach einer Bestätigung.

:::warning Sicherheitshinweis

Verwenden Sie **Alle Websites** nur, wenn Sie die Sicherheitsauswirkungen verstehen und akzeptieren.

:::

:::info Zu einem Trusted-Types-Kompatibilitätsfehler in ScriptCat

[ScriptCat #1239](https://github.com/scriptscat/scriptcat/issues/1239) enthielt außerdem ein separates Kompatibilitätsproblem mit `GM_xmlhttpRequest`, das mit [ScriptCat #1242](https://github.com/scriptscat/scriptcat/pull/1242) behoben wurde. Diese Korrektur deaktiviert oder umgeht Trusted Types nicht und ändert nicht die CSP einer Website. Aktualisieren Sie ScriptCat, falls Sie eine ältere Version verwenden.

:::

## Cloud-Synchronisationsprobleme

> Grundlegende Synchronisationsnutzung siehe [Synchronisation und Backup](/docs/use/sync/).

#### Q: Probleme mit OneDrive / Google Drive / WebDAV Synchronisation?

1. **Gelöschte Skripte erscheinen erneut** — Stellen Sie sicher, dass „Löschsynchronisation" auf allen Geräten aktiviert ist

## Skript-Installationsprobleme

> Installation von Skripten siehe [Skripte installieren](/docs/use/script_installation/).

## Cookie-Autorisierungsprobleme

#### Q: GM_cookie kann keine Cookies abrufen?

1. **Autorisierungspopup wird nicht angezeigt** — Stellen Sie sicher, dass `GM_cookie` korrekt in `@grant` des Skripts deklariert ist, und verwenden Sie `@connect`, um die zu besuchenden Domains zu deklarieren

## Skript-Datenverlust

#### Q: Alle Skripte verschwunden nach dem Öffnen des Browsers?

1. **Initialisierungsverzögerung** — ScriptCat lädt möglicherweise noch Daten beim Browserstart. Warten Sie einige Sekunden oder starten Sie den Browser neu
2. **Bereinigungssoftware** — Tools wie 360 Security Guard oder CCleaner können Erweiterungsdaten löschen. Schließen Sie Browser-Erweiterungsdaten in den Bereinigungseinstellungen aus
3. **Regelmäßige Backups empfohlen** — Verwenden Sie die Exportfunktion oder [Cloud-Synchronisation](/docs/use/sync/) zur regelmäßigen Sicherung
