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

### <a>
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
