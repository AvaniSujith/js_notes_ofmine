// Game state management
const gameState = {
  selectedBall: null,
  sourceJar: null,
  colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#D4A5A5', '#9B59B6', '#3498DB'],
  isGameInitialized: false,
  instructions: [
      "Click on a ball to select it",
      "Click on a jar to place the selected ball",
      "Click on a jar with balls to select it",
      "Click another jar to move the top ball",
      "Click the ball array to return balls",
      "Watch the hint in Instructions for next move"
  ]
};

// DOM Elements
const domElements = {
  jarContainer: document.getElementById('jarContainer'),
  ballArray: document.getElementById('ballArray'),
  message: document.getElementById('message'),
  gameArea: document.getElementById('gameArea'),
  setupContainer: document.getElementById('setupContainer'),
  startButton: document.getElementById('startGame'),
  gameTitle: document.querySelector('.game-title'),
  videoLogo: document.getElementById('video-logo'),
  sidebar: document.querySelector('.sidebar'),
  homeBtn: document.querySelector('.home-btn'),
  backgroundMusic: document.getElementById('backgroundMusic')
};

// Add instructions note
const instructionsNote = document.createElement('div');
instructionsNote.className = 'instructions-note';
instructionsNote.textContent = 'For instructions click home';
document.body.appendChild(instructionsNote);

// Show Instructions Modal with current game state
function showInstructions() {
  const modal = document.createElement('div');
  modal.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(34, 1, 53, 0.95);
      padding: 30px;
      border-radius: 15px;
      color: white;
      z-index: 1001;
      backdrop-filter: blur(10px);
      box-shadow: 0 0 20px rgba(0,0,0,0.3);
      max-width: 80%;
  `;
  
  let currentInstruction = "";
  if (gameState.selectedBall) {
      currentInstruction = "Now click on a jar to place the selected ball";
  } else if (gameState.sourceJar) {
      currentInstruction = "Now click on another jar to move the ball";
  } else {
      currentInstruction = "Click on a ball to select it";
  }

  const instrHtml = [
      ...gameState.instructions,
      `<p style="margin-top: 20px; color: #FF6B6B;">Current Move: ${currentInstruction}</p>`
  ].map(instr => `<p style="margin: 10px 0;">${instr}</p>`).join('');
  
  modal.innerHTML = `
      <h2 style="margin-bottom: 20px; color: #FF6B6B;">Game Instructions</h2>
      ${instrHtml}
      <button style="
          margin-top: 20px;
          padding: 10px 20px;
          background: linear-gradient(45deg, #7928CA, #FF0080);
          border: none;
          border-radius: 20px;
          color: white;
          cursor: pointer;
      ">Close</button>
  `;
  
  document.body.appendChild(modal);
  modal.querySelector('button').onclick = () => modal.remove();
}

// Event Listeners Setup
function setupInitialEventListeners() {
  domElements.startButton.addEventListener("click", handleStartButtonClick);
  domElements.homeBtn.addEventListener('click', toggleSidebar);
  document.getElementById('end-game').addEventListener('click', () => location.reload());
  document.getElementById('instructions').addEventListener('click', showInstructions);
}

// Start Button Handler
function handleStartButtonClick() {
  domElements.backgroundMusic.play();
  hideInitialElements();
  createInputContainer();
  createBackgroundVideo();
}

// Hide Initial Elements
function hideInitialElements() {
  domElements.gameTitle.style.display = "none";
  domElements.startButton.style.display = "none";
  domElements.videoLogo.style.display = "none";
}

// Create Input Container
function createInputContainer() {
  const inputContainer = document.createElement('div');
  inputContainer.classList.add('input-group');
  inputContainer.innerHTML = `
      <div class="input-field">
          <label for="jarCount">Number of Jars</label>
          <input type="number" id="jarCount" min="1" max="10" placeholder="Enter jars (1-10)">
      </div>
      <div class="input-field">
          <label for="ballCount">Number of Balls</label>
          <input type="number" id="ballCount" min="1" max="20" placeholder="Enter balls (1-20)">
      </div>
      <button class="play-btn" id="playButton">
          <i class="fa-solid fa-play"></i>
          <span>Play Game</span>
      </button>
  `;
  
  domElements.setupContainer.appendChild(inputContainer);
  document.getElementById('playButton').addEventListener('click', handleGameStart);
}

// Create Background Video
function createBackgroundVideo() {
  const videoBackground = document.createElement('video');
  videoBackground.setAttribute('autoplay', 'true');
  videoBackground.setAttribute('loop', 'true');
  videoBackground.setAttribute('muted', 'true');
  videoBackground.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1;
      object-fit: fill;
  `;
  
  videoBackground.innerHTML = `
      <source src="assets/vecteezy_circle-shape-and-neon-square-retro-style_1913410.mp4" type="video/mp4">
      Your browser does not support the video tag.
  `;
  
  document.body.appendChild(videoBackground);
}

// Toggle Sidebar
function toggleSidebar() {
  domElements.sidebar.classList.toggle('show-sidebar');
}

// Game Start Handler
function handleGameStart() {
  const jarCount = parseInt(document.getElementById('jarCount').value);
  const ballCount = parseInt(document.getElementById('ballCount').value);

  if (!validateInputs(jarCount, ballCount)) {
      showError('Please enter valid numbers: 1-10 jars and 1-20 balls');
      return;
  }

  initializeGame(jarCount, ballCount);
  toggleGameView();
}

// Show Error Message
function showError(message) {
  const errorModal = document.createElement('div');
  errorModal.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(255, 107, 107, 0.95);
      padding: 20px;
      border-radius: 10px;
      color: white;
      z-index: 1001;
  `;
  errorModal.textContent = message;
  document.body.appendChild(errorModal);
  setTimeout(() => errorModal.remove(), 3000);
}

// Input Validation
function validateInputs(jarCount, ballCount) {
  return !isNaN(jarCount) && !isNaN(ballCount) && 
         jarCount >= 1 && jarCount <= 10 && 
         ballCount >= 1 && ballCount <= 20;
}

// Toggle Game View
function toggleGameView() {
  domElements.setupContainer.style.display = 'none';
  domElements.gameArea.style.display = 'block';
}

// Initialize Game
function initializeGame(jarCount, ballCount) {
  createJars(jarCount);
  createBalls(ballCount);
  setupGameEventListeners();
  updateMessage("Click on a ball to select it");
  gameState.isGameInitialized = true;
}

// Create Jars
function createJars(count) {
  domElements.jarContainer.innerHTML = '';
  for (let i = 0; i < count; i++) {
      const jar = document.createElement('div');
      jar.className = 'jar';
      domElements.jarContainer.appendChild(jar);
  }
}

// Create Balls
function createBalls(count) {
  domElements.ballArray.innerHTML = '';
  for (let i = 0; i < count; i++) {
      const ball = createBall(gameState.colors[i % gameState.colors.length]);
      domElements.ballArray.appendChild(ball);
  }
}

// Create Single Ball
function createBall(color) {
  const ball = document.createElement('div');
  ball.className = 'ball';
  ball.style.backgroundColor = color;
  ball.addEventListener('click', handleBallClick);
  return ball;
}

// Setup Game Event Listeners
function setupGameEventListeners() {
  document.querySelectorAll('.jar').forEach(jar => {
      jar.addEventListener('click', handleJarClick);
  });
  domElements.ballArray.addEventListener('click', handleBallArrayClick);
}

// Ball Click Handler
function handleBallClick(event) {
  event.stopPropagation();
  clearSelections();
  
  gameState.selectedBall = event.target;
  gameState.selectedBall.classList.add('selected');
  
  const message = gameState.selectedBall.closest('.jar') 
      ? "Now click on the ball array to return the ball"
      : "Now click on a jar to place the ball";
  
  updateMessage(message);
}

// Jar Click Handler
function handleJarClick(event) {
  event.stopPropagation();
  const clickedJar = event.currentTarget;
  
  if (gameState.selectedBall) {
      moveBallToJar(clickedJar);
  } else if (clickedJar.children.length > 0 && !gameState.sourceJar) {
      selectSourceJar(clickedJar);
  } else if (gameState.sourceJar && gameState.sourceJar !== clickedJar) {
      moveBallBetweenJars(clickedJar);
  } else if (gameState.sourceJar === clickedJar) {
      clearSelections();
      updateMessage("Click on a ball to select it");
  }
}

// Ball Array Click Handler
function handleBallArrayClick(event) {
  if (event.target.classList.contains('ball')) return;
  
  if (gameState.selectedBall && gameState.selectedBall.closest('.jar')) {
      returnBallToArray(gameState.selectedBall);
  } else if (gameState.sourceJar) {
      returnTopBallToArray();
  }
}

// Move Ball To Jar
function moveBallToJar(jar) {
  jar.appendChild(gameState.selectedBall);
  clearSelections();
  updateMessage("Click on a ball to select it");
}

// Move Ball Between Jars
function moveBallBetweenJars(targetJar) {
  const ball = gameState.sourceJar.lastElementChild;
  if (ball) {
      targetJar.appendChild(ball);
  }
  clearSelections();
  updateMessage("Click on a ball to select it");
}

// Return Ball To Array
function returnBallToArray(ball) {
  domElements.ballArray.appendChild(ball);
  clearSelections();
  updateMessage("Click on a ball to select it");
}

// Return Top Ball To Array
function returnTopBallToArray() {
  const ball = gameState.sourceJar.lastElementChild;
  if (ball) {
      domElements.ballArray.appendChild(ball);
  }
  clearSelections();
  updateMessage("Click on a ball to select it");
}

// Clear Selections
function clearSelections() {
  if (gameState.selectedBall) {
      gameState.selectedBall.classList.remove('selected');
      gameState.selectedBall = null;
  }
  if (gameState.sourceJar) {
      gameState.sourceJar.classList.remove('selected');
      gameState.sourceJar = null;
  }
}

// Update Message
function updateMessage(text) {
  if (domElements.message) {
      domElements.message.textContent = text;
  }
}

// Select Source Jar
function selectSourceJar(jar) {
  gameState.sourceJar = jar;
  gameState.sourceJar.classList.add('selected');
  updateMessage("Now click on another jar to move the ball");
}

// Initialize event listeners when the page loads
document.addEventListener('DOMContentLoaded', setupInitialEventListeners);