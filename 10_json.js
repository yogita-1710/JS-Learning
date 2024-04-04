let person={
    name:"Yogita",
    city:"Pune",
    experience:9,
    isMarried:true,
    skills:["HTML","CSS","JavaScript"],
    address:{
        street:"Magarpatta",
        city:"Pune"
    }
}
console.log(person.skills[0]);
console.log(typeof person);
const result=JSON.stringify(person);
console.log(typeof result);
console.log(result);

const personJSON = `
{
    "name": "Yogita",
    "city": "Pune",
    "experience": 9,
    "isMarried": true,
    "skills": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "address": {
      "street": "Magarpatta",
      "city": "Pune"
    }
  }
`;

console.log(`======== Convert JSON to Object ===========`);
const personObject = JSON.parse(personJSON);
console.log(typeof personObject);
console.log(personObject);