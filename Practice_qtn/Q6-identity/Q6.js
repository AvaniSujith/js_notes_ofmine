// Write a program to check if the given matrix is an identity matrix?

function identity(matrix){
    // let position = 0 ;
    // if(arr.length !== arr[position].length || arr.length == 0){
    if(matrix.length === 0){
        return "Not an identity matrix";
    }
    for(let i = 0; i < matrix.length; i++){
        // for(let j = 0; j < arr.length; j++){
        //     if(arr[i][i] == 1 && arr[i][j] == 0 && i != j){
        //         return "Is an identity matrix";
        //     }
        // }
        for(let j = 0; j < matrix[i].length; j++){
            if( i===j && matrix[i][j] !== 1){
                return "Not an identity matrix";
            }
            if( i !== j && matrix[i][j] !== 0){
                return "Not an identity matrix";
            }
        }
    }
    return "Is an identity matrix";
}



// console.log(identity([
//     [1,2],
//     [2,2]
// ]));

// console.log(identity([
//     [1,0,0],
//     [0,1,0],
//     [0,0,1]
// ]));

// console.log(identity([
//     [1,0,0],
//     [0,2,0],
//     [0,0,1]
// ]));


function testIdentity(){
    const testCases = [
        {
            input : [
                [1,2],
                [2,2]
            ],
            output : "Is an identity matrix"
        },
        {
            input : [
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1]
            ],
            output :"Is an identity matrix"
        },
        {
            input : [
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1]
            ],
            output : "Is an identity matrix"
        },
        {
            input : [],
            output : "Is an identity matrix"
        }
    ];

    testCases.forEach((testCase, index)=>{
        let result = identity(testCase.input);

        if(result == testCase.output){
            console.log(`Test case ${index+1} passed`);
        }else{
            console.log(`Test case ${index+1} failed\nCorrect output: ${result}`);
        }
        
    });
}

testIdentity();