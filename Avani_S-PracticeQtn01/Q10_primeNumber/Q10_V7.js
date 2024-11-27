// version-10.7

function primeORNot(num){
    for(i=2; i< num; i++){
     if( num % i === 0){
         console.log("The given number is not a prime number");
         return;
    }
  
    }
    console.log("The given number is a prime number");
     }
     
    

 primeORNot(76);
 primeORNot(15);
 primeORNot(30);
