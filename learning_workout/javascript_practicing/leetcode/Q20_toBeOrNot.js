// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

function expectation(val){
    function toBe(expected){
        if( val === expected){
            return true;
        }else{
            throw new Error("Not Equal");
            
        }
    }
    function notToBe(expected){
        if( val !== expected){
            return true;
        }else{
            throw new Error("Equal");
        }
    }
    return [toBe, notToBe];
}

let [toBe, notToBe] = expectation(5);

console.log(toBe(5));
console.log(n)



// function expectation(val) {
//     return {
//         toBe: function (expected) {
//             if (val === expected) {
//                 return true;
//             } else {
//                 throw new Error("Not Equal");
//             }
//         },
//         notToBe: function (expected) {
//             if (val !== expected) {
//                 return true;
//             } else {
//                 throw new Error("Equal");
//             }
//         }
//     };
// }

// Usage
console.log(expectation(5).toBe(5));       // true
console.log(expectation(5).notToBe(4));    // true
console.log(expectation(5).notToBe(5));    // Throws "Equal"
console.log(expectation(5).toBe(4));       // Throws "Not Equal"


function expectation(val){
    return {
        toBe: function (expected){
            if(val === expected){
                return true;

            }else{
                throw new Error("New Equal");
            }
        }

    };

}