---
title: MCP-integratie
---

MCP ([Model Context Protocol](https://modelcontextprotocol.io/)) stelt Agent in staat verbinding te maken met externe MCP-servers en automatisch toegang te krijgen tot de tools, resources en promptsjablonen die zij bieden.

> In tegenstelling tot de andere subsystemen van Agent kunnen MCP-servers momenteel **alleen door de gebruiker op de beheerpagina worden geconfigureerd** — er is geen `CAT.agent.mcp`-beheer-API voor scripts. Alles wat een script kan waarnemen, is dat tools van deze servers automatisch worden aangeroepen tijdens gesprekken.

## Een MCP-server configureren

Voeg er een toe op de beheerpagina → **Agent → MCP**:

| Veld | Beschrijving |
|------|------|
| Naam | Weergavenaam voor de server |
| URL | Streamable HTTP-eindpunt (JSON-RPC 2.0 via POST) |
| API-sleutel | Optioneel, voor authenticatie |
| Aangepaste headers | Optioneel |
| Ingeschakeld | Of de server actief is |

De MCP-client van ScriptCat gebruikt het **Streamable HTTP**-transport en ondersteunt protocolversie `2025-03-26`.

Een MCP-server kan drie soorten mogelijkheden bieden:

| Mogelijkheid | Beschrijving |
|------|------|
| **Tools** | Automatisch geregistreerd als tools die Agent kan aanroepen |
| **Resources** | Leesbare resources (tekst/binair) |
| **Prompts** | Promptsjablonen, met ondersteuning voor parameters |

## Gebruik in een gesprek

Tools van ingeschakelde MCP-servers verschijnen automatisch in de toollijst die beschikbaar is voor Agent-gesprekken, genoemd volgens het patroon `mcp_{gesaneerde servernaam}_{toolName}` — de AI beslist op basis van de gebruikersintentie of ze worden aangeroepen. Dit werkt op dezelfde manier als hoe [Skills](../skill-install) automatisch worden geladen; scriptontwikkelaars hoeven zich meestal geen zorgen te maken over de onderliggende details.

Om te controleren of een specifieke MCP-tool beschikbaar is, vraagt u het gewoon rechtstreeks aan de AI in een gesprek, of controleert u de ontdekte toollijst in de details van die server op de beheerpagina.
