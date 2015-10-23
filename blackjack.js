shuffle(deck);
$('#sound')[0].play();
var dealerHand = new Array();
var playerHand = new Array();

$('#deal').on('click',function()
{
    for(var i = 0; i < 2; i++)
        {
        dealerHand.push(deck[0]);
        deck.splice(0, 1);
        playerHand.push(deck[0]);
        deck.splice(0, 1);
        }

    var card = "<img src='images/classic-cards/redVertFull.png'>";
    var $dealerCards = $('#dealerCards');
    $dealerCards.append(card);
    var cardObj = $dealerCards.children().get(0);
    var dealerCardFace = dealerHand[0].face;
    $(cardObj).attr('src', dealerCardFace);
    $(cardObj).attr('data-card', JSON.stringify(dealerHand[0]));
    dealerCardValue = dealerHand[0].value;

});

$('#hit').on('click', function hit()
    {
    alert("Hit me, Baby!");
    });

$('#stand').on('click', function stand()
    {
    alert("I'm good!");
    });

function shuffle(array)
    {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    while (0 !== currentIndex)
    {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
    };

function check()
    {
    if (total < 17)
        {
        deal(dealTarget);
        check();
        }
    else if (total > 21)
        {
        winner = player;
        }
    else
        {
        return total;
        }
    }

function choose()
    {
    if (hit)
        {
        deal(player);
        check();
        choose();
        }
    else
        {
        check();
        switchDealTarget();
        return total;
        }
    }


