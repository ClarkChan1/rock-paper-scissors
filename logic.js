const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

let playerScore = 0;
let computerScore = 0;

let scoreString = `You: ${playerScore} Computer: ${computerScore}`;

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
    console.log("YOU WIN! Rock beats Scissors");
    console.log(`your score: ${playerScore}, computer score: ${computerScore}`);
  }
  if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    playerScore++;
    console.log("YOU WIN! Paper beats Rock");
    console.log(`your score: ${playerScore}, computer score: ${computerScore}`);
  }
  if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
    playerScore++;
    console.log("YOU WIN! Scissors beats Paper");
    console.log(`your score: ${playerScore}, computer score: ${computerScore}`);
  }

  // lose conditions
  if (playerSelection == "ROCK" && computerSelection == "PAPER") {
    computerScore++;
    console.log("YOU LOSE! Paper beats Rock");
    console.log(`your score: ${playerScore}, computer score: ${computerScore}`);
  }
  if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
    computerScore++;
    console.log("YOU LOSE! Scissors beats Paper");
    console.log(`your score: ${playerScore}, computer score: ${computerScore}`);
  }
  if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
    computerScore++;
    console.log("YOU LOSE! Rock beats Scissors");
    console.log(`your score: ${playerScore}, computer score: ${computerScore}`);
  }

  // tie conditions
  if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS" || playerSelection == "ROCK" && computerSelection == "ROCK" || playerSelection == "PAPER" && computerSelection == "PAPER") {
    console.log("Tie Game!");
    console.log(`your score: ${playerScore}, computer score: ${computerScore}`);
  }
}

function checkScore() {
  if (playerScore !== 5 && computerScore !== 5) {
    return;
  }
  if (playerScore == 5) {
    scoreboard.innerHTML = "You WIN!";
  }
  if (computerScore == 5) {
    scoreboard.innerHTML = "You LOSE!";
  }
  // reset scores and display the play again button and remove the other buttons until the user clicks play agian
  playerScore = 0;
  computerScore = 0;

}

// customize all buttons
let buttonGroup = document.querySelector(".button-group");
console.log(buttonGroup.childNodes);

// get all the buttons and save them as variables
let rockButton = document.querySelector(".rock-button");
let paperButton = document.querySelector(".paper-button");
let scissorsButton = document.querySelector(".scissors-button");

// computer choice
let computerSelection;

// variable for the scoreboard
let scoreboard = document.querySelector('.score');
scoreboard.innerHTML = "this is the score";

// make the play again button
let playAgainButton = document.createElement("button");
playAgainButton.textContent = "play again";


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
