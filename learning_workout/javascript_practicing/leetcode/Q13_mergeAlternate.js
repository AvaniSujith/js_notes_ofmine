// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

// function (word1, word2){
//     let longest = word1;
//     let shortest = word2;
//     if(word2 > word1){
//         longest = word2;
//         shortest = word1;
//     }
//     let str = "";
//     for(let i = 0; i < longest.length ; i++){
//         let string 
//     }
// }



// word1 = "abc"   word2 = "pqr"

// return "apbqcr"

//version 2

// function alternateMerging(word1, word2){
//     let length = word1.length + word2.length;
//     let string = "";
//     for(let i = 0 ; i < length ; i++){
//         if(i%2 !== 0){
//             string += word1[i];
//         }else{
//             string += word2[i];
//         }
//     }
//     return string;
// }

// console.log(alternateMerging("abc", "pqr"));


// version-3


function alternateMerge(word1, word2){
    let string = "";
    let i = 0;

    while(i < word1.length || i < word2.length){
        if(i < word1.length){
            string += word1[i];
        }
        if(i < word2.length){
            string += word2[i];
        }
        i++;
    }

    return string;
}


console.log(alternateMerge("abc", "pqr"));
console.log(alternateMerge("qwert", "yu"));