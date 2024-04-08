console.log(`--------Arrow function with no argument and no return value----------`);
const show=()=>{
    console.log(`This if Arrow function`);
}
show();
console.log(`--------Arrow function with argument and no return value----------`);
const add=(n1,n2)=>{
    console.log(`Addition is::${n1+n2}`);
}
add(5,4);

const add1=(n1,n2)=>console.log(`Addition is::${n1+n2}`);

add1(5,4);
console.log(`--------Arrow function with argument and  return value----------`);
const square=(n)=>{
    result=n*n;
    return result;
}
let sq=square(2);
console.log(`Square of number is::${sq}`);
console.log(`--------Arrow function with no argument and return value----------`);
const expo=()=>{}