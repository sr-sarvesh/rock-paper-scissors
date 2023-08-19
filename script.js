function getComputerChoice() {
    let val = Math.floor((Math.random() * 3));
    switch (val) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
        default: return "None";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    }
    else {
        let isPlayerWon = (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
            (playerSelection == 'Paper' && computerSelection == 'Rock') ||
            (playerSelection == 'Scissors' && computerSelection == 'Paper');
        if (isPlayerWon) {
            return `You won! ${playerSelection} beats ${computerSelection}`;
        }
        else {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
}

const capitalize = (word) => {
    word = word.toLowerCase();
    return word[0].toUpperCase() + word.slice(1);
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection, computerSelection, result;
    let round = 0;
    while (round < 5) {
        playerSelection = prompt("Enter your choice (rock/paper/scissors) ");
        if (capitalize(playerSelection) !== "Rock" && capitalize(playerSelection) !== "Paper" && capitalize(playerSelection) !== 'Scissors') {
            continue;
        } else {
            computerSelection = getComputerChoice();
            result = playRound(capitalize(playerSelection), computerSelection);
            console.log(result);

            if (result.includes("won")) {
                playerScore++;
            } else if (result.includes("lose")) {
                computerScore++;
            }
            round++;
        }
    }
    console.log(`Your score: ${playerScore}\nComputer's score: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("YOU WON!");
    } else if (playerScore < computerScore) {
        console.log("YOU LOSE!");
    } else {
        console.log("IT'S A DRAW!");
    }
}

game();