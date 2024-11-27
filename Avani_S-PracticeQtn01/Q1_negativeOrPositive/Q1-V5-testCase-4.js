
// verion - 1.5

function checkNum(num){
    if(typeof(num) !== "number"){
        return "Invalid input. Inputs should be of number type.";
    }
    if(num > 0){
        return "positive";
    }else if(num < 0){
        return "negative";
    }else{
        return "zero";
    }
}

// console.log(checkNum(0))

function testCheckNum(){
    
    let sample = ["hello",4,-5,0,-4];
    let expectedResult = ['positive','positive','negative','zero','zero'];
    let result = 0;
    let i = 0;
    
    for(i = 0; i < sample.length; i++){
         result = checkNum(sample[i]);

         if(result === expectedResult[i] ){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed\n${result}`);
        }
   
    }
}

    testCheckNum();