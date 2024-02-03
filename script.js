const aiArray = ["rock", "paper", "scissors"];

function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let computerChoice = randomChoice(aiArray);
let userChoice = prompt("Make your choice: rock, paper, or scissors?").toLowerCase();

if (userChoice !== "paper" && userChoice !== "scissors" && userChoice !== "rock") {
    alert("Please enter a valid choice. Reload to play again.");
} else {
    playRound(userChoice, computerChoice);
}

function playRound(player, computer) {
    if (player === computer) {
        alert("Draw!");
    } else if (player === "rock" && computer === "scissors" ||
               player === "paper" && computer === "rock" ||
               player === "scissors" && computer === "paper") {
        alert("HEHEHEHA");
        win++;
    } else {
        alert("YOU LOSE, TONEY");
        loss++;
    }
}

console.log(`User choice: ${userChoice}`);
console.log(`Computer choice: ${computerChoice}`);

