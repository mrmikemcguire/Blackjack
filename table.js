var newLeft = 90;

Table = (function ()
    {
    var Table = function (selector)
        {
        this.$board = $(selector);
        }

    Table.prototype =
        {
        addCard: function (card, player, isFirst)
            {
            var $card = this.createCard(card);
            $card.addClass("Hand" + player.id);
            //$card.addClass("card");
            if (isFirst)
                {
                $card.addClass('first');
                }
            this.$board.append($card);
            return this;
            },

        createCard: function (card)
            {
            $card = $('<img />');
            $card.attr("id", card.id);
            $card.attr("src", card.face);
            return $card;
            }
        };

    return Table;
    })();
