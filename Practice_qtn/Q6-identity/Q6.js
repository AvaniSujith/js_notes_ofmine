// Write a program to check if the given matrix is an identity matrix?

function identity(arr){
    let position = 0 ;
    if(arr.length === 0 || arr.length !== arr[position].length || arr == []){
        return "Not an identity matrix";
    }
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i][i] == 1 && arr[i][j] == 0 && i != j){
                return "Is an identity matrix";
            }
        }
    }
    return "Not an identity matrix";
}


console.log(identity([1,2],
    [2,2]
));

console.log(identity([1,0,0],
    [0,1,0],
    [0,0,1]
));




// function testIdentity(){
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
//         let result = identity(testCase.input);

//         if(result == testCase.output){
//             console.log(`Test case ${index+1} passed`);
//         }else{
//             console.log(`Test case ${index+1} failed\nCorrect output is ${result}`);
//         }
        
//     });
// }