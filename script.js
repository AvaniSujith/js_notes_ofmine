// // async function fetchData() {
// //     try {
// //         let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// //         let data = await response.json();

// //         console.log(data)
// //     } catch (error) {
// //         throw error
// //     }
// // }



// const key = "someOtherKey"
// const someObj = {
//     key: "somekey",
//     foo: function boo() {
//         console.log(this.key)
//     }
// }

// console.log(this.key)
// console.log(someObj.foo())


// console.log(this)

// // console.log("start")
// // await fetchData();
// // console.log("end")

// const someObj = { "key1": "val1", "key2": "val2" }

// function keys(someObj) {
//     let arr = []
//     // for (let key in someObj) {
//     //     arr.push(someObj.key)
//     // }

//     for(let i = 0; i <someObj.length)

//     return arr;
// }

// console.log(keys());


// let someObject = "sivan"

// function whoIs(arg) {
//     arg = "Abhinav"

//     return arg
// }

// whoIs(someObject)

// console.log(someObject)

// const a = 100 + 50 * 10
// const b = (100 + 50) * 10

// async function fetchData() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// async function main() {
//     console.log("start");
//     await fetchData();  // Ensures fetchData completes before moving on
//     console.log("end");
// }

// main();

function triangle(num) {
    for (let i = 0; i < num; i++) {
        let line = '';
        for (let j = 0; j <= i; j++) {
            line += `${" "}*`
        }
        console.log(line)
    }
}

// triangle(5);

function diamond(num) {
    for (let i = 0; i < num; i++) {
        let line = ""
        for (let j = 0; j < num - i - 1; j++) {
            line += " ";

        }
        for (let k = 0; k < 2 * i + 1; k++) {
            line += "*"
        }
        console.log(line)
    }

}

diamond(5);


// function invertedTriangle(n) {
//     for (let i = 0; i < n; i++) {
//         let line = ''
//         for (let j = 0; j < n - i; j++) {
//             line += '*'
//         }
//         console.log(line)
//     }
// }
// invertedTriangle(5)



// function pyramid(n) {
//     for (let i = 0; i < n; i++) {  // Outer loop for rows
//         let line = ''

//         // Add spaces
//         for (let j = 0; j < n - i - 1; j++) {
//             line += ' '
//         }

//         // Add stars
//         for (let k = 0; k < 2 * i + 1; k++) {
//             line += '*'
//         }

//         console.log(line)
//     }
// }
// pyramid(5)

function star(num) {
    let result = ''
    for (let i = 0; i < num; i++) {
        let line = ''
        for (let j = 0; j < num - i; j++) {
            line += ' '
        }
        for (let k = 0; k < i * 2 - 1; k++) {
            line += '*'
        }
        result += `${line}\n`
    }
    return result
}
// console.log(star(4));



// reverse a integer without converting into string

