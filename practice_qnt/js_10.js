// version-10.1

// function primeORNot(num){
//     if( num%2 == 1 || num%2 == num){
//         console.log("The given number is prime number");
//     }else{
//         console.log("The given number is not prime number");
//     }
// }

// primeORNot(19);

// version-10.2

// function primeORNot(num){
//         if( num%num == 0 || num%1 == 0){
//             console.log("The given number is a prime number");
//         }
//         else{
//             console.log("The given number is not a prime number");
//         }
        
//     }
    
//     primeORNot(19);
//     primeORNot(15);
//     primeORNot(30);
    
    
//version-10.3


// function primeORNot(num){
//    for(i=2; i< num-1;i++){
//     if( num%i == 0){
//         console.log("The given number is a prime number");
//     }
//     else{
//         console.log("The given number is not a prime number");
//     }
//    }
    
// }

// primeORNot(19);
// primeORNot(15);
// primeORNot(30);


// version-10.4

// function primeORNot(num){
//     for(i=2; i< num-1;i++){
//      if( num % i === 0){
//          console.log("The given number is not a prime number");
//          break;
//     }
//     else{
//         console.log("The given number is a prime number");
//     }
//      }
     
    
// }
// //  primeORNot(19);
// //  primeORNot(15);
//  primeORNot(30);




// version-10.5


// function primeORNot(num) {
//     if (num <= 1) {
//         console.log("The given number is not a prime number");
//         return;
//     }
    
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             console.log("The given number is not a prime number");
//             return;
//         }
//     }
    
//     console.log("The given number is a prime number");
// }

// primeORNot(19);
// primeORNot(15);
// primeORNot(30);
// primeORNot(9);
// primeORNot(11);


//version-10.6

// function primeORNot(num){
//     for(i=2; i< num; i++){
//      if( num % i === 0){
//          console.log("The given number is not a prime number");
//          return;
//     }
//     else{
//         console.log("The given number is a prime number");
//         break;
//     }
//      }
     
    
// }
//  primeORNot(19);
//  primeORNot(15);
//  primeORNot(30);

// version-10.7

// function primeORNot(num){
//     for(i=2; i< num; i++){
//      if( num % i === 0){
//          console.log("The given number is not a prime number");
//          return;
//     }
  
//     }
//     console.log("The given number is a prime number");
//      }
     
    

//  primeORNot(76);
//  primeORNot(15);
//  primeORNot(30);

// version-10.8 using testcase 


function primeORNot(num){
    for(i=2; i< num; i++){
     if( num % i === 0){
         return "The given number is not a prime number";
         
    }
  
    }
     return "The given number is a prime number";
     }
     

     function testPrimeOrNot(){
        const testCases = [
            {
                input : 2,
                output : "The given number is a prime number"
            },
            {
                input : 4,
                output : "The given number is not a prime number"
            },
            {
                input : 5,
                output : "The given number is a prime number"
            },
            {
                input : 9,
                output : "The given number is a prime number"
            }
        ]

        testCases.forEach((testCase, index)=>{
            const result = primeORNot(testCase.input);

            if(result == testCase.output){
                console.log(`Test case ${index +1} passed`);
            }else{
                console.log(`Test case ${index+1} failed \nCorrect output - ${result}`);
            }
        });
     }

     testPrimeOrNot();