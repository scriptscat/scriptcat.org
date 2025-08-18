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
- ✨ 支持 GoogleDrive ([#490](https://github.com/scriptscat/scriptcat/issues/490)) [[dc38f7f](https://github.com/scriptscat/scriptcat/commit/dc38f7f38fca13febe197a3ced4e817cacec5920)] (by @wangyizhi)

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
