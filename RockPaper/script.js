let playerScore = document.getElementById("player-score");
let hands = document.getElementById('hands');
let result = document.getElementById('result');


function Play(input) {
   const hand = ["Rock", "Paper", "Scissors"];
   let random =Math.floor(Math.random()*hand.length);

   hands.textContent = `🧍${input.value} vs 🤖${hand[random]}`;
   
   if(playerScore.textContent === NaN || playerScore.textContent === undefined || playerScore.textContent == ""){
        playerScore.textContent = 0;
    }   
   
    switch(input.value){
        case "Rock":
            if(hand[random] == "Paper"){
           
                result.textContent = 'You lost';
                playerScore.textContent = Number(playerScore.textContent) - 1;
                break;
           
            } else if(hand[random] == "Scissors"){ 
           
                result.textContent = 'You won';
                playerScore.textContent = Number(playerScore.textContent) + 1;
                break;
           
            } else if(hand[random] == 'Rock'){
           
                result.textContent = 'Draw';
                break;

            }

        case 'Paper':
            if(hand[random] == 'Rock'){
                result.textContent = 'You won';
                playerScore.textContent = Number(playerScore.textContent) + 1;
                break;
           
            } else if(hand[random] == 'Scissors'){
                result.textContent = 'You lost';
                playerScore.textContent = Number(playerScore.textContent) - 1;
                break;
           
            }else if(hand[random] == 'Paper'){
                result.textContent = 'Draw';
                break;
            }

        case 'Scissors':
            if(hand[random] == 'Paper'){
                result.textContent = 'You won!';
                playerScore.textContent = Number(playerScore.textContent) + 1;
                break;

            } else if(hand[random] == 'Rock'){
                result.textContent = 'You lost!';
                playerScore.textContent = Number(playerScore.textContent) - 1;
                break;

            }else if(hand[random] == 'Scissors'){
                result.textContent = 'Draw!';
                break;

            }
         }
   }

   function Restart(){
    playerScore.textContent = "";
    hands.textContent = "";
    result.textContent = "";
   }