

/*Randomly Generate Rock, Paper or Scissors*/

function computerSelection(){
    
    let selection = parseInt(Math.random()*3); /*Random number from 0 to 2*/
    if(selection === 0){    /*Assigns a choice to every Possibility*/
        return "Paper";
    } else if (selection === 1){
        return "Rock";
    } else {
        return "Scissors";
    }
}
/*Variable defined to connect functions. The value of x is dependant on who won each round*/
let x = 0;

/*Variable that determines if wether the game ran or not. Changes once a round is correctly executed*/
let confirmround = 0; 


/*Receives selections from computer and player (input). Evaluates who won according to game rules. Lastly, 
shows a message declaring the winner of the round*/

function playRound ( computerSelection , playerSelection ) {
    let winnerText = "Its a Draw.";
    x=0;
    let win = x;
    if (computerSelection === playerSelection ){
        x = 0;
    }else{
        switch (playerSelection) {

            case ("Paper"):
                if ( computerSelection === "Rock" ){
                    win = 1;

                }else if (computerSelection === "Scissors"){
                    win = 2; 
                }
                break;

            case ("Scissors"):
                if ( computerSelection === "Rock" ){
                    win = 2; 

                }else if (computerSelection === "Paper"){
                    win = 1;
                }
                break;
            case ("Rock"):
                if (computerSelection === "Scissors" ){
                    win = 1;
                }else if (computerSelection === "Paper"){
                    win = 2; 
                }
                break;    
            default: 
                alert('Invalid input');
                win = 3;
            }
            
    }
    if (win === 2)       { winnerText = "Computer wins this Round."}
    else if (win ===1)   { winnerText = "You win this Round."}
    else if (win === 3)  { winnerText = "This Round failed."}
    x = win;
    confirmround = 1;
    console.log("Computer chose "+computerSelection+" . You chose "+playerSelection+". "+winnerText);
}

function upperCase(i) {
    /*Ask User for Selection*/
    let playerInput = window.prompt('Round #'+(i+1)+': Make your Choice: Rock, Paper or Scissors?', 'Rock, Paper or Scissors');
    let first = playerInput.charAt(0);
    let rest = playerInput.slice(1);
    /*rest = playerInput.slice(playerInput.length()-1);*/
    return first.toUpperCase()+rest.toLowerCase();
}


/*Main Function for gameplay. Loops 5 rounds and adds one point for every win. Shows global winner
at the end.*/
function game(){
    let n = parseInt(window.prompt('Define how many rounds decide the winner.', '5'));
    let playercount = 0;
    let computercount = 0;
    
    if (n > 10) {

        alert ('Error: Please type a number smaller than 10.');


    } else {
        for (i=0; i < (n); i++) {
           
            
            /*Round is played*/
            playRound(computerSelection(), upperCase(i));

            let point = x; 

                if (point === 0){
                    playercount = playercount;
                    computercount = computercount;
                } else if (point === 2){
                    playercount = playercount;
                    computercount = computercount + 1;
                } else if (point === 1){
                    playercount = playercount +1;
                    computercount = computercount;
            }
        }
    

        let globalWinnerText = "Invalid Input. Please Enter a number next time"

        if (confirmround === 0){
            
        console.log(globalWinnerText);

        }else {
            if (playercount > computercount){

                globalWinnerText = "You won this match... We'll meet again"

            } else if (playercount < computercount){
        
                globalWinnerText = "The Computer won... as expected."

            } else if (playercount == computercount) {
                globalWinnerText = "This match is a Draw"

            }

            console.log('Computer scored: '+computercount+'. You scored: '+playercount+'. '+globalWinnerText);
        }    
    
        
    }
}
