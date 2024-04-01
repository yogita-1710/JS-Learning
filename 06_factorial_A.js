function factorialOfNum(num) {
    let fact = 1;
    for (let index = num; index >= 1; index--) {
        fact = fact * index;
    }
    return fact;
}
var numArray = [5, 3, null, 8, undefined, 9, 0,"true"];
for (const num of numArray) {

    if (num == null || isNaN(+num) || num == 'undefined') {
        console.log(`Invalid input: ${num}`);
    }
    else {
        var result = factorialOfNum(num);
        console.log(`Factorial of ${num} is: ${result}`);
    }
}
