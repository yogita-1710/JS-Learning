// Write a arrow functions such that - Pls don't forget to log result on console with meaningful msg 
// console.log(`1. With no args and no return value, log message on console inside arrow function a. "Good Morning, Today is Thursday" `); 
const wish=()=>{
    console.log(`"Good Morning, Today is Thursday"`);
}
wish();
console.log(`------------------------------------------------------------------`);

const multiplication=(n1,n2,n3=1)=>{
    result=n1*n2*n3;
    console.log(`Multiplication of ${n1},${n2},${n3} is:: ${result}`);
}
multiplication(5,5,2);
multiplication(10,4);
// console.log(`------------------------------------------------------------------`);
// console.log(` 2. With 3 args and no return value, for received 3 parameters perform the multiplication 
// a. Values to be passed = 5, 5, 2 
// b. Invoke the same arrow function for values 10, 4 [Note: assign default value to 3rd arg as 1 `);
// console.log(`------------------------------------------------------------------`);

// console.log(`3. With 5 args and return value such as, for received params it should do the addition 
// a. Values to be passed 100, 100, 200, 349, 756 
// b. Log the returned result on console with meaningful message for both step 3.a and 3.c 
// c. Invoke the same arrow function for values: 'I am ', ' learning',' ES6 ' features ", ' in depth' `);
console.log(`------------------------------------------------------------------`);
const addition=(n1,n2,n3,n4,n5)=>{
    result=n1+n2+n3+n4+n5;
    console.log(`Addition of ${n1},${n2},${n3},${n4},${n5}, is:: ${result}`);
}
addition(100,100,200,349,756);
addition("I am ", "learning"," ES6 " ,"features", "in depth");