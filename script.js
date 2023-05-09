/*
Write a NEW function called game(). Use the previous function inside of this one to
play a 5 round game that keeps score and reports a winner or loser at the end.
You have not officially learned how to “loop” over code to repeat function calls…
if you already know about loops from somewhere else (or if you feel like doing some more learning)
feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
At this point you should be using console.log() to display the results of each round and the winner at the end.
Use prompt() to get input from the user. Read the docs here if you need to.
Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
Feel free to create more “helper” functions if you think it would be useful.
*/

let choices = ["Rock", "Paper", "Scissors"];
let playerInput = "";
let properInput = "";

// Code for player input through prompt.
/*
do {
    playerInput = prompt("Please enter your weapon of choice.").toLowerCase();
    properInput = playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
} while (!choices.includes(properInput))

if (choices.includes(properInput)) {
    playRound(properInput, getComputerChoice());
} else {
    console.log("Incorrect input.");
}
*/

function getComputerChoice() {
    let choiceInt = Math.floor(Math.random() * 3);
    return choices[choiceInt];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    if (playerSelection == computerSelection) {
        return "Tie. " + playerSelection + " is the same as " + computerSelection;
    } else if ((playerSelection == "Scissors" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Rock" && computerSelection == "Scissors")) {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));