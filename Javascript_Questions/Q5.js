// Develop a program to simplify a fraction to its lowest terms.
// function lowestTerm(a,b){
//     let x = Math.min(a,b);
//     for(i = 0; i <= x ; i++){
//        arr.push(i);
    
//     }
//     for(i=0; i<=x; i++){

//     }
// }

// version-5.1

function lowestTerm(a,b){
    let A = a / b;
    let x = Math.min(a,b);
    let arr = [];
    for(let i = 1; i <= x ; i++){
        if(a%i == 0 && b%i == 0){
            arr.push(i)
        }
    }
    let y = arr[arr.length-1];
    A = (a/y) / (b/y);
    // var frac = new fraction(A)
    // console.log(frac.toString());
    console.log(A);
}

lowestTerm(24,36);