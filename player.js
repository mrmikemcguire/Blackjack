Player = (function ()
    {
    var Player = function (id, points)
        {
        this.id = id;
        this.points = points;
        this.hand = [];
        this.type = "player";
        }

    Player.prototype = {
        greet: function ()
            {
            console.log("Hi, I'm " + this.name);
            return this;
            },

        validate: function (points)
            {

            return this; // almost always return 'this' so you can chain methods like Player.bet(10).check();
            },

        check: function ()
            {
            // logic

            return this;
            },

        points: function (points)
            {
            if (points !== undefined)
              {
              this.points = points;
              }
            return this.points; // here we don't return this because it would be unexpected
            },
    };

    return Player;
    })();
