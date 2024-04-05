
console.log(`-----------------------Step 1-----------------------`);
function isPrime(num){
    for (let index = 2; index < num; index++) {
      if (num%index==0) {
       return false;
      } 
    }
    return true;
   }

   const array=[3,9,7,6,19,29,53];
   var count=0;
   for(let i=0;i<array.length;i++){
    let num=array[i];
    const result = isPrime(num);
    if(result==true){
        count++;
    }
   }
   console.log(`Count of Prime numbers :: ${count}`);
console.log(`-----------------------Step 2-----------------------`);
function spaceCount(str) {
    var totalNumberOfSpaces = 0;
    var sentence = str;
    var length = sentence.length;
    
    for (let index = 0; index < length; index++) {
        if(sentence.charAt(index)==' ')
        {
            totalNumberOfSpaces++;
        }
    }

    return totalNumberOfSpaces;
}

var str1 = "Revision is the mother of success";
let result1 = spaceCount(str1);
console.log(`Total no of spaces available in string "${str1}" are ::${result1} `);
var str2 = "Javascript is the language of internet world";
let result2 = spaceCount(str2);
console.log(`Total no of spaces available in string "${str2}" are ::${result2} `);


