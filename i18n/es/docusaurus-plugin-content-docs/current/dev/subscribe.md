---
title: Modo de suscripción
---

El archivo debe comenzar con `UserSubscribe` en lugar de `UserScript`. El enlace de instalación debe usar la extensión `user.sub.js` y debe ser un enlace `https`.

Un script de suscripción solo muestra el diálogo de instalación para que el usuario confirme la suscripción en el momento de la instalación; las actualizaciones posteriores son silenciosas, y el diálogo de actualización solo se muestra de nuevo si cambia el permiso `connect`.

Un solo script de suscripción puede describir los enlaces de instalación para múltiples scripts. Los scripts instalados mediante el modo de suscripción se instalan silenciosamente, sin diálogo de confirmación, y los scripts instalados siguen apareciendo en la lista de scripts, pero su permiso `connect` usa el `connect` declarado en la suscripción en lugar del permiso `connect` del propio script.

```js
// ==UserSubscribe==
// @name         xxx
// @description  Suscribirse a la serie de scripts xxx
// @version      0.1.0
// @author       You
// @connect      www.baidu.com
// @scriptUrl    https://script.tampermonkey.net.cn/48.user.js
// @scriptUrl    https://script.tampermonkey.net.cn/49.user.js
// ==/UserSubscribe==
```

## Actualizaciones de suscripción y actualizaciones de scripts

Según el `intervalo de actualización` configurado por el usuario, ScriptCat verifica periódicamente el enlace de suscripción en busca de actualizaciones; se debe configurar `version` para que esto funcione.

Cada actualización o cambio de suscripción compara los enlaces de los scripts con los scripts actualmente instalados: los scripts que ya no están en la nueva suscripción se eliminan, y los scripts recién agregados se instalan silenciosamente. Las actualizaciones de scripts siguen la propia `version` del script, usando la misma lógica de actualización que un script instalado normalmente.

## Instalación y actualización silenciosa

Los scripts suscritos se instalan y actualizan silenciosamente; agregar, eliminar o actualizar un script de una suscripción solo muestra una notificación, sin requerir confirmación del usuario nuevamente. Debido a este mecanismo de actualización silenciosa, por favor suscríbase solo a fuentes en las que confíe.

## metadata

El significado de ciertos campos de metadatos cambia dentro de un script de suscripción.

### name

El nombre de la suscripción (también se puede editar directamente en la lista de suscripciones)

### description

La descripción de la suscripción, describiendo para qué sirve la suscripción

### version

La versión de la suscripción. Si se omite, las actualizaciones se activan en cambio según si el contenido del script de suscripción ha cambiado.

### connect

Solicita permiso de acceso a un sitio; consulte `GM_cookie` y `GM_xmlhttpRequest`. Para los scripts instalados mediante el modo de suscripción, `connect` se anula con el `connect` de la suscripción.

### scriptUrl

Los enlaces de instalación de scripts requeridos por la suscripción
