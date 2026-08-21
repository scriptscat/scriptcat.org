---
title: Bật hỗ trợ Script Người dùng của Trình duyệt
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Icon } from "@iconify/react";
import BrowserGuide from '@site/src/components/BrowserGuide';
import GithubStar from '@site/src/components/GithubStar';

<GithubStar variant="bar" scene="install" />

<BrowserGuide texts={{
  allowUserScripts: {
    title: "Trình duyệt của bạn hỗ trợ 'Cho phép Script Người dùng'",
    description: "Làm theo các bước bên dưới để bật tùy chọn 'Cho phép Script Người dùng' và sử dụng ScriptCat bình thường.",
    button: "Xem các bước",
    anchor: "#allow-user-scripts",
  },
  devMode: {
    title: "Trình duyệt của bạn cần bật 'Chế độ Nhà phát triển'",
    description: "Làm theo các bước bên dưới để bật 'Chế độ Nhà phát triển' và sử dụng ScriptCat bình thường.",
    button: "Xem các bước",
    anchor: "#enable-developer-mode",
  },
  legacy: {
    title: "Phiên bản trình duyệt của bạn quá cũ",
    description: "Trình duyệt của bạn không hỗ trợ Manifest V3. Bạn cần cài đặt thủ công ScriptCat phiên bản cũ (v0.16.x).",
  },
  nonChromium: {
    title: "Không phát hiện trình duyệt dựa trên Chromium",
    description: "ScriptCat hiện chỉ hỗ trợ các trình duyệt dựa trên Chromium (như Chrome, Edge, v.v.).",
  },
}} />

## Cho phép Script Người dùng

[Cho phép Script Người dùng](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#chrome_versions_138_and_newer_allow_user_scripts_toggle) là tính năng mới của Manifest V3.

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge</div>} default>

① Mở giao diện quản lý tiện ích hoặc truy cập [edge://extensions/](edge://extensions/)

② Tìm tiện ích ScriptCat và nhấp `Chi tiết`

③ Tìm tùy chọn `Cho phép script người dùng` và bật nó.

> ⚠️⚠️⚠️ Đối với phiên bản Edge cũ hơn (≤143), tham khảo [Bật Chế độ Nhà phát triển](#enable-developer-mode)

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" />Chrome</div>}>

① Mở giao diện quản lý tiện ích hoặc truy cập [chrome://extensions/](chrome://extensions/)

② Tìm tiện ích ScriptCat và nhấp `Chi tiết`

③ Tìm tùy chọn `Cho phép script người dùng` và bật nó.

</TabItem>
  <TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" />Edge Mobile</div>}>

Đối với Edge Mobile với phiên bản engine trình duyệt ≥ 138, không cần Chế độ Nhà phát triển. Bật `Cho phép script người dùng` trong cài đặt tiện ích.

> ⚠️⚠️⚠️ Đối với phiên bản engine trình duyệt thấp hơn 138, tham khảo [Bật Chế độ Nhà phát triển](#enable-developer-mode)

  </TabItem>
</Tabs>

## Bật Chế độ Nhà phát triển

<Tabs groupId="browser" queryString>
  <TabItem value="edge" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge</span></div>} default>

① Mở giao diện quản lý tiện ích hoặc truy cập [edge://extensions/](edge://extensions/)

② Bật `Chế độ Nhà phát triển`

③ Tắt và bật lại tiện ích, hoặc khởi động lại trình duyệt.

  </TabItem>
  <TabItem value="chrome" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:chrome" /><span>Chrome</span></div>}>

① Mở giao diện quản lý tiện ích hoặc truy cập [chrome://extensions/](chrome://extensions/)

② Bật `Chế độ Nhà phát triển`

③ Tắt và bật lại tiện ích, hoặc khởi động lại trình duyệt.

  </TabItem>

<TabItem value="edge-mobile" label={<div className="flex items-center gap-1"><Icon height={16} width={16} icon="logos:microsoft-edge" /><span>Edge Mobile</span></div>}>

Đối với Edge Mobile với phiên bản engine trình duyệt thấp hơn 138, nhấn nút cài đặt ở đầu trang tiện ích để bật Chế độ Nhà phát triển.

</TabItem>

</Tabs>

:::warning Thông báo Phiên bản Cũ

Nếu bạn dùng Windows 8/7/XP hoặc phiên bản engine trình duyệt thấp hơn 120, bạn cần cài đặt thủ công [ScriptCat phiên bản cũ](https://bbs.tampermonkey.net.cn/thread-3068-1-1.html). v0.16.x là phiên bản cuối cùng hỗ trợ Manifest V2.

:::

<details>
<summary>Bối cảnh Kỹ thuật: Manifest V3</summary>

Do hạn chế của trình duyệt, tiện ích bị buộc phải nâng cấp lên Manifest V3, và tiện ích Manifest V2 sẽ bị ngừng hoàn toàn sau tháng 6 năm 2025. Dưới hạn chế của Manifest V3, bạn phải bật chế độ nhà phát triển hoặc tính năng script người dùng.

Tham khảo: [Chế độ nhà phát triển](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#developer_mode_for_extension_users), [Manifest V3](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3?hl=en)

Đối với phiên bản engine trình duyệt ≥ 138, bạn cần bật "Cho phép Script Người dùng". Đối với phiên bản thấp hơn, sử dụng "Bật Chế độ Nhà phát triển".

</details>
