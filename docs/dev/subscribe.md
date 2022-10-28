---
id: subscribe
---


# 订阅模式

文件开头必须使用`UserSubscribe`而不是`UserScript`，安装时的链接推荐使用`user.sub.js`后缀，必须使用`https`链接。

订阅脚本仅会在安装时弹出安装界面由用户确认订阅，但后续的更新采用静默更新的方式，除非`connect`权限发生改变，否则不会弹出更新界面由用户确认。

一个订阅脚本可以描述所需要的多个脚本的安装链接，通过订阅模式安装的脚本使用静默安装，不会弹出确认安装页面，所安装的脚本也会展示在脚本列表中，但是`connect`权限会使用订阅中所声明的`connect`，而不会使用脚本自身的`connect`权限。

```js
// ==UserSubscribe==
// @name         xxx
// @description  订阅xxx系列脚本
// @version      0.1.0
// @author       You
// @connect      www.baidu.com
// @scriptUrl    https://script.tampermonkey.net.cn/48.user.js
// @scriptUrl    https://script.tampermonkey.net.cn/49.user.js
// ==/UserSubscribe==
```

## 订阅更新与脚本更新

根据用户设置的`更新间隔`，定时通过订阅的链接去进行检查更新，必须配置`version`才能生效。

订阅每次更新和变化会使用脚本链接与已安装的脚本进行比对，新的订阅中没有的脚本会进行删除，新增的脚本会进行静默安装。脚本的更新通过脚本自身的`version`去更新，与用户正常安装脚本的更新逻辑一致。

## 静默安装

订阅的脚本使用静默的方式进行安装，订阅新增/删除脚本时仅会弹出一个通知，不会再次由用户进行确认，脚本的更新机制不发生变化需要由用户确认，若用户勾选了`设置->非重要变更静默更新脚本`的选项，则按照改规则进行更新。由于静默更新的机制，请选择安全且值得信任的订阅方。


## metadata

订阅脚本中的某些metadata含义也将发生改变

### name

订阅名称（在订阅列表中也可以自行进行修改）

### description

订阅描述，用于描述本订阅所作用途

### version

订阅版本，如果忽略则将使用订阅脚本的内容是否发生改变去更新

### connect

获取网站的访问权限,请看`GM_cookie`和`GM_xmlhttpRequest`，通过订阅模式所安装的脚本中的`connect`会被订阅的`connect`所覆盖

### scriptUrl

订阅所需要安装的脚本链接