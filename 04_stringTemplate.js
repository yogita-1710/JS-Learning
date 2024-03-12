console.log(`I am "Software" Developer`); //Backtick operator used to give double quote to software

var city = "Pune";
var firstName = "Gajanan";

//console.log("My name is: ", firstName, " and city is: ", city);

console.log(` My name is: ${firstName} and city is: ${city} `);
console.log("============replace()============");
var greet="Good Morning";
const afterReplace=greet.replace("Morning","Afternoon");
console.log(`After replace string is: ${afterReplace}`);
console.log(`========== toUpperCase() ==================`);
var greet = "Good Morning";
var greetInUpperCase = greet.toUpperCase();
console.log(`${greet} in upper case is : ${greetInUpperCase}`);
console.log(`========== toLowerCase() ==================`);
var greet = "GOOD Morning";
var greetInLowerCase = greet.toLowerCase();
console.log(`${greet} in lower case is : ${greetInLowerCase}`);
console.log(`========== includes() ==================`);
var info="my name is yogita";
var infoIncludes=info.includes("yogita");
console.log(`does string info incluedes yogita ::${infoIncludes}`);
console.log(`==========trim()============`);
var trimString=" Yogita Pore ";
console.log(trimString.length);
var afterTrim=trimString.trim();
console.log(afterTrim.length);
console.log(`After trimming the empty spaces string is ${afterTrim} `);
console.log(`==========slice()============`);
var string="developers world";
var afterSlice=string.slice(0,7);
console.log(`After slicing the string is ${afterSlice} `);


console.log(`==========search()============`);
var str="Hello dev!";
const searchStr=str.search("dev");
console.log(searchStr);
