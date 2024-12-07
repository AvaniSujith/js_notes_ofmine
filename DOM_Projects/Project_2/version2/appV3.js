const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const circles = document.querySelectorAll('.circle')

// console.log(circles.length)
// const circlez = document.getElementsByClassName('.circle')
// console.log(circles)
// console.log(circlez)

// circles.forEach((circle, index) =>{
//     console.log(`${circle} = ${index}`);
// })

let currentActive = 0;

function circleUpdate(){
    circles.forEach((circle, index) =>{
        if(index <= currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
}

function buttonUpdate(){
    prev.disabled = currentActive === 0;
    next.disabled = currentActive === circles.length - 1
}

prev.addEventListener('click', ()=>{
    if(currentActive > 0){
        currentActive--;
    }
    circleUpdate()
    buttonUpdate()
})

next.addEventListener('click', ()=>{
    if(currentActive < circles.length - 1){
        currentActive++;
    }
    circleUpdate()
    buttonUpdate()
})

