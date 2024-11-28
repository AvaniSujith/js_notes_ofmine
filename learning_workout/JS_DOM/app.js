// //separate js file increases readability of the code.
// // window object - open window in a browser- browser objects listed tgther.

// console.log(window);
// window.console.log("hello");

// //DOM - document object model
// // the whole html file gets converted into a special object model which is accessible using javascript.


// console.dir(window.document);
// console.log(window.document)
 
// //objects---> nodes. DOM is a tree like structure.
// console.log(document.body);
// console.log(document.head);
// console.dir(document.body.childNodes);

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


// // 2.selecting using class (same name given to more than onw element. type of grouping.) .className  data retrieved as htmlCollection(array-type)
// let head = document.getElementsByClassName("head");
// console.dir(head);
// console.log(head);

// // 3.selecting using tag name 
// let para = document.getElementsByTagName("p");
// console.dir(para);
// console.log(para);


// // 4.Query selector 
// let firstElement = document.querySelector("p"); //incase of queryselector, . for class , # for id
// console.dir(firstElement);
// console.log(firstElement);

// let element = document.querySelectorAll("p"); //not valid for #
// console.dir(element);
// console.log(element);


// // PROPERTIES

// // * TagName 
//  console.log(heading.tagName);

// // *innerText - returns the parents elements and child node
// // children and parent relation in DOM tree 

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
let h2 = document.getElementsByTagName("h2");
console.dir(h2);

h2.innerText = h2.innerText + " from Apna College students!"






