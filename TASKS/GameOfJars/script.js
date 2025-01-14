// Game state management
const gameState = {
    selectedBall: null,
    sourceJar: null,
    colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#D4A5A5', '#9B59B6', '#3498DB'],
    isGameInitialized: false
  };
  
  // DOM Elements
  const domElements = {
    jarContainer: document.getElementById('jarContainer'),
    ballArray: document.getElementById('ballArray'),
    message: document.getElementById('message'),
    gameArea: document.getElementById('gameArea'),
    container: document.querySelector('.container')
  };
  
  // Event Listeners
  document.getElementById('startGame').addEventListener('click', handleGameStart);
  
  // Game initialization functions
  function handleGameStart() {
    const jarCount = parseInt(document.getElementById('jarCount').value);
    const ballCount = parseInt(document.getElementById('ballCount').value);
  
    if (!validateInputs(jarCount, ballCount)) {
      alert('Please enter valid numbers for jars and balls.');
      return;
    }
  
    initializeGame(jarCount, ballCount);
    toggleGameView();
  }
  
  function validateInputs(jarCount, ballCount) {
    return !isNaN(jarCount) && !isNaN(ballCount) && jarCount > 0 && ballCount > 0;
  }
  
  function toggleGameView() {
    domElements.container.style.display = 'none';
    domElements.gameArea.style.display = 'block';
  }
  
  function initializeGame(jarCount, ballCount) {
    createJars(jarCount);
    createBalls(ballCount);
    setupEventListeners();
    updateMessage("Click on a ball to select it, then click on a jar to place it");
    gameState.isGameInitialized = true;
  }
  
  // Creation functions
  function createJars(count) {
    domElements.jarContainer.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
      const jar = document.createElement('div');
      jar.className = 'jar';
      domElements.jarContainer.appendChild(jar);
    }
  }
  
  function createBalls(count) {
    domElements.ballArray.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
      const ball = createBall(gameState.colors[i % gameState.colors.length]);
      domElements.ballArray.appendChild(ball);
    }
  }
  
  function createBall(color) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.style.backgroundColor = color;
    ball.addEventListener('click', handleBallClick);
    return ball;
  }
  
  // Event handlers
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
      updateMessage("Click on a ball to select it, then click on a jar to place it");
    }
  }
  
  function handleBallArrayClick(event) {
    if (event.target.classList.contains('ball')) return;
    
    if (gameState.selectedBall && gameState.selectedBall.closest('.jar')) {
      returnBallToArray(gameState.selectedBall);
    } else if (gameState.sourceJar) {
      returnTopBallToArray();
    }
  }
  
  // Movement functions
  function moveBallToJar(jar) {
    jar.appendChild(gameState.selectedBall);
    clearSelections();
    updateMessage("Click on a ball to select it, then click on a jar to place it");
  }
  
  function moveBallBetweenJars(targetJar) {
    const ball = gameState.sourceJar.lastElementChild;
    if (ball) {
      targetJar.appendChild(ball);
    }
    clearSelections();
    updateMessage("Click on a ball to select it, then click on a jar to place it");
  }
  
  function returnBallToArray(ball) {
    domElements.ballArray.appendChild(ball);
    clearSelections();
    updateMessage("Click on a ball to select it, then click on a jar to place it");
  }
  
  function returnTopBallToArray() {
    const ball = gameState.sourceJar.lastElementChild;
    if (ball) {
      domElements.ballArray.appendChild(ball);
    }
    clearSelections();
    updateMessage("Click on a ball to select it, then click on a jar to place it");
  }
  
  // Utility functions
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
  
  function updateMessage(text) {
    domElements.message.textContent = text;
  }
  
  function selectSourceJar(jar) {
    gameState.sourceJar = jar;
    gameState.sourceJar.classList.add('selected');
    updateMessage("Now click on another jar to move the ball");
  }
  
  // Setup event listeners
  function setupEventListeners() {
    document.querySelectorAll('.jar').forEach(jar => {
      jar.addEventListener('click', handleJarClick);
    });
    
    domElements.ballArray.addEventListener('click', handleBallArrayClick);
  }