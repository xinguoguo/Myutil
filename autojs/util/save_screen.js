//截取当前界面的图片的某一部分
//并存储在手机的 /storage/emulated/0/wx目录下
//需要在auto.js界面内使用

toast("开始");
//auto();//最好在脚本开头使用auto()函数来确保无障碍服务已经启用
//home()
requestScreenCapture(true);//需要在auto.js界面内使用
launchApp("阿拉德之怒");
sleep(3000);
//日常活动宝剑
var src = captureScreen();//截取当前屏
images.save(src, "/storage/emulated/0/wx/"+"日常.png");//保存名
//
toast("结束");