// Dealer "inherits" from Player (inheritance in JS is a fuzzy thing).
Dealer = (function ()
    {
    var Dealer = function (id, points)
        {
        // Parent constructor
        Player.call(this, id, points);
        this.type = "dealer";
        }

    // This is basically boilerplate to create the right inheritance stuff.
    Dealer.prototype = Object.create(Player.prototype);
    Dealer.prototype.constructor = Dealer;

    Dealer.prototype = {
        deal: function (player, deck, table)
            {
            card = deck.unshift();
            player.hand.push(card);
            table.addCard(card, player);

            return this;
            }
    };

    return Dealer;
    })();
