---
title: Integración MCP
---

MCP ([Model Context Protocol](https://modelcontextprotocol.io/)) permite a Agent conectarse a servidores MCP externos y obtener automáticamente acceso a las herramientas, recursos y plantillas de prompts que proporcionan.

> A diferencia de otros subsistemas de Agent, los servidores MCP actualmente **solo pueden ser configurados por el usuario en la página de administración** — no hay una API de administración `CAT.agent.mcp` para scripts. Todo lo que un script puede observar es que las herramientas de estos servidores se llaman automáticamente durante las conversaciones.

## Configurar un servidor MCP

Agregar uno en la página de administración → **Agent → MCP**:

| Campo | Descripción |
|------|------|
| Nombre | Nombre para mostrar del servidor |
| URL | Endpoint HTTP Streamable (JSON-RPC 2.0 sobre POST) |
| Clave API | Opcional, para autenticación |
| Encabezados personalizados | Opcional |
| Habilitado | Si el servidor está activo |

El cliente MCP de ScriptCat usa el transporte **Streamable HTTP** y soporta la versión de protocolo `2025-03-26`.

Un servidor MCP puede proporcionar tres tipos de capacidad:

| Capacidad | Descripción |
|------|------|
| **Herramientas** | Registradas automáticamente como herramientas que Agent puede llamar |
| **Recursos** | Recursos legibles (texto/binario) |
| **Prompts** | Plantillas de prompts, con soporte para parámetros |

## Usarlo en una conversación

Las herramientas de servidores MCP habilitados aparecen automáticamente en la lista de herramientas disponible para las conversaciones de Agent, nombradas usando el patrón `mcp_{nombre del servidor sanitizado}_{nombreHerramienta}` — la IA decide si llamarlas basándose en la intención del usuario. Esto funciona de manera similar a cómo [Skills](../agent-skill-install) se cargan automáticamente; los desarrolladores de scripts normalmente no necesitan preocuparse por los detalles subyacentes.

Para verificar si una herramienta MCP específica está disponible, simplemente pregúntele a la IA directamente en una conversación, o verifique la lista de herramientas descubiertas en los detalles de ese servidor en la página de administración.
