// Write a program that approximates the derivative of f(x)=x^n?

function derivative(power){

    // let result = power * 1 + "X" + "^" + (power-1);
    let result = `${power}X^${power - 1}`;
    return result;
    
    // let finalResult = JSON.stringify(result)
    // return finalResult;
    
}

// derivative(3);
// derivative(4);

function testDerivative(){
    let sample = [3, 4, 8, 36];
    let output = ["3X^2", "4X^3", "7X^4", "36X^35"];

    for(let i = 0; i<sample.length; i++){
        let result = derivative(sample[i]);

        if(result == output[i]){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed\nCorrect output is ${result}`);
        }
    }
}

testDerivative();