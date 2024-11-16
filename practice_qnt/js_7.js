// version-7.1

// function factorial(num){
//     return num * (num - 1);
// }

// console.log(factorial(7));

// version-7.2

// function factorial(num){
//     for(i= num; i<num; i--){
//         let fact = num * (num - 1);
//         console.log(`Factorial of ${fact}`);
//     }
   
// }
// console.log(factorial(7));


// version-7.3


// function factorial(num){
//     for(i =1; i <= num ; i++){
//        let fact = fact*i;
//     }
//     return fact;
// }
// console.log(factorial(7));


// version-7.4

// function factorial(num){
//     if(num == 1 || num == 0){
//         console.log(`The factorial of ${num} is 1`);
        
//     }else if(num < 0){
//         console.log("Cannot be computed");
//     }
//     else{
//         let fact = 1;
//         for(i = 1; i <= num ; i++){
            
//             fact *= i;
        
//         }
//         console.log(`The fatorial of ${num} is ${fact}`);
//     }
// }

// factorial(7);
// factorial(1);
// factorial(3);


// version - 7.5 using test cases

// function factorial(num){
//     if(num == 1 || num == 0){
//         return "1";
        
//     }else if(num < 0){
//         return "Cannot be computed";
//     }
//     else{
//         let fact = 1;
//         for(i = 1; i <= num ; i++){
            
//             fact *= i;
        
//         }
//         return fact;
//     }
// }

// function testFactorial(){
//     const testCases = [
//         {
//             input : 7,
//             output : 5040
//         },
//         {
//             input : 5,
//             output : 120
//         },
//         {
//             input : 4,
//             output : 24
//         },
//         {
//             input : 6,
//             output : 700
//         }
//     ]

//     testCases.forEach((testCase , index) =>{
//         const result = factorial(testCase.input);

//         if(result == testCase.output){
//             console.log(`Test case ${index +1} passed`);
//         }else{
//             console.log(`Test case ${index+1} failed\nCorrect output - ${result}`);
//         }
//     });
// }


// testFactorial();

// version - 7.6
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
    let input = [7,5,6];
    let output = [5040,120,600];
    let result = 0;
    let i = 0;

    for(i=0;i<input.length; i++){
        result = factorial(input[i]);

        if(result == output[i]){
            console.log(`Test cases ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed\nCorrect output is ${result}`);
        }
    }
}
testFactorial();