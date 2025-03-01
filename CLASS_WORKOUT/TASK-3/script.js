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
    
    // Set up instruction modal
    const instructionBtn = document.getElementById("instruction-btn");
    const instructionModal = document.getElementById("instruction-modal");
    const closeBtn = document.querySelector(".close-btn");
    
    if(instructionBtn) {
        instructionBtn.addEventListener("click", () => {
            instructionModal.style.display = "block";
        });
    }
    
    if(closeBtn) {
        closeBtn.addEventListener("click", () => {
            instructionModal.style.display = "none";
        });
    }
    
    // Close modal if clicked outside
    window.addEventListener("click", (e) => {
        if (e.target === instructionModal) {
            instructionModal.style.display = "none";
        }
    });

    function clearContainer() {
        container.innerHTML = '';
    }

    function handleNormalCipher() {
        clearContainer();
        
        const resultPage = `
            <div class="content-layout">
                <div class="result-block">
                    <p id="result-text"></p>
                </div>
                <div class="input-section">
                    <label for="input">Enter the message:</label>
                    <input type="text" id="input">
                    <label for="shifting">Number of shifts:</label>
                    <input type="number" id="shifting" min="1" max="25" value="3">
                    <button id="encrypt-normal">Encrypt</button>
                </div>
                <div class="bottom-images">
                    <div class="ceaser-img">
                        <img src="assets/vecteezy_a-painting-of-a-man-with-curly-hair_53205250.jpg" alt="ceaser">
                        <div class="dialogue-box caesar-dialogue"></div>
                    </div>
                    <div class="soldier-msg">
                        <img src="assets/terracotta-army_984114.png" alt="soldiers">
                        <div class="dialogue-box soldier-dialogue"></div>
                    </div>
                </div>
                <div class="animation-line"></div>
                <div class="control-buttons">
                    <button id="back-to-selection">Back</button>
                    <button id="decrypt-btn">Decrypt</button>
                </div>
            </div>
        `;
        
        container.innerHTML = resultPage;

        const encryptBtn = document.getElementById("encrypt-normal");
        const backBtn = document.getElementById("back-to-selection");
        const decryptBtn = document.getElementById("decrypt-btn");
        let currentMessage = '';
        let currentShift = 0;
        let isNormalCipher = true;
        
        encryptBtn.addEventListener("click", () => {
            const message = document.getElementById("input").value;
            if (!message.trim()) {
                alert("Please enter a message to encrypt");
                return;
            }
            
            const shift = parseInt(document.getElementById("shifting").value) || 3;
            
            // Validate shift is between 1-25
            if (shift < 1 || shift > 25) {
                alert("Please enter a shift value between 1 and 25");
                return;
            }
            
            currentMessage = message;
            currentShift = shift;
            const result = cipherMsg(message, shift);
            document.getElementById("result-text").textContent = result;
            
            // Reset dialogue boxes
            document.querySelector('.caesar-dialogue').style.display = 'none';
            document.querySelector('.soldier-dialogue').style.display = 'none';
            document.querySelector('.animation-line').style.display = 'none';
        });

        decryptBtn.addEventListener("click", () => {
            const encryptedText = document.getElementById("result-text").textContent;
            if (!encryptedText) {
                alert("Please encrypt a message first!");
                return;
            }

            const caesarDialogue = document.querySelector('.caesar-dialogue');
            const soldierDialogue = document.querySelector('.soldier-dialogue');
            const animationLine = document.querySelector('.animation-line');

            // Show Caesar's dialogue
            caesarDialogue.textContent = encryptedText;
            caesarDialogue.style.display = 'block';

            // Get proper positioning for animation line
            const caesarBox = document.querySelector('.ceaser-img');
            const soldierBox = document.querySelector('.soldier-msg');
            
            // Get more accurate positioning using getBoundingClientRect
            const caesarRect = caesarBox.getBoundingClientRect();
            const soldierRect = soldierBox.getBoundingClientRect();
            const containerRect = document.querySelector('.content-layout').getBoundingClientRect();
            
            // Calculate positions relative to container
            const containerTop = containerRect.top;
            const containerLeft = containerRect.left;
            
            // Set position based on responsive layout
            if (window.innerWidth <= 768) {
                // For mobile: horizontal line in the middle
                animationLine.style.display = 'block';
                animationLine.style.width = '80%';
                animationLine.style.left = '10%';
                animationLine.style.top = (caesarRect.bottom - containerTop + 20) + 'px';
            } else {
                // For desktop: line connecting the images
                animationLine.style.display = 'block';
                animationLine.style.left = (caesarRect.right - containerLeft) + 'px';
                animationLine.style.top = (caesarRect.top + caesarRect.height/2 - containerTop) + 'px';
                animationLine.style.width = (soldierRect.left - caesarRect.right) + 'px';
            }

            // Show soldier's dialogue after delay
            setTimeout(() => {
                const decryptedText = cipherMsg(encryptedText, -currentShift);
                soldierDialogue.textContent = decryptedText;
                soldierDialogue.style.display = 'block';
            }, 1000);
        });

        backBtn.addEventListener("click", createSelectionPage);
    }

    function handleShuffledCipher() {
        clearContainer();
        
        const shuffledPage = `
            <div class="content-layout">
                <div class="result-block">
                    <p id="result-text"></p>
                </div>
                <div class="input-section">
                    <label for="input">Enter the message:</label>
                    <input type="text" id="input">
                    <button id="encrypt-shuffled">Encrypt</button>
                </div>
                <div class="bottom-images">
                    <div class="ceaser-img">
                        <img src="assets/vecteezy_a-painting-of-a-man-with-curly-hair_53205250.jpg" alt="ceaser">
                        <div class="dialogue-box caesar-dialogue"></div>
                    </div>
                    <div class="soldier-msg">
                        <img src="assets/terracotta-army_984114.png" alt="soldiers">
                        <div class="dialogue-box soldier-dialogue"></div>
                    </div>
                </div>
                <div class="animation-line"></div>
                <div class="control-buttons">
                    <button id="back-to-selection">Back</button>
                    <button id="decrypt-btn">Decrypt</button>
                </div>
            </div>
        `;
        
        container.innerHTML = shuffledPage;

        const encryptBtn = document.getElementById("encrypt-shuffled");
        const backBtn = document.getElementById("back-to-selection");
        const decryptBtn = document.getElementById("decrypt-btn");
        let currentMessage = '';
        let isNormalCipher = false;
        
        encryptBtn.addEventListener("click", () => {
            const message = document.getElementById("input").value;
            if (!message.trim()) {
                alert("Please enter a message to encrypt");
                return;
            }
            
            currentMessage = message;
            const result = shuffledCipher(message);
            document.getElementById("result-text").textContent = result;
            
            // Reset dialogue boxes
            document.querySelector('.caesar-dialogue').style.display = 'none';
            document.querySelector('.soldier-dialogue').style.display = 'none';
            document.querySelector('.animation-line').style.display = 'none';
        });

        decryptBtn.addEventListener("click", () => {
            const encryptedText = document.getElementById("result-text").textContent;
            if (!encryptedText) {
                alert("Please encrypt a message first!");
                return;
            }

            const caesarDialogue = document.querySelector('.caesar-dialogue');
            const soldierDialogue = document.querySelector('.soldier-dialogue');
            const animationLine = document.querySelector('.animation-line');

            // Show Caesar's dialogue
            caesarDialogue.textContent = encryptedText;
            caesarDialogue.style.display = 'block';

            // Get proper positioning for animation line
            const caesarBox = document.querySelector('.ceaser-img');
            const soldierBox = document.querySelector('.soldier-msg');
            
            // Get more accurate positioning using getBoundingClientRect
            const caesarRect = caesarBox.getBoundingClientRect();
            const soldierRect = soldierBox.getBoundingClientRect();
            const containerRect = document.querySelector('.content-layout').getBoundingClientRect();
            
            // Calculate positions relative to container
            const containerTop = containerRect.top;
            const containerLeft = containerRect.left;
            
            // Set position based on responsive layout
            if (window.innerWidth <= 768) {
                // For mobile: horizontal line in the middle
                animationLine.style.display = 'block';
                animationLine.style.width = '80%';
                animationLine.style.left = '10%';
                animationLine.style.top = (caesarRect.bottom - containerTop + 20) + 'px';
            } else {
                // For desktop: line connecting the images
                animationLine.style.display = 'block';
                animationLine.style.left = (caesarRect.right - containerLeft) + 'px';
                animationLine.style.top = (caesarRect.top + caesarRect.height/2 - containerTop) + 'px';
                animationLine.style.width = (soldierRect.left - caesarRect.right) + 'px';
            }

            // Show soldier's dialogue after delay
            setTimeout(() => {
                const decryptedText = shuffledDecipher(encryptedText);
                soldierDialogue.textContent = decryptedText;
                soldierDialogue.style.display = 'block';
            }, 1000);
        });

        backBtn.addEventListener("click", createSelectionPage);
    }

    function shuffledDecipher(msg) {
        const shuffledLowerCase = 'qazwsxcedrfvbgtyhnujiokmpl';
        const shuffledUpperCase = 'QAZWSXCDERFVBGTHYNUJIOKMLP';
        const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';

        for (let i = 0; i < msg.length; i++) {
            let char = msg[i];
            
            if (shuffledLowerCase.includes(char)) {
                let index = shuffledLowerCase.indexOf(char);
                result += lowerCaseLetters[index];
            } else if (shuffledUpperCase.includes(char)) {
                let index = shuffledUpperCase.indexOf(char);
                result += upperCaseLetters[index];
            } else {
                result += char;
            }
        }

        return result;
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

    // Handle window resize for animation line positioning
    window.addEventListener('resize', () => {
        const animationLine = document.querySelector('.animation-line');
        if (animationLine && animationLine.style.display === 'block') {
            const caesarBox = document.querySelector('.ceaser-img');
            const soldierBox = document.querySelector('.soldier-msg');
            
            if (caesarBox && soldierBox) {
                const caesarRect = caesarBox.getBoundingClientRect();
                const soldierRect = soldierBox.getBoundingClientRect();
                const containerRect = document.querySelector('.content-layout').getBoundingClientRect();
                
                const containerTop = containerRect.top;
                const containerLeft = containerRect.left;
                
                if (window.innerWidth <= 768) {
                    animationLine.style.width = '80%';
                    animationLine.style.left = '10%';
                    animationLine.style.top = (caesarRect.bottom - containerTop + 20) + 'px';
                } else {
                    animationLine.style.left = (caesarRect.right - containerLeft) + 'px';
                    animationLine.style.top = (caesarRect.top + caesarRect.height/2 - containerTop) + 'px';
                    animationLine.style.width = (soldierRect.left - caesarRect.right) + 'px';
                }
            }
        }
    });

    continueBtn.addEventListener("click", createSelectionPage);
});