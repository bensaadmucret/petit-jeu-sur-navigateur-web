import Dice from './dice.js'; 
class Game {

        constructor(player1, player2) {
            this.player1 = player1;
            this.player2 = player2;
            this.currentPlayer = player1;
            this.dice = new Dice();
            this.score = 0;
            this.isGameOver = false;
            this.status = 'new game';
            
        }

        newGame() {
            this.player1.score = 0;
            this.player2.score = 0;
            this.currentPlayer = this.player1;
            this.dice.reset();
            this.score = 0;
            this.status = 'new game';
            this.isGameOver = false;
           
        }

        getStatus() {
            return this.status;
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

export default Game;