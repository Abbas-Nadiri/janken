const aiArray = ["rock", "paper", "scissors"];

function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let userChoice = prompt("Make your choice: rock, paper, or scissors?");
userChoice = userChoice.toLowerCase();
console.log(`User choice: ${userChoice}`);
console.log(`Computer choice: ${randomChoice(aiArray)}`);

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        alert("Draw!")
    }
}

if (userChoice !== "paper" && userChoice !== "scissors" && userChoice !== "rock") {
    alert("Please enter a valid choice. Reload to play again.")

} else {

    playRound(userChoice, randomChoice)
}