// JS - interpreted programming language, used to create dynamic and interactive web pages


// primitive datatypes - built in datatypes, non mutable, single values[Number, string, Boolean, null, undefined, sybmol]
// nonPrimitive datatypes - mutable[Object, array]


// var - function scoped, redeclaarble -- hoisting -variable and functions are hoisted can be called above decalred line
// let - block scoped, not redeclarable, but can be updated
// const - block scoped.fixed

// stack - stores local variables
// heap - stores big variabeles.


//     **** CLOSURE ***

// function backPack() {
//     let notebook = "I hate notes";

//     function takNotesbook() {
//         console.log(notebook);
//     }

//     return takNotesbook;
// }


// const myBag = backPack();
// myBag();



// selection sort

// function selectionSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j
//             }
//         }
//         let temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//     }
//     return arr;
// }

// function duplicateValue(arr) {
//     let duplicateArr = []
//     for (let i = 0; i < arr.length - 1; i++) {
//         let first = arr[i];
//         for (let j = i + 1; j < arr.length; j++) {
//             if (first === arr[j]) {
//                 duplicateArr.push(arr[j]);
//             }
//         }
//     }

//     return duplicateArr;
// }

// let numbers = [5, 2, 9, 1, 5, 6, 8, 6, 9];
// console.log(duplicateValue(numbers))
// console.log(selectionSort(numbers));

// let b = null;
// console.log(b)
// console.log(a)

// let num = "7";
// console.log(typeof (num));