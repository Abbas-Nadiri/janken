const aiArray = ["rock", "paper", "scissors"];

function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let computerChoice = randomChoice(aiArray);
let userChoice = prompt("Make your choice: rock, paper, or scissors?");
userChoice = userChoice.toLowerCase();




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
    } else {
        alert("YOU LOSE, TONEY");
    }
}

/*
function playRound(player, computer) {
    if (player === computer) {
        alert("Draw!");
    } else if (player === "rock" && computer === "paper") {
        alert("YOU LOSE, TONEY");
    } else if (player === "rock" && computer === "scissors") {
        alert("HEHEHEHA");
    } else if (player === "paper" && computer === "scissors") {
        alert("YOU LOSE, TONEY");
    } else if (player === "paper" && computer === "rock") {
        alert("HEHEHEHA");
    } else if (player === "scissors" && computer === "paper") {
        alert("HEHEHEHA");
    } else if (player === "scissors" && computer === "rock") {
        alert("YOU LOSE, TONEY");
    }
}
*/

console.log(`User choice: ${userChoice}`);
console.log(`Computer choice: ${computerChoice}`);

