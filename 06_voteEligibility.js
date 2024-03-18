var voteEligible=function(age) {
    if (age == null || age <= 0 || isNaN(+age)|| age>130) {
        console.log(`Invalid input: ${age}`);
    }
    else if (age<18) {
        console.log(`Not Eligible for Vote: ${age}`);
    }
    else{
        if (age>18) {
            console.log(`Eligible for Vote: ${age}`);
        }
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);