Game = (function ()
    {
    var Game = function (options)
        {
        if (options === undefined)
            {
            options = {
                table: '#table',
                numPlayers: '2',
                deck: deck,
                startingAmount: 1000
            };
            }

        this.table = new Table(options.table);
        this.deck = options.deck;
        this.dealer = new Dealer(0, options.startingAmount);
        this.players = [this.dealer];
        for (var p = 1; p <= options.numPlayers; p++)
            {
            this.players[p] = new Player(p, options.startingAmount);
            }
        this.curPid = 1;
        };

    Game.prototype = {
        // Do all your turn based stuff here
        turn: function (userChoice)
            {
            if (this.turnCount === 0) {
              for (var p in this.players) {
                this.dealer.deal(this.players[p]...).deal(...);
              }
            }

            switch (userChoice)
            {
              case "hit":
                this.dealer.deal(this.players[this.curPid], this.deck, this.table);
                if (this.players[this.curPid].pointCount() > 21) {
                  // some logic
                }
                break;
                // This will eventually end up in the hit() function below
              case "stand":
                // rotate the current player
                if (this.curPid < this.players.length)
                  {
                    this.curPid++;
                  }
                else
                  {
                    this.curPid = 0;
                    // here is where I would call something like:
                    this.dealer.takeTurn(this);
                    // In takeTurn, you could inspect the state of the game
                    // (passed in above) and from within the dealer, call
                    // game.turn(/* your dealers choice */);
                  }
            }
            }

    };

    return Game;
    })();
