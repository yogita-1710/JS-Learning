

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", 'HR', 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Manesh", "HR", 85000, "Infy");

const arrayEmployees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny ,emp_mahi ];


console.log(`Step 1. Find all the employees working in TCS' and log only employee names and company  name on console`);
arrayEmployees.forEach((person)=>{
    if (person.emp_company=="TCS") {
        console.log(`Employee Name:: ${person.emp_name} & Company Name:: ${person.emp_company}`);
        
    }
})
console.log(`------------------------------------------------------------------------------------`);

console.log(`2. Find the 'Finance' department employees, log only department and employee name on console`);
arrayEmployees.forEach((person)=>{
    if (person.emp_dept=="Finance") {
        console.log(`Employee Name:: ${person.emp_name} & Company Name:: ${person.emp_dept}`);
    }
})
console.log(`------------------------------------------------------------------------------------`);
console.log(`3. Find the employees whose name starts with 'R'and log complete employee details on console `);
arrayEmployees.forEach((person)=>{
    const empName=person.emp_name;
    if (empName.startsWith("R")) {
        console.log(`Employee Name:: ${person.emp_name}`);
    }
})
console.log(`------------------------------------------------------------------------------------`);
console.log(`4.Find the employees whose salary is greater than 75000, and log on console emo name, company and salary`);
arrayEmployees.forEach((person)=>{
    if (person.emp_salary>75000) {
        console.log(`Employee Name:: ${person.emp_name} & Company Name:: ${person.emp_dept} & Salary:: ${person.emp_salary}`);
    }
})
console.log(`-------------------------------------------------------------------------------------`);
console.log(`5. Find the emp's whose salary greater than or equal 50000 and from 'IT' department,
log complete emp details on console`);
arrayEmployees.forEach((person)=>{
    if (person.emp_salary>=50000 && person.emp_dept=="IT") {
       console.log(person);
        console.log(` 
       Employee ID :: ${person.emp_id}
       Employee Name  :: ${person.emp_name}
       Employee Department:: ${person.emp_dept}
       Employee Salary:: ${person.emp_salary}
       Company Name:: ${person.emp_company}`)
    }
})
console.log(`-------------------------------------------------------------------------------------`);
console.log(`6. Find out all the employees from company 'Infy' and log complete employee details on console `);
arrayEmployees.forEach((person)=>{
    if (person.emp_company=="Infy") {
       console.log(` 
       Employee ID :: ${person.emp_id}
       Employee Name  :: ${person.emp_name}
       Employee Department:: ${person.emp_dept}
       Employee Salary:: ${person.emp_salary}
       Company Name:: ${person.emp_company}`)
    }
})