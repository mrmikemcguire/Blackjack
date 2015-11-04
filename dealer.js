
Dealer = (function ()
    {
    var Dealer = function (id, chips)
        {
        Player.call(this, id, chips);
        this.type = "dealer";
        }

    Dealer.prototype = Object.create(Player.prototype);
    Dealer.prototype.constructor = Dealer;

    var methods =
        {
        deal: function (player, deck, table)
            {
            var card = deck.shift();
            var isFirst = (player.hand.length === 0);
            player.hand.push(card);
            table.addCard(card, player, isFirst);

            return this;
            }
         };

    for (var method in methods)
        {
        if (methods.hasOwnProperty(method))
            {
            Dealer.prototype[method] = methods[method];
            }
        }

    return Dealer;
    })();
