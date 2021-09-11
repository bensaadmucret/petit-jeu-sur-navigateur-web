"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.addEventListener('load', function () {
  var btnNewGame = document.getElementById('newGame');
  var btnRollDice = document.getElementById('btnRollDice');
  var btnHold = document.getElementById('btnHold');

  var Player = function Player(name, score) {
    _classCallCheck(this, Player);

    this.name = name;
    this.score = score;
  };

  var Game =
  /*#__PURE__*/
  function () {
    function Game(player1, player2) {
      _classCallCheck(this, Game);

      this.player1 = player1;
      this.player2 = player2;
      this.currentPlayer = player1;
      this.dice = new Dice();
      this.score = 0;
      this.isGameOver = false;
    }

    _createClass(Game, [{
      key: "newGame",
      value: function newGame() {
        this.player1.score = 0;
        this.player2.score = 0;
        this.currentPlayer = this.player1;
        this.dice.reset();
        this.score = 0;
        this.isGameOver = false;
      }
    }, {
      key: "rollDice",
      value: function rollDice() {
        this.dice.roll();
        this.score += this.dice.getValue();
        console.log("".concat(this.currentPlayer.name, " rolled ").concat(this.dice.getValue()));
      }
    }, {
      key: "hold",
      value: function hold() {
        this.currentPlayer.score += this.score;
        this.score = 0;
        console.log("".concat(this.currentPlayer.name, " holds ").concat(this.score));
        this.nextPlayer();
      }
    }, {
      key: "nextPlayer",
      value: function nextPlayer() {
        if (this.currentPlayer === this.player1) {
          this.currentPlayer = this.player2;
        } else {
          this.currentPlayer = this.player1;
        }
      }
    }, {
      key: "isGameOver",
      value: function isGameOver() {
        if (this.player1.score >= 100 || this.player2.score >= 100) {
          this.isGameOver = true;
          alert("".concat(this.getWinner().name, " wins!"));
        }
      }
    }, {
      key: "getWinner",
      value: function getWinner() {
        if (this.player1.score >= 100) {
          return this.player1;
        } else {
          return this.player2;
        }
      }
    }]);

    return Game;
  }();

  var Dice =
  /*#__PURE__*/
  function () {
    function Dice() {
      _classCallCheck(this, Dice);

      this.value = 0;
    }

    _createClass(Dice, [{
      key: "roll",
      value: function roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
      }
    }, {
      key: "getValue",
      value: function getValue() {
        return this.value;
      }
    }, {
      key: "reset",
      value: function reset() {
        this.value = 0;
      }
    }]);

    return Dice;
  }();

  var game = new Game(new Player('Player 1', 0), new Player('Player 2', 0));
  btnNewGame.addEventListener('click', function () {
    game.newGame();
    updateUI();
  });
  btnRollDice.addEventListener('click', function () {
    game.rollDice();
    updateUI();
    game.getWinner();
  });
  btnHold.addEventListener('click', function () {
    game.hold();
    updateUI();
    game.isGameOver();
  });

  function updateUI() {
    document.getElementById('player1Score').innerHTML = game.player1.score;
    document.getElementById('player2Score').innerHTML = game.player2.score;
    document.getElementById('currentPlayer').innerHTML = game.currentPlayer.name;
    document.getElementById('currentScore').innerHTML = game.score;
    document.getElementById('dice').innerHTML = game.dice.getValue();
  }
});