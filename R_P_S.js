//La computadora elige
function computerPlay(){
    var computerChoise = 0;
    var min = 1;
    var max = 3;
    var x = Math.floor(Math.random()*(max-min+1)+min);

    return (computerChoise);
    
    
}

// el usuario elige
function userPlay () {
    let choice = 0;
    
    player_Selection = prompt ("Rock, Paper or Scisor").toLowerCase();
        
    switch (player_Selection){
        case "rock":
            choice=1;
            break;
        case "paper" :
            choice=2;
            break;
        case "scisor":
            choice=3;
            break;

    }
    return (choice);
    
}

function play() {
userPlay();
computerPlay();
let a = userPlay.choice ;
let b = userPlay.choice;

    if (a = b){
        alert("yo elegi " + b + " Es un empate")

    }

}

