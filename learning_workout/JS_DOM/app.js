// //separate js file increases readability of the code.
// // window object - open window in a browser- browser objects listed tgther.
// It consists of all methods and functions in the browser 

// console.log(window);
// window.console.log("hello");

// //DOM - document object model
// // the whole html file gets converted into a special object model which is accessible using javascript.
// these objects are called document 



// console.dir(window.document);
// console.log(window.document)

// //objects---> nodes. DOM is a tree like structure.
// console.log(document.body);
// console.log(document.head);  
// console.dir(document.body.childNodes);
// console.log()                  --- print the Element as it is 
// console.dir()                  --- print the properties and methods along with it 
// ********************************************


//                 DOM TREE STRUCTURE

//                         window  - contains all the object
//                           |
//                         document  - objects are stored as documents
//                           |
//                         html      - code of page
//                           |
//                     |            |
// (title, link,meta) head         body(div, script)



// console.dir(document.body);
// console.log(document.body);

// console.log(document.body.childNodes[1])

// document.body.style.backgroundColor = "green";

// document.body.childNodes[1].innerText = "1234";




// *************************************************

// document.body.style.background = 'black';
// document.body.style.color = 'white'
// document.body.childNodes[1].innerText = "abcd";
// // document.body.h1.innerText = 'abcd';
// // document.body.h1.style.color = 'white';



// // dynamic changes in a website while using it 

// //DOM manipulation

// //access elements
// // 1.selecting using id (unique id given to individual elements)  #id
// let heading = document.getElementById("heading");
// console.log(heading);
// console.dir(heading);


// // 2.selecting using class (same name given to more than onw element. type of grouping.) .className  data retrieved as htmlCollection(similar to array-type)
// let head = document.getElementsByClassName("head");
// console.dir(head);
// console.log(head);

// // 3.selecting using tag name 
// let para = document.getElementsByTagName("p");
// console.dir(para);
// console.log(para);


// // 4.Query selector 
// let firstElement = document.querySelector("p"); //incase of queryselector, . for class , # for id
// always returns the first element 

// console.dir(firstElement);
// console.log(firstElement);

// 5.QuerySElectorAll
// let element = document.querySelectorAll("p"); //not valid for #, returns a node list. (list of nodes available) 
// returns all Element 

// let div = document.querySelectorAll('.name')
// console.log(div)

// console.dir(element);
// console.log(element);


// // PROPERTIES 
// value can be get and it can be updated and changed using properties


// // * TagName 
//  console.log(heading.tagName);

// let first = document.querySelectorAll('.name')
// fetching tagName for the queryselectorAll is invalid it return undefined . /

// let first = document.querySelector('.name');
// console.log(first.tagName)



// // * innerText - returns the parents elements and children nodes .
// // children and parent relation in DOM tree .
// descendatnts are younger generation 
// parent - top level Element
// child - lower Element
// siblings - same level Element
// *******************Firstchild in node returns the firts hcild in tree *******************************

// console.log(body.firstChild)   --- path is incomplete.. fetching body from the document 
// console.log(document.body.firstChild)

// about children 

// console.log(document.querySelector('#colors').children)

// console.log(document.querySelector("div").children);
// // console.log(child)

// console.dir(document.body.firstChild);




// let div = document.querySelector("div");
// console.dir(div);
// console.log(div);

// console.log(div.innerText);



// *textContent -even from hidden elements the content gets visible




// practice
// appending string 
// let append = document.getElementById("practice-heading");
// document.body.h2.innerText = "Hello Javascript from Apna College.";



// version - 2
// let h2 = document.getElementsByTagName("h2");
// console.dir(h2);

// h2.innerText = h2.innerText + " from Apna College students!"



//creating elements

// const head = document.getElementsByTagName('h2');
// const header = document.createElement('h3');


// // 03-12-2024 
// console.log(window);
// window.console.log("helo2")


// let div = document.querySelector('.color')
// console.log(div);
// console.dir(div);


// console.log(div.innerText);

// // innerText - Only pure Text
// // innerHTML - also html content

// console.log(div.innerHTML);




// change the contents of the html page dynamically without changing the html code but by assigning to new value 

// div.innerText = "abc";
// div.innerHTML = `<div> hellooooo </div>`




//textContent 
// retrieve the textual content of hidden elements too





// PRACTICE****************************************************************************


//  Que. create a h2 heading element 'Hello Javascript' 
// Append "from Apna College students" to the text 


// let heading = document.querySelector('h2')

// // heading.innerText = heading + "from Apna College"
// // heading.innerText + "from Apna College"


// heading.innerText = heading.innerText + " from Apna College"; 

// Q2. Create 3 divs with common class name - box.
// access them 
// add some unique text to each of them

// let boxes = document.querySelectorAll('.box');

// // console.log(boxes);


// // console.log(document.body.boxes.firstChild)
// console.log(boxes[0])

// // boxes[0].firstChild.innerHTML = boxes[0].firstChild.innerHTML+ `    ************** - firstchild is already been called since boxes[0] ****************
// // <h2>First DIV contains name</h2>
// // <p>My name is Avani</p>
// // `


// boxes[0].innerHTML += `
// <h2>helloooo</h2>
// `

// boxes[0].innerText += `\nHow are you`


// boxes[1].innerText += `\n Avani`

// boxes[2].innerText += `\n hey`



// // can use for of looop 
// let ind = 1;
// for(box of boxes){
//     box.innerText += `\nnew unique value ${ind}`
//     ind++
// }



// Lesson 2

// attributes are the related additional information about each TimeRanges. Example is Id, class, etc


// // to get attribute value 

// getAttribute(attr)


// //to set attribute val

// setAttribute(attr, value)


// *********************GET ELEMENT ATTRIBUTES**********************

// let div = document.getElementById('box')
// console.log(div)


// let id = div.getAttribute('id')
// console.log(id)


// let name = div.getAttribute('name')
// console.log(name)


// let para = document.querySelector('.paragraph')
// console.log(para)

// // let parag = document.querySelector('p')
// // console.log(parag)


// let val = para.getAttribute('class')
// console.log(val)

// // ***********************SET ELEMENT ATTRIBUTES***********************


// para.setAttribute('class', 'new-name')


// let div = document.getElementById('box');
// div.style.backgroundColor = 'lightgreen'


// div.style.fontSize ='26px'

// div.innerText = "hello"

// div.style.visibility = 'hidden'



// how to insert and delete new Element


// 1-- create element
// 2 -- add values into it 
// 3 -- add element


// create element 
// let el = document.createElement("div")

//insert element
// 1) Node.append(el)  ---------at the end of the specified node it is placed
// 2) Node.prepend(el)  --------at start of a specified node
// 3) Node.before(el)   --------at the outside, Begining of the node
// 4) Node.after(el)    --------at outside, end of the node


//delete element
// Node.remove()




// ********************CREATE ELEMENT************************

// let newBtn = document.createElement("button");
// newBtn.innerText = 'click';
// console.log(newBtn)


// let div = document.getElementById('box');
// // div.append(newBtn);

// // div.prepend(newBtn)

// // div.before(newBtn)

// div.after(newBtn)



// let newHeading = document.createElement("h1")
// newHeading.innerHTML = `<h2>My Page</h2>`


// let div = document.getElementById('box')
//  div.prepend(newHeading)


// let para = document.getElementById('para')
// para.remove()
// newHeading.remove();


// appendChild, removeChild 


// Practice 

// Q1. Create a new button Element. 
// Give it a text "click me", backgriund color of red & text color of white.
// insert the button as the frist Element inside the body tag.



let btn = document.createElement('button');
btn.innerText = "click me"
btn.style.backgroundColor = 'red'
btn.style.color = 'white'

document.body.prepend(btn)


// Q2. Create a <p> tag in html, give it a class & some styling. 
// Now create a new class in css and try to append this class to tht <p> element.




let para = document.querySelector('.content')
console.log(para.getAttribute('class'))

// para.setAttribute("class", "newClass")   --- overwrites the class completely thus we use classList.

// ****************classlist**************

para.classList.add("newClass")

console.log(para.classList)


para.classList.remove('content')

