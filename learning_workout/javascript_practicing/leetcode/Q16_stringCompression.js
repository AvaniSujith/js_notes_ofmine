// Given an array of characters chars, compress it using the following algorithm:
// Begin with an empty string s. For each group of consecutive repeating characters in chars:
// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.
// After you are done modifying the input array, return the new length of the array.
// You must write an algorithm that uses only constant extra space.


// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

// function stringCompress(arr){
//     let arr1 = []
//     for(let i = 0; i < arr.length ; i++){
//         let count = 0;
//         for(let j = 0; j < arr.length; j++){
//             if(arr[i] === arr[j]){
//                 count++;
//             }
//         }
//         // console.log(arr[i], count);
//         while(i < arr.length){
//             arr1.push(arr[i])
//         }
//         while(i < arr.length){
//             arr1.push(count);
//         }
//     }
//     console.log(arr1)
// }

// stringCompress(["a","a","b","b","c","c","c"]);

// version - 2


// function stringCompress(chars){
//     let count = 0;
//     let i = 0;
//     let arr = [];
//     while(i < chars.length){
//         arr.push(chars[i]);
//     }
//     while(i < chars.length){
//         if(arr[i] === arr[i+1]){
//             count++;
//         }else{
//             arr.push(count);
//         }
//     }
//     console.log(arr);
// }


// stringCompress(["a","a","b","b","c","c","c"]);


// version - 3

// function stringCompress(chars){
//     let count = 0;
//     let i = 0;
//     let arr = [];
//     while(i < chars.length){
//         if(chars[i] == chars[i+1]){
//             count++;
//         }
//         if(chars[i] !== chars[i+1]){
//             arr.push(chars[i]);
//             arr.push(count);
    
//         }
//         i++;
//     }
//     console.log(arr);
// }

// stringCompress(["a","a","b","b","c","c","c"]);

// version - 4



function stringCompress(chars){
    let count = 1;
    let i = 0;
    let arr = [];
    while(i < chars.length){
        if(chars[i] == chars[i+1]){
            count++;
        }
        if(chars[i] !== chars[i+1]){
            arr.push(chars[i]);
            arr.push(String(count));
            count = 1;
        }
        i++;
    }
    return arr;
}

console.log(stringCompress(["a","a","b","b","c","c","c"]));



// version - 5

function stringCompress(chars) {
    let write = 0; // Position to write in `chars`
    let i = 0; // Pointer to iterate over `chars`

    while (i < chars.length) {
        let char = chars[i];
        let count = 0;

        // Count the occurrences of the current character
        while (i < chars.length && chars[i] === char) {
            count++;
            i++;
        }

        // Write the character to the array
        chars[write] = char;
        write++;

        // Write the count if greater than 1
        if (count > 1) {
            const countStr = String(count); // Convert count to string
            for (let c of countStr) {
                chars[write] = c;
                write++;
            }
        }
    }

    // Return the new length of the compressed array
    return write;
}

console.log(stringCompress(["a", "a", "b", "b", "c", "c", "c"])); 
// Output: 6 (Modified array: ["a", "2", "b", "2", "c", "3"])
