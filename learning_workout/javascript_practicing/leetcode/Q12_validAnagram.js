// given two strings s annd t, return true if t is an anagram of S, and false otherwise. 

// function anagram(s,t){
//     for(let i = 0; i < s.length; i++){
//         if(t.includes(s[i])){
//             return true;
//         }
//         return false;
//     }
// }

// console.log(anagram("anagram", "nagaram"));
// console.log(anagram("rat","car"));



// version 2

// function anagram(s,t){
//     if(s.length !== t.length){
//         return false;
//     }
//     for(let i = 0; i < s.length; i++){
//         for(let j = 0 ; j < t.length ; j++){
//             if(t[i] === s[j]){
//                 return true
//             }
//             false
//         }
//     }
// }

// console.log(anagram("anagram", "nagaram"));
// console.log(anagram("rat","car"));


// version3

function anagram(s,t){

    if(s.length !== t.length){
        return false;
    }

    let sArr = [];
    for(let i = 0; i < s.length ; i++){
        sArr.push(s[i]);
    }
    sArr.sort();

    let tArr = [];
    for(let i = 0; i < t.length ; i++){
        tArr.push(t[i]);
    }
    tArr.sort();

    // if(sArr.sort().join('') == tArr.sort().join('')){
    if(JSON.stringify(sArr) == JSON.stringify(tArr)){
        return true;
    }
    return false;

}

console.log(anagram("anagram", "nagaram"));
console.log(anagram("rat","car"));
console.log(anagram("sol", "sol"));





function anagram(s,t){
    return s.split("").sort().join("") === t.split("").sort().join("")   // split ==> converts string into array of elements, join helps to get the sorted elements togther for comaprison.
}


console.log(anagram("anagram", "nagaram"));
console.log(anagram("rat","car"));
console.log(anagram("sol", "sol"));



