function stringHandsOn() {
    var sentence = "   Hey you are doing good. keep it up   ";
    console.log(`step 1:The given string is :${sentence}`);

    var sentenceLength = sentence.length;
    console.log(`step 2:The length of the original string is :${sentenceLength}`);

    var sentenceTrim = sentence.trim();
    var sentenceNewLength = sentenceTrim.length;
    console.log(`step 3:The length of the string after trimming :${sentenceNewLength}`);

    console.log(`Step 4:Total number of extra spaces removed in step 3 are :${sentenceLength - sentenceNewLength}`);

    var firstChar = sentenceTrim.charAt(0);
    var lastChar = sentenceTrim.charAt(sentenceNewLength - 1);
    console.log(`Step 5:First character after trimming is :${firstChar} and Last character after trimming is :${lastChar} after step 3`);
    var resultValue = sentenceTrim.split(" ")
    //  console.log(resultValue);
    var totalWords = resultValue.length;
    console.log(`Step 6:The count of Total words available in string  after step 3 is :${totalWords} `);
    var index = sentenceTrim.indexOf("good");
    console.log(`Step 7: Index of word good is:${index}`);
    var findSubstring = sentenceTrim.substring(22);
    console.log(`Step 8 part 1:subString using function substring() is :${findSubstring}`);
    var findSlice = sentenceTrim.slice(22);
    console.log(`Step 8 part 2:subString using function slice() is :${findSlice}`);
    var startWithResult = sentenceTrim.startsWith("Hey");
    console.log(`Step 9:is string starts with word "Hey" after step 3 :${startWithResult}`);
    var endWithResult = sentenceTrim.endsWith("up");
    console.log(`Step 10:is string ends with word "up" after step 3 :${endWithResult}`);

}
stringHandsOn();