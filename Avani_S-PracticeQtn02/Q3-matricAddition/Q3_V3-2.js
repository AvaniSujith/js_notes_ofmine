function addition(matrix, matrix1){
    if(typeof(matrix) !== "object" && typeof(matrix1) !== "object"){
        return "Invalid input. Input should be array format."
    }
   if(matrix.length !== matrix1.length){
    return "Addition cannot be done";
   }else{
    for(let i = 0; i < matrix.length; i++){
        let matrix2 = [];
        for(let j = 0; j<matrix[i].length; j++){
            matrix2.push(matrix[i][j]+matrix1[i][j]);
        }
        // console.log(matrix2);
        return matrix2;
    }
   }
}

// let matrix = [
//     [1,2,3],
//     [4,5,6]
// ];

// let matrix1 = [
//     [1,1,1,]

// ];


// addition(matrix, matrix1);

function testAddition(){
    let sample = [  {
        input: {
            matrix: [
                [1, 2, 3],
                [4, 5, 6]
            ],
            matrix1: [
                [1, 1, 1],
                [1, 1, 1]
            ]
        },
        output: [
            [2, 3, 4],
            [5, 6, 7]
        ]
    },
    {
        input: {
            matrix: [
                [1, 2, 3],
                [4, 5, 6]
            ],
            matrix1: [
                [1, 1, 1]
            ]
        },
        output: "Addition cannot be done"
    },
    {
        input: {
            matrix: [],
            matrix1: []
        },
        output: "Addition cannot be done"
    },
    {
        input: {
            matrix: [
                [5]
            ],
            matrix1: [
                [3]
            ]
        },
        output: [
            [8]
        ]
    }
];
    

    for(let i =0; i<sample.length; i++){
        const {matrix, matrix1} = sample[i].input;
        const expectedOutput = sample[i].output;

        let result = addition(matrix, matrix1);

        if(JSON.stringify(result) == JSON.stringify(expectedOutput)){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed\nCorrect output is ${JSON.stringify(result)}`);
        }
    }


}

testAddition();

