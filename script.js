

/*Randomly Generate Rock, Paper or Scissors*/

function computerSelection(){
    
    let selection = parseInt(Math.random()*3); /*Random number from 0 to 2*/

    switch (selection){
        case selection === 0 : return "Paper";
        case selection === 1 : return "Rock";
        default              : return "Scissors";
    }
}

let winnerStatus = 0;
    /* States the status of the round:
        0 = No Winner / Tie (default)
        1 = Player is Winning
        2 = Computer is Winning 
        3 = Invalid User Input */


let confirmRoundExecution = 0; 
    /* Security measure to display alternate text
        in case no round was played */


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

    confirmRoundExecution = 1; /*Round Correctly Executed*/

    /*Generate Round winner text*/
    console.log("Computer chose "+computerSelection+" . You chose "+playerSelection+". "+winnerText);
}

function correctCapitalization(i) {
    
    let playerInput = window.prompt('Round #'+(i+1)+': Make your Choice: Rock, Paper or Scissors?', 'Rock, Paper or Scissors');
    let first = playerInput.charAt(0); /*Gathers first letter of input*/
    let rest = playerInput.slice(1);   /*Gathers the rest of the letters of input*/

    return first.toUpperCase()+rest.toLowerCase();  /*Generate output with correct Capitalization*/
}



function game(){ /*Main Function*/

    let numberOfRounds = parseInt(window.prompt('Define how many rounds decide the winner.', '5'));
    let playerPoints = 0;
    let computerPoints = 0;
    
    if (numberOfRounds > 10) {

        alert ('Dont be greedy: Please type a number smaller than 10.');


    } else {
        
        for (i=0; i < (numberOfRounds); i++) {
           
            playRound(computerSelection(), correctCapitalization(i));
                
            switch(winnerStatus){
                case (1): playerPoints++;
                    break;
                case (2): computerPoints++;
                    break; 
            }
        }
    

        let globalWinnerText = "Invalid Input. Please Enter a number next time"

        if (confirmRoundExecution === 0){
            
        console.log(globalWinnerText);

        }else {
            if (playerPoints > computerPoints){

                globalWinnerText = "You won this match... We'll meet again"

            } else if (playerPoints < computerPoints){
        
                globalWinnerText = "The Computer won... as expected."

            } else if (playerPoints == computerPoints) {
                globalWinnerText = "This match is a Draw"

            }

            console.log('Computer scored: '+computerPoints+'. You scored: '+playerPoints+'. '+globalWinnerText);
        }    
    
        
    }
}
