
/*Button Actions*/
const body = document.querySelector('body');
const startGameBtn = document.querySelector('#startGame');

const buttons = document.querySelector('.buttons');

const rock = document.createElement('button');
const rockText = document.createTextNode('Rock');

const paper = document.createElement('button');
const paperText = document.createTextNode('Paper');

const scissors = document.createElement('button');
const scissorsText = document.createTextNode('Scissors');

const roundContainer = document.querySelector('.roundContainer');
const roundText = document.createTextNode('Please, make a selection for each round:');
const outputContainer = document.querySelector('.outputText');
const outputText = document.createTextNode('');

const points = document.querySelector('.points');
const pointsText = document.createTextNode ('Computer points: 0. Your points: 0');

const finalScore = document.createTextNode ('');

let winnerStatus = 0;
/* States the status of the round:
    0 = No Winner / Tie (default)
    1 = Player is Winning
    2 = Computer is Winning 
    3 = Invalid User Input */

let playerPoints = 0;
let computerPoints = 0;
let playedRounds = 0;

startGameBtn.onclick = function () {

    playerPoints = 0;
    computerPoints = 0;
    playedRounds = 0;

    finalScore.remove();
    buttons.appendChild(rock);
    rock.appendChild(rockText);

    buttons.appendChild(paper);
    paper.appendChild(paperText);

    buttons.appendChild(scissors);
    scissors.appendChild(scissorsText);

    roundContainer.appendChild(roundText);
    outputContainer.appendChild(outputText);

    pointsText.data = 'Computer points: ' + computerPoints + '. Your points: ' + playerPoints + '.';
    points.appendChild(pointsText);

    startGameBtn.remove();
}


rock.onclick = function() {
       let playerSelection = 'Rock';
        playRound(computerSelection(), playerSelection);
}

paper.onclick = function() {
        let playerSelection = 'Paper';
         playRound(computerSelection(), playerSelection);
}

scissors.onclick = function() {
       let playerSelection = 'Scissors';
        playRound(computerSelection(), playerSelection);
}
/*Randomly Generate Rock, Paper or Scissors*/

function computerSelection() {

    let selection = parseInt(Math.random() * 3); /*Random number from 0 to 2*/

    switch (selection) {
        case 0:
            return "Paper";
            break;

        case 1:
            return "Rock";
            break;

        default:
            return "Scissors";
    }
}



/*Receives selections from computer and player (input). Evaluates who won according to game rules. Lastly, 
shows a message declaring the winner of the round*/
function playRound(computerSelection, playerSelection) {

    let winnerText = "Its a Draw.";


    winnerStatus = 0;  /*Reset winnerStatus to default*/

    if (computerSelection === playerSelection) {  /*Determines who won the round*/
        winnerStatus = 0;

    } else {
        switch (playerSelection) {

            case ("Paper"):
                if (computerSelection === "Rock") {
                    winnerStatus = 1;

                } else if (computerSelection === "Scissors") {
                    winnerStatus = 2;
                }
                break;

            case ("Scissors"):
                if (computerSelection === "Rock") {
                    winnerStatus = 2;

                } else if (computerSelection === "Paper") {
                    winnerStatus = 1;
                }
                break;

            case ("Rock"):
                if (computerSelection === "Scissors") {
                    winnerStatus = 1;

                } else if (computerSelection === "Paper") {
                    winnerStatus = 2;
                }
                break;

            default:
                alert('Invalid input');
                winnerStatus = 3;
        }

    }

    if (winnerStatus === 2) { winnerText = "Computer wins this Round." }
    else if (winnerStatus === 1) { winnerText = "You win this Round." }
    else if (winnerStatus === 3) { winnerText = "This Round failed." }

    switch (winnerStatus) {
        case (1):
            playerPoints++;
            playedRounds++;
            break;
    
        case (2):
            computerPoints++;
            playedRounds++;
            break;
    }



    /*Generate Round winner text*/
    outputText.data = "Computer chose " + computerSelection + " . You chose " + playerSelection + ". " + winnerText;
    pointsText.data = 'Computer points: ' + computerPoints + '. Your points: ' + playerPoints + '.';
    if (playedRounds < 5){
        
        if (playerPoints > computerPoints) {
    
            globalWinnerText = "You won this match... We'll meet again"
        
        } else {
        
            globalWinnerText = "The Computer won... as expected."
        }
    }
    else if (playedRounds === 5){

        pointsText.remove();
        finalScore.data = 'Computer scored: ' + computerPoints + '. You scored: ' + playerPoints + '. ' + globalWinnerText; 
        points.appendChild(finalScore);

        rock.remove();
        paper.remove();
        scissors.remove();
        roundText.remove();
        roundText.remove();
        outputText.remove();

        body.appendChild(startGameBtn);

     
        
        
    }
    else {}
}
