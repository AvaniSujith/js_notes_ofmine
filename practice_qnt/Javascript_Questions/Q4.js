//  Find the GCD of two numbers.

// version-4.1

// function divisorCalc(a,b){

//     function lcmCalc(a,b){
        
//     }

// }


// function gcdCalc(a,b){
    
//     // let c = 0;
    
//     // if( a > b){
//     //     c = b;
    
//     // }else{
//     //     c = a;
        
//     // }
//     let x = Math.min(a,b)
//     let arr = [];
//     for( i =1; i <= x; i++){
//         if( a%i == 0 && b%i == 0){
//             arr.push(i);
//         }
//     }
//     console.log(arr);

// }

// gcdCalc(24, 36);



// version-4.2

    //  function divise(a,b){
    //     let x = Math.min(a,b);
    //     let arr = [];
    //     if( a%x == 0 && b%x == 0){
    //          arr.push[i]
    //     }
    //  }
   
    //  divise(2,4);



    // function gcdCalc(a,b){

    //     let x = Math.min(a,b);

    //     let arr = [];
    //     for(i =1 ; i <= x; i++){
    //          arr.push(i);
    //     }
    //     console.log(arr);
    
    // }

    // gcdCalc(2,3);

    function gcdCalc(a,b){
        let x = Math.min(a,b);
        let arr = [];

        for(i = 0; i <= x; i++){
            if(a % i == 0 && b % i == 0){
                arr.push(i);
            }
        }
        // console.log(arr);
        console.log(arr[arr.length-1]);
 }

 gcdCalc(24,36);
 gcdCalc(12,18);
 gcdCalc(56,98);
 gcdCalc(25,30);

