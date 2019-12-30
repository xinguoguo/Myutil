var X=876   //X=876
var Y=1876  //Y=1876
//指定确定按钮点击时要执行的动作
function rand_click (x,y,pow){
    x=random(0, pow)+x;
    y=random(0, pow)+y;
    click(x,y);
    console.log('点击: %d,%d,', x,y); 
}

    toast(X +"和"+Y);
    sleep(500);
    while(true){
    rand_click(X,Y,7)//偏差7
    sleep(50);
    }

