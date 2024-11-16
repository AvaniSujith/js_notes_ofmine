// version-3.1

// function checkEligibility(age){
//     if( age >= 18){
//         console.log("Eligible for voting");
//     }
//     else{
//         console.log("Not eligible for voting");
//     }
// }

// checkEligibility(2);
// checkEligibility(33);


// version - 3.2 

// function checkEligibility(age){
//     if( age >= 18){
//         return "Eligible for voting";
//     }
//     else{
//         return "Not eligible for voting";
//     }
// }

// function testForEligibility(){
//     const testCases = [
//         {
//             input : 22,
//             output : "Eligible for voting"
//         },
//         {
//             input : 33,
//             output : "Eligible for voting"
//         },
//         {
//             input : 77,
//             output : "Eligible for voting"
//         },
//         {
//             input : 3,
//             output : "Not eligible for voting"
//         },
//         {
//             input : 5,
//             output : "Not eligible for voting"
//         },
//         {
//             input : 9,
//             output : "Eligible for voting"
//         }
//     ]

//     testCases.forEach((testCase , index) =>{
//         const result = checkEligibility(testCase.input);

//         if(result == testCase.output){
//             console.log(`Test case ${index + 1} passed`);
//         }else{
//             console.log(`Test case ${index + 1} failed\nCorrect output - ${result}`);
//         }
//     })
// }

// testForEligibility();


// version-3.3

function checkEligibility(age){
    if(age > 18){
        return "eligible";
    }else{
        return "ineligible";
    }
}

function testForEligibility(){
    let sample = [12,2,33,4,55];
    let output = ['eligible','ineligible','eligible','ineligible','eligible'];
    let result = 0;
    let i = 0;

   for(i = 0; i < sample.length; i++){
      result = checkEligibility(sample[i]);

      if(result == output[i]){
        console.log(`Test case ${i+1} passed`);
      }else{
        console.log(`Test case ${i+1} failed\nCorrect output is ${result}`);
      }
   }
}
testForEligibility();