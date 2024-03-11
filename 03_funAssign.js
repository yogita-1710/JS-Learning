console.log("===========step 1===========");
function fun1(){
    console.log("Hello from Yogita");
}
function fun2(){
    console.log("Welcome to Angular Course");
}
fun1();
fun2();
console.log("===========step 2===========");
function personalDetails(firstName,lastName,collegeName){
    console.log("First Name is::",firstName);
    console.log("Last Name is::",lastName);
    console.log("College Name is::",collegeName);
}
personalDetails("Yogita","Pore","KBP College");
console.log("===========step 3===========");
function swapValues(num1,num2){
    console.log("values before swap:: ",num1,num2);
    temp=num1; 
    num1=num2;
    num2=temp;
    console.log("values after swap:: ",num1,num2);
}
swapValues(1000,2000);
swapValues("Virat","Anushka");
console.log("===========step 4===========");
function addThreeValues(n1,n2,n3){
    console.log("Arguments",n1,n2,n3);
var result=n1+n2+n3;
console.log("Addition is::",result);
}
addThreeValues("Hello", " Good", " Morning");
addThreeValues(10.23,600,40);
