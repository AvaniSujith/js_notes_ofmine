

greet();
greet();
greet();


//function expression


// day();
// day();
// day();
// const day = function(){
//     console.log("have a great day!");
// };

function greet(){
    console.log('hello how are you?');
}


// const speak = function(naming){
//     console.log(`how are you ${naming}`) ; 
// };

//arrow function
const speak = naming =>{
    return `how are you ${naming}`;
};

const speaking = speak('avani');
console.log(speaking);


const date = function(name){
    console.log(`Have a good day ${name}`);
}
date('jai');


const diff =function(name='ram'){
    console.log(`How are you ${name}`);
}
diff('hari');
diff();

const aging = function(name, age){
    console.log(`Happy ${age}th birthday ${name}.`)
};

aging('alia',20);


//different approach 
 
//Case 1

const calcArea = function(radius){
    let area = 3.14 * radius**2;
    console.log(area)
 
}
calcArea(5);

//Case 2
console.log('regular function expression')
const calcAreas = function(radius){
    return 3.14 * radius**2;
}
const area =calcAreas(5);
console.log(area);
 
//arrow function
console.log('arrow function');
// const calcAreass = radius =>{
//     return 3.14 * radius **2;
// }

const calcAreass = radius => 3.14 * radius**2;
const areas = calcAreass(5);
console.log(area);


// const rectArea = function(length, width){
//     return length * width;
// }

// const rectangle = rectArea(2, 4);
// console.log(rectangle);


// const volRect = function(rectangle, height){
//     return rectangle * height;
// }

// const rectangleVol = volRect(rectangle, 8);
// console.log(rectangleVol);



// Advanced function

// const final = function(price, tax){
//     let total = 0;
//     for(let i=0; i<price.length; i++){
//         total += price[i] + price[i] * tax;
//     }
//     return total;
// }

const final = (price, tax)=> {
    let total = 0;
    for(let i =0; i<price.length; i++){
        total += price[i] + price[i] * tax;
    }
    return total;
}

console.log(final([20,30,10],.2));


//method

const nameToUp = 'avantika';
console.log(nameToUp);
const upper = nameToUp.toUpperCase();
console.log(upper);

//callbacks & foreach

const myFunc = (callbackFunc) => {
    //do smthg
    let value =50;
    callbackFunc(value);
};

myFunc(function(value){
    console.log(value);
});

const items = ['apple', 'guava', 'mango', 'berry']

// items.forEach(function(item){
//     console.log('something');
// })


items.forEach(item=>{
    console.log(item);
});

// const itemList = item =>{
//   console.log(`heyy ${item}`);
// }
// console.log(itemList)
// items.forEach(function(item,index){
//     console.log(index,item);
// });
items.forEach((item,index)=>{
    console.log(`${index} - the item is ${item}`);
});
// items.forEach(function(item, index){
//     console.log(`${index} - item name is: ${item}`);
// });
//calling backkk
const listItem = (item,index)=>{
    console.log(`${index} - the item is : ${item}`);
};
items.forEach(listItem);




// get a refernce to the 'ul'
// const ul = document.querySelector('.people');
// const people = ['hari', 'jai', 'sam', 'lia', 'jia'];
//  let html = ``;

//  people.forEach(function(person){
//     html += `<li style="color: red">${person}</li>`;
//  });
//  console.log(html);
//  ul.innerHTML = html;

//  ul.innerHTML = html;

//arrow function

const ul = document.querySelector('.people');
const people = ['hari', 'jai', 'sam', 'lia', 'jia'];
 let html = ``;

 people.forEach(person=>{
    html += `<li style="color: red">${person}</li>`;
 });
 console.log(html);
 ul.innerHTML = html;