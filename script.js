

/*Randomly Generate Rock, Paper or Scissors*/

function computerSelection(){
    let selection = parseInt(Math.random()*3);
    if(selection === 0){
        return "Paper";
    } else if (selection === 1){
        return "Rock";
    } else {
        return "Scissors";
    }
}

/*Receives selections from computer and player. Evaluates who won according to game rules. Lastly, 
shows a message declaring the winner of the round*/

function playRound ( computerSelection , playerSelection ) {
    let winnerText = "Its a Draw.";
    let x = 0;

    if (computerSelection === playerSelection ){
        
    }else{
        switch (computerSelection) {

            case ("Paper"):
                if ( playerSelection === "Rock" ){
                    x = 1;              
                }else if (playerSelection === "Scissors"){
                    x = 2; 
                }

            case ("Scissors"):
                if ( playerSelection === "Rock" ){
                    x = 2; 
                }else if (playerSelection === "Paper"){
                    x = 1;
                }

            case ("Rock"):
                if (playerSelection === "Scissors" ){
                    x = 1;
                }else if (playerSelection === "Paper"){
                    x = 2; 
                }     
         }  
            if (x === 1)       { winnerText = "Computer wins this Round."}
            else               { winnerText = "You win this Round."}
    }

    console.log("Computer chose "+computerSelection+" . You chose "+playerSelection+". "+winnerText)
    console.log (x);
    return x;
}

/*Main Function for gameplay. Loops 5 rounds and adds one point for every win. Shows global winner
at the end.*/
function game(n){

    let playercount = 0;
    let computercount = 0;

    for (i=0; i < n; i++) {
        
        /*Ask User for Selection*/
        playerSelection = window.prompt('Make your Choice: Rock, Paper or Scissors?', 'Rock, Paper or Scissors');

        /*Round is played*/
        let x = playRound(computerSelection(), playerSelection);
        
        switch (x) {
            case (x === 0):
            playercount = playercount;
            computercount = computercount;

            case (x === 1):
                playercount = playercount;
                computercount = computercount++;

            case (x === 2):
                playercount = playercount++;
                computercount = computercount;

        }
    }
    let winner = 0; 
    let globalWinnerText = "This Epic Showdown ends up as a Draw"

    if (playercount > computercount){

         globalWinnerText = "You won this match... We'll meet again"

    } else if (playercount < computercount){
        
        globalWinnerText = "The Computer won... as expected."
    }

    console.log(globalWinnerText)
}
