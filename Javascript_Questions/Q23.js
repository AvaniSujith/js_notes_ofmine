// reverse an array

// version-23.1
// function reverse(arr){
//     let arr1= [];
//     for( let i = 0; i < arr.length; i++){
//         arr1.push(arr[arr.length-1+i]);
//     }
//     console.log(arr1);

// }

// let arr = [1,2,3,4];
// reverse(arr);

// version-23.2
// function reverse(arr){
//     let arr1 = [];
//     for(let i = 0; i < arr.length; i++){
//         // let last = arr.length - 1
//         arr1.push(arr[i]-1);
        
//     }
//     console.log(arr1);
// }

// let arr = [1,2,3,4,5];
// reverse(arr);


// version-23.3 **********************************************
function reverse(arr){
    let arr1 = [];
    for(let i = arr.length; i>0; i--){
        arr1.push(i)
    }
    console.log(arr1)
}

reverse([1,2,3,4]);









