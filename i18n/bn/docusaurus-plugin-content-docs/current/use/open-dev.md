---
title: ব্রাউজার ইউজার স্ক্রিপ্ট সমর্থন সক্রিয় করুন
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

## ব্যবহারকারীর স্ক্রিপ্ট অনুমতি দিন {#allow-user-scripts}

[Allow User Scripts](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#chrome_versions_138_and_newer_allow_user_scripts_toggle) Manifest V3-এর একটি নতুন ফিচার যা ইউজার স্ক্রিপ্টগুলিকে ব্রাউজারে চলতে দেয়।

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge</div>} default>

① ব্রাউজারের এক্সটেনশন ম্যানেজমেন্ট ইন্টারফেস খুলুন, বা [edge://extensions/](edge://extensions/) দেখুন

![edge-open-settings](./open-dev.assets/edge-extensions-page.webp)

② এক্সটেনশন ম্যানেজমেন্ট ইন্টারফেসে, ScriptCat এক্সটেনশনটি খুঁজুন এবং `Details`-এ ক্লিক করুন

![edge-extensions-details](open-dev.assets/edge-extensions-details.png)

③ ScriptCat এক্সটেনশন বিবরণ পৃষ্ঠায়, `Allow user scripts` বিকল্পটি খুঁজুন এবং এটি সক্রিয় করুন। তারপর এক্সটেনশনটি নিষ্ক্রিয় ও পুনরায় সক্রিয় করুন, বা স্ক্রিপ্ট কার্যকারিতা কার্যকর করতে ব্রাউজারটি পুনরায় চালু করুন।

> ⚠️⚠️⚠️ নিম্ন সংস্করণের Edge ব্রাউজারগুলির জন্য (\<=143 সংস্করণ) বা যাদের এই বিকল্প নেই, অনুগ্রহ করে [ডেভেলপার মোড সক্রিয় করুন](#enable-developer-mode) দেখুন

![edge-allow-user-scripts](open-dev.assets/edge-allow-user-scripts.png)

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" />Chrome</div>}>

① ব্রাউজারের এক্সটেনশন ম্যানেজমেন্ট ইন্টারফেস খুলুন, বা [chrome://extensions/](chrome://extensions/) দেখুন

![chrome-open-settings](./open-dev.assets/chrome-extensions-page.webp)

② এক্সটেনশন ম্যানেজমেন্ট ইন্টারফেসে, ScriptCat এক্সটেনশনটি খুঁজুন এবং `Details`-এ ক্লিক করুন

![scriptcat-extension-details](open-dev.assets/scriptcat-extension-details.webp)

③ ScriptCat এক্সটেনশন বিবরণ পৃষ্ঠায়, `Allow user scripts` বিকল্পটি খুঁজুন এবং এটি সক্রিয় করুন। তারপর এক্সটেনশনটি নিষ্ক্রিয় ও পুনরায় সক্রিয় করুন, বা স্ক্রিপ্ট কার্যকারিতা কার্যকর করতে ব্রাউজারটি পুনরায় চালু করুন।

![allow-user-scripts-toggle](open-dev.assets/allow-user-scripts-toggle.webp)
</TabItem>
  <TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge Mobile</div>}>

ব্রাউজার ইঞ্জিন সংস্করণ ≥ 138 সহ Edge Mobile-এর জন্য, ডেভেলপার মোড প্রয়োজন নেই। এর পরিবর্তে এক্সটেনশন সেটিংসে `Allow user scripts` সক্রিয় করুন।

① Edge Mobile এক্সটেনশন তালিকা খুলুন, ScriptCat এক্সটেনশনটি খুঁজুন এবং ডানদিকের `⋮` বাটনে ট্যাপ করুন

② এক্সটেনশন সেটিংস পপআপে, `Allow user scripts` সক্রিয় করুন

③ এক্সটেনশনটি নিষ্ক্রিয় ও পুনরায় সক্রিয় করুন, বা স্ক্রিপ্ট কার্যকারিতা কার্যকর করতে ব্রাউজারটি পুনরায় চালু করুন।

> ⚠️⚠️⚠️ 138-এর নিচের ব্রাউজার ইঞ্জিন সংস্করণগুলির জন্য, বা যাদের এই বিকল্প নেই, অনুগ্রহ করে [ডেভেলপার মোড সক্রিয় করুন](#enable-developer-mode) দেখুন

![edge-mobile-allow-user-scripts](./open-dev.assets/edge%20mobile%20138.png)

  </TabItem>
</Tabs>

## ডেভেলপার মোড সক্রিয় করুন {#enable-developer-mode}

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge</span></div>} default>

① ব্রাউজারের এক্সটেনশন ম্যানেজমেন্ট ইন্টারফেস খুলুন, বা [edge://extensions/](edge://extensions/) দেখুন

![edge-open-settings](./open-dev.assets/edge-extensions-page.webp)

② `ডেভেলপার মোড` সক্রিয় করুন (কিছু ব্রাউজারে, এই মোডটি অন্যান্য বিকল্পে অবস্থিত হতে পারে, যেমন 360 ব্রাউজার: অ্যাডভান্সড ম্যানেজমেন্ট > ডেভেলপার মোড)

![edge-open-dev](./open-dev.assets/edge-developer-mode-toggle.webp)

③ ডেভেলপার মোড সক্রিয় করার পরে, এক্সটেনশনটি নিষ্ক্রিয় ও তারপর পুনরায় সক্রিয় করুন, বা স্ক্রিপ্ট কার্যকারিতা কার্যকর করতে ব্রাউজারটি পুনরায় চালু করুন।

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" /><span>Chrome</span></div>}>

① ব্রাউজারের এক্সটেনশন ম্যানেজমেন্ট ইন্টারফেস খুলুন, বা [chrome://extensions/](chrome://extensions/) দেখুন

![chrome-open-settings](./open-dev.assets/chrome-extensions-page.webp)

② `ডেভেলপার মোড` সক্রিয় করুন (কিছু ব্রাউজারে, এই মোডটি অন্যান্য বিকল্পে অবস্থিত হতে পারে, যেমন 360 ব্রাউজার: অ্যাডভান্সড ম্যানেজমেন্ট > ডেভেলপার মোড)

![chrome-open-dev](./open-dev.assets/chrome-developer-mode-toggle.webp)

③ ডেভেলপার মোড সক্রিয় করার পরে, এক্সটেনশনটি নিষ্ক্রিয় ও তারপর পুনরায় সক্রিয় করুন, বা স্ক্রিপ্ট কার্যকারিতা কার্যকর করতে ব্রাউজারটি পুনরায় চালু করুন।

  </TabItem>

<TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge Mobile</span></div>}>

138-এর নিচের ব্রাউজার ইঞ্জিন সংস্করণ সহ Edge Mobile-এর জন্য, বা `Allow user scripts` বিকল্প ছাড়া, ডেভেলপার মোড সক্রিয় করতে এক্সটেনশন পৃষ্ঠার শীর্ষে সেটিংস বাটনে ট্যাপ করুন।

![edge-mobile-open-dev](./open-dev.assets/edge%20mobile.png)
</TabItem>

</Tabs>

:::warning লিগ্যাসি সংস্করণ বিজ্ঞপ্তি

আপনি যদি Windows 8/7/XP সিস্টেম ব্যবহার করেন, বা আপনার ব্রাউজার ইঞ্জিন সংস্করণ 120-এর নিচে হয়, আপনাকে ম্যানুয়ালি [লিগ্যাসি ScriptCat](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html) ইনস্টল করতে হবে। v0.16.x হল শেষ সংস্করণ যা Manifest V2 সমর্থন করে। ইনস্টলেশন ধাপ: [আনপ্যাকড এক্সটেনশন ইনস্টলেশন](/docs/use/use/#load-unpacked-extension-installation)।

:::

<details>
<summary>প্রযুক্তিগত পটভূমি: Manifest V3</summary>

ব্রাউজার সীমাবদ্ধতার কারণে, এক্সটেনশনগুলি Manifest V3-এ আপগ্রেড করতে বাধ্য এবং Manifest V2 এক্সটেনশনগুলি জুন ২০২৫-এর পরে সম্পূর্ণভাবে বন্ধ হয়ে যাবে। Manifest V3-এর সীমাবদ্ধতার অধীনে, ScriptCat এক্সটেনশনটি স্বাভাবিকভাবে ব্যবহার করতে আপনাকে ডেভেলপার মোড বা ইউজার স্ক্রিপ্ট কার্যকারিতা সক্রিয় করতে হবে।

রেফারেন্স: [এক্সটেনশন ব্যবহারকারীদের জন্য ডেভেলপার মোড](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#developer_mode_for_extension_users), [Manifest V3](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3?hl=en)

ব্রাউজার ইঞ্জিন সংস্করণ ≥ 138-এর জন্য, "Allow User Scripts" সক্রিয় করতে হবে। নিম্ন সংস্করণগুলির জন্য, "ডেভেলপার মোড সক্রিয় করুন" ব্যবহার করুন।

</details>
