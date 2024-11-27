//version-10.3


function primeORNot(num){
   for(i=2; i< num-1;i++){
    if( num%i == 0){
        console.log("The given number is a prime number");
    }
    else{
        console.log("The given number is not a prime number");
    }
   }
    
}

primeORNot(19);
primeORNot(15);
primeORNot(30);

