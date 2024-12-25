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


function checkNumber(){
    submit.addEventListener('click', () => {
        if(isNaN(input) || input === ''){
            alert("Please enter a valid number");
            return false;
        }
        return true;
    })
}

submit.addEventListener('click', () => {
    checkNumber()
})
