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

    // let sortArr = [];
    // let newArr = [];

    // sortArr = arr.sort((a, b) => b - a);

    // for(let i = 0; i < arr.length; i++){
    //     let val = arr[i]
    //     for(let j = 0; j < sortArr.length; j++){
    //         if(val !== sortArr[j]){
    //             newArr.push(val);
    //         }
    //     }
    // }

    // // return sortArr[1] 
    // return newArr[1];




    let sortArr = [...new Set(arr.sort((a, b) => b - a))];      //********************************************************************************* */

    if(sortArr.length < 2){
        return null;
    }else{
        return sortArr[1];
    }

}

let arr  = [12, 35, 1, 10, 34, 1];
// let arr = [10, 5, 10]
// console.log(secondLargest(arr));



// Q2 .Third largest element in an array of distinct elements
// Given an array of n integers, the task is to find the third largest element. All the elements in the array are distinct integers. 

function thirdLargest(arr){
    let sortArr = [...new Set(arr.sort((a,b) => b - a))]
    if(sortArr.length < 3){
        return null;
    }else{
        return sortArr[2];
    }
}

// let arrA = [1, 14, 2, 16, 10, 20]

let arrA = [19, -10, 20, 14, 2, 16, 10]

// console.log(thirdLargest(arrA))




// Q3. Maximum product of a triplet(subsequence of size 3) in array
// Given an integer array, find a maximum product of a triplet in the array.


function productOfTriplet(arr){
    // let sortArr = [...new Set(arr.sort((a,b) => b - a))];
    // let tripletArr = []
    
    // let i = 0;

    // while(i < 3){
    //     tripletArr.push(sortArr[i]);
    //     i++;
    // }

    // let product = 1;
    // for(let i = 0; i < tripletArr.length; i++){
    //     product *= tripletArr[i]
    // }

    // // return tripletArr;
    // return product;

    if(arr.length < 3)return null;

    arr.sort((a, b) => a - b);

    let n = arr.length

    let p1 = arr[n-1] * arr[n -2] * arr[n-3];
    let p2 = arr[0] * arr[1] * arr[n-1]

    return Math.max(p1, p2);

}


let arrB = [10, 3, 5, 6, 20]
// let arrB = [-10, -3, -5, -6, -20]
// let arrB = [1, -4, 3, -6, 7, 0]

// console.log(productOfTriplet(arrB));


// Q4. Maximum consecutive one’s (or zeros) in a binary array 
// Given an array arr[] consisting of only 0’s and 1’s, the task is to find the count of a maximum number of consecutive 1’s or 0’s present in the array.


function countOfNum(arr){

    // let count = 1;

    // for(let i = 0; i< arr.length; i++){
    
    //     if(arr[i] === arr[i+1]){
    //         count++;
    //     }else{
    //         count = 1;
    //     }
    // }

    // return count;


    let count = 1;
    let maxCount = 0

    for(let i = 1; i < arr.length; i++){
        if(arr[i] === arr[i - 1]){
            count++
        }else{
            maxCount = Math.max(maxCount, count);
            count = 1;
        }
    }


    maxCount = Math.max(maxCount, count);
    return maxCount;
}


// let arrC = [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1];

// let arrC = [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]

let arrC = [0, 0, 0, 0]
// console.log(countOfNum(arrC))



// Q5. Move all zeros to end of array
// Given an array of integers arr[], the task is to move all the zeros to the end of the array while maintaining the relative order of all non-zero elements.

function sortArray(arr){
    let NonZeroArr = []
    let zeroArr = []

    for(let i = 0; i<arr.length; i++){
        if(arr[i] === 0){
            zeroArr.push(arr[i])
        }else{
            NonZeroArr.push(arr[i])
        }
    }

    // let sortArr = NonZeroArr + zeroArr
    // let sortArr = NonZeroArr.concat(zeroArr) 

    // return sortArr
    return NonZeroArr.concat(zeroArr);

    // console.log(zeroArr)
    // console.log(sortArr)
}

let arrD = [1, 2, 0, 4, 3, 0, 5, 0];
// console.log(sortArray(arrD));



// Q6. Reverse an Array in groups of given size
// Given an array arr[] and an integer k, the task is to reverse every subarray formed by consecutive K elements.

function reverseInGroup(arr, k){
    // if(arr.length >= k){
    //     arr.reverse();
    // }else{
    //     for(let i = 0; i<arr.length; i++){
    //         arr.
    //     }
    // }

    let finalArr = [];

    for(let i = 0; i< arr.length; i += k){
        let part = arr.slice(i, i + k);
        part.reverse();
        finalArr.push(...part);
    }

    return finalArr;
}


// let arrF = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arrF = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(reverseInGroup(arrF, 10));

// Q7.Rotate an Array by d – Counterclockwise or Left
// Given an array of integers arr[] of size n, the task is to rotate the array elements to the left by d positions.

// function rotate(){
//     const sortArr = [];
//     for(let i =0; 
//         i < arr.length;
//         i++
//     ){

//     }
// }