---
title: Abilita Supporto Script Utente del Browser
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Icon } from "@iconify/react";
import BrowserGuide from '@site/src/components/BrowserGuide';
import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="install" />

<BrowserGuide texts={{
  allowUserScripts: {
    title: "Il tuo browser supporta 'Consenti Script Utente'",
    description: "Segui i passaggi qui sotto per abilitare l'opzione 'Consenti Script Utente' e usare ScriptCat normalmente.",
    button: "Vedi passaggi",
    anchor: "#allow-user-scripts",
  },
  devMode: {
    title: "Il tuo browser richiede la 'Modalità Sviluppatore'",
    description: "Segui i passaggi qui sotto per abilitare la 'Modalità Sviluppatore' e usare ScriptCat normalmente.",
    button: "Vedi passaggi",
    anchor: "#enable-developer-mode",
  },
  legacy: {
    title: "La versione del tuo browser è troppo vecchia",
    description: "Il tuo browser non supporta Manifest V3. Devi installare manualmente lo ScriptCat legacy (v0.16.x).",
  },
  nonChromium: {
    title: "Browser basato su Chromium non rilevato",
    description: "ScriptCat attualmente supporta solo browser basati su Chromium (come Chrome, Edge, ecc.).",
  },
}} />

## Consenti Script Utente

[Consenti Script Utente](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#chrome_versions_138_and_newer_allow_user_scripts_toggle) è una nuova funzionalità di Manifest V3.

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge</div>} default>

① Apri l'interfaccia di gestione estensioni o visita [edge://extensions/](edge://extensions/)

② Trova l'estensione ScriptCat e clicca su `Dettagli`

③ Trova l'opzione `Consenti script utente` e abilitala.

> ⚠️⚠️⚠️ Per versioni Edge precedenti (≤143), consulta [Abilita Modalità Sviluppatore](#enable-developer-mode)

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" />Chrome</div>}>

① Apri l'interfaccia di gestione estensioni o visita [chrome://extensions/](chrome://extensions/)

② Trova l'estensione ScriptCat e clicca su `Dettagli`

③ Trova l'opzione `Consenti script utente` e abilitala.

</TabItem>
  <TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge Mobile</div>}>

Per Edge Mobile con versione del motore del browser ≥ 138, la Modalità Sviluppatore non è necessaria. Abilita `Consenti script utente` nelle impostazioni dell'estensione.

> ⚠️⚠️⚠️ Per versioni del motore del browser inferiori a 138, consulta [Abilita Modalità Sviluppatore](#enable-developer-mode)

  </TabItem>
</Tabs>

## Abilita Modalità Sviluppatore

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge</span></div>} default>

① Apri l'interfaccia di gestione estensioni o visita [edge://extensions/](edge://extensions/)

② Abilita `Modalità Sviluppatore`

③ Disabilita e riabilita l'estensione, o riavvia il browser.

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" /><span>Chrome</span></div>}>

① Apri l'interfaccia di gestione estensioni o visita [chrome://extensions/](chrome://extensions/)

② Abilita `Modalità Sviluppatore`

③ Disabilita e riabilita l'estensione, o riavvia il browser.

  </TabItem>

<TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge Mobile</span></div>}>

Per Edge Mobile con versioni del motore del browser inferiori a 138, tocca il pulsante delle impostazioni in alto nella pagina estensioni per abilitare la Modalità Sviluppatore.

</TabItem>

</Tabs>

:::warning Nota sulla Versione Legacy

Se usi Windows 8/7/XP o la versione del motore del browser è inferiore a 120, devi installare manualmente lo [ScriptCat legacy](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html). v0.16.x è l'ultima versione che supporta Manifest V2.

:::

<details>
<summary>Contesto Tecnico: Manifest V3</summary>

A causa delle restrizioni del browser, le estensioni sono costrette ad aggiornarsi a Manifest V3, e le estensioni Manifest V2 saranno completamente dismesse dopo giugno 2025. Sotto le limitazioni di Manifest V3, devi abilitare la modalità sviluppatore o la funzionalità script utente.

Riferimento: [Modalità sviluppatore](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#developer_mode_for_extension_users), [Manifest V3](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3?hl=en)

Per versioni del motore del browser ≥ 138, devi abilitare "Consenti Script Utente". Per versioni inferiori, usa "Abilita Modalità Sviluppatore".

</details>
