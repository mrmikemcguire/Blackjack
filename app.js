!function (document) {
    $(document).ready(function () {
        var game = new Game();
        var $startButton = $("#start-button");

        $hitMeButton = $('#hit');
        $standButton = $('#stand');

        $startButton.click(function (e) {
            shuffle(deck);
            $('#sound')[0].play();
            game.turn();
        });

        $hitMeButton.on(function (e) {
          alert("Hit me!");
          game.turn("hit");
        });

        $standButton.on(function (e) {
          alert("I'm good.");
          game.turn("stand");
        });
    });
}(document);

function shuffle(array)
    {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
