
// version -  8.4 using testcases 

function maxValue(arr){
    // if(typeof(arr) !== "object"){
    //     return "Invalid input. Input should be of array form."
    // }

    if(!Array.isArray(arr)){
        return "Invalid input. Input should be of array form."
    }

    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== "number"){
            return "Ivalid input. Elements should be number."
        }
    }


    arr.sort((a,b) => a - b);
    let maxElement = arr[arr.length - 1];
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