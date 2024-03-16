// console.log("===========step 1============");
// var greaterNumber=function (num1,num2){
//     var great= num1>num2? `${num1} is greater than ${num2}`:`${num2} is greater than ${num1}`;
//     console.log(great);
// }
// greaterNumber(10,-10);
// greaterNumber(800,899);
console.log("===========step 2============");
var isEvenorOddNum = function (num) {
    var result = num % 2 == 0 ? `Given number ${num} is EVEN` : `Given number ${num} is ODD`;
    return result;
}
var result = isEvenorOddNum(29);
console.log(result);
var result = isEvenorOddNum(44); 
console.log(result);
var result = isEvenorOddNum(0); 
console.log(result);
var result = isEvenorOddNum(101); 
console.log(result);
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