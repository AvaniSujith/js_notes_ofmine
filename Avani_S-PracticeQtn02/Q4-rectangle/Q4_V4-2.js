function rectangle(l,b){
    if(typeof(l) !== "number" && typeof(b) !== "number"){
        return "Invalid input. Input should be a number."
    }
    let area = 0;
    area = l * b;
    return area;
}

function testRectangle(){
    
    let sample = [[5,10], [5.5,3.2],[0,5], ["hello","hey"]];
    let output = [50, 17.6, 5];

    for(let i = 0; i<sample.length; i++){
        // sample(l,b) = value;
        // let result = (rectangle(sample[i][0]));
        let result = rectangle(sample[i][0],sample[i][1]);

        if(result === output[i]){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed\n${result}`);
        }
    }
}

testRectangle();