// version- 5.6

function SumOfNatural(x){
    if(typeof(x) !== "number"){
        return "Invalid input. Inputs should be a number.";
    }
    return x*(x+1)/2;
}
// console.log(SumOfNatural(3))

function testSum(){
    let sample = ["hey",5,10,100];
    let output = [33,15,55,500];
    let result = 0;
    let i = 0;

    for(i=0; i<sample.length; i++){
        result = SumOfNatural(sample[i]);

        if(result == output[i]){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed\n${result}`);
        }
    }
}

testSum();