import Player from './player.js';
import Game from './game.js';
   
window.addEventListener('load', function () {
    const btnNewGame = document.getElementById('newGame');
    const btnRollDice = document.getElementById('btnRollDice');
    const btnHold = document.getElementById('btnHold');
    const Player1 = document.getElementById('player1');
    const Player2 = document.getElementById('player2');
    const currentScore1 = document.getElementById('currentScore1');
    const currentScore2 = document.getElementById('currentScore2');

   



    const game = new Game(new Player('Player 1', 0), new Player('Player 2', 0));
    


    btnNewGame.addEventListener('click', function () {
        game.newGame();
        updateUI();
        console.log(game.getStatus());
        
       
    });
 

    btnRollDice.addEventListener('click', function () {
        game.rollDice();
        updateUI();
        game.badhand();
        EachRoll()
        GameOver();
    });
    

    btnHold.addEventListener('click', function () {
        game.hold();
        updateUI();
        GameOver();
    });


    function updateUI() {
       
        document.getElementById('player1Score').innerHTML = game.player1.score;
        document.getElementById('player2Score').innerHTML = game.player2.score;
       

        if (game.newGame) {
            btnRollDice.removeAttribute('disabled', 'true');
            btnHold.removeAttribute('disabled', 'true');
                             
        }
    
       
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
    } 
       function EachRoll() {
        if ( game.dice.getValue() == 1) {
           document.getElementsByClassName('dice')['0'].removeAttribute('hidden');
        } else {
            document.getElementsByClassName('dice')['0'].setAttribute('hidden', 'true');
        }
        
        if (game.dice.getValue() == 2) {
            document.getElementsByClassName('dice')['1'].removeAttribute('hidden', 'true');
        } else {
            document.getElementsByClassName('dice')['1'].setAttribute('hidden', 'true');
        }
        if (game.dice.getValue() == 3) {
           document.getElementsByClassName('dice')['2'].removeAttribute('hidden', 'true');
           }
        else {
            document.getElementsByClassName('dice')['2'].setAttribute('hidden', 'true');
        }
        if (game.dice.getValue() == 4) {
            document.getElementsByClassName('dice')['3'].removeAttribute('hidden', 'true');
        } else {
            document.getElementsByClassName('dice')['3'].setAttribute('hidden', 'true');
        } 
        if (game.dice.getValue() == 5) {
               document.getElementsByClassName('dice')['4'].removeAttribute('hidden', 'true');
        } else {
               document.getElementsByClassName('dice')['4'].setAttribute('hidden', 'true');
           }
        if (game.dice.getValue() == 6) {
            document.getElementsByClassName('dice')['5'].removeAttribute('hidden', 'true');
           
        } else {
            document.getElementsByClassName('dice')['5'].setAttribute('hidden', 'true');
           }
             
    }

    function GameOver()  {
        if (game.isGameOver) {
            btnRollDice.setAttribute('disabled', 'true');
            btnHold.setAttribute('disabled', 'true');
            btnNewGame.innerHTML = '<h1> <i class="fas fa-plus-circle"></i>New Game</h1>';
        }
        let winner = game.getWinner();
        if (winner) {
            document.getElementById('winner').innerHTML = `${winner.name} wins!`;
        }
        if(game.currentPlayer.score >= 100) {
            game.isGameOver = true;
            alert(`${game.getWinner().name} wins!`);
            
        }

        if(game.isGameOver === true){
            game.newGame();
            updateUI();
            document.getElementById('winner').innerHTML = "";

        }
    }





    
});










