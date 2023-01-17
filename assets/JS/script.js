    document.addEventListener("DOMContentLoaded" , function() {

    const availableSelections = ["rock", "paper", "scissors"];  
    const resultOutput = document.querySelector(".result_txt");
    const rockHand = document.getElementById("rock");
    const paperHand = document.getElementById("paper");
    const scissorsHand = document.getElementById("scissors");   
    const letsFight = document.getElementById("fight");
     
    document.querySelector("#close_pop").addEventListener("click", function() {
    document.querySelector(".how_to_play_container").style.display = "none";
    document.querySelector(".submit_btn").style.display = "block";
    let name = document.getElementById("player_name").value;
    document.getElementById("player_screen_name").innerHTML = name + " Score:" + " ";
    closePopup();
    });


    document.getElementById("player_name").focus();
      
    function gameChoice(playerChoice){
        const chosenCompSelection = compSelection();
        if (playerChoice === chosenCompSelection) {
            playerDraw();
            document.getElementById(playerChoice).classList.add("draw-orange");
            setTimeout(function() { 
                document.getElementById(playerChoice).classList.remove("draw-orange");
            },700);
          } else if (
            (playerChoice === 'rock' && chosenCompSelection === 'scissors') ||
            (playerChoice === 'paper' && chosenCompSelection === 'rock') ||
            (playerChoice === 'scissors' && chosenCompSelection === 'paper')
          ) {
            playerWins();
            document.getElementById(playerChoice).classList.add("winner-green");
            setTimeout(function() { 
            document.getElementById(playerChoice).classList.remove("winner-green");
            },700);
          } else {
            compWins();
            document.getElementById(playerChoice).classList.add("loser-red");
            setTimeout(function() { 
                document.getElementById(playerChoice).classList.remove("loser-red");
            },700);
          }
          whatScore();
    } 

    function playerDraw() {
        document.getElementById("round_status_txt").classList.add("draw-txt-orange");
        setTimeout(function() { 
            document.getElementById("round_status_txt").classList.remove("draw-txt-orange");
            resultOutput.innerHTML = "Choose your Fighter!!!";
        },1000);
        resultOutput.innerHTML = "Its a Draw";
        
    }


    function playerWins() {
        let oldScore = parseInt(document.getElementById("playerScore").innerText);
        document.getElementById("playerScore").innerText = ++oldScore;
        document.getElementById("round_status_txt").classList.add("winner-txt-green");
        setTimeout(function() { 
            document.getElementById("round_status_txt").classList.remove("winner-txt-green");
            resultOutput.innerHTML = "Choose your Fighter!!!";
        },1000);
        resultOutput.innerHTML = "Congratulations!!! Player won this round...";
        whatScore();
    }

    
    function compWins() {
        let oldScore = parseInt(document.getElementById("compScore").innerText);
        document.getElementById("compScore").innerText = ++oldScore;
        document.getElementById("round_status_txt").classList.add("loser-txt-red");
        setTimeout(function() { 
            document.getElementById("round_status_txt").classList.remove("loser-txt-red");
            resultOutput.innerHTML = "Choose your Fighter!!!";
        },1000);
        resultOutput.innerHTML = "Computer won this Round!!!";
    }


    function compSelection() {
        const randomCompChoice = Math.floor(Math.random() * availableSelections.length);
        return availableSelections[randomCompChoice];
    }

    function whatScore() {
        if (document.getElementById("playerScore").innerText == 5) {
            alert("GAME OVER -- You Win");
            resultOutput.innerHTML = "YOU WIN ___ GAME OVER";
            resetGame();
        } else if (document.getElementById("compScore").innerText == 5) {
            alert("GAME OVER -- You Lose");
            resultOutput.innerHTML = "YOU LOSE ___ GAME OVER";
            resetGame();
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

        function closePopup(){
            document.body.classList.remove("disabled-background");
        }

        runGame();

        letsFight.addEventListener('click', resetGame);

    });