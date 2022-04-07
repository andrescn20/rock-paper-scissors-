
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

