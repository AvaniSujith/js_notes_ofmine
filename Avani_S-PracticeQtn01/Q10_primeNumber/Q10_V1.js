// version-10.1

function primeORNot(num){
    if( num%2 == 1 || num%2 == num){
        console.log("The given number is prime number");
    }else{
        console.log("The given number is not prime number");
    }
}

primeORNot(19);