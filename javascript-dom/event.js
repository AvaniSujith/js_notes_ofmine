//parents node traversal
// let ul = document.querySelector('ul');

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);


// const html = document.documentElement;
// console.log(html.parentElement);
// console.log(html.parentNode);

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor ='red';
// ul.firstChild.style.backgroundColor ='red';
// const div = document.querySelector('div');
// console.log(div.childNodes);
// console.log(ul.children);
// console.log(ul.previousElementSibling);

// console.log(ul.nextSibling);

// Element.addEventListner('click', function);

// const buttonTwo = document.querySelector('.btn-2');
// function alertBtn(){
//     alert('I love jss');

// }

// buttonTwo.addEventListener('click', alertBtn);


// const newBackgroundColor = document.querySelector('.box-3');
// function changeBgColor(){
//     newBackgroundColor.style.backgroundColor = 'black';
    // newTextColor.style.color = 'white';
// }
// newBackgroundColor.addEventListener('mouseover',changeBgColor);


//next one

// const revealBtn = document.querySelector('.reveal-btn');
// const hiddenContent = document.querySelector('.hidden-content');
// function revealContent(){
//     if(hiddenContent.classList.contains('reveal-btn')){
//         hiddenContent.classList.remove('reveal-btn');

//     }else{
//         hiddenContent.classList.add('reveal-btn')
//     }
// }
// revealBtn.addEventListener('click', revealContent);

//event propagation
// window.addEventListener('click', function(){
//     console.log('Window');

// },true);

// document.addEventListener('click', function(){
//     console.log('Document');
// },true);

// document.querySelector('.div2').addEventListener('click', function(){
//     console.log('DIV 2');
// },{once: true});

// document.querySelector('.div2').addEventListener('click', function(e){
//     e.stopPropagation();
//     console.log('DIV 2');
// },true);

// document.querySelector('.div1').addEventListener('click', function(){
//     console.log('DIV 1');
// }, true);

// document.querySelector('button').addEventListener('click', function(e){
//     console.log(e.target.innerText = 'clicked on');
// },true);





// document.querySelector('#football').addEventListener
// ('click', function(e){
//     console.log('Football is clicked');

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey'
//     }
// });


document.querySelector('#sports').addEventListener
('click', function(e){


console.log(e.target.getAttribute('id') + ' is clicked');
const target = e.target;
if(target.matches('li')){
    target.style.backgroundColor = 'lightgrey';
}

});

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'rugby';
newSport.setAttribute('id', 'rugby');
sports.appendChild(newSport);

// document.querySelector('#basketball').addEventListener
// ('click', function(e){
//     console.log('basketball is clicked');

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey'
//     }
// });

// document.querySelector('#boxing').addEventListener
// ('click', function(e){
//     console.log('boxing is clicked');

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey'
//     }
// });

// document.querySelector('#tennis').addEventListener
// ('click', function(e){
//     console.log('tennis is clicked');

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey'
//     }
// });

// document.querySelector('#golf').addEventListener
// ('click', function(e){
//     console.log('golf is clicked');

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey'
//     }
// });