// Write a program to simplify a fraction of two numbers to its lowest term?

function simplification(numerator, denominator){
    let value = 0;
    if(numerator > denominator){
        value = denominator;
    }else if(numerator === 0){
        value = denominator;
    }else if(denominator > numerator){
        value = numerator;
    }else if(denominator === 0){
        value = numerator;
    }

        let arr = [];
    for(let i = 1; i <= value; i++){
    
        if(numerator%i === 0 && denominator%i === 0){
            arr.push(i);
        }
    }

    let simplificationVar = 0;
    simplificationVar = arr[arr.length - 1];
    // console.log(simplificationVar);


    let simplifiedNum = numerator / simplificationVar;
    // console.log(simplifiedNum);
    let simplifiedDeno = denominator / simplificationVar;
    // console.log(simplifiedDeno);
    return `numerator = ${simplifiedNum}\n denominator = ${simplifiedDeno}`;

}


// simplification(8,12);
function testSimplification(){
    let sample = [[20,60], [7,13], [0,25], [45,60], [8,12]];
    let output = ["numerator = 1\n denominator = 3",
                  "numerator = 7\n denominator = 13",
                  "numerator = 0\n denominator = 1",
                  "numerator = 1\n denominator = 3",
                  "numerator = 2\n denominator = 3"
                ];

    for(let i = 0; i < sample.length; i++){
        let result = simplification(sample[i][0], sample[i][1]);

        if(result == output[i]){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed\nCorrect output: ${result}`);
        }
    }
}

testSimplification();