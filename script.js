
/*Randomly Generate Rock, Paper or Scissors*/

function computer(){
    let selection = parseInt(Math.random()*3);
    return selection;
}
console.log(computer());