// version-1

// function missigNum(arr,int){
    
//     let sum = 0;
//     let n = arr.length;
//     expectedSum = (n*(n+1))/2;
    
    
//     for(i = 0; i<arr.length;i++){
//         sum += arr[i];
//         actualSum = sum;
//     }
    
//     int = actualSum - expectedSum;
//     console.log(`The missing number is ${int}`);
// }


// let array = [1,2,4,5,6,7,9,3];
// missigNum(array);


// version-2

// function missigNum(arr){
    
//     let sum = 0;
//     let n = arr.length + 1;
//     expectedSum = (n*(n+1))/2;
    
    
//     for(i = 0; i<arr.length;i++){
//         sum += arr[i];
//         actualSum = sum;
//     }
    
//     int = expectedSum - actualSum;
//     console.log(`The missing number is ${int}`);
// }


// let array = [3, 7, 1, 2, 8, 4,6];
// missigNum(array);



// version-3

// function missigNum(arr){
//     arr.sort((a,b)=> a-b);

//     let value = 0;
//     for(i=0; i< arr.length; i++){
//         if(value[i] == (value[i]+1)-1){
//             for(j=0; j<arr.length; j++){
//                 value = arr[j];
//                 console.log(value);
//         }
//         }else{
//             return value[i]+1;
//         }
//     }
       
// }
// let array = [3, 7, 1, 2, 8, 4,6];
// missigNum(array);

// version-4

function missingNum(arr){
    arr.sort((a,b)=> a-b);
    for(i=0; i<arr.length; i++){
        if(arr[i+1] !== arr[i]+1){
            return arr[i] +1;
        }
    }
    return "no missing"

}

let array = [3, 7, 1, 2, 5, 4, 6,7,9];
console.log(missingNum(array));