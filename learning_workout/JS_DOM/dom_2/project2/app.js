// const bulb = document.getElementsByClassName('')
const bulb = document.querySelector('.bulb')

const btn = document.querySelector('button')


var flag = 0
bulb.addEventListener('click', () => {
    if(flag == 0){
        bulb.style.backgroundColor = 'yellow'
        console.log("bulb is on")
        flag = 1
    }else{
        bulb.style.backgroundColor = 'transparent'
        console.log("bulb is off")
        flag = 0
    }
})




