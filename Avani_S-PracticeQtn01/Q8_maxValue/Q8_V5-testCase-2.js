// version-8.5

function maxValue(arr){
    arr.sort((a,b)=> a - b);
    let maxElement = arr[arr.length - 1];
    return maxElement;
}

function testMaxvalue(){
    let sample = [ [1,2,3,4,44,66,22,42356,11,10], [888,-55,-2,-4],  [-8, -3, -5]];
    let output = [1, 888 , -3];

    let result = 0;
    // let i = 0;

    for(let i = 0; i < sample.length; i++){
        result = maxValue[sample[i]];

        if(result == output[i]){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed\nCorrect output ${result}`);
        }
    }


  

}


// testMaxvalue();