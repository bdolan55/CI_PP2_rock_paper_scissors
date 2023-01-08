    const availableSelections = ["rock", "paper", "scissors"];  
    const playerScore = 0;
    const compScore = 0;
  /*  const playerScoreTag = document.getElementById("playerScore");
    const compScoreTag = document.getElementById("compScore"); */
    const scoringArea = document.querySelector(".scores-area");
    const resultOutput = document.querySelector(".result_txt");
    const rockHand = document.getElementById("rock");
    const paperHand = document.getElementById("paper");
    const scissorsHand = document.getElementById("scissors");   



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
    }


    function playerWins() {
        let oldScore = parseInt(document.getElementById("playerScore").innerText);
        document.getElementById("playerScore").innerText = ++oldScore;
    }

    
    function compWins() {
        let oldScore = parseInt(document.getElementById("compScore").innerText);
        document.getElementById("compScore").innerText = ++oldScore;
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

        runGame("rock");