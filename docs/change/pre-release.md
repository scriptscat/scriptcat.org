---
id: pre-release
---

# 预发布

预发布版本是在正式发布之前的版本.它们通常用于测试新功能和修复问题,预发布版本的版本号包含一个预发布标识符,例如:
`1.0.0-alpha.1`.脚本猫会存在以下两种类型的预发布版本:

- alpha 版本,这是一个非常早期的版本,功能不完善,可能会有很多 bug,但是可以用来测试和体验,只能手动安装.
- beta 版本,这是一个功能完善的版本,但是可能会有一些 bug,未来会在扩展商店进行发布.

另外除了预发布以外,脚本猫每次功能完善/bug
修复合并到主分支后都会在[Github Action](https://github.com/scriptscat/scriptcat/actions/workflows/build.yaml)上打包构建一次扩展,如果你想体验最新或者修复的内容可以前往[Github Action](https://github.com/scriptscat/scriptcat/actions/workflows/build.yaml)页进行下载.

## 0.10.0-beta.1 (2022-11-09)

### Fixed

- 🐛 修复打包引起的错误 [[ee034bc](https://github.com/scriptscat/scriptcat/commit/ee034bc7c491d48d7aec8d353cbbe496f7649add)]


## 0.10.0-beta (2022-11-08)

### Added

- ✨ 支持eslint [[e55d23f](https://github.com/scriptscat/scriptcat/commit/e55d23f4a15ff3831de94ea7a1c0d72d0c0c071f)]

### Changed

- ♻️ 重构脚本订阅 [[8b1a73c](https://github.com/scriptscat/scriptcat/commit/8b1a73cdc2428048267c83c79742d25397d71f37)]
- ♻️ 重构导出云脚本 [[844d424](https://github.com/scriptscat/scriptcat/commit/844d424bcb755592f19a4d11ad749941792ce27d)]

### Fixed

- 🐛 修复eslint对后台脚本的支持与兼容火狐 [[2343339](https://github.com/scriptscat/scriptcat/commit/23433391d1e54bdda3d0e61642e3768d3dfb91fe)]
- 🐛 修复GM xhr header为空时发送默认值与UserConfig默认值的问题 [[e3a04db](https://github.com/scriptscat/scriptcat/commit/e3a04db58d0c15935ba642240a4869a20049ab2a)]
- 🐛 修复火狐兼容问题 [[88a6d4a](https://github.com/scriptscat/scriptcat/commit/88a6d4a3ad24bef64ba37035b02a50ad8ece8c38)]
- 🐛 修复GM_xhr unsafeHeader 发送错误、popup支持运行 [[02d1a45](https://github.com/scriptscat/scriptcat/commit/02d1a45a27f871b237ecce63c2cb22e7436ee726)]


## 0.10.0-alpha.1 (2022-10-31)

### Added

- ✨ webdav云同步 [[b419c91](https://github.com/scriptscat/scriptcat/commit/b419c91d1e7047390aa4c601a3a6ed3d54a165ba)]

### Changed

- ♻️ 储存管理 [[1067285](https://github.com/scriptscat/scriptcat/commit/106728515d162e3b8d90d49d31f472cb4a10ca25)]
- ♻️ 重构userconfig [[43a332d](https://github.com/scriptscat/scriptcat/commit/43a332db99b0b075762f1e06d3e2569b7a7f949c)]

### Fixed

- 🐛 修复include、GM.*和ExternalMessage问题 [[fe96990](https://github.com/scriptscat/scriptcat/commit/fe969903d855ed385dc91214f6d46cff1963deeb)]
- 🐛 修复文档链接 [[33041e4](https://github.com/scriptscat/scriptcat/commit/33041e45a947e99a8478e3ea53f4eb422df9a65e)]

### In Process

- 🚧 订阅脚本
- 🚧 VSCode 连接
- 🚧 导出云端脚本

### Miscellaneous

-  👷 CI打包时加上commit id [[313e44e](https://github.com/scriptscat/scriptcat/commit/313e44e3f7a55077d6b273e7483f1fc08d2c36da)]
-  👷 优化打包产物 [[7ca5c13](https://github.com/scriptscat/scriptcat/commit/7ca5c139ffc97c6f48f6457c117ded2cb591b21e)]
-  👷 优化ci构建与同步目录 [[217fa99](https://github.com/scriptscat/scriptcat/commit/217fa991b78b6e8232e8b03bfee5da6cf5894a8b)]


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
