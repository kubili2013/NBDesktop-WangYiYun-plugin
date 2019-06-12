let wangyiyun_plugin = Plugin.getPluginByName("网易云音乐插件");
let wangyiyun_config = JSON.parse(fs.readFileSync(wangyiyun_plugin.path + "plugin.json"))

let wangyiyun_template_tab = `
<div class="tab">
<h2>网易云音乐插件</h2>

<div class="list">
<span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span><select id="wangyiyun_type" 
style="margin-top: 2px;margin-bottom: 4px;background: #599bb3;background-image: linear-gradient(to bottom, #599bb3, #408c99);-webkit-border-radius: 8-moz-border-radius: 8;border-radius: 8px;text-shadow: 0px 1px 0px #3d768a;box-shadow: 0px 10px 14px -7px #276873;font-family: Arial;color: #ffffff;font-size: 16px;padding: 10px 25px 10px 25px;text-decoration: none;">     
<option value="0">歌单</option>
<option value="2">单曲</option>
</select>&nbsp;&nbsp;<br><br>
<span >歌单&nbsp;&nbsp;&nbsp;&nbsp;ID：</span><input name="music_id" id="wangyiyun_music_id" type="text" style="margin-top: 2px;margin-bottom: 4px;background: #599bb3;background-image: linear-gradient(to bottom, #599bb3, #408c99);-webkit-border-radius: 8-moz-border-radius: 8;border-radius: 8px;text-shadow: 0px 1px 0px #3d768a;box-shadow: 0px 10px 14px -7px #276873;font-family: Arial;color: #ffffff;font-size: 16px;padding: 10px 25px 10px 25px;text-decoration: none;">
<br><br>
<span>显示高度：</span><input name="music_id" id="wangyiyun_height" type="number" style="margin-top: 2px;margin-bottom: 4px;background: #599bb3;background-image: linear-gradient(to bottom, #599bb3, #408c99);-webkit-border-radius: 8-moz-border-radius: 8;border-radius: 8px;text-shadow: 0px 1px 0px #3d768a;box-shadow: 0px 10px 14px -7px #276873;font-family: Arial;color: #ffffff;font-size: 16px;padding: 10px 25px 10px 25px;text-decoration: none;">     
<br><br>
<span>自动播放：</span><input name="music_id" id="wangyiyun_autoplay" type="checkbox" style="height: 20px;width: 20px;vertical-align: middle;cursor: pointer;background: #599bb3;background-image: linear-gradient(to bottom, #599bb3, #408c99);text-shadow: 0px 1px 0px #3d768a;box-shadow: 0px 10px 14px -7px #276873;font-family: Arial;color: #ffffff;">     
<br><br>
<button id="wangyiyun-setting-btn" onclick="settingWangYiYun()">开启插件</button>&nbsp;&nbsp;<button id="wangyiyun-setting-btn" onclick="Plugin.endPlugin('网易云音乐插件')">移除插件</button>
</div>
</div>
<script>Controller.reInit();</script>
`;

function loadWangYiYun() {
    $(".menu").append('<li><a href="javascript:void(0)"><img src="' + wangyiyun_plugin.path + '/' + wangyiyun_plugin.image + '"><span>网易云音乐插件</span></a></li>');
    $(".content").append(wangyiyun_template_tab);
}

function settingWangYiYun(){
    debugger
    wangyiyun_config.setting.id =  $("#wangyiyun_music_id").val();
    wangyiyun_config.setting.type =  $("#wangyiyun_type").val();
    wangyiyun_config.setting.height =  $("#wangyiyun_height").val();
    wangyiyun_config.setting.autoplay =  $("#wangyiyun_autoplay").val() == "on" ? 1 : 0;
    fs.writeFileSync(wangyiyun_plugin.path + "plugin.json", JSON.stringify(wangyiyun_config, null, 4));
    // refresh
    ipcRenderer.send("reload-plugins");
    Plugin.startDesktopWidgetPlugin('网易云音乐插件')
}

$(function () {
    loadWangYiYun();
});