function palindromeWithSpace(givenStr){
    let string = givenStr.toLowerCase();
    let strArr = [];
    let revArr = [];
   
   
    for(let i = 0; i < string.length; i++){
       
        if(string[i] !== ' '){
        
            strArr.push(string[i]);
       }
    }
    for(let i = string.length-1 ; i >= 0 ; i--){
        
        if(string[i] !== ' '){
            revArr.push(string[i]);
        }
    }
    for(let i = 0; i < strArr.length; i++){
        
        if(strArr[i] !== revArr[i]){
            // console.log("Not a palindrome");
            return "Not a palindrome";
        }
    }
    // console.log("Palindrome");
    return "Palindrome";

  
    
}

// palindromeWithSpace("i am avani");
// palindromeWithSpace("Too hot to hoot");


function testPalindrome(){
    let sample = ["A man a plan a canal Panama",
                  "This is not a palindrome",
                  "Was it a car or a cat I saw",
                //   `A man, a plan, a canal, Panama!`,
                  "Too hot to hoot",
                    "a"
                    ];
    let output = ["Palindrome", "Palindrome", "Palindrome", "Palindrome", "Palindrome"];


    for(let i = 0; i < sample.length; i++){
        let result = palindromeWithSpace(sample[i]);

        if(result == output[i]){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed\nCorrect output: ${result}`);
        }
    }

    
}


testPalindrome();