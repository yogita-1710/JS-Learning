//Put this json in backtick as it is 
//Convert this one to object 

//employee-info.json 
console.log(`step 1- Convert employee-info.json one to object `);
employee = `{
"name": "Aleix Melon", 
"id": "E00245", 
"role": ["Dev", "DBA"], 
"age": 23, 
"doj": "11-12-2019", 
"married": false, 
"address": { "street": "32, Laham St.", "city": "Innsbruck", "country": "Austria"  },"referred-by": "E0012"
}`;
const employeeObject = JSON.parse(employee);
console.log(typeof employee);
console.log(employeeObject);
console.log(`step 2-Log on console role - 'DEV'`);
const role=employeeObject.role[0];
console.log(role);
console.log(`step 3-Log only last name - 'Melon' `);
const name=employeeObject.name;
const lastname=name.split(" ");
console.log(lastname[lastname.length-1]);
console.log(`step 4-Log only joining year of employee -> 2019 `);
const doj=employeeObject.doj;
const joiningYear=doj.split("-");
console.log(joiningYear[joiningYear.length-1]);