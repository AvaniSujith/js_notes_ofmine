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




function checkNumber(){
    const inputValue = input.value;
    // let flag = true;

    for(let i = 2; i < inputValue; i++){
        if(inputValue%i !== 0){
            return "Prime";
        }
    }
    return "Not";

}

submit.addEventListener('click', ()=>{
    console.log(checkNumber)
})
