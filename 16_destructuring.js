let person = {
    name: 'yogita',
    city: "Pune",
    experience: 9,
    pin: 411041
}
console.log(`------------------Object Destructuring Method/Way :: 1-----------------`);

// let name=person.name;
// let city=person.city;
// let experience=person.experience;
// let pin=person.pin;
// console.log(`------------------Object Destructuring Method/Way :: 2-----------------`);
// let {name,city,pin,isUnmarried}=person; //use curly bracket
// console.log(`name::${name},city::${city},pin::${pin},isUnmarried::${isUnmarried}`);
console.log(`---------------Object Destructuring Method/Way :: 2 with default values --------------`);
let { name, city, pin, isUnmarried = true } = person;
console.log(`name::${name},city::${city},isUnmarried::${isUnmarried}`);

console.log(`-------------------Array Destructuring Method/Way ::1 -------------------`);
const array = ["jenny", "Bill", "Steve"];
let person1 = array[0];
let person2 = array[1];
let person3 = array[2];
console.log(`person1:: ${person1},person2:: ${person2},person3:: ${person3}`);
console.log(`-------------------Array Destructuring Method/Way ::2  -------------------`);

let [element1, element2, element3] = array; //use square brackets
console.log(`person1:: ${element1},person2:: ${element2},person3:: ${element3}`);
console.log(`-------------------Array Destructuring Method/Way ::2 using default value-------------------`);

let [element4, element5, element6, element7 = "Elon"] = array; //use square brackets
console.log(`person1:: ${element4},person2:: ${element5},person3:: ${element6},person4:: ${element7}`);