shuffle(deck);
$('#sound')[0].play();

function cardAlert (clickEvent) 
	{
  	var $card, data;
  	$card = $(clickEvent.target);
  	data = $card.data('card');
//  	alert(data.rank + " of " + data.suit);
    $card.addClass('played');
    $card.removeClass('in-d-hand');
    $card.removeClass('in-p-hand');
    $card.css('left', discardLocation);
	}

$('#deal').on("click", function()
        {
        var card = "<img src='images/classic-cards/redVertFull.png'>";
        var table = $('#table');
        var dealerHand = new Array();
        var playerHand = new Array();
    
        for(var i = 0; i < 2; i++)
            {
            dealerHand.push(deck[0]);
            deck.splice(0, 1);
            playerHand.push(deck[0]);
            deck.splice(0, 1);
            }
    
        var newLeft = 140;
        for(var i = 0; i < 2; i++)
            {
            $('#table').append(card);
            var cardObj = table.children().get(i); 
            $(cardObj).addClass('card');
            $(cardObj).addClass('in-d-hand');
            var dealerCardFace = dealerHand[i].face;
            $(cardObj).attr('src', dealerCardFace);
            $(cardObj).attr('data-card', JSON.stringify(dealerHand[i]));
            dealerCardValue = dealerHand[i].value;
            $(cardObj).css('left', newLeft);
            $(cardObj).click(cardAlert);
            newLeft += 12;
            }
        newLeft = 140;
        var counter = 0;
        for(var j = 2; j < 4; j++)
            {
            $('#table').append(card);
            var cardObj = table.children().get(j); 
            $(cardObj).addClass('card');
            $(cardObj).addClass('in-p-hand');
            var playerCardFace = playerHand[counter].face;
            $(cardObj).attr('src', playerCardFace);
            $(cardObj).attr('data-card', JSON.stringify(playerHand[counter]));
            playerCardValue = playerHand[counter].value;
            $(cardObj).css('left', newLeft);
            $(cardObj).click(cardAlert);
            counter++;
            newLeft += 12;
            }
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
	}
