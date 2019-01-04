title标签必须在head标签中
段落标签<p>必须在body标签中，浏览器会自动在段落前后添加空行

### <br>标签：换行符 最好<br />
在段落中出现，效果是不产生新段落情况下换行
<p>  <br> </p>

<b></b>定义粗体

<i></i>定义斜体
<em></em>定义着重文字
<sub></sub>定义下标字
<sup></sup>定义上标字
<ins></ins>定义插入字
<del></del>定义删除字
<small></small>定义小号字
<strong></strong>定义重要的文本

HTMl标题（heading）
<h1> - <h6> 的定义不同标题 <h1>最大
在<body>中

**请确保HTML标题 标签只用于 标题，不要仅仅是为了成成粗体或大号的文本而使用标题；搜索引擎使用标题为你的网页结构和内容编制索引**

### <hr>标签
创建水平线，可用于分割页面中的内容
<herf:"superlink.html>
<!-- //-->注释

<p align="center">居中显示 </p>属性一般添加在开始标签
属性一般以键值对形式出现

<p class="xx">通常用于指向样式表的类</p>
<p id="xxx">id必须是唯一</p>


### align
属性规定对齐方法
<p align="left">左对齐</p>  
<hr width="50%" align="center></hr>

### <img />
属性：src,height,width,alt,border

<img src="" height="" width="" alt=""/>  
图片 src=url 可使用相对路径./image/1.jpg alt属性必有！如果图片加载失败，则显示alt中的内容;  
长度和宽度可用像素和百分比形式制定，默认像素 “100px" or"50%"  
border="" 单位为像素，产生边框，默认无边框
** 空标签 即没有</> ,所以最好在开始标签加/

### <audio>
<a herf="https://url" target="_blank">文本名称</a>  
target确认打开方式；"_blank"：新窗口或选项卡打开

###<ul> <ll>无序列表
<ul>显示点，小黑圆圈
    <li></li>
</ul>

###<ol><li>有序列表
<ol start="50">默认从1开始，start设置起始值
    <li></li>

</ol>

### <table>表格
<table border="">
    <tr>
        <th></th>表头：粗体居中
    </tr>行
    <tr>
        <td></td>列
    </tr>行
    <tr>
        <td></td>列
    </tr>行
</table>

### colspan rowspan
colspan：跨列
rowspan:跨行
<td colspan="2">Telephone:</td>

<span/> 文本 内联原始
<div></div>

<form action="https://" method="get">
    <input type="text" name="username" /></br>
</form>搜索不同类型的用户输入
表单中没有自动换行，需要<br />
action:当提交表单时，向何处发送表单数据
methon:当提交表单时，使用的http方法：get/post/dialog
name: 指定表单的名称
接受用户输入，需要相应的表单元素，如text.输入类型由类型属性（type)定义
常用的text,password,radio,checkbox,submit

type:radio/checkbox单选/多选

提交表单
<input type="submit" value="Submit />
多行输入标签
<textarea name="请输入内容" ></textarea>

<iframe src="statics/demosource/demo_iframe.html" width="200" height="50%frameborder="0"></iframe>
<article> 标签定义独立的内容。

<article> 标签定义的内容本身必须是有意义的且必须是独立于文档的其余部分。

<article> 的潜在来源：

论坛帖子
博客文章
新闻故事
评论

在 HTML5 中，<section> 标签定义了文档的某个区域。比如章节、头部、底部或者文档的其他区域。
<aside> 标签定义 <article> 标签外的内容。

aside 的内容应该与附近的内容相关。主要侧边栏内容

<audio> 元素
<audio> 标签定义声音，比如音乐或其他音频流。

目前，<audio> 元素支持的3种文件格式：MP3、Wav、Ogg。

如需在 HTML5 中播放音频，你需要使用以下代码：

<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
您的浏览器不支持 audio 元素。
</audio>
control 属性供添加播放、暂停和音量控件。

<audio> 元素允许使用多个 <source> 元素. <source> 元素可以链接不同的音频文件，浏览器将使用第一个支持的音频文件。
可以在 <audio> 和 </audio> 之间放置文本内容，这些文本信息将会被显示在那些不支持 <audio> 标签的浏览器中。
autoplay loop controls
<audio controls autoplay loop>
</audio>
<video width height controls>
    <source src=>
</video>
video标签也可添加多个source，浏览器依次识别，知道可以识别格式，或显示video标签中文字
支持四种格式 mp4 webm ogg
controls autoplay loop

<progress> 标签定义运行中的任务进度（进程）。
<progress> 属性
max：规定需要完成的值。
value：规定进程的当前值。
Web 存储对象有两种类型：
localStorage 
sessionStorage 
localStorage 与 sessionStorage 的区别
localStorage 对象存储的数据没有时间限制。
sessionStorage 方法针对一个 session 进行数据存储。当用户关闭浏览器窗口后，数据会被删除。

Web 存储使用的 API
不管是 localStorage，还是 sessionStorage，可使用的API都相同，常用的有如下几个（以localStorage为例）：
保存数据：localStorage.setItem(key,value);
读取数据：localStorage.getItem(key);
删除单个数据：localStorage.removeItem(key);
清除所有数据：localStorage.clear();
得到某个索引的key：localStorage.key(index);
<form autocomplete="off"> autocomplete 属性规定 form 或 input 域应该拥有自动完成功能。
当用户在自动完成域中开始输入时，浏览器应该在该域中显示填写的选项
<input placehoder=”默认显示" autofocus required>页面加载自动聚焦；必填
<input type="search">创建搜索框
    <datalist id="weeks">datalist创建候选选项，默认autocomplete打开
    <option value="MON>
    <option value="TUE”>
    </datalist>

有条件（三元）运算符

另一个JavaScript条件运算符根据一些条件为变量赋值。 句法：
variable = (condition) ? value1: value2 
例子:
var isAdult = (age < 18) ? "未成年人": "成年人";

循环可以将代码块执行指定的次数。
如果您希望一遍又一遍地运行相同的代码，并且每次的值都不同，那么使用循环是很方便的。
语法:
for (statement 1; statement 2; statement 3) {
   code block to be executed
}
语句 1（Statement 1）：在循环（代码块）开始之前执行。
语句 2 （Statement 2）：定义运行循环的条件（代码块）。
语句 3 （Statement 3）：在执行循环（代码块）之后每次执行。

alert警告框（确认键）
prompt提示（输入值，确认，取消）
confirm(确认 返回true;取消 返回false)

object.toUpperCase()全大写
object.toLowerCase()全小写

function name(age,class){
    this.age = age 相当于self，但不用__init__函数声明
}


jquery 设置属性 $(selector).action()
html返回带标签的所有内容
text只返回内容
attr(旧值，新值)
removeattr删除
val获取值  <div type="" value="">

正如我们在以前的课程中所看到的，html()和text()方法可以用于获取和设置所选元素的内容。 然而，当这些方法用于设置内容时，现有内容将丢失。
jQuery具有用于将新内容添加到所选元素而不删除现有内容的方法：
append()在所选元素的末尾插入内容。
prepend()在所选元素的开头插入内容。
after()插入所选元素后的内容。
before()在所选元素之前插入内容。

提示: 所有CSS属性都可以使用JavaScript进行设置和修改。请记住，您不能在属性名称中使用破折号（ - ）：这些替换为驼峰写法，其中复合词以大写字母开头 比如: background-color属性应该被写为 backgroundColor。
