---
title: OPFS-bestands-API
---

`@grant CAT.agent.opfs`

Met de OPFS-bestands-API (Origin Private File System) kan een script bestanden in de Agent-werkruimte lezen en schrijven. Alle paden zijn relatief ten opzichte van de map `agents/workspace/`.

## write — een bestand schrijven

```javascript
const result = await CAT.agent.opfs.write(path, content);
```

**Parameters:**

| Parameter | Type | Beschrijving |
|------|------|------|
| `path` | `string` | Bestandspad (vereist); ondersteunt geneste mappen |
| `content` | `string \| Blob` | Bestandsinhoud |

**Ondersteunde `content`-indelingen:**

| Indeling | Beschrijving |
|------|------|
| Gewone string | Opgeslagen als UTF-8-tekstbestand |
| Data-URL-string | Automatisch gedecodeerd en opgeslagen als binair (bv. `data:image/png;base64,...`) |
| `Blob`-object | Binaire gegevens direct opgeslagen |

**Retourneert `WriteResult`:**

| Veld | Type | Beschrijving |
|------|------|------|
| `path` | `string` | Pad waar het bestand is opgeslagen |
| `size` | `number` | Bestandsgrootte (bytes) |

```javascript
// Schrijf een tekstbestand
await CAT.agent.opfs.write("data/config.json", JSON.stringify({ key: "value" }));

// Schrijf een binair bestand (data-URL)
const canvas = document.createElement("canvas");
const dataUrl = canvas.toDataURL("image/png");
await CAT.agent.opfs.write("images/chart.png", dataUrl);
```

> Bovenliggende mappen worden automatisch aangemaakt als ze niet bestaan. Als het bestand al bestaat, wordt de inhoud ervan overschreven.

## read — een bestand lezen

```javascript
const result = await CAT.agent.opfs.read(path, format?);
```

**Parameters:**

| Parameter | Type | Standaard | Beschrijving |
|------|------|--------|------|
| `path` | `string` | — | Bestandspad (vereist) |
| `format` | `"text" \| "blob"` | `"text"` | Leesindeling |

**Retourneert `ReadResult`:**

| Veld | Type | Wanneer aanwezig | Beschrijving |
|------|------|------|------|
| `path` | `string` | altijd | bestandspad |
| `size` | `number` | altijd | Bestandsgrootte |
| `content` | `string` | format="text" | Tekstinhoud van het bestand |
| `data` | `Blob` | format="blob" | Het Blob-object van het bestand (overgedragen via structured clone) |
| `mimeType` | `string` | format="blob" | Automatisch gedetecteerd MIME-type |

**Twee leesmodi:**

```javascript
// Tekstmodus — geschikt voor JSON- en tekstbestanden
const config = await CAT.agent.opfs.read("data/config.json");
const data = JSON.parse(config.content);

// Blobmodus — geschikt voor afbeeldingen en binaire bestanden
const image = await CAT.agent.opfs.read("images/chart.png", "blob");
// image.data is een echt Blob-object (geen scope-beperkte blob:-URL)
// Maak een lokale URL met URL.createObjectURL(image.data) in welke
// context die het nodig heeft, of geef het Blob rechtstreeks door aan elke API die er een accepteert
```

**Automatische MIME-typedetectie:**

| Extensie | MIME-type |
|--------|----------|
| `.jpg` / `.jpeg` | `image/jpeg` |
| `.png` | `image/png` |
| `.gif` | `image/gif` |
| `.webp` | `image/webp` |
| `.svg` | `image/svg+xml` |
| `.mp3` | `audio/mpeg` |
| `.wav` | `audio/wav` |
| `.mp4` | `video/mp4` |
| `.pdf` | `application/pdf` |
| `.json` | `application/json` |
| `.txt` | `text/plain` |
| `.html` | `text/html` |
| `.css` | `text/css` |
| `.js` | `application/javascript` |
| overig | `application/octet-stream` |

## list — een map weergeven

```javascript
const entries = await CAT.agent.opfs.list(path?);
```

**Parameters:**

| Parameter | Type | Standaard | Beschrijving |
|------|------|--------|------|
| `path` | `string` | `""` | Mappad; een lege string betekent de hoofdmap |

**Retourneert `FileEntry[]`:**

| Veld | Type | Beschrijving |
|------|------|------|
| `name` | `string` | Bestands-/mapnaam |
| `type` | `"file" \| "directory"` | Type |
| `size` | `number` | Bestandsgrootte (alleen `file`-type) |

```javascript
const entries = await CAT.agent.opfs.list("data/");
for (const entry of entries) {
  if (entry.type === "file") {
    console.log(`${entry.name} (${entry.size} bytes)`);
  } else {
    console.log(`${entry.name}/`);
  }
}
```

## delete — een bestand of map verwijderen

```javascript
const result = await CAT.agent.opfs.delete(path);
```

Ondersteunt het recursief verwijderen van een map en alles erin.

**Retourneert:**

```typescript
{ success: true }
```

## readAttachment — een bijlage lezen

```javascript
const result = await CAT.agent.opfs.readAttachment(attachmentId);
```

Leest bijlagegegevens (afbeeldingen, bestanden, enz.) uit een gesprek. De bijlage-ID komt van `ContentBlock.attachmentId` in een bericht.

**Parameters:**

| Parameter | Type | Beschrijving |
|------|------|------|
| `attachmentId` | `string` | Bijlage-ID (vereist) |

**Retourneert:**

| Veld | Type | Beschrijving |
|------|------|------|
| `id` | `string` | Bijlage-ID |
| `data` | `Blob` | Binaire bijlagegegevens |
| `size` | `number` | Bestandsgrootte (bytes) |
| `mimeType` | `string` | MIME-type |

```javascript
// Lees een afbeeldingsbijlage die de AI in een gesprek heeft gegenereerd
const messages = await conv.getMessages();
const lastMsg = messages[messages.length - 1];
const imageBlock = lastMsg.content.find(b => b.type === "image");
if (imageBlock) {
  const attachment = await CAT.agent.opfs.readAttachment(imageBlock.attachmentId);
  console.log(`Bijlagegrootte: ${attachment.size}, type: ${attachment.mimeType}`);
}
```

## Werken met Blob-gegevens

- `read(path, "blob")` retourneert een echt `Blob`-object dat is overgedragen via [structured clone](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) — geen `blob:`-URL die is gebonden aan de oorsprong van de extensie, dus er is geen cross-context-toegangsbeperking om u zorgen over te maken
- Om een tijdelijke URL te krijgen die in een pagina kan worden gebruikt, roept u `URL.createObjectURL(result.data)` aan; roep `URL.revokeObjectURL()` aan als u klaar bent
- U kunt de `Blob` ook rechtstreeks doorgeven aan elke Web-API die een `Blob`/`File` accepteert (bv. de `body` van `fetch`, `FormData.append`, een `DataTransfer` voor `<input type="file">`)
