console.log("===========step 1============");
var greaterNumber=function (num1,num2){
    var great= num1>num2? `${num1} is greater than ${num2}`:`${num2} is greater than ${num1}`;
    console.log(great);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("===========step 2============");
var isEvenorOddNum = function (num) {
     var result = num % 2 == 0 ? `true (given number is even)` : `false (given number is odd)`;
    return result;
}
var n1=29;
var result = isEvenorOddNum(n1);
console.log(`Return value for ${n1} is ::${result} `);

var n2=44;
var result = isEvenorOddNum(n2); 
console.log(`Return value for ${n2} is ::${result} `);

var n3=0;
var result = isEvenorOddNum(n3); 
console.log(`Return value for ${n3} is ::${result} `);

var n4=101;
var result = isEvenorOddNum(n4); 
console.log(`Return value for ${n4} is ::${result} `);

console.log("===========step 3============");
var wordLength = function(word){
    var result = word.length%2==0 ? `Given word ${word} is with EVEN length`:`Given word ${word} is with ODD length`;
    return result;
   }
   var output=wordLength("JavaScript");
   console.log(output);
   var output=wordLength("developer");
   console.log(output);
   var output=wordLength("Google");
   console.log(output);
   
function greaterNumber(a,b){
    return a>b;
}
var a=10;
var b=-10;
greaterNumber(a,b)? console.log(`${a} is greater than ${b}`):console.log(`${b} is greater than ${a}`);
a=800;
b=899;
greaterNumber(a,b)? console.log(`${a} is greater than ${b}`):console.log(`${b} is greater than ${a}`);
