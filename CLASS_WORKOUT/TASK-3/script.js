// const continueBtn = document.getElementById("continue-btn");
// const shiftBtn = document.getElementById("shift-btn");
// const shuffledBtn = document.getElementById("shuffled-btn")
// const container = document.getElementById("Container");


// function createSelectionPage(){
//     const selectionContainer = document.createElement('div');
//     selectionContainer.classList.add('selection-div');
//     selectionContainer.innerText = `
//     <div class="shift">
//         <button class = "btn" id="shift-btn">Normal</button>
//     </div>
//     <div class="shuffled">
//         <button class = "btn" id="shuffled-btn">Shuffled</button>
//     </div>
//     `
//     container.appendChild(selectionContainer);
// }


// function cipherMsg(msg, shift) {
//     const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
//     const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let result = '';

//     for (let i = 0; i < msg.length; i++) {
//         let char = msg[i];
//         let isLower = false;
//         let isUpper = false;
       
//         if (lowerCaseLetters.includes(char)) {
//             isLower = true;
//         } else if (upperCaseLetters.includes(char)) {
//             isUpper = true;
//         }

//         if (isLower || isUpper) {
         
//             let letters;
//             if (isLower) {
//                 letters = lowerCaseLetters;
//             } else {
//                 letters = upperCaseLetters;
//             }

//             let newIndex = (letters.indexOf(char) + shift) % 26;
//             result += letters[newIndex];
//         } else {
            
//             result += char;
//         }
//     }

//     return result;

// }



// function shuffledCipher(msg){
//     const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
//     const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let result = '';

//     const shuffledLowerCaseLetters = 'qazwsxcedrfvbgtyhnujiokmpl';
//     const shuffledUpperCaseLetters = 'QAZWSXCDERFVBGTHYNUJIOKMLP';


//     for(let i = 0; i < msg.length; i++){
//         let char = msg[i];
//         let newCharacter = char;

//         if(lowerCaseLetters.includes(char)){
//             let index = lowerCaseLetters.indexOf(char);
//             newCharacter = shuffledLowerCaseLetters[index];
//         }

//         else if(upperCaseLetters.includes(char)){
//             let index = upperCaseLetters.indexOf(char);
//             newCharacter = shuffledUpperCaseLetters[index];
//         }

//         result += newCharacter;
//     }

//     return result
// }

// function createResultPage(){
//     const resultPage = document.createElement('div')
//     resultPage.classList.add('result-block');
//     resultPage.innerHTML = `
    
//             <div class="result-block">
//                 <p></p>
//             </div>
        
//             <div class="ceaser-msg">
//                 <label for="input">Enter the message:</label>
//                 <input type="text" id="input">
//                 <label for="shifting">Enter how many shifts:</label>
//                 <input type="number" id="shifting">
//             </div>
        
            
//             <div class="ceaser-img">
//                 <img src="assets/vecteezy_a-painting-of-a-man-with-curly-hair_53205250.jpg" alt="ceaser">
//             </div>
        
        
//             <div class="soldier-msg">
//                 <div class="soldier-text">Soldier Message</div>
//                 <div class="soldier-img">
//                     <img src="assets/terracotta-army_984114.png" alt="soldiers">
//                 </div>
//             </div>
//     `
//     container.appendChild(resultPage)
    
// }

// function shuffledResultPage(){
//     const resultPage = document.createElement('div')
//     resultPage.classList.add('result-block');
//     resultPage.innerHTML = `
    
//             <div class="result-block">
//                 <p></p>
//             </div>
        
//             <div class="ceaser-msg">
//                 <label for="input">Enter the message:</label>
//                 <input type="text" id="input">
//             </div>
        
            
//             <div class="ceaser-img">
//                 <img src="assets/vecteezy_a-painting-of-a-man-with-curly-hair_53205250.jpg" alt="ceaser">
//             </div>
        
        
//             <div class="soldier-msg">
//                 <div class="soldier-text">Soldier Message</div>
//                 <div class="soldier-img">
//                     <img src="assets/terracotta-army_984114.png" alt="soldiers">
//                 </div>
//             </div>
//     `
//     container.appendChild(resultPage)
// }

// continueBtn.addEventListener("click", ()=>{
//     createSelectionPage();
// });

// shiftBtn.addEventListener("click", ()=>{
//     cipherMsg();
//     resultPage()
// })

// shuffledBtn.addEventListener("click", ()=>{
//     shuffledBtn();
//     shuffledResultPage();
// })

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("container");
    const continueBtn = document.getElementById("continue-btn");

    function clearContainer() {
        container.innerHTML = '';
    }

    function handleNormalCipher() {
        clearContainer();
        
        const resultPage = `
            <div class="result-block">
                <p id="result-text"></p>
            </div>
            <div class="ceaser-msg">
                <label for="input">Enter the message:</label>
                <input type="text" id="input">
                <label for="shifting">Number of shifts:</label>
                <input type="number" id="shifting">
                <button id="encrypt-normal">Encrypt</button>
            </div>
            <div class="ceaser-img">
                <img src="assets/vecteezy_a-painting-of-a-man-with-curly-hair_53205250.jpg" alt="ceaser">
            </div>
            <div class="soldier-msg">
                <div class="soldier-img">
                    <img src="assets/terracotta-army_984114.png" alt="soldiers">
                </div>
            </div>
            <button id="back-to-selection">Back</button>
        `;
        
        container.innerHTML = resultPage;

        const encryptBtn = document.getElementById("encrypt-normal");
        const backBtn = document.getElementById("back-to-selection");
        
        encryptBtn.addEventListener("click", () => {
            const message = document.getElementById("input").value;
            const shift = parseInt(document.getElementById("shifting").value) || 0;
            const result = cipherMsg(message, shift);
            document.getElementById("result-text").textContent = result;
        });

        backBtn.addEventListener("click", createSelectionPage);
    }


     const modal = document.getElementById("instruction-modal");
    const instructionBtn = document.getElementById("instruction-btn");
    const closeBtn = document.querySelector(".close-btn");

    instructionBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });



    function handleShuffledCipher() {
        clearContainer();
        
        const shuffledPage = `
            <div class="result-block">
                <p id="result-text"></p>
            </div>
            <div class="ceaser-msg">
                <label for="input">Enter the message:</label>
                <input type="text" id="input">
                <button id="encrypt-shuffled">Encrypt</button>
            </div>
            <div class="ceaser-img">
                <img src="assets/vecteezy_a-painting-of-a-man-with-curly-hair_53205250.jpg" alt="ceaser">
            </div>
            <div class="soldier-msg">
                <div class="soldier-img">
                    <img src="assets/terracotta-army_984114.png" alt="soldiers">
                </div>
            </div>
            <button id="back-to-selection">Back</button>
        `;
        
        container.innerHTML = shuffledPage;

        const encryptBtn = document.getElementById("encrypt-shuffled");
        const backBtn = document.getElementById("back-to-selection");
        
        encryptBtn.addEventListener("click", () => {
            const message = document.getElementById("input").value;
            const result = shuffledCipher(message);
            document.getElementById("result-text").textContent = result;
        });

        backBtn.addEventListener("click", createSelectionPage);
    }

    function createSelectionPage() {
        clearContainer();
        
        const selectionPage = `
            <div class="selection-div">
                <div class="shift">
                    <button class="btn" id="shift-btn">Normal</button>
                </div>
                <div class="shuffled">
                    <button class="btn" id="shuffled-btn">Shuffled</button>
                </div>
            </div>
        `;
        
        container.innerHTML = selectionPage;

        const shiftBtn = document.getElementById("shift-btn");
        const shuffledBtn = document.getElementById("shuffled-btn");
        
        shiftBtn.addEventListener("click", handleNormalCipher);
        shuffledBtn.addEventListener("click", handleShuffledCipher);
    }

    function cipherMsg(msg, shift) {
        const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';

        for (let i = 0; i < msg.length; i++) {
            let char = msg[i];
            
            if (lowerCaseLetters.includes(char)) {
                let newIndex = (lowerCaseLetters.indexOf(char) + shift) % 26;
                if (newIndex < 0) newIndex += 26;
                result += lowerCaseLetters[newIndex];
            } else if (upperCaseLetters.includes(char)) {
                let newIndex = (upperCaseLetters.indexOf(char) + shift) % 26;
                if (newIndex < 0) newIndex += 26;
                result += upperCaseLetters[newIndex];
            } else {
                result += char;
            }
        }

        return result;
    }

    function shuffledCipher(msg) {
        const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const shuffledLowerCase = 'qazwsxcedrfvbgtyhnujiokmpl';
        const shuffledUpperCase = 'QAZWSXCDERFVBGTHYNUJIOKMLP';
        let result = '';

        for (let i = 0; i < msg.length; i++) {
            let char = msg[i];
            
            if (lowerCaseLetters.includes(char)) {
                let index = lowerCaseLetters.indexOf(char);
                result += shuffledLowerCase[index];
            } else if (upperCaseLetters.includes(char)) {
                let index = upperCaseLetters.indexOf(char);
                result += shuffledUpperCase[index];
            } else {
                result += char;
            }
        }

        return result;
    }

    continueBtn.addEventListener("click", createSelectionPage);
});