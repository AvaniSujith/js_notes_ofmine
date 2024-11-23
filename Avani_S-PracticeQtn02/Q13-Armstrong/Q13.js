// Write a program to check whether a given number is an Armstrong number or not?

function armstrong(num){
    if(typeof(num) !== "number"){
        return "Invalid input. Input should be a number."
    }
    let digits = JSON.stringify(num);
    let numOfDigits = digits.length;
    // console.log(numOfDigits);
    // console.log(digits)
    let sumOfAll = 0;

    for(let i = 0; i < numOfDigits; i++){
        // console.log(digits[i]);
        sumOfAll += digits[i]**numOfDigits
    }
    
    // console.log(sumOfAll);
    if(num == sumOfAll){
        // console.log("It is an Armstrong number.");
        return "It is an Armstrong number."
    }else{
        // console.log("Not an Armstrong number.");
        return "Not an Armstrong number."
    }

}

// armstrong(123);
// armstrong(153);


function testArmstrong(){
    let sample = [153, 370, 9474, 123, "h"];
    let output = ["It is an Armstrong number.", "It is an Armstrong number.", "It is an Armstrong number.", "It is an Armstrong number."];

    for(let i = 0; i<sample.length; i++){
        let result = armstrong(sample[i]);

        if(result == output[i]){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed\nCorrect output: ${result}`);
        }
    }
}

testArmstrong();