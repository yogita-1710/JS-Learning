const arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(`---------------Traversing an array--------------`);
for (const key in arrayNumbers) {
    const element = arrayNumbers[key];
    console.log(element);
}
console.log(`----------------Odd Index Elements---------------`);
for (const index in arrayNumbers) {
    if (index % 2 != 0) {
        const ele = arrayNumbers[index];
        console.log(ele);
    }

}
