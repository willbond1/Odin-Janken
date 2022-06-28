let playerPoints = 0;
let cpuPoints = 0;
let round = 0;

const maxRounds   = 5;
const btns        = document.querySelectorAll("div#moves button");
const playerScore = document.querySelector("div#playerScore");
const cpuScore    = document.querySelector("div#cpuScore");
const actionArea  = document.querySelector("div#action");

function updateScore(result = "") {
    playerScore.textContent = `Player: ${playerPoints}`;
    cpuScore.textContent    = `CPU: ${cpuPoints}`;
    actionArea.textContent  = result;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function cpuPlay() {
    const moves = ["rock", "paper", "scissors"];
    return moves[getRandomInt(3)];
}

function playRound(playerMove, cpuMove) {
    playerMove = playerMove.toLowerCase();

    switch(playerMove) {
        case "rock":
            switch(cpuMove) {
                case "rock":
                    playerPoints++;
                    cpuPoints++;
                    return "It's a tie! Rock and rock.";
                case "paper":
                    cpuPoints++;
                    return "You lose! Paper covers rock.";
                case "scissors":
                    playerPoints++;
                    return "You win! Rock smashes scissors.";
            }
        case "paper":
            switch (cpuMove) {
                case "rock":
                    playerPoints++;
                    return "You win! Paper covers rock.";
                case "paper":
                    playerPoints++;
                    cpuPoints++;
                    return "It's a tie! Paper and paper.";
                case "scissors":
                    cpuPoints++;
                    return "You lose! Scissors cuts paper.";
            }
        case "scissors":
            switch (cpuMove) {
                case "rock":
                    cpuPoints++;
                    return "You lose! Rock smashes scissors.";
                case "paper":
                    playerPoints++;
                    return "You win! Scissors cuts paper.";
                case "scissors":
                    playerPoints++;
                    cpuPoints++;
                    return "It's a tie! Scissors and scissors.";
            }
    }
}

function playGame() {
    console.log(this);
    let playerMove = this.textContent;
    let result = playRound(playerMove, cpuPlay());
    updateScore(result);

    round++;
    if(round === maxRounds) {
        let winMsg;
        (playerPoints > cpuPoints) ? winMsg = "You win!" :
            (cpuPoints > playerPoints) ? winMsg = "You lose!" :
            winMsg = "It's a tie!";
        
        winMsg += " Refresh to play again.";
        actionArea.textContent = winMsg;
        btns.forEach(btn => btn.removeEventListener("click", playGame));
    }
}

updateScore();

btns.forEach(btn => btn.addEventListener("click", playGame));

// let rounds = parseInt(prompt("How many rounds will you play?"));

// for(let i = 0; i < rounds; i++) {
//     console.log(`You: ${playerPoints} - CPU: ${cpuPoints}`);
//     let playerMove = prompt("What will you play?");
//     let cpuMove = cpuPlay();
//     let outcome = playRound(playerMove, cpuMove);
//     console.log(outcome);
// }