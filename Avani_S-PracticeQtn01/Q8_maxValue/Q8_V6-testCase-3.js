
//version- 8.6

function maxValue(arr){
    if(!Array.isArray(arr)){
        return "Invalid input. Input should be of array form."
    }

    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== "number"){
            return "Invalid input. Elements should be number."
        }
    }

    let maxElement = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(maxElement < arr[i]){
            maxElement = arr[i];
        }
    }
    return maxElement;
}


function testMaxvalue(){
    const testCases = [
        {
            input : [1,2,3,4,44,66,22,42356,11,10],
            output : 42356
        },
        {
            input : [44,55,33,66,11,22],
            output : 66
        },
        {
            input : [888,-55,-2,-4],
            output : 888
        },
        {
            input : [-8, -3, -5],
            output : -8
        },
        {
            input : "hello"
        },
        {
            input : [1, "a", "b"],
            output : 1
        }
    ]

    testCases.forEach((testCase, index) =>{
        const result = maxValue(testCase.input);


        if(result == testCase.output){
            console.log(`Test case ${index+1} passed`);
        }else{
            console.log(`Test case ${index+1} failed\n${result}`);
        }
    })
}

testMaxvalue();