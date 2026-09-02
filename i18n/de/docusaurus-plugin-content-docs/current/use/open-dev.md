---
title: Browser-Userskript-Unterstützung aktivieren
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Icon } from "@site/src/components/Icon";
import BrowserGuide from '@site/src/components/BrowserGuide';
import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="install" />

<BrowserGuide texts={{
  allowUserScripts: {
    title: "Ihr Browser unterstützt 'Userskripte erlauben'",
    description: "Folgen Sie den Schritten unten, um die Option 'Userskripte erlauben' zu aktivieren und ScriptCat normal zu verwenden.",
    button: "Schritte ansehen",
    anchor: "#allow-user-scripts",
  },
  devMode: {
    title: "Ihr Browser benötigt 'Entwicklermodus'",
    description: "Folgen Sie den Schritten unten, um 'Entwicklermodus' zu aktivieren und ScriptCat normal zu verwenden.",
    button: "Schritte ansehen",
    anchor: "#enable-developer-mode",
  },
  legacy: {
    title: "Ihre Browser-Version ist zu alt",
    description: "Ihr Browser unterstützt kein Manifest V3. Sie müssen das legacy ScriptCat (v0.16.x) manuell installieren.",
  },
  nonChromium: {
    title: "Kein Chromium-basierter Browser erkannt",
    description: "ScriptCat unterstützt derzeit nur Chromium-basierte Browser (wie Chrome, Edge usw.).",
  },
}} />

## Userskripte erlauben

[Userskripte erlauben](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#chrome_versions_138_and_newer_allow_user_scripts_toggle) ist eine neue Funktion von Manifest V3.

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge</div>} default>

① Öffnen Sie die Erweiterungsverwaltung oder besuchen Sie [edge://extensions/](edge://extensions/)

② Finden Sie die ScriptCat-Erweiterung und klicken Sie auf `Details`

③ Finden Sie die Option `Userskripte erlauben` und aktivieren Sie sie.

> ⚠️⚠️⚠️ Für ältere Edge-Browser (≤143) siehe [Entwicklermodus aktivieren](#enable-developer-mode)

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" />Chrome</div>}>

① Öffnen Sie die Erweiterungsverwaltung oder besuchen Sie [chrome://extensions/](chrome://extensions/)

② Finden Sie die ScriptCat-Erweiterung und klicken Sie auf `Details`

③ Finden Sie die Option `Userskripte erlauben` und aktivieren Sie sie.

</TabItem>
  <TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge Mobile</div>}>

Für Edge Mobile mit Browser-Engine-Version ≥ 138 ist kein Entwicklermodus erforderlich. Aktivieren Sie `Userskripte erlauben` in den Erweiterungseinstellungen.

> ⚠️⚠️⚠️ Für Browser-Engine-Versionen unter 138 siehe [Entwicklermodus aktivieren](#enable-developer-mode)

  </TabItem>
</Tabs>

## Entwicklermodus aktivieren {#enable-developer-mode}

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge</span></div>} default>

① Öffnen Sie die Erweiterungsverwaltung oder besuchen Sie [edge://extensions/](edge://extensions/)

② Aktivieren Sie `Entwicklermodus`

③ Deaktivieren und reaktivieren Sie die Erweiterung oder starten Sie den Browser neu.

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" /><span>Chrome</span></div>}>

① Öffnen Sie die Erweiterungsverwaltung oder besuchen Sie [chrome://extensions/](chrome://extensions/)

② Aktivieren Sie `Entwicklermodus`

③ Deaktivieren und reaktivieren Sie die Erweiterung oder starten Sie den Browser neu.

  </TabItem>

<TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge Mobile</span></div>}>

Für Edge Mobile mit Browser-Engine-Versionen unter 138: Tippen Sie auf die Schaltfläche oben auf der Erweiterungsseite, um den Entwicklermodus zu aktivieren.

</TabItem>

</Tabs>

:::warning Hinweis zur Legacy-Version

Wenn Sie Windows 8/7/XP verwenden oder Ihre Browser-Engine-Version unter 120 liegt, müssen Sie das [legacy ScriptCat](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html) manuell installieren. v0.16.x ist die letzte Version, die Manifest V2 unterstützt.

:::

<details>
<summary>Technischer Hintergrund: Manifest V3</summary>

Aufgrund von Browser-Einschränkungen müssen Erweiterungen auf Manifest V3 aktualisiert werden, und Manifest V2-Erweiterungen werden nach Juni 2025 vollständig eingestellt. Unter den Einschränkungen von Manifest V3 müssen Sie den Entwicklermodus oder die Userskript-Funktion aktivieren, um die ScriptCat-Erweiterung normal zu verwenden.

Referenz: [Entwicklermodus](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#developer_mode_for_extension_users), [Manifest V3](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3?hl=en)

Für Browser-Engine-Versionen ≥ 138 müssen Sie „Userskripte erlauben" aktivieren. Für ältere Versionen verwenden Sie „Entwicklermodus aktivieren".

</details>
