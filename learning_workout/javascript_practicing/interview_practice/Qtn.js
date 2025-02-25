// Q1. second largest element in an array 

// Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.

// Note: If the second largest element does not exist, return -1.

// Examples:

// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.


// Input: arr[] = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 5.


// Input: arr[] = [10, 10, 10]
// Output: -1
// Explanation: The largest element of the array is 10 there is no second largest element.

// function secondLargest(arr){
//     // let sortArr = sort(arr);
//     let sortArr = arr.sort((a,b) => b - a)
//     // let sortArr = arr.sort((a, b)=> a - b)
//     return sortArr[1];
// }

// let arr = [10, 5, 10]

// console.log(secondLargest(arr));


// function secondLargest(arr){
//     let sortArr = [];
//     let maxValue = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         if(maxValue < arr[i] && !sortArr.includes(arr[i])){
//             sortArr.push(arr[i]);
//         }
//     }

//     return sortArr;
// }


// let arr = [10, 5, 10];
// console.log(secondLargest(arr))

function secondLargest(arr){
    // let sortArr = [];
    // let maxValue = arr[0];

    // for(let i = 0; i<arr.length; i++){
    //     if(maxValue < arr[i]){
    //         maxValue = arr[i];
    //     }
    // }

    // for(let i = 0; i < arr.length; i++){
    //     if(!sortArr.includes(arr[i])){
    //         sortArr.push(arr[i])
    //     }
    // }

    // for(let i = 0; i < sortArr.length; i++){
    //     for(let j = i+ 1; j<sortArr.length; j++){
    //         if(sortArr[i]<sortArr[j]){
    //             let temp = sortArr[i];
    //             sortArr[i] = sortArr[j];
    //             sortArr[j] = temp;
    //         }
    //     }
    // }
    // return sortArr                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           z

    let sortArr = [];
    let newArr = [];

    sortArr = arr.sort((a, b) => b - a);

    for(let i = 0; i < arr.length; i++){
        let val = arr[i]
        for(let j = 0; j < sortArr.length; j++){
            if(val !== sortArr[j]){
                newArr.push(val);
            }
        }
    }

    // return sortArr[1]

    return newArr[1];
    
}

// let arr  = [12, 35, 1, 10, 34, 1];
let arr = [10, 5, 10]
console.log(secondLargest(arr));
