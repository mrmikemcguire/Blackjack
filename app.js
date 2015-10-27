
!(function (document)
    {
    $(document).ready(function ()
    {
    // Put what you would have previously put in script.js in here.
    var game = new Game();
    var $startButton = $("#start-button");

    $startButton.click(function (e)
        {
        shuffle(deck);
        $('#sound')[0].play();
        game.turn();
        });
    });
    }(document));
