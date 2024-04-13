const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`1. Log the array element with it's index using forEach( ) with arrow function `);
arrayNumbers.forEach((element, index) => { console.log(`element : ${element}  index :${index} `); });
console.log(`--------------------------------------------------------------------------------------------------`);
console.log(`2. Find the positive numbers and log on console using forEach( ) with arrow function  `);
let positiveArray = [];
arrayNumbers.forEach((element) => {
    if (element >= 0) {
        positiveArray.push(element);
    }
});
console.log(positiveArray);
// const positiveNumbers = arrayNumbers.filter((element) => {
//     return element >= 0;
// });
// console.log(positiveNumbers);
console.log(`--------------------------------------------------------------------------------------------------`);
console.log(`3. Find the negative numbers, add into new array 
 and log new array on console using arrow function `);
let negativeArray = [];
arrayNumbers.forEach((element) => {
    if (element < 0) {
        negativeArray.push(element);
    }
});
console.log(negativeArray);
// const negativeNumbers = arrayNumbers.filter((element) => {
//     return element < 0;
// });
// console.log(negativeNumbers);
console.log(`--------------------------------------------------------------------------------------------------`);
console.log(`4. Find the even numbers and log on console using forEach( ) with arrow function `);
arrayNumbers.forEach((element) => {
    if (element % 2 == 0) {
        console.log(element);
    }
});
// let evenNumbers=arrayNumbers.filter((element) => element % 2 == 0);
// console.log(evenNumbers);
console.log(`--------------------------------------------------------------------------------------------------`);
console.log(`5. Find the sum of all elements from arrayNumbers and log sum value on console. `);
let sum = 0;
arrayNumbers.forEach((element) => {
    sum = sum + element;
});
console.log(`Sum of array elements::${sum}`);
// let sum1=0;
// arrayNumbers.filter((element)=>{sum1=sum1+element;
// return sum1;})
// console.log(`Sum of array elements::${sum1}`);
console.log(`--------------------------------------------------------------------------------------------------`);
console.log(`6. Log the only even indexed array value on console. forEach( ) with arrow function preferred `);
console.log(`original array::[${arrayNumbers}]`);
arrayNumbers.forEach((element, index) => { if (index % 2 == 0) { console.log(`index:${index},element:${element}`); } })
// const evenIndexedValues=arrayNumbers.filter((element,index)=>index % 2 == 0);
// console.log(evenIndexedValues);
console.log(`--------------------------------------------------------------------------------------------------`);