// Arrays in javascript 

// let arr = new Array()         -->   let arr = [];
// stores all types of datas 

let color = ["red", "green", "blue", "black"];
color.shift();
// console.log(color.shift())
console.log(color);


//return the greatest element of array

// let num =[1,55,3,9,4];
// let result = Math.max(JSON.stringify(num));
// console.log(result)
// console.log(max(num));
// console.log(Math.max(num()))

function greatest(arr){
    let max = arr[0];
    for(let i = 0; i <arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}

let num =[1,55,3,9,4];
console.log(greatest([1,55,3,9,4]));



//sum of element of array 

function sum(arr1){
    let sum = 0;
    for(let i = 0; i < arr1.length ; i++){
        sum += arr1[i];
    }
    return sum;
}

console.log(sum([1,2,3,4,5]));

//reversing array


function reversal(orgArr){
    let revArr = [];
    for(let i = orgArr.length-1; i >= 0; i-- ){
        revArr.push(orgArr[i]);
    }
    console.log(revArr);
}

reversal([6,2,3,1,9]);

//first, last and middle elements

function access(arr2){
    let endIndex = arr2.length - 1;
    console.log(endIndex);
    let n = 0;
    let mid = 0;
    if(arr2.length%2 == 0){
        n = arr2.length/2;
        mid = arr2[n];
    }else{
        n = (arr2.length - 1)/2;
        mid = arr2[n];
    }
    

    let first = arr2[0];
    let last = arr2[endIndex];
    
    console.log(last);
   

    console.log(`first: ${first}\n last: ${last}\n mid: ${mid}`);
}

access([6,2,3,1,9]);


// adding element to beginging and end

let arr3 = [1,2,3];
console.log("Added 0 to the begining");
arr3.unshift(0)
console.log(arr3);
console.log("Addeed 4 to the end");
arr3.push(4);
console.log(arr3);


//removing elements
console.log("removal from begining");
arr3.shift();
console.log(arr3);
console.log("Removing from end");
arr3.pop();
console.log(arr3);


//check presence

function check(arr){
    let checkVar = 99;
    for(let i = 0; i < arr.length; i++){
        if(checkVar == arr[i]){
            return true;
        }
    }
    return false;
}

let arr = [ 1,3,4,7,5,55];

console.log(check(arr));

//maximum and minimum element of array

function arrayCheck(arr){
    let maxValue = arr[0];
    let minValue = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(maxValue < arr[i]){
            maxValue = arr[i];
        }
    }

    console.log(`Max value: ${maxValue}`);

    for(let i = 0; i < arr.length; i++){
        if(minValue > arr[i]){
            minValue = arr[i];
        }
    }

    console.log(`Min value: ${minValue}`)
}

let arr4 = [2,33,4,55,666,3,44,0,-9];
arrayCheck(arr4);

//count of each specific occurence
function checkOccurence(arr){
    let count = 0;
    let value = 3;
    for(let i = 0; i < arr.length; i++){
        if(value == arr[i]){
            count++
        }
    }
    console.log(count);
}

let arr5 = [1,3,3,2,3,4,3,4,3,7,6,6,3];
checkOccurence(arr5);


//takes an array of numbers and returns arra which contins  elements of it squared.
function squared(arr){

    let squaredArr = [];
    for(let i = 0; i<arr.length; i++){
        squaredArr.push(arr[i]*arr[i]);
    }
    console.log(squaredArr);
}

squared([1,2,3,4,5,6]);

//off numbers only

function odd(arr){
    let oddArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2 !== 0){
            oddArr.push(arr[i]);
        }
    }
    console.log(oddArr);
}

let arr6 = [1,2,3,4,5,6,7,8,9,10,11];
odd(arr6);


//cumulative sum

function cumulative(sum){
    let newArr = [];
    newArr.push(arr[0]);
    
    for(let i = 1; i<sum.length; i++){
        // let value = (sum[i] * (sum[i]+1))/2
        let value = sum[i] + newArr[i-1];
        newArr.push(value);

    }

    console.log(newArr)
}

let arr7 = [1,3,7,2];
cumulative(arr7);

let arr8 = [1,2,3];
cumulative(arr8)

// first itreration == i = 1 (3) + i-1 = 0 (1)  = 3+1(4);
// second iteration == i = 2 (7) + i-1 = 1 (3) = 7+3(10);
// newArr = [1, ]



//multiply each element by index value
function multiply(arr){
    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i]*i);
    }
    console.log(newArr)
}


let arr1 = [1, 2, 3, 4];
multiply(arr1);

let arr2 = [-1, 2, -3, 4];
multiply(arr2)


let arrNew = [-1, -2, -3];
multiply(arrNew);

// real-world problems
//  write second largest number in array 


// function secondLargest(arr){
//     let newArr = [];
    
//     for(let i = 0; i < arr.length; i++){
//         let compare = arr[0];
//         let isMax = false;
//         for(let j =0; j < arr.length; j++){
//             if(compare > arr[j] && !newArr.includes(arr[j])){
//                 isMax = true;
//             }

//             if(!isMax){
//                 newArr.push(arr[j]);
//             }
//         }

//     }
//     console.log(newArr);
// }

// let orgArr = [1,3,7,2];
// secondLargest(orgArr);

function secondLargest(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let compare = arr[i];
        for(let j = 0; j < arr.length; j++){
            if(compare > arr[j] && !newArr.includes(arr[j])){
                newArr.push(arr[j])
            }
        }
    }
    // console.log(newArr)
    // let last = newArr.length-1;
    // console.log(newArr[last]);
    console.log(newArr)
}

let orgArr = [1,3,7,4,2,100,5,88,99];
secondLargest(orgArr);

function largest(arr){
    let newArr = [];
    let compare = arr[0];
    for(let i =0; i<arr.length; i++){
        if(compare > arr[i] && !newArr.includes(arr[i]));
        newArr.push(arr[i]);
    }
    console.log(newArr);
}

let arr9 = [1,3,2,7,6];
largest(arr9);

// 1iteration -> c=1 i=0 , j=0 ==1
// 2iteration -> c=3 i=1 , j=0 
// 3iteration -> c=4 i=2

function patternOne(num){
    for(let i = 0; i < num; i++){
        // console.log("*");
        for(let j = 1; j < num ; j++){
            // console.log("**")
            
        }
    }
}
patternOne(5);



