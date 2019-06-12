# NBDesktop 网易云音乐插件使用手册

## 安装方法

* 下载本插件 `clone or download` --> `Download ZIP`
* 解压到 `Steamapp-common/NB Desktop/plugins/` 文件夹下
* 重启 `NB Desktop`，个性设置，插件，勾选后便可立即启用

## 设置方法

* 在网易云音乐网站上找寻自己喜欢的网易云音乐歌单或者单曲
* 歌单页面上有 `生成外链播放器` 选项，如果提示版权问题，那么这个就用不了了。
* 没有版权限制的歌单点击 `生成外链播放器`，跳转到另外一个网页。
* 找到网页中的HTML代码，例如:
```
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=413961906&auto=1&height=66"></iframe>
```
* 我们需要提取其中的`id`,`type`,`height`,`auto`填写到启用插件后的设置中去。
* 启用网易云音乐插件后，会看见网易云音乐插件的设置选项
* 选择 `歌单` or `单曲`，填写歌单ID，填写显示高度，勾选是否自动播放
* 点击开启插件，选择显示器
* 成功

