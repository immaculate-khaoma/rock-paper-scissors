const options = ["rock","paper","scissors"];
let playerChoice = prompt('PLEASE ENTER YOUR PLAY (rock/paper/scissors').toLowerCase();

/*computer picks random number between 0 and 1 using the math.random 
 then it it rounded up to the nearest whole number by math.floor to match the options indices 0,1,2 */
 let computerChoice = options[Math.floor(Math.random() * options.length)];
 

//playing logic
function results(player, computer){
  if (player === computer){
    alert( "IT's A TIE!");
  }
else if (player === "rock" && computer === "scissors"){
    alert( "Rock crushes scissors. You WIN!")
}
else if (player === "scissors" && computer === "paper")
{
  alert( "Scissors cuts paper. You WIN!")
}
else if (player === "paper" && computer === "rock"){
  alert( "paper covers rock. You WIN!")
}
 else
  alert( "You LOSE!");
}

results(playerChoice, computerChoice);
