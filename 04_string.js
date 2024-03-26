var greet = "Good Morning";
console.log("====================length property=====================");
var totalChars = greet.length;
console.log("Total number of chars is:" , totalChars);
console.log("====================charAt=====================");
var charAt0 = greet.charAt(0);
console.log("Character at index 0 is: ", charAt0);

var charAt6 = greet.charAt(6);
console.log("Character at index 6 is: ", charAt6);

var charAt11 = greet.charAt(11);
console.log("Character at index 11 is: ", charAt11);

 

var sentence = "When you join meetings, webinars, chats or channels hosted on Zoom, your profile information";
var totalChars = sentence.length;
var lastChar = sentence.charAt(totalChars-1);
console.log("Last char is:" , lastChar);

console.log("========== indexOf() ==================");
var greet = "Good Morning";
console.log("Original String is: ",greet);
var indexOfM = greet.indexOf('M');
console.log("Index of char M is: ", indexOfM);
console.log("========== concat() ==================");
var firstName = "Gajanan";
var lastName= " Kharat";
console.log("First name:",firstName,"Last Name:",lastName);
var resultConcat = firstName.concat(lastName);
console.log("Concat result is:", resultConcat);
console.log("============replace()============");
var greet = "Good Morning";
console.log("Original String is: ",greet);
const afterReplace = greet.replace("Morning", "Afternoon");
console.log(`After replace string is: ${afterReplace}`);
console.log(`========== toUpperCase() ==================`);
var greet = "Good Morning";
var greetInUpperCase = greet.toUpperCase();
console.log(`String "${greet}" in upper case is : ${greetInUpperCase}`);


console.log(`========== trim() ==================`);
var greet = "   Good Morning   ";
var lengthBeforeTrim = greet.length;
console.log(` ${greet} it's length is : ${lengthBeforeTrim} `);
var greetAfterTrim = greet.trim();
var lengthAfterTrim = greetAfterTrim.length;
console.log(` ${greetAfterTrim} it's length is : ${lengthAfterTrim} `);

console.log(`Total spaces removed is: ${lengthBeforeTrim-lengthAfterTrim}`);

console.log(`========== includes() ==================`);
var greet = "Good Morning";
var result = greet.includes("nin");
console.log(`Is string ${greet} includes word or char 'nin': ${result}`);
var result = greet.includes("MoR");
console.log(`Is string ${greet} includes word or char 'MoR': ${result}`);

console.log(`========== search() ==================`);
var greet = "Good Morning";
var result = greet.search("Morning");
console.log(`'Morning' is available at ${result}`);

var result = greet.search("r");
console.log(`'r' is available at ${result}`);

console.log(`========== slice() ==================`);
var greet = "Good Morning";
var result = greet.slice(3);
console.log(`Slice is ${result}`);
var result = greet.slice(3, 10);
console.log(`Slice is ${result}`);

console.log(`========== split() ==================`);
var greet = "Good Morning";
var resultValue = greet.split(" ")
console.log(resultValue);
console.log(`Total words are: ${resultValue.length}`);
var resultValue = greet.split(" ")
var str="GoodAMorningAIndia";
var resultValue1 = str.split("A")
console.log(resultValue1);
console.log(`Total words are: ${resultValue1.length}`);
// Write a function with name totalWord() with one arguments

//  "I am happy Buddy" 

//  "I am learning JS the language of internet"

// and this function should return the total numbers of words

 
function totalWord(sentence){

    var words = sentence.split(" ");

    var totalWords = words.length;

    return totalWords

}

var totalWords = totalWord("I am happy Buddy");

console.log(`"I am happy Buddy". Total number of words is: ${totalWords}`);

 

var totalWords = totalWord("I am learning JS the language of internet");

console.log(`"I am learning JS the language of internet". Total number of words is: ${totalWords}`);
// console.log(`-------------------------------------------------------------------------`);
// console.log(`========== toLowerCase() ==================`);
// var greet = "GOOD Morning";
// var greetInLowerCase = greet.toLowerCase();
// console.log(`String ${greet} in lower case is : ${greetInLowerCase}`);
// console.log(`========== includes() ==================`);
// var info = "my name is yogita";
// var infoIncludes = info.includes("yogita");
// console.log(`does string info includes yogita ::${infoIncludes}`);
// console.log("----------------------------------------------------------");
// console.log(`==========trim()============`);
// var trimString = " Yogita Pore ";
// console.log(trimString.length);
// var afterTrim = trimString.trim();
// console.log(afterTrim.length);
// console.log(`After trimming the empty spaces string is:${afterTrim} `);
// console.log(`==========slice()============`);
// var string = "developers world";
// var afterSlice = string.slice(0, 7);
// console.log(`After slicing the string is ${afterSlice} `);
// console.log("----------------------------------------------------------");
// console.log(`==========search()============`);
// var str = "Hello dev!";
// const searchStr = str.search("dev");
// console.log(searchStr);
var str="TEST";
var unicodeValue=str.charCodeAt(0);
console.log(unicodeValue);