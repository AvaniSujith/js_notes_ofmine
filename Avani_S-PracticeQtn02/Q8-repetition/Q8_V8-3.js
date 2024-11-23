function repetition(arr){

    let maxCount = 0;
    // let temp = arr[0];
    let temp = [];
    
    for(let i = 0; i < arr.length ; i++){
        let count = 0;


        for(let j = 0; j < arr.length; j++){
            
            if(arr[i] === arr[j]){
                count ++;
            }
        }
        
        if(count > maxCount){
            maxCount = count;
            temp = [arr[i]];
        }else if(count == maxCount && !temp.includes(arr[i])){
            // temp.push(i);
            temp.push(arr[i]);
        }
    
    }


    

    // console.log(maxCount);
    // console.log(temp);

    return `The most repeated value is ${temp} with a count of ${maxCount}`;

    // console.log(The)

}

// let arr = [1,2,3,3,3,1,1];
// repetition(arr);


function testRepetition(){
    const testCases = [
        {
            input : [1,2,3,1,2,2,2,3,1],
            output : "The most repeated value is 2 with a count of 4"
        },
        {
            input : [1,1,1,2],
            output: "The most repeated value is 1 with a count of 3"
        },
        {
            input : [3,4,3,3,4,4,4,1,1,1,1],
            output : "The most repeated value is 4,1 with a count of 4"
        },
        {
            input : [2,2,0,1],
            output : "The most repeated value is 4,1 with a count of 4"
        }
    ];

    testCases.forEach((testCase, index)=>{
        let result = repetition(testCase.input);

        if(result == testCase.output){
            console.log(`Test case ${index+1} passed`);
        }else{
            console.log(`Test case ${index+1} failed\nCorrect output: ${result}`);
        }
    });
}

testRepetition();