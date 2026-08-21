---
title: Referencia de Herramientas Integradas
---

Agent viene con un conjunto de herramientas integradas que la IA llama automáticamente durante las conversaciones. Estas herramientas están disponibles por defecto en conversaciones persistentes; los desarrolladores de scripts normalmente no necesitan llamarlas directamente — la IA selecciona la herramienta adecuada según la intención del usuario.

Entender qué pueden hacer estas herramientas te ayuda a escribir mejores prompts del sistema y herramientas personalizadas.

## Obtención de Datos Web

### web_fetch

Obtiene el contenido de una URL, con extracción de HTML a texto y soporte de resumen por LLM.

| Parámetro | Tipo | Requerido | Descripción |
|------|------|------|------|
| `url` | `string` | Sí | URL objetivo (solo http/https) |
| `prompt` | `string` | No | Prompt de resumen (cuando se proporciona, se usa un LLM para destilar el contenido) |
| `max_length` | `number` | No | Máximo de caracteres de contenido |

**Detalles de comportamiento:**
- Tiempo de espera de 30 segundos
- El contenido HTML extrae automáticamente el texto principal (elimina navegación, barras laterales, etc.)
- Las respuestas JSON se analizan automáticamente
- El texto plano se retorna tal cual
- Cuando se proporciona `prompt`, el contenido obtenido se envía a un LLM para resumirlo

**Valor de retorno:**
```json
{
  "url": "https://example.com",
  "content_type": "text/html",
  "content": "Contenido extraído del cuerpo...",
  "truncated": false,
  "final_url": "https://example.com/redirected"
}
```

### web_search

Consulta un motor de búsqueda y retorna resultados de búsqueda estructurados.

| Parámetro | Tipo | Requerido | Descripción |
|------|------|------|------|
| `query` | `string` | Sí | Palabras clave de búsqueda |
| `max_results` | `number` | No | Máximo número de resultados (por defecto 5, límite 10) |

**Motores de búsqueda soportados:**

| Motor | Descripción | Configuración requerida |
|------|------|---------|
| DuckDuckGo | Motor predeterminado | Ninguna |
| Bing | Microsoft Bing Search | Se requiere clave API |
| Baidu | Baidu Search | No se requiere clave API |
| Google Custom Search | Google Custom Search | Se requiere clave API + ID CSE |

Los motores de búsqueda se configuran en la página de gestión → Agent → Configuración.

**Valor de retorno:**
```json
[
  {
    "title": "Título del resultado de búsqueda",
    "url": "https://example.com/result",
    "snippet": "Texto de resumen del resultado..."
  }
]
```

### get_tab_content

Lee el contenido renderizado de una página de una pestaña específica, convertido en Markdown estructurado anotado con selectores CSS.

| Parámetro | Tipo | Requerido | Descripción |
|------|------|------|------|
| `tab_id` | `number` | Sí | ID de la pestaña |
| `selector` | `string` | No | Selector CSS; solo extrae la parte coincidente |
| `prompt` | `string` | No | Prompt de resumen |
| `max_length` | `number` | No | Máximo de caracteres de contenido |

Diferencia con `web_fetch`: `get_tab_content` lee la página **tal como ya fue renderizada por el navegador** (incluyendo contenido JS dinámico), mientras que `web_fetch` hace una nueva petición HTTP.

**Valor de retorno:**
```json
{
  "tab_id": 123,
  "url": "https://example.com",
  "title": "Título de la página",
  "content": "Contenido estructurado...",
  "truncated": false,
  "used_selector": "main"
}
```

## Gestión de Pestañas

### list_tabs

Consulta pestañas abiertas, con soporte para varias condiciones de filtro.

| Parámetro | Tipo | Requerido | Descripción |
|------|------|------|------|
| `url_pattern` | `string` | No | Coincidencia regex de URL |
| `title_pattern` | `string` | No | Coincidencia regex de título |
| `active` | `boolean` | No | Solo retorna la pestaña activa |
| `window_id` | `number` | No | Ventana especificada |
| `audible` | `boolean` | No | Solo retorna pestañas que actualmente reproducen audio |

### open_tab

Abre una nueva pestaña o navega una existente.

| Parámetro | Tipo | Requerido | Descripción |
|------|------|------|------|
| `url` | `string` | Sí | URL objetivo |
| `tab_id` | `number` | No | ID de una pestaña existente (si se proporciona, se navega esa pestaña; de lo contrario se abre una nueva) |
| `active` | `boolean` | No | Si activarla (por defecto `true`) |
| `window_id` | `number` | No | Ventana especificada |
| `wait_until_loaded` | `boolean` | No | Si esperar a que la página termine de cargar (por defecto `true`) |

### close_tab

Cierra una pestaña.

| Parámetro | Tipo | Requerido | Descripción |
|------|------|------|------|
| `tab_id` | `number` | Sí | ID de la pestaña |

### activate_tab

Activa una pestaña y enfoca la ventana donde se encuentra.

| Parámetro | Tipo | Requerido | Descripción |
|------|------|------|------|
| `tab_id` | `number` | Sí | ID de la pestaña |

## Sistema de Archivos (OPFS)

### opfs_write

Escribe un archivo en el espacio de trabajo.

| Parámetro | Tipo | Requerido | Descripción |
|------|------|------|------|
| `path` | `string` | Sí | Ruta del archivo |
| `content` | `string` | Sí | Contenido del archivo (soporta binario data URL) |

### opfs_read

Lee un archivo del espacio de trabajo. Por defecto, el tipo de archivo se detecta automáticamente: los archivos de texto retornan su contenido, los binarios retornan una URL blob.

| Parámetro | Tipo | Requerido | Descripción |
|------|------|------|------|
| `path` | `string` | Sí | Ruta del archivo |
| `mode` | `string` | No | `"text"` / `"blob"` / `"auto"` (por defecto) — fuerza un modo de retorno específico |
| `offset` | `number` | No | Número de línea de inicio (indexado desde 1), solo modo texto |
| `limit` | `number` | No | Número de líneas a leer, solo modo texto (se requiere paginación una vez que el texto excede 200 líneas) |

### opfs_list

Lista el contenido de un directorio.

| Parámetro | Tipo | Requerido | Descripción |
|------|------|------|------|
| `path` | `string` | No | Ruta del directorio (por defecto el directorio raíz) |

### opfs_delete

Elimina un archivo o directorio.

| Parámetro | Tipo | Requerido | Descripción |
|------|------|------|------|
| `path` | `string` | Sí | Ruta del archivo/directorio |

## Interacción con el Usuario

### ask_user

Hace una pregunta al usuario, soportando entrada libre o elección estructurada.

| Parámetro | Tipo | Requerido | Descripción |
|------|------|------|------|
| `question` | `string` | Sí | La pregunta |
| `options` | `string[]` | No | Lista de opciones (cuando se proporciona, se convierte en pregunta de opción múltiple) |
| `multiple` | `boolean` | No | Si se permiten selecciones múltiples (por defecto `false`) |

**Tiempo de espera:** retorna `{ answer: null, reason: "timeout" }` después de 5 minutos sin respuesta.

**Valor de retorno:**
```json
{ "answer": "Texto de respuesta del usuario" }
```

### execute_script

Ejecuta código JavaScript en una página o un sandbox.

| Parámetro | Tipo | Requerido | Descripción |
|------|------|------|------|
| `code` | `string` | Sí | Código JavaScript |
| `target` | `string` | Sí | `"page"` o `"sandbox"` |
| `tab_id` | `number` | No | A qué pestaña dirigirse cuando `target` es `page` (por defecto la pestaña activa actual); se ignora para sandbox |

**Comparación de entornos de ejecución:**

| Entorno | DOM | JS de Página | URL blob de Extensión | Mejor para |
|------|-----|---------|---------------|---------|
| `target: "page"` (siempre mundo MAIN) | sí | sí | no | Leer/manipular el DOM, llamar funciones de página, leer variables de página |
| `target: "sandbox"` | no | no | no | Cálculo puro |

> El modo `page` siempre se ejecuta en el mundo MAIN de la página, compartiendo `window` con la página — por lo tanto no puede acceder a las URLs blob de la extensión (por ejemplo, la dirección que `opfs_read` retorna en modo blob). Usa un SkillScript cuando necesites trabajar con una URL blob.

## Sub-agentes

### agent

Genera un sub-agente independiente para manejar una subtarea compleja.

| Parámetro | Tipo | Requerido | Descripción |
|------|------|------|------|
| `prompt` | `string` | Sí | Descripción de la subtarea |
| `description` | `string` | No | Una etiqueta corta (unas palabras, para visualización en UI) |
| `type` | `string` | No | Tipo de sub-agente (ver abajo), por defecto `"general"` |
| `tab_id` | `number` | No | ID de pestaña a pasar al sub-agente; el sub-agente operará en esa pestaña |

**Tipos de sub-agente:**

| tipo | Descripción | Herramientas disponibles |
|------|------|---------|
| `researcher` | Recuperación de información (solo lectura) | web_search, web_fetch, lectura de contenido de página |
| `page_operator` | Automatización del navegador | Gestión de pestañas, manipulación DOM, interacción con página |
| `general` | Propósito general (predeterminado) | Todas las herramientas |

**Características:**
- Un sub-agente tiene su propio contexto de conversación independiente
- **No puede** usar `ask_user` ni `agent` (para prevenir recursión)
- Los eventos del sub-agente se pasan a la conversación padre vía `sub_agent_event`

## Gestión de Tareas

Este grupo de herramientas gestiona una lista de tareas temporal dentro de una conversación (en memoria, no persistida).

### create_task

| Parámetro | Tipo | Requerido | Descripción |
|------|------|------|------|
| `subject` | `string` | Sí | Título de la tarea |
| `description` | `string` | No | Descripción detallada |

### update_task

| Parámetro | Tipo | Requerido | Descripción |
|------|------|------|------|
| `task_id` | `string` | Sí | ID de la tarea |
| `status` | `string` | No | `"pending"` / `"in_progress"` / `"completed"` |
| `subject` | `string` | No | Nuevo título |
| `description` | `string` | No | Nueva descripción |

### list_tasks

Sin parámetros; retorna una lista breve de todas las tareas.

> Las herramientas de gestión de tareas son principalmente para que la IA rastree su propio progreso mientras maneja tareas complejas de múltiples pasos; los datos de las tareas no se persisten.
