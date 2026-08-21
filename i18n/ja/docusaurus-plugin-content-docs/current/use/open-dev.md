---
title: ブラウザのユーザースクリプトサポートを有効にする
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Icon } from "@iconify/react";
import BrowserGuide from '@site/src/components/BrowserGuide';
import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="install" />

<BrowserGuide texts={{
  allowUserScripts: {
    title: "お使いのブラウザは「ユーザースクリプトを許可」に対応しています",
    description: "以下の手順に従って「ユーザースクリプトを許可」オプションを有効にし、ScriptCat を正常に使用してください。",
    button: "手順を見る",
    anchor: "#allow-user-scripts",
  },
  devMode: {
    title: "お使いのブラウザは「開発者モード」の有効化が必要です",
    description: "以下の手順に従って「開発者モード」を有効にし、ScriptCat を正常に使用してください。",
    button: "手順を見る",
    anchor: "#enable-developer-mode",
  },
  legacy: {
    title: "お使いのブラウザバージョンが古すぎます",
    description: "お使いのブラウザは Manifest V3 をサポートしていません。レガシー ScriptCat（v0.16.x）を手動でインストールする必要があります。以下の手順を参照してください。",
  },
  nonChromium: {
    title: "Chromium ベースのブラウザが検出されません",
    description: "ScriptCat は現在、Chromium ベースのブラウザ（Chrome、Edge など）のみをサポートしています。Chromium ベースのブラウザを使用している場合は、このメッセージを無視し、以下の手順に従ってください。",
  },
}} />

## ユーザースクリプトを許可

[ユーザースクリプトを許可](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#chrome_versions_138_and_newer_allow_user_scripts_toggle) は、ユーザースクリプトがブラウザで実行できるようになる Manifest V3 の新機能です。

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge</div>} default>

① ブラウザの拡張機能管理インターフェースを開くか、[edge://extensions/](edge://extensions/) にアクセス

![edge-open-settings](./open-dev.assets/edge-extensions-page.webp)

② 拡張機能管理インターフェースで ScriptCat 拡張機能を見つけて `詳細` をクリック

![edge-extensions-details](open-dev.assets/edge-extensions-details.png)

③ ScriptCat 拡張機能の詳細ページで `ユーザースクリプトを許可` オプションを見つけて有効にします。その後、拡張機能を無効にして再度有効にするか、ブラウザを再起動してスクリプト機能を有効にしてください。

> ⚠️⚠️⚠️ 旧バージョンの Edge ブラウザ（v143 以下）またはこのオプションがないユーザーは、[開発者モードを有効にする](#enable-developer-mode) を参照してください

![edge-allow-user-scripts](open-dev.assets/edge-allow-user-scripts.png)

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" />Chrome</div>}>

① ブラウザの拡張機能管理インターフェースを開くか、[chrome://extensions/](chrome://extensions/) にアクセス

![chrome-open-settings](./open-dev.assets/chrome-extensions-page.webp)

② 拡張機能管理インターフェースで ScriptCat 拡張機能を見つけて `詳細` をクリック

![scriptcat-extension-details](open-dev.assets/scriptcat-extension-details.webp)

③ ScriptCat 拡張機能の詳細ページで `ユーザースクリプトを許可` オプションを見つけて有効にします。その後、拡張機能を無効にして再度有効にするか、ブラウザを再起動してスクリプト機能を有効にしてください。

![allow-user-scripts-toggle](open-dev.assets/allow-user-scripts-toggle.webp)
</TabItem>
  <TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge Mobile</div>}>

ブラウザエンジンバージョン ≥ 138 の Edge Mobile では、開発者モードは不要です。代わりに拡張機能設定で `ユーザースクリプトを許可` を有効にしてください。

① Edge Mobile の拡張機能リストを開き、ScriptCat 拡張機能を見つけて右の `⋮` ボタンをタップ

② 拡張機能設定ポップアップで `ユーザースクリプトを許可` を有効にする

③ 拡張機能を無効にして再度有効にするか、ブラウザを再起動してスクリプト機能を有効にしてください。

> ⚠️⚠️⚠️ ブラウザエンジンバージョンが 138 未満の場合、またはこのオプションがない場合は、[開発者モードを有効にする](#enable-developer-mode) を参照してください

![edge-mobile-allow-user-scripts](./open-dev.assets/edge%20mobile%20138.png)

  </TabItem>
</Tabs>

## 開発者モードを有効にする

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge</span></div>} default>

① ブラウザの拡張機能管理インターフェースを開くか、[edge://extensions/](edge://extensions/) にアクセス

![edge-open-settings](./open-dev.assets/edge-extensions-page.webp)

② `開発者モード` を有効にする（一部のブラウザでは、このモードが他のオプションにある場合があります。例：360 ブラウザ：詳細管理 > 開発者モード）

![edge-open-dev](./open-dev.assets/edge-developer-mode-toggle.webp)

③ 開発者モードを有効にした後、拡張機能を無効にして再度有効にするか、ブラウザを再起動してスクリプト機能を有効にしてください。

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" /><span>Chrome</span></div>}>

① ブラウザの拡張機能管理インターフェースを開くか、[chrome://extensions/](chrome://extensions/) にアクセス

![chrome-open-settings](./open-dev.assets/chrome-extensions-page.webp)

② `開発者モード` を有効にする（一部のブラウザでは、このモードが他のオプションにある場合があります。例：360 ブラウザ：詳細管理 > 開発者モード）

![chrome-open-dev](./open-dev.assets/chrome-developer-mode-toggle.webp)

③ 開発者モードを有効にした後、拡張機能を無効にして再度有効にするか、ブラウザを再起動してスクリプト機能を有効にしてください。

  </TabItem>

<TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge Mobile</span></div>}>

ブラウザエンジンバージョンが 138 未満の Edge Mobile または `ユーザースクリプトを許可` オプションがない場合は、拡張機能ページの上部にある設定ボタンをタップして開発者モードを有効にしてください。

![edge-mobile-open-dev](./open-dev.assets/edge%20mobile.png)
</TabItem>

</Tabs>

:::warning レガシーバージョンのお知らせ

Windows 8/7/XP システムを使用している場合、またはブラウザエンジンバージョンが 120 未満の場合は、[レガシー ScriptCat](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html) を手動でインストールする必要があります。v0.16.x は Manifest V2 をサポートする最後のバージョンです。インストール手順は [パックされていない拡張機能の読み込み](/docs/use/use/#load-unpacked-extension-installation) を参照してください。

:::

<details>
<summary>技術的背景：Manifest V3</summary>

ブラウザの制限により、拡張機能は Manifest V3 に強制的にアップグレードされ、Manifest V2 拡張機能は 2025 年 6 月以降完全に廃止されます。Manifest V3 の制限下では、ScriptCat 拡張機能を正常に使用するために、開発者モードまたはユーザースクリプト機能を有効にする必要があります。

参考：[拡張機能ユーザーの開発者モード](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#developer_mode_for_extension_users)、[Manifest V3](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3?hl=en)

ブラウザエンジンバージョン ≥ 138 の場合は「ユーザースクリプトを許可」を有効にする必要があります。それ以外の場合は「開発者モードを有効にする」を使用してください。

</details>
