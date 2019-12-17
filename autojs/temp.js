toast("开始");
//auto();//最好在脚本开头使用auto()函数来确保无障碍服务已经启用
//home()
requestScreenCapture(true);//需要在auto.js界面内使用
//打开相册//launchApp("阿拉德之怒");//home();
launchApp("阿拉德之怒");
sleep(1000);
var src = captureScreen();//截取当前屏
images.save(src, "/storage/emulated/0/wx/"+"再来一次.png");//保存名
//
toast("结束");