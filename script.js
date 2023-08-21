function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else {
    let isPlayerWon =
      (playerSelection == "Rock" && computerSelection == "Scissors") ||
      (playerSelection == "Paper" && computerSelection == "Rock") ||
      (playerSelection == "Scissors" && computerSelection == "Paper");
    if (isPlayerWon) {
      return `You won! ${playerSelection} beats ${computerSelection}.`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }
}

let playerScore = 0;
let computerScore = 0;
let playerSelection, computerSelection, result;
let round = 0;

const buttons = document.querySelectorAll("button");
const container = document.querySelector(".container");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");

div1.classList.add("points");
div2.classList.add("round-result");
div3.classList.add("match-result");

div1.textContent = `Your score: ${playerScore}\nMy score: ${computerScore}`;

[div1, div2, div3].forEach((div) => {
  div.style.padding = "20px 3px";
  div.style.color = "black";
  div.style.whiteSpace = "pre";
  container.appendChild(div);
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.id;
    computerSelection = getComputerChoice();
    if (playerScore != 5 && computerScore != 5) {
      result = playRound(playerSelection, computerSelection);
      div2.textContent = `You played ${playerSelection}.\nI played ${computerSelection}.\n${result}`;
      if (result.includes("won")) {
        playerScore++;
      } else if (result.includes("lose")) {
        computerScore++;
      }
      div1.textContent = `Your score: ${playerScore}\nMy score: ${computerScore}`;
    } else {
      if (playerScore > computerScore) {
        div3.textContent = "YOU WON!";
      } else if (playerScore < computerScore) {
        div3.textContent = "I WON!";
      } else {
        div3.textContent = "IT'S A DRAW!";
      }
    }
  });
});
