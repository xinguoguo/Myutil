//截取当前界面的图片的某一部分
//并存储在手机的 /storage/emulated/0/wx目录下

toast("开始");
//auto();//最好在脚本开头使用auto()函数来确保无障碍服务已经启用
//home()
sleep(1000);

//点击对话
//日常活动宝剑
var src =images.read("/storage/emulated/0/wx/银叶城镇.png");
var clip = images.clip(src, 2160, 623, 22, 29);//截取的位置
images.save(clip, "/storage/emulated/0/wx/"+"bj2.png");//保存名


toast("结束");