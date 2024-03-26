const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
var evenNumbersString="";
for(i =0; i<arrayNumbers.length; i++ )  {
    if (arrayNumbers[i] % 2 === 0) {
      evenNumbersString += arrayNumbers[i] + " ";
    }
  }
  console.log(`all even numbers are:: ${evenNumbersString}`);