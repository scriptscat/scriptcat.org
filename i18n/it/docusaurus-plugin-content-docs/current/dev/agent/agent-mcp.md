---
title: Integrazione MCP
---

MCP ([Model Context Protocol](https://modelcontextprotocol.io/)) permette ad Agent di connettersi a server MCP esterni e ottenere automaticamente accesso agli strumenti, risorse e modelli di prompt che forniscono.

> A differenza degli altri sottosistemi di Agent, i server MCP attualmente **possono essere configurati solo dall'utente nella pagina di amministrazione** — non esiste un'API di gestione `CAT.agent.mcp` per gli script. Tutto ciò che uno script può osservare è che gli strumenti di questi server vengono chiamati automaticamente durante le conversazioni.

## Configurare un server MCP

Aggiungerne uno nella pagina di amministrazione → **Agent → MCP**:

| Campo | Descrizione |
|------|------|
| Nome | Nome visualizzato per il server |
| URL | Endpoint HTTP Streamable (JSON-RPC 2.0 su POST) |
| Chiave API | Opzionale, per l'autenticazione |
| Intestazioni personalizzate | Opzionale |
| Abilitato | Se il server è attivo |

Il client MCP di ScriptCat utilizza il trasporto **Streamable HTTP** e supporta la versione del protocollo `2025-03-26`.

Un server MCP può fornire tre tipi di capacità:

| Capacità | Descrizione |
|------|------|
| **Strumenti** | Registrati automaticamente come strumenti che Agent può chiamare |
| **Risorse** | Risorse leggibili (testo/binario) |
| **Prompt** | Modelli di prompt, con supporto per parametri |

## Utilizzarlo in una conversazione

Gli strumenti dei server MCP abilitati appaiono automaticamente nell'elenco degli strumenti disponibili per le conversazioni di Agent, denominati usando il pattern `mcp_{nome server sanificato}_{nomeStrumento}` — l'IA decide se chiamarli in base all'intento dell'utente. Questo funziona in modo simile a come [Skills](../agent-skill-install) si caricano automaticamente; gli sviluppatori di script di solito non devono preoccuparsi dei dettagli sottostanti.

Per verificare se uno specifico strumento MCP è disponibile, basta chiedere direttamente all'IA in una conversazione, o controllare l'elenco degli strumenti scoperti nei dettagli di quel server nella pagina di amministrazione.
