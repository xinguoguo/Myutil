//截取当前界面的图片的某一部分
//并存储在手机的 /storage/emulated/0/wx目录下

toast("开始");
//auto();//最好在脚本开头使用auto()函数来确保无障碍服务已经启用
//home()
sleep(1000);

//斗牛节结束2
var src =images.read("/storage/emulated/0/wx/斗牛节结束.png");
var clip = images.clip(src, 1192, 314, 48, 46);//截取的位置
images.save(clip, "/storage/emulated/0/wx/"+"dnjjs2.png");//保存名
toast("结束");