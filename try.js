let arrayMarks=[90,56,45,72,80,64];
let myMap=new Map();
myMap.set("Elon",90);
myMap.set("stew",56);
myMap.set("Jenny",45);
myMap.set("Ratan",72);console.log(`for duplicate it override  value`);
myMap.set("Ratan",90);//duplicate key
myMap.set("Andy",80);
myMap.set("Larry",64);
console.table(myMap);
console.log(`-------get()-------`);
const jennyMarks=myMap.get("Jenny");
console.log(`Jenny's marks::${jennyMarks}`);
console.log(`-------get will return undefined for unavailable key------`);
const yogitaMarks=myMap.get("Yogita");
console.log(`Yogita marks::${yogitaMarks}`);
console.log(`--------------has()--------------`);
var isAvailable=myMap.has("Ratan")
console.log(isAvailable);
var isAvailable=myMap.has("Yogita")
console.log(isAvailable);
const length=myMap.size;
console.log(length);
myMap.delete("Andy");
console.table(myMap);
const key1=myMap.keys()
console.log(key1);
for (const iterator of key1) {
    console.log(iterator);
}
const vals=myMap.values()
console.log(vals);
for (const iterator of vals) {
    console.log(iterator);
}