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

function factorial(num){
    if(num == 1 || num == 0){
        console.log(`The factorial of ${num} is 1`);
        
    }else if(num < 0){
        console.log("Cannot be computed");
    }
    else{
        let fact = 1;
        for(i = 1; i <= num ; i++){
            
            fact *= i;
        
        }
        console.log(`The fatorial of ${num} is ${fact}`);
    }
}

factorial(7);
factorial(1);
factorial(3);