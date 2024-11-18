// Write a program to calculate the remainder of two numbers?

function remainder(num1, num2){
    if(num2 === 0){
        // console.log("Cannot perform division with 0 as divisor.");
        return "Cannot perform division with 0 as divisor.";
    }else{
        let remainder = num1 % num2;
        // console.log("The remainder is",remainder);
        return remainder;
    }
}

// remainder(3,2);
// remainder(10,3);
// remainder(-10,3)
// remainder(-10,-3);
// remainder(10,0);
// remainder(2,5);

function testCases(){

    let sample = [(3,2), (10,3), (-20,11), (-30,-3), (33,0),(0,2)];
    let output = [1,1,-1,-1,0,0];

    for(let i = 0; i <= sample.length; i++){
        let result = output[i+1];

        if(result == remainder(sample[i])){
            console.log(`Test case ${i+1} :passed `);
        }else{
            console.log(`Test case ${i+1} failed\nCorrect output is ${result}`);
        }
    }
}

testCases();