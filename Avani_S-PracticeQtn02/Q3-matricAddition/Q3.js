// Write a program to add two matrices?


// let matrix = [
//     [1,2,3],
//     [4,5,6]
// ];

// // matrix[0][1]=10;
// console.log(matrix);


function addition(){
    let matrix = [
        [1,2,3],
        [4,5,6]
    ];
    let matrix1 = [
        [1,1,1],
        [1,1,1]
    ];
    let matrix2 = [];

    if(matrix.length == matrix1.length){
        for(let i =0; i < matrix.length; i++){
            for( let j=1; j<i; j++){
                matrix2[i][j] = matrix[i][j]+matrix1[i][j];
            }
        }
        console.log(matrix2);
    }else{
        console.log("Addition cannot be done");
    }

}
 
addition();