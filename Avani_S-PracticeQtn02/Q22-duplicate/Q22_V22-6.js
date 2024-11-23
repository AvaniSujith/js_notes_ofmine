function duplicatesRemoval(arr){
    let compareArr = [];
    for(let i = 0; i < arr.length; i++){
        let compare = arr[i];
        let present = false;
        for(let j = 0; j < compareArr.length; j++){
            if(compare === compareArr[j]){
                present = true;
                break;
            }
        }
        if(!present){
            compareArr.push(compare);
        }
    }
    return compareArr;
}

// console.log(duplicatesRemoval([1,2,2,3,2,4,5,6]));


function testDuplicate(){
    let sample = [
        [1, 2, 2, 3, 2, 4, 5, 6],
        [7, 7, 7, 7, 7],
        [-1, -2, -2, -3, -1, -4],
        [1,1,1,2,2,3,4]
    ];
    let output = [
        [1, 2, 3, 4, 5, 6],
        [7],
        [-1, -2, -3, -4],
        [1]
    ];

    for(let i = 0; i < sample.length; i++){
        let result = duplicatesRemoval(sample[i]);

        if(JSON.stringify(result) == JSON.stringify(output[i])){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed\nCorrect output: ${result}`);
        }
    }
}

testDuplicate();