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


// Add all employee objects inside array
const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(`1. Sort the 'arrayEmployees' in descending order of Employee Id's and log employee
details → Id, Name, Department`);
const newArrayEmployees = arrayEmployees.sort((a, b) => { return a.emp_id > b.emp_id ? -1 : 1; });
newArrayEmployees.forEach((element) => { console.log(`Id :: ${element.emp_id}, Name :: ${element.emp_name}, Department :: ${element.emp_dept}`); })
// let newArray = arrayEmployees.map((element) => element.emp_id).sort((a, b) => { return a > b ? -1 : 1 });
// console.log(newArray);

// newArray.forEach((id) => {
//     arrayEmployees.forEach((empl) => {
//         if (id == empl.emp_id) {
//             console.log(`Id :: ${empl.emp_id}, Name :: ${empl.emp_name}, Department :: ${empl.emp_dept}`);
//         }
//     })
// })


console.log(`------------------------------------------------------------------------`);
console.log(`2. Sort the 'arrayEmployees' in ascending order of employee department & log Id, dept, & Company`);
const sorted = arrayEmployees.sort((a, b) => {
    return a.emp_dept > b.emp_dept ? 1 : -1;
});
sorted.forEach((element) => {
    console.log(`ID ::${element.emp_id}, Department::${element.emp_dept}, Company::${element.emp_company}`);
});
console.log(`------------------------------------------------------------------------`);
console.log(`sort the employee array in descending order of emplyee salary`);
const sortedSalary = arrayEmployees.sort((a, b) => {
    return a.emp_salary > b.emp_salary ? -1 : 1;
});
sorted.forEach((element) => {
    console.log(`Name ::${element.emp_name}, Salary::${element.emp_salary}, Company::${element.emp_company}`);
});