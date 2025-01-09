let defaultTimeDelay = 800;
let isAnimating = false;
let animationTimeOut = [];

function createPyramid(rows){
    const pyramid  = document.getElementById('pyramid');
    pyramid.innerHTML = '';

    for(let i = 0; i< rows; i++){
        const row = document.createElement('div');
        row.className = 'row';

        for(let j = 0; j <= i; j++){
            const circle = document.createElement('div');
            circle.className = 'circle';
            row.appendChild(circle);
        }

        pyramid.appendChild(row);
    }
}

function validateColor(color){
    const temp = document.createElement('div');
    temp.style.color = color;
    return temp.style.color !== '';


}

function clearAllCircles(){
    const circles = document.getElementsByClassName('circle');
    for(let circle of circles){
        circle.style.backgroundColor = 'transparent';
    }
}

function stopAnimation(){
    isAnimating = false;
    animationTimeOut.forEach(timeout => clearTimeout(timeout));
    animationTimeOut = [];
    clearAllCircles();
}


function animation(){
    if(!isAnimating) return;

    const rows = document.getElementsByClassName('row');
    const colorInput = document.getElementById('colorInput').value;
    const delay = parseInt(document.getElementById('delayInput').value) || defaultTimeDelay;
    const color = validateColor(colorInput)? colorInput : 'white';
    let currentRow = 0;

    clearAllCircles();

    function lightUpRow(){
        if(!isAnimating) return;
        if(currentRow < rows.length){
            const circles = rows[currentRow].getElementsByClassName('circle');
            for(let circle of circles){
                circle.style.backgroundColor = color;
            }
        
        }
    }
    
