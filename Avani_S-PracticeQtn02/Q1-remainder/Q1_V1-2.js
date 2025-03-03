// Write a program to calculate the remainder of two numbers?

function remainder(num1, num2) {
    if (typeof (num1) !== "number" && typeof (num2) !== "number") {
        return "Invalid input. Input type should be a number.";
    }
    if (num2 === 0) {
        return "Invalid division";
    } else {
        let num3 = num1 % num2;
        return num3;
    }
}

function testCases() {
    let sample = [[3, 2], [10, 3], [-20, 11], [-30, -3], [33, 0], ["hello", "hello"]];
    let output = [1, 1, -9, -1, 0, 0];

    for (let i = 0; i < sample.length; i++) {
        let [num1, num2] = sample[i]
        let result = remainder(num1, num2);

        if (result === output[i]) {
            console.log(`Test cases ${i + 1} passed`);
        } else {
            console.log(`Test cases ${i + 1} failed\n${result}`);
        }
    }
}


testCases();
