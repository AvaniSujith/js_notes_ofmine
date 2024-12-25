const sideBar = document.getElementById('side-bar');
const profile = document.getElementById('profile');
const start = document.getElementById('start');
const end = document.getElementById('end');
const submit = document.getElementById('submit');
const input = document.getElementById('inputNum');
let inputValue = input.value;
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


version-2 

function checkNumber(){
    if(isNaN(inputValue) || inputValue === ''){
        alert('Input only accepts numbers.');
    }else{

        for(let i = 2; i < inputValue; i++){
            if(inputValue%i === 0){
                console.log('Not prime')
            }
        }
        console.log('prime')
    }


}