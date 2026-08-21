---
title: Externer Zugriff (CLI und AI-Clients)
sidebar_label: Externer Zugriff
---

**Externer Zugriff** ermöglicht es lokalen Kommandozeilenprogrammen und [MCP](https://modelcontextprotocol.io/)-fähigen AI-Clients, Skripte in ScriptCat über [sctl](https://github.com/scriptscat/sctl) zu verwalten.

```text
AI client ── stdio MCP ──▶ sctl mcp ── local control API ──▶ sctl serve ── WebSocket ──▶ ScriptCat
CLI ────────────────────────────────────────────────────────▲
```

`sctl serve` ist ein separater lokaler Daemon, der explizit gestartet werden muss. `sctl mcp` und Anfragebefehle starten ihn niemals automatisch.

:::warning Der Listener ist standardmäßig lokal
sctl hört standardmäßig auf `127.0.0.1`. Es hört nur auf einer anderen Schnittstelle, wenn `--listen-address` explizit übergeben wird. `ws://` verschlüsselt keinen Geschäftsverkehr, verwenden Sie eine Nicht-Standard-Adresse nur in vertrauenswürdigen Netzwerken.
:::

## 1. sctl installieren

```bash
curl -fsSL https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.sh | sh
```

oder Windows PowerShell:

```powershell
irm https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.ps1 | iex
```

```bash
sctl version
```

## 2. Daemon starten und registrieren

### 2.1 Datenverzeichnis wählen

```bash
export SCTL_DATA_DIR=/absolute/path/to/sctl-data
sctl serve
sctl status
sctl mcp
```

### 2.2 Daemon starten

```bash
sctl serve
```

### 2.3 In ScriptCat aktivieren und paarweisen

1. Öffnen Sie **Einstellungen → Werkzeuge → Externer Zugriff** in ScriptCat und schalten Sie um.
2. Bestätigen Sie, dass die **sctl-Adresse** mit dem Daemon übereinstimmt.
3. Führen Sie in einem anderen Terminal aus:

   ```bash
   sctl connect
   ```

4. Geben Sie den 8-Zeichen-Terminalcode ein.
5. Verbindung überprüfen:

   ```bash
   sctl status
   ```

:::warning Der Paarungscode ist nur im Terminal
Der Code sieht wie `A1B2-C3D4` aus, läuft nach 2 Minuten ab und funktioniert nur einmal. Fügen Sie ihn niemals in einen AI-Chat, Issue, Log oder MCP-Konfiguration ein.
:::

## 3. Berechtigungen und Bestätigung {#permissions}

| Fähigkeit | Standardverhalten |
|---|---|
| Skripte auflisten und Metadaten lesen | Direkt zurückgeben |
| Skriptquelle lesen oder suchen | Folgt der **Quellenlese**-Richtlinie |
| Skript installieren, bearbeiten, aktivieren, deaktivieren oder löschen | Folgt der **Schreib**-Richtlinie |

## 4. Kommandozeilenverwendung

```bash
sctl get                         # Skripte auflisten
sctl get <uuid>                  # Metadaten lesen
sctl get <uuid> -o source        # Vollständige Quelle ausgeben
sctl get <uuid> -o source --lines 20-80
sctl grep <uuid> "fetch("         # Wörtliche Quellensuche
sctl grep <uuid> "pattern" -E    # Regulärer Ausdruck
sctl install <url|file>
sctl edit <uuid> --replace OLD --with NEW
sctl enable <uuid>
sctl disable <uuid>
sctl delete <uuid>
sctl status
```

## 5. AI-Client verbinden (MCP)

```json
{
  "mcpServers": {
    "scriptcat": {
      "command": "/absolute/path/to/sctl",
      "env": {
        "SCTL_DATA_DIR": "/absolute/path/to/sctl-data"
      },
      "args": ["mcp", "--name", "my-ai-client"]
    }
  }
}
```

Aktuelle Tools:

| Tool | Zweck | Bestätigungsrichtlinie |
|---|---|---|
| `scripts_list` | Skriptübersichten auflisten | Keine |
| `scripts_metadata_get` | Metadaten eines Skripts lesen | Keine |
| `scripts_source_get` | Quelle nach UUID lesen | Quellenlese-Richtlinie |
| `scripts_source_grep` | Quelle durchsuchen | Quellenlese-Richtlinie |
| `scripts_install_request` | Skriptinstallation anfordern | Schreib-Richtlinie |
| `scripts_edit_request` | Inhaltsgestützte Bearbeitung anfordern | Schreib-Richtlinie |
| `scripts_toggle_request` | Aktivierung/Deaktivierung anfordern | Schreib-Richtlinie |
| `scripts_delete_request` | Löschung anfordern | Schreib-Richtlinie |

## 6. Prüfung und Widerruf

- `sctl status` zeigt Daemon-Version, Erweiterungskonnektivität und letzte Sicherheitsereignisse.
- „Externen Zugriff stoppen" trennt, löscht den Paarungszustand und bereinigt Sitzungszulassungen.

## 7. Fehlerbehebung {#troubleshooting}

**Daemon nicht erreichbar** — Starten Sie zuerst `sctl serve`.

**Steuerkanal-Authentifizierung fehlgeschlagen** — Bestätigen Sie, dass `serve`, CLI-Befehle und der MCP-Prozess dasselbe absolute Datenverzeichnis auflösen.

**Status sagt „Verbindung fehlgeschlagen"** — Bestätigen Sie, dass der Daemon läuft und die Erweiterungsadresse übereinstimmt.

**Befehl gibt nicht zurück** — Prüfen Sie den Browser auf eine Quellenoffenlegungs- oder Schreibbestätigungsseite.

**Logs finden** — Logs befinden sich unter `<data-dir>/logs/`.

| Plattform | Log-Verzeichnis |
|---|---|
| macOS | `~/Library/Application Support/sctl/logs/` |
| Windows | `%LOCALAPPDATA%\sctl\logs\` |
| Linux | `~/.config/sctl/logs/` |
