// const boxes = document.getElementsByClassName('box');
// const boxez = document.querySelectorAll('.box')
// console.log(boxes)
// console.log(boxez)

// boxes.addEventListener('click', () => div.classList.add('show')); 


// window.addEventListener('scroll', checkBoxes)
// checkBoxes()

// function checkBoxes(){
//     const triggerBottom = window.innerHeight / 5 * 4

//     boxes.forEach(box => {
//         const boxTop = box.getBoundingClientRect().boxTop

//         if(boxTop < triggerBottom){
//             box.classList.add('show')
//         }else{
//             box.classList.remove('show')
//         }
//     });
// }

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}


