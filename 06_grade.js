function gradeCalculation(marks) {
    // invalid inputs
    if (marks == null || marks <= 0 || isNaN(+marks) || marks > 100) {
        console.log(`Invalid input: ${marks}`);
    }
    else if (marks >= 90) {
        console.log(`Fantastic Marks :${marks} !!! Your grade is A+`);
    }
    else if (marks >= 75 && marks < 90) {
        console.log(`Excellent Marks :${marks} !!! Your grade is A`);
    }
    else if (marks >= 50 && marks < 75) {
        console.log(`Good Marks :${marks} !!! Your grade is B`);
    }
    else if (marks >= 35 && marks < 50) {
        console.log(`Good Marks :${marks} !!! Your grade is C,Need Improvement`);
    }
    else {
        console.log(`You are failed in Exam:: ${marks} Better Luck next time`);
    }
}


gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(null);
gradeCalculation(undefined);
gradeCalculation(0);
gradeCalculation(-20);
gradeCalculation("Seventy"); // NaN
gradeCalculation("70"); // 70