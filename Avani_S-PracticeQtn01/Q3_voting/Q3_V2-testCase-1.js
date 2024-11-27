
// version - 3.2 

function checkEligibility(age){
    if( age >= 18){
        return "Eligible for voting";
    }
    else{
        return "Not eligible for voting";
    }
}

function testForEligibility(){
    const testCases = [
        {
            input : 22,
            output : "Eligible for voting"
        },
        {
            input : 33,
            output : "Eligible for voting"
        },
        {
            input : 77,
            output : "Eligible for voting"
        },
        {
            input : 3,
            output : "Not eligible for voting"
        },
        {
            input : 5,
            output : "Not eligible for voting"
        },
        {
            input : 9,
            output : "Eligible for voting"
        }
    ]

    testCases.forEach((testCase , index) =>{
        const result = checkEligibility(testCase.input);

        if(result == testCase.output){
            console.log(`Test case ${index + 1} passed`);
        }else{
            console.log(`Test case ${index + 1} failed\nCorrect output - ${result}`);
        }
    })
}

testForEligibility();

