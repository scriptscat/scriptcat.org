---
title: 브라우저 사용자 스크립트 지원 활성화
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

## 사용자 스크립트 허용 {#allow-user-scripts}

[Allow User Scripts](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#chrome_versions_138_and_newer_allow_user_scripts_toggle)은 사용자 스크립트가 브라우저에서 실행될 수 있게 해주는 Manifest V3의 새로운 기능입니다.

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge</div>} default>

① 브라우저의 확장 프로그램 관리 인터페이스를 열거나 [edge://extensions/](edge://extensions/)를 방문합니다

![edge-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge-extensions-page.webp)

② 확장 프로그램 관리 인터페이스에서 ScriptCat 확장 프로그램을 찾아 `세부정보`를 클릭합니다

![edge-extensions-details](open-dev.assets/edge-extensions-details.png)

③ ScriptCat 확장 프로그램 세부정보 페이지에서 `사용자 스크립트 허용` 옵션을 찾아 활성화합니다. 그런 다음 확장 프로그램을 비활성화했다가 다시 활성화하거나 브라우저를 다시 시작하여 스크립트 기능을 적용합니다.

> ⚠️⚠️⚠️ 낮은 버전의 Edge 브라우저(\<=143 버전) 또는 이 옵션이 없는 사용자는 [개발자 모드 활성화](#enable-developer-mode)를 참조하세요

![edge-allow-user-scripts](open-dev.assets/edge-allow-user-scripts.png)

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" />Chrome</div>}>

① 브라우저의 확장 프로그램 관리 인터페이스를 열거나 [chrome://extensions/](chrome://extensions/)를 방문합니다

![chrome-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/chrome-extensions-page.webp)

② 확장 프로그램 관리 인터페이스에서 ScriptCat 확장 프로그램을 찾아 `세부정보`를 클릭합니다

![scriptcat-extension-details](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/scriptcat-extension-details.webp)

③ ScriptCat 확장 프로그램 세부정보 페이지에서 `사용자 스크립트 허용` 옵션을 찾아 활성화합니다. 그런 다음 확장 프로그램을 비활성화했다가 다시 활성화하거나 브라우저를 다시 시작하여 스크립트 기능을 적용합니다.

![allow-user-scripts-toggle](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/allow-user-scripts-toggle.webp)
</TabItem>
  <TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge Mobile</div>}>

브라우저 엔진 버전이 138 이상인 Edge Mobile의 경우 개발자 모드가 필요하지 않습니다. 대신 확장 프로그램 설정에서 `사용자 스크립트 허용`을 활성화하세요.

① Edge Mobile 확장 프로그램 목록을 열고 ScriptCat 확장 프로그램을 찾은 다음 오른쪽의 `⋮` 버튼을 탭합니다

② 확장 프로그램 설정 팝업에서 `사용자 스크립트 허용`을 활성화합니다

③ 확장 프로그램을 비활성화했다가 다시 활성화하거나 브라우저를 다시 시작하여 스크립트 기능을 적용합니다.

> ⚠️⚠️⚠️ 브라우저 엔진 버전이 138보다 낮거나 이 옵션이 없는 사용자는 [개발자 모드 활성화](#enable-developer-mode)를 참조하세요

![edge-mobile-allow-user-scripts](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge mobile 138.png)

  </TabItem>
</Tabs>

## 개발자 모드 활성화 {#enable-developer-mode}

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge</span></div>} default>

① 브라우저의 확장 프로그램 관리 인터페이스를 열거나 [edge://extensions/](edge://extensions/)를 방문합니다

![edge-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge-extensions-page.webp)

② `개발자 모드`를 활성화합니다 (일부 브라우저에서는 이 모드가 다른 옵션에 있을 수 있습니다. 예: 360 브라우저: 고급 관리 > 개발자 모드)

![edge-open-dev](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge-developer-mode-toggle.webp)

③ 개발자 모드를 활성화한 후 확장 프로그램을 비활성화했다가 다시 활성화하거나 브라우저를 다시 시작하여 스크립트 기능을 적용합니다.

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" /><span>Chrome</span></div>}>

① 브라우저의 확장 프로그램 관리 인터페이스를 열거나 [chrome://extensions/](chrome://extensions/)를 방문합니다

![chrome-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/chrome-extensions-page.webp)

② `개발자 모드`를 활성화합니다 (일부 브라우저에서는 이 모드가 다른 옵션에 있을 수 있습니다. 예: 360 브라우저: 고급 관리 > 개발자 모드)

![chrome-open-dev](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/chrome-developer-mode-toggle.webp)

③ 개발자 모드를 활성화한 후 확장 프로그램을 비활성화했다가 다시 활성화하거나 브라우저를 다시 시작하여 스크립트 기능을 적용합니다.

  </TabItem>

<TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge Mobile</span></div>}>

브라우저 엔진 버전이 138보다 낮거나 `사용자 스크립트 허용` 옵션이 없는 Edge Mobile의 경우 확장 프로그램 페이지 상단의 설정 버튼을 탭하여 개발자 모드를 활성화하세요.

![edge-mobile-open-dev](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge mobile.png)
</TabItem>

</Tabs>

:::warning 레거시 버전 공지

Windows 8/7/XP 시스템을 사용 중이거나 브라우저 엔진 버전이 120보다 낮은 경우 [레거시 ScriptCat](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html)을 수동으로 설치해야 합니다. v0.16.x는 Manifest V2를 지원하는 마지막 버전입니다. 설치 단계는 [압축 해제된 확장 프로그램 설치](/docs/use/use/#load-unpacked-extension-installation)에서 확인할 수 있습니다.

:::

<details>
<summary>기술 배경: Manifest V3</summary>

브라우저 제한으로 인해 확장 프로그램은 Manifest V3로 업그레이드해야 하며, Manifest V2 확장 프로그램은 2025년 6월 이후 완전히 중단됩니다. Manifest V3의 제한 아래에서 ScriptCat 확장 프로그램을 정상적으로 사용하려면 개발자 모드 또는 사용자 스크립트 기능을 활성화해야 합니다.

참조: [확장 프로그램 사용자를 위한 개발자 모드](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#developer_mode_for_extension_users), [Manifest V3](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3?hl=en)

브라우저 엔진 버전이 138 이상이면 "사용자 스크립트 허용"을 활성화해야 합니다. 낮은 버전에서는 "개발자 모드 활성화"를 사용하세요.

</details>
