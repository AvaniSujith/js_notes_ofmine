// version - 7.6

function factorial(num) {
    if (typeof (num) !== "number") {
        return "Invalid input. Inputs should be a number";
    }
    if (num == 1 || num == 0) {
        return "1";

    } else if (num < 0) {
        return "Cannot be computed";
    }
    else {
        let fact = 1;
        for (i = 1; i <= num; i++) {

            fact *= i;

        }
        return fact;
    }
}

function testFactorial() {

    let input = ["hello", 5, 6, 7];
    let output = [5040, 120, 600, 5040];
    let result = 0;
    let i = 0;

    for (i = 0; i < input.length; i++) {
        result = factorial(input[i]);

        if (result == output[i]) {
            console.log(`Test cases ${i + 1} passed`);
        } else {
            console.log(`Test case ${i + 1} failed\n${result}`);
        }
    }
}

testFactorial();