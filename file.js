// declare variables
const choices = ['Rock', 'Paper', 'Scissors'];
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

// get random choice of computer from rock, paper, scissors
function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)].toLowerCase();
}

// get player choice from rock, paper, scissors
function getPlayerSelection() {
    playerSelection = prompt("Input your option ?").toLowerCase();
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        return playerSelection;
    } else {
        alert("You entered incorrect option, please refresh page to play again");
        return 0;
    }
}

// play a single round & return outcome
function playRound(playerSelection, computerSelection) {
    // play a single round
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return "It's a draw! Rock doesn't beat Rock";
        } else if (computerSelection === 'paper') {
            ++computerScore;
            return "You Lose! Paper beats Rock";
        } else {
            ++playerScore;
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            ++playerScore;
            return "You Win! Paper beats Rock";
        } else if (computerSelection === 'paper') {
            return "It's a draw! Paper doesn't beat Paper";
        } else {
            ++computerScore;
            return "You Lose! Scissors beat Paper";
        }
    } else {
        if (computerSelection === 'rock') {
            ++computerScore;
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection === 'paper') {
            ++playerScore;
            return "You Win! Scissors beat Paper";
        } else {
            return "It's a draw! Scissors don't beat Scissors";
        }
    }
}

// create 3 buttons, one for each selection 
// => done in html file

// check for winner, return status
function checkWinner() {
    if (playerScore === 5) {
        return `Congratulations! You have won. Your score: ${playerScore}, Computer score: ${computerScore}`;
    } else if (computerScore === 5) {
        return `Alas! You have lost. Your score: ${playerScore}, Computer score: ${computerScore}`;
    } else {
        return `${playerScore} `;
    }
}

// add div for displaying results & change all of your console.log into DOM methods
const result = document.querySelector('#result');


// add an event listener to the buttons that call your playRound function
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playerSelection = 'rock';
    // with the correct playerSelection every time the button is clicked (may keep console.log for this step)
    playRound(playerSelection, computerSelection);
    // display running score, and announce a winner of the game once one player reaches 5 points
    result.textContent += `${checkWinner()} `;
    // console.log(result);
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playerSelection = 'paper';
    // with the correct playerSelection every time the button is clicked (may keep console.log for this step)
    playRound(playerSelection, computerSelection);
    // display running score, and announce a winner of the game once one player reaches 5 points
    result.textContent += `${checkWinner()} `;
    // console.log(result);
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playerSelection = 'scissors';
    // with the correct playerSelection every time the button is clicked (may keep console.log for this step)
    playRound(playerSelection, computerSelection);
    // display running score, and announce a winner of the game once one player reaches 5 points
    result.textContent += `${checkWinner()} `;
    // console.log(result);
});





// once done with UI, commit changes to rps-ui before continuing

// further, follow TOP page for merging these changes

