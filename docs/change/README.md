---
id: change
---

# 更新日志

脚本猫的版本发布主要分为两条分支: 正式版本与预发布版本.

预发布版本是在正式发布之前的版本.它们通常用于测试新功能,预发布版本的版本号包含一个预发布标识符,例如:
`1.0.0-beta.1`.

你可以从[Release](https://github.com/scriptscat/scriptcat/releases)页或者下面的扩展商店页中获取预发布版本

- [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/scriptcat-pre/)

由于 Chrome 系列浏览器无法支持 MV2 的扩展上传,先采用群的方式进行通知

- [ScriptCat Beta 群 124771063](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=ig72L7KKqkj0rngxuYdP3bPb2p256Oy4&authKey=fR%2BO6kgwxv0mRmxUnH91SNf0HnUPzooacVeMbxmFXKcfycgPKMgbZlH5KvVrK40X&noverify=0&group_code=124771063)

另外除了预发布以外,脚本猫每次代码提交合并到主分支后都会在[Github Action](https://github.com/scriptscat/scriptcat/actions/workflows/build.yaml)上打包构建一次扩展,如果你想体验最新或者修复的内容可以前往[Github Action](https://github.com/scriptscat/scriptcat/actions/workflows/build.yaml)页进行下载.

<a name="0.16.5"></a>

## 0.16.5 (2024-07-12)

### Fixed

- 🐛 修复chrome v127下GM_addElement相关问题 [#299](https://github.com/scriptscat/scriptcat/issues/299) [[cd749af](https://github.com/scriptscat/scriptcat/commit/cd749afbe98a92016a22c5f7fee2a9d40fd8f815)]

<a name="0.16.4"></a>

## 0.16.4 (2024-07-10)

### Added

- ✨ 脚本列表页显示脚本 icon [#292](https://github.com/scriptscat/scriptcat/issues/292) [[1e82fe4](https://github.com/scriptscat/scriptcat/commit/1e82fe4e1e9f71bf202622dedf9adc2d3dcbf13b)]
- ✨ 新建脚本支持导入本地文件 [#294](https://github.com/scriptscat/scriptcat/issues/294) [[faeb30c](https://github.com/scriptscat/scriptcat/commit/faeb30c2803db8873cc186a28008c5cc9c6b5393)]

### Fixed

- 🐛 修复 English 下列宽问题 [#297](https://github.com/scriptscat/scriptcat/issues/297) [[fcfb3ac](https://github.com/scriptscat/scriptcat/commit/fcfb3ac0e3378b9607ee29593000e660edc4b955)]
- 🐛 修复删除 Userconfig 后主页还是会显示的问题 [#285](https://github.com/scriptscat/scriptcat/issues/285) [[dd3b1b4](https://github.com/scriptscat/scriptcat/commit/dd3b1b4f9012eecd52f5f27d8f6f4fb24c9888c4)]
- 🐛 修复 firefox 环境下 GM_addElement 的问题 [#291](https://github.com/scriptscat/scriptcat/issues/291) [[013a4f6](https://github.com/scriptscat/scriptcat/commit/013a4f614e62beeab6e0696fd09c11dcea9e0607)]
- 🐛 修复排序后点击错乱的问题 [#283](https://github.com/scriptscat/scriptcat/issues/283) [[8a05f00](https://github.com/scriptscat/scriptcat/commit/8a05f00c2922c2382bae9c46a3d49a08223b4de5)]
- 🐛 处理页面回退 [#277](https://github.com/scriptscat/scriptcat/issues/277) [[f6f0a80](https://github.com/scriptscat/scriptcat/commit/f6f0a80d10ccc0597fb7128fdf125bbd16aa1c56)]
- 🐛 修复 RegExp 内容被覆盖的问题 [#293](https://github.com/scriptscat/scriptcat/issues/293) [#289](https://github.com/scriptscat/scriptcat/issues/289) [[3ef9fbc](https://github.com/scriptscat/scriptcat/commit/3ef9fbcaf3d7b261792476f2486dc4b4a002bead)]

<a name="0.16.3"></a>

## 0.16.3 (2024-05-01)

### Fixed

- 🐛 修复 GM.\*兼容问题 [#274](https://github.com/scriptscat/scriptcat/issues/274) [[389e6d2](https://github.com/scriptscat/scriptcat/commit/389e6d27ff697312a716a2a152de9492b23d4f3a)]
- 🐛 处理 on 事件的移除 [[c69c208](https://github.com/scriptscat/scriptcat/commit/c69c2085c410f1a2e65c221917353f13c4f1bc71)]
- 🐛 修复 header 设置导致的请求失败 [[b5c2910](https://github.com/scriptscat/scriptcat/commit/b5c2910a526dbf785e481681956a8aa9efe2a20c)]
- 🐛 处理全局属性 [[ff3b721](https://github.com/scriptscat/scriptcat/commit/ff3b72192efbe8712479d9460a4f1c0bf45a6e0e)]
- 🐛 修复 window 穿透问题 [#273](https://github.com/scriptscat/scriptcat/issues/273) [[577f7e5](https://github.com/scriptscat/scriptcat/commit/577f7e523b525f38bb9d9d3dddae5921b88c3e9a)]
- 🐛 修复 hasOwnProperty 返回 undefined 的问题 [#272](https://github.com/scriptscat/scriptcat/issues/272) [[b93be76](https://github.com/scriptscat/scriptcat/commit/b93be76c684ba0a9820deff65cf9d2baaa007e18)]

### Miscellaneous

- 🌐 扩展名和描述 i18n [[03987b0](https://github.com/scriptscat/scriptcat/commit/03987b0604daef7168b73ad80337af0e8c8c5549)]
- 👷 修复 firefox 扩展包构建 [[328f84f](https://github.com/scriptscat/scriptcat/commit/328f84f2a0b3523a2cb40d16b72d4110e3cd255d)]

<a name="0.16.2"></a>

## 0.16.2 (2024-04-22)

> 后续主要精力将放在`Manifest V3`的支持上，本次版本主要是一些小的改进与修复，详细功能演示请看：[v0.16.2](./v0.16#v0162)

### Added

- ✨ 菜单自动隐藏配置 [#269](https://github.com/scriptscat/scriptcat/issues/269) [[3e8f2ce](https://github.com/scriptscat/scriptcat/commit/3e8f2cee095ce25395f49d2bfce3ccf199c1d880)]
- ✨ 脚本列表添加列调整隐藏操作 [#269](https://github.com/scriptscat/scriptcat/issues/269) [[b8f679d](https://github.com/scriptscat/scriptcat/commit/b8f679df134448e0f3fca7f43795917f225c8b05)]
- ✅ 修复测试问题 [[04dbdb2](https://github.com/scriptscat/scriptcat/commit/04dbdb2d8030c035972ab077d63f8ef79b3d0621)]

### Fixed

- ✏️ 修复引导拼写错误 [#268](https://github.com/scriptscat/scriptcat/issues/268) [[ca742c3](https://github.com/scriptscat/scriptcat/commit/ca742c3189c709011797e681b9aa1740fa1aedb8)]
- 🐛 修复百度网盘删除文件失败的问题 [[e516058](https://github.com/scriptscat/scriptcat/commit/e516058b8f7e5e0dd4bda39c0ea6d332a679bbdd)]
- 🐛 修复同步功能删除会恢复的问题 [[75c4522](https://github.com/scriptscat/scriptcat/commit/75c452284d4e8676a42291e2b04d4a9f7785db3d)]

### Miscellaneous

- 👷 处理 edge 商店发布不能包含压缩文件的问题 [[e5b2e3b](https://github.com/scriptscat/scriptcat/commit/e5b2e3b2df73cfb51a2a45ee44a0e5e1928a8a29)]

**Full Changelog**: [v0.16.1...v0.16.2](https://github.com/scriptscat/scriptcat/compare/v0.16.1...v0.16.2)

<a name="0.16.1"></a>

## 0.16.1 (2024-02-26)

### Added

- ✨ 最后更新添加排序功能 [#250](https://github.com/scriptscat/scriptcat/issues/250) [[ded11ca](https://github.com/scriptscat/scriptcat/commit/ded11cafaa31e7f5ec43d4f96f6db41cfa8c7ff9)]

### Changed

- ⚡ 优化名称搜索 [#262](https://github.com/scriptscat/scriptcat/issues/262) [[08778ed](https://github.com/scriptscat/scriptcat/commit/08778ed945a5887c93ba24c816f4d8febdf3ac1e)]

### Fixed

- 🐛 修复脚本删除同步失败的问题 [#254](https://github.com/scriptscat/scriptcat/issues/254) [[bf68abb](https://github.com/scriptscat/scriptcat/commit/bf68abb9b7bffe3c8658d361c92e850b0c555953)]
- 🐛 修复订阅脚本重复安装的问题 [#257](https://github.com/scriptscat/scriptcat/issues/257) [[57bc6f9](https://github.com/scriptscat/scriptcat/commit/57bc6f9390a33400730eb7c261cf7c23c5f3532a)]
- 🐛 修复 toString.call(window)返回内容不正确 [#260](https://github.com/scriptscat/scriptcat/issues/260) [[2288dae](https://github.com/scriptscat/scriptcat/commit/2288dae8d5589c97a8d2b1983fb9b97df05df04e)]
- 🐛 修复并发 setValue 导致的数据错误 [#249](https://github.com/scriptscat/scriptcat/issues/249) [[0b4d241](https://github.com/scriptscat/scriptcat/commit/0b4d2413382d0b8c5671eb6685808c77deaf9117)]
- 🐛 修复 vscode 同步时文件路径变更导致重复同步 [#247](https://github.com/scriptscat/scriptcat/issues/247) [[a6efaa7](https://github.com/scriptscat/scriptcat/commit/a6efaa77fe34d5f1b836e9e56e7e6c358af7e85d)]
- 🐛 新增脚本支持顶级 await by @DreamNya [#258](https://github.com/scriptscat/scriptcat/issues/258) [[3a37af2](https://github.com/scriptscat/scriptcat/commit/3a37af2d885dc133d4ae3f82b7f9ca49d0279a5f)]

**Full Changelog**: [v0.16.0...v0.16.1](https://github.com/scriptscat/scriptcat/compare/v0.16.0...v0.16.1)

<a name="0.16.0"></a>

## 0.16.0 (2023-12-21)

### Added

- ✨ 新增 GM_info 元数据 connects [#245](https://github.com/scriptscat/scriptcat/issues/245) [[c04a829](https://github.com/scriptscat/scriptcat/commit/c04a82906192ba29580e51d90b112435d44d2418)]

### Fixed

- 🐛 修复语言切换&quot;最后更新&quot;字段翻译不同步的问题 [#241](https://github.com/scriptscat/scriptcat/issues/241) [[2d178ac](https://github.com/scriptscat/scriptcat/commit/2d178acd29054f1064063f7b58eef6dfadb3ba5c)]
- 🐛 修复@grant GM.\*声明问题 [#243](https://github.com/scriptscat/scriptcat/issues/243) [[6d7efa6](https://github.com/scriptscat/scriptcat/commit/6d7efa6b5051dcc947ffb40727febd1b585ca428)]
- 🐛 修复@match 端口匹配错误 [#244](https://github.com/scriptscat/scriptcat/issues/244) [[2e378c3](https://github.com/scriptscat/scriptcat/commit/2e378c35b5d20280a3e26a540a61b31629d358ac)]
- 🐛 修复往 global 写入 Symbol 属性问题 [[d8bb2f1](https://github.com/scriptscat/scriptcat/commit/d8bb2f1c93c9689dd4d6458a3f4564d4acb67be4)]
- 🐛 修复引入的 lodash 与页面冲突问题 [[96280a2](https://github.com/scriptscat/scriptcat/commit/96280a24e284ed62654097573c14e574996e2a5a)]

<a name="0.16.0-beta"></a>

## 0.16.0-beta (2023-11-28)

### Added

- ✨ 添加 i18n 所见即所得模式 [[460088a](https://github.com/scriptscat/scriptcat/commit/460088a27ee20036aad27d5eccabb3311fc71863)]
- ✨ 优化语言选择 [[5807a2a](https://github.com/scriptscat/scriptcat/commit/5807a2af0aa62a945e273a677597f7c607dcd9d9)]
- ✨ 使用 crowdin 管理翻译 [[c62a559](https://github.com/scriptscat/scriptcat/commit/c62a5593c5d57feb8239e50ee90aaa3f3fc309b4)]

### Changed

- 💄 调整 Badge 颜色为灰色 [[97c06f5](https://github.com/scriptscat/scriptcat/commit/97c06f552133b4fba3b2d6f27cf5b39f3d1c3323)]

### Fixed

- 🐛 修复 onedrive 空间问题 [#224](https://github.com/scriptscat/scriptcat/issues/224) [[0d10588](https://github.com/scriptscat/scriptcat/commit/0d1058818538a0764e9c55b3842480a202230231)]
- 🐛 处理 onedrive e5 账号文件同步文件 [#224](https://github.com/scriptscat/scriptcat/issues/224) [[dc56ec6](https://github.com/scriptscat/scriptcat/commit/dc56ec623ad8b00976aef71df81fffdd41863180)]
- 🐛 修复 gf logo 问题 [[092517e](https://github.com/scriptscat/scriptcat/commit/092517ebb84e9309c7577fac05ce84f6cb334d9c)]
- 🐛 修复不同语言下 table 的宽度问题 ([#236](https://github.com/scriptscat/scriptcat/issues/236)) [[3eb84b5](https://github.com/scriptscat/scriptcat/commit/3eb84b51ad69ed5ed74181774b6a356b30fa8c36)] by [@duoluodexiaoxiaoyuan](https://github.com/duoluodexiaoxiaoyuan)
- 🐛 修复新的注入方式导致 dev 模式无法正常运行的问题 [[a96ab94](https://github.com/scriptscat/scriptcat/commit/a96ab947cfa1321adb7a560f922a1b5f85ffb21e)]
- 🐛 优化脚本运行框架注入速度 [#232](https://github.com/scriptscat/scriptcat/issues/232) [[4cf6450](https://github.com/scriptscat/scriptcat/commit/4cf6450debe4b3a6b773459559da486f1863298f)]
- 🐛 默认不传 origin header [#233](https://github.com/scriptscat/scriptcat/issues/233) [[9d4ebcc](https://github.com/scriptscat/scriptcat/commit/9d4ebcc7711475696613b1ed7b42256046371198)]

<a name="0.15.1"></a>

## 0.15.1 (2023-08-30)

### Added

- ✨ 优化授权管理 [[5eb7c5a](https://github.com/scriptscat/scriptcat/commit/5eb7c5aa3b67c9dba20712b8c69f83cd0b3ab302)]

### Changed

- ⬆️ 升级 cron 包 fixed: [#152](https://github.com/scriptscat/scriptcat/issues/152) [[0c43741](https://github.com/scriptscat/scriptcat/commit/0c4374196ebe8b29ae1a9c61353f6ff48d0d8843)]

### Fixed

- 🐛 修复重定向后的携带#号的 finalUrl 问题 [[715639e](https://github.com/scriptscat/scriptcat/commit/715639e81ecc318b1432cd15b70cc0f89d99a007)]
- 🐛 修复 CAT_fileStorage 网络错误也会导致配置实现的问题 fixed [#224](https://github.com/scriptscat/scriptcat/issues/224) [[c309832](https://github.com/scriptscat/scriptcat/commit/c309832a7da4b110b43537ef53518df1ca1e12b2)]
- 🐛 忽略 webdav 创建目录错误 [#213](https://github.com/scriptscat/scriptcat/issues/213) [[890076a](https://github.com/scriptscat/scriptcat/commit/890076a7416513c867f1f2aef7c9929aa899894e)]

<a name="0.15.0"></a>

## 0.15.0 (2023-08-15)

> 添加了新手引导

### Added

- ✨ 首次进入时打开引导与更新时打开更新日志 [[f400658](https://github.com/scriptscat/scriptcat/commit/f40065815c75a046e752168d15e1718ba91bceff)]
- ✨ 新手引导 [[f355efb](https://github.com/scriptscat/scriptcat/commit/f355efbc7a5f36d7a6c0352e7477cd1a14c781e1)]

### Fixed

- 🐛 优化同步错误处理 [[cc5e22d](https://github.com/scriptscat/scriptcat/commit/cc5e22d1186395d10651e2d3a37bc44659cfd559)]

<a name="0.15.0-beta"></a>

## 0.15.0-beta (2023-07-31)

> 优化为主的一个版本

### Added

- ✨ 脚本名支持 i18n ([#221](https://github.com/scriptscat/scriptcat/issues/221)) [[968122d](https://github.com/scriptscat/scriptcat/commit/968122df58592fd29b4a82b665104dd26eb8d319)] ([@LiWeny16](https://github.com/LiWeny16))
- ✨ 脚本批量更新 ([#219](https://github.com/scriptscat/scriptcat/issues/219)) [[8d442ac](https://github.com/scriptscat/scriptcat/commit/8d442ac5c9de2ab7d6694d4b15afdf572291d75d)] ([@LiWeny16](https://github.com/LiWeny16))

### Fixed

- 🐛 优化同步报错问题 [#222](https://github.com/scriptscat/scriptcat/issues/222) [[dd05752](https://github.com/scriptscat/scriptcat/commit/dd0575268638e4009d3fb6c5d389ce836ad761a2)]
- 🐛 修复常量值被改变的问题 [#214](https://github.com/scriptscat/scriptcat/issues/214) [[63d3061](https://github.com/scriptscat/scriptcat/commit/63d3061a755d625dca853a776b7f10507cba8eda)]
- 🐛 修复 GM_addElement 父节点参数为 shadowDom 错误的问题 [#214](https://github.com/scriptscat/scriptcat/issues/214) [[0bbe7ce](https://github.com/scriptscat/scriptcat/commit/0bbe7ce4e4745a21aefb05f5a8633382aaf3ffa0)]
- 🐛 修复列表排序问题 [[f1527b0](https://github.com/scriptscat/scriptcat/commit/f1527b0e814201d31c4b06b93a2ab613b46379bd)]
- 🐛 修复 GM_openInTab loadInBackground 参数问题 [[1f29bfc](https://github.com/scriptscat/scriptcat/commit/1f29bfc24dd00b418acb2d52691f847fddec5f27)]
- 🐛 修复 xml 文档无法加载脚本的问题 [#211](https://github.com/scriptscat/scriptcat/issues/211) [[ef7efbd](https://github.com/scriptscat/scriptcat/commit/ef7efbdd1da3011054edc7ff6e39693033a538b1)]
- 🐛 修复网盘同步脚本覆盖问题 [[e4bd5d4](https://github.com/scriptscat/scriptcat/commit/e4bd5d441c37f2a32b6854c63a7ebcd6cd719abe)]
- 🐛 修复后台脚本无法控制 setInterval 停止的问题 [#207](https://github.com/scriptscat/scriptcat/issues/207) [[d059ef7](https://github.com/scriptscat/scriptcat/commit/d059ef7ef9fa4b097b4a3682f36dc973e82cf61e)]
- 🐛 修复网盘登录掉了之后无法重新登录的问题 [#210](https://github.com/scriptscat/scriptcat/issues/210) [[963a6d2](https://github.com/scriptscat/scriptcat/commit/963a6d289afa84c43b43301e1764bc10cd4ccaa7)]
- 🐛 修复脚本列表页一些警告问题 [[fc6d14d](https://github.com/scriptscat/scriptcat/commit/fc6d14d07eb74f6008a8b2bee3be4d79cf85e610)]
- 🐛 修复 vscode 重连问题与某些情况下停止脚本无效的问题 [[bb7d4d5](https://github.com/scriptscat/scriptcat/commit/bb7d4d501e18730fe359fa6bc01550be68849043)]
- 🐛 修复 GM_openInTab active 参数始终为 true 的问题 [[274ef59](https://github.com/scriptscat/scriptcat/commit/274ef59fb7bafe951e120c63536ba7b94aea30e7)]
- 🐛 修复更新日志通知不自动关闭 [[7a7e221](https://github.com/scriptscat/scriptcat/commit/7a7e2212789d219f64b394860cf462b48b81f341)]

<a name="0.14.1"></a>

## 0.14.1 (2023-06-26)

> 修复几个比较严重的问题，且影响版本广
> 反复储存 oldScript 对象，数据量过大时可能导致脚本加载失败

### Added

- ✨ 将 UserConfig 暴露至 GM_info 对象中 ([#206](https://github.com/scriptscat/scriptcat/issues/206)) [[3de39e7](https://github.com/scriptscat/scriptcat/commit/3de39e78fefefafefdd4efb3e03917cb55f4e4cc)] ([@DreamNya](https://github.com/DreamNya))

### Fixed

- 🐛 修复 vscode 连接问题与同步问题 [[06c3ef7](https://github.com/scriptscat/scriptcat/commit/06c3ef79d5b59df4268dd8388bf798ef8284c42a)]
- 🐛 修复 GM_openInTab 默认在后台打开页面的问题 [[7d2a5b2](https://github.com/scriptscat/scriptcat/commit/7d2a5b2a4ffb6d3023ee85ce1b9e7e629ac9d774)]
- 🐛 修复反复储存 oldScript 对象问题 [[4832a80](https://github.com/scriptscat/scriptcat/commit/4832a80b5a3c553563367892adcdf85e9832fc98)]

<a name="0.14.0"></a>

## 0.14.0 (2023-06-20)

> 🎉🎉🎉 脚本猫开始支持多国语言，向国际化脚本管理器迈出第一步！ 💥💥💥

### Fixed

- 🐛 修复更新时间 i18n 问题 [[40bc8da](https://github.com/scriptscat/scriptcat/commit/40bc8dacb732343a0df7440ad51012dd5bed6b28)]
- 🐛 修复 RegExp 需要全局对象的问题 fixes [#203](https://github.com/scriptscat/scriptcat/issues/203) [[705641b](https://github.com/scriptscat/scriptcat/commit/705641b363d8623ae55f6b4d81cf7dcbc5f0945d)]

### Miscellaneous

- 🌐 add english readme ([#204](https://github.com/scriptscat/scriptcat/issues/204)) [[e56d4fc](https://github.com/scriptscat/scriptcat/commit/e56d4fc6bf44cd59162e5adf9926459ec33f9217)]
- 🌐 调整无数据的文案与 WebDAV 账号密码文案 [[9a82eac](https://github.com/scriptscat/scriptcat/commit/9a82eac94f921cc361cc9bb97431d5225599af0a)]

<a name="0.14.0-beta.1"></a>

## 0.14.0-beta.1 (2023-06-16)

> 🎉🎉🎉 脚本猫开始支持多国语言，向国际化脚本管理器迈出第一步！ 💥💥💥

### Added

- ✨ userconfig textarea 支持 rows 参数 [[a2003a0](https://github.com/scriptscat/scriptcat/commit/a2003a0ca7c9bd00b582ddecbff4cbf37eef5337)]

### Fixed

- 🐛 修复后台脚本状态显示错误的问题 [[d997dc7](https://github.com/scriptscat/scriptcat/commit/d997dc713026a40147503eda1220b5bae0979542)]

### Miscellaneous

- 🌐 i18n 国际化 [#188](https://github.com/scriptscat/scriptcat/issues/188) ([#202](https://github.com/scriptscat/scriptcat/issues/202)) [[d0e6ef0](https://github.com/scriptscat/scriptcat/commit/d0e6ef07b33fe24416212079dfa51ed8a2cb6827)]

<a name="0.14.0-beta"></a>

## 0.14.0-beta (2023-06-14)

### Added

- ✨ 后台脚本增加重试逻辑 [[16551df](https://github.com/scriptscat/scriptcat/commit/16551df926f5e39e8b9071d106b86b6499d4b090)]
- ✨ UserConfig 支持 TextArea [[fc2134b](https://github.com/scriptscat/scriptcat/commit/fc2134bf981b69765cdc32afbf76a9909d1c6ebf)]
- ✨ 支持暴力猴的导入格式 [[1398e59](https://github.com/scriptscat/scriptcat/commit/1398e5954c00db79c44ea5413dec9b05078971a3)]
- ✨ match 和更新 URL 管理 [[a805dde](https://github.com/scriptscat/scriptcat/commit/a805ddebbee761ebcf21550b787ec68c737fc9fa)]
- ✨ fileStorage API 改进 [#138](https://github.com/scriptscat/scriptcat/issues/138) ([#199](https://github.com/scriptscat/scriptcat/issues/199)) [[707d391](https://github.com/scriptscat/scriptcat/commit/707d3910a3b85d846dbcc5b27ffcec0bb117acc2)]
- ✨ 脚本列表批量操作 [#164](https://github.com/scriptscat/scriptcat/issues/164) [#175](https://github.com/scriptscat/scriptcat/issues/175) [[af0ba88](https://github.com/scriptscat/scriptcat/commit/af0ba8878355d55bd1a1d4d83d9d7e2b23352fcc)]

### Fixed

- 🐛 修复 tools 页面滚动条问题 ([#201](https://github.com/scriptscat/scriptcat/issues/201)) [[f3493ae](https://github.com/scriptscat/scriptcat/commit/f3493aed46166b6d0e541c7145fb6d8576968150)]
- 🐛 修复 GM_log 打印对象时报错 [[4a6516d](https://github.com/scriptscat/scriptcat/commit/4a6516df950caf024a624dea740c4595d0a93e4a)]
- 🐛 修复 FormItem 错误导致的用户配置、储存管理等功能无法编辑的问题 [[243f90a](https://github.com/scriptscat/scriptcat/commit/243f90ac9b922183325dda0aa8b0c7df63fb8353)]
- 🐛 修复某些.user.js url 加载错误 [[2596617](https://github.com/scriptscat/scriptcat/commit/2596617e34261e05aaa888e928c1a0f5bb0e3b12)]

<a name="0.13.1"></a>

## 0.13.1 (2023-06-02)

### Fixed

- 🐛 优化 options 页 header， 新增外部链接 [[951833e](https://github.com/scriptscat/scriptcat/commit/951833eab5368fc179a0192f4513a8edc39fdf86)]
- 🐛 修复沙盒加载问题 [#195](https://github.com/scriptscat/scriptcat/issues/195) [[4e1c904](https://github.com/scriptscat/scriptcat/commit/4e1c904be1595ff48ca8ba414d8478caaf67079c)]
- 🐛 修复沙盒默认函数没有 bind 的问题 [[81e46b1](https://github.com/scriptscat/scriptcat/commit/81e46b1f147b7e98120cd53ecdaa0528c65cc6bf)]
- 🐛 修复 firefox csp 策略问题 [#170](https://github.com/scriptscat/scriptcat/issues/170) [[d310275](https://github.com/scriptscat/scriptcat/commit/d3102754bed50b1d1e79d63eaa1f78d1c9345fc4)]

<a name="0.13.0"></a>

## 0.13.0 (2023-05-27)

### Fixed

- 🐛 修复数据导入 tm 问题 [#187](https://github.com/scriptscat/scriptcat/issues/187) [[5546cc1](https://github.com/scriptscat/scriptcat/commit/5546cc1e4aae8ee7f831901431a120bcd7933e6d)]
- 🐛 修复特殊属性导致的问题 [#190](https://github.com/scriptscat/scriptcat/issues/190) [[c453d21](https://github.com/scriptscat/scriptcat/commit/c453d21e409963e85e607acaa46aaef02e0d2362)]
- 🐛 修复 object 类型的值变更会通知的问题 [[146c9ed](https://github.com/scriptscat/scriptcat/commit/146c9ed6cae8fd18c285a806dceed0f20553617d)]
- 🐛 修复支持无 namespace [[e0a9446](https://github.com/scriptscat/scriptcat/commit/e0a944639c26d5fb7a86f35ab5f5eeb050e4133b)]

<a name="0.13.0-beta"></a>

## 0.13.0-beta (2023-05-21)

### Added

- ✨ 授权管理 [#184](https://github.com/scriptscat/scriptcat/issues/184) [[002e443](https://github.com/scriptscat/scriptcat/commit/002e443d4aa42385fbfa57865b9bf0af60cc95d6)]
- ✨ 打开备份目录 [#182](https://github.com/scriptscat/scriptcat/issues/182) [[7274e40](https://github.com/scriptscat/scriptcat/commit/7274e40893619249d9a775e63eecae4a8c971852)]
- ✨ 一键关闭所有脚本按钮 [#130](https://github.com/scriptscat/scriptcat/issues/130) [[27187a6](https://github.com/scriptscat/scriptcat/commit/27187a677115b15f762e9e98a20a8d6432fd1058)]
- ✨ 优化加载逻辑 [#135](https://github.com/scriptscat/scriptcat/issues/135) [[5b9c37d](https://github.com/scriptscat/scriptcat/commit/5b9c37dfa488895978f79653eb3496cbd6b90511)]
- ✨ 新增 iframe 运行计次 [#167](https://github.com/scriptscat/scriptcat/issues/167) [[0a3ae5a](https://github.com/scriptscat/scriptcat/commit/0a3ae5ae042294e5274c964466569c379ac6d181)]
- ✨ 日志定时清理逻辑 [[81587a0](https://github.com/scriptscat/scriptcat/commit/81587a05c65b03c45ebd837c0ba5249a192259f8)]
- ✨ 新增脚本编辑器菜单快捷键显示 [[f9e92b8](https://github.com/scriptscat/scriptcat/commit/f9e92b860980d40c91840e88233b6c1209a0c1dc)]
- ✨ 新增脚本编辑器脚本另存为功能 [[7790137](https://github.com/scriptscat/scriptcat/commit/77901379235482e07a40de543119631d4b57bf99)]
- ✨ 添加 GM_openInTab 新可选功能 [[f2b6722](https://github.com/scriptscat/scriptcat/commit/f2b67222b1179095db0ac04d8c7a1db78ce4e951)]
- ✨ 增加 crontab 悬浮提示 [[8d6ba52](https://github.com/scriptscat/scriptcat/commit/8d6ba52f4515beb25ed4440f00d977e2ccb3ae7f)]
- ✨ eslint quickfix [[b0e9abe](https://github.com/scriptscat/scriptcat/commit/b0e9abee7fe0d92f138e7ff5fb6f0ab608ee89e3)]

### Fixed

- 🐛 修复 debug 值问题 [#163](https://github.com/scriptscat/scriptcat/issues/163) [[826d164](https://github.com/scriptscat/scriptcat/commit/826d164f44ee0d5e45cd71cca97bc8594d0a8318)]
- 🐛 修复同步删除问题 [#143](https://github.com/scriptscat/scriptcat/issues/143) [[021e6db](https://github.com/scriptscat/scriptcat/commit/021e6db15eda2b6276fc18372eb4ac7a2b965bb9)]
- 🐛 修复特殊 function 判断 [[43ee0de](https://github.com/scriptscat/scriptcat/commit/43ee0de9f3d18304a667d01f5601fcd2fb68cc8d)]
- 🐛 修复沙盒隔离问题 [#189](https://github.com/scriptscat/scriptcat/issues/189) [[647de2e](https://github.com/scriptscat/scriptcat/commit/647de2ebc63162204a4bad164938e14e332d77a4)]
- 🐛 添加数据校验 [#161](https://github.com/scriptscat/scriptcat/issues/161) [[2a02ecb](https://github.com/scriptscat/scriptcat/commit/2a02ecb0dd8497c637c5c85af7c7f9c3e9ce7ac3)]
- 🐛 修复排序逻辑问题 [#164](https://github.com/scriptscat/scriptcat/issues/164) [[97c0ac0](https://github.com/scriptscat/scriptcat/commit/97c0ac03561dedd2893fb6d41aefce922df7f832)]
- 🐛 修复脚本更新会导致自定义配置失效的问题 [#174](https://github.com/scriptscat/scriptcat/issues/174) [[aa2ace1](https://github.com/scriptscat/scriptcat/commit/aa2ace198e06199f9a59fe16c467bb6c9b6f0ff9)]
- 🐛 修复 vscode 正常断开后不重新连接的问题 [#176](https://github.com/scriptscat/scriptcat/issues/176) [[f2df2d4](https://github.com/scriptscat/scriptcat/commit/f2df2d40a08289ce0c0fe52c4f3e8fb2c947257a)]
- 🐛 修复 chrome.downloads.download 错误捕获 [[7d4ad2d](https://github.com/scriptscat/scriptcat/commit/7d4ad2d6307ec8d67f310c6e73c1259934f738b1)]

### Miscellaneous

- 优化 useOpen 标签关闭监听方式 [[4ab0d58](https://github.com/scriptscat/scriptcat/commit/4ab0d58a21569d0d9e790e4a3b2ebaa237f2f5ea)]
- 优化 ESLint [[e927f2c](https://github.com/scriptscat/scriptcat/commit/e927f2cbfc2b0b643170aa8b7a13cc6eb28d6d36)]
- 更新monaco@0.37.1，修复多编辑器快捷键冲突 [[348fd67](https://github.com/scriptscat/scriptcat/commit/348fd67c861ece3e658e6f6720d9bc63312276fe)]
- 更新依赖修复 Windows 本地编译错误 [[392e4e6](https://github.com/scriptscat/scriptcat/commit/392e4e682769423f4446dd4a5138a1db89a1c37a)]

<a name="0.12.0"></a>

## 0.12.0 (2023-03-27)

### Added

- ✨ 添加安装脚本成功后的提示与资源过期机制 [#158](https://github.com/scriptscat/scriptcat/issues/158) [[0794cd3](https://github.com/scriptscat/scriptcat/commit/0794cd3be1a54e02529ddfc722a4cf457883952c)]

### Fixed

- 🐛 修复某些以.user.js 为后缀的网页识别成安装脚本 [[f094d80](https://github.com/scriptscat/scriptcat/commit/f094d80dd616995c8ffdbc42f9be52b8fe25b493)]
- 🐛 修复没有菜单时不显示主菜单 [#159](https://github.com/scriptscat/scriptcat/issues/159) [[4c4b15f](https://github.com/scriptscat/scriptcat/commit/4c4b15f46586e5e3b71e16fa337d4bdb6c9eda10)]
- 🐛 修复代码编辑框不跟随暗夜模式变化的问题与优化 id 列为 sort 列 [[df26bdf](https://github.com/scriptscat/scriptcat/commit/df26bdfa734796719b7190e75ad2d1038abc2dfd)]

<a name="0.12.0-beta"></a>

## 0.12.0-beta (2023-03-19)

### Added

- ✨ 根据安装 url 生成安装主页按钮 [#134](https://github.com/scriptscat/scriptcat/issues/134) [[789bda2](https://github.com/scriptscat/scriptcat/commit/789bda2d97b0b02b9ccb886d5c73e0530447bdc6)]
- ✨ 排除指定网址执行 [#144](https://github.com/scriptscat/scriptcat/issues/144) [[2d5573f](https://github.com/scriptscat/scriptcat/commit/2d5573ffeb76ae479f3cfd62d3766c00532f93b1)]

### Changed

- ⚡ 优化获取脚本逻辑 [#134](https://github.com/scriptscat/scriptcat/issues/134) [[81a589e](https://github.com/scriptscat/scriptcat/commit/81a589ea2c4ac46e88cc029b02add095623738e6)]
- ⚡ 优化脚本储存数据过大导致的卡顿问题 [[dbdbec1](https://github.com/scriptscat/scriptcat/commit/dbdbec191aaa6e3f9bda8609feb0e637f160946f)]

### Fixed

- 🐛 修复菜单多次注册的问题 [#129](https://github.com/scriptscat/scriptcat/issues/129) [[9515269](https://github.com/scriptscat/scriptcat/commit/951526918c03dab2e18f37520e6d58b3503979c0)]
- 🐛 修复数据清除错误 [[e3fbaf5](https://github.com/scriptscat/scriptcat/commit/e3fbaf585bf2e845ccee5f3273afb195cc26a356)]
- 🐛 修复 iframe 中运行不在 popup 页显示的问题与添加脚本运行次数 [#154](https://github.com/scriptscat/scriptcat/issues/154) [[b5670c9](https://github.com/scriptscat/scriptcat/commit/b5670c96991a8a2256f577a063f9b0c6e0186823)]
- 🐛 修复 GM_menu 问题 [#153](https://github.com/scriptscat/scriptcat/issues/153) [[4d6eafe](https://github.com/scriptscat/scriptcat/commit/4d6eafe531ca57799e288812df8c96130c112365)]

<a name="0.11.3"></a>

## 0.11.3 (2023-03-03)

### Fixed

- 🐛 修复沙盒 context 关键字能访问的问题 [[dbd9ad4](https://github.com/scriptscat/scriptcat/commit/dbd9ad405cea50eefe4614fea5c46426c3a9abe0)]
- 🐛 修复沙盒 context 作用域问题 [[3d15519](https://github.com/scriptscat/scriptcat/commit/3d1551926b3b6954906467297ca4a9a5905cf945)]
- 🐛 修复沙盒变量 undefined 问题 [[2dcf9c2](https://github.com/scriptscat/scriptcat/commit/2dcf9c299faa90304dc87d736d94f4196fd522a9)]
- 🐛 修复定时脚本计时器停止错误 [#147](https://github.com/scriptscat/scriptcat/issues/147) [#149](https://github.com/scriptscat/scriptcat/issues/149) [[f9cb6dc](https://github.com/scriptscat/scriptcat/commit/f9cb6dc63da799943fb302540a1e42a53e328ede)]
- 🐛 修复用户动态配置 [[e67883e](https://github.com/scriptscat/scriptcat/commit/e67883edebe937bf56a064e7d568a0530621b484)]

<a name="0.11.2"></a>

## 0.11.2 (2023-02-07)

### Added

- ✨ 支持安装本地脚本 [[eb82fa9](https://github.com/scriptscat/scriptcat/commit/eb82fa9b154dbc49d40e00d7cfcabf9c7c7898be)]

### Fixed

- 🐛 修复 uuid 导致的同步问题 [#141](https://github.com/scriptscat/scriptcat/issues/141) [#133](https://github.com/scriptscat/scriptcat/issues/133) [[9b70673](https://github.com/scriptscat/scriptcat/commit/9b70673032650284d551429d232a11654654ad7f)]
- 🐛 优化系统弹出更新逻辑延长至 60s 并添加停止逻辑 [#137](https://github.com/scriptscat/scriptcat/issues/137) [[38921da](https://github.com/scriptscat/scriptcat/commit/38921da3555b78f65f42d16aeb6174ca0543e0af)]
- 🐛 修复 user.js?\*链接无法触发安装与优化点击脚本名即进入编辑 [#142](https://github.com/scriptscat/scriptcat/issues/142) [[4576795](https://github.com/scriptscat/scriptcat/commit/4576795a3320c75eea87fa83ec271de7329f5bad)]
- 🐛 GM_info 添加更多属性以兼容其他管理器 [#139](https://github.com/scriptscat/scriptcat/issues/139) [[184cfaf](https://github.com/scriptscat/scriptcat/commit/184cfaf97ec0e9276f22eee4edd5c359411c3992)]

<a name="0.11.1"></a>

## 0.11.1 (2023-01-15)

> 由于 firefox 商店限制，暂时移除掉 firefox 的 CSP 策略，此项移除将会导致 firefox 版本的扩展无法使用代码提示，后续再寻找解决方案。

### Fixed

- 🐛 修复值未发生改变时的报错 [[a97981c](https://github.com/scriptscat/scriptcat/commit/a97981cd0b96acfa7778df9debc33a2697cab400)]
- 🐛 修复 http\* match 问题 [#132](https://github.com/scriptscat/scriptcat/issues/132) [[b17581b](https://github.com/scriptscat/scriptcat/commit/b17581b264fe5a1160f41bf6d8a7200017d0583a)]
- 🐛 修复 vscode 连接问题 [[f0c3853](https://github.com/scriptscat/scriptcat/commit/f0c3853565eaac845aa98c7358a324a0df74c04c)]

<a name="0.11.0"></a>

## 0.11.0 (2022-12-20)

### Fixed

- 🐛 修复 OneDrive 创建多余目录的 bug [[3e326d7](https://github.com/scriptscat/scriptcat/commit/3e326d7aa0921c08817e844367cf361c99de51c5)]
- 🐛 修复 onedrive 查看备份文件 [[e79a5fb](https://github.com/scriptscat/scriptcat/commit/e79a5fb94857a717541da4f3307271321fb8d4f2)]

<a name="0.11.0-beta.3"></a>

## 0.11.0-beta.3 (2022-12-18)

> 支持 OneDriver、CAT_fileStorage 等多个重磅功能

### Added

- ✨ 支持 onedrive [#80](https://github.com/scriptscat/scriptcat/issues/80) [[7a71700](https://github.com/scriptscat/scriptcat/commit/7a717007e0ad486a43fab548a5c06b0286238264)]
- ✨ 支持 CAT_fileStorage [#127](https://github.com/scriptscat/scriptcat/issues/127) [[d566afb](https://github.com/scriptscat/scriptcat/commit/d566afb1417ea55c73aa19b5d205af5318c72ed5)]
- ✨ GM_xhr 支持 document 和 stream [[eedf0c1](https://github.com/scriptscat/scriptcat/commit/eedf0c11c831e1518f89748383a0058e623f8315)]
- ✨ tab 栏点击右键可以关闭当前，关闭其他，关闭左侧，关闭右侧脚本 [[1b8d84e](https://github.com/scriptscat/scriptcat/commit/1b8d84eb7af0c821622fb8fab91fb073c78f3bc2)]

### Fixed

- 🐛 修复文件系统斜杠问题 [[3a66818](https://github.com/scriptscat/scriptcat/commit/3a66818b9be48a6b1149fa5dd2d277724ed5aa89)]
- 🐛 修复沙盒模式无法从 window 读取 GM_info 的问题 [#126](https://github.com/scriptscat/scriptcat/issues/126) [[f23ccde](https://github.com/scriptscat/scriptcat/commit/f23ccdead4429a39d8478851e0405a7e3e6a4257)]
- 🐛 修复脚本储存管理过高与 object 类型编辑问题 [[e0a0d64](https://github.com/scriptscat/scriptcat/commit/e0a0d64f0616230e48b67a58ee0030a04156a7b4)]
- 🐛 修复列表名称排序错误 [[8e678da](https://github.com/scriptscat/scriptcat/commit/8e678dae738facad73b9875d92d6d0cead5dd4b2)]
- 🐛 修复导入重复的问题 [[0ec4cc6](https://github.com/scriptscat/scriptcat/commit/0ec4cc619caaa79a7cc3c82d3d906aef42756495)]
- 🐛 处理\*开头的特殊情况 [#123](https://github.com/scriptscat/scriptcat/issues/123) [[9569736](https://github.com/scriptscat/scriptcat/commit/9569736846f886b64118af1ab14fbf920bf58955)]
- 🐛 修复了点击编辑以后进入指定脚本可以左侧也选中对应的脚步名字,点击保存 tab 脚本名称和左侧脚本名称同步修改以后的内容 [[5335869](https://github.com/scriptscat/scriptcat/commit/53358694a02c0822335048e0f659f40ebd393a9e)]

<a name="0.11.0-beta.2"></a>

## 0.11.0-beta.2 (2022-12-04)

### Fixed

- 🐛 修复 install 页错误 [[fda9de8](https://github.com/scriptscat/scriptcat/commit/fda9de80e87259618757df907fa0ff5c94b0a188)]

<a name="0.11.0-beta.1"></a>

## 0.11.0-beta.1 (2022-12-04)

### Added

- ✨ GM_getResourceURL 支持获取 blob url [#84](https://github.com/scriptscat/scriptcat/issues/84) [[22925cb](https://github.com/scriptscat/scriptcat/commit/22925cb009c38d414210fd7d529b96bc32a69fb8)]
- ✨ 支持 GM_addElement [#102](https://github.com/scriptscat/scriptcat/issues/102) [[0d0f4db](https://github.com/scriptscat/scriptcat/commit/0d0f4dba48b35198239156ec344d509d65eede31)]
- ✨ 支持自定义 eslint [[0ff6ddd](https://github.com/scriptscat/scriptcat/commit/0ff6dddeb2f5152a718ab7587d4e61c62178ff5a)]
- ✨ 添加 CAT_userConfig 打开用户配置页 [[025db33](https://github.com/scriptscat/scriptcat/commit/025db3391bfca7d0477ba05d7680e8a0ca5af961)]

<a name="0.10.4"></a>

## 0.10.4 (2022-12-04)

### Added

- ✨ 兼容 tm 的储存导入导出 [[2eed348](https://github.com/scriptscat/scriptcat/commit/2eed3486aefe9fcd8bb7f9df08da040b9a280ea3)]

### Fixed

- 🐛 .prettierrc 添加 endOfLine 兼容 windows [[ee34161](https://github.com/scriptscat/scriptcat/commit/ee34161163ad7e18b16b39b492bb56b709bd9266)]
- 🐛 修复了点击左侧脚本 tab 没有选择对应的内容,以及点击左侧脚本没有选中的效果 [[9ad2b53](https://github.com/scriptscat/scriptcat/commit/9ad2b533bd624ffea2c7e786318b35d1f589bae5)]
- 🐛 兼容 GM_cookie.list 的调用方式和菜单展示问题 [#117](https://github.com/scriptscat/scriptcat/issues/117) [[a54d0c6](https://github.com/scriptscat/scriptcat/commit/a54d0c62ad327adaae6d183d5b5aa4468026c888)]
- 🐛 修复更新间隔设置从不失效 [#115](https://github.com/scriptscat/scriptcat/issues/115) [[50d8264](https://github.com/scriptscat/scriptcat/commit/50d8264bc3e91126e56d6688b8dec5b1e1f42908)]
- 🐛 修复 document-body 与优化资源识别 text [#116](https://github.com/scriptscat/scriptcat/issues/116) [[1b87ffc](https://github.com/scriptscat/scriptcat/commit/1b87ffc99e9eb67c9878e7909f2b349b42e59681)]

<a name="0.10.3"></a>

## 0.10.3 (2022-11-23)

> 此版本无严重 bug 将会发布到 edge

### Fixed

- 🐛 修复删除脚本依旧在运行的 bug [[e7a5f20](https://github.com/scriptscat/scriptcat/commit/e7a5f20199aac246a22aff9f8e7142a8134a11f3)]
- 🐛 修复备份文件操作错误 [#113](https://github.com/scriptscat/scriptcat/issues/113) [[af09645](https://github.com/scriptscat/scriptcat/commit/af09645d5bd5fea604c5729235b38577cb1e88d6)]

### Miscellaneous

- 📝 Update README.md [[3f768c7](https://github.com/scriptscat/scriptcat/commit/3f768c7021d43bca725809dd22cb14f38c80ebfa)]

<a name="0.10.2"></a>

## 0.10.2 (2022-11-21)

### Fixed

- 🐛 修复某些情况 export 表唯一性导致数据库升级失败 [[10a5c19](https://github.com/scriptscat/scriptcat/commit/10a5c1973b7f2dbcbe3f1720f6a1f33b23b93949)]

<a name="0.11.0-beta"></a>

## 0.11.0-beta (2022-11-19)

### Added

- ✨ 添加 CAT_userConfig 打开用户配置页 [[025db33](https://github.com/scriptscat/scriptcat/commit/025db3391bfca7d0477ba05d7680e8a0ca5af961)]

### Changed

- 🎨 统一更新日志地址 [[8e48400](https://github.com/scriptscat/scriptcat/commit/8e4840027719089f2a1a800f991714d4652fd231)]

<a name="0.10.1"></a>

## 0.10.1 (2022-11-19)

### Added

- ✨ 资源管理和火狐兼容性处理
  [[26ab1c5](https://github.com/scriptscat/scriptcat/commit/26ab1c578ba449a0c9810f8b52aaf3c4bf95ae4a)]

### Fixed

- 🐛 修复 userconfig 选择框问题与二次打开不显示的问题
  [[3504d8d](https://github.com/scriptscat/scriptcat/commit/3504d8d4348897d192645b1a54ed79d26306c41e)]
- 💚 修复 ci 构建报错问题
  [[eb0031f](https://github.com/scriptscat/scriptcat/commit/eb0031f8f62f5545a0dc5cb35290ee1aed7bc34e)]
- 🐛 修复 getResourceResource key 问题
  [[df22c6f](https://github.com/scriptscat/scriptcat/commit/df22c6f809da53d46814bbb948d3471555645cce)]
- 🐛 修复百度网盘鉴权缓存问题
  [[88e7d3b](https://github.com/scriptscat/scriptcat/commit/88e7d3b6a0886b6468cf083ce559f18aecab45bb)]
- 🐛 修复 firefox 下编辑器不兼容的问题
  [[c88c192](https://github.com/scriptscat/scriptcat/commit/c88c192a55504caf09a27675778eb14aaf21c3ed)]

## 0.10.0 (2022-11-17)

### Changed

- ⚡ 优化百度网盘鉴权
  [[222c2d7](https://github.com/scriptscat/scriptcat/commit/222c2d76b7eb309247ce46b0c0159608bfd7356f)]

### Fixed

- 🐛 修复打包版本问题
  [[f73c543](https://github.com/scriptscat/scriptcat/commit/f73c54352ba0ba09248f72842d80bc08ac335ae8)]

## 0.10.0-beta.2 (2022-11-16)

### Added

- ✨ 支持百度网盘备份、恢复和同步
  [[2cac37f](https://github.com/scriptscat/scriptcat/commit/2cac37f5223aed65dc68156d8b57ccb0a6f51f7e)]
- ✨ 支持百度网盘备份鉴权
  [[18178d5](https://github.com/scriptscat/scriptcat/commit/18178d579e019f6b374c51bcd18298244a33c1f2)]

### Changed

- ♻️ 重构 vscode 功能
  [[f5ec7a4](https://github.com/scriptscat/scriptcat/commit/f5ec7a4b44b902a6c519c0fffaeea56e7750dac0)]

### Removed

- 🔥 移除 document-body 和 document-menu
  [[06dfc18](https://github.com/scriptscat/scriptcat/commit/06dfc18a537c9a1c600bd1707107cd7b6b7a0230)]

### Fixed

- 🐛 修复后台脚本无法使用 responseType 的问题
  [#108](https://github.com/scriptscat/scriptcat/issues/108)
  [[43b407a](https://github.com/scriptscat/scriptcat/commit/43b407a7c056aa7e4cb0f075eee4927923a629a8)]
- 🐛 修复在 sandbox 页执行 BroadcastChannel 某些浏览器会报错
  [#107](https://github.com/scriptscat/scriptcat/issues/107)
  [[c4d4de4](https://github.com/scriptscat/scriptcat/commit/c4d4de4c0d3b441d07962ec3e44052f0080ecb3c)]
- 🐛 修复后台脚本内存溢出问题 [#71](https://github.com/scriptscat/scriptcat/issues/71)
  [[62c2f47](https://github.com/scriptscat/scriptcat/commit/62c2f479b674d8caca19408ee8f4dd33ff1f1d2e)]
- 🐛 修复列表宽度问题和储存清空 bug
  [[e00669a](https://github.com/scriptscat/scriptcat/commit/e00669ae49e6e2bdfc9fb03750e0ee706bf0a6ca)]

## 0.10.0-beta.1 (2022-11-09)

### Fixed

- 🐛 修复打包引起的错误
  [[ee034bc](https://github.com/scriptscat/scriptcat/commit/ee034bc7c491d48d7aec8d353cbbe496f7649add)]

## 0.10.0-beta (2022-11-08)

### Added

- ✨ 支持 eslint
  [[e55d23f](https://github.com/scriptscat/scriptcat/commit/e55d23f4a15ff3831de94ea7a1c0d72d0c0c071f)]

### Changed

- ♻️ 重构脚本订阅
  [[8b1a73c](https://github.com/scriptscat/scriptcat/commit/8b1a73cdc2428048267c83c79742d25397d71f37)]
- ♻️ 重构导出云脚本
  [[844d424](https://github.com/scriptscat/scriptcat/commit/844d424bcb755592f19a4d11ad749941792ce27d)]

### Fixed

- 🐛 修复 eslint 对后台脚本的支持与兼容火狐
  [[2343339](https://github.com/scriptscat/scriptcat/commit/23433391d1e54bdda3d0e61642e3768d3dfb91fe)]
- 🐛 修复 GM xhr header 为空时发送默认值与 UserConfig 默认值的问题
  [[e3a04db](https://github.com/scriptscat/scriptcat/commit/e3a04db58d0c15935ba642240a4869a20049ab2a)]
- 🐛 修复火狐兼容问题
  [[88a6d4a](https://github.com/scriptscat/scriptcat/commit/88a6d4a3ad24bef64ba37035b02a50ad8ece8c38)]
- 🐛 修复 GM_xhr unsafeHeader 发送错误、popup 支持运行
  [[02d1a45](https://github.com/scriptscat/scriptcat/commit/02d1a45a27f871b237ecce63c2cb22e7436ee726)]

## 0.10.0-alpha.1 (2022-10-31)

### Added

- ✨ webdav 云同步
  [[b419c91](https://github.com/scriptscat/scriptcat/commit/b419c91d1e7047390aa4c601a3a6ed3d54a165ba)]

### Changed

- ♻️ 储存管理
  [[1067285](https://github.com/scriptscat/scriptcat/commit/106728515d162e3b8d90d49d31f472cb4a10ca25)]
- ♻️ 重构 userconfig
  [[43a332d](https://github.com/scriptscat/scriptcat/commit/43a332db99b0b075762f1e06d3e2569b7a7f949c)]

### Fixed

- 🐛 修复 include、GM.\*和 ExternalMessage 问题
  [[fe96990](https://github.com/scriptscat/scriptcat/commit/fe969903d855ed385dc91214f6d46cff1963deeb)]
- 🐛 修复文档链接
  [[33041e4](https://github.com/scriptscat/scriptcat/commit/33041e45a947e99a8478e3ea53f4eb422df9a65e)]

### In Process

- 🚧 订阅脚本
- 🚧 VSCode 连接
- 🚧 导出云端脚本

### Miscellaneous

- 👷 CI 打包时加上 commit id
  [[313e44e](https://github.com/scriptscat/scriptcat/commit/313e44e3f7a55077d6b273e7483f1fc08d2c36da)]
- 👷 优化打包产物
  [[7ca5c13](https://github.com/scriptscat/scriptcat/commit/7ca5c139ffc97c6f48f6457c117ded2cb591b21e)]
- 👷 优化 ci 构建与同步目录
  [[217fa99](https://github.com/scriptscat/scriptcat/commit/217fa991b78b6e8232e8b03bfee5da6cf5894a8b)]

## 0.10.0-alpha(2022-10-27)

> 非常不稳定且功能不完善的一个版本 本版本为 alpha 测试，功能并未全部完成，欢迎体验，建议备份后升级或者共存的形式安装
>
> 全新的架构、全新的 UI，凤凰涅槃、王者归来、大器晚成

### Added

- ✨ webdav 备份
- ✨ 后台脚本支持 GM_menu
- ✨ GM_menu 支持浏览器右键菜单

### Changed

- ♻️ 全新架构、全新 UI
- ♻️ 重构日志系统
- ♻️ 重构代码编辑

### In Process

- 🚧 webdav 云同步
- 🚧 设置页面各个选项
- 🚧 订阅脚本
- 🚧 UserConfig
- 🚧 脚本储存管理
- 🚧 VSCode 连接
- 🚧 导出云端脚本

### Removed

- 🔥 移除原版本云同步，新增其它云平台同步
- 🔥 由于没有相关用户操作，移除用户登录
- 🔥 鉴于腾讯云函数收费，可能将移除导出腾讯云函数，后续版本再加入

## 0.9.4 (2022-10-11)

> 时隔半年的更新，本次更新只做了兼容性的修复。。。。（连续新写了几个 bug。。。。）
>
> 近期开始重构脚本猫了（架子已合并到 main 分支），在 v0.10.x 将做出大改变，这是向 v1.0.0 过渡的第一步，预计 11 月左右完成，绝对不
> 🐦，另外 v0.10.0 将会有以下不兼容的变动：
>
> - [v0.10.0 将取消云同步](https://github.com/scriptscat/scriptcat/issues/99)，但会新增网盘同步

### Fixed

- 🐛 修复某些 run-at 因为 GM_info 注入的问题导致脚本报错
  [[e91371d](https://github.com/scriptscat/scriptcat/commit/e91371dd441668458fd2689afd5efe2cf55b78cc)]

## 0.9.3 (2022-10-11)

### Removed

- 🔥 移除扩展 debugger 权限
  [[75bc958](https://github.com/scriptscat/scriptcat/commit/75bc958f6257a25408fcb47b6546096ffdeb0d1d)]

### Fixed

- 🚑 紧急修复 GM 沙盒问题
  [[fbe6e05](https://github.com/scriptscat/scriptcat/commit/fbe6e057f30b9455a0bbbd10743a9752d3f8ca49)]
- 🐛 修复 GM_info 的兼容问题
  [[7d030b0](https://github.com/scriptscat/scriptcat/commit/7d030b0f28c4ae1cd3e84df8144dc97ccb649ce2)]

## 0.9.1 (2022-04-30)

> 一些功能修复和代码优化

### Added

- ✨ 优化跨域资源确定逻辑 [#56](https://github.com/scriptscat/scriptcat/issues/56)
  [[9144e3b](https://github.com/scriptscat/scriptcat/commit/9144e3bc209c23c494a475234ea62e93c28885a1)]

### Changed

- ⚡ 优化日志组件
  [[8a8fef2](https://github.com/scriptscat/scriptcat/commit/8a8fef2c1fc0a7e11d43b6c261f4326cbbd77123)]

### Removed

- 🔥 废弃 proxy 功能 [#60](https://github.com/scriptscat/scriptcat/issues/60)
  [[1ee42ad](https://github.com/scriptscat/scriptcat/commit/1ee42ad9f0927af9a5942e2a205755d15c07b0e5)]

### Fixed

- 🐛 修复脚本/订阅检查更新间隔无法设置的问题
  [[998c9f9](https://github.com/scriptscat/scriptcat/commit/998c9f909efc6dc7fc0ee6effd23153ae6efd493)]
- 🐛 修复调试脚本时 getValue 获取旧值
  [[75215e3](https://github.com/scriptscat/scriptcat/commit/75215e3b43b846faee1b0a80d29d6c892a828047)]

## 0.9.0 (2022-02-14)

> 支持一键上云啦！！！两个参考的脚本:
> [bilibili 自动签到](https://scriptcat.org/script-show-page/48),[掘金签到和自动抽奖](https://scriptcat.org/script-show-page/303)

### Added

- 💥 支持腾讯云函数执行
  [[20ead08](https://github.com/scriptscat/scriptcat/commit/20ead086e78c6866be58939874c47a9159e12ca5)]
- 💥 导出可执行的 nodejs 包
  [[7b8466f](https://github.com/scriptscat/scriptcat/commit/7b8466f1b88fd7937b745b1d4594d723543614bb)]
- ✨ 脚本列表页浮动按钮隐藏按钮 [#37](https://github.com/scriptscat/scriptcat/issues/37)
  [[a16efb0](https://github.com/scriptscat/scriptcat/commit/a16efb0d3b6139e257b5d5f58219c39572d961f7)]
- ✨ 腾讯云触发器
  [[a706827](https://github.com/scriptscat/scriptcat/commit/a706827c693831e411b678f2b09297192213c41e)]

### Changed

- ⚡ 优化部署模板
  [[9f2595a](https://github.com/scriptscat/scriptcat/commit/9f2595af18f1c15af20a6a07309d66442eec00d1)]
- ⬆️ 升级依赖、处理 babel
  [[ab7bc9b](https://github.com/scriptscat/scriptcat/commit/ab7bc9bc8bf213aa17964facf7369642df6455e7)]

### Fixed

- 🐛 修复在同 tab 上切换 url 不会清空掉老脚本导致错误加载的问题
  [[37b88fb](https://github.com/scriptscat/scriptcat/commit/37b88fba5f546f893234b4934bf84809557f9f05)]
- 🐛 修复 match 兼容问题
  [[d919e8a](https://github.com/scriptscat/scriptcat/commit/d919e8a943552dd5bdff9de4ec2befd5c57f96f1)]
- 🐛 修复后台脚本无法处理 blob 的问题 [#34](https://github.com/scriptscat/scriptcat/issues/34)
  [[7b81677](https://github.com/scriptscat/scriptcat/commit/7b816773a811abb7933db244c35bda60031001b5)]

### Miscellaneous

- 📄 修改 License 为 GPLv3
  [[dfa0231](https://github.com/scriptscat/scriptcat/commit/dfa0231f2826b910f4e855509f99a97c6a2f7cdd)]

## 0.8.2 (2022-01-22)

> 2021 年的最后一个版本,提前祝大家新年快乐！🎇

### Added

- ✨ GM_xhr 支持 maxRedirects
  [[4d29cae](https://github.com/scriptscat/scriptcat/commit/4d29caeb78d9e3f7d94f31a2d3fd3e1d56279ab9)]

### Fixed

- 🐛 修复订阅@connect 错误的问题
  [[247db9c](https://github.com/scriptscat/scriptcat/commit/247db9ce06e584c4962094a70bcc094f5028adab)]
- 🐛 修复端口通配的问题 [#30](https://github.com/scriptscat/scriptcat/issues/30)
  [[f5183bd](https://github.com/scriptscat/scriptcat/commit/f5183bd4d6ce7866fececa9aeed8146730d980bd)]
- 🐛 修复 GM_xhr 返回值和 GM_delValue 删除错误
  [[45fb304](https://github.com/scriptscat/scriptcat/commit/45fb30410caedccf82ea0298d612c3a015adbaea)]
- 🐛 修复沙盒兼容
  [[82ceea9](https://github.com/scriptscat/scriptcat/commit/82ceea9407103f05c67a0ae60b46cde6ea25429d)]
- 🐛 修复某些时候超时才打开权限确认窗口的问题
  [[b861869](https://github.com/scriptscat/scriptcat/commit/b8618697bf50bed8840e0f0199162d399b8702c9)]
- 🐛 修复火狐 url 获取错误的问题
  [[854dd26](https://github.com/scriptscat/scriptcat/commit/854dd26272526f674341e7c119d93a8fce7a271c)]
- 💚 修复 ci 打包版本号错误
  [[b218cf4](https://github.com/scriptscat/scriptcat/commit/b218cf487828273d033f4bdb0a5bc6f146c31e87)]

## 0.8.1 (2022-01-14)

### Added

- ✨ 脚本静默更新
  [[aeeda0f](https://github.com/scriptscat/scriptcat/commit/aeeda0f710c9c22d1507d3edfb2b5e08a1bdc1e8)]
- ✨ 兼容暴力猴导出脚本包
  [[b477640](https://github.com/scriptscat/scriptcat/commit/b47764025d069b33733f4051cb910882df3c83f3)]
- ✨ 新建脚本页面 URL 识别
  [[429dd55](https://github.com/scriptscat/scriptcat/commit/429dd55657ef50f20231c9e414f1b24c2cad1d80)]
- ✨ GM_xmlhttpRequest 支持 blob 数据
  [#29](https://github.com/scriptscat/scriptcat/issues/29)
  [[71a039f](https://github.com/scriptscat/scriptcat/commit/71a039f53e2212d80c32932493bc3cca186d05cd)]

### Fixed

- 🐛 修复 Firefox unsafeHeader 拦截问题
  [#20](https://github.com/scriptscat/scriptcat/issues/20)
  [[757fe2c](https://github.com/scriptscat/scriptcat/commit/757fe2c12a30b45f3094119266ed3962ae51c3dc)]

## 0.8.0 (2022-01-10)

### Added

- ✨ GM_download 可以下载 blob 文件
  [[2096137](https://github.com/scriptscat/scriptcat/commit/2096137bc77a3a2094d26e470c596667af651f4d)]
- ✨ 实现 GM_download 函数
  [[a06113c](https://github.com/scriptscat/scriptcat/commit/a06113ce07a964342e62462b5380e463b7247b1a)]
- ✨ 支持 zip 格式导入导出
  [[48d197c](https://github.com/scriptscat/scriptcat/commit/48d197c826504018e093e745377c2eb8bba5bf40)]
- ✨ 实现 GM_get/saveTab
  [[3f5085f](https://github.com/scriptscat/scriptcat/commit/3f5085fbf67bd315588bc7261ce2c14d02a3a81a)]

### Changed

- 🎨 修改 eslint 错误
  [[5bdcbf9](https://github.com/scriptscat/scriptcat/commit/5bdcbf9afa9df31c4d0cc31ba4e359d8c87b04a2)]
- ♻️ 重构导入导出
  [[6cd369e](https://github.com/scriptscat/scriptcat/commit/6cd369e6d30a8b5938b3cd717356439ad2c8aa75)]
- 🎨 修改 GM_menu 注册同名菜单只使第一个生效
  [[bd16121](https://github.com/scriptscat/scriptcat/commit/bd1612105d4fd13af48c5152e379270dbfc60932)]
- 🎨 修改 eslint 代码
  [[d9b9af0](https://github.com/scriptscat/scriptcat/commit/d9b9af06f7a71629be8cdc6de98aa6d8b67f24e3)]
- ⚡ 删除 GM_getCookieStore 使用 GM_Cookie(&#x27;store&#x27;)操作
  [[1ae5096](https://github.com/scriptscat/scriptcat/commit/1ae5096c903d6c984597ff46d4f41d4a03fb1b3b)]

### Fixed

- 🐛 修复对 GM.\*函数的支持
  [[d9ee5c6](https://github.com/scriptscat/scriptcat/commit/d9ee5c6643cc3f2146c99703b58d786ca7e708da)]
- 🐛 修复 GM.xmlHttpRequest h 大写的问题
  [#26](https://github.com/scriptscat/scriptcat/issues/26)
  [[5ebf3aa](https://github.com/scriptscat/scriptcat/commit/5ebf3aa3057be8f8280dfee69784edff421651c7)]
- 🐛 修复编辑页菜单栏样式错误
  [[42b9a91](https://github.com/scriptscat/scriptcat/commit/42b9a91511f9dc1a225bea5568f6774123942ddf)]
- 🐛 修复后台脚本调试时 unsafeHeader 发送错误
  [[328ca18](https://github.com/scriptscat/scriptcat/commit/328ca1864a87dafa0b4e022cdd0dd7a52883a5ba)]
- 🐛 修复沙盒内 self、top、parent 逃逸
  [[eba7144](https://github.com/scriptscat/scriptcat/commit/eba71446e4b2206473284567a1cc6bac5ca5e045)]
- 🐛 修复 GM 函数 this 问题
  [[9eb92cc](https://github.com/scriptscat/scriptcat/commit/9eb92cca14df9d48a7b5800c49bc903a8b480de5)]

### Miscellaneous

- 👔 兼容油猴 match http\*
  [[9ebdeb9](https://github.com/scriptscat/scriptcat/commit/9ebdeb96d9988843de35f0ddad73b179bdfbf863)]

## 0.7.7 (2021-12-17)

### Fixed

- 🐛 修复 GM_setValue 设置 object 实例时的错误
  [[fa9dcbc](https://github.com/scriptscat/scriptcat/commit/fa9dcbcb39abb1de70eb0bee9fc72314958d44a8)]

### Miscellaneous

- 👔 只有中版本更新时才打开更新日志页面
  [[74981dc](https://github.com/scriptscat/scriptcat/commit/74981dcbb3cd1e1cc31c3d88ababcabfc33529c5)]

## 0.7.6 (2021-12-13)

> 新增 GM 储存管理,开始尝试使用 emoji 来写 changelog

### Added

- ✨ 储存增加重新加载与清空选项
  [[db0559e](https://github.com/scriptscat/scriptcat/commit/db0559e32462d391136d455c64fd425413723484)]
- ✨ GM 储存管理([#15](https://github.com/scriptscat/scriptcat/issues/15))
  [[6a13ff2](https://github.com/scriptscat/scriptcat/commit/6a13ff2c75222809cfd4696a8ed89de12b93cd87)]

### Fixed

- 🐛 修复 gm_xhr 的 response 为空的问题
  [[8ae251a](https://github.com/scriptscat/scriptcat/commit/8ae251a81cf4e3167b70bdb71e2711de07e1f314)]
- 🐛 修复同步时脚本错乱
  [[606ac06](https://github.com/scriptscat/scriptcat/commit/606ac0652f1172ba0dd27c64b15437a51b0fca03)]
- 🐛 修复框架组件 icon 不显示
  [[72376db](https://github.com/scriptscat/scriptcat/commit/72376db39b02466951e7c4305a30e0ab1db21fb0)]

## v0.7.5 (2021-12-08)

### Bugs fixed:

- `GM_registerMenuCommand`某些情况注册不上([`70399b3`](https://github.com/scriptscat/scriptcat/commit/70399b3b137051e378a36d4ca33b07ea4cf68b1a))
  (@CodFrm)
- gm_xhr 默认不带上
  origin([`70399b3`](https://github.com/scriptscat/scriptcat/commit/70399b3b137051e378a36d4ca33b07ea4cf68b1a))
  (@CodFrm)
- 沙盒中 globalThis 指向沙盒
  global([`c15913c`](https://github.com/scriptscat/scriptcat/commit/c15913c3fe6531d48c2b1a1f42702ee3dc11a966))
  (@CodFrm)
- 右侧悬浮按钮固定可能遮挡的问题([`84ed9a1`](https://github.com/scriptscat/scriptcat/commit/84ed9a105ab92cb5a057c3d15d9240bbc1ffbec7))
  (@CodFrm)
- unsafe header
  覆盖失败([`8a28a9c`](https://github.com/scriptscat/scriptcat/commit/8a28a9cadf49852a25d8c58b216489c70b3ddc18))
  (@CodFrm)
- GM_addStyle 与 tm
  管理器插入地方一致([`0375282`](https://github.com/scriptscat/scriptcat/commit/03752823d0a6f12d8dfefdf35bc19625719d066b))
  (@CodFrm)

### Perf

- 图标加载速度优化([`5a74b19`](https://github.com/scriptscat/scriptcat/commit/5a74b193ac769e0af9481dff44577553449a3937))
  (@CodFrm)

## v0.7.4 (2021-11-24)

### Bugs fixed:

- eval 问题 & GM_deleteValue
  调用错误([`d668452`](https://github.com/scriptscat/scriptcat/commit/d668452b318174c985263f0a3ccca7d5afaa2239))
  (@CodFrm)
- FormData 火狐无法 clone
  导致错误([`e5190e3`](https://github.com/scriptscat/scriptcat/commit/e5190e3680e36e638f08085306ae05d9e5e44e2a))
  (@CodFrm)

## v0.7.3 (2021-11-22)

### New feature:

- vscode
  自动连接([`dac2cc6`](https://github.com/scriptscat/scriptcat/commit/dac2cc6fed1de44a7e546989107892507b388837))
  (@CodFrm)
- 用户配置支持动态多选([`6bf5b29`](https://github.com/scriptscat/scriptcat/commit/6bf5b29f75ae2b2adeb35216c7bdd3393cdb7ec0))
  (@CodFrm)
- gm.xhr 支持发送 FormData
  数据([`693c410`](https://github.com/scriptscat/scriptcat/commit/693c410a7e7e0f96a947fef7c58ddd41f93cd8d4))
  (@CodFrm)
- 添加\*.user.bg.js
  后台脚本后缀监听([`05021c1`](https://github.com/scriptscat/scriptcat/commit/05021c124899514db4a82bf262e89992b52f1f4f))
  (@CodFrm)

### Bugs fixed:

- 兼容油猴的 responseType json
  处理([`0d75d86`](https://github.com/scriptscat/scriptcat/commit/0d75d86f55b3c6439c89ca28cd5712dbc125ba0c))
  (@CodFrm)
- responseType 问题和 gm_xhr url
  的相对位置处理([`288d751`](https://github.com/scriptscat/scriptcat/commit/288d75133c1b575c89365422cf6f8e23ee0cba9f))
  (@CodFrm)
- eval
  执行脚本内方法([`4d0e056`](https://github.com/scriptscat/scriptcat/commit/4d0e0569eeb13cad852b52149bb0ca7ec32b89bb))
  (@CodFrm)
- gm_xhr
  获取重定向后地址([`4906c79`](https://github.com/scriptscat/scriptcat/commit/4906c7950e5a4902f3d7262e431fac0034a5267b))
  (@CodFrm)
- 沙盒兼容问题&某些情况下 sourceUrl
  不显示的问题([`85cb130`](https://github.com/scriptscat/scriptcat/commit/85cb130b016c41b71c58b81e9f422acdd694278a))
  (@CodFrm)
- 拉取数量显示错误([`106de02`](https://github.com/scriptscat/scriptcat/commit/106de02583ae08299ddd4d02fbfdd2140c9a7847))
  (@CodFrm)
- 某些情况下菜单注册后不显示([`aff0bb4`](https://github.com/scriptscat/scriptcat/commit/aff0bb4bf595b8fb63bf8827f53e3f5e84e11b95))
  (@CodFrm)
- 沙盒内可访问 window
  上对象([`49a276c`](https://github.com/scriptscat/scriptcat/commit/49a276c00bb56e30186c70ee300b4ea58673aa50))
  (@CodFrm)

## v0.7.2 (2021-11-07)

> 在此之前的脚本猫对 GM_XHR 的返回 contentType 做了判断,如果是 json 类型会自动转换成 json
> 给脚本,现在兼容油猴的做法,不对此进行自动的转化,需要手动转化,或者加上 responseType.可能会导致某些脚本出现兼容性问题.

### New feature:

- GM_XHR 支持返回 set-cookie 和处理 xhr.response
  兼容问题([`53bac0b`](https://github.com/scriptscat/scriptcat/commit/53bac0b82ff1e5da4cf4d9bed67f6cac74b46675))
  (@CodFrm)
- 脚本 header
  悬停提示([`a0eabad`](https://github.com/scriptscat/scriptcat/commit/a0eabade47b775719c779b6ca63e4a86451338f7))
  (@CodFrm)

### Bugs fixed:

- 安装脚本时代码对比反向问题([`bd769a0`](https://github.com/scriptscat/scriptcat/commit/bd769a01aa3e037d1b279ae958934565b2a7ac9b))
  (@CodFrm)

## v0.7.1 (2021-10-26)

> 修复一个比较严重的 bug,编辑本地脚本 uuid 每次发生改变导致同步多次的问题.
>
> 支持 vscode 扩展开发和脚本市场支持,具体可以看此视频:
> [脚本猫配合 vscode 开发（demo，想看看大家有啥意见）](https://www.bilibili.com/video/BV16q4y157CP)

### Bugs fixed:

- 编辑本地脚本 uuid
  每次发生改变导致同步多次的问题([`7175c6f`](https://github.com/scriptscat/scriptcat/commit/7175c6f36122d88fceb7b44be94e603eb7dd6129))
  (@CodFrm)

## v0.7.0 (2021-10-26)

> 支持 vscode 扩展开发和脚本市场支持,具体可以看此视频:
> [脚本猫配合 vscode 开发（demo，想看看大家有啥意见）](https://www.bilibili.com/video/BV16q4y157CP)

### New feature:

- vscode
  代码同步([`5750fb6`](https://github.com/scriptscat/scriptcat/commit/5750fb6daa3317a3d793df5d8e68da4f44a520b1))
  (@CodFrm)
- 外部 api
  用于脚本市场获取脚本状态([`8ce9ae9`](https://github.com/scriptscat/scriptcat/commit/8ce9ae990a735e17d4d1711cd17adcc299c39225))
  (@CodFrm)
- 脚本列表拖动排序([`d3aa7ab`](https://github.com/scriptscat/scriptcat/commit/d3aa7abc64fc09818b16221e36fe2fe3781da6c8))
  (@CodFrm)
- 通过链接安装([`00e4622`](https://github.com/scriptscat/scriptcat/commit/00e46227d42768b3e1d91abb8cc1f44948aca05b))
  (@CodFrm)

### Bugs fixed:

- 面板脚本日志顺序错乱和非运行状态日志显示等待([`2c1fd8a`](https://github.com/scriptscat/scriptcat/commit/2c1fd8a1b975cd3c6c1729b16893597bf46b6ead))
  (@CodFrm)
- 控制面板无法复制([`bcb3960`](https://github.com/scriptscat/scriptcat/commit/bcb39607001e83ac5f70021230f14840537cb87f))
  (@CodFrm)

## v0.6.4

> 导入导出功能(兼容 tampermonkey)和修复 bug

- 优化新建脚本的 origin
- 开启`GM_cookie`给前端脚本,并兼容 tm 的使用方法
- 导入导出 json 备份文件(兼容 tampermonkey)
- 修复沙盒中无法使用 eval 的问题
- 修复 match 错误会影响其它脚本的问题

## v0.6.3

> 修复 bug

- 优化权限批量确认问题
- 修复云同步有 delete 的情况下错误的问题
- 修复同步的订阅与脚本无关联的 bug
- 修复订阅更新不同步的 bug
- 修复`match`结尾`*`问题

## v0.6.2

> 支持某些油猴特性和修复 bug

- 支持`document-body`
- 添加`GM_getResourceText`和`GM_getResourceURL`
- 添加`include/match`的 tld 顶域匹配支持
- 修复沙盒 set 属性问题
- 修复`GM_registerMenuCommand`重复注册显示的问题
- 修复更新页面脚本开启状态不一致的问题
- 沙盒处理只读的属性
- 处理`require`顺序
- 处理`match`,以`*.`开头的情况下也会匹配`xxx.com`

## v0.6.1

> 一些 bug 修复

- 用户信息管理页
- 油猴 window.onxxxx 兼容
- 优化安装页面显示
- 优化登录登出
- 修复弹出页新建脚本 bug
- 修复老版本安装的脚本新版本无法正常执行的问题

## v0.6.0

> 两个大功能,订阅功能与云同步.(导入导出到本地在下两个小版本中发布,导入导出到云盘等其它存储计划中)
>
> 云同步暂时只支持脚本与脚本订阅同步,用户配置同步后续会支持.不会支持 value 同步,开发者需要注意.
>
> 新设备同步安装的脚本会根据: 前台脚本默认开启,后台脚本默认关闭的方式进行安装,脚本开启状态不会同步,需要用户重新开启或者关闭.
>
> 关于这方面有什么意见可以提[issue](https://github.com/scriptscat/scriptcat/issues)反馈

- 增加[脚本订阅](/dev/subscribe.md)功能
- 增加脚本云同步功能
- 优化脚本更新确认界面使用静默方式打开
- 优化脚本新建
- 修改脚本列表页`特性`栏为`来源`
- 修复油猴兼容性 bug
- 修复无`namespace`的脚本会导致安装错误的问题
- 修复`resource`资源加载和释放问题
- 修复两位版本号对比失败的问题

## v0.5.3

> 修复 bug

- 修复面板基本设置编辑不生效的问题
- 修复更新脚本选择脚本状态无效的问题
- 修复脚本更新运行状态显示错误

## v0.5.2

> cookie 操作增强

- 支持对隐身窗口的 cookie 操作
- 增强`GM_cookie`函数,支持`delete/set/store`操作
- `GM_addValueChangeListener`支持返回 tabid(后台脚本中)
- 增加`GM_getCookieStore`通过 tabid,获取 cookie store
- 增加`storageName`来规定 value 共享,移除原来的`namespace`共享
- 修复浏览器打开时脚本加载问题

## v0.5.1

> 优化界面 UI,优化调试模式

- 更新界面 UI,优化页面逻辑
- 优化后台脚本[调试模式](/dev/background.md#脚本调试)
- 修复 cron 表达式错误的时候,脚本列表不显示
- 移除`@console`

## v0.5.0

> **重大更新**,开始支持[CloudCat](/dev/cloudcat.md)

- 支持[CloudCat](/dev/cloudcat.md)
- 编辑操作增加导出/导入功能
- 添加通知信息
- 优化列表状态栏
- 沙盒优化
- 修复油猴 API 兼容问题
- 修复`match`问题

## v0.4.4

> v0.4.3 兼容 Firefox 处理以过审核.

- 处理 Firefox sandbox 逻辑
- 优化安装/权限确认页面 UI
- 优化编辑器快捷键和工具条
- 修复某些情况下安装或更新时不显示脚本名的 bug
- 修复`GM_xmlhttpRequest`的`arraybuffer,blob`支持
- 修复若干兼容油猴的 bug

## v0.4.2

> 优化代码,UI 调整

- 界面 UI 调整
- 增加`GM_xmlhttpRequest`所支持的`unsafe header`和支持`arraybuffer`,`nocache`,`user`,`password`,`overrideMimeType`,功能
- 增加运行日志查看功能,点击面板`运行状态`栏即可查看最后一次运行日志.具体请看:[console](/dev/meta.md#console)功能
- 修复`GM_notification`的`done`回调
- 优化调整代码列表排序逻辑
- 优化最后更新栏点击可进行脚本的手动检查更新

## v0.4.1

> 重大 bug 修复

- 修复 split 导致的前台脚本无法执行的问题
- 增加`GM_xmlhttpRequest`所支持的`unsafe header`

## v0.4.0

> 做了一些界面上的优化,增加了[用户配置](/dev/config.md)功能

- 增加控制台的 UserConfig 功能,详情请看[用户配置文档](/dev/config.md)
- 优化控制台编辑时`definition`后缀为`.d.ts`的地址,自动识别增加自动补全
- 优化控制台的运行日志 ui
- 优化控制台脚本列表,`运行状态`列鼠标放置可显示下一次运行时间等描述
- 优化弹出页面 ui,增加脚本运行数角标
- 优化弹出页面运行脚本页显示当前页面上所执行的脚本
- 优化弹出页面增加后台脚本项,可直接在弹出页上执行脚本
- 优化安装页面增加脚本的开启开关
- 支持`GM_registerMenuCommand`和`GM_unregisterMenuCommand`
- 支持`GM_xmlhttpRequest`填写一些 unsafe 的 header

## v0.3.4

- 新建脚本默认开启(从远程安装的后端脚本依旧默认为不开启)
- 管理面板简单的分页功能
- 增加开机启动自动运行
- 支持`@require-css`直接引入 css 文件
- 支持`document-menu`执行方式
- 支持`@include`和`@exclude`
- 移除`@debug`,新增菜单条
- 修复若干 bug

## v0.3.0

> 开始支持油猴脚本了

- 支持油猴脚本!暂时支持 match 进行匹配
- 支持`@require`引用其他脚本
- 将 GM_set/getValue 函数使其实时全局同步
- 添加了`CAT_click`API,可进行真实点击
- 支持了`GM_setClipboard`

## v0.2.0

> 第一个可用的版本

- 后台脚本,可以使你的脚本持续的运行在后台.
- 定时脚本,可以每日定时执行,每天通过脚本定时处理事务.可用于自动签到,定时提醒等功能.
- 基本的 API,初步规划好了 API 规则
- 脚本管理面板
