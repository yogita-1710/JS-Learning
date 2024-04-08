const person = {
    name: "Yogita",
    city: "Pune",
    experience: 9
}

// Not allowed
// person = { 
//     pin: 12345
// }

console.log(person);
person.city = "Mumbai";
console.log(person);

console.log(`---------------------cloning an Object using Object.assign--------------------`);
const ClonedPerson = Object.assign({}, person);
console.log(ClonedPerson);
console.log(`--------------------------------Merge an array-------------------------------`);
const address = {
    flatNumber: 900,
    wing: "A-wing",
    area: "Hinjewadi"
}

const mergedObject=Object.assign({},person,address);

console.table(person);
console.table(address);
console.table(mergedObject);