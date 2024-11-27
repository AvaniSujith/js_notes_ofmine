// version-1.2 using testcases 

function checkNum(num){
    if( num<0 ){
        
        return "The given number is negative."
    }
    else if( num>0 ){
        return "The given number is positive."        
    }
    else{
        return "The given number is zero";
    }
}

function testNumbers(){
    const testCases = [
        { input: 2,
          output : "The given number is positive."
        },
        { input : -9,
          output : "The given number is negative."
        },
        {
          input : 0,
          output : "The given number is zero."
        }
    ]
}

testCases.forEach((testCase) =>{
    const result =  checkNum(testCase.input);
});

if(result == testCase.output){
    console.log(`Test case ${testCases.index} passed`);
}else{
    console.log(`Test case ${testCases.index} failed \n Correct output - ${testCase.output}`);
}
