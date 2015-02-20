function RPS() {};

function Rock() {
	this.symbol = "Rock";
	this.wonBySymbol = "Scissors";
};

function Paper() {
	this.symbol = "Paper";
	this.wonBySymbol = "Rock";
};

function Scissors() {
	this.symbol = "Scissors";
	this.wonBySymbol = "Paper";
};

RPS.prototype.compareSymbol = function(symbolOne, symbolTwo) {
	if (symbolOne.symbol === symbolTwo.symbol) return 'draw'; 
	if (symbolOne.wonBySymbol === symbolTwo.symbol) return symbolOne;
	else return symbolTwo;
};