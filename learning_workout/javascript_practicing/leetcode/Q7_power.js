// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.

function power(num){
    // for(let i = 0; i < num; i++){
    //     // let value = 0;
    //     if(num%2 == 0){
    //         // value = num/2;
    //         num = num/2;
    //     }
        
    // }
    // if(num == 0){
    //     return true;
    // }
    // return false;

    if(num < 1){
        return "Invalid";
    }
    while(num > 1){
        if(num % 2 !== 0){
            return false;
        }
        num = Math.floor(num / 2);
    }
    return true;
}

console.log(power(16));

// function power(num){
//     if(num < 1) return "Invalid";

//     while(num < 1){
//         if(num % 2 !== 0){
//             return false;
//         }
//         num = num / 2;
//     }
//     return true;
// }