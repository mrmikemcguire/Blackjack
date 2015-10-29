
Dealer = (function ()
    {
    var Dealer = function (id, chips)
        {
        // Parent constructor
        Player.call(this, id, chips);
        this.type = "dealer";
        }

    // This is basically boilerplate to create the right inheritance stuff.
    Dealer.prototype = Object.create(Player.prototype);
    Dealer.prototype.constructor = Dealer;

    Dealer.prototype = {
        deal: function (player, deck, table)
            {
            var card = deck.shift();
            player.hand.push(card);
            dealer.addCard(card, player);

            return this;
            }
    };

    return Dealer;
    })();
