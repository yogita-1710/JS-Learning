const bankSBI = {
    Bank_Name: "STATE BANK OF INDIA",
    IFSC: "SBIN0010203",
    MICR: 411002055,
    Branch_Code: 10203,
    Branch: "Midc-Hinjewadi",
    
    Phone_No: 987654321,
}
console.log(`--------------------------bankSBI Object-------------------`);
console.table(bankSBI);
const bankLocation={
    Address: "The Symbiosis Hostel Building Midc",
    City: "Hinjawadi",
    District: "Pune",
    State: "Maharashtra",
    Pin:411051
}
console.log(`-----------------bankLocation Object------------------`);
console.table(bankLocation);
console.log(`-----------------clonedBankDetails Object------------------`);
const clonedBankDetails=Object.assign({},bankSBI,bankLocation);
console.table(clonedBankDetails);

const rateOfInterest={
    homeLoanInterest:9.15,
    personalLoanInterest:8.75,
    dueInterest:9.00
}
console.log(`----------------sbiDetails Object After Merging all------------------------`);
const sbiDetails=Object.assign({},bankSBI,bankLocation,rateOfInterest)
//console.table(sbiDetails);
console.log(`Bank_Name:${sbiDetails.Bank_Name}, 
IFSC Code: ${sbiDetails.IFSC}, 
MICR Code: ${sbiDetails.MICR}, 
Branch_Code: ${sbiDetails.Branch_Code}, 
Branch: ${sbiDetails.Branch}, 
Phone_No: ${sbiDetails.Phone_No}, 
Address: ${sbiDetails.Address}, 
City: ${sbiDetails.City}, 
District: ${sbiDetails.District}, 
State: ${sbiDetails.State}, 
Pin: ${sbiDetails.Pin}, 
homeLoanInterest rate: ${sbiDetails.homeLoanInterest}, 
personalLoanInterest rate: ${sbiDetails.personalLoanInterest}, 
dueInterest rate: ${sbiDetails.dueInterest}`);
console.log(`---------------------Merged Object Traversal------------------------`);
for (const key in sbiDetails) {
 
        const element = sbiDetails[key];
        console.log(element);

}