
function dragFunc(Drag) {
    Drag.onmousedown = function(event) {
        var ev = event || window.event;
        event.stopPropagation();
        var disX = ev.clientX - Drag.offsetLeft;
        var disY = ev.clientY - Drag.offsetTop;
        document.onmousemove = function(event) {
            var ev = event || window.event;
            Drag.style.left = ev.clientX - disX + "px";
            Drag.style.top = ev.clientY - disY + "px";
            Drag.style.cursor = "move";
        };
    };
    Drag.onmouseup = function() {
        document.onmousemove = null;
        this.style.cursor = "default";
    };
}

let wangyiyun_plugin = getPluginByName("网易云音乐插件");
let wangyiyun_webview = document.createElement('webview');
wangyiyun_webview.setAttribute("src","http://music.163.com/outchain/player?type=" + wangyiyun_plugin.setting.type + "&id=" + wangyiyun_plugin.setting.id + "&auto=1&height=" + wangyiyun_plugin.setting.height);
wangyiyun_webview.setAttribute("style","position:absolute;top:100px;right:100px;width:330px;height:" + ( wangyiyun_plugin.setting.height + 20) + "px;");
dragFunc(wangyiyun_webview);
document.body.append(wangyiyun_webview);