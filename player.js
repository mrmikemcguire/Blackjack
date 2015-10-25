Player = (function () {
  var Player = function (id, points) {
    this.id = id;
    this.points = points;
    this.hand = [];
    this.type = "player";
  }

  Player.prototype = {
    greet: function () {
      console.log("Hi, I'm " + this.name);
      return this;
    },

    bet: function (points) {
      // validate bet, e.g. does that player have enough to bet.
      return this; // almost always return 'this' so you can chain methods like Player.bet(10).check();
    },

    check: function () {
      // logic

      return this;
    },

    // Player.points()
    // Returns the number of points a player has.
    // Player.points(points)
    // Set the player's points to the given amount and returns the number of points.
    points: function (points) {
      if (points !== undefined) this.points = points;
      return this.points; // here we don't return this because it would be unexpected
    },
  };

  return Player;
})();
