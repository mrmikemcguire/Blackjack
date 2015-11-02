
Dealer = (function ()
    {
    var Dealer = function (id, chips)
        {
        Player.call(this, id, chips);
        this.type = "dealer";
        }

    // This is basically boilerplate to create the right inheritance stuff.
    Dealer.prototype = Object.create(Player.prototype);
    Dealer.prototype.constructor = Dealer;

    var methods =
        {
        deal: function (player, deck, table)
            {
            var card = deck.shift();
            player.hand.push(card);
            table.addCard(card, player);

            return this;
            }
         };

    for (var method in methods) {
      if (methods.hasOwnProperty(method)) {
        Dealer.prototype[method] = methods[method];
      }
    }

    return Dealer;
    })();
