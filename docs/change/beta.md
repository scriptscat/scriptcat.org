---
id: beta-changelog
sidebar_position: 1
---

# Beta 更新日志

脚本猫的版本发布主要分为两条分支: 正式版本与预发布版本，正式版本更新日志请看：[更新日志](./README.md)

预发布版本是在正式发布之前的版本.它们通常用于测试新功能,预发布版本的版本号包含一个预发布标识符,例如:
`1.0.0-beta.1`.

你可以从[Release](https://github.com/scriptscat/scriptcat/releases)页或者下面的扩展商店页中获取预发布版本

- [Chrome](https://chromewebstore.google.com/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/jaehimmlecjmebpekkipmpmbpfhdacom?authuser=0&hl=zh-CN)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/%E8%84%9A%E6%9C%AC%E7%8C%AB-beta/nimmbghgpcjmeniofmpdfkofcedcjpfi)
- [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat-pre/)

另外除了预发布以外,脚本猫每次代码提交合并到主分支后都会在[Github Action](https://github.com/scriptscat/scriptcat/actions/workflows/build.yaml)上打包构建一次扩展,如果你想体验最新或者修复的内容可以前往[Github Action](https://github.com/scriptscat/scriptcat/actions/workflows/build.yaml)页进行下载.

<a name="1.3.0-beta"></a>

## 1.3.0-beta (2025-12-13)

### Added

- ✨ 新的脚本安装逻辑 ([#842](https://github.com/scriptscat/scriptcat/issues/842)) ([80d342e](https://github.com/scriptscat/scriptcat/commit/80d342e80c9c1b36f88b7dcd4c65c663bb1d9185))
- ✨ monaco editor hints 多国语言化 及 增加 &#x60;@require-css&#x60; 提示 ([#960](https://github.com/scriptscat/scriptcat/issues/960)) [[51a6f94](https://github.com/scriptscat/scriptcat/commit/51a6f94be3a430691f73057eae61a3814560a5b3)] (by @cyfung1031)
- ✨ &#x60;@grant&#x60; 冲突校验 修正，增加 meta 重复声明 错误提示 ([#902](https://github.com/scriptscat/scriptcat/issues/902)) [[8fbd0f1](https://github.com/scriptscat/scriptcat/commit/8fbd0f1041f5c5dcdb5a515348a5f54934acfdc7)] (by @cyfung1031)
- ✨ 范本预设&#x60;@noframes&#x60; 避免新手踩坑 ([#900](https://github.com/scriptscat/scriptcat/issues/900)) [[c9d5840](https://github.com/scriptscat/scriptcat/commit/c9d584066ff2395112b9a930aaa409cda764a5e6)] (by @cyfung1031)
- ✨ 防止脚本安装链结因脚本名字改了而被误判为安装而非更新 ([#824](https://github.com/scriptscat/scriptcat/issues/824)) [[5c7a5dd](https://github.com/scriptscat/scriptcat/commit/5c7a5ddc81e3bd1dd0a71cc80460a5239178c1de)] (by @cyfung1031)
- ✨ 脚本运行时期选项 ([#895](https://github.com/scriptscat/scriptcat/issues/895)) [[b0ea187](https://github.com/scriptscat/scriptcat/commit/b0ea187c2e6d69b60c981aa9b4d068fed7c2c2a2)] (by @CodFrm)
- ✨ 关闭脚本功能后展示灰色图标 [#897](https://github.com/scriptscat/scriptcat/issues/897) ([3e406dc](https://github.com/scriptscat/scriptcat/commit/3e406dc4562adf7d7f3b79b52623b87e87ef1ad3))
- ✨ 优化菜单展开项为 0 时的交互逻辑 [#868](https://github.com/scriptscat/scriptcat/issues/868) ([da24ac2](https://github.com/scriptscat/scriptcat/commit/da24ac234f0eeae0159dce6c2b346d06fb72eaa5))

### Changed

- 🎨 修正 Typography 引用 ([#984](https://github.com/scriptscat/scriptcat/issues/984)) [[a70400c](https://github.com/scriptscat/scriptcat/commit/a70400cdca8a5b64cffaca85017513d4e5e7171c)] (by @cyfung1031)
- ♻️ 兼容 FF: GM_setClipboard ([#928](https://github.com/scriptscat/scriptcat/issues/928)) [[d1a5cb1](https://github.com/scriptscat/scriptcat/commit/d1a5cb19dc4e05fac838258d15c48cc6f876d416)] (by @cyfung1031)
- ♻️ userScripts / scripting API 调整，增强兼容性 ( 重做 [#704](https://github.com/scriptscat/scriptcat/issues/704) ) ([#925](https://github.com/scriptscat/scriptcat/issues/925)) [[43bc40f](https://github.com/scriptscat/scriptcat/commit/43bc40ff5da5ef36a13564504293f1928138cf12)] (by @cyfung1031)
- ♻️ 重构优化脚本图标加载 ([#893](https://github.com/scriptscat/scriptcat/issues/893)) ([ab36c86](https://github.com/scriptscat/scriptcat/commit/ab36c86b5d031b88e71fbf9151696a42acba86fa))
- ⚡ parseMetadata 代码优化 ([#903](https://github.com/scriptscat/scriptcat/issues/903)) [[0efc648](https://github.com/scriptscat/scriptcat/commit/0efc648257f74591765869dedee5d98f8a1dc610)] (by @cyfung1031)
- 🎨 扩展图标显示数字默认修改为脚本数量 [#989](https://github.com/scriptscat/scriptcat/issues/989) [[70f67b6](https://github.com/scriptscat/scriptcat/commit/70f67b6bd8cf803d7a18bf26fdccdfa6f8a92893)] (by @CodFrm)
- 🐛 导入 &amp; 导出 - 修正不依照脚本最后修改日期时间问题 ([#951](https://github.com/scriptscat/scriptcat/issues/951)) ([6e7272f](https://github.com/scriptscat/scriptcat/commit/6e7272f52ef2d49d9fceb3e30babfee1cbd72e75))
- 🎨 sourceURL 调整，方便 debug ([#987](https://github.com/scriptscat/scriptcat/issues/987)) [[ed741e7](https://github.com/scriptscat/scriptcat/commit/ed741e7d0188fa5e95eae87bcd3a28e82ee008e1)] (by @cyfung1031)
- ⬆️ package 版本更新 ([#922](https://github.com/scriptscat/scriptcat/issues/922)) [[9b1df8d](https://github.com/scriptscat/scriptcat/commit/9b1df8dda794e5e95ecc12cef37ed66712ae561e)] (by @cyfung1031)
- ⚡ Values 相关共通调整 ([#949](https://github.com/scriptscat/scriptcat/issues/949)) [[b258fb2](https://github.com/scriptscat/scriptcat/commit/b258fb2c73d790f7f277a9a31d07e2931a7d680d)] (by @cyfung1031)
- ⚡ URL.createObjectURL 共通化、兼容 FF ([#929](https://github.com/scriptscat/scriptcat/issues/929)) [[54ad4de](https://github.com/scriptscat/scriptcat/commit/54ad4de48b81170b90283fb6ce3b4d6e7c908cdf)] (by @cyfung1031)
- ⚡ 把 icon 根据 url 而储存，避免多个脚本储存同一 icon 造成浪费 ([#909](https://github.com/scriptscat/scriptcat/issues/909)) [[c6e8efb](https://github.com/scriptscat/scriptcat/commit/c6e8efbe8d11719034a9aaa3fd871519025671ff)] (by @cyfung1031)
- ♻️ 调整 updateIcon 代码 ([#908](https://github.com/scriptscat/scriptcat/issues/908)) [[642e3b9](https://github.com/scriptscat/scriptcat/commit/642e3b9e57f01f2b008990cc7cb1461f5dccd256)] (by @cyfung1031)

### Fixed

- 🐛 选择不定期检查脚本更新时，清除现有 Alarm ([#996](https://github.com/scriptscat/scriptcat/issues/996)) [[8bb9a2d](https://github.com/scriptscat/scriptcat/commit/8bb9a2d5741acb7d547e743c7bef8a2139f1401a)] (by @cyfung1031)
- 🐛 移除备份页面顶部多余空白 ([#995](https://github.com/scriptscat/scriptcat/issues/995)) ([9c149ce](https://github.com/scriptscat/scriptcat/commit/9c149ce5999b7a70375a41c6604c8e8dbd19e9df))
- ✨ 不依赖外部网站访问进行安装 ＋ 安装页版面调整 ([#842](https://github.com/scriptscat/scriptcat/issues/842)) ([80d342e](https://github.com/scriptscat/scriptcat/commit/80d342e80c9c1b36f88b7dcd4c65c663bb1d9185))
- 🐛 UnoCSS 加 prefix 解决 CSS 冲突、CSS 布局修正 ([#1013](https://github.com/scriptscat/scriptcat/issues/1013)) [[723e64c](https://github.com/scriptscat/scriptcat/commit/723e64cc0c23763dfed322e907c0a960c4f9060e)] (by @cyfung1031)
- 🐛 优化 systemconfig 和修复 SW 中的 i18n 问题 ([#976](https://github.com/scriptscat/scriptcat/issues/976)) [[c50fcf7](https://github.com/scriptscat/scriptcat/commit/c50fcf7770df633462c2f25f8cf22d302002ec57)] (by @CodFrm)
- 🐛 修复类型错误 ([#975](https://github.com/scriptscat/scriptcat/issues/975)) [[7d85856](https://github.com/scriptscat/scriptcat/commit/7d8585687c71cde1c2793d742abb7c22d9d358f0)] (by @cyfung1031)

<a name="1.2.0-beta.5"></a>

## 1.2.0-beta.5 (2025-11-17)

### Added

- ✨ 在 popup 显示脚本数量 ([#973](https://github.com/scriptscat/scriptcat/issues/973)) [[1134586](https://github.com/scriptscat/scriptcat/commit/1134586ff040ffc0cdddd3538e9ec493950c948a)] (by @cyfung1031)

### Changed

- ⚡ 处理 `check_script_update_cycle` ([#906](https://github.com/scriptscat/scriptcat/issues/906)) [[760562f](https://github.com/scriptscat/scriptcat/commit/760562f92ad64bc538873b2ca61dfafe067c3f6e)] (by @cyfung1031)
- ♻️ 整理 inject & content，修改 pageLoad 资讯量传递 ([#952](https://github.com/scriptscat/scriptcat/issues/952)) [[0554159](https://github.com/scriptscat/scriptcat/commit/0554159c105606192d48e1153194e09314d43bc9)] (by @cyfung1031)
- 🎨 简化 messageFlag，按照事件名称命名标准修订 ([#926](https://github.com/scriptscat/scriptcat/issues/926)) [[d725d85](https://github.com/scriptscat/scriptcat/commit/d725d85a2f4917c08f6d3daa035a45fd15d12451)] (by @cyfung1031)
- ♻️ 重构 `GM_xmlhttpRequest` 及相关代码 ([#901](https://github.com/scriptscat/scriptcat/issues/901)) [[fabd2e9](https://github.com/scriptscat/scriptcat/commit/fabd2e944235b460bc73df346b79d23ee4540af7)] (by @cyfung1031)
- ⚡ toCamelCase 微优化 ([#930](https://github.com/scriptscat/scriptcat/issues/930)) [[88d8bdf](https://github.com/scriptscat/scriptcat/commit/88d8bdfc726f1a4ed63bd3cf81ebad88426273e8)] (by @cyfung1031)

### Fixed

- 🐛 修正被破坏的沙盒 Fix Corrupted Sandbox ([#966](https://github.com/scriptscat/scriptcat/issues/966)) [[dd80386](https://github.com/scriptscat/scriptcat/commit/dd8038666481d1319dd0f8ab80f79f1b13c1730d)] (by @cyfung1031)
- 🐛 修正 setInvalidContext 里 `valueChangeListener.clear` 未定义 ([#970](https://github.com/scriptscat/scriptcat/issues/970)) [[2a399e9](https://github.com/scriptscat/scriptcat/commit/2a399e96a1e848f2f569566479b48dcee280f543)] (by @cyfung1031)
- 🐛 调整 `@connect` 逻辑 ([#969](https://github.com/scriptscat/scriptcat/issues/969)) [[67914d2](https://github.com/scriptscat/scriptcat/commit/67914d2b7d57fa9c69706ae57ee5d3400c2643f9)] (by @cyfung1031)
- 🐛 修复 service worker 的 i18n 处理 [#956](https://github.com/scriptscat/scriptcat/issues/956) [[843e618](https://github.com/scriptscat/scriptcat/commit/843e618daf13ec659cc16759c5de13dacf23c534)] (by @CodFrm)
- 🐛 修正 deleteValue/deleteValues 无法执行问题 ([#943](https://github.com/scriptscat/scriptcat/issues/943)) [[3d92bfb](https://github.com/scriptscat/scriptcat/commit/3d92bfb4a0334ffd2c279a1e6d33e98eed0a1a81)] (by @cyfung1031)
- 🐛 修复 无法通过 GitHub 链接安装脚本 ([#877](https://github.com/scriptscat/scriptcat/issues/877)) [[b9268e7](https://github.com/scriptscat/scriptcat/commit/b9268e7207081fcaa4591c9e1385f98446ade04a)] (by @cyfung1031)
- 🐛 修正 `@connect *` 没有生效 ([#967](https://github.com/scriptscat/scriptcat/issues/967)) [[6bcb93c](https://github.com/scriptscat/scriptcat/commit/6bcb93c20c9690a2ce4f50d0978948e20ba407b8)] (by @cyfung1031)

### Miscellaneous

- 🌐 翻译更新 ([#920](https://github.com/scriptscat/scriptcat/issues/920)) [[ede013b](https://github.com/scriptscat/scriptcat/commit/ede013b8e725ddefa626e3e432cbaee756535259)] (by @cyfung1031)

<a name="1.2.0-beta.4"></a>

## 1.2.0-beta.4 (2025-11-07)

### Added

- ✨ 卡片模式引导 ([#894](https://github.com/scriptscat/scriptcat/issues/894)) [[0627a0f](https://github.com/scriptscat/scriptcat/commit/0627a0faacf3a41645e985ec6f6960568427d5a4)] (by @CodFrm)

### Changed

- ♻️ 重构 EarlyStart 实现 ([#882](https://github.com/scriptscat/scriptcat/issues/882)) [[cca11e0](https://github.com/scriptscat/scriptcat/commit/cca11e02b98de285423b04ec0d95eab995cee378)] (by @CodFrm)
- 💄 微调卡片视图布局 ([#872](https://github.com/scriptscat/scriptcat/issues/872)) [[5aa21b8](https://github.com/scriptscat/scriptcat/commit/5aa21b88bf423d5d03f7df70b654249bac4b7a88)] (by @Coxxs)

### Fixed

- 🐛 修复两个`@require` 没分号导致的错误 [#917](https://github.com/scriptscat/scriptcat/issues/917) ([#921](https://github.com/scriptscat/scriptcat/issues/921)) [[2769a24](https://github.com/scriptscat/scriptcat/commit/2769a24e129da79926816886fe42bbc4d9a97875)] (by @cyfung1031)
- 🐛 修复 Check Update 页面异常问题 ([#912](https://github.com/scriptscat/scriptcat/issues/912)) [[12272e1](https://github.com/scriptscat/scriptcat/commit/12272e1ad4787cc6768f2f157d272faff5782f37)] (by @cyfung1031)
- 🐛 修复后台脚本中无法使用 GM_openInTab 的问题 [#873](https://github.com/scriptscat/scriptcat/issues/873) [[a526664](https://github.com/scriptscat/scriptcat/commit/a52666429710e150d81cac33af5511401b697355)] (by @CodFrm)
- 🐛 修复表格列表 loading 状态问题 [#874](https://github.com/scriptscat/scriptcat/issues/874) [[0b53cb0](https://github.com/scriptscat/scriptcat/commit/0b53cb07cf1ca1d3e42b15fd9c104c83031502d5)] (by @CodFrm)
- 🐛 修复 &#x60;@early-start&#x60; 移除后脚本注入失败的问题 ([#871](https://github.com/scriptscat/scriptcat/issues/871)) [[426e878](https://github.com/scriptscat/scriptcat/commit/426e8788d9b934ee96cf5ec22b432a08681a9e8c)] (by @cyfung1031)

<a name="1.2.0-beta.3"></a>

## 1.2.0-beta.3 (2025-10-23)

### Added

- ✨ 卡片视图 ([#860](https://github.com/scriptscat/scriptcat/issues/860)) [[c9f2350](https://github.com/scriptscat/scriptcat/commit/c9f23509648a41b06f82e79da2bc1fc05a783e06)] (by @CodFrm)

### Changed

- ♻️ null 代码调整 ([#852](https://github.com/scriptscat/scriptcat/issues/852)) [[fa1031d](https://github.com/scriptscat/scriptcat/commit/fa1031df9c3e8bc2550f429e7cf8d1c3869a1ea3)] (by @cyfung1031)
- ♻️ GMApiRequest 代码调整，GM_log 代码修正，@connect 判断修正 ([#849](https://github.com/scriptscat/scriptcat/issues/849)) [[ee4a8b2](https://github.com/scriptscat/scriptcat/commit/ee4a8b28715fb48fa627f5231c8dc30e55c006ed)] (by @cyfung1031)

### Removed

- 🔥 弃掉 `GM_openInTab({ useOpen: true })` ([#867](https://github.com/scriptscat/scriptcat/issues/867)) [[aa61335](https://github.com/scriptscat/scriptcat/commit/aa613354c7b7c84d461000ed0362cf9916c8aa39)] (by @cyfung1031)

### Fixed

- 🐛 checkUserScriptsAvailable 兼容 Vivaldi ([#859](https://github.com/scriptscat/scriptcat/issues/859)) [[014d62d](https://github.com/scriptscat/scriptcat/commit/014d62de6b731bfda82babf5db5aa5ae909908f1)] (by @cyfung1031)
- 🚑 紧急修正: GM.delete/setValue Promise 不 fulfill ([#865](https://github.com/scriptscat/scriptcat/issues/865)) [[43572a3](https://github.com/scriptscat/scriptcat/commit/43572a3110b8b083f840b472a231400223da7751)] (by @cyfung1031)
- 🐛 修复 GM xhr fetch 问题 [#847](https://github.com/scriptscat/scriptcat/issues/847) [[c6e95c2](https://github.com/scriptscat/scriptcat/commit/c6e95c210748d091ff9f610f3801eaa055d9d6de)]

### Miscellaneous

- 📝 monaco-editor 加 &#x60;@compatible&#x60; 注釋 ([#853](https://github.com/scriptscat/scriptcat/issues/853)) [[752b951](https://github.com/scriptscat/scriptcat/commit/752b95122ab324df358e45ec468194cc8466f8bb)] (by @cyfung1031)
- 🌐 添加 subscribe_source_tooltip 翻译 [#850](https://github.com/scriptscat/scriptcat/issues/850) [[8d675bd](https://github.com/scriptscat/scriptcat/commit/8d675bd5398d403dfc8e7ee2016fbaffd821da64)]

<a name="1.2.0-beta.2"></a>

## 1.2.0-beta.2 (2025-10-15)

优化了脚本更新逻辑，新增了脚本列表侧边栏，增强了 GM_registerMenuCommand 和 GM_openInTab 的功能，修复了很多 bug

### Added

- ✨ 统合更新提醒机制 ([#755](https://github.com/scriptscat/scriptcat/issues/755)) ([741b0bd](https://github.com/scriptscat/scriptcat/commit/741b0bd2ec2f75a7e84c62fbe02654ce6bc41543))
- ✨ GM_registerMenuCommand 二级菜单 &amp; 分隔线 ([#831](https://github.com/scriptscat/scriptcat/issues/831)) [[bd08959](https://github.com/scriptscat/scriptcat/commit/bd089595c922aa63af0fb6d41fa9f6dc2587e096)] (by @cyfung1031)
- ✨ 增加 GM_openInTab 的参数 ([#788](https://github.com/scriptscat/scriptcat/issues/788)) [[eb33d61](https://github.com/scriptscat/scriptcat/commit/eb33d613473815b12017e34f46ed9eb292a9dcba)] (by @cyfung1031)
- ✨ 增加 SC 版本检查按钮 ([#795](https://github.com/scriptscat/scriptcat/issues/795)) [[1680c66](https://github.com/scriptscat/scriptcat/commit/1680c66099120c0e497c1a1f5321f38fe0160ea0)] (by @cyfung1031)
- ✨ 新增脚本列表侧边栏筛选与标签功能 ([#794](https://github.com/scriptscat/scriptcat/issues/794)) [[6aabf59](https://github.com/scriptscat/scriptcat/commit/6aabf594cd62fa7358ba34c1c69060dc9e24919c)]
- ✨ 使用 window.showOpenFilePicker 打开文件实现可以监听本地文件 [#749](https://github.com/scriptscat/scriptcat/issues/749) [[7dcfbf1](https://github.com/scriptscat/scriptcat/commit/7dcfbf1309fff28c3d806d4ccb36bd0ef51050f5)]

### Changed

- ♻️ 分离 indexeddb 和 chrome.storage 迁移逻辑 ([#844](https://github.com/scriptscat/scriptcat/issues/844)) [[b8389fb](https://github.com/scriptscat/scriptcat/commit/b8389fbc21932dbbe9394b576fbd8605a3b820c8)]
- ♻️ registerMenuCommand &amp; unregisterMenuCommand 修正 ([#826](https://github.com/scriptscat/scriptcat/issues/826)) [[3ecde9e](https://github.com/scriptscat/scriptcat/commit/3ecde9e0125089744c2d81f759b043deb5440be6)] (by @cyfung1031)
- ⚡ 优化 Runtime 启动载入 ([#775](https://github.com/scriptscat/scriptcat/issues/775)) [[3e69401](https://github.com/scriptscat/scriptcat/commit/3e69401feb98bd789a85dbda7d9e690f71bae696)] (by @cyfung1031)

### Fixed

- 🐛 重新修订 &#x60;GM_registerMenuCommand&#x60; 相关代码设计 ([#790](https://github.com/scriptscat/scriptcat/issues/790)) ([a71cfe4](https://github.com/scriptscat/scriptcat/commit/a71cfe496fcb2457109dd97742a795585860a6d7))
- 🐛 处理 popup 数据清理 [#784](https://github.com/scriptscat/scriptcat/issues/784) [[7bd9b16](https://github.com/scriptscat/scriptcat/commit/7bd9b162b178a534a8be31aca210af2106f110b7)]
- 🐛 修复 CAT_fileStorage download 问题 [#829](https://github.com/scriptscat/scriptcat/issues/829) [[81d4e49](https://github.com/scriptscat/scriptcat/commit/81d4e496df8abd3715348fe979758a63311b54c3)]
- 🐛 修复 userconfig group 顺序问题 [#818](https://github.com/scriptscat/scriptcat/issues/818) [[74881c0](https://github.com/scriptscat/scriptcat/commit/74881c0a05d599ad13300c3c69b33b01a5a7b552)]
- 🐛 修复安装来源数据兼容性与处理问题 [[574b3c6](https://github.com/scriptscat/scriptcat/commit/574b3c6506a21e1b8ebd891fd91fcd8b19774b96)]
- 🐛 修复弹出页面中后台脚本状态同步问题 [#838](https://github.com/scriptscat/scriptcat/issues/838) ([edd13c6](https://github.com/scriptscat/scriptcat/commit/edd13c65c9643dece7c38665f58146c9e59c802c))
- 🐛 修复右键菜单与脚本菜单不一致的问题 [#768](https://github.com/scriptscat/scriptcat/issues/768) ([191ffcd](https://github.com/scriptscat/scriptcat/commit/191ffcd1e55d842acabbc44fdf1f1098f0b0093d))
- 🐛 修复手动导入本地文件错误的问题 [#745](https://github.com/scriptscat/scriptcat/issues/745) ([fe14991](https://github.com/scriptscat/scriptcat/commit/fe149914e6eef99761ca44681abd95919613adb3))
- 🐛 修复手动导入本地文件错误的问题 [#745](https://github.com/scriptscat/scriptcat/issues/745) ([52950a2](https://github.com/scriptscat/scriptcat/commit/52950a2ad04c79aecaa530a6eb615e9c54bba884))
- 🐛 支持本地\*.user.js 识别 [#812](https://github.com/scriptscat/scriptcat/issues/812) [[cec8ffc](https://github.com/scriptscat/scriptcat/commit/cec8ffc5f6947a54b7a59365928a1ccf47b336a2)]
- 🐛 修复早期启动脚本无法使用 GM_addElement 的问题 [#801](https://github.com/scriptscat/scriptcat/issues/801) [[4d17645](https://github.com/scriptscat/scriptcat/commit/4d17645c0659d8ecd283473cbdd88b6eda065758)]
- 🐛 修复 early 脚本 GM_info.scriptMetaStr 问题 [#801](https://github.com/scriptscat/scriptcat/issues/801) [[a9a4333](https://github.com/scriptscat/scriptcat/commit/a9a433393ceb259aecc4fe9c1d32a0c9a8333160)]
- 🐛 metadata block 文档及小量代码修正 ([#832](https://github.com/scriptscat/scriptcat/issues/832)) [[c40822b](https://github.com/scriptscat/scriptcat/commit/c40822b293f1283d420797a0cbe549153541f3c8)] (by @cyfung1031)
- 🐛 避免 menuCommand 更新在 Tab 移除后触发 ([#828](https://github.com/scriptscat/scriptcat/issues/828)) [[c64f6d9](https://github.com/scriptscat/scriptcat/commit/c64f6d9a4e087f7788f5b160b91c2b808161e58e)] (by @cyfung1031)
- 🐛 修复 Modali18n 问题 ([#825](https://github.com/scriptscat/scriptcat/issues/825)) [[03da1ba](https://github.com/scriptscat/scriptcat/commit/03da1ba07c0fd212627bf3c18dbb3afa6affed78)] (by @cyfung1031)
- 🐛 修复 Modal.confirm i18n 问题 [#821](https://github.com/scriptscat/scriptcat/issues/821) [[b3c30f5](https://github.com/scriptscat/scriptcat/commit/b3c30f55db8b37ccbfa7278b83af21159c72f2cb)]
- ✏️ 参数类型中的&quot;minetype&quot;应该是&quot;mimetype&quot; ([#823](https://github.com/scriptscat/scriptcat/issues/823)) [[fb3d132](https://github.com/scriptscat/scriptcat/commit/fb3d132ece659cb18082e383dfb925a5cc242c4c)] (by @cyfung1031)
- 🐛 无效 Extension Context 错误发生时，中止操作&amp;释放资源 ([#800](https://github.com/scriptscat/scriptcat/issues/800)) [[c110e74](https://github.com/scriptscat/scriptcat/commit/c110e746336e63fc1266bb4cacc056e126d919e0)] (by @cyfung1031)
- 🐛 修正 batchUpdate 页弹出时再取一次更新的问题 + 安裝後沒更新的问题 ([#803](https://github.com/scriptscat/scriptcat/issues/803)) [[73f1f32](https://github.com/scriptscat/scriptcat/commit/73f1f329388c07588f2a532b71e5318bf3a92392)] (by @cyfung1031)
- 🐛 调整默认的 jsconfig [#813](https://github.com/scriptscat/scriptcat/issues/813) [[06f0e1c](https://github.com/scriptscat/scriptcat/commit/06f0e1c7f0974b954d7ab546ce86f22f830dc28f)]
- 🐛 ui render issue ([#806](https://github.com/scriptscat/scriptcat/issues/806)) [[5c75c8b](https://github.com/scriptscat/scriptcat/commit/5c75c8b8e8fc92fcd830db094b34a7ad16fb4c9f)] (by @cyfung1031)
- 🐛 屏蔽 ambiguous unicode 提示 [#747](https://github.com/scriptscat/scriptcat/issues/747) [[5e7c077](https://github.com/scriptscat/scriptcat/commit/5e7c077ef250e1b8eef5662bc416b82d62927b52)]
- 🐛 语言切换后 ScriptList 列表栏名与内容未更新 ([#792](https://github.com/scriptscat/scriptcat/issues/792)) [[3ad58b8](https://github.com/scriptscat/scriptcat/commit/3ad58b82bf1d4955cddd3e50b570c601f7e90143)] (by @cyfung1031)
- 🐛 修正 chrome.tabs.query ([#786](https://github.com/scriptscat/scriptcat/issues/786)) [[de607fd](https://github.com/scriptscat/scriptcat/commit/de607fd8eca841748a3e422fe5e84f84f84619d5)] (by @cyfung1031)
- 🐛 【UI 修正】解决 useCallback 问题 ([#769](https://github.com/scriptscat/scriptcat/issues/769)) [[511de96](https://github.com/scriptscat/scriptcat/commit/511de96d2b271142244f9874f87bb23ec75f626a)] (by @cyfung1031)
- 🐛 添加 background 权限解决无法在后台运行的问题 [#762](https://github.com/scriptscat/scriptcat/issues/762) [[4205837](https://github.com/scriptscat/scriptcat/commit/42058379ab6d0e29003cc1f63d5df48dbe601f4e)]
- 🐛 修复 GM_download 无法下载 filename 为非法字符的文件 ([#758](https://github.com/scriptscat/scriptcat/issues/758)) [[2518722](https://github.com/scriptscat/scriptcat/commit/2518722c8bc14b9f52e8720624dd835b1fbdfb1b)] (by @WhiteSevs)
- 🐛 修复沙盒 toString 问题 [#737](https://github.com/scriptscat/scriptcat/issues/737) [[6ca24c9](https://github.com/scriptscat/scriptcat/commit/6ca24c9b171792035803ac4e1c69e473629f9d18)]
- 🐛 修复徽章显示 0 的问题 [[026c1d2](https://github.com/scriptscat/scriptcat/commit/026c1d2071dd4cfb6291f005d36717bcdf0a51c3)]
- 🐛 修复脚本注入 CSP 问题 [#739](https://github.com/scriptscat/scriptcat/issues/739) [#728](https://github.com/scriptscat/scriptcat/issues/728) [[5da21b5](https://github.com/scriptscat/scriptcat/commit/5da21b5e3d0e7e86a1fd5dff57ba03ea641c19fa)]

### Miscellaneous

- 📝 ts 注释修正 ([#839](https://github.com/scriptscat/scriptcat/issues/839)) [[6b575ca](https://github.com/scriptscat/scriptcat/commit/6b575cac4841bdf86de70e4b0e702e342a00ca76)] (by @cyfung1031)
- 🌐 处理一些通知、错误的翻译问题，并新增 `@grant` 冲突校验 ([#819](https://github.com/scriptscat/scriptcat/issues/819)) [[ef3482d](https://github.com/scriptscat/scriptcat/commit/ef3482d2c6406927a72835067f66a28cdb0f3b79)] (by @cyfung1031)
- 🌐 &quot;无消息内容&quot; i18n 处理 ([#811](https://github.com/scriptscat/scriptcat/issues/811)) [[f9486d6](https://github.com/scriptscat/scriptcat/commit/f9486d6e53d68c085625ac370dc717daf8af232e)] (by @cyfung1031)
- 🌐 UI 修改来源格显示 ([#783](https://github.com/scriptscat/scriptcat/issues/783)) [[9242b95](https://github.com/scriptscat/scriptcat/commit/9242b957cf5f90f6d186a0b1f07bfce8d6ed1cd7)] (by @cyfung1031)
- 🌐 updatepage translation ([#777](https://github.com/scriptscat/scriptcat/issues/777)) [[757c954](https://github.com/scriptscat/scriptcat/commit/757c954768be8fc94e05200822a23efef5e6bc01)] (by @cyfung1031)
- 🌐 Update translation.json ([#746](https://github.com/scriptscat/scriptcat/issues/746)) [[85b48e2](https://github.com/scriptscat/scriptcat/commit/85b48e2982e0c81f82622528a3aa600c3c88ce8d)] (by @cyfung1031)

<a name="1.2.0-beta.1"></a>

## 1.2.0-beta.1 (2025-09-18)

### Added

- ✨ 增加布局菜单隐藏侧边栏 [#689](https://github.com/scriptscat/scriptcat/issues/689) [[dd64da7](https://github.com/scriptscat/scriptcat/commit/dd64da719c081acbf21645e2b1e1f38653ffae8c)]
- ✨ 实现 inject into ([#711](https://github.com/scriptscat/scriptcat/issues/711)) [[4c708c2](https://github.com/scriptscat/scriptcat/commit/4c708c2c5a0f7cea6daa2f32f51e182a4f83c50c)]
- ✨ : add a shortcut to activate the toolbar button for Firefox mv3 ([#718](https://github.com/scriptscat/scriptcat/issues/718)) [[06a9040](https://github.com/scriptscat/scriptcat/commit/06a904046034aad59564ea07d8ec441f4def5278)] (by @xymoryn)

### Changed

- ⚡ 优化弹出页面重新渲染导致点击后台脚本运行按钮后折叠的问题 [[d83ad0d](https://github.com/scriptscat/scriptcat/commit/d83ad0dda600db59adf70f9db2304381db7ab80f)]
- ⚡ 优化脚本列表，减少 re-render [[610fba0](https://github.com/scriptscat/scriptcat/commit/610fba08bbac5c01791aac756eed60a75bc1d483)]
- ♻️ 增强后台脚本任务检查，减少错误 [#714](https://github.com/scriptscat/scriptcat/issues/714) [[3850af2](https://github.com/scriptscat/scriptcat/commit/3850af22abefced1f2ec6c773c92599a18bb0f8a)]
- 🐛 修复弹出页面中后台脚本不展开的问题 ([66ab70f](https://github.com/scriptscat/scriptcat/commit/66ab70fb10c28aaf0c9260a9591aab7e1ae35615))
- ✨ 弹出页在排除网站后不自动关闭 [#725](https://github.com/scriptscat/scriptcat/issues/725) ([e432210](https://github.com/scriptscat/scriptcat/commit/e43221051d52d7394a579442519e99d258df872a))
- ♻️ 优化 ReduxStore 与广播机制 ([#729](https://github.com/scriptscat/scriptcat/issues/729)) [[b62781e](https://github.com/scriptscat/scriptcat/commit/b62781e11f0f4771094e42cb3479a70b8134cdf6)] (by @cyfung1031)
- ⚡ React.forwardRef 代码优化 ([#734](https://github.com/scriptscat/scriptcat/issues/734)) [[a7faa48](https://github.com/scriptscat/scriptcat/commit/a7faa48f9a4615318104fa5d501184a4faec73cd)] (by @cyfung1031)
- ♻️ 重构优化 systemConfig [[3acd3f3](https://github.com/scriptscat/scriptcat/commit/3acd3f3890031a7e90bd57eb63320007164ed4ff)]

### Fixed

- 🐛 修复状态更新错误的问题 [[94fd65b](https://github.com/scriptscat/scriptcat/commit/94fd65bfb765a9511e0efb2dc6fb2bfd216e570f)]
- ✏️ 修复拼写错误 ([#738](https://github.com/scriptscat/scriptcat/issues/738)) ([4e55c06](https://github.com/scriptscat/scriptcat/commit/4e55c06212336bd3356e6d1ead3b75cf97f3b9d8))
- 🐛 修复徽章显示 0 的问题 ([6edad14](https://github.com/scriptscat/scriptcat/commit/6edad1491820665fad8cd6ee5c85e93c57aa0d42))
- 🐛 增强消息类型判断 [#676](https://github.com/scriptscat/scriptcat/issues/676) ([5073795](https://github.com/scriptscat/scriptcat/commit/50737957507ff9af3aa9ba9a6b7d444b643d1ff2))
- 🐛 修复沙盒 toString 问题 [#737](https://github.com/scriptscat/scriptcat/issues/737) [[a4cefbc](https://github.com/scriptscat/scriptcat/commit/a4cefbc791fc2c2e53f3e934e0e4725023f49f72)]
- ✏️ 修复拼写错误 [[35b6f58](https://github.com/scriptscat/scriptcat/commit/35b6f581c6421a6db001eebadaa8ae216f5b8575)]
- 🐛 修复 GM xhr document 问题 [#716](https://github.com/scriptscat/scriptcat/issues/716) [[1c46546](https://github.com/scriptscat/scriptcat/commit/1c465462f4e14ae461d54358710f5caf74208af3)]

<a name="1.2.0-beta"></a>

## 1.2.0-beta (2025-09-07)

### Added

- ✨ 增加自定义编辑器配置和编辑器类型定义 ([#708](https://github.com/scriptscat/scriptcat/issues/708)) [[49eb379](https://github.com/scriptscat/scriptcat/commit/49eb3794774790d61c3ef787c865a9ba6fe82841)]
- ✨ 添加卸载扩展后的调查页面 [[6404c8f](https://github.com/scriptscat/scriptcat/commit/6404c8f74aff09b15725a92f8afdfc0d71ac188f)]
- 📝 修改安装打开的页面和命名空间 ([6f2f000](https://github.com/scriptscat/scriptcat/commit/6f2f000612908b7a88f6b70c2831092805c63bc7))
- ✨ 添加移动端安装二维码 ([348237c](https://github.com/scriptscat/scriptcat/commit/348237c7ce9771c69025386926b1f73710cf6f42))

### Fixed

- 🐛 修复低版本浏览器的兼容性问题 [#715](https://github.com/scriptscat/scriptcat/issues/715) [[4da8068](https://github.com/scriptscat/scriptcat/commit/4da806879c2b170672814d02e6f8ed98c9fae35b)]
- 💄 优化弹出窗口过小时弹出菜单显示问题 ([288650e](https://github.com/scriptscat/scriptcat/commit/288650e5e4cbdc3fa8658f0754ce427a1b3dec5a))
- 🐛 修复 N 个问题 ([#710](https://github.com/scriptscat/scriptcat/issues/710)) [[6a2027a](https://github.com/scriptscat/scriptcat/commit/6a2027ac0bb5e0ed625df570240d068a98a34b31)] (by @WhiteSevs)
- 🐛 修复 GM XHR 重定向丢失 header 的问题 [#664](https://github.com/scriptscat/scriptcat/issues/664) close [#664](https://github.com/scriptscat/scriptcat/issues/664) [[1f29e69](https://github.com/scriptscat/scriptcat/commit/1f29e699ded25ec5270844c1fb54001b5bbf5038)]

### Miscellaneous

- 🌐 处理 i18n 问题 [[2adf69d](https://github.com/scriptscat/scriptcat/commit/2adf69d6ec3c30186f2c2ef89f97e3cba9e15a66)]
- 🌐 处理翻译问题 [[55223dd](https://github.com/scriptscat/scriptcat/commit/55223dde8c545e974d19dd8126756aaae407e1fd)]

<a name="1.1.0-beta.2"></a>

## 1.1.0-beta.2 (2025-09-03)

支持了 Dropbox，做了一些兼容性处理，新增 @early-start 支持比页面更快加载

### Added

- ✨ 添加脚本运行环境设置 [#628](https://github.com/scriptscat/scriptcat/issues/628) [[0d4a89e](https://github.com/scriptscat/scriptcat/commit/0d4a89efaecf0331dcc7fbb6df006b93a1525846)]
- ✨ 当没有后台脚本时默认收起 [#626](https://github.com/scriptscat/scriptcat/issues/626) ([9d0aac6](https://github.com/scriptscat/scriptcat/commit/9d0aac6aae11b96707ca1f7c024a24e9d55f217b))
- ✨ 支持 Dropbox [#575](https://github.com/scriptscat/scriptcat/issues/575) [[2c66f21](https://github.com/scriptscat/scriptcat/commit/2c66f21f5118bd83a0eaa0f1baa3a31f2233e5b2)]
- ✨ 优化 external.Tampermonkey 当 TM 和 SC 同时启动时，如 TM 没有安装，则查 SC 的安装状态 ([#703](https://github.com/scriptscat/scriptcat/issues/703)) [[d0115c3](https://github.com/scriptscat/scriptcat/commit/d0115c33657260d803b6091139601b1b20407d4e)] (by @cyfung1031)
- ✨ 新增 @early-start 实现比页面更快加载 ([#649](https://github.com/scriptscat/scriptcat/issues/649)) [[eb097dd](https://github.com/scriptscat/scriptcat/commit/eb097dd146dcd6f8ca712ed883571dbfb3d09f20)]

### Changed

- ♻️ 兼容 FF: &#x60;chrome.scripting.registerContentScripts&#x60; ([#704](https://github.com/scriptscat/scriptcat/issues/704)) [[a9ad0ea](https://github.com/scriptscat/scriptcat/commit/a9ad0ea2b34744dbd4488bda0a16d73bd6a1cc2b)] (by @cyfung1031)
- ♻️ url_matcher 代码优化 ([#702](https://github.com/scriptscat/scriptcat/issues/702)) [[27b8baa](https://github.com/scriptscat/scriptcat/commit/27b8baa90372f75cbf428dd32ef02d842688cf33)] (by @cyfung1031)
- ⚡ const now &#x3D; Date.now(); ([#695](https://github.com/scriptscat/scriptcat/issues/695)) [[400b45c](https://github.com/scriptscat/scriptcat/commit/400b45cc487da4cc8a7b866916855acdc18a8023)] (by @cyfung1031)
- ⚡ forEach -&gt; for of ([#694](https://github.com/scriptscat/scriptcat/issues/694)) [[70927b6](https://github.com/scriptscat/scriptcat/commit/70927b6f0ddcf4a60d5838597d1df5acaaa7ca94)] (by @cyfung1031)
- ⚡ 共通代码优化 ([#692](https://github.com/scriptscat/scriptcat/issues/692)) [[cf05973](https://github.com/scriptscat/scriptcat/commit/cf0597305a158fd8ba8489f30906d7bbbd7a4b0b)] (by @cyfung1031)
- ⚡ 代码优化：Global Search ([#697](https://github.com/scriptscat/scriptcat/issues/697)) [[a5c12bd](https://github.com/scriptscat/scriptcat/commit/a5c12bd94f249ea194bececf2ecb39a0dea3c7dc)] (by @cyfung1031)
- ♻️ 使用中间件处理 initReady [[758e926](https://github.com/scriptscat/scriptcat/commit/758e92690194462982282dca25041c825d0b05e2)]
- ♻️ 优化 Server 和 MessageQueue 组件 [[0932edc](https://github.com/scriptscat/scriptcat/commit/0932edc49722226cac97403dcd14dbaef01b5528)]
- ♻️ 兼容性调整：optional_permission 处理 ([#679](https://github.com/scriptscat/scriptcat/issues/679)) [[bfc558a](https://github.com/scriptscat/scriptcat/commit/bfc558a0dfd167234100d95b9180ee6db4ab4c04)] (by @cyfung1031)
- ♻️ 兼容性调整：没有 &#x60;chrome.runtime.onMessage&#x60;的话 &#x60;content.js&#x60; 要报错 ([#675](https://github.com/scriptscat/scriptcat/issues/675)) [[4e9adc0](https://github.com/scriptscat/scriptcat/commit/4e9adc00562981aa9d930d8a3f199e9418bdff30)] (by @cyfung1031)
- ♻️ 兼容性调整（offscreen）及代码优化 ([#674](https://github.com/scriptscat/scriptcat/issues/674)) [[a3e56dd](https://github.com/scriptscat/scriptcat/commit/a3e56dd9d76cad73c8c8ec75c71fdbcfb9ca40e0)] (by @cyfung1031)
- 🎨 兼容性调整：notificationsUpdate ([#673](https://github.com/scriptscat/scriptcat/issues/673)) [[a345d93](https://github.com/scriptscat/scriptcat/commit/a345d93187e26efe99cc331072ffc854b3fe7b4d)] (by @cyfung1031)
- 🎨 增强 chrome.tabs.create 兼容性 ([#639](https://github.com/scriptscat/scriptcat/issues/639)) [[ac0d7de](https://github.com/scriptscat/scriptcat/commit/ac0d7deb5957ea71579ef7a44594a75300e1cca6)] (by @cyfung1031)

### Fixed

- 🐛 修复网络无法访问安装中间页时无法触发安装的问题 [#705](https://github.com/scriptscat/scriptcat/issues/705) [[5f1e292](https://github.com/scriptscat/scriptcat/commit/5f1e2929d79c470ba4427c3cce01f5cd184a839b)]
- 🐛 处理`@match *://*domain/*`的表达式 [[039b445](https://github.com/scriptscat/scriptcat/commit/039b4454148947cd3c74de82b87804ee9815e60c)]
- 🐛 修复扩展环境沙盒穿透问题 [#700](https://github.com/scriptscat/scriptcat/issues/700) [[a1a868d](https://github.com/scriptscat/scriptcat/commit/a1a868dfe3199e666fe2bcb65cfb2ad0ad3d699b)]
- ✏️ backgroud -&gt; background ([#698](https://github.com/scriptscat/scriptcat/issues/698)) [[2594075](https://github.com/scriptscat/scriptcat/commit/2594075c4a50f4c79fa46bcda08d7b0cbcfe723c)] (by @cyfung1031)
- ✏️ CrhomeStorage -&gt; ChromeStorage ([#693](https://github.com/scriptscat/scriptcat/issues/693)) [[64c536d](https://github.com/scriptscat/scriptcat/commit/64c536dbd5fcb4c29eebc1109202bab69aaa3ee2)] (by @cyfung1031)
- 🐛 修复 GM.getTab、GM.getTabs ([#683](https://github.com/scriptscat/scriptcat/issues/683)) [[31de256](https://github.com/scriptscat/scriptcat/commit/31de256f02b5b61e27f0eec9ea673248ba8faa32)] (by @WhiteSevs)
- 🐛 修正 finalUrl 缺失域名 ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[545d7c8](https://github.com/scriptscat/scriptcat/commit/545d7c8c0dd69c83bd2f0353518aafe6af81c0f4)] (by @cyfung1031)
- 🐛 兼容较低的浏览器内核 [#647](https://github.com/scriptscat/scriptcat/issues/647) ([bba12d2](https://github.com/scriptscat/scriptcat/commit/bba12d23f04759cb9b7fdb63f0d95ae515ee94a9))

### Miscellaneous

- 📝 Create README_RU.md and CONTRIBUTING_RU.md ([#678](https://github.com/scriptscat/scriptcat/issues/678)) [[597ab03](https://github.com/scriptscat/scriptcat/commit/597ab0378fe5ced01637cf411326ef7845b8ce2b)] (by @Ioann)
- 👷 兼容性调整（pack.js 兼容性） ([#669](https://github.com/scriptscat/scriptcat/issues/669)) [[fec45e6](https://github.com/scriptscat/scriptcat/commit/fec45e6606a609b10b79c58d2fcba02c2ce71e16)] (by @cyfung1031)

**Full Changelog**: https://github.com/scriptscat/scriptcat/compare/v1.1.0-beta.1...v1.1.0-beta.2

<a name="1.1.0-beta.1"></a>

## 1.1.0-beta.1 (2025-08-29)

### Added

- ✅ 修改单元测试 ([#690](https://github.com/scriptscat/scriptcat/issues/690)) [[71f9d70](https://github.com/scriptscat/scriptcat/commit/71f9d709868b96352494889ea864c22c0b2ce197)] (by @cyfung1031)
- 🎨 异步代码优化 ([#651](https://github.com/scriptscat/scriptcat/issues/651)) ([55440e7](https://github.com/scriptscat/scriptcat/commit/55440e725a706e4358f08bc430ebea77bcb25335))
- ✨ 全局代码搜索 ([#662](https://github.com/scriptscat/scriptcat/issues/662)) [[f8eafb7](https://github.com/scriptscat/scriptcat/commit/f8eafb7f955dad62c1b41ac477e929bf00c65982)] (by @RenjiYuusei)
- ✅ 调整 nextTime 单元测试 [[0a6ed8c](https://github.com/scriptscat/scriptcat/commit/0a6ed8c72b8ee6dc15b66f8053ae3bf3ee95584d)]

### Changed

- ♻️ ScriptMatchInfo 相关代码优化 ([#653](https://github.com/scriptscat/scriptcat/issues/653)) [[556c493](https://github.com/scriptscat/scriptcat/commit/556c493f027fbfa7299ee68c3a9d927de6f41f08)] (by @cyfung1031)
- 🎨 优化窗口打开逻辑 [[0de44bf](https://github.com/scriptscat/scriptcat/commit/0de44bfc90eeee003d9708ba0678e6c23f859579)]
- 🌐 处理翻译问题 ([cbe880e](https://github.com/scriptscat/scriptcat/commit/cbe880efcf3a148301dce4ffa90aa29a14407a26))
- 🎨 &#x60;@scriptURL&#x60; ([#654](https://github.com/scriptscat/scriptcat/issues/654)) [[4b1a5de](https://github.com/scriptscat/scriptcat/commit/4b1a5de9ed3b328091f582925b8a442535953a9e)] (by @cyfung1031)
- ♻️ 重写 UrlMatch ([#637](https://github.com/scriptscat/scriptcat/issues/637)) [[5b01c10](https://github.com/scriptscat/scriptcat/commit/5b01c10859b80890456a44a66d78204b42040870)] (by @cyfung1031)
- 🎨 getEnableScript 优化 ([#645](https://github.com/scriptscat/scriptcat/issues/645)) [[04910cf](https://github.com/scriptscat/scriptcat/commit/04910cf6213fe90fc8cbca28f2826414855dd7b1)] (by @cyfung1031)
- ⚡ runtime.ts 代码优化 ([#642](https://github.com/scriptscat/scriptcat/issues/642)) [[641cc1d](https://github.com/scriptscat/scriptcat/commit/641cc1d1ec0ec2dff5d32689ba46d27d30f7b45f)] (by @cyfung1031)
- 🎨 增强 chrome.tabs.create 兼容性 ([#639](https://github.com/scriptscat/scriptcat/issues/639)) [[601b933](https://github.com/scriptscat/scriptcat/commit/601b933bd5cec1405ac6169a6160a57dfe0dbcfc)] (by @cyfung1031)
- 🎨 修正新脚本 &#x60;@match&#x60; &#x60;@icon&#x60; ([#636](https://github.com/scriptscat/scriptcat/issues/636)) [[aec08a3](https://github.com/scriptscat/scriptcat/commit/aec08a331f868defee6279eb420f6b90aba39cfe)] (by @cyfung1031)

### Removed

- 🔥 删除脚本站的 crowdin 说明 [[695f4d1](https://github.com/scriptscat/scriptcat/commit/695f4d1ba2d039508415235dd8e606d238be8035)]

### Fixed

- 🐛 修正 finalUrl 缺失域名 ([#656](https://github.com/scriptscat/scriptcat/issues/656)) [[3ed018a](https://github.com/scriptscat/scriptcat/commit/3ed018a7a54803fcf2e1791316e0166ed0b52007)] (by @cyfung1031)
- 💚 修复 react/jsx-no-literals lint 问题 [[017b608](https://github.com/scriptscat/scriptcat/commit/017b60886be601e3e0e1719cf249da32d5686c30)]
- 🐛 兼容较低的浏览器内核 [#647](https://github.com/scriptscat/scriptcat/issues/647) [[0e2f817](https://github.com/scriptscat/scriptcat/commit/0e2f8173c8b44bd6ad44bdffc73fa302a96a058e)]
- 🐛 优化 window.external 注入 ([#646](https://github.com/scriptscat/scriptcat/issues/646)) [[0b2668a](https://github.com/scriptscat/scriptcat/commit/0b2668aadcab35a33ff9abc4bd030dffb87ea168)] (by @cyfung1031)
- 🐛 修复网盘鉴权打开页面无法自动关闭的问题 [[7748088](https://github.com/scriptscat/scriptcat/commit/7748088e63c1fc660b6a6ae5613cf04f9da99b8c)]

### Miscellaneous

- 🌐 Refines and expands Vietnamese locale ([#661](https://github.com/scriptscat/scriptcat/issues/661)) [[6847a59](https://github.com/scriptscat/scriptcat/commit/6847a596c4b06c75e13594ef60e4b9dfa5718cf3)] (by @RenjiYuusei)
- 🌐 翻译修正 ([#635](https://github.com/scriptscat/scriptcat/issues/635)) [[19296de](https://github.com/scriptscat/scriptcat/commit/19296de6a3815e5965eb33401a55da9b2bd22bb4)] (by @cyfung1031)
- 🌐 修复新手引导 i18n 问题 [#627](https://github.com/scriptscat/scriptcat/issues/627) [[9683f96](https://github.com/scriptscat/scriptcat/commit/9683f965400ab6a2bac15349aca4335911766eac)]

<a name="1.1.0-beta"></a>

## 1.1.0-beta (2025-08-18)

### Changed

- ⚡ 不要 .reduce 写法 ([#619](https://github.com/scriptscat/scriptcat/issues/619)) [[71e97d5](https://github.com/scriptscat/scriptcat/commit/71e97d53fe152d5a8e479378366d077589df3d27)] (by @cyfung1031)
- ⚡ 优化脚本资源加载问题 [#612](https://github.com/scriptscat/scriptcat/issues/612) [[e206562](https://github.com/scriptscat/scriptcat/commit/e2065622c2a544579bc84f25f178d118d902ccba)]
- 🎨 优化脚本安装页面 ([#611](https://github.com/scriptscat/scriptcat/issues/611)) ([bbc76b1](https://github.com/scriptscat/scriptcat/commit/bbc76b1110d417a445b3cc065488fe11b7f2ddc2))
- 🐛 修改在当前窗口打开方式 ([70be8a3](https://github.com/scriptscat/scriptcat/commit/70be8a303b98b73885dac950dc1b24aa8cbbe773))
- 🎨 优化 utils.ts ([#608](https://github.com/scriptscat/scriptcat/issues/608)) [[37bb763](https://github.com/scriptscat/scriptcat/commit/37bb763306c7e06df085022c2cb2fa9cc2788204)] (by @cyfung1031)
- 🎨 doThrow 及 TypeScript 整理 ([#606](https://github.com/scriptscat/scriptcat/issues/606)) [[4362802](https://github.com/scriptscat/scriptcat/commit/4362802fe3ba4482a283996cae9a424b23c69407)] (by @cyfung1031)
- ⚡ 改善 popup.ts 及 runtime.ts （代码优化） ([#607](https://github.com/scriptscat/scriptcat/issues/607)) [[e48ca66](https://github.com/scriptscat/scriptcat/commit/e48ca66cc4f56ef981543c1f56b5e7eb0c2fa14a)] (by @cyfung1031)
- 🎨 getCurrentTab 相關更新 ([#604](https://github.com/scriptscat/scriptcat/issues/604)) [[b4a9f2e](https://github.com/scriptscat/scriptcat/commit/b4a9f2efd48ee8cbacac6872ddb25c7d630bfd8a)] (by @cyfung1031)
- 🎨 TMessage TS 定義 ([#596](https://github.com/scriptscat/scriptcat/issues/596)) [[6aeb61d](https://github.com/scriptscat/scriptcat/commit/6aeb61da8ae7efdd718facacf90e4ed40ddb4caf)] (by @cyfung1031)
- 🎨 使用 Service Worker 取得 favicon ([#594](https://github.com/scriptscat/scriptcat/issues/594)) [[727872d](https://github.com/scriptscat/scriptcat/commit/727872d47552e4c53b09be33b526f7f69baad4ec)] (by @cyfung1031)
- 🎨 message 标準化 ([#595](https://github.com/scriptscat/scriptcat/issues/595)) [[791608b](https://github.com/scriptscat/scriptcat/commit/791608b31855b1415f9ad496ef6c52fe1809984d)] (by @cyfung1031)
- 🎨 优化 SystemConfigChange 代码 ([#593](https://github.com/scriptscat/scriptcat/issues/593)) [[041d985](https://github.com/scriptscat/scriptcat/commit/041d98523902319c88efdee3fa2ae40eab80aba8)] (by @cyfung1031)
- 🎨 优化 EventEmitter 代码 ([#592](https://github.com/scriptscat/scriptcat/issues/592)) [[67543c4](https://github.com/scriptscat/scriptcat/commit/67543c473b303a1708ea83ca00e49d5d687d6a34)] (by @cyfung1031)
- 🎨 优化 Cache 代码 ([#591](https://github.com/scriptscat/scriptcat/issues/591)) [[34e42ac](https://github.com/scriptscat/scriptcat/commit/34e42ac5f9ee504a90636d32c53def356c7d4495)] (by @cyfung1031)
- 🎨 新脚本范本跟 TM 一样预设&#x60;@grant none&#x60; ([#589](https://github.com/scriptscat/scriptcat/issues/589)) [[e5a2d5d](https://github.com/scriptscat/scriptcat/commit/e5a2d5d3adafdcac2cf95b865550e395ba8443c7)] (by @cyfung1031)
- ⚡ new Date().getTime() → Date.now() ([#587](https://github.com/scriptscat/scriptcat/issues/587)) [[245ecbf](https://github.com/scriptscat/scriptcat/commit/245ecbfc23f1811aeee5671e48151e94b0ebc128)] (by @cyfung1031)

### Fixed

- 🐛 修复`@connect` \*不生效的问题 [#623](https://github.com/scriptscat/scriptcat/issues/623) [[76481c8](https://github.com/scriptscat/scriptcat/commit/76481c845b34414a7f15ed18ec61f7dff7eef091)]
- 🐛 添加单元测试和修复`@exclude` 问题 ([#618](https://github.com/scriptscat/scriptcat/issues/618)) [[0046bb7](https://github.com/scriptscat/scriptcat/commit/0046bb78800a2c46edaac785b8e9592327772a3b)] (by @cyfung1031)
- 🐛 修复某些.user.js 链接无法安装脚本的问题 [#599](https://github.com/scriptscat/scriptcat/issues/599) [[ccd2639](https://github.com/scriptscat/scriptcat/commit/ccd2639858f0f3cde28f284376fe8ed998d935ae)]
- 🐛 修复新建脚本失败 [[d42d6e7](https://github.com/scriptscat/scriptcat/commit/d42d6e7d408a84674facf9ab0da6eac0e384502f)]
- 🐛 metadata 修正 ([#610](https://github.com/scriptscat/scriptcat/issues/610)) [[4d98cce](https://github.com/scriptscat/scriptcat/commit/4d98cce0ca1281cc58f551ea4e6700e340780d3f)] (by @cyfung1031)
- 🐛 Popup Badge 修正 ([#605](https://github.com/scriptscat/scriptcat/issues/605)) [[eff9230](https://github.com/scriptscat/scriptcat/commit/eff92309de99abb0cf48ef4727afaa113bc2fbb6)] (by @cyfung1031)
- 🐛 ScriptEditor.tsx 修正 ([#603](https://github.com/scriptscat/scriptcat/issues/603)) [[a9aadba](https://github.com/scriptscat/scriptcat/commit/a9aadba372b813c16bdc5f0aeb07c68981f48c63)] (by @cyfung1031)
- 🐛 代码檢視器&amp;编辑器 CSS 修正 ([#602](https://github.com/scriptscat/scriptcat/issues/602)) [[2e86785](https://github.com/scriptscat/scriptcat/commit/2e8678513efaccd42c8dc2aa89f8b76679aa8420)] (by @cyfung1031)
- 🐛 修复 getFaviconFromDomain 的并发问题 ([#597](https://github.com/scriptscat/scriptcat/issues/597)) [[1872fe1](https://github.com/scriptscat/scriptcat/commit/1872fe165ab204b155a56f037c111d2d7776c2b9)] (by @cyfung1031)
- 🐛 修复多窗口时打开 tab 出错的问题 [#586](https://github.com/scriptscat/scriptcat/issues/586) [[54c1da2](https://github.com/scriptscat/scriptcat/commit/54c1da29c2bd8bd8f5ef2d85b7aed8b334de296f)]
- 🐛 修复 openerTabId 兼容问题 ([#586](https://github.com/scriptscat/scriptcat/issues/586)) [[b861fc8](https://github.com/scriptscat/scriptcat/commit/b861fc8620e53b885cad98db03f1dd10ec9d296c)] (by @cyfung1031)

### Miscellaneous

- 👷 pack.js 代码优化 ([#615](https://github.com/scriptscat/scriptcat/issues/615)) [[870dd9b](https://github.com/scriptscat/scriptcat/commit/870dd9bc6b7eff3eceefa915452e773ec0565180)] (by @cyfung1031)

<a name="1.0.0-beta.2"></a>

## 1.0.0-beta.2 (2025-07-29)

### Added

- ✨ 增加徽标和菜单设置并调整设置页面 [#573](https://github.com/scriptscat/scriptcat/issues/573) [[23e9b19](https://github.com/scriptscat/scriptcat/commit/23e9b19912c64ed2dafeabd66513519e1465b00e)]
- ⚡ 优化资源加载, 并行加载异步资源 ([#574](https://github.com/scriptscat/scriptcat/issues/574)) ([5910c0b](https://github.com/scriptscat/scriptcat/commit/5910c0b3baf540aeb1f12fed5a4796eef3dec71c)) by @zhangenming
- ✨ 开启开关单独控制隐身模式与主窗口 [#571](https://github.com/scriptscat/scriptcat/issues/571) ([38a33b1](https://github.com/scriptscat/scriptcat/commit/38a33b107275be0e1b2aa31eaa2055939c5356f0))
- ✨ Ctrl+Enter 确定导入 [#537](https://github.com/scriptscat/scriptcat/issues/537) [[06a7a01](https://github.com/scriptscat/scriptcat/commit/06a7a01f0ff82b5d99b558fdff29bc45524b7501)]
- ✨ 优化安装、权限等的打开窗口交互 ([0d9ba53](https://github.com/scriptscat/scriptcat/commit/0d9ba53ba3b42f948eb82b34a7257eb46b973055))
- ✨ 安装本地脚本时可以进行监听 [#275](https://github.com/scriptscat/scriptcat/issues/275) ([d9b0eee](https://github.com/scriptscat/scriptcat/commit/d9b0eeede1a8b114f79a43fade99d825323c63f6))

### Changed

- 🎨 调整菜单选项 [#573](https://github.com/scriptscat/scriptcat/issues/573) [[3677278](https://github.com/scriptscat/scriptcat/commit/367727851faf7ec73b9d751fab5787219d77fe9a)]

### Fixed

- 🐛 修复 GM cookie list 获取不全的问题 [[3046200](https://github.com/scriptscat/scriptcat/commit/3046200562e7f92e307cb4a52e32723f67490f2d)]
- 🐛 修复并发创建菜单的报错 [#580](https://github.com/scriptscat/scriptcat/issues/580) [[4855fec](https://github.com/scriptscat/scriptcat/commit/4855fec67a89bb36ab0f1855bc679926a0e74dc3)]
- 🐛 处理一些特殊的沙盒关键字 ([9ced958](https://github.com/scriptscat/scriptcat/commit/9ced958144f2d883c9044e6e4ad4f9dd53951ece))
- 🐛 修复脚本设置网站匹配更新不断累积 include 的问题 [#581](https://github.com/scriptscat/scriptcat/issues/581) [[9d31872](https://github.com/scriptscat/scriptcat/commit/9d31872775116d60e093f7ca31d62449963f059d)]

<a name="1.0.0-beta.1"></a>

## 1.0.0-beta.1 (2025-07-22)

🎉 准备向 v1.0.0 进发，非常感谢哥哥们的支持！

### Added

- ✨ 增加 UserConfig 顺序 [[1874a35](https://github.com/scriptscat/scriptcat/commit/1874a3520668edc6ba947f8deb12148b5c5befa9)]
- ✨ 关闭时的不再检查更新 [#562](https://github.com/scriptscat/scriptcat/issues/562) [[25cec66](https://github.com/scriptscat/scriptcat/commit/25cec66ee81192c6898b20ff133c78ad15039a84)]
- ✨ 最后更新增加 Tooltip ([#564](https://github.com/scriptscat/scriptcat/issues/564)) [[39ede21](https://github.com/scriptscat/scriptcat/commit/39ede219157840d2de5b4a846ab339612db8fb94)] (by @cyfung1031)

### Changed

- ♻️ 调整打开更新页面代码 [[9ea0708](https://github.com/scriptscat/scriptcat/commit/9ea0708a4d6c793caf4cbfe9b760db1fbdc1b453)]
- ⚡ TimeoutError 判斷 ([#565](https://github.com/scriptscat/scriptcat/issues/565)) [[6a9a830](https://github.com/scriptscat/scriptcat/commit/6a9a8309379f5406a29aa8bee6ad8de106c85f57)] (by @cyfung1031)
- ⚡ 修正 ScriptList 重绘、图标显示等问题 + 其他视觉元素修改 ([#559](https://github.com/scriptscat/scriptcat/issues/559)) [[f9e6c44](https://github.com/scriptscat/scriptcat/commit/f9e6c44358757e904d58df4e91f67215fc9278ad)] (by @cyfung1031)
- ⚡ 修改 messageFlag 格式避免与其他页面代码衝突 ([#561](https://github.com/scriptscat/scriptcat/issues/561)) [[182a631](https://github.com/scriptscat/scriptcat/commit/182a631788b779a61aa126776b3edad4434a898e)] (by @cyfung1031)
- ♻️ xhr 原生 response 只取一次 ([#550](https://github.com/scriptscat/scriptcat/issues/550)) [3a8a464]

### Removed

- 🔥 未支持&#x60;window.onurlchange&#x60; ([#568](https://github.com/scriptscat/scriptcat/issues/568)) [[678af19](https://github.com/scriptscat/scriptcat/commit/678af19f0f793caf8f3c32adfc7732da7386824b)] (by @cyfung1031)

### Fixed

- 🐛 修复 GM.xmlHttpRequest 的 onload 事件 [#570](https://github.com/scriptscat/scriptcat/issues/570) [[553b944](https://github.com/scriptscat/scriptcat/commit/553b9442bf21340ce32871d01309919295b946fd)]
- 🐛 修复导出文件中的特殊字符 [#558](https://github.com/scriptscat/scriptcat/issues/558) [[17505f0](https://github.com/scriptscat/scriptcat/commit/17505f076e46249467a90a32f51b10ed3170205a)]
- 🐛 修复编辑器在 development 模式下的问题与编辑改动问题 [[340d3cc](https://github.com/scriptscat/scriptcat/commit/340d3cca28cbef16e5a6678753d3676899760703)]
- 🐛 优化授权管理与 GM XHR 错误处理 [#556](https://github.com/scriptscat/scriptcat/issues/556) close [#556](https://github.com/scriptscat/scriptcat/issues/556) [[21e20d3](https://github.com/scriptscat/scriptcat/commit/21e20d35bee04cbad512cdd43ae38f82f08a612f)]
- 🐛 修复资源校验问题 [#563](https://github.com/scriptscat/scriptcat/issues/563) fixed [#563](https://github.com/scriptscat/scriptcat/issues/563) [[110a772](https://github.com/scriptscat/scriptcat/commit/110a77273648f6e8fda3b1e7e9015fb885f67dec)]
- 🐛 修复 GM_xmlhttpRequest 不支持特殊 method 的问题 [#555](https://github.com/scriptscat/scriptcat/issues/555) [[3bf4300](https://github.com/scriptscat/scriptcat/commit/3bf4300844e79963da52d278c4c90708b83d7904)]
- 🐛 修复订阅列表显示空页面的问题 [#553](https://github.com/scriptscat/scriptcat/issues/553) [[be65405](https://github.com/scriptscat/scriptcat/commit/be65405b02c72d2b00a833bc3aa4d478279ec851)]
- 🐛 修复下拉列表选项显示不全的问题 ([#552](https://github.com/scriptscat/scriptcat/issues/552)) ([73564d7](https://github.com/scriptscat/scriptcat/commit/73564d7dfbee2e0168c658e9b7a6802d2bab04b0))
- 🐛 修复 GM_xmlhttpRequest 的事件问题 [#549](https://github.com/scriptscat/scriptcat/issues/549) [[d25a707](https://github.com/scriptscat/scriptcat/commit/d25a707609911ff589121b18421e87edd66d255d)]
- 🐛 处理 beta 版本打开的更新日志 [[cf699a9](https://github.com/scriptscat/scriptcat/commit/cf699a9bcdceac732f1e82a031056e1a44a73120)]

### Miscellaneous

- 👷 增加.codecov.yml [[ee297d5](https://github.com/scriptscat/scriptcat/commit/ee297d520802ead748fd3969e065fb19b42ca87f)]
- 🌐 更新翻译 [[82214d0](https://github.com/scriptscat/scriptcat/commit/82214d09fa0696fe3366277ca21ae80164dea676)]
- 🌐 处理默认翻译问题 英语以中文为基础，其它语言以英文为基础 ([70a739c](https://github.com/scriptscat/scriptcat/commit/70a739ce25f89286f9289e70d5183278f1893572))

<a name="1.0.0-beta"></a>

## 1.0.0-beta (2025-07-14)

🎉 准备向 v1.0.0 进发，非常感谢哥哥们的支持！

### Added

- ✨ 优化日志打印 [[8693b93](https://github.com/scriptscat/scriptcat/commit/8693b9338bdd916ffad58572949e67d14cc2c109)]
- ✨ 实现异步 GM 函数 ([8caebe9](https://github.com/scriptscat/scriptcat/commit/8caebe9ae4f6f6b304b54cbb870a4cebd6341704))
- ✨ 链接导入脚本时可以按回车键确定 ([#537](https://github.com/scriptscat/scriptcat/issues/537)) [[45a17df](https://github.com/scriptscat/scriptcat/commit/45a17df8f35a943a489c0f5980ac3f65fb0e8e5f)] (by @TC999)
- ✨ 增加 Prettier 的 ESLint 统一代码格式化风格 [[0f84a19](https://github.com/scriptscat/scriptcat/commit/0f84a19c42823baab60f2b379d187073be7879f9)]
- ✨ 安装/更新脚本时增加下拉框 [#508](https://github.com/scriptscat/scriptcat/issues/508) [[790584d](https://github.com/scriptscat/scriptcat/commit/790584d078eb4bbf2179aec5297c5574d7b30167)]
- ✨ 增加脚本单独的检查更新选项 [#508](https://github.com/scriptscat/scriptcat/issues/508) ([41ac880](https://github.com/scriptscat/scriptcat/commit/41ac880855fafe3a4e7a87cc05169f77d8a8f59c))
- 🎉 准备跨入 v1.0.0 [[4aa4eef](https://github.com/scriptscat/scriptcat/commit/4aa4eefc05caa8477a1399734fd4f3f4dd758bc9)]
- ✨ 实现异步 GM 函数 ([#492](https://github.com/scriptscat/scriptcat/issues/492)) [[cb8edf7](https://github.com/scriptscat/scriptcat/commit/cb8edf7809667068f4a2682afba82bc24302d717)] (by @cyfung1031)
- ✨ 支持 GoogleDrive ([#490](https://github.com/scriptscat/scriptcat/issues/490)) [[dc38f7f](https://github.com/scriptscat/scriptcat/commit/dc38f7f38fca13febe197a3ced4e817cacec5920)]

### Changed

- ⚡ 优化脚本资源加载 ([4651ae4](https://github.com/scriptscat/scriptcat/commit/4651ae4964a94af83a5cc23c02be4b351db7dce9))
- ⚡ 强化错误检查，加入自定义 esline-rules ([#542](https://github.com/scriptscat/scriptcat/issues/542)) [[c5ac3e3](https://github.com/scriptscat/scriptcat/commit/c5ac3e34176b10ab5f52e705da3d0764aae5519d)] (by @cyfung1031)
- ⚡ React 優化 ([#530](https://github.com/scriptscat/scriptcat/issues/530)) [[45f73b7](https://github.com/scriptscat/scriptcat/commit/45f73b72b2a907d7e74929a571b24160982edbbb)] (by @cyfung1031)
- ♻️ 重构 MainWorld 沙盒 proxyContext（效能优化，保持 TM 沙盒行为） ([#524](https://github.com/scriptscat/scriptcat/issues/524)) [[331087c](https://github.com/scriptscat/scriptcat/commit/331087c2e86580fc514fe5ffb4c2b1e665d4da71)] (by @cyfung1031)
- ⚡ React 元件 key ([#526](https://github.com/scriptscat/scriptcat/issues/526)) [[df995ed](https://github.com/scriptscat/scriptcat/commit/df995ed2e63800cf523e8ba868bed991829894ef)] (by @cyfung1031)
- 💄 调整 UI ([#523](https://github.com/scriptscat/scriptcat/issues/523)) [[ec1fcd2](https://github.com/scriptscat/scriptcat/commit/ec1fcd27083dce2b988e9aecade215f097978c8e)] (by @rkscv)
- ⚡ GM 优化 及其他更新 ([#519](https://github.com/scriptscat/scriptcat/issues/519)) [[3d3be2c](https://github.com/scriptscat/scriptcat/commit/3d3be2ccae3a5218ecca91605f6b483a8d9aa2e4)] (by @cyfung1031)
- ⚡ GM 注入优化 ([#517](https://github.com/scriptscat/scriptcat/issues/517)) [[1d6d52a](https://github.com/scriptscat/scriptcat/commit/1d6d52af3ff75cf547216284e0e837f3a44e7639)] (by @cyfung1031)
- ⚡ 輕微調整 ([#512](https://github.com/scriptscat/scriptcat/issues/512)) [[b3ceea3](https://github.com/scriptscat/scriptcat/commit/b3ceea35edb29bf735cb75f216c041d18cf901d3)] (by @cyfung1031)
- 📝 更新文档 ([#488](https://github.com/scriptscat/scriptcat/issues/488)) ([89b9848](https://github.com/scriptscat/scriptcat/commit/89b984866e90f0fd610da973b0952d801fe07a27))
- ⚡ TreeShaking ([#509](https://github.com/scriptscat/scriptcat/issues/509)) [[4e70591](https://github.com/scriptscat/scriptcat/commit/4e705916a406d13eb09ee1aa2839b6ffeb484222)] (by @cyfung1031)
- ⚡ Tree Shaking ([#505](https://github.com/scriptscat/scriptcat/issues/505)) [[05a71f0](https://github.com/scriptscat/scriptcat/commit/05a71f0afe7087f90c7be9c3a694986b8f0f65f8)] (by @cyfung1031)
- 🎨 修改.d.ts [#475](https://github.com/scriptscat/scriptcat/issues/475) [[a3adc00](https://github.com/scriptscat/scriptcat/commit/a3adc00708232835463d8f2ac6c49d7de259cb4f)]
- ⚡ 加快 Render ([#491](https://github.com/scriptscat/scriptcat/issues/491)) [[1b266be](https://github.com/scriptscat/scriptcat/commit/1b266bec9b17053ea046f25ce0aab2f32afb6e9c)] (by @cyfung1031)
- 🎨 修复 eslint 问题 ([f49e20f](https://github.com/scriptscat/scriptcat/commit/f49e20faa78ca377f3404323cd13a5a7a5c27dca))

### Fixed

- 🐛 修复脚本列表打勾时筛选会失效的问题 [#507](https://github.com/scriptscat/scriptcat/issues/507) ([8830490](https://github.com/scriptscat/scriptcat/commit/8830490007102d91df1f7dd4647f9fdf3de1417b))
- 🐛 脚本名宽度设置为固定宽度 [#495](https://github.com/scriptscat/scriptcat/issues/495) ([33edabd](https://github.com/scriptscat/scriptcat/commit/33edabdb7bbde618f6a88237f15fd6e87d4ee4ab))
- 🐛 调整 init ([#543](https://github.com/scriptscat/scriptcat/issues/543)) [[0341d3c](https://github.com/scriptscat/scriptcat/commit/0341d3cf0442fc2e9c4c6dba4fbfb3a89dc522f1)] (by @cyfung1031)
- 🐛 favicon 超时 ([#540](https://github.com/scriptscat/scriptcat/issues/540)) [[4484f01](https://github.com/scriptscat/scriptcat/commit/4484f0180895fd53c3f03045c758de8fdad49679)] (by @cyfung1031)
- 🐛 修复 GM download done 属性丢失的问题 [[ed465e8](https://github.com/scriptscat/scriptcat/commit/ed465e8622277643286b9d32ccb62947230f5706)]
- 🐛 MV3 兼容 Opera 以及 Firefox 调整 ([#534](https://github.com/scriptscat/scriptcat/issues/534)) [[645a58f](https://github.com/scriptscat/scriptcat/commit/645a58f67af9f2d6b69ffbbb5e0d008dc726d80b)] (by @cyfung1031)
- 🐛 React 代码格式 lint ([#536](https://github.com/scriptscat/scriptcat/issues/536)) [[9ab4b22](https://github.com/scriptscat/scriptcat/commit/9ab4b225e803c337bf9c86f77fc2c64200ee4635)] (by @cyfung1031)
- 🐛 修复 textarea 占位符换行问题 ([#538](https://github.com/scriptscat/scriptcat/issues/538)) [[9de4bb6](https://github.com/scriptscat/scriptcat/commit/9de4bb6cc02ca15363a2491eee2c9b387ebf5c4b)] (by @rkscv)
- 💚 修复 lint 问题 [[8cf0ce8](https://github.com/scriptscat/scriptcat/commit/8cf0ce8ebd172aec86b9f250711e4375fc00aa81)]
- 🐛 修复 GM_cookie.set 操作 [#520](https://github.com/scriptscat/scriptcat/issues/520) [[3d49376](https://github.com/scriptscat/scriptcat/commit/3d493768678b86c0a0f48040e7670a69bd714547)]
- 🐛 修复 finalUrl 的问题 [[93fe904](https://github.com/scriptscat/scriptcat/commit/93fe904ed3cd4e819ca4549e77d288884022e0f2)]
- 🐛 修复脚本名称中有特殊字符导致脚本加载失败的问题 [#516](https://github.com/scriptscat/scriptcat/issues/516) [[07631ef](https://github.com/scriptscat/scriptcat/commit/07631ef972b456574b2a0ed4e9ce4298b084c5e7)]
- 🐛 修复 sandbox 关键字导致后台脚本无法正常运行的问题 ([e11dd11](https://github.com/scriptscat/scriptcat/commit/e11dd113cadcb0216448b4019d4f8cfba8522129))
- 🐛 修复 GM API 加载问题 [[9f6bffc](https://github.com/scriptscat/scriptcat/commit/9f6bffc323cf524d767a0aa66b8e09411d6476c7)]
- 🐛 修复 Google Drive 授权提示问题 [[b08187a](https://github.com/scriptscat/scriptcat/commit/b08187a9f580ebe8fca4f313315028e8895d09a7)]
- 🐛 兼容 TM 的 GM_info [#478](https://github.com/scriptscat/scriptcat/issues/478) [[de49c50](https://github.com/scriptscat/scriptcat/commit/de49c50f1835acdaec7c47782deb55811e676f88)]
- 🐛 处理窄屏显示问题 [#495](https://github.com/scriptscat/scriptcat/issues/495) [[a23f6d1](https://github.com/scriptscat/scriptcat/commit/a23f6d1e12863149e026dfe1691861a17deaeed8)]
- 🐛 处理 GM_setValue 的返回值 [#493](https://github.com/scriptscat/scriptcat/issues/493) [[dfc24a5](https://github.com/scriptscat/scriptcat/commit/dfc24a50bc71f4cb65d1e81f520ce4c350696d19)]
- 🐛 addStyle 代碼修正 ([#500](https://github.com/scriptscat/scriptcat/issues/500)) [[1f346cc](https://github.com/scriptscat/scriptcat/commit/1f346cc64e26b148b402756731e5d22a6260ccca)] (by @cyfung1031)

### Miscellaneous

- 🌐 添加俄语翻译 ([ea056b0](https://github.com/scriptscat/scriptcat/commit/ea056b088c4404df860f151ce67aadcc48257765))
- 🌐 删除语言映射 ([ab66fb5](https://github.com/scriptscat/scriptcat/commit/ab66fb5eb01762299164379d151c29b8139135ad))
- 🌐 根据前缀去匹配 ([505e112](https://github.com/scriptscat/scriptcat/commit/505e112d3ccb3365da2bb403f37bc6482a59051b))
- ⬆️ 升级 vitest [[bbc2550](https://github.com/scriptscat/scriptcat/commit/bbc2550fe2ed5105a1d27666ec68ca484e424ac3)]
- 🌐 增加 i18n 翻译 ([#525](https://github.com/scriptscat/scriptcat/issues/525)) [[8f677ce](https://github.com/scriptscat/scriptcat/commit/8f677cea06cc3f31902276b18112d353f4f3730e)] (by @cyfung1031)
- 📝 修复文档 pnpm 错误 ([#527](https://github.com/scriptscat/scriptcat/issues/527)) [[324301a](https://github.com/scriptscat/scriptcat/commit/324301ab1b448e778c50bed47d40a18d9db76786)] (by @cyfung1031)
- 🌐 修复 i18n 路径 [[4fc50cd](https://github.com/scriptscat/scriptcat/commit/4fc50cd15ed871f675ad3cdcb48fc91c0e3abd91)]
- 🧪 添加 GM.\*的单元测试 [[4e91b36](https://github.com/scriptscat/scriptcat/commit/4e91b36b64220153fefe8b3a91575e0c302bf757)]
- ⚡ 更快导入腳本 ([#498](https://github.com/scriptscat/scriptcat/issues/498)) ([6b7ee3d](https://github.com/scriptscat/scriptcat/commit/6b7ee3d177b7d48e59e1e31053d9007265a4d5cc))
- ♻️ 庫引用整理 ([#494](https://github.com/scriptscat/scriptcat/issues/494)) ([55e2ecd](https://github.com/scriptscat/scriptcat/commit/55e2ecd35ffbf41a8e07eadf2da89f0afbc3685e))
- 🔨 添加更新日志生成脚本 ([a4f5dd4](https://github.com/scriptscat/scriptcat/commit/a4f5dd4c096a593c23a33d72a04352ceb016f50a))
- 📝 Update README [[b1d64f0](https://github.com/scriptscat/scriptcat/commit/b1d64f011e81ebd6a07ac2cd6ee62ecb23ec1c2a)]
- 📝 Update README ([b20e36e](https://github.com/scriptscat/scriptcat/commit/b20e36ef889bae990c765d9c361434c5261fcbd1))
- Merge branch 'release/mv3' [[eead31f](https://github.com/scriptscat/scriptcat/commit/eead31fa67a06c47bde214427b9860b3a1c98a3d)]
- 🌐 处理 arco i18n 问题 [#507](https://github.com/scriptscat/scriptcat/issues/507) [[79ad287](https://github.com/scriptscat/scriptcat/commit/79ad287553e0bb679c2ab811dc924b9e18059c4c)]
- 👷 调整 eslint 规则 [[ee54ff6](https://github.com/scriptscat/scriptcat/commit/ee54ff676db7b5761abc48be0d2b1cef465fb40f)]
- 🔨 修改 changlog 生成脚本 [[924d4f8](https://github.com/scriptscat/scriptcat/commit/924d4f8d28e3764301112993ebb8e7f96a7a96fd)]
- 📝 Release v0.19.0-beta [[25fcffc](https://github.com/scriptscat/scriptcat/commit/25fcffcd43d5c08d77ebe32cfa6ea8eb70186038)]
- 🌐 issue 模板提供英文版本 [[37217d4](https://github.com/scriptscat/scriptcat/commit/37217d423d7e410893c68ef74963a6c14c38fafe)]
- 📝 调整 readme [[acb5731](https://github.com/scriptscat/scriptcat/commit/acb5731df5141052312251073e1408426242b2e4)]
- 🌐 Update i18n README.md ([#487](https://github.com/scriptscat/scriptcat/issues/487)) [[a0d6417](https://github.com/scriptscat/scriptcat/commit/a0d641782666315eed4937d6e62bff6944d65e9d)] (by @MaxZhang)

<a name="0.16.11-beta"></a>

## 0.16.11-beta (2025-08-25)

### Added

- ✨ 优化安装的打开窗口交互 [#548](https://github.com/scriptscat/scriptcat/issues/548) [[3348f26](https://github.com/scriptscat/scriptcat/commit/3348f269de04f4d1cb6583c4b83d5cf20f6a6cc7)]

### Changed

- 🎨 (MV2) 增强 chrome.tabs.create 兼容性 ([#640](https://github.com/scriptscat/scriptcat/issues/640)) [[eb4d1ab](https://github.com/scriptscat/scriptcat/commit/eb4d1ab1dd3e298e733bb07235b1c8b2858131d1)] (by @cyfung1031)
- ⚡ 基於 MV3 版修正小量共通功能代码 ([#614](https://github.com/scriptscat/scriptcat/issues/614)) [[51f3d0c](https://github.com/scriptscat/scriptcat/commit/51f3d0c15129444b1cdabf0a936e1f01473e03f5)] (by @cyfung1031)

### Fixed

- 🐛 修复 SRI 资源校验 [[d24d9ad](https://github.com/scriptscat/scriptcat/commit/d24d9ad3f924d3ec9c677f937c711e9b32f691e5)]
- 💚 修复 lint 问题 [[2b33a70](https://github.com/scriptscat/scriptcat/commit/2b33a706a1bf80b1cc4c7b26449a371f2dc0ab99)]
- 🐛 修复 firefox service worker csp 的问题 [#533](https://github.com/scriptscat/scriptcat/issues/533) [[a1cb2e0](https://github.com/scriptscat/scriptcat/commit/a1cb2e0318f64a7362ed7b25e29218bfb35fcde5)]
- 🐛 修复下拉列表选项显示不全的问题 ([#552](https://github.com/scriptscat/scriptcat/issues/552)) [[73d6c65](https://github.com/scriptscat/scriptcat/commit/73d6c65bea67ce4ab382ab8619df2859738421c3)]
- 🐛 设置 monaco 为英文 [[77c872d](https://github.com/scriptscat/scriptcat/commit/77c872d233c371ead9e152477cfce9c690ec2fb1)]

### Miscellaneous

- 🌐 处理翻译问题 [[d0ab618](https://github.com/scriptscat/scriptcat/commit/d0ab61816ffe085beb5244180f0ada4b557dd5de)]
