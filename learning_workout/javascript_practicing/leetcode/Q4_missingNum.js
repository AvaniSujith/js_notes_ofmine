// // given an array nums containing n distinct numbers in the range [0,n] return only number in the range that is missing from the array. 

// function missingNum(arr){
//     let maxValue = 0;
//     for(let i = 0 ; i < arr.length; i++){
//         if(maxValue < arr[i]){
//             maxValue = arr[i];
//         }
//      }
//     let compareArr = [];
//     for(let i = 0; i <= maxValue; i++){
//         compareArr.push(i);
//      }
//     //  console.log(compareArr);

    
//      arr.sort((a,b)=> a-b);
//     //  console.log(arr);

     
//      for(let i = 0; i<compareArr.length; i++){
//         if(compareArr[i] !== arr[i]){
//             console.log(compareArr[i]);
//         }
//      }
     
    
// }

// missingNum([1,0,8,5]);
// missingNum([0,6,4,1,2]);


// function missingNumTwo(arr){
//     const n = arr.length;
//     const compareArr = [];

//     for(let i = 0; i <= n; i++){
//         compareArr.push(i);
//     }

//     arr.sort((a,b) => a - b);

//     let missing = [];
//     let arrIndex = 0;

//     for(let i = 1; i < compareArr.length; i++){
//         if(arr[arrIndex === compareArr[i]]){
//             arrIndex++;

//         }else{
//             missing.push(compareArr[i]);
//         }
//     }
//     console.log(missing);
// }

// missingNumTwo([1,0,8,5]);

// missingNumTwo([9,8,7,5,4,2,0]);




function missingNumThree(arr){
    let newArr = [];
    arr.sort((a,b) => a - b);
    // console.log(arr);
    let value = arr[arr.length- 1];

    for(let i = 0; i<value+1; i++){
        newArr.push(i);
    }
    // console.log(newArr)

    let compareArr =[];
    for(let i = 0; i < newArr.length ; i++){
        // if(newArr[i] !== arr[i]){
        //     compareArr.push(newArr[i]);

        // }
        if(!arr.includes(newArr[i])){
            compareArr.push(newArr[i])
        }
    }
    console.log(compareArr);
}

arr = [3,0,4,1,6];
missingNumThree(arr);


var missing = function(arr){
    let sum = 0;
    for(let i = 0 ; i<arr.length; i++){
        sum += arr[i];
    }
    // console.log(sum);
    let actualSum = (arr.length*(arr.length+1))/2;
    // console.log(actualSum);
    let missingNum = 0;
    missingNum = actualSum - sum;
    console.log(missingNum)
}

arr = [3,0,1];
missing(arr);