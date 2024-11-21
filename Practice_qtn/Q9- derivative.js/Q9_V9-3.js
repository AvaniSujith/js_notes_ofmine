
function derivative(power){
   let coefficient = power;
   let powerUpdated = power - 1;

   return `${coefficient}X^${powerUpdated}`;
}


function testDerivative(){
    let sample = [3, 4, 8, 36];
    let output = ["3X^2", "4X^3", "7X^4", "33X^36"];

    for(let i = 0; i<sample.length; i++){
        let result = derivative(sample[i]);

        if(result == output[i]){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed\nCorrect output is ${result}`);
        }
    }
}

testDerivative();