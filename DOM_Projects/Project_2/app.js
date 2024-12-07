// const circles = document.getElementsByClassName(".circle");
const circles = document.querySelectorAll('.circle');
const previous = document.querySelector('#prev');
const next = document.querySelector('#next');
const progress = document.getElementById('progress');


let currentActive = 1;

next.addEventListener('click', ()=>{
    currentActive++

    if(currentActive > circles.length){
        currentActive = circles.length;
    }

    // console.log(currentActive);
    update()
});


previous.addEventListener('click', ()=>{
    currentActive--

    if(currentActive < 1){
        currentActive = 1;
    }

    // console.log(currentActive);
    update()
});

function update(){
    circles.forEach((circle, index)=>{
        if(currentActive > index){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active')
        }
            
    })

    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if(currentActive === 1){
        previous.disabled = true;
    }else if(currentActive === circles.length){
        next.disabled = true;
    }else{
        previous.disabled = false;
        next.disabled = false;
    }

    
}