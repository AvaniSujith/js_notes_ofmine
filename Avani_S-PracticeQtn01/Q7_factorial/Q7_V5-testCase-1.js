
// version - 7.5 using test cases

function factorial(num){
    if(num == 1 || num == 0){
        return "1";
        
    }else if(num < 0){
        return "Cannot be computed";
    }
    else{
        let fact = 1;
        for(i = 1; i <= num ; i++){
            
            fact *= i;
        
        }
        return fact;
    }
}

function testFactorial(){
    const testCases = [
        {
            input : 7,
            output : 5040
        },
        {
            input : 5,
            output : 120
        },
        {
            input : 4,
            output : 24
        },
        {
            input : 6,
            output : 700
        }
    ]

    testCases.forEach((testCase , index) =>{
        const result = factorial(testCase.input);

        if(result == testCase.output){
            console.log(`Test case ${index +1} passed`);
        }else{
            console.log(`Test case ${index+1} failed\nCorrect output - ${result}`);
        }
    });
}


testFactorial();
