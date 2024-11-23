function transposeMatrix(matrix){
    let index = 0;
    let newMatrix = [];
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[index].length; j++){
            
            // matrix[i][j] = matrix [j][i];
            let temp = matrix[i][j];
            matrix[j][i] =  temp;
            newMatrix.push(temp);
            
            // newMatrix.push(matrix[i][j]);

        }

    }
    return newMatrix;
}


// function transposeMatrix(matrix) {
//     let newMatrix = [];
//     for (let i = 0; i < matrix[0].length; i++) for(let i = 0; i< matrix[0].length{
//         let newRow = [];
//         for (let j = 0; j < matrix.length; j++) {
//             newRow.push(matrix[j][i]); // Place (j, i) from original matrix into (i, j)
//         }
//         newMatrix.push(newRow); // Add the new row to the transposed matrix
//     }
//     return newMatrix;
// }

// console.log(transposeMatrix([
//     [1, 2],
//     [3, 1]
// ]));


console.log(transposeMatrix([
    [1,2],
    [3,4]
]))


[[1,2,3],  ---- matrix[0]; creates 3 colums downwards
 [4,5,6],   
 [7,8,9]]
 -
 -
 matrix.length


 0,0 = 1
 0,1 = 2
 0,2 = 3
 1,0 = 4
 1,1 = 5
 1,2 = 6
 2,0 = 7
 2,1 = 8
 2,2 = 9