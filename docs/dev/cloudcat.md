# 云端执行

[CloudCat](https://github.com/scriptscat/cloudcat)是用于云端执行后台脚本的服务.

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
