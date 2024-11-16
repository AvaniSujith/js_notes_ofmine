// version-2.1


// function checkForVowel(letter){
//     if(letter = ['a', 'e', 'i', 'o', 'u']){
//         console.log("The given alphabet is vowel");

//     }
//     else{
//         console.log("The given alphabet is consonent");
//     }
// }

// checkForVowel("a");
// checkForVowel("w")


// version-2.2


// function checkForVowel(letter){
 
//     if(letter == "a" || letter == "A"){
//         console.log("The given alphabet is vowel");
        
//     }
//     else  if(letter == "e" || letter == "E"){
//         console.log("The given alphabet is vowel");
        
//     }
//     else  if(letter == "i" || letter == "I"){
//         console.log("The given alphabet is vowel");
        
//     }
//     else  if(letter == "o" || letter == "O"){
//         console.log("The given alphabet is vowel");
        
//     }
//     else  if(letter == "u" || letter == "U"){
//         console.log("The given alphabet is vowel");
        
//     }
//     else{
//         console.log("The given alphabet is consonent");
//     }
// }
// checkForVowel("o");
// checkForVowel('k');
// checkForVowel('t');
// checkForVowel("A");



// version -2.3 using testcases 

// function checkForVowel(letter){
 
//     if(letter == "a" || letter == "A"){
//         return "The given alphabet is vowel";
        
//     }
//     else  if(letter == "e" || letter == "E"){
//         return "The given alphabet is vowel";
        
//     }
//     else  if(letter == "i" || letter == "I"){
//         return "The given alphabet is vowel";
        
//     }
//     else  if(letter == "o" || letter == "O"){
//         return "The given alphabet is vowel";
        
//     }
//     else  if(letter == "u" || letter == "U"){
//         return "The given alphabet is vowel";
        
//     }
//     else{
//         return "The given alphabet is consonent";
//     }
// }

// function testForVowels(){
//     const testCases = [
//         {
//             input : 'U',
//             output : "The given alphabet is vowel"
//         },
//         {
//             input : 'i',
//             output : 'The given alphabet is vowel'
//         },
//         {
//             input : 'k',
//             output : 'The given alphabet is consonent'
//         },
//         {
//             input : 'g',
//             output : "The given alphabet is consonent"
//         },
//         {
//             input : 'h',
//             output : 'The given alphabet is vowel'
//         }
//     ]


//         testCases.forEach((testCase, index) =>{
//             const result = checkForVowel(testCase.input);

//             if(result == testCase.output){
//                 console.log(`Test case ${index + 1} passed`);
//             }else{
//                 console.log(`Test case ${index + 1} failed \n Correct output - ${result}`);
//             }
//         });
// }

// testForVowels();

// version-2.4 

    function checkForVowel(letter){
 
        if(letter == "a" || letter == "A"){
            return "vowel";
            
        }
        else  if(letter == "e" || letter == "E"){
            return "vowel";
            
        }
        else  if(letter == "i" || letter == "I"){
            return "vowel";
            
        }
        else  if(letter == "o" || letter == "O"){
            return "vowel";
            
        }
        else  if(letter == "u" || letter == "U"){
            return "vowel";
            
        }
        else{
            return "consonent";
        }
    }

    function testForVowels(){
        let input = ['u','P','I','S'];
        let output = ['vowel','consonent','vowel','vowel'];
        let i = 0;
        let result = 0;

        for(i=0; i < input.length; i++){
            result = checkForVowel(input[i]);

            if(result == output[i]){
                console.log(`Test case ${i+1} passed`);

            }else{
                console.log(`Test case ${i+1} failed\nCorrect output is ${result}`);
            }
        }
    }

    testForVowels();