// Write a program to count the number of vowels in a string?

function vowelsNum(string){
    let newString = string.toLowerCase();
    let count = 0;
    let i = 0;
    if(newString[i] == "a" ){
        count++;
    }else if(newString[i] == "e"){
        count++;
    }else if(newString[i] == "i"){
        count++;
    }else if(newString[i] == "o"){
        count++;
    }else if(newString[i] == "u"){
        count++;
    }
    console.log(count);
}

vowelsNum("aVAnI");



