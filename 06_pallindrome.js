// let str1="hello";
// let arr=[...str1];
// console.log(arr);
// let array=arr.reverse();
// if (array==arr) {
//     console.log("pallindrome");
// }
// for (let index = 0; index < str1.length; index++) {
//     const element = array[index];
    
// }

// madam dad mom nayan radar amma mam level nitin
// hello
function isPalindrome(word){
    const arrayChars = word.split("");
    arrayChars.reverse();
    const reverseWord = arrayChars.join("");
    const result = reverseWord==word;
    return result;
}
var result = isPalindrome("nitin");
console.log(`is word 'nitin' palindrome : ${result}`);