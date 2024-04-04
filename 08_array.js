let arrayNumbers=[2,4,1,7,9,8];
console.log(arrayNumbers);
console.log("-------Total Elements-------");
// we don't use parenthesis when we are using property because length is property
console.log(`${arrayNumbers.length}`);
const elementAt0=arrayNumbers[0];
console.log(`0th element is:${elementAt0}`);
elementAt3=arrayNumbers[3];
console.log(`3rd element is:${elementAt3}`);
console.log(`---Accessing last element---`);
const length =arrayNumbers.length;
const lastElement=arrayNumbers[length-1];
console.log(`Last element is:${lastElement}`);
const elementAt10=arrayNumbers[10];
console.log(`10th element is:${elementAt10}`);
console.log(`====== Update elements =========`);
arrayNumbers[2] = 200;
console.log(arrayNumbers);

console.log(`====== includes() =========`);
console.log(arrayNumbers.includes(7));
console.log(arrayNumbers.includes(100));

console.log(`====== indexOf() =========`);
console.log(arrayNumbers.indexOf(7));
console.log(arrayNumbers.indexOf(700));
console.log(`====== Traversing an array =========`);
const arrayNums = [2, 4, 1, 7, 9, 8];
for (let index = 0; index < arrayNums.length; index++) {
    const element = arrayNums[index];
    console.log(element);
}
console.log(`====== Traversing an array in reverse =========`);
for (let index = arrayNums.length-1; index >=0; index--) {
    const element = arrayNums[index];
    console.log(element); 
}