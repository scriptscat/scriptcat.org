---
title: Preguntas Frecuentes
---

## Modo Desarrollador / Permisos de Scripts de Usuario

#### Q: ScriptCat muestra "Modo desarrollador no habilitado" y los scripts no se ejecutan?

A partir de Chrome 120+ y versiones más recientes de Edge, los navegadores requieren que los usuarios habiliten manualmente los permisos. Consulta [Habilitar Soporte de Scripts de Usuario](/docs/use/open-dev/).

Si ya está habilitado pero la advertencia persiste, intenta reiniciar el navegador o recargar la extensión.

## Scripts No Funcionan

#### Q: Instalé un script pero no tiene efecto?

1. **"Permitir Scripts de Usuario" no habilitado** — Ver [Habilitar Soporte de Scripts de Usuario](/docs/use/open-dev/)
2. **Inicio en frío** — Los scripts pueden no cargarse inmediatamente cuando el navegador se abre por primera vez. Intenta actualizar la página
3. **Conflictos de extensiones** — Los bloqueadores de anuncios (ej., uBlock Origin) pueden causar errores de script

#### Q: El script funciona en Tampermonkey pero no en ScriptCat?

ScriptCat y Tampermonkey tienen algunas diferencias en la implementación de API. Por favor actualiza a la última versión. Si el problema persiste, envía un Issue en [GitHub](https://github.com/scriptscat/scriptcat/issues).

## Restricciones de CSP / Trusted Types {#csp-trusted-types}

#### Q: ¿Qué puedo hacer si la CSP de un sitio impide que funcione un script?

En ScriptCat, abra **Network Rules** y seleccione **Tools → Network rules → New rule → Remove CSP**. En **Websites**, indique únicamente el sitio afectado, por ejemplo `example.com`. Guarde la regla y actualice las páginas que ya estén abiertas.

La plantilla **Remove CSP** elimina encabezados de respuesta CSP de documentos en el marco principal y los submarcos. También puede elegir eliminar `X-Frame-Options`.

#### Q: ¿Qué significa `This document requires 'TrustedHTML' assignment.`?

Normalmente significa que el navegador rechazó una operación del DOM porque el sitio aplica Trusted Types. Un sitio puede activarlo mediante la directiva CSP `require-trusted-types-for 'script'`; un userscript puede provocar el error si realiza una operación que la política no permite. El navegador está aplicando la política de seguridad del sitio; el mensaje, por sí solo, no demuestra que ScriptCat haya causado el problema.

Si la restricción está impuesta por un encabezado CSP de la respuesta del documento, puede ayudar una regla **Remove CSP** limitada a ese sitio. No garantiza resolver el error si su causa no es uno de los encabezados CSP que se pueden eliminar.

#### Q: ¿Por qué ScriptCat no elimina CSP de todos los sitios de forma predeterminada?

CSP y Trusted Types ayudan a reducir riesgos como el cross-site scripting (XSS). Eliminar CSP debilita las protecciones de seguridad originales de los sitios afectados. Cree reglas solo para los sitios que realmente lo necesiten. Está disponible el alcance **All websites**, pero ScriptCat solicita confirmación antes de guardarlo.

:::warning Aviso de seguridad

Evite el alcance **All websites** salvo que comprenda y acepte el impacto en la seguridad.

:::

:::info Sobre un problema de compatibilidad de Trusted Types en ScriptCat

[ScriptCat #1239](https://github.com/scriptscat/scriptcat/issues/1239) también incluía un problema independiente de compatibilidad de `GM_xmlhttpRequest`, corregido en [ScriptCat #1242](https://github.com/scriptscat/scriptcat/pull/1242). Esa corrección no desactiva ni evita Trusted Types y no modifica la CSP del sitio. Actualice ScriptCat si utiliza una versión antigua.

:::

## Problemas de Sincronización en la Nube

> Para uso básico de sincronización, ver [Sincronización y Respaldo](/docs/use/sync/).

#### Q: ¿Problemas con OneDrive / Google Drive / WebDAV?

1. **Scripts eliminados reaparecen** — Asegúrate de que "sincronización de eliminación" esté habilitada en todos los dispositivos

## Problemas de Instalación de Scripts

> Para instalar scripts, ver [Instalar Scripts](/docs/use/script_installation/).

## Problemas de Autorización de Cookies

#### Q: ¿GM_cookie no puede obtener cookies?

1. **Popup de autorización no aparece** — Asegúrate de que `GM_cookie` esté declarado correctamente en `@grant` del script, y usa `@connect` para declarar los dominios a acceder

## Pérdida de Datos de Scripts

#### Q: ¿Todos los scripts desaparecieron al abrir el navegador?

1. **Retraso de inicialización** — ScriptCat puede estar cargando datos cuando el navegador inicia. Espera unos segundos o reinicia el navegador
2. **Software de limpieza** — Herramientas como 360 Security Guard o CCleaner pueden borrar datos de extensiones. Excluye los datos de extensiones del navegador en la configuración de limpieza
3. **Backups regulares recomendados** — Usa la función de exportar o [sincronización en la nube](/docs/use/sync/) para respaldar regularmente
