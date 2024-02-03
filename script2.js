const aiArray = ["rock", "paper", "scissors"];
let win = 0;
let loss = 0;

function randomChoice(array) {

    return array[Math.floor(Math.random() * array.length)];

}

function spellCheck(choice) {

    if (choice !== "paper" && choice !== "scissors" && choice !== "rock") {

        alert("Please enter a valid choice.");

    } else {

        return false;

    }
}

function playRound() {

    let player = prompt("Make your choice: rock, paper, or scissors?").toLowerCase();
    let computer = randomChoice(aiArray);

    if (player === computer) {

        alert(`Draw! You both picked ${player}.`);
        console.log(`You: ${win} | Computer: ${loss}`);

    } else if (player === "rock" && computer === "scissors" ||
               player === "paper" && computer === "rock" ||
               player === "scissors" && computer === "paper") {

        alert(`You win! You picked ${player} and computer picked ${computer}.`);
        win++;
        console.log(`You: ${win} | Computer: ${loss}`);

    } else {

        if (spellCheck(player) === false) {

            alert(`YOU LOSE, TONEY. You picked ${player} but computer picked ${computer}.`);
            loss++;
            console.log(`You: ${win} | Computer: ${loss}`);
        }

    }
}

function playGame() {
    while (win < 3 && loss < 3) {
        playRound()
    }
    if (win === 3) {
        alert("You win!");
    } else if (loss === 3) {
        alert("You lose...");
    }
}
playGame();