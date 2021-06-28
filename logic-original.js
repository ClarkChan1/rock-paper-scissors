const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

let playerScore = 0;
let computerScore = 0;

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
    return "YOU WIN! Rock beats Scissors";
  }
  if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    playerScore++;
    return "YOU WIN! Papaer beats Rock";
  }
  if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
    playerScore++;
    return "YOU WIN! Scissors beats Paper";
  }

  // lose conditions
  if (playerSelection == "ROCK" && computerSelection == "PAPER") {
    computerScore++;
    return "YOU LOSE! Paper beats Rock";
  }
  if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
    computerScore++;
    return "YOU LOSE! Scissors beats Paper";
  }
  if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
    computerScore++;
    return "YOU LOSE! Rock beats Scissors";
  }

  // tie conditions
  if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS" || playerSelection == "ROCK" && computerSelection == "ROCK" || playerSelection == "PAPER" && computerSelection == "PAPER") {
    return "Tie Game!";
  }
}

function game() {
  // reset the scores
  playerScore = 0;
  computerScore = 0;
  for (let x = 0; x < 5; x++) {
    let playerSelection = "invalid";
    while(playerSelection === "invalid"){
      playerSelection = prompt("choose your weapon: rock, paper, or scissors");
      playerSelection = playerSelection.toUpperCase() === "ROCK" ? "ROCK" : playerSelection.toUpperCase() === "PAPER" ? "PAPER" : playerSelection.toUpperCase() === "SCISSORS" ? "SCISSORS" : "invalid";
    }
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerScore > computerScore){
    console.log(`You Won! player score was: ${playerScore}, computer score was: ${computerScore}.`);
  } else if(playerScore < computerScore){
    console.log(`You Lost! player score was: ${playerScore}, computer score was: ${computerScore}.`);
  } else {
    // tie Game
    console.log(`Tie Game! player score was: ${playerScore}, computer score was: ${computerScore}.`);
  }
}
