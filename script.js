
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
                   
                }

            case ("Scissors"):
                if ( playerSelection === "Rock" ){
                    
                }else if (playerSelection === "Paper"){
                    x = 1;
                }

            case ("Rock"):
                if (playerSelection === "Scissors" ){
                    x = 1;
                    console.log(x);
                }else if (playerSelection === "Paper"){
                    
                    console.log(x);
                }     
         }  
            if (x === 1)       { winnerText = "Computer wins this Round."}
            else                  { winnerText = "You win this Round."}
    }

    console.log("Computer chose "+computerSelection+" . You chose "+playerSelection+". "+winnerText)
}

function game (){}
/*PENDING UPGRADES:
    *playRound has one final text that concatenates in accordance to cases, instead 
    of having a text for every case.*/