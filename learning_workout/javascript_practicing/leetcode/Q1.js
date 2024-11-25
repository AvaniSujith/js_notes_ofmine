// given an integer x, return true if x is a palindorme and false otherwise 

function palindorme(input){
    let inputString = JSON.stringify(input);
    let arr = [];
    let revArr = [];
    let i = 0;
    for(let i = 0; i < inputString.length; i++){
        arr.push(inputString[i]);
    }
    for(let i = inputString.length-1; i >=0 ; i--){
        revArr.push(inputString[i]);
    }
    
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] == revArr[i]){
    //         console.log("palindrome");
    //     }
    // }
    // console.log("Not a palindrome");    

    if(JSON.stringify(arr) == JSON.stringify(revArr)){
        return true;
    }else{
        return false;
    }
}


console.log(palindorme(-123));
console.log(palindorme(123));
console.log(palindorme(121));


function palindormeNew(num){
    let sampleNum = num;
    let reverseNum = 0;

    while(sampleNum > 0){
        const lastDigit = sampleNum%10;
        reverseNum = reverseNum*10 + lastDigit;
        sampleNum = Math.floor(sampleNum/10);
    }

    return num === reverseNum;
}

console.log(palindormeNew(-121));
console.log(palindormeNew(121));


































