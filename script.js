const userName = document.querySelector('.username')
const password = document.querySelector('.password')
const passwordBtn = document.querySelector('.password-button')
const face = document.querySelector('.face')
const tongue = document.querySelector('.tongue')
const hands = document.querySelectorAll('.hand')


//userName 
let valueLength

userName.addEventListener('input',faceRotation )
userName.addEventListener('focus',faceRotation )
userName.addEventListener('blur', ()=> face.style.transform = `rotate(0deg)`)


function faceRotation(){
    const valueLength = userName.value.length
    if(valueLength < 40){
        face.style.transform = `rotate(${20 - valueLength}deg)`
    }
}

// password

password.addEventListener('focus', ()=>{
    tongue.classList.remove ('breath')
    hands.forEach((hand)=>{
        hand.classList.add('hide')
    })
})

password.addEventListener('blur', ()=>{
    tongue.classList.add ('breath')
    hands.forEach((hand)=>{
        hand.classList.remove('hide')
    })
})


// password button
passwordBtn.addEventListener('mousedown', ()=>{
    hands.forEach((hand)=>{
        hand.classList.add('peek')
    })
    password.type = 'text'
})

passwordBtn.addEventListener('mouseup', ()=>{
    hands.forEach((hand)=>{
        hand.classList.remove('peek')
    })
    password.type = 'password'
    password.focus()
})