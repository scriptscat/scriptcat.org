# 更新日志

## v0.6.2
> 添加油猴`resource`的支持和修复bug

* 支持`document-body`
* 添加`GM_getResourceText`和`GM_getResourceURL`
* 添加`include/match`的tld顶域匹配支持
* 修复沙盒set属性问题
* 修复`GM_registerMenuCommand`重复注册显示的问题
* 修复更新页面脚本开启状态不一致的问题
* 沙盒处理只读的属性
* 处理`require`顺序

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
