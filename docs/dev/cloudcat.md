---
icon: cache
---


# 云端执行

> 提供了多种云端的运行方式，详情请看[运行环境](#运行环境)。另外[CloudCat](https://github.com/scriptscat/cloudcat)是用于云端执行后台脚本的服务，是一个FAAS平台，还在开发中。

⚠请注意⚠,上传到云端后,定时脚本表达式中的`once`语义会进行改变,将`once`之前的时间替换成最小值运行.

例如:

* `* * once * *`=>`0 0 * * *` 每天运行一次 转化为 每天的00:00分运行
* `* 1-23 once * *`=>`0 1 * * *` 每天的1-23点中运行一次 转化为 每天的01:00分运行
* `* 1,3,5 once * *`=>`0 1 * * *` 每天1点3点5点中运行一次 转化为 每天的01:00分运行
* `* */4 once * *`=>`0 0 * * *` 每天每隔4小时运行一次 转化为 每天的00:00分运行
* `* 1-23/4 once * *`=>`0 1 * * *` 每天的1-23点中每隔4小时运行一次 转化为 每天的01:00分运行
* `* 10 once * *`=>`0 10 * * *` 每天的10点运行一次 转化为 每天10时的00分运行
* `* * * once *`=>`0 0 1 * *` 每月运行一次 转化 每月的1号00:00分运行

## CloudCat附加描述

一个参考的脚本：[bilibili自动签到](https://scriptcat.org/script-show-page/48)

### cloudCat

声明此属性脚本可以使用`CloudCat`方式运行，当脚本有此选项后在脚本列表中会显示一个云端执行的按钮，点击后可以选择执行方式，执行方式请看[运行环境](#运行环境)

![image-20220203225847694](/cloudcat/image-20220203225847694.png)

### cloudServer

> 与cloudcat相关,还未实现

默认的cloudcat服务器地址


### exportValue

描述要导出到云端的Value,可以存在多个描述.

```ts
// @exportValue key1,key2,key3
// @exportValue key4,key5,key6
```

### exportCookie

描述要导出到云端的cookie,可以存在多个描述.参数使用`GM_cookie`的`CookieDetails`进行描述,例如:

```ts
// 如下将导出https://docs.scriptcat.org/use/中name为cookie1的cookie
// @exportCookie url=https://docs.scriptcat.org/use;name=cookie1

// 将导出scriptcat.org域所有的cookie
// @exportCookie domain=scriptcat.org

// 所有可用参数如下:
// @exportCookie domain=scriptcat.org;url=https://docs.scriptcat.org/use;name=cookie1;path=/use;secure=true;session=true
```

## API支持变化
> 暂时只支持以下API,若无特殊说明,表示与原API一样.

### GM_xmlhttpRequest


### GM_notification


### GM_log

### GM_getValue

暂时只支持获取`@exportValue`导出的value,不支持set/delete/list等方法

## 运行环境

### 本地

将导出一个zip包,解压进入文件夹后执行如下命令,可在本地执行,需要本地有nodejs的环境

```bash
npm i
node index.js
```


### 腾讯云

请先在[**访问密钥**](https://console.cloud.tencent.com/cam/capi)创建腾讯云的密钥，如果是子账号请注意需要给子账号分配云函数的权限；然后在[**函数服务**](https://console.cloud.tencent.com/scf/list)开通函数服务，每个月有一定的免费额度；地域默认为上海，如有特殊需求可自行调整，点击上传后会自动根据`@crontab`创建定时触发器，定时运行函数。

![image-20220203224956248](/cloudcat/image-20220203224956248.png)
