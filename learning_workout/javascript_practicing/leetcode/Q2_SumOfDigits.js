// sum of digits of a number 

// version - 1

// function sumOfDigits(num){
//     let string = JSON.stringify(num);
//     let sum = 0;
//     for(let i = 0; i < string.length; i++){
//         console.log(string[i]);

//         sum += string[i]
//     }
//     console.log(sum);
// }
// sumOfDigits(123)


// version 2

// function sum(num){
//     let sumOfNum = 0;
//     // let string = JSON.stringify(num);
//     // let digit = 0;

//     // for(let i = 0; i < string.length; i++){
//     //     digit = num % 10;
//     //     sum += digit;
//     // }
//     // console.log(sum);

//     while(num > 0){
//         digit = num % 10;
//         sumOfNum += digit;

//     }
//     console.log(sumOfNum);
// }

function sum(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    console.log(sum);
}


sum(123);