let choices = ["Rock", "Paper", "Scissors"];
let playerInput = "";
let properInput = "";
let whoWon = "None";

function getUserInput() {
    do {
        playerInput = prompt("Please enter your weapon of choice.").toLowerCase();
        properInput = playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
    } while (!choices.includes(properInput))

    return properInput;
}

function getComputerChoice() {
    let choiceInt = Math.floor(Math.random() * 3);
    return choices[choiceInt];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    if (playerSelection == computerSelection) {
        whoWon = "None";
        return "Tie. " + playerSelection + " is the same as " + computerSelection;
    } else if ((playerSelection == "Scissors" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Rock" && computerSelection == "Scissors")) {
        whoWon = "Player";
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
        whoWon = "Computer";
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

function game() {
    let computerWins = 0;
    let playerWins = 0;

    for (let i = 0; i < 5; i++) {
        let user = getUserInput();
        let computer = getComputerChoice();
        let message = playRound(user, computer);

        switch (whoWon) {
            case "Player":
                playerWins++;
                break;
            case "Computer":
                computerWins++;
                break;
        }

        console.log(message);
    }

    if (computerWins > playerWins) {
        console.log("Game ended. Computer wins.")
    } else if (playerWins > computerWins) {
        console.log("Game ended. Player wins.")
    } else {
        console.log("Game ended. Tie.")
    }
}

game();