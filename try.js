
function oddPositionedChars(arg1) {
    console.log(`odd Positioned Characters in string "${arg1}" are::`);
    for (i = 1; i < arg1.length - 1; i + 2) {
        var word = arg1.charAt(i);
        if (word != ' ') {
            console.log(word);
        }
    }
    console.log("------------------------------");
}
var str1 = "Hard work always pays back";
// var str2 = "Soon I will be UI UI Champ";
oddPositionedChars(str1);
// oddPositionedChars(str2);
// oddPositionedChars("Hard work always pays back");
// oddPositionedChars("Soon I will be UI UI Champ");