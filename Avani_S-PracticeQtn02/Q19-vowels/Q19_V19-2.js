function vowelsNum(string) {
    if (typeof (string) !== "string") {
        return "Invalid input. Input should be string."
    }
    let newString = string.toLowerCase();
    let countA = 0;
    let countE = 0;
    let countI = 0;
    let countO = 0;
    let countU = 0;

    for (let i = 0; i < string.length; i++) {
        if (newString[i] == "a") {
            countA++;
        } else if (newString[i] == "e") {
            countE++;
        } else if (newString[i] == "i") {
            countI++;
        } else if (newString[i] == "o") {
            countO++;
        } else if (newString[i] == "u") {
            countU++;
        }
    }
    let totalCount = 0;
    totalCount = countA + countE + countI + countO + countU;

    // console.log(countA);
    // console.log(countE);
    // console.log(countI);
    // console.log(countO);
    // console.log(countU);
    // console.log(totalCount);

    return `The Total count: ${totalCount}\ncount of A: ${countA}\ncount of E: ${countE}\ncount of I: ${countI}\ncount of O: ${countO}\ncount of U: ${countU}`;
}


// console.log(vowelsNum("aVAnI"));

function testVowels() {
    let sample = ["AaEeIiOoUu", "bcdfg", "a e!i@o#u$", "abcdefghijklmnopqrstuvwxyz", 99];
    let output = ["The Total count: 10\ncount of A: 2\ncount of E: 2\ncount of I: 2\ncount of O: 2\ncount of U: 2",
        "The Total count: 0\ncount of A: 0\ncount of E: 0\ncount of I: 0\ncount of O: 0\ncount of U: 0",
        "The Total count: 10\ncount of A: 2\ncount of E: 2\ncount of I: 2\ncount of O: 2\ncount of U: 2",
        "The Total count: 5\ncount of A: 1\ncount of E: 1\ncount of I: 1\ncount of O: 1\ncount of U: 1"];

    for (let i = 0; i < sample.length; i++) {
        let result = vowelsNum(sample[i]);

        if (result == output[i]) {
            console.log(`Test case ${i + 1} passed`);
        } else {
            console.log(`Test case ${i + 1} failed\n${result}`);
        }
    }
}

testVowels();