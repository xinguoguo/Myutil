//click("微信红包")
//toast("开始")
var redButton
var over_text
var over_text2
var back
var kai
var record
var Time=100;


function rand_click (x,y,pow){
    x=random(0, pow)+x;
    y=random(0, pow)+y;
    click(x,y);
    console.log('点击: %d,%d,', x,y); 
}
toast("开始")

while(true){
      redButtonmap = text("微信红包").find();//findOne会阻塞
      if(redButtonmap.size()>0){
       // toast("找到红包");
        sleep(Time)
       // toast("红包个数"+redButtonmap.size());
        redButtonmap.forEach(function(redButton){
            red_bounds=redButton.bounds()
            //over_text=UiSelector.bounds(red_bounds.left+138, red_bounds.top-98,
            //red_bounds.right+166, red_bounds.bottom-89)
            over_text = text("已被领完").boundsInside(red_bounds.left+138, red_bounds.top-98,
            red_bounds.right+166, red_bounds.bottom-89).findOne(1000);
            over_text2 = text("已领取").boundsInside(red_bounds.left+138, red_bounds.top-98,
            red_bounds.right+166, red_bounds.bottom-89).findOne(1000);
            if(over_text==null&&over_text2==null){//说明红包未领取
                toast("领取红包")
                //toast("找到"+red_bounds.left+" "+red_bounds.top)//在控件范围内点击
                rand_click(red_bounds.left,red_bounds.top,23)
                sleep(500)
                kai=desc("开").findOne(Time);
                sleep(Time)
                if(kai!=null){
                rand_click(kai.bounds().left,kai.bounds().top,23)
                sleep(5000)
                back= id("m1").findOne(Time);
                sleep(Time)
                if(back!=null){
                    rand_click(back.bounds().left,back.bounds().top,7)
                    } 
                }               
            }else{
                toast("领完了")
                console.log('领完了'); 
                sleep(Time)
            }
        });
    }else{
        //toast("没找到红包╭(╯^╰)╮");
        sleep(Time)
    }
}
//     over_text =text("已被领完").findOne(500);
//     over_text2=text("已领取").findOne(500);
//     if(redButton!= null){//是否存在红包
//         red_bounds=redButton.bounds()
//         if(over_text!=null&&over_text.bounds().left==red_bounds.left+138){
//             toast("领完了")
//         }else{
//             toast("领取红包")
//             //toast("找到"+red_bounds.left+" "+red_bounds.top)//在控件范围内点击
//             rand_click(red_bounds.left,red_bounds.top,53)
//             sleep(500)
//             kai=desc("开").findOne(500);
//             if(kai!=null){
//                 rand_click(kai.bounds().left,kai.bounds().top,13)
//                 sleep(500)
//             }
//             back= desc("返回").findOne(500);
//             if(back!=null){
//                 rand_click(back.bounds().left,back.bounds().top,13)
//                 sleep(500)
//             }
//         }
//     }else{
//         toast("未找到红包")
//     }
//     sleep(500)
// }

//138-(-98)-166-(-89)
// redButton = text("微信红包").findOne(500);//findOne会阻塞
// if(redButton!= null){//是否存在红包
//     red_bounds=redButton.bounds()
//     over_text=bounds(red_bounds.left+138, red_bounds.top-98,
//         red_bounds.right+166, red_bounds.bottom-89)
//          if(over_text==null){
//             toast("失败")
//          }else{
//             toast("成功")
//          }
// }else{
//     toast("结束2")
// }