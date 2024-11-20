// Write a program to find the greatest common divisor (GCD) of two numbers?

function gcdCalc(a,b){
    
    let x = Math.min(a,b);
    let arr = [];
    for( i =1; i <= x; i++){
        if( a%i == 0 && b%i == 0){
            arr.push(i);
        }
    }
    // console.log(arr);
    return(arr[arr.length - 1]);

}

// gcdCalc(24, 36);

console.log(gcdCalc(24,36));

