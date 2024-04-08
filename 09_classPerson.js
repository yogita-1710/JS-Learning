class Person{
name
city
age
}
let jennyPerson=new Person();
console.log(jennyPerson);
console.log(`===============================`);
function add(num1, num2) {
    n1=num1;
    n2=num2;
    console.log(`num1::${n1} num2::${n2}`);
}
add(5, 7);
console.log(`===============================`);
// similarly,here we use constructor to initialize object
//as we create object automatically calls constructor
class Person2 {
    name
    city
    age
    constructor(myName, myCity, myAge) {
        //we are making 10 objects and all have name property so to set property to current object we use this
        this.name = myName;
        this.city = myCity;
        this.age = myAge;
    }
}
const jenny = new Person2("Jenny", "Pune", 24);
console.log(jenny);
const bill=new Person2("Bill","Mumbai",27);
console.log(bill);
const elon = new Person2("Elon", "LA", 38);
console.log(elon);
console.log(`=====================================================================`);
class Person1 {
    constructor(name, city, age){//constructor of class
        this.name = name;  //data member of class and constructors arguments have same name
        this.city = city;
        this.age = age;
    }
    detail(){// method of class 
        console.log(`Person Details => Name: ${this.name}, City: ${this.city}, Age: ${this.age}`);
    }
}
const jenny1 = new Person1("Jenny", "Pune", 22);
jenny1.detail();

const bill1 = new Person1("Bill", "Mumbai", 24);
bill1.detail();

const elon1 = new Person1("Elon", "LA", 38);
elon1.detail();

console.log(`===== Traversing array object ======`);
const array = [jenny1, bill1, elon1];
for (const element of array) {
   element.detail();
}
console.log(`-------------------------------`);
