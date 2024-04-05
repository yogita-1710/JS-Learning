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
axis_bank = new Bank();
sbi_bank = new Bank();
icici_bank = new Bank();
kotak_bank = new Bank();
hdfc_bank = new Bank();
panjab_bank = new Bank();
