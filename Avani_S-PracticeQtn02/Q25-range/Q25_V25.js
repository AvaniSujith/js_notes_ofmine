function range(arr){
    
    // let minValue = 0;
    // let maxValue = 0;
    // let minValue = maxValue;

    let minValue = arr[0];
    let maxValue = arr[0];
    let range = 0;

    for(let i = 0; i < arr.length; i++){
        if(maxValue < arr[i]){
            maxValue = arr[i];
        }
    }
    // console.log(maxValue);

    for(let i = 0; i < arr.length; i++){
        if(minValue > arr[i]){
            minValue = arr[i];
        }
    }
    // console.log(minValue);

    range = maxValue - minValue;
    // console.log(range);
    return range;
}

// range([1,4,6,3,8,5]);

function testRange(){
    let sample = [[10], [5, 5, 5, 5], [-10, -5, 0, 5, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9]];
    let output = [10, 0, 20, 8];

    for(let i = 0; i < sample.length; i++){
        let result = range(sample[i]);

        if(result == output[i]){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed\nCorrect output: ${result}`);
        }
    }
}

testRange();