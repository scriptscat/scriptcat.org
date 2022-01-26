# 云端执行

[CloudCat](https://github.com/scriptscat/cloudcat)是用于云端执行后台脚本的服务.

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

### cloudCat

声明此脚本可以使用`CloudCat`运行

### cloudServer

默认的云服务器地址


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

