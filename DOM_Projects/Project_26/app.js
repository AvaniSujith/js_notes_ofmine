const pageContainer = document.querySelector('.container')

const slideLeft = document.querySelector('.left-side')

const slideRight = document.querySelector('.right-side')

const upBtn = document.querySelector('.upward-btn')

const downBtn = document.querySelector('.downward-btn')

const slidesLength = slideRight.querySelectorAll('div').length;

// console.log(slidesLength)

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;


upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = pageContainer.clientHeight;
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0
        }
    }else if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}

