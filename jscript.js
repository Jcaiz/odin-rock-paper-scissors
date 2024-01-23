const Choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let select = Math.floor(Math.random() * 3);
    return Choice[select];
}

function playRound(compSelection, playerSelection) {
    let pselect = playerSelection[0].toUpperCase() + playerSelection.substr(1).toLowerCase();
    const WIN = `You Win! ${pselect} beats ${compSelection}.`;
    const LOSE = `You Lose! ${compSelection} beats ${pselect}.`;
    const TIED = `It's a draw!`
    console.log(`Player selection was ${playerSelection} and the computer was ${compSelection}.`);

    if (pselect == compSelection) {
         console.log(TIED);
        return playRound(getComputerChoice(), prompt(TIED + " Choose your move...").trim());
    }

    if (pselect == "Rock") {
        if (compSelection == "Paper") {
            return LOSE;
        } else {
            return WIN;
        }
    } else if (pselect == "Paper") {
        if (compSelection == "Scissors") {
            return LOSE;
        } else {
            return WIN;
        }
    } else if (pselect == "Scissors") {
        if (compSelection == "Rock") {
            return LOSE;
        } else {
            return WIN;
        }
    } else {
        return `'${playerSelection}' is an invalid input. Must be either rock, paper, or scissors!`;
    }
}

const compSelection = getComputerChoice();
let playSelection = prompt("Choose your move...");

console.log(playRound(compSelection, playSelection.trim()));