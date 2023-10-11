function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choice[randomIndex];
}

console.log(getComputerChoice());