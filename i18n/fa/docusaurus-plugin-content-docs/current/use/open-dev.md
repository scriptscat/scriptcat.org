---
title: فعال‌سازی پشتیبانی اسکریپت‌های کاربری مرورگر
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

## اجازه دادن به اسکریپت‌های کاربر {#allow-user-scripts}

[Allow User Scripts](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#chrome_versions_138_and_newer_allow_user_scripts_toggle) یک قابلیت جدید Manifest V3 است که به اسکریپت‌های کاربری اجازه می‌دهد در مرورگر اجرا شوند.

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge</div>} default>

① رابط مدیریت افزونه مرورگر را باز کنید، یا به [edge://extensions/](edge://extensions/) بروید

![edge-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge-extensions-page.webp)

② در رابط مدیریت افزونه، افزونه ScriptCat را پیدا کنید و روی `Details` کلیک کنید

![edge-extensions-details](open-dev.assets/edge-extensions-details.png)

③ در صفحه جزئیات افزونه ScriptCat، گزینه `Allow user scripts` را پیدا کنید و آن را فعال کنید. سپس افزونه را غیرفعال و دوباره فعال کنید، یا مرورگر را مجدداً راه‌اندازی کنید تا عملکرد اسکریپت مؤثر شود.

> ⚠️⚠️⚠️ برای مرورگرهای Edge با نسخه پایین‌تر (\<=143) یا کاربرانی که این گزینه را ندارند، لطفاً به [فعال‌سازی حالت توسعه‌دهنده](#enable-developer-mode) مراجعه کنید

![edge-allow-user-scripts](open-dev.assets/edge-allow-user-scripts.png)

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" />Chrome</div>}>

① رابط مدیریت افزونه مرورگر را باز کنید، یا به [chrome://extensions/](chrome://extensions/) بروید

![chrome-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/chrome-extensions-page.webp)

② در رابط مدیریت افزونه، افزونه ScriptCat را پیدا کنید و روی `Details` کلیک کنید

![scriptcat-extension-details](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/scriptcat-extension-details.webp)

③ در صفحه جزئیات افزونه ScriptCat، گزینه `Allow user scripts` را پیدا کنید و آن را فعال کنید. سپس افزونه را غیرفعال و دوباره فعال کنید، یا مرورگر را مجدداً راه‌اندازی کنید تا عملکرد اسکریپت مؤثر شود.

![allow-user-scripts-toggle](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/allow-user-scripts-toggle.webp)
</TabItem>
  <TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge Mobile</div>}>

برای Edge Mobile با نسخه موتور مرورگر ≥ 138، حالت توسعه‌دهنده الزامی نیست. در عوض، `Allow user scripts` را در تنظیمات افزونه فعال کنید.

① فهرست افزونه‌های Edge Mobile را باز کنید، افزونه ScriptCat را پیدا کنید و روی دکمه `⋮` سمت راست ضربه بزنید

② در پنجره بازشوی تنظیمات افزونه، `Allow user scripts` را فعال کنید

③ افزونه را غیرفعال و دوباره فعال کنید، یا مرورگر را مجدداً راه‌اندازی کنید تا عملکرد اسکریپت مؤثر شود.

> ⚠️⚠️⚠️ برای نسخه‌های موتور مرورگر پایین‌تر از 138، یا کاربرانی که این گزینه را ندارند، لطفاً به [فعال‌سازی حالت توسعه‌دهنده](#enable-developer-mode) مراجعه کنید

![edge-mobile-allow-user-scripts](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge mobile 138.png)

  </TabItem>
</Tabs>

## فعال‌سازی حالت توسعه‌دهنده {#enable-developer-mode}

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge</span></div>} default>

① رابط مدیریت افزونه مرورگر را باز کنید، یا به [edge://extensions/](edge://extensions/) بروید

![edge-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge-extensions-page.webp)

② `حالت توسعه‌دهنده` را فعال کنید (در برخی مرورگرها، این حالت ممکن است در گزینه‌های دیگر قرار داشته باشد، مانند مرورگر 360: مدیریت پیشرفته > حالت توسعه‌دهنده)

![edge-open-dev](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge-developer-mode-toggle.webp)

③ پس از فعال کردن حالت توسعه‌دهنده، افزونه را غیرفعال و سپس دوباره فعال کنید، یا مرورگر را مجدداً راه‌اندازی کنید تا عملکرد اسکریپت مؤثر شود.

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" /><span>Chrome</span></div>}>

① رابط مدیریت افزونه مرورگر را باز کنید، یا به [chrome://extensions/](chrome://extensions/) بروید

![chrome-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/chrome-extensions-page.webp)

② `حالت توسعه‌دهنده` را فعال کنید (در برخی مرورگرها، این حالت ممکن است در گزینه‌های دیگر قرار داشته باشد، مانند مرورگر 360: مدیریت پیشرفته > حالت توسعه‌دهنده)

![chrome-open-dev](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/chrome-developer-mode-toggle.webp)

③ پس از فعال کردن حالت توسعه‌دهنده، افزونه را غیرفعال و سپس دوباره فعال کنید، یا مرورگر را مجدداً راه‌اندازی کنید تا عملکرد اسکریپت مؤثر شود.

  </TabItem>

<TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge Mobile</span></div>}>

برای Edge Mobile با نسخه‌های موتور مرورگر پایین‌تر از 138، یا بدون گزینه `Allow user scripts`، روی دکمه تنظیمات بالای صفحه افزونه‌ها ضربه بزنید تا حالت توسعه‌دهنده فعال شود.

![edge-mobile-open-dev](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge mobile.png)
</TabItem>

</Tabs>

:::warning اطلاعیه نسخه قدیمی

اگر از سیستم‌های Windows 8/7/XP استفاده می‌کنید، یا نسخه موتور مرورگر شما پایین‌تر از 120 است، باید [ScriptCat قدیمی](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html) را به صورت دستی نصب کنید. نسخه v0.16.x آخرین نسخه‌ای است که از Manifest V2 پشتیبانی می‌کند. مراحل نصب را می‌توانید در اینجا بیابید: [نصب افزونه از حالت بارگذاری نشده](/docs/use/use/#load-unpacked-extension-installation).

:::

<details>
<summary>پیش‌زمینه فنی: Manifest V3</summary>

به دلیل محدودیت‌های مرورگر، افزونه‌ها مجبور به ارتقا به Manifest V3 هستند و افزونه‌های Manifest V2 پس از ژوئن ۲۰۲۵ کاملاً متوقف خواهند شد. تحت محدودیت‌های Manifest V3، برای استفاده عادی از افزونه ScriptCat باید حالت توسعه‌دهنده یا عملکرد اسکریپت‌های کاربری را فعال کنید.

مرجع: [حالت توسعه‌دهنده برای کاربران افزونه](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#developer_mode_for_extension_users)، [Manifest V3](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3?hl=en)

برای نسخه‌های موتور مرورگر ≥ 138، باید «Allow User Scripts» را فعال کنید. برای نسخه‌های پایین‌تر، از «فعال‌سازی حالت توسعه‌دهنده» استفاده کنید.

</details>
