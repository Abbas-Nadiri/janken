const aiArray = ["rock", "paper", "scissors"];
let win = 0;
let loss = 0;

function randomChoice(array) {

    return array[Math.floor(Math.random() * array.length)];

}

function playRound(choice) {

    let player = choice;
    let computer = randomChoice(aiArray);

    if (player === computer) {

        alert(`Draw! You both picked ${player}.`);

    } else if (player === "rock" && computer === "scissors" ||
               player === "paper" && computer === "rock" ||
               player === "scissors" && computer === "paper") {

        alert(`You win! You picked ${player} and computer picked ${computer}.`);
        win++;

    } else {

        alert(`YOU LOSE, TONEY. You picked ${player} but computer picked ${computer}.`);
        loss++;
    }
}

let body = document.querySelector("body");

let rock = document.createElement("button");
rock.textContent = "Rock";

let paper = document.createElement("button");
paper.textContent = "Paper";

let scissors = document.createElement("button");
scissors.textContent = "Scissors";

let reset = document.createElement("button");
reset.textContent = "Reset"

body.append(rock);
body.append(paper);
body.append(scissors);
body.append(reset);
let div = document.createElement("div");
div.textContent = `You: ${win} | Computer: ${loss}`
body.append(div);

function customClickEvent(buttonChoice) {
    if (win === 5 || loss === 5) {
        alert("Reset to play again.");
    } else {
        playRound(buttonChoice);
        div.textContent = `You: ${win} | Computer: ${loss}`;
        if (win === 5) {
            alert("You win!");
        } else if (loss === 5) {
            alert("You lose...");
        }
    }
}

rock.addEventListener("click", () => {
    customClickEvent("rock");
});
paper.addEventListener("click", () => {
    customClickEvent("paper");
});
scissors.addEventListener("click", () => {
    customClickEvent("scissors");
});

reset.addEventListener("click", () => {
    win = 0;
    loss = 0;
    div.textContent = `You: ${win} | Computer: ${loss}`;
})