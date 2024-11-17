// Write a program to check if two ratios are in proportion.

// version-2.1

// let a;
// let b;
// let c;
// let d;
// let A = a / b;
// let B = c / d;

// function proportion(A, B){
//     if(A/B === 1){
//         console.log("Ratios are proportional");
//     }else{
//         console.log("Ratios are not proportional");
//     }
// }

// a = 2;
// b = 3;
// c = 2;
// d = 3;

// proportion();

// version- 2.2

let a;
let b;
let c;
let d;

function proportion(a, b, c, d){
    let e = a / b;
    let f = c / d;

    if( e/f == 1){
        console.log("Ratios are proportional");
    }else{
        console.log("Rations are not proportional");
    }
}

proportion(2,3,2,3);
proportion(2,3,4,6);
proportion(3,4,6,8);
proportion(1,2,3,4);

