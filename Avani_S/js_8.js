// version-8.1

// function maxValue(arr){

//    arr.sort();
//    return arr[i]-1;
// }

// let array = [1,0,5,8,4,2];
// maxValue(array);


// version-8.2

// function maxValue(arr){
//     // let arr = array;
//     arr.sort()
//     let maxElement = arr[arr.length - 1];
//     console.log(`The max value is ${maxElement}`);
    

// }

// // let array = [1,0,5,8,4,2];
// // maxValue(array);

// let array = [1,0,99,556,39,59,288,47,10000,555555,33,4];
// maxValue(array);


//version-8.3

// function maxValue(arr){
//     arr.sort((a,b) => a - b);
//     let maxElement = arr[arr.length - 1];
//     console.log(`The max value is ${maxElement}`)
// }

// let array = [1,0,5,8,4,2];
// maxValue(array);

// let array = [1,0,99,556,39,59,288,47,10000,555555,33,4];
// maxValue(array);


// version -  8.4 using testcases 

// function maxValue(arr){
//     // if(typeof(arr) !== "object"){
//     //     return "Invalid input. Input should be of array form."
//     // }

//     if(!Array.isArray(arr)){
//         return "Invalid input. Input should be of array form."
//     }

//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] !== "number"){
//             return "Ivalid input. Elements should be number."
//         }
//     }


//     arr.sort((a,b) => a - b);
//     let maxElement = arr[arr.length - 1];
//     return maxElement;
// }

// function testMaxvalue(){
//     const testCases = [
//         {
//             input : [1,2,3,4,44,66,22,42356,11,10],
//             output : 42356
//         },
//         {
//             input : [44,55,33,66,11,22],
//             output : 66
//         },
//         {
//             input : [888,-55,-2,-4],
//             output : 888
//         },
//         {
//             input : [-8, -3, -5],
//             output : -8
//         },
//         {
//             input : "hello"
//         }
//     ]

//     testCases.forEach((testCase, index) =>{
//         const result = maxValue(testCase.input);


//         if(result == testCase.output){
//             console.log(`Test case ${index+1} passed`);
//         }else{
//             console.log(`Test case ${index+1} failed\n${result}`);
//         }
//     })
// }

// testMaxvalue();

// version-8.5

// function maxValue(arr){
//     arr.sort((a,b)=> a - b);
//     let maxElement = arr[arr.length - 1];
//     return maxElement;
// }

// function testMaxvalue(){
//     let sample = [ [1,2,3,4,44,66,22,42356,11,10], [888,-55,-2,-4],  [-8, -3, -5]];
//     let output = [1, 888 , -3];

//     let result = 0;
//     // let i = 0;

//     for(let i = 0; i < sample.length; i++){
//         result = maxValue[sample[i]];

//         if(result == output[i]){
//             console.log(`Test case ${i+1} passed`);
//         }else{
//             console.log(`Test case ${i+1} failed\nCorrect output ${result}`);
//         }
//     }


  

// }


// testMaxvalue();

//version- 8.6

function maxValue(arr){
    if(!Array.isArray(arr)){
        return "Invalid input. Input should be of array form."
    }

    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== "number"){
            return "Ivalid input. Elements should be number."
        }
    }

    let maxElement = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(maxElement < arr[i]){
            maxElement = arr[i];
        }
    }
    return maxElement;
}


function testMaxvalue(){
    const testCases = [
        {
            input : [1,2,3,4,44,66,22,42356,11,10],
            output : 42356
        },
        {
            input : [44,55,33,66,11,22],
            output : 66
        },
        {
            input : [888,-55,-2,-4],
            output : 888
        },
        {
            input : [-8, -3, -5],
            output : -8
        },
        {
            input : "hello"
        },
        {
            input : [1, "a", "b"],
            output : 1
        }
    ]

    testCases.forEach((testCase, index) =>{
        const result = maxValue(testCase.input);


        if(result == testCase.output){
            console.log(`Test case ${index+1} passed`);
        }else{
            console.log(`Test case ${index+1} failed\n${result}`);
        }
    })
}

testMaxvalue();