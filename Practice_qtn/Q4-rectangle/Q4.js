// Write a program to calculate the area of a rectangle, given its length and breadth?

function rectangle(l,b){
    let area = 0;
     area = l * b;
     return area;

}
// console.log(rectangle(5,10));

// function testRectangle(){
//     const testCases = [
//         {
//             input : (5,10),
//             output : 50
//         },
//         {
//             input : (5.5,3.2),
//             output : 17.6
//         },
//         {
//             input : (0,5),
//             output : 0
//         }
//     ]

//     testCases.forEach((testCase, index)=>{
//         let result = rectangle(testCase.input);

//         if(result == testCase.output){
//             console.log(`Test case ${index+1} passed`);
//         }else{
//             console.log(`Test case ${index+1} failed\nCorrect output is ${result}`);
//         }
//     });
// }



testRectangle();