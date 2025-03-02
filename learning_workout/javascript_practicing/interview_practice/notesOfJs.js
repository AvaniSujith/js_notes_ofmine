// JS - interpreted programming language, used to create dynamic and interactive web pages


// primitive datatypes - built in datatypes, non mutable, single values[Number, string, Boolean, null, undefined, sybmol]
// nonPrimitive datatypes - mutable[Object, array]


// var - function scoped, redeclaarble -- hoisting -variable and functions are hoisted can be called above decalred line
// let - block scoped, not redeclarable, but can be updated
// const - block scoped.fixed

// stack - stores local variables
// heap - 


//     **** CLOSURE ***

function backPack() {
    let notebook = "I hate notes";

    function takNotesbook() {
        console.log(notebook);
    }

    return takNotesbook;
}


const myBag = backPack();
myBag();

