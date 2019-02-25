function machinePlay(){
    let sets = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return(sets[random]);
}

function playRound(playerChoice, machineChoice){
    var result = "";
    var draw = "Draw! None of you lose";
    switch(machineChoice){
        case "rock":
            if(playerChoice == "scissors"){
                result = "You lose! Rock beats Scissors";
            } else if(playerChoice == "paper"){
                result = "You win! Paper beats Rock";
            } else if (machineChoice == playerChoice) {
                result = draw;
            } else{
                result = "Invalid! Try again";
            }
            break;
        case "paper":
            if(playerChoice == "rock"){
                result = "You lose! Paper beats Rock";
            } else if(playerChoice == "scissors"){
                result = "You win! Scissors beats Paper";
            } else if (machineChoice == playerChoice) {
                result = draw;
            } else{
                result = "Invalid! Try again";
            }
            break;
        case "scissors":
            if(playerChoice == "rock"){
                result = "You win! Rock beats Scissors";
            } else if(playerChoice == "paper"){
                result = "You lose! Scissors beats Paper";
            } else if (machineChoice == playerChoice) {
                result = draw;
            } else{
                result = "Invalid! Try again";
            }
            break;
    }
    return result;
}

function game(){
    //var result = false;
    let player_score = 0;
    let machine_score = 0;
    let message = "";
    
    for (var i=1; i<=5; i++){
        let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
        let machineChoice = computerPlay();
        result = playRound(playerChoice, machineChoice);
        console.log("Round " + i + ": " + result);

        if(result.includes("win")){
            player_score += 1;
        } else{
            machine_score += 1;
        }

        if(player_score > machine_score){
            message = "Congratulations! You win the game!";
        } else{
            message = "You lose. Please try again.";
        }  
    }
    console.log("Your score: " + player_score + "\nMachine score: " + machine_score + "\n" + message);
}

game();