---
title: MCP
---

MCP (Model Context Protocol) ermöglicht die Anbindung externer Werkzeugserver an den ScriptCat Agenten.

## Konfiguration

MCP-Server können über das Dashboard oder per API konfiguriert werden.

### Server hinzufügen

```javascript
await cat.agent.mcp.addServer({
  name: 'mein-server',
  url: 'http://localhost:3000',
  description: 'Mein MCP-Server',
});
```

### Server auflisten

```javascript
const server = await cat.agent.mcp.listServers();
```

### Server entfernen

```javascript
await cat.agent.mcp.removeServer('mein-server');
```

## Werkzeuge verwenden

Wenn ein MCP-Server verbunden ist, stehen seine Werkzeuge dem Agenten zur Verfügung. Der Agent kann sie automatisch aufrufen, wenn sie für eine Aufgabe relevant sind.

## Bezüge

- [MCP-Spezifikation](https://modelcontextprotocol.io/)
- [MCP-Server-Beispiele](https://github.com/modelcontextprotocol/servers)
