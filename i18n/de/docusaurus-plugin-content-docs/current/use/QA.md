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
