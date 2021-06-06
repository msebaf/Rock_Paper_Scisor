//La computadora elige
function computerPlay(){
    let computerChoise = "";
    let min = 1;
    let max = 3;
    let x = Math.floor(Math.random()*(max-min+1)+min);
    switch (x){
        case (x=1):
        computerChoise="rock"
        break;
        case (x=2):
        computerChoise="paper"
        break;
        case (x=3):
        computerChoise="scisor"
        break;

    }
    
    return (computerChoise);
    
    
    
}

// el usuario elige
function userPlay () {
    
    
    player_Selection = prompt ("Rock, Paper or Scisor").toLowerCase()

    
    return (player_Selection);
    
}


function play() {

let a = userPlay();
let b = computerPlay();

    if (a==b) {
        alert("Yo elegi " + b + ". Es un empate");
        
    }
    else if 
     (((a== "rock") && (b == "scisor")) || ((a == "scisor") && (b == "paper")) || ((a=="paper") && (b == "rock"))){
         alert("Yo elegi " + b + ". Ganaste!");
         return(true);
     }
     else {
         alert("Yo elegi " + b + ". Perdiste");
         return(false)
     }

}

function playRound(){
    
    let wons=0;
    let lost=0;
    for (i=0; i<5; i++){
      let result = play();
      if (result==false) {
          lost++
          console.log("ganados "+wons+" perdidos "+lost);
      }
          
      
      else if (result==true){
          wons++
          console.log("ganados "+wons+ " perdidos"+ lost);
      }
     

    }
    if (wons>lost){
        alert("Ganaste el juego!!!")
    }
    else if (wons  == lost){
        alert("Es un empate!")
    }
    else{
        alert("Perdiste el juego")
    }
}

