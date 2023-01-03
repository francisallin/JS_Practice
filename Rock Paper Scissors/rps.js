//var playerCounter = 0, computerCounter = 0, 
var playerSelection;
    
/*
const playerInput = prompt ("Please type rock, paper or scissors");
const playerLowerCase = playerInput.toLowerCase();
const playerSelection = playerLowerCase[0].toUpperCase()+playerLowerCase.substring(1);
*/
const body = document.querySelector("body");
var Rock = document.querySelector("#Rock");
Rock.addEventListener ("click", () =>{
        playerSelection = Rock.textContent;
        game();               
    });
var Paper = document.querySelector("#Paper");
Paper.addEventListener ("click", () =>{
        playerSelection = Paper.textContent;
        game();               
    });
var Scissors = document.querySelector("#Scissors");
Scissors.addEventListener ("click", () =>{
        playerSelection = Scissors.textContent;
        game();               
    })

function game (){
    function computerPlay (){
        const RPS_Array = ["Rock", "Paper", "Scissors"];
        const RPS_Pick = RPS_Array[Math.floor(Math.random()*(RPS_Array.length))];
        return(RPS_Pick);
    }
    var computerSelection = computerPlay();

    function playRound () {
        if (computerSelection == playerSelection){
            const result = document.createElement("div");
            result.textContent = "Draw!";
            body.appendChild(result);
            //playerCounter++, computerCounter++;
        }
        else if ((computerSelection == 'Rock' && playerSelection == 'Paper') 
        || (computerSelection == 'Paper' && playerSelection == 'Scissors') 
        || (computerSelection == 'Scissors' && playerSelection == 'Rock')){
            const result = document.createElement("div");
            result.textContent = "Congratulations, you win this round!";
            body.appendChild(result);
            //playerCounter++;
        }   
        else {
            const result = document.createElement("div");
            result.textContent = "Sorry, you lose this round!";
            body.appendChild(result);
            //computerCounter++;
        }
    }

    playRound ();
    console.log (playerSelection, computerSelection);
}

/*
for (let i=0; i<5; i++){
game();
}
*/
//game();
/*
function finalMessage(){
if (playerCounter > computerCounter) {
alert ("Congratulations, you win this game!");
}
else if (playerCounter < computerCounter){
alert ("Sorry, you lose this game!");
}
else {
alert ("This game is a draw!");
}}

if (playerCounter ==5 || computerCounter ==5){
    finalMessage ();
}
*/
