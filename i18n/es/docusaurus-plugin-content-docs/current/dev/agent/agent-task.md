---
title: API de Tareas Programadas
---

`@grant CAT.agent.task`

La API de tareas programadas permite a un script crear tareas basadas en expresiones Cron, con dos modos de ejecución.

## Modos de ejecución

### Modo interno

Manejado automáticamente por el sistema Agent:
- Crea o reanuda una conversación automáticamente cuando se activa el Cron
- Envía el `prompt` configurado al LLM
- Se puede especificar un modelo y Skills
- El historial de ejecución y uso de tokens se registra automáticamente

### Modo evento

Manejado por el propio script:
- Se envía una notificación de evento al script cuando se activa el Cron
- El script escucha el evento mediante `addListener`
- La lógica de manejo es completamente personalizable

## create — crear una tarea

```javascript
const task = await CAT.agent.task.create(options);
```

**Parámetros (`AgentTaskCreateOptions`):**

| Parámetro | Tipo | Requerido | Descripción |
|------|------|------|------|
| `name` | `string` | Sí | Nombre de la tarea |
| `crontab` | `string` | Sí | Expresión Cron estándar (5 campos: minuto hora día mes día_semana) |
| `mode` | `"internal" \| "event"` | Sí | Modo de ejecución |
| `enabled` | `boolean` | No | Si está habilitada, por defecto `true` |
| `notify` | `boolean` | No | Si enviar notificación del navegador cuando se activa |
| `prompt` | `string` | No | Prompt para modo interno |
| `modelId` | `string` | No | ID del modelo a usar en modo interno |
| `skills` | `string[]` | No | Skills a cargar en modo interno |
| `maxIterations` | `number` | No | Máximo de rondas de llamadas a herramientas en modo interno, por defecto `10` |

**Devuelve `AgentTask`:**

| Campo | Tipo | Descripción |
|------|------|------|
| `id` | `string` | ID de la tarea |
| `name` | `string` | Nombre de la tarea |
| `crontab` | `string` | Expresión Cron |
| `mode` | `string` | Modo de ejecución |
| `enabled` | `boolean` | Si está habilitada |
| `notify` | `boolean` | Si se envían notificaciones |
| `nextruntime` | `number` | Marca de tiempo de la próxima ejecución |
| `lastruntime` | `number` | Marca de tiempo de la última ejecución |
| `conversationId` | `string` | ID de conversación asociada en modo interno (opcional) |
| `lastRunStatus` | `"success" \| "error"` | Estado de la última ejecución |
| `lastRunError` | `string` | Mensaje de error de la última ejecución |
| `createtime` | `number` | Marca de tiempo de creación |

**Ejemplos de expresión Cron:**

| Expresión | Descripción |
|--------|------|
| `* * * * *` | Cada minuto |
| `0 9 * * *` | Todos los días a las 09:00 |
| `0 */2 * * *` | Cada 2 horas |
| `30 8 * * 1-5` | Días laborables a las 08:30 |
| `0 0 1 * *` | 00:00 el día 1 de cada mes |

## list — listar todas las tareas

```javascript
const tasks = await CAT.agent.task.list();
```

Devuelve todas las tareas creadas por el script actual.

## get — obtener detalles de una tarea

```javascript
const task = await CAT.agent.task.get(taskId);
```

Devuelve `undefined` si la tarea no existe.

## update — actualizar una tarea

```javascript
const task = await CAT.agent.task.update(taskId, partial);
```

**Campos actualizables:**

```javascript
await CAT.agent.task.update(task.id, {
  name: "Nuevo nombre",
  crontab: "0 10 * * *",
  enabled: false,
  prompt: "Nuevo prompt",
  notify: true
});
```

`nextruntime` se recalcula automáticamente después de una actualización.

## remove — eliminar una tarea

```javascript
const success = await CAT.agent.task.remove(taskId);
```

## runNow — ejecutar inmediatamente

```javascript
await CAT.agent.task.runNow(taskId);
```

Activa la ejecución de la tarea una vez inmediatamente, sin esperar su Cron (sin bloqueo, se ejecuta en segundo plano).

## addListener — escuchar activaciones de tareas

```javascript
const listenerId = await CAT.agent.task.addListener(taskId, callback);
```

Solo se usa para tareas en **modo evento**. El callback se ejecuta cuando se activa el Cron.

**Parámetro del callback (`AgentTaskTrigger`):**

| Campo | Tipo | Descripción |
|------|------|------|
| `taskId` | `string` | ID de la tarea |
| `name` | `string` | Nombre de la tarea |
| `crontab` | `string` | Expresión Cron |
| `triggeredAt` | `number` | Marca de tiempo de activación |

## removeListener — eliminar un listener

```javascript
await CAT.agent.task.removeListener(listenerId);
```

## Ejemplos completos

### Modo interno — la IA lo ejecuta automáticamente

```javascript
// ==UserScript==
// @name        Resumen de noticias programado
// @match       *://*/*
// @grant       CAT.agent.task
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Resumen diario de noticias",
  crontab: "0 9 * * *",       // Todos los días a las 9
  mode: "internal",
  prompt: "Por favor busca las noticias tecnológicas de hoy y guarda un resumen breve en OPFS",
  skills: ["web-search"],
  maxIterations: 10,
  notify: true
});

console.log("Tarea creada, próxima ejecución:", new Date(task.nextruntime));
```

### Modo evento — el script lo maneja

```javascript
// ==UserScript==
// @name        Recolección de datos programada
// @match       *://*/*
// @grant       CAT.agent.task
// @grant       CAT.agent.dom
// ==/UserScript==

const task = await CAT.agent.task.create({
  name: "Recolección de datos bursátiles",
  crontab: "*/30 9-15 * * 1-5", // Cada 30 minutos, 9-15 en días laborables
  mode: "event",
  enabled: true,
  notify: false
});

await CAT.agent.task.addListener(task.id, async (trigger) => {
  console.log(`Tarea activada: ${trigger.name} en ${new Date(trigger.triggeredAt)}`);

  // Lógica de recolección personalizada
  await CAT.agent.dom.navigate("https://finance.example.com/stock");
  const content = await CAT.agent.dom.readPage({ selector: ".stock-table" });

  // Procesar los datos...
  console.log("Recolección completada");
});
```
