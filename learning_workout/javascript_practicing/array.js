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

// function arr(arr){
//     let length = arr.length;
//     console.log(length);

// }

function comparison(arr,arr1){
    if(typeof(arr) !== "number" && typeof(arr1) !== "number"){
        return "Invalid"
    }
    let rangeOfArr1 = arr.length;
    let rangeOfArr2 = arr.length;
    let newArr = [];
    let value = 0;
    if(rangeOfArr1 > rangeOfArr2){
        value = rangeOfArr1;
    }else{
        value = rangeOfArr2;
    }

    for(let i = 0; i < value; i++){
        if(arr.includes(arr1[i])){
            newArr.push(arr1[i]);
        }
    }
    return newArr;
}

comparison([0,5,3], [0,1,2,3,4,5]);
comparison([0,1,2,], [1,3,5]);
comparison([5,8], [8,8]);


function arrayCreation(n){
    let arr = [];
    for(let i = 0; i<n; i++){
        arr.push(i);
    }
    console.log(arr);
}

arrayCreation(3);
arrayCreation(4);
arrayCreation(5);



arrayOperations([99,88,77]);

function arraySearch(arr,n){
    for(let i = 0; i< arr.length; i++){
        if(n > arr[i]){
            n = arr[i];
        }
    }
    console.log(n);

}

arraySearch([4,5,6], 33);


function fibonacci(n){
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;

    for(let i = 2; i < n; i++){
        arr[i] = arr[i-1]+arr[i-2];
    }
    console.log(arr);

}

fibonacci(5);
fibonacci(4)


console.log("********25-11-2024********");

function arrayOperations(arrayCheck){
    arrayCheck.push(1);
    // console.log(arrayCheck)
    arrayCheck.push("avani");
    // console.log(arrayCheck)
    arrayCheck.push(22);
    // arrayCheck.pop(arrayCheck);
    console.log(arrayCheck);


    //remove last element
    let lastElement = arrayCheck.pop();
    console.log("The removed element is ", lastElement);
    console.log(arrayCheck);

    //add elements to start of array
    arrayCheck.unshift("first");
    console.log(arrayCheck);

    //remove element from start
    arrayCheck.shift();
    console.log(arrayCheck);

    //loop through array
    for(let i = 0; i <arrayCheck.length; i++){
        console.log(arrayCheck[i]);
    }


    arrayCheck.forEach((val,index) => {
        console.log(index, val);
    });



    for(let val of arrayCheck){
        console.log(val);
    }




}
  arrayOperations([1,2,3,4]);




// Q1.check if an element exist in an array 

function elementExist(arr, element){

    
    for(let i = 0; i < arr.length; i++){
        if(element === arr[i]){
            return true;
        }
    }
    return false;
    }


    console.log(elementExist([1,2,3], 4));
    console.log(elementExist([1,2,3,4], 4));


function methodElement(arr, num){
    if(arr.includes(num)){
        return true;
    }
    return false
}

console.log(methodElement([1,2,3], 7));
console.log(methodElement([1,2,3], 3));

// Question. check if element exists in the array and return its index 

function indexOfElement(arr, val){
    // arr.forEach((arrValue, index)=>{
    //     if(arrValue == val){
    //         return index;
    //     }
    // })
    // return false;.

    for(let i = 0; i < arr.length ; i++){
        if(arr[i] == val){
            return i;
        }
    }
    return "not found";
}

console.log("Element and index");
console.log(indexOfElement([1,2,3], 3));
console.log(indexOfElement([0,9,6,4], 7));

let arrayIndex = [1,2,3,22,88];
console.log(arrayIndex.indexOf(22));


// arrayIndex.splice(1,3)
// console.log(arrayIndex);
arrayIndex.splice(1,0,11,22,33,44);
console.log(arrayIndex);

//splice vs slice ---> slice only returns the sub array of the main array. 

//shallow copy of array. vs deep copy. 
// deep copy --> const arrC = [...arr]


let arrFirst = [1,2,3];
let arrNext = [4,5,6];
let arrTgther = arrFirst.concat();                       //deep copy method
console.log(arrTgther);
console.log(arrFirst+ ',' +arrNext);
console.log(arrFirst.concat(arrNext));

// Question check if two arrays are equal 
function equalityCheck(arr1, arr2){
    // if(arr1.length == arr2.length){
    //     for(let i = 0; i < arr1.length; i++){
    //         if(arr2.includes(arr1[i])){
    //             return true;
    //         }
    //     }
    //     return false;
    // }
    // return false;

    // if(arr1.length == arr2.length){
    //     for(val of arr1){
    //         if(arr2.includes(val)){
    //             return true;
    //         }
    //             return false
    //     }
     
    // }
    // return false;

    // if(arr1.length == arr2.length){
    //     arr1.forEach((val) =>{
    //         if(arr2.includes(val)){
    //             return true;
    //         }
    //         return false
    //     });
    // }
    // return false;

    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;



}

function oneLineCheck(arr1, arr2){
    return arr1.length === arr2.length && arr1.every((ele, i ) => arr1[i] === arr2[i])
}

console.log(oneLineCheck([1,2,3], [1,2,3]));
console.log(oneLineCheck([11,33,55], [11,22,1]));

// console.log(equalityCheck([1,2,3], [1,2,3]));
// console.log(equalityCheck([11,33,55], [11,22,1]));
// console.log(equalityCheck([2,3], [0]));


// ascending and descnending order sorting 
let unorderedArr = [4,5,2,1];
unorderedArr.sort((a,b) => a - b);
console.log(unorderedArr);

unorderedArr.sort((a,b) => b-a);
console.log(unorderedArr);

// Question reverse array 

unorderedArr.reverse();
console.log(unorderedArr);


///map, filter and reduce

const newMapp = unorderedArr.map((ele, i) =>  ele  > 0)
console.log(newMapp);

let flatArr = [1,2,3,[1,3,4],5,[6,7]];
flatArr.flat();
console.log();



// // String 
// let string = "happy";
// console.log(string.length);
// console.log(string[string.length-1])
// console.log(string[4]);



// recursion 



