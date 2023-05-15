let choices = ["Rock", "Paper", "Scissors"];
let playerInput = "";
let properInput = "";
let whoWon = "None";

let computerWins = 0;
let playerWins = 0;

let roundStatus = document.querySelector("#Round");

let playerScore = document.querySelector("#Player-Score");
let computerScore = document.querySelector("#Computer-Score");

let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", getUserInput);
});

function getUserInput() {
    playerInput = this.id;
    game();
}

function getComputerChoice() {
    let choiceInt = Math.floor(Math.random() * 3);
    return choices[choiceInt];
}

function playRound(playerSelection, computerSelection) {
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

    if (playerWins < 5 && computerWins < 5) {
        let user = playerInput;
        let computer = getComputerChoice();
        let message = playRound(user, computer);

        switch (whoWon) {
            case "Player":
                playerWins++;
                playerScore.textContent = "Player: " + playerWins;
                break;
            case "Computer":
                computerWins++;
                computerScore.textContent = "Computer: " + computerWins;
                break;
        }

        roundStatus.textContent = message;
    }

    if (playerWins >= 5 || computerWins >= 5) {

        if (computerWins > playerWins) {
            roundStatus.textContent = ("Game ended. Computer wins.")
        } else if (playerWins > computerWins) {
            roundStatus.textContent = ("Game ended. Player wins.")
        } else {
            roundStatus.textContent = ("Game ended. Tie.")
        }
    }
}