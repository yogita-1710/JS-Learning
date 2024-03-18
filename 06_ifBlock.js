var marriageCheck = function (age, candidateName) {
    if (age >= 21) {
        console.log(`Eligible for marriage : Age- ${age}, Name- ${candidateName}`);
    }
    console.log(`Marriage eligibility check done`);
}
marriageCheck(23, "Bill");
marriageCheck(21, "Stew");
marriageCheck(20, "Elon");

console.log(`=================`);

