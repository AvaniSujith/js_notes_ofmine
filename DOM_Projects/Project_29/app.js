const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0


loveMe.addEventListener('click', (e) =>{
    // console.log('hey')

    if(clickTime === 0){
        clickTime = new Date().getTime()
    }else{
        if((new Date().getTime() - clickTime)< 800){
            // console.log('hello')
            createHeart(e)
            clickTime = 0
        }else{
            // clickTime = new 
            clickTime = new Date().getTime()
        }
    }
})




const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.forEach('fa-heart')

    const x = e.clientX
    const y = e.clientY

    // console.log(x, y)

    const leftOffset =  e.target.OffsetLeft
    const topOffset =  e.target.OffsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`


    loveMe.appendChild(heart)
    times.innerHTML = ++timesClicked

    // console.log(xInside, yInside)



    setTimeout(() => heart.remove(), 1000)

}