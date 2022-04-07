
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
console.log(computerSelection())
function playRound ( computerSelection , playerSelection ) {
    if (computerSelection === playerSelection ){
        return "Computer choose "+computerSelection+ ". You chose "+playerSelection+". Its a Draw"

    }else{
        switch (computerSelection) {
            case ("Paper"):
                if ( playerSelection === "Rock" ){
                    return "Computer chose Paper. You chose Rock. Computer wins this round."

                }else if (playerSelection === "Scissors"){
                    return "Computer chose Paper. You chose Scissors. You win this round."
                }
            case ("Scissors"):
                if ( playerSelection === "Rock" ){
                    return "Computer chose Scissors. You chose Rock. You win this round."
                }else if (playerSelection === "Paper"){
                    return "Computer chose Scissors. You chose Scissors. Computer wins this round."
                }
            case ("Rock"):
                if (playerSelection === "Scissors" ){
                    return "Computer chose Rock. You Chose Scissors. Computer wins this round"
                }else if (playerSelection === "Paper"){
                    return "Computer chose Rock. you Chose Paper. You win this round"
                }     
         }
    }
}
        