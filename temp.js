function totalWord(str){
    var resultValue = str.split(" ")
   return resultValue;  
}
var str1=totalWord("I am happy buddy");
console.log(`Total words are: ${str1.length}`);
var str2=totalWord("I am learning JS the language of internet");
console.log(`Total words are: ${str2.length}`);