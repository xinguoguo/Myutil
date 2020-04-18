//并存储在手机的 /storage/emulated/0/wx目录下
auto();//最好在脚本开头使用auto()函数来确保无障碍服务已经启用
toast("开始");
sleep(1000);
var src =images.read("/storage/emulated/0/wx/角色选择.png");
var dt = images.read("/storage/emulated/0/wx/jiaose.png");

var p = findImage(src, dt, {
    region: [1506, 37, 39, 36],//截取位置
    threshold: 0.99
});
if(p){
    toast("找到了图标啦: " + p);
}else{
    toast("在桌面没有找到图标XXXXXX");
}