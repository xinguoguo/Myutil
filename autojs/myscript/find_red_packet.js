//click("微信红包")
//toast("开始")
var redButton
var over_text
var over_text2
var back
var kai

function rand_click (x,y,pow){
    x=random(0, pow)+x;
    y=random(0, pow)+y;
    click(x,y);
    console.log('点击: %d,%d,', x,y); 
}
while(true){
    redButton = text("微信红包").findOne(500);//findOne会阻塞
    over_text =text("已被领完").findOne(500);
    over_text2=text("已领取").findOne(500);
    if(redButton!= null){//是否存在红包
        red_bounds=redButton.bounds()
        if(over_text!=null&&over_text.bounds().left==red_bounds.left+138){
            toast("领完了")
        }else{
            toast("领取红包")
            //toast("找到"+red_bounds.left+" "+red_bounds.top)//在控件范围内点击
            rand_click(red_bounds.left,red_bounds.top,53)
            sleep(500)
            kai=desc("开").findOne(500);
            if(kai!=null){
                rand_click(kai.bounds().left,kai.bounds().top,13)
                sleep(500)
            }
            back= desc("返回").findOne(500);
            if(back!=null){
                rand_click(back.bounds().left,back.bounds().top,13)
                sleep(500)
            }
        }
    }else{
        toast("未找到红包")
    }
    sleep(500)
}

//138-(-98)-166-(-89)