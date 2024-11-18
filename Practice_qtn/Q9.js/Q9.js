// Write a program that approximates the derivative of f(x)=x^n?

function derivative(){

}

function testDerivative(){
    let sample = ;
    let output = ;

    for(let i = 0; i<sample.length; i++){
        let result = derivative(sample[i]);

        if(result == output){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed`);
        }
    }
}