---
title: Desarrollar Scripts con VSCode
---

ScriptCat proporciona una extensión de VSCode que te permite escribir userscripts en VSCode. Al guardar, los cambios se sincronizan automáticamente con ScriptCat en el navegador.

## Prerrequisitos

Necesitas instalar las siguientes dos herramientas:

1. **Instalar la extensión ScriptCat en tu navegador** — Sigue la guía de [Inicio Rápido](/docs/use/use/)
2. **Instalar la extensión ScriptCat en VSCode** — Busca "[scriptcat-vscode](https://marketplace.visualstudio.com/items?itemName=CodFrm.scriptcat-vscode)" en el mercado de extensiones de VSCode

## Establecer Conexión

Una vez instalado, necesitas conectar la extensión ScriptCat con VSCode:

1. Haz clic en el ícono de ScriptCat en tu navegador
2. Ve a **Herramientas > Herramientas de Desarrollo**
3. Encuentra **Conexión automática al servicio VSCode**, actívalo y haz clic en **Conectar**

## Sincronizar Scripts

### Opción 1: Modo Detección Automática (Recomendado)

1. En VSCode, presiona `Ctrl + Shift + P`
2. Escribe y selecciona `scriptcat.autoTarget`
3. A partir de entonces, cada vez que abras o guardes un archivo `.user.js`, se sincronizará automáticamente

### Opción 2: Modo Script Especificado

1. En VSCode, presiona `Ctrl + Shift + P`
2. Escribe y selecciona `scriptcat.target`
3. Especifica la ruta del archivo de script a sincronizar

## Flujo de Trabajo

1. Escribe o edita tu script `.user.js` en VSCode
2. Presiona `Ctrl + S` para guardar
3. El script se sincroniza automáticamente con ScriptCat
4. Cambia al navegador y actualiza la página

## Preguntas Frecuentes

### ¿Qué hacer si no se conecta?

- Asegúrate de que la extensión ScriptCat esté ejecutándose
- Asegúrate de que la extensión VSCode esté instalada y habilitada

### ¿El script no se actualiza después de guardar?

- Asegúrate de que el nombre del archivo termine en `.user.js`
- Asegúrate de haber ejecutado el comando `scriptcat.autoTarget` o `scriptcat.target`

### ¿Necesito reconectar después de reiniciar VSCode?

Si "Conexión automática al servicio VSCode" está habilitado, VSCode se reconectará automáticamente después de un reinicio.
