const choices = ['Rock', 'Paper', 'Scissors'];
let playerSelection;
let computerSelection;
// const playerSelection = "rock".toLowerCase();

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)].toLowerCase();
}

function getPlayerSelection() {
    playerSelection = prompt("Input your option ?").toLowerCase();
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        return playerSelection;
    } else {
        alert("You entered incorrect option, please refresh page to play again");
        return 0;
    }
}

function playRound(playerSelection, computerSelection) {
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
    // play a 5 round game
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = getPlayerSelection();
        computerSelection = getComputerChoice();
        
        let result = playRound(playerSelection, computerSelection);
        let winner = result.substring(0, 7);

        if (winner === 'You Win') {
            playerScore++;
        } else if (winner === 'You Los') {
            computerScore++;
        } else {
            true;
        }
        console.log(result);
        console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
    }
    
    // report winner / looser at end
    if (playerScore > computerScore) {
        return "Congratulations! You have defeated the computer & won!";
    } else if (playerScore < computerScore) {
        return "Alas! You have lost to the cyborg :("
    } else {
        return "You are as smarter as a computer - result is a tie!"
    }

}