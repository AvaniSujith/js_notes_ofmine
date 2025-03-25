// Write a program to find the least common multiple (LCM) of two numbers?

function leastCommonMultiple(num1, num2) {
    if (typeof (num1) !== "number" && typeof (num2) !== "number") {
        return "Invalid input. Input should be a number."
    }
    let num = 0;

    if (num1 > num2) {
        num = num1;
    } else if (num1 === 0) {
        return 0;
    } else if (num2 === 0) {
        return 0;
    } else {
        num = num2;
    }

    // for(let i = 0; i < num; i++){
    //     for(let j =0; j < num){

    //     }
    // }

    let arr = [];

    for (let i = 0; i <= num; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            arr.push(i);
        }
    }
    let gdc = arr[arr.length - 1];

    let lcm = 0;
    lcm = (num1 * num2) / gdc;

    return lcm;
}

// leastCommonMultiple(6,8);
// leastCommonMultiple(4,5);
// leastCommonMultiple(6,8);
// leastCommonMultiple(5,10);
// leastCommonMultiple(100,250);
// leastCommonMultiple(0,10);

function testLCM() {

    let sample = [[6, 8], [7, 7], [1, 12], [100, 250], [5, 10], ["h", "j"]];
    let output = [24, 20, 12, 500, 10];

    for (let i = 0; i < sample.length; i++) {
        // let value = [sample[i][0], sample[i][1]];
        // let result = leastCommonMultiple(value);
        let result = leastCommonMultiple(sample[i][0], sample[i][1])

        if (JSON.stringify(result) == JSON.stringify(output[i])) {
            console.log(`Test case ${i + 1} passed`);
        } else {
            console.log(`Test case ${i + 1} failed\n${result}`);
        }
    }
}

testLCM();