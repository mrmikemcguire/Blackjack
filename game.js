Game = (function () {
  var Game = function (options) {
    if (options === undefined) {
      options = {
        table: ".table",
        numPlayers: "2",
        deck: deck,
        startingPoints: 1000
      };
    }

    this.table = new Table(options.table);
    this.deck = options.deck;
    this.dealer = new Dealer(0, options.startingPoints);
    this.players = [this.dealer];
    for (var p = 1; p <= options.numPlayers; p++) {
      this.players[p] = new Player(p, options.startingPoints);
    }
    this.curPid = 1;
  };

  Game.prototype = {
    // Do all your turn based stuff here
    turn: function () {
      var userChoice;

      // prompt user to hit or stay or bet. If this.curPid = 0, do something
      // like userChoice = this.dealer.dealerLogic(this) and put your AI logic
      // in there. Passing 'this' to it will pass the dealer the full context
      // of the game.
      userChoice = "hit"

      switch (userChoice) {
        case "hit":
          this.dealer.deal(this.players[this.curPid], this.deck, this.table);
          break;
          // more options
      }

      // rotate the current player
      if (this.curPid < this.players.length) { this.curPid++; }
      else { this.curPid = 0; }
      // ^ this is really a non-standard coding style, but I make it my personal
      // battle to get it adopted for short if/elses :P
    }
  };

  return Game;
})();
