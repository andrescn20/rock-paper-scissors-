

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
let x = 0;
/*Receives selections from computer and player. Evaluates who won according to game rules. Lastly, 
shows a message declaring the winner of the round*/

function playRound ( computerSelection , playerSelection ) {
    let winnerText = "Its a Draw.";
    let win = x;
    if (computerSelection === playerSelection ){
        x = 0;
    }else{
        switch (computerSelection) {

            case ("Paper"):
                if ( playerSelection === "Rock" ){
                    win = 1;

                }else if (playerSelection === "Scissors"){
                    win = 2; 
                }
                break;

            case ("Scissors"):
                if ( playerSelection === "Rock" ){
                    win = 2; 

                }else if (playerSelection === "Paper"){
                    win = 1;
                }
                break;
            case ("Rock"):
                if (playerSelection === "Scissors" ){
                    win = 1;
                }else if (playerSelection === "Paper"){
                    win = 2; 
                }
                break;    
            default: 
                alert('Invalid input');
                win = 3;
            }
            
    }
    if (win === 1)       { winnerText = "Computer wins this Round."}
    else if (win ===2)   { winnerText = "You win this Round."}
    else if (win === 3)  { winnerText = "This Round failed"}
    x = win;
    console.log("Computer chose "+computerSelection+" . You chose "+playerSelection+". "+winnerText);
}

/*Main Function for gameplay. Loops 5 rounds and adds one point for every win. Shows global winner
at the end.*/
function game(){
    let n = parseInt(window.prompt('Define how many rounds decide the winner.', '5'));
    let playercount = 0;
    let computercount = 0;

    if (n > 10) {

        alert ('Too many rounds. Max = 10 Rounds')


    } else {
        for (i=0; i < (n); i++) {
           
            /*Ask User for Selection*/
            playerSelection = window.prompt('Round #'+(i+1)+'Make your Choice: Rock, Paper or Scissors?', 'Rock, Paper or Scissors');

            /*Round is played*/
            playRound(computerSelection(), playerSelection);

            let point = x; 

                if (point === 0){
                    playercount = playercount;
                    computercount = computercount;
                } else if (point === 1){
                    playercount = playercount;
                    computercount = computercount + 1;
                } else if (point === 2){
                    playercount = playercount +1;
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
}
