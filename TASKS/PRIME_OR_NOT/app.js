const sideBar = document.getElementById('side-bar');
const profile = document.getElementById('profile');
const start = document.getElementById('start');
const end = document.getElementById('end');
const submit = document.getElementById('submit');
const input = document.getElementById('inputNum');
// let inputValue = input.value;
const winPage = document.getElementById('win');
const lossPage = document.getElementById('loss');
const homePage = document.getElementById('container');

sideBar.addEventListener('mouseover', () => {
    start.style.display = "flex"
})

sideBar.addEventListener('mouseout', () => {
    start.style.display = 'none'
})

profile.addEventListener('mouseover', () =>{
    end.style.display = "flex"
})

profile.addEventListener('mouseout', () =>{
    end.style.display = 'none'
})


// version-1 

// function checkNumber(){
//     submit.addEventListener('click', () => {
//         if(isNaN(input) || input === ''){
//             alert("Please enter a valid number");
//             return false;
//         }
//         return true;
//     })
// }

// submit.addEventListener('click', () => {
//     checkNumber()
// })

// version-2 

// function checkNumber(){
//     if(isNaN(inputValue) || inputValue === ''){
//         alert('Input only accepts numbers.');
//     }else{

//         for(let i = 2; i < inputValue; i++){
//             if(inputValue%i === 0){
//                 console.log('Not prime')
//             }
//         }
//         console.log('prime')
//     }


// }


// version-3 


// function checkNumber(){
//     const inputValue = input.value;
//     // let flag = true;

//     for(let i = 2; i < inputValue; i++){
//         if(inputValue%i !== 0){
//             return "Prime";
//         }
//     }
//     return "Not";

// }

// submit.addEventListener('click', ()=>{
//     console.log(checkNumber)
// })

// version - 4 

// function checkNumber(){
//     const inputValue = input.value;

//     if(isNaN(inputValue) || inputValue === ''){
//         alert("Input should be a number.");
//         return;
//     }
    
//     let flag = true;
//     for(let i = 2; i<inputValue; i++){
//         if(inputValue%i === 0){
//             flag = false;
//             return;
//         }
//     }

//     if(flag = true){
//         console.log("prime")
//     }else{
//         console.log("not")
//     }
// }

// submit.addEventListener('click', checkNumber);

// version - 5 ********* CORRECT OUTPUT

// function checkNumber(){
//     const inputValue = input.value;

//     if(isNaN(inputValue) || inputValue === ''){
//         alert("Input should be a number.");
//         return;
//     }
    
//     let flag = true;
//     for(let i = 2; i<inputValue; i++){
//         if(inputValue%i === 0){
//             flag = false;
//             break;
//         }
//     }

//     if(flag === true){
//         console.log("prime")
//     }else{
//         console.log("not")
//     }
// }

// submit.addEventListener('click', checkNumber);

// verion - 6

function checkNumber(){
    const inputValue = parseInt(input.value);

    if(isNaN(inputValue) || inputValue === '' || inputValue <= 1){
        alert("Input should be a number and greater than 1.");
        return;
    }

    let flag = true;
    for(let i = 2; i < inputValue; i++){
        if(inputValue%i === 0){
            flag = false;
            break;
        }
    }

    if(flag === true){
        homePage.style.display = 'none'
        lossPage.style.display = 'none'
        winPage.style.display = 'flex'
        document.querySelector('.prime-page h3').innerText = `${inputValue} is a Prime Number!`
    }else{
        homePage.style.display = 'none'
        lossPage.style.display = 'flex'
        winPage.style.display = 'none'
        document.querySelector('.not-prime-page h3').innerText = `${inputValue} is Not a prime Number!`
    }
}
submit.addEventListener('click', checkNumber)