console.log(`============================Step 1=======================================`);class Vehicle {
    constructor(name,make, model, year,price) {
      this.name=name;
      this.make = make;
      this.model = model;
      this.year = year;
      this.price=price;
    }
  
    displayDetails() {
        console.log(
       `Name of the vehicle is :${this.name} 
        is product of the company: ${this.make}
        Variant of the vehicle is: ${this.model}
        Year of launching vehicle is : ${this.year}
        Price Of vehicle is:${this.price}`);    }
  }
  const endevor = new Vehicle('Endevor','Ford', 'F-150', 2020,'15 lakh');

// Display vehicle details
console.log('Vehicle Details:');
// endevor.displayDetails();
console.log(`--------------------------------------------------------`);
// Create an instance of the Car class
const city = new Vehicle('City','Honda', 'SV', 2023,'10 lakh');
// honda.displayDetails();
// console.log(`--------------------------------------------------------`);
const dzire=new Vehicle('dzire','Swift','zdi',2009,'9 lakh');
// dzire.displayDetails();
// console.log(`--------------------------------------------------------`);
const thar=new Vehicle('Thar','Mahindra','AX',2024,'12 lakh')
// thar.displayDetails();
// console.log(`--------------------------------------------------------`);
const nexon=new Vehicle('Nexon','Tata','Fearlessplus',2023,'14 lakh');
// nexon.displayDetails();
var arrayOfVehicles=[endevor,city,dzire,thar,nexon,];
for (const element of arrayOfVehicles) {
  element.displayDetails(); 
  console.log(`------------------------------------------------------------------------`);
}
console.log(`============================Step 2=======================================`);
class College {
  constructor(name, establishment,city,type ){
      this.name = name;
      this.establishment=establishment;
      this.city = city;
this.type=type;

  }
  display(){
      console.log(`College Details => Name: ${this.name},Establishment year:${this.establishment}, City: ${this.city},College type is: ${this.type} `);
  }
}
const ABC = new College("ABC", 1990,"Pune","Government");
ABC.display();
console.log(`------------------------------------------------------------------------`);
const DEF = new College("DEF", 1967,"Mumbai","Government");
DEF.display();
console.log(`------------------------------------------------------------------------`);
const XYZ=new College("XYZ",2000,"Satara","Private");
XYZ.display();
console.log(`------------------------------------------------------------------------`);
const PQR=new College("PQR",1998,"Nagpur","Private");
PQR.display();
console.log(`============================Step 3=======================================`);
function traverseObject(myObj){
  for (const key in myObj) {
  console.log(`${key}:${myObj[key]}`);  
    }
  }
traverseObject(ABC);