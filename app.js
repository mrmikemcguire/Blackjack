// All this boilerplate is here so that you can put app.js in the top of your
// html. The $(document).ready() ensures that your code won't run until
// everything is done downloading. The reason you do this is so that the
// browser car start downloading your JS at the start of the page load rather
// than waiting to get it at the very end of the page load (putting it at the
// bottom means it will wait to for everything before it to finish downloading
// first).
!(function (document)
    {
    $(document).ready(function ()
    {
    // Put what you would have previously put in script.js in here.
    var game = new Game();
    var $startButton = $("#start-button");

    // This is your entry point. On the first turn, your dealer can deal cards
    // or shuffle the deck, etc.
    $startButton.click(function (e)
    {
    alert("Game started");
    game.turn();
    });
    });
    }(document));
