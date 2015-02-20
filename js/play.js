var rockPaperScissors = new RPS(),
    sym = {rock: new Rock, paper: new Paper, scissors: new Scissors},
    computerSymbol = null,
    yourSymbol = null,
	computerSelected,
	whoIsWinner,
	youSelected;
	

computerSelected = function() {
	var symbols = [new Rock,  new Paper, new Scissors];
	computerSymbol = symbols[Math.floor(Math.random()* symbols.length)];
	return computerSymbol;
};

whoIsWinner = function(result) {
	if(result === "draw") {
	    $('h2').text("Well, it's a " + (result) + ". Play again!");
	} else if(result === yourSymbol) {
	    $('h2').text("You won this game!");
	} else {
	    $('h2').text("Computer won this game!");
	}
};

youSelected = function(choice) {
	yourSymbol = sym[$(choice).data('symbol')];
	return yourSymbol;
};

$('img').on('click', function() {
	whoIsWinner(rockPaperScissors.compareSymbol(youSelected(this), computerSelected()));
	$(".selection").text("You have selected " + (yourSymbol.symbol)+" and Computer has selected " + (computerSymbol.symbol));	
});

