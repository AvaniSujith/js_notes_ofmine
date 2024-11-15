// version-4.1

// function OddOrEven(num){
//     if(num%2 == 0){
//         console.log("The number is even");
        
//     }
//     else{
//         console.log("The number is odd");
//         }
// }

// OddOrEven(5);
// OddOrEven(660);


// version - 4.2 -using testcases 

function OddOrEven(num){
    if(num%2 == 0){
        return "The number is even";
        
    }else{
        return "The number is odd";
    }
}


function testOddorEven(){
    const testCases = [
        {
            input : 3,
            output: "The number is odd"
        },
        {
            input : 6,
            output : "The number is even"
        },
        {
            input : 4,
            output : "The number is even"
        },
        {
            input : 5,
            output : "The number is even"
        }
    ];

    testCases.forEach((testCase , index) =>{
            const result = OddOrEven(testCase.input);

            if( result == testCase.output){
                console.log(`Test case ${index + 1} passed`);
            }else{
                console.log(`Test case ${index + 1} failed\nCorrect output - ${result}`)
            }
    });

    
}
testOddorEven();