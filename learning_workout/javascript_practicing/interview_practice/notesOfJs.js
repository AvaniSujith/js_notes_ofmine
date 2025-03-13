// JS - interpreted programming language, used to create dynamic and interactive web pages


// primitive datatypes - built in datatypes, non mutable, single values[Number, string, Boolean, null, undefined, sybmol]
// nonPrimitive datatypes - mutable[Object, array]


// var - function scoped, redeclaarble -- hoisting -variable and functions are hoisted can be called above decalred line  -----ES5
// let - block scoped, not redeclarable, but can be updatedm                 -----ES6
// const - block scoped.fixed                                                -----ES6

// ES6- doenst add to window
// ES5 - add itself to window


// Browser Context api gives 3 things
// --window
//  --stack - stores local variables  ...LIFO  
//    --  variables we declare or use is stored in stack memory 
// -- heap - stores big variabeles.
//    --intermediate data like 1 + 2 + 3 = 3 + 3 
//             intermediate 3 is stored in heap memory


// **** EXECUTION CONTEXT ****



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


// callbacks - function passed as argument to another function, executed after some operation is complete 


// promises stages
//     - pending stage
//         - resolved stage(fulfilled)
//             - rejected



// let fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => { 
//         resolve("Date recieved");

//     }, 2000);
// });

// fetchData.then(data => console.log()); 


// Async / Await - makes handling  asynchronous code easier and more Readable. 


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

// console.log(uniqueFirstSingleLetter("leetcode"));
// console.log(uniqueFirstSingleLetter("avani"));
// console.log(uniqueFirstSingleLetter("people"));
// console.log(uniqueFirstSingleLetter("keokoekeok"));
// console.log(uniqueFirstSingleLetter("popopopopol"));
// console.log(uniqueFirstSingleLetter("opsoposposp"));
// console.log(uniqueFirstSingleLetter("treeeeeeeeeeeeeeeeeeeeeet"));

// console.log(uniqueFirstSingleLetter("siji"));
// console.log(uniqueFirstSingleLetter("hellooo"));


//Q You are given a 0-indexed integer array nums of even length and there is also an empty array arr. Alice and Bob decided to play a game where in every round Alice and Bob will do one move. The rules of the game are as follows:

//Every round, first Alice will remove the minimum element from nums, and then Bob does the same.
//Now, first Bob will append the removed element in the array arr, and then Alice does the same.
//The game continues until nums becomes empty.
//Return the resulting array arr.

// function sortArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j
//             }
//         }

//         let temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;

//     }

//     // return arr;

//     // for (let i = 0; i < arr.length; i++) {
//     //     arr[i] = arr[i + 1]
//     // }

//     // return arr;
//     for (let i = 2; i < arr.length; i + 2) {
//         arr[i] = arr
//     }
// }

// console.log(sortArr([5, 4, 2, 3]));

// function duplicateArr(arr) {
//     // let duplicate = [];
//     // for (let i = 0; i < arr.length; i++) {
//     //     // let value = arr[i];
//     //     let isDuplicate = true;
//     //     for (let j = i + 1; j < arr.length; j++) {
//     //         if (arr[i] !== arr[j]) {
//     //             // isDuplicate = true
//     //             isDuplicate = false;
//     //         }
//     //     }

//     //     if (isDuplicate) {
//     //         duplicate.push(arr[i])
//     //     }
//     // }

//     // return duplicate;

//     let duplicate = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 duplicate.push(arr[i]);
//             }
//         }
//     }

//     return duplicate;
// }

// console.log(duplicateArr([1, 2, 8, 6, 4, 9, 6, 2, 5, 8])); 
