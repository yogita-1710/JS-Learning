class Student {
    constructor(rollNumber, name, division) {
        this.rollNumber = rollNumber;
        this.name = name;
        this.division = division;
    }
    display() {
        console.log(`Student Details =>  RollNo: ${this.rollNumber},Name: ${this.name}, Division: ${this.division}`);
    }
}
const shreya = new Student(111,"shreya","A");
shreya.display();
const Hitesh = new Student(333,"Hitesh","B");
Hitesh.display();
const Raj=new Student(999,"Raj","C");
Raj.display();