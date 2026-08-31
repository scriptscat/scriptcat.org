---
title: Accesso Esterno (CLI e Client AI)
sidebar_label: Accesso Esterno
---

**Accesso Esterno** permette a programmi di riga di comando locali e client AI compatibili con [MCP](https://modelcontextprotocol.io/) di gestire gli script in ScriptCat tramite [sctl](https://github.com/scriptscat/sctl).

```text
AI client ── stdio MCP ──▶ sctl mcp ── local control API ──▶ sctl serve ── WebSocket ──▶ ScriptCat
CLI ────────────────────────────────────────────────────────▲
```

`sctl serve` è un daemon locale separato che deve essere avviato esplicitamente.

:::warning L'ascoltatore è locale per impostazione predefinita
sctl ascolta su `127.0.0.1` per impostazione predefinita. Ascolta su un'altra interfaccia solo quando viene passato `--listen-address` esplicitamente.
:::

## 1. Installare sctl

```bash
curl -fsSL https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.sh | sh
```

o Windows PowerShell:

```powershell
irm https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.ps1 | iex
```

```bash
sctl version
```

## 2. Avviare il daemon e registrarsi

### 2.1 Scegliere una directory dati

```bash
export SCTL_DATA_DIR=/absolute/path/to/sctl-data
sctl serve
sctl status
sctl mcp
```

### 2.2 Avviare il daemon

```bash
sctl serve
```

### 2.3 Abbinare in ScriptCat

1. Apri **Impostazioni → Strumenti → Accesso Esterno** in ScriptCat e attiva l'interruttore.
2. Conferma che l'**indirizzo sctl** corrisponde al daemon.
3. Esegui in un altro terminale:

   ```bash
   sctl connect
   ```

4. Inserisci il codice terminale di 8 caratteri.
5. Verifica la connessione:

   ```bash
   sctl status
   ```

:::warning Il codice di abbinamento è solo del terminale
Il codice è simile a `A1B2-C3D4`, scade dopo 2 minuti e funziona una volta sola. Non incollarlo mai in una chat AI, issue, log o configurazione MCP.
:::

## 3. Permessi e conferma {#permissions}

| Capacità | Comportamento predefinito |
|---|---|
| Elencare script e leggere metadati | Restituire direttamente |
| Leggere o cercare sorgente script | Seguire la politica di **lettura sorgente** |
| Installare, modificare, abilitare, disabilitare o eliminare uno script | Seguire la politica di **scrittura** |

## 4. Uso della riga di comando

```bash
sctl get                         # Elencare script
sctl get <uuid>                  # Leggere metadati
sctl get <uuid> -o source        # Stampare sorgente completa
sctl get <uuid> -o source --lines 20-80
sctl grep <uuid> "fetch("         # Ricerca letterale
sctl grep <uuid> "pattern" -E    # Espressione regolare
sctl install <url|file>
sctl edit <uuid> --replace OLD --with NEW
sctl enable <uuid>
sctl disable <uuid>
sctl delete <uuid>
sctl status
```

## 5. Connettere un client AI (MCP)

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

Strumenti attuali:

| Strumento | Scopo | Politica di conferma |
|---|---|---|
| `scripts_list` | Riepiloghi script | Nessuna |
| `scripts_metadata_get` | Metadati di uno script | Nessuna |
| `scripts_source_get` | Leggere sorgente per UUID | Politica di lettura sorgente |
| `scripts_source_grep` | Cercare nella sorgente | Politica di lettura sorgente |
| `scripts_install_request` | Richiedere installazione | Politica di scrittura |
| `scripts_edit_request` | Richiedere modifica | Politica di scrittura |
| `scripts_toggle_request` | Richiedere abilitazione/disabilitazione | Politica di scrittura |
| `scripts_delete_request` | Richiedere eliminazione | Politica di scrittura |

## 6. Audit e revoca

- `sctl status` mostra versione daemon, connettività ed eventi di sicurezza recenti.
- "Ferma Accesso Esterno" disconnette, elimina lo stato di abbinamento e cancella i permessi di sessione.

## 7. Risoluzione dei problemi {#troubleshooting}

**Il daemon non è raggiungibile** — Esegui prima `sctl serve`.

**Autenticazione canale di controllo fallita** — Conferma che `serve`, comandi CLI e processo MCP risolvono alla stessa directory dati assoluta.

**Lo stato dice "Connessione fallita"** — Conferma che il daemon è in esecuzione e l'indirizzo corrisponde.

**Un comando non restituisce** — Controlla il browser per una pagina di conferma di scrittura o divulgazione sorgente.

**Trovare i log** — I log si trovano in `<data-dir>/logs/`.

| Piattaforma | Directory log |
|---|---|
| macOS | `~/Library/Application Support/sctl/logs/` |
| Windows | `%LOCALAPPDATA%\sctl\logs\` |
| Linux | `~/.config/sctl/logs/` |
