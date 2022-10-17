
// Declarations
const gameInputs = ["rock", "paper", "scissors"];
const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices')
const scoreDisplay = document.querySelector('#score')
let score = 0;

// Handling clicking event
const handleClick = (e) => {
    const playerSelection = e.target.innerHTML
    const computerSelection = gameInputs[Math.floor(Math.random() * gameInputs.length)]
    getResults(playerSelection, computerSelection)
}
gameInputs.forEach(choice => {
    const button = document.createElement('button')
    button.classList.add("choice")
    button.innerHTML = choice
    button.addEventListener('click', handleClick)
    choicesDisplay.appendChild(button)
});

// Game logic
const getResults = (playerSelection, computerSelection) => {
    switch (playerSelection + computerSelection) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            gameOutcome = 'YOU WIN! You chose ' + playerSelection + ' and the computer chose ' + computerSelection
            resultDisplay.innerHTML = gameOutcome;
            score += 1;
            scoreDisplay.innerHTML = "Running score " + score
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            gameOutcome = 'YOU LOSE! You chose ' + playerSelection + ' and the computer chose ' + computerSelection
            resultDisplay.innerHTML = gameOutcome;
            scoreDisplay.innerHTML = "Running score " + score
            break
        case 'scissorsscissors':
        case 'rockrock':
        case 'paperpaper':
            gameOutcome = 'ITS A DRAW! You chose ' + playerSelection + ' and the computer chose ' + computerSelection
            resultDisplay.innerHTML = gameOutcome;
            scoreDisplay.innerHTML = "Running score " + score
            break
    }
    // Ending game condition and reset
    if (score === 5) {
        alert("Congratulations, you have won five rounds");
        score = 0;
    }
};