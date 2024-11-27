
// version-4.3
function OddOrEven(num){
    if(typeof(num) !== "number"){
        return "Invalid input. Inputs should be a number.";
    }
    if(num%2 === 0){
        return "even";
    }else{
        return "odd";
    }
}

function testOddorEven(){
    let sample = ["hello",44,55,1,7];
    let output = ['even','even','odd','even','odd'];
    let result = 0;
    let i = 0;

    for(i=0; i<sample.length; i++){
        result = OddOrEven(sample[i]);


        if(result == output[i]){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed\n${result}`)
        }
    }
}


testOddorEven();