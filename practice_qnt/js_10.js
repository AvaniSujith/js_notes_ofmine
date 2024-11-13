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

function primeORNot(num){
    for(i=2; i< num;i++){
     if( num % i === 0){
         console.log("The given number is not a prime number");
         break;
    }
    else{
        console.log("The given number is a prime number");
    }
     }
     
    
}
//  primeORNot(19);
 primeORNot(15);
 primeORNot(30);

