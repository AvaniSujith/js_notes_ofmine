//Get element by Id

const heading = document.getElementById('main-heading');
console.log(heading);


//classname

const list = document.getElementsByClassName('list-items');
console.log(list);


//tagname

const listItem = document.getElementsByTagName('li');
console.log(listItem);


//queryselector

const container = document.querySelector('div');
console.log(container);

//query selectorall

const containers = document.querySelectorAll('div');
console.log(containers);


//styling
const title = document.querySelector('#main-heading');
title.style.color = 'red';
console.log(title);

// const listItems = document.querySelectorAll('.list-items');
// listItems.style.fontSize = '2rem';

// for( let i=0; i < listItems.length; i++){
//     listItems[i].style.fontSize = '5rem';
// }

// console.log(listItems);

//creating element

const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li);

//adding element

const firstListItem = document.querySelector('.list-items');
console.log(firstListItem.innerText);
console.log(firstListItem.innerHTML);
console.log(firstListItem.textContent);


li.innerText = 'batman';
li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

const titles = document.querySelector('#main-heading');
console.log(titles.getAttribute('id'));

li.classList.add('list-items');
// li.classList.remove('list-items');

console.log(li.classList.contains('list-items'));


//remove element
li.remove();
