// const panels = document.querySelectorAll('.panel')
// // console.log(panel);
// // console.log(panel[1]);

// panels.forEach((panel) =>{
//     panel.addEventListener('click', ()=>{
//         // console.log(123);
//         removeActiveClasses()
//         panel.classList.add('active');
//     })
// })


// function removeActiveClasses(){
//     panels.forEach(panel =>{
//         panel.classList.remove('active');
//     })
// }



const panels = document.querySelectorAll('.panel');

panels.forEach(panel =>{
    panel.addEventListener('click', ()=>{
        removeActiveClasses();
        panel.classList.add('active');
    })
});

function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    });
}