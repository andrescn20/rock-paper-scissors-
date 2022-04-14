
/*Button Actions*/
const body = document.querySelector('body');
const startGameBtn = document.querySelector('#startGame');
const mainContainer = document.querySelector('.mainContainer');


/*Regarding selection buttons*/
const buttons = document.querySelector('.buttons');

const rock = document.createElement('button');
const rockText = document.createTextNode('Rock');

const paper = document.createElement('button');
const paperText = document.createTextNode('Paper');

const scissors = document.createElement('button');
const scissorsText = document.createTextNode('Scissors');

/*Regarding text above buttons*/
const roundContainer = document.querySelector('.roundContainer');
const roundText = document.createTextNode('Please, make a selection for each round:');
const outputContainer = document.querySelector('.outPutText');
const outputText = document.createTextNode('');


/*Regarding Score Chart*/

/*Contains 3 columns*/
const scoreContainer = document.createElement('scoreContainer');
scoreContainer.setAttribute('class', 'scoreContainer')

/*Define 3 div (columns) and their id's*/
const scoreTitlesdiv = document.createElement('div');
scoreTitlesdiv.setAttribute ('id' , 'scoreTitlesdiv');
const playerScorediv = document.createElement ('div');
playerScorediv.setAttribute ('id' , 'playerScorediv');
const computerScorediv = document.createElement ('div');
computerScorediv.setAttribute ('id' , 'computerScorediv');

/*Define 3 rows for every column*/ 

/*Columns for scoreTitlesdiv:*/
const blanck = document.createElement('div');
const currentRound = document.createElement('div');
const currentRoundText = document.createTextNode('This Round:');
const globalScore = document.createElement('div');
const globalScoreText = document.createTextNode('Score:');
/*Columns for computercorediv: */
const computerTitle = document.createElement('div'); 
const computerTitleText = document.createTextNode ('Computer');
const computerSelect = document.createElement ('div');
const computerSelectionText = document.createTextNode('');
const computerGlobalScore = document.createElement('div');
const computerGlobalScoreText = document.createTextNode('');
/*Columns for playerScorediv:*/
const playerTitle = document.createElement('div'); 
const playerTitleText = document.createTextNode ('Player');
const playerSelect = document.createElement ('div');
const playerSelectionText = document.createTextNode('');
const playerGlobalScore = document.createElement ('div');
const playerGlobalScoreText = document.createTextNode('');


rock.setAttribute('class' , 'btns')
paper.setAttribute('class' , 'btns')
scissors.setAttribute('class' , 'btns')

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

    outputText.data = 'Play a round to display round winner';
    computerGlobalScoreText.data = computerPoints; 
    playerGlobalScoreText.data = playerPoints; 
    computerSelectionText.data = '';
    playerSelectionText.data = '';


    buttons.appendChild(rock);
    rock.appendChild(rockText);

    buttons.appendChild(paper);
    paper.appendChild(paperText);

    buttons.appendChild(scissors);
    scissors.appendChild(scissorsText);

    roundContainer.appendChild(roundText);
    outputContainer.appendChild(outputText);

    /*Score Chart*/
    mainContainer.insertBefore(scoreContainer, outputContainer);    

    /*First Column: Titles*/
    scoreContainer.appendChild(scoreTitlesdiv);
    scoreTitlesdiv.appendChild(blanck);
    scoreTitlesdiv.appendChild(currentRound);
    scoreTitlesdiv.appendChild(globalScore);
    currentRound.appendChild(currentRoundText);
    globalScore.appendChild(globalScoreText);

    /*Second Column: Computer*/
    scoreContainer.appendChild(computerScorediv);
    computerScorediv.appendChild(computerTitle);
    computerScorediv.appendChild(computerSelect);
    computerScorediv.appendChild(computerGlobalScore);
    computerTitle.appendChild(computerTitleText);
    computerSelect.appendChild(computerSelectionText);
    computerGlobalScore.appendChild(computerGlobalScoreText);

    /*Third Column: Player*/
    scoreContainer.appendChild(playerScorediv);
    playerScorediv.appendChild(playerTitle);
    playerScorediv.appendChild(playerSelect);
    playerScorediv.appendChild(playerGlobalScore);
    playerTitle.appendChild(playerTitleText);
    playerSelect.appendChild(playerSelectionText);
    playerGlobalScore.appendChild(playerGlobalScoreText);


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
        }

    }

    if      (winnerStatus === 2) { winnerText = "Computer wins this Round." }
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

    computerSelectionText.data = computerSelection;
    playerSelectionText.data = playerSelection;

    computerGlobalScoreText.data = computerPoints; 
    playerGlobalScoreText.data = playerPoints; 

    outputText.data =  winnerText;
    
    if (playedRounds < 5){
        
        if (playerPoints > computerPoints) {
    
            globalWinnerText = "You won this match... We'll meet again"
        
        } else {
        
            globalWinnerText = "The Computer won... as expected."
        }
    }
    else if (playedRounds === 5){

        outputText.data = 'Computer scored: ' + computerPoints + '. You scored: ' + playerPoints + '. ' + globalWinnerText; 
        
    

        scoreContainer.remove();
        rock.remove();
        paper.remove();
        scissors.remove();
        roundText.remove();

        body.appendChild(startGameBtn);        
    }
    else {}
}
