// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// function validPalindrome(s){
//     s.toLowerCase();
//     let str = s[0].toLowerCase();
//     for(let i = 0; i < s.length ; i++){
//         if(s[i] >= 'a' && s[i] <= 'z'){
//             str += s[i];
//         }
//     }
//     let strRev = "";
//     for(let i = str.length-1; i >=0 ; i--){
//         strRev += str[i];
//     }
//     // return str;

//     if(str == strRev){
//         return true;
//     }
//     return false;
//     // console.log(str);
//     // console.log(strRev);
// }

// // validPalindrome("i'am avani,s!");
// console.log(validPalindrome("A man, a plan, a canal: Panama"));

function validPalindromeCheck(s){
    s = s.toLowerCase();
    let str = "";
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] >= 'a' && s[i] <= 'z' || s[i] >= '0' && s[i] <= '9'){
            str += s[i];
        }
    }
    // return str;
    let strRev = "";
    for(let i = s.length ; i >= 0 ; i--){
        if(s[i] >= 'a' && s[i] <= 'z' || s[i] >= '0' && s[i] <= '9'){
            strRev += s[i];
        }
    }
    // return strRev;

    if(str === strRev){
        return true;
    }
    return false;
}

console.log((validPalindromeCheck("i'am avani,s!")));
console.log(validPalindromeCheck("A man, a plan, a canal: Panama"));


