// Write a program to find the average of an array of numbers?

function avg(arr) {
    let i = 0;
    if (typeof (arr) !== "object") {
        return "Invalid input. Input should be array."
    }
    if (typeof arr[i] !== "number") {
        return "Invalid array. Elements should be number."
    }
    if (arr != []) {

        let sum = 0;
        let avrg = 0;

        for (i = 0; i < arr.length; i++) {
            sum += arr[i];
        }

        avrg = sum / arr.length;
        // console.log(avrg);
        // console.log(sum);
        return avrg;
    } else {
        return "Empty array";
    }

}

// let arr = [1,2,3,4,5];
// avg(arr);


function testAvg() {

    const testCases = [
        {
            input: [5],
            output: 5
        },
        {
            input: [-5, -10, -15],
            output: -10
        },
        {
            input: [1, 2, 3, 4, 5],
            output: 5
        },
        {
            input: [0, 0, 0],
            output: 0
        },
        {
            input: 9
        },
        {
            input: ["a", "b", "c"],
            output: []
        },
        {
            input: [1.5, 2.5, 3.5],
            output: 2.5
        }
    ];

    testCases.forEach((testcase, index) => {
        let result = avg(testcase.input);

        if (result == testcase.output) {
            console.log(`Test case ${index + 1} passed`);
        } else {
            console.log(`Test case ${index + 1} failed\n${result}`);
        }
    });
}


testAvg();