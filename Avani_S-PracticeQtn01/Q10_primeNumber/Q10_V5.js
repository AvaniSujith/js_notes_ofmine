

// version-10.5


function primeORNot(num) {
    if (num <= 1) {
        console.log("The given number is not a prime number");
        return;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log("The given number is not a prime number");
            return;
        }
    }
    
    console.log("The given number is a prime number");
}

primeORNot(19);
primeORNot(15);
primeORNot(30);
primeORNot(9);
primeORNot(11);

