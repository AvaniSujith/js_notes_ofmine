// funciton that returns the longest word in a sentence

// function longest(string){
//     // let newString = string.split("");
//     // console.log(newString);


//     let newArr = [];
//     let newString = JSON.stringify(string);
//     for(let i = 0; i < newString.length; i++){
        
//         if(string[i] == " "){
            
//         }
//     }


// }

// let str = "How is your health?";
// let splitString = str.split(" ");

// // let word = splitString[1]
// let lengthOfWord = splitString.length;
// console.log(lengthOfWord);

// // longest(str);


function longest(string){
    
    let str = string.split(" ");
    let longestWord = "";

    for(let strs of str){
        if(strs.length > longestWord.length){
            longestWord = strs;
        }
    }
    return longestWord
}
let string = "How is you health?";
console.log(longest(string));




// function longestString(string){
//     // let str = string.split(" ");
//     let str = JSON.stringify(string);
//     let longest = "";
//     let arr = [];
//     let count = 0;


//     for(let i = 0; i < string.length; i++){
//         if(string[i] == " "){
//             count ++;
//         }

    
// }



// let string1 = "hello my name is AvaniS";

// function longestOfStrings(string){
//     let empty = "";
//     let arr = [];
//     let newArr = [];

//     for(let i = 0; i < string.length ; i++){
        
//         arr.push(string[i]);

//         if(string[i] == " "){
//             newArr = arr;
//             newArr.pop();
//             arr = [];
            
//             // for(let i = 0; i < arr.length; i++){
//             //     newArr.push(arr[i]);
//             // }
//             // arr = [];
//         }
//     }
//     console.log(newArr);

// }

// longestOfStrings(string1);


let string1 = "hello my name is AvaniS";

function longestOfStrings(string) {
    let arr = [];          // To collect characters of the current word
    let longestWord = "";  // To store the longest word

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            // Add character to the current word
            arr.push(string[i]);
        } else {
            // Join characters into a word and check if it's the longest
            let currentWord = arr.join("");  // Combine characters
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;  // Update longest word
            }
            arr = [];  // Reset arr for the next word
        }
    }

    // Handle the last word (if no trailing space)
    let currentWord = arr.join("");
    if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
    }

    console.log(longestWord); // Output the longest word
}

longestOfStrings(string1);





