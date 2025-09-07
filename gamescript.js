// Global variables
let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let roundResult = "";

// Game logic functions
function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * computerChoice.length);
  console.log("Computer chose: " + computerChoice[randomIndex]);
  return computerChoice[randomIndex];
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

// UI update functions
function updateScore() {
    document.getElementById('human-score').textContent = `Human: ${humanScore}`;
    document.getElementById('computer-score').textContent = `Computer: ${computerScore}`;
    document.getElementById('result').textContent = roundResult;
    checkWinner();
}

function checkWinner() {
    if (humanScore === 5) {
        const resultElement = document.getElementById('result');
        resultElement.textContent = "Congratulations! You won the game!";
        resultElement.style.color = "green";
    } else if (computerScore === 5) {
        const resultElement = document.getElementById('result');
        resultElement.textContent = "Game Over! Computer wins!";
        resultElement.style.color = "red";
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundResult = "Game reset. Make your move!";
    updateScore();
    const resultElement = document.getElementById('result');
    resultElement.style.color = "black";
}

// Helper function to reduce repetition
function handleChoice(choice) {
    if (humanScore >= 5 || computerScore >= 5) return;
    
    humanChoice = choice;
    const result = playRound(choice, getComputerChoice());
    roundResult = result;
    updateScore();
    console.log(result);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Game buttons
    document.getElementById('rock').addEventListener('click', () => handleChoice('rock'));
    document.getElementById('paper').addEventListener('click', () => handleChoice('paper'));
    document.getElementById('scissors').addEventListener('click', () => handleChoice('scissors'));
    
    // Reset button
    document.getElementById('reset').addEventListener('click', () => {
        resetGame();
        console.log("Game reset.");
    });
});