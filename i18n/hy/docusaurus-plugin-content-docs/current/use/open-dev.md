---
title: Միացնել զննարկչի օգտագործողի սկրիպտների աջակցությունը
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Icon } from "@iconify/react";
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

## Թույլ տալ օգտագործողի սկրիպտները {#allow-user-scripts}

[Թույլ տալ օգտագործողի սկրիպտները](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#chrome_versions_138_and_newer_allow_user_scripts_toggle) Manifest V3-ի նոր հնարավորություն է, որը թույլ է տալիս օգտագործողի սկրիպտներ գործարկել զննարկչում:

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge</div>} default>

① Բացեք զննարկչի ընդլայնումների կառավարման ինտերֆեյսը, կամ այցելեք [edge://extensions/](edge://extensions/)

![edge-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge-extensions-page.webp)

② Ընդլայնումների կառավարման ինտերֆեյսում գտեք ScriptCat ընդլայնումը և սեղմեք `Մանրամասներ`

![edge-extensions-details](open-dev.assets/edge-extensions-details.png)

③ ScriptCat ընդլայնման մանրամասների էջում գտեք `Թույլ տալ օգտագործողի սկրիպտները` տարբերակը և միացրեք այն: Այնուհետև անջատեք և նորից միացրեք ընդլայնումը, կամ վերագործարկեք զննարկիչը՝ սկրիպտի ֆունկցիոնալությունը գործողության մեջ դնելու համար:

> ⚠️⚠️⚠️ Ավելի ցածր տարբերակի Edge զննարկիչների (\<=143 տարբերակ) կամ այս տարբերակը չունեցող օգտագործողների համար, խնդրում ենք տեսեք [Միացնել մշակողի ռեժիմը](#enable-developer-mode)

![edge-allow-user-scripts](open-dev.assets/edge-allow-user-scripts.png)

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" />Chrome</div>}>

① Բացեք զննարկչի ընդլայնումների կառավարման ինտերֆեյսը, կամ այցելեք [chrome://extensions/](chrome://extensions/)

![chrome-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/chrome-extensions-page.webp)

② Ընդլայնումների կառավարման ինտերֆեյսում գտեք ScriptCat ընդլայնումը և սեղմեք `Մանրամասներ`

![scriptcat-extension-details](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/scriptcat-extension-details.webp)

③ ScriptCat ընդլայնման մանրամասների էջում գտեք `Թույլ տալ օգտագործողի սկրիպտները` տարբերակը և միացրեք այն: Այնուհետև անջատեք և նորից միացրեք ընդլայնումը, կամ վերագործարկեք զննարկիչը՝ սկրիպտի ֆունկցիոնալությունը գործողության մեջ դնելու համար:

![allow-user-scripts-toggle](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/allow-user-scripts-toggle.webp)
</TabItem>
  <TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge Mobile</div>}>

Edge Mobile-ի համար՝ զննարկչի շարժիչի ≥ 138 տարբերակով, Մշակողի ռեժիմը պարտադիր չէ: Փոխարենը միացրեք `Թույլ տալ օգտագործողի սկրիպտները` ընդլայնման կարգավորումներում:

① Բացեք Edge Mobile ընդլայնումների ցուցակը, գտեք ScriptCat ընդլայնումը և հպեք աջ կողմի `⋮` կոճակին

② Ընդլայնման կարգավորումների պատուհանում միացրեք `Թույլ տալ օգտագործողի սկրիպտները`

③ Անջատեք և նորից միացրեք ընդլայնումը, կամ վերագործարկեք զննարկիչը՝ սկրիպտի ֆունկցիոնալությունը գործողության մեջ դնելու համար:

> ⚠️⚠️⚠️ Զննարկչի շարժիչի 138-ից ցածր տարբերակների, կամ այս տարբերակը չունեցող օգտագործողների համար, խնդրում ենք տեսեք [Միացնել մշակողի ռեժիմը](#enable-developer-mode)

![edge-mobile-allow-user-scripts](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge mobile 138.png)

  </TabItem>
</Tabs>

## Միացնել մշակողի ռեժիմը {#enable-developer-mode}

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge</span></div>} default>

① Բացեք զննարկչի ընդլայնումների կառավարման ինտերֆեյսը, կամ այցելեք [edge://extensions/](edge://extensions/)

![edge-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge-extensions-page.webp)

② Միացրեք `Մշակողի ռեժիմը` (որոշ զննարկիչներում այս ռեժիմը կարող է գտնվել այլ տարբերակներում, օրինակ՝ 360 զննարկիչ. Ընդլայնված կառավարում > Մշակողի ռեժիմ)

![edge-open-dev](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge-developer-mode-toggle.webp)

③ Մշակողի ռեժիմը միացնելուց հետո անջատեք և նորից միացրեք ընդլայնումը, կամ վերագործարկեք զննարկիչը՝ սկրիպտի ֆունկցիոնալությունը գործողության մեջ դնելու համար:

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" /><span>Chrome</span></div>}>

① Բացեք զննարկչի ընդլայնումների կառավարման ինտերֆեյսը, կամ այցելեք [chrome://extensions/](chrome://extensions/)

![chrome-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/chrome-extensions-page.webp)

② Միացրեք `Մշակողի ռեժիմը` (որոշ զննարկիչներում այս ռեժիմը կարող է գտնվել այլ տարբերակներում, օրինակ՝ 360 զննարկիչ. Ընդլայնված կառավարում > Մշակողի ռեժիմ)

![chrome-open-dev](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/chrome-developer-mode-toggle.webp)

③ Մշակողի ռեժիմը միացնելուց հետո անջատեք և նորից միացրեք ընդլայնումը, կամ վերագործարկեք զննարկիչը՝ սկրիպտի ֆունկցիոնալությունը գործողության մեջ դնելու համար:

  </TabItem>

<TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge Mobile</span></div>}>

Edge Mobile-ի համար՝ զննարկչի շարժիչի 138-ից ցածր տարբերակներով, կամ առանց `Թույլ տալ օգտագործողի սկրիպտները` տարբերակի, հպեք ընդլայնումների էջի վերևի կարգավորումների կոճակին՝ Մշակողի ռեժիմը միացնելու համար:

![edge-mobile-open-dev](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge mobile.png)
</TabItem>

</Tabs>

:::warning Լեգասի տարբերակի ծանուցում

Եթե դուք օգտագործում եք Windows 8/7/XP համակարգեր, կամ ձեր զննարկչի շարժիչի տարբերակը 120-ից ցածր է, դուք պետք է ձեռքով տեղադրեք [լեգասի ScriptCat-ը](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html): v0.16.x-ը վերջին տարբերակն է, որը աջակցում է Manifest V2-ին: Տեղադրման քայլերը կարող եք գտնել այստեղ՝ [Անփաթեթ ընդլայնման տեղադրում](/docs/use/use/#load-unpacked-extension-installation):

:::

<details>
<summary>Տեխնիկական նախապատմություն. Manifest V3</summary>

Զննարկչի սահմանափակումների պատճառով ընդլայնումները ստիպված են թարմացվել Manifest V3-ի, իսկ Manifest V2 ընդլայնումները լիովին կդադարեցվեն 2025 թվականի հունիսից հետո: Manifest V3-ի սահմանափակումների ներքո դուք պետք է միացնեք մշակողի ռեժիմը կամ օգտագործողի սկրիպտների ֆունկցիոնալությունը՝ ScriptCat ընդլայնումը նորմալ օգտագործելու համար:

Հղում. [Մշակողի ռեժիմ ընդլայնումների օգտագործողների համար](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#developer_mode_for_extension_users), [Manifest V3](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3?hl=en)

Զննարկչի շարժիչի ≥ 138 տարբերակների համար անհրաժեշտ է միացնել «Թույլ տալ օգտագործողի սկրիպտները»: Ավելի ցածր տարբերակների համար օգտագործեք «Միացնել մշակողի ռեժիմը»:

</details>
