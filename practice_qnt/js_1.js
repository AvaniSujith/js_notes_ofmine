
// version-1

// function checkNum(num){
//     if(num<0){
//         console.log("The given number is negative.");
//     }
//     else if(num>0){
//         console.log("The given number is positive");
//     }else{
//         console.log("The given number is zero");
//     }
// }



// checkNum(2);
// checkNum(-3);
// checkNum(0);

// version-1.2 using testcases 

// function checkNum(num){
//     if( num<0 ){
        
//         return "The given number is negative."
//     }
//     else if( num>0 ){
//         return "The given number is positive."        
//     }
//     else{
//         return "The given number is zero";
//     }
// }

// function testNumbers(){
//     const testCases = [
//         { input: 2,
//           output : "The given number is positive."
//         },
//         { input : -9,
//           output : "The given number is negative."
//         },
//         {
//           input : 0,
//           output : "The given number is zero."
//         }
//     ]
// }

// testCases.forEach((testCase) =>{
//     const result =  checkNum(testCase.input);
// });

// if(result == testCase.output){
//     console.log(`Test case ${testCases.index} passed`);
// }else{
//     console.log(`Test case ${testCases.index} failed \n Correct output - ${testCase.output}`);
// }


// version-1.3


// function checkNum(num){
//     if( num<0 ){
        
//         return "The given number is negative."
//     }
//     else if( num>0 ){
//         return "The given number is positive."        
//     }
//     else{
//         return "The given number is zero";
//     }
// }

// function testNumbers(){
//     const testCases = [
//         { input: 2,
//           output : "The given number is positive."
//         },
//         { input : -9,
//           output : "The given number is negative."
//         },
//         {
//           input : 0,
//           output : "The given number is zero."
//         }
//     ]

//     testCases.forEach((testCase) =>{
//         const result =  checkNum(testCase.input);
//     });
    
//     if(result == testCase.output){
//         console.log(`Test case ${testCases.index} passed`);
//     }else{
//         console.log(`Test case ${testCases.index} failed \n Correct output - ${testCase.output}`);
//     }
    
// }


// version - 1.4

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