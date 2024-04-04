console.log(`----------step 1------------`);
var str = "I am very good IT Developer";
var newStr = str.toLowerCase();
var count = 0;
for (let index = 0; index < newStr.length - 1; index++) {

    var ch = newStr.charAt(index);
    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
        count++;
    }
}
console.log(`Total number of Vowels in string is :: ${count}`);


console.log(`------second step----`);
function sumOfCube() {
    var sum = 0;
    for (num = 1; num <=5; num++) {
        var sum = sum + num * num * num;
    }
    console.log(`sum of cube::${sum}`);
}

sumOfCube();

console.log("-----step 3----------");

function oddPositionedChars(arg1) {
    console.log(`odd Positioned Characters in string "${arg1}" are::`);
    for (i = 0; i < arg1.length - 1; i++) {
        if (!(i % 2 == 0) ) {
            var word=arg1.charAt(i);
            if(word!=' '){
            console.log(word);
            }
        }
    }
    console.log("------------------------------");
}
var str1="Hard work always pays back";
var str2="Soon I will be UI UI Champ";
oddPositionedChars(str1);
oddPositionedChars(str2);
// oddPositionedChars("Hard work always pays back");
// oddPositionedChars("Soon I will be UI UI Champ");