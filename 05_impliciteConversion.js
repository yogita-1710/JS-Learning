console.log(`numeric string used with + gives "string" type`); 
let result;

result='3'+2;
console.log(result);

result='3'+ true;
console.log(result);

result='3'+ undefined;
console.log(result);

result='3'+ null;
console.log(result);

console.log("-------------------------------------------------");

console.log(`If Boolean is used, true is 1,false is 0`);
let result2;
result2= '4' - true;
console.log(result2);
result2= 4 + true;
console.log(result2);
result2= 4 + false;
console.log(result2);
console.log("-------------------------------------------------");
console.log("Numeric String used with -,*,/ results number type");
let result3;
result3= '5' - '2';
console.log(result3);
result3= '5' * '2';
console.log(result3);
result3= '5' / '2';
console.log(result3);
result3= '5' - 2;
console.log(result3);
result3= '5' * 2;
console.log(result3);
result3= '5' / 2;
console.log(result3);

function runFunc(){
    console.log("1" + 1); //string
    console.log("A" - 1); //NaN
    console.log(2 + "-2" + "2");//2-22
    console.log("Hello" - "World" + 78);
    console.log("Hello"+ "78"); //HELLO78
    console.log('4' * undefined); //NAN
  }
  runFunc();

  var num=5;
  


