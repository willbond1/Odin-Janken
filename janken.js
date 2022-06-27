let playerPoints = 0;
let cpuPoints = 0;

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

function game() {
    let rounds = parseInt(prompt("How many rounds will you play?"));

    for(let i = 0; i < rounds; i++) {
        console.log(`You: ${playerPoints} - CPU: ${cpuPoints}`);
        let playerMove = prompt("What will you play?");
        let cpuMove = cpuPlay();
        let outcome = playRound(playerMove, cpuMove);
        console.log(outcome);
    }

    (playerPoints > cpuPoints) ? console.log("You win!") :
        (cpuPoints > playerPoints) ? console.log("You lose!") :
        console.log("It's a tie!");
}

game();