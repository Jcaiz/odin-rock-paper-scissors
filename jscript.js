const Choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let select = Math.floor(Math.random() * 3);
    return Choice[select];
}

function playRound(compSelection, playerSelection) {
    let pselect = playerSelection[0].toUpperCase() + playerSelection.substr(1).toLowerCase();
    const WIN = `You Win! ${pselect} beats ${compSelection}.`;
    const LOSE = `You Lose! ${compSelection} beats ${pselect}.`;
    const TIED = `It's a draw!`;
    console.log(`Player selection was ${playerSelection} and the computer was ${compSelection}.`);

    if (pselect == compSelection) {
         console.log(TIED);
        return playRound(getComputerChoice(), prompt(TIED + " Choose your move...").trim());
    }

    if (pselect == "Rock") {
        if (compSelection == "Paper") {
            // return LOSE;
            console.log(LOSE)
            return "L";
        } else {
            // return WIN;
            console.log(WIN)
            return "W";
        }
    } else if (pselect == "Paper") {
        if (compSelection == "Scissors") {
            // return LOSE;
            console.log(LOSE)
            return "L";
        } else {
            // return WIN;
            console.log(WIN)
            return "W";
        }
    } else if (pselect == "Scissors") {
        if (compSelection == "Rock") {
            // return LOSE;
            console.log(LOSE)
            return "L";
        } else {
            // return WIN;
            console.log(WIN)
            return "W";
        }
    } else {
        console.log(`'${playerSelection}' is an invalid input. Must be either rock, paper, or scissors!`);
        return playRound(getComputerChoice(), prompt("Invalid move. Try again move...").trim());
    }
}

function game(rounds) {
    let playerWins = 0;
    let compWins = 0;
    let wins = rounds - 2;
    while(true) {
        let result = playRound(getComputerChoice(), prompt("Choose your move...").trim());
        if (result == "L") {
            compWins++;
            console.log(`Score is Computer ${compWins} and Player ${playerWins}`);
        } else if (result == "W") {
            playerWins++;
            console.log(`Score is Computer ${compWins} and Player ${playerWins}`);
        }

        if (playerWins == wins) {
            return "You win!";
        } else if (compWins == wins){
            return "Computer wins!"
        }
    }
    // return console.log(WIN);
}

const BestofRounds = 5;
// const CompSelection = getComputerChoice();
// let playSelection = prompt("Choose your move...");

console.log(game(BestofRounds));
// console.log(playRound(CompSelection, playSelection.trim()));