// alert('hello press ok');

// let a='3';
// const a = 3;
// let b='5';
// const b = 5;
// let int(c)= int(a)+int(b);
// const c = a + b;
// console.log(c);
const a = 3;
const b = 5;
const c = a + b;
console.log(c);

// console.log('c')
// console.log(b)
 // let place = wayanad;


 //string
//  console.log('Avani S');

//  let email = 'avanis10119@gamil.com';
//  console.log('email');

 //concate

 let firstName = 'Avani';
 let secondName = 'Sujith';

 let fullName = firstName + ' ' + secondName;
 
 console.log(fullName);
 console.log(fullName.length);
 console.log(fullName.toUpperCase());
//  let fullname=fullName.toUpperCase();
//  console.log(fullname);
 

  let email = 'avanis10119@gamil.com';
 console.log('email');
let index = email.indexOf('@');
console.log(index);

 // character retrieval 

//  console.log('fullName[2]');


 // length
//  console.log(fullName.length);


 //methods

//  console.log(fullName.toUpperCase());
//  console.log(fullName.toLowerCase());

//  let result = firstName.toUpperCase();
//  console.log(result);

// separating words

let names = 'avanisujith';


let newname = names.slice(2,5);

let newnames = names.substr(2,5);

console.log(newname);
console.log(newnames);


// maths

let radius = 20;
const pi = 3.14;

let area = 2 * radius * pi;
console.log(area);
 

let result = radius % 3;
console.log(result);

const x = 10;
const y =  3;
const z = 2;

let result2 = x + y * z**x - x + y ;
console.log(result2);


let like = 10;
like++;
console.log(like);

like--;
console.log(like);

like+= 2;
console.log(like);

like-= 3;
console.log(like);


like*= 2;
console.log(like);

like/= 2;
console.log(like);

let sentence = 'My post is liked by'+ " " + like + ' ' + 'peoples.';
console.log(sentence);


//NaN

console.log(5 * 'hello');

//template string
const nameofme = 'Avani';
const age = 22;
const place = 'wayanad';

let newsentence = `My name is ${nameofme}. Im ${age} years old. Im from ${place}.`;
console.log(newsentence);


let html = `
  <h2> My name is ${nameofme}.</h2>
  <p> Im ${age} years old.</p>
  <p> Im from ${place}.</p>
`;

console.log(html);


let listnames = ['avani', 'siji', 'kunku', 'suji'];
console.log(listnames);
console.log(listnames.length);

console.log(listnames[1]);

// console.log(listnames.concat['jashi']);
let resultname = listnames.concat(['harsh', 'kai']);
console.log(resultname);
let newResult = resultname.concat(['deepth','lia']);
console.log(newResult);

let pushedResult = listnames.push('ken');
console.log(pushedResult);
 pushedResult= listnames.pop();
 console.log(pushedResult);


//  let aging;
let aging = null;
 console.log(aging, aging + 1, `age is ${aging}`);


// booleans
 
console.log(true, false, 'false', 'true');

let emailofme = 'avani@gmail.com'
let isOk = emailofme.includes('@');
console.log(isOk);
let isOKAgain = emailofme.includes('y');
console.log(isOKAgain);

let num = 25;
console.log(num == 33);
console.log(num == 25);
console.log(num != 24 );
console.log(num != 25);
console.log(num >= 33);
console.log(num <= 55);
console.log(num <99);
console.log(num >3);

let compName = 'Avani';
console.log('Name comparison');
console.log(compName == 'avani');
console.log(compName > 'avani');
console.log(compName < 'avani');
console.log(compName > 'gia');
console.log(compName < 'gia');


//strict comparison (different types not equal)

let compNum = 25;
console.log(compNum);
console.log(compNum === 25);
console.log(compNum === '25');
// console.log(compNum != '25');
// console.log(compNum != 25);
console.log(compNum == 25);
console.log(compNum == '25');
// console.log(compNum !== '25')
console.log(compNum !== 25);
console.log(compNum !== '25');

//type conversion
console.log('Type casting')
let score = '45';
console.log(score + 1);
score =Number(score);
console.log(score + 1);


// let scoreType = String(40);
// let scoreType =  Number(40);
// let scoreType = Boolean(40);
// let scoreType = Boolean(-40);
let scoreType = Boolean(0);
console.log(scoreType, typeof scoreType) ;









