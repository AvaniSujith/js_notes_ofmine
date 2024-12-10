// const btn = document.querySelector('.btn')
// const toasts = document.getElementById('toasts')


// const messages = [
//     'hello',
//     'hello1',
//     'helloo2',
//     'hellooo3',
//     'helloooo4'
// ]

// btn.addEventListener('click', () => createNotification())


// function createNotification(){
//     // console.log('hello')

//     const noti = document.createElement('div')
//     noti.classList.add('toast')

//     noti.innerText = getRandomMessage()
//     toasts.appendChild(noti)

//     setTimeout(() => {
//         noti.remove()
//     }, 3000)
// }

// function getRandomMessage(){
//     // return messages[1]
//     return messages[Math.floor(Math.random() * messages.length)]

// }


// const btn = document.querySelector('.btn')
// const toasts = document.getElementById('toasts')

// btn.addEventListener('click', ()=> createNotification('Invalid data'))

// const messages = [
//     'hey',
//     'hello',
//     'bye',
//     'c u'
// ]

// function createNotification(message = null){
//     const notif = document.createElement('div')
//     notif.classList.add('toast')

//     notif.innerText = message ? message : getRandomMsg()

//     toasts.appendChild(notif)

//     setTimeout(() => {
//         notif.remove()
//     }, 3000)
    
// }

// function getRandomMsg(){
//     return messages[Math.floor(Math.random() * messages.length)]
// }



// Adding color 

const btn = document.querySelector('.btn')
const toasts = document.getElementById('toasts')

const msg = [
    'hello',
    'hey',
    'how are you'
]
const types = ['info', 'success', 'failed']

btn.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null){
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = message ? message : getRandomMessage()
    toasts.appendChild(notif)

    setTimeout(() =>{
        notif.remove()
    }, 3000)

}


function getRandomMessage(){
    return msg[Math.floor(Math.random() * msg.length)]
}

function getRandomType(){
    return types[Math.floor(Math.random() * types.length)]
}