const aiArray = ["rock", "paper", "scissors"];

function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

console.log(randomChoice(aiArray));