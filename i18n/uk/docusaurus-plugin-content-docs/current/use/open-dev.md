---
title: Увімкнення підтримки користувацьких скриптів у браузері
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

## Дозволити користувацькі скрипти {#allow-user-scripts}

[Allow User Scripts](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#chrome_versions_138_and_newer_allow_user_scripts_toggle) — це нова функція Manifest V3, яка дозволяє користувацьким скриптам запускатися в браузері.

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge</div>} default>

① Відкрийте інтерфейс керування розширеннями браузера або відвідайте [edge://extensions/](edge://extensions/)

![edge-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge-extensions-page.webp)

② В інтерфейсі керування розширеннями знайдіть розширення ScriptCat і натисніть `Деталі`

![edge-extensions-details](open-dev.assets/edge-extensions-details.png)

③ На сторінці деталей розширення ScriptCat знайдіть опцію `Дозволити користувацькі скрипти` та увімкніть її. Потім вимкніть і знову ввімкніть розширення або перезапустіть браузер, щоб функціональність скриптів стала ефективною.

> ⚠️⚠️⚠️ Для браузерів Edge нижчих версій (\<=143) або користувачів без цієї опції дивіться [Увімкнення режиму розробника](#enable-developer-mode)

![edge-allow-user-scripts](open-dev.assets/edge-allow-user-scripts.png)

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" />Chrome</div>}>

① Відкрийте інтерфейс керування розширеннями браузера або відвідайте [chrome://extensions/](chrome://extensions/)

![chrome-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/chrome-extensions-page.webp)

② В інтерфейсі керування розширеннями знайдіть розширення ScriptCat і натисніть `Деталі`

![scriptcat-extension-details](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/scriptcat-extension-details.webp)

③ На сторінці деталей розширення ScriptCat знайдіть опцію `Дозволити користувацькі скрипти` та увімкніть її. Потім вимкніть і знову ввімкніть розширення або перезапустіть браузер, щоб функціональність скриптів стала ефективною.

![allow-user-scripts-toggle](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/allow-user-scripts-toggle.webp)
</TabItem>
  <TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge Mobile</div>}>

Для Edge Mobile із версією рушія браузера ≥ 138 режим розробника не потрібен. Замість цього увімкніть `Дозволити користувацькі скрипти` в налаштуваннях розширення.

① Відкрийте список розширень Edge Mobile, знайдіть розширення ScriptCat і торкніться кнопки `⋮` праворуч

② У спливному вікні налаштувань розширення увімкніть `Дозволити користувацькі скрипти`

③ Вимкніть і знову ввімкніть розширення або перезапустіть браузер, щоб функціональність скриптів стала ефективною.

> ⚠️⚠️⚠️ Для версій рушія браузера нижче 138 або користувачів без цієї опції дивіться [Увімкнення режиму розробника](#enable-developer-mode)

![edge-mobile-allow-user-scripts](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge mobile 138.png)

  </TabItem>
</Tabs>

## Увімкнення режиму розробника {#enable-developer-mode}

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge</span></div>} default>

① Відкрийте інтерфейс керування розширеннями браузера або відвідайте [edge://extensions/](edge://extensions/)

![edge-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge-extensions-page.webp)

② Увімкніть `Режим розробника` (у деяких браузерах цей режим може знаходитися в інших опціях, наприклад, 360 Browser: Розширене керування > Режим розробника)

![edge-open-dev](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge-developer-mode-toggle.webp)

③ Після ввімкнення режиму розробника вимкніть і знову ввімкніть розширення або перезапустіть браузер, щоб функціональність скриптів стала ефективною.

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" /><span>Chrome</span></div>}>

① Відкрийте інтерфейс керування розширеннями браузера або відвідайте [chrome://extensions/](chrome://extensions/)

![chrome-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/chrome-extensions-page.webp)

② Увімкніть `Режим розробника` (у деяких браузерах цей режим може знаходитися в інших опціях, наприклад, 360 Browser: Розширене керування > Режим розробника)

![chrome-open-dev](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/chrome-developer-mode-toggle.webp)

③ Після ввімкнення режиму розробника вимкніть і знову ввімкніть розширення або перезапустіть браузер, щоб функціональність скриптів стала ефективною.

  </TabItem>

<TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge Mobile</span></div>}>

Для Edge Mobile із версіями рушія браузера нижче 138 або без опції `Дозволити користувацькі скрипти` торкніться кнопки налаштувань у верхній частині сторінки розширень, щоб увімкнути режим розробника.

![edge-mobile-open-dev](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge mobile.png)
</TabItem>

</Tabs>

:::warning Повідомлення про застарілу версію

Якщо ви використовуєте Windows 8/7/XP або версія рушія вашого браузера нижче 120, вам потрібно вручну встановити [застарілий ScriptCat](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html). v0.16.x — остання версія, що підтримує Manifest V2. Кроки встановлення: [Встановлення розпакованого розширення](/docs/use/use/#load-unpacked-extension-installation).

:::

<details>
<summary>Технічні деталі: Manifest V3</summary>

Через обмеження браузера розширення змушені оновлюватися до Manifest V3, а розширення Manifest V2 будуть повністю припинені після червня 2025 року. В умовах обмежень Manifest V3 ви повинні ввімкнути режим розробника або функціональність користувацьких скриптів, щоб нормально використовувати розширення ScriptCat.

Довідка: [Режим розробника для користувачів розширень](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#developer_mode_for_extension_users), [Manifest V3](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3?hl=en)

Для версій рушія браузера ≥ 138 потрібно ввімкнути "Дозволити користувацькі скрипти". Для нижчих версій використовуйте "Увімкнення режиму розробника".

</details>
