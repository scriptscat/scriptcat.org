---
title: Tarayıcı Kullanıcı Komut Dosyası Desteğini Etkinleştir
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Icon } from "@iconify/react";
import BrowserGuide from '@site/src/components/BrowserGuide';
import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="install" />

<BrowserGuide texts={{
  allowUserScripts: {
    title: "Tarayıcınız 'Kullanıcı Komut Dosyalarına İzin Ver'i destekliyor",
    description: "ScriptCat'i normal şekilde kullanmak için 'Kullanıcı Komut Dosyalarına İzin Ver' seçeneğini etkinleştirmek üzere aşağıdaki adımları izleyin.",
    button: "Adımları görüntüle",
    anchor: "#allow-user-scripts",
  },
  devMode: {
    title: "Tarayıcınız 'Geliştirici Modu'nun etkinleştirilmesini gerektiriyor",
    description: "ScriptCat'i normal şekilde kullanmak için 'Geliştirici Modu'nu etkinleştirmek üzere aşağıdaki adımları izleyin.",
    button: "Adımları görüntüle",
    anchor: "#enable-developer-mode",
  },
  legacy: {
    title: "Tarayıcı sürümünüz çok eski",
    description: "Tarayıcınız Manifest V3'ü desteklemiyor. Eski ScriptCat'i (v0.16.x) manuel olarak kurmanız gerekir. Aşağıdaki talimatlara bakın.",
  },
  nonChromium: {
    title: "Chromium tabanlı tarayıcı algılanamadı",
    description: "ScriptCat şu anda yalnızca Chromium tabanlı tarayıcıları (Chrome, Edge vb.) destekler. Chromium tabanlı bir tarayıcı kullanıyorsanız bu mesajı yok sayın ve aşağıdaki adımları izleyin.",
  },
}} />

## Kullanıcı Komut Dosyalarına İzin Ver {#allow-user-scripts}

[Kullanıcı Komut Dosyalarına İzin Ver](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#chrome_versions_138_and_newer_allow_user_scripts_toggle), kullanıcı komut dosyalarının tarayıcıda çalışmasına izin veren Manifest V3'ün yeni bir özelliğidir.

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge</div>} default>

① Tarayıcının uzantı yönetimi arayüzünü açın veya [edge://extensions/](edge://extensions/) adresini ziyaret edin

![edge-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge-extensions-page.webp)

② Uzantı yönetimi arayüzünde ScriptCat uzantısını bulun ve `Ayrıntılar`'a tıklayın

![edge-extensions-details](open-dev.assets/edge-extensions-details.png)

③ ScriptCat uzantısı ayrıntı sayfasında `Kullanıcı komut dosyalarına izin ver` seçeneğini bulun ve etkinleştirin. Ardından uzantıyı devre dışı bırakıp yeniden etkinleştirin veya komut dosyası işlevinin etkili olması için tarayıcıyı yeniden başlatın.

> ⚠️⚠️⚠️ Düşük sürüm Edge tarayıcıları (\<=143) veya bu seçeneği olmayan kullanıcılar için lütfen [Geliştirici Modunu Etkinleştir](#enable-developer-mode) bölümüne bakın

![edge-allow-user-scripts](open-dev.assets/edge-allow-user-scripts.png)

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" />Chrome</div>}>

① Tarayıcının uzantı yönetimi arayüzünü açın veya [chrome://extensions/](chrome://extensions/) adresini ziyaret edin

![chrome-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/chrome-extensions-page.webp)

② Uzantı yönetimi arayüzünde ScriptCat uzantısını bulun ve `Ayrıntılar`'a tıklayın

![scriptcat-extension-details](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/scriptcat-extension-details.webp)

③ ScriptCat uzantısı ayrıntı sayfasında `Kullanıcı komut dosyalarına izin ver` seçeneğini bulun ve etkinleştirin. Ardından uzantıyı devre dışı bırakıp yeniden etkinleştirin veya komut dosyası işlevinin etkili olması için tarayıcıyı yeniden başlatın.

![allow-user-scripts-toggle](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/allow-user-scripts-toggle.webp)
</TabItem>
  <TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge Mobile</div>}>

Tarayıcı motoru sürümü ≥ 138 olan Edge Mobile için Geliştirici Modu gerekmez. Bunun yerine uzantı ayarlarında `Kullanıcı komut dosyalarına izin ver` seçeneğini etkinleştirin.

① Edge Mobile uzantı listesini açın, ScriptCat uzantısını bulun ve sağdaki `⋮` düğmesine dokunun

② Uzantı ayarları açılır penceresinde `Kullanıcı komut dosyalarına izin ver` seçeneğini etkinleştirin

③ Uzantıyı devre dışı bırakıp yeniden etkinleştirin veya komut dosyası işlevinin etkili olması için tarayıcıyı yeniden başlatın.

> ⚠️⚠️⚠️ 138'den düşük tarayıcı motoru sürümleri veya bu seçeneği olmayan kullanıcılar için lütfen [Geliştirici Modunu Etkinleştir](#enable-developer-mode) bölümüne bakın

![edge-mobile-allow-user-scripts](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge mobile 138.png)

  </TabItem>
</Tabs>

## Geliştirici Modunu Etkinleştir {#enable-developer-mode}

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge</span></div>} default>

① Tarayıcının uzantı yönetimi arayüzünü açın veya [edge://extensions/](edge://extensions/) adresini ziyaret edin

![edge-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge-extensions-page.webp)

② `Geliştirici modunu` etkinleştirin (Bazı tarayıcılarda bu mod başka seçeneklerde bulunabilir; örn. 360 Tarayıcı: Gelişmiş Yönetim > Geliştirici Modu)

![edge-open-dev](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge-developer-mode-toggle.webp)

③ Geliştirici modunu etkinleştirdikten sonra, uzantıyı devre dışı bırakıp yeniden etkinleştirin veya komut dosyası işlevinin etkili olması için tarayıcıyı yeniden başlatın.

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" /><span>Chrome</span></div>}>

① Tarayıcının uzantı yönetimi arayüzünü açın veya [chrome://extensions/](chrome://extensions/) adresini ziyaret edin

![chrome-open-settings](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/chrome-extensions-page.webp)

② `Geliştirici modunu` etkinleştirin (Bazı tarayıcılarda bu mod başka seçeneklerde bulunabilir; örn. 360 Tarayıcı: Gelişmiş Yönetim > Geliştirici Modu)

![chrome-open-dev](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/chrome-developer-mode-toggle.webp)

③ Geliştirici modunu etkinleştirdikten sonra, uzantıyı devre dışı bırakıp yeniden etkinleştirin veya komut dosyası işlevinin etkili olması için tarayıcıyı yeniden başlatın.

  </TabItem>

<TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge Mobile</span></div>}>

138'den düşük tarayıcı motoru sürümüne sahip veya `Kullanıcı komut dosyalarına izin ver` seçeneği olmayan Edge Mobile için, Geliştirici Modunu etkinleştirmek üzere uzantılar sayfasının üst kısmındaki ayarlar düğmesine dokunun.

![edge-mobile-open-dev](@site/i18n/en/docusaurus-plugin-content-docs/current/use/open-dev.assets/edge mobile.png)
</TabItem>

</Tabs>

:::warning Eski Sürüm Bildirimi

Windows 8/7/XP sistemleri kullanıyorsanız veya tarayıcı motoru sürümünüz 120'den düşükse, [eski ScriptCat'i](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html) manuel olarak kurmanız gerekir. v0.16.x, Manifest V2'yi destekleyen son sürümdür. Kurulum adımları şurada bulunabilir: [Yüklenmemiş uzantı kurulumu](/docs/use/use/#load-unpacked-extension-installation).

:::

<details>
<summary>Teknik Arka Plan: Manifest V3</summary>

Tarayıcı kısıtlamaları nedeniyle uzantılar Manifest V3'e yükseltmeye zorlanır ve Manifest V2 uzantıları Haziran 2025'ten sonra tamamen kullanımdan kaldırılacaktır. Manifest V3'ün sınırlamaları altında, ScriptCat uzantısını normal şekilde kullanmak için geliştirici modunu veya kullanıcı komut dosyası işlevini etkinleştirmeniz gerekir.

Referans: [Uzantı kullanıcıları için geliştirici modu](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#developer_mode_for_extension_users), [Manifest V3](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3?hl=en)

Tarayıcı motoru sürümü ≥ 138 için "Kullanıcı Komut Dosyalarına İzin Ver"i etkinleştirmeniz gerekir. Düşük sürümler için "Geliştirici Modunu Etkinleştir"i kullanın.

</details>
