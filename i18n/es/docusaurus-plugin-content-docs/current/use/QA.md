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
