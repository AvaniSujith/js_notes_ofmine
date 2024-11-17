// Write a program to calculate the compound interest for a fixed deposit over 5 years.The interest is compounded quarterly.

function compoundInterest(principleAmt, interestRate ){
    
    let totalAmount = principleAmt * ( 1 + (interestRate/4))**20;
    let compoundAmount = totalAmount - principleAmt;
    console.log(compoundAmount);

}

compoundInterest(5000,0.06);
compoundInterest(10000,0.08);
compoundInterest(15000,0.05)