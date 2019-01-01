//js打印
document.write(<h2>外部js脚本</h2>)
//弹出alert框，默认只有确定键
alert("警告框")
//输出标题
document.getElementById("myH1").innerHTML("这是标题")
//速出段落
document.getElementById("myP").innerHTML("这是段落")
/* 多行注释
var声明变量
*/
var x = "打印声明的变量" ;
document.write(x)
var y = "没有问号结束"
document.write(y)

var x = "js语句以分好分割"
var y = "js支持数据类型: number, string, boolean, null, undefined  and a compliex: object"
var x = "13e5  1300000; 123e-5  0.00123 支持科学计数法书写"

var a = 10
var b = a + 12
document.write(b)

console.log(a == 8)

//if语句格式 if(condition){判断为true时，执行的语句} else {}
a = true
if (a){
    document.write("ok");
}
a = 10
b = 2

if (a > b){
    alert("a> b");
}else if(a<b){
    document.write("a<b");
}else{
    document.write("no")
}
alert("if之后执行")

function myFunc(){
    var x = 1
    var d = new Date().getDay();
    switch(d){
        case 0  : x = "星期一";
            break
        case 1  : x = "星期二";
            break
            default:{
                x = "无匹配语句，执行default"
            }
    }
    return x
}
alert(myFunc());

var cars = ['大众','奔驰','本田','丰田','特斯拉','路虎','福特'];

for (var i = 0 ;i < cars.length; i++){
    document.write(cars[i] + "</br>");
}
/*
Statement 1 在循环开始之前设置变量 (var i=0)。
Statement 2 定义循环运行的条件（i 必须小于 cars元个数）。
Statement 3 在每次代码块已被执行后增加一个值 (i++)。
*/
