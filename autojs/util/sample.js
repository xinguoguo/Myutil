/**
 * 输出信息
 */
function DUMP_OUT_VERBOSE (format)
{
    sleep(100);
    console.verbose(format);
}
function DUMP_OUT_ERR (format)
{
    sleep(100);
    console.error(format);
}
//根据坐标截取“相册”中的图片
function clip_images(){

}
/**
 * 主函数
 */
function user_define_main (){
    /* 开启"无障碍服务"" */
    DUMP_OUT_VERBOSE("\"无障碍服务\" start...");
    ret = accessibility_services();
    if (ret)
    {
        anti_forest_err_return(ret);
        DUMP_OUT_ERR("程序异常终止");
        return ret;
    }
    else
    {
        DUMP_OUT_VERBOSE("\"无障碍服务\"成功开启");
    }
    DUMP_OUT_VERBOSE("\"无障碍服务\" end...");

     /* 获取"截屏"权限 */
     DUMP_OUT_VERBOSE("\"截屏权限\"获取 start...");
     ret = get_screenshot_privileges ();
     if (ret)
     {
         anti_forest_err_return(ret);
         DUMP_OUT_VERBOSE("程序异常终止");
         return ret;
     }
     else
     {
         DUMP_OUT_VERBOSE("\"截屏权限\"获取成功");
     }
     DUMP_OUT_VERBOSE("\"截屏权限\"获取 end...");
     
     //todo
}

/* 程序开始处 */
DUMP_OUT_VERBOSE("程序执行开始..........................");
user_define_main ();
DUMP_OUT_VERBOSE("程序执行结束..........................");
exit();
/* 程序结束处 */