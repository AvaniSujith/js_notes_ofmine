
// version-10.8 using testcase 


function primeORNot(num) {
    if (typeof (num) !== "number") {
        return "Invalid input. Input should be a number."
    }

    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            return "The given number is not a prime number";

        }

    }
    return "The given number is a prime number";
}


function testPrimeOrNot() {
    const testCases = [
        {
            input: 25,
            output: "The given number is a prime number"
        },
        {
            input: 49,
            output: "The given number is not a prime number"
        },
        {
            input: 5,
            output: "The given number is a prime number"
        },
        {
            input: 9,
            output: "The given number is a prime number"
        },
        {
            input: "hello"
        }
    ]

    testCases.forEach((testCase, index) => {
        const result = primeORNot(testCase.input);

        if (result == testCase.output) {
            console.log(`Test case ${index + 1} passed`);
        } else {
            console.log(`Test case ${index + 1} failed \n${result}`);
        }
    });
}

testPrimeOrNot();