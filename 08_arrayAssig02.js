const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`1. Find the total elements available or length`); 
console.log(`Original Array is:: [${arrayNumbers}]`);
length=arrayNumbers.length;
console.log(`the total elements available or length= ${length}`);
console.log(`----------------------------------------------------------------------------------------`);
console.log(`2. Log the first element and last element in arrayNumbers`); 
console.log(`Original Array is::[${arrayNumbers}]`);
console.log(`the first element is ${arrayNumbers[0]} and last element is ${arrayNumbers[length-1]} in arrayNumbers`);
console.log(`----------------------------------------------------------------------------------------`);
console.log(`3. Log the third last element using length property `); 
console.log(`Original Array is::[${arrayNumbers}]`);
console.log(`the third last element is ${arrayNumbers[length-3]} in arrayNumbers`);
console.log(`----------------------------------------------------------------------------------------`);
console.log(`4. Find the all even numbers using for of loop and log on console`);
console.log(`Original Array is::[${arrayNumbers}]`);

var evenNumbersString = "";
for (var evenum of arrayNumbers) {
  if (evenum % 2 === 0) {
    evenNumbersString += evenum + " ";
  }
}
console.log(`all even numbers are:: ${evenNumbersString}`);
console.log(`----------------------------------------------------------------------------------------`);
console.log(`5. Find the odd numbers for of loop and log on console`);
console.log(`Original Array is::[${arrayNumbers}]`);
var oddNumbersString = "";
for (var oddnum of arrayNumbers) {
  if (oddnum % 2 != 0) {
    oddNumbersString += oddnum + " ";
  }
}
console.log(`all odd numbers are:: ${oddNumbersString}`);
console.log(`----------------------------------------------------------------------------------------`);
console.log(`6. Find all the even positioned elements from arrayNumbers, sum it and log on console`);
console.log(`Original Array is::[${arrayNumbers}]`);
var evenPositionedString="";
var sum=0;
for (const key in arrayNumbers) {
  if (key % 2 == 0) {
    var element = arrayNumbers[key];
    evenPositionedString +=element +" ";
    sum=sum+arrayNumbers[key];
  }
}
console.log(`all the even positioned elements from arrayNumbers::${evenPositionedString}`);
console.log(`sum of all the even positioned elements from arrayNumbers:: ${sum}`);
console.log(`----------------------------------------------------------------------------------------`);
console.log(`7. Find all the odd positioned elements from arrayNumbers, sum it and log on console`);
console.log(`Original Array is::[${arrayNumbers}]`);

var oddPositionedString="";
var sum=0;
for (const key in arrayNumbers) {
  if (key % 2 != 0) {
    var element = arrayNumbers[key];
    oddPositionedString +=element +" ";
    sum=sum+arrayNumbers[key];
  }
}
console.log(`all the odd positioned elements from arrayNumbers::${oddPositionedString}`);
console.log(`sum of all the odd positioned elements from arrayNumbers:: ${sum}`);
console.log(`----------------------------------------------------------------------------------------`);
console.log(`8. Find the sum of all elements from arrayNumbers, log on console`);
console.log(`Original Array is::[${arrayNumbers}]`);
var sum = 0;
for (const element1 of arrayNumbers) {
  sum = sum + element1;
}
console.log(`sum= ${sum}`);
console.log(`----------------------------------------------------------------------------------------`);
console.log(`9. Find the numbers which are multiple of 5`);
console.log(`Original Array is::[${arrayNumbers}]`);
var multiple="";
for (const ele of arrayNumbers) {
  if (ele % 5 == 0){
    multiple+=ele+" ";
  }
}
console.log(`the numbers which are multiple of 5 :: ${multiple}`);
console.log(`----------------------------------------------------------------------------------------`);
console.log(`10. Is number 115 available in arrayNumbers ?`);
console.log(`Original Array is::[${arrayNumbers}]`);
console.log(`Is number 115 available in arrayNumbers ? ::${arrayNumbers.includes(115)}`);
console.log(`----------------------------------------------------------------------------------------`);
console.log(`11. Is number 23 available in arrayNumbers ?`);
console.log(`Original Array is:: [${arrayNumbers}]`);
console.log(`Is number 23 available in arrayNumbers ? :: ${arrayNumbers.includes(23)}`);
console.log(`----------------------------------------------------------------------------------------`);
console.log(`12. Insert numbers 55, 66 at index 3 and log array on console`);
console.log(`Original Array is::[${arrayNumbers}]`);
arrayNumbers.splice(3,0,55,56);
console.log(`New Array is::[${arrayNumbers}]`);
console.log(`----------------------------------------------------------------------------------------`);
console.log(`13. Delete 3 elements starting from index 4 and log arrayNumbers on console`);
console.log(`Original Array is::[${arrayNumbers}]`);
var deletedElements=arrayNumbers.splice(4,3);
console.log(`Deleted elements are::${deletedElements} `);
console.log(`New Array is::[${arrayNumbers}]`);
console.log(`----------------------------------------------------------------------------------------`);
