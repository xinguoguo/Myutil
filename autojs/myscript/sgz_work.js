var roles_x=[580,884,1221,1573,546,897,1232,1569];
var roles_y=[251,254,256,253,634,654,648,652];
var src,dt,dt2,p,p2;
var dt3;//作为子函数中局部变量的引用
var START=6;
var END=7;//0-7
/**
 * 防检测,随机点击
 */
function rand_click (x,y,pow){
    x=random(0, pow)+x;
    y=random(0, pow)+y;
    click(x,y);
    console.log('点击: %d,%d,', x,y); 
}

function yy_map_2(){
//前往地图
dt = images.read("/storage/emulated/0/wx/fdj.png");
while(true){
    src =captureScreen();
    p = findImage(src, dt, {
        region: [2205, 8, 36, 30],
        threshold: 0.99
    });
    if(p){
        toast("找到地图"); 
        rand_click(2000,72,55)
        sleep(500)
        rand_click(1918,363,75)
        toast("前往银叶"); 
        break;
    }else{
        sleep(1000)
    }
}
//挑战港口郊外
dt=images.read("/storage/emulated/0/wx/gkjw.png");
while(true){
    src =captureScreen();
    p = findImage(src, dt, {
        region: [748, 744, 35, 34],
        threshold: 0.99
    });
    if(p){
        toast("到达银叶,选择港口郊外"); 
        rand_click(888,596,111);
        sleep(1000);
        break;
    }else{
        sleep(2000);
    }
}

dt=images.read("/storage/emulated/0/wx/gkjwkstz.png");
while(true){
    src =captureScreen();
    p = findImage(src, dt, {
        region: [240, 222, 36, 18],
        threshold: 0.99
    });
    if(p){
        toast("开始挑战港口郊外"); 
        rand_click(1678,927,33);
        sleep(1000);
        break;
    }else{
        sleep(2000)
    }
}
//再次挑战
sleep(35000)
dt = images.read("/storage/emulated/0/wx/zai.png");
while(true){
    var src =captureScreen()
    p = findImage(src, dt, {
        region: [1895, 196, 51, 48],
        threshold: 0.99
    });
    if(p){
        toast("再来一次"); 
        rand_click(1895,196,22)
        sleep(5000)
        break;
    }else{
        appear_shop()
        sleep(2000)
    }
}
//返回城镇
sleep(35000)
dt = images.read("/storage/emulated/0/wx/zai.png");
while(true){
    var src =captureScreen()
    p = findImage(src, dt, {
        region: [1895, 196, 51, 48],
        threshold: 0.99
    });
    if(p){
        toast("返回城镇"); 
        rand_click(1850,60,44)
        sleep(5000)
        break;
    }else{
        appear_shop()
        sleep(2000)
    }
}
}

function day_play(){
//日常任务
toast("开始日常任务"); 

//进入日常界面
dt = images.read("/storage/emulated/0/wx/fdj.png");
while(true){
    src =captureScreen();
    p = findImage(src, dt, {
        region: [2205, 8, 36, 30],
        threshold: 0.99
    });
    if(p){
        toast("点击日常"); 
        sleep(1500)
        rand_click(2162,628,13)
        rand_click(2162,628,13)
        sleep(1500)
        rand_click(216,276,49)//点击日常玩法
        break;
    }else{
        sleep(2000)
    }
}

//斗牛节两次
bullfight()
sleep(8000)
bullfight()
sleep(8000)
//勇者之塔
tower_fight()
sleep(8000)
//寻宝
treasure()
sleep(8000)
//退出日常
quit_day_play()
}

function bullfight(){
//斗牛节
toast("斗牛节"); 
dt = images.read("/storage/emulated/0/wx/dnj.png");
while(true){
    src =captureScreen();
    p = findImage(src, dt, {
        region: [913, 356, 22, 25],
        threshold: 0.99
    });
    if(p){
        toast("前往斗牛节"); 
        rand_click(1060,380,33)
        sleep(1000)
        break;
    }else{
        sleep(2000)
    }
}

//开始斗牛节
dt = images.read("/storage/emulated/0/wx/dnjks.png");
while(true){
    src =captureScreen();
    p = findImage(src, dt, {
        region: [724, 661, 24, 46],
        threshold: 0.99
    });
    if(p){
        toast("开始斗牛节"); 
        rand_click(1513,907,47)
        sleep(1000)
        break;
    }else{
        sleep(2000)
    }
}

sleep(90000)
//退出斗牛节
dt = images.read("/storage/emulated/0/wx/dnjjs.png");
dt2= images.read("/storage/emulated/0/wx/dnjjs2.png");
while(true){
    src =captureScreen();
    p = findImage(src, dt, {
        region: [928, 256, 39, 35],
        threshold: 0.99
    });
    p2 = findImage(src, dt2, {
        region: [1192, 314, 48, 46],
        threshold: 0.99
    });
    if(p&&p2){
        toast("斗牛节结束"); 
        sleep(2000)
        rand_click(650,250,77)
        sleep(4000)
        p=false
        p2=false//清空
        break
    }else{
        sleep(2000)
    }
}

}

function tower_fight(){
//勇者之塔
toast("勇者之塔"); 
dt = images.read("/storage/emulated/0/wx/dnj.png");
while(true){
    src =captureScreen();
    p = findImage(src, dt, {
        region: [913, 356, 22, 25],
        threshold: 0.99
    });
    if(p){
        toast("前往勇者之塔"); 
        rand_click(1837,381,33)
        sleep(1000)
        break;
    }else{
        sleep(2000)
    }
}
//开始勇者之塔
dt = images.read("/storage/emulated/0/wx/kst.png");
while(true){
    src =captureScreen();
    p = findImage(src, dt, {
        region: [1841, 122, 36, 27],
        threshold: 0.99
    });
    if(p){
        toast("开始勇者之塔"); 
        rand_click(1756,896,53)
        sleep(1000)
        break;
    }else{
        sleep(2000)
    }
}
//点击对话
dt = images.read("/storage/emulated/0/wx/djdh.png");
while(true){
    src =captureScreen();
    p = findImage(src, dt, {
        region: [1765, 941, 84, 60],
        threshold: 0.99
    });
    if(p){
        toast("点击对话"); 
        rand_click(1076,773,53)
        sleep(2000)
        // rand_click(1843,28,3)//点击设置
        // sleep(1000)
        rand_click(1853,37,3)//再次尝试点击设置
        break;
    }else{
        sleep(2000)
    }
}
//离开副本
dt = images.read("/storage/emulated/0/wx/lkfb.png");
while(true){
    src =captureScreen();
    p = findImage(src, dt, {
        region: [979, 580, 43, 46],
        threshold: 0.99
    });
    if(p){
        toast("离开勇者之塔"); 
        rand_click(955,572,53)
        sleep(1000)
        break;
    }else{
        sleep(2000)
    }
}

}

function quit_day_play(){
 //退出日常   
 dt = images.read("/storage/emulated/0/wx/tcrc.png");
 while(true){
     src =captureScreen();
     p = findImage(src, dt, {
         region: [79, 23, 54,36],
         threshold: 0.99
     });
     if(p){
         toast("退出日常"); 
         rand_click(46,28,44)
         sleep(1000)
         break;
     }else{
         sleep(2000)
     }
 }
}

function  treasure(){
    //寻宝
toast("寻宝"); 
dt = images.read("/storage/emulated/0/wx/dnj.png");
while(true){
    src =captureScreen();
    p = findImage(src, dt, {
        region: [913, 356, 22, 25],
        threshold: 0.99
    });
    if(p){
        toast("前往寻宝"); 
        rand_click(1082,744,53)
        sleep(3000)
        //忘记作图了,emmmmmm
        rand_click(500,452,73)//尝试三级寻宝
        sleep(1000)
        rand_click(1660,880,73)
        sleep(1000)
        //尝试二级寻宝
        rand_click(615,326,73)//二级寻宝
        sleep(1000)
        rand_click(1660,880,73)
        //尝试一级寻宝
        rand_click(269,116,67)//一级寻宝
        sleep(1000)
        rand_click(1660,880,67)
        break;
    }else{
        sleep(2000)
    }
}
//寻宝结束
sleep(90000)
dt = images.read("/storage/emulated/0/wx/dnjjs.png");
while(true){
    src =captureScreen();
    p = findImage(src, dt, {
        region: [928, 256, 39, 35],
        threshold: 0.99
    });
    if(p){
        toast("寻宝结束"); 
        sleep(2000)
        rand_click(650,250,77)
        sleep(4000)
        p=false
        break
    }else{
        sleep(2000)
    }
}

}

function shop(){
    //商城购物
    toast("商城购物")
    //打开商城,打错字符
    dt = images.read("/storage/emulated/0/wx/sdrk.png");
 while(true){
     src =captureScreen();
     p = findImage(src, dt, {
         region: [1841,35,52,42],
         threshold: 0.99
     });
     if(p){
         toast("进入商城"); 
         rand_click(1729,28,22)
         sleep(1000)
         break;
     }else{
         sleep(2000)
     }
 }
 //点击强化激化
 dt = images.read("/storage/emulated/0/wx/qhjh.png");
 while(true){
     src =captureScreen();
     p = findImage(src, dt, {
         region: [815,118,42,45],
         threshold: 0.99
     });
     if(p){
         toast("强化激化"); 
         rand_click(823,114,33)
         sleep(1000)
         break;
     }else{
         sleep(2000)
     }
 }
 //购买材料
 dt = images.read("/storage/emulated/0/wx/gmcl.png");
 while(true){
     src =captureScreen();
     p = findImage(src, dt, {
         region: [1106,496,27,24],
         threshold: 0.99
     });
     if(p){
         toast("购买材料"); 
         rand_click(1379,471,21)
         sleep(1000)
         break;
     }else{
         sleep(2000)
     }
 }
 //确认购买
 dt = images.read("/storage/emulated/0/wx/qrgm.png");
 while(true){
     src =captureScreen();
     p = findImage(src, dt, {
         region: [1123,658,18,41],
         threshold: 0.99
     });
     if(p){
         toast("确认购买"); 
         rand_click(973,951,53)
         sleep(1000)
         break;
     }else{
         sleep(2000)
     }
 }
 //退出商城
 dt = images.read("/storage/emulated/0/wx/tcsc.png");
 while(true){
     src =captureScreen();
     p = findImage(src, dt, {
         region: [30,54,50,33],
         threshold: 0.99
     });
     if(p){
         toast("退出商城"); 
         rand_click(44,19,53)
         sleep(1000)
         break;
     }else{
         sleep(2000)
     }
 }
}

function send_gift(){
    //好友送礼
    toast("好友送礼")
    //打开社交界面
dt = images.read("/storage/emulated/0/wx/sjrk.png");
while(true){
     src =captureScreen();
     p = findImage(src, dt, {
         region: [1953, 971, 26,38],
         threshold: 0.99
     });
     if(p){
         toast("进入社交"); 
         rand_click(1939,989,22)
         sleep(1000)
         break;
     }else{
         sleep(2000)
     }
 }
    //寻找好友
dt = images.read("/storage/emulated/0/wx/xzhy.png");
while(true){
        src =captureScreen();
        p = findImage(src, dt, {
            region: [536, 886, 40,39],
            threshold: 0.99
        });
        if(p){
            toast("寻找好友"); 
            rand_click(531,885,33)
            sleep(1000)
            break;
        }else{
            sleep(2000)
        }
    }
//添加好友
dt = images.read("/storage/emulated/0/wx/tjhy.png");
while(true){
        src =captureScreen();
        p = findImage(src, dt, {
            region: [1807, 514, 25,27],
            threshold: 0.99
        });
        if(p){
            toast("添加好友3人"); 
            rand_click(1795,510,23)
            sleep(500)
            rand_click(1795,510,23)
            sleep(500)
            rand_click(1795,510,23)
            sleep(1000)
            break;
        }else{
            sleep(2000)
        }
    }
   //退出添加好友
dt = images.read("/storage/emulated/0/wx/tctjhy.png");
while(true){
        src =captureScreen();
        p = findImage(src, dt, {
            region: [1848,117,37,29],
            threshold: 0.99
        });
        if(p){
            toast("退出添加好友"); 
            rand_click(1848,111,23)
            sleep(2000)
            //点击好友栏
            rand_click(432,726,23)
            toast("送礼"); 
            sleep(2000)
            rand_click(787,395,23)
            sleep(500)
            rand_click(787,550,23)
            sleep(500)
            rand_click(787,703,23)
            //退出社交界面
            toast("退出社交界面")
            rand_click(1856,114,27)
            break;
        }else{
            sleep(2000)
        }
    }
//退出

}
function close_act(){
    toast("关闭活动页面");
    sleep(5000)
    rand_click(1080,13,13)
    sleep(1500)
    rand_click(1080,13,13)
    sleep(1500)
    rand_click(1080,13,13)//随机点三下 关闭可能出现的福利页面
    sleep(1500)
    rand_click(1817,224,3)
}
function user_define_main(){
    //关闭福利页面
    close_act()
    //银叶2次
    yy_map_2()

    //日常玩法
    day_play()
    //商店购物
    shop()
    //好友赠礼
    send_gift()
}
function get_permission(){
    //获取权限,打开游戏
    auto();//最好在脚本开头使用auto()函数来确保无障碍服务已经启用
    toast("开始");
    //auto();//最好在脚本开头使用auto()函数来确保无障碍服务已经启用
    //home()
    requestScreenCapture(true);//需要在auto.js界面内使用
    sleep(1000);
    //home();
    launchApp("阿拉德之怒");
    sleep(2000);//必须等待一下 防止截屏全黑
}

function load_role(x,y){
//加载坐标为x,y的角色
dt = images.read("/storage/emulated/0/wx/ybt.png");
while(true){
        src =captureScreen();
        p = findImage(src, dt, {
            region: [482, 9, 29, 48],
            threshold: 0.99
        });
        if(p){
            toast("加载坐标为 "+x+", "+y+" 的角色"); 
            rand_click(x,y,73)
            sleep(1000)
            rand_click(1025,973,33)//开始游戏
            sleep(8000)
            break;
        }else{
            sleep(2000)
        }
    }
}

function quit_role(){
    dt = images.read("/storage/emulated/0/wx/fdj.png");
while(true){
    src =captureScreen();
    p = findImage(src, dt, {
        region: [2205, 8, 36, 30],
        threshold: 0.99
    });
    if(p){
        toast("点击角色头像"); 
        rand_click(31,52,17)
        sleep(1000)
        rand_click(31,52,17)
        sleep(2000)
        toast("切换角色"); 
        rand_click(1391,894,29)
        sleep(3000)
        break;
    }else{
        sleep(2000)
    }
}
}

//神秘商店
function appear_shop(){
    dt3 = images.read("/storage/emulated/0/wx/djdh2.png");
{
    src =captureScreen();
    p = findImage(src, dt3, {
        region: [1765, 941, 84, 60],
        threshold: 0.99
    });
    if(p){
        toast("点击对话"); 
        rand_click(1076,773,53)
        sleep(1000)
        rand_click(1821,153,13)//关闭商店
        sleep(1000)
    }
}
   
}
//入口
//角色数组
get_permission()
for(index=START;index<=END;index++){
    load_role(roles_x[index],roles_y[index]);
    user_define_main();
    //角色切换
    quit_role();
}
toast("脚本结束")
