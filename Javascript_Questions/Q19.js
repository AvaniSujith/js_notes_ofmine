// Develop a program to compute the sum of squares of the first n natural numbers.

function squareSum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i**2;
    }
    console.log(sum);
}

squareSum(3);
squareSum(2);
squareSum(5);
squareSum(10);