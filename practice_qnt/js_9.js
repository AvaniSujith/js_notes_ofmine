// version-9.1


// function averageValue(arr){
    
    
//     for(i=0; i<arr.length;i++){
//         let value = arr[i];
//          value =+ i;
//         console.log(value);
//     }
   
// }

// let array = [1,0,5,8,4,2];
// averageValue(array);


// version-9.2

// function averageValue(arr){
    
    
//         let i =0;
//         let value = arr[i];
//          value =+ i;
//          i++;
//         console.log(value);
    
   
// }

// let array = [1,0,5,8,4,2];
// averageValue(array);


//version-9.3

// function averageValue(arr){
//     let i =0;
//     // let  value = arr[i];
//     let sum = 0;
//     for(i=0; i<arr.length;i++){
//         // value += i;
//         sum += arr[i];
//        avg = sum/arr.length;
//        console.log(avg);
// }
     
    
   
// }

// let array = [1,0,5,8,4,2];
// averageValue(array);

// version-9.4

// function averageValue(arr){
//     let i =0;
//     let sum = 0;
//     for(i=0; i<arr.length;i++){
      
//         sum += arr[i];
//        avg = sum/arr.length;
// }
     
//     console.log(avg);
   
// }

// let array = [1.5, 2.5, 3.5];
// averageValue(array);

// let array1 = [1000000, 5000000, 3000000, 7000000, 9000000];
// averageValue(array1);

// let array2 = [2, 4, 6, 8, 10];
// averageValue(array2);

// let array3 = [3, -7, 5, -2, 9];
// averageValue(array3);

// let array4 = [0, 0, 0, 0];
// averageValue(array4);

// let empty = [];
// averageValue(empty);

// version - 9.5 using test cases 



function averageValue(arr){
    let i =0;
    let sum = 0;
    for(i=0; i<arr.length;i++){
      
        sum += arr[i];
       avg = sum/arr.length;
}
     
    return avg;
   
}

function testAverageValue(){
    const testCases = [
        {
            input : [2, 4, 6, 8, 10],
            output : 6
        },
        {
            input : [-5, 10, 15, -20, 25],
            output : 5
        },
        {
            input : [1.5, 2.5, 3.5],
            output : 2.5
        },
        {
            input : [0,0,0,0],
            output : 4
        }
    ]

    testCases.forEach((testCase, index) => {
        const result = averageValue(testCase.input);
        
        if(result == testCase.output){
            console.log(`Test case ${index+1} passed`);
        }else{
            console.log(`Test case ${index +1} failed \nCorrect output - ${result}`)
        }
    });
}

testAverageValue();