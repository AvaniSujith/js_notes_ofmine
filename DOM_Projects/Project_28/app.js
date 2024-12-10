// const APIURL = 'https://api.github.com/userys/'

// getUser('bradtraversy')
// function getUser(username){
//     // axios.get 
//     axios(APIURL + username)
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))
    


// }


// Using async 

const APIURL = 'https://api.github.com/users/'

// getUser('bradtraversy')

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

async function getUser(username) {

    try{

        const { data } = await axios(APIURL + username)
        // console.log(data)
        createUserCard(data)

    }catch(err){

        // console.log(err)
        if(err.response.status == 404){
            createErrorCard('User not found!')
        }
    }
    
}

form.addEventListener('submit', (e)=> {
    e.preventDefault()

    // const user = e.target.val

    const user = search.value

    if(user){
        getUser(user)

        search.value = ''
    }

})


function createUserCard(user){
    const cardHTML = `    
        <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="" class="avatar">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul>
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following}<strong>Following</strong></li>
                    <li>${user.public_repos}<strong>Repos</strong></li>
                </ul>

                <div id="repos"></div>
            </div>
        </div>`


        main.innerHTML = cardHTML
}

function createErrorCard(msg){
    const cardHTML = `
    <div class="card">
        <h1>${msg}</h1>
    </div>`

    main.innerHTML = cardHTML
}

async function getRepos(username){
    try{
        const { data } = await axios(APIURL + username + '/repos?sort=created')

        createUserCard(data)
    }catch(err){
        createErrorCard('Problem fetching repos')
    }
}

function addReposToCard(repos){
    const reposEl = document.getElementById('repos')
    repos
        .slice(0, 6)
        .forEach(repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerText = repo.name

        reposEl.appendChild(repoEl)
    })

}