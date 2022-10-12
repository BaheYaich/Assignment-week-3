
// Declaring game input choices 
const gameInputs = ["Rock", "Paper", "Scissors"];
let computerSelection;
let playerSelection;
let score = 0;
let wins = 0;
let losses = 0;
let gameOutcome;

// Computer logic
function computerPlay() {
    randomInput = Math.floor(Math.random() * gameInputs.length);
    console.log(randomInput, gameInputs[randomInput]);
    return gameInputs[randomInput];
};

function gameRound (playerSelection, computerSelection) {
    //Game inputs
    computerSelection = computerPlay().toLowerCase();
    playerSelection = window.prompt("Rock, Paper or Scissors?").toLowerCase();

    // Game logic
    switch (playerSelection + computerSelection) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            gameOutcome = 'YOU WIN! You chose ' + playerSelection + ' and the computer chose ' + computerSelection
            score++;
            wins++;
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            gameOutcome = 'YOU LOSE! You chose ' + playerSelection + ' and the computer chose ' + computerSelection
            score--;
            losses++;
            break
        case 'scissorsscissors':
        case 'rockrock':
        case 'paperpaper':
            gameOutcome = 'ITS A DRAW! You chose ' + playerSelection + ' and the computer chose ' + computerSelection
            break
    }
    console.log("Player score = ", score);
    // Game outcome
    return gameOutcome;
};

function bestOfFive (wins, draws, losses){
    switch (score) {
        case (score === 0) :
            console.log("Draw, It's inconclusive");
            break;
        case (score > 0) :
            console.log("You won the best of five");
            break;
        case (score < 0) :
            console.log("You lost the best of five");
            break;
    }
};

function game() {
    let gameRounds = true;
    while (gameRounds) {
        for (let i = 0; i < 5; i++) {
            gameRound(); 
            console.log(gameOutcome);
            if (wins >= 3) {
                gameRounds = !gameRounds;
                break;
            }
            else if (losses >= 3){
                gameRounds = !gameRounds;
                break;
            }
        } 
        gameRounds = !gameRounds;
        bestOfFive();   
    }
}

game();