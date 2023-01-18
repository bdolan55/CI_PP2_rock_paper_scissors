    /* This Event listener is there to wait for the page to 
    load and the will run then function for the code on the page.
    Taken and adapted from Code Insitute Love Maths Project. See 
    README for more details.*/
    document.addEventListener("DOMContentLoaded" , function() {


    /* This is a list of all the variables that are available to use throughout the 
    Javascript code*/
    const availableSelections = ["rock", "paper", "scissors"];  
    const resultOutput = document.querySelector(".result_txt");
    const rockHand = document.getElementById("rock");
    const paperHand = document.getElementById("paper");
    const scissorsHand = document.getElementById("scissors");   
    const letsFight = document.getElementById("fight");

    /**
    * The code below is run when by using an eventlistener on the "Lets Fight" button. 
    When the button is clicked it will change the how to play page into a display:none state 
    so it will dissappear.
    * The submit Button on the game container will change from its display:none state to 
    Display:Block.
    * The Value entered in the textbox area for player name will be added into the game 
    container area in the scores section.
    * The closePopup function will run also to remove the disabled background class.
    * Adapted from Six Minutes smarter and Coding Artist tutorial. See README for more details.
    **/        
    document.querySelector("#close_pop").addEventListener("click", function() {
    document.querySelector(".how_to_play_container").style.display = "none";
    document.querySelector(".submit_btn").style.display = "block";
    let name = document.getElementById("player_name").value;
    document.getElementById("player_screen_name").innerHTML = name + " Score:" + " ";
    closePopup();
    });

    /**
    * The below will run the .focus function so when the popup appears on page load the textbox 
    will be ready for the player to enter there name.
    **/

    document.getElementById("player_name").focus();

    /**
    * The below Event listener will run when the reset game button is click and will run the 
    resetGame function and return scores to 0-0.
    **/

    letsFight.addEventListener('click', resetGame);

    /**
     * The code below is the method function on how the game works.
     * When the the player chooses and hand it runs a "if, else if" statement
     * This statement compares the conditions on what outcome shall be taken wether it is True or False.
     * If the result is a draw , win or lose it will run the corresponding function and also the 
     methods / tasks within the statement.
     * The whatScore function will run when either the player or computer reaches 5 wins.
     * Adapted from Free Code Camp tutorial. See README for more details.
    **/  
      
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

    /**
     * The code below is the function that will run when a player and computer draws a round.
     * It will change the hand result text and color to Orange and the timeout function 
    will execute. 
     * After 1 second the function will timeout and return to default text and color.
     * The whatScore function will run when either the player or computer reaches 5 wins.
    **/

    function playerDraw() {
        document.getElementById("round_status_txt").classList.add("draw-txt-orange");
        setTimeout(function() { 
            document.getElementById("round_status_txt").classList.remove("draw-txt-orange");
            resultOutput.innerHTML = "Choose your Fighter!!!";
        },1000);
        resultOutput.innerHTML = "Its a Draw";
        
    }

    /**
     * The code below is the function that will run when the player wins the round.
     * It will change the result text and color to Green and the timeout function 
    will execute. 
    * It will increment the Player Score by 1.
    * After 1 second the function will timeout and return to default text and color.
    * The whatScore function will run when either the player or computer reaches 5 wins.
    **/

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

    /**
     * The code below is the function that will run when the Computer wins the round.
     * It will change the result text and color to Red and the timeout function 
    will execute. 
    * It will increment the Computer Score by 1.
    * After 1 second the function will timeout and return to default text and color.
    * The whatScore function will run when either the player or computer reaches 5 wins.
    **/

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

    /**
     * The code below is the function that will determine the Computer hand selection
     from the avaialble options in the Array in the availableSelections Variable.
    **/

    function compSelection() {
        const randomCompChoice = Math.floor(Math.random() * availableSelections.length);
        return availableSelections[randomCompChoice];
    }

    /**
     * The code below is the function that will run when either the Player
     or computer reaches 5.
     * When either player reaches five it an alert will Pop up and give the result of the game.
     * When the OK button is clicked on the Alert the game will reset to default 0-0 score.
    **/

    function whatScore() {
        if (document.getElementById("playerScore").innerText == 5) {
            alert("GAME OVER -- You Win");
            resetGame();
        } else if (document.getElementById("compScore").innerText == 5) {
            alert("GAME OVER -- You Lose");
            resetGame();
        }
    }

    /**
     * The code below is the function that will run when the OK button is clicked on the alert PopUp.
     * Score Values for both the player and the computer will return to "0".
     * Default text will return and prompt player to choose his hand.
    **/

    function resetGame(){
        document.getElementById("compScore").innerText = 0;
        document.getElementById("playerScore").innerText = 0;
        resultOutput.innerHTML = "Choose your Fighter!!!!";
    }

    /**
     * The code below is the function that has an event listener on each hand to determine when
     the game will start and what is hand is chosen .
    **/

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

    /**
     * The code below is the function states to remove the CSS disabled class on
      the game container when the closePopUp function is called.
    **/

        function closePopup(){
            document.body.classList.remove("disabled-background");
        }

        runGame();

    });