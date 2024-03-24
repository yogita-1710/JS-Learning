console.log(`========================================`);
var friendList = ["Jenny", "Bill", "Andy", "Elon"];
var count=0;


for (let element of friendList) {
    console.log(element);  
    for(i=0;i<element.length;i++){
        var element1=element.toLowerCase();
        var word=element1.charAt(i);
        if(word=='a'||word=='e'||word=='i'||word=='o'||word=='u'){
            count++;
        }
    }
}
console.log(count);


// const arrayNumbers = [2, 4, 1, 7, 9, 8];

// for (const element of arrayNumbers) {
//     console.log(element);
// }

// let sum = 0;// 7
// for (const element of arrayNumbers) {
//     sum = sum + element;
// }
// console.log(`Sum of an array : ${sum}`);

// let multiplication = 1;
// for (const element of arrayNumbers) {
//     multiplication = multiplication * element;
// }
// console.log(`multiplication of an array : ${multiplication}`);