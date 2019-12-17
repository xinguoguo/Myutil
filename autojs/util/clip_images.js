//截取当前界面的图片的某一部分
//并存储在手机的 /storage/emulated/0/wx目录下
//需要在auto.js界面内使用

toast("开始");
//auto();//最好在脚本开头使用auto()函数来确保无障碍服务已经启用
//home()
requestScreenCapture(true);//需要在auto.js界面内使用
//打开相册//launchApp("阿拉德之怒");//home();
launchApp("阿拉德之怒");

sleep(1000);
//放大镜位置
// var src = captureScreen();//截取当前屏
// var clip = images.clip(src, 2205, 8, 36, 30);//截取的位置
// images.save(clip, "/storage/emulated/0/wx/"+"fdj.png");//保存名


//再来一次位置
//var src = captureScreen();//截取当前屏
//var clip = images.clip(src, 1895, 196, 51, 48);//截取的位置
//images.save(clip, "/storage/emulated/0/wx/"+"zai.png");//保存名

//日常活动宝剑
var src = captureScreen();//截取当前屏
var clip = images.clip(src, 1895, 196, 51, 48);//截取的位置
images.save(clip, "/storage/emulated/0/wx/"+"zai.png");//保存名
//
toast("结束");