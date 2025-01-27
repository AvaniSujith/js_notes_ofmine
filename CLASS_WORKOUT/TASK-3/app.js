// const SYMBOLS = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
// const shift = 3

// function message(msg, shift){
//     const SYMBOLS = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
//     let result = []
//     let letters = SYMBOLS.split();

//     let newMsg = letters+shift;
//     result.push(newMsg);

// }


// version-2

// function cipherCOde(msg, shift){
//     const SYMBOL = 'abcdefghijklmnopqrstuvwxyz';
//     let result = '';

//     for(let i = 0; i <msg.length; i++){
//         let char = msg[i];

        
//     }
// }


// version-3

// function cipherMsg(msg, shift){
//     const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
//     const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let result = '';

//     for(let i = 0; i<msg.length;i++){
//         let char = msg[i];
//         let isLower = false;
//         let isUpper = false;
//         let found = false;

//         for(let j = 0; j<lowerCaseLetters.length; j++){
//             if(char === lowerCaseLetters[j]){
//                 isLower = true;
//                 found = true;
//                 break;
//             }else if(char === upperCaseLetters[j]){
//                 isUpper = true;
//                 found = true;
//                 break;
//             }
//         }

//         if(isLower || isUpper){
//             let newIndex = (index + shift) % 26;
//             result += isLower ? lowerCaseLetters[newIndex] : upperCaseLetters[newIndex];

//         }else{
//             result += char;
//         }
//     }

//     return result;
// }

// let msg = 'Hello';
// let shift = 3;

// console.log(cipherMsg(msg, shift));


// version - 4

function cipherMsg(msg, shift) {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (let i = 0; i < msg.length; i++) {
        let char = msg[i];
        let isLower = false;
        let isUpper = false;
       
        if (lowerCaseLetters.includes(char)) {
            isLower = true;
        } else if (upperCaseLetters.includes(char)) {
            isUpper = true;
        }

        if (isLower || isUpper) {
         
            let letters;
            if (isLower) {
                letters = lowerCaseLetters;
            } else {
                letters = upperCaseLetters;
            }

            let newIndex = (letters.indexOf(char) + shift) % 26;
            result += letters[newIndex];
        } else {
            
            result += char;
        }
    }

    return result;

}

let msg = 'Hello';
let shift = 3;

console.log(cipherMsg(msg, shift));
