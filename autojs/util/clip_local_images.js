//截取当前界面的图片的某一部分
//并存储在手机的 /storage/emulated/0/wx目录下

toast("开始");
//auto();//最好在脚本开头使用auto()函数来确保无障碍服务已经启用
//home()
sleep(1000);

//点击对话
var src =images.read("/storage/emulated/0/wx/点击对话.png");
var clip = images.clip(src, 1765, 941, 84, 60);//截取的位置
images.save(clip, "/storage/emulated/0/wx/"+"djdh2.png");//保存名