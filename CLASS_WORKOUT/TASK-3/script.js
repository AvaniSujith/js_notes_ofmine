const continueBtn = document.getElementById("continue-btn");
const shiftBtn = document.getElementById("shift-btn");
const shuffledBtn = document.getElementById("shuffled-btn")



function createSelectionPage(){
    const selectionContainer = document.createElement('div');
    selectionContainer.classList.add('selection-div');
    selectionContainer.innerText = `
    <div class="shift">
        <button class = "btn" id="shift-btn">Normal</button>
    </div>
    <div class="shuffled">
        <button class = "btn" id="shuffled-btn">Shuffled</button>
    </div>
    `
}


function cipherMsg(msg, shift) {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (let i = 0; i < msg.length; i++) {
        let char = msg[i];
        let isLower = false;
        let isUpper = false;
       
        if (lowerCaseLetters.includes(char)) {
            isLower = true;
        } else if (upperCaseLetters.includes(char)) {
            isUpper = true;
        }

        if (isLower || isUpper) {
         
            let letters;
            if (isLower) {
                letters = lowerCaseLetters;
            } else {
                letters = upperCaseLetters;
            }

            let newIndex = (letters.indexOf(char) + shift) % 26;
            result += letters[newIndex];
        } else {
            
            result += char;
        }
    }

    return result;

}



function shuffledCipher(msg){
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    const shuffledLowerCaseLetters = 'qazwsxcedrfvbgtyhnujiokmpl';
    const shuffledUpperCaseLetters = 'QAZWSXCDERFVBGTHYNUJIOKMLP';


    for(let i = 0; i < msg.length; i++){
        let char = msg[i];
        let newCharacter = char;

        if(lowerCaseLetters.includes(char)){
            let index = lowerCaseLetters.indexOf(char);
            newCharacter = shuffledLowerCaseLetters[index];
        }

        else if(upperCaseLetters.includes(char)){
            let index = upperCaseLetters.indexOf(char);
            newCharacter = shuffledUpperCaseLetters[index];
        }

        result += newCharacter;
    }

    return result
}

function createResultPage(){
    
}

continueBtn.addEventListener("click", ()=>{
    createSelectionPage();
});

shiftBtn.addEventListener("click", ()=>{
    cipherMsg();
})

shuffledBtn.addEventListener("click", ()=>{
    shuffledBtn();
})