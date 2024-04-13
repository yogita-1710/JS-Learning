const set = new Set();
set.add(10);
set.add(20);
set.add(30);
set.add(20);
set.add(50);

//console.log(set);
set.forEach((element,index,set)=>{
    console.log(element,index,set);
});

console.log(`----------------------------------`);
let mapStudentMarks = new Map();
mapStudentMarks.set("Elon", 90);
mapStudentMarks.set("Stew", 56);
mapStudentMarks.set("Jenny", 45);
mapStudentMarks.set("Ratan", 72);
mapStudentMarks.set("Andy", 80);
mapStudentMarks.set("Larry", 84);

mapStudentMarks.set("Ratan", 99); // Adding duplicate Key
mapStudentMarks.set("Gajanan", 45);   // Adding duplicate value
// console.table(mapStudentMarks);
mapStudentMarks.forEach((value,key,map) => {
// console.log(value,key);
    console.log(key,value);
});