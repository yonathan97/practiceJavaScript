var Man = 
{
    "name": "yonathan",
    "age": 24,
    "style" : "shitty"
}

var person = Man.name;
Man.name = "Dawit";
Man.brother =1;
var good = "";
delete Man.age;
Man[good] = "very";
console.log(Man);