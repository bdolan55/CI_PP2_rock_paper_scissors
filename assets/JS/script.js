/**
 * function to wait for the DOM to stop loading 
 * Added event listeners to show which button was clicked ie. Rock,Paper,Scissors or Fight(submit)
 */

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "fight") {
                alert("You clicked fight");
            } else {
                let handChoice = this.getAttribute("data-type");
                alert(`You clicked ${handChoice}`); 
            }
        })
    }
})



function runGame() {


}




function playerChoice() {


}




function compChoice() {


}




function checkResult() {


}




function incPlayerScore() {


}




function incCompScore() {


}




function gameResult() {


}