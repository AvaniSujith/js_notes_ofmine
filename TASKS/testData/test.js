const sideBar = document.getElementById('side-bar');
const profile = document.getElementById('profile');
const start = document.getElementById('start');
const end = document.getElementById('end');
const submit = document.getElementById('submit');
const input = document.getElementById('inputNum');
const winPage = document.getElementById('win');
const lossPage = document.getElementById('loss');
const homePage = document.getElementById('container');

// Variables for dropdown state management
let startTimeout, endTimeout;
let isStartVisible = false;
let isEndVisible = false;

// Dropdown handlers for sidebar
sideBar.addEventListener('mouseenter', () => {
    clearTimeout(startTimeout);
    start.style.display = "flex";
    requestAnimationFrame(() => {
        start.classList.add('active');
    });
    isStartVisible = true;
});

sideBar.addEventListener('mouseleave', () => {
    startTimeout = setTimeout(() => {
        start.classList.remove('active');
        setTimeout(() => {
            if (!isStartVisible) {
                start.style.display = 'none';
            }
        }, 300);
    }, 800);
    isStartVisible = false;
});

start.addEventListener('mouseenter', () => {
    clearTimeout(startTimeout);
    isStartVisible = true;
});

start.addEventListener('mouseleave', () => {
    startTimeout = setTimeout(() => {
        start.classList.remove('active');
        setTimeout(() => {
            if (!isStartVisible) {
                start.style.display = 'none';
            }
        }, 300);
    }, 500);
    isStartVisible = false;
});

// Dropdown handlers for profile 
profile.addEventListener('mouseenter', () => {
    clearTimeout(endTimeout);
    end.style.display = "flex";
    requestAnimationFrame(() => {
        end.classList.add('active');
    });
    isEndVisible = true;
});

profile.addEventListener('mouseleave', () => {
    endTimeout = setTimeout(() => {
        end.classList.remove('active');
        setTimeout(() => {
            if (!isEndVisible) {
                end.style.display = 'none';
            }
        }, 300);
    }, 800);
    isEndVisible = false;
});

end.addEventListener('mouseenter', () => {
    clearTimeout(endTimeout);
    isEndVisible = true;
});

end.addEventListener('mouseleave', () => {
    endTimeout = setTimeout(() => {
        end.classList.remove('active');
        setTimeout(() => {
            if (!isEndVisible) {
                end.style.display = 'none';
            }
        }, 300);
    }, 500);
    isEndVisible = false;
});

// Enhanced prime number checker with animations
function checkNumber() {
    const inputValue = parseInt(input.value);

    if (isNaN(inputValue) || inputValue === '' || inputValue <= 1) {
        input.classList.add('error');
        input.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            input.classList.remove('error');
            input.style.animation = '';
        }, 500);
        alert("Input should be a number and greater than 1.");
        return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(inputValue); i++) {
        if (inputValue % i === 0) {
            isPrime = false;
            break;
        }
    }

    // Animate out the home page
    homePage.style.opacity = '0';
    homePage.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        homePage.style.display = 'none';
        
        const resultPage = isPrime ? winPage : lossPage;
        const hidePage = isPrime ? lossPage : winPage;
        const resultText = `${inputValue} is ${isPrime ? 'a' : 'Not a'} Prime Number!`;
        
        hidePage.style.display = 'none';
        resultPage.style.display = 'flex';
        resultPage.style.opacity = '0';
        resultPage.style.transform = 'scale(0.95)';
        
        document.querySelector(isPrime ? '.prime-page h3' : '.not-prime-page h3')
            .innerText = resultText;
        
        requestAnimationFrame(() => {
            resultPage.style.opacity = '1';
            resultPage.style.transform = 'scale(1)';
        });
    }, 300);
}

// Input handling
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkNumber();
    }
});

input.addEventListener('input', () => {
    // Remove non-numeric characters
    input.value = input.value.replace(/[^0-9]/g, '');
});

submit.addEventListener('click', checkNumber);

// Enhanced reset function with animations
function resetPage() {
    const currentPage = document.querySelector('.win[style*="flex"], .loss[style*="flex"]');
    if (currentPage) {
        currentPage.style.opacity = '0';
        currentPage.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            currentPage.style.display = 'none';
            homePage.style.display = 'flex';
            homePage.style.opacity = '0';
            homePage.style.transform = 'scale(0.95)';
            
            requestAnimationFrame(() => {
                homePage.style.opacity = '1';
                homePage.style.transform = 'scale(1)';
                input.value = '';
                input.focus();
            });
        }, 300);
    }
}

// Result page click handlers
winPage.addEventListener('click', resetPage);
lossPage.addEventListener('click', resetPage);

// Prevent accidental form submission
document.querySelector('form')?.addEventListener('submit', (e) => e.preventDefault());

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (winPage.style.display === 'flex' || lossPage.style.display === 'flex') {
            resetPage();
        }
    }
});
functionreverseString(str)
{
          return
        str.split(""). reverse().jo
        in("");
}

console.log(reverseString("GreeksForGreeks"));


