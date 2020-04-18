//截取当前界面的图片的某一部分
//并存储在手机的 /storage/emulated/0/wx目录下
//需要在auto.js界面内使用
var src = images.read("/storage/emulated/0/wx/组队.png");
//在该图片中找色#fafafd，指定找色区域为在位置(400, 500)的宽为300长为200的区域，指定找色临界值为4
var point = findColor(src, "#3ba2ec", {
   region: [1750, 892, 39, 14],
   threshold: 4
});

if(point){
   toast("找到啦:" + point);
}else{
   toast("没找到");
}