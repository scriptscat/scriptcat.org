---
title: Ondersteuning voor gebruikersscripts in de browser inschakelen
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Icon } from "@site/src/components/Icon";
import BrowserGuide from '@site/src/components/BrowserGuide';
import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="install" />

<BrowserGuide texts={{
  allowUserScripts: {
    title: "Your browser supports 'Allow User Scripts'",
    description: "Follow the steps below to enable the 'Allow User Scripts' option to use ScriptCat normally.",
    button: "View steps",
    anchor: "#allow-user-scripts",
  },
  devMode: {
    title: "Your browser needs 'Developer Mode' enabled",
    description: "Follow the steps below to enable 'Developer Mode' to use ScriptCat normally.",
    button: "View steps",
    anchor: "#enable-developer-mode",
  },
  legacy: {
    title: "Your browser version is too old",
    description: "Your browser does not support Manifest V3. You need to manually install the legacy ScriptCat (v0.16.x). See instructions below.",
  },
  nonChromium: {
    title: "Chromium-based browser not detected",
    description: "ScriptCat currently only supports Chromium-based browsers (such as Chrome, Edge, etc.). If you are using a Chromium-based browser, please ignore this message and follow the steps below.",
  },
}} />

## Gebruikersscripts toestaan {#allow-user-scripts}

[Allow User Scripts](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#chrome_versions_138_and_newer_allow_user_scripts_toggle) is een nieuwe functie van Manifest V3 die gebruikersscripts in de browser laat draaien.

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge</div>} default>

① Open de extensiebeheerinterface van de browser of bezoek [edge://extensions/](edge://extensions/)

![edge-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge-extensions-page.webp)

② Zoek in de extensiebeheerinterface de ScriptCat-extensie en klik op `Details`

![edge-extensions-details](open-dev.assets/edge-extensions-details.png)

③ Zoek op de detailpagina van de ScriptCat-extensie de optie `Gebruikersscripts toestaan` en schakel deze in. Schakel de extensie vervolgens uit en weer in, of herstart de browser om de scriptfunctionaliteit van kracht te laten worden.

> ⚠️⚠️⚠️ Voor lagere versies van Edge (\<=143) of gebruikers zonder deze optie, zie [Ontwikkelaarsmodus inschakelen](#enable-developer-mode)

![edge-allow-user-scripts](open-dev.assets/edge-allow-user-scripts.png)

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" />Chrome</div>}>

① Open de extensiebeheerinterface van de browser of bezoek [chrome://extensions/](chrome://extensions/)

![chrome-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/chrome-extensions-page.webp)

② Zoek in de extensiebeheerinterface de ScriptCat-extensie en klik op `Details`

![scriptcat-extension-details](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/scriptcat-extension-details.webp)

③ Zoek op de detailpagina van de ScriptCat-extensie de optie `Gebruikersscripts toestaan` en schakel deze in. Schakel de extensie vervolgens uit en weer in, of herstart de browser om de scriptfunctionaliteit van kracht te laten worden.

![allow-user-scripts-toggle](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/allow-user-scripts-toggle.webp)
</TabItem>
  <TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge Mobile</div>}>

Voor Edge Mobile met browsermotorversie ≥ 138 is de ontwikkelaarsmodus niet vereist. Schakel in plaats daarvan `Gebruikersscripts toestaan` in in de extensie-instellingen.

① Open de extensielijst van Edge Mobile, zoek de ScriptCat-extensie en tik op de `⋮`-knop aan de rechterkant

② Schakel in de pop-up van de extensie-instellingen `Gebruikersscripts toestaan` in

③ Schakel de extensie uit en weer in, of herstart de browser om de scriptfunctionaliteit van kracht te laten worden.

> ⚠️⚠️⚠️ Voor browsermotorversies lager dan 138, of gebruikers zonder deze optie, zie [Ontwikkelaarsmodus inschakelen](#enable-developer-mode)

![edge-mobile-allow-user-scripts](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge mobile 138.png)

  </TabItem>
</Tabs>

## Ontwikkelaarsmodus inschakelen {#enable-developer-mode}

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge</span></div>} default>

① Open de extensiebeheerinterface van de browser of bezoek [edge://extensions/](edge://extensions/)

![edge-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge-extensions-page.webp)

② Schakel `Ontwikkelaarsmodus` in (in sommige browsers kan deze modus zich onder andere opties bevinden, zoals 360 Browser: Geavanceerd beheer > Ontwikkelaarsmodus)

![edge-open-dev](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge-developer-mode-toggle.webp)

③ Na het inschakelen van de ontwikkelaarsmodus, schakel de extensie uit en weer in, of herstart de browser om de scriptfunctionaliteit van kracht te laten worden.

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" /><span>Chrome</span></div>}>

① Open de extensiebeheerinterface van de browser of bezoek [chrome://extensions/](chrome://extensions/)

![chrome-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/chrome-extensions-page.webp)

② Schakel `Ontwikkelaarsmodus` in (in sommige browsers kan deze modus zich onder andere opties bevinden, zoals 360 Browser: Geavanceerd beheer > Ontwikkelaarsmodus)

![chrome-open-dev](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/chrome-developer-mode-toggle.webp)

③ Na het inschakelen van de ontwikkelaarsmodus, schakel de extensie uit en weer in, of herstart de browser om de scriptfunctionaliteit van kracht te laten worden.

  </TabItem>

<TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge Mobile</span></div>}>

Voor Edge Mobile met browsermotorversies lager dan 138, of zonder de optie `Gebruikersscripts toestaan`, tik je op de instellingenknop bovenaan de extensiepagina om de ontwikkelaarsmodus in te schakelen.

![edge-mobile-open-dev](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge mobile.png)
</TabItem>

</Tabs>

:::warning Melding voor verouderde versie

Als je Windows 8/7/XP-systemen gebruikt, of je browsermotorversie lager is dan 120, moet je handmatig de [verouderde ScriptCat](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html) installeren. v0.16.x is de laatste versie die Manifest V2 ondersteunt. Installatiestappen vind je op: [Uitgepakte extensie installeren](/docs/use/use/#load-unpacked-extension-installation).

:::

<details>
<summary>Technische achtergrond: Manifest V3</summary>

Door browserbeperkingen zijn extensies gedwongen om te upgraden naar Manifest V3, en Manifest V2-extensies zullen na juni 2025 volledig worden stopgezet. Onder de beperkingen van Manifest V3 moet je de ontwikkelaarsmodus of de gebruikersscriptfunctionaliteit inschakelen om de ScriptCat-extensie normaal te kunnen gebruiken.

Referentie: [Ontwikkelaarsmodus voor extensiegebruikers](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#developer_mode_for_extension_users), [Manifest V3](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3?hl=en)

Voor browsermotorversies ≥ 138 moet je "Gebruikersscripts toestaan" inschakelen. Voor lagere versies gebruik je "Ontwikkelaarsmodus inschakelen".

</details>
