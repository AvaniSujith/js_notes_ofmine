// Write a program to check whether the given string is palindrome or not?

function palindrome(string) {
    if (typeof (string) !== "string") {
        return "Invalid input. Input should be string."
    }
    let arr = [];
    let revArr = [];
    let newString = string.toLowerCase();

    for (let i = 0; i < string.length; i++) {
        arr.push(newString[i]);
    }

    for (let i = string.length - 1; i >= 0; i--) {
        revArr.push(newString[i]);
    }
    // console.log(revArr);

    // console.log(arr);

    if (JSON.stringify(arr) == JSON.stringify(revArr)) {
        return "Is a palindrome";
    } else {
        return "Not a palindrome";
    }
}

// palindrome('avani');
// palindrome("malayalam");
// palindrome("aliaaila")



function testPalindrome() {
    let sample = ["radar", "abba", "avani", "Madam", 1234];
    let output = ["Is a palindrome", "Is a palindrome", "Is a palindrome", "Is a palindrome", "Is a palindrome"];

    for (let i = 0; i < sample.length; i++) {
        let result = palindrome(sample[i]);

        if (result == output[i]) {
            console.log(`Test case ${i + 1} passed`);
        } else {
            console.log(`Test case ${i + 1} failed\n${result}`);
        }
    }
}

testPalindrome();
