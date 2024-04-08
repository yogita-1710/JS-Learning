// Create a class 'Bank' with all possible data members in such as way that all properties should be initialized using constructor. 
// A.Data members: bank_name, location, account_no, ifsc, interest_rate
// B.Create objects - axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, panjab_bank
// C.Add all object elements in a Set and Traverse this Set using for of loop then just log on console - Bank name and Location
class Bank {
    constructor(bank_name, location, account_no, ifsc, interst_rate) {
        this.bank_name = bank_name,
            this.location = location,
            this.account_no = account_no,
            this.ifsc = ifsc,
            this.interst_rate = interst_rate
    }
     display(bank_name, location, account_no, ifsc, interst_rate) {
        console.log(`Bank Details => Bank Name is:${bank_name},Location is:${location},Account Number is:${account_no}IFSC Code is:${ifsc} and Rate Of Interest is:${interst_rate}`)
    }
}
axis_bank = new Bank("Axis Bank","Satara",333,"UTIB0000188",3);
sbi_bank = new Bank("SBI Bank","Pune",666,"SBIN0000454",6);
icici_bank = new Bank("ICICI Bank","Sangli",999,"ICIC0006533",7);
kotak_bank = new Bank("Kotak Bank","Solapur",111,"KKBK0002039",8);
hdfc_bank = new Bank("HDFC Bank","Kolhapur",777,"HDFC0000164",9);
panjab_bank = new Bank("Punjab Bank","Miraj",555,"PUNB0945800",5);

let set=new Set();
set.add(axis_bank);
set.add(sbi_bank);
set.add(icici_bank);
set.add(kotak_bank);
set.add(hdfc_bank);
set.add(panjab_bank);
// console.log(set);
console.log(`Bank name and locations are`);
for (const key of set) {
        console.log(`${key.bank_name}:${key.location}`);
    }   

