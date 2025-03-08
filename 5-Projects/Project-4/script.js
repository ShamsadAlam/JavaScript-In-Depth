let randomNumber = parseInt(Math.random()*10+1)
console.log(randomNumber);

const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess=[];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
        
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number")
    }else if(guess < 1){
        alert("please enter a number more than 1")
    }else if(guess > 10){
        alert("please enter a number less than 10")
    }else{
        prevGuess.push(guess)
        if(numGuess === 9){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage(`You guessed it Right!`)
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`Number is too low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${9-numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    p.style.cursor="pointer";
    p.style.color="green"
    p.style.fontSize="large"
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*10+1)
        prevGuess =[];
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${9-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    });
}