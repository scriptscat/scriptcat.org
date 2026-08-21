---
title: API de Manipulación del DOM
---

`@grant CAT.agent.dom`

La API de manipulación del DOM proporciona automatización completa de páginas del navegador: navegación, lectura de contenido, capturas de pantalla, interacción con formularios y monitoreo del DOM.

## Gestión de pestañas

### listTabs — listar pestañas

```javascript
const tabs = await CAT.agent.dom.listTabs();
```

Retorna información sobre cada pestaña abierta.

**Retorna `TabInfo[]`:**

| Campo | Tipo | Descripción |
|------|------|------|
| `tabId` | `number` | ID de la pestaña |
| `url` | `string` | URL actual |
| `title` | `string` | Título de la página |
| `active` | `boolean` | Si es la pestaña activa actual |
| `windowId` | `number` | ID de la ventana a la que pertenece |
| `discarded` | `boolean` | Si ha sido descartada (suspendida) |

## Navegación

### navigate — navegar una página

```javascript
const result = await CAT.agent.dom.navigate(url, options?);
```

**Parámetros:**

| Parámetro | Tipo | Predeterminado | Descripción |
|------|------|--------|------|
| `url` | `string` | — | URL objetivo (obligatoria) |
| `options.tabId` | `number` | pestaña activa actual | Qué pestaña usar |
| `options.waitUntil` | `boolean` | `true` | Si esperar a que la página termine de cargar |
| `options.timeout` | `number` | `30000` | Tiempo de espera en milisegundos |

**Retorna `NavigateResult`:**

```typescript
{ tabId: number; url: string; title: string }
```

## Lectura de contenido

### readPage — leer contenido de la página

```javascript
const page = await CAT.agent.dom.readPage(options?);
```

Convierte el DOM de la página en texto estructurado, eliminando automáticamente elementos irrelevantes como `<script>`, `<style>`, `<noscript>`, `<svg>` y `<link[rel=stylesheet]>`.

**Parámetros:**

| Parámetro | Tipo | Predeterminado | Descripción |
|------|------|--------|------|
| `options.tabId` | `number` | pestaña activa actual | Qué pestaña usar |
| `options.selector` | `string` | — | Selector CSS; solo se retorna el contenido del elemento coincidente |
| `options.maxLength` | `number` | — | Máximo de caracteres; se trunca más allá |
| `options.removeTags` | `string[]` | — | Nombres de etiquetas adicionales a eliminar |

**Retorna `PageContent`:**

| Campo | Tipo | Descripción |
|------|------|------|
| `title` | `string` | Título de la página |
| `url` | `string` | URL de la página |
| `html` | `string` | Contenido de texto de la página procesada |
| `truncated` | `boolean` | Si el contenido fue truncado |
| `totalLength` | `number` | Longitud total del contenido original |

### screenshot — tomar una captura de pantalla

```javascript
const shot = await CAT.agent.dom.screenshot(options?);
```

**Parámetros:**

| Parámetro | Tipo | Predeterminado | Descripción |
|------|------|--------|------|
| `options.tabId` | `number` | pestaña activa actual | Qué pestaña usar |
| `options.quality` | `number` | `80` | Calidad JPEG (0-100) |
| `options.fullPage` | `boolean` | `false` | Capturar la página completa |
| `options.selector` | `string` | — | Selector CSS; solo capturar el área del elemento coincidente |
| `options.saveTo` | `string` | — | Ruta para guardar en el espacio de trabajo OPFS |

**Retorna `ScreenshotResult`:**

| Campo | Tipo | Descripción |
|------|------|------|
| `dataUrl` | `string` | URL de datos base64 |
| `path` | `string` | Ruta de guardado en OPFS (cuando se usa `saveTo`) |
| `size` | `number` | Tamaño del archivo (cuando se usa `saveTo`) |

```javascript
// Guardar una captura en OPFS
const shot = await CAT.agent.dom.screenshot({
  saveTo: "screenshots/page.png",
  quality: 90
});
console.log(`Guardado en ${shot.path}, tamaño ${shot.size} bytes`);
```

## Interacción con la página

### click — hacer clic en un elemento

```javascript
const result = await CAT.agent.dom.click(selector, options?);
```

**Parámetros:**

| Parámetro | Tipo | Predeterminado | Descripción |
|------|------|--------|------|
| `selector` | `string` | — | Selector CSS (obligatorio) |
| `options.tabId` | `number` | pestaña activa actual | Qué pestaña usar |
| `options.trusted` | `boolean` | `false` | Usar CDP para enviar un evento de ratón real |

**Retorna `ActionResult`:**

| Campo | Tipo | Descripción |
|------|------|------|
| `success` | `boolean` | Si tuvo éxito |
| `navigated` | `boolean` | Si el clic activó una navegación |
| `url` | `string` | La nueva URL después de la navegación |
| `newTab` | `boolean` | Si se abrió una nueva pestaña |

**`trusted` vs. un clic normal:**

- `trusted: false` (predeterminado) — simula `element.click()` mediante JS inyectado; rápido, pero algunos sitios pueden detectarlo como un evento no genuino
- `trusted: true` — envía un evento de ratón real mediante Chrome DevTools Protocol, indistinguible de la interacción real del usuario, pero requiere permisos de depuración

### fill — llenar un campo de formulario

```javascript
const result = await CAT.agent.dom.fill(selector, value, options?);
```

**Parámetros:**

| Parámetro | Tipo | Descripción |
|------|------|------|
| `selector` | `string` | Selector CSS (obligatorio) |
| `value` | `string` | Valor a llenar (obligatorio) |
| `options.tabId` | `number` | Qué pestaña usar |
| `options.trusted` | `boolean` | Usar CDP para simular entrada de teclado |

**Comportamiento:**
- Modo normal: establece `element.value` y envía un evento `input`
- Modo trusted: CDP enfoca el elemento → escribe carácter por carácter

### scroll — desplazar la página

```javascript
const result = await CAT.agent.dom.scroll(direction, options?);
```

**Parámetros:**

| Parámetro | Tipo | Descripción |
|------|------|------|
| `direction` | `"up" \| "down" \| "top" \| "bottom"` | Dirección de desplazamiento (obligatoria) |
| `options.tabId` | `number` | Qué pestaña usar |
| `options.selector` | `string` | Desplazar un contenedor específico en lugar de toda la página |

**Retorna `ScrollResult`:**

| Campo | Tipo | Descripción |
|------|------|------|
| `scrollTop` | `number` | Posición de desplazamiento después de desplazar |
| `scrollHeight` | `number` | Altura total del contenido |
| `clientHeight` | `number` | Altura del viewport |
| `atBottom` | `boolean` | Si ahora está desplazado hasta el fondo |

### waitFor — esperar un elemento

```javascript
const result = await CAT.agent.dom.waitFor(selector, options?);
```

Hace polling para que aparezca el elemento especificado en la página (verificando cada 500ms).

**Parámetros:**

| Parámetro | Tipo | Predeterminado | Descripción |
|------|------|--------|------|
| `selector` | `string` | — | Selector CSS (obligatorio) |
| `options.tabId` | `number` | pestaña activa actual | Qué pestaña usar |
| `options.timeout` | `number` | `10000` | Tiempo de espera en milisegundos |

**Retorna `WaitForResult`:**

| Campo | Tipo | Descripción |
|------|------|------|
| `found` | `boolean` | Si se encontró el elemento |
| `element` | `object` | Información del elemento (solo cuando `found=true`) |
| `element.selector` | `string` | El selector coincidente |
| `element.tag` | `string` | Nombre de la etiqueta |
| `element.text` | `string` | Contenido de texto |
| `element.role` | `string` | Rol ARIA |
| `element.type` | `string` | Tipo de input |
| `element.visible` | `boolean` | Si es visible |

## Ejecución de scripts

### executeScript — ejecutar JavaScript

```javascript
const result = await CAT.agent.dom.executeScript(code, options?);
```

**Parámetros:**

| Parámetro | Tipo | Predeterminado | Descripción |
|------|------|--------|------|
| `code` | `string` | — | Código JavaScript (obligatorio) |
| `options.tabId` | `number` | pestaña activa actual | Qué pestaña usar |

> El código siempre se ejecuta en el **mundo MAIN** de la página (compartiendo el mismo objeto `window` que el JS de la página), por lo que puede llamar a las funciones de la página y leer variables directamente — pero por la misma razón **no puede acceder a las URLs blob de la extensión** (por ejemplo, una URL `blob:` creada con `URL.createObjectURL()` a partir del `Blob` devuelto por `CAT.agent.opfs.read` en modo `"blob"`), ya que las URLs blob están restringidas al origen de la extensión. Si necesitas trabajar con una URL blob en un contexto aislado, usa un SkillScript (ver [Desarrollo de Skills](../agent-skill-dev)).

```javascript
// Llamar a una función JS propia de la página / leer una variable
const data = await CAT.agent.dom.executeScript(
  "return window.__APP_STATE__"
);

// Leer contenido del DOM
const title = await CAT.agent.dom.executeScript(
  "return document.querySelector('h1')?.textContent"
);
```

> El código se envuelve en `new Function()` para su ejecución, y soporta un valor de `return`. El tiempo de espera es de 30 segundos.

## Monitoreo del DOM

Usa Chrome DevTools Protocol para monitorear cambios del DOM y eventos de diálogo en una página.

### startMonitor — iniciar monitoreo

```javascript
await CAT.agent.dom.startMonitor(tabId);
```

Inicia el monitoreo de cambios del DOM y diálogos (alert/confirm/prompt) en la pestaña especificada.

### stopMonitor — detener monitoreo

```javascript
const result = await CAT.agent.dom.stopMonitor(tabId);
```

Detiene el monitoreo y retorna los cambios recopilados.

**Retorna `MonitorResult`:**

| Campo | Tipo | Descripción |
|------|------|------|
| `dialogs` | `Array<{ type, message }>` | Lista de diálogos |
| `addedNodes` | `Array<{ tag, id?, class?, role?, text }>` | Resumen de nodos DOM recién añadidos |

### peekMonitor — verificar estado del monitoreo

```javascript
const status = await CAT.agent.dom.peekMonitor(tabId);
```

Verifica el estado actual del monitoreo de forma no destructiva.

**Retorna `MonitorStatus`:**

| Campo | Tipo | Descripción |
|------|------|------|
| `hasChanges` | `boolean` | Si hay cambios |
| `dialogCount` | `number` | Número de diálogos |
| `nodeCount` | `number` | Número de nodos recién añadidos |

## Ejemplo completo

```javascript
// ==UserScript==
// @name        Rellenador automático de formularios
// @match       https://example.com/form
// @grant       CAT.agent.dom
// ==/UserScript==

// Esperar a que el formulario cargue
await CAT.agent.dom.waitFor("form#signup", { timeout: 5000 });

// Llenar el formulario
await CAT.agent.dom.fill("input[name=username]", "test_user");
await CAT.agent.dom.fill("input[name=email]", "test@example.com");

// Marcar la casilla de acuerdo
await CAT.agent.dom.click("input[type=checkbox]#agree");

// Captura del formulario lleno
await CAT.agent.dom.screenshot({
  selector: "form#signup",
  saveTo: "screenshots/form-filled.png"
});

// Hacer clic en enviar
const result = await CAT.agent.dom.click("button[type=submit]", { trusted: true });
if (result.navigated) {
  console.log("Formulario enviado exitosamente, navegado a:", result.url);
}
```
