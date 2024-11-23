function fibonacciNum(n){
    let fibonacciArr = [];
    fibonacciArr[0] = 0;
    fibonacciArr[1] = 1;
    // let item = 0;

    for(let i = 2; i < n; i++){
        // item = fibonacciArr[i] + fibonacciArr[i-1];
        fibonacciArr[i] = fibonacciArr[i-1] + fibonacciArr[i-2];
        
        // fibonacciArr.push(item);
    }

    console.log(`Fibonacci Series ${n} terms`);
    console.log(fibonacciArr);
}

fibonacciNum(5);




