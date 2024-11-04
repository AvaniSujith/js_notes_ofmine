// const para = document.querySelector('.error');
// console.log(para);

// const para = document.querySelector('div.error');
// console.log(para);



// const para = document.querySelector('body > div:nth-child(2) > p:nth-child(2)');
// console.log(para);

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(paras);
// });


// const errors = document.querySelectorAll('.error');
// console.log(errors);


// console.log(paras[0]);

//fetch element using ID
// const title = document.getElementById('page-title');
// console.log(title);

//fecthcing element by class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);


// errors.forEach(error => {
//     console.log(error);
// });

// const paras =document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

//change content of html 

// const change = document.querySelector('p');
// console.log(change.innerText);
// change.innerText ='hellooo, how are you ?'


// const paras = document.querySelectorAll('p');
// paras.forEach(change =>{
//     console.log(change.innerText);
//     change.innerText += 'new text';
// })



// const para = document.querySelector('p');
// const paras = document.querySelectorAll('p');
// const content = document.querySelector('.content');
// console.log(content.innerHTML);
//  content.innerHTML = '<h2>HEllo haiii how are you</h2>';
// content.innerHTML += '<h2>HEllo haiii how are you</h2>';

// const people = ['hari','ram','lia','kia'];
// people.forEach(person => {
//     content.innerHTML += `<p> ${person}</p>`;
// });


// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// console.log('href', 'https://www.wikipedia.com');
// link.innerText = 'The wikipedia website';

// const msg = document.querySelector ('p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');
// msg.setAttribute('style', 'color:green');

// const title = document.querySelector('h1');
// title.setAttribute('style', 'margin:50px;');

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'red';
// title.style.fontSize = '60px';

//remove styling

// title.style.margin ='';




//changing styles

const content = document.querySelector('p');
console.log(content.classList);
content.classList.add('error');
content.classList.remove('error');

