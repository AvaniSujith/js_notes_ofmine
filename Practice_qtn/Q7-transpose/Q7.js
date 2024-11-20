// Write a program to check if the given matrix is an identity matrix?

// function transpose(arr){

// }

function testTranspose(){
    let sample = [];
    let output = [];

    for(let i = 0; i < sample.length; i++){
        let result = transpose(sample[i]);

        if(result == output[i]){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed\nCorrect output is ${result}`);
        }
    }
}