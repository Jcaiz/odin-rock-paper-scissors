console.log("Hello World")

function getComputerChoice(max) {
    const Choice = ["Rock", "Paper", "Scissors"]
    let select = Math.floor(Math.random() * 3);
    console.log(Choice[select])
}

getComputerChoice();