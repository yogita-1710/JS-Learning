const arrayNumbers = [ 20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ]; 
console.log(`Original Array is :: [${arrayNumbers}]`);
console.log(`--------------------------------------------------------------------------`);
console.log(`1. Add 10 into each element and log new array result on console`);
const arrayNew1 = arrayNumbers.map( (currentValue)=>{
    return currentValue+10;
} );

console.log(arrayNew1);
console.log(`--------------------------------------------------------------------------`);
console.log(` 2. Cube the each array element and log on console`);
const arrayNew2 = arrayNumbers.map( (currentValue)=>{
    return currentValue*currentValue*currentValue;
} );

console.log(arrayNew2);
console.log(`--------------------------------------------------------------------------`);
console.log(`3. Add the index value into its corresponding each array element 
and log new array result on console`);
const arrayNew3 = arrayNumbers.map( (currentValue,index)=>{
    return currentValue+index;
} );
console.log(arrayNew3);
console.log(`--------------------------------------------------------------------------`);
 