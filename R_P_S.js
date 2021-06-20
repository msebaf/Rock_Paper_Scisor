
let wons=0;
let lost=0;
const btnR = document.querySelector("#rock");
btnR.addEventListener("click", function(e){
    playRound("rock")
    
})

const BtnP = document.querySelector("#paper");
BtnP.addEventListener("click", function(e){
    playRound("paper")
    
})

const BtnS = document.querySelector("#scisors");
BtnS.addEventListener("click", function(e){
    playRound("scisor")
    
})


const container = document.querySelector(".container");
const divresult = document.createElement("div");
container.appendChild(divresult);
divresult.style.backgroundColor="pink";
let results = document.createTextNode("resultados "+"ganados "+ wons+ " perdidos "+ lost);
divresult.appendChild(results);


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
/*function userPlay () {
    
    
    player_Selection = prompt ("Rock, Paper or Scisor").toLowerCase()

    
    return (player_Selection);
    
}
*/

function playRound(eleccion) {

let a = eleccion;
let b = computerPlay();

    if (a==b) {
        alert("Yo elegi " + b + ". Es un empate");
        return console.log("empate")
    }
    else if 
     (((a== "rock") && (b == "scisor")) || ((a == "scisor") && (b == "paper")) || ((a=="paper") && (b == "rock"))){
         wons++
         results.textContent = "resultados "+"ganados "+ wons+ " perdidos "+ lost;
         console.log("w"+wons);
         if (wons < 5){
         alert("Yo elegi " + b + ". Ganaste!");
         }
         else if (wons==5){
            wons=0;
            lost=0;
            results.textContent = "resultados "+"ganados "+ wons+ " perdidos "+ lost;
             alert("Ganaste el juego!")
             
         }
     }
     else {
         
         lost++
         results.textContent = "resultados "+"ganados "+ wons+ " perdidos "+ lost;
         console.log ("L"+lost)
         if (lost < 5){
         alert("Yo elegi " + b + ". Perdiste");
         }
         else if (lost == 5){
            wons=0;
            lost=0;
            results.textContent = "resultados "+"ganados "+ wons+ " perdidos "+ lost;
             alert("Perdiste el juego!")
             
         }
     }


}



/* function playFive(){
    
    let wons=0;
    let lost=0;
    for (i=0; i<5; i++){
      let result = playRound();
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
} */





