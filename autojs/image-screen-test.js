
auto();//最好在脚本开头使用auto()函数来确保无障碍服务已经启用
requestScreenCapture(true);
launchApp("阿拉德之怒");
sleep(1000);
var dt = images.read("/storage/emulated/0/wx/dnjjs.png");
var dt2= images.read("/storage/emulated/0/wx/dnjjs2.png");
sleep(2000);
//截图并找图
var p = findImage(captureScreen(), dt, {
    region: [913, 356, 22, 25],//截取位置
    threshold: 0.99
});

var p2 = findImage(src, dt2, {
    region: [1192, 314, 48, 46],
    threshold: 0.99
});
if(p&&p2){
    toast("找到了图标啦: " + p);
}else{
    toast("在桌面没有找到图标XXXXXX");
}
