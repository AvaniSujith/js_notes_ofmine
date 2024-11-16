// Write a program to verify the quadratic identity ( (a + b)^2 = a^2 + 2ab + b^2 ).

// version-7.1
function verification(a,b){
    let x = (a+b)**2;
    let y = a**2 + 2*a*b + b**2;

    if( x == y){
        console.log("Valid");
    }else{
        console.log("Invalid");
    }
}

verification(2,3);
verification(-1,4);
verification(1.5,2.5);
verification(3,2);



