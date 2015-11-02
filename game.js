Game = (function () {
    var Game = function (options) {
        if (options === undefined) {
            options = {
                table: '#table',
                numPlayers: '2',
                deck: deck,
                startingAmount: 1000,
                startingCards: 2
            };
        }

        this.table = new Table(options.table);
        this.deck = options.deck;
        this.dealer = new Dealer(0, options.startingAmount);
        this.players = [this.dealer];
        for (var p = 1; p <= options.numPlayers; p++) {
            this.players[p] = new Player(p, options.startingAmount);
            for (var count = 0; count < options.startingCards; count++) {
                this.dealer.deal(this.players[p], this.deck, this.table);
            }
        }
        $('#dealerScore').text('The dealer shows ' + this.players[0].pointCount());
        $('#playerScore').text('The player shows ' + this.players[1].pointCount());
        this.curPid = 1;
    };

    Game.prototype =
    {
        turn: function (userChoice) {
            switch (userChoice) {
                case "hit":
                    this.dealer.deal(this.players[this.curPid], this.deck, this.table);

                    if (this.players[this.curPid].pointCount() > 21) {
                        alert("Busted!");
                    }
                    break;
                case "stand":
                    if (this.curPid < this.players.length) {
                        this.curPid++;
                    }
                    else {
                        this.curPid = 0;
                        this.dealer.takeTurn(this);
                        // In takeTurn, you could inspect the state of the game
                        // (passed in above) and from within the dealer, call
                        // game.turn(/* your dealers choice */);
                    }
            }
        }
    };
    return Game;
}) ();
