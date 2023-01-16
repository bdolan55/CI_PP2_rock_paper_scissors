    document.addEventListener("DOMContentLoaded" , function() {

    const availableSelections = ["rock", "paper", "scissors"];  
    const resultOutput = document.querySelector(".result_txt");
    const rockHand = document.getElementById("rock");
    const paperHand = document.getElementById("paper");
    const scissorsHand = document.getElementById("scissors");   
    const letsFight = document.getElementById("fight");



    document.querySelector("#close_pop").addEventListener("click", function() {
    document.querySelector(".how_to_play_container").style.display = "none";
    });
      
    function gameChoice(playerChoice){
        const chosenCompSelection = compSelection();
        if (playerChoice === chosenCompSelection) {
            playerDraw();
            document.getElementById(playerChoice).classList.add("draw-orange");
            setTimeout(function() { 
                document.getElementById(playerChoice).classList.remove("draw-orange")
            },700);
          } else if (
            (playerChoice === 'rock' && chosenCompSelection === 'scissors') ||
            (playerChoice === 'paper' && chosenCompSelection === 'rock') ||
            (playerChoice === 'scissors' && chosenCompSelection === 'paper')
          ) {
            playerWins();
            document.getElementById(playerChoice).classList.add("winner-green");
            setTimeout(function() { 
                document.getElementById(playerChoice).classList.remove("winner-green")
            },700);
          } else {
            compWins();
            document.getElementById(playerChoice).classList.add("loser-red");
            setTimeout(function() { 
                document.getElementById(playerChoice).classList.remove("loser-red")
            },700);
          }

    } 

    function playerDraw() {
        resultOutput.innerHTML = "ITS A DRAW!!";
        
    }


    function playerWins() {
        let oldScore = parseInt(document.getElementById("playerScore").innerText);
        document.getElementById("playerScore").innerText = ++oldScore;
        resultOutput.innerHTML = "Congratulations!!! Player won this round...";
    }

    
    function compWins() {
        let oldScore = parseInt(document.getElementById("compScore").innerText);
        document.getElementById("compScore").innerText = ++oldScore;
        resultOutput.innerHTML = "Computer won this Round!!!";
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