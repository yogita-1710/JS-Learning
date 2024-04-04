let arrayNumbers = [2, 4, 1, 7, 9, 8, 7, 4, 1];
console.log(arrayNumbers);
const mySet = new Set();

for (const element of arrayNumbers) {
    mySet.add(element); 
}
console.log(mySet);
 
const arrayUnique = []; 
for (const element of mySet) {
    arrayUnique.push(element); 
}
console.log(arrayUnique); 

console.log(`====== Short cut way=========`);
const arrayElements = [...new Set(arrayNumbers)];
console.log(arrayElements);

console.log(`==== Using ForEach loop====`);
function removeDuplicates(arrayNumbers) {
    let unique = [];
    arrayNumbers.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}
console.log(removeDuplicates(arrayNumbers));
console.log(`========================================================`);
function removeDuplicates(arrayNumbers) {
    let unique = [];
    for (i = 0; i < arrayNumbers.length; i++) {
        if (unique.indexOf(arrayNumbers[i]) === -1) {
            unique.push(arrayNumbers[i]);
        }
    }
    return unique;
}
console.log(removeDuplicates(arrayNumbers));