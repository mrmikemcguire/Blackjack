Table = (function ()
    {
    var Table = function (selector)
        {
        this.$board = $(selector);
        }

    Table.prototype = {
        // This is really what you were asking about.
        // Basically, you pass it the card object that the dealer got 'off the top
        // of the deck' with deck.shift(). You also pass it a player instance so
        // that you can get the player's id and use it as an HTML class. Finally,
        // you can append the completed card to the table. Since you gave it an id
        // as a class, your CSS can put the cards in the right place based on the
        // id, say class 0 is the top left, 1 the top right, etc.
        addCard: function (card, player)
            {
            var $card = this.createCard(card);
            $card.addClass(player.id);
            $card.addClass(player.type + "-card");

            this.$board.append($card);

            return this;
            },

        createCard: function (card)
            {
            $card = $('<img>');
            $card.attr("id", card.id);
            $card.attr("src", card.face);
            return $card;
            }
    };

    return Table;
    })();
