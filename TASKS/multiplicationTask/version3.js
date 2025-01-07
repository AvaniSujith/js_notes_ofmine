function multiplication(a,b){
let sum = 0;
for(let i = 0; i < b; i++){
    sum += a
}
return sum;
}

function testing(){
    let input = [[2,3], [12,11],[4,10],[9,5]];
    let output = [6, 132, 40, 40];

    for(let i = 0; i<input.length; i++){
        let result = multiplication(input[i][0], input[i][1]);

        if(result === output[i]){
            console.log(`Test cases ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed\n${result}`);
        }
    }
    
}

testing()