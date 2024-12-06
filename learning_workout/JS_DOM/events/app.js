// Events 

// change in state of an object - Event
// fired to notify code of "interesting changes" that may affect code execution.


// * mouse events (click, double click EventCounts.)
// * keyboard event (keydown, keyup) 
// * Form events (submit)
// * print many or many more




// events can be user made or environment dependant. most commom ones are keyboard event and mouse events
// low battery warning event . resizing the screen of page.


// *****************************EVENT HANDLING********************************* 

//  Node.event = () => {
// function
//  }


// 1.ACCESS THE ELEMENT ***************
//  let btn = document.querySelector('#btn')
// //  2.HANDLE EVENT ************************
// btn.onclick = (e) => {
//     console.log(e.type)
//     console.log(e.target)
//     // console.log(e.clientX)     -- designing of game like project
//     // console.log(e.clientY)   -- designing of game like project
//     console.log('clicked!!');
//     // let a = 25;
//     // a++
//     // console.log(a)
// }


// Q handling div event

// let div = document.querySelector('div')
// console.log(div)
// div.onmouseover = (e) => {
//     console.log(e.type)

//     console.log('mouse pointer over div');
// }

// *********************EVENT OBJECT******************

// special object has details about event 
//  target , type , clientX, clientY

// ***********************EVENT LISTENER*******************
// *************Node.addEventListener(event, callball)
// callback is a function used as argument 

// let btn = document.querySelector('#btn');

// btn.addEventListener('click', ()=> {
//     console.log('Clicked!!!');
//     // console.log(e)
//     // console.log(e.type)

// })

// const next = () => {
//     console.log('clicked again!!!!');
// }

// btn.addEventListener('click', next)


// // btn.addEventListener('click', () => {
// //     console.log('clicked again!!!!');
// // })



// //************Node.removeEventListener(event,callback)


// // btn.addEventListener('click', () => {
// //     console.log('clicked agian!!!!');
// // })

// // btn.removeEventListener('click', () => {
// //     console.log('clicked!!!')
// // })


// btn.removeEventListener('click', next)

// const btn = document.querySelector('#btn')
// let currentMode = 'light';
//  btn.addEventListener('click', () => {
//     if()
//  })


