

/*Randomly Generate Rock, Paper or Scissors*/

function computerSelection(){
    
    let selection = parseInt(Math.random()*3); /*Random number from 0 to 2*/

    switch (selection){
        case 0 : 
            return "Paper";
            break;

        case 1 :
             return "Rock";
             break;

        default:
             return "Scissors";
    }
}

let winnerStatus = 0;
    /* States the status of the round:
        0 = No Winner / Tie (default)
        1 = Player is Winning
        2 = Computer is Winning 
        3 = Invalid User Input */


/*Receives selections from computer and player (input). Evaluates who won according to game rules. Lastly, 
shows a message declaring the winner of the round*/

function playRound ( computerSelection , playerSelection ) {

    let winnerText = "Its a Draw."; 
    winnerStatus = 0;  /*Reset winnerStatus to default*/

    if (computerSelection === playerSelection ){  /*Determines who won the round*/
                    winnerStatus = 0;

    }else{
        switch (playerSelection) {

            case ("Paper"):
                if ( computerSelection === "Rock" ){
                    winnerStatus = 1;

                }else if (computerSelection === "Scissors"){
                    winnerStatus = 2; 
                }
                break;

            case ("Scissors"):
                if ( computerSelection === "Rock" ){
                    winnerStatus = 2; 

                }else if (computerSelection === "Paper"){
                    winnerStatus = 1;
                }
                break;

            case ("Rock"):
                if (computerSelection === "Scissors" ){
                    winnerStatus = 1;

                }else if (computerSelection === "Paper"){
                    winnerStatus = 2; 
                }
                break;    

            default: 
                alert('Invalid input');
                    winnerStatus = 3;
            }
            
    }

    if      (winnerStatus === 2)     { winnerText = "Computer wins this Round."} 
    else if (winnerStatus === 1)     { winnerText = "You win this Round."}
    else if (winnerStatus === 3)     { winnerText = "This Round failed."}

    /*Generate Round winner text*/
    console.log("Computer chose "+computerSelection+" . You chose "+playerSelection+". "+winnerText);
}

function correctCapitalization(i) {
    
    let playerInput = window.prompt('Round #'+(i+1)+'! Make your Choice: Rock, Paper or Scissors?', 'Rock, Paper or Scissors');
    let first = playerInput.charAt(0); /*Gathers first letter of input*/
    let rest = playerInput.slice(1);   /*Gathers the rest of the letters of input*/

    return first.toUpperCase()+rest.toLowerCase();  /*Generate output with correct Capitalization*/
}

function printWinner(computerPoints, playerPoints) {
    console.log('Computer scored: ' + computerPoints + '. You scored: ' + playerPoints + '. ' + globalWinnerText);
}


function game(){ /*Main Function*/
    let numberOfRounds = 0;
    let playerPoints = 0;
    let computerPoints = 0;
    let playedRounds = 0;
    
    do {  /*Loops until the User's input is an even number between 1 and 10*/
        let numberOfRoundsLoop = parseInt(window.prompt('Define how many rounds decide the winner.', '5'));

        if     (Math.abs(numberOfRoundsLoop) > 10) {
            numberOfRounds = numberOfRoundsLoop
            alert ('Dont be greedy: Please type a number smaller than 10.');
        }

        else if(Math.abs(numberOfRoundsLoop) < 10) {

            if ( (numberOfRoundsLoop % 2) === 0){
                alert ('Please enter an odd number to avoid a tie.');
                numberOfRounds = 11;
            } else {
                numberOfRounds = Math.abs(numberOfRoundsLoop);
            }
        }

        else{
            numberOfRounds = 11;
            alert('Invalid Input. Only numbers accepted');
        }
      }
    while (numberOfRounds >= 10)
    
        
    while (playedRounds < numberOfRounds) {
           
        playRound(computerSelection(), correctCapitalization(playedRounds));

            switch(winnerStatus){
                case (1): 
                    playerPoints++;
                    playedRounds++;
                    break;

                case (2): 
                    computerPoints++;
                    playedRounds++;
                    break; 

            }
        }

            if (playerPoints > computerPoints){

                globalWinnerText = "You won this match... We'll meet again"

            } else{
        
                globalWinnerText = "The Computer won... as expected."

            printWinner(computerPoints, playerPoints);
        }    
    
        
    }


