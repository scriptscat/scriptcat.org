---
title: Bloque de Metadatos
---

El contenido dentro de `==UserScript==` describe los permisos que necesita un script, información sobre el script, etc. Se encuentra al principio del script.

```js
// ==UserScript==
// @name         Nuevo Userscript
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  ¡intentar conquistar el mundo!
// @author       You
// @crontab      * * once * *
// ==/UserScript==
```

## Valores Principales

### name

Nombre del script

### namespace

Espacio de nombres del script. `name + namespace` determina la unicidad del script.

### version

La versión del script. Se recomienda seguir el [versionado semántico](https://semver.org/), para que cuando se detecte un cambio de versión, se solicite al usuario actualizar.

### description

Una descripción detallada del script

### author

Autor del script

### run-at

Cuándo se ejecuta el script

| Valor | Ejecución | Soportado desde |
|---|---|---|
| document-start | Inyecta el script en la página tan pronto como la URL coincide en el frontend | v0.3.0 |
| document-end | Inyecta el script después de que el DOM se haya cargado; los scripts e imágenes de la página aún pueden estar cargando | v0.3.0 |
| document-idle | Inyecta el script después de que todos los contenidos se hayan cargado | v0.3.0 |
| document-body | El script solo se inyecta una vez que la página tiene un elemento `body` | v0.6.2 |
| document-menu | Muestra un menú al hacer clic derecho; ejecuta el script usando el nombre del script como nombre del menú | v0.3.4-v0.9.4 (🔥 eliminado) |

Para iconos de menú, puede consultar [Símbolos Unicode](https://unicode-table.com/en/) y [emoji](https://www.emojiall.com/en-US/).

### run-in

Especifica el entorno en el que se inyecta el script: `@run-in normal-tabs` para pestañas normales, `@run-in incognito-tabs` para pestañas incógnito.

### early-start (v1.1.0+)

Cuando `run-at` es `document-start`, el script se ejecuta lo antes posible, pero no se puede garantizar que se cargue más rápido que la página.

Una vez que haya definido `@run-at document-start`, puede agregar `@early-start` para que el script se cargue más rápido que la página: [ejemplo](https://github.com/scriptscat/scriptcat/blob/main/example/early-start.js)

### inject-into

:::tip

En el entorno de content-script (`content`), `unsafeWindow` solo apunta al propio `window` actual del entorno y no puede acceder al `window` de la página.

ScriptCat no soporta la verificación automática de restricciones CSP para decidir si inyectar como `content` o `page` (es decir, `@inject-into auto` de Tampermonkey).

:::

Especifica dónde se inyecta el script, soportando `page` y `content`, con `page` como predeterminado.

- `page`: el script se inyecta en el entorno de la página, y puede usar `unsafeWindow` para acceder al `window` y `DOM` de la página
- `content`: el script se inyecta en el entorno de content-script, no puede acceder directamente al objeto `window` de la página, pero puede acceder al `DOM` de la página y no está sujeto a `CSP`

### storageName 🧪

El espacio de almacenamiento para `Value`; los datos bajo el mismo `storageName` pueden ser compartidos y comunicados entre scripts. Específico de ScriptCat.

### background

Marca este script como un script de fondo, que necesita ejecutarse en el entorno de fondo. Ver [Script de Fondo](./background.md#background-script-background) para detalles.

### crontab

Marca el script como un script programado, que requiere un valor de expresión cron. Solo puede existir una expresión cron, y se ejecuta según ese horario en el entorno de fondo. Ver [Script Programado](./background.md#scheduled-script-crontab) para detalles.

### match

Solo las URLs que coincidan con `match` ejecutarán el script, siguiendo [Patrones de Coincidencia](https://developer.chrome.com/docs/extensions/v3/match_patterns/). En `match`, `*` es un comodín, `tld` coincide con el dominio de nivel superior, y un dominio que comienza con `*.` también coincidirá con `xxx.com`:

| Valor | Ejemplos correctos | Ejemplos incorrectos |
|---|---|---|
| `http://scriptcat.org/doc/match` | `http://scriptcat.org/doc/match` | `http://scriptcat.org/doc/runAt` |
| `*://*/param?*` | `https://scriptcat.org/param` \| `http://scriptcat.org/param?search=tampermonkey` | `https://scriptcat.org/test/param` |
| `http*://scriptcat.org/*` | `https://scriptcat.org/` \| `https://scriptcat.org/doc` | `https://doc.scriptcat.org/` |

### include

Soporta `*` para coincidencia difusa, permitiendo URLs no estándar

### exclude

URLs que no deben coincidir; usa la misma sintaxis de expresión que `include`

### grant

Solicita permiso de API — una API solo puede llamarse una vez que se ha solicitado. Ver la lista de permisos en: [Documentación de API](./api.md) y [Documentación de CAT API](./cat-api.md).

Dos valores especiales:

- **none**: el script no se ejecuta en el entorno de sandbox, sino directamente en el entorno de la página. En este entorno, no hay APIs GM disponibles, pero se puede acceder directamente al objeto `window` de la página.
- **unsafeWindow**: en el entorno de sandbox, si necesita acceder al objeto `window` de la página, use `unsafeWindow`. (Tampermonkey no requiere declarar esto — se mantiene solo por compatibilidad.)

### connect

Solicita permiso de acceso para un sitio; ver `GM_cookie` y `GM_xmlhttpRequest`. `GM_download` en modo `native` también reconoce `@connect` (los hosts no declarados activan una confirmación).

### resource

Incluye un archivo de recurso. Después de declarar `@resource`, puede usar `GM_getResourceText`/`GM_getResourceURL` para obtener la información.

```js
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico
// @resource html https://bbs.tampermonkey.net.cn/
// @resource xml https://bbs.tampermonkey.net.cn/sitemap.xml
// Agregar verificación de integridad del recurso
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico#md5-xxx,sha256-xxx
```

### require

Incluye un archivo JS externo; soporta [verificación de integridad del recurso](#verificación-de-integridad-del-recurso)

### require-css

Incluye un archivo CSS externo; soporta [verificación de integridad del recurso](#verificación-de-integridad-del-recurso)

### noframes

Marca el script para que no se ejecute dentro de un `<frame>`

### definition

La dirección de referencia de un archivo `.d.ts`, habilitando pistas de autocompletado del editor

### antifeature

Esto está relacionado con el marketplace de scripts; las funciones no deseadas necesitan ser marcadas con este valor de descripción:

```js
// @antifeature ads Este script tiene anuncios
// @antifeature referral-link Este script modifica o redirige al enlace de referido del autor
```

## Valores de Descripción Adicionales

### license

La licencia de código abierto del script actual

### updateURL

La verificación de actualizaciones requiere que el script remoto tenga una etiqueta `@version`.

El enlace que usa el script para verificar actualizaciones; si no está configurado, por defecto es `user.js => meta.js` del enlace, o el enlace actual si no hay `user.js`.

Si se configura `@updateURL`, también se debe configurar `@downloadURL` para que `@updateURL` funcione.

### downloadURL

La dirección de descarga para la actualización del script

### supportURL

Sitio de soporte, página de reporte de errores

### homepage, homepageURL, website

Página principal del script

### source

Página del código fuente del script

### icon, iconURL, defaulticon

Icono del script

### icon64, icon64URL

Icono del script de 64x64

### Notas

### Verificación de Integridad del Recurso

- Use md5, sha1, sha256, sha384 o sha512 para verificar que los recursos no han sido manipulados. Múltiples métodos de verificación pueden separarse con `;` o `,`.
- Según las [recomendaciones del W3C](https://w3c.github.io/webappsec-subresource-integrity/#hash-collision-attacks), md5 y sha1 no son recomendados; use sha384 o un algoritmo de hash más fuerte.

Ejemplo:

```js
// @require https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js#md5-d55836f30c097da753179f82fa6f108f,sha256-a476ab8560837a51938aa6e1720c8be87c2862b6221690e9de7ffac113811a90
```
