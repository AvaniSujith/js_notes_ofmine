const sideBar = document.getElementById('side-bar');
const profile = document.getElementById('profile');
const start = document.getElementById('start');
const end = document.getElementById('end');
const submit = document.getElementById('submit');
const input = document.getElementById('inputNum');
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




// version - 4 

function checkNumber(){
    const inputValue = input.value;

    if(isNaN(inputValue) || inputValue === ''){
        alert("Input should be a number.");
        return;
    }
    
    let flag = true;
    for(let i = 2; i<inputValue; i++){
        if(inputValue%i === 0){
            flag = false;
            return;
        }
    }

    if(flag = true){
        console.log("prime")
    }else{
        console.log("not")
    }
}

submit.addEventListener('click', checkNumber);