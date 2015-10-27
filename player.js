Player = (function ()
    {
    var Player = function (id, wager)
        {
        this.id = id;
        this.wager = wager;
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

            return this; // almost always return 'this' so you can chain methods like Player.bet(10).check();
            },

        check: function ()
            {
            // logic

            return this;
            },

        wager: function (wager)
            {
            if (wager !== undefined)
              {
              this.wager = wager;
              }
            return this.wager; // here we don't return this because it would be unexpected
            },
    };

    return Player;
    })();
