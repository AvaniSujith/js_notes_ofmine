// Write a program to find the most repeated value in an array of numbers?

function repetation(arr){
    // let arr1 = [];
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        // arr1.push(arr[i]);
        if(arr[i] == arr[i+1]){
            // arr1.push(arr[i]);
            
            count++
        }
    }

    console.log(count);
}

repetation([1,4,1,7,8]);

// function testRepeat(){
//     const testCases = [
//         {
//             input :
//             output :
//         },
//         {
//             input :
//             output : 
//         },
//         {
//             input : 
//             output :
//         },
//         {
//             input : 
//             output :
//         }
//     ];

//     testCases.forEach((testCase, index)=>{
//         let result = repetation(testCase.input);

//         if(result == repetation.output){
//             console.log(`Test case ${index+1} passed`);
//         }else{
//             console.log(`Test case ${index+1} failed`);
//         }
//     });


// }