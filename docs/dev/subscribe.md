# 订阅模式

注释开头与结尾使用`UserSubscribe`，使用`user.sub.js`(非强制)后缀或者使用链接进行导入安装，必须使用`https`链接。

订阅脚本仅会在安装时弹出安装界面由用户确认订阅，但后续的更新采用静默更新的方式，除非`connect`权限发生改变，否则不会弹出更新界面由用户确认。

一个订阅脚本可以描述所需要的多个脚本的安装链接，通过订阅模式安装的脚本使用静默安装模式，不会弹出确认安装页面，所安装的脚本也会展示在脚本列表中，但是`connect`权限会使用订阅中所声明的`connect`，而不会使用脚本自身的`connect`权限。

订阅脚本每次更新或者变化会使用脚本链接与已安装的脚本进行比对，新订阅的链接中没有的会进行删除，新增的会进行安装。脚本的更新通过脚本自身的`version`去进行静默更新。



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



### 静默安装/更新

平常的`.user.js`用户脚本安装或者更新都需要进行权限和变更的确认。

订阅使用静默的方式，静默安装/更新仅会弹出一个通知，不会再次由用户进行确认。由于静默更新的机制，请选择安全且值得信任的订阅方。


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



