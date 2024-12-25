const sideBar = document.getElementById('side-bar');
const profile = document.getElementById('profile');
const start = document.getElementById('start');
const end = document.getElementById('end');
const submit = document.getElementById('submit');
const input = document.getElementById('inputNum');
const winPage = document.getElementById('win');
const lossPage = document.getElementById('loss');
const homePage = document.getElementById('container');
// const page = document.querySelector('main')
const primePage = document.querySelector('.prime-page');
const nonPrimePage = document.querySelector('.not-prime-page');
const emojis = [ '😔'];
const emojiContainer = document.getElementById('emoji-shower');
const backBtns = document.querySelectorAll('#back-btn');

sideBar.addEventListener('mouseenter', () => {
    // start.style.display = "flex"
    start.classList.add('active');

})

sideBar.addEventListener('mouseleave', () => {
    // start.style.display = 'none'
    start.classList.remove('active');
})

profile.addEventListener('mouseenter', () =>{
    // end.style.display = "flex"
    end.classList.add('active');
})

profile.addEventListener('mouseleave', () =>{
    // end.style.display = 'none';  
    end.classList.remove('active');
})

function itsPrime(){
    confetti({
        particleCount: 900,
        spread: 120,
        origin: {x: 0.5, y:0.5},
        colors: ['#FF007A', '#7A00FF', '#00FF7A', '#FFD700', '00D4FF'],
    });
}

// function notPrime(){
//     confetti({
//         particleCount: 900,
//         spread: 120,
//         origin: {x: 0.5, y:0.5},
//         colors: ['😢', '😔', '😭', '😞'],
//     });
// }

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.className = 'rain-emoji';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    
    emoji.style.left = Math.random() * 90 + 5 + '%';
    emoji.style.fontSize = Math.random() * 20 + 25 + 'px';
    emoji.style.animationDelay = Math.random() * 3 + 's';
    
    emojiContainer.appendChild(emoji);
    
    emoji.addEventListener('animationend', () => {
        emoji.remove();
    });
}

function startShower(){
    emojiContainer.innerHTML = ''

    for(let i = 0; i < 15; i++){
        setTimeout(() => createEmoji(), i * 200)
    }

    const rainInterval = setInterval(createEmoji, 400)

    setTimeout(() => {
        clearInterval(rainInterval);
    }, 9000);
}

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
        itsPrime()
        primePage.style.backgroundImage = 'linear-gradient(to right, #ccffcc, #e6ffe6, #99e699)'

    }else{
        homePage.style.display = 'none'
        lossPage.style.display = 'flex'
        winPage.style.display = 'none'
        document.querySelector('.not-prime-page h3').innerText = `${inputValue} is Not a prime Number!`
        // setInterval(createEmojis, 300);
        nonPrimePage.style.backgroundImage = 'linear-gradient(to right, #ffcccc, #ffe6e6, #e69999) '

        // const rainInterval = setInterval(createEmoji, 300);

        // setTimeout(() => {
        //     clearInterval(rainInterval);
        // }, 9000)

        startShower();
    }
}
submit.addEventListener('click', checkNumber)


backBtns.forEach(backBtn => {
    backBtn.addEventListener('click', ()=>{
        // homePage.style.display = 'flex';
        // winPage.style.display = 'none';
        // lossPage.style.display = 'none';
        // input.value = '';
        window.location.reload();
    })
})

input.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter'){
        checkNumber()
    }
})