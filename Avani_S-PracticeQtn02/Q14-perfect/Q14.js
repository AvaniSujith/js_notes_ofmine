// 14. Write a program to check whether a given number is a perfect number or not?

function perfect(num){
    if(typeof(num) !== "number"){
        return "Invalid input. Input should be a number."
    }
    let divisors = 0;
    let perfectNum = 0;
    for(let i = 0; i <= num; i++){
        if(num%i == 0){
            divisors += i;
        }
    }
    perfectNum = divisors - num;
    
    if(perfectNum == num){
        // console.log("Is a perfect number");
        return "Perfect";
    }else{
        // console.log("Not a perfect number");
        return "Not a perfect number";
    }
}

// perfect(33550336);



function testPerft(){
    let sample = [33550336, 1, 12, 496, 28, "h"];
    let output = [ "Perfect", "Perfect",  "Perfect",  "Perfect",  "Perfect"];

    for(let i = 0; i <sample.length; i++){
        let result = perfect(sample[i]);

    if(result == output[i]){
        console.log(`Test case ${i+1} passed`);
    }else{
        console.log(`Test case ${i+1} failed\n${result}`);
    }
    }
}

testPerft();

