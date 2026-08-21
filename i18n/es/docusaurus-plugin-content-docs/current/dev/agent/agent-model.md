---
title: API de consulta de modelos
---

`@grant CAT.agent.model`

La API de consulta de modelos proporciona acceso de solo lectura a los modelos que el usuario ha configurado en la página de administración. Por seguridad, la clave de API nunca se expone al script.

## list — listar todos los modelos

```javascript
const models = await CAT.agent.model.list();
```

**Devuelve `ModelSummary[]`:**

| Campo | Tipo | Descripción |
|------|------|------|
| `id` | `string` | ID de configuración del modelo |
| `name` | `string` | Nombre para mostrar definido por el usuario (ej. "GPT-4o", "Claude Sonnet") |
| `provider` | `"openai" \| "anthropic"` | Tipo de proveedor |
| `apiBaseUrl` | `string` | URL base de la API |
| `model` | `string` | Identificador del modelo enviado a la API del proveedor (ej. `gpt-4o`, `claude-sonnet-4-20250514`) |
| `maxTokens` | `number` | Tokens de salida máximos (omitido si no está configurado) |

> Nota: los objetos devueltos **no incluyen** un campo `apiKey`.

## get — obtener un modelo específico

```javascript
const model = await CAT.agent.model.get(modelId);
```

Devuelve `null` si el modelo no existe.

## getDefault — obtener el ID del modelo predeterminado

```javascript
const defaultId = await CAT.agent.model.getDefault();
```

Devuelve el ID del modelo predeterminado configurado por el usuario; devuelve una cadena vacía si no hay ninguno configurado.

## getSummary — obtener el ID del modelo de resumen

```javascript
const summaryModelId = await CAT.agent.model.getSummary();
```

Devuelve el ID del modelo ligero que el usuario ha configurado específicamente para tareas de resumen (como la compactación automática del historial de conversaciones). Si no hay ninguno configurado por separado, el sistema recurre al modelo predeterminado y este método devuelve una cadena vacía.

## Casos de uso

### Permitir que el usuario elija un modelo

```javascript
// ==UserScript==
// @name        Ejemplo de selector de modelos
// @grant       CAT.agent.model
// @grant       CAT.agent.conversation
// ==/UserScript==

const models = await CAT.agent.model.list();
const defaultId = await CAT.agent.model.getDefault();

// Mostrar la lista al usuario y permitirle elegir
const selectedModel = models.find(m => m.id === defaultId) || models[0];

const conv = await CAT.agent.conversation.create({
  model: selectedModel.id
});
```

### Obtener detalles de un modelo específico

```javascript
const model = await CAT.agent.model.get("my-model-id");
if (model) {
  console.log(`${model.name} (${model.provider}), salida máxima ${model.maxTokens ?? "no configurado"} tokens`);
}
```
