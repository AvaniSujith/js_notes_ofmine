let selectedBall = null;
let sourceJar = null;
let isGameStarted = false;
let isPlaying = false;

const ballColors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
    '#FFEEAD', '#D4A5A5', '#9B59B6', '#3498DB'
];

const gameInstructions = [
    "• Click on the ball you want to select",
    "• Click on the jar in which you want to place the ball",
    "• Click on the jar to remove its topmost ball/ Click on the ball which you want to move",
    "• Click on another jar to move the ball into it",
    "• Click on ball array to move ball into it",
    "•  Watch the hint in Instruction for next move"
];

const jarContainer = document.getElementById('jarContainer');
const ballArray = document.getElementById('ballArray');
const messageDisplay = document.getElementById('message');
const gameArea = document.getElementById('gameArea');
const setupContainer = document.getElementById('setupContainer');
const startButton = document.getElementById('startGame');
const gameTitle = document.querySelector('.game-title');
const videoLogo = document.getElementById('video-logo');
const sidebar = document.querySelector('.sidebar');
const homeButton = document.querySelector('.home-btn');
// const backgroundMusic = document.getElementById('backgroundMusic');
const musicBtn = document.getElementById('toggleMusic');
const audio = document.getElementById('backgroundMusic');


document.addEventListener('DOMContentLoaded', function(){
  startButton.addEventListener("click", onStartButtonClick);
  homeButton.addEventListener("click", toggleSidebar);
  document.getElementById('end-game').addEventListener("click", () => location.reload());
  document.getElementById('instructions').addEventListener("click", showGameInstructions);
});

function showGameInstructions(){
  const modal = document.createElement('div');
  modal.className = 'instructions-modal';

  let currentStep = selectedBall ? "Now click on a jar to place the selected ball" :
                    sourceJar ? "Now click on another jar to move the ball" :
                    "Click on a ball to select it";

  let instructionsList = gameInstructions.map(instruction =>
    `<p>${instruction}</p>`
  ).join('');

  modal.innerHTML = `
            <h2>Game Instructions</h2>
            <div class="instruction-item">
            ${instructionsList}
            </div>
        <p class="current-step">Current Move: ${currentStep}</p>
        <button class="close-btn" onclick="this.parentElement.remove()">Close</button>
  `;

  document.body.appendChild(modal);
}

document.addEventListener('DOMContentLoaded', function() {
  audio.volume = 0.5;
  musicBtn.addEventListener('click', toggleMusic);
});

function toggleMusic(){
  if(!isPlaying){
    audio.play()
      .then(() => {
          musicBtn.innerHTML = '<i class="fa-solid fa-music"></i>';
          isPlaying = true;
      })
      .catch((error) => {
          console.error("Audio play failed:", error);
      });
  } else {
  audio.pause();
  musicBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
  isPlaying = false;
  }
}

function onStartButtonClick() {
  
                  hideStartElements();
                  showSetupInputs();
                  setupBackgroundVideo();
           
}

function hideStartElements(){
  gameTitle.style.display  ="none";
  startButton.style.display = "none";
  videoLogo.style.display = "none";
}

function showSetupInputs(){
  const inputHTML = `
    <div class ="inputSetup-container">
     <div class="input-field">
            <label for="jarCount">Number of Jars</label>
            <input type="number" id="jarCount" min="1" max="10" placeholder="Enter jars (1-10)">
        </div>
        <div class="input-field">
            <label for="ballCount">Number of Balls</label>
            <input type="number" id="ballCount" min="1" max="20" placeholder="Enter balls (1-20)">
        </div>
        <button id="playButton">Play Game</button>
      </div>
  `;

  setupContainer.innerHTML = inputHTML;
  document.getElementById('playButton').addEventListener('click', startGame);
}

function setupBackgroundVideo(){
  const video = document.createElement('video');
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.className = 'background-video';

  const source = document.createElement('source');
  source.src = "assets/vecteezy_circle-shape-and-neon-square-retro-style_1913410.mp4";
  source.type = "video/mp4";

  video.appendChild(source);
  document.body.appendChild(video);

}


function toggleSidebar(){
  sidebar.classList.toggle('show-sidebar');
}

function startGame(){
  const jarCount = parseInt(document.getElementById('jarCount').value);
  const ballCount = parseInt(document.getElementById('ballCount').value);

  if(isValidInput(jarCount, ballCount)){
    setupContainer.style.display = 'none';
    gameArea.style.display = 'block';
    createGameElements(jarCount, ballCount);
  }else{
    showErrorMessage('Please Enter valid numbers: Jars(1-10) & Balls(1-20)');
  }
}

function isValidInput(jars, balls){
  return jars >= 1 && jars <= 10 && balls >= 1 && balls <= 20;
}

function showErrorMessage(message){
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  document.body.appendChild(errorDiv);
  setTimeout(() => errorDiv.remove(), 3000);
}

function createGameElements(jarCount, ballCount){
  createJars(jarCount);
  createBalls(ballCount);
  addGameListeners();
  updateMessage("Click on a ball to select it");
  isGameStarted = true;
}


function createJars(count){
  jarContainer.innerHTML = '';
  for(let i= 0; i< count; i++){

    const jar = document.createElement('div');
    jar.className = 'jar';
    jar.addEventListener('click', handleJarClick);
    jarContainer.appendChild(jar);

  }
}

function createBalls(count){
  ballArray.innerHTML = "";
  for(let i = 0; i < count; i++){

    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.style.backgroundColor = ballColors[i % ballColors.length];
    ball.addEventListener('click', handleBallClick);
    ballArray.appendChild(ball);

  }
}

function addGameListeners(){
  ballArray.addEventListener('click', handleBallArrayClick)
}

function handleBallClick(event){
  event.stopPropagation();
  clearSelections();
  
  selectedBall = event.target;
  selectedBall.classList.add('selected');
  
  const message = selectedBall.closest('.jar') 
      ? "Click the ball array to return the ball"
      : "Click on a jar to place the ball";
  
  updateMessage(message);
}

function handleJarClick(event) {
  event.stopPropagation();
  const jar = event.currentTarget;
  
  if (selectedBall) {
      jar.appendChild(selectedBall);
      clearSelections();
  } else if (jar.children.length > 0 && !sourceJar) {
      sourceJar = jar;
      sourceJar.classList.add('selected');
      updateMessage("Click another jar/ball array to move the ball");
  } else if (sourceJar && sourceJar !== jar) {
      const ball = sourceJar.lastElementChild;
      if (ball) {
          jar.appendChild(ball);
      }
      clearSelections();
  } else if (sourceJar === jar) {
      clearSelections();
  }
  
  if (!selectedBall && !sourceJar) {
      updateMessage("Click on a ball to select it");
  }
}


function handleBallArrayClick(event) {
  if (event.target.classList.contains('ball')) return;
  
  if (selectedBall && selectedBall.closest('.jar')) {
      ballArray.appendChild(selectedBall);
      clearSelections();
  } else if (sourceJar && sourceJar.lastElementChild) {
      ballArray.appendChild(sourceJar.lastElementChild);
      clearSelections();
  }
  
  updateMessage("Click on a ball to select it");
}


function clearSelections() {
  if (selectedBall) {
      selectedBall.classList.remove('selected');
      selectedBall = null;
  }
  if (sourceJar) {
      sourceJar.classList.remove('selected');
      sourceJar = null;
  }
}


function updateMessage(text){
  if(messageDisplay){
    messageDisplay.textContent = text;
  }
}