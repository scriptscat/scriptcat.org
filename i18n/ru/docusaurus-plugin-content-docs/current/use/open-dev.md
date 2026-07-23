---
title: Включение поддержки пользовательских скриптов в браузере
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Icon } from "@iconify/react";
import BrowserGuide from '@site/src/components/BrowserGuide';
import GithubStar from '@site/src/components/GithubStar';
import SponsorBlock from '@site/src/components/SponsorBlock/en.mdx';


<GithubStar variant="bar" scene="install" />

<BrowserGuide texts={{
  allowUserScripts: {
    title: "Ваш браузер поддерживает «Разрешить пользовательские скрипты»",
    description: "Следуйте шагам ниже, чтобы включить параметр «Разрешить пользовательские скрипты» и нормально пользоваться ScriptCat.",
    button: "Смотреть шаги",
    anchor: "#allow-user-scripts",
  },
  devMode: {
    title: "В вашем браузере нужно включить «Режим разработчика»",
    description: "Следуйте шагам ниже, чтобы включить «Режим разработчика» и нормально пользоваться ScriptCat.",
    button: "Смотреть шаги",
    anchor: "#enable-developer-mode",
  },
  legacy: {
    title: "Версия браузера слишком старая",
    description: "Ваш браузер не поддерживает Manifest V3. Нужно вручную установить устаревший ScriptCat (v0.16.x). См. инструкции ниже.",
  },
  nonChromium: {
    title: "Chromium-браузер не обнаружен",
    description: "ScriptCat сейчас поддерживает только браузеры на базе Chromium (Chrome, Edge и т.д.). Если вы используете такой браузер, проигнорируйте это сообщение и следуйте шагам ниже.",
  },
}} />

<SponsorBlock />

## Разрешить пользовательские скрипты {#allow-user-scripts}

[Allow User Scripts](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#chrome_versions_138_and_newer_allow_user_scripts_toggle) — новая возможность Manifest V3, позволяющая запускать пользовательские скрипты в браузере.

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge</div>} default>

① Откройте управление расширениями браузера или перейдите на [edge://extensions/](edge://extensions/)

![edge-open-settings](./open-dev.assets/edge-extensions-page.webp)

② Найдите расширение ScriptCat и нажмите `Details` / «Сведения»

![edge-extensions-details](open-dev.assets/edge-extensions-details.png)

③ На странице сведений ScriptCat найдите параметр `Allow user scripts` / «Разрешить пользовательские скрипты» и включите его. Затем отключите и снова включите расширение или перезапустите браузер.

> ⚠️⚠️⚠️ Для более старых Edge (≤143) или если этого параметра нет, см. [Включение режима разработчика](#enable-developer-mode)

![edge-allow-user-scripts](open-dev.assets/edge-allow-user-scripts.png)

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" />Chrome</div>}>

① Откройте управление расширениями или перейдите на [chrome://extensions/](chrome://extensions/)

![chrome-open-settings](./open-dev.assets/chrome-extensions-page.webp)

② Найдите расширение ScriptCat и нажмите `Details` / «Сведения»

![scriptcat-extension-details](open-dev.assets/scriptcat-extension-details.webp)

③ На странице сведений ScriptCat найдите `Allow user scripts` / «Разрешить пользовательские скрипты» и включите. Затем отключите и снова включите расширение или перезапустите браузер.

![allow-user-scripts-toggle](open-dev.assets/allow-user-scripts-toggle.webp)
</TabItem>
  <TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge Mobile</div>}>

Для Edge Mobile с версией движка ≥ 138 режим разработчика не обязателен. Включите `Allow user scripts` в настройках расширения.

① Откройте список расширений Edge Mobile, найдите ScriptCat и нажмите `⋮` справа

② Во всплывающих настройках расширения включите `Allow user scripts`

③ Отключите и снова включите расширение или перезапустите браузер.

> ⚠️⚠️⚠️ Для движка ниже 138 или если параметра нет, см. [Включение режима разработчика](#enable-developer-mode)

![edge-mobile-allow-user-scripts](./open-dev.assets/edge%20mobile%20138.png)

  </TabItem>
</Tabs>

## Включение режима разработчика {#enable-developer-mode}

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge</span></div>} default>

① Откройте управление расширениями или [edge://extensions/](edge://extensions/)

![edge-open-settings](./open-dev.assets/edge-extensions-page.webp)

② Включите `Developer mode` / «Режим разработчика» (в некоторых браузерах он может быть в другом месте, например 360: Дополнительное управление > Режим разработчика)

![edge-open-dev](./open-dev.assets/edge-developer-mode-toggle.webp)

③ После включения отключите и снова включите расширение или перезапустите браузер.

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" /><span>Chrome</span></div>}>

① Откройте управление расширениями или [chrome://extensions/](chrome://extensions/)

![chrome-open-settings](./open-dev.assets/chrome-extensions-page.webp)

② Включите `Developer mode` / «Режим разработчика» (в некоторых браузерах он может быть в другом месте)

![chrome-open-dev](./open-dev.assets/chrome-developer-mode-toggle.webp)

③ После включения отключите и снова включите расширение или перезапустите браузер.

  </TabItem>

<TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge Mobile</span></div>}>

Для Edge Mobile с движком ниже 138 или без параметра `Allow user scripts` нажмите кнопку настроек вверху страницы расширений и включите режим разработчика.

![edge-mobile-open-dev](./open-dev.assets/edge%20mobile.png)
</TabItem>

</Tabs>

:::warning Устаревшие версии

Если вы используете Windows 8/7/XP или версия движка браузера ниже 120, нужно вручную установить [устаревший ScriptCat](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html). v0.16.x — последняя версия с поддержкой Manifest V2. Шаги установки: [Загрузка распакованного расширения](./use.md#load-unpacked-extension-installation).

:::

<details>
<summary>Технический фон: Manifest V3</summary>

Из‑за ограничений браузеров расширения переводят на Manifest V3, а расширения Manifest V2 полностью отключают после июня 2025. В рамках Manifest V3 для нормальной работы ScriptCat нужно включить режим разработчика или поддержку пользовательских скриптов.

Справка: [Developer mode for extension users](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#developer_mode_for_extension_users), [Manifest V3](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3?hl=en)

Для движка ≥ 138 включайте «Allow User Scripts». Для более старых версий — «Режим разработчика».

</details>
