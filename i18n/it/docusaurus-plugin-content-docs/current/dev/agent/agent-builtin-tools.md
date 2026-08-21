---
title: Riferimento Strumenti Integrati
---

Agent è dotato di un insieme di strumenti integrati che l'AI chiama automaticamente durante le conversazioni. Questi strumenti sono disponibili per impostazione predefinita nelle conversazioni persistenti; gli sviluppatori di script di solito non hanno bisogno di chiamarli direttamente — l'AI seleziona lo strumento giusto in base all'intento dell'utente.

Capire cosa possono fare questi strumenti ti aiuta a scrivere prompt di sistema e strumenti personalizzati migliori.

## Recupero Dati Web

### web_fetch

Recupera il contenuto di un URL, con estrazione da HTML a testo e supporto per riepilogo LLM.

| Parametro | Tipo | Obbligatorio | Descrizione |
|------|------|------|------|
| `url` | `string` | Sì | URL obiettivo (solo http/https) |
| `prompt` | `string` | No | Prompt di riepilogo (quando fornito, un LLM viene usato per distillare il contenuto) |
| `max_length` | `number` | No | Max caratteri di contenuto |

**Dettagli del comportamento:**
- Timeout della richiesta di 30 secondi
- Il contenuto HTML estrae automaticamente il testo principale (rimuove navigazione, barre laterali, ecc.)
- Le risposte JSON vengono analizzate automaticamente
- Il testo puro viene restituito così com'è
- Quando viene fornito `prompt`, il contenuto recuperato viene inviato a un LLM per il riepilogo

**Valore di ritorno:**
```json
{
  "url": "https://example.com",
  "content_type": "text/html",
  "content": "Contenuto del corpo estratto...",
  "truncated": false,
  "final_url": "https://example.com/redirected"
}
```

### web_search

Interroga un motore di ricerca e restituisce risultati di ricerca strutturati.

| Parametro | Tipo | Obbligatorio | Descrizione |
|------|------|------|------|
| `query` | `string` | Sì | Parole chiave di ricerca |
| `max_results` | `number` | No | Massimo numero di risultati (predefinito 5, limite 10) |

**Motori di ricerca supportati:**

| Motore | Descrizione | Configurazione richiesta |
|------|------|---------|
| DuckDuckGo | Motore predefinito | Nessuna |
| Bing | Microsoft Bing Search | Chiave API richiesta |
| Baidu | Baidu Search | Nessuna chiave API richiesta |
| Google Custom Search | Google Custom Search | Chiave API + ID CSE richiesti |

I motori di ricerca vengono configurati nella pagina di gestione → Agent → Impostazioni.

**Valore di ritorno:**
```json
[
  {
    "title": "Titolo del risultato di ricerca",
    "url": "https://example.com/result",
    "snippet": "Testo di riepilogo del risultato..."
  }
]
```

### get_tab_content

Legge il contenuto renderizzato della pagina di una scheda specifica, convertito in Markdown strutturato annotato con selettori CSS.

| Parametro | Tipo | Obbligatorio | Descrizione |
|------|------|------|------|
| `tab_id` | `number` | Sì | ID della scheda |
| `selector` | `string` | No | Selettore CSS; estrae solo la parte corrispondente |
| `prompt` | `string` | No | Prompt di riepilogo |
| `max_length` | `number` | No | Max caratteri di contenuto |

Differenza con `web_fetch`: `get_tab_content` legge la pagina **come già renderizzata dal browser** (incluso il contenuto JS dinamico), mentre `web_fetch` effettua una nuova richiesta HTTP.

**Valore di ritorno:**
```json
{
  "tab_id": 123,
  "url": "https://example.com",
  "title": "Titolo della pagina",
  "content": "Contenuto strutturato...",
  "truncated": false,
  "used_selector": "main"
}
```

## Gestione Schede

### list_tabs

Interroga schede aperte, con supporto per diverse condizioni di filtro.

| Parametro | Tipo | Obbligatorio | Descrizione |
|------|------|------|------|
| `url_pattern` | `string` | No | Corrispondenza regex dell'URL |
| `title_pattern` | `string` | No | Corrispondenza regex del titolo |
| `active` | `boolean` | No | Restituisce solo la scheda attiva |
| `window_id` | `number` | No | Finestra specificata |
| `audible` | `boolean` | No | Restituisce solo le schede che attualmente riproducono audio |

### open_tab

Apre una nuova scheda o naviga una esistente.

| Parametro | Tipo | Obbligatorio | Descrizione |
|------|------|------|------|
| `url` | `string` | Sì | URL obiettivo |
| `tab_id` | `number` | No | ID di una scheda esistente (se fornito, quella scheda viene navigata; altrimenti viene aperta una nuova scheda) |
| `active` | `boolean` | No | Se attivarla (predefinito `true`) |
| `window_id` | `number` | No | Finestra specificata |
| `wait_until_loaded` | `boolean` | No | Se attendere che la pagina finisca di caricare (predefinito `true`) |

### close_tab

Chiude una scheda.

| Parametro | Tipo | Obbligatorio | Descrizione |
|------|------|------|------|
| `tab_id` | `number` | Sì | ID della scheda |

### activate_tab

Attiva una scheda e mette a fuoco la finestra in cui si trova.

| Parametro | Tipo | Obbligatorio | Descrizione |
|------|------|------|------|
| `tab_id` | `number` | Sì | ID della scheda |

## File System (OPFS)

### opfs_write

Scrive un file nello spazio di lavoro.

| Parametro | Tipo | Obbligatorio | Descrizione |
|------|------|------|------|
| `path` | `string` | Sì | Percorso del file |
| `content` | `string` | Sì | Contenuto del file (supporta binario data URL) |

### opfs_read

Legge un file dallo spazio di lavoro. Per impostazione predefinita, il tipo di file viene rilevato automaticamente: i file di testo restituiscono il loro contenuto, i file binari restituiscono un URL blob.

| Parametro | Tipo | Obbligatorio | Descrizione |
|------|------|------|------|
| `path` | `string` | Sì | Percorso del file |
| `mode` | `string` | No | `"text"` / `"blob"` / `"auto"` (predefinito) — forza una modalità di ritorno specifica |
| `offset` | `number` | No | Numero di riga di inizio (indicizzato da 1), solo modalità testo |
| `limit` | `number` | No | Numero di righe da leggere, solo modalità testo (la paginazione è necessaria una volta che il testo supera 200 righe) |

### opfs_list

Elenca il contenuto di una directory.

| Parametro | Tipo | Obbligatorio | Descrizione |
|------|------|------|------|
| `path` | `string` | No | Percorso della directory (predefinito la directory radice) |

### opfs_delete

Elimina un file o una directory.

| Parametro | Tipo | Obbligatorio | Descrizione |
|------|------|------|------|
| `path` | `string` | Sì | Percorso file/directory |

## Interazione Utente

### ask_user

Fa una domanda all'utente, supportando input libero o scelta strutturata.

| Parametro | Tipo | Obbligatorio | Descrizione |
|------|------|------|------|
| `question` | `string` | Sì | La domanda |
| `options` | `string[]` | No | Elenco delle opzioni (quando fornito, diventa una domanda a scelta multipla) |
| `multiple` | `boolean` | No | Se sono consentite selezioni multiple (predefinito `false`) |

**Timeout:** restituisce `{ answer: null, reason: "timeout" }` dopo 5 minuti senza risposta.

**Valore di ritorno:**
```json
{ "answer": "Testo della risposta dell'utente" }
```

### execute_script

Esegue codice JavaScript in una pagina o in un sandbox.

| Parametro | Tipo | Obbligatorio | Descrizione |
|------|------|------|------|
| `code` | `string` | Sì | Codice JavaScript |
| `target` | `string` | Sì | `"page"` o `"sandbox"` |
| `tab_id` | `number` | No | Quale scheda puntare quando `target` è `page` (predefinito la scheda attiva corrente); ignorato per sandbox |

**Confronto degli ambienti di esecuzione:**

| Ambiente | DOM | JS della Pagina | URL blob dell'Estensione | Ideale per |
|------|-----|---------|---------------|---------|
| `target: "page"` (sempre mondo MAIN) | sì | sì | no | Leggere/manipolare il DOM, chiamare funzioni della pagina, leggere variabili della pagina |
| `target: "sandbox"` | no | no | no | Calcolo puro |

> La modalità `page` viene sempre eseguita nel mondo MAIN della pagina, condividendo `window` con la pagina — quindi non può accedere agli URL blob dell'estensione (ad esempio l'indirizzo che `opfs_read` restituisce in modalità blob). Usa uno SkillScript quando devi lavorare con un URL blob.

## Sub-agenti

### agent

Genera un sub-agente indipendente per gestire una sottoattività complessa.

| Parametro | Tipo | Obbligatorio | Descrizione |
|------|------|------|------|
| `prompt` | `string` | Sì | Descrizione della sottoattività |
| `description` | `string` | No | Un'etichetta breve (qualche parola, per la visualizzazione nell'interfaccia) |
| `type` | `string` | No | Tipo di sub-agente (vedi sotto), predefinito `"general"` |
| `tab_id` | `number` | No | ID scheda da passare al sub-agente; il sub-agente opererà su quella scheda |

**Tipi di sub-agente:**

| tipo | Descrizione | Strumenti disponibili |
|------|------|---------|
| `researcher` | Recupero informazioni (solo lettura) | web_search, web_fetch, lettura contenuto pagina |
| `page_operator` | Automazione del browser | Gestione schede, manipolazione DOM, interazione con la pagina |
| `general` | Generico (predefinito) | Tutti gli strumenti |

**Caratteristiche:**
- Un sub-agente ha il proprio contesto di conversazione indipendente
- **Non può** usare `ask_user` o `agent` (per prevenire la ricorsione)
- Gli eventi del sub-agente vengono passati alla conversazione padre tramite `sub_agent_event`

## Gestione Attività

Questo gruppo di strumenti gestisce un elenco temporaneo di attività all'interno di una conversazione (in memoria, non persistito).

### create_task

| Parametro | Tipo | Obbligatorio | Descrizione |
|------|------|------|------|
| `subject` | `string` | Sì | Titolo dell'attività |
| `description` | `string` | No | Descrizione dettagliata |

### update_task

| Parametro | Tipo | Obbligatorio | Descrizione |
|------|------|------|------|
| `task_id` | `string` | Sì | ID dell'attività |
| `status` | `string` | No | `"pending"` / `"in_progress"` / `"completed"` |
| `subject` | `string` | No | Nuovo titolo |
| `description` | `string` | No | Nuova descrizione |

### list_tasks

Nessun parametro; restituisce un elenco breve di tutte le attività.

> Gli strumenti di gestione delle attività sono principalmente per l'AI per tracciare il proprio progresso mentre gestisce attività complesse multi-passo; i dati delle attività non vengono persistiti.
