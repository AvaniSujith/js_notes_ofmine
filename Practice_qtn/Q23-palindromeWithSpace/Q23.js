// Write a program to check whether the given string with space is palindrome or not?


function palindromeWithSpace(string){
    let strArr = [];
    let revArr = [];
    for(let i = 0; i < string.length; i++){
       if(string[i] !== ' '){
            // console.log(string[i]);
            strArr.push(string[i]);
       }
    
    }
    // console.log(strArr);

    for(let i = string.length-1 ; i >= 0 ; i--){
        // console.log(string[i]);
        if(string[i] !== ' '){
            revArr.push(string[i]);
        }
    }
    // console.log(revArr);


    if(JSON.stringify(strArr) == JSON.stringify(revArr)){
        console.log("Palindrome");
    }else{
        console.log("Not a palindrome");
    }
    
}

palindromeWithSpace("i am avani");
palindromeWithSpace("Too hot to hoot");