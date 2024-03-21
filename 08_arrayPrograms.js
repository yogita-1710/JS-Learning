const arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(`------sum of array elements------`);
let sum=0;
    for (i = 0; i < arrayNumbers.length; i++) {
        element = arrayNumbers[i];
        sum=sum+element;
    }
    console.log(sum);
console.log(`-------even index elements--------`);

for (i = 0; i < arrayNumbers.length; i++) {
    if (i % 2 == 0) {
        element = arrayNumbers[i]
        console.log(element);
    }
}