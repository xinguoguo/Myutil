/**
 * 输出信息
 */
function DUMP_OUT_VERBOSE (format)
{
    sleep(100);
    console.verbose(format);
}
/**
 * 获取截屏权限
 */
function get_screenshot_privileges()
{
    if(!requestScreenCapture()){
        return RET_ERR_GET_SCREENSHOT_PRI_FAILED;
    }

    return RET_SUCCES;
}

/**
 * 获取截屏
 */
function getCaptureImg ()
{
    var img0 = captureScreen();

    if(!img0 || typeof(img0) == "undifined")
    {
        return ERR_RET_GET_CAPTURE_SCREEN_FAILED;
    }
    else
    {
        return img0;
    }
}
/**
 * 防检测,随机点击
 */
function rand_click (x,y,pow){
    x=random(0, pow)
    y=random(0, pow)
    click(x,y)
}

