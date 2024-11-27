// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces

// version - 1

function reverse(s){
  let string = s.split(" ");
  let word = string.trim();
//   console.log(string);  
  word.reverse();
//   console.log(string.join(" "));
  return word.join(" ");
}

 
let s =  "    the sky is blue     ";

console.log(reverse(s));

// version - 2 

function reverse(s){
    let strings = s.split(" ");
    let string = JSON.stringify(strings);
    let word = string.trim();
    word.reverse();
    return word.join(" ");
}

let s1 = "    the sky is blue     ";
console.log(reverse(s1));


// function reverse(s) {
//     // Trim leading and trailing spaces, then split on one or more spaces
//     let words = s.trim().split(/\s+/);
//     // Reverse the words and join them with a single space
//     return words.reverse().join(" ");
// }

// let s = "  hello world  ";
// console.log(reverse(s)); // Output: "world hello"


