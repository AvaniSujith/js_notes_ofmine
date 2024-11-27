// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// function lengthOfLast(s){
//     let string = s.split(" ");
//     let last = string[string.length - 1];
//     let length = last.length
//     // console.log(length)
//     // console.log(string);
//     // console.log(last);
// }

// lengthOfLast("Hello world");


function lengthOfLast(s){
    let string = s.split(" ").filter(word => word !== "");
    let last = string[string.length-1];
    let length = last.length;

    return length;
}

console.log(lengthOfLast("   fly me   to   the moon  "));

