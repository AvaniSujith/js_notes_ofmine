function numberConv(num){
    if(num == 0){
        console.log("0");
    }else if (num == 1){
        console.log("1");
    }else{
        let arr = [];
        while(num > 0){
          
            let value = num%2;
            
            
            arr.push(value);
            num = (num-value)/2;
        }
        // console.log(arr)

        let revArr = [];
        for(let i = arr.length - 1; i >= 0; i--){
            revArr.push(arr[i]);
        }

        // console.log(revArr);
        return revArr;
    }
     
}


// console.log(numberConv(13));

function testNumb(){
    let sample = [5, 8, 13, 7];
    let output = [[1,0,1], [1,0,0,0], [1,1,0,1], [0]];

    for(let i = 0; i <sample.length; i++){
        let result = numberConv(sample[i]);

    if(JSON.stringify(result) == JSON.stringify(output[i])){
        console.log(`Test case ${i+1} passed`);
    }else{
        console.log(`Test case ${i+1} failed\nCorrect output is ${result}`);
    }
    }
}

testNumb();