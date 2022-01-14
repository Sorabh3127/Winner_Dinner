const game = ()=> {
        let pScore = 0;
        let cScore = 0;

    //start the game
        const startGame = ()=>{
            const playBtn = document.querySelector('.intro button');
            const intro = document.querySelector('.intro');
            const match = document.querySelector('.match');

            playBtn.addEventListener('click',()=>{
                intro.classList.add('fadeOut');
                match.classList.add('fadeIn');
            });
        };

    // play Match
    const playMatch = ()=>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand=>{
            hand.addEventListener('animationend',function(){
                this.style.animation='';
            })
        })
        //computer option
        const computerOptions = ["rock","paper", "scissor"];

        options.forEach(option => {
            option.addEventListener('click',function() {
                // computer choise
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoise = computerOptions[computerNumber];
                
                setTimeout(()=>{
                    // here we have to call compareHand
                compareHands(this.textContent,computerChoise);
                //update images
                playerHand.src=`./img/${this.textContent}.png`;
                computerHand.src=`./img/${computerChoise}.png`;

                },2000)
                
                //Animation
                playerHand.style.animation='shakePlayer 2s ease ';
                computerHand.style.animation='shakeComputer 2s ease ';
            });
        });
        
    };

    const updateScore = () =>{
        const playerScore = document.querySelector('.playerScore p');
        const computerScore = document.querySelector('.computerScore p');
        playerScore.textContent=pScore;
        computerScore.textContent= cScore;
    }

    const compareHands = (playerChoise, computerChoise)=>{
        //update text
        const winner = document.querySelector(".winner");
        //checking for a tie
        if(playerChoise==computerChoise){
            winner.textContent= "It is a tie";
            return;
        }
        //check for rock
        if(playerChoise== "rock"){
            if(computerChoise== "scissor"){
                winner.textContent="player wins";
                pScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent="computer wins";
                cScore++;
                updateScore();
                return;
            }
        }

        //check for paper
        if(playerChoise== "paper"){
            if(computerChoise== "scissor"){
                winner.textContent="computer wins";
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent="player wins";
                pScore++;
                updateScore();
                return;
            }
        }

        //check for scissor
        if(playerChoise== "scissor"){
            if(computerChoise== "rock"){
                winner.textContent="computer wins";
                cScore++;
                updateScore();
                return;
            }
            else{
                winner.textContent="player wins";
                pScore++;
                updateScore();
                return;
            }
        }
    }

    // calling inner functions
    startGame();
    playMatch();
    
}

//start the game function
game();