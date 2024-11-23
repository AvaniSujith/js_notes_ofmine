function diagonal(matrix){
    let position = 0;
    if(matrix.length !== matrix[position].length && matrix != []){
        return "Not a diagonal matrix";
    }else{
        for(let i = 0; i < matrix.length; i++){
            // let count = 0;

            for(let j =0; j < matrix[i].length; j++){
                
                if(matrix[i] === matrix[j]){
                    matrix[j] != 0;
                }else{
                    matrix[j] == 0;
                }
                
            }
        }

        return "It is diagonal matrix";
    }
}


// let arr =  [
//     [2, 3, 4],
//     [5, 6, 7]
// ];

// let arr1 = [
//     [1,0,0],
//     [0,2,0],
//     [0,0,1]
// ];


// let arr2 = [
//     [2,0],
//     [0,4]
// ];

// let arr3 = [
//     [2,3,4],
//     [1,3,4]
// ];


// diagonal(arr3);
// diagonal(arr2);
// diagonal(arr1);
// diagonal(arr);



function testDiagonal(){
    const testCases = [
        {
            input : [
                [2, 3, 4],
                [5, 6, 7],
                [2, 0, 0]
            ],
            output : "It is diagonal matrix"
        },
        {
            input : [
                [1, 0, 0],
                [0, 2, 0],
                [0, 0, 1]
            ],
            output : "It is diagonal matrix"
        },
        {
            input : [
                [2, 0],
                [0, 4]
            ],
            output : "It is diagonal matrix" 
        },
        {
            input : [
                [2, 3, 4],
                [1, 3, 4]
            ],
            output : "It is diagonal matrix" 
        }
    ];

    testCases.forEach((testCase, index)=>{
        let result = diagonal(testCase.input);

        if(result == testCase.output){
            console.log(`Test case ${index+1} passed`);
        }else{
            console.log(`Test case ${index+1} failed\nCorrect output: ${result}`);
        }
    });
}

testDiagonal();