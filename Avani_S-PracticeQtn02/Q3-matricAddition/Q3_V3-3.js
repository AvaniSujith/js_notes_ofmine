
function addition(matrix, matrix1) {
    if (typeof (matrix) !== "object" && typeof (matrix1) !== "object") {
        return "Invalid input. Input should be matrix."
    }

    if (matrix.length !== matrix1.length) {
        return "Addition cannot be done";
    } else {
        let matrix2 = [];
        for (let i = 0; i < matrix.length; i++) {
            let nextRow = [];
            for (let j = 0; j < matrix[i].length; j++) {

                if (typeof matrix[i][j] !== "number" || typeof matrix1[i][j] !== "number") {
                    return "Invalid matrix elements. Elements should be number."
                }
                nextRow.push(matrix[i][j] + matrix1[i][j]);
            }

            matrix2.push(nextRow);
        }
        return matrix2;
    }
}

function testAddition() {
    let sample = [{
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
            matrix: [
                [5]
            ],
            matrix1: [
                [3]
            ]
        },
        output: [
            [5]
        ]
    }, {
        input: {
            matrix: [
                ["hello"],
                ["hi"]
            ],
            matrix1: [
                ["hello"],
                ["hey"]
            ]
        },
        output: []
    }
    ];


    for (let i = 0; i < sample.length; i++) {
        const { matrix, matrix1 } = sample[i].input;
        const expectedOutput = sample[i].output;

        let result = addition(matrix, matrix1);

        if (JSON.stringify(result) == JSON.stringify(expectedOutput)) {
            console.log(`Test case ${i + 1} passed`);
        } else {
            console.log(`Test case ${i + 1} failed\n${JSON.stringify(result)}`);
        }
    }


}

testAddition();




function additionMatrix(matrix, matrix1) {
    let matrix2 = [];

    if (matrix.length !== matrix1.length) {
        return "Addition not possible"
    }

    for (let i = 0; i < matrix.length; i++) {
        let nextRow = [];

        if (matrix[i].length !== matrix1[i].length) {
            return "Addition cannot be done"
        }

        for (let j = 0; j < matrix[i].length; j++) {
            if (typeof matrix[i][j] !== "number" || typeof matrix1[i][j] !== "number") {
                return [];
            }
            nextRow.push(matrix[i][j] + matrix1[i][j])
        }


        matrix2.push(nextRow);
    }

    return matrix2
}

function testCases() {
    let sample = [{
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
            matrix: [
                [5]
            ],
            matrix1: [
                [3]
            ]
        },
        output: [
            [5]
        ]
    }, {
        input: {
            matrix: [
                ["hello"],
                ["hi"]
            ],
            matrix1: [
                ["hello"],
                ["hey"]
            ]
        },
        output: []
    }
    ];


    for (let i = 0; i < sample.length; i++) {
        // let result = additionMatrix(input[i])
        let result = additionMatrix(sample[i].input.matrix, sample[i].input.matrix1);

        if (JSON.stringify(result) === JSON.stringify(sample[i].output)) {
            console.log(`Test case ${i + 1} passed`)
        } else {
            console.log(`Test case ${i + 1} failed`)
        }
    }
}

testCases();