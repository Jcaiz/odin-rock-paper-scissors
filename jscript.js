const Choice = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let compScore = 0;

function getComputerChoice() {
    let select = Math.floor(Math.random() * 3);
    return Choice[select];
}

function playRound(compSelection, playerSelection) {
    const WIN = `You Win! ${playerSelection} beats ${compSelection}.`;
    const LOSE = `You Lose! ${compSelection} beats ${playerSelection}.`;
    const TIED = `It's a draw!`;
    const selection = `You have chosen ${playerSelection} and the computer has chosen ${compSelection}.`;

    if (playerSelection == compSelection) {
        return [selection, TIED, 'D'];
    } else if ((playerSelection == "Rock" && compSelection == "Paper") || 
        (playerSelection == "Paper" && compSelection == "Scissors") ||
        (playerSelection == "Scissors" && compSelection == "Rock")) {
        return [selection, LOSE, "L"];
    } else {
        return [selection, WIN, "W"];
    }
}

function updateScore(winner) {
    if (winner == 'W') {
        userScore ++;
    } else if (winner == 'L') {
        compScore ++;
    }
}

function endGame(champion){
    playerSelection.forEach(element => element.remove());
    outcome.appendChild(selections);
    finalImage.height = '400';
    selections.style.fontSize = '50px';
    headTitle.textContent = 'GAME SET!';
    headTitle.style.fontSize = '25px';
    if (champion == 'player') {
        finalImage.src = 'images/221221005245-01-messi-world-cup-celebration-121822-restricted.jpg';
        finalImage.alt = 'GOAT holding World Cup Trophy';
        selections.textContent = 'Congratulations. You Are Victorious!';    
    } else {
        selections.textContent = 'Game Over. You Have Been Defeated!';
        finalImage.alt = 'Three people pointing and laughing'
        finalImage.src = 'images/Laughing-at.jpg';
    }
}

const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
const playerSelection = document.querySelectorAll('.playerSelection');
const headTitle = document.querySelector('#headTitle');

const outcome = document.createElement('div');
const selections = document.createElement('p');
const result = document.createElement('p');
const score = document.createElement('p');

outcome.appendChild(selections);
outcome.appendChild(result);
outcome.appendChild(score);
body.appendChild(outcome);
outcome.style.textAlign = 'center';

selections.textContent = 'You will play in a best of 5 against a computer, good luck...';
const finalImage = document.createElement('img');
outcome.appendChild(finalImage);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let [selectionStatement, winStatement, win] = playRound(getComputerChoice(), button.id)
        selections.textContent = selectionStatement;
        result.textContent = winStatement;
        updateScore(win)
        score.textContent = userScore + ' - ' + compScore;
        if (userScore == 5) {
            endGame('player');
        } else if (compScore == 5) {
            endGame('computer');
        }
    });
});