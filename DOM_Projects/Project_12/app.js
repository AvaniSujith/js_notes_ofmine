// const buttons = document.querySelectorAll('.faq-toggle');

// buttons.forEach((button) => {
//     button.addEventListener('click', () =>{

//     })
// })


const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})