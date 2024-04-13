let str = "How are you mate";
console.log(str);
let str1 = '';
for (i = 0; i < str.length; i++) {
    // console.log(i);
    if (i % 2 == 0) {
       str1=str1 + str.charAt(i).toUpperCase();
    }
    else{
        str1= str1 + str.charAt(i)
    }
}
console.log(str1);
