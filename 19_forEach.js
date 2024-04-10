let array=[2,4,1,7,9,8];
array.forEach((element,index,array)=>{
    console.log(element,index,array);
});
console.log(`-------------forEach using Mandatory Arguments only--------------`);
array.forEach((value)=> {
    console.log(value);
});
console.log(`print even numbers using forEach`);
array.forEach((value)=> {
    if(value %2 ==0){
    console.log(value);
    }
});