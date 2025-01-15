let defaultDelay = 1000;
let isAnimating = false;
let isPaused = false;
let animationTimeouts = [];
let currentRowIndex = 0;


// Select necessary buttons
const continueBtn = document.getElementById('continue-btn');
const settingsBtn = document.getElementById('setting-btn');
const profileBtn = document.getElementById('user-btn');

// Function to show input boxes
const showInputBoxes = () => {
    const mainSection = document.querySelector('main');
    mainSection.innerHTML = '';


    const headerContainer = document.createElement('div')
    const header = document.createElement('h2');
    headerContainer.classList.add('header-block');
    header.innerText = 'Let\'s Fill in Some Details';
    headerContainer.appendChild(header);

    const inputContainer = document.createElement('div');
    inputContainer.id = 'input-container';



    const createInput = (labelText, inputType, inputId, placeholder) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'input-wrapper';

        const label = document.createElement('label');
        label.textContent = labelText;

        const input = document.createElement('input');
        input.type = inputType;
        input.id = inputId;
        input.placeholder = placeholder;

        wrapper.appendChild(label);
        wrapper.appendChild(input);
        return wrapper;
    };

    const rowsInput = createInput('Number of rows', 'number', 'rows', 'Enter a number');
    const colorInput = createInput('Pick a color', 'color', 'colorInput', '');
    const delayInput = createInput('Delay (ms)', 'number', 'delayInput', 'Enter a number');

    // Create start animation button
    const startButton = document.createElement('button');
    startButton.textContent = 'Start Animation';
    startButton.className = 'start-button';
    startButton.addEventListener('click', () => {
        const rows = parseInt(document.getElementById('rows').value);
        const color = document.getElementById('colorInput').value;
        const delay = parseInt(document.getElementById('delayInput').value);

        // Check if any of the required inputs are missing
        if (!rows || !color || !delay) {
            showErrorMessage('Missing information');
            return;
        }

        // Clear the main section and create pyramid container
        mainSection.innerHTML = '';
        const pyramidContainer = document.createElement('div');
        pyramidContainer.id = 'pyramid';
        mainSection.appendChild(pyramidContainer);

         // Add pause button
         const pauseButton = document.createElement('button');
         pauseButton.textContent = 'Pause';
         pauseButton.className = 'pause-button';
         pauseButton.addEventListener('click', () => {
             if (isPaused) {
                 // Resume animation
                 isPaused = false;
                 pauseButton.textContent = 'Pause';
                 animateRows(color, delay, currentRowIndex);
             } else {
                 // Pause animation
                 isPaused = true;
                 pauseButton.textContent = 'Resume';
                 // Clear any pending timeouts
                 animationTimeouts.forEach(timeout => clearTimeout(timeout));
                 animationTimeouts = [];
             }
         });
         mainSection.appendChild(pauseButton);
        
        // Start the animation
        createPyramid(rows);
        isAnimating = true;
        isPaused = false;
        currentRowIndex = 0;
        animateRows(color, delay, 0);
    });

    // inputContainer.appendChild(headerContainer);
    inputContainer.appendChild(rowsInput);
    inputContainer.appendChild(colorInput);
    inputContainer.appendChild(delayInput);
    
   
    mainSection.appendChild(headerContainer)
    mainSection.appendChild(inputContainer);
    mainSection.appendChild(startButton);
};

// Function to show error message
const showErrorMessage = (message) => {
    const mainSection = document.querySelector('main');
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.innerText = message;
    mainSection.appendChild(errorMessage);
    
    setTimeout(() => {
        mainSection.removeChild(errorMessage);
    }, 3000);
};


function createWaterElements(circle, color) {
    const waterFill = document.createElement('div');
    waterFill.className = 'water-fill';
    
    const waterBody = document.createElement('div');
    waterBody.className = 'water-body';
    waterBody.style.backgroundColor = color;
    
    const waterWave = document.createElement('div');
    waterWave.className = 'water-wave';
    waterWave.style.background = `
        linear-gradient(
            180deg,
            transparent 0%,
            ${color} 100%
        )
    `;
    
    const waterSurface = document.createElement('div');
    waterSurface.className = 'water-surface';
    waterSurface.style.backgroundColor = color;
    
    waterFill.appendChild(waterBody);
    waterFill.appendChild(waterWave);
    waterFill.appendChild(waterSurface);
    circle.appendChild(waterFill);
}

function fillCircleWithWater(circle, color) {
    const waterFill = circle.querySelector('.water-fill');
    if (!waterFill) {
        createWaterElements(circle, color);
        // Trigger reflow to ensure animation works
        circle.offsetHeight;
        requestAnimationFrame(() => {
            circle.querySelector('.water-fill').style.height = '100%';
        });
    }
}

function clearCircleWater(circle) {
    const waterFill = circle.querySelector('.water-fill');
    if (waterFill) {
        waterFill.style.height = '0%';
        setTimeout(() => {
            if (waterFill.parentNode === circle) {
                circle.removeChild(waterFill);
            }
        }, 500); // Match the CSS transition duration
    }
}

// Pyramid-related functions
function createPyramid(rows) {
    const pyramid = document.getElementById('pyramid');
    pyramid.innerHTML = '';
    
    for(let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        
        for(let j = 0; j <= i; j++) {
            const circle = document.createElement('div');
            circle.className = 'circle';
            row.appendChild(circle);
        }
        
        pyramid.appendChild(row);
    }
}

function validateColor(color) {
    const temp = document.createElement('div');
    temp.style.color = color;
    return temp.style.color !== '';
}
function animateRows(selectedColor, selectedDelay, startFromRow) {
    if (!isAnimating || isPaused) return;

    const rows = document.getElementsByClassName('row');
    const color = validateColor(selectedColor) ? selectedColor : 'red';
    const delay = selectedDelay >= 100 ? selectedDelay : defaultDelay;
    currentRowIndex = startFromRow;

    async function lightUpRow() {
        if (isPaused) return;

        if(currentRowIndex < rows.length) {
            const circles = rows[currentRowIndex].getElementsByClassName('circle');
            for(let circle of circles) {
                fillCircleWithWater(circle, color);
            }
            currentRowIndex++;
            let timeout = setTimeout(lightUpRow, delay);
            animationTimeouts.push(timeout);
        } else {
            // Clear all circles
            const clearTimeout = setTimeout(() => {
                const allCircles = document.getElementsByClassName('circle');
                Array.from(allCircles).forEach(circle => {
                    clearCircleWater(circle);
                });
                
                // Wait for clearing animation to complete
                setTimeout(() => {
                    if (!isPaused && isAnimating) {
                        currentRowIndex = 0;
                        lightUpRow();
                    }
                }, 600); // Slightly longer than the clearing animation
            }, delay);
            
            animationTimeouts.push(clearTimeout);
        }
    }

    // Start the animation
    lightUpRow();
}

function clearCircleWater(circle) {
    const waterFill = circle.querySelector('.water-fill');
    if (waterFill) {
        waterFill.style.height = '0%';
        setTimeout(() => {
            if (waterFill.parentNode === circle) {
                circle.removeChild(waterFill);
            }
        }, 500);
    }
}

function clearAllCircles() {
    const circles = document.getElementsByClassName('circle');
    Array.from(circles).forEach(circle => {
        clearCircleWater(circle);
    });
}

// Modal-related functions
const showModal = (createContentCallback) => {
    const mainSection = document.querySelector('main');
    mainSection.style.filter = 'blur(5px)';

    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'modal-overlay';

    const modalBox = document.createElement('div');
    modalBox.id = 'modal-box';

    const closeButton = document.createElement('span');
    closeButton.innerText = '✖';
    closeButton.addEventListener('click', () => {
        document.body.removeChild(modalOverlay);
        mainSection.style.filter = 'none';
    });

    modalBox.appendChild(closeButton);
    createContentCallback(modalBox);
    modalOverlay.appendChild(modalBox);
    document.body.appendChild(modalOverlay);
};

const createSettingsContent = (modalBox) => {
    const startNewButton = document.createElement('button');
    startNewButton.innerText = 'Start New';
    startNewButton.className = 'start-new-button';
    startNewButton.addEventListener('click', () => {
        document.body.removeChild(document.getElementById('modal-overlay'));
        document.querySelector('main').style.filter = 'none';
        showInputBoxes();
    });

    const reloadButton = document.createElement('button');
    reloadButton.innerText = 'Reload';
    reloadButton.className = 'reload-button';
    reloadButton.addEventListener('click', () => {
        location.reload();
    });

    modalBox.appendChild(startNewButton);
    modalBox.appendChild(reloadButton);
};

const createProfileContent = (modalBox) => {
    const loginButton = document.createElement('button');
    loginButton.innerText = 'Login';
    loginButton.className = 'login-button';
    // loginButton.addEventListener('click', () => {
    //     alert('Redirecting to Login...');
    // });

    const signupButton = document.createElement('button');
    signupButton.innerText = 'Signup';
    signupButton.className = 'signup-button';
    // signupButton.addEventListener('click', () => {
    //     alert('Redirecting to Signup...');
    // });

    modalBox.appendChild(loginButton);
    modalBox.appendChild(signupButton);
};

// Event Listeners
continueBtn.addEventListener('click', showInputBoxes);
settingsBtn.addEventListener('click', () => showModal(createSettingsContent));
profileBtn.addEventListener('click', () => showModal(createProfileContent));