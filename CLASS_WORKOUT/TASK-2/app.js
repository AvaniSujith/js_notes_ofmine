const SYMBOLS = '0123456789abcdefghijklmnopqrstuvwxyz';

// Utility to switch active pages
function showPage(pageElement) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    pageElement.classList.add('active');
}

// Convert number to specified base
function convertToBase(number, base) {
    if (number === 0) return SYMBOLS[0];
    let result = '';
    while (number > 0) {
        result = SYMBOLS[number % base] + result;
        number = Math.floor(number / base);
    }
    return result;
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    const symbolCountSelect = document.getElementById('symbol-count');

    // Populate symbol count options
    for (let i = 2; i <= SYMBOLS.length; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        symbolCountSelect.appendChild(option);
    }

    // Navigation button handlers
    document.getElementById('welcome-btn').onclick = () => showPage(document.getElementById('welcome-page'));
    document.getElementById('start-btn').onclick = () => {
        const selectedBase = +symbolCountSelect.value;
        if (selectedBase < 2) {
            alert('Please select a valid symbol count.');
            return;
        }
        window.selectedBase = selectedBase;
        showPage(document.getElementById('selection-page'));
    };

    document.querySelector('.pattern .btn').onclick = () => showPage(document.getElementById('pattern-input-page'));
    document.querySelector('.sequence .btn').onclick = () => showPage(document.getElementById('sequence-input-page'));

    // Pattern input page logic
    document.getElementById('pattern-input-page').querySelector('.btn').onclick = () => {
        const patternNumber = +document.getElementById('pattern-number').value;
        const outputPage = document.getElementById('pattern-output-page');

        outputPage.innerHTML = `
            <div class="page-content">
                <h2 class="title">Pattern Result</h2>
                <div id="pattern-output" class="pattern-grid">
                    <div class='pattern-item'>
                        <p>Number: ${patternNumber}</p>
                        <p>Output: ${convertToBase(patternNumber, window.selectedBase)}</p>
                    </div>
                </div>
                <div class="page-controls">
                    <button id="back-to-pattern-btn" class="btn btn-secondary">Back to Input</button>
                </div>
            </div>
        `;

        document.getElementById('back-to-pattern-btn').onclick = () => {
            showPage(document.getElementById('pattern-input-page'));
        };

        showPage(outputPage);
    };

    // Sequence input page logic
    document.getElementById('sequence-input-page').querySelector('.btn').onclick = () => {
        const sequenceNumber = +document.getElementById('sequence-number').value;
        const outputDiv = document.getElementById('pattern-output');
        outputDiv.innerHTML = '';

        const limitedSequenceNumber = Math.min(sequenceNumber, 1000); // Avoid performance issues

        for (let i = 0; i < limitedSequenceNumber; i++) {
            const div = document.createElement('div');
            div.classList.add('pattern-item');
            div.innerHTML = `
                <span class="sequence-index">${i}:</span>
                <span class="sequence-value">${convertToBase(i, window.selectedBase)}</span>
            `;
            outputDiv.appendChild(div);
        }

        showPage(document.getElementById('sequence-output-page'));
    };

    // General navigation buttons
    document.getElementById('back-btn').onclick = () => showPage(document.getElementById('selection-page'));
    document.getElementById('home-btn').onclick = () => showPage(document.getElementById('welcome-page'));
    document.getElementById('instructions-btn').onclick = () => showPage(document.getElementById('instructions-page'));
    document.getElementById('close-instructions-btn').onclick = () => showPage(document.getElementById('welcome-page'));
});
