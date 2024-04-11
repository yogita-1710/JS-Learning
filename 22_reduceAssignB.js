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
const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`-----------------------------------------------------------------------`);
console.log(`1. Find all the employees from 'Wipro' company `);
arrayWiproEmp = arrayEmps.filter((element) => { return element.emp_company == 'Wipro' });
arrayWiproEmp.forEach(element => {
    console.log(element);
});
console.log(`-----------------------------------------------------------------------`);
console.log(`2. Find all the employees from 'IT' OR 'HR' dept`);
arrayFromITorHR = arrayEmps.filter((element) => { return element.emp_dept == 'IT' || element.emp_dept == 'HR' });
arrayFromITorHR.forEach(person => {
    console.log(person);
});
console.log(`-----------------------------------------------------------------------`);
console.log(`3. Find all the employees whose emp id's are greater than 50`);
empidGTfifty = arrayEmps.filter((person1) => { return person1.emp_id > 50 });
empidGTfifty.forEach(element => {
    console.log(element);
});
console.log(`-----------------------------------------------------------------------`);
console.log(`4. Find all the employees whose names start with letter 'A' or 'V' or 'M' `);
arrayOfNamesStartsWithAVM = arrayEmps.filter((person2) => {
    return person2.emp_name.startsWith("A") || person2.emp_name.startsWith('V')|| person2.emp_name.startsWith('M');
});
arrayOfNamesStartsWithAVM.forEach((element) => { console.log(element); })
console.log(`-----------------------------------------------------------------------`);
console.log(`5. Find the average salary of the employee for all the department `);
const sumSalary = arrayEmps.reduce( (runningTotal, currentValue)=>{
        return runningTotal+currentValue.emp_salary;
    }, 0 );
    console.log(`Total Salary :${sumSalary}`);
    console.log(`Average salary : ${sumSalary/arrayEmps.length}`);
console.log(`-----------------------------------------------------------------------`);
console.log(`6 Find the average salary for 'IT' department`);
const newArray = arrayEmps.filter((emp)=>{
    return emp.emp_dept=="IT";
});

const sumSalaryIT = newArray.reduce( (runningTotal, currentValue)=>{
    return runningTotal+currentValue.emp_salary;
}, 0 );
console.log(sumSalaryIT);
console.log(`Average salary from IT department is: ${sumSalaryIT/newArray.length}`);
console.log(`-----------------------------------------------------------------------`);