console.log(`1_WAP to print numbers from 5 to 15 by incrementing 1`);
for (let index = 5; index <= 15; index++) {
    console.log(index);
}
console.log(`2_WAP to print numbers from 50 to 40 by decrementing by 1`);
for (let index = 50; index >=40; index--) {
    console.log(index);
}

console.log(`3_WAP to find first  15 odd numbers`);
var count=0;
for (let index =1; index <= 30; index=index+2) {
    console.log(index);
    count++;
}
console.log("count of odd numbers",count);
console.log(`4_WAP to find first  10 even numbers`);
var count=0;
for (let index =3; index < 20; index++) {
    if (index%2==0) {
        console.log(index);
        count++;
    }
}
console.log("count of even numbers",count);
console.log(`5_WAP to print table of 5 like-->5 10 15 20 25 .... 50`);
for (let index = 1; index <=10; index++) {
   console.log(5*index);
    
}
console.log(`6_WAP to print table of 10 like-->10 20 30 ....100`);
for (let index = 1; index <=10; index++) {
   console.log(10*index);
    
}
console.log(`7_WAP to print table of 10 in reverse order like-->100 90 80 70 60...10`);
for (let index = 10; index >=1; index--) {
   console.log(10*index);
    
}