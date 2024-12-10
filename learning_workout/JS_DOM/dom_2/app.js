// DOM 

// 1.Selection of element 
// 2.Changing html   -- innerHTML
// 3.Changing CSS 
// 4.Event listener 

const on = document.querySelector('button');
const bulb = document.querySelector('.bulb')


let count = 0
on.addEventListener('click', () => {
    // bulb.style.backgroundColor = '#000'
    count++
    // console.log(count)



    if(count%2 !== 0){
        bulb.style.backgroundColor = '#000';
    }else{
        bulb.style.backgroundColor = 'yellow'
        // bulb.style.backgroundColor = 'transparent'

    }
    

})

// console.log(count)

// NODELIST************************ similar to array.
