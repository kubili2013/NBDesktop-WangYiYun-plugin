
function dragFunc_wangyi(Drag) {
    
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

    Drag.onmouseover = function(){
        this.style.cursor = "move";
    }
    Drag.onmouseout = function(){
        this.style.cursor = "default";
    }
}

let wangyiyun_plugin = getPluginByName("网易云音乐插件");
let div = document.createElement('div');
div.setAttribute("style","padding:30px;display:inline-block;border:none;position:absolute;top:100px;right:100px;width:390px;height:" + (parseInt(wangyiyun_plugin.setting.height) + 80)  + "px;");

let wangyiyun_webview = document.createElement('iframe');
wangyiyun_webview.setAttribute("src","http://music.163.com/outchain/player?type=" + wangyiyun_plugin.setting.type + "&id=" + wangyiyun_plugin.setting.id + "&auto=" + wangyiyun_plugin.setting.autoplay + "&height=" + wangyiyun_plugin.setting.height);
wangyiyun_webview.setAttribute("style","border:none;width:330px;height:" + (parseInt(wangyiyun_plugin.setting.height) + 20)  + "px;");
div.append(wangyiyun_webview);
document.body.append(div);

dragFunc_wangyi(div);