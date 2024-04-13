const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`Original Array is ::[${array_numbers}]`);
console.log(`----------------------------------------------------------------------------------`);
console.log(`1. Find the sum of all numbers using reduce() and traditional way`);
console.log(`Traditional way`);
var sum = 0;
for (const ele of array_numbers) {
    sum = sum + ele;
}
console.log(`Sum= ${sum}`);
console.log(`Using reduce method`);
let sum1 = array_numbers.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
}, 0);
console.log(`Sum= ${sum1}`);
console.log(`----------------------------------------------------------------------------------`);
console.log(`2. Find the numbers multiple of 5 and then sum it`);
// let sumOfMultiplesOfFive=array_numbers.filter((element) => element % 5 == 0).reduce((previous,current)=>previous+current);

let multiplesOfFive=array_numbers.filter((element) => element % 5 == 0);
console.log(`Numbers that are multiples of 5:: ${multiplesOfFive}`);
let sumOfMultiplesOfFive=multiplesOfFive.reduce((previous,current)=>previous+current);
console.log(`sumOfMultiplesOfFive :: ${sumOfMultiplesOfFive}`);



