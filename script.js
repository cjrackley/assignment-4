const imgArray = document.querySelectorAll('.choice');

for (let index = 0; index < imgArray.length; index++) {
    const element = imgArray[index];
    element.addEventListener('click', makeChoice);
}

function onClick(event) {
    img = event.currentTarget;
    img.style.border = "5px solid red";
    selected = true;
}

function makeChoice(event) {
    const oldChoice = document.querySelector('.chosen');

    if (oldChoice) {
        oldChoice.classList.remove('chosen');
    }

    event.currentTarget.classList.add('chosen');
    playerChoice = event.currentTarget.dataset.choice;

}

const enemyImage = document.querySelector('#ai-image');
const button = document.querySelector('.play-btn');
const result = document.querySelector('#result');

let enemyChoice;
const images = ["rock", "paper", "scissors"];

let shuffleInterval;

function startShuffle() {
    shuffleInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * images.length);
        enemyImage.src = 'images/' + images[randomIndex] + '.PNG';
    }, 500);
}

function randomImage() {

    startShuffle();

    setTimeout(() => {
        clearInterval(shuffleInterval);
        const randomIndex = Math.floor(Math.random() * images.length);
        enemyChoice = images[randomIndex];
        enemyImage.src = 'images/' + enemyChoice + '.PNG';
        result.textContent = "Results:";

        playGame();
    }, 3000);
}

button.addEventListener('click', randomImage);

function playGame() {


    if (!playerChoice) {
        return;
    }

    if (playerChoice === enemyChoice) {
        console.log("tie");
        result.textContent = "Results: It's a tie!";
        button.textContent = "Play Again";
        return;
    }

    if (
        (playerChoice === "rock" && enemyChoice === "scissors") ||
        (playerChoice === "paper" && enemyChoice === "rock") ||
        (playerChoice === "scissors" && enemyChoice === "paper")
    ) {
        console.log("win");
        result.textContent = "Results: You Win!";
    } else {
        console.log("lose");
        result.textContent = "Results: You Lost!";
    }

    button.textContent = "Play Again";
}