// Write a program that returns the transpose of a given matrix?

function transposeMatrix(matrix){
    let index = 0;
    let newMatrix = [];
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[index].length; j++){
            matrix[i][j] = matrix [j][i];
            newMatrix.push(matrix[i][j]);
        }

        
    }
    return newMatrix;
}

console.log(transposeMatrix([[1,2],
    [3,1]]));
    // console.log(transposeMatrix())
    
    
// function testTranspose(){
//     let sample = [];
//     let output = [];

//     for(let i = 0; i < sample.length; i++){
//         let result = transposeMatrix(sample[i])

//         if(result == output[i]){
//             console.log(`Test case ${i+1} passed`);
//         }else{
//             console.log(`Test case ${i+1} failed\nCorrect output: ${result}`);
//         }

//     }
// }