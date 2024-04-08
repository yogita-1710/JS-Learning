function add(a, b, ...values) {
    console.log(a);
    console.log(b);
    console.log(values);
}
add(5, 6, 7, 8);

console.log(`--------------------------------------`);
//function with default value argument/parameter
function division(n1,n2=1){
console.log(n1/n2);
}
division(2,5);
division(7);