
//version-10.6

function primeORNot(num){
    for(i=2; i< num; i++){
     if( num % i === 0){
         console.log("The given number is not a prime number");
         return;
    }
    else{
        console.log("The given number is a prime number");
        break;
    }
     }
     
    
}
 primeORNot(19);
 primeORNot(15);
 primeORNot(30);
