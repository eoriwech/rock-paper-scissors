let computerScore = 0;
let playerScore = 0;

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

document.querySelector(".btnRock").addEventListener("click", () => {
    const result = playRound("Rock", getComputerChoice());
    document.querySelector(".result").textContent = result;    
    document.querySelector(".score").textContent = `Your Score is ${playerScore}, computer score is ${computerScore}`;
    if (playerScore == 5 || computerScore == 5) {
        winner()
    }
})

document.querySelector(".btnPaper").addEventListener("click", () => {
    const result = playRound("Paper", getComputerChoice());
    document.querySelector(".result").textContent = result;    
    document.querySelector(".score").textContent = `Your Score is ${playerScore}, computer score is ${computerScore}`;
    if (playerScore == 5 || computerScore == 5) {
        winner()
    }
})

document.querySelector(".btnScissor").addEventListener("click", () => {
    const result = playRound("Scissor", getComputerChoice());
    document.querySelector(".result").textContent = result;    
    document.querySelector(".score").textContent = `Your Score is ${playerScore}, computer score is ${computerScore}`;
    if (playerScore == 5 || computerScore == 5) {
        winner()
    }
})

function winner() {
    if (playerScore == 5) {
        //document.querySelector(".winner").textContent = `Congrats you won the game`;
        alert("Congrats you won the game")
        
    } else {
        //document.querySelector(".winner").textContent = `Sorry you lost the game`;
        alert("Sorry you lost the game")
    }
    playerScore = 0;
    computerScore = 0;
}