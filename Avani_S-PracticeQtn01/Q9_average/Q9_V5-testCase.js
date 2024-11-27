
// version - 9.5 using test cases 



function averageValue(arr){

    // if(typeof(arr) !== "object"){
    //      return "Invalid input. Input should be of array form.";
    // }

    if(!Array.isArray(arr)){
        return "Invalid input. Input should be of array form."
    }

    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== "number"){
            return "Invalid input. Elements should be number."
        }
    } 

    let i =0;
    let sum = 0;
    for(i=0; i<arr.length;i++){
      
        sum += arr[i];
       avg = sum/arr.length;
}
     
    return avg;
   
}

function testAverageValue(){
    const testCases = [
        {
            input : [2, 4, 6, 8, 10],
            output : 6
        },
        {
            input : [-5, 10, 15, -20, 25],
            output : 5
        },
        {
            input : [1.5, 2.5, 3.5],
            output : 2.5
        },
        {
            input : [0,0,0,0],
            output : 4
        },
        {
            input : 2
        },
        {
            input : [1,"a"],
            output : 1
        }
    ]

    testCases.forEach((testCase, index) => {
        const result = averageValue(testCase.input);
        
        if(result == testCase.output){
            console.log(`Test case ${index+1} passed`);
        }else{
            console.log(`Test case ${index +1} failed \n${result}`)
        }
    });
}

testAverageValue();

