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

console.log(transposeMatrix([
    [1,2],
    [3,1]
]));
    // console.log(transposeMatrix())
    
    
console.log(transposeMatrix([
    [2,5,6],
    [3,6,3],
    [2,6,8]
]));
