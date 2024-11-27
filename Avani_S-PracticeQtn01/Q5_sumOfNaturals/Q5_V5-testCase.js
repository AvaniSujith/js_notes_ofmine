// version - 5.5 using testcases 

 function SumOfNatural(x){
        
        return x*(x+1)/2;
        
    }

function testSum(){
    const testCases = [
        {
            input : 5,
            output : 15
        },
        {
            input : 10,
            output : 55
        },
        {
            input : 3,
            output : 6
        }, 
        {
            input : 100,
            output : 5000
        }
    ]

    testCases.forEach((testCase, index) =>{
        const result = SumOfNatural(testCase.input);

        if(result == testCase.output){
            console.log(`Test case ${index + 1} passed`);
        }else{
            console.log(`Test case ${index + 1} failed\nCorrect output - ${result}`);
        }
    })
}
testSum();