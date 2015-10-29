Player = (function ()
    {
    var Player = function (id, chips)
        {
        this.id = id;
        this.chips = chips;
        this.hand = [];
        this.type = "player";
        }

    Player.prototype = {
        greet: function ()
            {
            console.log("Hi, I'm " + this.name);
            return this;
            },

        validate: function (wager)
            {
              // is wager < this.chips?

            return this; // almost always return 'this' so you can chain methods like Player.bet(10).check();
            },

        check: function ()
            {
            // logic

            return this;
            },

        pointCount = function () {
          var sum = 0;

          for (var i = 0; i < this.length; i++) {
            sum += this.hand[i].value;
          }

          return sum;
        },

        chips: function (chips)
            {
            if (chips !== undefined)
              {
              this.chips = chips;
              }
            return this.chips; // here we don't return this because it would be unexpected
            },
    };

    return Player;
    })();
