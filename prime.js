const array = [3, 9, 7, 6, 19, 29, 53];
var isPrime = false;
for (let i = 0; i < array.length; i++) {
    var num = array[i];
    // console.log(num);
    for (let index = 2; index < num; index++) {
        if (num % index == 0) {
            var isPrime = false;
            break;
        }

        if (isPrime) {
            console.log(`${num} is not prime`);
        }
        else {
            console.log(`${num} is prime`);
        }
    }
}