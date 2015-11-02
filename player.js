Player = (function ()
    {
    var Player = function (id, chips)
        {
        this.id = id;
        this.chips = chips;
        this.hand = [];
        this.type = "player";
        }

    Player.prototype =
        {
        validate: function(chips)
            {
            return this;
            },

        check: function()
            {
            // logic

            return this;
            },

        pointCount: function()
            {
            var sum = 0;

            for (var i = 0; i < this.length; i++)
                {
                sum += this.hand[i].value;
                }
            return sum;
            },

        chips: function(chips)
            {
            if (chips !== undefined)
              {
              this.chips = chips;
              }
            return this.chips;
            },
        };

    return Player;
    })();
