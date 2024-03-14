console.log("-----------------step 1------------------");
function squareOfWordLength(str){
var strLen=str.length;
return strLen*strLen;
}
var str1=squareOfWordLength("JavaScript");
console.log(`Sqaure of length of String "JavaScript" is ::${str1}`);
var str2=squareOfWordLength("Google Chrome");
console.log(`Sqaure of length of String "Google Chrome" is ::${str2}`);
var str3=squareOfWordLength("Developer Smart");
console.log(`Sqaure of length of String "Developer Smart" is ::${str3}`);
console.log("-----------------step 2------------------");
function sample(){
    var sentence="I am angular developer";
    var sentenceLength=sentence.length;
    console.log(`Length of string is::${sentenceLength}`);
    var newSentence=sentence.split(" ");
   // console.log(newSentence);
    var noOfWords=newSentence.length;
    console.log(`Number of words in string is::${noOfWords}`);
    console.log(`Result of Division of  String length by number of words is::${sentenceLength / noOfWords}`);
    console.log(`Result of Multiplication of  String length by number of words is::${sentenceLength * noOfWords}`);
}
sample();

