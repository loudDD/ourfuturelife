// i = 1
// for(;i<5;) {
//     console.log(i);
//     i++;
// }


// var x = "" , i = 0
// do{
//     x = x + "the numer is :" + i + "<br />>"
//     i++
// }
// while (i <=10);
// console.log(x)

// var x = 0
// for (;x<10;x++){
//     if (x == 3){
//         continue
//     }
//     console.log(x);
// }

// var x = prompt("请输入名字：");
// alert(x);


// var x = confirm("请问是否确认退出")
// if (confirm==true){
//     alert('谢谢光临')
// }
// else{
//     alert("退出成功")
// };

// var x = {age:10,name:"tom"}
// console.log(x.age)
// x.to

// function person(name,age){
//     this.name = name;
//     this.age = age;
//     this.yearOfBirth = bornyear;
// }
// function bornyear(){
//     return new Date().getFullYear() - this.age
// }

// console.log(person("tom",13))

// var a = ["afe", "we"]
// console.log(typeof(a))
// console.log(a)
// console.log(Object.prototype.toString.call(a))

// var a = prompt

var funModule = (function(){
    return {
        isCuteMixin: function(obj){
            obj.isCute = function(){
                return true;
        };
    },
    singMixin: function(obj){
        obj.sing = function(){
            console.log("Singing to an awesome tune");
            };
        }
    }
})();