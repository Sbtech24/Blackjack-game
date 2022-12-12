let player = {
    name: "semi",
    chips: 500
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false 
let message = ""
let messageEl = document.getElementById('message-el')
// messageEl.textContent = message
let cardsEl = document.getElementById('cards-el') 
let sumEl = document.querySelector('#sum-el')
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber =Math.floor(Math.random() * 13 ) + 1
     if (randomNumber > 10){
        return 10 
    }else if (randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
   
    
}

function renderGame(){
    cardsEl.textContent = "cards: "
    for(let i =0; i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }
   
if (sum <= 20){
    messageEl.textContent="Do you want to draw a new card?"
     hasBlackJack = false
 }else if (sum === 21){
     messageEl.textContent = "Wohho You've got Blackjack"
     hasBlackJack = true
     
 }else{
     messageEl.textContent ="You're out of the game"
     isAlive = false
 }
 
sumEl.textContent ="sum: "+" "+ sum


}


function startGame(){
    let firstCard =getRandomCard();
    let secondCard = getRandomCard();
    cards=[firstCard,secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}


function newCard(){
    if(isAlive ===true && hasBlackJack===false){
        messageEl.textContent = "Do you want to draw a new card?" 
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
   
}