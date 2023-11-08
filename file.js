const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)].toLowerCase();
}

const playerSelection = "rock".toLowerCase();

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    // code away

    // play a single round
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return "rock doesn't beat rock";
        } else if (computerSelection === 'paper') {
            return "paper beats rock";
        } else {
            return "rock beats scissors";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return "paper beats rock";
        } else if (computerSelection === 'paper') {
            return "paper doesn't beat paper";
        } else {
            return "scissors beat paper";
        }
    } else {
        if (computerSelection === 'rock') {
            return "rock beats scissors";
        } else if (computerSelection === 'paper') {
            return "scissors beat paper";
        } else {
            return "scissors don't beat scissors";
        }
    }
}

console.log(playRound(playerSelection, computerSelection));

