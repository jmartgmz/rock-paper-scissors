let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * computerChoice.length);
  console.log("Computer chose: " + computerChoice[randomIndex]);
  return computerChoice[randomIndex];
}

function getHumanChoice() {
  let humanChoice = prompt("Choose! rock, paper, or scissors");
  humanChoice = humanChoice.toLowerCase();
  if (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    alert("Invalid choice! Please choose rock, paper, or scissors.");
    return getHumanChoice(); // Ask again if the input is invalid
  }
  return humanChoice;
}

function playRound(HumanChoice, ComputerChoice) {
  if (HumanChoice === ComputerChoice) {
    return "It's a tie!";
  } else if (
    (HumanChoice === "rock" && ComputerChoice === "scissors") ||
    (HumanChoice === "paper" && ComputerChoice === "rock") ||
    (HumanChoice === "scissors" && ComputerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${HumanChoice} beats ${ComputerChoice}.`;
  } else {
    computerScore++;
    return `You lose! ${ComputerChoice} beats ${HumanChoice}.`;
  }
}

function playGame() {
  while (humanScore < 5 && computerScore < 5) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log(playRound(humanChoice, computerChoice));
    console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
  }

  if (humanScore === 5) {
    return "Congratulations! You won the game!";
  } else if (computerScore === 5) {
    return "Sorry, you lost the game. Better luck next time!";
  }
}

console.log(playGame());
