// Write a program to check if the given matrix is a diagonal matrix?
function diagonal(matrix){
    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix.length !== matrix[i].length){
                console.log("Not a diagonal matrix");
            }else{
                for(let i = 0; i<matrix.length; i++){
                    
                }
            }
        }
    }
}

let arr =  [
    [2, 3, 4],
    [5, 6, 7]
];

// let arr1 = [
//     [1,1],
//     [1,1]
// ];

// let arr2 = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

diagonal(arr);


// function testDiagonal(){

//     let sample = [];
//     let output = [];

//     for(let i = 0; i < sample.length; i++){
//         let result = identity(sample[i]);

//         if(result ==  output[i]){
//             console.log(`Test case ${i+1} passed `);
//         }else{
//             console.log(`Test case ${i+1} failed\nCorrect output is ${result}`);
//         }
//     }
// }