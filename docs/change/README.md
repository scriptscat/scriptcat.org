
# Changelog

## 0.8.0 (2022-01-10)

### Added

- ✨ GM_download可以下载blob文件 [[2096137](https://github.com/scriptscat/scriptcat/commit/2096137bc77a3a2094d26e470c596667af651f4d)]
- ✨ 实现GM_download函数 [[a06113c](https://github.com/scriptscat/scriptcat/commit/a06113ce07a964342e62462b5380e463b7247b1a)]
- ✨ 支持zip格式导入导出 [[48d197c](https://github.com/scriptscat/scriptcat/commit/48d197c826504018e093e745377c2eb8bba5bf40)]
- ✨ 实现GM_get/saveTab [[3f5085f](https://github.com/scriptscat/scriptcat/commit/3f5085fbf67bd315588bc7261ce2c14d02a3a81a)]

### Changed

- 🎨 修改eslint错误 [[5bdcbf9](https://github.com/scriptscat/scriptcat/commit/5bdcbf9afa9df31c4d0cc31ba4e359d8c87b04a2)]
- ♻️ 重构导入导出 [[6cd369e](https://github.com/scriptscat/scriptcat/commit/6cd369e6d30a8b5938b3cd717356439ad2c8aa75)]
- 🎨 修改GM_menu注册同名菜单只使第一个生效 [[bd16121](https://github.com/scriptscat/scriptcat/commit/bd1612105d4fd13af48c5152e379270dbfc60932)]
- 🎨 修改eslint代码 [[d9b9af0](https://github.com/scriptscat/scriptcat/commit/d9b9af06f7a71629be8cdc6de98aa6d8b67f24e3)]
- ⚡ 删除GM_getCookieStore使用GM_Cookie(&#x27;store&#x27;)操作 [[1ae5096](https://github.com/scriptscat/scriptcat/commit/1ae5096c903d6c984597ff46d4f41d4a03fb1b3b)]

### Fixed

- 🐛 修复对GM.*函数的支持 [[d9ee5c6](https://github.com/scriptscat/scriptcat/commit/d9ee5c6643cc3f2146c99703b58d786ca7e708da)]
- 🐛 修复GM.xmlHttpRequest h大写的问题 [#26](https://github.com/scriptscat/scriptcat/issues/26) [[5ebf3aa](https://github.com/scriptscat/scriptcat/commit/5ebf3aa3057be8f8280dfee69784edff421651c7)]
- 🐛 修复编辑页菜单栏样式错误 [[42b9a91](https://github.com/scriptscat/scriptcat/commit/42b9a91511f9dc1a225bea5568f6774123942ddf)]
- 🐛 修复后台脚本调试时unsafeHeader发送错误 [[328ca18](https://github.com/scriptscat/scriptcat/commit/328ca1864a87dafa0b4e022cdd0dd7a52883a5ba)]
- 🐛 修复沙盒内self、top、parent逃逸 [[eba7144](https://github.com/scriptscat/scriptcat/commit/eba71446e4b2206473284567a1cc6bac5ca5e045)]
- 🐛 修复GM函数this问题 [[9eb92cc](https://github.com/scriptscat/scriptcat/commit/9eb92cca14df9d48a7b5800c49bc903a8b480de5)]

### Miscellaneous

- 👔 兼容油猴match http* [[9ebdeb9](https://github.com/scriptscat/scriptcat/commit/9ebdeb96d9988843de35f0ddad73b179bdfbf863)]

## 0.7.7 (2021-12-17)

### Fixed

- 🐛 修复GM_setValue设置object实例时的错误 [[fa9dcbc](https://github.com/scriptscat/scriptcat/commit/fa9dcbcb39abb1de70eb0bee9fc72314958d44a8)]

### Miscellaneous

- 👔 只有中版本更新时才打开更新日志页面 [[74981dc](https://github.com/scriptscat/scriptcat/commit/74981dcbb3cd1e1cc31c3d88ababcabfc33529c5)]

## 0.7.6 (2021-12-13)
> 新增GM储存管理,开始尝试使用emoji来写changelog

### Added

- ✨ 储存增加重新加载与清空选项 [[db0559e](https://github.com/scriptscat/scriptcat/commit/db0559e32462d391136d455c64fd425413723484)]
- ✨ GM储存管理([#15](https://github.com/scriptscat/scriptcat/issues/15)) [[6a13ff2](https://github.com/scriptscat/scriptcat/commit/6a13ff2c75222809cfd4696a8ed89de12b93cd87)]

### Fixed

- 🐛 修复gm_xhr的response为空的问题 [[8ae251a](https://github.com/scriptscat/scriptcat/commit/8ae251a81cf4e3167b70bdb71e2711de07e1f314)]
- 🐛 修复同步时脚本错乱 [[606ac06](https://github.com/scriptscat/scriptcat/commit/606ac0652f1172ba0dd27c64b15437a51b0fca03)]
- 🐛 修复框架组件icon不显示 [[72376db](https://github.com/scriptscat/scriptcat/commit/72376db39b02466951e7c4305a30e0ab1db21fb0)]

## v0.7.5 (2021-12-08)

### Bugs fixed:
- `GM_registerMenuCommand`某些情况注册不上([`70399b3`](https://github.com/scriptscat/scriptcat/commit/70399b3b137051e378a36d4ca33b07ea4cf68b1a)) (@CodFrm)
- gm_xhr默认不带上origin([`70399b3`](https://github.com/scriptscat/scriptcat/commit/70399b3b137051e378a36d4ca33b07ea4cf68b1a)) (@CodFrm)
- 沙盒中globalThis指向沙盒global([`c15913c`](https://github.com/scriptscat/scriptcat/commit/c15913c3fe6531d48c2b1a1f42702ee3dc11a966)) (@CodFrm)
- 右侧悬浮按钮固定可能遮挡的问题([`84ed9a1`](https://github.com/scriptscat/scriptcat/commit/84ed9a105ab92cb5a057c3d15d9240bbc1ffbec7)) (@CodFrm)
- unsafe header覆盖失败([`8a28a9c`](https://github.com/scriptscat/scriptcat/commit/8a28a9cadf49852a25d8c58b216489c70b3ddc18)) (@CodFrm)
- GM_addStyle与tm管理器插入地方一致([`0375282`](https://github.com/scriptscat/scriptcat/commit/03752823d0a6f12d8dfefdf35bc19625719d066b)) (@CodFrm)

### Perf
- 图标加载速度优化([`5a74b19`](https://github.com/scriptscat/scriptcat/commit/5a74b193ac769e0af9481dff44577553449a3937)) (@CodFrm)


## v0.7.4 (2021-11-24)

### Bugs fixed:

- eval问题 & GM_deleteValue 调用错误([`d668452`](https://github.com/scriptscat/scriptcat/commit/d668452b318174c985263f0a3ccca7d5afaa2239)) (@CodFrm)
- FormData火狐无法clone导致错误([`e5190e3`](https://github.com/scriptscat/scriptcat/commit/e5190e3680e36e638f08085306ae05d9e5e44e2a)) (@CodFrm)

## v0.7.3 (2021-11-22)

### New feature:

- vscode自动连接([`dac2cc6`](https://github.com/scriptscat/scriptcat/commit/dac2cc6fed1de44a7e546989107892507b388837)) (@CodFrm)
- 用户配置支持动态多选([`6bf5b29`](https://github.com/scriptscat/scriptcat/commit/6bf5b29f75ae2b2adeb35216c7bdd3393cdb7ec0)) (@CodFrm)
- gm.xhr支持发送FormData数据([`693c410`](https://github.com/scriptscat/scriptcat/commit/693c410a7e7e0f96a947fef7c58ddd41f93cd8d4)) (@CodFrm)
- 添加*.user.bg.js后台脚本后缀监听([`05021c1`](https://github.com/scriptscat/scriptcat/commit/05021c124899514db4a82bf262e89992b52f1f4f)) (@CodFrm)

### Bugs fixed:

- 兼容油猴的 responseType json处理([`0d75d86`](https://github.com/scriptscat/scriptcat/commit/0d75d86f55b3c6439c89ca28cd5712dbc125ba0c)) (@CodFrm)
- responseType问题和gm_xhr url的相对位置处理([`288d751`](https://github.com/scriptscat/scriptcat/commit/288d75133c1b575c89365422cf6f8e23ee0cba9f)) (@CodFrm)
- eval执行脚本内方法([`4d0e056`](https://github.com/scriptscat/scriptcat/commit/4d0e0569eeb13cad852b52149bb0ca7ec32b89bb)) (@CodFrm)
- gm_xhr获取重定向后地址([`4906c79`](https://github.com/scriptscat/scriptcat/commit/4906c7950e5a4902f3d7262e431fac0034a5267b)) (@CodFrm)
- 沙盒兼容问题&某些情况下sourceUrl不显示的问题([`85cb130`](https://github.com/scriptscat/scriptcat/commit/85cb130b016c41b71c58b81e9f422acdd694278a)) (@CodFrm)
- 拉取数量显示错误([`106de02`](https://github.com/scriptscat/scriptcat/commit/106de02583ae08299ddd4d02fbfdd2140c9a7847)) (@CodFrm)
- 某些情况下菜单注册后不显示([`aff0bb4`](https://github.com/scriptscat/scriptcat/commit/aff0bb4bf595b8fb63bf8827f53e3f5e84e11b95)) (@CodFrm)
- 沙盒内可访问window上对象([`49a276c`](https://github.com/scriptscat/scriptcat/commit/49a276c00bb56e30186c70ee300b4ea58673aa50)) (@CodFrm)

## v0.7.2 (2021-11-07)
> 在此之前的脚本猫对GM_XHR的返回contentType做了判断,如果是json类型会自动转换成json给脚本,现在兼容油猴的做法,不对此进行自动的转化,需要手动转化,或者加上responseType.可能会导致某些脚本出现兼容性问题.

### New feature:

- GM_XHR支持返回set-cookie和处理xhr.response兼容问题([`53bac0b`](https://github.com/scriptscat/scriptcat/commit/53bac0b82ff1e5da4cf4d9bed67f6cac74b46675)) (@CodFrm)
- 脚本header悬停提示([`a0eabad`](https://github.com/scriptscat/scriptcat/commit/a0eabade47b775719c779b6ca63e4a86451338f7)) (@CodFrm)

### Bugs fixed:

- 安装脚本时代码对比反向问题([`bd769a0`](https://github.com/scriptscat/scriptcat/commit/bd769a01aa3e037d1b279ae958934565b2a7ac9b)) (@CodFrm)

## v0.7.1 (2021-10-26)
> 修复一个比较严重的bug,编辑本地脚本uuid每次发生改变导致同步多次的问题. 
> 
> 支持vscode扩展开发和脚本市场支持,具体可以看此视频: [脚本猫配合vscode开发（demo，想看看大家有啥意见）](https://www.bilibili.com/video/BV16q4y157CP)

### Bugs fixed:

- 编辑本地脚本uuid每次发生改变导致同步多次的问题([`7175c6f`](https://github.com/scriptscat/scriptcat/commit/7175c6f36122d88fceb7b44be94e603eb7dd6129)) (@CodFrm)

## v0.7.0 (2021-10-26)
> 支持vscode扩展开发和脚本市场支持,具体可以看此视频: [脚本猫配合vscode开发（demo，想看看大家有啥意见）](https://www.bilibili.com/video/BV16q4y157CP)

### New feature:

- vscode代码同步([`5750fb6`](https://github.com/scriptscat/scriptcat/commit/5750fb6daa3317a3d793df5d8e68da4f44a520b1)) (@CodFrm)
- 外部api用于脚本市场获取脚本状态([`8ce9ae9`](https://github.com/scriptscat/scriptcat/commit/8ce9ae990a735e17d4d1711cd17adcc299c39225)) (@CodFrm)
- 脚本列表拖动排序([`d3aa7ab`](https://github.com/scriptscat/scriptcat/commit/d3aa7abc64fc09818b16221e36fe2fe3781da6c8)) (@CodFrm)
- 通过链接安装([`00e4622`](https://github.com/scriptscat/scriptcat/commit/00e46227d42768b3e1d91abb8cc1f44948aca05b)) (@CodFrm)

### Bugs fixed:

- 面板脚本日志顺序错乱和非运行状态日志显示等待([`2c1fd8a`](https://github.com/scriptscat/scriptcat/commit/2c1fd8a1b975cd3c6c1729b16893597bf46b6ead)) (@CodFrm)
- 控制面板无法复制([`bcb3960`](https://github.com/scriptscat/scriptcat/commit/bcb39607001e83ac5f70021230f14840537cb87f)) (@CodFrm)

## v0.6.4
> 导入导出功能(兼容tampermonkey)和修复bug

* 优化新建脚本的origin
* 开启`GM_cookie`给前端脚本,并兼容tm的使用方法
* 导入导出json备份文件(兼容tampermonkey)
* 修复沙盒中无法使用eval的问题
* 修复match错误会影响其它脚本的问题

## v0.6.3
> 修复bug

* 优化权限批量确认问题
* 修复云同步有delete的情况下错误的问题
* 修复同步的订阅与脚本无关联的bug
* 修复订阅更新不同步的bug
* 修复`match`结尾`*`问题

## v0.6.2
> 支持某些油猴特性和修复bug

* 支持`document-body`
* 添加`GM_getResourceText`和`GM_getResourceURL`
* 添加`include/match`的tld顶域匹配支持
* 修复沙盒set属性问题
* 修复`GM_registerMenuCommand`重复注册显示的问题
* 修复更新页面脚本开启状态不一致的问题
* 沙盒处理只读的属性
* 处理`require`顺序
* 处理`match`,以`*.`开头的情况下也会匹配`xxx.com`

## v0.6.1
> 一些bug修复

* 用户信息管理页
* 油猴window.onxxxx兼容
* 优化安装页面显示
* 优化登录登出
* 修复弹出页新建脚本bug
* 修复老版本安装的脚本新版本无法正常执行的问题

## v0.6.0
> 两个大功能,订阅功能与云同步.(导入导出到本地在下两个小版本中发布,导入导出到云盘等其它存储计划中)
> 
> 云同步暂时只支持脚本与脚本订阅同步,用户配置同步后续会支持.不会支持value同步,开发者需要注意.
> 
> 新设备同步安装的脚本会根据: 前台脚本默认开启,后台脚本默认关闭的方式进行安装,脚本开启状态不会同步,需要用户重新开启或者关闭.
>
> 关于这方面有什么意见可以提[issue](https://github.com/scriptscat/scriptcat/issues)反馈

* 增加[脚本订阅](/dev/subscribe.md)功能
* 增加脚本云同步功能
* 优化脚本更新确认界面使用静默方式打开
* 优化脚本新建
* 修改脚本列表页`特性`栏为`来源`
* 修复油猴兼容性bug
* 修复无`namespace`的脚本会导致安装错误的问题
* 修复`resource`资源加载和释放问题
* 修复两位版本号对比失败的问题

## v0.5.3
> 修复bug

* 修复面板基本设置编辑不生效的问题
* 修复更新脚本选择脚本状态无效的问题
* 修复脚本更新运行状态显示错误

## v0.5.2
> cookie操作增强

* 支持对隐身窗口的cookie操作
* 增强`GM_cookie`函数,支持`delete/set/store`操作
* `GM_addValueChangeListener`支持返回tabid(后台脚本中)
* 增加`GM_getCookieStore`通过tabid,获取cookie store
* 增加`storageName`来规定value共享,移除原来的`namespace`共享
* 修复浏览器打开时脚本加载问题

## v0.5.1
> 优化界面UI,优化调试模式

* 更新界面UI,优化页面逻辑
* 优化后台脚本[调试模式](/dev/background.md#脚本调试)
* 修复cron表达式错误的时候,脚本列表不显示
* 移除`@console`

## v0.5.0
> **重大更新**,开始支持[CloudCat](/dev/cloudcat.md)

* 支持[CloudCat](/dev/cloudcat.md)
* 编辑操作增加导出/导入功能
* 添加通知信息
* 优化列表状态栏
* 沙盒优化
* 修复油猴API兼容问题
* 修复`match`问题

## v0.4.4
> v0.4.3 兼容Firefox处理以过审核.

* 处理Firefox sandbox逻辑
* 优化安装/权限确认页面UI
* 优化编辑器快捷键和工具条
* 修复某些情况下安装或更新时不显示脚本名的bug
* 修复`GM_xmlhttpRequest`的`arraybuffer,blob`支持
* 修复若干兼容油猴的bug

## v0.4.2
> 优化代码,UI调整

* 界面UI调整
* 增加`GM_xmlhttpRequest`所支持的`unsafe header`和支持`arraybuffer`,`nocache`,`user`,`password`,`overrideMimeType`,功能
* 增加运行日志查看功能,点击面板`运行状态`栏即可查看最后一次运行日志.具体请看:[console](/dev/meta.md#console)功能
* 修复`GM_notification`的`done`回调
* 优化调整代码列表排序逻辑
* 优化最后更新栏点击可进行脚本的手动检查更新

## v0.4.1
> 重大bug修复

* 修复split导致的前台脚本无法执行的问题
* 增加`GM_xmlhttpRequest`所支持的`unsafe header`

## v0.4.0

> 做了一些界面上的优化,增加了[用户配置](/dev/config.md)功能

* 增加控制台的UserConfig功能,详情请看[用户配置文档](/dev/config.md)
* 优化控制台编辑时`definition`后缀为`.d.ts`的地址,自动识别增加自动补全
* 优化控制台的运行日志ui
* 优化控制台脚本列表,`运行状态`列鼠标放置可显示下一次运行时间等描述
* 优化弹出页面ui,增加脚本运行数角标
* 优化弹出页面运行脚本页显示当前页面上所执行的脚本
* 优化弹出页面增加后台脚本项,可直接在弹出页上执行脚本
* 优化安装页面增加脚本的开启开关
* 支持`GM_registerMenuCommand`和`GM_unregisterMenuCommand`
* 支持`GM_xmlhttpRequest`填写一些unsafe的header

## v0.3.4

* 新建脚本默认开启(从远程安装的后端脚本依旧默认为不开启)
* 管理面板简单的分页功能
* 增加开机启动自动运行
* 支持`@require-css`直接引入css文件
* 支持`document-menu`执行方式
* 支持`@include`和`@exclude`
* 移除`@debug`,新增菜单条
* 修复若干bug

## v0.3.0
> 开始支持油猴脚本了

* 支持油猴脚本!暂时支持match进行匹配
* 支持`@require`引用其他脚本
* 将GM_set/getValue函数使其实时全局同步
* 添加了`CAT_click`API,可进行真实点击
* 支持了`GM_setClipboard`

## v0.2.0
> 第一个可用的版本

* 后台脚本,可以使你的脚本持续的运行在后台.
* 定时脚本,可以每日定时执行,每天通过脚本定时处理事务.可用于自动签到,定时提醒等功能.
* 基本的API,初步规划好了API规则
* 脚本管理面板
