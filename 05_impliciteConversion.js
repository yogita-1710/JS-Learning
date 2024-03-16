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
console.log(`If a String is an invalid number ,the result will be "NaN"`);
let result1;
result1=Number('hello');
console.log(result1);

result1=Number(undefined);
console.log(result1);

result1=Number(NaN);
console.log(result1);