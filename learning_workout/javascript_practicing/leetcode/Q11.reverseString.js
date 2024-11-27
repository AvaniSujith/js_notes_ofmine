//write a funciton that reverses a string. The input is given as an array of characters s.  You must do this by modifying the input array in-place with O(1) extra memory.

// function reversal(s){

//     for(let i = s.length- 1; i >= 0 ; i--){
//         let s = [];
//         s.push(s[i]);
//     }
//     return s;
// }

// console.log(reversal(["h","e","l","l","o"]));


function reversal(s){
    let sRev = [];
    for(let i = s.length- 1; i >= 0 ; i--){
        sRev.push(s[i]);
    }
    console.log(sRev);
}

reversal(["h","e","l","l","o"]);
