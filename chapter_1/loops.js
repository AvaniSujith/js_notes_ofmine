//for loop

let employee = ['ansar','midun','hridya','alia','anjali','ram'];
 
for(let i=0; i<employee.length; i++){
    console.log('Employee no: ', i);
    console.log('employees:', employee[i]);
}



for(let i=0; i<5; i++){
    console.log('in loop:',i);
}
console.log('loop finished');


const names = ['shaun', 'harly', 'marley'];
for(let i = 0; i<names.length; i++)
{
    // console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

//while loop

let i=0;
while(i < 5){
    console.log('In loop: ',i);
    i++;
}

const naming = ['shaun', 'harly', 'marley'];
let j =0;
while(j < naming.length){
    console.log(naming[j]);
    j++;
}


//do-while loop

let y = 6;
// while(y < 6){
//     console.log('Value of i is: ', y);
//     y++;
// }

do{
    console.log('result is ',y);
}
while(y<6);

// If statement

const password = 'pasoioijijioijoi'

// if(password.length >8){
//     console.log('password strong enough');

// }else{
//     console.log('password too short');
// }

if(password.length >= 12 && password.includes('@')){
    console.log('password is very strong enough')
}
else if(password.length >=8 || password.includes('@') && password.length >=5)
    // else if(password.length >= 8)
// else if(password.includes('@') && password.length >=5)
{
    console.log('Password is strong');
    
}
else{
    console.log('password not strong');

}




//logical NOT

let user = false;

if(!user){
    console.log('you must be logged into to continue')
}

console.log(!true);
console.log(!false);




const score = [50, 25, 0, 30, 100, 20, 10];
for(let i=0; i < score.length; i++){
 
    if(score[i] === 0){
        continue;
    }
    console.log('your score: ', score[i]);
    if(score[i] === 100){
        console.log('congrats on top score');
        break;
    }
}

// switch case comparison with if statement

const grade = 'A'

// using if 

if(grade === 'A'){
    console.log('You got an A grade');
    // break;
}else if(grade === 'B'){
    console.log('You got a B grade');
}else if(grade === 'C'){
    console.log('You got a C grade');
}else if(grade === 'D'){
    console.log('You got a D grade');
}
else{
    console.log('Invalid grade')
}

// using switch 


switch(grade){
    case 'A':
        console.log('YOu got an A grade');
        break;
    case 'B':
        console.log('You get a B grade');
        break;
    case 'C':
        console.log('You got a C grade');
        break;
    case 'D':
        console.log('You got a D grade');
        break;
    default:
        console.log('Invalid grade');
        break;

}


