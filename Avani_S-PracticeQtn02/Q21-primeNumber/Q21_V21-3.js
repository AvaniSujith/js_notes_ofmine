function primeNum(num) {
    if (typeof (num) !== "number") {
        return "Invalid input. Input should be a number."
    }
    let arr = [];
    for (let i = 2; i <= num; i++) {
        let flag = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                flag = false;
                break;
            }
        }
        if (flag === true) {
            arr.push(i);
        }
    }

    return arr;
}

// console.log(primeNum(11));

function testPrime() {
    let sample = [11, 1, 30, 100, "h"];
    let output = [[2, 3, 5, 7, 11], [], [2, 3, 5, 7, 11, 13, 17, 19, 23, 29], []];

    for (let i = 0; i < sample.length; i++) {
        let result = primeNum(sample[i]);

        if (JSON.stringify(result) == JSON.stringify(output[i])) {
            console.log(`Test case ${i + 1} passed`);
        } else {
            console.log(`Test case ${i + 1} failed\n${result}`);
        }
    }
}



testPrime();

