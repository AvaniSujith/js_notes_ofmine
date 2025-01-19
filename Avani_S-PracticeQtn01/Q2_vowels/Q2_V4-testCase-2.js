
// version-2.4 

function checkForVowel(letter){
    if(typeof(letter) !== "string"){
        return "Invalid Input. Input should be alphabets."
    }

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
    let input = [1,'P','I','S'];
    let output = ['vowel','consonent','vowel','vowel'];
    let i = 0;
    let result = 0;

    for(i=0; i < input.length; i++){
        result = checkForVowel(input[i]);

        if(result === output[i]){
            console.log(`Test case ${i+1} passed`);

        }else{
            console.log(`Test case ${i+1} failed\n${result}`);
        }
    }
}

testForVowels();