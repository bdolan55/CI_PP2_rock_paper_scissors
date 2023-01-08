    const availableSelections = ["rock", "paper", "scissors"];  
    const playerScore = 0;
    const compScore = 0;
    const scoringArea = document.querySelector(".scores-area");
    const resultOutput = document.querySelector(".result_txt");
    const rockHand = document.getElementById("rock");
    const paperHand = document.getElementById("paper");
    const scissorsHand = document.getElementById("scissors");   
    const letsFight = document.getElementById("fight");



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
        console.log("Its a Draw");
        resultOutput.innerHTML = "ITS A DRAW";
    }


    function playerWins() {
        let oldScore = parseInt(document.getElementById("playerScore").innerText);
        document.getElementById("playerScore").innerText = ++oldScore;
        resultOutput.innerHTML = "you win winner";

    }

    
    function compWins() {
        let oldScore = parseInt(document.getElementById("compScore").innerText);
        document.getElementById("compScore").innerText = ++oldScore;
        resultOutput.innerHTML = "you lose loser";
    }


    function compSelection () {
        const randomCompChoice = Math.floor(Math.random() * availableSelections.length);
        return availableSelections[randomCompChoice];
    }

    function runGame(){
            rockHand.addEventListener('click', function() {
                gameChoice("rock")
            })
            paperHand.addEventListener('click', function() {
                gameChoice("paper")
            })
            scissorsHand.addEventListener('click', function() {
                gameChoice("scissors")
            })
        }

        runGame();