// Write a program to calculate the area of a triangle given its base and height.?

function triangle(l,b){
    let area = (l * b)/2;
    return area;
}

function testTriangle(){
    let sample = [[3,4], [2,5], [6,9], [0,23]];
    let input = [6,5,9,1];

    for(let i =0; i<sample.length; i++){
    // let value = sample[l,b];
    let l = sample[i][0];
    let b = sample[i][1];
    let result = triangle(l,b);
    
    if(result == input[i]){
        console.log(`Test case ${i+1} passed`);
    }else{
        console.log(`Test case ${i+1} failed\nCorrect output is ${result}`);
    }

    }
}

testTriangle();