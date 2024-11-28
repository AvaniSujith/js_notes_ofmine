// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
// A shift on s consists of moving the leftmost character of s to the rightmost position.
// For example, if s = "abcde", then it will be "bcdea" after one shift.
 
// function rotate(s, goal){
//     if(s.length !== goal.length){
//         return false;
//     }
//     let arr = [];
//     for(let i = 0; i <= s.length-1; i++){
//         arr.push(s[i]);
//     }
    
//     for(let i = 1; i < arr.length ; i++){
//         arr[0] = arr[arr.length-1]
//         arr[i] = arr[i-1];
//     }
// }

// rotate("abcde", "cdeab");


// version - 2

// function rotate(s, goal){
//     if(s.length !== goal.length){
//         return false;
//     }
//     if(s.length === 0 || goal.length === 0){
//         return false;
//     }
//     let arr = [];
//     for(let i = 0; i < s.length-1 ; i++){
//         arr.push(s[i]);
//     }

//     let firstElement = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         arr[i] = arr[i-1];
//     }
//     arr[arr.length-1] = firstElement;

//     return arr;
// }

// console.log(rotate("abcde", "cdeab"));


// s = "abcde"
// goal = "cdeab"

// shift - 1 = bcdea 
// shift - 2 = cdeab 
// shift - 3 = deabc
// shift - 4 = eabcd
// shift - 5 = abcde


// Different approach can be adding both the string to inself. It includes all possible substrings resulting in the rotation.
// str = abcdeabcde

// version- 3

function rotation(s, goal){
    if(s.length !== goal.length){
        return false;
    }
    if(s.length === 0 || goal.length === 0){
        return false;
    }

    let str = s+s;
    if(str.includes(goal)){
        return true
    }
    return false;
}

console.log(rotation("abcde", "cdeab"));
console.log(rotation("abcde", "abced"));


