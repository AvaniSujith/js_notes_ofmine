document.getElementById("startGame").addEventListener("click", function() {
    document.querySelector("audio").play();

    document.querySelector(".game-title").style.display = "none";
    document.querySelector(".play-btn").style.display = "none";
    document.querySelector("#video-logo").style.display = "none";
    
    // Create the input container dynamically
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
        <div class="next-btn">
            <button> Play</button>
        </div>
    `;

    // Append the input container to the setupContainer
    document.getElementById('setupContainer').appendChild(inputContainer);

    const videoBackground = document.createElement('video');
    videoBackground.setAttribute('autoplay', 'true');
    videoBackground.setAttribute('loop', 'true');
    videoBackground.setAttribute('muted', 'true');
    videoBackground.style.position = "fixed"; // Use fixed positioning to cover the entire viewport
    videoBackground.style.top = "0";
    videoBackground.style.left = "0";
    videoBackground.style.width = "100vw";  // 100% of the viewport width
    videoBackground.style.height = "100vh"; // 100% of the viewport height
    videoBackground.style.zIndex = "-1"; 
    videoBackground.style.objectFit = "fill";
    videoBackground.innerHTML = `
                  
                <source src="assets/vecteezy_circle-shape-and-neon-square-retro-style_1913410.mp4" type="video/mp4">
                Not supported
            
    `;

    // Append the video to the body
    document.body.appendChild(videoBackground);
});


const homeBtn = document.querySelector('.home-btn');
const sidebar = document.querySelector('.sidebar');

homeBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar'); // Show/hide sidebar
});
