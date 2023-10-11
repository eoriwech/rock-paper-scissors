function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissor"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choice[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();
    console.log(playerSelection)
    console.log(computerSelection)
    if (
        (playerSelection == "Rock" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Scissor") ||
        (playerSelection == "Scissor" && computerSelection == "Rock")
    )  {
        computerScore++
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    } else if (
        (playerSelection == "Rock" && computerSelection == "Scissor") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissor" && computerSelection == "Paper")
    ) {
        playerScore++
        return `You Win! ${playerSelection} beats ${computerSelection}`
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