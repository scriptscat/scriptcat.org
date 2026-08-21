---
title: Referentie van ingebouwde tools
---

Agent wordt geleverd met een reeks ingebouwde tools die de AI automatisch aanroept tijdens gesprekken. Deze tools zijn standaard beschikbaar in bewaarde gesprekken; scriptontwikkelaars hoeven ze meestal niet rechtstreeks aan te roepen — de AI kiest de juiste tool op basis van de gebruikersintentie.

Inzicht in wat deze tools kunnen doen, helpt u betere systeemprompts en aangepaste tools te schrijven.

## Webgegevens ophalen

### web_fetch

Haal de inhoud van een URL op, met ondersteuning voor HTML-naar-tekstextractie en LLM-samenvatting.

| Parameter | Type | Vereist | Beschrijving |
|------|------|------|------|
| `url` | `string` | Ja | Doel-URL (alleen http/https) |
| `prompt` | `string` | Nee | Samenvattingsprompt (wanneer opgegeven, wordt een LLM gebruikt om de inhoud te distilleren) |
| `max_length` | `number` | Nee | maximaal aantal inhoudstekens |

**Gedragdetails:**
- Time-out van 30 seconden voor verzoeken
- HTML-inhoud extraheert automatisch de hoofdtekst (verwijdert navigatie, zijbalken, enz.)
- JSON-antwoorden worden automatisch geparseerd
- Gewone tekst wordt ongewijzigd geretourneerd
- Wanneer `prompt` is opgegeven, wordt de opgehaalde inhoud naar een LLM verzonden voor samenvatting

**Retourwaarde:**
```json
{
  "url": "https://example.com",
  "content_type": "text/html",
  "content": "Geëxtraheerde hoofdtekst...",
  "truncated": false,
  "final_url": "https://example.com/redirected"
}
```

### web_search

Vraag een zoekmachine op en retourneer gestructureerde zoekresultaten.

| Parameter | Type | Vereist | Beschrijving |
|------|------|------|------|
| `query` | `string` | Ja | Zoekwoorden |
| `max_results` | `number` | Nee | Maximaal aantal resultaten (standaard 5, maximum 10) |

**Ondersteunde zoekmachines:**

| Engine | Beschrijving | Configuratie vereist |
|------|------|---------|
| DuckDuckGo | Standaardengine | Geen |
| Bing | Microsoft Bing Search | API-sleutel vereist |
| Baidu | Baidu Search | Geen API-sleutel vereist |
| Google Custom Search | Google Custom Search | API-sleutel + CSE-ID vereist |

Zoekmachines worden geconfigureerd op de beheerpagina → Agent → Instellingen.

**Retourwaarde:**
```json
[
  {
    "title": "Titel van zoekresultaat",
    "url": "https://example.com/result",
    "snippet": "Samenvattingstekst van resultaat..."
  }
]
```

### get_tab_content

Lees de gerenderde pagina-inhoud van een opgegeven tabblad, omgezet in gestructureerde Markdown met CSS-selector-annotaties.

| Parameter | Type | Vereist | Beschrijving |
|------|------|------|------|
| `tab_id` | `number` | Ja | Tabblad-ID |
| `selector` | `string` | Nee | CSS-selector; alleen het overeenkomende deel extraheren |
| `prompt` | `string` | Nee | samenvattingsprompt |
| `max_length` | `number` | Nee | maximaal aantal inhoudstekens |

Verschil met `web_fetch`: `get_tab_content` leest de pagina **zoals deze al door de browser is gerenderd** (inclusief dynamische JS-inhoud), terwijl `web_fetch` een nieuw HTTP-verzoek doet.

**Retourwaarde:**
```json
{
  "tab_id": 123,
  "url": "https://example.com",
  "title": "Paginatitel",
  "content": "Gestructureerde inhoud...",
  "truncated": false,
  "used_selector": "main"
}
```

## Tabbladbeheer

### list_tabs

Open tabbladen opvragen, met ondersteuning voor verschillende filtervoorwaarden.

| Parameter | Type | Vereist | Beschrijving |
|------|------|------|------|
| `url_pattern` | `string` | Nee | URL-regex-overeenkomst |
| `title_pattern` | `string` | Nee | Titel-regex-overeenkomst |
| `active` | `boolean` | Nee | Alleen het actieve tabblad retourneren |
| `window_id` | `number` | Nee | opgegeven venster |
| `audible` | `boolean` | Nee | Alleen tabbladen retourneren die momenteel audio afspelen |

### open_tab

Open een nieuw tabblad of navigeer een bestaand tabblad.

| Parameter | Type | Vereist | Beschrijving |
|------|------|------|------|
| `url` | `string` | Ja | Doel-URL |
| `tab_id` | `number` | Nee | ID van een bestaand tabblad (indien opgegeven, wordt dat tabblad genavigeerd; anders wordt een nieuw tabblad geopend) |
| `active` | `boolean` | Nee | Of het moet worden geactiveerd (standaard `true`) |
| `window_id` | `number` | Nee | opgegeven venster |
| `wait_until_loaded` | `boolean` | Nee | Of u wilt wachten tot de pagina is geladen (standaard `true`) |

### close_tab

Sluit een tabblad.

| Parameter | Type | Vereist | Beschrijving |
|------|------|------|------|
| `tab_id` | `number` | Ja | Tabblad-ID |

### activate_tab

Activeer een tabblad en focus het venster waarin het zich bevindt.

| Parameter | Type | Vereist | Beschrijving |
|------|------|------|------|
| `tab_id` | `number` | Ja | Tabblad-ID |

## Bestandssysteem (OPFS)

### opfs_write

Schrijf een bestand naar de werkruimte.

| Parameter | Type | Vereist | Beschrijving |
|------|------|------|------|
| `path` | `string` | Ja | bestandspad |
| `content` | `string` | Ja | Bestandsinhoud (data-URL-binair ondersteund) |

### opfs_read

Lees een bestand uit de werkruimte. Standaard wordt het bestandstype automatisch gedetecteerd: tekstbestanden retourneren hun inhoud, binaire bestanden retourneren een blob-URL.

| Parameter | Type | Vereist | Beschrijving |
|------|------|------|------|
| `path` | `string` | Ja | bestandspad |
| `mode` | `string` | Nee | `"text"` / `"blob"` / `"auto"` (standaard) — dwingt een specifieke retourmodus af |
| `offset` | `number` | Nee | Startregelnummer (1-gebaseerd), alleen tekstmodus |
| `limit` | `number` | Nee | Aantal te lezen regels, alleen tekstmodus (paginering is vereist zodra tekst 200 regels overschrijdt) |

### opfs_list

Mapinhoud weergeven.

| Parameter | Type | Vereist | Beschrijving |
|------|------|------|------|
| `path` | `string` | Nee | Mappad (standaard de hoofdmap) |

### opfs_delete

Verwijder een bestand of map.

| Parameter | Type | Vereist | Beschrijving |
|------|------|------|------|
| `path` | `string` | Ja | Bestands-/mappad |

## Gebruikersinteractie

### ask_user

Stel de gebruiker een vraag, met ondersteuning voor zowel vrije invoer als een gestructureerde keuze.

| Parameter | Type | Vereist | Beschrijving |
|------|------|------|------|
| `question` | `string` | Ja | De vraag |
| `options` | `string[]` | Nee | Lijst van keuzes (wanneer opgegeven, wordt dit een meerkeuzevraag) |
| `multiple` | `boolean` | Nee | Of meerdere selecties zijn toegestaan (standaard `false`) |

**Time-out:** retourneert `{ answer: null, reason: "timeout" }` na 5 minuten zonder reactie.

**Retourwaarde:**
```json
{ "answer": "De antwoordtekst van de gebruiker" }
```

### execute_script

Voer JavaScript-code uit in een pagina of een sandbox.

| Parameter | Type | Vereist | Beschrijving |
|------|------|------|------|
| `code` | `string` | Ja | JavaScript-code |
| `target` | `string` | Ja | `"page"` of `"sandbox"` |
| `tab_id` | `number` | Nee | Welk tabblad u wilt targeten wanneer `target` `page` is (standaard het huidige actieve tabblad); genegeerd voor sandbox |

**Vergelijking van uitvoeringsomgevingen:**

| Omgeving | DOM | Pagina-JS | Extensie-blob-URL | Het beste voor |
|------|-----|---------|---------------|---------|
| `target: "page"` (altijd MAIN-wereld) | ja | ja | nee | De DOM lezen/manipuleren, paginawerkingen aanroepen, paginavariabelen lezen |
| `target: "sandbox"` | nee | nee | nee | Pure berekeningen |

> De `page`-modus draait altijd in de MAIN-wereld van de pagina en deelt `window` met de pagina — dus het heeft geen toegang tot de eigen blob-URL's van de extensie (bv. het adres dat `opfs_read` in de blobmodus retourneert). Gebruik in plaats daarvan een SkillScript wanneer u met een blob-URL moet werken.

## Sub-agents

### agent

Start een onafhankelijke sub-agent om een complexe deeltaak af te handelen.

| Parameter | Type | Vereist | Beschrijving |
|------|------|------|------|
| `prompt` | `string` | Ja | Beschrijving van de deeltaak |
| `description` | `string` | Nee | Een kort label (een paar woorden, voor UI-weergave) |
| `type` | `string` | Nee | Sub-agenttype (zie hieronder), standaard `"general"` |
| `tab_id` | `number` | Nee | Tabblad-ID om door te geven aan de sub-agent; de sub-agent werkt op dat tabblad |

**Sub-agenttypen:**

| type | Beschrijving | Beschikbare tools |
|------|------|---------|
| `researcher` | Informatie ophalen (alleen-lezen) | web_search, web_fetch, pagina-inhoud lezen |
| `page_operator` | Browserautomatisering | Tabbladbeheer, DOM-manipulatie, pagina-interactie |
| `general` | Algemeen doel (standaard) | Alle tools |

**Kenmerken:**
- Een sub-agent heeft een eigen onafhankelijke gesprekscontext
- Het **kan geen** `ask_user` of `agent` gebruiken (om recursie te voorkomen)
- De gebeurtenissen van een sub-agent worden via `sub_agent_event` doorgegeven aan het bovenliggende gesprek

## Taakbeheer

Deze groep tools beheert een tijdelijke taaklijst binnen een gesprek (in het geheugen, niet bewaard).

### create_task

| Parameter | Type | Vereist | Beschrijving |
|------|------|------|------|
| `subject` | `string` | Ja | Taaktitel |
| `description` | `string` | Nee | Gedetailleerde beschrijving |

### update_task

| Parameter | Type | Vereist | Beschrijving |
|------|------|------|------|
| `task_id` | `string` | Ja | Taak-ID |
| `status` | `string` | Nee | `"pending"` / `"in_progress"` / `"completed"` |
| `subject` | `string` | Nee | Nieuwe titel |
| `description` | `string` | Nee | Nieuwe beschrijving |

### list_tasks

Geen parameters; retourneert een korte lijst van alle taken.

> De taakbeheertools zijn vooral bedoeld voor de AI om de eigen voortgang bij te houden tijdens complexe taken met meerdere stappen; taakgegevens worden niet bewaard.
