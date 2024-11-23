function perfectSquare(num){
    if(typeof(num) !== "number"){
        return "Invalid input. Input should be a number."
    }
    if(num < 0 ){
        console.log("Invalid");
    }else{
        let product = 0;
        for(let i = 0; i*i <= num; i++){
            product = i*i;
            // console.log("Not a perfect ")
        }
        if(product == num){
            // console.log("perfect square");
            return "perfect square";
        }else{
            // console.log("Not a perfect square");
            return "Not a perfect square";
        }
    }
}

// perfectSquare(36);
// perfectSquare(32);
// perfectSquare(9);
// perfectSquare(10);

function testPerfect(){
    let sample = [
        16,
        20,
        0,
        1,
        1050,
        1024,
        "hello"
    ];
    let output = [
        "perfect square",
        "perfect square",
        "perfect square",
        "perfect square",
        "perfect square",
        "perfect square"
    ];

    for(let i = 0; i < sample.length; i++){
        let result = perfectSquare(sample[i]);

        if(result == output[i]){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed\n${result}`);
        }
    }
}


testPerfect();