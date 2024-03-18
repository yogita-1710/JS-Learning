console.log(`String to number`);

result=Number("100");
console.log(result);

result1=Number("234e-1");
console.log(result1);

console.log(`Boolean to number`);

result2=Number(true);
console.log(result2);

result3=Number(false);
console.log(result3);
console.log("-------------------------------------------------");

console.log(`If a String is an invalid number ,the result will be "NaN"`);
let result1;
result1=Number('hello');
console.log(result1);

result1=Number(undefined);
console.log(result1);

result1=Number(NaN);
console.log(result1);
