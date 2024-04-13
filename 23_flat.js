const arrayNum = [5, , 7, , 9, [44, 5]];
const newArray = arrayNum.flat();
console.log(newArray);


let array = [2, [4, 1, [7, [8, 4]]], 8, 9, , 7];
console.log(array.length);
const arrayFlatten = array.flat(2);
console.log(arrayFlatten);

console.log(`-------------------------flatMap() method--------------------------`);
const pairs = [[1, 2], [3, 4], [5, 6]];
const mappedPairs = pairs.map((pair) => { return [pair[0] + pair[1]] });
console.log(mappedPairs);
const flattenPairs = mappedPairs.flat();
console.log(flattenPairs);