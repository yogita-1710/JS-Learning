console.log(`1.Think of all the properties that you could add ( Add minimum 5 properties) 
2. Also include nested object 'degrees' like engineering: 'CSC', PHD: 'Adv Computing' and few more. 
3. Also add one array --> 'certificates' with his certificates like 'Hacker Rank Participation', 'Certificate in IFE course, 'Certificate in Adv Programming' `);
let professor = {
    name: "Yogita",
    college: "KBP,Satara",
    department: "Computer Engineering",
    subject_taught: "Java",
    degrees:{
        graduation:"BE-CS",
        postGraduation:"ME-CS",
        phd:"Adv Computing"
    },
    certificates:['Hacker Rank Participation','Certificate in IFE Course','Certificate in Adv Programming']
}
console.log(professor);
console.log(`-------------------------------------------------`);
console.log(`4. Try to add new property like totalExperience: "14 years" and log object on console `);
professor.totalExperience='15 years';
console.log(professor);
console.log(`-------------------------------------------------`);
console.log(`5. Modify any existing property and log object on console `);
professor.name="Yogita Pore";
console.log(professor);
console.log(`-------------------------------------------------`);
console.log(`6. Add one new certificate -> "Oracle Certified" at the 2nd index of array -> certificates `);
professor.certificates.splice(2,0,'Oracle Certified');
console.log(professor);
console.log(`-------------------------------------------------`);
console.log(`7. Log the last element of the array —certificates.`);
length=professor.certificates.length;
console.log(`the last element of the array —certificates is:: ${professor.certificates[length-1]}`);
console.log(`-------------------------------------------------`);
console.log(`8. Log complete object on console. `);
console.log(professor);
console.log(`-------------------------------------------------`);
console.log(`9. Traverse array certificates using for of loop `);
for (const Certificate of professor.certificates) {
    console.log(Certificate);
    
}