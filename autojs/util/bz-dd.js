
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
        var p = findColor(src, "#2d3578", {
            region: [2106, 383, 29, 23],
            threshold: 4
        });
        if(p){
            toast("找到图片点击  "+"返回城镇"); 
            rand_click(1990,392,22);
            sleep(5000)
        }else{
            jr_fb();
            appear_shop()
            sleep(3000)
        }
        
    }
}
//神秘商店
function appear_shop(){
   var dt2 = images.read("/storage/emulated/0/wx/djdh.png");
{
    src =captureScreen();
  var p = findImage(src, dt2, {
        region: [1765, 941, 84, 60],
        threshold: 0.99
    });
    if(p){
        toast("点击对话"); 
        sleep(1000)
        rand_click(1076,773,53)
        sleep(2000)
        rand_click(1821,153,13)//关闭商店
        sleep(1000)
    }
}  
}

//进入副本
function jr_fb(){
    var dt3 = images.read("/storage/emulated/0/wx/yqhy.png");
 {
     src =captureScreen();
    var p = findImage(src, dt3, {
         region: [1616, 504, 28, 21],
         threshold: 0.99
     });
     var p2 = findColor(src, "#3ba2ec", {
        region: [1750, 892, 39, 14],
        threshold: 4
    });
    //if(p2){
    if(!p&&p2){
         toast("进入副本"); 
         sleep(1000)
         rand_click(1731,922,53)
         sleep(1000)
     }
 }  
 }

//入口
user_define_main()