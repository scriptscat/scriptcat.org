---
title: Externe toegang (CLI en AI-clients)
sidebar_label: Externe toegang
---

**Externe toegang** laat lokale commandoregelprogramma's en [MCP](https://modelcontextprotocol.io/)-geschikte AI-clients
scripts in ScriptCat beheren via [sctl](https://github.com/scriptscat/sctl).

```text
AI client ── stdio MCP ──▶ sctl mcp ── local control API ──▶ sctl serve ── WebSocket ──▶ ScriptCat
CLI ────────────────────────────────────────────────────────▲
```

`sctl serve` is een aparte lokale daemon die u expliciet moet starten. `sctl mcp` en opdrachtregelcommando's starten
hem nooit automatisch. Het beleid van ScriptCat en de browserbevestigingsinterface bepalen altijd of openbaarmaking van
de broncode of een schrijfbewerking is toegestaan; een extern programma kan zijn eigen verzoek niet goedkeuren.

:::warning De luisteraar is standaard lokaal
sctl luistert standaard op `127.0.0.1`. Het luistert alleen op een ander interface wanneer `--listen-address` expliciet
wordt doorgegeven. `ws://` versleutelt bedrijfsverkeer niet en er is geen isolatie per externe client, dus gebruik een
niet-standaard adres alleen op een vertrouwd netwerk. De extensie en de daemon leggen nog steeds een langetermijnsleutel
vast via een eenmalige koppelingscode en gebruiken wederzijdse authenticatie bij latere verbindingen.
:::

## 1. Installeer sctl

Installeer de nieuwste release met één opdracht — macOS en Linux:

```bash
curl -fsSL https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.sh | sh
```

of Windows PowerShell:

```powershell
irm https://raw.githubusercontent.com/scriptscat/sctl/main/scripts/install.ps1 | iex
```

De installer downloadt het met koppeltekens genoemde `sctl-<version>-<os>-<arch>.<ext>`-releasearchief voor uw platform,
verifieert de sha256 ervan tegen `checksums.txt` van dezelfde release en installeert `sctl` in `~/.local/bin`
(macOS/Linux) of `%LOCALAPPDATA%\sctl\bin` (Windows). `SCTL_VERSION` zet een specifieke versie vast; `SCTL_INSTALL_DIR`
overschrijft de installatiemap. Als de installatiemap niet op uw `PATH` staat, drukt de installer de exacte
`PATH`-hint voor uw platform af — hij bewerkt nooit uw shellprofiel of gebruikers-PATH voor u.

sctl is één enkel uitvoerbaar bestand. Als [GitHub Releases](https://github.com/scriptscat/sctl/releases) een
gepubliceerd archief voor uw platform heeft, kunt u het ook downloaden en uitpakken en vervolgens `sctl` (`sctl.exe`
op Windows) op `PATH` zetten.

```bash
sctl version
```

Een gewone broncodebuild rapporteert `0.0.0-dev` om hem te onderscheiden van een releasebuild met ingebouwde versie,
commit- en buildtijdmetadata; dit verhindert niet dat hij verbinding maakt met ScriptCat. Als er geen release
beschikbaar is, kunnen bijdragers hem bouwen vanuit de [sctl-repository](https://github.com/scriptscat/sctl).

## 2. Start de daemon en schrijf in

Inschrijving is een eenmalige stap. Daarna delen de CLI en elke MCP-client het vertrouwde extensie-naar-daemon-kanaal;
zij koppelen niet afzonderlijk.

### 2.1 Kies een gegevensmap

De daemon, CLI en MCP-process moeten dezelfde gegevensmap gebruiken. Deze slaat de langetermijnskoppelingssleutel, het
lokale besturingstoken en de logs op. Kies een absoluut pad dat privé is voor de huidige gebruiker:

```text
/absolute/path/to/sctl-data
```

Stel dezelfde omgevingsvariabele in voor elk sctl-proces:

```bash
export SCTL_DATA_DIR=/absolute/path/to/sctl-data
sctl serve
sctl status
sctl mcp
```

Een expliciet `--data-dir` heeft voorrang op de omgevingsvariabele.

Als noch `--data-dir` noch `SCTL_DATA_DIR` is ingesteld, gebruikt sctl de standaard per-gebruiker
toepassingsgegevensmap van het platform. Zet de gegevensmap niet in een repository of gedeelde synchronisatiemap en geef
de `pairing.key` of `control.token` nooit aan een AI-model.

### 2.2 Start de daemon

Voer dit uit in een terminal en houd het proces actief:

```bash
sctl serve
```

Het standaardadres is `ws://127.0.0.1:8643`. De daemon wordt nooit automatisch gestart door `connect`, `status`, een
ander CLI-commando of `sctl mcp`. Gebruik voor permanent gebruik de bovenstaande opdracht met de
gebruikersservicemanager van uw besturingssysteem.

Om expliciet op elk netwerkinterface te luisteren, voert u het volgende uit:

```bash
sctl --listen-address 0.0.0.0:8643 serve
```

Geef op de daemonhost hetzelfde `--listen-address` door aan `connect`, `status`, andere CLI-commando's en `sctl mcp`.
Voer in de instelling **sctl-adres** van ScriptCat een adres in dat de extensie daadwerkelijk kan bereiken, zoals
`ws://192.168.1.10:8643`; voer geen `0.0.0.0` in.

### 2.3 Schakel in en koppel in ScriptCat

1. Open **Instellingen → Hulpmiddelen → Externe toegang** in ScriptCat en zet de schakelaar aan.
2. Bevestig dat het **sctl-adres** overeenkomt met de daemon; houd normaal de standaardwaarde `ws://127.0.0.1:8643`.
3. Houd `sctl serve` actief en voer in een andere terminal uit:

   ```bash
   sctl connect
   ```

4. Voer de 8-tekens tellende terminalcode in het dialoogvenster "sctl inschrijven" in.
5. Controleer de verbinding:

   ```bash
   sctl status
   ```

De status moet een verbonden extensie rapporteren en de daemonversie tonen.

:::warning De koppelingscode is alleen voor de terminal
De code ziet eruit als `A1B2-C3D4`, vervalt na 2 minuten en werkt één keer. Hij wordt niet naar de extensie verzonden via
de WebSocket. Plak hem nooit in een AI-chat, issue, log of MCP-configuratie; voer `connect` opnieuw uit als hij
verloopt.
:::

## 3. Machtigingen en bevestiging {#permissions}

| Mogelijkheid | Standaardgedrag |
|---|---|
| Scripts weergeven en metadata lezen | Direct retourneren |
| Scriptbron lezen of doorzoeken | Het **bronlezen**-beleid volgen |
| Een script installeren, bewerken, in- of uitschakelen of verwijderen | Het **schrijven**-beleid volgen |

Beide beleidsregels bieden "Goedkeuring vereist" (standaard) en "Direct toestaan".

Met "Goedkeuring vereist" openen verzoeken een browserbevestigingspagina. U kunt weigeren, één keer toestaan of kiezen
voor "Toestaan voor deze sessie". Sessietoestemmingen zijn gekoppeld aan script en bewerkingssoort en worden gewist
wanneer de browser opnieuw wordt gestart, de extensie opnieuw wordt geladen of Externe toegang stopt. Een verzoek
vervalt na 5 minuten zonder beslissing; verbreking van de verbinding door de aanvrager of `Ctrl-C` maakt het ook ongeldig.

"Direct toestaan" slaat de bevestigingspagina voor die categorie bewerkingen over. Broncode kan API-sleutels, cookies
en andere geheimen bevatten, terwijl schrijfbewerkingen scripts direct kunnen wijzigen, dus schakel dit alleen in
wanneer u dat risico accepteert.

## 4. Gebruik vanaf de commandoregel

```bash
sctl get                         # Scripts weergeven
sctl get <uuid>                  # Metadata lezen
sctl get <uuid> -o source        # Volledige broncode afdrukken
sctl get <uuid> -o source --lines 20-80
sctl grep <uuid> "fetch("         # Letterlijke broncode zoeken
sctl grep <uuid> "pattern" -E    # Reguliere expressie
sctl install <url|file>
sctl edit <uuid> --replace OLD --with NEW
sctl enable <uuid>
sctl disable <uuid>
sctl delete <uuid>
sctl status
```

`grep` is standaard letterlijk; `-E` schakelt reguliere expressies in, `-i` negeert hoofdlettergebruik, `-C N`
voegt context toe en `-m N` beperkt het aantal overeenkomsten. Geen overeenkomst is succesvol en eindigt met code 0.

`edit` is op inhoud gebaseerd, nooit op regelnummers. Elke `oldText` moet standaard precies één keer voorkomen;
`--replace-all` vervangt elke overeenkomst. U kunt ook een `{oldText,newText,replaceAll?}`-array doorgeven met
`-f <file>`. Alleen bewerkingen worden naar de extensie verzonden; het is niet nodig om eerst de volledige broncode te
lezen of te uploaden.

Schrijfbewerkingen en bronopenbaarmaking blokkeren op een browserbeslissing. CLI-exitcodes:

| Exitcode | Betekenis |
|---|---|
| `0` | Goedgekeurd en geslaagd, of een leesopdracht is normaal voltooid |
| `1` | De gebruiker heeft het verzoek afgewezen |
| `2` | Het verzoek is verlopen, geannuleerd met `Ctrl-C`, of de extensie is verbroken |
| `3` | Andere fouten zoals argumenten, verbinding of ontbrekend script |

Voer `sctl <command> --help` uit voor elke optie.

## 5. Verbind een AI-client (MCP)

Zorg er eerst voor dat `sctl serve` actief is en dat `status` een verbonden extensie rapporteert. Configureer vervolgens
de MCP-client om een apart `sctl mcp`-proces te starten. Gebruik absolute binaire en gegevenspaden in GUI-clients:

```json
{
  "mcpServers": {
    "scriptcat": {
      "command": "/absolute/path/to/sctl",
      "env": {
        "SCTL_DATA_DIR": "/absolute/path/to/sctl-data"
      },
      "args": [
        "mcp",
        "--name",
        "my-ai-client"
      ]
    }
  }
}
```

Veel GUI-toepassingen breiden `~`, `$HOME` of shell-expressies niet uit. `--name` is een auditlabel, geen
geauthenticeerde identiteit of autorisatiegrens. MCP-stdout is gereserveerd voor protocolframes; wikkel sctl niet in
een script dat een banner naar stdout afdrukt.

Huidige hulpmiddelen:

| Hulpmiddel | Doel | Bevestigingsbeleid |
|---|---|---|
| `scripts_list` | Scriptsamenvattingen weergeven | Geen |
| `scripts_metadata_get` | Metadata van één script lezen | Geen |
| `scripts_source_get` | Broncode lezen per uuid en optioneel regelvenster | Bronlezen-beleid |
| `scripts_source_grep` | Broncode doorzoeken en overeenkomende regels retourneren | Bronlezen-beleid |
| `scripts_install_request` | Scriptinstallatie aanvragen | Schrijven-beleid |
| `scripts_edit_request` | Een op inhoud gebaseerde bewerking aanvragen | Schrijven-beleid |
| `scripts_toggle_request` | In- of uitschakelen aanvragen | Schrijven-beleid |
| `scripts_delete_request` | Verwijdering aanvragen | Schrijven-beleid |

## 6. Auditen en intrekken

- "Auditlog weergeven" in de kaart Externe toegang opent de logpagina gefilterd op deze bron.
- `sctl status` toont daemonversie, extensieconnectiviteit en recente beveiligingsgebeurtenissen;
  `-o json` retourneert volledige gebeurtenissen.
- "Externe toegang stoppen" verbreekt de verbinding, verwijdert de koppelingsstatus aan de extensiezijde en wist
  sessietoestemmingen. Daarna is herinschrijving vereist.
- Om slechts één AI-client uit te schakelen, verwijdert u sctl uit de MCP-configuratie van die client; dit trekt geen
  andere CLI- of clienttoegang in.

## 7. Problemen oplossen {#troubleshooting}

**De daemon is onbereikbaar**

Voer eerst `sctl serve` uit. Aanvragende commando's starten de daemon nooit automatisch.

**Authenticatie van het besturingskanaal mislukt**

Bevestig dat `serve`, CLI-commando's en het MCP-proces naar dezelfde absolute gegevensmap verwijzen. Controleer zowel
`SCTL_DATA_DIR` als eventueel expliciet `--data-dir`, en herstart vervolgens de MCP-client.

**De status zegt "Verbinding mislukt"**

Bevestig dat de daemon actief is, dat het extensieadres ermee overeenkomt en dat lokale beveiligingssoftware
`127.0.0.1:8643` niet blokkeert.

**Een commando keert niet terug**

Controleer in de browser op een bronopenbaarmakings- of schrijfbevestigingspagina. Druk op `Ctrl-C` om het verzoek
ongeldig te maken.

**Logs vinden**

Logs staan onder `<data-dir>/logs/`. Als noch `--data-dir` noch `SCTL_DATA_DIR` is ingesteld, zijn de standaardwaarden:

| Platform | Logmap |
|---|---|
| macOS | `~/Library/Application Support/sctl/logs/` |
| Windows | `%LOCALAPPDATA%\sctl\logs\` |
| Linux | `~/.config/sctl/logs/` |
