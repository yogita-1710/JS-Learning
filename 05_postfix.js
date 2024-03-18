var a=5;
var b=a++;
console.log(`a::${a}`);
console.log(`b::${b}`);
console.log("---------------------------------");

var n1=5;
console.log(`Initial value in variable n1 :: ${n1}`);

var result= n1++ + ++n1 + n1++;
console.log(`Result::${result}`);

console.log(`Final value in variable n1 :: ${n1}`);
console.log("---------------------------------");
var a=2;
console.log(`Initial value in variable a ::${a}`);

var b= ++a + ++a + a++ - --a;
console.log(`b::${b}`);

console.log(`Final value in variable a :: ${a}`);

console.log("---------------------------------");
var a=4;
console.log(`Initial value in variable a ::${a}`);

var b= a-- + ++a + ++a + a++;
console.log(`b::${b}`);

console.log(`Final value in variable a :: ${a}`);

console.log("---------------------------------");
var num=5;
console.log("num=",num);
var a=num++;
console.log("postfix",a);
console.log("num=",num);
var b=++num;
console.log("prefix=",b);
console.log("num=",num);


