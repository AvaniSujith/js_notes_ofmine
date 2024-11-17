// check if a string is palindrome

// version-24.1
// function palindrome(string){
//     let arr = [];
//     let i = 0;
//     for(let i = string.length - 1; i >= 0; i--){
//         arr.push(string[i]);
//     }
//     let reverseString = JSON.stringify(arr);
//     console.log(reverseString);

//     if(string[i] == reverseString[i]){
//         console.log("The string is palindrome");
//     }else{
//         console.log("String is not palindorme");
//     }
// }

// palindrome("avani");
// palindrome("malayalam");
//palindrome  string = reverse of srtring


// version-24.2
function palindorme(string){
    let arr = [];
    let arr1 = [];
    let i = 0;
    for(i = string.length-1; i >= 0; i--){
        arr.push(string[i]);
    }
    for(i = 0; i< string.length ; i++){
        arr1.push(string[i]);
    }
    console.log(arr);
    console.log(arr1);

    

    for(i=0; i<string.length; i++){
        if(arr[i] !== arr1[i]){
            console.log("the string is not palindrome")
            return false;
           
        }
        
    }
    console.log("The string is palindrome");
  
    
    // let reverseString = JSON.stringify(arr);
    // let stringArr = JSON.stringify(arr1);
    // console.log(reverseString);
    // console.log(string);


}

palindorme('avani');
palindorme("malayalam");
palindorme("iii")

