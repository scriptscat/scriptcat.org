---
title: Habilitar Soporte de Scripts de Usuario del Navegador
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Icon } from "@iconify/react";
import BrowserGuide from '@site/src/components/BrowserGuide';
import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="install" />

<BrowserGuide texts={{
  allowUserScripts: {
    title: "Tu navegador soporta 'Permitir Scripts de Usuario'",
    description: "Sigue los pasos a continuación para habilitar la opción 'Permitir Scripts de Usuario' y usar ScriptCat normalmente.",
    button: "Ver pasos",
    anchor: "#allow-user-scripts",
  },
  devMode: {
    title: "Tu navegador necesita 'Modo Desarrollador' habilitado",
    description: "Sigue los pasos a continuación para habilitar 'Modo Desarrollador' y usar ScriptCat normalmente.",
    button: "Ver pasos",
    anchor: "#enable-developer-mode",
  },
  legacy: {
    title: "La versión de tu navegador es muy antigua",
    description: "Tu navegador no soporta Manifest V3. Necesitas instalar manualmente el ScriptCat legacy (v0.16.x).",
  },
  nonChromium: {
    title: "Navegador basado en Chromium no detectado",
    description: "ScriptCat actualmente solo soporta navegadores basados en Chromium (como Chrome, Edge, etc.).",
  },
}} />

## Permitir Scripts de Usuario

[Permitir Scripts de Usuario](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#chrome_versions_138_and_newer_allow_user_scripts_toggle) es una nueva función de Manifest V3.

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge</div>} default>

① Abre la interfaz de gestión de extensiones o visita [edge://extensions/](edge://extensions/)

② Encuentra la extensión ScriptCat y haz clic en `Detalles`

③ Encuentra la opción `Permitir scripts de usuario` y actívala.

> ⚠️⚠️⚠️ Para versiones antiguas de Edge (≤143), consulta [Habilitar Modo Desarrollador](#enable-developer-mode)

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" />Chrome</div>}>

① Abre la interfaz de gestión de extensiones o visita [chrome://extensions/](chrome://extensions/)

② Encuentra la extensión ScriptCat y haz clic en `Detalles`

③ Encuentra la opción `Permitir scripts de usuario` y actívala.

</TabItem>
  <TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge Mobile</div>}>

Para Edge Mobile con versión del motor del navegador ≥ 138, no se requiere Modo Desarrollador. Habilita `Permitir scripts de usuario` en la configuración de la extensión.

> ⚠️⚠️⚠️ Para versiones del motor del navegador inferiores a 138, consulta [Habilitar Modo Desarrollador](#enable-developer-mode)

  </TabItem>
</Tabs>

## Habilitar Modo Desarrollador

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge</span></div>} default>

① Abre la interfaz de gestión de extensiones o visita [edge://extensions/](edge://extensions/)

② Activa `Modo Desarrollador`

③ Desactiva y vuelve a activar la extensión, o reinicia el navegador.

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" /><span>Chrome</span></div>}>

① Abre la interfaz de gestión de extensiones o visita [chrome://extensions/](chrome://extensions/)

② Activa `Modo Desarrollador`

③ Desactiva y vuelve a activar la extensión, o reinicia el navegador.

  </TabItem>

<TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge Mobile</span></div>}>

Para Edge Mobile con versiones del motor del navegador inferiores a 138, toca el botón de configuración en la parte superior de la página de extensiones para habilitar el Modo Desarrollador.

</TabItem>

</Tabs>

:::warning Aviso de Versión Legacy

Si usas Windows 8/7/XP o tu versión del motor del navegador es inferior a 120, necesitas instalar manualmente el [ScriptCat legacy](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html). v0.16.x es la última versión que soporta Manifest V2.

:::

<details>
<summary>Contexto Técnico: Manifest V3</summary>

Debido a restricciones del navegador, las extensiones se ven obligadas a actualizar a Manifest V3, y las extensiones Manifest V2 se descontinuarán completamente después de junio de 2025. Bajo las limitaciones de Manifest V3, debes habilitar el modo desarrollador o la función de scripts de usuario.

Referencia: [Modo desarrollador](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#developer_mode_for_extension_users), [Manifest V3](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3?hl=en)

Para versiones del motor del navegador ≥ 138, necesitas habilitar "Permitir Scripts de Usuario". Para versiones inferiores, usa "Habilitar Modo Desarrollador".

</details>
