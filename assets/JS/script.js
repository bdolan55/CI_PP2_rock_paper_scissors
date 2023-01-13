    document.addEventListener("DOMContentLoaded" , function() {

    const availableSelections = ["rock", "paper", "scissors"];  
    const scoringArea = document.querySelector(".scores-area");
    const resultOutput = document.querySelector(".result_txt");
    const rockHand = document.getElementById("rock");
    const paperHand = document.getElementById("paper");
    const scissorsHand = document.getElementById("scissors");   
    const letsFight = document.getElementById("fight");
    const playerHandChoice = document.querySelector("game_btn");


    document.querySelector("#close_pop").addEventListener("click", function() {
        document.querySelector(".how_to_play_container").style.display = "none";
    });

    function gameChoice(playerChoice){
        const chosenCompSelection = compSelection();
        if (playerChoice === chosenCompSelection) {
            playerDraw();
          } else if (
            (playerChoice === 'rock' && chosenCompSelection === 'scissors') ||
            (playerChoice === 'paper' && chosenCompSelection === 'rock') ||
            (playerChoice === 'scissors' && chosenCompSelection === 'paper')
          ) {
            playerWins();
          } else {
            compWins();
          }

    } 

    function playerDraw() {
        resultOutput.innerHTML = "ITS A DRAW!!";
    }


    function playerWins() {
        let oldScore = parseInt(document.getElementById("playerScore").innerText);
        document.getElementById("playerScore").innerText = ++oldScore;
        resultOutput.innerHTML = "Congratulations!!! Player won this round...";
        whatScore();

    }

    
    function compWins() {
        let oldScore = parseInt(document.getElementById("compScore").innerText);
        document.getElementById("compScore").innerText = ++oldScore;
        resultOutput.innerHTML = "Computer won this Round!!!";
        whatScore();
    }


    function compSelection() {
        const randomCompChoice = Math.floor(Math.random() * availableSelections.length);
        return availableSelections[randomCompChoice];
    }

    function whatScore () {
        if (playerWins === 5) {
            alert("GAME OVER -- You Win");
        } else if (compWins === 5) {
            alert("GAME OVER -- You Lose");
        }
    }

    function resetGame(){
        document.getElementById("compScore").innerText = 0;
        document.getElementById("playerScore").innerText = 0;
        resultOutput.innerHTML = "Choose your Fighter!!!!";

    }

    function runGame() {
            rockHand.addEventListener('click', function() {
                gameChoice("rock");
            });
            paperHand.addEventListener('click', function() {
                gameChoice("paper");
            });
            scissorsHand.addEventListener('click', function() {
                gameChoice("scissors");
            });

        }

        runGame();

        letsFight.addEventListener('click', resetGame);

    });