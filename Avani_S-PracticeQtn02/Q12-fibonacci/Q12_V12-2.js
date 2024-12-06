
function fibonacci(num){
    if(typeof(num) !== "number"){
        return "Invalid input. Input should be a number."
    }
    
    let array = [];
    array[0] = 0;
    array[1] = 1;

    for(let i = 2; i<num; i++){
        array[i]= array[i-1] + array[i-2];
        // array.push(array[i]);
    }
    // console.log(array);
    return array;
}
// fibonacci(6);


function testFibonacci(){
    let input = [4, 5, 7, 3, "h"];
    let output = [[0, 1, 1, 2], [0], [0, 1, 1, 2, 3, 5, 8], [0, 1]];

    for(let i = 0; i<input.length; i++){
        let result = fibonacci(input[i]);

        if(JSON.stringify(result) == JSON.stringify(output[i])){
            console.log(`Test case ${i+1} passed`);

        }else{
            console.log(`Test case ${i+1} failed\nCorrect output is ${result}`);
        }
    }
}

testFibonacci();

