function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissor"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choice[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();
    console.log(playerSelection)
    console.log(computerSelection)
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return `You Lose! Paper beats Rock`
    } else if (playerSelection == "Rock" && computerSelection == "Scissor") {
        return `You Win! Rock beats Scissor`
    } else if (playerSelection == "Paper" && computerSelection == "Scissor") {
        return `You Lose! Scissor beats Paper`
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return `You Win! Paper beats Rock`
    } else if (playerSelection == "Scissor" && computerSelection == "Rock") {
            return `You Lose! Scissor beats Rock`
    } else if (playerSelection == "Scissor" && computerSelection == "Paper") {
        return `You Win! Scissor beats Paper`
    } else {
        return `It is a Draw!`
    }
}

function game() {
    for (let i = 1; i < 6; i++) {
        let playerSelection = prompt("Choose rock, paper or scissor");
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}

game()