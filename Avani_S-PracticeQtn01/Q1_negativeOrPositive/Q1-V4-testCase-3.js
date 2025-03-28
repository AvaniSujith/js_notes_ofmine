
// version - 1.4- using objects.

function checkNum(num){
    if( num<0 ){
        
        return "The given number is negative."
    }
    else if( num>0 ){
        return "The given number is positive."        
    }
    else{
        return "The given number is zero.";
    }
}

function testNumbers(){
    const testCases = [
        { input: 2,
          output : "The given number is positive."
        },
        { input : -8,
          output : "The given number is negative."
        },
        {
          input : 0,
          output : "The given number is zero."
        },
        {
            input : 9,
            output : "The given number is zero."
        }
    ]

    testCases.forEach((testCase, index) =>{
        const result =  checkNum(testCase.input);

        if (result === testCase.output) {
            console.log(`Test case ${index + 1}: Passed`);
        } else {
            console.log(`Test case ${index + 1}: Failed \nCorrect output - ${result}`);
        }


    });
    
}

testNumbers();
