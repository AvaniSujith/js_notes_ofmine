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


// function alternateMerge(word1, word2){
//     let string = "";
//     let i = 0;

//     while(i < word1.length || i < word2.length){
//         if(i < word1.length){
//             string += word1[i];
//         }
//         if(i < word2.length){
//             string += word2[i];
//         }
//         i++;
//     }

//     return string;
// }


// console.log(alternateMerge("abc", "pqr"));
// console.log(alternateMerge("qwert", "yu"));



function mergingAlternate(word1, word2){
    let mergeStr = '';
    // let range = max(word1.length, word2.length);
    let range = word1.length;
    if(word2.length > word1.length){
        range = word2.length;
    }
    for(let i = 0; i < range; i++){
        if(i < word1.length){
            mergeStr += word1[i];
        }
        if(i < word2.length){
            mergeStr += word2[i];
        }

    }
    return mergeStr;
}


console.log(mergingAlternate("abcde", "pqr"));
console.log(mergingAlternate("qwert", "yu"));
