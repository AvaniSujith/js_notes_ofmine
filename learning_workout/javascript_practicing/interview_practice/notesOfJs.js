// JS - interpreted programming language, used to create dynamic and interactive web pages


// primitive datatypes - built in datatypes, non mutable, single values[Number, string, Boolean, null, undefined, sybmol]
// nonPrimitive datatypes - mutable[Object, array]


// var - function scoped, redeclaarble -- hoisting -variable and functions are hoisted can be called above decalred line  -----ES5
// let - block scoped, not redeclarable, but can be updatedm                 -----ES6
// const - block scoped.fixed                                                -----ES6

// ES6- doenst add to window
// ES5 - add itself to window

// stack - stores local variables  ...LIFO
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

// class = template for object.
// var a = [2,3,4,5,6]



// ****ADD ELEMENTS INTO ARRAY****

// // array.push(): -
//      - add Elements into array
// // array.unshift(): -
//      - add element to front

// ****REMOVING OF ELEMENT FROM ARRAY****

// // array.pop(): -
//      - remove Element.

// // array.shift();
//     - remove element from front.

// Array.splice(index, numberOfElememntsToBeRemoved)



// conditionals - if else els-if

// loop - makes it easy to lot of things, repeated works done on all together.

// Uses of Functions :
//   1-- when code is not immediately used
//   2-- when code is to be reused
//   3-- when cod eshould be run with different datas different time.

// console.log("hello");

// function hello() {
//     console.log("hai")
// }


// Object :- more than one type of values should be stored in a single place
// - blank obj
// var a = {};

// - filled obj
// var a = {
//     age: 23,
//     name: "avani",
//     place: "meenangadi"
// }


// console.log(a.name)


// let language = {
//     name: "main language",
//     age: 33,
//     loop: "no-loop"
// }

// console.log(language);

function uniqueFirstSingleLetter(str) {

    let stri = str.toLowerCase();

    for (let i = 0; i < stri.length; i++) {
        let count = 0;
        for (let j = 0; j < stri.length; j++) {
            if (stri[i] === stri[j]) {
                count++;
            }
        }
        if (count === 1) {
            return i;
        }
    }
    return -1;
}

console.log(uniqueFirstSingleLetter("leetcode"));
console.log(uniqueFirstSingleLetter("avani"));
console.log(uniqueFirstSingleLetter("people"));
console.log(uniqueFirstSingleLetter("siji"));
console.log(uniqueFirstSingleLetter("hellooo"));