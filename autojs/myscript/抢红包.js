//click("微信红包")
toast("开始")
sleep(1000);
var redButton = text("微信红包").findOne(1000);//findOne会阻塞
over_text =text("已被领完").findOne(1000);
if(redButton!= null){
    if(over_text!=null){
        sleep(1000)
        toast("over_text."+over_text.bounds().left)
   
        sleep(1000)
    }
    red_bounds=redButton.bounds()
    toast("找到"+red_bounds.left+red_bounds.top)//在控件范围内点击
    sleep(1000);
    if(over_text.bounds().left==red_bounds.left+138){
        sleep(1000)
        toast("领完")
        sleep(1000)
    }
}
//138-(-98)-166-(-89)

toast("结束")


//集合
// var c = className("AbsListView").find();
// if(c.empty()){
//     toast("找到啦");
// }else{
//     toast("没找到╭(╯^╰)╮");
// }

c.forEach(element => console.log(element));