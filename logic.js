const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

let playerScore = 0;
let computerScore = 0;

let scoreString = `You: ${playerScore} Computer: ${computerScore}`;

// customize all buttons
let buttonGroup = document.querySelector(".button-and-image-group");
console.log(buttonGroup.childNodes);

// get all the buttons and save them as variables
let rockButton = document.querySelector(".rock-button");
let paperButton = document.querySelector(".paper-button");
let scissorsButton = document.querySelector(".scissors-button");

// computer choice
let computerSelection;

// variable for the scoreboard
let scoreboard = document.querySelector('.score');
scoreboard.innerHTML = "Click Rock, Paper, or Scissors to play!\n"+ `Your score: ${playerScore}, Computer score: ${computerScore}`;

// make the play again button
let playAgainButton = document.createElement("button");
playAgainButton.textContent = "play again";

function computerPlay() {
  let choice = Math.floor(Math.random() * 3) + 1;
  switch (choice) {
    case ROCK:
      return 'ROCK';
    case PAPER:
      return 'PAPER';
    case SCISSORS:
      return 'SCISSORS';
  }
}

function playRound(playerSelection, computerSelection) {
  // win conditions
  if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
    playerScore++;
    scoreboard.innerHTML = "YOU WIN! Rock beats Scissors\n" + `Your score: ${playerScore}, Computer score: ${computerScore}`;
  }
  if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    playerScore++;
    scoreboard.innerHTML = "YOU WIN! Paper beats Rock\n" + `Your score: ${playerScore}, Computer score: ${computerScore}`;
  }
  if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
    playerScore++;
    scoreboard.innerHTML = "YOU WIN! Scissors beats Paper\n" + `Your score: ${playerScore}, Computer score: ${computerScore}`;
  }

  // lose conditions
  if (playerSelection == "ROCK" && computerSelection == "PAPER") {
    computerScore++;
    scoreboard.innerHTML = "YOU LOSE! Paper beats Rock\n" + `Your score: ${playerScore}, Computer score: ${computerScore}`;
  }
  if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
    computerScore++;
    scoreboard.innerHTML = "YOU LOSE! Scissors beats Paper\n" + `Your score: ${playerScore}, Computer score: ${computerScore}`;

  }
  if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
    computerScore++;
    scoreboard.innerHTML = "YOU LOSE! Rock beats Scissors\n" + `Your score: ${playerScore}, Computer score: ${computerScore}`;
  }

  // tie conditions
  if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS" || playerSelection == "ROCK" && computerSelection == "ROCK" || playerSelection == "PAPER" && computerSelection == "PAPER") {
    scoreboard.innerHTML = "Tie Game!\n" + `your score: ${playerScore}, Computer score: ${computerScore}`;
  }
}

function checkScore() {
  if (playerScore !== 5 && computerScore !== 5) {
    return;
  }
  if (playerScore == 5) {
    scoreboard.innerHTML = "You WIN!\n" + `Your score: ${playerScore}, Computer score: ${computerScore}\n` + "Click Rock, Paper, or Scissors to play again!";
  }
  if (computerScore == 5) {
    scoreboard.innerHTML = "You LOSE!\n" + `Your score: ${playerScore}, Computer score: ${computerScore}\n` + "Click Rock, Paper, or Scissors to play again!";
  }
  // reset scores and display the play again button and remove the other buttons until the user clicks play agian
  playerScore = 0;
  computerScore = 0;

}

// add event listeners to all the buttons
// the way the game works is that whenever a button is clicked a round plays, so call playRound on each eventlistener
rockButton.addEventListener('click', function() {
  computerSelection = computerPlay();
  playRound('ROCK', computerSelection);
  checkScore();
});

paperButton.addEventListener('click', function() {
  computerSelection = computerPlay();
  playRound('PAPER', computerSelection);
  checkScore();
});

scissorsButton.addEventListener('click', function() {
  computerSelection = computerPlay();
  playRound('SCISSORS', computerSelection);
  checkScore();
});
