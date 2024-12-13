const container = document.getElementById('container')
const colors = ['#e74c3c',
                '#8e44ad', 
                '#3498db',
                '#e67e22',
                '#2ecc71' ]

// const colors = [ '#e0e0e0',
//                  '#DDDDDD',
//                  '#fff',
//                  '#000'
// ]


const SQR = 500;
for(let i = 0; i < SQR; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => addColor(square))

    square.addEventListener('mouseout', () => removeColor(square))
    container.appendChild(square)
}


function addColor(element){
    
    const color = getRandomcolor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}


function removeColor(element){
    // addColor.remove()
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}


function getRandomcolor(){
    return colors[Math.floor(Math.random() * colors.length)]

}