// Write a program to check if the given number is a perfect square or not?

function square(num){
    let n = 0;
    for(let i =0; i<n; i++){
        if(n%2 !== 0){

        }
    }
}

function testSquare(){
    const testCases = [
        {
            input :
            output :
        },
        {
            input :
            output :
        },
        {
            input : 
            output :
        }, 
        {
            input :
            output :
        }
    ];

    testCases.forEach((testCase, index)=>{
        let result = square(testCase.input);

        if(result == testCase.output){
            console.log(`Test case ${index+1} passed`);
        }else{
            console.log(`Test case ${index+1} failed\nCorrect output is ${result}`);
        }
    })
}