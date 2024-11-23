// Write a program to calculate the factorial of a number using a recursive method?

function factorial(num){
    if(typeof(num) !== "number"){
        return "Invalid input. Input should be a number."
    }
    let fact = 0;
    if(num < 0){
        return "Invalid";
    }
    
    if(num === 0 || num === 1){
        return "1";
    }
    
    fact = num * factorial(num - 1);
    return fact;
}

// console.log(factorial(20));

function testFactorial(){
    let sample = [5, -2, 20, 0, "h"];
    let output = [120, 2, 2432902008176640000, 1];

    for(let i = 0; i< sample.length; i++){
        let result = factorial(sample[i]);

        if(result == output[i]){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed\n${result}`);
        }

    }
}

testFactorial();

