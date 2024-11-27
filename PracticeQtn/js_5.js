// version-5.1

// function SumOfNatural(x){
//     for(i=0; i<x; i++){
//         return sum = x(x+1)/2;
//     }
// }

// SumOfNatural(3);

// version-5.2

// function SumOfNatural(x){
//         for(i=0; i<x; i++){
//             return sum = i(i+1)/2;
//         }
//     }
    
//     SumOfNatural(3);

// version-5.3

// function SumOfNatural(x){
        
//     return x(x+1)/2;
    
// }

// console.log(SumOfNatural(3));

// version-5.4

// function SumOfNatural(x){
        
//     return x*(x+1)/2;
    
// }

// console.log(SumOfNatural(8));

// version - 5.5 using testcases 

//  function SumOfNatural(x){
        
//         return x*(x+1)/2;
        
//     }

// function testSum(){
//     const testCases = [
//         {
//             input : 5,
//             output : 15
//         },
//         {
//             input : 10,
//             output : 55
//         },
//         {
//             input : 3,
//             output : 6
//         }, 
//         {
//             input : 100,
//             output : 5000
//         }
//     ]

//     testCases.forEach((testCase, index) =>{
//         const result = SumOfNatural(testCase.input);

//         if(result == testCase.output){
//             console.log(`Test case ${index + 1} passed`);
//         }else{
//             console.log(`Test case ${index + 1} failed\nCorrect output - ${result}`);
//         }
//     })
// }
// testSum();

// version- 5.6

function SumOfNatural(x){
    if(typeof(x) !== "number"){
        return "Invalid input. Inputs should be a number.";
    }
    return x*(x+1)/2;
}
// console.log(SumOfNatural(3))

function testSum(){
    let sample = ["hey",5,10,100];
    let output = [33,15,55,500];
    let result = 0;
    let i = 0;

    for(i=0; i<sample.length; i++){
        result = SumOfNatural(sample[i]);

        if(result == output[i]){
            console.log(`Test case ${i+1} passed`);
        }else{
            console.log(`Test case ${i+1} failed\n${result}`);
        }
    }
}

testSum();