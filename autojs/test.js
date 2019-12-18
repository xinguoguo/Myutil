"ui";
ui.layout(
    <vertical padding="16">
        <text textSize="16sp" textColor="black" text="开始角色(1~8)"/>
        <input id="local_start" text="1"/>
        <text textSize="16sp" textColor="black" text="结束角色(1~8)"/>
        <input id="local_end" text="8"/>
        <button id="ok" text="确定"/>
    </vertical>
);
//指定确定按钮点击时要执行的动作
ui.ok.click(function(){
    //通过getText()获取输入的内容
    var start = ui.local_start.getText();
    var end = ui.local_end.getText();
    toast(start +"至"+end);
    sleep(1000);
   // startSending();
});
// var roles_x=[580,884,1221,1573,546,897,1232,1569];
// var roles_y=[251,254,256,253,634,654,648,652];
//按钮触发动作
function startSending() {
    auto.waitFor();//检查无障碍服务是否已经启用，如果没有启用则跳转到无障碍服务启用界面，并等待无障碍服务启动；当无障碍服务启动后脚本会继续运行。
    toast("打开日历");
    launchApp("日历");
}