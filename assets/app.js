
window.addEventListener('load', function() {
    const btnNewGame = document.getElementById('newGame');
    const btnRollDice = document.getElementById('btnRollDice');
    const btnHold = document.getElementById('btnHold');
    const Player1 = document.getElementById('player1');
    const Player2 = document.getElementById('player2');
    const currentScore1 = document.getElementById('currentScore1');
    const currentScore2 = document.getElementById('currentScore2');
   
    
    class Player {
        constructor(name, score) {
            this.name = name;
            this.score = score;
        }
    }
    
    
    class Game {

        constructor(player1, player2) {
            this.player1 = player1;
            this.player2 = player2;
            this.currentPlayer = player1;
            this.dice = new Dice();
            this.score = 0;
            this.isGameOver = false;
        }

        newGame() {
            this.player1.score = 0;
            this.player2.score = 0;
            this.currentPlayer = this.player1;
            this.dice.reset();
            this.score = 0;
            this.isGameOver = false;
        }


        rollDice() {
            this.dice.roll();
            this.score += this.dice.getValue();
            console.log(`${this.currentPlayer.name} rolled ${this.dice.getValue()}`);
        }

        hold() {
            this.currentPlayer.score += this.score;
            this.score = 0;
            console.log(`${this.currentPlayer.name} holds ${this.score}`);
            this.nextPlayer();
        }

        nextPlayer() {
            if (this.currentPlayer === this.player1) {
                this.currentPlayer = this.player2;
            } else {
                this.currentPlayer = this.player1;
            }
        }

        badhand() {
            this.value = this.dice.getValue();
            if (this.value == 1) {
                this.value = 0;
                this.score = 0;
                this.nextPlayer();
            }                

        }


    
        isGameOver() {
            if (this.player1.score >= 100 || this.player2.score >= 100) {
                this.isGameOver = true;
                alert(`${this.getWinner().name} wins!`);
            }
        }


        getWinner() {
            if (this.player1.score >= 100) {
                return this.player1;
            } else {
                return this.player2;
            }
        }
    }


    class Dice {
        constructor() {
            this.value = 0;
        }

        roll() {
            this.value = Math.floor(Math.random() * 6) + 1;
        }

        getValue() {
            return this.value;
        }

        reset() {
            this.value = 0;
        }
    }

    const game = new Game(new Player('Player 1', 0), new Player('Player 2', 0));
    


    btnNewGame.addEventListener('click', function() {
        game.newGame();
        updateUI();
        });
 

    btnRollDice.addEventListener('click', function() {
        game.rollDice();
        updateUI();
        game.badhand();
    });
    

    btnHold.addEventListener('click', function() {
        game.hold();
        updateUI();
        GameOver();    
    });


   function updateUI() {
        document.getElementById('player1Score').innerHTML = game.player1.score;
        document.getElementById('player2Score').innerHTML = game.player2.score;
       //document.getElementById('currentPlayer').innerHTML = game.currentPlayer.name;  
       if (game.currentPlayer.name == 'Player 1') {
           Player1.style.backgroundColor = 'black';
           Player1.style.color = 'white';
           Player1.innerHTML = 'Player 1';
           Player2.removeAttribute('style');
           currentScore1.innerHTML = game.score;
       } else {
           Player1.removeAttribute('style');
           Player2.style.backgroundColor = 'tomato';
           Player2.style.color = 'white';
           Player2.innerHTML = 'Player 2';
           currentScore2.innerHTML = game.score;
       }
    
        //document.getElementById('currentScore').innerHTML = game.score;
        //document.getElementById('dice').innerHTML = game.dice.getValue();
    }

    function GameOver(){
        if(game.currentPlayer.score >= 100){
            game.isGameOver = true;
            alert(`${game.getWinner().name} wins!`);
            
        }

        if(game.isGameOver === true){
            game.newGame();
            updateUI();
        }
        
    }



    
});










