const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)].toLowerCase();
}

// const playerSelection = "rock".toLowerCase();

let playerSelection = prompt("Input your option ?").toLowerCase();
if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
    playerSelection;
} else {
    alert("You entered incorrect option, please refresh page to play again");
}

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    // code away

    // play a single round
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return "It's a draw! Rock doesn't beat Rock";
        } else if (computerSelection === 'paper') {
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
             return "You Win! Paper beats Rock";
        } else if (computerSelection === 'paper') {
            return "It's a draw! Paper doesn't beat Paper";
        } else {
            return "You Lose! Scissors beat Paper";
        }
    } else {
        if (computerSelection === 'rock') {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection === 'paper') {
            return "You Win! Scissors beat Paper";
        } else {
            return "It's a draw! Scissors don't beat Scissors";
        }
    }
}

function game() {

}

console.log(playRound(playerSelection, computerSelection));

