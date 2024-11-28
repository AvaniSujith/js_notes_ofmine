// *********************************RECURSION*********************************

// Recursion  - funcitons calls itself
// Two type s of memory - stack memory(static memory- size and location are fixed(numbers, string, boolean)) and heap memory(dynamic memory(array, function))

// function fun(n){
//     console.log("fun");
//     if(n === 3){
//         return false;
//     }
//     fun(n-1)
// }

// fun(3);    runs infifnte times causing crash. maximum number is exited. So one base case for exiting should be mentioned.


function fun(n){
    if(n == 0){
         return;
    }
    console.log("hello", n);
    fun(n-1);
}

fun(5);


// Question - (1) factorial of a number

function factorial(n){
    
    if(n === 0 ||  n === 1){      //base condotion for termination of code is very necessary in recursion
        return 1;
    }

    return n * factorial(n-1);
}

console.log(factorial(4)); 



// Question - (2) sum of n numbers

function sum(n){
    if(n === 0){
        return false;
    }
    sum = n + sum(n-1);
    return sum;
}

console.log(sum(4));


// Question - (3) sum of array elements , return sum till n

// function arraySum(arr, n){
//     if(arr.length < 0){
//         return false;
//     }
//     let sum = 0;
//     sum += arraySum();
//     return sum;
// }

// console.log(arraySum([1,2,3,4,5], 5));

// version - 2

function arraySum(arr){
    if(arr.length === 0){
        return false;
    }
    return arr[arr.length - 1] + arraySum(arr.slice(0, arr.length-1));
}

console.log(arraySum([1,2,3,4,5]));


// version - 3 

function arraySum1(arr){
    if( arr.length === 0){
        return false;
    }
    const lastElement = arr.pop();
    return lastElement + arraySum1(arr);
}

console.log(arraySum1([1,2,3,4,5]));

// version - 4

function arraySumWithLength(arr, n){
    if(n === 0){
        return false;
    }
     return arr[n-1] + arraySumWithLength(arr, n-1)
}

console.log(arraySumWithLength([1,2,3,4,5], 5));


// question - (4) find product of array 

function arrayProduct(arr){
    if(arr.length === 0){
        // return false;
        return 1;
    }
    let lastElement = arr.pop();
    return lastElement * arrayProduct(arr);
}

console.log(arrayProduct([1,2,3,4]));

//Question - (5)  fibonacci series

// function fibonacci(n){
//     if( n === 0){
//         return false;
//     }
//     let arr = [];
//     arr[0] = 0;
//     arr[1] = 1;


// }


function fibonacci(n){
    if(n < 2){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(5));