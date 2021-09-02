# 更新日志

## v0.5.1
> 更新界面UI,新增[订阅模式](/dev/subscribe.md)

* 更新界面UI,优化页面逻辑
* 新增[订阅模式](/dev/subscribe.md)
* 修复crontab表达式错误的时候,脚本列表不显示

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
