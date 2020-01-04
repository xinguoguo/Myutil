
/**
 * 防检测,随机点击
 */
function rand_click (x,y,pow){
    x=random(0, pow)+x;
    y=random(0, pow)+y;
    click(x,y);
    console.log('点击: %d,%d,', x,y); 
}

function user_define_main(){
    auto();//最好在脚本开头使用auto()函数来确保无障碍服务已经启用
    toast("开始");
    //auto();//最好在脚本开头使用auto()函数来确保无障碍服务已经启用
    //home()
    requestScreenCapture(true);//需要在auto.js界面内使用
    sleep(1000);
    //home();
    launchApp("阿拉德之怒");
    sleep(2000);//必须等待一下 防止截屏全黑
    var dt = images.read("/storage/emulated/0/wx/zai.png");
    while(true){
        var src =captureScreen()
        var p = findColor(src, "#fafafd", {
            region: [1950, 195, 22, 12],
            threshold: 4
        });
        var p2 = findImage(src, dt, {
            region: [1895, 196, 51, 48],
            threshold: 0.99
        });
        if(p&&p2){
            toast("找到图片点击  "+"再来一次"); 
            rand_click(1895,196,22)
            sleep(5000)
        }else{
            appear_shop()
            sleep(5000)
        }
    }
}
//神秘商店
function appear_shop(){
   var dt2 = images.read("/storage/emulated/0/wx/djdh.png");
{
    src =captureScreen();
    p = findImage(src, dt2, {
        region: [1765, 941, 84, 60],
        threshold: 0.99
    });
    if(p){
        toast("点击对话"); 
        rand_click(1076,773,53)
        sleep(2000)
        rand_click(1821,153,13)//关闭商店
        sleep(1000)
    }
}
   
}
//入口
user_define_main()