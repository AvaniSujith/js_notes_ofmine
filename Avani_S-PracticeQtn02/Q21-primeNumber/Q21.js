// Write a program to find the first n prime numbers up to the given number?

function primeNum(num){
    let arr = [];
    
    for(let i = 0; i<= num; i++){
    for(let j = 2; j < num; j++){
        if(num%j === 0){
            // return "not"
            arr.push(num);
        }
        
    }
    // return "is a prime";
}
    console.log(arr);
}

// console.log(primeNum(11));
// primeNum(3);
// console.log(primeNum(4));

primeNum(11);