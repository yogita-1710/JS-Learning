const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(arrayRollNumbers);
console.log(`----------------------------------------------------------------------------------`);
console.log(`1. Reverse the array`);
console.log(arrayRollNumbers.reverse());
console.log(`----------------------------------------------------------------------------------`);
console.log(`2. Use the sort() method as it is without any custom sorting logic 
(Without passing any arguments) & notice the issue`);
console.log(arrayRollNumbers.sort());
console.log(`----------------------------------------------------------------------------------`);
console.log(`3. Sort the array in ascending order, by writing your custom logic`);
arrayRollNumbers.sort((a, b) => { return a > b ? 1 : -1; })
console.log(arrayRollNumbers);
console.log(`----------------------------------------------------------------------------------`);
console.log(`4. Find the Greatest number from the array`);
console.log(`Greatest number in array ::${arrayRollNumbers[arrayRollNumbers.length - 1]}`);
console.log(`----------------------------------------------------------------------------------`);
console.log(`5. Find the smallest number from the array`);
console.log(`Smallest number in array ::${arrayRollNumbers[0]}`);
console.log(`----------------------------------------------------------------------------------`);
console.log(`6. Remove duplicates from array`);
arrayRollNumbers.sort((a, b) => {
    return a > b ? 1 : -1;
})
console.log(arrayRollNumbers);
