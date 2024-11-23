function transposeMatrix(matrix){
    if(typeof(matrix) !== "object"){
      return "Invalid input. Input should be matrix."
    }

    let transpose = [];
    for(let i = 0; i < matrix[0].length; i++){
        let row = [];
        for(let j = 0; j < matrix.length; j++){
            row.push(matrix[j][i]);
        }
        transpose.push(row);
    }
    return transpose;
}

// console.log(transposeMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]));


function testTranspose(){
    let sample = [ 
          [
            [1, 2],
            [3, 4]
          ],
          [
            [1, 2],
            [3, 4],
            [5, 6]
          ],
          [
            [1, 2, 3, 4]
          ],
          [
            [1],
            [2],
            [3],
            [4]
          ],
          9
     ];
    let output = [
          [
            [1, 3],
            [2, 4]
          ],
          [
            [1, 3, 5],
            [2, 4, 6]
          ],
          [
            [1],
            [2],
            [3],
            [4]
          ],
          [
            [1],
            [2],
            [3],
            [4]
          ]
    ];

    for(let i = 0; i < sample.length; i++){
        let result = transposeMatrix(sample[i]);

        if(JSON.stringify(result) === JSON.stringify(output[i])){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed\n${result}`);
        }
    }
}


testTranspose();