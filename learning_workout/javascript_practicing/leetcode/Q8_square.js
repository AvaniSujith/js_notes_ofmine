// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.
// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

function square(num){
    if(num < 0){
        return "Invalid input. Input should be non-negative number."
    }
    let arr = [];
    for(let i = 0; i*i <= num ; i++){
        // return i;
        arr.push(i);
    }
    // return arr;
    return arr[arr.length - 1];
}

console.log(square(16));
console.log(square(8));
console.log(square(4))