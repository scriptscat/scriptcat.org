---
id: meta
---

# 描述文档

`==UserScript==` 中的内容,用于描述脚本所需要的权限和脚本的信息作用等,在脚本的最开始的位置.

```js
// ==UserScript==
// @name         New Userscript
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @crontab      * * once * *
// ==/UserScript==
```

## 主要值

### name

脚本名称

### namespace

脚本命名空间，`name+namepsace`确认脚本的唯一性

### version

脚本的版本,建议遵循[语义化版本规则](https://semver.org/lang/zh-CN/),在检测到脚本的版本变化后,会提示用户进行更新等操作.

### description

对于脚本的详细描述

### author

脚本作者

### run-at

脚本的运行时间

| 值             | 运行时                                                         | 支持                   |
| -------------- | -------------------------------------------------------------- | ---------------------- |
| document-start | 在前端匹配到网址后,以最快的速度注入脚本到页面中                | v0.3.0                 |
| document-end   | DOM 加载完成后注入脚本,此时页面脚本和图像等资源可能仍在加载    | v0.3.0                 |
| document-idle  | 所有内容加载完成后注入脚本                                     | v0.3.0                 |
| document-body  | 脚本只会在页面中有 body 元素时才会注入                         | v0.6.2                 |
| document-menu  | 在页面右键时会显示一个菜单,点击时运行脚本,脚本名称作为菜单名称 | v0.3.4-v0.9.4(🔥 移除) |

对于 menu 图标可参考:[Unicode Symbols](https://unicode-table.com/en/)和[emoji](https://www.emojiall.com/zh-hans)

### run-in

指定脚本注入的环境：`@run-in normal-tabs` 普通标签、`@run-in incognito-tabs` 隐身标签

### early-start (v1.1.0+)

当 run-at 为 document-start 时，脚本会尽早执行，但是依旧无法保证比页面更快的加载

当你定义了 `@run-at document-start` 后，可以再增加`@early-start`来让脚本比页面更快加载：[example](https://github.com/scriptscat/scriptcat/blob/main/example/early-start.js)

### storageName 🧪

`Value`的存储空间，同一`storageName`下的数据可以共享和通信。这是脚本猫独有的.

### background

表示本脚本为后台脚本,需要运行在后台环境,具体请看[后台脚本](./background.md#后台脚本)

### crontab

表示脚本为定时脚本,需要有 cron 表达式值,只能存在一个 cron 表达式,会在后台环境中定时运行,具体请看[定时脚本](./background.md#定时脚本)

### match

被 match 的 url 才会运行脚本，遵循[Match patterns](https://developer.chrome.com/docs/extensions/mv3/match_patterns/)，match 中使用*表示通配，tld 表示匹配顶域，域名以`*.`开头也会匹配`xxx.com`:

| 值                               | 正确案例                                                                                                                                | 错误案例                                 |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `http://scriptcat.org/doc/match` | `http://scriptcat.org/doc/match`                                                                                                        | `http://scriptcat.org/doc/runAt`         |
| `*://*/param?*`                  | `https://scriptcat.org/param` \| `http://scriptcat.org/param?search=油猴`                                                               | `https://scriptcat.org/test/param`       |
| `*://*/prefix*suffix`            | `http://scriptcat.org/prefix/suffix` \| `http://scriptcat.org/prefix/mid/suffix` \| `http://scriptcat.org/prefixsuffix`                 | `http://scriptcat.org/prefix/suffix/end` |
| `http*://scriptcat.org/*`        | `https://scriptcat.org/` \| `https://scriptcat.org/doc` \| `http://scriptcat.org/doc/match` \| `http://scriptcat.org/param?search=油猴` | `https://doc.scriptcat.org/`             |
| `http*://scriptcat.org/doc/*`    | `https://scriptcat.org/doc` \| `http://scriptcat.org/doc/match`                                                                         | `http://scriptcat.org/param?search=油猴` |
| `http*://scriptcat.tld/doc/*`    | `https://scriptcat.cn/doc` \| `http://scriptcat.net.cn/doc/match`                                                                       | `http://google.com/param?search=油猴`    |
| `http*://*.scriptcat.org/doc/*`  | `https://scriptcat.cn/doc` \| `http://www.scriptcat.net.cn/doc/match`                                                                   | `http://google.com/param?search=油猴`    |

### include

可以使用 * 进行模糊匹配，允许不标准的 URL

### exclude

不匹配 url，表达式与 include 相同

### grant

申请 API 权限,需要申请了 API 之后才能调用,api 列表请看:[API 文档](./api.md)和[CAT API 文档](./cat-api.md).

两个特殊的值:

- **none**: 表示不在沙盒环境中运行,直接存在页面环境中,此环境下无法使用任何的 GM API,可以直接访问页面的`window`对象.
- **unsafeWindow**在沙盒环境中如果需要访问页面的`window`对象,需要使用`unsafeWindow`来进行访问.(tm 不需要声明这个,为了兼容只能去了,好不规范啊.)

### connect

获取网站的访问权限,请看`GM_cookie`和`GM_xmlhttpRequest`

### resource

引入资源文件,声明完`@resource`后,可使用`GM_getResourceText`/`GM_getResourceURL`获取信息

```js
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico
// @resource html https://bbs.tampermonkey.net.cn/
// @resource xml https://bbs.tampermonkey.net.cn/sitemap.xml
// 添加资源校验
// @resource icon https://bbs.tampermonkey.net.cn/favicon.ico#md5=xxx;sha256=xxx
```

### require

引入外部 js 文件,可以进行[资源校验](#资源校验)

### noframes

表示脚本不运行在`<frame>`中

### definition

一个`.d.ts`文件的引用地址,能够自动补全编辑器的自动提示

### antifeature

这是与脚本市场有关的，不受欢迎的功能需要加上此描述值，例如：

```js
// @antifeature ads 脚本拥有广告
// @antifeature referral-link 该脚本会修改或重定向到作者的返佣链接
```

## 额外描述值

### license

当前脚本的开源协议

### updateURL

检查更新必须要求远程脚本有`@version`标签才能生效

脚本检查更新的链接,不设置默认为链接的`user.js=>meta.js`,无`user.js`的默认为当前链接.

如果配置了`@updateURL`必须也得配置`@downloadURL`才能使`@updateURL`生效

### downloadURL

脚本更新的下载地址

### supportURL

支持站点,bug 反馈页面

### homepage, homepageURL, website

脚本主页

### source

脚本源码页

### icon, iconURL, defaulticon

脚本图标

### icon64， icon64URL

64x64 大小的脚本图标

### 附注

### 资源校验

使用 md5,sha1,sha224,sha256,sha384,sha512 方法对资源进行校验防止篡改,不同的校验方式之间可用`;`或者`,`分开,例如:

```js
// @require https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js#md5=d55836f30c097da753179f82fa6f108f;sha256=a476ab8560837a51938aa6e1720c8be87c2862b6221690e9de7ffac113811a90
```
