jquery

$("q).eq(1)定位q元素中 第二哥元素
$(selector).remove()删除
$(selector).empty()清楚所有子元素

#事件处理：当用户进行操作时，会发生事件；当目标元素发生事件时，执行处理函数
鼠标事件：
click
dbclick
mouseenter
mouseleave
mouseover
键盘事件：
keydown
keyup
表单事件：
submit
change
foucus
blur
文件事件：
ready
resize
scroll
$("name").click(function(){
    
})

$(selector).on("action",function)添加事件处理
$(selectpr).off("action",function)删除事件处理