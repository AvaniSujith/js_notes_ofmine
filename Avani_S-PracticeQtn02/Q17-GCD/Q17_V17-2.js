function gcdCalc(a,b){
    if(typeof(a) !== "number" && typeof(b) !== "number"){
        return "Invalid input. Input should be number."
    }
    let x = 0;
    
    if( a > b){
        x = b;
    
    }
    else if(a === 0){
        return b;
    }else if(b === 0){
        return a;
    }else{
        x = a;
        
    }
    
    let arr = [];
    for( i =1; i <= x; i++){
        if( a%i == 0 && b%i == 0){
            arr.push(i);
        }
    }
    
    return(arr[arr.length - 1]);

}


// console.log(gcdCalc(24,36));


function testGCD(){
    let input = [[8, 12], [15, 45], [13, 27], [0,10], ["h", "j"]];
    let output = [4, 15, 3, 1];

    for(let i = 0; i<input.length; i++){
        let result = gcdCalc(input[i][0], input[i][1]);

        if(result === output[i]){
            console.log(`Test cases ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed\n${result}`);
        }
    }
}

testGCD();