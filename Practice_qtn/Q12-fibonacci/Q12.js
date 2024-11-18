// Write a program to calculate the Fibonacci series of a given number?

function fibonacci(num){
    
    let array = [];
    array[0] = 0;
    array[1] = 1;

    for(let i = 0; i<num; i++){
        array[i]= array[i-1] + array[i-2];
        array.push(array[i]);
    }
    console.log(array);
}
fibonacci(4);


// function testFibonacci(){
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
//         let result = fibonacci(testCase.input);

//         if(result == testCase.output){
//             console.log(`Test case ${index+1} passed`);
//         }else{
//             console.log(`Test case ${index+1} failed\nCorrect output is ${result}`)
//         }
//     });
// }