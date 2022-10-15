
// Declaring game input choices 
const gameInputs = ["Rock", "Paper", "Scissors"];
let computerSelection;
let playerSelection = "";
let score = 0;
let wins = 0;
let losses = 0;
let gameOutcome;
let gameRounds = true;

// Computer logic
function computerPlay() {
    randomInput = Math.floor(Math.random() * gameInputs.length);
    // console.log(randomInput, gameInputs[randomInput]);
    return gameInputs[randomInput];
};

function gameRound (playerSelection, computerSelection) {
    //Game inputs
    computerSelection = computerPlay().toLowerCase();
    // Should insert a prompt validation loop using the gameInputs array
    playerSelection = window.prompt("Rock, Paper or Scissors?").toLowerCase();

    // Game logic
    switch (playerSelection + computerSelection) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            gameOutcome = 'YOU WIN! You chose ' + playerSelection + ' and the computer chose ' + computerSelection
            score += 1;
            wins += 1;
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            gameOutcome = 'YOU LOSE! You chose ' + playerSelection + ' and the computer chose ' + computerSelection
            score -= 1;
            losses += 1;
            break
        case 'scissorsscissors':
        case 'rockrock':
        case 'paperpaper':
            gameOutcome = 'ITS A DRAW! You chose ' + playerSelection + ' and the computer chose ' + computerSelection
            break
    }
    console.log("Player score = ", score);
    console.log(gameOutcome);
    // Game outcome
    return gameOutcome;
};

function game() {
    for (let i = 0; i < 5; i++) {
        gameRound(); 
        // Best of five mechanic
        if (wins === 3) {
            break
        }
        else if (losses === 3){
            break
        }
        // Should introduce a scenario when the window prompt is null
    }
    // Score decides the game's outcome
    if (score === 0) {
        console.log("Draw, It's inconclusive")
    }
    else if (score > 0) {
        console.log("You won the best of five")
    }      
    else if (score < 0) {
        console.log("You lost the best of five")
    }    
};

game();