
// version -2.3 using testcases 

function checkForVowel(letter){
 
    if(letter == "a" || letter == "A"){
        return "The given alphabet is vowel";
        
    }
    else  if(letter == "e" || letter == "E"){
        return "The given alphabet is vowel";
        
    }
    else  if(letter == "i" || letter == "I"){
        return "The given alphabet is vowel";
        
    }
    else  if(letter == "o" || letter == "O"){
        return "The given alphabet is vowel";
        
    }
    else  if(letter == "u" || letter == "U"){
        return "The given alphabet is vowel";
        
    }
    else{
        return "The given alphabet is consonent";
    }
}

function testForVowels(){
    const testCases = [
        {
            input : 'U',
            output : "The given alphabet is vowel"
        },
        {
            input : 'i',
            output : 'The given alphabet is vowel'
        },
        {
            input : 'k',
            output : 'The given alphabet is consonent'
        },
        {
            input : 'g',
            output : "The given alphabet is consonent"
        },
        {
            input : 'h',
            output : 'The given alphabet is vowel'
        }
    ]


        testCases.forEach((testCase, index) =>{
            const result = checkForVowel(testCase.input);

            if(result == testCase.output){
                console.log(`Test case ${index + 1} passed`);
            }else{
                console.log(`Test case ${index + 1} failed \n Correct output - ${result}`);
            }
        });
}

testForVowels();