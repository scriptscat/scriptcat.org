---
title: Script de Fondo
---

Los scripts de fondo son adecuados para scripts que necesitan ejecutarse continuamente. Los scripts de fondo son un tipo de script específico de ScriptCat; se ejecutan en un sandbox y no pueden acceder al DOM. Pueden desarrollarse usando las mismas GM APIs que Tampermonkey, y las notas de compatibilidad se señalan en la documentación.

## Script de Fondo (`@background`) {#background-script-background}

Un script de fondo se declara con el atributo `@background`. Permite que el script siga ejecutándose en segundo plano después de que se active o el navegador se inicie.

## Script Programado (`@crontab`) {#scheduled-script-crontab}

> Un script programado es un tipo de script de fondo adecuado para tareas que necesitan **ejecutarse repetidamente en un ciclo de tiempo**.

Un script programado se declara con el atributo `@crontab`. Soporta programación a nivel de minuto y segundo, y proporciona la sintaxis extendida de ScriptCat `once` / `once(...)` para evitar ejecutar más de una vez dentro del mismo ciclo de tiempo.

⚠️ Notas:

* En un solo script, **solo el primer `@crontab` tiene efecto**
* Se recomienda que el **tiempo de ejecución individual + tiempo de reintento** no exceda el intervalo de cron, de lo contrario las ejecuciones pueden solaparse

## Notas sobre Expresiones Cron

La implementación de cron de ScriptCat se basa en [**node-cron**](https://github.com/kelektiv/node-cron/), con una pequeña extensión sobre la sintaxis cron estándar.

### Formato del Expresión

#### Formato estándar de 5 campos (Recomendado)

```text
minuto hora día mes día_de_semana
```

#### Formato extendido de 6 campos (No recomendado)

```text
segundo minuto hora día mes día_de_semana
```

> ⚠️ El formato de 6 campos no es recomendado
> Los entornos del navegador no pueden garantizar precisión de segundo y aumentan la sobrecarga de rendimiento.

### Sintaxis Disponible por Campo

| Sintaxis | Significado | Ejemplo |
|---|---|---|
| `*` | Cualquier valor | `*` (cada minuto/hora) |
| number | Valor específico | `5` (el minuto 5) |
| `a,b,c` | Múltiples valores discretos | `1,15,30` |
| `a-b` | Rango contiguo | `10-23` |
| `*/n` | Cada n unidades | `*/5` |
| `a-b/n` | Rango con paso | `10-50/10` |

#### Reglas de Día de la Semana

* `1–6`: Lunes a Sábado
* `0` o `7`: Domingo

## La Sintaxis Extendida `once`

### Qué Significa `once`

Usar `once` en una expresión cron significa:

> **Dentro del ciclo de tiempo actual, solo permitir una ejecución exitosa**

Incluso si puntos de tiempo posteriores dentro del mismo ciclo aún coinciden con la regla de cron, el script no se ejecutará de nuevo.

### `once` vs. `once(...)`

| Sintaxis | Valor cron subyacente | Descripción |
|---|---|---|
| `once` | `*` (cualquier valor) | Se ejecuta en la primera coincidencia dentro del ciclo, sin un tiempo específico |
| `once(expr)` | `expr` | Se ejecuta solo en tiempos que coinciden con `expr` dentro del ciclo, y solo una vez |

### La Posición de `once` = el Ciclo de Tiempo que Restringe

Donde se coloque `once` / `once(...)`, significa "ejecutar solo una vez dentro de esa granularidad de tiempo".

| Posición de `once` | Comportamiento |
|---|---|
| Campo de minuto | Ejecuta solo una vez por minuto |
| Campo de hora | Ejecuta solo una vez por hora |
| Campo de día | Ejecuta solo una vez por día |
| Campo de mes | Ejecuta solo una vez por mes |
| Campo de día de semana | Ejecuta solo una vez por semana

## Ejemplos de `@crontab`

### Comunes

```js
//@crontab * * * * *        // una vez por minuto
//@crontab * * * * * *      // una vez por segundo (no recomendado)
//@crontab 0 */6 * * *      // cada 6 horas en el minuto 0
//@crontab 15 */6 * * *     // cada 6 horas en el minuto 15
//@crontab * once * * *     // máximo una vez por hora
//@crontab * * once * *     // máximo una vez por día
//@crontab * 10 once * *    // solo una vez dentro de la hora 10:00 cada día
//@crontab * */4 once * *   // como máximo una vez cada 4 horas cada día
```

### Avanzados

```js
//@crontab * 1,3,5 once * *       // una vez a las 1:00, 3:00 o 5:00 cada día
//@crontab * 10-23 once * *       // una vez entre 10:00 y 23:59 cada día
//@crontab * once 13 * *          // una vez por hora el día 13 de cada mes
//@crontab * once(9-17) * * *     // una vez por hora entre 9:00 y 17:00 cada día
//@crontab 0,30 once * * *        // cualquiera del minuto 0 o 30 se ejecuta primero, sin repetición esa hora
//@crontab * 9-18 once * *        // solo una vez entre 9:00 y 18:00 cada día
```

## Recomendaciones de Uso

### Buenos Usos para `once`

* Tareas que **solo necesitan ejecutarse una vez** por día/hora
* Scripts de verificación de estado, sincronización e informes

### No Recomendado para `once`

* Tareas que deben ejecutarse en un momento preciso
* Scripts cuyo tiempo de ejecución puede exceder significativamente el intervalo de cron

## Probando Expresiones Cron

Al probar una expresión cron, por favor **reemplace temporalmente `once` / `once(...)` con su valor subyacente**:

* `once` → `*`
* `once(expr)` → `expr`

Herramientas recomendadas:

* [crontab.guru](https://crontab.guru/)
* [tool.lu cron calculator](https://tool.lu/crontab/)

## Registros

En la página de lista de scripts, al pasar el cursor sobre la `columna de estado de ejecución` se muestra un tooltip con el estado de ejecución;
al hacer clic se muestra el contenido del registro impreso a través de `GM_log`.

![](@site/docs/dev/background.assets/image-20210621214143661.png)

![](@site/docs/dev/background.assets/image-20210621214124685.png)

## Depuración de Scripts

Los scripts de fondo se pueden depurar directamente desde la página del editor de scripts, pero tiene limitaciones:

* `value` no se sincroniza correctamente
* Los menús `registerMenu` no se activan correctamente

![](@site/docs/dev/background.assets/image-20210903141601057.png)

Para depurar el entorno de ejecución real, habilite el **Modo Desarrollador** en la configuración de la extensión, luego abra la página `background.html` de la extensión para depurar.

Los errores en tiempo de ejecución también se pueden ver en el registro de ejecución.

![image-20210903144155450](@site/docs/dev/background.assets/image-20210903144155450.png)

## Promise

Se recomienda encarecidamente el siguiente patrón, ya que también permite al administrador de scripts monitorear la ejecución.
Si el script realiza alguna operación asíncrona, **debe devolver un `Promise`**.

```ts
// ==UserScript==
// @name         Script de Fondo
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @background
// ==/UserScript==
return new Promise((resolve, reject) => {
  if (Math.round((Math.random() * 10) % 2)) {
    resolve("ok");
  } else {
    reject("error");
  }
});
```

```js
// ==UserScript==
// @name         Script programado que se ejecuta una vez al día
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @crontab      * * once * *
// ==/UserScript==
return new Promise((resolve, reject) => {
  if (Math.round((Math.random() * 10) % 2)) {
    resolve("ok");
  } else {
    reject("error");
  }
});
```

```js
// ==UserScript==
// @name         Llamar a una API
// @namespace    wyz
// @version      1.0.0
// @author       wyz
// @crontab      * * once * *
// ==/UserScript==
return new Promise((resolve, reject) => {
  GM_xmlhttpRequest({
    url: "https://bbs.tampermonkey.net.cn/",
    onload() {
      resolve("ok");
    },
    onerror() {
      reject("error");
    },
  });
});
```

Asegúrese de llamar a `resolve` / `reject` solo después de que la lógica del script haya terminado realmente.
Una vez llamado, el administrador considera la ejecución del script completa, y cualquier operación GM posterior ya no tendrá efecto.

## Reintentos de Error

Los scripts de fondo de ScriptCat soportan reintentos de error.
Cuando un script falla, puede hacer `reject` con un `CATRetryError` para activar un reintento.

* Intervalo mínimo de reintento: 5 segundos
* Evite conflictos con el tiempo de ejecución del propio script, de lo contrario pueden ocurrir ejecuciones duplicadas

```js
// ==UserScript==
// @name         Ejemplo de reintento
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  ¡intentar conquistar el mundo!
// @author       You
// @crontab      * * once * *
// @grant        GM_notification
// ==/UserScript==

return new Promise((resolve, reject) => {
  GM_notification({
    title: "reintento",
    text: "Reintentando en 10 segundos",
  });
  reject(new CATRetryError("xxx error", 10));
});
```
