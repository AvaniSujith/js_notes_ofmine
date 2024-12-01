const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn') 

// fetch('https://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

jokeBtn.addEventListener('click', generateJoke)


generateJoke()

function generateJoke(){

    const config = {
        headers: {
            'Accept' : 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com' , config)
    .then((res) => res.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke
    })

}


