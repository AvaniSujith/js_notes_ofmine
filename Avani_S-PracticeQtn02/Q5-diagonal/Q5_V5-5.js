function diagonal(matrix){
    if(typeof(matrix) !== "object"){
        return "Invalid input. Input should be matrix."
    }
    let position = 0;
    if(matrix.length === 0 || matrix.length != matrix[position].length){
        return "Not a diagonal matrix";
    }
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j< matrix.length; j++){
            if(i !== j && matrix[i][j] !== 0){
                // console.log("Not a diagonal matrix");
                return "Not a diagonal matrix";
            }
            // else{
            //     console.log("Is a diagonal matrix");
            // }
        }
    }
    // console.log("Is a diagonal matrix");
    return "Is a diagonal matrix";
}


// console.log(diagonal([
//     [1, 0, 0],
//     [0, 2, 0],
//     [0, 0, 3]
// ]));


// console.log(diagonal([
//     [1, 0, 2],
//     [0, 2, 0],
//     [0, 0, 3]
// ]));


// console.log(diagonal([]));



function testDiagonal(){
    const testCases = [
        {
            input : [
                [2, 3, 4],
                [5, 6, 7],
                [2, 0, 0]
            ],
            output : "Not a diagonal matrix"
        },
        {
            input : [
                [1, 0, 0],
                [0, 2, 0],
                [0, 0, 1]
            ],
            output : "Is a diagonal matrix"
        },
        {
            input : [
                [2, 0],
                [0, 4]
            ],
            output : "Is a diagonal matrix" 
        },
        {
            input : [
                [2, 3, 4],
                [1, 3, 4]
            ],
            output : "It is diagonal matrix" 
        },
        {
            input : 7,
            ouput : "It is diagonal matrix" 
        }
    ];

    testCases.forEach((testCase, index)=>{
        let result = diagonal(testCase.input);

        if(result == testCase.output){
            console.log(`Test case ${index+1} passed`);
        }else{
            console.log(`Test case ${index+1} failed\n${result}`);
        }
    });
}

testDiagonal();

