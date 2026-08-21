---
title: Habilitar Suporte a Scripts de Usuário do Navegador
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Icon } from "@iconify/react";
import BrowserGuide from '@site/src/components/BrowserGuide';
import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="install" />

<BrowserGuide texts={{
  allowUserScripts: {
    title: "Seu navegador suporta 'Permitir Scripts de Usuário'",
    description: "Siga os passos abaixo para habilitar a opção 'Permitir Scripts de Usuário' e usar o ScriptCat normalmente.",
    button: "Ver passos",
    anchor: "#allow-user-scripts",
  },
  devMode: {
    title: "Seu navegador precisa do 'Modo Desenvolvedor' habilitado",
    description: "Siga os passos abaixo para habilitar o 'Modo Desenvolvedor' e usar o ScriptCat normalmente.",
    button: "Ver passos",
    anchor: "#enable-developer-mode",
  },
  legacy: {
    title: "A versão do seu navegador é muito antiga",
    description: "Seu navegador não suporta Manifest V3. Você precisa instalar manualmente o ScriptCat legado (v0.16.x).",
  },
  nonChromium: {
    title: "Navegador baseado em Chromium não detectado",
    description: "ScriptCat atualmente só suporta navegadores baseados em Chromium (como Chrome, Edge, etc.).",
  },
}} />

## Permitir Scripts de Usuário

[Permitir Scripts de Usuário](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#chrome_versions_138_and_newer_allow_user_scripts_toggle) é um novo recurso do Manifest V3.

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge</div>} default>

① Abra a interface de gerenciamento de extensões ou visite [edge://extensions/](edge://extensions/)

② Encontre a extensão ScriptCat e clique em `Detalhes`

③ Encontre a opção `Permitir scripts de usuário` e habilite-a.

> ⚠️⚠️⚠️ Para versões antigas do Edge (≤143), consulte [Habilitar Modo Desenvolvedor](#enable-developer-mode)

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" />Chrome</div>}>

① Abra a interface de gerenciamento de extensões ou visite [chrome://extensions/](chrome://extensions/)

② Encontre a extensão ScriptCat e clique em `Detalhes`

③ Encontre a opção `Permitir scripts de usuário` e habilite-a.

</TabItem>
  <TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge Mobile</div>}>

Para Edge Mobile com versão do motor do navegador ≥ 138, o Modo Desenvolvedor não é necessário. Habilite `Permitir scripts de usuário` nas configurações da extensão.

> ⚠️⚠️⚠️ Para versões do motor do navegador inferiores a 138, consulte [Habilitar Modo Desenvolvedor](#enable-developer-mode)

  </TabItem>
</Tabs>

## Habilitar Modo Desenvolvedor {#enable-developer-mode}

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge</span></div>} default>

① Abra a interface de gerenciamento de extensões ou visite [edge://extensions/](edge://extensions/)

② Habilite `Modo Desenvolvedor`

③ Desabilite e reabilite a extensão, ou reinicie o navegador.

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" /><span>Chrome</span></div>}>

① Abra a interface de gerenciamento de extensões ou visite [chrome://extensions/](chrome://extensions/)

② Habilite `Modo Desenvolvedor`

③ Desabilite e reabilite a extensão, ou reinicie o navegador.

  </TabItem>

<TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge Mobile</span></div>}>

Para Edge Mobile com versões do motor do navegador inferiores a 138, toque no botão de configurações no topo da página de extensões para habilitar o Modo Desenvolvedor.

</TabItem>

</Tabs>

:::warning Aviso de Versão Legada

Se você usa Windows 8/7/XP ou a versão do motor do navegador é inferior a 120, precisa instalar manualmente o [ScriptCat legado](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html). v0.16.x é a última versão que suporta Manifest V2.

:::

<details>
<summary>Contexto Técnico: Manifest V3</summary>

Devido a restrições do navegador, as extensões são forçadas a atualizar para Manifest V3, e as extensões Manifest V2 serão completamente descontinuadas após junho de 2025. Sob as limitações do Manifest V3, você deve habilitar o modo desenvolvedor ou a funcionalidade de scripts de usuário.

Referência: [Modo desenvolvedor](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#developer_mode_for_extension_users), [Manifest V3](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3?hl=en)

Para versões do motor do navegador ≥ 138, você precisa habilitar "Permitir Scripts de Usuário". Para versões inferiores, use "Habilitar Modo Desenvolvedor".

</details>
