// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 
// function reverseVowels(s){
//     let finalStr = "";
//     for(let i = 0; i < s.length ; i++){
       
//         if(s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u' || s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U'){
//             let vowelStr = '';
//             vowelStr += s[i];
//             // console.log(vowelStr);
//             let reverseStr = "";
//             for(let i = vowelStr.length- 1; i >= 0; i --){
//                 reverseStr += vowelStr[i];
//             }
//         }
//        finalStr += s[i];
//     }
//     return finalStr;
// }


// console.log(reverseVowels("IceCreAm"));

version

function reverseVowels(s){
    for(let i = 0; i < s.length ; i++){
        let arrStr = [];
        if(s[i] === 'a' || s[i] === 'e' || s[i] === "i" || s[i] === 'o' || s[i] === 'u' || s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U'){
            arrStr.push(s[i]);
        }

    }
    console.log(arrStr)
}