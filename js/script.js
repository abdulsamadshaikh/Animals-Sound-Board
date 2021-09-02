/*  
Project Name: Animals Sound Board
Description: Crazy Animals Sound Board, you are free to use in your projects. Give me a thumbs-up, If you like it. Enjoy!
Author: Abdul Samad
Author URI: https://getabdulsamad.com/
Tags: Mobile-friendly, All-Devices-Supported. 
*/

const sounds = ['birdFlyingAway', 'birds', 'cat', 'cow', 'crowing', 'dog', 'duck', 'goat', 'lion', 'monkey']
const animalsPath = '/sounds/icons/'
const animals = [
                'bird-flying-away.svg', 
                'birds.svg', 
                'cat.svg', 
                'cow.svg', 
                'crowing.svg', 
                'dog.svg', 
                'duck.svg', 
                'goat.svg', 
                'lion.svg', 
                'monkey.svg'
                ]
           
let toalCount = 0

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSounds()
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)
})

function stopSounds() {
   sounds.forEach(sound => {
    const music = document.getElementById(sound)
    music.pause()
    music.currentTime = 0;
   })
}

const animalsBtn = document.querySelectorAll('.btn')
animals.forEach(function(entry) {
    if(toalCount < animalsBtn.length) {
        toalCount++
        animalsBtn[toalCount-1].style.backgroundImage = `url(${animalsPath + animals[toalCount-1]})`
    }
})